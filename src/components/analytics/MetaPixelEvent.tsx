"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Déclenche un event Meta Pixel standard à l'arrivée sur la page (au mount).
 *
 * Usage simple · `<MetaPixelEvent event="Lead" />`
 * Avec garde · `<MetaPixelEvent event="Lead" requireParam="src=tally" />`
 *   → ne fire QUE si l'URL contient `?src=tally` (ou n'importe quel `key=value`).
 *
 * Le composant déduplique automatiquement par session (sessionStorage) ·
 * un même event ne peut être firé qu'UNE fois par onglet, même après refresh
 * ou navigation client-side.
 *
 * Le PageView est géré séparément par le script root layout.
 */
export default function MetaPixelEvent({
  event,
  requireParam,
}: {
  event: string;
  /**
   * Si défini, le composant ne fire l'event que si l'URL contient ce param.
   * Format `"key=value"` (ex `"src=tally"`) ou `"key"` (juste la présence
   * du param, peu importe la valeur).
   */
  requireParam?: string;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Garde URL · si requireParam est défini, check l'URL.
    if (requireParam) {
      const params = new URLSearchParams(window.location.search);
      const [key, value] = requireParam.split("=");
      const actual = params.get(key);
      if (actual === null) return;
      if (value !== undefined && actual !== value) return;
    }

    // 2. Dédup par session · 1 event firé max par onglet · même clé.
    const dedupKey = `mpx:${event}:${requireParam || "*"}`;
    try {
      if (window.sessionStorage.getItem(dedupKey) === "1") return;
      window.sessionStorage.setItem(dedupKey, "1");
    } catch {
      // sessionStorage peut être bloqué · on tire quand même
    }

    // 3. fbq peut ne pas être chargé au montage · on retry ~10 s max.
    let cancelled = false;
    let tries = 0;

    const fire = () => {
      if (cancelled) return;
      if (typeof window.fbq === "function") {
        window.fbq("track", event);
        return;
      }
      if (tries++ < 50) {
        setTimeout(fire, 200);
      }
    };

    fire();
    return () => {
      cancelled = true;
    };
  }, [event, requireParam]);

  return null;
}
