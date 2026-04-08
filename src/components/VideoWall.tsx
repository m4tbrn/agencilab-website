"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const videos = [
  { name: "Yohann", role: "Ancien gendarme", result: "3 200€/mois", face: "/images/visages/yohann.jpg" },
  { name: "Marina", role: "Cadre en entreprise", result: "1 800€/mois", face: "/images/visages/marina.jpg" },
  { name: "Barthélémy", role: "Ancien ouvrier", result: "3 500€/mois", face: "/images/visages/barthelemy.jpg" },
  { name: "Damien", role: "Ancien jardinier", result: "Reconversion réussie", face: "/images/visages/damien.jpg" },
  { name: "Clément", role: "Ingénieur, 24 ans", result: "Premiers clients", face: "/images/visages/clement.jpg" },
  { name: "Lucas", role: "Conducteur de travaux", result: "1 500€/mois", face: "/images/visages/lucas.jpg" },
  { name: "Stéphanie", role: "Professeure, maman", result: "2 000€/mois", face: "/images/visages/stephanie.jpg" },
  { name: "Benjamin", role: "Chauffeur routier", result: "Reconversion", face: "/images/visages/benjamin.jpg" },
];

export default function VideoWall() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "right" ? 580 : -580,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-24" id="ils-temoignent">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-navy-700/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-accent-400/80">
              Ils témoignent
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-5xl">
              Des salariés comme toi
              <br />
              <span className="text-white/50">qui ont sauté le pas.</span>
            </h2>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-white/20 hover:text-white"
              aria-label="Précédent"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-white/20 hover:text-white"
              aria-label="Suivant"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((video, i) => (
            <motion.div
              key={video.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group w-[85vw] flex-shrink-0 snap-start sm:w-[500px] lg:w-[560px]"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl border border-white/5 bg-navy-900/60 transition-all duration-300 group-hover:border-white/10">
                {/* Face as background */}
                <div className="absolute inset-0">
                  <Image
                    src={video.face}
                    alt={video.name}
                    fill
                    className="object-cover opacity-20 blur-[1px] transition-opacity duration-300 group-hover:opacity-30"
                    sizes="560px"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800/60 to-navy-950/70" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-400/20">
                    <svg className="ml-0.5 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20">
                      <Image src={video.face} alt={video.name} fill className="object-cover" sizes="40px" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">{video.name}</p>
                      <p className="text-sm text-white/50">{video.role}</p>
                    </div>
                  </div>
                </div>

                {/* Result badge */}
                <div className="absolute right-3 top-3">
                  <span className="rounded-full bg-accent-400/90 px-3 py-1.5 text-xs font-bold text-navy-950">
                    {video.result}
                  </span>
                </div>
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
