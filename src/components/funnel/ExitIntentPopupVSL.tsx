"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const COOLDOWN_MS = 1500;
// Lien direct WhatsApp avec le numéro de Pierre — bypass /message-pierre
// pour shortcut maximal sur l'exit intent (l'utilisateur veut partir : un clic = WA ouvert)
const PIERRE_URL = "https://wa.me/33684080455";

export default function ExitIntentPopupVSL() {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(false);
  const lastFiredRef = useRef(0);
  const disabledRef = useRef(false);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Coupe le popup dès que le bloc iClosed est révélé : l'utilisateur
  // est arrivé jusqu'à la prise de RDV, plus besoin de le retenir.
  useEffect(() => {
    if (typeof window === "undefined") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).__agencilabIClosedRevealed) {
      disabledRef.current = true;
      setIsOpen(false);
      return;
    }
    const onRevealed = () => {
      disabledRef.current = true;
      setIsOpen(false);
    };
    window.addEventListener("agencilab:iclosed-revealed", onRevealed);
    return () => window.removeEventListener("agencilab:iclosed-revealed", onRevealed);
  }, []);

  // Desktop : sortie de la souris par le haut du viewport
  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (disabledRef.current) return;
      if (isOpenRef.current) return;
      if (Date.now() - lastFiredRef.current < COOLDOWN_MS) return;
      if (e.clientY <= 0 && e.relatedTarget === null) {
        lastFiredRef.current = Date.now();
        setIsOpen(true);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  // Mobile : interception du bouton retour (back-button trap)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouch) return;

    let fired = false;
    history.pushState({ exitTrap: true }, "");

    const onPopState = () => {
      if (fired) return;
      if (disabledRef.current) return;
      if (isOpenRef.current) return;
      if (Date.now() - lastFiredRef.current < COOLDOWN_MS) return;
      fired = true;
      lastFiredRef.current = Date.now();
      setIsOpen(true);
      // Pas de re-push : prochaine pression "retour" laisse partir l'user
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative z-10 w-full max-w-[560px] rounded-3xl border border-white/10 bg-navy-900/95 p-8 text-center shadow-2xl backdrop-blur-xl md:max-w-[720px] md:p-10">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Chat triste */}
        <div className="mb-5 flex justify-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/10 bg-navy-800 sm:h-28 sm:w-28">
            <Image
              src="/images/chat-triste.png"
              alt=""
              fill
              className="object-cover"
              sizes="112px"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h3 className="mb-3 text-[1.5rem] font-bold leading-[1.2] text-white md:whitespace-nowrap md:text-[1.75rem]">
          Stop&nbsp;! Tu vas manquer{" "}
          <span className="gradient-text">la meilleure partie</span>
        </h3>

        {/* Body */}
        <p className="mb-7 text-[0.9375rem] leading-[1.55] text-white/70 md:text-[1rem]">
          Le passage le plus important arrive dans quelques minutes. C&apos;est
          là que je révèle la méthode complète pour démarrer cette activité et
          gagner +3&apos;500€/mois dans 90j. Reste encore un peu, ça vaut le coup.
        </p>

        {/* CTA principal — rester */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
          className="cta-button glow-gold mb-3 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gold-400 px-6 py-3.5 text-base font-bold tracking-tight text-navy-950"
        >
          Je continue de regarder
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </a>

        {/* CTA secondaire — pressé (lien direct WhatsApp Pierre) */}
        <a
          href={PIERRE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-[0.9375rem] font-semibold tracking-tight text-white/80 transition-all hover:border-accent-400/40 hover:bg-accent-400/10 hover:text-white"
        >
          Je suis pressé, je préfère envoyer un message à l&apos;équipe d&apos;Agencilab
        </a>
        <p className="mt-2 text-[0.75rem] text-white/40">
          Réponse sous 24h · 100% gratuit
        </p>
      </div>
    </div>
  );
}
