import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CHAPTERS } from "./_lib/chapters";
import {
  ArrowRightIcon,
  BookIcon,
  CheckIcon,
  ClockIcon,
} from "./_lib/components";

export const metadata: Metadata = {
  title: "Le Growth Marketing — Brochure Agencilab",
  description:
    "Tout ce qu'il faut savoir sur le Growth Marketing avant ton appel avec l'équipe Agencilab.",
  robots: { index: false, follow: true },
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

export default async function LeGrowthMarketing({
  searchParams,
}: {
  searchParams: Promise<{ closer?: string | string[] }>;
}) {
  const params = await searchParams;
  const closer = normalizeCloser(params.closer);
  const closerLabel = closer ?? "ton closer";
  const closerQuery = closer ? `?closer=${closer}` : "";

  return (
    <main className="relative min-h-screen bg-navy-950 text-white">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/15 blur-[140px]" />
        <div className="absolute right-0 top-[40vh] h-[500px] w-[500px] rounded-full bg-accent-400/10 blur-[120px]" />
        <div className="absolute bottom-[10vh] left-0 h-[500px] w-[500px] rounded-full bg-gold-400/10 blur-[120px]" />
      </div>

      <section className="relative z-10 px-6 pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-[960px]">
          {/* Pastille */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-gold-400">
                Brochure officielle Agencilab
              </span>
            </div>
          </div>

          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <Image
              src="/images/logo-white.png"
              alt="Agencilab"
              width={180}
              height={48}
              className="h-9 w-auto opacity-90"
              priority
            />
          </div>

          {/* H1 */}
          <h1 className="mb-6 text-center text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight">
            Le{" "}
            <span className="gradient-text">Growth Marketing</span>
            <br className="hidden md:block" />
            <span className="text-white/85"> en 8 minutes de lecture.</span>
          </h1>

          {/* Sub */}
          <p className="mx-auto mb-10 max-w-[680px] text-center text-[1rem] leading-[1.6] text-white/75 md:text-[1.125rem]">
            Tout ce que tu dois savoir sur cette activité avant ton appel avec{" "}
            <strong className="text-white">{closerLabel}</strong>. Lis les 7
            chapitres puis remplis le quiz à la fin pour qu'on puisse aller à
            l'essentiel le jour J.
          </p>

          {/* Meta info row */}
          <div className="mx-auto mb-10 flex max-w-[520px] flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.8125rem] text-white/55 md:text-[0.875rem]">
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon /> 8 min de lecture
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />
            <span className="inline-flex items-center gap-1.5">
              <BookIcon /> 8 chapitres
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />
            <span className="inline-flex items-center gap-1.5">
              <CheckIcon /> Édition 2026
            </span>
          </div>

          {/* CTA principale "Commencer" */}
          <div className="mb-14 flex justify-center">
            <Link
              href={`/le-growth-marketing/etape/1${closerQuery}`}
              className="group inline-flex items-center gap-3 rounded-2xl border-2 border-gold-400 bg-gold-400 px-6 py-4 text-[0.9375rem] font-bold text-navy-950 transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,122,0,0.5)] md:px-8 md:py-5 md:text-[1.0625rem]"
              style={{ boxShadow: "0 0 30px rgba(255, 122, 0, 0.35)" }}
            >
              <span>Commencer la lecture</span>
              <span className="text-navy-950">
                <ArrowRightIcon className="text-navy-950 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* TOC card */}
          <div className="mx-auto max-w-[680px] rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
            <p className="mb-5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-white/50">
              Sommaire
            </p>
            <nav>
              <ol className="space-y-2">
                {CHAPTERS.map((chapter, idx) => (
                  <li key={chapter.slug}>
                    <Link
                      href={`/le-growth-marketing/etape/${idx + 1}${closerQuery}`}
                      className="group flex items-baseline gap-4 rounded-lg py-2 transition-colors hover:bg-white/[0.04]"
                    >
                      <span className="w-8 shrink-0 text-[0.8125rem] font-bold text-gold-400">
                        {chapter.num}
                      </span>
                      <span className="flex-1 text-[0.9375rem] text-white/85 transition-colors group-hover:text-white md:text-[1rem]">
                        {chapter.title}
                      </span>
                      <ArrowRightIcon />
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          {/* Note finale */}
          <p className="mx-auto mt-10 max-w-[520px] text-center text-[0.875rem] leading-[1.55] text-white/45">
            Tu peux lire dans l'ordre ou cliquer sur un chapitre. Le quiz du
            chapitre 08 prend 2 minutes et permet à {closerLabel} de mieux te
            connaître avant le call.
          </p>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-10 text-center">
        <p className="text-[0.8125rem] text-white/40">
          Brochure Agencilab — Édition 2026 — Document confidentiel destiné aux
          personnes ayant réservé un appel
        </p>
      </footer>
    </main>
  );
}
