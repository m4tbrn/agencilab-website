import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de William Berdat (transcrit par Whisper).
 *
 * Source : Témoignages/William Berdat.md (19:46)
 *
 * ⚠️ Note : William est dans une phase de reconstruction après burn-out.
 * Outcome modeste à ce stade (3 clients dont 2 en stand-by). Le récit
 * met en avant la résilience, l'expatriation et la spécialisation Google Ads.
 *
 * À valider avant publication :
 * - [ ] Validation par William
 * - [ ] Ajouter la photo dans /public/images/reussites/william-berdat.jpg
 * - [ ] Remplacer le placeholder vidéo
 */
const reussite: Reussite = {
  slug: "william-berdat",
  name: "William Berdat",
  outcomeHeadline:
    "À 48 ans, de sortie de burn-out à Growth Marketer expatrié au Vietnam, spécialisé Google Ads",
  photo: "/images/reussites/william-berdat.jpg",
  oldJob: "Agent technique digital marketing (Google)",
  city: "Pologne → Vietnam",
  age: 48,

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement : reconstruction après burn-out à 48 ans",
    },
  ],

  parcoursAvant: [
    "William a 48 ans. Il vit habituellement en Pologne et travaille comme agent technique en digital marketing, spécialisé sur les produits Google : implémentation Google Ads, cloud computing, optimisation technique. Un emploi pointu mais qui le menait progressivement vers un burn-out.",
    "Le contexte au moment de rejoindre Agencilab : un système salarial qui l'épuisait nerveusement, une volonté de construire pour sa retraite (à 48 ans, l'urgence financière est différente qu'à 25), et le besoin de retrouver de la liberté géographique. Il a découvert Louis sur YouTube et a rejoint l'incubateur en avril 2025, en investissant 3 000€ dans l'accompagnement.",
    "Ses peurs au démarrage étaient honnêtes : est-ce que ça va vraiment m'aider, est-ce que ça va m'apporter des outils. La réponse a été inattendue : c'est surtout en investissant cet argent qu'il s'est obligé à se lancer sérieusement. Le programme lui a apporté de la structure et de la motivation au moins autant que des outils techniques.",
  ],

  parcoursMaintenant: [
    "William a basculé en burn-out fin 2025 et a pris un long congé thérapeutique. Il est actuellement au Vietnam à Hô Chi Minh ville pour décompresser après un congé prolongé. Il revient progressivement à plein régime et envisage une expatriation durable dans une zone à fiscalité avantageuse (Vietnam, île Maurice, etc.).",
    "Sa spécialisation reste son cœur d'expertise technique : Google Ads, optimisation, cloud computing. Il s'est rapproché d'un partenaire (juriste expert SEO) pour livrer une prestation complète : son partenaire optimise le SEO du site client, lui prend le relais avec une campagne Google Ads qui se greffe par-dessus pour maximiser le ROI. Sans bon SEO, les campagnes Google Ads coûtent cher. Avec un bon SEO en amont, les campagnes Google Ads se catalysent.",
    "Outcome direct : 3 clients touchés sur la période. Un premier client serrurier à Nantes (1 500€) qui a stoppé en septembre 2025 pour des raisons économiques (concurrence intense dans son secteur). Un deuxième client suisse dans le secteur des piscines (3 300 CHF avec conversion moyenne 1 000-4 000 CHF) en stand-by depuis janvier 2026 pour cause de saisonnalité hivernale. Une intervention technique de consultation à 50€. Total récupéré sur les 3 000€ d'investissement initial : environ 2 000€.",
    "Sa stratégie d'avenir pivot : ne plus dépendre de la prospection téléphonique (qu'il déteste et qui le draine), mais s'appuyer sur deux canaux : son réseau de partenaires (le juriste SEO, des contacts pro accumulés via son emploi Google) et la communauté Agencilab pour trouver d'autres membres qui prospectent et auraient besoin d'un spécialiste Google Ads pour livrer.",
  ],

  qa: [
    {
      question: "À 48 ans et en sortie de burn-out, qu'est-ce qui t'a poussé à rejoindre Agencilab ?",
      answer: [
        "C'est en regardant une de tes vidéos sur YouTube. Mon ressenti par rapport à la société occidentale et le besoin de me préoccuper de mon avenir, surtout à 48 ans où l'urgence financière est différente : il faut commencer à construire ma retraite sérieusement. Je ne peux plus me dire « j'ai le temps ».",
        "Mes doutes au démarrage c'étaient : est-ce que ça va vraiment m'aider, est-ce que ça va m'apporter des outils concrets. En réalité, ce qui m'a aidé n'était pas tellement les outils (j'avais déjà le bagage technique) mais la motivation. Le simple fait d'investir 3 000€ m'a obligé à me lancer sérieusement. C'est comme si j'avais investi dans ma propre motivation, ça a marché.",
      ],
    },
    {
      question: "Tu es spécialisé en Google Ads et cloud, mais tu n'aimes pas prospecter. Comment tu fais ?",
      answer: [
        "La prospection téléphonique, passer 50 appels par jour, ça m'a toujours rebuté. Et avec mon emploi en parallèle, je n'ai pas non plus le temps. Donc j'ai construit autrement : par mon réseau et par les partenariats. J'ai trouvé un juriste expert SEO avec qui je m'associe : il fait le SEO d'un site, moi je viens greffer la campagne Google Ads par-dessus. Sans SEO solide, les campagnes Google Ads coûtent une fortune. Ensemble on apporte le double impact.",
        "Mon autre source : mon emploi actuel chez Google. Quand des clients ont besoin d'aide supplémentaire en dehors du cadre de mon poste, je leur propose mes services en direct. C'est comme ça que je récupère mes meilleurs clients, parce que la confiance est déjà établie.",
      ],
    },
    {
      question: "Tes 2 clients qui ont arrêté : qu'est-ce que tu en retires ?",
      answer: [
        "Un serrurier à Nantes qui a stoppé en septembre pour raisons économiques. Même avec une campagne Google Ads bien menée, sa concurrence locale était trop violente, on n'a pas réussi à inverser la tendance. Un client suisse dans la piscine en stand-by depuis janvier pour cause de saisonnalité hivernale (les gens ne pensent pas à leur piscine en plein hiver).",
        "Ce que j'en retiens : on ne maîtrise jamais 100% du résultat client. Tu peux faire un travail impeccable techniquement, si le marché ou la saison sont contre toi, tu vas peiner. Donc il faut choisir des niches plus stables, moins saisonnières, moins exposées à la concurrence locale brutale.",
      ],
    },
    {
      question: "Tu pars vivre dans les tropiques. Pourquoi maintenant ?",
      answer: [
        "Pour la qualité de vie. Le Vietnam, l'île Maurice, ces zones-là sont fiscalement intéressantes et l'humeur de tout le monde change quand le climat suit. J'ai fait l'île Maurice le mois dernier, je suis au Vietnam pour deux semaines déjà. La direction est claire : transposer mon activité Growth Marketing où que je sois dans le monde, idéalement sous les tropiques.",
        "C'est ce que je souhaitais en rejoignant Agencilab : pouvoir construire quelque chose qui ne dépende pas de ma localisation géographique. À 48 ans, après un burn-out, j'ai besoin de retrouver un cap qui me corresponde, et ce cap c'est aussi un cadre de vie agréable, pas juste un revenu.",
      ],
    },
    {
      question: "Qu'est-ce que tu retiens de Agencilab ?",
      answer: [
        "La première semaine. C'est là qu'on se démarre, qu'on pose les fondations, les outils, les démarches concrètes. C'est ça qui m'a vraiment aidé à passer le cap. Quand tu n'as pas le déclic du démarrage, tu ne fais rien. Cette première semaine donne le déclic.",
        "Et les coachings d'infanterie avec Nathan en août étaient très bien aussi, surtout sur la partie technique commerciale. Mais j'avoue que je n'ai pas été un élève assidu : entre mon emploi salarié et la fatigue nerveuse, je n'ai pas suivi autant que j'aurais pu. La leçon que j'en tire pour quelqu'un qui démarre : profite à fond de l'accompagnement, des appels, des infanteries, de la communauté. C'est là que la vraie valeur se trouve.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: false,
};

export default reussite;
