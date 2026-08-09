"use client";

import { useTransition } from "react";
import { createLancement5xCheckout } from "./actions";

/** Option paiement en 5 fois, affichée sous le bouton principal du bloc offre. */
export default function Buy5xButton() {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => createLancement5xCheckout())}
      disabled={pending}
      className="mt-3 text-[0.9375rem] font-semibold tracking-tight text-white/70 underline decoration-gold-400/60 underline-offset-4 transition hover:text-white disabled:opacity-60"
    >
      {pending
        ? "Redirection vers le paiement..."
        : "ou en 5 fois : 5 x 239€"}
    </button>
  );
}
