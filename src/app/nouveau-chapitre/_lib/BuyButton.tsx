"use client";

import { useTransition } from "react";
import { createLancementCheckout } from "./actions";

/** Bouton d'achat unique de la page : même texte partout, va au checkout Stripe. */
export default function BuyButton({ large = false }: { large?: boolean }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => createLancementCheckout())}
      disabled={pending}
      className={`cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 font-bold tracking-tight text-navy-950 disabled:opacity-60 ${
        large
          ? "px-10 py-5 text-lg sm:px-14 sm:py-6 sm:text-xl"
          : "px-9 py-4 text-base sm:text-lg"
      }`}
    >
      {pending ? "Redirection vers le paiement..." : "Rejoindre Agencilab à -70%"}
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
