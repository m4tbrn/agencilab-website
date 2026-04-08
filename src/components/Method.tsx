"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Apprends les compétences",
    description:
      "Copywriting, publicités, réseaux sociaux, email marketing, sites internet… Tu apprends les compétences concrètes que les entreprises recherchent. Pas de théorie inutile — uniquement ce qui génère des résultats.",
    duration: "Les premières semaines",
  },
  {
    number: "02",
    title: "Trouve tes premiers clients",
    description:
      "Grâce à notre méthode éprouvée, tu décroches tes premiers clients. Le restaurant du quartier, le coach sportif, l'agent immobilier… Des entreprises autour de toi qui ont un besoin urgent.",
    duration: "Dès le premier mois",
  },
  {
    number: "03",
    title: "Facture et développe",
    description:
      "Tu livres des résultats concrets, tu factures, et tu construis une activité récurrente. Un même client peut te payer plusieurs milliers d'euros par mois. Sans prospecter en permanence.",
    duration: "À partir du mois 2-3",
  },
  {
    number: "04",
    title: "Accompagnement continu",
    description:
      "Un coach dédié, des appels de groupe hebdomadaires, une communauté de pairs et des séminaires en présentiel. Tu n'es jamais seul. On t'accompagne jusqu'aux résultats.",
    duration: "Tout au long du parcours",
  },
];

export default function Method() {
  return (
    <section className="relative py-16 lg:py-24" id="methode">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-navy-700/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/logo-white.png"
              alt="Agencilab"
              width={160}
              height={40}
              className="h-8 w-auto opacity-60"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            L&apos;accompagnement n°1 pour faire
            <br />
            <span className="gradient-text">+3 500€ par mois</span> <span className="text-white/50">à côté de ton salaire.</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card rounded-2xl p-8 lg:p-10 group hover:border-accent-400/10 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                <div className="flex-shrink-0">
                  <span className="text-5xl font-bold tracking-tight gradient-text opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <span className="text-sm text-accent-400/60 tracking-tight">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-white/50 leading-relaxed tracking-tight">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alic.ia block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 glass-card overflow-hidden rounded-2xl"
        >
          <div className="grid items-center lg:grid-cols-[1fr_auto]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-block rounded-full bg-gold-400 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy-950">
                  Bonus
                </span>
                <Image
                  src="/images/alicia.jpg"
                  alt="Alic.ia"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover lg:hidden"
                  unoptimized
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Livre tes services en <span className="gradient-text">2h par jour</span>
              </h3>
              <p className="max-w-lg leading-relaxed text-white/50">
                On met à ta disposition nos intelligences artificielles développées en interne.
                Alic.ia fait le gros du travail pour toi : rédaction, création de sites, emails,
                publicités. Toi, tu supervises et tu livres un résultat professionnel à ton client
                en une fraction du temps.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-white/60">Sites internet</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-white/60">Emails</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-white/60">Publicités</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-white/60">Réseaux sociaux</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-white/60">SEO</span>
              </div>
            </div>
            <div className="hidden items-center justify-center p-6 lg:flex lg:p-8">
              <Image
                src="/images/alicia.jpg"
                alt="Alic.ia — Intelligence artificielle Agencilab"
                width={280}
                height={280}
                className="w-[200px] rounded-2xl sm:w-[240px] lg:w-[280px]"
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <div className="flex items-center gap-4 rounded-2xl border-2 border-accent-400/40 bg-accent-400/10 px-8 py-6 shadow-[0_0_30px_rgba(1,95,255,0.15),0_0_60px_rgba(1,95,255,0.05)] sm:px-10 sm:py-8">
            <svg
              className="h-8 w-8 flex-shrink-0 text-accent-400 sm:h-10 sm:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            <p className="text-base tracking-tight text-white/70 sm:text-lg">
              <span className="font-bold text-accent-400">
                Garantie contractuelle
              </span>{" "}
              : si tu suis la méthode et que tu n&apos;atteins pas les
              résultats, on t&apos;accompagne jusqu&apos;à ce que tu sois
              rentable.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <a
            href="#rejoindre"
            className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-8 py-4 text-base font-bold tracking-tight text-navy-950 sm:text-lg"
          >
            Réserver mon appel gratuit
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <span className="text-sm tracking-tight text-white/30">
            Appel de 45 min, 100% gratuit, sans engagement
          </span>
        </motion.div>
      </div>
    </section>
  );
}
