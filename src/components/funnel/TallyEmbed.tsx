"use client";

import { useEffect, useRef } from "react";

const TALLY_SRC = "https://tally.so/widgets/embed.js";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export default function TallyEmbed({
  tallySrc,
  title,
  initialHeight = 400,
}: {
  tallySrc: string;
  title: string;
  initialHeight?: number;
}) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    // Forward tous les params de la page (UTMs Meta + tout autre) vers
    // l'URL Tally afin que les hidden fields Tally soient pré-remplis.
    // On NE touche PAS aux params déjà présents dans l'embed (alignLeft, dynamicHeight, etc.).
    if (typeof window !== "undefined" && iframeRef.current) {
      const pageParams = new URLSearchParams(window.location.search);
      const tallyUrl = new URL(tallySrc);

      // 1. UTM + tout autre param de la page
      pageParams.forEach((value, key) => {
        if (!tallyUrl.searchParams.has(key)) {
          tallyUrl.searchParams.set(key, value);
        }
      });

      // 2. URL complète de la submission (page + UTMs) — capturée dans un hidden
      //    field Tally nommé "page_url". Pratique pour reconstruire la source.
      if (!tallyUrl.searchParams.has("page_url")) {
        tallyUrl.searchParams.set("page_url", window.location.href);
      }
      if (!tallyUrl.searchParams.has("page_path")) {
        tallyUrl.searchParams.set("page_path", window.location.pathname);
      }
      if (!tallyUrl.searchParams.has("referrer") && document.referrer) {
        tallyUrl.searchParams.set("referrer", document.referrer);
      }

      iframeRef.current.setAttribute("data-tally-src", tallyUrl.toString());
    }

    const load = () => {
      if (typeof window !== "undefined" && window.Tally) {
        window.Tally.loadEmbeds();
        return;
      }
      // Fallback : set src manuellement si script pas dispo
      document
        .querySelectorAll<HTMLIFrameElement>(
          "iframe[data-tally-src]:not([src])"
        )
        .forEach((el) => {
          if (el.dataset.tallySrc) el.src = el.dataset.tallySrc;
        });
    };

    const existing = document.querySelector(`script[src="${TALLY_SRC}"]`);
    if (existing) {
      load();
    } else {
      const s = document.createElement("script");
      s.src = TALLY_SRC;
      s.async = true;
      s.onload = load;
      s.onerror = load;
      document.body.appendChild(s);
    }

    // Safety net : Tally envoie des postMessages quand dynamicHeight=1 est actif.
    // Si pour une raison X loadEmbeds n'attache pas le listener (script cache, etc.),
    // on l'attache nous-mêmes pour garantir le resize.
    const onMessage = (e: MessageEvent) => {
      const data = e.data;
      if (typeof data !== "string") return;
      try {
        const parsed = JSON.parse(data) as {
          event?: string;
          payload?: { height?: number };
        };
        if (parsed?.event === "Tally.FormResized" && parsed.payload?.height) {
          const iframe = iframeRef.current;
          if (iframe) iframe.style.height = `${parsed.payload.height}px`;
        }
      } catch {
        /* ignore non-JSON messages */
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      data-tally-src={tallySrc}
      loading="lazy"
      width="100%"
      height={initialHeight}
      title={title}
      className="block w-full bg-transparent"
      style={{ height: `${initialHeight}px` }}
    />
  );
}
