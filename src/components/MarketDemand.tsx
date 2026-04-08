"use client";

import { motion } from "framer-motion";

export default function MarketDemand() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" id="marche">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-navy-700/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-accent-400/80">
            Est-ce que le marché est saturé ?
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-5xl">
            La demande écrase l&apos;offre.
            <br />
            <span className="text-white/50">Et c&apos;est une opportunité énorme.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed tracking-tight text-white/50">
            Des millions d&apos;entreprises cherchent quelqu&apos;un pour les aider
            à trouver des clients en ligne. Le kiné, le restaurant, le coach sportif,
            l&apos;agent immobilier, aucun n&apos;a le temps ni les compétences pour
            gérer son marketing. Ils sont prêts à payer 1 000 à 3 000€/mois
            pour que quelqu&apos;un le fasse à leur place.
            <span className="font-medium text-white"> Ce quelqu&apos;un, ça peut être toi, même sans expérience.</span>
          </p>
        </motion.div>

        {/* Stats visuelles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 grid gap-6 sm:grid-cols-3"
        >
          {/* Entreprises */}
          <div className="glass-card rounded-2xl p-7 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-400/10">
              <span className="text-2xl font-bold gradient-text">4M</span>
            </div>
            <p className="text-lg font-bold tracking-tight">Entreprises en France</p>
            <p className="mt-1 text-sm text-white/40">+1 million de nouvelles chaque année</p>
          </div>

          {/* Besoin marketing */}
          <div className="glass-card rounded-2xl p-7 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-400/10">
              <span className="text-2xl font-bold gradient-text">90%</span>
            </div>
            <p className="text-lg font-bold tracking-tight">Ferment en 3 ans</p>
            <p className="mt-1 text-sm text-white/40">Parce qu&apos;elles ne savent pas trouver de clients</p>
          </div>

          {/* Peu de Growth Marketeurs */}
          <div className="glass-card rounded-2xl p-7 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-400/10">
              <span className="text-2xl font-bold gradient-text">&lt;1%</span>
            </div>
            <p className="text-lg font-bold tracking-tight">Ont un marketeur compétent</p>
            <p className="mt-1 text-sm text-white/40">Des bons marketeurs, c&apos;est très rare</p>
          </div>
        </motion.div>

        {/* Graphique demande vs offre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-2xl p-8 lg:p-10"
        >
          <h3 className="mb-8 text-center text-xl font-bold tracking-tight">
            Demande en marketing digital vs. Offre de marketeurs compétents
          </h3>
          <div className="relative mx-auto max-w-2xl">
            <svg viewBox="0 0 600 300" className="w-full" fill="none">
              {/* Grid lines */}
              <line x1="60" y1="40" x2="60" y2="250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="60" y1="250" x2="560" y2="250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="60" y1="180" x2="560" y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4" />
              <line x1="60" y1="110" x2="560" y2="110" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4" />

              {/* Demand curve — steep growth */}
              <motion.path
                d="M60 230 C150 220, 250 180, 350 120 S500 55, 560 45"
                stroke="#015FFF"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              />
              {/* Demand area fill */}
              <path
                d="M60 230 C150 220, 250 180, 350 120 S500 55, 560 45 L560 250 L60 250 Z"
                fill="url(#demandGrad)"
                opacity="0.15"
              />

              {/* Supply curve — flat, barely growing */}
              <motion.path
                d="M60 235 C150 232, 250 228, 350 222 S500 215, 560 210"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />

              {/* Gap annotation */}
              <line x1="460" y1="70" x2="460" y2="215" stroke="rgba(245,197,24,0.3)" strokeWidth="1" strokeDasharray="3" />
              <text x="472" y="145" fill="rgba(245,197,24,0.8)" fontSize="12" fontWeight="600">ÉCART</text>

              {/* Labels */}
              <text x="560" y="38" fill="#015FFF" fontSize="11" fontWeight="600" textAnchor="end">Demande</text>
              <text x="560" y="205" fill="rgba(255,255,255,0.4)" fontSize="11" fontWeight="500" textAnchor="end">Offre</text>

              {/* Y axis labels */}
              <text x="50" y="254" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="end">Bas</text>
              <text x="50" y="44" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="end">Haut</text>

              {/* X axis labels */}
              <text x="100" y="270" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle">2020</text>
              <text x="230" y="270" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle">2022</text>
              <text x="370" y="270" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle">2024</text>
              <text x="510" y="270" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle">2026</text>

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="demandGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#015FFF" />
                  <stop offset="100%" stopColor="#015FFF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="mx-auto mt-6 max-w-lg text-center text-sm leading-relaxed text-white/40">
            La demande en compétences marketing explose avec la digitalisation.
            Mais le nombre de marketeurs vraiment compétents reste quasi identique.
            <span className="font-medium text-accent-400/80"> C&apos;est là que tu interviens.</span>
          </p>
        </motion.div>

        {/* Camembert — le marché en France */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 glass-card rounded-2xl p-8 lg:p-10"
        >
          <h3 className="mb-8 text-center text-xl font-bold tracking-tight">
            Les entreprises en France
          </h3>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="relative mx-auto w-[200px] flex-shrink-0 sm:w-[240px]">
              <svg viewBox="0 0 200 200" className="w-full">
                {/* 90% rouge — commence en haut (rotation -90deg) */}
                <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(239,68,68,0.9)" strokeWidth="32" strokeDasharray="452.39 502.65" strokeDashoffset="0" transform="rotate(-90 100 100)" />
                {/* 10% doré — commence après les 90% (rotation -90 + 324deg = 234deg) */}
                <circle cx="100" cy="100" r="80" fill="none" stroke="#015FFF" strokeWidth="32" strokeDasharray="50.27 502.65" strokeDashoffset="0" transform="rotate(234 100 100)" />
                <text x="100" y="95" fill="white" fontSize="22" fontWeight="800" textAnchor="middle">4M</text>
                <text x="100" y="115" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">entreprises</text>
              </svg>
            </div>
            <div className="flex-1 space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 h-4 w-4 flex-shrink-0 rounded-sm bg-red-500" />
                <div>
                  <p className="text-base font-bold tracking-tight text-red-500">90% ferment en 3 ans</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/40">Parce qu&apos;elles ne savent pas trouver des clients.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1.5 h-4 w-4 flex-shrink-0 rounded-sm bg-accent-400" />
                <div>
                  <p className="text-base font-bold tracking-tight text-accent-400">10% survivent et grandissent</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/40">Celles qui ont quelqu&apos;un pour les aider. C&apos;est ce que tu vas apprendre à faire.</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <p className="text-sm text-white/50">
                  <span className="font-semibold text-accent-400">+1 million</span> de nouvelles entreprises chaque année. Autant de clients potentiels.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
