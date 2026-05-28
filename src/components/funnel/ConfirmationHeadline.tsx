"use client";

import { useEffect, useState } from "react";

/**
 * ConfirmationHeadline · h1 de la page de confirmation, personnalisé avec
 * le prénom du prospect transmis par iClosed dans `invitee_full_name`.
 *
 * SÉCURITÉ · si le paramètre est absent ou invalide, le titre reste exactement
 * comme avant ("Félicitations, nous sommes..."). Aucun risque de régression.
 */
export default function ConfirmationHeadline() {
  const [prenom, setPrenom] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const fullName = (params.get("invitee_full_name") || "").trim();
      if (!fullName) return;
      const first = fullName.split(/\s+/)[0];
      if (first && first.length > 1) setPrenom(first);
    } catch {
      // silencieux · fallback = pas de prénom
    }
  }, []);

  return (
    <h1 className="mb-10 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-white">
      Félicitations
      {prenom ? <span> {prenom}</span> : null}, nous sommes en train
      d&apos;analyser ta candidature à{" "}
      <span className="gradient-text">Agencilab</span>
      <span className="animate-pulse-dot text-white" style={{ animationDelay: "0ms" }}>.</span>
      <span className="animate-pulse-dot text-white" style={{ animationDelay: "200ms" }}>.</span>
      <span className="animate-pulse-dot text-white" style={{ animationDelay: "400ms" }}>.</span>
    </h1>
  );
}
