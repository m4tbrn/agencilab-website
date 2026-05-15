/**
 * Contenu des 10 chapitres de la brochure Growth Marketing.
 * Structure persuasive : émotionnel → logique → social proof → émotionnel → action.
 *
 * Chapitre 10 contient le quiz (placeholder Tally).
 */
import Image from "next/image";
import {
  Callout,
  NotItem,
  StatCard,
  DayBlock,
  PillarCard,
  RevenueCard,
  StepCard,
  TestimonialCard,
  QuoteCard,
  PhotoTile,
  IdentificationItem,
  FlowNode,
  FlowConnector,
  type Testimonial,
} from "./components";

/* ============================================================
   Catalogue de testimonials (élèves réussis)
   ============================================================ */
// =======================================================================
// TESTIMONIALS — VRAIS ÉLÈVES AGENCILAB
// Profils extraits du vault Obsidian : Agencilab/Témoignages/_Index Témoignages.md
// Photos : /public/images/visages/*.jpg (vrais portraits)
//
// ⚠️ ATTENTION : les citations marquées "TODO" sont à extraire des transcripts
// bilans/interviews dans Obsidian (les transcripts complets sont dans
// Témoignages/{Nom}.md ou Témoignages/Interviews/{Nom}.md).
// Marina : citations extraites de son bilan réel (vérifiées).
// =======================================================================
export const TESTIMONIALS: Record<string, Testimonial> = {
  marina: {
    name: "Marina Hug",
    age: 36,
    photo: "/images/visages/marina.jpg",
    before: "Maman solo, Lausanne",
    revenue: "Vise 1M€ avant 40 ans",
    duration: "Lancement en cours",
    quote:
      "J'ai essayé plein de trucs avant : les commerces, l'achat-revente... Au final le marketing c'est ce qui m'intéresse le plus. Là j'y vais à fond, j'ai plus le choix.",
  },
  benjamin: {
    name: "Benjamin Maillard",
    age: null,
    photo: "/images/visages/benjamin.jpg",
    before: "Ex-routier, Vannes",
    revenue: "3 000€/mois",
    duration: "—",
    quote:
      "J'étais routier à mon compte, je partais la semaine. J'ai arrêté ce métier pour la famille, pour être plus présent. Aujourd'hui je gère mes clients depuis chez moi, je peux enfin voir grandir mes enfants.",
  },
  damien: {
    name: "Damien Botella",
    age: 29,
    photo: "/images/visages/damien.jpg",
    before: "Ex-paysagiste, Sète",
    revenue: "1 500 à 2 000€/mois",
    duration: "1 an et demi",
    quote:
      "J'ai deux enfants, je peux me permettre d'être avec eux, profiter, tout en travaillant à côté. C'est moi mon propre patron, je gère mon temps comme je veux. Ça n'a rien à voir avec avant.",
  },
  kylian: {
    name: "Kylian Surget",
    age: null,
    photo: "/images/visages/kylian.jpg",
    before: "Salarié à plein temps",
    revenue: "≈ 6 000€/mois",
    duration: "Démarrage en 6 semaines",
    quote:
      "J'ai commencé la formation en février, en avril j'ai quitté mon taf. Je me suis spécialisé sur les avocats et les juristes : la prospection s'est très bien lancée on va dire.",
  },
  leo: {
    name: "Léo Kraewinkels",
    age: null,
    photo: "/images/visages/leo.jpg",
    before: "Salarié plein temps, Bruxelles",
    revenue: "2 clients",
    duration: "Transition en cours",
    quote:
      "Je venais de recevoir mon premier salaire et ça ne m'avait pas satisfait. J'ai commencé à me demander si je voulais vraiment continuer dans le salariat. Aujourd'hui j'ai 2 clients et je prépare ma sortie.",
  },
  solene: {
    name: "Solène",
    age: null,
    photo: "/images/visages/solene.jpg",
    before: "Étudiante en 3e année de médecine",
    revenue: "3 clients sites web",
    duration: "En parallèle des études",
    quote:
      "Je suis en 3e année de médecine. J'ai vu les stages, j'ai vu la réalité, c'est pas un métier qui est fait pour moi. Je voulais un truc où je peux voyager. Aujourd'hui j'ai 3 clients en sites web en parallèle.",
  },
  stephanie: {
    name: "Stéphanie Corveleyn",
    age: null,
    photo: "/images/visages/stephanie.jpg",
    before: "Enseignante, 3 enfants",
    revenue: "Lancement en parallèle",
    duration: "3 mois de transformation",
    quote:
      "Je suis enseignante, ils nous envoient là où il y a des postes vacants. J'aime mon job mais je veux plus en être dépendante. La formation m'a fait un profond changement en 3 mois.",
  },
  william: {
    name: "William Berdat",
    age: 48,
    photo: "/images/visages/william.jpg",
    before: "Ex-burn-out, vit au Vietnam",
    revenue: "Premiers clients signés",
    duration: "9 mois après son démarrage",
    quote:
      "J'ai été en burn-out jusqu'en janvier. Aujourd'hui je suis au Vietnam, je décompresse, et j'ai mes premiers clients. C'est une autre vie, à 48 ans je redémarre tout autrement.",
  },
  lucas: {
    name: "Lucas Bricout",
    age: 23,
    photo: "/images/visages/lucas.jpg",
    before: "Ex-cuisinier 60-70h/sem, France",
    revenue: "5 à 6 000€/mois",
    duration: "Premier client en 10 jours de prospection",
    quote:
      "J'étais cuisinier, je devenais un zombie. Après avoir rejoint Agencilab j'ai fait un appel avec une entreprise, le mec a signé 3 000€ pour 2 sites. J'ai démissionné dans la semaine. Avec mon associé on a fait 5-6 000€/mois assez rapidement.",
  },
  andreas: {
    name: "Andréas Mirabel",
    age: null,
    // TODO : remplacer par /images/visages/andreas.jpg quand la photo sera ajoutée
    photo: "/images/visages/julien.jpg",
    before: "Lancement d'agence en remote",
    revenue: "≈ 17 500€/mois",
    duration: "105 000€ générés en 6 mois",
    quote:
      "105 000 euros en 6 mois. On est 8 dans l'équipe, tous en remote, je travaille en freelance et porteur d'affaires. Aujourd'hui je pourrais me barrer d'ici un mois, la boîte tournerait toute seule.",
  },
  christiane: {
    name: "Christiane Bilat",
    age: null,
    // TODO : remplacer par /images/visages/christiane.jpg quand la photo sera ajoutée
    photo: "/images/visages/marina.jpg",
    before: "Ex-acheteuse média horlogerie suisse",
    revenue: "≈ 12 500€/mois",
    duration: "15 clients à Lausanne",
    quote:
      "J'étais acheteuse média pour une grande entreprise d'horlogerie en Suisse. Le digital et l'IA ont tout changé, j'ai voulu devenir indépendante. Aujourd'hui je gère 15 clients depuis Lausanne.",
  },
};

