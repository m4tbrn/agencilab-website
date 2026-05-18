import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import VidalyticsEmbed from "./VidalyticsEmbed";
import VslRevealGate from "./VslRevealGate";
import FunnelFooter from "./FunnelFooter";
import LiveViewers from "./LiveViewers";
import ExitIntentPopupVSL from "./ExitIntentPopupVSL";
import OffreReveSection from "./OffreReveSection";
import BrasDroitSchema from "./BrasDroitSchema";
import OffreAgencilabSection from "./OffreAgencilabSection";
// import VideoTestimonials from "./VideoTestimonials"; // masqué — en attente des vidéos
import WarmTrustSection from "./WarmTrustSection";
import ValueStack from "./ValueStack";
import OffreRoiSection from "./OffreRoiSection";
import OffreTrustpilot from "./OffreTrustpilot";
import OffreOto from "./OffreOto";
import OtoButton from "./OtoButton";
import OffreSocialNotif from "./OffreSocialNotif";
import FaqBnAccordion from "./FaqBnAccordion";
import MetaPixelEvent from "@/components/analytics/MetaPixelEvent";

const FAQ_OFFRE = [
  {
    question: "Je n'y connais rien en marketing, c'est un problème ?",
    answer:
      "Non, c'est même la situation de la plupart de nos élèves. Yohann était gendarme, Florent boulanger : aucun n'avait touché au marketing avant. On te forme étape par étape, et Alic.ia, notre IA, fait le travail technique avec toi.",
  },
  {
    question: "Combien de temps ça me prend par semaine ?",
    answer:
      "Quelques heures par semaine suffisent pour démarrer, le soir ou le week-end. Cash Cow Express est conçu pour se lancer en parallèle de ton emploi, sans le quitter.",
  },
  {
    question: "Au bout de combien de temps je peux avoir mes premiers résultats ?",
    answer:
      "La majorité des élèves signent leur premier client en moins de 90 jours. Ça dépend de ton implication, mais tu n'es jamais seul : un coach valide chacune de tes actions.",
  },
  {
    question: "Et si je ne trouve pas de client ?",
    answer:
      "Tu apprends à prospecter, et en plus Agencilab te redistribue des entreprises qui cherchent déjà un prestataire. Le plus dur, le premier client, on l'a réglé pour toi.",
  },
  {
    question: "Je peux le faire en gardant mon travail ?",
    answer:
      "Oui, c'est le but. Tu construis ton activité à côté, à ton rythme, et tu décides plus tard si tu veux en faire ton activité principale.",
  },
];

const META_AVATARS = [
  { src: "/images/visages/marina.jpg", name: "Marina" },
  { src: "/images/visages/damien.jpg", name: "Damien" },
  { src: "/images/visages/stephanie.jpg", name: "Stéphanie" },
  { src: "/images/visages/yohann.jpg", name: "Yohann" },
  { src: "/images/visages/solene.jpg", name: "Solène" },
  { src: "/images/visages/clement.jpg", name: "Clément" },
  { src: "/images/visages/julien.jpg", name: "Julien" },
];

/**
 * Page VSL Meta orientée vente directe.
 * Variante d'ExplicationContent : au lieu de révéler un calendrier iClosed,
 * elle révèle la page de vente Growth Marketing + un checkout embarqué.
 */
