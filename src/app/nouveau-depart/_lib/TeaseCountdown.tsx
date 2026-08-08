"use client";

import { useEffect, useState } from "react";
import { LANCEMENT_OUVERTURE } from "@/app/nouveau-chapitre/_lib/config";

function reste() {
  const diff = new Date(LANCEMENT_OUVERTURE).getTime() - Date.now();
  if (diff <= 0) return { j: 0, h: 0, m: 0, s: 0, ouvert: true };
  return {
    j: Math.floor(diff / 86_400_000),
    h: Math.floor((diff % 86_400_000) / 3_600_000),
    m: Math.floor((diff % 3_600_000) / 60_000),
    s: Math.floor((diff % 60_000) / 1000),
    ouvert: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

function Bloc({ valeur, label }: { valeur: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card w-[72px] rounded-2xl py-4 text-center sm:w-[96px] sm:py-5">
        <span className="text-[2rem] font-extrabold tabular-nums tracking-tight text-white sm:text-[2.75rem]">
          {valeur}
        </span>
      </div>
      <span className="mt-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/40 sm:text-[0.75rem]">
        {label}
      </span>
    </div>
  );
}

/** Gros compte à rebours vers l'ouverture des portes. */
export default function TeaseCountdown() {
  const [t, setT] = useState<ReturnType<typeof reste> | null>(null);

  useEffect(() => {
    setT(reste());
    const id = setInterval(() => setT(reste()), 1000);
    return () => clearInterval(id);
  }, []);

  if (t === null) {
    return <div className="h-[120px] sm:h-[140px]" aria-hidden />;
  }

  if (t.ouvert) {
    return (
      <a
        href="/nouveau-chapitre"
        className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-10 py-5 text-lg font-bold tracking-tight text-navy-950 sm:px-14 sm:py-6 sm:text-xl"
      >
        C&apos;est ouvert, accéder à l&apos;offre
      </a>
    );
  }

  return (
    <div className="flex items-start justify-center gap-2 sm:gap-4">
      <Bloc valeur={pad(t.j)} label="Jours" />
      <span className="mt-4 text-[1.5rem] font-bold text-white/30 sm:mt-5 sm:text-[2rem]">:</span>
      <Bloc valeur={pad(t.h)} label="Heures" />
      <span className="mt-4 text-[1.5rem] font-bold text-white/30 sm:mt-5 sm:text-[2rem]">:</span>
      <Bloc valeur={pad(t.m)} label="Minutes" />
      <span className="mt-4 text-[1.5rem] font-bold text-white/30 sm:mt-5 sm:text-[2rem]">:</span>
      <Bloc valeur={pad(t.s)} label="Secondes" />
    </div>
  );
}
