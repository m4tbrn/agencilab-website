"use client";

import { motion } from "framer-motion";

const rows: { label: string; agencilab: string; ecole: string; highlight?: boolean }[] = [
  { label: "Durée", agencilab: "Quelques semaines", ecole: "3 à 5 ans" },
  { label: "Premier client", agencilab: "Dès le mois 1", ecole: "Après le diplôme (peut-être)" },
  { label: "Compétences terrain", agencilab: "Trouver un client, vendre, livrer", ecole: "Études de cas Coca-Cola" },
  { label: "Accompagnement", agencilab: "Coach dédié + communauté", ecole: "Cours magistraux à 300 élèves" },
  { label: "Compatible avec un emploi", agencilab: "Oui, 45 min/jour", ecole: "Non, temps plein" },
  { label: "Revenus pendant la formation", agencilab: "Tu gardes ton salaire + premiers revenus", ecole: "Aucun (tu paies)" },
  { label: "Garantie résultat", agencilab: "Contractuelle, rédigée par avocat", ecole: "Aucune" },
  { label: "Prix", agencilab: "Révélé en appel", ecole: "20 000 – 50 000€", highlight: true },
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

export default function Comparison() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" id="comparaison">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-navy-700/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-accent-400/80">
            Agencilab vs École de commerce
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-5xl">
            4x plus de compétences qu&apos;une école de commerce
            <br />
            <span className="gradient-text">pour une fraction du prix.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg tracking-tight text-white/40">
            Des milliers d&apos;euros d&apos;écart. Des années d&apos;écart. Et surtout : des résultats concrets vs. de la théorie.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-2xl border border-white/5"
        >
          {/* Table */}
          <div className="grid grid-cols-3 border-b border-white/5 bg-white/[0.02]">
            <div className="p-3 sm:p-4 lg:p-5" />
            <div className="border-l border-white/5 bg-accent-400/5 p-3 text-center sm:p-4 lg:p-5">
              <span className="text-xs font-bold tracking-tight text-accent-400 sm:text-sm">Agencilab</span>
            </div>
            <div className="border-l border-white/5 p-3 text-center sm:p-4 lg:p-5">
              <span className="text-xs font-bold tracking-tight text-white/40 sm:text-sm">École de commerce</span>
            </div>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-white/5" : ""} ${row.highlight ? "bg-accent-400/5 border-t border-accent-400/20" : ""}`}
            >
              <div className="flex items-center p-3 sm:p-4 lg:p-5">
                <span className={`text-xs font-medium tracking-tight sm:text-sm ${row.highlight ? "font-bold text-accent-400" : "text-white/70"}`}>{row.label}</span>
              </div>
              <div className="flex items-center gap-1.5 border-l border-white/5 bg-accent-400/[0.02] p-3 sm:gap-2.5 sm:p-4 lg:p-5">
                <CheckIcon />
                <span className={`text-xs tracking-tight sm:text-sm ${row.highlight ? "font-bold text-accent-400" : "text-white/80"}`}>{row.agencilab}</span>
              </div>
              <div className="flex items-center gap-1.5 border-l border-white/5 p-3 sm:gap-2.5 sm:p-4 lg:p-5">
                <CrossIcon />
                <span className={`text-xs tracking-tight sm:text-sm ${row.highlight ? "font-bold text-red-500" : "text-white/40"}`}>{row.ecole}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-lg text-center text-sm leading-relaxed text-white/30"
        >
          Les écoles de commerce forment à la théorie. Agencilab forme au terrain.
          <br />
          <span className="font-medium text-white/50">On n&apos;a jamais vu de la théorie payer les factures.</span>
        </motion.p>
      </div>
    </section>
  );
}
