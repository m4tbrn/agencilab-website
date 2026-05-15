"use client";

import Link from "next/link";

/**
 * Wrapper du bouton "Suivant" qui valide que la question obligatoire du chapitre
 * a été remplie dans localStorage avant d'autoriser la navigation.
 *
 * Si vide : preventDefault, scroll vers l'encart, focus le textarea, et applique
 * un ring rouge temporaire (2.5s) pour signaler visuellement l'erreur.
 */
export function NextStepLink({
  href,
  requireFilledKey,
  className,
  style,
  children,
}: {
  href: string;
  requireFilledKey?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!requireFilledKey) return;

    // Lecture localStorage
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(requireFilledKey);
    } catch {
      return; // En cas d'erreur (mode privé etc.), on laisse passer
    }
    if (stored && stored.trim().length > 0) return; // Réponse présente, navigation OK

    // Vide : on bloque
    e.preventDefault();

    const section = document.getElementById(
      `reflection-section-${requireFilledKey}`,
    );
    const textarea = document.getElementById(
      `reflection-${requireFilledKey}`,
    ) as HTMLTextAreaElement | null;

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    if (textarea) {
      // Ring rouge transitoire pour feedback visuel
      const errorClasses = [
        "ring-2",
        "ring-red-500",
        "border-red-500/60",
        "animate-pulse",
      ];
      textarea.classList.add(...errorClasses);
      window.setTimeout(() => {
        textarea.classList.remove(...errorClasses);
      }, 2500);
      // Focus après le scroll (laisser le temps au smooth scroll)
      window.setTimeout(() => {
        textarea.focus({ preventScroll: true });
      }, 600);
    }
  }

  return (
    <Link
      href={href}
      className={className}
      style={style}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
