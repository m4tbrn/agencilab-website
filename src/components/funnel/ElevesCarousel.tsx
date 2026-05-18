"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowDown, CheckCircle } from "@phosphor-icons/react/dist/ssr";

/**
 * Carrousel d'élèves à scroll manuel + boucle infinie.
 * L'utilisateur scrolle lui-même (molette, trackpad, glisser) ; la liste est
 * triplée et la position recentrée en continu pour que la boucle soit invisible.
 */

type Eleve = {
  photo: string;
  nom: string;
  meta: string;
  avant: string;
  apres: string;
};

/** Élèves mis en avant — situations tirées des bilans (vault Obsidian). */
const ELEVES: Eleve[] = [
  {
    photo: "/images/visages/damien.jpg",
    nom: "Damien",
    meta: "Sète · ex-paysagiste",
    avant: "8 ans paysagiste, 40 à 50h par semaine pour 2 000€/mois.",
    apres:
      "12 clients en Growth Marketing. Il gagne en une journée ce qu'il faisait en un mois.",
  },
  {
    photo: "/images/visages/benjamin.jpg",
    nom: "Benjamin",
    meta: "Vannes · ex-chauffeur routier",
    avant: "Des journées entières sur la route, loin de chez lui.",
    apres: "3 000€/mois grâce au Growth Marketing, depuis son ordinateur.",
  },
  {
    photo: "/images/visages/stephanie.jpg",
    nom: "Stéphanie",
    meta: "Enseignante · maman de 3 enfants",
    avant:
      "Un emploi prenant, un quotidien serré entre le travail et les enfants.",
    apres:
      "Un mindset transformé et un nouveau rapport à l'argent qui ont changé son quotidien.",
  },
  {
    photo: "/images/visages/william.jpg",
    nom: "William",
    meta: "48 ans · sorti d'un burn-out",
    avant: "Une carrière à reconstruire après un burn-out, à 48 ans.",
    apres:
      "Expatrié au Vietnam, il a relancé sa vie grâce au Growth Marketing.",
  },
  {
    photo: "/images/visages/florent.jpg",
    nom: "Florent",
    meta: "24 ans · ex-boulanger",
    avant: "Boulanger depuis l'armée, aucune base en entrepreneuriat.",
    apres: "3 500€ générés en 3 semaines avec ses premiers contrats.",
  },
  {
    photo: "/images/visages/kylian.jpg",
    nom: "Kylian",
    meta: "parti de zéro en vente",
    avant: "Aucune compétence en vente, ni en marketing, au départ.",
    apres:
      "4 clients signés en un mois et demi : 3 avocats et son coach sportif.",
  },
  {
    photo: "/images/visages/clement.jpg",
    nom: "Clément",
    meta: "salarié plafonné",
    avant: "Salarié à 3 000€/mois, sans perspective d'évolution.",
    apres:
      "Il a appliqué les compétences Agencilab et doublé son salaire en 6 mois.",
  },
  {
    photo: "/images/visages/barthelemy.jpg",
    nom: "Barthélémy",
    meta: "ex-ouvrier",
    avant: "Usine, maraîcher, boucherie, bûcheron. 5 ans à galérer.",
    apres: "Installé en Andorre, il est passé de la caravane à un 300m².",
  },
  {
    photo: "/images/visages/marina.jpg",
    nom: "Marina",
    meta: "Lausanne · maman de 2 enfants",
    avant:
      "Mère célibataire, séparée, elle voulait une vie plus libre pour ses enfants.",
    apres:
      "Un mindset et un rapport à l'argent transformés, elle avance enfin vers ses objectifs.",
  },
  {
    photo: "/images/visages/leo.jpg",
    nom: "Léo",
    meta: "Bruxelles · ex-salarié",
    avant: "Salarié, il voulait sortir du salariat sans prendre de risque.",
    apres:
      "Ses 2 premiers clients signés en Growth Marketing, toujours en poste.",
  },
  {
    photo: "/images/visages/solene.jpg",
    nom: "Solène",
    meta: "étudiante en médecine",
    avant:
      "3e année de médecine, un métier qui ne lui correspondait pas.",
    apres:
      "3 clients en création de sites web, en parallèle de ses études.",
  },
  {
    photo: "/images/visages/arthur.jpg",
    nom: "Arthur",
    meta: "Lille",
    avant: "Il cherchait à se construire une activité qui lui ressemble.",
    apres:
      "Il dirige aujourd'hui sa propre agence de publicité en Growth Marketing.",
  },
  {
    photo: "/images/visages/dimitri.jpg",
    nom: "Dimitri",
    meta: "Toulouse · ex-alternant",
    avant: "En alternance en BTS, sans perspective qui l'enthousiasmait.",
    apres:
      "2 000€/mois avec son activité de Growth Marketer.",
  },
  {
    photo: "/images/visages/julien.jpg",
    nom: "Julien",
    meta: "ex-cuisinier",
    avant:
      "Études en cuisine, perdu, il refusait de travailler toute sa vie pour quelqu'un.",
    apres: "Il s'est lancé à son compte grâce au Growth Marketing.",
  },
];

function EleveCard({ e }: { e: Eleve }) {
  return (
    <div className="flex w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d11]">
      {/* Photo — grande, pour mettre l'humain en avant */}
      <div className="relative h-52 w-full">
        <Image
          src={e.photo}
          alt={e.nom}
          fill
          className="object-cover object-center"
          sizes="300px"
          draggable={false}
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0d0d11] via-[#0d0d11]/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-[1.125rem] font-bold tracking-tight text-white">
            {e.nom}
          </p>
          <p className="text-[0.8125rem] text-white/55">{e.meta}</p>
        </div>
      </div>

      {/* Body — transformation */}
      <div className="flex flex-1 flex-col p-4">
        {/* Avant */}
        <div className="rounded-xl bg-white/[0.03] p-3">
          <p className="mb-1 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-red-400/80">
            Avant
          </p>
          <p className="text-[0.8125rem] leading-[1.5] text-white/55">
            {e.avant}
          </p>
        </div>

        {/* Connecteur */}
        <div className="flex justify-center py-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-400">
            <ArrowDown size={13} weight="bold" />
          </span>
        </div>

        {/* Aujourd'hui */}
        <div className="flex-1 rounded-xl border border-[#a3e635]/25 bg-[#a3e635]/[0.07] p-3">
          <p className="mb-1 flex items-center gap-1 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-[#a3e635]">
            <CheckCircle size={11} weight="fill" />
            Aujourd&apos;hui
          </p>
          <p className="text-[0.8125rem] leading-[1.5] text-white">
            {e.apres}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ElevesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  // État du glisser-déposer à la souris
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  // Recentre la position sur la copie du milieu pour une boucle invisible.
  const recenter = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const third = el.scrollWidth / 3;
    if (el.scrollLeft < third * 0.5) {
      el.scrollLeft += third;
    } else if (el.scrollLeft > third * 1.5) {
      el.scrollLeft -= third;
    }
  }, []);

  // Position initiale : début de la copie du milieu.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / 3;
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  return (
    <div className="relative -mx-6 md:mx-0">
      {/* Dégradés de fondu sur les bords */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-navy-950 to-transparent md:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-navy-950 to-transparent md:w-16" />

      <div
        ref={trackRef}
        onScroll={recenter}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="flex cursor-grab gap-4 overflow-x-auto px-6 pb-2 select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {[...ELEVES, ...ELEVES, ...ELEVES].map((e, i) => (
          <EleveCard key={`${e.nom}-${i}`} e={e} />
        ))}
      </div>
    </div>
  );
}
