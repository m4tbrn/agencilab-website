"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const screenshots = [
  { src: "/images/resultats/resultat-damien.png", alt: "Damien — résultats marketing" },
  { src: "/images/resultats/resultat-julien.png", alt: "Julien — premier client signé" },
  { src: "/images/resultats/resultat-samuel.png", alt: "Samuel — résultats" },
  { src: "/images/resultats/resultat-damien2.png", alt: "Damien — suivi coaching" },
];

export default function ResultsProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-accent-400/80">
            Des résultats réels
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ce que nos membres partagent
            <span className="text-white/50"> chaque semaine.</span>
          </h2>
        </motion.div>

        <div
          ref={scrollRef}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {screenshots.map((screenshot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="w-[260px] flex-shrink-0 snap-start sm:w-[300px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/5">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-white/20 sm:hidden">
          Glisse vers la droite →
        </p>
      </div>
    </section>
  );
}
