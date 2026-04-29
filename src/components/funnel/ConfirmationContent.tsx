import Image from "next/image";
import {
  ArrowRight,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "./FunnelFooter";
import VidalyticsEmbed from "./VidalyticsEmbed";
import MetaPixelEvent from "@/components/analytics/MetaPixelEvent";

export default function ConfirmationContent({
  vslId,
  source = "yt",
}: {
  vslId?: string;
  /** Source de trafic — fire les events Meta Pixel uniquement si "meta" */
  source?: "yt" | "meta";
}) {
  return (
    <>
      <main className="relative flex-1 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        {/* HEADER LOGO */}
        <header className="relative z-10 flex justify-center pb-0 pt-8 md:pt-10">
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
        <section className="relative z-10 pb-0 pt-6">
          <div className="mx-auto max-w-[860px] px-6 text-center">
            {/* Badge en cours de validation */}
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-2 shadow-[0_0_30px_rgba(255,122,0,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-gold-400 md:text-[0.8125rem]">
                En cours de validation
                <span className="animate-pulse-dot text-gold-400" style={{ animationDelay: "0ms" }}>.</span>
                <span className="animate-pulse-dot text-gold-400" style={{ animationDelay: "200ms" }}>.</span>
                <span className="animate-pulse-dot text-gold-400" style={{ animationDelay: "400ms" }}>.</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-10 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-white">
              Félicitations, nous sommes en train d&apos;analyser ta
              candidature à{" "}
              <span className="gradient-text">Agencilab</span>
              <span className="animate-pulse-dot text-white" style={{ animationDelay: "0ms" }}>.</span>
              <span className="animate-pulse-dot text-white" style={{ animationDelay: "200ms" }}>.</span>
              <span className="animate-pulse-dot text-white" style={{ animationDelay: "400ms" }}>.</span>
            </h1>

            <div className="mx-auto max-w-[720px] space-y-5 text-left md:max-w-none">
              {/* WhatsApp / SMS */}
              <div className="flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-4 md:justify-center md:px-6 md:py-4">
                <WhatsappLogo
                  size={28}
                  weight="fill"
                  className="shrink-0 text-[#25D366]"
                />
                <p className="text-[0.875rem] leading-[1.5] text-white/80 md:whitespace-nowrap md:text-[0.9375rem]">
                  Pour valider ton rendez-vous, un conseiller va te contacter d&apos;ici peu via{" "}
                  <strong className="text-white">WhatsApp ou SMS</strong>.
                </p>
              </div>

              {/* Important */}
              <div className="relative rounded-2xl border-2 border-[#ef4444]/50 bg-[#ef4444]/10 p-5 shadow-[0_4px_16px_rgba(239,68,68,0.1)] md:p-6">
                <div className="mb-3 flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ef4444] text-[0.875rem] font-bold text-white">
                    !
                  </span>
                  <p className="text-[0.9375rem] leading-[1.55] text-white/90 md:text-[1rem]">
                    <strong className="text-[#ef4444]">Important :</strong>
                    {" "}Ton rendez-vous sera annulé en cas d&apos;absence{" "}
                    <em>sans prévenir</em>
                    {" "}et tu n&apos;auras plus la possibilité de rejoindre Agencilab.
                  </p>
                </div>
                <div className="pl-11">
                  <p className="text-[0.9375rem] leading-[1.55] text-white/60 md:text-[1rem]">
                    <strong className="text-white">Pourquoi ?</strong>
                    {" "}Ton temps est précieux et celui de mes équipes aussi.
                    Il est important d&apos;honorer le rendez-vous ou de prévenir si tu préfères le décaler.
                  </p>
                </div>
              </div>
            </div>

            {/* H2 — étapes */}
            <h2 className="mt-12 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white md:mt-14">
              En attendant ton rendez-vous, suis ces{" "}
              <span className="gradient-text">3 étapes</span> :
            </h2>
          </div>
        </section>

        {/* LES 3 ÉTAPES */}
        <section className="relative z-10 py-12 md:py-16">
          <div className="mx-auto max-w-[900px] space-y-4 px-6 md:space-y-5">
            {/* ÉTAPE 01 — Vidéo */}
            <div className="glass-card rounded-2xl p-5 md:p-8">
              <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400 md:text-[0.8125rem]">
                Étape 1
              </p>
              <h2 className="mb-2 text-[1.5rem] font-bold leading-[1.2] text-white md:text-[1.875rem]">
                Regarde cette vidéo
              </h2>
              <p className="mb-6 leading-[1.6] text-white/60">
                Elle répond aux questions les plus fréquentes avant
                d&apos;arriver en appel.
              </p>
              <div className="-mx-5 md:mx-0">
                {vslId ? (
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950 md:border">
                    <VidalyticsEmbed vslId={vslId} />
                  </div>
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-navy-900/50 text-[0.875rem] text-white/40 md:border">
                    [VSL Vidalytics à fournir]
                  </div>
                )}
              </div>
            </div>

            {/* ÉTAPE 02 — Notez la date */}
            <div className="glass-card rounded-2xl p-5 md:p-8">
              <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400 md:text-[0.8125rem]">
                Étape 2
              </p>
              <h3 className="mb-3 text-[1.5rem] font-bold leading-[1.2] text-white md:text-[1.875rem]">
                Note la date du rendez-vous et clique sur{" "}
                <span className="text-gold-400">«&nbsp;Oui&nbsp;»</span>
              </h3>
              <p className="leading-[1.6] text-white/60">
                Tu as reçu toutes les informations par email. Il te suffit de cliquer sur{" "}
                <strong className="text-white">«&nbsp;Oui&nbsp;»</strong>{" "}
                en bas du mail pour confirmer ta présence.
              </p>
            </div>

            {/* ÉTAPE 03 — Visite le site */}
            <div className="glass-card rounded-2xl p-5 md:p-8">
              <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400 md:text-[0.8125rem]">
                Étape 3
              </p>
              <h3 className="mb-3 text-[1.5rem] font-bold leading-[1.2] text-white md:text-[1.875rem]">
                Visite notre site internet
              </h3>
              <p className="mb-6 leading-[1.6] text-white/60">
                Pour avoir toutes les informations sur l&apos;accompagnement.
              </p>
              <a
                href="https://www.agencilab.com"
                className="cta-button glow-gold mb-8 inline-flex items-center gap-3 rounded-xl bg-gold-400 px-10 py-4 text-base font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30"
              >
                Visiter agencilab.com
                <ArrowRight size={18} weight="bold" />
              </a>
              <p className="text-[0.9375rem] text-white/60">
                Une question ? Écris-nous à{" "}
                <a
                  href="mailto:contact@agencilab.com"
                  className="font-semibold text-white underline underline-offset-2 hover:text-gold-400 transition-colors"
                >
                  contact@agencilab.com
                </a>
              </p>
              <p className="mt-2 text-[0.8125rem] text-white/40">
                Nous répondrons le plus vite possible sauf le week-end.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter />
      {source === "meta" && <MetaPixelEvent event="CompleteRegistration" />}
    </>
  );
}
