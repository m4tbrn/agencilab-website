"use client";

import { useEffect, useState, useTransition } from "react";
import { CheckCircle, X } from "@phosphor-icons/react/dist/ssr";
import { createLancementCheckout, createLancement5xCheckout } from "./actions";
import { PRIX_NORMAL, PRIX_PROMO } from "./config";

/** Événement custom déclenché par tous les boutons d'achat de la page. */
export const OUVRIR_OFFRE = "ouvrir-offre-popup";

export function ouvrirOffre() {
  window.dispatchEvent(new Event(OUVRIR_OFFRE));
}

export default function OffrePopup() {
  const [ouvert, setOuvert] = useState(false);
  const [pending, startTransition] = useTransition();
  const [choix, setChoix] = useState<"1x" | "5x" | null>(null);

  useEffect(() => {
    const open = () => setOuvert(true);
    window.addEventListener(OUVRIR_OFFRE, open);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOuvert(false);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener(OUVRIR_OFFRE, open);
      window.removeEventListener("keydown", esc);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = ouvert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ouvert]);

  if (!ouvert) return null;

  const lancer = (mode: "1x" | "5x") => {
    setChoix(mode);
    startTransition(() =>
      mode === "1x" ? createLancementCheckout() : createLancement5xCheckout(),
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-navy-950/85 p-4 backdrop-blur-sm">
      <div className="animate-gold-gradient relative w-full max-w-[640px] rounded-3xl p-[2px] shadow-[0_12px_60px_rgba(255,122,0,0.35)]">
        <div className="rounded-[22px] bg-navy-950 px-5 py-8 sm:px-8 sm:py-10">
          <button
            onClick={() => setOuvert(false)}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
          >
            <X size={18} weight="bold" />
          </button>

          <div className="text-center">
            <span className="mb-3 inline-block rounded-full border border-gold-400/40 bg-gold-400/15 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-gold-400">
              Offre exclusive
            </span>
            <h2 className="text-[clamp(1.25rem,3.5vw,1.75rem)] font-bold leading-[1.2] tracking-tight text-white">
              Comment veux-tu régler ?
            </h2>
            <p className="mx-auto mt-2 max-w-[420px] text-[0.9375rem] text-white/60">
              Les deux options donnent exactement le même accès à
              l&apos;incubateur.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {/* Comptant */}
            <button
              onClick={() => lancer("1x")}
              disabled={pending}
              className="group flex flex-col rounded-2xl border-2 border-gold-400 bg-gold-400/10 p-5 text-left transition hover:bg-gold-400/20 disabled:opacity-60"
            >
              <span className="flex items-center gap-2">
                <span className="text-[0.6875rem] font-bold uppercase tracking-wide text-gold-400">
                  En une fois
                </span>
                <span className="rounded-md bg-gold-400 px-1.5 py-0.5 text-[0.6875rem] font-extrabold leading-none text-navy-950">
                  -72%
                </span>
              </span>
              <span className="mt-2 text-[1.75rem] font-extrabold tracking-tight text-white">
                {PRIX_PROMO}
              </span>
              <span className="mt-1 text-[0.8125rem] text-white/50">
                au lieu de{" "}
                <span className="line-through">{PRIX_NORMAL}</span>
              </span>
              <span className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gold-400 px-4 py-2.5 text-[0.9375rem] font-bold text-navy-950">
                {pending && choix === "1x" ? "Redirection..." : "Payer en une fois"}
              </span>
            </button>

            {/* 5 fois */}
            <button
              onClick={() => lancer("5x")}
              disabled={pending}
              className="group flex flex-col rounded-2xl border-2 border-white/15 bg-white/[0.03] p-5 text-left transition hover:border-white/30 hover:bg-white/[0.06] disabled:opacity-60"
            >
              <span className="flex items-center gap-2">
                <span className="text-[0.6875rem] font-bold uppercase tracking-wide text-white/50">
                  En 5 fois
                </span>
                <span className="rounded-md bg-white/15 px-1.5 py-0.5 text-[0.6875rem] font-extrabold leading-none text-white/80">
                  -67%
                </span>
              </span>
              <span className="mt-2 text-[1.75rem] font-extrabold tracking-tight text-white">
                5 x 239€
              </span>
              <span className="mt-1 text-[0.8125rem] text-white/50">
                soit 1 195€ au total
              </span>
              <span className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-[0.9375rem] font-bold text-white">
                {pending && choix === "5x" ? "Redirection..." : "Payer en 5 fois"}
              </span>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.8125rem] text-white/45">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle size={16} weight="fill" className="text-accent-400" />
              Paiement sécurisé
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle size={16} weight="fill" className="text-accent-400" />
              Accès immédiat
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle size={16} weight="fill" className="text-accent-400" />
              Garantie
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
