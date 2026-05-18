"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Slide } from "./slides";

/**
 * Coquille de navigation réutilisable pour un deck de slides.
 *
 * - Une slide plein écran à la fois.
 * - Navigation : flèches ←/→, Espace, Home/Fin au clavier ; boutons et
 *   zones cliquables gauche/droite à la souris.
 * - Index synchronisé dans le hash de l'URL (#5) pour pouvoir partager
 *   ou rafraîchir sur une slide précise.
 * - Barre de progression + compteur + libellé de section.
 *
 * Le contenu (`slides`) est passé en prop : le même composant sert le
 * pitch deck /incubateur et le pitch de closing /pitch-closing.
 */
export default function Deck({ slides: SLIDES }: { slides: Slide[] }) {
  const total = SLIDES.length;
  const [index, setIndex] = useState(0);

  // Restaure la slide depuis le hash au montage.
  useEffect(() => {
    const fromHash = parseInt(window.location.hash.replace("#", ""), 10);
    if (Number.isFinite(fromHash) && fromHash >= 1 && fromHash <= total) {
      setIndex(fromHash - 1);
    }
  }, [total]);

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setIndex(clamped);
      window.history.replaceState(null, "", `#${clamped + 1}`);
    },
    [total],
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  // Navigation clavier.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(total - 1);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, total]);

  const slide = SLIDES[index];
  const progress = ((index + 1) / total) * 100;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // cover/divider : texte centré · content : carte centrée · full : slide
  // pleine largeur qui contrôle sa propre mise en page (façon section du site).
  const isFull = slide.kind === "full";
  const centered = slide.kind === "cover" || slide.kind === "divider";

  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-navy-950 text-white">
      {/* Barre de progression */}
      <div className="absolute left-0 right-0 top-0 z-30 h-1 bg-white/8">
        <div
          className="h-full bg-accent-400 transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Image de fond plein écran (optionnelle) */}
      {slide.bg && (
        <div key={`${slide.id}-bg`} className="absolute inset-0 z-0">
          <Image
            src={slide.bg}
            alt=""
            fill
            priority
            className="object-cover animate-[deckIn_0.5s_ease-out]"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,10,20,0.72) 0%, rgba(5,10,20,0.86) 55%, rgba(5,10,20,0.96) 100%)",
            }}
          />
        </div>
      )}

      {/* Fond signature du site : lignes de grille + halos */}
      {!slide.bg && (
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
          <div className="absolute left-[40%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
          <div className="absolute left-[60%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
          <div className="absolute left-[80%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
          <div className="absolute left-0 top-[35%] h-px w-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
          <div className="absolute left-0 top-[68%] h-px w-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[460px] w-[460px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>
      )}

      {/* Zones de clic gauche / droite (desktop) */}
      <button
        type="button"
        aria-label="Slide précédente"
        onClick={prev}
        disabled={isFirst}
        className="absolute left-0 top-0 z-10 hidden h-full w-[14%] cursor-w-resize disabled:cursor-default md:block"
      />
      <button
        type="button"
        aria-label="Slide suivante"
        onClick={next}
        disabled={isLast}
        className="absolute right-0 top-0 z-10 hidden h-full w-[14%] cursor-e-resize disabled:cursor-default md:block"
      />

      {/* Contenu de la slide */}
      <main className="relative z-20 flex flex-1 overflow-hidden">
        {isFull ? (
          /* Slide pleine : occupe tout l'écran, la slide gère sa mise en page */
          <div
            key={slide.id}
            className="h-full w-full p-3 md:p-4 animate-[deckIn_0.4s_ease-out]"
          >
            {slide.render()}
          </div>
        ) : centered ? (
          /* Cover / divider : texte centré sur tout l'écran */
          <div
            key={slide.id}
            className="flex h-full w-full flex-col items-center justify-center px-6 text-center animate-[deckIn_0.4s_ease-out]"
          >
            {slide.render()}
          </div>
        ) : (
          /* Slide de contenu : carte qui remplit l'écran */
          <div
            key={slide.id}
            className="glass-card relative flex h-full w-full flex-col items-center justify-center overflow-y-auto rounded-3xl px-7 py-9 text-center md:px-16 md:py-12 animate-[deckIn_0.4s_ease-out]"
          >
            {slide.render()}
          </div>
        )}
      </main>

      {/* Barre de contrôle */}
      <footer className="relative z-30 flex shrink-0 items-center justify-between gap-4 border-t border-white/8 bg-navy-950/80 px-5 py-3 backdrop-blur md:px-8">
        <div className="flex items-center gap-2.5">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent-300">
            {slide.section}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            disabled={isFirst}
            aria-label="Slide précédente"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/35 hover:text-white disabled:opacity-30"
          >
            ‹
          </button>
          <span className="min-w-[64px] text-center text-[0.82rem] font-semibold tabular-nums text-white/55">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={next}
            disabled={isLast}
            aria-label="Slide suivante"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/35 hover:text-white disabled:opacity-30"
          >
            ›
          </button>
        </div>
      </footer>
    </div>
  );
}
