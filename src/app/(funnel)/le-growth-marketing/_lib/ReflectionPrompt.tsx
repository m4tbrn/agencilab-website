"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Encart "exprime-toi" affiché à la fin de chaque chapitre.
 *
 * Ordre visuel :
 *   1. Question (label en gras)
 *   2. Bulle Louis (exemple inspirant pour amorcer la réponse)
 *   3. Textarea obligatoire
 *
 * Sauvegarde auto dans localStorage (clé = storageKey).
 * Toutes les réponses sont récupérées au step quiz (10) pour Tally.
 */
export function ReflectionPrompt({
  question,
  louisExample,
  storageKey,
  variant = "dark",
}: {
  question: string;
  louisExample: string;
  storageKey: string;
  variant?: "dark" | "marble";
}) {
  const [value, setValue] = useState("");
  const [hasMounted, setHasMounted] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);
  const isMarble = variant === "marble";

  useEffect(() => {
    setHasMounted(true);
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) setValue(stored);
    } catch {
      /* localStorage inaccessible — ignore */
    }
  }, [storageKey]);

  useEffect(() => {
    if (!hasMounted) return;
    const t = setTimeout(() => {
      try {
        if (value.trim()) {
          window.localStorage.setItem(storageKey, value);
          setSavedFlash(true);
          setTimeout(() => setSavedFlash(false), 1800);
        } else {
          window.localStorage.removeItem(storageKey);
        }
      } catch {
        /* ignore */
      }
    }, 500);
    return () => clearTimeout(t);
  }, [value, hasMounted, storageKey]);

  return (
    <section
      id={`reflection-section-${storageKey}`}
      aria-label="Question obligatoire"
      className={`mt-14 scroll-mt-24 rounded-2xl border p-6 md:p-8 ${
        isMarble
          ? "border-navy-950/10 bg-white/70 backdrop-blur-sm"
          : "border-white/10 bg-white/[0.04] backdrop-blur-sm"
      }`}
      style={{
        boxShadow: isMarble
          ? "0 0 30px rgba(1, 95, 255, 0.08)"
          : "0 0 30px rgba(1, 95, 255, 0.08)",
      }}
    >
      {/* Question (en premier) */}
      <label htmlFor={`reflection-${storageKey}`} className="block">
        <span
          className={`mb-1 inline-flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] ${
            isMarble ? "text-accent-400" : "text-accent-400"
          }`}
        >
          <span>Question obligatoire</span>
          <span className="text-red-400">*</span>
        </span>
        <p
          className={`mt-1.5 text-[1.0625rem] font-bold leading-[1.35] md:text-[1.25rem] ${
            isMarble ? "text-navy-950" : "text-white"
          }`}
        >
          {question}
        </p>
      </label>

      {/* Bulle Louis (en second, comme inspiration) */}
      <div
        className={`mt-5 rounded-xl border p-4 md:p-5 ${
          isMarble
            ? "border-navy-950/10 bg-navy-950/[0.03]"
            : "border-white/10 bg-white/[0.04]"
        }`}
      >
        <div className="mb-2 flex items-center gap-2.5">
          <div
            className={`relative h-8 w-8 shrink-0 overflow-hidden rounded-full border ${
              isMarble ? "border-accent-400/40" : "border-accent-400/40"
            }`}
            aria-hidden
          >
            <Image
              src="/images/img-vsl-louis.webp"
              alt="Louis Esquier"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <div className="flex items-baseline gap-2 leading-none">
            <span
              className={`text-[0.8125rem] font-bold ${
                isMarble ? "text-navy-950" : "text-white"
              }`}
            >
              Louis Esquier
            </span>
            <span
              className={`text-[0.6875rem] font-semibold uppercase tracking-[0.16em] ${
                isMarble ? "text-accent-400" : "text-accent-400"
              }`}
            >
              · Exemple
            </span>
          </div>
        </div>
        <p
          className={`text-[0.9375rem] italic leading-[1.55] md:text-[1rem] ${
            isMarble ? "text-navy-950/75" : "text-white/75"
          }`}
        >
          « {louisExample} »
        </p>
      </div>

      {/* Textarea */}
      <textarea
        id={`reflection-${storageKey}`}
        name={`reflection-${storageKey}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Écris ce qui te vient, même si c'est brouillon. Pas de jugement."
        rows={4}
        required
        aria-required="true"
        className={`mt-5 block w-full resize-y rounded-xl border px-4 py-3 text-[0.9375rem] leading-[1.55] outline-none transition-colors md:text-[1rem] ${
          isMarble
            ? "border-navy-950/15 bg-white text-navy-950 placeholder-navy-950/35 focus:border-accent-400/60"
            : "border-white/15 bg-navy-950/40 text-white placeholder-white/35 focus:border-accent-400/60"
        }`}
        style={{ minHeight: "120px" }}
      />

      {/* Footer : statut obligatoire + flash sauvegardé */}
      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
        <p
          className={`text-[0.75rem] ${
            isMarble ? "text-navy-950/45" : "text-white/40"
          }`}
        >
          <span className="text-red-400">*</span> Obligatoire · Envoyé à ton
          conseiller à la fin de la brochure
        </p>
        <div
          className={`flex items-center gap-1.5 text-[0.75rem] transition-opacity ${
            savedFlash ? "opacity-100" : "opacity-0"
          } ${isMarble ? "text-accent-400" : "text-accent-400"}`}
          aria-live="polite"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="font-semibold">Sauvegardé</span>
        </div>
      </div>
    </section>
  );
}
