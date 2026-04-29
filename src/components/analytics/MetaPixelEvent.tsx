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
    if (typeof window.fbq !== "function") return;
    window.fbq("track", event);
  }, [event]);

  return null;
}
