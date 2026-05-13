import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de Nathan Dupouy (transcrit par Whisper).
 *
 * Source : Témoignages/Nathan Dupouy.md (28:55)
 *
 * ⚠️ Note : Nathan est en début de parcours (156 mails, 0 client signé encore).
 * Le récit met en avant la résilience post-blessure militaire, la détermination
 * et la trajectoire d'apprentissage plutôt que des chiffres d'outcome.
 *
 * À valider avant publication :
 * - [ ] Validation par Nathan
 * - [ ] Ajouter la photo dans /public/images/reussites/nathan-dupouy.jpg
 * - [ ] Remplacer le placeholder vidéo
 */
const reussite: Reussite = {
  slug: "nathan-dupouy",
  name: "Nathan Dupouy",
  outcomeHeadline:
    "D'ex-militaire blessé et rapatrié à Growth Marketer en lancement : 156 mails envoyés pour ouvrir la voie",
  photo: "/images/reussites/nathan-dupouy.jpg",
  oldJob: "Ex-militaire (rapatrié blessé)",
  city: "Bordeaux",

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement : lancement de DigiNet Agency après l'armée",
    },
  ],

  parcoursAvant: [
    "Nathan a fait un baccalauréat STMG en marketing et a toujours eu une fibre commerciale forte. Il s'est inscrit en BTS vente en alternance après le bac, mais son alternance s'est mal passée et il a interrompu pour s'engager dans l'armée. Il y a servi deux ans, dont une mission en Côte d'Ivoire.",
    "C'est là que sa vie a basculé : il s'est blessé au dos pendant la mission. L'absence de gros accident a fait que sa blessure n'a pas été reconnue comme accident de travail, donc pas d'indemnité. Six mois de rééducation à ses frais. Et au moment où il a tenté de reprendre en intérim, il s'est luxé l'épaule (deux mois de rééducation supplémentaires).",
    "Au-delà du physique, il y a une situation administrative dure : pendant son arrêt maladie, il a continué à toucher sa paye de mission, et l'État lui réclame désormais le remboursement (la dette atteint 3 300€). Au chômage à 900€/mois, vivant chez ses beaux-parents, sans logement à lui, Nathan a pris la décision de se lancer dans le Growth Marketing avec Agencilab en payant l'accompagnement en 5 fois (399€/mois). Pour lui, c'est moins un choix qu'une nécessité.",
  ],

  parcoursMaintenant: [
    "Nathan vit aujourd'hui à Bordeaux et a lancé son activité sous le nom DigiNet Agency. Il s'est positionné principalement sur l'email marketing en complément de Google Ads. Sa zone géographique : la Nouvelle-Aquitaine, pour pouvoir se déplacer si besoin chez les prospects.",
    "Sa première phase a été quantitative : 156 emails de prospection envoyés sur 4 semaines, touchant différentes niches (paysagistes, architectes, fitness, yoga, constructeurs de piscines, photographes, coaching, formations, et désormais campings et hôtels). Sur ces 156 mails : aucune signature pour l'instant, 3 réponses polies négatives, le reste sans réponse. C'est une réalité dure mais nécessaire de la prospection à froid.",
    "Le diagnostic post-bilan : l'email marketing fonctionne mieux sur des entreprises en ligne que sur du local. Et l'inadéquation entre la niche et le service explique en grande partie l'absence de signature. Le pivot stratégique en cours : se concentrer sur Google Ads (où il a déjà des notions techniques) ou Facebook Ads pour ses cibles locales, et garder l'email marketing pour de potentiels clients en ligne identifiés différemment.",
    "Ce qui fait la force de Nathan dans ce parcours : la motivation. Sa dette à l'État, sa situation chez ses beaux-parents, le moment où il a hésité à acheter des chaussures à 15€, tout ça crée une pression interne qui ne lâche pas. Il a tenu 156 mails là où beaucoup auraient lâché à 30. Il a déjà fait le plus dur : passer le cap psychologique de la prospection régulière.",
  ],

  qa: [
    {
      question: "Tu peux te présenter et raconter comment tu en es arrivé là ?",
      answer: [
        "J'ai 22 ans environ. J'ai fait un bac STMG marketing, puis BTS vente en alternance qui s'est mal passé, donc je suis parti à l'armée. J'y ai fait deux ans, dont une mission en Côte d'Ivoire. Je me suis blessé au dos pendant la mission et j'ai été rapatrié. Six mois de rééducation. Puis en reprenant en intérim, je me suis luxé l'épaule, encore deux mois de rééducation.",
        "Aujourd'hui je suis à Bordeaux, je vis chez mes beaux-parents, je suis au chômage à 900€/mois et je dois 3 300€ à l'État pour des questions de salaires perçus pendant ma mission. Le déclic c'est qu'il fallait que je me lance maintenant. J'ai pris Agencilab en paiement 5 fois à 399€/mois et j'ai créé DigiNet Agency.",
      ],
    },
    {
      question: "Qu'est-ce qui te motive le plus à réussir ?",
      answer: [
        "L'argent c'est tabou dans beaucoup de familles mais chez moi c'est ma motivation #1. Il y a deux semaines, j'ai hésité à m'acheter des chaussures à 15€. À 22 ans, ne plus pouvoir s'offrir ça, c'est une motivation qui ne lâche pas. Je dois rembourser ma dette à l'État, me trouver un logement à moi, et arrêter de dépendre de mes beaux-parents.",
        "Et il y a aussi la liberté. Travailler sur un ordinateur, c'est aussi un moyen de protéger mon dos et mon épaule de futurs accidents. Le travail manuel ne m'est plus possible pour des questions de santé. Donc le Growth Marketing n'est pas juste un choix, c'est une nécessité pratique. C'est ce qui crée une motivation très forte.",
      ],
    },
    {
      question: "156 mails de prospection, 0 client signé encore : comment tu vis ça ?",
      answer: [
        "C'est dur, je ne vais pas mentir. À chaque mail sans réponse, tu te demandes si c'est ton message qui ne va pas, ta démarche, ton offre. Tu te remets en question en permanence et au niveau moral c'est compliqué.",
        "Mais je sais que c'est aussi mathématique. J'ai contacté beaucoup d'entreprises locales (architectes, paysagistes, hôtels, campings) avec une offre d'email marketing. Or l'email marketing fonctionne mieux sur les activités en ligne pures. Donc je suis en train de pivoter mon offre : Google Ads ou Facebook Ads pour les entreprises locales, et garder l'email marketing pour quand j'aurai identifié des clients en ligne. Une fois cette correction faite, je devrais voir un changement net.",
      ],
    },
    {
      question: "Qu'est-ce que tu as le plus apprécié dans Agencilab ?",
      answer: [
        "Trois choses qui me reviennent. Premièrement, les vidéos. Elles sont vraiment claires, on apprend des choses concrètes, pas du blabla pour faire joli. C'est carré, ça construit progressivement.",
        "Deuxièmement, la partie 1 sur le mindset. Quand t'es dans ma situation, c'est cette partie qui te permet de tenir psychologiquement. Sans elle, je pense que j'aurais lâché. Et troisièmement, l'encouragement et le suivi de la communauté. Quand tu es au plus bas un soir, tu vois qu'il y a d'autres personnes qui passent par la même chose et qui se soutiennent. Ça pousse à continuer.",
      ],
    },
    {
      question: "Qu'est-ce que tu dirais à quelqu'un dans une situation comme la tienne qui hésite à investir ?",
      answer: [
        "Il faut sauter le pas. Moi je suis au chômage à 900€/mois et j'ai dû prendre l'option paiement en 5 fois pour pouvoir payer 399€/mois. Avec mon assurance voiture et le crédit auto en plus, c'est tendu sur mon budget. Mais je me suis dit : si je n'y vais pas maintenant, je ne pourrais pas me former, je vais continuer à galérer.",
        "L'investissement sur soi c'est le plus important. La formation c'est l'élément déclencheur dans le cerveau qui te fait sortir de la stagnation. Si on attend d'avoir les fonds parfaits pour se lancer, on ne se lance jamais. Mieux vaut sauter le pas avec ce qu'on a, faire le travail nécessaire, et construire petit à petit. C'est ce que j'ai fait, c'est ce qui me sortira de ma situation.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: false,
};

export default reussite;
