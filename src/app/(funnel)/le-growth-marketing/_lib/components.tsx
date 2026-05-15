/**
 * Composants UI partagés pour la brochure Growth Marketing.
 * Tous les "use server" friendly (pas de hooks, pas de state).
 */
import Image from "next/image";

/* ============================================================
   FlowNode + FlowConnector — pour schéma flowchart vertical
   (utilisé chapitre 03 pour visualiser le modèle économique)
   ============================================================ */

type FlowNodeRow = { k: string; v: string };

export function FlowNode({
  emoji,
  label,
  sub,
  rows,
  caption,
  badge,
  tone = "dark",
  big = false,
}: {
  emoji?: string;
  label: string;
  sub?: string;
  rows?: FlowNodeRow[];
  caption?: string;
  badge?: string;
  tone?: "dark" | "accent" | "gold" | "red";
  big?: boolean;
}) {
  const toneStyles = {
    dark: {
      border: "border-white/15",
      bg: "bg-white/[0.04]",
      labelColor: "text-white",
      shadow: "0 0 24px rgba(255, 255, 255, 0.04)",
    },
    accent: {
      border: "border-accent-400/45",
      bg: "bg-accent-400/[0.07]",
      labelColor: "text-white",
      shadow: "0 0 28px rgba(1, 95, 255, 0.18)",
    },
    gold: {
      border: "border-gold-400/55",
      bg: "bg-gold-400/[0.10]",
      labelColor: "text-white",
      shadow: "0 0 32px rgba(255, 122, 0, 0.22)",
    },
    red: {
      border: "border-red-500/45",
      bg: "bg-red-500/[0.06]",
      labelColor: "text-white",
      shadow: "0 0 26px rgba(239, 68, 68, 0.18)",
    },
  }[tone];

  const labelSize = big
    ? "text-[1.25rem] md:text-[1.5rem]"
    : "text-[1rem] md:text-[1.0625rem]";

  const badgeColor =
    tone === "gold"
      ? "text-gold-400"
      : tone === "accent"
        ? "text-accent-400"
        : tone === "red"
          ? "text-red-400"
          : "text-white/55";

  return (
    <div
      className={`relative rounded-2xl border-2 ${toneStyles.border} ${toneStyles.bg} px-5 py-4 backdrop-blur-sm md:px-6 md:py-5`}
      style={{ boxShadow: toneStyles.shadow }}
    >
      {emoji && (
        <p
          className="mb-2 text-center text-[2.25rem] leading-none md:text-[2.75rem]"
          aria-hidden
        >
          {emoji}
        </p>
      )}
      {badge && (
        <p
          className={`mb-2 text-center text-[0.625rem] font-bold uppercase tracking-[0.2em] ${badgeColor}`}
        >
          {badge}
        </p>
      )}
      <p
        className={`text-center font-extrabold leading-tight tracking-tight ${labelSize} ${toneStyles.labelColor}`}
      >
        {label}
      </p>
      {sub && (
        <p className="mt-1.5 text-center text-[0.8125rem] leading-snug text-white/65 md:text-[0.875rem]">
          {sub}
        </p>
      )}
      {rows && rows.length > 0 && (
        <ul className="mt-3 space-y-1 text-[0.8125rem] md:text-[0.875rem]">
          {rows.map((row) => (
            <li
              key={row.k}
              className="flex items-baseline justify-between gap-3"
            >
              <span className="text-white/50">{row.k}</span>
              <strong className="tabular-nums text-white">{row.v}</strong>
            </li>
          ))}
        </ul>
      )}
      {caption && (
        <p className="mt-3 text-center text-[0.6875rem] uppercase tracking-[0.12em] text-white/45 md:text-[0.75rem]">
          {caption}
        </p>
      )}
    </div>
  );
}

/**
 * Connecteur vertical entre 2 nodes : ligne + flèche en bas.
 * `merge=true` rend une forme en Y inversé (2 branches qui convergent vers 1).
 */
export function FlowConnector({ merge = false }: { merge?: boolean }) {
  if (merge) {
    return (
      <div className="relative flex h-12 items-center justify-center md:h-14">
        {/* SVG en Y inversé : 2 branches convergent vers 1 point central */}
        <svg
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full text-gold-400"
          aria-hidden
        >
          <line
            x1="40"
            y1="0"
            x2="100"
            y2="40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <line
            x1="160"
            y1="0"
            x2="100"
            y2="40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <line
            x1="100"
            y1="40"
            x2="100"
            y2="58"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <polyline
            points="94,52 100,60 106,52"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex h-8 items-center justify-center md:h-10">
      <span className="flex flex-col items-center text-gold-400/70">
        <span className="block h-5 w-px bg-current md:h-7" aria-hidden />
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="2,2 7,8 12,2" />
        </svg>
      </span>
    </div>
  );
}

export function Callout({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="my-8 rounded-2xl border border-gold-400/40 bg-gold-400/[0.06] p-5 md:p-6"
      style={{ boxShadow: "0 0 30px rgba(255, 122, 0, 0.10)" }}
    >
      <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gold-400">
        {label}
      </p>
      <p className="text-[0.9375rem] leading-[1.6] text-current md:text-[1rem]">
        {children}
      </p>
    </div>
  );
}

export function NotItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[0.9375rem] md:text-[1rem]">
      <CrossIcon />
      <span>{children}</span>
    </li>
  );
}

