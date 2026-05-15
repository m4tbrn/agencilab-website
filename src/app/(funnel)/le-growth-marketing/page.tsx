import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import VidalyticsEmbed from "@/components/funnel/VidalyticsEmbed";
import {
  ArrowRightIcon,
  BookIcon,
  CheckIcon,
  ClockIcon,
} from "./_lib/components";
import {
  normalizeCloser,
  formatRdvDate,
  normalizePrenom,
  buildBrochureQuery,
} from "./_lib/searchparams";

// VSL_ID Vidalytics de la vidéo intro brochure.
// Remplace cette valeur par l'ID Vidalytics une fois la vidéo uploadée.
// Script de tournage : voir Obsidian → Setting VSL → Brochure quizfunnel - Intro video script.md
const INTRO_VSL_ID = "";

export const metadata: Metadata = {
  title: "Le Growth Marketing — Brochure Agencilab",
  description:
    "Tout ce qu'il faut savoir sur le Growth Marketing avant ton appel avec l'équipe Agencilab.",
  robots: { index: false, follow: true },
};

export default async function LeGrowthMarketing({
  searchParams,
}: {
  searchParams: Promise<{
    closer?: string | string[];
    rdv?: string | string[];
    prenom?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const closer = normalizeCloser(params.closer);
  const closerLabel = closer ?? "ton conseiller";
  const rdvLabel = formatRdvDate(params.rdv) ?? "le jour J";
  const rdvRaw = Array.isArray(params.rdv) ? params.rdv[0] : params.rdv;
  const prenom = normalizePrenom(params.prenom);
  const greetingPrenom = prenom ?? "toi";
  const closerQuery = buildBrochureQuery({
    closer,
    rdvRaw,
    prenom,
  });

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
                Document privé · Brochure officielle Agencilab
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

          {/* Kicker prénom — perso très visible, taille augmentée */}
          {prenom && (
            <p className="mb-4 text-center text-[clamp(1rem,2.4vw,1.375rem)] font-extrabold uppercase tracking-[0.18em] text-gold-400">
              Pour {prenom}
            </p>
          )}

          {/* H1 */}
          <h1 className="mb-6 text-center text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight">
            Le{" "}
            <span className="gradient-text">Growth Marketing</span>
            <br className="hidden md:block" />
            <span className="text-white/85"> en 12 minutes.</span>
          </h1>

          {/* Sub */}
          <p className="mx-auto mb-10 max-w-[680px] text-center text-[1rem] leading-[1.6] text-white/75 md:text-[1.125rem]">
            {prenom && (
              <>
                <strong className="text-white">{prenom}</strong>,{" "}
              </>
            )}
            tout ce que tu dois savoir sur cette activité avant ton appel
            avec <strong className="text-white">{closerLabel}</strong>.
            Parcours les 9 chapitres jusqu'au bout pour qu'on puisse aller
            à l'essentiel {rdvLabel}.
          </p>

          {/* Vidéo intro — Louis présente + témoignages élèves qui défilent */}
          <div className="mx-auto mb-10 max-w-[760px]">
            {INTRO_VSL_ID ? (
              <div
                className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60"
                style={{ boxShadow: "0 0 50px rgba(1, 95, 255, 0.18)" }}
              >
                <VidalyticsEmbed vslId={INTRO_VSL_ID} />
              </div>
            ) : (
              <div
                className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.03] backdrop-blur-sm"
                style={{ boxShadow: "0 0 40px rgba(1, 95, 255, 0.12)" }}
              >
                <div className="text-center px-6">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-0.5 text-gold-400"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <p className="mb-1 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gold-400">
                    Vidéo intro à intégrer
                  </p>
                  <p className="text-[0.875rem] text-white/65 md:text-[0.9375rem]">
                    Renseigne <code className="rounded bg-white/10 px-1.5 py-0.5 text-[0.8125rem] text-white/85">INTRO_VSL_ID</code> en haut de{" "}
                    <code className="rounded bg-white/10 px-1.5 py-0.5 text-[0.8125rem] text-white/85">page.tsx</code>
                  </p>
                  <p className="mt-2 text-[0.75rem] text-white/40">
                    Script de tournage : Obsidian → Setting VSL → Brochure quizfunnel - Intro video script
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Meta info row */}
          <div className="mx-auto mb-10 flex max-w-[520px] flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.8125rem] text-white/55 md:text-[0.875rem]">
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon /> 12 min
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />
            <span className="inline-flex items-center gap-1.5">
              <BookIcon /> 9 chapitres
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />
            <span className="inline-flex items-center gap-1.5">
              <CheckIcon /> Édition 2026
            </span>
          </div>

          {/* Avertissement engagement — l'appel est conditionnel à la lecture complète */}
          <div
            className="mx-auto mb-10 max-w-[680px] rounded-2xl border-2 border-red-500/40 bg-red-500/[0.06] p-5 md:p-6"
            style={{ boxShadow: "0 0 30px rgba(239, 68, 68, 0.12)" }}
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div className="shrink-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-red-500/50 bg-red-500/15">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-400"
                    aria-hidden
                  >
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-1.5 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-red-400">
                  Important · à savoir avant de commencer
                </p>
                <p className="text-[0.9375rem] leading-[1.55] text-white md:text-[1rem]">
                  {prenom && (
                    <>
                      <strong className="text-white">{prenom}</strong>, t
                    </>
                  )}
                  {!prenom && "T"}on appel avec{" "}
                  <strong className="text-white">{closerLabel}</strong>{" "}
                  <strong className="text-red-300">
                    n&apos;aura pas lieu
                  </strong>{" "}
                  si tu ne fais pas la brochure jusqu&apos;au bout. C&apos;est
                  un <strong className="text-white">appel de candidature ultra personnalisé</strong>,
                  donc c&apos;est la condition pour qu&apos;on arrive préparés,
                  qu&apos;on comprenne qui tu es, et qu&apos;on s&apos;assure
                  que tu as bien compris Agencilab et le Growth Marketing.
                </p>
              </div>
            </div>
          </div>

          {/* CTA principale "Commencer" */}
          <div className="flex justify-center">
            <Link
              href={`/le-growth-marketing/etape/1${closerQuery}`}
              className="group inline-flex items-center gap-3 rounded-2xl border-2 border-gold-400 bg-gold-400 px-6 py-4 text-[0.9375rem] font-bold text-navy-950 transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,122,0,0.5)] md:px-8 md:py-5 md:text-[1.0625rem]"
              style={{ boxShadow: "0 0 30px rgba(255, 122, 0, 0.35)" }}
            >
              <span>Commencer la brochure</span>
              <span className="text-navy-950">
                <ArrowRightIcon className="text-navy-950 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
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
