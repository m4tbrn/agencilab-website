"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

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

          <button
            onClick={close}
            className="mt-4 block w-full text-sm text-white/30 transition-colors hover:text-white/50"
          >
            Non, gagner 1 500 à 3 500€ en plus ne m&apos;intéresse pas
          </button>
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
