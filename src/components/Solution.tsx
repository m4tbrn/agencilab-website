"use client";

import { motion } from "framer-motion";

const advantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "45 min par jour suffisent",
    description: "Pas besoin de passer 3 ans en école. 45 min par jour à côté de ton emploi et tu deviens opérationnel en quelques semaines.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Aucun diplôme requis",
    description: "Des gendarmes, boulangers, mères de famille et alternants y arrivent. La seule chose qui compte, c'est de suivre la méthode que j'explique juste après.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Tu gardes ton emploi",
    description: "Tu apprends en parallèle de ton travail. Zéro risque. Tu ne quittes rien tant que tu n'es pas prêt.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Un ordinateur et une connexion internet",
    description: "C'est tout ce qu'il te faut. Pas de local, pas de stock, pas d'investissement. Tu travailles depuis chez toi.",
  },
];

export default function Solution() {
  return (
    <section className="marble-bg py-16 lg:py-24" id="solution">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-20 max-w-3xl"
        >
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-navy-600">
            Quelle est cette activité que les entreprises s&apos;arrachent ?
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-8 inline-block w-full overflow-hidden text-center"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 rounded-2xl bg-accent-400/10 blur-2xl" />
            <div className="absolute inset-0 rounded-3xl bg-accent-400/5 blur-3xl" />
            <div className="relative flex items-center justify-center gap-2 rounded-2xl border-2 border-accent-400/30 bg-navy-950 px-4 py-4 text-lg font-black tracking-tight text-accent-400 shadow-[0_0_60px_rgba(1,95,255,0.2)] sm:gap-4 sm:px-10 sm:py-6 sm:text-4xl lg:gap-5 lg:px-14 lg:py-8 lg:text-6xl">
              <span className="hidden text-3xl sm:inline sm:text-4xl lg:text-5xl" style={{ filter: "grayscale(1) brightness(2) sepia(1) hue-rotate(5deg) saturate(2)" }}>🌿</span>
              Le Growth Marketing
              <span className="hidden -scale-x-100 text-3xl sm:inline sm:text-4xl lg:text-5xl" style={{ filter: "grayscale(1) brightness(2) sepia(1) hue-rotate(5deg) saturate(2)" }}>🌿</span>
            </div>
          </motion.div>
          <div className="mt-8 max-w-2xl space-y-6">
            <p className="text-lg leading-relaxed tracking-tight text-navy-950/50 sm:text-xl">
              Un nom barbare qui veut dire : <span className="font-semibold text-navy-950">faire en sorte qu&apos;une entreprise
              gagne plus d&apos;argent, et être payé pour les résultats apportés.</span>
            </p>
            <p className="text-lg leading-relaxed tracking-tight text-navy-950/50 sm:text-xl">
              Est-ce que tu penses que le kiné qui enchaîne 40 patients par semaine
              se dit en rentrant chez lui le soir &ldquo;allez, je vais optimiser ma page Google&rdquo; ?
              Est-ce que le patron du restaurant a le temps de gérer ses réseaux sociaux entre
              le service du midi et celui du soir ?
            </p>
            <p className="border-l-2 border-accent-400/50 pl-6 text-lg font-medium leading-relaxed tracking-tight text-navy-950 sm:text-xl">
              Bien sûr que non. Ces gens ont déjà un métier à temps plein.
            </p>
            <p className="text-lg leading-relaxed tracking-tight text-navy-950/50 sm:text-xl">
              Ils n&apos;ont ni le temps, ni les compétences, ni l&apos;envie de gérer
              leur marketing.
              <span className="font-medium text-navy-950"> Alors ils paient quelqu&apos;un pour le faire. Et ce quelqu&apos;un, ça peut être toi.</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-navy-950/10 bg-white p-6 sm:p-8 lg:p-10"
        >
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-600">
              Pas besoin de faire 8 ans d&apos;études
            </p>
            <h3 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
              Les prérequis pour devenir Growth Marketer
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {advantages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-navy-950/5 bg-navy-950/[0.02] p-6 transition-all duration-300 hover:bg-navy-950/[0.04]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-white">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold tracking-tight text-navy-950">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-navy-950/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mx-auto mt-10 text-center text-lg leading-relaxed tracking-tight text-navy-950/50 sm:text-xl">
            Tu l&apos;as compris, devenir Growth Marketer est largement à ta portée. <span className="font-medium text-navy-950">Il ne te faut ni diplôme, ni expérience, ni capital.</span>
            <br />
            Juste la bonne méthode, de la régularité, et <span className="font-medium text-navy-950">45 minutes par jour</span>.
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
