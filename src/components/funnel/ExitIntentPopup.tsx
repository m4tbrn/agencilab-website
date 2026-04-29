"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const COOLDOWN_MS = 1500; // évite les déclenchements multiples lors d'un même mouvement

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(false);
  const lastFiredRef = useRef(0);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Desktop : sortie de la souris par le haut du viewport
  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (isOpenRef.current) return;
      if (Date.now() - lastFiredRef.current < COOLDOWN_MS) return;
      if (e.clientY <= 0 && e.relatedTarget === null) {
        lastFiredRef.current = Date.now();
        setIsOpen(true);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  // Mobile : interception du bouton retour (back-button trap)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouch) return;

    let fired = false;
    history.pushState({ exitTrap: true }, "");

    const onPopState = () => {
      if (fired) return;
      if (isOpenRef.current) return;
      if (Date.now() - lastFiredRef.current < COOLDOWN_MS) return;
      fired = true;
      lastFiredRef.current = Date.now();
      setIsOpen(true);
      // Pas de re-push : si l'user re-tape "retour" après avoir fermé le popup, il part normalement
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
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

        {/* Chat triste dans un cercle */}
        <div className="mb-5 flex justify-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/10 bg-navy-800 sm:h-32 sm:w-32">
            <Image
              src="/images/chat-triste.png"
              alt=""
              fill
              className="object-cover"
              sizes="128px"
              priority
            />
          </div>
        </div>

        <h3 className="mb-3 text-[1.5rem] font-bold leading-[1.2] text-white md:text-[1.75rem]">
          Attends&nbsp;! Tu nous quittes{" "}
          <span className="gradient-text">déjà&nbsp;?</span>
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
