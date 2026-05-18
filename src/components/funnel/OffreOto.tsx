"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  CheckCircle,
  Star,
  X,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { createCheckoutSession } from "@/app/rejoindre-cash-cow-express/_lib/actions";

/**
 * Popup One Time Offer — upsell vers la formule annuelle.
 * S'ouvre sur l'événement window `oto:open` (déclenché par les CTA de la page).
 * Le choix mène directement au checkout Stripe du plan correspondant.
 */
export default function OffreOto() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("oto:open", handler);
    return () => window.removeEventListener("oto:open", handler);
  }, []);

  // Signale l'état d'ouverture (pour désactiver l'exit popup pendant l'OTO).
  useEffect(() => {
    (window as unknown as { __otoOpen?: boolean }).__otoOpen = open;
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-sm">
      <div
        className="animate-slide-up relative my-auto w-full max-w-[480px] overflow-hidden rounded-3xl border-2 border-gold-400/40 bg-gradient-to-b from-[#1a1a22] to-[#0c0c10] p-6 md:p-8"
        style={{ boxShadow: "0 0 90px rgba(255, 122, 0, 0.25)" }}
      >
        {/* Liseré doré en haut */}
        <div
          className="absolute left-1/2 top-0 h-[3px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          style={{ boxShadow: "0 0 16px rgba(255, 122, 0, 0.7)" }}
          aria-hidden
        />
        {/* La croix continue avec la formule mensuelle (checkout Stripe 179€/mois). */}
        <form
          action={createCheckoutSession.bind(null, "mensuel")}
          className="absolute right-4 top-4"
        >
          <button
            type="submit"
            aria-label="Continuer avec la formule mensuelle"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:text-white"
          >
            <X size={15} weight="bold" />
          </button>
        </form>

        {/* En-tête */}
        <div className="text-center">
          <h2 className="text-[1.5rem] font-extrabold leading-[1.15] tracking-tight text-white md:text-[1.75rem]">
            Attends, j&apos;ai une offre unique pour toi.
          </h2>
          <p className="mx-auto mt-2.5 max-w-[380px] text-[0.9375rem] leading-[1.55] text-white/70">
            En passant à l&apos;abonnement annuel, tu économises{" "}
            <strong className="text-[#a3e635]">54%</strong>, soit{" "}
            <strong className="text-white">1 151€</strong>.
          </p>
        </div>

        {/* Le calcul */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-navy-950/50 p-4 md:p-5">
          <div className="flex items-center justify-between">
            <span className="text-[0.875rem] text-white/55">
              Au mois, sur 1 an
            </span>
            <span className="text-[1rem] font-bold text-white/45 line-through decoration-red-500/70 decoration-2">
              2 148€
            </span>
          </div>
          <div className="my-3 h-px w-full bg-white/10" />
          <div className="flex items-center justify-between">
            <span className="text-[0.875rem] font-semibold text-white">
              À l&apos;année
            </span>
            <span className="text-[1.75rem] font-extrabold leading-none tracking-tight">
              <span className="gradient-text">997€</span>
            </span>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#a3e635]/35 bg-[#a3e635]/10 py-2.5">
            <CheckCircle size={16} weight="fill" className="text-[#a3e635]" />
            <span className="text-[0.9375rem] font-bold text-white">
              Tu économises{" "}
              <span className="text-[#a3e635]">54% · 1 151€</span>
            </span>
          </div>
        </div>

        {/* Bonus — appel personnalisé avec Louis */}
        <div
          className="mt-3 rounded-2xl border border-gold-400/40 bg-gold-400/10 p-4"
          style={{ boxShadow: "0 0 30px rgba(255, 122, 0, 0.12)" }}
        >
          <p className="mb-2.5 inline-flex items-center gap-1.5 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-gold-400">
            <Star size={11} weight="fill" />
            Bonus offert
          </p>
          <div className="flex gap-3.5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-gold-400/30">
              <Image
                src="/images/team/louis-esquier.jpg"
                alt="Louis Esquier"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[0.9375rem] font-bold leading-[1.35] text-white">
                Je t&apos;offre un appel personnalisé avec moi
              </p>
              <p className="mt-1 text-[0.8125rem] leading-[1.5] text-white/70">
                Un appel en tête-à-tête avec moi, où je t&apos;aide là où tu
                bloques et à signer ton premier client plus vite.
              </p>
            </div>
          </div>
        </div>

        {/* Choix — chaque bouton ouvre le checkout Stripe correspondant */}
        <div className="mt-6 space-y-2.5">
          <form action={createCheckoutSession.bind(null, "annuel")}>
            <button
              type="submit"
              className="cta-button glow-gold flex w-full items-center justify-center gap-2 rounded-xl bg-gold-400 px-6 py-4 text-[0.9375rem] font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30"
            >
              Oui ! Je passe à l&apos;annuel et j&apos;économise 1 151€
              <ArrowRight size={17} weight="bold" />
            </button>
          </form>
          <form action={createCheckoutSession.bind(null, "mensuel")}>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] px-6 py-3.5 text-[0.875rem] font-bold tracking-tight text-white transition-colors hover:border-white/35 hover:bg-white/[0.08]"
            >
              Non merci, je reste au mensuel (179€/mois)
            </button>
          </form>
        </div>

        <p className="mt-2 text-center text-[0.6875rem] text-white/35">
          Cette offre n&apos;apparaît qu&apos;une seule fois.
        </p>
      </div>
    </div>
  );
}
