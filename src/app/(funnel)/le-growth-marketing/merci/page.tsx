import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merci — Tes réponses ont bien été envoyées",
  description: "Confirmation de réception du quiz pré-appel Agencilab.",
  robots: { index: false, follow: false },
};

const KNOWN_CLOSERS = ["Tino", "Matis"] as const;
type Closer = (typeof KNOWN_CLOSERS)[number];

function normalizeCloser(value?: string | string[]): Closer | null {
  if (!value) return null;
  const raw = Array.isArray(value) ? value[0] : value;
  const found = KNOWN_CLOSERS.find(
    (c) => c.toLowerCase() === raw.trim().toLowerCase(),
  );
  return found ?? null;
}

export default async function MerciPage({
  searchParams,
}: {
  searchParams: Promise<{ closer?: string | string[] }>;
}) {
  const params = await searchParams;
  const closer = normalizeCloser(params.closer);
  const closerLabel = closer ?? "ton closer";

  return (
    <main className="relative flex min-h-screen items-center bg-navy-950 px-6 py-16 text-white">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent-400/12 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gold-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[640px] text-center">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/logo-white.png"
            alt="Agencilab"
            width={160}
            height={42}
            className="h-8 w-auto opacity-90"
            priority
          />
        </div>

        {/* Check icon animé */}
        <div className="mb-8 flex justify-center">
          <div
            className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#a3e635]/50 bg-[#a3e635]/10"
            style={{ boxShadow: "0 0 50px rgba(163, 230, 53, 0.25)" }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#a3e635]"
              aria-hidden
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#a3e635]/20" />
          </div>
        </div>

        {/* H1 */}
        <h1 className="mb-5 text-[clamp(1.875rem,4.5vw,2.875rem)] font-extrabold leading-[1.1] tracking-tight">
          Tes réponses ont bien été envoyées
          <br className="hidden md:block" />
          <span className="text-white/85"> à </span>
          <span className="gradient-text">{closerLabel}</span>
          {!closer && <span className="text-white/85">.</span>}
        </h1>

        {/* Sub */}
        <p className="mx-auto mb-10 max-w-[520px] text-[1rem] leading-[1.6] text-white/75 md:text-[1.0625rem]">
          {closer ? (
            <>
              <strong className="text-white">{closer}</strong> va lire tes
              réponses avant ton appel pour pouvoir aller direct à
              l'essentiel.
            </>
          ) : (
            <>
              L'équipe Agencilab va lire tes réponses avant ton appel pour
              pouvoir aller direct à l'essentiel.
            </>
          )}{" "}
          Pense bien à être à l'heure et dans un endroit calme le jour J.
        </p>

        {/* What's next card */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-sm md:p-8">
          <p className="mb-5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-gold-400">
            La suite
          </p>
          <ol className="space-y-4">
            <NextStep
              num="1"
              title="Tu reçois un rappel par mail et SMS"
              desc="48h avant l'appel, puis 1h avant. Si tu ne reçois rien, vérifie tes spams ou contacte directement le closer."
            />
            <NextStep
              num="2"
              title="Le jour J, sois dans un endroit calme"
              desc="L'appel dure 45 minutes. Prévois ton ordinateur ou téléphone chargé, et un casque si possible."
            />
            <NextStep
              num="3"
              title="Prépare 2-3 questions concrètes"
              desc="Tout ce que tu veux savoir sur l'accompagnement, le pricing, la garantie, le rythme. Plus tu poses de questions, mieux on peut te répondre."
            />
          </ol>
        </div>

        {/* Reassurance footer */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.875rem] text-white/65">
          <span className="inline-flex items-center gap-1.5">
            <CheckIcon /> 45 min
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />
          <span className="inline-flex items-center gap-1.5">
            <CheckIcon /> 100% gratuit
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />
          <span className="inline-flex items-center gap-1.5">
            <CheckIcon /> Sérieux uniquement
          </span>
        </div>

        {/* CTA secondaire — relire la brochure */}
        <Link
          href={`/le-growth-marketing${closer ? `?closer=${closer}` : ""}`}
          className="group inline-flex items-center gap-2 text-[0.9375rem] text-white/55 underline-offset-4 transition hover:text-white hover:underline"
        >
          <BookIcon />
          Relire la brochure si besoin
          <ArrowRightIcon />
        </Link>

        {/* Footer mention */}
        <p className="mt-12 text-[0.75rem] text-white/30">
          Agencilab — ESQ. AGENCY (SAS) — Document confidentiel
        </p>
      </div>
    </main>
  );
}

/* ============================================================ */

function NextStep({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10 text-[0.8125rem] font-bold text-gold-400">
          {num}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-[0.9375rem] font-bold text-white md:text-[1rem]">
          {title}
        </p>
        <p className="text-[0.875rem] leading-[1.55] text-white/65">{desc}</p>
      </div>
    </li>
  );
}

function CheckIcon() {
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
      className="text-[#a3e635]"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      width="15"
      height="15"
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

function ArrowRightIcon() {
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
      className="text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-gold-400"
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
