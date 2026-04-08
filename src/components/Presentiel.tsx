"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/seminaire/presentation.jpg", alt: "Présentation en séminaire" },
  { src: "/images/seminaire/coaching.jpg", alt: "Session de coaching" },
  { src: "/images/seminaire/salle.jpg", alt: "Cours en présentiel" },
  { src: "/images/seminaire/groupe.jpg", alt: "Photo de groupe séminaire" },
];

const proofs = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Séminaires en présentiel",
    description: "Des immersions business de plusieurs jours à Lyon, Paris et ailleurs. Tu rencontres l'équipe, les coachs et les autres membres en vrai.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Une vraie communauté",
    description: "Plus de 900 membres actifs. Des gens comme toi qui avancent ensemble. Tu n'es jamais seul dans ton parcours.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    title: "Un coach dédié nommé",
    description: "Pas un chatbot, pas un groupe anonyme. Un vrai coach identifié qui te suit personnellement et répond à tes questions.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Garantie contractuelle par avocat",
    description: "Un contrat signé noir sur blanc : si tu suis la méthode et que les résultats ne viennent pas, on t'accompagne jusqu'à ce que tu sois rentable.",
  },
];

export default function Presentiel() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" id="presentiel">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-navy-700/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-accent-400/80">
            Tu n&apos;avances jamais seul
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-5xl">
            On organise régulièrement des rencontres <span className="text-white/50">pour se voir.</span>
          </h2>
        </motion.div>

        {/* Photo grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/5"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </div>
          ))}
        </motion.div>

        {/* Proof points */}
        <div className="grid gap-5 sm:grid-cols-2">
          {proofs.map((proof, i) => (
            <motion.div
              key={proof.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-7"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400">
                {proof.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight">
                {proof.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {proof.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Basé en France */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-md text-center"
        >
          <p className="text-sm text-white/30">
            Basé en France, à Lyon.
            <br />
            Noté <span className="font-semibold text-white/50">4.7/5 sur Trustpilot</span> — 74 avis vérifiés.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
