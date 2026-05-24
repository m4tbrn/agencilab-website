"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  CheckCircle,
  Star,
  UsersThree,
  TrendUp,
  Medal,
  GraduationCap,
  Handshake,
  ChartLineUp,
  Sparkle,
  ShieldCheck,
  SealCheck,
  CurrencyEur,
  ArrowRight,
  Browser,
  CalendarBlank,
  Megaphone,
  ChatCircleText,
  Lightning,
  Envelope,
  Briefcase,
  CaretUp,
  CaretDown,
} from "@phosphor-icons/react/dist/ssr";
import ElevesCarousel from "@/components/funnel/ElevesCarousel";

type Offre = "incubateur" | "mentorat";

const OFFRES: Record<Offre, { label: string; prix: string; mensualite: string }> = {
  incubateur: { label: "L'Incubateur d'Agencilab", prix: "3 599€", mensualite: "6x ~600€/mois" },
  mentorat: { label: "Le Mentorat d'Agencilab", prix: "5 999€", mensualite: "6x ~1 000€/mois" },
};

const STATS = [
  { value: "+1 018", label: "personnes accompagnées", Icon: UsersThree },
  { value: "4,7/5", label: "sur Trustpilot", Icon: Star },
  { value: "+2 987€", label: "revenu moyen / mois", Icon: TrendUp },
  { value: "52 j", label: "1er client (moyenne)", Icon: Medal },
];

const COACHS = [
  { nom: "Nathan", role: "Coach Mindset & Discipline", photo: "/images/pitch/coach-nathan.png" },
  { nom: "Tino", role: "Coach Prospection & Vente", photo: "/images/pitch/coach-tino.png" },
  { nom: "Mathis", role: "Coach Marketing & IA", photo: "/images/pitch/coach-mathis.png" },
  { nom: "Louis", role: "Coach Vision & Développement", photo: "/images/pitch/coach-louis.png" },
];

const COMMUNAUTE_SHOTS = Array.from({ length: 37 }, (_, i) => `/images/pitch/communaute/${String(i + 1).padStart(2, "0")}.jpg`);

const ROADMAP = [
  {
    mois: "Mois 1",
    titre: "Fondations & première compétence",
    Icon: GraduationCap,
    phases: [
      { semaine: "Semaine 1", titre: "Mindset, organisation, setup de tes IA", resultat: "ton plan d'action perso est clair", schema: "setup-ia" as const },
      { semaine: "Semaine 2", titre: "Apprendre ta 1ère compétence : créer des sites / tunnels de vente avec l'IA", resultat: "ton premier livrable pro, prêt à vendre", schema: "site" as const },
      { semaine: "Semaines 3-4", titre: "Lancement du système de prospection Agencilab", resultat: "tes premiers rendez-vous qualifiés décrochés", schema: "prospection" as const },
    ],
  },
  {
    mois: "Mois 2",
    titre: "Premier client & livraison",
    Icon: Handshake,
    phases: [
      { semaine: "Semaine 5", titre: "Contrat avec ton premier client (1 000-2 000€)", resultat: "ton premier encaissement", virements: [{ montant: "+1 500,00 €", libelle: "Paiement reçu · création de site" }] },
      { semaine: "Semaines 6-7", titre: "Livraison du service avec l'IA", resultat: "ton client a un résultat concret", schema: "livraison" as const },
      { semaine: "Semaine 8", titre: "Bilan coach + nouvelle compétence (pub Meta/Google)", resultat: "une compétence de plus à vendre pour te créer un récurrent de 500-1 000€/mois", schema: "bilan" as const },
    ],
  },
  {
    mois: "Mois 3",
    titre: "Récurrence & deuxième salaire",
    Icon: ChartLineUp,
    phases: [
      { semaine: "Semaines 9-10", titre: "Fidélisation : client en récurrent (500-1 000€/mois)", resultat: "un revenu qui retombe chaque mois", virements: [{ montant: "+750,00 €", libelle: "Abonnement mensuel · client récurrent" }] },
      { semaine: "Semaines 11-12", titre: "Signer 2-3 nouveaux clients avec ton système", resultat: "tu construis ton portefeuille", schema: "clients" as const },
    ],
    megaWin: "Ton deuxième salaire à +2 987€/mois",
  },
];

