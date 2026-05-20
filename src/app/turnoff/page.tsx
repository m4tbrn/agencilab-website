import type { Metadata } from "next";
import Image from "next/image";
import {
  Star,
  Warning,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Brain,
} from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import SevrageSocialNotif from "@/components/funnel/SevrageSocialNotif";

export const metadata: Metadata = {
  title: "Sevrage · Libère-toi de ton addiction au p*rno",
  description:
    "La méthode neuro-comportementale pour reprogrammer ton cerveau, retrouver ton énergie masculine et reprendre le contrôle.",
};

// Stripe Payment Link · Sevrage 47€ one-shot (offre de lancement, live).
// Produit prod_UYBWndqyqXOfz9 · Prix price_1TZ59MIsmU165jVIcfZDKhCW
const CHECKOUT_URL = "https://buy.stripe.com/fZucN5fYW3IH43lfc56g805";

/* ============================================================
   Palette Sevrage · Pornhub : NOIR / BLANC / ORANGE (#FF9000)
   Bascule narrative noir → blanc à la Partie 5 (le rêve).
   Le produit (Sevrage) n'est nommé qu'à la Partie 6.
   Structure de page : prose VSL + asides image (style Notion).
   ============================================================ */

function CTAButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`inline-flex items-center gap-3 rounded-xl bg-[#FF9000] px-9 py-4 text-[1rem] font-extrabold uppercase tracking-wide text-black shadow-[0_10px_40px_rgba(255,144,0,0.45)] transition-transform hover:scale-[1.02] ${className}`}
    >
      {children}
      <ArrowRight size={18} weight="bold" />
    </a>
  );
}

function Stars({ size = 16 }: { size?: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} weight="fill" className="text-[#FF9000]" />
      ))}
    </span>
  );
}

