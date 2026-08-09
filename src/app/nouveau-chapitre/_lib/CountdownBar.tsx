"use client";

import { useEffect, useState } from "react";
import { LANCEMENT_FIN } from "./config";

function reste() {
  const diff = new Date(LANCEMENT_FIN).getTime() - Date.now();
  if (diff <= 0) return { h: 0, m: 0, s: 0, fini: true };
  return {
    h: Math.floor(diff / 3_600_000),
    m: Math.floor((diff % 3_600_000) / 60_000),
    s: Math.floor((diff % 60_000) / 1000),
    fini: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

function Unite({ valeur, label }: { valeur: string; label: string }) {
  return (
    <span className="flex items-baseline gap-1 rounded-lg bg-navy-950/25 px-2 py-0.5">
      <span className="text-[0.9375rem] font-extrabold tabular-nums leading-none sm:text-base">
        {valeur}
      </span>
      <span className="text-[0.5625rem] font-bold uppercase leading-none opacity-70">
        {label}
      </span>
    </span>
  );
}

/** Barre sticky en haut de page : offre -70% + compte à rebours réel. */
export default function CountdownBar() {
  const [t, setT] = useState<ReturnType<typeof reste> | null>(null);

  useEffect(() => {
    setT(reste());
    const id = setInterval(() => setT(reste()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="animate-gold-gradient sticky top-0 z-50 w-full text-navy-950 shadow-[0_4px_24px_rgba(255,122,0,0.35)]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 sm:gap-x-4">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy-950 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-navy-950" />
          </span>
          <span className="text-[0.6875rem] font-extrabold uppercase tracking-[0.14em] sm:text-[0.75rem]">
            Offre exclusive · -70%
          </span>
        </span>

        {t === null ? (
          <span className="text-[0.8125rem] font-bold sm:text-sm">
            48h seulement
          </span>
        ) : t.fini ? (
          <span className="text-[0.8125rem] font-bold sm:text-sm">
            L&apos;offre est terminée
          </span>
        ) : (
          <span className="flex items-center gap-1.5">
            <span className="text-[0.75rem] font-semibold opacity-80 sm:text-[0.8125rem]">
              Fin dans
            </span>
            <Unite valeur={pad(t.h)} label="h" />
            <Unite valeur={pad(t.m)} label="min" />
            <Unite valeur={pad(t.s)} label="sec" />
          </span>
        )}
      </div>
    </div>
  );
}
