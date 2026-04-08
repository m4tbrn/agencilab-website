"use client";

import { useState, useEffect } from "react";

export default function IClosedPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href="#rejoindre"]');
      if (link) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center">
      {/* Backdrop flouté */}
      <div
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />

      {/* Retour */}
      <button
        onClick={() => setIsOpen(false)}
        className="relative z-20 mb-3 flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour
      </button>

      <p className="relative z-10 mb-2 text-sm text-white/50">
        Le calendrier peut prendre quelques secondes à s&apos;afficher
      </p>

      {/* iClosed iframe */}
      <iframe
        src="https://app.iclosed.io/e/fit-mass-formation/agencilab-site"
        title="Réserver un appel Agencilab"
        className="relative z-10 w-full"
        style={{ height: "90vh", border: "none" }}
        allow="camera; microphone"
      />
    </div>
  );
}