export function StatCard({
  number,
  label,
  sub,
}: {
  number: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-navy-950/10 bg-white/60 p-6 backdrop-blur-sm">
      <p className="mb-2 text-[clamp(2.25rem,5vw,3rem)] font-black leading-none tracking-tight text-accent-400">
        {number}
      </p>
      <p className="mb-1 text-[0.9375rem] font-bold text-navy-950">{label}</p>
      <p className="text-[0.8125rem] leading-[1.5] text-navy-950/65">{sub}</p>
    </div>
  );
}

export function DayBlock({
  time,
  title,
  desc,
}: {
  time: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm md:p-6">
      <div className="shrink-0 text-right">
        <p className="text-[0.875rem] font-bold tabular-nums text-gold-400 md:text-[0.9375rem]">
          {time}
        </p>
      </div>
      <div className="min-w-0 flex-1 border-l border-white/10 pl-5">
        <p className="mb-1 text-[1rem] font-bold text-white md:text-[1.0625rem]">
          {title}
        </p>
        <p className="text-[0.9375rem] leading-[1.55] text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export function PillarCard({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-navy-950/10 bg-white/70 p-5 backdrop-blur-sm md:gap-6 md:p-6">
      <div className="shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent-400/60 bg-accent-400/[0.08] text-[0.9375rem] font-bold text-accent-400">
          {num}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-[1rem] font-bold text-navy-950 md:text-[1.0625rem]">
          {title}
        </p>
        <p className="text-[0.9375rem] leading-[1.55] text-navy-950/70">
          {desc}
        </p>
      </div>
    </div>
  );
}

export function RevenueCard({
  level,
  range,
  sub,
  detail,
  tier,
  variant = "dark",
}: {
  level: string;
  range: string;
  sub: string;
  detail: string;
  tier: "entry" | "mid" | "top";
  variant?: "dark" | "marble";
}) {
  const isMarble = variant === "marble";

  // Background + border par tier (intensifié sur marble pour la visibilité)
  const accentDark =
    tier === "entry"
      ? "border-white/15 bg-white/[0.04]"
      : tier === "mid"
        ? "border-accent-400/30 bg-accent-400/[0.05]"
        : "border-gold-400/35 bg-gold-400/[0.05]";

  const accentMarble =
    tier === "entry"
      ? "border-navy-950/15 bg-white/70"
      : tier === "mid"
        ? "border-accent-400/40 bg-accent-400/[0.08]"
        : "border-gold-400/50 bg-gold-400/[0.10]";

  // Couleurs texte adaptées à la luminosité du fond
  const labelClass = isMarble ? "text-navy-950/60" : "text-white/55";
  const rangeClass = isMarble ? "text-navy-950" : "text-white";
  const subClass = isMarble ? "text-navy-950/60" : "text-white/55";
  const detailClass = isMarble ? "text-navy-950/70" : "text-white/70";

  return (
    <div
      className={`rounded-2xl border p-6 backdrop-blur-sm ${isMarble ? accentMarble : accentDark}`}
    >
      <p
        className={`mb-2 text-[0.75rem] font-bold uppercase tracking-[0.18em] ${labelClass}`}
      >
        {level}
      </p>
      <p
        className={`text-[clamp(1.5rem,3.5vw,1.875rem)] font-extrabold leading-none tracking-tight ${rangeClass}`}
      >
        {range}
      </p>
      <p className={`mb-4 text-[0.875rem] ${subClass}`}>{sub}</p>
      <p className={`text-[0.8125rem] leading-[1.5] ${detailClass}`}>
        {detail}
      </p>
    </div>
  );
}

export function ProfileCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-navy-950/10 bg-white/70 p-5 backdrop-blur-sm md:p-6">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-400/15">
          <CheckIconAccent />
        </div>
        <p className="text-[1rem] font-bold text-navy-950 md:text-[1.0625rem]">
          {title}
        </p>
      </div>
      <p className="text-[0.9375rem] leading-[1.55] text-navy-950/70">
        {children}
      </p>
    </div>
  );
}

export function StepCard({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm md:p-6">
      <div className="shrink-0">
        <p className="text-[1.25rem] font-black leading-none tracking-tight text-gold-400 md:text-[1.5rem]">
          {num}
        </p>
      </div>
      <div className="min-w-0 flex-1 border-l border-white/10 pl-5">
        <p className="mb-1 text-[1rem] font-bold text-white md:text-[1.0625rem]">
          {title}
        </p>
        <p className="text-[0.9375rem] leading-[1.55] text-white/70">{desc}</p>
      </div>
    </div>
  );
}

/* ============================================================
   Icons
   ============================================================ */

