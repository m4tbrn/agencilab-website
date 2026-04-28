"use client";

import { useEffect, useRef, useState } from "react";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (fired.current) return;
      if (e.clientY <= 0 && e.relatedTarget === null) {
        fired.current = true;
        setIsOpen(true);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative z-10 w-full max-w-[520px] rounded-3xl border border-white/10 bg-navy-900/95 p-8 text-center shadow-2xl backdrop-blur-xl md:p-10">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-gold-400"
          style={{ boxShadow: "0 4px 16px rgba(255, 122, 0, 0.25)" }}
        >
          <span className="h-2 w-2 rounded-full bg-gold-400" />
          Attends !
        </div>

        <h3 className="mb-3 text-[1.5rem] font-bold leading-[1.2] text-white md:text-[1.75rem]">
          Le documentaire est{" "}
          <span className="gradient-text">100% gratuit</span>
        </h3>
        <p className="mb-6 text-[0.9375rem] leading-[1.5] text-white/60">
          Ne pars pas sans découvrir comment générer +3 500€/mois en parallèle de ton emploi grâce à une activité méconnue.
        </p>

        <a
          href="#capture"
          onClick={() => setIsOpen(false)}
          className="cta-button glow-gold inline-flex items-center justify-center gap-3 rounded-xl bg-gold-400 px-8 py-3.5 text-[0.9375rem] font-bold tracking-tight text-navy-950"
        >
          Oui, je veux le documentaire
        </a>

        <p className="mt-4 text-[0.75rem] text-white/40">
          Accès immédiat &middot; Aucune carte requise
        </p>
      </div>
    </div>
  );
}
