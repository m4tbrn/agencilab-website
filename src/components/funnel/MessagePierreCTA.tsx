"use client";

import { useState } from "react";
import { Check, Copy, WhatsappLogo } from "@phosphor-icons/react";

const WHATSAPP_BASE = "https://wa.me/33777786388";

const TEMPLATE = `Salut Pierre 👋

Prénom :
Âge :
Ma situation actuelle (mon job, ce que je cherche, où j'en suis) : `;

export function MessageTemplate() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(TEMPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // navigateur sans clipboard API : fallback silencieux, le user peut sélectionner manuellement
    }
  };

  return (
    <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm md:p-5">
      <div className="mb-2 flex items-center justify-between gap-3">
        <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-white/50">
          Modèle de message
        </h4>
        <button
          type="button"
          onClick={onCopy}
          aria-label="Copier le modèle"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[0.8125rem] font-semibold text-white/80 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          {copied ? (
            <>
              <Check size={14} weight="bold" className="text-[#10b981]" />
              Copié
            </>
          ) : (
            <>
              <Copy size={14} weight="bold" />
              Copier
            </>
          )}
        </button>
      </div>
      <pre className="whitespace-pre-wrap break-words font-sans text-[0.875rem] leading-[1.6] text-white/85 md:text-[0.9375rem]">
        {TEMPLATE}
      </pre>
    </div>
  );
}

export default function MessagePierreCTA() {
  const waLink = `${WHATSAPP_BASE}?text=${encodeURIComponent(TEMPLATE)}`;

  return (
    <div className="mt-8 flex flex-col items-center">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-[1rem] font-bold tracking-tight text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all hover:bg-[#1fb858] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] md:text-[1.0625rem]"
      >
        <WhatsappLogo size={22} weight="fill" className="shrink-0" />
        Envoyer un message à Pierre
      </a>
      <p className="mt-3 text-[0.8125rem] text-white/50">
        Réponse sous 24h · 100% gratuit
      </p>
    </div>
  );
}
