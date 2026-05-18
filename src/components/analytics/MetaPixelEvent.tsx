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
 * Usage : `<MetaPixelEvent event="Lead" />` ou `<MetaPixelEvent event="CompleteRegistration" />`.
 *
 * Le PageView est géré séparément par MetaPixelPageView au layout root.
 */
export default function MetaPixelEvent({ event }: { event: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Le pixel de base (fbq) peut ne pas encore être chargé au montage.
    // On attend qu'il soit prêt avant de déclencher l'event (retry ~10 s).
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
  }, [event]);

  return null;
}
