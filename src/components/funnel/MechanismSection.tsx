import {
  Briefcase,
  ChartLineUp,
  CurrencyEur,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Section "Le mécanisme unique",explique en clair ce qu'est l'activité
 * Growth Marketing pour les audiences chaudes (newsletter / bienvenue)
 * qui ont besoin d'un cadre concret avant de prendre RDV.
 */
export default function MechanismSection() {
  return (
    <section className="mt-14 md:mt-20">
      {/* Title */}
      <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-14">
        <h2 className="mb-4 text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-white">
          C&apos;est quoi le{" "}
          <span className="gradient-text">Growth Marketing</span>{" "}?
        </h2>
        <p className="mx-auto mb-4 max-w-[680px] text-[1rem] font-semibold leading-[1.5] text-white/85 md:text-[1.125rem]">
          Concrètement, c&apos;est{" "}
          <span className="text-white">
            aider des entreprises à trouver plus de clients
          </span>{" "}
          grâce au marketing digital.
        </p>
        <p className="mx-auto max-w-[640px] text-[0.9375rem] leading-[1.55] text-white/70 md:text-[1.0625rem]">
          Tu deviens le bras droit marketing de petites et moyennes
          entreprises (restaurants, coachs, agents immobiliers, artisans...)
          qui n&apos;ont ni le temps ni les compétences pour le faire
          elles-mêmes. Elles te paient plusieurs milliers d&apos;euros par
          mois en récurrent pour ces résultats.
        </p>
      </div>

      {/* 4 piliers du mécanisme,bloc majeur avec visualisations */}
      <div className="mx-auto grid max-w-[1100px] gap-5 md:gap-6 lg:grid-cols-2">
        {/* Pilier 1,Aucun produit à créer */}
        <div className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-400/10 text-accent-400">
            <Briefcase size={26} weight="bold" />
          </div>
          <h3 className="mb-3 text-[1.25rem] font-bold tracking-tight text-white md:text-[1.5rem]">
            Aucun produit à créer
          </h3>
          <p className="mb-6 text-[0.9375rem] leading-[1.55] text-white/70 md:text-[1rem]">
            Tu vends ton{" "}
            <strong className="text-white">expertise</strong>, pas un produit
            physique. Pas de stock, pas de livraison, pas de SAV,tu n&apos;as
            rien à investir au démarrage.
          </p>
          {/* Visualisation : comparaison "Avec produit" vs "Avec expertise" */}
          <div className="mt-auto space-y-3 rounded-2xl bg-navy-950/40 p-4 md:p-5">
            <div className="opacity-70">
              <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-red-400/80">
                Avec un produit physique
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Stock",
                  "Livraison",
                  "SAV",
                  "5-10k€ capital",
                  "6-12 mois",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-red-500/20 bg-red-500/[0.06] px-2.5 py-1 text-[0.6875rem] font-semibold text-red-400/90"
                  >
                    ✕ {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-white/5 pt-3">
              <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-accent-400">
                Avec ton expertise
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-md border border-accent-400/30 bg-accent-400/[0.08] px-2.5 py-1 text-[0.6875rem] font-semibold text-accent-400">
                  ✓ Un ordinateur
                </span>
                <span className="rounded-md border border-accent-400/30 bg-accent-400/[0.08] px-2.5 py-1 text-[0.6875rem] font-semibold text-accent-400">
                  ✓ Démarrage en 1 semaine
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pilier 2,Marché énorme */}
        <div className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-400/10 text-accent-400">
            <ChartLineUp size={26} weight="bold" />
          </div>
          <h3 className="mb-3 text-[1.25rem] font-bold tracking-tight text-white md:text-[1.5rem]">
            Marché énorme, demande immense
          </h3>
          <p className="mb-6 text-[0.9375rem] leading-[1.55] text-white/70 md:text-[1rem]">
            <strong className="text-white">4 millions d&apos;entreprises</strong>{" "}
            en France, dont <strong className="text-white">80%</strong>{" "}
            n&apos;ont aucune stratégie marketing. La demande dépasse
            largement l&apos;offre.
          </p>
          {/* Visualisation : big number + barres 80/20 */}
          <div className="mt-auto rounded-2xl bg-navy-950/40 p-4 md:p-5">
            <div className="mb-4 text-center">
              <p className="text-[2rem] font-black leading-none tracking-tight md:text-[2.5rem]">
                <span className="gradient-text">4 000 000</span>
              </p>
              <p className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-white/50">
                entreprises en France
              </p>
            </div>
            <div className="space-y-2.5">
              <div>
                <div className="mb-1 flex justify-between text-[0.6875rem] font-semibold">
                  <span className="text-red-400/90">Sans stratégie marketing</span>
                  <span className="text-red-400">80%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-red-500/60 to-red-400/80"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-[0.6875rem] font-semibold">
                  <span className="text-accent-400">Avec stratégie marketing</span>
                  <span className="text-accent-400">20%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-accent-400/60 to-accent-400"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pilier 3,Revenu récurrent */}
        <div className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/10 text-gold-400">
            <CurrencyEur size={26} weight="bold" />
          </div>
          <h3 className="mb-3 text-[1.25rem] font-bold tracking-tight text-white md:text-[1.5rem]">
            Revenu récurrent, mois après mois
          </h3>
          <p className="mb-6 text-[0.9375rem] leading-[1.55] text-white/70 md:text-[1rem]">
            Un client te paie{" "}
            <strong className="text-white">1 000 à 2 000€/mois</strong>{" "}
            tant qu&apos;il a des résultats.{" "}
            <strong className="text-gold-400">3 clients = tu remplaces ton salaire</strong>.
          </p>
          {/* Visualisation : barres mois 1/2/3, mois 2 surligné comme inflection point */}
          <div className="mt-auto rounded-2xl bg-navy-950/40 p-4 md:p-5">
            <p className="mb-3 text-center text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-white/50">
              Exemple : Cumul mensuel sur 3 mois
            </p>
            <div className="flex items-end justify-center gap-3 md:gap-4">
              {[
                {
                  month: "Mois 1",
                  clients: 1,
                  amount: 1000,
                  badge: null,
                  barHeight: 56,
                },
                {
                  month: "Mois 2",
                  clients: 2,
                  amount: 2000,
                  badge: null,
                  barHeight: 96,
                },
                {
                  month: "Mois 3",
                  clients: 3,
                  amount: 3000,
                  badge: "3 000€",
                  barHeight: 132,
                },
              ].map((m) => (
                <div key={m.month} className="flex flex-1 flex-col items-center">
                  {/* Émojis clients (un par client signé) */}
                  <div
                    className="mb-1.5 flex items-center justify-center gap-0.5 leading-none"
                    aria-label={`${m.clients} client${m.clients > 1 ? "s" : ""}`}
                  >
                    {Array.from({ length: m.clients }).map((_, idx) => (
                      <span
                        key={idx}
                        className="text-[0.875rem] md:text-[1rem]"
                      >
                        💼
                      </span>
                    ))}
                  </div>
                  {m.badge ? (
                    <span className="mb-1.5 rounded-full border border-gold-400/40 bg-gold-400/15 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-gold-400 md:text-[0.6875rem]">
                      {m.badge}
                    </span>
                  ) : (
                    <span className="mb-1.5 text-[0.75rem] font-bold text-gold-400/80 md:text-[0.8125rem]">
                      {m.amount.toLocaleString("fr-FR")}€
                    </span>
                  )}
                  <div
                    className={`w-full rounded-t-lg ${
                      m.badge
                        ? "bg-gradient-to-t from-gold-400/60 to-gold-400 ring-2 ring-gold-400/40"
                        : "bg-gradient-to-t from-gold-400/30 to-gold-400/70"
                    }`}
                    style={{ height: `${m.barHeight}px` }}
                  />
                  <span className="mt-1.5 text-[0.625rem] font-medium uppercase tracking-wider text-white/40 md:text-[0.6875rem]">
                    {m.month}
                  </span>
                  <span className="text-[0.625rem] text-white/30">
                    {m.clients} client{m.clients > 1 ? "s" : ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pilier 4,L'IA fait le levier */}
        <div className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-400/10 text-accent-400">
            <Sparkle size={26} weight="bold" />
          </div>
          <h3 className="mb-3 text-[1.25rem] font-bold tracking-tight text-white md:text-[1.5rem]">
            L&apos;IA fait le levier
          </h3>
          <p className="mb-6 text-[0.9375rem] leading-[1.55] text-white/70 md:text-[1rem]">
            Ce qui prenait <strong className="text-white">4h hier</strong>{" "}
            (créer un email, une pub, un visuel) prend{" "}
            <strong className="text-white">30 min aujourd&apos;hui</strong>.
            Tu produis plus, plus vite.
          </p>
          {/* Visualisation : 8x multiplier + barres temps */}
          <div className="mt-auto rounded-2xl bg-navy-950/40 p-4 md:p-5">
            <div className="mb-4 text-center">
              <p className="text-[2rem] font-black leading-none tracking-tight md:text-[2.5rem]">
                <span className="gradient-text">8x</span>
              </p>
              <p className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-white/50">
                plus rapide qu&apos;avant
              </p>
            </div>
            <div className="space-y-2.5">
              <div>
                <div className="mb-1 flex justify-between text-[0.6875rem] font-semibold">
                  <span className="text-white/50">Avant l&apos;IA</span>
                  <span className="text-white/50">4 h</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full bg-white/25"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-[0.6875rem] font-semibold">
                  <span className="text-accent-400">Avec l&apos;IA</span>
                  <span className="text-accent-400">30 min</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-accent-400/60 to-accent-400"
                    style={{ width: "12.5%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process en 3 étapes */}
      <div className="mx-auto mt-12 max-w-[760px] rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:mt-16 md:p-10">
        <h3 className="mb-6 text-center text-[1.125rem] font-bold tracking-tight text-white md:text-[1.25rem]">
          En 3 étapes simples
        </h3>
        <ol className="space-y-5">
          {[
            {
              num: "1",
              title: "Tu apprends une compétence concrète",
              body:
                "Génération de leads, gestion de pubs, automatisation email : la méthode est conçue pour partir de zéro, en 45 min/jour.",
            },
            {
              num: "2",
              title: "Tu trouves tes premiers clients",
              body:
                "On t'apprend les méthodes les plus efficaces pour décrocher tes 2-3 premiers clients en parallèle de ton emploi.",
            },
            {
              num: "3",
              title: "Tu gardes tes clients sur la durée",
              body:
                "Les résultats que tu produis font qu'ils te paient chaque mois, sans avoir à re-prospecter. Tu construis ton deuxième salaire de façon stable.",
            },
          ].map((step) => (
            <li key={step.num} className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-[1rem] font-bold text-accent-400">
                {step.num}
              </span>
              <div className="flex-1 pt-0.5">
                <p className="mb-1 text-[0.9375rem] font-semibold text-white md:text-[1rem]">
                  {step.title}
                </p>
                <p className="text-[0.875rem] leading-[1.55] text-white/65 md:text-[0.9375rem]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
