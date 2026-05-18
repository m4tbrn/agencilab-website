"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "@phosphor-icons/react/dist/ssr";

/**
 * Témoignages vidéo (YouTube) pour la page offre.
 * Façade click-to-play : on affiche la miniature YouTube + un bouton play,
 * et l'iframe ne se charge qu'au clic (perf + pas de cookies avant interaction).
 *
 * Renseigner les `videoId` YouTube dans VIDEOS ci-dessous.
 */

type VideoTemoignage = {
  /** ID YouTube — la partie après watch?v= ou youtu.be/ */
  videoId: string;
  name: string;
  role: string;
  result: string;
};

// TODO : remplacer les videoId PLACEHOLDER par les vrais IDs YouTube.
const VIDEOS: VideoTemoignage[] = [
  { videoId: "PLACEHOLDER1", name: "Yohann", role: "Ancien gendarme", result: "3 200€/mois" },
  { videoId: "PLACEHOLDER2", name: "Marina", role: "Cadre en entreprise", result: "1 800€/mois" },
  { videoId: "PLACEHOLDER3", name: "Barthélémy", role: "Ancien ouvrier", result: "3 500€/mois" },
];

function VideoCard({ video }: { video: VideoTemoignage }) {
  const [playing, setPlaying] = useState(false);
  const isPlaceholder = video.videoId.startsWith("PLACEHOLDER");

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
      {/* Zone vidéo 16:9 */}
      <div className="relative aspect-video bg-navy-950">
        {isPlaceholder ? (
          <div className="flex h-full items-center justify-center px-4 text-center text-[0.8125rem] text-white/40">
            [Vidéo YouTube {video.name} à brancher]
          </div>
        ) : playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
            title={`Témoignage ${video.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Lire le témoignage de ${video.name}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
              alt={`Témoignage ${video.name}`}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              sizes="(max-width: 768px) 100vw, 380px"
              unoptimized
            />
            <span className="absolute inset-0 bg-navy-950/30 transition-colors group-hover:bg-navy-950/20" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-400 text-navy-950 shadow-[0_8px_30px_rgba(255,122,0,0.45)] transition-transform duration-300 group-hover:scale-110">
              <Play size={26} weight="fill" className="ml-0.5" />
            </span>
          </button>
        )}
      </div>

      {/* Infos */}
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="truncate text-[0.9375rem] font-bold tracking-tight text-white">
            {video.name}
          </p>
          <p className="truncate text-[0.8125rem] text-white/55">
            {video.role}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[0.75rem] font-bold text-gold-400">
          {video.result}
        </span>
      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  return (
    <section className="mt-14 md:mt-20">
      <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-12">
        <span className="mb-3 inline-block text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent-400 md:text-[0.8125rem]">
          Ils en parlent en vidéo
        </span>
        <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white">
          Des salariés comme toi qui ont{" "}
          <span className="gradient-text">sauté le pas</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1100px] gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {VIDEOS.map((video) => (
          <VideoCard key={video.name} video={video} />
        ))}
      </div>
    </section>
  );
}