// Aside image · style Notion. Si `src` est fourni, affiche l'image réelle.
// Sinon, affiche un placeholder avec le brief.
function Aside({
  brief,
  src,
  alt,
  variant = "dark",
}: {
  brief: string;
  src?: string;
  alt?: string;
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";

  if (src) {
    return (
      <figure className="mx-auto my-10 max-w-[520px]">
        <Image
          src={src}
          alt={alt ?? ""}
          width={1024}
          height={1024}
          className="h-auto w-full rounded-lg"
        />
      </figure>
    );
  }

  return (
    <figure
      className={`mx-auto my-10 flex aspect-[4/3] max-w-[680px] items-center justify-center rounded-lg border border-dashed px-6 text-center text-[0.8125rem] leading-[1.5] ${
        isLight
          ? "border-black/15 bg-[#F5F1E8] text-black/55"
          : "border-white/15 bg-[#0a0a0a] text-[#F5F1E8]/40"
      }`}
    >
      <figcaption>
        <strong className={isLight ? "text-black/70" : "text-[#F5F1E8]/60"}>
          [Image]
        </strong>
        <br />
        {brief}
      </figcaption>
    </figure>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mx-auto mt-2 mb-8 max-w-[680px] text-[clamp(1.625rem,4vw,2.375rem)] font-extrabold leading-[1.15] tracking-tight">
      {children}
    </h2>
  );
}

function Orange({ children }: { children: React.ReactNode }) {
  return <span className="text-[#FF9000]">{children}</span>;
}

const MODULES = [
  {
    num: "01",
    titre: "Ce qui se passe vraiment dans ton cerveau",
    desc: "Le circuit dopaminergique, comment le porno court-circuite ta biologie, et les 5 dégâts concrets qu'il fait à ton corps, ton focus et ton ambition.",
  },
  {
    num: "02",
    titre: "Le vide et le bordel",
    desc: "Pourquoi le porno n'est jamais le vrai problème · seulement le sédatif. Identifie ce qu'il anesthésie chez toi, et cartographie tes déclencheurs personnels.",
  },
  {
    num: "03",
    titre: "Le purge ritual",
    desc: "Avant de construire, il faut vider. Les 4 niveaux du purge (mental, silence, émotionnel, environnemental) et la règle des 90 secondes qui change tout.",
  },
  {
    num: "04",
    titre: "Couper le circuit",
    desc: "Le système de friction et le protocole en 4 temps à utiliser dans le moment critique. Les 4 pièges classiques qui font rechuter même ceux qui ont tenu longtemps.",
  },
  {
    num: "05",
    titre: "Les 5 canaux de transmission",
    desc: "L'énergie ne disparaît pas · elle se déplace. Comment rediriger ton énergie sexuelle vers les 5 canaux qui construisent une vie réelle (corps, création, projet, esprit, relations).",
  },
  {
    num: "06",
    titre: "La migration d'identité",
    desc: "Le levier le plus profond. Passer de l'homme qui résiste à l'homme souverain · celui qui n'a plus besoin du porno parce qu'il a construit quelque chose que le porno ne peut pas concurrencer.",
  },
];

const FAQ_ITEMS = [
  { q: "Et si je n'arrive pas à tenir comme avec les défis No Fap ?", a: "Sevrage n'est pas un défi basé sur la volonté. C'est une reprogrammation de tes circuits. Tu n'as pas à « tenir » contre ton cerveau · il devient ton allié." },
  { q: "Combien de temps ça prend ?", a: "Tu sens un changement dès les premiers jours (clarté, énergie, sommeil). La transformation complète se joue sur quelques semaines, en suivant la méthode étape par étape." },
  { q: "C'est compatible avec mon quotidien ?", a: "Oui. La méthode se pratique en quelques minutes par jour. Pas besoin de méditer 1 h ou de changer ta vie. Juste appliquer les bons gestes au bon moment." },
  { q: "Et si ça ne marche pas pour moi ?", a: "Voir la garantie ci-dessus. Le risque est de mon côté, pas du tien." },
];

// Texte prose · wrapper qui donne le style "VSL en page" partagé.
// <strong> = effet surligneur orange (marqueur sous le mot)
// <em> = handwritten Caveat, plus gros, orange (note manuscrite)
function Prose({
  children,
  variant = "dark",
}: {
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  // Effet surligneur : dégradé qui ne colore que la moitié basse du texte.
  const highlight =
    "[&_strong]:bg-[linear-gradient(transparent_55%,rgba(255,144,0,0.35)_55%)] [&_strong]:px-0.5 [&_strong]:box-decoration-clone";
  const handwritten =
    "[&_em]:not-italic [&_em]:text-[1.35em] [&_em]:font-bold [&_em]:text-[#FF9000] [&_em]:font-[var(--font-caveat)] [&_em]:leading-[1]";

  const cls =
    variant === "dark"
      ? `text-[#F5F1E8]/80 [&_strong]:text-[#F5F1E8] ${highlight} ${handwritten}`
      : `text-black/75 [&_strong]:text-[#0a0a0a] ${highlight} ${handwritten}`;
  return (
    <div
      className={`mx-auto max-w-[680px] space-y-5 text-[1.0625rem] leading-[1.85] md:text-[1.125rem] ${cls}`}
    >
      {children}
    </div>
  );
}

// ============================================================
// PATTERN INTERRUPTS · composants pour casser le rythme prose
// ============================================================

// Stat callout avec schéma visuel (barres comparées)
// Usage : <StatCallout big="-17 %" label="..." chartType="bars" data={[...]} />
function StatCallout({
  big,
  label,
  source,
  chartType,
  data,
  variant = "dark",
}: {
  big: string;
  label: string;
  source?: string;
  chartType?: "bars" | "lineup" | "donut";
  data?: { name: string; value: number; color?: string }[];
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";
  const border = isDark ? "border-[#FF9000]/30" : "border-[#FF9000]/40";
  const bg = isDark ? "bg-[#FF9000]/[0.04]" : "bg-[#FF9000]/[0.06]";
  const labelColor = isDark ? "text-[#F5F1E8]/75" : "text-black/70";
  const sourceColor = isDark ? "text-[#F5F1E8]/35" : "text-black/40";

  return (
    <div
      className={`my-12 mx-auto max-w-[680px] overflow-hidden rounded-2xl border-2 ${border} ${bg} px-6 py-8 md:px-10 md:py-10`}
    >
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
        {/* Big number */}
        <div className="flex-shrink-0 text-center md:text-left">
          <p
            className="text-[clamp(3rem,8vw,5rem)] font-extrabold leading-none tracking-tight text-[#FF9000]"
            style={{
              textShadow: isDark
                ? "0 0 40px rgba(255,144,0,0.4)"
                : "0 4px 20px rgba(255,144,0,0.25)",
            }}
          >
            {big}
          </p>
        </div>

        {/* Schéma + label */}
        <div className="flex-1">
          {chartType === "bars" && data && (
            <div className="mb-4 space-y-2.5">
              {data.map((d) => {
                const maxValue = Math.max(...data.map((x) => x.value));
                const widthPct = (d.value / maxValue) * 100;
                return (
                  <div key={d.name} className="flex items-center gap-3">
                    <span
                      className={`w-[88px] flex-shrink-0 text-[0.6875rem] font-bold uppercase tracking-wide ${labelColor}`}
                    >
                      {d.name}
                    </span>
                    <div
                      className={`h-3 flex-1 overflow-hidden rounded-full ${
                        isDark ? "bg-[#F5F1E8]/[0.06]" : "bg-black/[0.06]"
                      }`}
                    >
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${widthPct}%`,
                          background: d.color ?? "#FF9000",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {chartType === "lineup" && data && (
            <div className="mb-4 flex items-end justify-between gap-2">
              {data.map((d) => {
                const maxValue = Math.max(...data.map((x) => x.value));
                const heightPct = (d.value / maxValue) * 100;
                return (
                  <div key={d.name} className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-10 rounded-t-md transition-all"
                      style={{
                        height: `${Math.max(heightPct, 8)}px`,
                        background: d.color ?? "#FF9000",
                      }}
                    />
                    <span
                      className={`text-[0.6rem] font-bold uppercase tracking-wide ${labelColor}`}
                    >
                      {d.name}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          <p
            className={`text-[0.9375rem] leading-[1.5] md:text-[1rem] ${
              isDark ? "text-[#F5F1E8]/85" : "text-[#0a0a0a]"
            }`}
          >
            {label}
          </p>
          {source && (
            <p className={`mt-2 text-[0.6875rem] uppercase tracking-wide ${sourceColor}`}>
              {source}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Pull quote · citation centrée géante avec guillemets handwritten Caveat
function PullQuote({
  children,
  attribution,
  variant = "dark",
}: {
  children: React.ReactNode;
  attribution?: string;
  variant?: "dark" | "light";
}) {
  const textColor = variant === "dark" ? "text-[#F5F1E8]" : "text-[#0a0a0a]";
  const attrColor = variant === "dark" ? "text-[#F5F1E8]/55" : "text-black/55";
  return (
    <blockquote className="my-14 mx-auto max-w-[680px] text-center">
      <span
        className="block text-[5rem] leading-[0.6] text-[#FF9000]"
        style={{ fontFamily: "var(--font-caveat)" }}
        aria-hidden
      >
        &ldquo;
      </span>
      <p
        className={`mt-2 text-[clamp(1.375rem,3.2vw,1.875rem)] font-extrabold leading-[1.2] tracking-tight ${textColor}`}
      >
        {children}
      </p>
      {attribution && (
        <p className={`mt-4 text-[0.75rem] uppercase tracking-[0.18em] ${attrColor}`}>
          {attribution}
        </p>
      )}
    </blockquote>
  );
}

// Étude scientifique · fond gris foncé + mini-schéma visuel
function StudyCard({
  journal,
  title,
  excerpt,
  year,
  visual,
}: {
  journal: string;
  title: React.ReactNode;
  excerpt: React.ReactNode;
  year?: string;
  visual?: React.ReactNode;
}) {
  return (
    <article
      className="my-8 mx-auto max-w-[680px] overflow-hidden rounded-xl border border-[#F5F1E8]/10 bg-[#1a1a1a] text-[#F5F1E8]"
      style={{
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
      }}
    >
      <header className="flex items-center justify-between border-b border-[#F5F1E8]/10 bg-[#0f0f0f] px-6 py-3 md:px-8">
        <span className="text-[0.6875rem] font-extrabold uppercase tracking-[0.2em] text-[#FF9000]">
          Étude · {journal}
        </span>
        {year && (
          <span className="font-mono text-[0.75rem] font-bold text-[#F5F1E8]/55">
            {year}
          </span>
        )}
      </header>

      {visual && (
        <div className="border-b border-[#F5F1E8]/10 bg-[#202020] px-6 py-5 md:px-8 md:py-6">
          {visual}
        </div>
      )}

      <div className="px-6 py-6 md:px-8 md:py-7">
        <h4 className="mb-3 text-[1.25rem] font-extrabold leading-[1.2] tracking-tight text-[#F5F1E8] md:text-[1.5rem]">
          {title}
        </h4>
        <p className="text-[0.9375rem] leading-[1.55] text-[#F5F1E8]/70 md:text-[1rem]">
          {excerpt}
        </p>
      </div>
    </article>
  );
}

// ============= Schémas pour StudyCard =============

// JAMA · Bar comparée : matière grise normal vs accro porno
function GreyMatterBars() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="w-[140px] flex-shrink-0 text-[0.75rem] font-bold uppercase tracking-wide text-[#F5F1E8]/70">
          Cerveau normal
        </span>
        <div className="h-5 flex-1 overflow-hidden rounded-full bg-[#F5F1E8]/[0.08]">
          <div className="h-full rounded-full bg-[#F5F1E8]" style={{ width: "100%" }} />
        </div>
        <span className="w-[42px] text-right text-[0.75rem] font-mono font-bold text-[#F5F1E8]">100%</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-[140px] flex-shrink-0 text-[0.75rem] font-bold uppercase tracking-wide text-[#FF9000]">
          Accro porno
        </span>
        <div className="h-5 flex-1 overflow-hidden rounded-full bg-[#F5F1E8]/[0.08]">
          <div className="h-full rounded-full bg-[#FF9000]" style={{ width: "83%" }} />
        </div>
        <span className="w-[42px] text-right text-[0.75rem] font-mono font-bold text-[#FF9000]">-17%</span>
      </div>
    </div>
  );
}

// Cambridge · 2 boîtes identiques avec "=" entre, icône Brain Phosphor
function BrainEquivalence() {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      <div className="flex flex-1 max-w-[180px] flex-col items-center rounded-lg border border-[#F5F1E8]/15 bg-[#F5F1E8]/[0.05] px-4 py-4">
        <Brain size={44} weight="duotone" className="text-[#F5F1E8]" />
        <span className="mt-2 text-[0.6875rem] font-extrabold uppercase tracking-wide text-[#F5F1E8]/80">Toxicomane</span>
      </div>

      <span className="text-[2.5rem] font-extrabold leading-none text-[#FF9000]">=</span>

      <div className="flex flex-1 max-w-[180px] flex-col items-center rounded-lg border border-[#FF9000]/30 bg-[#FF9000]/[0.06] px-4 py-4">
        <Brain size={44} weight="duotone" className="text-[#FF9000]" />
        <span className="mt-2 text-[0.6875rem] font-extrabold uppercase tracking-wide text-[#FF9000]">Accro porno</span>
      </div>
    </div>
  );
}

// Dopamine · courbe baseline → spike → crash (schéma standalone)
function DopamineCurve() {
  return (
    <div className="mx-auto my-12 max-w-[680px] rounded-2xl border border-[#F5F1E8]/10 bg-[#1a1a1a] p-6 md:p-8">
      <p className="mb-1 text-center text-[0.6875rem] font-extrabold uppercase tracking-[0.2em] text-[#FF9000]">
        Ta dopamine sur 24 h
      </p>
      <p className="mb-5 text-center text-[0.875rem] text-[#F5F1E8]/55">
        Ce que le porno fait vraiment à ton cerveau
      </p>

      <svg
        viewBox="0 0 600 260"
        className="block w-full"
        role="img"
        aria-label="Graphe : dopamine plate, spike violent au moment du porno, crash sous la baseline"
      >
        {/* Axes */}
        <line x1="40" y1="130" x2="580" y2="130" stroke="#F5F1E8" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="40" y1="30" x2="40" y2="230" stroke="#F5F1E8" strokeOpacity="0.2" strokeWidth="1" />

        {/* Label baseline */}
        <text x="50" y="124" fill="#F5F1E8" fillOpacity="0.5" fontSize="10" fontWeight="700" letterSpacing="1">
          BASELINE NORMALE
        </text>

        {/* Courbe : flat → spike → crash → lente remontée */}
        <path
          d="M 40 130 L 220 130 C 240 130 250 50 280 30 C 310 50 320 130 340 130 C 360 130 380 220 420 220 C 470 220 520 160 580 145"
          fill="none"
          stroke="#FF9000"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Spike marker */}
        <circle cx="280" cy="30" r="6" fill="#FF9000" />
        <text x="280" y="20" fill="#FF9000" fontSize="11" fontWeight="800" textAnchor="middle">
          PORN
        </text>

        {/* Crash marker */}
        <circle cx="420" cy="220" r="6" fill="#FF9000" />
        <text x="420" y="245" fill="#FF9000" fontSize="11" fontWeight="800" textAnchor="middle">
          CRASH
        </text>

        {/* Zone crash (sous baseline) */}
        <path
          d="M 340 130 C 360 130 380 220 420 220 C 470 220 520 160 580 145 L 580 130 L 340 130 Z"
          fill="#FF9000"
          fillOpacity="0.08"
        />
      </svg>

      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-lg bg-[#F5F1E8]/[0.04] px-3 py-2">
          <p className="text-[0.6875rem] font-bold uppercase tracking-wide text-[#F5F1E8]/55">Avant</p>
          <p className="mt-0.5 text-[0.8125rem] font-bold text-[#F5F1E8]">Stable</p>
        </div>
        <div className="rounded-lg bg-[#FF9000]/[0.08] px-3 py-2">
          <p className="text-[0.6875rem] font-bold uppercase tracking-wide text-[#FF9000]">Pendant</p>
          <p className="mt-0.5 text-[0.8125rem] font-bold text-[#FF9000]">Pic artificiel</p>
        </div>
        <div className="rounded-lg bg-[#FF9000]/[0.08] px-3 py-2">
          <p className="text-[0.6875rem] font-bold uppercase tracking-wide text-[#FF9000]">Après</p>
          <p className="mt-0.5 text-[0.8125rem] font-bold text-[#FF9000]">Crash &amp; vide</p>
        </div>
      </div>
    </div>
  );
}

// CTA inline · bouton simple qui scrolle vers la section offre (#offre)
// Pas de prix · juste un appel à l'action contextuel
function CTAInline({
  label = "Découvrir Sevrage",
}: {
  label?: string;
  variant?: "dark" | "light";
}) {
  return (
    <div className="my-10 flex justify-center">
      <a
        href="#offre"
        className="inline-flex items-center gap-3 rounded-xl bg-[#FF9000] px-8 py-4 text-[0.9375rem] font-extrabold uppercase tracking-wide text-black shadow-[0_12px_40px_rgba(255,144,0,0.45)] transition-transform hover:scale-[1.02] md:text-[1rem]"
      >
        {label}
        <ArrowRight size={18} weight="bold" />
      </a>
    </div>
  );
}

// Value stack · format identique à Cash Cow Express
// Glass cards sur fond noir + accent orange.
function ValueStack({
  items,
  finalPrice,
}: {
  items: { name: string; value: string; sub?: string }[];
  finalPrice: string;
}) {
  const total = items.reduce((acc, it) => {
    const n = parseFloat(it.value.replace(/[^\d.]/g, ""));
    return acc + (isNaN(n) ? 0 : n);
  }, 0);

  return (
    <section className="relative mx-auto my-12 max-w-[1100px] overflow-hidden rounded-[2rem] bg-black px-5 py-16 text-white sm:px-6 md:my-16 md:py-24">
      {/* Lueurs orange diffuses derrière */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#FF9000]/12 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[760px]">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-[760px] text-center md:mb-10">
          <span className="mb-3 inline-block text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#FF9000] md:text-[0.8125rem]">
            Récapitulatif
          </span>
          <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white">
            Tout ce que tu reçois{" "}
            <Orange>en rejoignant aujourd&apos;hui</Orange>
          </h2>
        </div>

        <div className="mx-auto max-w-[680px]">
          {/* Liste des éléments · glass cards */}
          <div className="space-y-2.5">
            {items.map((it) => (
              <div
                key={it.name}
                className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm md:p-5"
              >
                <CheckCircle
                  size={22}
                  weight="fill"
                  className="mt-0.5 shrink-0 text-[#FF9000]"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[0.9375rem] font-bold leading-[1.3] tracking-tight text-white md:text-[1rem]">
                    {it.name}
                  </p>
                  {it.sub && (
                    <p className="mt-0.5 text-[0.8125rem] leading-[1.5] text-white/55 md:text-[0.875rem]">
                      {it.sub}
                    </p>
                  )}
                </div>
                <span className="shrink-0 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.75rem] font-bold text-white/70">
                  {it.value}
                </span>
              </div>
            ))}
          </div>

          {/* Valeur totale barrée */}
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <span className="text-[0.9375rem] font-semibold text-white/70 md:text-[1rem]">
              Valeur totale
            </span>
            <span className="text-[1.25rem] font-bold text-white/50 line-through decoration-[#ef4444]/70 decoration-2 md:text-[1.5rem]">
              {total}€
            </span>
          </div>

          {/* Prix final · épuré, le 47€ est le héros */}
          <div
            className="mt-3 rounded-2xl border-2 border-[#FF9000]/45 bg-[#FF9000]/[0.06] px-6 py-10 text-center md:px-8 md:py-12"
            style={{ boxShadow: "0 0 40px rgba(255, 144, 0, 0.14)" }}
          >
            {/* Badge en haut */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF9000] px-3.5 py-1.5 text-[0.6875rem] font-extrabold uppercase tracking-[0.2em] text-black">
              <Star size={11} weight="fill" />
              Offre de lancement · -50%
            </span>

            {/* Prix héros 47€ */}
            <p
              className="mt-7 font-mono text-[clamp(4rem,12vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-white"
              style={{ textShadow: "0 0 60px rgba(255,144,0,0.55)" }}
            >
              {finalPrice}
            </p>

            {/* Discret · au lieu de */}
            <p className="mt-3 text-[0.875rem] text-white/55">
              au lieu de{" "}
              <span className="font-bold text-white/65 line-through decoration-[#ef4444]/70 decoration-2">
                97€
              </span>
            </p>

            {/* Réassurance */}
            <div className="mt-8 flex flex-col items-center gap-1.5 text-[0.8125rem] text-white/60">
              <span className="inline-flex items-center gap-2">
                <CheckCircle size={14} weight="fill" className="text-[#FF9000]" />
                Paiement unique · accès à vie
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={14} weight="fill" className="text-[#FF9000]" />
                Accès immédiat après ton inscription
              </span>
            </div>

            <a
              href={CHECKOUT_URL}
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#FF9000] px-10 py-4 text-[1rem] font-extrabold uppercase tracking-wide text-black shadow-[0_12px_40px_rgba(255,144,0,0.45)] transition-transform hover:scale-[1.02] md:text-[1.0625rem]"
            >
              Je rejoins Sevrage
              <ArrowRight size={18} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Frontiers · 4 capacités qui chutent, chacune avec flèche descendante
function CognitiveDecline() {
  const items = [
    { label: "Focus" },
    { label: "Mémoire" },
    { label: "Décisions" },
    { label: "Contrôle" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.label}
          className="flex flex-col items-center rounded-lg border border-[#FF9000]/25 bg-[#FF9000]/[0.05] px-3 py-3"
        >
          <span className="text-[0.6875rem] font-bold uppercase tracking-wide text-[#F5F1E8]/80">
            {it.label}
          </span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF9000" strokeWidth="2.5" className="mt-1.5">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ))}
    </div>
  );
}

// Warning callout · bloc orange/sombre dramatique
function WarningCallout({
  children,
  variant = "dark",
}: {
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`my-12 mx-auto max-w-[680px] rounded-2xl border-l-4 border-[#FF9000] px-6 py-5 md:px-8 md:py-6 ${
        isDark ? "bg-[#FF9000]/[0.08]" : "bg-[#FF9000]/[0.1]"
      }`}
      style={{
        boxShadow: isDark
          ? "inset 0 0 60px rgba(255,144,0,0.05)"
          : "inset 0 0 40px rgba(255,144,0,0.04)",
      }}
    >
      <div className="flex items-start gap-4">
        <Warning
          size={28}
          weight="fill"
          className="mt-0.5 flex-shrink-0 text-[#FF9000]"
        />
        <p
          className={`text-[1rem] font-bold leading-[1.4] tracking-tight md:text-[1.125rem] ${
            isDark ? "text-[#F5F1E8]" : "text-[#0a0a0a]"
          }`}
        >
          {children}
        </p>
      </div>
    </div>
  );
}

// Timeline transformation · frise verticale Jour X
function Timeline({
  steps,
  variant = "dark",
}: {
  steps: { day: string; label: string }[];
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";
  return (
    <div className="my-12 mx-auto max-w-[680px]">
      <div className="relative grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4">
        {/* Ligne horizontale derrière (desktop only) */}
        <div
          className={`pointer-events-none absolute left-0 right-0 top-[14px] hidden h-px sm:block ${
            isDark ? "bg-[#F5F1E8]/15" : "bg-black/15"
          }`}
          aria-hidden
        />
        {steps.map((s, i) => (
          <div key={i} className="relative flex flex-col items-center text-center">
            {/* Pastille */}
            <div
              className="relative z-10 mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#FF9000] text-[0.6875rem] font-extrabold text-black"
              style={{ boxShadow: "0 0 20px rgba(255,144,0,0.5)" }}
            >
              {i + 1}
            </div>
            <p
              className={`text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[#FF9000]`}
            >
              {s.day}
            </p>
            <p
              className={`mt-1.5 text-[0.875rem] leading-[1.35] md:text-[0.9375rem] ${
                isDark ? "text-[#F5F1E8]/80" : "text-black/75"
              }`}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Sevrage() {
  return (
    <div className="bg-black text-[#F5F1E8]">
      <main className="relative flex-1 overflow-hidden">

        {/* ===================================================================
            ZONE NOIRE (les ténèbres) · Parties 1 à 4
            =================================================================== */}
        <div className="relative">
          {/* Ambiance · orbes orange diffuses */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[#FF9000]/18 blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#FF9000]/10 blur-[120px]" />
            <div className="absolute top-[40%] left-[8%] h-[200px] w-[200px] rounded-full bg-[#FF9000]/8 blur-[100px]" />
          </div>

          {/* Grain / texture subtile */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
              backgroundSize: "4px 4px",
            }}
            aria-hidden
          />

          {/* ===================== PARTIE 1 · ACCROCHE ===================== */}
          <section className="relative z-10 px-5 pb-10 pt-14 sm:px-6 md:pb-12 md:pt-12">
            <div className="mx-auto max-w-[960px]">

              {/* Kicker · pré-headline */}
              <div className="mb-7 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FF9000]/50 bg-[#FF9000]/10 px-4 py-2 text-[0.6875rem] font-extrabold uppercase tracking-[0.22em] text-[#FF9000] shadow-[0_0_30px_rgba(255,144,0,0.25)]">
                  <Warning size={13} weight="fill" />
                  Lecture sensible · 5 min
                </span>
              </div>

              {/* Headline principale · avec halo orange en arrière */}
              <div className="relative">
                <div
                  className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[60%] max-w-[700px] -translate-y-1/2 rounded-full bg-[#FF9000]/15 blur-[100px]"
                  aria-hidden
                />
                <h1 className="relative text-center text-[clamp(1.625rem,4vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-[#F5F1E8]">
                  Comment supprimer{" "}
                  <Orange>définitivement</Orange>
                  <br className="hidden sm:block" />
                  {" "}ton addiction au p*rno
                  <br className="hidden sm:block" />
                  {" "}et arrêter de{" "}
                  <Orange>subir tes pulsions sexuelles.</Orange>
                </h1>
              </div>

              {/* Sous-titre promesse */}
              <p className="mx-auto mt-7 max-w-[640px] text-center text-[1.0625rem] leading-[1.55] text-[#F5F1E8]/65 md:text-[1.1875rem]">
                La méthode neuro-comportementale qui désactive ce qu&apos;aucun
                défi No Fap n&apos;arrive à corriger · basée sur la biologie
                de ton cerveau d&apos;homme.
              </p>

              {/* HERO VISUAL · doodle principal, mis en valeur dans un cadre avec glow */}
              <div className="relative mx-auto mt-12 max-w-[720px]">
                {/* Coins décoratifs orange */}
                <div className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-[#FF9000]" aria-hidden />
                <div className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-[#FF9000]" aria-hidden />
                <div className="pointer-events-none absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-[#FF9000]" aria-hidden />
                <div className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-[#FF9000]" aria-hidden />

                <figure
                  className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border border-[#FF9000]/30 bg-gradient-to-br from-[#FF9000]/[0.08] to-transparent px-8 text-center text-[0.8125rem] leading-[1.5] text-[#F5F1E8]/45"
                  style={{
                    boxShadow:
                      "0 0 80px rgba(255, 144, 0, 0.20), inset 0 0 60px rgba(255,144,0,0.04)",
                  }}
                >
                  <figcaption className="max-w-[420px]">
                    <strong className="text-[#FF9000]">[Image hero]</strong>
                    <br />
                    Homme assis dos courbé devant un écran lumineux qui projette
                    une silhouette féminine. Des chaînes de pixels orange
                    relient son visage à l&apos;écran. Style sketch sharpie sur
                    fond noir. Au-dessus en lettres mal écrites :
                    &laquo; ESCLAVE &raquo;. Accent #FF9000 sur les chaînes et
                    l&apos;écran.
                  </figcaption>
                </figure>

                {/* Légende d'image discrète */}
                <p className="mt-4 text-center text-[0.75rem] uppercase tracking-[0.18em] text-[#F5F1E8]/35">
                  Toi · tous les soirs · sans même t&apos;en rendre compte
                </p>
              </div>

              {/* Diviseur décoratif */}
              <div
                className="mx-auto mt-14 h-px max-w-[220px] bg-gradient-to-r from-transparent via-[#FF9000]/60 to-transparent"
                aria-hidden
              />

              <div className="mt-14">
                <Prose>
                  <p>
                    Bon… Je préfère être direct avec toi dès le départ.
                    Je prends de gros risques en faisant cette page.
                  </p>
                  <p>
                    Parce que ce que je vais te dire ici…{" "}
                    <strong>beaucoup de gens ne veulent pas que tu l&apos;entendes.</strong>
                  </p>
                  <p>
                    Des gens puissants. Des groupes. Des plateformes…
                    Qui ont un objectif très simple :{" "}
                    <Orange>te transformer en esclave.</Orange>
                  </p>
                  <p>
                    Pas avec des chaînes en fer.
                    Mais avec <strong>des pixels. Des images. Des vidéos.</strong>
                    Et avec une arme dangereuse, censée t&apos;appartenir.
                  </p>
                  <p>
                    Ce que t&apos;as ici, entre tes deux oreilles. Ton cerveau.
                    Leur stratégie est simple ? <strong>Te rendre ACCRO.</strong>
                  </p>
                  <p>
                    Sur cette page, je vais te révéler{" "}
                    <strong>
                      ce que personne ne t&apos;a jamais expliqué sur l&apos;impact du porno
                    </strong>{" "}
                    sur ton cerveau. Ton énergie. Ta mémoire. Ta motivation. Ta réussite.
                    Et même ta vie.
                  </p>
                  <p>
                    Tu pourrais croire que ça détend. Que c&apos;est inoffensif.
                    Mais la vérité, c&apos;est que tu es sûrement{" "}
                    <strong>en train de saboter ton potentiel, ta virilité, et ton avenir.</strong>
                  </p>
                  <p>
                    Et tout ça… à cause <strong>d&apos;une seule petite habitude que tu as normalisée</strong> : la masturbation.
                  </p>
                  <p>
                    Dans les 5 prochaines minutes, on va parler{" "}
                    <strong>de ce que ça te coûte vraiment.</strong> Et surtout, de{" "}
                    <strong>comment t&apos;en libérer.</strong>
                  </p>
                </Prose>
              </div>

            </div>
          </section>

          {/* ===================== PARTIE 2 · MATIÈRE GRISE ===================== */}
          <section className="relative z-10 px-5 py-8 sm:px-6 md:py-10">
            <div className="mx-auto max-w-[820px]">
              <SectionTitle>
                <span className="text-[#F5F1E8]">Le p*rno te fait perdre de ta </span>
                <Orange>matière grise.</Orange>
              </SectionTitle>

              <Prose>
                <p>
                  Avant ça, on va remettre les choses à leur place. Le cerveau.{" "}
                  <strong>La machine la plus complexe et avancée</strong> jamais conçue par l&apos;univers.
                </p>
                <p>
                  Une machine qui pilote <strong>tout ce que tu fais</strong> : c&apos;est lui qui décide si tu avances
                  ou si tu stagnes. C&apos;est lui qui t&apos;aide à séduire, à créer, à construire, à penser,
                  à résister, à choisir. C&apos;est lui qui gouverne ta vie. Ton identité. Ton avenir.
                </p>
                <p>
                  Le centre <strong>absolu de l&apos;humanité.</strong> Plus de 100 milliards de neurones.
                  100 000 connexions par cellule. Des milliards de signaux envoyés <strong>chaque seconde</strong>.
                  Des zones qui contrôlent ton focus, ta motivation, ton stress, ta mémoire, ton désir.
                </p>
                <p>
                  Si on est allés sur la Lune, c&apos;est grâce à lui. Si Einstein ou Newton ont réécrit les lois
                  de l&apos;univers, c&apos;est grâce à lui. Si Steve Jobs a mis cet ordinateur dans ta poche,
                  c&apos;est grâce à lui.
                </p>
                <p>
                  Si des hommes ont survécu à la guerre, ont construit des empires, des cathédrales,
                  des civilisations entières · si t&apos;es capable de visualiser l&apos;invisible, d&apos;avoir
                  des idées, de créer, d&apos;aimer, de prendre les décisions difficiles, de devenir président,
                  de faire quelque chose de plus grand que toi · eh bien… c&apos;est grâce à lui.
                </p>
                <p>
                  Ce petit bout de matière grise entre tes deux oreilles.
                </p>
                <p>
                  Et aujourd&apos;hui… ce joyau, ce trésor, ce{" "}
                  <strong>chef-d&apos;œuvre biologique</strong>… tu l&apos;utilises pour quoi ?
                </p>
                <p>
                  Liker des fesses sur Insta. Te masturber devant une vidéo X à 1h du mat, seul dans le noir.
                  Pour « évacuer la pression ». <em>Quelle bonne blague.</em>
                </p>
                <p>
                  En réalité, ce qui se passe dans ton cerveau est totalement différent. Chaque fois que tu
                  te « vides » sur une vidéo, ton cerveau reçoit une <strong>décharge de dopamine complètement
                  artificielle</strong>. Un pic de plaisir totalement <strong>décorrélé de la réalité</strong>.
                </p>
              </Prose>

              <DopamineCurve />

              <Prose>
                <p>
                  Mais lui, ne sait pas faire la différence. Il croit que tu viens de « réussir », qu&apos;il a
                  accompli sa mission biologique. Car il vient de transmettre ses gènes. Sauf qu&apos;en vrai…
                  tu viens juste de perdre ton énergie sexuelle dans un bout de papier.
                </p>
                <p>
                  Et ce que je te dis, c&apos;est pas du vent. C&apos;est prouvé par de nombreuses études scientifiques.
                </p>
              </Prose>

              <Aside
                src="/images/turnoff/brain-equals.png"
                alt="Cerveau de toxicomane et cerveau d'accro au porno, identiques"
                brief=""
              />

              <StudyCard
                journal="JAMA Psychiatry"
                visual={<GreyMatterBars />}
                title="Réduction de la matière grise associée à la consommation de pornographie."
                excerpt={
                  <>
                    Les consommateurs réguliers de porno présentent une{" "}
                    <strong className="text-[#FF9000]">
                      atrophie significative du striatum
                    </strong>{" "}
                    · la zone qui pilote ta motivation, ton désir, ta capacité à
                    prendre des décisions. Plus tu consommes, plus ton cerveau
                    rétrécit.
                  </>
                }
              />

              <StudyCard
                journal="Université de Cambridge"
                visual={<BrainEquivalence />}
                title="Le cerveau des accros au porno s'active comme celui des toxicomanes."
                excerpt={
                  <>
                    Mêmes circuits dopaminergiques. Mêmes réponses au stimulus.
                    Même perte de contrôle. Et plus tu consommes, plus il te
                    faut de <strong className="text-[#FF9000]">nouvelles vidéos toujours plus intenses</strong>{" "}
                    pour ressentir la même chose · la signature biologique de
                    l&apos;addiction.
                  </>
                }
              />

              <StudyCard
                journal="Frontiers in Psychology"
                visual={<CognitiveDecline />}
                title="Altération des fonctions cognitives supérieures chez les utilisateurs excessifs."
                excerpt={
                  <>
                    Perte de contrôle exécutif, baisse de mémoire de travail,{" "}
                    <strong className="text-[#FF9000]">
                      altération des fonctions cognitives supérieures
                    </strong>{" "}
                    · ce qui te permet de réfléchir, te concentrer, prendre des
                    décisions et mémoriser.
                  </>
                }
              />

              <Prose>
                <p>
                  Tu perds ta capacité à réfléchir vite. À te concentrer longtemps. À prendre des décisions
                  rapidement. À mémoriser ce que tu lis. Mais ce n&apos;est pas tout.
                </p>
                <p>
                  Plus tu consommes, plus ton cerveau s&apos;adapte à cette source de plaisir immédiat.
                  Tu rejettes le réel. Tu rejettes la difficulté. Tu rejettes le présent. Ta dopamine chute.
                  Tout paraît fade. Le monde réel devient lent, gris, sans goût.
                </p>
                <p>
                  Et le résultat, c&apos;est que tu procrastines. Tu scrolles en boucle. Tu repousses toujours
                  tout. Tu sens que tu tournes en rond. Et chaque rechute <strong>renforce ce circuit de récompense.</strong>
                </p>
                <p className="text-[1.125rem] font-semibold text-[#F5F1E8] md:text-[1.1875rem]">
                  Chaque vidéo X <Orange>creuse ta tombe.</Orange>
                </p>
                <p>
                  Une tombe pour ta concentration, ton business, tes relations, ton corps, ton avenir.
                  En gros… tu fais une croix sur ton potentiel, tes rêves… la seule chose que tu devrais
                  protéger comme la prunelle de tes yeux.
                </p>
              </Prose>
            </div>
          </section>

          {/* ===================== PARTIE 3 · REMUER LA PLAIE ===================== */}
          <section className="relative z-10 px-5 py-8 sm:px-6 md:py-10">
            <div className="mx-auto max-w-[820px]">
              <SectionTitle>
                <span className="text-[#F5F1E8]">Tu gâches ton </span>
                <Orange>potentiel.</Orange>
              </SectionTitle>

              <Prose>
                <p>
                  Tu te souviens quand t&apos;avais des rêves plein la tête ? Quand tu te disais que
                  t&apos;allais construire quelque chose de grand ? Que t&apos;allais faire mieux que
                  les autres, te battre, te transformer, réussir ?
                </p>
                <p>
                  Où sont passés ces rêves aujourd&apos;hui ? Ils sont écrasés sous les vidéos à la con
                  que tu regardes seul dans le noir.
                </p>
                <p>
                  Chaque fois que tu cèdes, tu <strong>renonces à une partie de ta puissance masculine.</strong>{" "}
                  Tu t&apos;anesthésies. Tu t&apos;endors. Et tu t&apos;éloignes encore un peu plus de ce que
                  tu pourrais devenir.
                </p>
              </Prose>

              <Aside
                src="/images/turnoff/dreams-crushed.png"
                alt="Homme écrasé sous ses rêves barrés devant un écran"
                brief=""
              />

              <Prose>
                <p>
                  T&apos;avais peut-être le potentiel pour construire un business à 8 chiffres. Pour avoir
                  un mental capable de courir 40 km sans t&apos;arrêter. Pour séduire cette fille
                  exceptionnelle. Pour avoir ce corps musclé, cette discipline de fer, cette vie
                  inspirante que tout le monde rêve d&apos;avoir.
                </p>
                <p>
                  Mais non. Toi, tu crames ton énergie pour du vide. Tu perds ton feu dans des pixels.
                  Tu changes <strong>des années de puissance contre 15 secondes de plaisir.</strong>
                </p>
                <p>
                  Et le plus fou… c&apos;est que <strong>tu le sais déjà.</strong> Tu sais que t&apos;es pas à
                  ton niveau. Tu sens que tu pourrais faire mieux. Tu sais que quelque chose t&apos;empêche
                  d&apos;avancer, de te libérer, de devenir plus fort.
                </p>
                <p>
                  Mais tu continues. Tu replonges. Encore et encore. Parce que ce truc <Orange>te contrôle.</Orange>
                </p>
              </Prose>

              <Prose>
                <p>
                  Le pire, c&apos;est que tu commences à croire que c&apos;est foutu. Que tu ne t&apos;en
                  sortiras jamais. Que c&apos;est « ta nature ». Que « t&apos;es comme ça ». Que « t&apos;y
                  peux rien ».
                </p>
                <p className="text-[1.125rem] font-semibold text-[#F5F1E8] md:text-[1.1875rem]">
                  Mais laisse-moi te dire un truc : ce n&apos;est pas toi le problème.{" "}
                  <Orange>C&apos;est l&apos;industrie.</Orange>
                </p>
                <p>
                  Et c&apos;est ce qu&apos;on va voir tout de suite… Car pendant que tu tues tes rêves à
                  petit feu, d&apos;autres encaissent des milliards.
                </p>
              </Prose>
            </div>
          </section>

          {/* ===================== PARTIE 4 · L'INDUSTRIE ===================== */}
          <section className="relative z-10 px-5 py-8 sm:px-6 md:pb-12 md:pt-12">
            <div className="mx-auto max-w-[820px]">
              <SectionTitle>
                <span className="text-[#F5F1E8]">C&apos;est </span>
                <Orange>l&apos;industrie.</Orange>
              </SectionTitle>

              <Prose>
                <p>
                  Et tu le sens, t&apos;es <strong>pris dans un piège</strong>. Pris dans{" "}
                  <strong>une machine parfaitement huilée</strong>… construite pour te voler ton attention,
                  ton énergie, ton temps, et ta vie.
                </p>
                <p>
                  Et cette machine, elle a un nom : <Orange>l&apos;industrie du p*rno.</Orange>
                </p>
                <p>
                  Tu pourrais croire que ce sont juste des gens qui « font des vidéos tout nu » dans leur
                  coin ? Tu te trompes.
                </p>
              </Prose>

              <StatCallout
                big="100 Md$"
                label="par an. C'est plus que Netflix, Amazon Prime et Spotify réunis · investis pour te garder accro."
                source="Source : Statista · Webroot · NetCredit"
                chartType="lineup"
                data={[
                  { name: "Netflix", value: 33, color: "#F5F1E8" },
                  { name: "Prime", value: 38, color: "#F5F1E8" },
                  { name: "Spotify", value: 17, color: "#F5F1E8" },
                  { name: "Porn", value: 100, color: "#FF9000" },
                ]}
              />

              <Prose>
                <p>
                  Chaque plateforme, chaque site, chaque réseau social travaille pour une seule chose :{" "}
                  <strong>te rendre accro.</strong> Et pour ça, chaque année, ils dépensent{" "}
                  <strong>des milliards</strong> pour te garder dans la boucle.
                </p>
                <p>
                  Des équipes entières de neuro-scientifiques, de data analysts et d&apos;ingénieurs payés{" "}
                  <strong>pour comprendre comment ton cerveau fonctionne.</strong> Comment il réagit à la
                  nouveauté, à la frustration, au plaisir instantané, à la surprise.{" "}
                  <Orange>POUR TE RENDRE ACCRO.</Orange>
                </p>
              </Prose>

              <Aside
                src="/images/turnoff/industry-octopus.png"
                alt="L'industrie du porno comme une pieuvre qui contrôle tout"
                brief=""
              />

              <Prose>
                <p>
                  Mais le pire, c&apos;est que ce n&apos;est pas tout. Ce système est{" "}
                  <strong>alimenté 24h/24, 7j/7</strong>… par les réseaux sociaux, la publicité,
                  l&apos;hyper-sexualisation, les OnlyFans et les MYM à tout va, les shorts, les stories.
                </p>
                <p>
                  Tu peux ne pas vouloir… mais <strong>à chaque scroll</strong>, c&apos;est une paire de
                  fesses ou un décolleté qui vient à toi.
                </p>
                <p>
                  Pourquoi ? Parce que les grands groupes le <strong>savent</strong> : tu es un HOMME. Et{" "}
                  <strong>ton cerveau primitif</strong> d&apos;homme fonctionne selon une logique simple :{" "}
                  <Orange>procréer = survivre.</Orange>
                </p>
                <p>
                  Oui… ton cerveau n&apos;a pas évolué depuis la préhistoire. Il ne fait pas la différence
                  entre une femme réelle… et une femme en vidéo. Donc il te pousse vers ce qui va garantir
                  ta descendance. Vers ce qui <strong>déclenche cette montée de dopamine</strong>. Cette pulsion.
                </p>
                <p>
                  Et cette faille dans ton cerveau, l&apos;industrie du p*rno l&apos;exploite tous les jours.
                  Et continuera de l&apos;exploiter tant que tu restes passif.
                </p>
                <p>
                  Tu vois, tu n&apos;es pas « juste quelqu&apos;un qui a du mal à contrôler ses pulsions ».
                  Tu es <strong>la cible</strong> d&apos;un système complexe, créé pour{" "}
                  <strong>empoisonner ton cerveau.</strong> Un système qui volera{" "}
                  <strong>ton potentiel pour générer plus de profits.</strong>
                </p>
                <p>
                  Alors si aujourd&apos;hui tu sens que t&apos;es plus distrait, moins motivé, moins viril…
                  c&apos;est <strong>normal</strong>. C&apos;est exactement ce qu&apos;ils veulent.
                </p>
                <p className="text-[1.125rem] font-semibold text-[#F5F1E8] md:text-[1.1875rem]">
                  Et si tu ne reprends pas le contrôle maintenant… tu risques de passer le reste de ta vie…{" "}
                  <Orange>à la SUBIR.</Orange>
                </p>
              </Prose>

              <CTAInline
                variant="dark"
                label="Découvrir Sevrage"
              />
            </div>
          </section>

          {/* Transition douce noir → blanc */}
          <div className="relative z-10 h-24 bg-gradient-to-b from-transparent to-[#F5F1E8]" />
        </div>

        {/* ===================================================================
            ZONE BLANCHE (la lumière, la libération) · Parties 5 à 10 + CTA
            =================================================================== */}
        <div className="relative bg-[#F5F1E8] text-[#0a0a0a]">

          {/* ===================== PARTIE 5 · LE RÊVE ULTIME ===================== */}
          <section className="relative z-10 px-5 pb-8 pt-8 sm:px-6 md:pb-24 md:pt-12">
            <div className="mx-auto max-w-[820px]">
              <SectionTitle>
                <span className="text-[#0a0a0a]">Tu peux inverser la tendance et </span>
                <Orange>te libérer.</Orange>
              </SectionTitle>

              <Prose variant="light">
                <p>
                  Maintenant, imagine un instant… imagine que t&apos;arrives à te libérer de ce poids.
                  Ce fardeau. Pas dans 3 mois. Mais maintenant.
                </p>
                <p>
                  Que tu te réveilles, <strong>le regard clair, les idées lucides, avec cette détermination
                  d&apos;accomplir ce rêve que t&apos;as en tête.</strong>
                </p>
                <p>
                  Tu n&apos;as plus cette sensation de honte quand tu te regardes dans la glace. Tu n&apos;as
                  plus besoin de cacher ton historique. Tu n&apos;as plus cette voix dans ta tête qui te dit
                  que « t&apos;es un raté ». Que « t&apos;es faible ». Que « t&apos;arriveras à rien dans la vie ».
                </p>
                <p>
                  Non. Tout ça, c&apos;est fini.
                </p>
              </Prose>

              <Aside
                src="/images/turnoff/free-man.png"
                alt="L'homme que tu étais censé devenir, libre, debout, flamme intérieure"
                variant="light"
                brief=""
              />

              <Prose variant="light">
                <p>
                  À la place… tu sens une puissance monter en toi. Tu sens ton énergie masculine{" "}
                  <strong>revenir</strong>. Tu sens que ton feu intérieur <strong>se rallume</strong>.
                </p>
                <p>
                  Et pour la première fois depuis longtemps… tu te sens <strong>libre</strong>. Libre de tes
                  pulsions. Tu bosses plus. Tu dors mieux. Tu parles avec confiance. Tu reprends ta place
                  dans ce monde.
                </p>
                <p>
                  Tu redeviens cet homme capable de dire non. Capable d&apos;endurer. De se concentrer
                  pendant des heures. De créer son business. Un homme capable d&apos;accomplir ce qu&apos;il
                  a au fond du cœur.
                </p>
                <p>
                  T&apos;as plus envie de repousser à demain. Non. T&apos;as juste envie{" "}
                  <strong>d&apos;être dans l&apos;action.</strong>
                </p>
                <p>
                  Tu récupères tout ce que t&apos;avais perdu : <strong>ta discipline, ton charisme, ta libido,
                  ta confiance, ta capacité d&apos;agir.</strong> Et chaque jour, tu redeviens un peu plus{" "}
                  <Orange>celui que t&apos;étais censé devenir.</Orange>
                </p>
                <p>
                  Parce qu&apos;au fond… tu ne veux pas passer ta vie à te cacher derrière des excuses.
                  Toi, ce que tu veux, c&apos;est <strong>briller</strong>. Tu veux <strong>impacter</strong>.{" "}
                  <strong>Construire</strong>. <strong>Inspirer</strong> les autres.
                </p>
                <p className="text-[1.125rem] font-semibold text-[#0a0a0a] md:text-[1.1875rem]">
                  Et maintenant que tu as vu ce que cette addiction te coûte… la vraie question, c&apos;est :{" "}
                  <Orange>qu&apos;est-ce que t&apos;attends pour reprendre le contrôle ?</Orange>
                </p>
              </Prose>

              <CTAInline
                variant="light"
                label="Découvrir Sevrage"
              />
            </div>
          </section>

          {/* ===================== PARTIE 6 · INTRO TURNOFF ===================== */}
          <section className="relative z-10 px-5 py-8 sm:px-6 md:py-10">
            <div className="mx-auto max-w-[820px]">
              <SectionTitle>
                <span className="text-[#0a0a0a]">Tu n&apos;as pas besoin d&apos;un </span>
                <Orange>30j No Fap de plus.</Orange>
              </SectionTitle>

              <Prose variant="light">
                <p>
                  Une vidéo de motivation de plus ? Non. Un énième challenge sur 30j pour arrêter de te
                  masturber ? Non plus.
                </p>
                <p>
                  Ce que t&apos;attends, c&apos;est que quelqu&apos;un te donne une <strong>vraie méthode
                  basée sur la science</strong> pour arrêter.
                </p>
                <p>
                  Parce que les discours qui te disent de « tenir bon » comme si la discipline allait tout
                  régler… honnêtement, ça va 2 secondes. Car à chaque fois, c&apos;est pareil : tu te forces
                  à résister. Tu ressens cette pulsion monter, ce besoin incontrôlable d&apos;aller sur
                  Pornhub ou OnlyFans… et tu rechutes. <strong>Au bout de 3 jours.</strong>
                </p>
                <p>
                  Pourquoi ? Parce que <strong>personne ne t&apos;a jamais appris à reprogrammer ton cerveau.</strong>{" "}
                  Personne ne t&apos;a expliqué <strong>comment fonctionne ton système nerveux.</strong> Comment
                  tes habitudes créent des autoroutes neuronales. Comment <strong>ton circuit de la récompense
                  a été empoisonné</strong>, et que tant que tu ne le réinitialiseras pas… tu retomberas{" "}
                  <strong>toujours</strong> dans le même schéma.
                </p>
              </Prose>

              <Aside
                src="/images/turnoff/brain-rewire.png"
                alt="Reprogrammer le circuit neuronal du cerveau"
                variant="light"
                brief=""
              />

              <Prose variant="light">
                <p>
                  Le problème, ce n&apos;est pas ta volonté ou que t&apos;es « faible ». C&apos;est{" "}
                  <strong>la méthode que tu utilises pour arrêter.</strong> C&apos;est comme essayer de courir
                  avec une cheville cassée… tu vas finir par tomber. Encore. Et encore.
                </p>
                <p className="text-[1.125rem] font-semibold text-[#0a0a0a] md:text-[1.1875rem]">
                  C&apos;est pour ça que j&apos;ai créé <Orange>Sevrage.</Orange>
                </p>
                <p>
                  Pas un nouveau « challenge » à 2 balles basé sur la volonté. Pas une « méthode » où tu
                  dois tenir comme un robot.
                </p>
                <p>
                  Mais une <strong>vraie méthode neuro-comportementale</strong>, basée sur{" "}
                  <strong>la biologie de ton cerveau d&apos;homme.</strong>
                </p>
                <p>
                  Une méthode pensée pour <strong>désactiver</strong> les circuits qui te rendent accro,{" "}
                  <strong>réinitialiser</strong> ton système de dopamine, et <strong>réactiver</strong> ton
                  potentiel d&apos;homme puissant, productif et inspirant.
                </p>
                <p>
                  Avec Sevrage : tu n&apos;apprends pas à résister, tu apprends à <strong>te libérer.</strong>{" "}
                  Tu n&apos;essaies pas de fuir la tentation, tu la <strong>neutralises</strong> une fois pour
                  de bon. Tu ne luttes pas contre toi-même, tu <strong>hackes littéralement ton cerveau</strong>{" "}
                  pour qu&apos;il devienne ton allié.
                </p>
              </Prose>

              <Timeline
                variant="light"
                steps={[
                  { day: "Jour 1", label: "Tu comprends ce qui te bloque vraiment." },
                  { day: "Jour 7", label: "Tes pensées sont plus claires, ton sommeil se répare." },
                  { day: "Jour 21", label: "Ton énergie masculine revient. Tes pulsions perdent leur pouvoir." },
                  { day: "Jour 60", label: "Tu es libre. Et tu n'as plus à te battre contre toi-même." },
                ]}
              />

              <Prose variant="light">
                <p>
                  Et tu verras que dès les premiers jours, tu sentiras que quelque chose change en toi : tes
                  pensées seront plus claires, ton énergie masculine reviendra, tu seras maître de toi et de
                  tes pulsions.
                </p>
                <p className="text-[1.125rem] font-semibold text-[#0a0a0a] md:text-[1.1875rem]">
                  C&apos;est ça Sevrage : <Orange>un antidote puissant qui va te guérir de l&apos;intérieur.</Orange>
                </p>
              </Prose>

              <CTAInline
                variant="light"
                label="Découvrir Sevrage"
              />
            </div>
          </section>

          {/* ===================== PARTIE 7 · POURQUOI MOI ===================== */}
          <section className="relative z-10 px-5 py-8 sm:px-6 md:py-10">
            <div className="mx-auto max-w-[820px]">
              <SectionTitle>
                <span className="text-[#0a0a0a]">Moi aussi je suis </span>
                <Orange>passé par là.</Orange>
              </SectionTitle>

              <Prose variant="light">
                <p>
                  Je te parle pas de tout ça pour rien. Car oui, tu me connais sûrement de mes vidéos
                  YouTube sur X, Y ou Z. Mais moi aussi je suis <strong>passé par là.</strong>
                </p>
                <p>
                  Moi aussi, j&apos;ai connu ces nuits sombres, ces rechutes, cette honte de perdre le
                  contrôle chaque soir face à mes pulsions. Moi aussi, je me suis vu <strong>scroller à 2h
                  du mat</strong>, à la recherche d&apos;une vidéo « un peu différente »… comme si c&apos;était
                  ça, <strong>la vie d&apos;un homme.</strong>
                </p>
                <p>
                  J&apos;étais là, à me dire : « j&apos;vais arrêter demain ». Mais demain ne venait jamais.
                </p>
                <p>
                  Jusqu&apos;au jour où j&apos;ai compris un truc fondamental :{" "}
                  <strong>ce n&apos;était pas moi qu&apos;il fallait changer… mais la méthode que j&apos;utilisais.</strong>
                </p>
              </Prose>

              <Aside
                src="/images/turnoff/louis-portrait.png"
                alt="Louis a tout reprogrammé, flamme intérieure"
                variant="light"
                brief=""
              />

              <Prose variant="light">
                <p>
                  Alors j&apos;ai désappris tout ce que je savais. Puis tout réappris. J&apos;ai étudié la
                  dopamine. Le striatum. La plasticité neuronale. Les comportements d&apos;addiction. Et
                  j&apos;ai compris <strong>comment reprogrammer le cerveau</strong> pour reprendre le contrôle
                  sur ces pulsions.
                </p>
                <p>
                  Et ce jour-là, <strong>tout a changé.</strong>
                </p>
                <p>
                  Aujourd&apos;hui, je ne me bats plus contre mon cerveau. J&apos;ai appris à le dompter et
                  à transformer ce flux d&apos;énergie sexuelle en testostérone qui construit, qui inspire
                  et qui change la vie des gens que j&apos;aime.
                </p>
                <p>
                  Aujourd&apos;hui je suis libre. Je suis à la tête de <strong>4 entreprises à 25 ans</strong>.
                  Je gagne <strong>plus de 100 000€/mois</strong> grâce à mon agence Balistique. Je suis en
                  couple avec <strong>une femme incroyable.</strong> Je me lève avec une énergie et une
                  productivité que je n&apos;avais jamais connues. Je profite de chaque moment présent
                  avec mes amis et ma famille.
                </p>
                <p>
                  Et je ne te dis pas ça pour me la raconter. Je te dis ça pour que tu comprennes une chose :{" "}
                  <Orange>si moi j&apos;ai pu le faire, toi aussi tu peux.</Orange>
                </p>
                <p>
                  Tu n&apos;as pas besoin d&apos;être un moine ou un surhomme. Tu as juste besoin de la{" "}
                  <strong>bonne méthode.</strong> Et cette méthode, elle existe. Elle s&apos;appelle{" "}
                  <Orange>Sevrage.</Orange>
                </p>
              </Prose>

            </div>
          </section>

          {/* ===================== PARTIE 8 · TURNOFF ===================== */}
          <section
            id="offre"
            className="relative z-10 scroll-mt-12 px-5 py-8 sm:px-6 md:py-10"
          >
            <div className="mx-auto max-w-[1000px]">
              <SectionTitle>
                <Orange>Sevrage</Orange>
                <span className="text-[#0a0a0a]">, c&apos;est quoi exactement.</span>
              </SectionTitle>

              {/* Timeline verticale ESCLAVE → SOUVERAIN */}
              <div className="mx-auto mt-10 max-w-[720px]">

                {/* Marqueur de départ */}
                <div className="mb-1 flex items-center gap-3">
                  <span className="flex h-3 w-3 flex-shrink-0 rounded-full bg-[#FF9000]" />
                  <span className="text-[0.6875rem] font-extrabold uppercase tracking-[0.22em] text-[#FF9000]">
                    Point de départ · Esclave
                  </span>
                </div>

                {/* Liste des modules avec ligne verticale */}
                <ol className="relative space-y-6 border-l-2 border-dashed border-[#FF9000]/35 py-3 pl-8 md:space-y-8 md:pl-10">
                  {MODULES.map((m, i) => (
                    <li key={m.num} className="relative">
                      {/* Pastille numérotée chevauchant la ligne */}
                      <span
                        className="absolute -left-[3.05rem] flex h-11 w-11 items-center justify-center rounded-full bg-[#FF9000] font-mono text-[0.9375rem] font-extrabold text-black md:-left-[3.5rem] md:h-12 md:w-12 md:text-[1rem]"
                        style={{ boxShadow: "0 8px 20px rgba(255,144,0,0.35)" }}
                      >
                        {m.num}
                      </span>

                      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                        {/* Doodle module · sharpie blanc sur fond noir, accent orange */}
                        <Image
                          src={`/images/turnoff/module-${m.num}.png`}
                          alt={`Doodle ${m.titre}`}
                          width={1280}
                          height={720}
                          className="block aspect-[16/9] w-full border-b border-black/10 object-cover"
                        />

                        <div className="px-6 py-5 md:px-7 md:py-6">
                          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-[#FF9000]">
                            Module {m.num}{i === MODULES.length - 1 ? " · Final" : ""}
                          </p>
                          <h4 className="mt-1 text-[1.125rem] font-extrabold leading-[1.25] tracking-tight text-[#0a0a0a] md:text-[1.375rem]">
                            {m.titre}
                          </h4>
                          <p className="mt-3 text-[0.9375rem] leading-[1.6] text-black/65 md:text-[1rem]">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Marqueur d'arrivée */}
                <div className="mt-1 flex items-center gap-3">
                  <span className="flex h-3 w-3 flex-shrink-0 rounded-full bg-[#0a0a0a]" />
                  <span className="text-[0.6875rem] font-extrabold uppercase tracking-[0.22em] text-[#0a0a0a]">
                    Arrivée · Souverain
                  </span>
                </div>

                {/* Stat encart 6 modules · transformation */}
                <div className="mt-8 mb-16 flex flex-col items-center justify-center gap-6 rounded-2xl border-2 border-[#FF9000]/30 bg-[#FF9000]/[0.06] px-6 py-6 text-center md:mb-20 md:flex-row md:gap-12 md:text-left">
                  <div>
                    <p className="font-mono text-[2.5rem] font-extrabold leading-none text-[#FF9000]">6</p>
                    <p className="mt-1 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-black/60">modules</p>
                  </div>
                  <div className="h-12 w-px bg-black/15 hidden md:block" />
                  <div className="max-w-[280px]">
                    <p className="text-[0.9375rem] font-bold leading-[1.35] text-[#0a0a0a] md:text-[1rem]">
                      Pour passer de <Orange>l&apos;esclave</Orange> au <Orange>souverain</Orange>
                    </p>
                  </div>
                </div>
              </div>

              <ValueStack
                finalPrice="47€"
                items={[
                  {
                    name: "Module 1 · Ce qui se passe vraiment dans ton cerveau",
                    sub: "Comprendre la mécanique pour arrêter de te battre contre toi-même dans le noir.",
                    value: "47€",
                  },
                  {
                    name: "Module 2 · Le vide et le bordel",
                    sub: "Identifier ce que le porno anesthésie + cartographier tes déclencheurs personnels.",
                    value: "47€",
                  },
                  {
                    name: "Module 3 · Le purge ritual",
                    sub: "Les 4 niveaux du purge · vider l'espace mental pour qu'une nouvelle identité puisse tenir.",
                    value: "47€",
                  },
                  {
                    name: "Module 4 · Couper le circuit",
                    sub: "Le protocole en 4 temps + le système de friction qui rend la rechute biologiquement difficile.",
                    value: "47€",
                  },
                  {
                    name: "Module 5 · Les 5 canaux de transmission",
                    sub: "Rediriger ton énergie sexuelle vers ce qui construit · au lieu de la résister.",
                    value: "47€",
                  },
                  {
                    name: "Module 6 · La migration d'identité",
                    sub: "Le levier le plus profond · devenir l'homme souverain qui n'a plus besoin de résister.",
                    value: "47€",
                  },
                  {
                    name: "Workbook & exercices guidés",
                    sub: "Tous les exercices concrets de la formation, prêts à imprimer.",
                    value: "37€",
                  },
                  {
                    name: "Schémas pédagogiques complets",
                    sub: "Plus de 20 schémas visuels qui rendent la neurobiologie limpide.",
                    value: "27€",
                  },
                  {
                    name: "Accès à vie + mises à jour gratuites",
                    sub: "La formation évolue, tu gardes l'accès à toutes les futures versions.",
                    value: "47€",
                  },
                ]}
              />
            </div>
          </section>

          {/* ===================== PARTIE 9 · GARANTIE ===================== */}
          <section className="relative z-10 px-5 py-8 sm:px-6 md:py-10">
            <div className="mx-auto max-w-[680px]">
              <div className="rounded-3xl border-2 border-[#FF9000]/40 bg-[#FF9000]/[0.05] p-8 text-center md:p-10">
                <div className="mb-4 flex justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#FF9000] bg-[#FF9000]/15">
                    <ShieldCheck size={26} weight="fill" className="text-[#FF9000]" />
                  </span>
                </div>
                <p className="text-[0.6875rem] font-extrabold uppercase tracking-[0.22em] text-[#FF9000]">
                  Garantie 14 jours
                </p>
                <h3 className="mt-2 text-[clamp(1.5rem,4vw,2rem)] font-extrabold leading-[1.15] tracking-tight text-[#0a0a0a]">
                  Satisfait <Orange>ou remboursé.</Orange>
                </h3>
                <p className="mx-auto mt-4 max-w-[520px] text-[0.9375rem] leading-[1.65] text-black/70 md:text-[1rem]">
                  Si dans les <strong className="text-[#0a0a0a]">14 jours</strong> suivant ton achat tu
                  estimes que Sevrage ne te correspond pas, tu m&apos;envoies un mail · je te rembourse
                  intégralement. Sans question. Sans justification. Sans drame.
                </p>
                <p className="mt-4 text-[0.8125rem] font-bold text-black/55">
                  Le risque est de mon côté · pas du tien.
                </p>
              </div>

              <CTAInline
                variant="light"
                label="Découvrir Sevrage"
              />
            </div>
          </section>

          {/* ===================== PARTIE 10 · FAQ ===================== */}
          <section className="relative z-10 px-5 py-8 sm:px-6 md:py-10">
            <div className="mx-auto max-w-[760px]">
              <SectionTitle>
                <span className="text-[#0a0a0a]">Tout ce que tu te demandes </span>
                <Orange>avant de te lancer.</Orange>
              </SectionTitle>

              <div className="mt-8 space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-black/10 bg-black/[0.02] p-5 [&[open]>summary>span:last-child]:rotate-45"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                      <span className="text-[0.9375rem] font-bold tracking-tight text-[#0a0a0a] md:text-[1.0625rem]">
                        {item.q}
                      </span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#FF9000]/50 bg-[#FF9000]/10 text-[#FF9000] transition-transform">
                        <ArrowRight size={14} weight="bold" className="rotate-45" />
                      </span>
                    </summary>
                    <p className="mt-3 text-[0.875rem] leading-[1.65] text-black/65 md:text-[0.9375rem]">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ===================== CTA FINAL ===================== */}
          <section className="relative z-10 px-5 pb-10 pt-8 sm:px-6 md:pb-12">
            <div className="mx-auto max-w-[680px]">
              <div
                className="relative overflow-hidden rounded-3xl border-2 border-[#FF9000]/40 bg-[#F5F1E8] px-6 py-12 text-center md:px-10 md:py-8"
                style={{
                  boxShadow:
                    "0 0 60px rgba(255, 144, 0, 0.18), 0 25px 60px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div
                  className="absolute left-1/2 top-0 h-[3px] w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF9000] to-transparent"
                  aria-hidden
                />
                <h2 className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#0a0a0a]">
                  Reprends le contrôle <Orange>aujourd&apos;hui.</Orange>
                </h2>
                <p className="mx-auto mt-4 max-w-[480px] text-[0.9375rem] leading-[1.6] text-black/65 md:text-[1rem]">
                  49€ · paiement unique. Accès immédiat à Sevrage et aux bonus offerts.
                </p>

                <div className="mt-7 flex justify-center">
                  <CTAButton>Je rejoins Sevrage · 49€</CTAButton>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.8125rem] text-black/55">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck size={14} weight="duotone" className="text-[#FF9000]" />
                    Paiement sécurisé
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle size={14} weight="fill" className="text-[#FF9000]" />
                    Accès immédiat
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SevrageSocialNotif />
      <FunnelFooter />
    </div>
  );
}
