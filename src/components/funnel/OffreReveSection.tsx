import {
  Wallet,
  ChartLineUp,
  Globe,
  Clock,
  ArrowsClockwise,
  ShieldCheck,
  CurrencyEur,
  X,
  House,
  Coffee,
  Sun,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import ElevesCarousel from "./ElevesCarousel";

/**
 * Section "vends le rêve" de la page offre.
 * Ouvre sur une notif de virement (+2 987€) puis déroule la transformation
 * concrète pour l'ICP, chaque bénéfice illustré par un mini-schéma.
 */

const PLUS_BESOIN = [
  "d'attendre une augmentation qu'on ne t'accordera peut-être jamais",
  "de réfléchir à deux fois avant d'offrir un resto ou un cadeau à ta moitié",
  "de dire « plus tard » à tes enfants quand ils te demandent quelque chose",
  "de repousser tes projets de vie : un voyage, un appartement, fonder une famille",
  "de demander la permission à un patron pour être là aux moments qui comptent",
  "de finir chaque mois en surveillant ton compte, la boule au ventre",
];

/* ============================================================
   MINI-SCHÉMAS
   ============================================================ */

function SalaireVisual() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0d0d11] p-4">
      <p className="mb-2.5 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-white/40">
        Ton bulletin du mois
      </p>
      <div className="space-y-1.5 text-[0.8125rem]">
        <div className="flex justify-between">
          <span className="text-white/55">Salaire net</span>
          <span className="text-white/70">2 100 €</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-[#a3e635]">
            + Activité Growth
          </span>
          <span className="font-bold text-[#a3e635]">+2 987 €</span>
        </div>
        <div className="flex justify-between border-t border-white/10 pt-1.5">
          <span className="font-semibold text-white">Total</span>
          <span className="font-extrabold text-white">5 097 €</span>
        </div>
      </div>
    </div>
  );
}

function PlafondVisual() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0d0d11] p-4">
      <svg viewBox="0 0 220 96" className="w-full" aria-hidden>
        {/* Salaire plafonné — ligne plate */}
        <line
          x1="6"
          y1="64"
          x2="214"
          y2="64"
          stroke="#ef4444"
          strokeWidth="2.5"
          strokeDasharray="5 4"
          opacity="0.7"
        />
        {/* Ton revenu — courbe montante */}
        <path
          d="M6 80 C 70 78, 110 56, 214 12"
          fill="none"
          stroke="#FF7A00"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="214" cy="12" r="4" fill="#FF7A00" />
      </svg>
      <div className="mt-2 flex justify-between text-[0.6875rem]">
        <span className="flex items-center gap-1.5 text-red-400/80">
          <span className="h-0.5 w-3 bg-red-400/70" />
          Salaire plafonné
        </span>
        <span className="flex items-center gap-1.5 text-gold-400">
          <span className="h-0.5 w-3 bg-gold-400" />
          Ton revenu
        </span>
      </div>
    </div>
  );
}

