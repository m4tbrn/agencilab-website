"use client";

import { useEffect, useState } from "react";
import { LANCEMENT_FIN, PRIX_NORMAL, PRIX_PROMO } from "./config";
import { ouvrirOffre } from "./OffrePopup";

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

/** Seuil de scroll à partir duquel le prix et le bouton apparaissent. */
const SEUIL = 900;

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

/**
 * Barre sticky : compte à rebours en permanence, puis l'offre (prix + bouton)
 * dès que le lecteur a dépassé la section qui explique la promotion.
 */
export default function CountdownBar() {
  const [t, setT] = useState<ReturnType<typeof reste> | null>(null);
  const [offreVisible, setOffreVisible] = useState(false);

  useEffect(() => {
    setT(reste());
    const id = setInterval(() => setT(reste()), 1000);
    const onScroll = () => setOffreVisible(window.scrollY > SEUIL);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearInterval(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Espaceur : le body du site a overflow-x hidden, qui casse position sticky.
          La barre est donc en fixed, et ce bloc réserve sa hauteur dans le flux. */}
      <div className="h-[42px] sm:h-[46px]" aria-hidden />
      <div className="animate-gold-gradient fixed inset-x-0 top-0 z-50 text-navy-950 shadow-[0_4px_24px_rgba(255,122,0,0.35)]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 sm:gap-x-4 sm:py-2.5">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy-950 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-navy-950" />
          </span>
          <span className="text-[0.6875rem] font-extrabold uppercase tracking-[0.14em] sm:text-[0.75rem]">
            Offre exclusive · -72%
          </span>
        </span>

        {t === null ? (
          <span className="text-[0.8125rem] font-bold sm:text-sm">
            Jusqu&apos;à mardi minuit
          </span>
        ) : t.fini ? (
          <span className="text-[0.8125rem] font-bold sm:text-sm">
            L&apos;offre est terminée
          </span>
        ) : (
          <span className="flex items-center gap-1.5">
            <span className="hidden text-[0.75rem] font-semibold opacity-80 sm:inline sm:text-[0.8125rem]">
              Fin dans
            </span>
            <Unite valeur={pad(t.h)} label="h" />
            <Unite valeur={pad(t.m)} label="min" />
            <Unite valeur={pad(t.s)} label="sec" />
          </span>
        )}

        {/* L'offre apparaît une fois la section "pourquoi -72%" dépassée */}
        {offreVisible && !t?.fini && (
          <span className="flex items-center gap-2 sm:gap-3">
            <span className="hidden text-[0.8125rem] font-bold sm:inline">
              {PRIX_PROMO}{" "}
              <span className="font-semibold opacity-60 line-through">
                {PRIX_NORMAL}
              </span>
            </span>
            <button
              onClick={ouvrirOffre}
              className="cta-button inline-flex items-center gap-2 rounded-lg bg-navy-950 px-4 py-1.5 text-[0.8125rem] font-bold tracking-tight text-white transition hover:bg-navy-900 sm:text-sm"
            >
              Rejoindre
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </span>
        )}
        </div>
      </div>
    </>
  );
}
