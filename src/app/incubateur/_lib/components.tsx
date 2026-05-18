/**
 * Composants présentationnels partagés par les decks /incubateur et
 * /pitch-closing.
 *
 * Le style reprend 100% du design du site Agencilab : classes `.glass-card`,
 * `.gradient-text`, `.glow-gold`, palette navy/accent/gold, Inter Tight.
 * Server-friendly : aucun hook, aucun state.
 */
import type { ReactNode } from "react";
import Image from "next/image";

/* ============================================================
   Primitives de texte
   ============================================================ */

export function Eyebrow({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "gold";
}) {
  const color = tone === "gold" ? "text-gold-400" : "text-accent-400";
  return (
    <span
      className={`mb-5 inline-block text-[0.75rem] font-bold uppercase tracking-[0.22em] ${color}`}
    >
      {children}
    </span>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-balance text-[1.85rem] font-black leading-[1.1] tracking-tight text-white md:text-[2.9rem]">
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 max-w-[640px] text-pretty text-[1rem] leading-relaxed text-white/60 md:text-[1.15rem]">
      {children}
    </p>
  );
}

/** Mot accentué en bleu (style gradient-text du site). */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="gradient-text font-bold">{children}</span>;
}

export function Gold({ children }: { children: ReactNode }) {
  return <span className="font-bold text-gold-400">{children}</span>;
}

/* ============================================================
   Stat — grand chiffre + libellé (style SocialProof du site)
   ============================================================ */

export function Stat({
  value,
  label,
  tone = "accent",
}: {
  value: string;
  label: string;
  tone?: "accent" | "gold" | "white";
}) {
  const color =
    tone === "gold"
      ? "text-gold-400"
      : tone === "white"
        ? "text-white"
        : "text-accent-400";
  return (
    <div className="glass-card rounded-2xl px-5 py-6 text-center">
      <div
        className={`text-[1.9rem] font-bold leading-none tracking-tight md:text-[2.6rem] ${color}`}
      >
        {value}
      </div>
      <div className="mt-2.5 text-[0.8rem] tracking-tight text-white/40 md:text-[0.9rem]">
        {label}
      </div>
    </div>
  );
}

export function StatGrid({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 grid w-full max-w-[760px] grid-cols-2 gap-3.5 md:grid-cols-4 md:gap-4">
      {children}
    </div>
  );
}

/* ============================================================
   BulletList — liste à puces stylée
   ============================================================ */

export function BulletList({
  items,
  tone = "accent",
}: {
  items: ReactNode[];
  tone?: "accent" | "gold" | "red";
}) {
  const dot =
    tone === "gold"
      ? "bg-gold-400"
      : tone === "red"
        ? "bg-red-500"
        : "bg-accent-400";
  return (
    <ul className="mt-6 flex w-full max-w-[620px] flex-col gap-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-left text-[0.97rem] leading-relaxed text-white/80 md:text-[1.08rem]"
        >
          <span
            className={`mt-[0.55rem] h-2 w-2 shrink-0 rounded-full ${dot}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ============================================================
   NumberedList — liste numérotée (étapes / process)
   ============================================================ */

export function NumberedList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="mt-6 flex w-full max-w-[620px] flex-col gap-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3.5 text-left text-[0.97rem] leading-relaxed text-white/80 md:text-[1.08rem]"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-accent-400/10 text-[0.85rem] font-bold text-accent-400">
            {i + 1}
          </span>
          <span className="mt-0.5">{item}</span>
        </li>
      ))}
    </ol>
  );
}

/* ============================================================
   Card — encart en glass morphism (style du site)
   ============================================================ */

export function Card({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "accent" | "gold" | "red";
  className?: string;
}) {
  const toned = {
    dark: "",
    accent: "border-accent-400/40 bg-accent-400/[0.07]",
    gold: "border-gold-400/45 bg-gold-400/[0.08] glow-gold",
    red: "border-red-500/40 bg-red-500/[0.06]",
  }[tone];
  return (
    <div
      className={`glass-card rounded-2xl px-5 py-5 text-left md:px-7 md:py-6 ${toned} ${className}`}
    >
      {children}
    </div>
  );
}

/* ============================================================
   TwoCol — comparaison / colonnes côte à côte
   ============================================================ */

export function TwoCol({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 grid w-full max-w-[840px] gap-4 md:grid-cols-2">
      {children}
    </div>
  );
}

export function ColHeader({
  children,
  tone = "white",
}: {
  children: ReactNode;
  tone?: "white" | "accent" | "gold" | "red";
}) {
  const color =
    tone === "accent"
      ? "text-accent-400"
      : tone === "gold"
        ? "text-gold-400"
        : tone === "red"
          ? "text-red-400"
          : "text-white";
  return (
    <h3 className={`mb-3 text-[1.05rem] font-bold tracking-tight md:text-[1.2rem] ${color}`}>
      {children}
    </h3>
  );
}

/* ============================================================
   Quote — citation mise en avant
   ============================================================ */

export function Quote({
  children,
  author,
}: {
  children: ReactNode;
  author?: string;
}) {
  return (
    <figure className="mt-7 max-w-[660px] border-l-2 border-gold-400/60 pl-5">
      <blockquote className="text-[1.1rem] font-medium italic leading-relaxed text-white/90 md:text-[1.35rem]">
        “{children}”
      </blockquote>
      {author && (
        <figcaption className="mt-3 text-[0.85rem] font-semibold uppercase tracking-wide text-white/45">
          {author}
        </figcaption>
      )}
    </figure>
  );
}

/* ============================================================
   Pill — petit badge
   ============================================================ */

export function Pill({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "gold" | "green";
}) {
  const styles = {
    accent: "border-accent-400/40 bg-accent-400/10 text-accent-400",
    gold: "border-gold-400/40 bg-gold-400/10 text-gold-400",
    green: "border-[#a3e635]/40 bg-[#a3e635]/10 text-[#a3e635]",
  }[tone];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-wide ${styles}`}
    >
      {children}
    </span>
  );
}

