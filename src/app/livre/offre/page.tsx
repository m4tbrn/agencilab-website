"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const modules = [
  { week: "Semaine 1", title: "Ton offre en béton", desc: "Choisir ta niche, construire ton offre irrésistible, fixer ton prix, rédiger ta promesse. Templates fournis." },
  { week: "Semaine 2", title: "Ta machine à prospects", desc: "Créer ta page de capture, écrire ta séquence email, lancer ta première campagne de prospection. Scripts de DM + cold email fournis." },
  { week: "Semaine 3", title: "Closer sans forcer", desc: "Le script d'appel de vente mot-à-mot, gérer les objections, closer sans être pushy. Enregistrements de vrais calls fournis." },
  { week: "Semaine 4", title: "Livrer et fidéliser", desc: "Onboarding client, process de livraison, demander des témoignages, transformer 1 client en 3. Templates de reporting fournis." },
];

const bonuses = [
  "Les 12 templates prêts à l'emploi (offre, pitch, contrat, facture, email, DM, page de capture, script de call...)",
  "Accès au groupe Telegram privé pendant 30 jours avec retours personnalisés de l'équipe",
];

export default function OffrePage() {
  return (
    <div className="min-h-screen bg-book-cream text-book-green-dark">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-6">
        {/* Header urgence */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8 rounded-xl bg-red-500 py-3 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-white">
            Attends — ta commande n'est pas encore complète
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-10 text-center"
        >
          <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Signe tes 3 premiers clients dans les 30 prochains jours
            <br />
            <span className="text-book-green">ou je te rembourse intégralement.</span>
          </h1>

          {/* Placeholder vidéo */}
          <div className="mx-auto mt-8 max-w-xl overflow-hidden rounded-2xl border border-book-green/10 bg-white">
            <div className="flex h-[300px] items-center justify-center bg-book-green-dark/5">
              <span className="text-sm text-book-green-dark/30">Vidéo de Louis — Placeholder</span>
            </div>
          </div>
        </motion.div>

        {/* Le problème */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mb-10 rounded-2xl border border-book-green/8 bg-white p-6 sm:p-8"
        >
          <p className="text-base leading-relaxed tracking-tight text-book-green-dark/70">
            Tu as le livre. Tu as le plan. Mais soyons honnêtes : 90% des gens qui achètent un
            livre ne passent jamais à l'action. Pas parce qu'ils sont nuls. Parce qu'il y a un
            gouffre entre savoir et faire.{" "}
            <strong className="text-book-green-dark">Le Sprint 30 Jours comble ce gouffre.</strong>
          </p>
        </motion.div>

        {/* Les 4 modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mb-10"
        >
          <h2 className="mb-6 text-center text-xl font-bold tracking-tight sm:text-2xl">
            Le Sprint 30 Jours — Tes Premiers Clients en un Mois
          </h2>

          <div className="space-y-4">
            {modules.map((mod, i) => (
              <div key={mod.week} className="flex items-start gap-4 rounded-xl border border-book-green/8 bg-white p-5">
                <span className="flex-shrink-0 rounded-lg bg-book-green px-3 py-1.5 text-xs font-bold text-white">
                  {mod.week}
                </span>
                <div>
                  <p className="text-base font-bold tracking-tight">{mod.title}</p>
                  <p className="mt-1 text-sm leading-relaxed tracking-tight text-book-green-dark/60">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bonus */}
        <div className="mb-10 rounded-2xl border border-book-gold/30 bg-book-gold/5 p-6">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-book-gold">Bonus inclus</p>
          {bonuses.map((b) => (
            <div key={b} className="mb-3 flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-book-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-sm leading-relaxed tracking-tight text-book-green-dark/70">{b}</p>
            </div>
          ))}
        </div>

        {/* Garantie */}
        <div className="mb-10 rounded-2xl border-2 border-book-green/15 bg-white p-6 text-center">
          <p className="text-base leading-relaxed tracking-tight text-book-green-dark/70">
            Si tu suis le plan à la lettre pendant 30 jours et que tu n'as pas signé au moins
            1 client, <strong className="text-book-green-dark">je te rembourse. Pas de questions. Pas de conditions cachées.</strong>
          </p>
        </div>

        {/* Prix */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm tracking-tight text-book-green-dark/40">
            Le programme + les 12 templates + le groupe privé = 791€ de valeur
          </p>
          <p className="text-sm tracking-tight text-book-green-dark/60">
            Aujourd'hui, uniquement sur cette page, tout pour :
          </p>
          <p className="mt-2 text-4xl font-bold tracking-tight text-book-green">297€</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/livre/confirmation"
            className="cta-button group mb-4 inline-flex items-center gap-3 rounded-xl bg-book-green px-10 py-5 text-lg font-bold tracking-tight text-white transition-all duration-300 hover:bg-book-green-light hover:shadow-[0_8px_30px_rgba(27,94,59,0.3)]"
          >
            OUI, J'AJOUTE LE SPRINT 30 JOURS
            <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <p className="mt-4">
            <a
              href="/livre/option"
              className="text-sm tracking-tight text-book-green-dark/40 underline transition-colors hover:text-book-green-dark/60"
            >
              Non merci, je préfère me débrouiller seul
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
