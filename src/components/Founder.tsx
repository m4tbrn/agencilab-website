"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const credentials = [
  "270 000+ abonnés YouTube",
  "6 ans d'expérience en marketing digital",
  "+1 018 salariés accompagnés",
  "Basé à Lyon, France",
];

export default function Founder() {
  return (
    <section className="marble-bg py-16 lg:py-24" id="fondateur">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/louis-conf.jpg"
                alt="Louis Esquier, fondateur d'Agencilab"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#f8f7f4]/80 to-transparent" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-navy-600">
              Le fondateur
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-navy-950 sm:text-4xl">
              Louis Esquier
            </h2>
            <div className="space-y-4 leading-relaxed tracking-tight text-navy-950/60">
              <p>
                En 2018, Louis avait 19 ans. Vendeur au Slip Français à Lyon,
                payé 1 400€ par mois, 8 heures debout par jour. Interdit de
                s&apos;asseoir.
              </p>
              <p>
                En 2021, il découvre une activité très rentable : le marketing digital. Son premier client :
                Nassim Sahili, coach sportif. 3 000€ facturés pour 26 heures
                de travail étalées sur un mois.
              </p>
              <p>
                Aujourd&apos;hui, Louis est marketeur depuis plus de 6 ans,
                cumule plus de 270 000 abonnés sur YouTube, et a accompagné
                plus de 900 personnes à créer leur deuxième salaire.
              </p>
              <p className="font-medium text-navy-950">
                Il a créé Agencilab pour une raison simple : redonner le
                pouvoir aux Français en leur permettant d&apos;être mieux
                payés et plus libres.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="rounded-full bg-navy-950/5 px-4 py-2 text-xs font-medium tracking-tight text-navy-950/70"
                >
                  {cred}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
