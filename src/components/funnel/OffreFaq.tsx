"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react/dist/ssr";

/**
 * FAQ de la page offre — gestion des objections pour un trafic Meta froid
 * qui achète en direct (sans appel).
 */

const QUESTIONS = [
  {
    q: "Combien de temps avant mon premier client ?",
    a: "En moyenne, nos membres signent leur premier client en 52 jours. Certains vont plus vite (dès les premières semaines), d'autres prennent un peu plus de temps. Tout dépend du rythme que tu y mets, mais la méthode est conçue pour aller vite.",
  },
  {
    q: "Je n'y connais rien en marketing, c'est un problème ?",
    a: "Non, au contraire. La méthode est faite pour partir de zéro : on t'apprend ta première compétence pas à pas, accélérée par l'IA. La majorité de nos membres n'avaient aucune base au départ.",
  },
  {
    q: "J'ai déjà un emploi, je n'ai pas beaucoup de temps.",
    a: "45 minutes par jour suffisent pour démarrer. Tout est pensé pour se construire en parallèle de ton travail, à ton rythme, sans que tu aies à poser de congés ou à prendre de risque.",
  },
  {
    q: "Comment j'annule si ça ne me convient pas ?",
    a: "C'est sans engagement. Tu peux arrêter ton abonnement quand tu veux, en un clic, sans justification et sans frais. Tu ne prends aucun risque.",
  },
  {
    q: "En quoi c'est différent d'une formation classique ?",
    a: "Tu n'es jamais seul devant des vidéos. Tu as des coachings de groupe chaque semaine, une communauté de +1 018 membres, le Système Agencilab (process et outils prêts à l'emploi) et un appel bilan offert avec un conseiller. C'est un accompagnement, pas un cours.",
  },
  {
    q: "Est-ce que le marché n'est pas déjà saturé ?",
    a: "Non. Il y a 4 millions d'entreprises en France, et 80% n'ont aucune stratégie marketing. La demande dépasse largement le nombre de personnes capables d'y répondre. C'est le bon moment.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[0.9375rem] font-bold tracking-tight text-white md:text-[1.0625rem]">
          {q}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-400 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          <Plus size={15} weight="bold" />
        </span>
      </button>
      {open && (
        <p className="px-5 pb-5 text-[0.875rem] leading-[1.65] text-white/65 md:text-[0.9375rem]">
          {a}
        </p>
      )}
    </div>
  );
}

export default function OffreFaq() {
  return (
    <section className="mt-14 md:mt-20">
      <div className="mx-auto mb-8 max-w-[760px] text-center md:mb-10">
        <span className="mb-3 inline-block text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent-400 md:text-[0.8125rem]">
          Questions fréquentes
        </span>
        <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.18] tracking-tight text-white">
          Tout ce que tu te demandes{" "}
          <span className="gradient-text">avant de commencer</span>
        </h2>
      </div>
      <div className="mx-auto max-w-[760px] space-y-2.5">
        {QUESTIONS.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}
