import { ArrowRight, TrendUp } from "@phosphor-icons/react/dist/ssr";

/**
 * Section ROI — placée juste après le prix.
 * Oppose l'investissement (179€/mois) au premier client (1 000-2 000€)
 * pour montrer que c'est l'investissement le plus rentable possible.
 */
export default function OffreRoiSection({
  prix = "179€",
  prixSuffix = "/mois",
  prixNote = "Sans engagement, tu arrêtes quand tu veux",
}: {
  /** Montant investi affiché dans la carte "Tu investis". */
  prix?: string;
  prixSuffix?: string;
  prixNote?: string;
} = {}) {
  return (
    <section className="mt-14 md:mt-20">
      <div className="mx-auto max-w-[760px] text-center">
        <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.18] tracking-tight text-white">
          L&apos;investissement le plus rentable que tu puisses faire{" "}
          <span className="gradient-text">aujourd&apos;hui</span>
        </h2>
      </div>

      {/* Comparaison investissement / retour */}
      <div className="mx-auto mt-9 flex max-w-[760px] flex-col items-stretch gap-3 md:mt-12 md:flex-row md:gap-4">
        {/* Tu investis */}
        <div className="flex flex-1 flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
          <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-white/45">
            Tu investis
          </p>
          <p className="text-[1.75rem] font-extrabold tracking-tight text-white md:text-[2rem]">
            {prix}
            <span className="text-[1rem] text-white/50">{prixSuffix}</span>
          </p>
          <p className="mt-1 text-[0.8125rem] text-white/55">{prixNote}</p>
        </div>

        {/* Flèche + ROI */}
        <div className="flex shrink-0 flex-col items-center justify-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-400">
            <ArrowRight
              size={18}
              weight="bold"
              className="rotate-90 md:rotate-0"
            />
          </span>
          <span className="whitespace-nowrap rounded-full border border-gold-400/40 bg-gold-400/15 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-gold-400">
            <strong className="text-[0.8125rem] font-extrabold">×10</strong>{" "}
            sur ton investissement
          </span>
        </div>

        {/* Ton premier client */}
        <div
          className="flex flex-1 flex-col justify-center rounded-2xl border-2 border-[#a3e635]/40 bg-[#a3e635]/[0.07] p-6 text-center"
          style={{ boxShadow: "0 0 40px rgba(163, 230, 53, 0.12)" }}
        >
          <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-[#a3e635]">
            Ton premier client
          </p>
          <p className="text-[1.75rem] font-extrabold tracking-tight text-white md:text-[2rem]">
            1 000 à 2 000€
          </p>
          <p className="mt-1 text-[0.8125rem] text-white/55">
            en moins de 52 jours, en moyenne sur +1 018 élèves
          </p>
        </div>
      </div>

      {/* Conclusion ROI */}
      <div
        className="mx-auto mt-4 flex max-w-[760px] items-center gap-4 rounded-2xl border-2 border-gold-400/35 bg-gradient-to-b from-[#181820] to-[#0d0d11] p-6 md:gap-5 md:p-7"
        style={{ boxShadow: "0 0 50px rgba(255, 122, 0, 0.14)" }}
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-400/40 bg-gold-400/10 text-gold-400">
          <TrendUp size={26} weight="bold" />
        </span>
        <p className="text-[0.9375rem] leading-[1.6] text-white md:text-[1.0625rem]">
          En moyenne, nos membres signent leur premier client en{" "}
          <strong className="text-white">moins de 52 jours</strong>. Soit{" "}
          <strong className="text-gold-400">
            jusqu&apos;à 2 fois ta mise récupérée
          </strong>{" "}
          dès le premier contrat, et un revenu qui revient ensuite{" "}
          <strong className="text-white">chaque mois</strong>. Aucun
          placement ne fait ça.
        </p>
      </div>
    </section>
  );
}
