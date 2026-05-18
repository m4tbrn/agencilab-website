"use client";

import type { ReactNode } from "react";

/**
 * Bouton qui ouvre la popup One Time Offer (<OffreOto />) via l'événement
 * window `oto:open`. À utiliser pour tous les CTA d'achat de la page offre.
 */
export default function OtoButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("oto:open"))}
      className={className}
    >
      {children}
    </button>
  );
}