function LieuxVisual() {
  const lieux = [
    { icon: House, label: "Chez toi" },
    { icon: Coffee, label: "Un café" },
    { icon: Sun, label: "Au soleil" },
  ];
  return (
    <div className="grid grid-cols-3 gap-2">
      {lieux.map((l) => {
        const Icon = l.icon;
        return (
          <div
            key={l.label}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d0d11] py-3.5"
          >
            <Icon size={22} weight="duotone" className="text-accent-400" />
            <span className="text-[0.6875rem] font-semibold text-white/70">
              {l.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function HorairesVisual() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0d0d11] p-4">
      <p className="mb-2.5 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-white/40">
        Ta journée
      </p>
      <div className="relative h-3.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div className="absolute left-0 top-0 h-full w-[14%] rounded-full bg-gradient-to-r from-gold-400 to-[#FF9533]" />
      </div>
      <div className="mt-2 flex justify-between text-[0.6875rem]">
        <span className="font-semibold text-gold-400">45 min pour démarrer</span>
        <span className="text-white/45">le reste : à toi</span>
      </div>
    </div>
  );
}

function RecurrentVisual() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0d0d11] p-4">
      <div className="flex items-center justify-between gap-2">
        {["Mois 1", "Mois 2", "Mois 3"].map((m) => (
          <div
            key={m}
            className="flex-1 rounded-lg border border-[#a3e635]/25 bg-[#a3e635]/[0.06] py-2 text-center"
          >
            <p className="text-[0.8125rem] font-extrabold text-[#a3e635]">
              +2 987 €
            </p>
            <p className="text-[0.625rem] text-white/45">{m}</p>
          </div>
        ))}
      </div>
      <p className="mt-2.5 flex items-center justify-center gap-1.5 text-[0.6875rem] text-white/50">
        <ArrowsClockwise size={13} weight="bold" className="text-[#a3e635]" />
        Et ça continue, mois après mois
      </p>
    </div>
  );
}

function SecuriteVisual() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0d0d11] p-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] py-3 text-center">
          <Wallet
            size={20}
            weight="duotone"
            className="mx-auto mb-1 text-white/60"
          />
          <p className="text-[0.6875rem] font-semibold text-white/70">
            Ton salaire
          </p>
        </div>
        <div className="rounded-lg border border-[#a3e635]/30 bg-[#a3e635]/[0.06] py-3 text-center">
          <ChartLineUp
            size={20}
            weight="duotone"
            className="mx-auto mb-1 text-[#a3e635]"
          />
          <p className="text-[0.6875rem] font-semibold text-[#a3e635]">
            Activité Growth
          </p>
        </div>
      </div>
      <p className="mt-2.5 text-center text-[0.6875rem] text-white/50">
        Deux sources de revenus = tu ne dépends plus de personne
      </p>
    </div>
  );
}

const REVE = [
  {
    icon: Wallet,
    titre: "Un deuxième salaire, chaque mois",
    desc: "+2 987€ qui s'ajoutent à ta fiche de paie, sans quitter ton emploi. Un vrai matelas, pas une promesse.",
    Visual: SalaireVisual,
  },
  {
    icon: ChartLineUp,
    titre: "La fin du plafond",
    desc: "Ton revenu ne dépend plus d'une augmentation qu'on veut bien t'accorder. Il dépend de toi, et de toi seul.",
    Visual: PlafondVisual,
  },
  {
    icon: Globe,
    titre: "Travailler d'où tu veux",
    desc: "Un ordinateur, une connexion. Ton activité te suit partout : chez toi, en déplacement, au soleil.",
    Visual: LieuxVisual,
  },
  {
    icon: Clock,
    titre: "Tes horaires, tes règles",
    desc: "45 minutes par jour pour démarrer. Tu construis ça à ton rythme, sans demander la permission à personne.",
    Visual: HorairesVisual,
  },
  {
    icon: ArrowsClockwise,
    titre: "Un revenu qui revient tout seul",
    desc: "Tes clients te paient chaque mois tant que tu livres. Ton revenu ne repart jamais de zéro le 1er.",
    Visual: RecurrentVisual,
  },
  {
    icon: ShieldCheck,
    titre: "La sécurité de ne plus dépendre d'un seul salaire",
    desc: "Si ton emploi s'arrête demain, tu n'es plus à la merci de personne. Tu as une seconde source de revenus.",
    Visual: SecuriteVisual,
  },
];

