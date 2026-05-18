import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, EnvelopeSimple, UsersThree } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import MetaPixelEvent from "@/components/analytics/MetaPixelEvent";

export const metadata: Metadata = {
  title: "Bienvenue dans Cash Cow Express — Agencilab",
  description: "Ton inscription à Cash Cow Express est confirmée.",
  robots: { index: false, follow: false },
};

const ETAPES = [
  {
    icon: EnvelopeSimple,
    titre: "Tu reçois ton email de bienvenue",
    desc: "Toutes les infos pour démarrer arrivent dans ta boîte mail. Pense à vérifier tes spams.",
  },
  {
    icon: UsersThree,
    titre: "Tu rejoins la communauté",
    desc: "Ton accès à l'espace membre et à la communauté Agencilab s'ouvre dans la foulée.",
  },
];

export default function MerciCashCowExpressPage() {
  return (
    <>
      <main className="relative flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        <section className="relative z-10 pb-16 pt-8 md:pt-12">
          <div className="mx-auto max-w-[680px] px-5 sm:px-6">
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

            <div className="mb-6 flex justify-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border border-[#a3e635]/40 bg-[#a3e635]/15 text-[#a3e635] sm:h-20 sm:w-20"
                style={{ boxShadow: "0 0 40px rgba(163, 230, 53, 0.3)" }}
              >
                <CheckCircle size={40} weight="fill" />
              </div>
            </div>

            <h1 className="text-center text-[clamp(1.85rem,4.5vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-white">
              Bienvenue dans{" "}
              <span className="gradient-text">Cash Cow Express !</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[520px] text-center text-[1rem] leading-[1.6] text-white/70 md:text-[1.0625rem]">
              Voici ce qui se passe maintenant.
            </p>

            <div className="mt-10 space-y-3.5">
              {ETAPES.map((e, i) => {
                const Icon = e.icon;
                return (
                  <div
                    key={e.titre}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-400/30 bg-accent-400/10 text-accent-400">
                      <Icon size={22} weight="duotone" />
                    </span>
                    <div>
                      <p className="mb-1 text-[1rem] font-bold tracking-tight text-white md:text-[1.0625rem]">
                        <span className="text-gold-400">{i + 1}.</span>{" "}
                        {e.titre}
                      </p>
                      <p className="text-[0.875rem] leading-[1.55] text-white/60 md:text-[0.9375rem]">
                        {e.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-center text-[0.9375rem] text-white/55">
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
      {/* Conversion : event Purchase déclenché à l'arrivée post-paiement */}
      <MetaPixelEvent event="Purchase" />
    </>
  );
}
