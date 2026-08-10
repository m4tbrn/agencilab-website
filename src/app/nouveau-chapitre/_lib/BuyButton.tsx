"use client";

import { ouvrirOffre } from "./OffrePopup";

/**
 * Bouton d'achat unique de la page : ouvre la popup de choix du mode de
 * paiement (une fois ou 5 fois) plutôt que d'envoyer directement au comptant.
 */
export default function BuyButton({
  large = false,
  label = "Rejoindre Agencilab à -72%",
}: {
  large?: boolean;
  label?: string;
}) {
  return (
    <button
      onClick={ouvrirOffre}
      className={`cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 font-bold tracking-tight text-navy-950 ${
        large
          ? "px-10 py-5 text-lg sm:px-14 sm:py-6 sm:text-xl"
          : "px-9 py-4 text-base sm:text-lg"
      }`}
    >
      {label}
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
  );
}
