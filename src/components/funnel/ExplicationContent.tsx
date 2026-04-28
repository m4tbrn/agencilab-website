import Image from "next/image";
import { X } from "@phosphor-icons/react/dist/ssr";
import VidalyticsEmbed from "./VidalyticsEmbed";
import IClosedReveal from "./IClosedReveal";
import FunnelFooter from "./FunnelFooter";
import LiveViewers from "./LiveViewers";

export default function ExplicationContent({
  vslId,
  iClosedUrl,
  iClosedTitle,
}: {
  vslId: string;
  iClosedUrl: string;
  iClosedTitle: string;
}) {
  return (
    <>
      {/* Bandeau message Louis */}
      <div className="border-b border-gold-400/20 bg-gold-400/10">
        <div className="mx-auto max-w-[1100px] px-6 py-3">
          <p className="text-center text-[0.875rem] font-semibold text-gold-400">
            ⚠️ Message de Louis :{" "}
            <em className="font-medium not-italic text-white/80">
              «&nbsp;Ne ferme pas cette page, j&apos;ai une annonce inédite à te faire.&nbsp;»
            </em>
          </p>
        </div>
      </div>

      <main className="relative flex-1 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        <section className="relative z-10 pt-6 pb-12 md:pt-8 md:pb-20">
          <div className="mx-auto max-w-[1100px] px-6">
            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/logo-white.png"
                alt="Agencilab"
                width={140}
                height={36}
                className="h-7 w-auto opacity-80"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="mx-auto mb-5 max-w-[860px] text-center text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-white">
              Comment gagner{" "}
              <span className="gradient-text">+3 500 €/mois</span>{" "}
              à côté de ton travail grâce à une{" "}
              <span className="gradient-text">activité (très) rentable méconnue et l&apos;IA</span>.
            </h1>

            {/* Anti-bullets */}
            <ul className="mb-6 flex flex-col items-center gap-x-5 gap-y-1.5 text-[0.9375rem] text-white/60 sm:flex-row sm:flex-wrap sm:justify-center">
              {[
                "Sans école à 50 000 €",
                "Sans quitter ton emploi",
                "Sans diplôme",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-2 whitespace-nowrap">
                  <X size={16} weight="bold" className="shrink-0 text-[#ef4444]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <LiveViewers />

            {/* VSL avec cadre orange animé */}
            <div className="animate-gold-gradient mx-auto max-w-[900px] rounded-2xl p-[2px] shadow-[0_8px_40px_rgba(255,122,0,0.25)] sm:rounded-3xl">
              <div className="overflow-hidden rounded-[14px] bg-navy-950 sm:rounded-[22px]">
                <VidalyticsEmbed vslId={vslId} />
              </div>
            </div>

            <IClosedReveal url={iClosedUrl} title={iClosedTitle} />
          </div>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
}
