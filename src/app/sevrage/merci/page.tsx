import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle,
  EnvelopeSimple,
  CalendarBlank,
} from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import MetaPixelEvent from "@/components/analytics/MetaPixelEvent";

export const metadata: Metadata = {
  title: "Bienvenue dans Sevrage · Agencilab",
  description:
    "Ton inscription à Sevrage est confirmée. La formation est disponible le 24 mai.",
  robots: { index: false, follow: false },
};

const ETAPES = [
  {
    icon: EnvelopeSimple,
    titre: "Tu reçois ton email de confirmation",
    desc: "Toutes les infos de ton achat arrivent dans ta boîte mail. Pense à vérifier tes spams.",
  },
  {
    icon: CalendarBlank,
    titre: "Le 24 mai, accès à la formation",
    desc: "Tu reçois un nouveau mail le 24 mai avec ton accès à l'espace membre et aux 6 modules.",
  },
];

export default function MerciSevragePage() {
  return (
    <div className="bg-black text-[#F5F1E8]">
      <main className="relative flex-1 overflow-hidden">
        {/* Ambiance · orbes orange diffuses */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#FF9000]/15 blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#FF9000]/10 blur-[120px]" />
        </div>

        <section className="relative z-10 pb-20 pt-10 md:pt-14">
          <div className="mx-auto max-w-[680px] px-5 sm:px-6">
            {/* Logo Sevrage */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/sevrage/logo-white.png"
                alt="Sevrage"
                width={520}
                height={300}
                priority
                className="h-[72px] w-auto md:h-[88px]"
              />
            </div>

            {/* Icône succès */}
            <div className="mb-6 flex justify-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#FF9000]/50 bg-[#FF9000]/15 text-[#FF9000] sm:h-20 sm:w-20"
                style={{ boxShadow: "0 0 40px rgba(255, 144, 0, 0.35)" }}
              >
                <CheckCircle size={40} weight="fill" />
              </div>
            </div>

            <h1 className="text-center text-[clamp(1.85rem,4.5vw,2.75rem)] font-extrabold leading-[1.12] tracking-tight text-[#F5F1E8]">
              Bienvenue dans{" "}
              <span className="text-[#FF9000]">Sevrage.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[520px] text-center text-[1rem] leading-[1.6] text-[#F5F1E8]/70 md:text-[1.0625rem]">
              Ton achat est confirmé. Voici ce qui se passe maintenant.
            </p>

            <div className="mt-10 space-y-3.5">
              {ETAPES.map((e, i) => {
                const Icon = e.icon;
                return (
                  <div
                    key={e.titre}
                    className="flex items-start gap-4 rounded-2xl border border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.03] p-5 md:p-6"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF9000]/30 bg-[#FF9000]/10 text-[#FF9000]">
                      <Icon size={22} weight="duotone" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-[1rem] font-bold tracking-tight text-[#F5F1E8] md:text-[1.0625rem]">
                        <span className="text-[#FF9000]">{i + 1}.</span>{" "}
                        {e.titre}
                      </p>
                      <p className="text-[0.875rem] leading-[1.55] text-[#F5F1E8]/65 md:text-[0.9375rem]">
                        {e.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mx-auto mt-10 max-w-[480px] text-center text-[0.875rem] leading-[1.6] text-[#F5F1E8]/55">
              Une question ? Réponds simplement à l&apos;email de
              confirmation ou écris à{" "}
              <a
                href="mailto:contact@agencilab.com"
                className="font-bold text-[#FF9000] underline decoration-[#FF9000]/40 underline-offset-2 hover:decoration-[#FF9000]"
              >
                contact@agencilab.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <FunnelFooter />

      {/* Tracking Meta Pixel · conversion achat Sevrage */}
      <MetaPixelEvent event="Purchase" />
    </div>
  );
}