export function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function BookIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CheckIconAccent() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent-400"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CrossIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-red-400"
      aria-hidden
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ArrowRightIcon({
  className = "text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-gold-400",
}: {
  className?: string;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ArrowLeftIcon({
  className = "text-white/60 transition-transform group-hover:-translate-x-1",
}: {
  className?: string;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

/* ============================================================
   TestimonialCard — élève réussi (photo + transformation + quote)
   ============================================================ */
export type Testimonial = {
  name: string;
  age?: number;
  photo: string;
  before: string;
  revenue: string;
  duration: string;
  quote: string;
};

export function TestimonialCard({
  t,
  variant = "dark",
}: {
  t: Testimonial;
  variant?: "dark" | "marble";
}) {
  const isMarble = variant === "marble";
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-5 backdrop-blur-sm md:p-6 ${
        isMarble
          ? "border-navy-950/10 bg-white/70"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      {/* Header : photo + identité */}
      <header className="mb-4 flex items-center gap-3">
        <div
          className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 ${
            isMarble ? "border-navy-950/15" : "border-white/15"
          }`}
        >
          <Image
            src={t.photo}
            alt={t.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="min-w-0">
          <p
            className={`text-[0.9375rem] font-bold leading-tight md:text-[1rem] ${
              isMarble ? "text-navy-950" : "text-white"
            }`}
          >
            {t.name}
            {t.age && (
              <span
                className={`ml-1.5 text-[0.8125rem] font-normal ${
                  isMarble ? "text-navy-950/55" : "text-white/55"
                }`}
              >
                · {t.age} ans
              </span>
            )}
          </p>
          <p
            className={`text-[0.8125rem] leading-tight ${
              isMarble ? "text-navy-950/55" : "text-white/55"
            }`}
          >
            Avant : {t.before}
          </p>
        </div>
      </header>

      {/* Revenu — chiffre Growth Marketing uniquement */}
      <div
        className={`mb-4 inline-flex rounded-lg px-3 py-2 ${
          isMarble ? "bg-accent-400/[0.07]" : "bg-gold-400/[0.10]"
        }`}
      >
        <span
          className={`text-[1.125rem] font-extrabold tracking-tight md:text-[1.25rem] ${
            isMarble ? "text-accent-400" : "text-gold-400"
          }`}
        >
          {t.revenue}
        </span>
      </div>

      {/* Quote */}
      <blockquote
        className={`flex-1 text-[0.875rem] leading-[1.6] md:text-[0.9375rem] ${
          isMarble ? "text-navy-950/75" : "text-white/75"
        }`}
      >
        <span
          className={`mr-0.5 text-[1.25rem] leading-none ${
            isMarble ? "text-accent-400/60" : "text-gold-400/70"
          }`}
        >
          “
        </span>
        {t.quote}
      </blockquote>
    </article>
  );
}

/* ============================================================
   QuoteCard — pull quote prominente (témoignage en gros)
   ============================================================ */
export function QuoteCard({
  photo,
  name,
  role,
  quote,
  variant = "dark",
}: {
  photo: string;
  name: string;
  role: string;
  quote: string;
  variant?: "dark" | "marble";
}) {
  const isMarble = variant === "marble";
  return (
    <div
      className={`my-8 rounded-2xl border p-6 md:p-8 ${
        isMarble
          ? "border-navy-950/10 bg-white/60"
          : "border-white/10 bg-white/[0.04]"
      }`}
      style={{
        boxShadow: isMarble
          ? "0 0 30px rgba(1, 95, 255, 0.06)"
          : "0 0 30px rgba(255, 122, 0, 0.08)",
      }}
    >
      <p
        className={`mb-5 text-[1.125rem] font-medium leading-[1.55] md:text-[1.25rem] ${
          isMarble ? "text-navy-950/85" : "text-white/85"
        }`}
      >
        <span
          className={`mr-1 text-[2rem] leading-none ${
            isMarble ? "text-accent-400/60" : "text-gold-400/70"
          }`}
        >
          “
        </span>
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 ${
            isMarble ? "border-navy-950/15" : "border-white/20"
          }`}
        >
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
        <div>
          <p
            className={`text-[0.9375rem] font-bold leading-tight ${
              isMarble ? "text-navy-950" : "text-white"
            }`}
          >
            {name}
          </p>
          <p
            className={`text-[0.8125rem] leading-tight ${
              isMarble ? "text-navy-950/55" : "text-white/55"
            }`}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PhotoTile — photo seule avec caption (séminaires, événements)
   ============================================================ */
export function PhotoTile({
  src,
  alt,
  caption,
  aspectClass = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl">
      <div className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-[0.8125rem] italic text-current opacity-60">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ============================================================
   IdentificationItem — pour la liste "Si tu lis ça…"
   ============================================================ */
export function IdentificationItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 text-[1rem] leading-[1.6] md:text-[1.0625rem]">
      <span
        className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
        aria-hidden
      />
      <span className="text-white/85">{children}</span>
    </li>
  );
}
