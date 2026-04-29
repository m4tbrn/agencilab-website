"use client";

import { useEffect, useState } from "react";

const DEFAULT_DELAY_MS = 18 * 60 * 1000;

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// Bootstrap du helper Vidalytics (idempotent)
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

export default function IClosedReveal({
  url,
  title,
  delayMs = DEFAULT_DELAY_MS,
  vslId,
  revealAfterSeconds,
}: {
  url: string;
  title: string;
  /** Wall-clock fallback (utilisé si pas de vslId) */
  delayMs?: number;
  /** ID Vidalytics — active la sync VSL via la vraie API */
  vslId?: string;
  /** Reveal après X secondes de visionnage (default = delayMs / 1000) */
  revealAfterSeconds?: number;
}) {
  const [remainingMs, setRemainingMs] = useState(delayMs);
  const [revealed, setRevealed] = useState(false);
  const [reservations, setReservations] = useState<number | null>(null);

  // ===== MODE 1 : Sync avec la VSL Vidalytics (vraie API) =====
  useEffect(() => {
    if (typeof window === "undefined") return;
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
      console.log("[VSL Sync] ▶ play");
      isPlaying = true;
      lastTickAt = Date.now();
    };
    const onPause = () => {
      console.log("[VSL Sync] ⏸ pause/ended");
      isPlaying = false;
    };

    // Récupère le player via la vraie API Vidalytics
    const getPlayer = ensureVidalyticsHelper();
    getPlayer(EMBED_ID)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((player: any) => {
        if (!player) {
          console.warn("[VSL Sync] Player non disponible");
          return;
        }
        playerRef = player;
        console.log("[VSL Sync] ✓ Player ready, binding events");
        player.on("play", onPlay);
        player.on("pause", onPause);
        player.on("ended", onPause);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((e: any) => console.warn("[VSL Sync] getVidalyticsPlayer failed", e));

    // Tick d'accumulation
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
          console.warn("[VSL Sync] off failed", e);
        }
      }
    };
  }, [vslId, revealAfterSeconds, delayMs]);

  // ===== MODE 2 : Wall-clock fallback (si pas de vslId) =====
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (vslId) return;

    const storageKey = `iclosed_reveal_v2:${url}`;
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
  }, [delayMs, url, vslId]);

  // Quand le bloc iClosed apparaît :
  // 1) signal global pour couper l'ExitIntent popup (utilisateur engagé)
  // 2) intercepte les messages `scrollIntoView` qu'iClosed envoie à widget.js
  //    quand l'iframe grandit — sans ça, le widget fait un window.scrollTo
  //    smooth qui jette le user en bas de page à chaque step.
  // Le MutationObserver de widget.js (chargé dans layout.tsx) détecte
  // la nouvelle `.iclosed-widget` div automatiquement, pas besoin de réinjecter.
  useEffect(() => {
    if (!revealed) return;
    if (typeof window === "undefined") return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__agencilabIClosedRevealed = true;
    window.dispatchEvent(new CustomEvent("agencilab:iclosed-revealed"));

    const ICLOSED_ORIGINS = [
      "https://app.iclosed.io",
      "https://stage.iclosed.io",
      "https://dev.iclosed.io",
    ];
    const blockAutoScroll = (event: MessageEvent) => {
      if (!ICLOSED_ORIGINS.includes(event.origin)) return;
      if (event?.data?.type === "scrollIntoView") {
        event.stopImmediatePropagation();
      }
    };
    window.addEventListener("message", blockAutoScroll);
    return () => {
      window.removeEventListener("message", blockAutoScroll);
    };
  }, [revealed]);

  // Compteur de réservations
  useEffect(() => {
    if (!revealed) return;
    const MAX_RESERVATIONS = 27;
    setReservations(11 + Math.floor(Math.random() * 10));
    const scheduleBump = () => {
      const delay = 180000 + Math.random() * 240000;
      return setTimeout(() => {
        setReservations((c) => {
          if (c === null) return c;
          if (c >= MAX_RESERVATIONS) return c;
          return c + 1;
        });
        timeout = scheduleBump();
      }, delay);
    };
    let timeout = scheduleBump();
    return () => clearTimeout(timeout);
  }, [revealed]);

  if (revealed) {
    return (
      <div id="rdv" className="mt-10 scroll-mt-20 -mx-6 md:mx-0">
        <div className="bg-[#131316] rounded-none md:rounded-3xl px-5 md:px-10 py-10 md:py-14 text-center text-white">
          <div className="mb-6 text-center">
            <p className="text-white font-semibold text-[0.9375rem] md:text-[1rem]">
              🔥{" "}
              <strong className="text-[#FF7A00] font-extrabold">
                {reservations ?? "—"} personnes
              </strong>{" "}
              ont réservé leur appel aujourd&apos;hui
            </p>
            <p className="mt-1.5 text-[0.8125rem] italic text-white/50">
              (Regarde s&apos;il reste des disponibilités)
            </p>
          </div>
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.15] mb-5"
            style={{ color: "#ffffff" }}
          >
            Tu as encore des questions ?
          </h2>
          <p className="text-[1rem] md:text-[1.0625rem] text-white/90 leading-[1.5] max-w-[720px] md:max-w-none mx-auto mb-4 md:whitespace-nowrap">
            Je mets à ta disposition pendant 45 minutes un de mes conseillers pour répondre à toutes tes questions.
          </p>
          <div className="font-600 text-white mb-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[0.9375rem] md:text-[1rem]">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#a3e635] font-700">✓</span> 100% gratuit
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#a3e635] font-700">✓</span> Sans engagement
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#a3e635] font-700">✓</span> Réponse personnalisée
            </span>
          </div>
          <div className="max-w-[720px] mx-auto mb-6 p-5 md:p-6 rounded-2xl border border-[#ef4444]/40 bg-[#ef4444]/5 text-left">
            <p className="text-[0.9375rem] md:text-[1rem] text-white font-500 leading-[1.55]">
              <span className="mr-1">⚠️</span>
              Certes, l&apos;accès à l&apos;accompagnement est bien{" "}
              <strong>moins cher que les 50 000€ d&apos;une école de commerce</strong>{" "}
              mais représente tout de même un investissement de{" "}
              <strong className="text-[#ef4444]">plusieurs milliers d&apos;euros</strong>.
            </p>
          </div>

          <p className="text-[1rem] md:text-[1.0625rem] text-white/90 mb-4">
            👇🏼 Il te suffit de choisir un créneau juste ici 👇🏼
          </p>

          <div
            className="iclosed-widget w-full"
            data-url={url}
            data-title={title}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    );
  }

  return (
    <p className="text-center text-[1.125rem] md:text-[1.25rem] text-white mt-10 leading-[1.4] font-medium">
      Reste bien jusqu&apos;à la fin, une surprise apparaîtra ici dans{" "}
      <span
        className="text-[#015FFF] tabular-nums text-[1.375rem] md:text-[1.5rem]"
        style={{ fontWeight: 800 }}
      >
        {formatTime(remainingMs)}
      </span>
    </p>
  );
}
