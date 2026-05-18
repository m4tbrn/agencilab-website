import Image from "next/image";
import {
  ForkKnife,
  Barbell,
  House,
  Hammer,
  ArrowsClockwise,
  CaretDown,
  CurrencyEur,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Schéma visuel du modèle économique vendu sur la page offre.
 * Flux : des PME ont besoin de marketing -> tu deviens leur Growth Marketer
 * -> tu livres vite grâce au Système Agencilab -> elles te paient en récurrent.
 */

const PME = [
  { icon: ForkKnife, label: "Restaurants" },
  { icon: Barbell, label: "Coachs" },
  { icon: House, label: "Agents immobiliers" },
  { icon: Hammer, label: "Artisans" },
];

const PAIEMENTS = [
  { client: "Le Comptoir de Léa", type: "Restaurant", montant: "1 500,00 €", quand: "il y a 2 min" },
  { client: "Maxime Coaching", type: "Coach sportif", montant: "1 200,00 €", quand: "il y a 1 h" },
  { client: "Horizon Immobilier", type: "Agence immo", montant: "2 200,00 €", quand: "hier" },
  { client: "Atelier Bois & Co", type: "Artisan", montant: "1 800,00 €", quand: "hier" },
];

function Connector({ legende }: { legende: string }) {
  return (
    <div className="flex flex-col items-center py-3 md:py-4">
      <span className="mb-1 max-w-[300px] text-center text-[0.75rem] font-medium italic text-white/45 md:text-[0.8125rem]">
        {legende}
      </span>
      <CaretDown size={22} weight="bold" className="text-gold-400/70" />
    </div>
  );
}

export default function BrasDroitSchema() {
  return (
    <section className="mt-14 md:mt-20">
      <div className="mx-auto max-w-[760px] text-center">
        <h2 className="mb-4 text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white">
          Comment le Growth Marketing va te rajouter{" "}
          <span className="gradient-text">+2 987€/mois</span>{" "}
          en 90 jours&nbsp;?
        </h2>
        <p className="mx-auto text-[0.9375rem] leading-[1.65] text-white/70 md:text-[1.0625rem]">
          Tu deviens le bras droit marketing de petites et moyennes entreprises
          (restaurants, coachs, agents immobiliers, artisans...) qui n&apos;ont
          ni le temps ni les compétences pour le faire elles-mêmes. Elles te
          paient{" "}
          <strong className="text-white">
            plusieurs milliers d&apos;euros par mois en récurrent
          </strong>{" "}
          pour ces résultats.
        </p>
      </div>

      {/* SCHÉMA */}
      <div className="mx-auto mt-10 max-w-[720px] md:mt-12">
        {/* Niveau 1 — Les PME */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {PME.map((pme) => {
            const Icon = pme.icon;
            return (
              <div
                key={pme.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-5 text-center backdrop-blur-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-400/30 bg-accent-400/10 text-accent-400">
                  <Icon size={22} weight="duotone" />
                </span>
                <span className="text-[0.8125rem] font-semibold leading-[1.3] tracking-tight text-white md:text-[0.875rem]">
                  {pme.label}
                </span>
              </div>
            );
          })}
        </div>

        <Connector legende="elles ont besoin de résultats marketing, mais n'ont ni le temps ni les compétences" />

        {/* Niveau 2 — Toi, Growth Marketer */}
        <div
          className="mx-auto max-w-[420px] rounded-2xl border-2 border-gold-400/40 bg-gradient-to-b from-[#181820] to-[#0d0d11] px-6 py-5 text-center"
          style={{ boxShadow: "0 0 40px rgba(255, 122, 0, 0.18)" }}
        >
          <p className="text-[1.125rem] font-bold tracking-tight text-white md:text-[1.25rem]">
            Growth Marketer
          </p>
          <p className="mt-1 text-[0.8125rem] text-white/55">
            Le bras droit marketing des entreprises
          </p>
        </div>

        <Connector legende="tu livres leurs résultats grâce au système qu'on a mis en place dans Agencilab" />

        {/* Niveau 3 — Le Système Agencilab */}
        <div
          className="mx-auto max-w-[480px] rounded-2xl border-2 border-accent-400/40 bg-gradient-to-b from-[#0e1a33] to-[#0a1020] px-6 py-5 text-center"
          style={{ boxShadow: "0 0 40px rgba(1, 95, 255, 0.18)" }}
        >
          <Image
            src="/images/logo-white.png"
            alt="Agencilab"
            width={120}
            height={31}
            className="mx-auto mb-3 h-6 w-auto"
          />
          <p className="text-[1.0625rem] font-bold tracking-tight text-white md:text-[1.1875rem]">
            Le Système Agencilab
          </p>
          <p className="mx-auto mt-1.5 max-w-[340px] text-[0.8125rem] leading-[1.5] text-white/60 md:text-[0.875rem]">
            Des process, des modèles et des outils prêts à l&apos;emploi : tu
            livres en quelques heures ce qui prendrait des semaines à faire
            seul.
          </p>
        </div>

        <Connector legende="et chaque entreprise te paie, mois après mois" />

        {/* Niveau 4 — Notifications de paiement récurrent */}
        <div className="mx-auto max-w-[480px] space-y-2.5">
          {PAIEMENTS.map((p) => (
            <div
              key={p.client}
              className="flex items-center gap-3.5 rounded-2xl border border-[#a3e635]/25 bg-gradient-to-b from-[#181820] to-[#0d0d11] px-4 py-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
            >
              {/* Icône paiement */}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#a3e635]/40 bg-[#a3e635]/12 text-[#a3e635]">
                <CurrencyEur size={20} weight="bold" />
              </span>
              {/* Détails */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[0.8125rem] font-semibold text-white/55">
                    Paiement reçu
                  </p>
                  <span className="shrink-0 text-[0.6875rem] text-white/35">
                    {p.quand}
                  </span>
                </div>
                <p className="truncate text-[0.875rem] font-medium text-white">
                  {p.client}{" "}
                  <span className="text-white/45">· {p.type}</span>
                </p>
              </div>
              {/* Montant */}
              <p className="shrink-0 text-[1rem] font-extrabold tracking-tight text-[#a3e635] md:text-[1.0625rem]">
                +{p.montant}
              </p>
            </div>
          ))}

          {/* Total récurrent */}
          <div
            className="mt-3.5 flex items-center justify-center gap-2.5 rounded-2xl border-2 border-[#a3e635]/40 bg-[#a3e635]/[0.07] px-5 py-4 text-center"
            style={{ boxShadow: "0 0 40px rgba(163, 230, 53, 0.12)" }}
          >
            <ArrowsClockwise
              size={22}
              weight="bold"
              className="shrink-0 text-[#a3e635]"
            />
            <p className="text-[0.9375rem] font-bold tracking-tight text-white md:text-[1rem]">
              6 700€ par mois,{" "}
              <span className="text-[#a3e635]">en récurrent</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
