import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChatCircle } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import FaqBnAccordion, { type Faq } from "@/components/funnel/FaqBnAccordion";

export const metadata: Metadata = {
  title: "Tes questions, mes réponses honnêtes | Agencilab",
  description:
    "Si tu hésites encore après la vidéo, ces questions sont faites pour toi. Réponses sans langue de bois sur l'accompagnement Agencilab.",
  robots: { index: false, follow: false },
};

const FAQS: Faq[] = [
  {
    question:
      "L'appel de 15 min avec Pierre, c'est un appel de vente déguisé ?",
    answer:
      "Non, et c'est important pour nous. Pierre est là pour comprendre où tu en es, ce que tu cherches, et te dire honnêtement si Agencilab peut t'aider, ou pas. S'il sent que ce n'est pas le bon moment ou pas le bon profil, il te le dira. Aucun pitch, aucune pression. C'est un échange humain, pas une démo de produit.",
  },
  {
    question:
      "C'est combien exactement ? Je ne veux pas tomber dans le piège du 'on en parle à l'appel'",
    answer:
      "Le tarif exact dépend de la formule (durée d'accompagnement, options) et est partagé pendant l'appel. Pas pour faire mystère, mais parce qu'on veut d'abord comprendre ta situation pour te recommander la bonne formule.\n\nCe qu'on peut te dire d'avance : c'est un investissement de plusieurs milliers d'euros (loin des 50 000€ d'une école de commerce, mais ce n'est pas non plus une formation à 47€). Le ROI est rapide si tu suis la méthode, la majorité des élèves remboursent leur accompagnement avec leurs premiers clients.",
  },
  {
    question:
      "J'ai déjà essayé d'autres formations qui n'ont pas marché,qu'est-ce qui change ici ?",
    answer:
      "Trois choses concrètes :\n\n1. Ce n'est pas une formation passive : tu as un coach dédié qui te suit, des appels de groupe hebdo, et une communauté active. Tu n'es jamais seul devant des vidéos.\n\n2. La méthode est testée sur +1 018 élèves avec des résultats reproductibles, pas une théorie sortie d'un livre.\n\n3. On a une garantie contractuelle rédigée par avocat : si tu suis la méthode et que tu n'atteins pas tes premiers résultats, on continue gratuitement jusqu'à ce que ça marche. C'est nous qui prenons le risque, pas toi.",
  },
  {
    question: "Combien de temps avant mes premiers euros gagnés ?",
    answer:
      "La fourchette honnête : 2 à 4 mois pour ton premier client payé entre 1 500 et 3 000€/mois si tu suis la méthode et appliques 45 min/jour. Certains élèves vont plus vite (6-8 semaines), d'autres mettent un peu plus de temps (5-6 mois) selon leur disponibilité et leur consistance.\n\nCe qu'on ne te promet pas : un résultat immédiat. Ce qu'on garantit : la trajectoire si tu suis le process.",
  },
  {
    question: "Je suis nul en informatique / IA,c'est mort pour moi ?",
    answer:
      "Non. La méthode est conçue pour partir de zéro. On accompagne des gendarmes, des boulangers, des ouvriers, des mères au foyer. La majorité n'avait aucune base technique avant. L'IA est un outil qu'on t'apprend à utiliser, pas un prérequis.\n\nSi tu sais utiliser un smartphone et envoyer un email, tu as le niveau de départ.",
  },
  {
    question:
      "Et si je n'arrive pas à conjuguer ça avec mon emploi à temps plein ?",
    answer:
      "C'est pour ça que la méthode est calibrée sur 45 min/jour. C'est l'équivalent d'un épisode de série, faisable le soir, le week-end, ou pendant la pause déjeuner.\n\nLes élèves qui réussissent ne sont pas ceux qui ont le plus de temps libre. Ce sont ceux qui sont consistants 45 min/jour pendant 3 mois. Si tu peux dégager ce temps, tu as le minimum requis.",
  },
  {
    question:
      "Le marketing digital, c'est pas saturé maintenant ? Tout le monde s'y met",
    answer:
      "Statistiques actuelles : il y a 4 millions d'entreprises en France, et 80% d'entre elles n'ont aucune stratégie marketing digitale en place. Le marché de la demande dépasse largement le marché de l'offre.\n\nLe risque de saturation existe sur les positions ultra-concurrentielles (devenir influenceur lifestyle, par exemple). Pas sur le créneau qu'on enseigne : aider des PME locales à trouver plus de clients. La demande est structurelle, pas une mode.",
  },
  {
    question: "Est-ce que je peux parler à des élèves avant de m'engager ?",
    answer:
      "Oui : pendant l'appel avec Pierre, tu peux demander à être mis en contact avec un ou deux élèves de profil similaire au tien (même âge, même secteur de départ). Beaucoup de nos élèves acceptent volontiers de témoigner pour aider les futurs.\n\nTu peux aussi consulter les +40 avis Trustpilot vérifiés sur la page d'accueil agencilab.com (bas de page).",
  },
  {
    question:
      "Je suis intéressé mais je préfère prendre quelques jours pour réfléchir",
    answer:
      "C'est tout à fait normal et tu n'as aucune obligation. Cela dit, l'appel de 15 min ne t'engage à rien,c'est précisément l'occasion de récolter les infos manquantes pour décider en connaissance de cause.\n\nMon conseil franc : prends l'appel maintenant pendant que c'est frais. Tu pourras toujours dire non à la fin. Ce qui se passe sinon : la vie reprend, l'élan retombe, et 6 mois plus tard tu te dis encore 'je devrais y réfléchir'.",
  },
];

