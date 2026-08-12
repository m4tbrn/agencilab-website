import type { Metadata } from "next";
import { existsSync } from "fs";
import { join } from "path";
import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import OffreReveSection from "@/components/funnel/OffreReveSection";
import BrasDroitSchema from "@/components/funnel/BrasDroitSchema";
import OffreAgencilabSection from "@/components/funnel/OffreAgencilabSection";
import WarmTrustSection from "@/components/funnel/WarmTrustSection";
import OffreRoiSection from "@/components/funnel/OffreRoiSection";
import OffreTrustpilot from "@/components/funnel/OffreTrustpilot";
import FaqBnAccordion from "@/components/funnel/FaqBnAccordion";
import VentesNotif from "../nouveau-chapitre/_lib/VentesNotif";
import CountdownBar from "../nouveau-chapitre/_lib/CountdownBar";
import BuyButton from "../nouveau-chapitre/_lib/BuyButton";
import OffrePopup from "../nouveau-chapitre/_lib/OffrePopup";
import TempsRestant from "../nouveau-chapitre/_lib/TempsRestant";
import { PRIX_NORMAL, PRIX_PROMO } from "../nouveau-chapitre/_lib/config";

/**
 * Page dédiée à la réouverture de 24h, réservée aux 500 abonnés les plus
 * engagés de la newsletter. Elle double /nouveau-chapitre volontairement au
 * lieu de la remplacer : la page d'origine reste intacte pour ceux qui l'ont
 * déjà en favori, et celle-ci porte l'angle de la sélection annoncé dans les
 * emails du Jour 9. Tout le reste (offre, prix, garantie, composants) est
 * strictement identique, y compris les Payment Links Stripe.
 *
 * À supprimer après la fermeture, en même temps que la promotion.
 */

export const metadata: Metadata = {
  title: "Tu es dans les 500 | Agencilab à -72%",
  description:
    "Sur 40 000 inscrits, vous êtes environ 500 à me lire à chaque fois. Cette page ferme ce soir à minuit.",
  robots: { index: false, follow: false },
};

