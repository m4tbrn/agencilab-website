"use client";

import { motion } from "framer-motion";

export default function IncomeComparison() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" id="revenus">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-navy-700/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-20 text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-accent-400/80">
            Heureusement j&apos;ai une bonne nouvelle pour toi
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-5xl">
            Internet a ouvert la porte à un 3ème chemin
            <br />
            <span className="text-white/50">(Que personne ne t&apos;a montré)</span>
          </h2>
        </motion.div>

        {/* Revenue comparison graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-2xl p-6 sm:p-8 lg:p-12"
        >
          <div className="relative mx-auto max-w-3xl">
            <svg viewBox="0 0 700 440" className="w-full" fill="none">
              {/* Grid */}
              <line x1="80" y1="40" x2="80" y2="300" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="80" y1="300" x2="640" y2="300" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              {/* Horizontal guides */}
              <line x1="80" y1="240" x2="640" y2="240" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4" />
              <line x1="80" y1="180" x2="640" y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4" />
              <line x1="80" y1="120" x2="640" y2="120" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4" />
              <line x1="80" y1="60" x2="640" y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4" />

              {/* Y axis title */}
              <text x="15" y="170" fill="rgba(255,255,255,0.2)" fontSize="10" textAnchor="middle" transform="rotate(-90 15 170)">Revenus mensuels (€/mois)</text>

              {/* Zero line */}
              <line x1="80" y1="280" x2="640" y2="280" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <text x="68" y="284" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="end">0€</text>

              {/* Y axis labels */}
              <text x="68" y="244" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="end">1 000€</text>
              <text x="68" y="184" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="end">2 000€</text>
              <text x="68" y="124" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="end">3 000€</text>
              <text x="68" y="64" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="end">4 000€</text>

              {/* X axis title */}
              <text x="360" y="345" fill="rgba(255,255,255,0.2)" fontSize="10" textAnchor="middle">Temps (mois)</text>

              {/* X axis — M0 to M6 */}
              <text x="80" y="325" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="middle">M0</text>
              <text x="173" y="325" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="middle">M1</text>
              <text x="266" y="325" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="middle">M2</text>
              <text x="360" y="325" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="middle">M3</text>
              <text x="453" y="325" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="middle">M4</text>
              <text x="546" y="325" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="middle">M5</text>
              <text x="640" y="325" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="middle">M6</text>

              {/* === SALARIÉ LINE === flat ~2000€ with small prime bump */}
              <path
                d="M80 180 L173 180 L266 180 L360 180 L380 172 L400 180 L453 180 L546 180 L640 178"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* === STARTUP LINE === negative then zigzag */}
              <path
                d="M80 280 L120 295 L173 310 L220 308 L266 295 L310 270 L360 250 L400 270 L453 220 L500 245 L546 200 L590 220 L640 190"
                stroke="rgba(239,68,68,0.5)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* === GROWTH MARKETER LINE === premiers revenus M1.5, 3500€ à M4 */}
              <path
                d="M80 280 L220 280 L220 250 L310 250 L310 210 L400 210 L400 150 L453 150 L453 80 L546 80 L640 75"
                stroke="#015FFF"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Growth Marketing area fill */}
              <path
                d="M80 280 L220 280 L220 250 L310 250 L310 210 L400 210 L400 150 L453 150 L453 80 L546 80 L640 75 L640 300 L80 300 Z"
                fill="url(#cmoGrad)"
                opacity="0.08"
              />

              {/* Below zero zone for startup */}
              <rect x="80" y="280" width="560" height="30" fill="rgba(239,68,68,0.03)" />
              <text x="150" y="318" fill="rgba(239,68,68,0.3)" fontSize="9">Zone négative</text>

              {/* Legend — centered */}
              <line x1="170" y1="380" x2="190" y2="380" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" />
              <text x="198" y="384" fill="rgba(255,255,255,0.5)" fontSize="11">Salarié</text>

              <line x1="280" y1="380" x2="300" y2="380" stroke="rgba(239,68,68,0.5)" strokeWidth="2.5" />
              <text x="308" y="384" fill="rgba(255,255,255,0.5)" fontSize="11">Entrepreneur</text>

              <line x1="420" y1="380" x2="440" y2="380" stroke="#015FFF" strokeWidth="3" />
              <text x="448" y="384" fill="#015FFF" fontSize="11" fontWeight="600">Growth Marketer</text>

              {/* Value labels on lines */}
              <text x="650" y="175" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="start">~2 000€</text>
              {/* Growth Marketer paliers */}
              <text x="265" y="246" fill="rgba(1,95,255,0.5)" fontSize="9" textAnchor="middle">500€</text>
              <text x="355" y="205" fill="rgba(1,95,255,0.5)" fontSize="9" textAnchor="middle">1 500€</text>
              <text x="426" y="145" fill="rgba(1,95,255,0.5)" fontSize="9" textAnchor="middle">2 500€</text>
              <text x="500" y="72" fill="#015FFF" fontSize="10" fontWeight="600" textAnchor="middle">3 500€+</text>
              <text x="640" y="186" fill="rgba(239,68,68,0.4)" fontSize="9" textAnchor="end">Entrepreneur</text>
              <text x="640" y="68" fill="#015FFF" fontSize="9" fontWeight="600" textAnchor="end">Growth Marketer</text>

              <defs>
                <linearGradient id="cmoGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#015FFF" />
                  <stop offset="100%" stopColor="#015FFF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* 3 columns explanation */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-2xl p-7"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-white/30" />
              <h4 className="font-bold tracking-tight">Salarié (CDD / CDI / Alternance)</h4>
            </div>
            <p className="text-sm leading-relaxed text-white/40">
              ~2 000€/mois. Stable mais plafonné. Quelques primes par-ci
              par-là. Dans 10 ans, +200€ si t&apos;as de la chance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-2xl p-7"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <h4 className="font-bold tracking-tight">Entrepreneur</h4>
            </div>
            <p className="text-sm leading-relaxed text-white/40">
              Dans le négatif pendant des mois. Puis des revenus en dents de
              scie. Risque maximal, stress permanent, résultats incertains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-accent-400/20 bg-accent-400/5 p-7"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-accent-400" />
              <h4 className="font-bold tracking-tight text-accent-400">Growth Marketer</h4>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              L&apos;activité qu&apos;on t&apos;apprend chez Agencilab. Une activité
              indépendant basé sur une compétence très rentable que les entreprises
              recherchent activement. Pas besoin de diplôme, ni de quitter ton
              job pour l&apos;apprendre.
            </p>
            <p className="mt-3 text-sm font-medium tracking-tight text-accent-400/70">
              Lis bien ce qui suit pour tout comprendre ↓
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