/* ============================================================
   PhotoBadge — portrait rond
   ============================================================ */

export function PhotoBadge({
  src,
  alt,
  size = 88,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full border-2 border-white/15"
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="120px" />
    </div>
  );
}

/* ============================================================
   LAYOUTS PLEIN ÉCRAN — chaque slide remplit le viewport,
   façon section du site (rectangle hero-border).
   ============================================================ */

/** Image plein cadre pour le volet média d'un FullSplit. */
export function SlideImage({
  src,
  overlay = true,
}: {
  src: string;
  overlay?: boolean;
}) {
  return (
    <>
      <Image src={src} alt="" fill className="object-cover" sizes="700px" />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-navy-950/15 to-transparent" />
      )}
    </>
  );
}

/** Slide split : texte d'un côté, visuel de l'autre (le layout du Hero). */
export function FullSplit({
  eyebrow,
  eyebrowTone = "accent",
  title,
  children,
  media,
  mediaSide = "right",
}: {
  eyebrow?: ReactNode;
  eyebrowTone?: "accent" | "gold";
  title: ReactNode;
  children?: ReactNode;
  media: ReactNode;
  mediaSide?: "right" | "left";
}) {
  const mediaCol = (
    <div className="relative min-h-[260px] overflow-hidden lg:min-h-0">
      {media}
    </div>
  );
  const textCol = (
    <div className="flex flex-col justify-center p-7 md:p-14">
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-[2.05rem] font-black leading-[1.06] tracking-tight text-white md:text-[3rem]">
        {title}
      </h2>
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
  return (
    <div className="hero-border h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <div
        className={`grid h-full ${
          mediaSide === "left"
            ? "lg:grid-cols-[1fr_1.15fr]"
            : "lg:grid-cols-[1.15fr_1fr]"
        }`}
      >
        {mediaSide === "left" ? (
          <>
            {mediaCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {mediaCol}
          </>
        )}
      </div>
    </div>
  );
}

/** Slide centrée plein écran (cover, divider, garantie). */
export function FullCenter({
  children,
  bg,
}: {
  children: ReactNode;
  bg?: string;
}) {
  return (
    <div className="hero-border relative flex h-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-8 text-center">
      {bg && (
        <>
          <Image src={bg} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy-950/78" />
        </>
      )}
      <div className="relative flex max-w-[820px] flex-col items-center animate-[deckIn_0.5s_ease-out]">
        {children}
      </div>
    </div>
  );
}

/** Slide « scène » : titre en haut, contenu centré (grilles, cartes). */
export function FullStage({
  eyebrow,
  eyebrowTone = "accent",
  title,
  children,
}: {
  eyebrow?: ReactNode;
  eyebrowTone?: "accent" | "gold";
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="hero-border flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center md:px-16">
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-[2.05rem] font-black leading-[1.08] tracking-tight text-white md:text-[3rem]">
        {title}
      </h2>
      <div className="mt-8 flex w-full flex-col items-center">{children}</div>
    </div>
  );
}

/* ============================================================
   BigStat — chiffre géant centré (slides à fort impact)
   ============================================================ */

export function BigStat({
  value,
  label,
  tone = "gold",
}: {
  value: string;
  label?: ReactNode;
  tone?: "gold" | "accent" | "white";
}) {
  const color =
    tone === "accent"
      ? "text-accent-400"
      : tone === "white"
        ? "text-white"
        : "text-gold-400";
  return (
    <div className="mt-2 text-center">
      <div
        className={`text-[3.6rem] font-black leading-[0.95] tracking-tight md:text-[6rem] ${color}`}
      >
        {value}
      </div>
      {label && (
        <div className="mt-2 text-[0.95rem] font-medium text-white/55 md:text-[1.15rem]">
          {label}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   PhotoCard — témoignage avec portrait
   ============================================================ */

export function PhotoCard({
  src,
  name,
  role,
  result,
}: {
  src: string;
  name: string;
  role: string;
  result: string;
}) {
  return (
    <div className="glass-card flex items-center gap-4 rounded-2xl p-4">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gold-400/30">
        <Image src={src} alt={name} fill className="object-cover" sizes="80px" />
      </div>
      <div className="min-w-0">
        <div className="text-[0.95rem] font-bold text-white">{name}</div>
        <div className="text-[0.78rem] text-white/45">{role}</div>
        <div className="mt-1 text-[0.92rem] font-bold text-gold-400">
          {result}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ProofShot — capture d'écran de preuve dans un cadre
   ============================================================ */

export function ProofShot({
  src,
  caption,
  ratio = "4 / 3",
}: {
  src: string;
  caption?: string;
  ratio?: string;
}) {
  return (
    <figure className="glass-card overflow-hidden rounded-2xl p-2">
      <div
        className="relative w-full overflow-hidden rounded-xl"
        style={{ aspectRatio: ratio }}
      >
        <Image src={src} alt={caption ?? "Preuve"} fill className="object-cover" sizes="420px" />
      </div>
      {caption && (
        <figcaption className="px-2 pb-1 pt-2 text-[0.78rem] text-white/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ============================================================
   ImageFrame — image cadrée générique (glass)
   ============================================================ */

export function ImageFrame({
  src,
  alt,
  ratio = "16 / 10",
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`glass-card relative w-full overflow-hidden rounded-2xl ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="640px" />
    </div>
  );
}
