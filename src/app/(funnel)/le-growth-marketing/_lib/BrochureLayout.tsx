import Link from "next/link";
import Image from "next/image";
import { CHAPTERS, type Chapter } from "./chapters";
import { ArrowLeftIcon, ArrowRightIcon } from "./components";
import { ReflectionPrompt } from "./ReflectionPrompt";
import { NextStepLink } from "./NextStepLink";

/**
 * Layout pour chaque chapitre de la brochure :
 * - ProgressHeader sticky en haut (étape X/8 + progress fill + retour cover)
 * - Section contenue centrée avec variant dark/marble
 * - BottomNav avec Retour/Suivant en fin de page
 */
export function BrochureLayout({
  step,
  chapter,
  closerSlug,
  closerLabel,
  rdvParam,
  prenom,
  children,
}: {
  step: number;
  chapter: Chapter;
  closerSlug: string | null;
  /** Label humain du conseiller (Tino, Matis, ou "ton conseiller") pour interpolation dans reflection.question */
  closerLabel?: string;
  /** Valeur brute du searchParam ?rdv= (à propager dans les liens nav) */
  rdvParam?: string;
  /** Prénom normalisé du lead (à propager dans les liens nav) */
  prenom?: string | null;
  children: React.ReactNode;
}) {
  const total = CHAPTERS.length;
  const isMarble = chapter.variant === "marble";
  const conseiller = closerLabel ?? "ton conseiller";
  const closerQuery = (() => {
    const parts: string[] = [];
    if (closerSlug) parts.push(`closer=${closerSlug}`);
    if (rdvParam) parts.push(`rdv=${encodeURIComponent(rdvParam)}`);
    if (prenom) parts.push(`prenom=${encodeURIComponent(prenom)}`);
    return parts.length ? `?${parts.join("&")}` : "";
  })();

  return (
    <div className={isMarble ? "min-h-screen marble-bg" : "min-h-screen bg-navy-950"}>
      {/* Background orbs sur dark uniquement */}
      {!isMarble && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-navy-700/15 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gold-400/10 blur-[120px]" />
        </div>
      )}

      <ProgressHeader step={step} total={total} chapter={chapter} variant={chapter.variant} closerQuery={closerQuery} />

      {/* Contenu chapitre */}
      <section className="relative z-10 px-6 pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-[760px]">
          {/* Numéro + ligne décorative */}
          <div className="mb-6 flex items-center gap-4">
            <span
              className={`text-[0.75rem] font-bold uppercase tracking-[0.2em] ${
                isMarble ? "text-accent-400" : "text-gold-400"
              }`}
            >
              {chapter.num} — Chapitre
            </span>
            <span
              className={`h-px flex-1 bg-gradient-to-r ${
                isMarble
                  ? "from-accent-400/40 to-transparent"
                  : "from-gold-400/40 to-transparent"
              }`}
            />
          </div>

          {/* Titre */}
          <h1
            className={`mb-3 text-[clamp(1.875rem,4.5vw,3rem)] font-extrabold leading-[1.05] tracking-tight ${
              isMarble ? "text-navy-950" : "text-white"
            }`}
          >
            {chapter.title}
          </h1>

          {/* Sous-titre */}
          {chapter.subtitle && (
            <p
              className={`mb-10 text-[1.0625rem] leading-[1.5] md:text-[1.1875rem] ${
                isMarble ? "text-navy-950/60" : "text-white/55"
              }`}
            >
              {chapter.subtitle}
            </p>
          )}

          {/* Corps du chapitre */}
          <div
            className={`space-y-5 text-[1rem] leading-[1.7] md:text-[1.0625rem] ${
              isMarble ? "text-navy-950/80" : "text-white/80"
            }`}
          >
            {children}
          </div>

          {/* Encart "exprime-toi" — si le chapitre en a un */}
          {chapter.reflection && (
            <ReflectionPrompt
              question={chapter.reflection.question.replace(/\{closer\}/g, conseiller)}
              louisExample={chapter.reflection.louisExample.replace(/\{closer\}/g, conseiller)}
              storageKey={`gm_brochure_reflection_${chapter.slug}`}
              variant={chapter.variant}
            />
          )}

          {/* Navigation bas de page */}
          <BottomNav
            step={step}
            total={total}
            closerQuery={closerQuery}
            variant={chapter.variant}
            requireFilledKey={
              chapter.reflection
                ? `gm_brochure_reflection_${chapter.slug}`
                : undefined
            }
          />
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   ProgressHeader — sticky en haut
   ============================================================ */
function ProgressHeader({
  step,
  total,
  chapter,
  variant,
  closerQuery,
}: {
  step: number;
  total: number;
  chapter: Chapter;
  variant: "dark" | "marble";
  closerQuery: string;
}) {
  const isMarble = variant === "marble";
  const progressPct = Math.round((step / total) * 100);

  return (
    <header
      className={`sticky top-0 z-30 border-b backdrop-blur-md ${
        isMarble
          ? "border-navy-950/10 bg-[#f8f7f4]/85"
          : "border-white/8 bg-navy-950/85"
      }`}
    >
      <div className="mx-auto flex max-w-[1100px] items-center gap-3 px-4 py-3 md:gap-6 md:px-6 md:py-4">
        {/* Lien retour sommaire */}
        <Link
          href={`/le-growth-marketing${closerQuery}`}
          className={`group flex shrink-0 items-center gap-2 text-[0.8125rem] font-semibold transition ${
            isMarble
              ? "text-navy-950/70 hover:text-navy-950"
              : "text-white/65 hover:text-white"
          }`}
          aria-label="Retour au sommaire"
        >
          <Image
            src={isMarble ? "/images/logo-black.png" : "/images/logo-white.png"}
            alt="Agencilab"
            width={100}
            height={28}
            className="h-5 w-auto opacity-80 md:h-6"
            priority
          />
          <span className="hidden md:inline">Sommaire</span>
        </Link>

        {/* Séparateur */}
        <span
          className={`hidden h-5 w-px md:block ${
            isMarble ? "bg-navy-950/15" : "bg-white/15"
          }`}
        />

        {/* Étape + titre + progress */}
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex items-baseline justify-between gap-3">
            <p
              className={`flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.18em] md:text-[0.75rem] ${
                isMarble ? "text-accent-400" : "text-gold-400"
              }`}
            >
              <span>Étape {step}</span>
              <span className={isMarble ? "text-navy-950/30" : "text-white/30"}>/</span>
              <span className={isMarble ? "text-navy-950/40" : "text-white/40"}>{total}</span>
            </p>
            <p
              className={`hidden truncate text-[0.8125rem] font-semibold md:block md:text-[0.875rem] ${
                isMarble ? "text-navy-950" : "text-white/85"
              }`}
            >
              {chapter.title}
            </p>
            <p
              className={`text-[0.6875rem] font-bold tabular-nums md:hidden ${
                isMarble ? "text-navy-950/55" : "text-white/55"
              }`}
            >
              {progressPct}%
            </p>
          </div>

          {/* Progress bar */}
          <div
            className={`relative h-1 w-full overflow-hidden rounded-full ${
              isMarble ? "bg-navy-950/10" : "bg-white/8"
            }`}
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={total}
          >
            <div
              className={`absolute inset-y-0 left-0 rounded-full transition-all duration-300 ${
                isMarble
                  ? "bg-gradient-to-r from-accent-400 to-accent-400/80"
                  : "bg-gradient-to-r from-gold-400 to-gold-400/80"
              }`}
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   BottomNav — Retour / Suivant
   ============================================================ */
function BottomNav({
  step,
  total,
  closerQuery,
  variant,
  requireFilledKey,
}: {
  step: number;
  total: number;
  closerQuery: string;
  variant: "dark" | "marble";
  requireFilledKey?: string;
}) {
  const isMarble = variant === "marble";
  const isLast = step === total;
  const isFirst = step === 1;

  // URLs
  const prevHref = isFirst
    ? `/le-growth-marketing${closerQuery}`
    : `/le-growth-marketing/etape/${step - 1}${closerQuery}`;
  const nextHref = isLast
    ? `/le-growth-marketing/merci${closerQuery}`
    : `/le-growth-marketing/etape/${step + 1}${closerQuery}`;

  const prevChapter = isFirst ? null : CHAPTERS[step - 2];
  const nextChapter = isLast ? null : CHAPTERS[step];

  return (
    <nav
      className={`mt-16 flex items-stretch gap-3 border-t pt-8 md:mt-20 md:pt-10 ${
        isMarble ? "border-navy-950/10" : "border-white/8"
      }`}
      aria-label="Navigation chapitres"
    >
      {/* Retour */}
      <Link
        href={prevHref}
        className={`group flex flex-1 flex-col items-start gap-1 rounded-xl border px-4 py-3 transition-colors md:px-5 md:py-4 ${
          isMarble
            ? "border-navy-950/10 hover:border-navy-950/25 hover:bg-navy-950/[0.02]"
            : "border-white/10 hover:border-white/25 hover:bg-white/[0.04]"
        }`}
      >
        <span
          className={`flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] md:text-[0.75rem] ${
            isMarble ? "text-navy-950/55" : "text-white/55"
          }`}
        >
          <ArrowLeftIcon
            className={`transition-transform group-hover:-translate-x-0.5 ${
              isMarble ? "text-navy-950/55" : "text-white/55"
            }`}
          />
          Précédent
        </span>
        <span
          className={`text-[0.875rem] font-semibold md:text-[0.9375rem] ${
            isMarble ? "text-navy-950" : "text-white/90"
          }`}
        >
          {isFirst ? "Retour au sommaire" : `${prevChapter?.num} · ${prevChapter?.title}`}
        </span>
      </Link>

      {/* Suivant — CTA principale (avec validation question obligatoire) */}
      <NextStepLink
        href={nextHref}
        requireFilledKey={requireFilledKey}
        className={`group flex flex-[1.1] flex-col items-end gap-1 rounded-xl border-2 px-4 py-3 text-right transition-all md:px-5 md:py-4 ${
          isLast
            ? "border-gold-400/60 bg-gold-400/[0.08] hover:border-gold-400 hover:bg-gold-400/[0.14]"
            : isMarble
              ? "border-accent-400/50 bg-accent-400/[0.06] hover:border-accent-400 hover:bg-accent-400/[0.12]"
              : "border-accent-400/50 bg-accent-400/[0.08] hover:border-accent-400 hover:bg-accent-400/[0.16]"
        }`}
        style={{
          boxShadow: isLast
            ? "0 0 30px rgba(255, 122, 0, 0.18)"
            : isMarble
              ? "0 0 30px rgba(1, 95, 255, 0.10)"
              : "0 0 30px rgba(1, 95, 255, 0.15)",
        }}
      >
        <span
          className={`flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] md:text-[0.75rem] ${
            isLast
              ? "text-gold-400"
              : isMarble
                ? "text-accent-400"
                : "text-accent-400"
          }`}
        >
          {isLast ? "Terminer" : "Suivant"}
          <ArrowRightIcon
            className={`transition-transform group-hover:translate-x-0.5 ${
              isLast
                ? "text-gold-400"
                : isMarble
                  ? "text-accent-400"
                  : "text-accent-400"
            }`}
          />
        </span>
        <span
          className={`text-[0.875rem] font-semibold md:text-[0.9375rem] ${
            isMarble ? "text-navy-950" : "text-white/95"
          }`}
        >
          {isLast
            ? "Envoyer mes réponses"
            : `${nextChapter?.num} · ${nextChapter?.title}`}
        </span>
      </NextStepLink>
    </nav>
  );
}
