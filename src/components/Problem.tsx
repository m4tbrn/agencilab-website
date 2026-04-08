"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const facts = [
  {
    stat: "1 850€",
    label: "Salaire médian net en France",
    source: "INSEE, 2024",
    detail: "La moitié des Français gagnent moins que ça. Et ce chiffre n'a presque pas bougé en 10 ans en pouvoir d'achat réel.",
  },
  {
    stat: "15%",
    label: "Inflation cumulée depuis 2020",
    source: "INSEE, indice des prix à la consommation",
    detail: "Les prix ont augmenté de 15% en 5 ans. Ton salaire, lui, n'a pas suivi au même rythme. Résultat : tu es plus pauvre qu'avant, même si ton salaire a un peu monté.",
  },
  {
    stat: "2030",
    label: "Le système de retraite sera en déficit",
    source: "Cour des comptes, 2024",
    detail: "La Cour des comptes le dit : le système ne tiendra pas. Compter dessus pour tes vieux jours, c'est un pari risqué.",
  },
  {
    stat: "60%",
    label: "Des 25-35 ans pensent vivre moins bien que leurs parents",
    source: "IFOP, 2024",
    detail: "Ce n'est pas une impression. C'est un fait. Pour le même diplôme et le même travail, ta génération a moins de pouvoir d'achat.",
  },
];

function Calculator() {
  const [salary, setSalary] = useState(2000);
  const inflationRate = 0.025; // ~2.5% annuel moyen 2020-2025 (source: INSEE via aops.fr)

  const monthlyLoss = Math.round(salary * inflationRate);
  const yearlyLoss = monthlyLoss * 12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-2xl p-8 lg:p-10"
    >
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-center sm:text-3xl">
        Combien tu perds chaque année avec l&apos;inflation ?
      </h3>
      <p className="mb-8 text-center text-sm text-white/40">
        Entre ton salaire net mensuel. On te montre ce que l&apos;inflation te coûte vraiment.
      </p>

      {/* Slider */}
      <div className="mx-auto max-w-md">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-white/40">Ton salaire net</span>
          <span className="text-2xl font-bold gradient-text">{salary.toLocaleString("fr-FR")}€</span>
        </div>
        <input
          type="range"
          min={1200}
          max={5000}
          step={50}
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #015FFF 0%, #015FFF ${((salary - 1200) / (5000 - 1200)) * 100}%, rgba(255,255,255,0.1) ${((salary - 1200) / (5000 - 1200)) * 100}%, rgba(255,255,255,0.1) 100%)`,
          }}
        />
        <div className="mt-1 flex justify-between text-xs text-white/20">
          <span>1 200€</span>
          <span>5 000€</span>
        </div>
      </div>

      {/* Results */}
      <div className="mx-auto mt-8 grid max-w-md gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-white/5 p-5 text-center">
          <p className="text-sm text-white/40">Tu perds chaque mois</p>
          <p className="mt-1 text-xl font-bold text-red-500 sm:text-2xl">-{monthlyLoss}€</p>
          <p className="mt-1 text-xs text-white/20">de pouvoir d&apos;achat</p>
        </div>
        <div className="rounded-xl border border-accent-400/20 bg-accent-400/5 p-5 text-center">
          <p className="text-sm text-white/40">Soit chaque année</p>
          <p className="mt-1 text-xl font-bold text-accent-400 sm:text-2xl">-{yearlyLoss.toLocaleString("fr-FR")}€</p>
          <p className="mt-1 text-xs text-white/20">qui disparaissent</p>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-sm text-center text-sm text-white/30">
        Et ça continue chaque année. À moins que tu crées une source de revenus qui, elle, <span className="text-white/60 font-medium">grandit avec le temps</span>.
      </p>

    </motion.div>
  );
}

export default function Problem() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" id="probleme">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-navy-700/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-accent-400/80">
            Tu le sens toi aussi ?
          </span>
          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-5xl">
            Le CDI n&apos;est plus aussi sûr qu&apos;avant.
            <br />
            <span className="text-white/50">Et ton salaire ne suit plus.</span>
          </h2>
        </motion.div>

        {/* Chiffres sourcés */}
        <div className="mb-16 grid gap-5 sm:grid-cols-2">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-7"
            >
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-2xl font-bold gradient-text sm:text-3xl">{fact.stat}</span>
              </div>
              <h3 className="mb-2 text-base font-bold tracking-tight">{fact.label}</h3>
              <p className="text-sm leading-relaxed text-white/40">{fact.detail}</p>
              <p className="mt-3 text-xs font-medium text-white/20">Source : {fact.source}</p>
            </motion.div>
          ))}
        </div>

        {/* Transition text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 space-y-6"
        >
          <p className="text-lg leading-relaxed tracking-tight text-white/50 sm:text-xl">
            Ton salaire augmente de 1 ou 2% par an si t&apos;as de la chance.
            Les prix ont augmenté jusqu&apos;à 5% certaines années. Le calcul est simple : <span className="font-medium text-white">chaque année tu es un peu plus pauvre</span>.
          </p>
          <p className="border-l-2 border-accent-400/50 pl-6 text-lg font-medium leading-relaxed tracking-tight text-white sm:text-xl">
            Si tu attends que le système te sauve, tu vas attendre longtemps.
          </p>
          <p className="text-lg leading-relaxed tracking-tight text-white/50 sm:text-xl">
            La seule vraie protection, c&apos;est de devenir autonome. Pas en quittant tout du jour au lendemain.
            Mais en apprenant une compétence très rentable, intelligemment, à côté de ton emploi.
          </p>
        </motion.div>

        {/* Calculateur */}
        <Calculator />

      </div>
    </section>
  );
}
