import type { Metadata } from "next";
import Image from "next/image";
import FunnelFooter from "@/components/funnel/FunnelFooter";

export const metadata: Metadata = {
  title: "Appel découverte avec Pierre — Agencilab",
  description:
    "Premier échange de 15 minutes avec Pierre pour faire connaissance et voir si Agencilab peut t'aider.",
  robots: { index: false, follow: false },
};

const ICLOSED_URL =
  "https://app.iclosed.io/e/fit-mass-formation/decouverte-agencilab";
const ICLOSED_TITLE = "Appel avec Pierre d'Agencilab (15min)";

export default function DecouvertePierre() {
  return (
    <>
      <main className="relative flex-1 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        {/* Grid lines */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
          <div className="absolute left-[50%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
          <div className="absolute left-[80%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        </div>

        <section className="relative z-10 py-10 md:py-16">
          <div className="mx-auto max-w-[1200px] px-6">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/logo-white.png"
                alt="Agencilab"
                width={140}
                height={36}
                className="h-7 w-auto opacity-80"
                priority
              />
            </div>

            {/* Hero */}
            <div className="text-center">
              {/* Photo Pierre */}
              <div className="mx-auto mb-5 flex justify-center">
                <div className="relative">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-accent-400/30 shadow-[0_0_40px_rgba(1,95,255,0.25)] sm:h-32 sm:w-32">
                    <Image
                      src="/images/team/pierre-helias.png"
                      alt="Pierre — Équipe Agencilab"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Indicateur en ligne */}
                  <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-navy-950 bg-[#10b981] sm:h-6 sm:w-6">
                    <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                </div>
              </div>

              <p className="mb-1 text-[0.8125rem] font-medium tracking-tight text-white/50">
                Pierre · Équipe d&apos;Agencilab
              </p>

              <div
                className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-5 py-2 text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-accent-400"
                style={{ boxShadow: "0 0 30px rgba(1, 95, 255, 0.15)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
                </span>
                Appel découverte · 15 min
              </div>

              <h1 className="mb-4 text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-white">
                Réserve ton appel avec{" "}
                <span className="gradient-text">Pierre</span>
              </h1>

              <p className="mx-auto mb-3 max-w-xl text-[1rem] leading-[1.5] text-white/70 md:text-[1.0625rem]">
                C&apos;est un premier échange pour faire connaissance et voir
                si Agencilab peut réellement t&apos;aider.
              </p>
            </div>

{/* iClosed widget */}
            <div className="mt-10">
              <h2 className="mb-5 text-center text-[1.125rem] font-bold tracking-tight text-white md:text-[1.25rem]">
                👇🏼 Choisis ton créneau
              </h2>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60">
                <iframe
                  src={ICLOSED_URL}
                  title={ICLOSED_TITLE}
                  scrolling="no"
                  loading="eager"
                  className="block h-[1100px] w-full border-0 md:h-[720px]"
                  allow="camera; microphone"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
}