export default function OffreContent({
  vslId,
  revealAfterSeconds = 21 * 60,
}: {
  vslId: string;
  /** Délai (en secondes de VSL regardée) avant reveal de l'offre. */
  revealAfterSeconds?: number;
}) {
  return (
    <>
      {/* Bandeau top — social proof avatars (identique au funnel Meta) */}
      <div className="border-b border-gold-400/20 bg-gold-400/10">
        <div className="mx-auto max-w-[1280px] px-4 py-3 sm:px-6">
          <div className="mb-2 flex justify-center">
            <div className="flex -space-x-3 md:-space-x-2">
              {META_AVATARS.map((face) => (
                <div
                  key={face.name}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-gold-400/30 bg-navy-950 md:h-8 md:w-8"
                >
                  <Image
                    src={face.src}
                    alt={face.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-center text-[0.8125rem] leading-[1.5] text-white/85 md:text-[0.875rem]">
            <strong className="text-white">
              Boulangers, infirmières, paysagistes, mamans, papas...
            </strong>{" "}
            <strong className="text-gold-400">+1 018 personnes</strong> ont
            changé de vie grâce à cette activité.{" "}
            <strong className="text-white">
              Pourtant ils n&apos;y connaissaient rien au début.
            </strong>
          </p>
        </div>
      </div>

      <main className="relative flex-1 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        <section className="relative z-10 pb-12 pt-6 md:pb-20 md:pt-8">
          <div className="mx-auto max-w-[1100px] px-6">
            {/* Headline Meta — doit rester identique à la page opt-in (scent match) */}
            <h1 className="mx-auto mb-5 max-w-[860px] text-center text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-white">
              Comment ajouter{" "}
              <span className="gradient-text">+2 987€/mois</span> à ton salaire
              grâce au{" "}
              <span className="gradient-text">Growth Marketing</span>
              {" "}(depuis n&apos;importe où dans le monde 😎)
            </h1>

            <p className="mx-auto mb-6 max-w-2xl text-center text-[1rem] leading-[1.5] text-white/70 md:text-[1.0625rem]">
              Ce que c&apos;est, à quoi ressemblent tes journées, ce que ça
              rapporte, si c&apos;est fait pour toi.
            </p>

            <LiveViewers />

            {/* VSL avec cadre orange animé */}
            <div className="animate-gold-gradient mx-auto max-w-[900px] rounded-2xl p-[2px] shadow-[0_8px_40px_rgba(255,122,0,0.25)] sm:rounded-3xl">
              <div className="overflow-hidden rounded-[14px] bg-navy-950 sm:rounded-[22px]">
                <VidalyticsEmbed vslId={vslId} />
              </div>
            </div>

            {/* Reveal : page de vente Growth Marketing + checkout */}
            <VslRevealGate vslId={vslId} revealAfterSeconds={revealAfterSeconds}>
              {/* 1. Vendre le rêve (la transformation pour l'ICP) */}
              <OffreReveSection />
              {/* 1b. Schéma : le modèle économique (bras droit marketing) */}
              <BrasDroitSchema />
              {/* 2. Vendre Agencilab et l'accompagnement + fondateur */}
              <OffreAgencilabSection />
              {/* 3. Trust : témoignages écrits + chiffres */}
              {/* VideoTestimonials masqué — en attente des vidéos YouTube */}
              {/* <VideoTestimonials /> */}
              <WarmTrustSection />

              {/* 4. Value stacking — récapitulatif de l'offre */}
              <ValueStack />

              {/* 5. ROI — l'investissement le plus rentable */}
              <OffreRoiSection />

              {/* 6. FAQ — gestion des objections */}
              <div className="mt-14 md:mt-20">
                <div className="mx-auto mb-8 max-w-[760px] text-center md:mb-10">
                  <span className="mb-3 inline-block text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent-400 md:text-[0.8125rem]">
                    Questions fréquentes
                  </span>
                  <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white">
                    Tout ce que tu te demandes{" "}
                    <span className="gradient-text">avant de te lancer</span>
                  </h2>
                </div>
                <div className="mx-auto max-w-[760px]">
                  <FaqBnAccordion faqs={FAQ_OFFRE} />
                </div>
              </div>

              {/* 8. Avis Trustpilot — les 42 avis vérifiés */}
              <OffreTrustpilot />

              {/* 9. Dernier CTA */}
              <div className="mt-14 text-center md:mt-20">
                <h2 className="mx-auto max-w-[640px] text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.18] tracking-tight text-white">
                  Prêt à ajouter{" "}
                  <span className="gradient-text">+2 987€</span>{" "}
                  à ton salaire&nbsp;?
                </h2>
                <p className="mx-auto mt-3 max-w-[520px] text-[0.9375rem] leading-[1.6] text-white/65 md:text-[1rem]">
                  Rejoins Cash Cow Express aujourd&apos;hui et lance ton
                  activité de Growth Marketer. Sans engagement.
                </p>
                <OtoButton className="cta-button glow-gold mt-6 inline-flex items-center gap-3 rounded-xl bg-gold-400 px-9 py-4 text-[1rem] font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30">
                  Je rejoins Cash Cow Express
                  <ArrowRight size={18} weight="bold" />
                </OtoButton>
                <p className="mt-4 text-[0.8125rem] text-white/45">
                  179€/mois · Sans engagement · Accès immédiat
                </p>
              </div>

              {/* Popup One Time Offer — déclenchée par les CTA d'achat */}
              <OffreOto />
            </VslRevealGate>
          </div>
        </section>
      </main>

      <FunnelFooter />
      <ExitIntentPopupVSL />
      <OffreSocialNotif />
      <MetaPixelEvent event="Lead" />
    </>
  );
}
