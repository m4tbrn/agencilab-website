import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";

/**
 * Section garantie contractuelle — bloc majeur de retournement de risque.
 * Visible uniquement sur les pages warm (newsletter / bienvenue) pour pousser
 * le visiteur à passer à l'action sans peur.
 */
export default function GuaranteeSection() {
  return (
    <section className="mt-14 md:mt-20">
      <div
        className="relative mx-auto max-w-[860px] overflow-hidden rounded-3xl border-2 border-accent-400/40 bg-gradient-to-br from-accent-400/[0.08] via-accent-400/[0.04] to-transparent px-6 py-10 backdrop-blur-sm md:px-12 md:py-14"
        style={{ boxShadow: "0 0 60px rgba(1, 95, 255, 0.2)" }}
      >
        {/* Glow décoratif en arrière-plan */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent-400/20 blur-[80px]" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-accent-400/15 blur-[80px]" />

        <div className="relative">
          {/* Pre-headline */}
          <div className="mb-5 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-400/10 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-accent-400 md:text-[0.8125rem]"
              style={{ boxShadow: "0 0 20px rgba(1, 95, 255, 0.2)" }}
            >
              Engagement contractuel
            </span>
          </div>

          {/* Big icon shield */}
          <div className="mb-6 flex justify-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-accent-400/40 bg-accent-400/10 md:h-24 md:w-24"
              style={{ boxShadow: "0 0 40px rgba(1, 95, 255, 0.3)" }}
            >
              <ShieldCheck
                size={44}
                weight="fill"
                className="text-accent-400 md:hidden"
              />
              <ShieldCheck
                size={52}
                weight="fill"
                className="hidden text-accent-400 md:block"
              />
            </div>
          </div>

          {/* Headline */}
          <h2 className="mx-auto mb-5 max-w-[680px] text-center text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white">
            Garantie contractuelle{" "}
            <span className="gradient-text">rédigée par avocat</span>
          </h2>

          {/* Body — copy strong */}
          <p className="mx-auto mb-6 max-w-[680px] text-center text-[1rem] leading-[1.55] text-white/85 md:text-[1.0625rem]">
            Si tu suis la méthode et que tu n&apos;atteins pas tes premiers
            résultats,{" "}
            <strong className="text-white">on te trouve ton premier client</strong>.
          </p>

          {/* Punch line */}
          <p
            className="mx-auto max-w-[520px] rounded-2xl border border-accent-400/30 bg-navy-950/60 px-5 py-4 text-center text-[1rem] font-extrabold tracking-tight text-white md:text-[1.125rem]"
            style={{ boxShadow: "0 0 24px rgba(1, 95, 255, 0.15)" }}
          >
            Soit{" "}
            <span className="gradient-text">tu gagnes</span>, soit{" "}
            <span className="gradient-text">tu gagnes</span>.
          </p>

          {/* Footer — différenciation France */}
          <div
            className="mx-auto mt-6 flex max-w-[520px] items-center justify-center gap-3 rounded-2xl border border-accent-400/20 bg-accent-400/[0.05] px-5 py-3 text-center"
          >
            <span className="text-[1.125rem] md:text-[1.25rem]">🇫🇷</span>
            <p className="text-[0.8125rem] font-semibold text-white/85 md:text-[0.875rem]">
              Le{" "}
              <span className="text-accent-400">seul accompagnement en France</span>{" "}
              à proposer cette garantie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
