"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const COOLDOWN_MS = 1500;
const PIERRE_WA = "/message-pierre";

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const isOpenRef = useRef(false);
  const dismissedRef = useRef(false);
  const lastFiredRef = useRef(0);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);
  useEffect(() => {
    dismissedRef.current = dismissed;
  }, [dismissed]);

  // Desktop : sortie de la souris par le haut du viewport
  useEffect(() => {
    if (dismissed) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (isOpenRef.current) return;
      if (Date.now() - lastFiredRef.current < COOLDOWN_MS) return;
      if (e.clientY <= 0) {
        lastFiredRef.current = Date.now();
        setIsOpen(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  // Mobile : interception du bouton retour (back-button trap)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouch) return;

    let fired = false;
    history.pushState({ exitTrap: true }, "");

    const onPopState = () => {
      if (fired) return;
      if (dismissedRef.current) return;
      if (isOpenRef.current) return;
      if (Date.now() - lastFiredRef.current < COOLDOWN_MS) return;
      fired = true;
      lastFiredRef.current = Date.now();
      setIsOpen(true);
      // Pas de re-push : prochaine pression "retour" laisse partir l'user
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    setDismissed(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop flouté */}
      <div
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-md"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg animate-[fadeInScale_0.3s_ease-out] overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-2xl">
        {/* Close button */}
        <button
          onClick={close}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 sm:p-10 text-center">
          <div className="mb-6 flex justify-center -translate-x-6">
            <Image
              src="/images/chat-triste.png"
              alt=""
              width={260}
              height={260}
              className="mx-auto"
            />
          </div>

          <h3 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Attends, tu pars déjà ?
          </h3>
          <p className="mx-auto mb-8 max-w-sm text-base leading-relaxed text-white/50">
            Tu es à un appel de découvrir comment générer
            <span className="font-medium text-white"> 1 500 à 3 000€/mois </span>
            à côté de ton emploi.
            <br />
            Et tu dis non ? Alors que c&apos;est gratuit et sans engagement.
          </p>

          <a
            href="#rejoindre"
            onClick={close}
            className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-8 py-4 text-base font-bold tracking-tight text-navy-950 sm:text-lg"
          >
            Réserver mon appel gratuit
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* CTA secondaire — page Pierre fast-lane (avec template à copier) */}
          <a
            href={PIERRE_WA}
            onClick={close}
            className="mt-3 block w-full rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-[0.9375rem] font-semibold tracking-tight text-white/80 transition-all hover:border-accent-400/40 hover:bg-accent-400/10 hover:text-white"
          >
            Je suis pressé, je préfère envoyer un message à l&apos;équipe d&apos;Agencilab
          </a>
          <p className="mt-2 text-[0.75rem] text-white/40">
            Réponse sous 2-4h · 100% gratuit
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