function StepSchema({ schema }: { schema?: SchemaKey }) {
  if (!schema) return null;

  const card = "rounded-2xl border border-white/10 bg-white/[0.04] p-5";
  const label = "text-[0.95rem] font-bold text-white";
  const sub = "text-[0.8rem] text-white/55";
  const wrap = "mt-5 flex flex-1 flex-col";

  if (schema === "setup-ia") {
    // Mockup visuel d'un "Plan d'action personnalisé" généré pendant la semaine 1
    return (
      <div className={`${wrap}`}>
        <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-accent-400/30 bg-gradient-to-b from-accent-400/[0.06] to-transparent">
          {/* Header style document */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3 md:px-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent-400 text-navy-950" style={{ boxShadow: "0 0 14px rgba(1,95,255,0.6)" }}>
                <Sparkle size={16} weight="fill" />
              </span>
              <div>
                <p className="text-[0.85rem] font-bold leading-tight text-white">Ton plan d&apos;action — personnalisé</p>
                <p className="text-[0.7rem] leading-tight text-white/45">Généré par Alic.ia · à l&apos;instant</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-400/15 px-2.5 py-1 text-[0.7rem] font-bold text-accent-400">
              <CheckCircle size={11} weight="fill" /> Prêt
            </span>
          </div>

          {/* Contenu du plan */}
          <div className="grid gap-3 p-4 md:grid-cols-3 md:p-5">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
              <p className="text-[0.62rem] font-bold uppercase tracking-wider text-white/40">Objectif</p>
              <p className="mt-0.5 text-[0.95rem] font-bold leading-tight text-white">+2 987€/mois</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
              <p className="text-[0.62rem] font-bold uppercase tracking-wider text-white/40">Délai</p>
              <p className="mt-0.5 text-[0.95rem] font-bold leading-tight text-white">90 jours</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
              <p className="text-[0.62rem] font-bold uppercase tracking-wider text-white/40">1ᵉʳ client visé</p>
              <p className="mt-0.5 text-[0.95rem] font-bold leading-tight text-white">Semaine 5</p>
            </div>
          </div>

          {/* Checklist — ce qui est fait cette semaine */}
          <div className="flex flex-1 flex-col gap-1.5 border-t border-white/8 px-4 py-3.5 md:px-5 md:py-4">
            <p className="text-[0.62rem] font-bold uppercase tracking-wider text-white/40">Cette semaine, on a calé</p>
            {[
              "Ton espace de travail Notion",
              "Tes outils IA (Alic.ia, Cursor, v0)",
              "Ton planning hebdo (soir + week-end)",
              "Ta première compétence à apprendre",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[0.85rem] leading-snug text-white/80">
                <CheckCircle size={16} weight="fill" className="shrink-0 text-[#a3e635]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (schema === "site") {
    return (
      <div className={`${wrap} overflow-hidden rounded-2xl border border-white/10 bg-navy-950/60`}>
        <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[0.03] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#a3e635]/70" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/[0.06] px-2 py-1 text-[0.72rem] text-white/55">
            https://ton-tunnel.com
          </span>
          <Browser size={14} weight="bold" className="text-white/40" />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3 p-5">
          <div className="h-5 w-2/3 rounded-md bg-gradient-to-r from-accent-400/60 to-accent-400/10" />
          <div className="h-3 w-5/6 rounded-md bg-white/10" />
          <div className="h-3 w-3/4 rounded-md bg-white/10" />
          <div className="h-3 w-2/3 rounded-md bg-white/10" />
          <div className="mt-2 flex gap-2.5">
            <div className="h-9 w-32 rounded-lg bg-gold-400/80" />
            <div className="h-9 w-24 rounded-lg border border-white/15" />
          </div>
        </div>
      </div>
    );
  }

  if (schema === "prospection") {
    return (
      <div className={`${wrap} flex-row items-stretch gap-3`}>
        {/* Machine — gauche (source, avec ON/OFF) */}
        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-accent-400/40 bg-gradient-to-br from-accent-400/[0.12] to-navy-950/40 p-4 md:p-5" style={{ boxShadow: "0 0 40px rgba(1,95,255,0.2)" }}>
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-accent-400">Système Agencilab</span>

          {/* ON/OFF toggle */}
          <div className="relative mt-5 flex h-12 w-[88px] items-center justify-between rounded-full border-2 border-[#a3e635] bg-navy-950/60 px-2" style={{ boxShadow: "0 0 24px rgba(163,230,53,0.45), inset 0 0 12px rgba(163,230,53,0.12)" }}>
            <span className="pl-1 text-[0.6rem] font-bold uppercase tracking-wider text-white/30">Off</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a3e635] text-navy-950" style={{ boxShadow: "0 0 14px rgba(163,230,53,0.8)" }}>
              <span className="text-[0.6rem] font-extrabold tracking-tight">ON</span>
            </div>
          </div>

          <p className="mt-4 text-center text-[0.95rem] font-bold leading-snug text-white">
            Système activé
          </p>
        </div>

        {/* Fluide — flow visuel gauche → droite */}
        <div className="flex w-10 flex-col items-center justify-center md:w-14">
          <div className="flex items-center gap-1.5">
            {[0, 140, 280, 420, 560].map((d) => (
              <span
                key={d}
                className="h-2 w-2 animate-pulse rounded-full bg-[#a3e635]"
                style={{ animationDelay: `${d}ms`, boxShadow: "0 0 8px rgba(163,230,53,0.75)" }}
              />
            ))}
          </div>
        </div>

        {/* RDV — droite (alimentés par le fluide) */}
        <div className="flex flex-1 flex-col rounded-2xl border border-[#a3e635]/35 bg-[#a3e635]/[0.06] p-4 md:p-5">
          <div className="flex items-center gap-2">
            <CalendarBlank size={20} weight="duotone" className="text-[#a3e635]" />
            <span className="text-[0.78rem] font-bold uppercase tracking-wide text-[#a3e635]">Tes premiers RDV</span>
          </div>
          <ul className="mt-3 flex flex-1 flex-col justify-center gap-2">
            {[
              { t: "Mar. 14h", n: "Prospect qualifié" },
              { t: "Mer. 10h", n: "Prospect qualifié" },
              { t: "Jeu. 16h", n: "Prospect qualifié" },
            ].map((s) => (
              <li key={s.t} className="flex items-center gap-2 rounded-xl border border-white/10 bg-navy-950/40 px-3 py-2">
                <CheckCircle size={16} weight="fill" className="text-[#a3e635]" />
                <span className="text-[0.85rem] font-semibold text-white">{s.t}</span>
                <span className="ml-auto hidden truncate text-[0.7rem] text-white/45 sm:inline">{s.n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (schema === "livraison") {
    return (
      <div className={`${wrap} rounded-2xl border border-white/10 bg-white/[0.04] p-5`}>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[0.78rem] font-bold uppercase tracking-wide text-accent-400">Livraison</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#a3e635]/35 bg-[#a3e635]/10 px-3 py-1 text-[0.78rem] font-bold text-[#a3e635]">
            <Lightning size={12} weight="fill" /> Livré en 4h
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-accent-400 to-[#a3e635]" />
        </div>
        <div className="mt-5 grid flex-1 grid-cols-3 gap-2.5 text-center">
          {[
            { name: "Brief", time: "30 min", done: true },
            { name: "Production IA", time: "3h", done: true },
            { name: "Livraison", time: "30 min", done: false },
          ].map((s) => (
            <div key={s.name} className={`flex flex-col items-center justify-center rounded-xl border px-3 py-4 ${s.done ? "border-[#a3e635]/35 bg-[#a3e635]/[0.08]" : "border-white/10 bg-white/[0.03]"}`}>
              {s.done ? (
                <CheckCircle size={22} weight="fill" className="text-[#a3e635]" />
              ) : (
                <span className="h-[22px] w-[22px] rounded-full border-2 border-white/25" />
              )}
              <p className={`mt-2 text-[0.85rem] font-semibold ${s.done ? "text-white" : "text-white/55"}`}>{s.name}</p>
              <p className={`mt-0.5 text-[0.72rem] font-bold ${s.done ? "text-[#a3e635]" : "text-white/40"}`}>{s.time}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-navy-950/40 px-3 py-2.5">
          <span className="text-[0.78rem] text-white/45 line-through decoration-red-400/60">Sans l&apos;IA : 2-3 semaines</span>
          <ArrowRight size={14} weight="bold" className="text-white/30" />
          <span className="text-[0.78rem] font-bold text-[#a3e635]">Avec l&apos;IA : 4h</span>
        </div>
      </div>
    );
  }

  if (schema === "bilan") {
    return (
      <div className={`${wrap} flex-row items-stretch gap-2`}>
        {/* Gauche : Bilan coach */}
        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-accent-400/35 bg-accent-400/[0.08] p-4 md:p-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-400/40 bg-accent-400/15 text-accent-400">
            <CalendarBlank size={30} weight="duotone" />
          </div>
          <p className="mt-3 text-[1rem] font-bold leading-tight text-white">Bilan coach</p>
          <p className="mt-0.5 text-[0.75rem] text-white/55">Tu fais le point</p>
        </div>

        {/* Connectors — 3 traits qui partent du bilan vers chaque compétence */}
        <div className="relative w-10 md:w-14">
          <svg viewBox="0 0 100 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
            <defs>
              <linearGradient id="bilan-line-1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(1,95,255,0.7)" />
                <stop offset="100%" stopColor="rgba(1,95,255,0.85)" />
              </linearGradient>
              <linearGradient id="bilan-line-2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(1,95,255,0.7)" />
                <stop offset="100%" stopColor="rgba(255,122,0,0.85)" />
              </linearGradient>
              <linearGradient id="bilan-line-3" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(1,95,255,0.7)" />
                <stop offset="100%" stopColor="rgba(163,230,53,0.85)" />
              </linearGradient>
            </defs>
            <path d="M 0 150 C 50 150, 50 50, 100 50" stroke="url(#bilan-line-1)" strokeWidth="2.5" fill="none" />
            <path d="M 0 150 L 100 150" stroke="url(#bilan-line-2)" strokeWidth="2.5" fill="none" />
            <path d="M 0 150 C 50 150, 50 250, 100 250" stroke="url(#bilan-line-3)" strokeWidth="2.5" fill="none" />
            <circle cx="0" cy="150" r="3.5" fill="rgba(1,95,255,1)" />
            <circle cx="100" cy="50" r="3.5" fill="rgba(1,95,255,1)" />
            <circle cx="100" cy="150" r="3.5" fill="rgba(255,122,0,1)" />
            <circle cx="100" cy="250" r="3.5" fill="rgba(163,230,53,1)" />
          </svg>
        </div>

        {/* Droite : 3 compétences superposées */}
        <div className="flex flex-[1.2] flex-col gap-2">
          {[
            { name: "Meta Ads", Icon: Megaphone, border: "border-accent-400/40", bg: "bg-accent-400/10", iconColor: "text-accent-400" },
            { name: "Google Ads", Icon: Megaphone, border: "border-gold-400/40", bg: "bg-gold-400/10", iconColor: "text-gold-400" },
            { name: "Emailing", Icon: Envelope, border: "border-[#a3e635]/40", bg: "bg-[#a3e635]/10", iconColor: "text-[#a3e635]" },
          ].map((c) => (
            <div key={c.name} className={`flex flex-1 items-center gap-3 rounded-2xl border bg-white/[0.04] px-4 ${c.border}`}>
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${c.border} ${c.bg} ${c.iconColor}`}>
                <c.Icon size={20} weight="fill" />
              </span>
              <p className="text-[1rem] font-bold tracking-tight text-white">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (schema === "clients") {
    return (
      <div className={`${wrap} justify-around gap-3`}>
        {[
          { nom: "Client A", service: "Création de site", montant: "+1 800€" },
          { nom: "Client B", service: "Publicités Meta", montant: "+1 200€" },
          { nom: "Client C", service: "Tunnel + abonnement", montant: "+900€" },
        ].map((c) => (
          <div key={c.nom} className={`${card} flex items-center gap-3.5`}>
            <CheckCircle size={26} weight="fill" className="shrink-0 text-[#a3e635]" />
            <div className="min-w-0 flex-1">
              <p className={label}>{c.nom}</p>
              <p className={sub}>{c.service}</p>
            </div>
            <p className="shrink-0 text-[1.1rem] font-extrabold text-gold-400">{c.montant}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

function WinsColumn({ images, duration, reverse }: { images: string[]; duration: number; reverse: boolean }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className="flex flex-col gap-3"
        style={{ animation: `${reverse ? "marqueeYReverse" : "marqueeY"} ${duration}s linear infinite` }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="block w-full" draggable={false} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

function WinsWall() {
  // Distribue les 37 images en colonnes (round-robin) — 5 desktop, 3 mobile.
  // Chaque colonne défile verticalement, sens alterné, vitesse légèrement différente
  // pour donner une impression de flux infini et continu.
  const distribute = (n: number) => {
    const cols: string[][] = Array.from({ length: n }, () => []);
    COMMUNAUTE_SHOTS.forEach((src, i) => cols[i % n].push(src));
    return cols;
  };
  const desktopCols = distribute(5);
  const mobileCols = distribute(3);
  const durations = [85, 110, 95, 120, 100];

  return (
    <>
      {/* Desktop : 5 colonnes */}
      <div className="hidden h-full w-full grid-cols-5 gap-3 md:grid">
        {desktopCols.map((imgs, i) => (
          <WinsColumn key={i} images={imgs} duration={durations[i] ?? 100} reverse={i % 2 === 1} />
        ))}
      </div>
      {/* Mobile : 3 colonnes */}
      <div className="grid h-full w-full grid-cols-3 gap-2 md:hidden">
        {mobileCols.map((imgs, i) => (
          <WinsColumn key={i} images={imgs} duration={durations[i] ?? 100} reverse={i % 2 === 1} />
        ))}
      </div>
    </>
  );
}

function CenterStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-navy-950/90 px-3 py-3 backdrop-blur-md md:px-4 md:py-4">
      <p className="text-[clamp(1.1rem,2.4vw,1.6rem)] font-extrabold leading-none tracking-tight text-white">{value}</p>
      <p className="mt-1 text-[0.7rem] font-medium leading-tight text-white/70 md:text-[0.78rem]">{label}</p>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-[820px] text-center md:mb-14">
      <h2 className="text-[clamp(1.5rem,3.6vw,2.3rem)] font-bold leading-[1.15] tracking-tight text-white">
        {children}
      </h2>
    </div>
  );
}

type Virement = { montant: string; libelle: string };
type SchemaKey = "setup-ia" | "site" | "prospection" | "livraison" | "bilan" | "clients";
type RoadStep = { titre: string; resultat: string; virements?: Virement[]; total?: string; schema?: SchemaKey; cle: boolean; mega: boolean };

const MEGA_VIREMENTS: Virement[] = [
  { montant: "+750,00 €", libelle: "Abonnement mensuel · client A" },
  { montant: "+740,00 €", libelle: "Abonnement mensuel · client B" },
  { montant: "+1 497,00 €", libelle: "Création de site internet · client C" },
];

function RoadmapTimeline({ isMentorat = false }: { isMentorat?: boolean }) {
  // Couleur des virements : OR pour Mentorat, BLEU pour Incubateur
  const vColor = isMentorat ? "#D4AF37" : "#015FFF";
  const vRgba = (a: number) => (isMentorat ? `rgba(212,175,55,${a})` : `rgba(1,95,255,${a})`);
  const STEPS: RoadStep[] = ROADMAP.flatMap((m) => [
    ...m.phases.map((p) => {
      const virements = "virements" in p ? p.virements : undefined;
      const schema = "schema" in p ? p.schema : undefined;
      return {
        titre: p.titre,
        resultat: p.resultat,
        virements,
        schema,
        cle: !!virements,
        mega: false,
      };
    }),
    ...(m.megaWin ? [{ titre: "Objectif atteint 🎉", resultat: m.megaWin, virements: MEGA_VIREMENTS, total: "+2 987,00 €", cle: true, mega: true }] : []),
  ]);
  const total = STEPS.length;
  const [active, setActive] = useState(0);
  const pct = total > 1 ? (active / (total - 1)) * 100 : 0;
  const step = STEPS[active];

  return (
    <div className="mx-auto max-w-[820px]">
      {/* Timeline avec curseur — 9 étapes dont 3 étapes clés */}
      <div className="relative px-1 pt-6">
        <div className="absolute left-3 right-3 top-[1.85rem] h-1 rounded-full bg-white/10" />
        <div
          className="absolute left-3 top-[1.85rem] h-1 rounded-full bg-gradient-to-r from-accent-400 to-gold-400 transition-[width] duration-500 ease-out"
          style={{ width: `calc((100% - 1.5rem) * ${pct / 100})` }}
        />
        <div className="relative flex justify-between">
          {STEPS.map((s, i) => {
            const done = i <= active;
            const isActive = i === active;
            const isCle = s.cle;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={isCle ? `Étape clé ${i + 1}` : `Étape ${i + 1}`}
                className="relative flex flex-col items-center"
              >
                <span
                  className={`relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isCle ? "h-7 w-7" : "h-5 w-5"
                  } ${isActive ? "scale-125 shadow-[0_0_18px_rgba(255,122,0,0.75)]" : ""} ${
                    isCle
                      ? "border-[#a3e635] bg-[#a3e635]"
                      : done
                        ? "border-accent-400 bg-accent-400"
                        : "border-white/25 bg-navy-900 hover:border-white/50"
                  }`}
                >
                  {isCle && <span className="text-[0.62rem] font-bold text-navy-950">★</span>}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation — au-dessus pour rester fixe quand la carte grandit */}
      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setActive((a) => Math.max(0, a - 1))}
          disabled={active === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/35 hover:text-white disabled:opacity-30"
        >
          ‹
        </button>
        <span className="text-[0.85rem] font-semibold tabular-nums text-white/55">
          Étape {active + 1} / {total}
        </span>
        <button
          type="button"
          onClick={() => setActive((a) => Math.min(total - 1, a + 1))}
          disabled={active === total - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/35 hover:text-white disabled:opacity-30"
        >
          ›
        </button>
      </div>

      {/* Carte détail de l'étape active — hauteur fixée pour ne pas faire bouger la page */}
      <div
        className={`mt-4 flex min-h-[380px] flex-col rounded-3xl border p-5 backdrop-blur-sm transition md:min-h-[440px] md:p-6 ${
          step.mega
            ? "border-gold-400/45 bg-gold-400/[0.08]"
            : "border-white/10 bg-white/[0.03]"
        }`}
        style={step.mega ? { boxShadow: "0 0 40px rgba(255,122,0,0.16)" } : undefined}
      >
        <span className={`text-[0.72rem] font-bold uppercase tracking-[0.14em] ${step.cle ? "text-[#a3e635]" : "text-accent-400"}`}>
          {step.mega ? "Objectif final 🎯" : step.cle ? `★ Étape clé · ${active + 1}` : `Étape ${active + 1}`}
        </span>
        <h3 className="mt-1.5 text-[1.3rem] font-bold leading-tight tracking-tight text-white md:text-[1.6rem]">
          {step.titre}
        </h3>
        <div
          className={`mt-4 flex items-start gap-3 rounded-2xl border p-3.5 md:p-4 ${
            step.mega
              ? "border-gold-400/50 bg-gold-400/[0.12]"
              : "border-[#a3e635]/45 bg-[#a3e635]/[0.10]"
          }`}
          style={{
            boxShadow: step.mega
              ? "0 0 28px rgba(255,122,0,0.22)"
              : "0 0 24px rgba(163,230,53,0.18)",
          }}
        >
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
              step.mega ? "bg-gold-400 text-navy-950" : "bg-[#a3e635] text-navy-950"
            }`}
            style={{
              boxShadow: step.mega
                ? "0 0 14px rgba(255,122,0,0.55)"
                : "0 0 14px rgba(163,230,53,0.55)",
            }}
          >
            <CheckCircle size={20} weight="fill" />
          </span>
          <div className="min-w-0 flex-1">
            <p className={`text-[0.7rem] font-bold uppercase tracking-[0.16em] ${step.mega ? "text-gold-400" : "text-[#a3e635]"}`}>
              Résultat
            </p>
            <p className="mt-1 text-[1.05rem] font-bold leading-snug text-white md:text-[1.2rem]">
              {step.resultat}
            </p>
          </div>
        </div>

        {!step.virements && <StepSchema schema={step.schema} />}

        {step.virements && step.virements.length === 1 && (
          <div
            className="mt-5 flex flex-1 flex-col overflow-hidden rounded-3xl border"
            style={{
              borderColor: vRgba(0.4),
              background: `linear-gradient(to bottom, ${vRgba(0.1)}, ${vRgba(0.02)})`,
              boxShadow: `0 0 50px ${vRgba(0.18)}`,
            }}
          >
            {/* Header style appli bancaire */}
            <div className="flex items-center justify-between border-b border-white/8 bg-navy-950/40 px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-navy-950"
                  style={{ background: vColor, boxShadow: `0 0 14px ${vRgba(0.6)}` }}
                >
                  <CurrencyEur size={20} weight="bold" />
                </span>
                <div>
                  <p className="text-[0.85rem] font-bold leading-tight text-white">Ta banque</p>
                  <p className="text-[0.7rem] leading-tight text-white/45">Virement instantané · à l&apos;instant</p>
                </div>
              </div>
              <span
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.7rem] font-bold"
                style={{ background: vRgba(0.15), color: vColor }}
              >
                <CheckCircle size={11} weight="fill" /> Reçu
              </span>
            </div>

            {/* Montant XXL au centre */}
            <div className="flex flex-1 flex-col items-center justify-center px-5 py-8 text-center">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/50">Tu as reçu</p>
              <p
                className="mt-3 text-[clamp(2.6rem,8vw,4.5rem)] font-black leading-none tracking-tight"
                style={{ color: vColor, textShadow: `0 0 40px ${vRgba(0.45)}` }}
              >
                {step.virements[0].montant}
              </p>
              <p className="mt-4 max-w-[480px] text-[0.95rem] leading-snug text-white/75 md:text-[1.05rem]">
                {step.virements[0].libelle}
              </p>
            </div>
          </div>
        )}

        {step.virements && step.virements.length > 1 && (
          <div className="mt-4 flex flex-1 flex-col gap-2">
            {step.virements.map((v, i) => (
              <div
                key={i}
                className="animate-[deckIn_0.4s_ease-out] flex items-center gap-3 rounded-xl border px-3 py-2.5"
                style={{ borderColor: vRgba(0.35), background: vRgba(0.06) }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-navy-950"
                  style={{ background: vColor, boxShadow: `0 0 12px ${vRgba(0.5)}` }}
                >
                  <CurrencyEur size={18} weight="bold" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[0.7rem] font-bold uppercase tracking-wide text-white/55">Ta banque</span>
                    <span className="text-[0.65rem] text-white/40">à l&apos;instant</span>
                  </div>
                  <p className="text-[0.82rem] leading-tight text-white/80">{v.libelle}</p>
                </div>
                <p
                  className="shrink-0 text-right text-[1.05rem] font-extrabold tracking-tight md:text-[1.15rem]"
                  style={{ color: vColor }}
                >
                  {v.montant}
                </p>
              </div>
            ))}
            {step.total && (
              <div className="flex items-center justify-between rounded-xl border-2 border-gold-400/45 bg-gold-400/[0.1] px-4 py-2.5" style={{ boxShadow: "0 0 24px rgba(255,122,0,0.18)" }}>
                <span className="text-[0.72rem] font-bold uppercase tracking-wide text-gold-400">Total ce mois-ci</span>
                <span className="text-[1.2rem] font-extrabold tracking-tight text-white md:text-[1.35rem]">{step.total}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PitchView() {
  const [offre, setOffre] = useState<Offre>("incubateur");
  const O = OFFRES[offre];
  const isMentorat = offre === "mentorat";
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (direction: "up" | "down") => {
    const container = scrollRef.current;
    if (!container) return;
    const sections = Array.from(container.querySelectorAll<HTMLElement>("section"));
    if (sections.length === 0) return;
    const containerTop = container.getBoundingClientRect().top;
    // Top de chaque section relatif à la zone scrollable
    const tops = sections.map((s) => s.getBoundingClientRect().top - containerTop + container.scrollTop);
    const current = container.scrollTop;
    let targetTop: number;
    if (direction === "down") {
      const next = tops.find((t) => t > current + 8);
      targetTop = next ?? tops[tops.length - 1];
    } else {
      const prev = [...tops].reverse().find((t) => t < current - 8);
      targetTop = prev ?? 0;
    }
    container.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  return (
    <div ref={scrollRef} className={`relative h-[100dvh] snap-y snap-mandatory overflow-y-scroll bg-navy-950 text-white ${isMentorat ? "pitch-theme-mentorat" : ""}`}>
      {/* Flèches Haut / Bas — centrées verticalement à droite */}
      <div className="fixed right-5 top-1/2 z-50 -translate-y-1/2">
        <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/15 bg-navy-950/85 p-1.5 backdrop-blur">
          <button
            type="button"
            onClick={() => scrollToSection("up")}
            aria-label="Section précédente"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-white/70 transition hover:bg-white/[0.08] hover:text-white"
          >
            <CaretUp size={20} weight="bold" />
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("down")}
            aria-label="Section suivante"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-white/70 transition hover:bg-white/[0.08] hover:text-white"
          >
            <CaretDown size={20} weight="bold" />
          </button>
        </div>
      </div>

      {/* Switch I / M — sticky en bas à droite */}
      <div className="fixed bottom-5 right-5 z-50">
        <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/15 bg-navy-950/85 p-1.5 backdrop-blur">
          {(Object.keys(OFFRES) as Offre[]).map((key) => {
            const active = key === offre;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setOffre(key)}
                title={OFFRES[key].label}
                aria-label={OFFRES[key].label}
                aria-pressed={active}
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-[1.05rem] font-extrabold transition ${
                  active
                    ? "bg-gold-400 text-navy-950"
                    : "text-white/55 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {key === "incubateur" ? "I" : "M"}
              </button>
            );
          })}
        </div>
      </div>

      {/* Orbs de fond */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
      </div>

      {/* HERO — split texte (gauche) / image (droite), centré verticalement */}
      <section className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1100px] snap-start items-center px-6 py-8">
        <div className="hero-border w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <div className="grid items-stretch md:grid-cols-[1fr_1fr]">
            {/* Texte */}
            <div className="flex flex-col justify-center px-7 py-12 md:px-14 md:py-20">
              <Image src="/images/logo-white.png" alt="Agencilab" width={670} height={154} className="mb-9 h-9 w-auto self-start md:h-11" />

              <h1 className="max-w-[620px] text-[clamp(1.5rem,2.4vw,2.4rem)] font-extrabold leading-[1.12] tracking-tight text-white">
                L&apos;accompagnement <span className="gradient-text">n°1</span> pour devenir{" "}
                <span className="gradient-text">Growth Marketer</span> et te créer un complément de revenus de{" "}
                <span className="gradient-text">+2 987€/mois</span> en 3 mois
              </h1>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 backdrop-blur">
                  <span className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} weight="fill" className="text-gold-400" />
                    ))}
                  </span>
                  <span className="text-[0.85rem] font-medium text-white/80">
                    <span className="font-bold text-white">4,7/5</span> sur Trustpilot
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 backdrop-blur">
                  <UsersThree size={15} weight="fill" className="text-gold-400" />
                  <span className="text-[0.85rem] font-medium text-white/80">
                    <span className="font-bold text-white">+1 018</span> élèves accompagnés
                  </span>
                </span>
              </div>
            </div>

            {/* Image — bien visible */}
            <div className="relative min-h-[340px] md:min-h-[620px]">
              <Image src="/images/hero-group.jpg" alt="L'équipe et les élèves Agencilab" fill priority className="object-cover object-center" sizes="(max-width:768px) 100vw, 750px" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 mx-auto max-w-[1100px] px-6 pb-24">
        {/* FONDATEUR — Bloc 1 : qui il est */}
        <section className="mt-32 flex min-h-[100dvh] snap-start items-center justify-center md:mt-48">
          <div className="mx-auto grid w-full max-w-[1000px] gap-6 md:grid-cols-[0.95fr_1.05fr] md:gap-8">
            {/* Photo portrait */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <Image src="/images/louis-conf.jpg" alt="Louis Esquier, fondateur d'Agencilab" fill className="object-cover object-center" sizes="(max-width:768px) 100vw, 480px" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-gold-400 backdrop-blur">
                <SealCheck size={13} weight="fill" /> Le fondateur d&apos;Agencilab
              </span>
            </div>

            {/* Texte + stats */}
            <div className="flex flex-col justify-center">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.06] tracking-tight text-white">
                Louis <span className="gradient-text">Esquier</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Basé à Lyon",
                  "+10 ans dans le marketing",
                  "+270k abonnés sur YouTube",
                  "Growth Marketer depuis 2021",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[1rem] leading-[1.5] text-white/80 md:text-[1.08rem]">
                    <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-[#a3e635]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FONDATEUR — Bloc 2 : ce qu'il a fait (chiffres / clients) */}
        <section className="mt-32 flex min-h-[100dvh] snap-start items-center justify-center md:mt-48">
          <div className="mx-auto w-full max-w-[1000px]">
            {/* Hero stat */}
            <div className="relative px-6 py-10 text-center md:px-10 md:py-14">
              {/* Lueurs derrière — bleu pour l'Incubateur, or pour le Mentorat */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
                style={{ background: isMentorat ? "rgba(212,175,55,0.3)" : "rgba(1,95,255,0.3)" }}
              />
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
                style={{ background: isMentorat ? "rgba(228,193,84,0.45)" : "rgba(1,95,255,0.45)" }}
              />

              <p
                className="relative text-[clamp(3rem,10vw,6.5rem)] font-black leading-none tracking-tight text-white"
                style={{
                  textShadow: isMentorat
                    ? "0 0 50px rgba(212,175,55,0.65), 0 0 100px rgba(212,175,55,0.35)"
                    : "0 0 50px rgba(1,95,255,0.65), 0 0 100px rgba(1,95,255,0.35)",
                }}
              >
                10 000 000€
              </p>
              <p className="relative mx-auto mt-5 max-w-[640px] text-[1rem] leading-[1.6] text-white/70 md:text-[1.1rem]">
                générés pour ses clients et lui-même grâce au Growth Marketing.
              </p>
            </div>

            {/* Cards créateurs */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { nom: "Les Moustachus", photo: "/images/createurs/moustachus.jpg", stats: "210k IG · 100k TikTok · 20k YT" },
                { nom: "Nassim Sahili", photo: "/images/createurs/nassim-sahili.jpg", stats: "1,2M YT · 400k IG" },
                { nom: "Valek", photo: "/images/createurs/valek.jpg", stats: "380k YT · 100k IG" },
                { nom: "Norton", photo: "/images/createurs/norton.jpg", stats: "88k YT" },
                { nom: "Charles Elias Farah", photo: "/images/createurs/charles-elias-farah.jpg", stats: "35k LinkedIn · 20k YT" },
                { nom: "Khazy_wl", photo: "/images/createurs/khazy-wl.jpg", stats: "400k TikTok · 220k IG" },
              ].map((c) => (
                <div key={c.nom} className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="relative h-14 w-14 shrink-0">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/15 bg-navy-900">
                      <Image src={c.photo} alt={c.nom} fill className="object-cover" sizes="56px" unoptimized />
                    </div>
                    <SealCheck size={20} weight="fill" className="absolute -bottom-0.5 -right-0.5 rounded-full bg-navy-950" style={{ color: "#015FFF" }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[0.95rem] font-bold tracking-tight text-white">{c.nom}</p>
                    {c.stats && <p className="mt-0.5 truncate text-[0.78rem] font-medium text-white/55">{c.stats}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHIFFRES */}
        <section className="mt-48 flex min-h-[100dvh] snap-start flex-col justify-center md:mt-72">
          <div className="mb-7 flex justify-center">
            <div className="flex -space-x-3">
              {[
                "marina", "damien", "yohann", "stephanie", "florent",
                "clement", "kylian", "barthelemy", "solene", "benjamin",
              ].map((nom) => (
                <div key={nom} className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-navy-950 bg-navy-900 md:h-12 md:w-12">
                  <Image src={`/images/visages/${nom}.jpg`} alt="" fill className="object-cover" sizes="48px" />
                </div>
              ))}
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy-950 bg-accent-400/20 text-[0.7rem] font-bold text-accent-300 md:h-12 md:w-12">
                +1k
              </div>
            </div>
          </div>
          <SectionTitle>Aujourd&apos;hui, Agencilab c&apos;est plus d&apos;un millier de salariés qui ont changé de vie.</SectionTitle>
          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
            {STATS.map(({ value, label, Icon }) => (
              <div key={label} className="relative overflow-hidden rounded-2xl border border-accent-400/30 bg-gradient-to-b from-accent-400/[0.10] to-white/[0.02] p-5 text-center backdrop-blur-sm md:p-6" style={{ boxShadow: "0 0 32px rgba(1,95,255,0.14)" }}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-400/40 bg-accent-400/15 text-accent-400">
                  <Icon size={24} weight="duotone" />
                </div>
                <p className="mb-1 text-[1.875rem] font-extrabold leading-none tracking-tight md:text-[2.5rem]"><span className="gradient-text">{value}</span></p>
                <p className="text-[0.8125rem] leading-[1.4] text-white/70 md:text-[0.875rem]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MISSION */}
        <section className="mt-48 flex min-h-[100dvh] snap-start flex-col justify-center text-center md:mt-72">
          <div className="mx-auto max-w-[1000px] px-4">
            <h2 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              La mission d&apos;<span className="gradient-text">Agencilab</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[820px] text-[clamp(1.15rem,2.4vw,1.7rem)] font-medium leading-[1.4] text-white/80">
              Aider des salariés comme toi à se créer <span className="gradient-text font-bold">+2 987€/mois</span> de complément de revenus en 3 mois.
            </p>
          </div>
          <div className="mt-12 md:mt-14">
            <ElevesCarousel />
          </div>
        </section>

        {/* ROADMAP */}
        <section className="flex min-h-[100dvh] snap-start items-center justify-center py-8">
          <div className="w-full max-w-[820px]">
            <h2 className="mx-auto mb-6 max-w-[760px] text-center text-[clamp(1.15rem,2.6vw,1.8rem)] font-bold leading-tight tracking-tight text-white md:mb-8">
              Voilà concrètement comment on t&apos;accompagne, en <span className="gradient-text">9 étapes</span>.
            </h2>
            <RoadmapTimeline isMentorat={isMentorat} />
          </div>
        </section>

        {/* PILIERS — intro */}
        <section className="mt-32 flex min-h-[100dvh] snap-start flex-col justify-center md:mt-48">
          <SectionTitle>Si tu vas réussir, c&apos;est parce que tout repose sur 3 piliers.</SectionTitle>
        </section>

        {/* PILIER 1 — plein écran */}
        <section className="flex min-h-[100dvh] snap-start flex-col items-center justify-center py-20 text-center md:py-28">
          <span className="bg-gradient-to-b from-accent-400/40 to-accent-400/0 bg-clip-text text-[7rem] font-black leading-none text-transparent md:text-[10rem]">01</span>
          <span className="mt-2 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-400/40 bg-accent-400/10 text-accent-400 md:h-20 md:w-20">
            <GraduationCap size={36} weight="duotone" />
          </span>
          <span className="mt-6 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-accent-400">Pilier 1</span>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.1] tracking-tight text-white">Le contenu</h2>

          {/* 3 pans du contenu : plateforme, vidéos, ressources (Alic.ia) */}
          <div className="mt-12 grid w-full max-w-[1000px] gap-4 md:grid-cols-3">
            {/* 1 — Plateforme de formation */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <Image src="/images/pitch/photo-contenu-1.png" alt="La plateforme de formation Agencilab" fill className="object-cover" sizes="320px" unoptimized />
              <span className="absolute bottom-3 left-3 right-3 inline-block w-fit max-w-full rounded-lg border border-white/10 bg-navy-950/85 px-3 py-1.5 text-[0.8rem] font-bold tracking-tight text-white backdrop-blur">
                La plateforme de formation
              </span>
            </div>
            {/* 2 — Vidéos de formation */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <Image src="/images/pitch/photo-contenu-2.png" alt="Les vidéos de formation Agencilab" fill className="object-cover" sizes="320px" unoptimized />
              <span className="absolute bottom-3 left-3 right-3 inline-block w-fit max-w-full rounded-lg border border-white/10 bg-navy-950/85 px-3 py-1.5 text-[0.8rem] font-bold tracking-tight text-white backdrop-blur">
                Les vidéos de formation
              </span>
            </div>
            {/* 3 — Ressources (notamment Alic.ia) */}
            <div className="relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden rounded-2xl border border-accent-400/40 bg-gradient-to-br from-accent-400/[0.12] to-navy-950/40 p-5 text-center" style={{ boxShadow: "0 0 36px rgba(1,95,255,0.18)" }}>
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-accent-400/60">
                <Image src="/images/alicia.jpg" alt="Alicia, l'IA d'Agencilab" fill className="object-cover" sizes="56px" unoptimized />
              </div>
              <p className="mt-3 text-[1rem] font-bold tracking-tight text-white md:text-[1.05rem]">Les ressources</p>
              <p className="mt-1 text-[0.78rem] leading-snug text-white/65 md:text-[0.85rem]">
                Notamment <span className="font-semibold text-white">Alic.ia</span>, l&apos;IA qui te suit tout au long de l&apos;accompagnement
              </p>
            </div>
          </div>
        </section>

        {/* PILIER 2 — plein écran (diffère) */}
        <section className="flex min-h-[100dvh] snap-start flex-col items-center justify-center py-20 text-center md:py-28">
          <span className="bg-gradient-to-b from-accent-400/40 to-accent-400/0 bg-clip-text text-[7rem] font-black leading-none text-transparent md:text-[10rem]">02</span>
          <span className="mt-2 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-400/40 bg-accent-400/10 text-accent-400 md:h-20 md:w-20">
            <UsersThree size={36} weight="duotone" />
          </span>
          <span className="mt-6 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-accent-400">Pilier 2</span>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.1] tracking-tight text-white">L&apos;accompagnement</h2>

          {/* Screen d'un appel de groupe */}
          <div className="relative mt-10 aspect-video w-full max-w-[860px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <Image src="/images/pitch/coaching-groupe-louis.png" alt="Coaching de groupe en direct" fill className="object-cover" sizes="860px" unoptimized />
          </div>

          {/* 4 coachs */}
          <div className="mt-5 grid w-full max-w-[860px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {COACHS.map((c) => (
              <div key={c.nom} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full border border-white/15 bg-navy-900">
                  <Image src={c.photo} alt={c.nom} fill className="object-cover" sizes="64px" unoptimized />
                </div>
                <p className="mt-2.5 text-[0.95rem] font-bold tracking-tight text-white">{c.nom}</p>
                <p className="mt-0.5 text-[0.78rem] leading-snug text-white/55">{c.role}</p>
              </div>
            ))}
          </div>

          {isMentorat && (
            <div
              className="mx-auto mt-6 flex w-full max-w-[860px] items-center gap-3 rounded-2xl p-5"
              style={{ borderWidth: "1px", borderColor: "rgba(212,175,55,0.45)", backgroundColor: "rgba(212,175,55,0.10)" }}
            >
              <Sparkle size={18} weight="fill" style={{ color: "#D4AF37" }} className="shrink-0" />
              <div>
                <p className="text-[1.1rem] font-bold leading-snug text-white">+ TON coach attribué, rien que pour toi</p>
                <p className="mt-1 text-[0.95rem] leading-snug text-white/65">Un suivi individuel rapproché en 1-to-1, du début à la fin.</p>
              </div>
            </div>
          )}
        </section>

        {/* PILIER 3 — mur de wins infini, plein écran, avec centre fixe */}
        <section className="relative h-[100dvh] min-h-[100dvh] snap-start overflow-hidden">
          {/* Couche 1 : le mur défilant, prend tout l'écran (background, atténué) */}
          <div className="absolute inset-0 opacity-30 md:opacity-40">
            <WinsWall />
          </div>

          {/* Couche 2 : fades sur les 4 bords pour donner l'illusion d'infini */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-navy-950 to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-navy-950 to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-navy-950 to-transparent md:h-48" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-navy-950 to-transparent md:h-48" />

          {/* Couche 3 : vignette radiale très sombre au centre pour faire ressortir le texte */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ background: "radial-gradient(ellipse at center, rgba(5,10,20,0.85) 0%, rgba(5,10,20,0.55) 45%, rgba(5,10,20,0.85) 80%, #050A14 100%)" }}
          />

          {/* Couche 4 : pièce centrale fixe — titre + chiffres clés */}
          <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
            <span
              className="text-[5rem] font-black leading-none text-accent-400 md:text-[8rem]"
              style={{ textShadow: "0 0 30px rgba(1,95,255,0.55), 0 4px 24px rgba(0,0,0,0.7)" }}
            >
              03
            </span>
            <span
              className="mt-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-accent-400 md:text-[0.85rem]"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            >
              Pilier 3
            </span>
            <h2
              className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05] tracking-tight text-white"
              style={{ textShadow: "0 2px 18px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)" }}
            >
              La culture de la <span className="gradient-text">réussite</span>
            </h2>
            <p
              className="mx-auto mt-5 max-w-[640px] text-[clamp(0.95rem,1.6vw,1.15rem)] font-medium leading-snug text-white/90"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.85)" }}
            >
              Une communauté qui partage <span className="font-bold text-white">tous les jours</span> ses wins, ses premiers clients, ses virements.
            </p>

            <div className="mt-8 grid w-full max-w-[760px] grid-cols-3 gap-3 md:gap-4">
              <CenterStat value="+1 018" label="élèves accompagnés" />
              <CenterStat value="4,7/5" label="sur Trustpilot" />
              <CenterStat value="N°1" label="en France" />
            </div>
          </div>
        </section>

        {/* PILIER 4 — BONUS : Le carnet d'opportunités */}
        <section className="flex min-h-[100dvh] snap-start flex-col items-center justify-center py-20 text-center md:py-28">
          <span className="inline-block rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-gold-400">Pilier bonus</span>

          <span className="mt-6 bg-gradient-to-b from-gold-400/40 to-gold-400/0 bg-clip-text text-[7rem] font-black leading-none text-transparent md:text-[10rem]">04</span>
          <span className="mt-2 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold-400/45 bg-gold-400/15 text-gold-400 md:h-20 md:w-20">
            <Briefcase size={36} weight="duotone" />
          </span>
          <span className="mt-6 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-gold-400">Pilier 4</span>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.1] tracking-tight text-white">Le carnet d&apos;opportunités</h2>

          <div className="mt-12 grid w-full max-w-[860px] gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-gold-400/30 bg-gradient-to-b from-gold-400/[0.08] to-transparent p-8 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/40 bg-gold-400/15 text-gold-400">
                <Megaphone size={26} weight="duotone" />
              </span>
              <p className="text-[1.15rem] font-bold tracking-tight text-white">Les opportunités de Louis</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-gold-400/30 bg-gradient-to-b from-gold-400/[0.08] to-transparent p-8 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/40 bg-gold-400/15 text-gold-400">
                <UsersThree size={26} weight="duotone" />
              </span>
              <p className="text-[1.15rem] font-bold tracking-tight text-white">Les missions entre membres</p>
            </div>
          </div>
        </section>

        {/* RECAP — ce qu'il y a dans l'offre */}
        <section className="flex min-h-[100dvh] snap-start flex-col justify-center py-10 md:py-12">
          <div className="mx-auto mb-6 flex max-w-[820px] flex-col items-center px-4 text-center md:mb-8">
            <Image src="/images/logo-white.png" alt="Agencilab" width={180} height={48} className="mb-4 h-9 w-auto md:h-11" unoptimized />
            <h2 className="text-[clamp(1.3rem,3vw,2rem)] font-bold leading-[1.15] tracking-tight text-white">
              Ce que tu obtiens en rejoignant <span className="gradient-text">{O.label.replace(/ d'Agencilab$/, "")}</span>
            </h2>
          </div>

          <div className="mx-auto flex w-full max-w-[720px] flex-col gap-3">
            {/* Pilier 1 — Le contenu */}
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:p-5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-400/40 bg-accent-400/10 text-accent-400">
                <GraduationCap size={20} weight="duotone" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-accent-400">Pilier 1</span>
                  <p className="text-[1rem] font-bold tracking-tight text-white">Le contenu</p>
                </div>
                <ul className="mt-1.5 space-y-1 text-[0.85rem] leading-snug text-white/75">
                  <li className="flex items-start gap-2"><CheckCircle size={14} weight="fill" className="mt-[3px] shrink-0 text-accent-400" /><span>La plateforme de formation complète</span></li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} weight="fill" className="mt-[3px] shrink-0 text-accent-400" /><span>Toutes les vidéos de formation</span></li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} weight="fill" className="mt-[3px] shrink-0 text-accent-400" /><span><span className="font-semibold text-white">Alic.ia</span>, l&apos;IA qui te suit tout le long</span></li>
                </ul>
              </div>
            </div>

            {/* Pilier 2 — L'accompagnement */}
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:p-5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-400/40 bg-accent-400/10 text-accent-400">
                <UsersThree size={20} weight="duotone" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-accent-400">Pilier 2</span>
                  <p className="text-[1rem] font-bold tracking-tight text-white">L&apos;accompagnement</p>
                </div>
                <ul className="mt-1.5 space-y-1 text-[0.85rem] leading-snug text-white/75">
                  <li className="flex items-start gap-2"><CheckCircle size={14} weight="fill" className="mt-[3px] shrink-0 text-accent-400" /><span>Coaching de groupe en direct chaque semaine</span></li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} weight="fill" className="mt-[3px] shrink-0 text-accent-400" /><span>4 coachs experts : Nathan, Tino, Mathis, Louis</span></li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} weight="fill" className="mt-[3px] shrink-0 text-accent-400" /><span>Séminaires et événements en présentiel</span></li>
                </ul>
              </div>
            </div>

            {/* Pilier 3 — La culture de la réussite */}
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:p-5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-400/40 bg-accent-400/10 text-accent-400">
                <Handshake size={20} weight="duotone" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-accent-400">Pilier 3</span>
                  <p className="text-[1rem] font-bold tracking-tight text-white">La culture de la réussite</p>
                </div>
                <ul className="mt-1.5 space-y-1 text-[0.85rem] leading-snug text-white/75">
                  <li className="flex items-start gap-2"><CheckCircle size={14} weight="fill" className="mt-[3px] shrink-0 text-accent-400" /><span>L&apos;accès à la communauté Agencilab</span></li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} weight="fill" className="mt-[3px] shrink-0 text-accent-400" /><span>Le réseau d&apos;élèves qui réussissent</span></li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} weight="fill" className="mt-[3px] shrink-0 text-accent-400" /><span>Le mur des victoires comme moteur quotidien</span></li>
                </ul>
              </div>
            </div>

            {/* Pilier 4 — Bonus : Le carnet d'opportunités */}
            <div className="flex items-start gap-4 rounded-2xl border border-gold-400/35 bg-gold-400/[0.06] p-4 md:p-5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold-400/45 bg-gold-400/15 text-gold-400">
                <Briefcase size={20} weight="duotone" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold-400">Pilier bonus</span>
                  <p className="text-[1rem] font-bold tracking-tight text-white">Le carnet d&apos;opportunités</p>
                </div>
                <ul className="mt-1.5 space-y-1 text-[0.85rem] leading-snug text-white/75">
                  <li className="flex items-start gap-2"><CheckCircle size={14} weight="fill" className="mt-[3px] shrink-0 text-gold-400" /><span>Les opportunités partagées par Louis</span></li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} weight="fill" className="mt-[3px] shrink-0 text-gold-400" /><span>Les missions et clients échangés entre membres</span></li>
                </ul>
              </div>
            </div>

            {/* Bonus Mentorat uniquement */}
            {isMentorat && (
              <div
                className="flex items-start gap-4 rounded-2xl p-4 md:p-5"
                style={{ borderWidth: "1px", borderColor: "rgba(212,175,55,0.45)", backgroundColor: "rgba(212,175,55,0.10)" }}
              >
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ borderWidth: "1px", borderColor: "rgba(212,175,55,0.45)", backgroundColor: "rgba(212,175,55,0.15)", color: "#D4AF37" }}
                >
                  <Sparkle size={20} weight="fill" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[1rem] font-bold tracking-tight text-white">TON coach attribué en 1-to-1</p>
                  <p className="mt-1.5 text-[0.85rem] leading-snug text-white/70">Un suivi individuel rapproché, du début à la fin.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* COMPARAISON école de commerce — juste avant le prix */}
        <section className="flex min-h-[100dvh] snap-start items-center justify-center px-6">
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              Loin des <span className="text-red-500">50 000€</span>
            </p>
            <p className="mt-5 text-[clamp(1.6rem,3.6vw,2.6rem)] font-bold leading-snug tracking-tight text-white/75">
              Demandé par une école de commerce
            </p>
          </div>
        </section>

        {/* PRIX — diffère */}
        <section className="relative flex min-h-[100dvh] snap-start items-center justify-center overflow-hidden">
          {/* Lueur d'arrière-plan */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
            style={{ background: isMentorat ? "rgba(212,175,55,0.45)" : "rgba(1,95,255,0.25)" }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
            style={{ background: isMentorat ? "rgba(228,193,84,0.6)" : "rgba(1,95,255,0.35)" }}
          />

          <div className="relative flex flex-col items-center">
            <p className="text-[clamp(1.3rem,2.4vw,1.8rem)] font-extrabold leading-none tracking-tight text-white/85 line-through decoration-red-500 decoration-[3px]">
              50 000€
            </p>
            <p
              className="mt-3 text-center text-[clamp(4.5rem,15vw,9rem)] font-extrabold leading-none tracking-tight text-white md:mt-4"
              style={{
                textShadow: isMentorat
                  ? "0 0 45px rgba(212,175,55,0.75), 0 0 95px rgba(212,175,55,0.4)"
                  : "0 0 40px rgba(1,95,255,0.55), 0 0 80px rgba(1,95,255,0.3)",
              }}
            >
              {O.prix}
            </p>
          </div>
        </section>

        {/* GARANTIE — après le prix */}
        <section className="mt-32 flex min-h-[100dvh] snap-start flex-col justify-center md:mt-48">
          <div className="mx-auto max-w-[820px] rounded-3xl border-2 border-[#a3e635]/35 bg-[#a3e635]/[0.06] p-8 text-center md:p-12">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#a3e635]/40 bg-[#a3e635]/15 text-[#a3e635]"><ShieldCheck size={28} weight="duotone" /></span>
            <h2 className="text-[clamp(1.6rem,4vw,2.6rem)] font-bold leading-[1.12] tracking-tight text-white">
              Ton premier client en 3 mois, <span className="gradient-text">sinon on t'en donne un</span>
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