export default function OffreReveSection({
  ctaLabel = "Voir ce qu'il y a dans Cash Cow Express",
}: {
  /** Libellé du CTA de fin de section (ancre #inclus). */
  ctaLabel?: string;
} = {}) {
  return (
    <section className="mt-14 md:mt-20">
      {/* Promesse */}
      <div className="mx-auto max-w-[820px] text-center">
        {/* Notif de virement — hero */}
        <div
          className="mx-auto mb-8 flex max-w-[440px] items-center gap-3 rounded-2xl border-2 border-[#a3e635]/40 bg-gradient-to-b from-[#181820] to-[#0d0d11] px-4 py-3.5 text-left sm:gap-4 sm:px-5 sm:py-4"
          style={{ boxShadow: "0 0 50px rgba(163, 230, 53, 0.16)" }}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#a3e635]/40 bg-[#a3e635]/12 text-[#a3e635] sm:h-12 sm:w-12">
            <CurrencyEur size={22} weight="bold" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="whitespace-nowrap text-[0.8125rem] font-semibold text-white/55">
                Virement reçu
              </p>
              {/* Masqué sous 640px : la ligne n'a pas la place et se coupait en deux. */}
              <span className="hidden whitespace-nowrap text-[0.6875rem] text-white/35 sm:inline">
                à l&apos;instant
              </span>
            </div>
            <p className="truncate text-[0.875rem] font-medium text-white">
              {/* Libellé raccourci sous 640px, sinon il se faisait couper. */}
              <span className="sm:hidden">Client · Abonnement</span>
              <span className="hidden sm:inline">
                Client · Abonnement mensuel
              </span>
            </p>
          </div>
          <p className="shrink-0 whitespace-nowrap text-[1.125rem] font-extrabold tracking-tight text-[#a3e635] sm:text-[1.375rem] md:text-[1.5rem]">
            +2 987 €
          </p>
        </div>

        <h2 className="text-[clamp(1.85rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-white">
          Tu vois ce <span className="gradient-text">virement</span>&nbsp;?
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-[1.0625rem] leading-[1.6] text-white/80 md:text-[1.1875rem]">
          Dans 90 jours, tu pourrais le recevoir{" "}
          <strong className="text-white">
            en plus de ton salaire, chaque mois
          </strong>
          .
        </p>
      </div>

      {/* Plus besoin de... */}
      <div className="mx-auto mt-9 max-w-[620px] md:mt-11">
        <p className="mb-5 text-center text-[1rem] leading-[1.55] text-white/80 md:text-[1.0625rem]">
          Dans 90 jours, tu pourrais réaliser que{" "}
          <strong className="text-white">tu n&apos;as plus besoin</strong>
          &nbsp;:
        </p>
        <ul className="space-y-2.5">
          {PLUS_BESOIN.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                <X size={12} weight="bold" />
              </span>
              <span className="text-[0.9375rem] leading-[1.5] text-white/75 md:text-[1rem]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* La transformation — 6 bénéfices illustrés */}
      <h3 className="mx-auto mt-12 max-w-[760px] text-center text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.18] tracking-tight text-white md:mt-16">
        Tu sais ce que ça veut dire{" "}
        <span className="gradient-text">pour toi</span>&nbsp;?
      </h3>
      <div className="mx-auto mt-8 grid max-w-[1000px] gap-3.5 md:mt-10 md:grid-cols-2 md:gap-4">
        {REVE.map((item) => {
          const Icon = item.icon;
          const Visual = item.Visual;
          return (
            <div
              key={item.titre}
              className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-5 backdrop-blur-sm md:p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-400/40 bg-gold-400/10 text-gold-400"
                  style={{ boxShadow: "0 0 24px rgba(255, 122, 0, 0.15)" }}
                >
                  <Icon size={22} weight="duotone" />
                </span>
                <p className="text-[1.0625rem] font-bold leading-[1.25] tracking-tight text-white md:text-[1.125rem]">
                  {item.titre}
                </p>
              </div>
              <p className="mb-4 text-[0.875rem] leading-[1.6] text-white/65 md:text-[0.9375rem]">
                {item.desc}
              </p>
              <div className="mt-auto">
                <Visual />
              </div>
            </div>
          );
        })}
      </div>

      {/* Preuve — élèves réels */}
      <div className="mx-auto mt-14 max-w-[1000px] md:mt-20">
        <h3 className="mb-8 text-center text-[clamp(1.25rem,3.2vw,2rem)] font-bold leading-[1.18] tracking-tight text-white md:mb-10 md:whitespace-nowrap">
          Cette vie-là, +1 018 salariés comme toi{" "}
          <span className="gradient-text">la vivent déjà</span>
        </h3>
        <ElevesCarousel />
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-col items-center md:mt-12">
        <a
          href="#inclus"
          className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-9 py-4 text-[1rem] font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30"
        >
          {ctaLabel}
          <ArrowRight size={18} weight="bold" />
        </a>
      </div>
    </section>
  );
}
