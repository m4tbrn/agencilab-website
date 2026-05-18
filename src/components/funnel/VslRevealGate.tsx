"use client";

import { useEffect, useState, type ReactNode } from "react";

const DEFAULT_DELAY_MS = 18 * 60 * 1000;

// Bootstrap du helper Vidalytics (idempotent) — identique à IClosedReveal.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ensureVidalyticsHelper(): (id: string) => Promise<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.getVidalyticsPlayer === "function") return w.getVidalyticsPlayer;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (function (v: any, a: string, p: string, i: string) {
    v.getVidalyticsPlayer = (n: string) => {
      v[a] = v[a] || {};
      v[a][p] = v[a][p] || {};
      const d = (v[a][p][n] = v[a][p][n] || {});
      return new Promise((resolve) => {
        if (d[i]) return resolve(d[i]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let t: any;
        Object.defineProperty(d, i, {
          get: () => t,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          set(val: any) {
            t = val;
            resolve(val);
          },
        });
      });
    };
  })(w, "_vidalytics", "embeds", "player");

  return w.getVidalyticsPlayer;
}

/**
 * Révèle son `children` une fois la VSL regardée assez longtemps.
 * Variante générique d'IClosedReveal : aucun contenu iClosed, on affiche
 * juste une jauge de progression puis le bloc enfant (offre + checkout).
 *
 * - Avec `vslId` : sync sur le vrai temps de visionnage Vidalytics.
 * - Sans `vslId` : fallback wall-clock sur `delayMs`.
 */
export default function VslRevealGate({
  children,
  vslId,
  delayMs = DEFAULT_DELAY_MS,
  revealAfterSeconds,
  revealImmediately = false,
}: {
  children: ReactNode;
  vslId?: string;
  delayMs?: number;
  revealAfterSeconds?: number;
  revealImmediately?: boolean;
}) {
  const initialTargetMs = (revealAfterSeconds ?? delayMs / 1000) * 1000;
  const [remainingMs, setRemainingMs] = useState(initialTargetMs);
  const [revealed, setRevealed] = useState(revealImmediately);

  // ===== MODE 1 : Sync avec la VSL Vidalytics =====
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (revealImmediately) return;
    if (!vslId) return;

    const targetSec = revealAfterSeconds ?? delayMs / 1000;
    const accumKey = `vsl_watch_time:${vslId}`;
    const revealedKey = `vsl_revealed:${vslId}`;
    const EMBED_ID = `vidalytics_embed_${vslId}`;

    if (window.localStorage.getItem(revealedKey) === "true") {
      setRevealed(true);
      return;
    }

    let accumulatedMs = Number(window.localStorage.getItem(accumKey) || 0);
    if (!Number.isFinite(accumulatedMs) || accumulatedMs < 0) accumulatedMs = 0;

    if (accumulatedMs >= targetSec * 1000) {
      setRevealed(true);
      window.localStorage.setItem(revealedKey, "true");
      return;
    }

    setRemainingMs(targetSec * 1000 - accumulatedMs);

    let isPlaying = false;
    let lastTickAt = Date.now();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let playerRef: any = null;

    const onPlay = () => {
      isPlaying = true;
      lastTickAt = Date.now();
    };
    const onPause = () => {
      isPlaying = false;
    };

    const getPlayer = ensureVidalyticsHelper();
    getPlayer(EMBED_ID)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((player: any) => {
        if (!player) return;
        playerRef = player;
        player.on("play", onPlay);
        player.on("pause", onPause);
        player.on("ended", onPause);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((e: any) =>
        console.warn("[VslRevealGate] getVidalyticsPlayer failed", e),
      );

    const interval = setInterval(() => {
      if (!isPlaying) {
        lastTickAt = Date.now();
        return;
      }
      const now = Date.now();
      const delta = now - lastTickAt;
      lastTickAt = now;
      accumulatedMs += delta;
      window.localStorage.setItem(accumKey, String(accumulatedMs));

      const remaining = Math.max(0, targetSec * 1000 - accumulatedMs);
      setRemainingMs(remaining);

      if (accumulatedMs >= targetSec * 1000) {
        setRevealed(true);
        window.localStorage.setItem(revealedKey, "true");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      if (playerRef) {
        try {
          playerRef.off?.("play", onPlay);
          playerRef.off?.("pause", onPause);
          playerRef.off?.("ended", onPause);
        } catch (e) {
          console.warn("[VslRevealGate] off failed", e);
        }
      }
    };
  }, [vslId, revealAfterSeconds, delayMs, revealImmediately]);

  // ===== MODE 2 : Wall-clock fallback (si pas de vslId) =====
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (revealImmediately) return;
    if (vslId) return;

    const storageKey = `vsl_reveal_gate:${delayMs}`;
    let endTime: number;
    const stored = window.localStorage.getItem(storageKey);
    const parsed = stored ? Number(stored) : NaN;

    if (Number.isFinite(parsed) && parsed > Date.now()) {
      endTime = parsed;
    } else {
      endTime = Date.now() + delayMs;
      window.localStorage.setItem(storageKey, String(endTime));
    }

    const tick = () => {
      const remaining = endTime - Date.now();
      if (remaining <= 0) {
        setRevealed(true);
        return;
      }
      setRemainingMs(remaining);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [delayMs, vslId, revealImmediately]);

  // Signale aux autres composants (notifs sociales) que l'offre est révélée.
  useEffect(() => {
    if (!revealed) return;
    if (typeof window === "undefined") return;
    (window as unknown as { __offreRevealed?: boolean }).__offreRevealed = true;
    window.dispatchEvent(new CustomEvent("offre:revealed"));
  }, [revealed]);

  if (revealed) {
    return <div id="offre" className="scroll-mt-20">{children}</div>;
  }

  // Jauge non-linéaire : sqrt() = avance vite au début, ralentit à la fin.
  const targetMs = (revealAfterSeconds ?? delayMs / 1000) * 1000;
  const safeRemaining = Math.min(Math.max(remainingMs, 0), targetMs);
  const realProgress = Math.min(1, (targetMs - safeRemaining) / targetMs);
  const displayProgress = Math.sqrt(realProgress);
  const percent = Math.max(2, Math.min(100, displayProgress * 100));

  return (
    <div className="mt-10">
      <div className="relative mx-auto mb-5 h-3 w-full max-w-[480px] overflow-hidden rounded-full border border-white/10 bg-white/[0.06]">
        <div
          className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9533] transition-[width] duration-1000 ease-out"
          style={{
            width: `${percent}%`,
            animation: "barGlow 2.5s ease-in-out infinite",
          }}
        >
          <div
            className="absolute inset-y-0 left-0 w-1/3"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.32), transparent)",
              animation: "shimmer 2.8s linear infinite",
            }}
          />
        </div>
      </div>
      <p className="text-center text-[1rem] md:text-[1.125rem] text-white/90 leading-[1.5] font-medium">
        Reste bien jusqu&apos;à la fin,{" "}
        <span className="font-bold text-white">
          ton offre apparaîtra ici quand la jauge sera remplie
        </span>
        .
      </p>
    </div>
  );
}
