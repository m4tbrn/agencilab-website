"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const TALLY_SRC = "https://tally.so/widgets/embed.js";

export default function TallyPopup({
  trigger = "#capture",
  tallySrc,
  title,
}: {
  trigger?: string;
  tallySrc: string;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest(`a[href="${trigger}"]`);
      if (el) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [trigger]);

  // Charge le script Tally au mount (pas lazy au clic) pour que l'iframe
  // soit prête instantanément quand l'user clique sur le CTA.
  useEffect(() => {
    const load = () => {
      if (typeof window !== "undefined" && window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    const existing = document.querySelector(`script[src="${TALLY_SRC}"]`);
    if (existing) {
      load();
      return;
    }
    const s = document.createElement("script");
    s.src = TALLY_SRC;
    s.async = true;
    s.onload = load;
    s.onerror = load;
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-y-auto transition-opacity duration-200 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Background — même DA que l'opt-in (navy + orbs + grid) */}
      <div
        className="absolute inset-0 bg-navy-950"
        onClick={() => setIsOpen(false)}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute left-[80%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="fixed top-5 left-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Fermer"
      >
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 1L13 13M13 1L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="relative z-10 w-full max-w-[720px] mx-auto px-4 md:px-6 py-16 md:py-20">
        {/* Indicateur durée — réduit la friction d'engagement */}
        <div className="mb-5 flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent-400/30 bg-accent-400/10 px-5 py-2.5 text-[0.9375rem] font-semibold text-accent-400 backdrop-blur-sm md:text-[1.0625rem] md:px-6 md:py-3">
            <span className="text-lg md:text-xl">⏱</span>
            <span>
              <span className="font-bold">15 sec</span>{" "}
              <span className="text-white/70">·</span>{" "}
              <span className="text-white/70">Quelques questions rapides</span>
            </span>
          </div>
        </div>

        {/* Wrapper avec loader skeleton derrière l'iframe — visible le temps
            que le formulaire Tally se charge. L'iframe a un fond transparent,
            donc le loader apparaît tant que l'iframe ne render pas. */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-white/40">
              <svg
                className="h-8 w-8 animate-spin text-accent-400"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span className="text-[0.8125rem]">Chargement du formulaire…</span>
            </div>
          </div>
          <iframe
            src={tallySrc}
            loading="eager"
            width="100%"
            height={600}
            title={title}
            className="relative block w-full bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
