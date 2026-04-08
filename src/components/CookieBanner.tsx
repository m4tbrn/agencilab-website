"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-4 left-0 right-0 z-40 border-t border-white/5 bg-navy-950/95 p-4 backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-sm sm:rounded-2xl sm:border">
      <p className="text-sm leading-relaxed text-white/60">
        Ce site utilise des cookies pour améliorer ton expérience et mesurer les performances.
      </p>
      <div className="mt-3 flex gap-3">
        <button
          onClick={accept}
          className="rounded-lg bg-gold-400 px-4 py-2 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-300"
        >
          Accepter
        </button>
        <button
          onClick={refuse}
          className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-all hover:text-white"
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
