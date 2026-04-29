import type { Metadata } from "next";
import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "@/components/funnel/FunnelFooter";

export const metadata: Metadata = {
  title: "Envoie un message à Pierre — Agencilab",
  description:
    "Pas le temps de regarder la vidéo ? Envoie un message direct à Pierre sur WhatsApp, il te répond sous 24h.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Envoie un message à Pierre — Agencilab",
    description:
      "Pas le temps de regarder la vidéo ? Envoie un message direct à Pierre sur WhatsApp, il te répond sous 24h.",
    type: "website",
    locale: "fr_FR",
    siteName: "Agencilab",
    url: "https://agencilab.com/message-pierre",
    images: [
      {
        url: "/images/team/pierre-helias.png",
        width: 1282,
        height: 1282,
        alt: "Pierre — Équipe Agencilab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Envoie un message à Pierre — Agencilab",
    description:
      "Pas le temps de regarder la vidéo ? Envoie un message direct à Pierre sur WhatsApp, il te répond sous 24h.",
    images: ["/images/team/pierre-helias.png"],
  },
};

const WHATSAPP_PIERRE = "https://wa.me/33777786388";

export default function MessagePierre() {
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
          <div className="mx-auto max-w-[760px] px-6">
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
                className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-2 text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[#25D366]"
                style={{ boxShadow: "0 0 30px rgba(37, 211, 102, 0.15)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
                </span>
                Échange par message · WhatsApp
              </div>

              <h1 className="mb-4 text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-white">
                Pas le temps de regarder la vidéo ?
                <br />
                <span className="gradient-text">Envoie un message à Pierre</span>
              </h1>

              <p className="mx-auto mb-3 max-w-2xl text-[0.9375rem] leading-[1.55] text-white/80 md:text-[1rem]">
                Pierre te répond directement sur WhatsApp pour comprendre ta
                situation et voir si Agencilab peut t&apos;aider à te créer un
                deuxième salaire en parallèle de ton emploi.
              </p>
            </div>

            {/* Étapes */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-10">
              <h2 className="mb-6 text-center text-[1rem] font-bold uppercase tracking-[0.12em] text-white/60">
                Comment ça marche
              </h2>

              <ol className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-[1rem] font-bold text-accent-400">
                    1
                  </span>
                  <div className="flex-1 pt-1">
                    <p className="text-[0.9375rem] leading-[1.5] text-white md:text-[1rem]">
                      <strong className="font-semibold">
                        Clique sur le bouton ci-dessous
                      </strong>{" "}
                      pour ouvrir une conversation WhatsApp avec Pierre.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-[1rem] font-bold text-accent-400">
                    2
                  </span>
                  <div className="flex-1 pt-1">
                    <p className="text-[0.9375rem] leading-[1.5] text-white md:text-[1rem]">
                      <strong className="font-semibold">Présente-toi</strong>{" "}
                      rapidement&nbsp;: prénom, âge, et explique ta situation
                      actuelle (ton job, ce que tu cherches, où tu en es).
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#10b981]/15 text-[1rem] font-bold text-[#10b981]">
                    ✓
                  </span>
                  <div className="flex-1 pt-1">
                    <p className="text-[0.9375rem] leading-[1.5] text-white md:text-[1rem]">
                      <strong className="font-semibold">
                        Pierre te répond sous 24h
                      </strong>{" "}
                      avec un retour personnalisé.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* CTA WhatsApp */}
            <div className="mt-8 flex flex-col items-center">
              <a
                href={WHATSAPP_PIERRE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-[1rem] font-bold tracking-tight text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all hover:bg-[#1fb858] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] md:text-[1.0625rem]"
              >
                <WhatsappLogo size={22} weight="fill" className="shrink-0" />
                Envoyer un message à Pierre
              </a>
              <p className="mt-3 text-[0.8125rem] text-white/50">
                Réponse sous 24h · 100% gratuit
              </p>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
}
