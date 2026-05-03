"use client";

import { WhatsappLogo } from "@phosphor-icons/react";

const WHATSAPP_BASE = "https://wa.me/33684080455";

const TEMPLATE = `Salut Pierre 👋

Prénom :
Âge :
Ma situation actuelle (mon job, ce que je cherche, où j'en suis) : `;

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
        Réponse sous 2-4h · 100% gratuit
      </p>
    </div>
  );
}