export type Chapter = {
  num: string;
  slug: string;
  title: string;
  subtitle?: string;
  variant: "dark" | "marble";
  /**
   * Encart "exprime-toi" affiché en fin de chapitre. Si absent, pas d'input.
   * Les réponses sont sauvegardées en localStorage et envoyées au conseiller via Tally au quiz final.
   */
  reflection?: {
    question: string;
    louisExample: string;
  };
  content: (ctx: {
    closerLabel: string;
    closerSlug: string | null;
    rdvLabel: string;
    prenom: string | null;
  }) => React.ReactNode;
};

export const CHAPTERS: Chapter[] = [
  /* ============================================================
     01 — Identification émotionnelle
     ============================================================ */
  {
    num: "01",
    slug: "ta-situation",
    reflection: {
      question:
        "Et toi, qu'est-ce qui te gêne dans ta situation aujourd'hui ? Qu'est-ce qui t'a poussé à prendre cet appel avec {closer} ?",
      louisExample:
        "Pour moi c'était cette boule au ventre tous les dimanches soirs. Je savais que dans 5 ans, à ce rythme, je serais au même endroit.",
    },
    title: "Tu lis ça pour une raison.",
    subtitle:
      "Avant de te parler du Growth Marketing, parlons une seconde de toi.",
    variant: "dark",
    content: () => (
      <>
        <p className="text-balance">
          Si tu es arrivé jusqu'ici et que tu lis cette brochure, c'est
          probablement parce que <strong className="text-white">quelque
          chose ne va pas comme tu voudrais dans ta vie</strong>. Une
          sensation comme si tu n'étais pas à ta place, une gêne…
        </p>

        <p>Voici ce qu'on entend souvent dans nos appels de candidature :</p>

        <ul className="my-8 space-y-3">
          <IdentificationItem>
            « Le dimanche soir, je sens cette boule au ventre qui revient.
            Je sais que j'ai 5 jours à tenir avant de respirer. »
          </IdentificationItem>
          <IdentificationItem>
            « Je fais des calculs avant un resto. Je me dis « non » à un
            voyage parce que « ce n'est pas le bon moment ». Je reporte des
            trucs que je voudrais vivre maintenant. »
          </IdentificationItem>
          <IdentificationItem>
            « Je vois sur Instagram des gens partir en voyage 3 fois par
            an, je me demande comment ils font. »
          </IdentificationItem>
          <IdentificationItem>
            « Je gagne le même salaire chaque mois, avec une augmentation
            de 2% si j'ai de la chance à la fin de l'année. Je sens bien
            que ça ne décollera jamais à ce rythme. »
          </IdentificationItem>
          <IdentificationItem>
            « Je sais que je vaux plus que ce qu'on me paie. Je ne sais
            juste pas <strong>par où commencer pour changer ça</strong>. »
          </IdentificationItem>
        </ul>

        <p>
          Si au moins un de ces points te parle, tu es <strong>exactement la
          personne pour qui cette brochure a été écrite</strong>. Alors
          j'aimerais savoir&nbsp;:
        </p>

      </>
    ),
  },

  /* ============================================================
     02 — Social proof intro (témoignages grid)
     ============================================================ */
  {
    num: "02",
    slug: "ils-etaient-a-ta-place",
    reflection: {
      question:
        "Et toi, qu'est-ce que tu rêverais de faire si tu pouvais bosser d'où tu veux, quand tu veux et que tu n'avais plus jamais de problèmes d'argent ?",
      louisExample:
        "Moi à l'époque j'aurais répondu 'partir 3 mois en Asie sans regarder mon compte en banque'. C'est exactement ce que j'ai fait l'année dernière.",
    },
    title: "Ils étaient à ta place il y a moins d'un an.",
    subtitle:
      "Boulanger, gendarme, prof, comptable, étudiante, vendeur. Ils ont pris la même décision que tu es en train d'envisager.",
    variant: "marble",
    content: ({ closerLabel }) => (
      <>
        <p>
          Ce sont des Français normaux, qui partagent ce qu'ils faisaient
          avant et où ils en sont aujourd'hui, après avoir suivi le même
          accompagnement qu'on va te proposer lors de l'appel que tu as avec{" "}
          <strong className="text-navy-950">{closerLabel}</strong>.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          <TestimonialCard t={TESTIMONIALS.andreas} variant="marble" />
          <TestimonialCard t={TESTIMONIALS.christiane} variant="marble" />
          <TestimonialCard t={TESTIMONIALS.lucas} variant="marble" />
          <TestimonialCard t={TESTIMONIALS.kylian} variant="marble" />
          <TestimonialCard t={TESTIMONIALS.benjamin} variant="marble" />
          <TestimonialCard t={TESTIMONIALS.damien} variant="marble" />
        </div>

        <p className="mt-12">
          Ce sont 6 personnes parmi <strong>+1 018 Français accompagnés</strong>{" "}
          chez Agencilab depuis le lancement. Ils n'avaient aucun background
          marketing, aucun diplôme particulier, pas de famille fortunée. Juste
          une décision prise un jour, et la rigueur de s'y tenir avec les
          coachs dans Agencilab.
        </p>

        <Callout label="Le point commun">
          La majorité d'entre eux te diront qu'ils ont{" "}
          <strong>hésité avant de prendre l'appel</strong>. C'est normal. Ce
          qui les distingue de ceux qui sont encore coincés dans leur travail
          salarial, c'est qu'eux ont osé se faire accompagner et ont mis les
          actions en place pour réussir.
        </Callout>
      </>
    ),
  },

  /* ============================================================
     03 — C'est quoi le Growth Marketing
     ============================================================ */
  {
    num: "03",
    slug: "c-est-quoi",
    reflection: {
      question:
        "Et toi, c'est quoi ton POURQUOI pour te lancer dans cette activité ?",
      louisExample:
        "Le mien c'était de plus jamais avoir à demander la permission pour prendre une semaine off. Tout est parti de là.",
    },
    title: "L'activité qu'ils ont lancée.",
    subtitle: "Le Growth Marketing, en une définition claire.",
    variant: "dark",
    content: () => (
      <>
        <p className="text-balance">
          Le Growth Marketing, c'est l'activité qui consiste à{" "}
          <strong className="text-white">
            aider une entreprise à trouver plus de clients
          </strong>{" "}
          grâce à des leviers marketing et l'IA (site internet, tunnel de
          vente, Meta Ads, SEA, SEO, emails).
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

        <Callout label="Pour que tu puisses comprendre">
          Un kinésithérapeute est bon dans son métier. Mais si sa salle
          d'attente n'est jamais pleine, il ne peut pas en vivre
          correctement. C'est pour ça que des personnes avec les compétences
          marketing que tu vas développer sont d'une grande importance pour
          eux. Un Growth Marketer arrive, met en place un système{" "}
          <strong className="text-white">
            publicité → tunnel de vente → emails
          </strong>{" "}
          et le kiné voit sa patientèle exploser. C'est ça l'activité.
        </Callout>

        {/* Flowchart vertical : transformation de la PME (avant → système → après) */}
        <div className="my-12">
          <p className="mb-6 text-center text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gold-400">
            Ce que tu fais concrètement pour ton client
          </p>

          <div className="mx-auto max-w-[520px] space-y-0">
            {/* AVANT — PME en galère */}
            <FlowNode
              emoji="😓"
              label="Une PME qui galère à trouver des clients"
              tone="red"
              badge="Avant"
              rows={[
                { k: "Visibilité", v: "Quasi nulle" },
                { k: "Site web", v: "Vieux ou inexistant" },
                { k: "Pubs en ligne", v: "Aucune" },
              ]}
              caption="Le patron passe ses journées à chercher des clients à la main"
            />
            <FlowConnector />

            {/* PENDANT — Système Agencilab */}
            <FlowNode
              emoji="🛠️"
              label="Tu mets en place le système Agencilab"
              tone="accent"
              badge="Pendant · 2 à 4 semaines"
              rows={[
                { k: "Étape 1", v: "Site / tunnel de vente" },
                { k: "Étape 2", v: "Ads Meta · Google · TikTok" },
                { k: "Étape 3", v: "Système d'emails et de relance" },
              ]}
            />
            <FlowConnector />

            {/* APRÈS — PME en croissance */}
            <FlowNode
              emoji="📈"
              label="La PME a un flow de clients continu"
              tone="gold"
              big
              badge="Après · ça tourne"
              rows={[
                { k: "Prospects / mois", v: "+ 30 à + 200" },
                { k: "Chiffre d'affaires", v: "En hausse continue" },
                { k: "Charge mentale", v: "Le patron respire" },
              ]}
            />
          </div>

          {/* Punchline du modèle de récurrence */}
          <div
            className="mx-auto mt-6 max-w-[680px] rounded-2xl border-2 border-gold-400/40 bg-gold-400/[0.06] p-5 backdrop-blur-sm md:p-6"
            style={{ boxShadow: "0 0 30px rgba(255, 122, 0, 0.12)" }}
          >
            <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-gold-400">
              Pourquoi la PME continue de te payer chaque mois
            </p>
            <p className="text-[0.9375rem] leading-[1.55] text-white md:text-[1rem]">
              Le système que tu installes n&apos;est pas un coup unique. Les
              pubs tournent en continu, les emails s&apos;envoient
              automatiquement, le site doit rester à jour. Tant que tu gères
              et optimises tout ça,{" "}
              <strong className="text-white">
                la PME continue de recevoir des clients chaque mois
              </strong>{" "}
              — et continue de te payer en récurrent. Si tu coupes, le flow
              s&apos;arrête.
            </p>
          </div>

          {/* Punchline finale sur ton revenu */}
          <p className="mt-5 text-center text-[0.875rem] text-white/60 md:text-[0.9375rem]">
            Avec <strong className="text-white">4 à 6 PME</strong> que tu
            accompagnes en parallèle, tu construis un revenu récurrent stable
            de <strong className="text-gold-400">3 000 à 8 000€/mois</strong>.
          </p>
        </div>

        <h3 className="mt-10 text-[1.125rem] font-bold text-white md:text-[1.25rem]">
          Ce que ce n'est PAS
        </h3>
        <ul className="mt-4 space-y-2">
          <NotItem>
            Du <strong>dropshipping</strong> : tu ne vends pas de produits
            physiques mais des services
          </NotItem>
          <NotItem>
            Du <strong>SMMA</strong> : tu n'es pas une agence mais un
            indépendant expert en marketing
          </NotItem>
          <NotItem>
            Du <strong>trading</strong> ou de la crypto : tu ne joues pas
            ton argent
          </NotItem>
          <NotItem>
            Du <strong>MLM</strong> : tu n'as pas besoin de recruter tes
            proches pour faire de l'argent
          </NotItem>
          <NotItem>
            Du <strong>SaaS</strong> : tu n'as pas besoin de créer de
            logiciel, Agencilab te fournit tout
          </NotItem>
        </ul>
      </>
    ),
  },

  /* ============================================================
     04 — Pourquoi maintenant
     ============================================================ */
  {
    num: "04",
    slug: "pourquoi-maintenant",
    reflection: {
      question:
        "Pourquoi tu n'as pas saisi cette opportunité plus tôt selon toi ?",
      louisExample:
        "Beaucoup me disent 'je savais pas que ça existait'. Normal, personne ne te montre cette option à l'école.",
    },
    title: "Pourquoi 2026 est le bon moment.",
    subtitle: "Trois chiffres qui expliquent l'opportunité.",
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
          une formation). Ici, <strong>la demande va rester durable</strong>{" "}
          tant qu'il y aura des entreprises qui cherchent des clients.
        </p>

        <QuoteCard
          photo={TESTIMONIALS.kylian.photo}
          name={TESTIMONIALS.kylian.name}
          role={`${TESTIMONIALS.kylian.before} · ${TESTIMONIALS.kylian.revenue} (${TESTIMONIALS.kylian.duration})`}
          quote="[TODO citation Kylian Surget — bilan 4 clients en 6 semaines + 35k€ drop, à extraire du transcript dans Obsidian]"
          variant="marble"
        />

        <Callout label="Bon à savoir">
          Cette demande n'est pas une mode. Tant qu'il y aura des entreprises
          qui cherchent des clients (donc toujours), il y aura besoin de
          Growth Marketers pour les aider à en trouver.
        </Callout>
      </>
    ),
  },

  /* ============================================================
     05 — Le quotidien (lifestyle émotionnel)
     ============================================================ */
  {
    num: "05",
    slug: "leur-quotidien",
    reflection: {
      question:
        "Si tu pouvais avoir cette journée demain, à quoi ressemblerait ton lundi idéal ?",
      louisExample:
        "Mon lundi rêvé c'est bosser 3h le matin, salle de sport vers midi, puis temps libre. Pas plus compliqué que ça.",
    },
    title: "À quoi ressemble leur vie aujourd'hui.",
    subtitle: "Pas de bureau, pas d'horaires, pas de patron. Voilà concrètement.",
    variant: "dark",
    content: () => (
      <>
        <p>
          Sur le papier, ça parle d'algorithmes et de funnels. Dans la vraie
          vie, voilà à quoi ressemble une journée type d'un Growth Marketer
          indépendant accompagné par Agencilab.
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

        <QuoteCard
          photo={TESTIMONIALS.william.photo}
          name={TESTIMONIALS.william.name}
          role={`${TESTIMONIALS.william.before}, 48 ans`}
          quote="[TODO citation William Berdat — bilan ex-burn-out à 48 ans, vit aujourd'hui au Vietnam, à extraire du transcript Obsidian]"
        />

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
     06 — Combien ils gagnent
     ============================================================ */
  {
    num: "06",
    slug: "revenus",
    reflection: {
      question:
        "À quel revenu mensuel tu signerais demain pour quitter ton emploi actuel ?",
      louisExample:
        "Pour beaucoup d'élèves c'est 3 500€ net qui fait basculer. Mais le bon chiffre, c'est le tien.",
    },
    title: "Combien ils gagnent vraiment.",
    subtitle: "Les fourchettes réelles observées sur le terrain.",
    variant: "marble",
    content: () => (
      <>
        {/* Row de visages — uniquement les vrais témoignages du catalogue TESTIMONIALS */}
        <div className="mb-8 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
          <div className="flex -space-x-2.5">
            {Object.values(TESTIMONIALS).map((t) => (
              <div
                key={t.name}
                className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-navy-950 md:h-11 md:w-11"
                style={{ boxShadow: "0 2px 8px rgba(5, 10, 20, 0.15)" }}
                title={t.name}
              >
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-[0.875rem] leading-[1.4] text-navy-950/75 md:text-left md:text-[0.9375rem]">
            sur <strong className="text-navy-950">+1 018 personnes</strong>{" "}
            accompagnées.
          </p>
        </div>

        <p>
          Les revenus dépendent du niveau, du nombre de clients gérés et du
          positionnement. Voilà les fourchettes observées sur les +1 018
          personnes accompagnées chez Agencilab.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <RevenueCard
            level="Débutant"
            range="1 000 à 3 000€"
            sub="par mois"
            detail="0 à 2 mois après le démarrage. 1 à 2 clients à 800-1 500€."
            tier="entry"
            variant="marble"
          />
          <RevenueCard
            level="Intermédiaire"
            range="3 000 à 8 000€"
            sub="par mois"
            detail="2 à 9 mois après le démarrage. 3-4 clients à 1 000-2 000€."
            tier="mid"
            variant="marble"
          />
          <RevenueCard
            level="Confirmé"
            range="8 000 à 15 000€"
            sub="par mois"
            detail="12 mois et plus. 4-6 clients à 2 000-3 500€, certains à la performance."
            tier="top"
            variant="marble"
          />
        </div>

        <p className="mt-10">
          La moyenne nationale sur l'accompagnement Agencilab tourne autour
          de <strong>+2 987€ par mois</strong> après 6 mois d'activité
          sérieuse. C'est plus que la médiane salariale française nette, en
          ne travaillant souvent qu'une vingtaine d'heures par semaine.
        </p>

        <h3 className="mt-12 mb-6 text-[1.125rem] font-bold text-navy-950 md:text-[1.25rem]">
          Quelques chiffres concrets d'élèves
        </h3>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          <TestimonialCard t={TESTIMONIALS.andreas} variant="marble" />
          <TestimonialCard t={TESTIMONIALS.christiane} variant="marble" />
          <TestimonialCard t={TESTIMONIALS.lucas} variant="marble" />
          <TestimonialCard t={TESTIMONIALS.kylian} variant="marble" />
          <TestimonialCard t={TESTIMONIALS.benjamin} variant="marble" />
          <TestimonialCard t={TESTIMONIALS.damien} variant="marble" />
        </div>

        <Callout label="Important sur le pricing">
          Tes clients ne te paient pas pour ton temps, ils te paient pour
          leurs résultats. C'est pour ça qu'un Growth Marketer peut générer
          plus de revenus en 20h/semaine qu'un salarié en 35h.
        </Callout>
      </>
    ),
  },

  /* ============================================================
     07 — Les 5 compétences
     ============================================================ */
  {
    num: "07",
    slug: "competences",
    reflection: {
      question:
        "Laquelle de ces 5 compétences te parle le plus aujourd'hui ?",
      louisExample:
        "Moi j'ai commencé par les ads, parce que c'est le plus mesurable : on voit direct si ça marche ou pas.",
    },
    title: "Les 5 compétences qu'on leur enseigne.",
    subtitle: "Cinq piliers qui s'empilent pour créer un système robuste.",
    variant: "dark",
    content: () => (
      <>
        <p>
          Le Growth Marketing repose sur 5 piliers complémentaires. Chacun
          peut générer des résultats seul, mais c'est leur empilement qui
          crée un système robuste et défendable.
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

        <p className="mt-10">
          Tu ne dois pas être expert sur les 5 dès le premier jour. La
          plupart des élèves commencent par maîtriser 1 pilier, signent leur
          premier client dessus, puis ajoutent les autres compétences au fur
          et à mesure.
        </p>
      </>
    ),
  },

  /* ============================================================
     08 — Comment Agencilab accompagne (méthode + photos)
     ============================================================ */
  {
    num: "08",
    slug: "lancer",
    reflection: {
      question:
        "Quel est ton plus gros blocage ou ta plus grosse peur avant de te lancer ?",
      louisExample:
        "La peur que j'entends le plus c'est 'et si je n'y arrive pas ?'. C'est légitime. C'est exactement pour ça que la garantie existe.",
    },
    title: "Comment Agencilab les a accompagnés.",
    subtitle: "Tu n'avances jamais seul. Voilà les 5 étapes du programme.",
    variant: "marble",
    content: () => (
      <>
        <p>
          L'accompagnement Agencilab dure entre 3 et 12 mois selon ton rythme
          et tes objectifs. Voilà concrètement ce qui se passe.
        </p>

        <div className="mt-10 space-y-3">
          <StepCard
            num="01"
            title="Le call de découverte avec ton conseiller"
            desc="C'est l'étape où tu es. Tu discutes 45 minutes avec un membre de l'équipe pour cadrer ta situation, tes objectifs, et voir si Agencilab est fait pour toi. Sérieux uniquement."
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
            desc="Tu lances la prospection, tu signes ton premier client, tu livres tes premiers résultats. L'équipe t'accompagne sur chaque étape sensible."
          />
          <StepCard
            num="05"
            title="La phase scale (mois 3+)"
            desc="Tu enchaînes les clients, tu augmentes tes tarifs, tu construis un revenu stable. L'objectif : vivre de cette activité dans les 3 premiers mois."
          />
        </div>

        <h3 className="mt-14 mb-2 text-[1.25rem] font-bold text-navy-950 md:text-[1.5rem]">
          Tu n'avances jamais seul
        </h3>
        <p className="mb-8 text-navy-950/65">
          Séminaires en présentiel, coachings collectifs, accompagnement 1-1.
          Le programme est conçu pour que tu sois entouré à chaque étape.
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          <PhotoTile
            src="/images/seminaire/groupe.jpg"
            alt="Séminaire Agencilab en groupe"
            caption="Séminaire annuel à Lyon"
          />
          <PhotoTile
            src="/images/seminaire/coaching.jpg"
            alt="Session de coaching"
            caption="Coaching 1-1 avec un mentor"
          />
          <PhotoTile
            src="/images/seminaire/duo.jpg"
            alt="Échange entre élèves"
            caption="Travail en binôme entre élèves"
          />
          <PhotoTile
            src="/images/seminaire/presentation.jpg"
            alt="Présentation Louis Esquier"
            caption="Masterclass Louis Esquier"
          />
        </div>

        <div
          className="mt-12 rounded-2xl border-2 border-accent-400/50 bg-accent-400/[0.06] p-6 md:p-8"
          style={{ boxShadow: "0 0 40px rgba(1, 95, 255, 0.12)" }}
        >
          <p className="mb-3 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-accent-400">
            Garantie contractuelle
          </p>
          <p className="text-[1rem] leading-[1.6] text-navy-950 md:text-[1.0625rem]">
            Agencilab te garantit{" "}
            <strong>de vivre de cette activité en 3 mois</strong> ou tu es
            accompagné gratuitement jusqu'à ce que ce soit le cas. Cette
            garantie est{" "}
            <strong>rédigée par un avocat en droit des affaires</strong> et
            inscrite noir sur blanc dans ton contrat d'accompagnement.
          </p>
        </div>
      </>
    ),
  },

  /* ============================================================
     09 — Coût de l'inaction (émotionnel trigger)
     ============================================================ */
  {
    num: "09",
    slug: "le-cout-de-rien-changer",
    reflection: {
      question:
        "Si rien ne change dans 12 mois, qu'est-ce que tu auras raté à ton avis ?",
      louisExample:
        "À l'époque pour moi, ça aurait été de rater un voyage de 3 mois avec ma copine. C'est ça qui m'a vraiment décidé à bouger.",
    },
    title: "Si tu ne fais rien, voilà ta vie dans 12 mois.",
    subtitle: "Le coût de l'inaction est rarement compté. Mais il existe.",
    variant: "dark",
    content: () => (
      <>
        <p className="text-balance">
          On parle souvent du coût d'un accompagnement. On parle rarement{" "}
          <strong className="text-white">du coût de ne rien changer</strong>.
          Pourtant, c'est probablement le calcul le plus important que tu
          puisses faire avant ton appel.
        </p>

        <h3 className="mt-10 mb-4 text-[1.125rem] font-bold text-white md:text-[1.25rem]">
          Imagine-toi le 1er janvier 2027
        </h3>
        <p>12 mois plus tard. Si tu ne changes rien aujourd'hui :</p>

        <ul className="my-8 space-y-3">
          <IdentificationItem>
            Tu auras gagné <strong>le même salaire</strong>, environ 24 000€
            net cumulé sur l'année.
          </IdentificationItem>
          <IdentificationItem>
            Tu auras eu <strong>une augmentation de 2%</strong> si tu as eu
            de la chance, soit environ 480€ sur l'année.
          </IdentificationItem>
          <IdentificationItem>
            Tu auras posé <strong>5 semaines de congés</strong>, peut-être 6.
            Tu auras justifié chaque jour à un patron.
          </IdentificationItem>
          <IdentificationItem>
            Tu auras passé <strong>1 820 heures</strong> (35h × 52) à faire
            un job qui ne t'épanouit plus.
          </IdentificationItem>
          <IdentificationItem>
            Et le 1er janvier 2027, tu te poseras{" "}
            <strong>exactement les mêmes questions qu'aujourd'hui</strong>.
          </IdentificationItem>
        </ul>

        <h3 className="mt-12 mb-4 text-[1.125rem] font-bold text-white md:text-[1.25rem]">
          Pendant ce temps, dans la même période
        </h3>
        <p>
          Florent, Yohann, Marina, Clément ont fait quelque chose de
          radicalement différent.
        </p>

        <ul className="my-8 space-y-3">
          <IdentificationItem>
            Ils ont appris une compétence rare en{" "}
            <strong>2 à 3 mois sérieux d'apprentissage</strong>.
          </IdentificationItem>
          <IdentificationItem>
            Ils ont signé leur <strong>premier client en moyenne au 75e jour
            après le démarrage</strong>.
          </IdentificationItem>
          <IdentificationItem>
            Ils ont atteint, en moyenne, <strong>+2 987€/mois</strong> à la
            fin de la première année.
          </IdentificationItem>
          <IdentificationItem>
            Ils ont arrêté de regarder leur compte en banque avant chaque
            décision.
          </IdentificationItem>
        </ul>

        <Callout label="Le coût réel">
          Sur 12 mois, l'écart entre rester salarié à 1 850€/mois et atteindre
          +2 987€/mois représente <strong>environ +13 600€ cumulés</strong> sur
          l'année. Plus que le prix de n'importe quel accompagnement. Sans
          parler du temps, de la liberté et de l'estime de soi.
        </Callout>

        <p className="mt-10">
          Le seul truc qui change entre Florent, Yohann, Marina et toi
          aujourd'hui ?{" "}
          <strong className="text-white">Ils ont pris l'appel.</strong> Tu en
          as un de prévu. Le seul truc à faire maintenant, c'est répondre au
          quiz pour qu'on en tire le maximum.
        </p>
      </>
    ),
  },

];
