"use client";

import { useState, useEffect } from "react";

const CTA_LINK = "#rejoindre";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden">
      <div className="shake-btn relative">
        <a
          href={CTA_LINK}
          className="cta-button glow-gold flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-gold-400 py-3.5 text-base font-bold tracking-tight text-navy-950"
        >
          Réserver mon appel gratuit
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
          1
        </span>
      </div>
    </div>
  );
}
