/**
 * Contenu des 8 chapitres de la brochure Growth Marketing.
 * Le chapitre 08 contient le quiz (placeholder Tally).
 *
 * Pour ajouter / modifier un chapitre, édite ce fichier.
 */
import {
  Callout,
  NotItem,
  StatCard,
  DayBlock,
  PillarCard,
  RevenueCard,
  ProfileCard,
  StepCard,
  CrossIcon,
} from "./components";

export type Chapter = {
  num: string;
  slug: string;
  title: string;
  subtitle?: string;
  variant: "dark" | "marble";
  content: (ctx: { closerLabel: string; closerSlug: string | null }) => React.ReactNode;
};

export const CHAPTERS: Chapter[] = [
  /* ============================================================
     01 — Intro
     ============================================================ */
  {
    num: "01",
    slug: "c-est-quoi",
    title: "C'est quoi le Growth Marketing",
    subtitle: "La définition la plus simple possible.",
    variant: "dark",
    content: () => (
      <>
        <p className="text-balance">
          Le Growth Marketing, c'est l'activité qui consiste à{" "}
          <strong className="text-white">
            aider une entreprise à trouver plus de clients
          </strong>{" "}
          grâce à des leviers digitaux (réseaux sociaux, publicités, emails,
          sites internet, IA).
        </p>
        <p>
          Concrètement, tu deviens le bras droit marketing d'une PME locale
          (restaurant, coach, agent immobilier, artisan, kinésithérapeute,
          etc.) et tu lui apportes des résultats mesurables : plus de
          rendez-vous, plus de devis, plus de chiffre d'affaires. En échange,{" "}
          <strong className="text-white">
            elle te paie plusieurs milliers d'euros par mois
          </strong>{" "}
          pour ces résultats.
        </p>

        <Callout label="Une analogie simple">
          Un kinésithérapeute est bon dans son métier. Mais sa salle d'attente
          n'est jamais pleine. Pourquoi ? Parce qu'il ne sait pas vendre. Un
          Growth Marketer arrive, met en place un système (pubs, réseaux,
          emails) et le kiné voit sa patientèle exploser. C'est ça l'activité.
        </Callout>

        <h3 className="mt-10 text-[1.125rem] font-bold text-white md:text-[1.25rem]">
          Ce que ce n'est PAS
        </h3>
        <ul className="mt-4 space-y-2">
          <NotItem>
            Du <strong>dropshipping</strong> : tu ne vends pas tes propres
            produits
          </NotItem>
          <NotItem>
            Du <strong>SMMA</strong> classique : tu n'es pas une agence qui
            cherche à grossir, tu es indépendant
          </NotItem>
          <NotItem>
            Du <strong>trading</strong> ou de la crypto : tu ne joues pas
            d'argent
          </NotItem>
          <NotItem>
            Du <strong>MLM</strong> : tu n'as personne à recruter en dessous
            de toi
          </NotItem>
          <NotItem>
            Une <strong>formation passive</strong> : tu apprends en faisant,
            sur de vrais clients dès la fin du programme
          </NotItem>
        </ul>
      </>
    ),
  },

  /* ============================================================
     02 — Pourquoi maintenant
     ============================================================ */
  {
    num: "02",
    slug: "pourquoi-maintenant",
    title: "Pourquoi c'est devenu si rentable en 2026",
    subtitle: "Trois chiffres qui expliquent tout.",
    variant: "marble",
    content: () => (
      <>
        <p>
          Le marché du Growth Marketing en France n'a jamais été aussi
          favorable. Trois chiffres expliquent pourquoi.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
          <StatCard
            number="4M"
            label="d'entreprises en France"
            sub="dont la majorité n'a aucune stratégie digitale en place"
          />
          <StatCard
            number="80%"
            label="d'entre elles"
            sub="cherchent activement à acquérir plus de clients en ligne"
          />
          <StatCard
            number="< 3%"
            label="de profils formés"
            sub="capables de répondre concrètement à cette demande"
          />
        </div>

        <p className="mt-10">
          Traduction :{" "}
          <strong>la demande dépasse massivement l'offre</strong>. Les PME se
          battent pour trouver des marketeurs compétents, et les marketeurs
          compétents choisissent leurs clients.
        </p>

        <p>
          C'est exactement le contraire de ce qui se passe sur d'autres
          créneaux saturés (devenir influenceur, monter son e-commerce, vendre
          une formation). Ici, l'opportunité est{" "}
          <strong>structurelle, pas conjoncturelle</strong>.
        </p>

        <Callout label="Bon à savoir">
          Cette demande n'est pas une mode. Tant qu'il y aura des entreprises
          qui cherchent des clients (donc toujours), il y aura besoin de
          Growth Marketers pour les aider à en trouver.
        </Callout>
      </>
    ),
  },

  /* ============================================================
     03 — Rôle concret
     ============================================================ */
  {
    num: "03",
    slug: "role-quotidien",
    title: "Le rôle concret d'un Growth Marketer au quotidien",
    subtitle: "Une journée type, vraiment.",
    variant: "dark",
    content: () => (
      <>
        <p>
          Sur le papier, ça parle d'algorithmes et de funnels. Dans la vraie
          vie, voilà à quoi ressemble une journée type.
        </p>

        <div className="mt-8 space-y-4">
          <DayBlock
            time="08h30"
            title="Café et stratégie"
            desc="Tu regardes les résultats de tes campagnes pubs de la nuit. Tu ajustes les enchères, tu coupes ce qui ne marche pas, tu doubles ce qui performe."
          />
          <DayBlock
            time="10h00"
            title="Call client (45 min)"
            desc="Tu fais le point avec un de tes 3-4 clients. Tu lui présentes les chiffres du mois, tu valides la prochaine campagne. Il te paie 2 500€/mois pour ce travail."
          />
          <DayBlock
            time="11h30"
            title="Pause déjeuner libre"
            desc="Pas de chef qui te regarde, pas d'horaires imposés. Tu manges où tu veux, tu reprends quand tu veux."
          />
          <DayBlock
            time="14h00"
            title="Création"
            desc="Tu écris 5 publicités pour un nouveau client, tu lances une séquence email automatisée, tu mets à jour un site web. Avec l'IA, tu fais en 2h ce qui prenait une journée."
          />
          <DayBlock
            time="17h00"
            title="Off"
            desc="Tu coupes. Pas de mails du soir, pas d'urgences. Tes systèmes tournent tout seuls pour tes clients."
          />
        </div>

        <Callout label="Le format de travail">
          La plupart des Growth Marketers indépendants gèrent{" "}
          <strong>3 à 6 clients simultanément</strong>, à 1 500-3 500€ par
          client et par mois. Tout se fait à distance, depuis un ordinateur,
          avec une connexion internet.
        </Callout>
      </>
    ),
  },

  /* ============================================================
     04 — Les 5 compétences
     ============================================================ */
  {
    num: "04",
    slug: "competences",
    title: "Les 5 compétences qu'on t'enseigne chez Agencilab",
    subtitle: "Cinq piliers qui s'empilent.",
    variant: "marble",
    content: () => (
      <>
        <p>
          Le Growth Marketing repose sur 5 piliers complémentaires. Chacun
          peut générer des résultats seul, mais c'est leur empilement qui crée
          un système robuste.
        </p>

        <div className="mt-10 space-y-4">
          <PillarCard
            num="1"
            title="Réseaux sociaux"
            desc="Créer du contenu qui attire l'attention sur Instagram, TikTok, LinkedIn. Pas pour devenir influenceur, mais pour générer des prospects pour ton client."
          />
          <PillarCard
            num="2"
            title="Publicité payante"
            desc="Lancer des campagnes Meta Ads et Google Ads rentables. Savoir lire un ROAS, optimiser une enchère, scaler une audience qui convertit."
          />
          <PillarCard
            num="3"
            title="Email marketing"
            desc="Construire des séquences automatiques qui transforment un prospect en client. C'est le levier le plus rentable que la majorité des PME n'utilise pas."
          />
          <PillarCard
            num="4"
            title="Sites & landing pages"
            desc="Concevoir des pages web qui convertissent. Pas du design pour faire joli, mais des pages pensées pour qu'un visiteur prenne contact ou achète."
          />
          <PillarCard
            num="5"
            title="IA appliquée"
            desc="Utiliser ChatGPT, Claude, Alic.ia et d'autres outils pour produire 5x plus vite : rédaction, créatives, analyse, automatisation."
          />
        </div>
      </>
    ),
  },

  /* ============================================================
     05 — Combien tu peux gagner
     ============================================================ */
  {
    num: "05",
    slug: "revenus",
    title: "Combien tu peux gagner concrètement",
    subtitle: "Les fourchettes réelles observées sur +900 personnes.",
    variant: "dark",
    content: () => (
      <>
        <p>
          Les revenus dépendent de ton niveau, du nombre de clients que tu
          gères et de ton positionnement. Voilà les fourchettes observées sur
          les +900 personnes accompagnées chez Agencilab.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <RevenueCard
            level="Débutant"
            range="1 000 à 2 500€"
            sub="par mois"
            detail="0 à 3 mois après le démarrage. 1 à 2 clients à 800-1 500€."
            tier="entry"
          />
          <RevenueCard
            level="Intermédiaire"
            range="3 000 à 5 000€"
            sub="par mois"
            detail="3 à 9 mois après le démarrage. 3-4 clients à 1 200-1 800€."
            tier="mid"
          />
          <RevenueCard
            level="Confirmé"
            range="8 000 à 15 000€"
            sub="par mois"
            detail="12 mois et plus. 4-6 clients à 2 000-3 500€, certains à la performance."
            tier="top"
          />
        </div>

        <p className="mt-10">
          La moyenne nationale sur l'accompagnement Agencilab tourne autour
          de <strong>+2 987€ par mois</strong> après 6 mois d'activité
          sérieuse. C'est plus que la médiane salariale française nette, en ne
          travaillant souvent qu'une vingtaine d'heures par semaine.
        </p>

        <Callout label="Important sur le pricing">
          Tes clients ne te paient pas pour ton temps, ils te paient pour
          leurs résultats. C'est pour ça qu'un Growth Marketer peut générer
          plus de revenus en 20h/semaine qu'un salarié en 35h.
        </Callout>
      </>
    ),
  },

  /* ============================================================
     06 — Profils
     ============================================================ */
  {
    num: "06",
    slug: "profils",
    title: "À qui ça parle vraiment",
    subtitle: "Les traits qu'on retrouve chez ceux qui réussissent.",
    variant: "marble",
    content: () => (
      <>
        <p>
          Cette activité n'est pas pour tout le monde, mais elle est
          accessible à beaucoup plus de profils qu'on ne le croit. Voici les
          caractéristiques qu'on observe le plus souvent chez ceux qui
          réussissent.
        </p>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          <ProfileCard title="Tu es curieux">
            Tu aimes comprendre comment les choses fonctionnent. Tu lis, tu
            testes, tu poses des questions. C'est 80% du job.
          </ProfileCard>
          <ProfileCard title="Tu es autonome">
            Personne ne sera derrière toi pour te dire quoi faire. Tu prends
            tes décisions, tu organises ta semaine, tu livres.
          </ProfileCard>
          <ProfileCard title="Tu aimes les vraies conversations">
            Tu vas parler à tes clients, comprendre leur business, leur
            expliquer ta stratégie. Pas de relationnel = pas de mission.
          </ProfileCard>
          <ProfileCard title="Tu veux des résultats concrets">
            Tu préfères les chiffres aux théories. Tu veux voir l'impact de
            ce que tu fais. Le marketing à la performance, c'est exactement
            ça.
          </ProfileCard>
        </div>

        <div className="mt-12 rounded-2xl border border-red-500/30 bg-red-500/[0.05] p-6 md:p-8">
          <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-red-400">
            À l'inverse, cette activité n'est PAS pour toi si…
          </p>
          <ul className="space-y-2 text-[0.9375rem] text-navy-950/85">
            <li className="flex items-start gap-3">
              <CrossIcon />
              <span>Tu veux un revenu passif sans rien faire</span>
            </li>
            <li className="flex items-start gap-3">
              <CrossIcon />
              <span>
                Tu cherches une formule magique qui te rend riche en 30 jours
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CrossIcon />
              <span>
                Tu n'es pas prêt à passer 2 à 3 mois à apprendre sérieusement
                avant de facturer
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CrossIcon />
              <span>
                Tu détestes les humains et tu veux travailler 100% solo
              </span>
            </li>
          </ul>
        </div>
      </>
    ),
  },

  /* ============================================================
     07 — Comment se lancer
     ============================================================ */
  {
    num: "07",
    slug: "lancer",
    title: "Comment te lancer concrètement",
    subtitle: "Les 5 étapes de l'accompagnement Agencilab.",
    variant: "dark",
    content: () => (
      <>
        <p>
          L'accompagnement Agencilab dure entre 3 et 12 mois selon ton rythme
          et tes objectifs. Voilà comment ça se passe.
        </p>

        <div className="mt-10 space-y-3">
          <StepCard
            num="01"
            title="Le call de découverte avec ton closer"
            desc="C'est l'étape où tu es. Tu discutes 45 minutes avec un membre de l'équipe pour cadrer ta situation, tes objectifs, et voir si Agencilab est fait pour toi. C'est gratuit et engageant uniquement si tu décides de continuer."
          />
          <StepCard
            num="02"
            title="L'onboarding (semaine 1)"
            desc="Accès à la plateforme, plan d'apprentissage personnalisé, première session 1-1 avec ton coach pour fixer les objectifs des 90 prochains jours."
          />
          <StepCard
            num="03"
            title="La phase apprentissage (mois 1-2)"
            desc="Tu apprends les 5 piliers à ton rythme via les modules. Tu pratiques sur des cas réels. Tu poses tes questions en direct lors des calls hebdomadaires."
          />
          <StepCard
            num="04"
            title="La phase action (mois 2-3)"
            desc="Tu lances la prospection, tu signes ton premier client, tu livres tes premiers résultats. L'équipe t'accompagne sur chaque étape sensible (closing, devis, contrat)."
          />
          <StepCard
            num="05"
            title="La phase scale (mois 3+)"
            desc="Tu enchaînes les clients, tu augmentes tes tarifs, tu construis un revenu stable. L'objectif : vivre de cette activité dans les 3 premiers mois."
          />
        </div>

        <div
          className="mt-10 rounded-2xl border-2 border-accent-400/50 bg-accent-400/[0.06] p-6 md:p-8"
          style={{ boxShadow: "0 0 40px rgba(1, 95, 255, 0.12)" }}
        >
          <p className="mb-3 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-accent-400">
            Garantie contractuelle
          </p>
          <p className="text-[1rem] leading-[1.6] text-white md:text-[1.0625rem]">
            Agencilab te garantit{" "}
            <strong>de vivre de cette activité en 3 mois</strong> ou tu es
            accompagné gratuitement jusqu'à ce que ce soit le cas. Cette
            garantie est{" "}
            <strong>
              rédigée par un avocat en droit des affaires
            </strong>{" "}
            et inscrite noir sur blanc dans ton contrat d'accompagnement.
          </p>
        </div>
      </>
    ),
  },

  /* ============================================================
     08 — Quiz
     ============================================================ */
  {
    num: "08",
    slug: "quiz",
    title: "Quiz avant ton appel",
    subtitle: "Pour que ton closer arrive préparé le jour J.",
    variant: "dark",
    content: ({ closerLabel, closerSlug }) => (
      <>
        <p className="mb-6">
          Ça prend 2 minutes et ça permet à{" "}
          <strong className="text-white">{closerLabel}</strong> d'arriver
          préparé le jour J. On gagne tous les deux du temps et on va direct
          à ce qui compte pour toi.
        </p>

        <div
          id="quiz-form"
          className="relative overflow-hidden rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.03] p-10 text-center backdrop-blur-sm md:p-14"
        >
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold-400"
                aria-hidden
              >
                <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4" />
                <polyline points="9 11 12 14 22 4" />
              </svg>
            </div>
          </div>
          <p className="mb-1 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gold-400">
            Quiz à intégrer
          </p>
          <p className="text-[0.9375rem] text-white/70 md:text-[1rem]">
            Placeholder pour le formulaire Tally. Une fois le quiz créé,
            remplace ce bloc par un{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-[0.8125rem]">
              {`<TallyEmbed tallySrc="..." title="..." />`}
            </code>
            .
          </p>
          <p className="mt-3 text-[0.8125rem] text-white/45">
            Configure la redirection Tally vers{" "}
            <code className="text-white/70">
              /le-growth-marketing/merci?closer={closerSlug ?? "<closer>"}
            </code>
            .
          </p>
        </div>
      </>
    ),
  },
];
