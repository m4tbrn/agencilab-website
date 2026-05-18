import Image from "next/image";
import FunnelFooter from "./FunnelFooter";
import TallyEmbed from "./TallyEmbed";
import { PROGRAMMES, INTEGRATIONS, type ProgrammeKey } from "./programmes";

/**
 * Page d'onboarding : le client remplit le formulaire qui débloque ses accès
 * et permet à l'équipe de préparer son accompagnement.
 */
export default function OnboardingContent({
  programme,
}: {
  programme: ProgrammeKey;
}) {
  const p = PROGRAMMES[programme];
  const { onboardingTallySrc } = INTEGRATIONS[programme];

  return (
    <>
      <main className="relative flex-1 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        {/* HEADER LOGO */}
        <header className="relative z-10 flex justify-center pt-8 md:pt-10">
          <Image
            src="/images/logo-white.png"
            alt="Agencilab"
            width={140}
            height={36}
            className="h-7 w-auto opacity-80"
            priority
          />
        </header>

        {/* HERO */}
        <section className="relative z-10 pt-8 md:pt-10">
          <div className="mx-auto max-w-[820px] px-5 text-center sm:px-6">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-4 py-2">
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-accent-400 md:text-[0.8125rem]">
                Bienvenue {p.dans}
              </span>
            </div>

            <h1 className="text-[clamp(1.85rem,4.5vw,2.85rem)] font-bold leading-[1.12] tracking-tight text-white">
              Tu viens de prendre une décision que peu osent prendre :{" "}
              <span className="gradient-text">investir en toi-même.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[640px] text-[1rem] leading-[1.6] text-white/70 md:text-[1.0625rem]">
              C&apos;est le début de ton accompagnement {p.dans}. Avant de te
              donner tes accès, on a besoin de mieux te connaître.
            </p>
          </div>
        </section>

        {/* FORMULAIRE */}
        <section className="relative z-10 py-12 md:py-16">
          <div className="mx-auto max-w-[760px] px-5 sm:px-6">
            <div className="glass-card rounded-2xl p-5 md:p-8">
              <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400">
                Étape unique
              </p>
              <h2 className="mb-2 text-[1.5rem] font-bold leading-[1.2] text-white md:text-[1.875rem]">
                Remplis le formulaire ci-dessous
              </h2>
              <p className="mb-6 text-[0.9375rem] leading-[1.6] text-white/60 md:text-[1rem]">
                Il nous permet de préparer ton accompagnement et de te donner
                tes accès. Prends quelques minutes pour répondre avec soin :
                plus on te connaît, mieux on t&apos;accompagne.
              </p>

              {onboardingTallySrc.includes("PLACEHOLDER") ? (
                <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-white/15 bg-navy-900/50 px-6 text-center text-[0.875rem] text-white/40">
                  [Formulaire Tally d&apos;onboarding {p.nom} à brancher]
                </div>
              ) : (
                <TallyEmbed
                  tallySrc={onboardingTallySrc}
                  title={`Onboarding ${p.nom} Agencilab`}
                  initialHeight={520}
                />
              )}
            </div>

            <p className="mt-8 text-center text-[0.9375rem] leading-[1.6] text-white/55">
              Une fois le formulaire envoyé, tu recevras tes accès par email.
              Une question ?{" "}
              <a
                href="mailto:contact@agencilab.com"
                className="font-semibold text-white underline underline-offset-2 transition-colors hover:text-gold-400"
              >
                contact@agencilab.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
}
