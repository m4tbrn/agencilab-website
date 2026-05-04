import Image from "next/image";
import VidalyticsEmbed from "./VidalyticsEmbed";
import IClosedReveal from "./IClosedReveal";
import FunnelFooter from "./FunnelFooter";
import LiveViewers from "./LiveViewers";
import ExitIntentPopupVSL from "./ExitIntentPopupVSL";
import MechanismSection from "./MechanismSection";
import WarmTrustSection from "./WarmTrustSection";
import GuaranteeSection from "./GuaranteeSection";
import MetaPixelEvent from "@/components/analytics/MetaPixelEvent";

type Source = "yt" | "meta" | "newsletter" | "bienvenue";

export default function ExplicationContent({
  vslId,
  iClosedUrl,
  iClosedTitle,
  source = "yt",
}: {
  vslId: string;
  iClosedUrl: string;
  iClosedTitle: string;
  /**
   * Source de trafic — pilote :
   * - "meta" : H1 spécifique + sub-headline curiosité + Pixel Lead
   * - "newsletter" / "bienvenue" : bandeau Louis warm (au lieu d'alerte)
   */
  source?: Source;
}) {
  return (
    <>
      {/* Bandeau top — pour newsletter/bienvenue : warning + photo + preuve.
          Pour yt/meta : simple alerte texte. */}
      {source === "newsletter" || source === "bienvenue" ? (
        <div className="border-b border-gold-400/20 bg-gold-400/10">
          <div className="mx-auto max-w-[1100px] px-6 py-4">
            <p className="mx-auto max-w-3xl text-center text-[0.8125rem] leading-[1.45] text-white/85 md:text-[0.875rem]">
              <span className="mr-1">⚠️</span>
              Il est possible que tu aies déjà commencé à regarder cette
              vidéo. Je te conseille de la regarder{" "}
              <strong className="text-white">attentivement jusqu&apos;à la fin</strong>.{" "}
              <strong className="text-gold-400">
                Des centaines de Français
              </strong>{" "}
              ont changé de vie en découvrant cette activité.
            </p>
          </div>
        </div>
      ) : (
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
      )}

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

            {/* Headline — DOIT rester identique à celle de la page opt-in du même funnel (scent match) */}
            <h1 className="mx-auto mb-5 max-w-[860px] text-center text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-white">
              {source === "newsletter" || source === "bienvenue" ? (
                <>
                  Quelle est cette{" "}
                  <span className="gradient-text">activité méconnue</span>{" "}
                  qui rapporte déjà{" "}
                  <span className="gradient-text">+2 937€ en moyenne</span>{" "}
                  à{" "}
                  <span className="gradient-text">+1 018 Français</span>{" "}
                  sans quitter leur emploi&nbsp;?
                </>
              ) : source === "meta" ? (
                <>
                  Comment des Français comme toi se créent{" "}
                  <span className="gradient-text">2&apos;987€ en moyenne de revenus complémentaires</span>{" "}
                  grâce à cette{" "}
                  <span className="gradient-text">activité méconnue et l&apos;IA</span>{" "}?
                </>
              ) : (
                <>
                  Comment gagner{" "}
                  <span className="gradient-text">+3 500 €/mois</span>{" "}
                  à côté de ton travail grâce à une{" "}
                  <span className="gradient-text">activité (très) rentable méconnue et l&apos;IA</span>.
                </>
              )}
            </h1>

            {/* Sub-headline Meta — promesse de contenu de la vidéo */}
            {source === "meta" && (
              <p className="mx-auto mb-6 max-w-2xl text-center text-[1rem] leading-[1.5] text-white/70 md:text-[1.0625rem]">
                Ce que c&apos;est, à quoi ressemblent tes journées, ce que ça
                rapporte, si c&apos;est fait pour toi.
              </p>
            )}

            <LiveViewers />

            {/* VSL avec cadre orange animé */}
            <div className="animate-gold-gradient mx-auto max-w-[900px] rounded-2xl p-[2px] shadow-[0_8px_40px_rgba(255,122,0,0.25)] sm:rounded-3xl">
              <div className="overflow-hidden rounded-[14px] bg-navy-950 sm:rounded-[22px]">
                <VidalyticsEmbed vslId={vslId} />
              </div>
            </div>

            {/* Sections warm — explique le mécanisme + preuves avant l'iClosed.
                Le timer 18 min est désactivé pour ces sources : la qualification
                se fait par le scroll à travers ces sections. */}
            {(source === "newsletter" || source === "bienvenue") && (
              <>
                <MechanismSection />
                <WarmTrustSection />
                <GuaranteeSection />
              </>
            )}

            <IClosedReveal
              url={iClosedUrl}
              title={iClosedTitle}
              vslId={vslId}
              revealAfterSeconds={18 * 60}
              revealImmediately={
                source === "newsletter" || source === "bienvenue"
              }
              giftMessage={
                source === "newsletter" || source === "bienvenue"
                  ? "réservé à ceux qui réservent leur appel. Mon équipe t'enverra le détail au moment de l'échange."
                  : undefined
              }
            />
          </div>
        </section>
      </main>

      <FunnelFooter />
      <ExitIntentPopupVSL />
      {source === "meta" && <MetaPixelEvent event="Lead" />}
    </>
  );
}