export default function FaqBn() {
  return (
    <>
      {/* Bandeau warm,cohérent avec /explication-bn */}
      <div className="border-b border-accent-400/20 bg-accent-400/10">
        <div className="mx-auto max-w-[1100px] px-6 py-3">
          <p className="text-center text-[0.875rem] font-semibold text-accent-400">
            ✉️ Pour mes abonnés :{" "}
            <em className="font-medium not-italic text-white/80">
              «&nbsp;Voici les vraies questions que tu te poses, et mes
              réponses honnêtes.&nbsp;»
            </em>
          </p>
        </div>
      </div>

      <main className="relative flex-1 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        <section className="relative z-10 py-10 md:py-16">
          <div className="mx-auto max-w-[860px] px-6">
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
              <div
                className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-5 py-2 text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-accent-400"
                style={{ boxShadow: "0 0 30px rgba(1, 95, 255, 0.15)" }}
              >
                Questions / Réponses
              </div>

              <h1 className="mb-4 text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-white">
                Les vraies questions que tu te poses
                <br className="hidden sm:block" />
                <span className="gradient-text">(et mes réponses honnêtes)</span>
              </h1>

              <p className="mx-auto mb-10 max-w-2xl text-[0.9375rem] leading-[1.55] text-white/70 md:text-[1rem]">
                Si tu as déjà regardé la vidéo et que tu hésites encore, ces 9
                questions reviennent en permanence. J&apos;ai pris le temps d&apos;y
                répondre sans langue de bois.
              </p>
            </div>

            <FaqBnAccordion faqs={FAQS} />

            {/* CTA bloc,vers /decouverte-pierre + /message-pierre */}
            <div className="mt-12 rounded-3xl border border-accent-400/20 bg-accent-400/5 p-6 text-center md:p-10">
              <h2 className="mb-3 text-[1.25rem] font-bold tracking-tight text-white md:text-[1.5rem]">
                Une question pas dans la liste&nbsp;?
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-[0.9375rem] leading-[1.5] text-white/70 md:text-[1rem]">
                Le plus rapide, c&apos;est de la poser directement à Pierre, il
                te répond sous 2-4h sur WhatsApp ou tu réserves 15 min avec lui.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/decouverte-pierre"
                  className="cta-button glow-gold inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-400 px-6 py-3.5 text-[0.9375rem] font-bold tracking-tight text-navy-950 sm:w-auto"
                >
                  Réserver 15 min avec Pierre
                  <ArrowRight size={18} weight="bold" />
                </Link>
                <Link
                  href="/message-pierre"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-[0.9375rem] font-semibold tracking-tight text-white/80 transition-all hover:border-accent-400/40 hover:bg-accent-400/10 hover:text-white sm:w-auto"
                >
                  <ChatCircle size={18} weight="fill" />
                  Envoyer un message
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
}