const FAQ_LANCEMENT = [
  {
    question: "Je n'y connais rien en marketing, c'est un problème ?",
    answer:
      "Non, c'est même la situation de la plupart de nos élèves. Yohann était gendarme, Florent boulanger : aucun n'avait touché au marketing avant. On te forme étape par étape, et Alic.ia, notre IA, fait le travail technique avec toi.",
  },
  {
    question: "Combien de temps ça me prend par semaine ?",
    answer:
      "Quelques heures par semaine suffisent pour démarrer, le soir ou le week-end. Agencilab est conçu pour se lancer en parallèle de ton emploi, sans le quitter.",
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
  {
    question: "Pourquoi -72%, et pourquoi seulement pour 500 personnes ?",
    answer:
      "Parce que je veux frapper beaucoup plus fort. 1 018 personnes sont passées par Agencilab depuis le début, et mon objectif est de doubler ce chiffre. La seule chose qui m'en empêche, c'est le prix : des gens sérieux, qui feraient le travail, n'ont pas 3 600€ disponibles sur un compte. Alors je retire l'obstacle pendant 24 heures, et je le fais pour ceux qui me lisent vraiment. Après ce soir, le prix repasse au tarif normal.",
  },
  {
    question: "Je peux payer en plusieurs fois ?",
    answer:
      "Oui, tu peux régler en 5 fois (5 x 239€). Tu choisis l'option au moment du paiement, et ton accès est le même dans les deux cas.",
  },
  {
    question: "Et si ça ne marche pas pour moi ?",
    answer:
      "Tu es couvert par la garantie : si tu suis la méthode et que tu n'atteins pas les résultats, on te donne un client. Le risque est de notre côté.",
  },
  {
    question: "J'ai accès pendant combien de temps ?",
    answer:
      "Tu as un accès à vie aux contenus et à la communauté. Tu avances à ton rythme, tu reviens quand tu veux, et tu profites de toutes les mises à jour.",
  },
  {
    question: "Je peux le faire plus tard, quand ce sera le bon moment ?",
    answer:
      "L'offre à -72%, non. Elle ferme ce soir à minuit, et cette fois il n'y aura pas de rattrapage. Et pour le reste, le bon moment n'arrive jamais tout seul : la plupart de nos élèves ont commencé en travaillant à côté, avec une heure ou deux par jour.",
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

const OFFRE_INCLUS = [
  "L'accès complet à l'incubateur Agencilab",
  "La formation étape par étape, de zéro à tes premiers clients",
  "L'accompagnement : un coach valide chacune de tes actions",
  "Alic.ia, l'IA qui fait le travail technique avec toi",
  "Des entreprises redistribuées qui cherchent déjà un prestataire",
  "La communauté des +1 018 élèves",
];

/**
 * Screenshot du vrai message de suppression reçu de YouTube.
 * Dépose le fichier dans public/images/youtube-ban.jpg (ou .png / .webp)
 * et le bloc s'affiche tout seul dans la section "Le 3 juin".
 */
function screenshotYoutube(): string | null {
  for (const ext of ["jpg", "png", "webp"]) {
    if (existsSync(join(process.cwd(), "public", "images", `youtube-ban.${ext}`))) {
      return `/images/youtube-ban.${ext}`;
    }
  }
  return null;
}

export default function Les500Page() {
  const banSrc = screenshotYoutube();
  return (
    <>
      <OffrePopup />
      <CountdownBar />

      <main className="relative flex-1 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        <section className="relative z-10 pb-12 pt-8 md:pb-20 md:pt-12">
          <div className="mx-auto max-w-[1100px] px-6">
            {/* ===== HERO — l'angle de la sélection des 500 ===== */}
            <div className="hero-border rounded-2xl border border-white/10 bg-white/[0.03] sm:rounded-3xl">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                {/* Gauche — texte */}
                <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
                  <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/15 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-gold-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-400" />
                    </span>
                    Réservé aux 500
                  </span>

                  <h1 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.5rem]">
                    Tu fais partie des 500 : l&apos;incubateur{" "}
                    <span className="gradient-text">Agencilab</span> ouvre à{" "}
                    <span className="gradient-text">-72%</span>{" "}
                    jusqu&apos;à ce soir minuit.
                  </h1>

                  <p className="mb-8 max-w-md text-base leading-relaxed tracking-tight text-white/50">
                    Sur les 40 000 inscrits à ma newsletter, vous êtes environ
                    500 à ouvrir chaque email et à prendre le temps de me
                    répondre. Cette page n&apos;existe que pour vous, elle ferme
                    ce soir à minuit, et il n&apos;y aura pas de rattrapage.
                  </p>

                  {/* Visages empilés */}
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex -space-x-2.5">
                      {META_AVATARS.map((face) => (
                        <div
                          key={face.name}
                          className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-navy-950"
                        >
                          <Image
                            src={face.src}
                            alt={face.name}
                            fill
                            className="object-cover"
                            sizes="36px"
                          />
                        </div>
                      ))}
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-navy-950 bg-accent-400/10 text-[9px] font-bold text-accent-400">
                        +893
                      </div>
                    </div>
                    <p className="text-xs tracking-tight text-white/30">
                      Ils ont changé de vie grâce à Agencilab.
                    </p>
                  </div>
                </div>

                {/* Droite — photo de Louis devant les élèves */}
                <div className="relative min-h-[300px] overflow-hidden rounded-b-2xl sm:rounded-b-3xl lg:min-h-0 lg:rounded-b-none lg:rounded-br-3xl lg:rounded-tr-3xl">
                  <Image
                    src="/images/hero-group.jpg"
                    alt="La communauté Agencilab lors d'un séminaire"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    quality={100}
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-950/30 to-transparent lg:from-navy-950/20" />
                </div>
              </div>
            </div>

            {/* ===== POURQUOI -72% (l'histoire qui justifie la promo) ===== */}
            <section className="mt-14 md:mt-20">
              <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-12">
                <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white">
                  On m&apos;a enlevé{" "}
                  <span className="gradient-text">4 ans de ma vie</span> du
                  jour au lendemain
                </h2>
              </div>

              <div className="mx-auto max-w-[680px]">
                {/* Acte 1 : le coup dur */}
                <div className="border-l-2 border-red-500/40 pl-5 sm:pl-7">
                  <p className="text-[0.8125rem] font-bold uppercase tracking-[0.14em] text-red-400/80">
                    Le 3 juin
                  </p>
                  <div className="mt-3 space-y-3 text-[1rem] leading-[1.75] text-white/70 md:text-[1.0625rem]">
                    <p>YouTube a supprimé ma chaîne à 273 000 abonnés.</p>
                    <p>
                      Quatre ans de travail effacés en une nuit, sur une
                      décision automatique, sans jamais pouvoir en parler à
                      quelqu&apos;un.
                    </p>
                  </div>

                  {banSrc && (
                    <figure className="mt-6">
                      <div className="overflow-hidden rounded-xl border border-red-500/25 bg-white/[0.02] shadow-[0_8px_40px_rgba(239,68,68,0.12)]">
                        <Image
                          src={banSrc}
                          alt="Le message de suppression reçu de YouTube"
                          width={1200}
                          height={700}
                          className="h-auto w-full"
                          unoptimized
                        />
                      </div>
                      <figcaption className="mt-2 text-[0.8125rem] text-white/40">
                        Le message que j&apos;ai reçu le 3 juin.
                      </figcaption>
                    </figure>
                  )}
                </div>

                {/* Acte 2 : la pause, le réalignement et l'ambition */}
                <div className="mt-8 border-l-2 border-white/10 pl-5 sm:pl-7">
                  <div className="space-y-3 text-[1rem] leading-[1.75] text-white/70 md:text-[1.0625rem]">
                    <p>
                      Ce coup m&apos;a forcé à tout arrêter, et pour la
                      première fois depuis des années, j&apos;ai pris le temps
                      de me demander ce que je voulais vraiment faire de ma
                      vie.
                    </p>
                    <p>
                      Pendant quatre ans, j&apos;ai fait des vidéos qui
                      motivaient les gens deux minutes. Ils regardaient, ils
                      trouvaient ça bien, et le lendemain leur vie était
                      exactement la même. J&apos;ai fini par trouver ça vide.
                    </p>
                    <p>
                      Et je te rassure tout de suite, mes autres business
                      tournent bien. J&apos;ai même de nouvelles idées de
                      projets dont je te parlerai bientôt. C&apos;est
                      justement en prenant du recul que j&apos;ai commencé à
                      voir les choses différemment pour Agencilab.
                    </p>
                    <p>
                      Maintenant je veux frapper beaucoup plus fort. 1 018
                      personnes sont passées par l&apos;incubateur depuis le
                      début, et mon objectif est de doubler ce chiffre.
                    </p>
                    <p>
                      La seule chose qui m&apos;en empêche, c&apos;est le prix.
                      Des gens m&apos;écrivent depuis des mois qu&apos;ils
                      veulent entrer et qu&apos;ils n&apos;ont pas {PRIX_NORMAL}{" "}
                      disponibles sur un compte. Ce sont des gens sérieux, qui
                      feraient le travail, et ça fait des mois que je les laisse
                      dehors.
                    </p>
                    <p>
                      Alors je retire l&apos;obstacle pendant 24 heures, et je
                      le fais d&apos;abord pour ceux qui me lisent vraiment.
                    </p>
                  </div>
                </div>

                {/* Acte 3 : l'offre, en surbrillance */}
                <div className="animate-gold-gradient mt-12 rounded-3xl p-[3px] shadow-[0_12px_60px_rgba(255,122,0,0.35)]">
                  <div className="rounded-[21px] bg-navy-950 px-6 py-10 text-center sm:px-10 sm:py-12">
                    <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white">
                      J&apos;ouvre exceptionnellement
                      <br />
                      l&apos;incubateur à{" "}
                      <span className="text-gold-400">-72%</span>.
                    </p>
                    <div className="mx-auto mt-6 max-w-[520px] space-y-4 text-[1.0625rem] leading-[1.7] text-white/70 md:text-[1.125rem]">
                      <p>
                        C&apos;est la{" "}
                        <span className="font-bold text-white">
                          dernière fenêtre
                        </span>{" "}
                        pour cette promotion, et il n&apos;y aura pas d&apos;autre
                        rattrapage.
                      </p>
                      <p>
                        Elle est disponible pendant{" "}
                        <span className="font-bold text-gold-400">
                          <TempsRestant />
                        </span>{" "}
                        maintenant.
                      </p>
                      <p>
                        Je la réserve aux{" "}
                        <span className="font-bold text-white">
                          500 abonnés
                        </span>{" "}
                        qui me lisent à chaque fois, et elle n&apos;existe nulle
                        part ailleurs.
                      </p>
                      <p>
                        Et quand le compte à rebours tombera à zéro, le prix
                        reviendra à la normale.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chute + signature */}
                <p className="mt-10 text-center text-[1.0625rem] font-semibold leading-[1.6] text-white md:text-[1.125rem]">
                  C&apos;est ton moment de savoir si tu veux vraiment changer
                  de vie cette année, comme l&apos;ont fait les{" "}
                  <span className="gradient-text">+1 018 membres</span>.
                </p>
                <p
                  className="mt-5 text-center text-2xl text-white/60 sm:text-3xl"
                  style={{ fontFamily: "var(--font-caveat)" }}
                >
                  Louis, fondateur d&apos;Agencilab
                </p>

                <div className="mt-10 flex justify-center">
                  <BuyButton />
                </div>
              </div>
            </section>

            {/* ===== SECTIONS REPRISES DU TUNNEL (sous la VSL) ===== */}
            {/* 1. Vendre le rêve (la transformation pour l'ICP) */}
            <OffreReveSection ctaLabel="Voir ce qu'il y a dans Agencilab" />
            {/* 1b. Schéma : le modèle économique (bras droit marketing) */}
            <BrasDroitSchema />
            <div className="mt-10 flex justify-center md:mt-12">
              <BuyButton />
            </div>
            {/* 2. Vendre Agencilab et l'accompagnement + fondateur */}
            <OffreAgencilabSection programName="Agencilab" />
            {/* 3. Trust : témoignages écrits + chiffres */}
            <WarmTrustSection />
            <div className="mt-10 flex justify-center md:mt-12">
              <BuyButton />
            </div>

            {/* ===== 4. BLOC OFFRE DE LANCEMENT -72% ===== */}
            <section id="offre" className="mt-14 scroll-mt-24 md:mt-20">
              <div className="mx-auto max-w-[760px]">
                <div className="animate-gold-gradient rounded-3xl p-[2px] shadow-[0_8px_40px_rgba(255,122,0,0.25)]">
                  <div className="rounded-[22px] bg-navy-950 px-6 py-10 text-center md:px-12">
                    <span className="mb-3 inline-block rounded-full border border-gold-400/40 bg-gold-400/15 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-gold-400">
                      Réservé aux 500 · jusqu&apos;à ce soir minuit
                    </span>
                    <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white">
                      Rejoins Agencilab à{" "}
                      <span className="gradient-text">-72%</span>
                    </h2>
                    <div className="mx-auto mt-5 inline-flex items-center gap-2.5 rounded-xl border-2 border-gold-400 bg-gold-400/15 px-5 py-3 shadow-[0_0_30px_rgba(255,122,0,0.25)]">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-70" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
                      </span>
                      <span className="text-[1rem] font-bold tracking-tight text-gold-300 md:text-[1.125rem]">
                        Il reste <TempsRestant /> pour en profiter
                      </span>
                    </div>

                    <p className="mx-auto mt-5 max-w-[560px] text-[0.9375rem] leading-[1.6] text-white/65 md:text-[1rem]">
                      La seule fois où l&apos;incubateur ouvre à ce prix. Tout
                      est compris, sans frais cachés.
                    </p>

                    <ul className="mx-auto mt-8 max-w-[520px] space-y-3 text-left">
                      {OFFRE_INCLUS.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle
                            size={22}
                            weight="fill"
                            className="mt-0.5 shrink-0 text-gold-400"
                          />
                          <span className="text-[0.9375rem] leading-[1.5] text-white/80">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Garantie en surbrillance (même pattern que la home) */}
                    <div
                      className="mx-auto mt-8 max-w-[520px] rounded-2xl border-2 border-accent-400 p-5 text-left"
                      style={{
                        boxShadow: "0 0 40px rgba(1, 95, 255, 0.25)",
                      }}
                    >
                      <p className="text-[0.9375rem] leading-[1.6] text-white/85">
                        <span className="font-bold text-accent-300">
                          Garantie
                        </span>{" "}
                        : si tu suis la méthode et que tu n&apos;atteins pas
                        les résultats, on te donne un client.
                      </p>
                    </div>

                    <div className="mt-9">
                      <p className="text-[0.9375rem] text-white/45">
                        Prix normal :{" "}
                        <span className="line-through">{PRIX_NORMAL}</span>
                      </p>
                      <p className="mt-1 text-[2.5rem] font-extrabold tracking-tight text-white md:text-[3rem]">
                        {PRIX_PROMO}{" "}
                        <span className="align-middle text-[1.125rem] font-bold text-gold-400">
                          -72%
                        </span>
                      </p>
                      <p className="mt-1 text-[0.8125rem] text-white/50">
                        En une fois ou en 5 fois. Quand le compte à rebours
                        tombe à zéro, le prix repasse à {PRIX_NORMAL}.
                      </p>
                    </div>

                    <div className="mt-7 flex justify-center">
                      <BuyButton />
                    </div>
                    <p className="mt-4 text-[0.8125rem] text-white/45">
                      Paiement sécurisé par Stripe · Accès immédiat
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. ROI — l'investissement le plus rentable */}
            <OffreRoiSection
              prix={PRIX_PROMO}
              prixSuffix=" une seule fois"
              prixNote={`-72% en promotion exclusive, au lieu de ${PRIX_NORMAL}`}
            />

            <div className="mt-10 flex justify-center md:mt-12">
              <BuyButton />
            </div>

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
                <FaqBnAccordion faqs={FAQ_LANCEMENT} />
              </div>
            </div>

            <div className="mt-10 flex justify-center md:mt-12">
              <BuyButton />
            </div>

            {/* 7. Avis Trustpilot — les avis vérifiés */}
            <OffreTrustpilot />

            {/* 8. Dernier CTA */}
            <div className="mt-14 text-center md:mt-20">
              <h2 className="mx-auto max-w-[640px] text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.18] tracking-tight text-white">
                Rejoins Agencilab à{" "}
                <span className="gradient-text">-72%</span> avant la fermeture
                des portes.
              </h2>
              <p className="mx-auto mt-3 max-w-[520px] text-[0.9375rem] leading-[1.6] text-white/65 md:text-[1rem]">
                Dans un an, tu seras quelque part. Soit ce jour aura été le
                point de départ de tout, soit tu seras au même endroit
                qu&apos;aujourd&apos;hui.
              </p>
              <div className="mt-6 flex justify-center">
                <BuyButton />
              </div>
              <p className="mt-4 text-[0.8125rem] text-white/45">
                {PRIX_PROMO} au lieu de{" "}
                <span className="line-through">{PRIX_NORMAL}</span> ·
                Jusqu&apos;à ce soir minuit · Accès immédiat
              </p>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter />
      <VentesNotif />
    </>
  );
}
