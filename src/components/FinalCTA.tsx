"use client";

import { motion } from "framer-motion";

const CTA_LINK = "#rejoindre";

const steps = [
  "On te montre le contenu de l'accompagnement",
  "Tu découvres notre méthode et nos outils",
  "On répond à toutes tes questions",
  "Tu évalues si Agencilab correspond à tes objectifs",
];

const stats = [
  { value: "1 018+", label: "Salariés accompagnés" },
  { value: "2 987€", label: "Revenu moyen généré/mois" },
  { value: "4.7/5", label: "Sur Trustpilot" },
];

export default function FinalCTA() {
  return (
    <section className="marble-bg py-16 lg:py-24" id="rejoindre">
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-navy-600">
            Comment nous rejoindre ?
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
            Découvre si Agencilab est fait pour toi
            <br />
            <span className="text-navy-600">lors d&apos;un appel gratuit.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed tracking-tight text-navy-950/50">
            En cliquant sur le bouton, tu ne t&apos;engages à rien.
            Tu demandes simplement à découvrir l&apos;accompagnement lors
            d&apos;un appel personnalisé avec un conseiller.
          </p>
        </motion.div>

        {/* CTA + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <a
            href={CTA_LINK}
            className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-8 py-4 text-base font-bold tracking-tight text-navy-950 sm:px-12 sm:py-5 sm:text-lg"
          >
            Réserver mon appel gratuit
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-lg font-bold tracking-tight text-navy-950">{stat.value}</span>
                <span className="text-xs tracking-tight text-navy-950/40">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pendant cet appel — cards horizontales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <h3 className="mb-10 text-center text-xl font-bold tracking-tight text-navy-950">
            Pendant cet appel :
          </h3>
          <div className="mx-auto max-w-xl space-y-3 lg:hidden">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-navy-950/5 bg-white p-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy-950 text-base font-bold text-accent-400">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed tracking-tight text-navy-950/60">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden gap-5 lg:grid lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="rounded-2xl border border-navy-950/5 bg-white p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-navy-950/5"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-lg font-bold text-accent-400">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed tracking-tight text-navy-950/60">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center justify-center gap-6 text-sm text-navy-950/40 sm:flex-row"
        >
          {["100% gratuit", "45 minutes avec un conseiller", "Sans engagement"].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
