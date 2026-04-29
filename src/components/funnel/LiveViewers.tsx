"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "live_viewers_count";
const FRESH_WINDOW_MS = 90 * 1000; // si l'écriture date de < 90s, on garde la valeur

type StoredViewers = { count: number; ts: number };

function readStored(): StoredViewers | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredViewers;
    if (
      typeof parsed?.count === "number" &&
      typeof parsed?.ts === "number" &&
      Number.isFinite(parsed.count) &&
      Number.isFinite(parsed.ts)
    ) {
      return parsed;
    }
  } catch {
    // ignore
  }
  return null;
}

function writeStored(count: number) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ count, ts: Date.now() }),
    );
  } catch {
    // ignore (mode privé etc.)
  }
}

export default function LiveViewers({
  inline = false,
  variant = "default",
}: {
  inline?: boolean;
  variant?: "default" | "overlay";
}) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // 1. Initialise — réutilise la valeur stockée si elle est encore fraîche
    const stored = readStored();
    let initial: number;
    if (stored && Date.now() - stored.ts < FRESH_WINDOW_MS) {
      initial = stored.count;
    } else {
      initial = 23 + Math.floor(Math.random() * 25);
      writeStored(initial);
    }
    setCount(initial);

    // 2. Drift naturel : -3 à +1 (légère pente descendante pour
    //    contrebalancer les +1 déclenchés par les opt-ins)
    const tick = () => {
      setCount((c) => {
        if (c === null) return c;
        const delta = Math.floor(Math.random() * 5) - 3; // -3..+1
        const next = Math.max(18, Math.min(72, c + delta));
        writeStored(next);
        return next;
      });
    };

    const schedule = () => {
      const delay = 20000 + Math.random() * 20000;
      return setTimeout(() => {
        tick();
        timer = schedule();
      }, delay);
    };

    let timer = schedule();

    // 3. Quand une notif "X vient de s'inscrire" tombe, on bump +1
    const onOptIn = () => {
      setCount((c) => {
        if (c === null) return c;
        const next = Math.max(18, Math.min(72, c + 1));
        writeStored(next);
        return next;
      });
    };
    window.addEventListener("agencilab:opt-in", onOptIn);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("agencilab:opt-in", onOptIn);
    };
  }, []);

  if (count === null) return null;

  if (variant === "overlay") {
    // Badge compact pour overlay sur image (style YouTube live)
    return (
      <div className="inline-flex items-center gap-1.5 rounded-md bg-black/75 px-2.5 py-1.5 backdrop-blur-sm">
        <span className="inline-flex items-center gap-1 text-[0.6875rem] font-bold uppercase tracking-wider text-[#ef4444]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ef4444] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ef4444]" />
          </span>
          LIVE
        </span>
        <span className="text-[0.75rem] font-semibold text-white">
          {count} regardent en ce moment
        </span>
      </div>
    );
  }

  const wrapperClass = inline
    ? "flex justify-center"
    : "mb-8 flex justify-center";

  return (
    <div className={wrapperClass}>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ef4444] opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
        </span>
        <span className="text-[0.875rem] text-white/80 md:text-[0.9375rem]">
          <strong className="font-bold text-white">{count} personnes</strong> regardent la vidéo en ce moment
        </span>
      </div>
    </div>
  );
}
