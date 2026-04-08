"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bricks = [
  {
    number: "1",
    name: "Site internet",
    price: "500 – 1 500€",
    description: "Tu crées un site qui convertit les visiteurs en clients. C'est la base de toute présence en ligne.",
  },
  {
    number: "2",
    name: "Email marketing",
    price: "500 – 1 000€/mois",
    description: "Tu mets en place des séquences d'emails qui vendent automatiquement. Un levier puissant que 90% des entreprises n'utilisent pas.",
  },
  {
    number: "3",
    name: "Réseaux sociaux",
    price: "500 – 1 500€/mois",
    description: "Tu gères la présence en ligne de l'entreprise. Contenu, stratégie, croissance organique.",
  },
  {
    number: "4",
    name: "Publicités en ligne",
    price: "500 – 2 000€/mois",
    description: "Tu lances et optimises des campagnes Facebook Ads, Google Ads. Le ROI est mesurable, l'entreprise voit les résultats.",
  },
  {
    number: "5",
    name: "SEO",
    price: "500 – 1 500€/mois",
    description: "Tu positionnes l'entreprise sur Google. Du trafic gratuit et qualifié qui arrive chaque mois.",
  },
];

export default function BricksMethod() {
  return (
    <section className="marble-bg py-16 lg:py-24" id="competences">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/logo-black.png"
              alt="Agencilab"
              width={160}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-navy-950 sm:text-3xl lg:text-5xl">
            Une compétence. Puis deux.<br />
            <span className="text-navy-600">Puis un client qui te paie pour tout.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed tracking-tight text-navy-950/60">
            Le marketing, c&apos;est large. Notre méthode : tu apprends une
            première compétence, tu la vends, puis tu en empiles d&apos;autres.
            Chaque nouvelle compétence = un service de plus facturé
            <span className="font-semibold text-navy-950"> au même client</span>.
          </p>
        </motion.div>

        {/* Bricks stack with connecting line */}
        <div className="relative mx-auto max-w-2xl">
          {/* Vertical connecting line */}

          <div className="relative space-y-4">
            {bricks.map((brick, i) => (
              <motion.div
                key={brick.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start gap-4 rounded-2xl border border-navy-950/5 bg-white p-4 transition-all duration-300 hover:shadow-lg hover:shadow-navy-950/5 sm:gap-5 sm:p-6"
              >
                {/* Number circle with ring — sits on the line */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-bold text-accent-400">
                  {brick.number}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold tracking-tight text-navy-950">
                      {brick.name}
                    </h3>
                    <span className="rounded-full bg-navy-950/5 px-3 py-1 text-xs font-semibold text-navy-600">
                      {brick.price}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-950/50">
                    {brick.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ROI callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 max-w-2xl rounded-2xl bg-navy-950 p-6 sm:p-8 lg:p-10"
        >
          <h3 className="mb-6 text-center text-xl font-bold tracking-tight text-white">
            Un seul client. Plusieurs services. <span className="gradient-text">Plusieurs milliers d&apos;euros.</span>
          </h3>

          {/* Simple math visualization */}
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3">
              <span className="text-sm text-white/60">Site internet</span>
              <span className="font-semibold text-white">1 000€</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3">
              <span className="text-sm text-white/60">+ Email marketing</span>
              <span className="font-semibold text-white">800€/mois</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3">
              <span className="text-sm text-white/60">+ Publicités</span>
              <span className="font-semibold text-white">1 200€/mois</span>
            </div>
            <div className="mt-2 flex items-center justify-between rounded-xl border border-accent-400/30 bg-accent-400/10 px-5 py-4">
              <span className="font-semibold text-accent-400">Total pour 1 client</span>
              <span className="text-xl font-bold text-accent-400">3 000€/mois</span>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-white/40">
            Tu n&apos;as pas besoin de 20 clients pour bien vivre.
            <span className="font-medium text-white/70"> 1 à 2 clients suffisent</span>{" "}quand tu empiles les compétences. Et pour l&apos;entreprise, le ROI est
            immédiat : plus de clients, plus de CA.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href="#rejoindre"
              className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-8 py-4 text-base font-bold tracking-tight text-navy-950 sm:text-lg"
            >
              Réserver mon appel gratuit
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <span className="text-sm tracking-tight text-navy-950/40">
              Appel de 45 min, 100% gratuit, sans engagement
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
