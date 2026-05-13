import type { Reussite } from "../types";

/**
 * Source : Témoignages/Infanteries/Damien.md (17:05)
 * Note : Damien (prénom seul) — différent de Damien Botella. Profil ex-paysagiste reconverti.
 */
const reussite: Reussite = {
  slug: "damien-infanteries",
  name: "Damien (Infanteries)",
  outcomeHeadline:
    "D'ex-paysagiste à 8-9 ans avec 2 enfants à Growth Marketer : 1er site signé à 800€ + 100€/mois Google Business",
  photo: "/images/reussites/damien.jpg",
  oldJob: "Ex-paysagiste (8-9 ans, à son compte)",
  city: "Ballarup (Montpellier)",
  age: 27,

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Témoignage Infanteries : 1er site signé après ex-vie de paysagiste",
    },
  ],

  stats: [
    { label: "1er site signé", value: "800€" },
    { label: "Récurrent Google Business", value: "100€/mois" },
    { label: "Temps pour faire un site", value: "1 journée" },
  ],

  parcoursAvant: [
    "Damien a 27 ans et vit dans le sud, près de Montpellier. Il a fait un CAP paysagiste et s'est lancé à son compte en auto-entreprise dans les jardins pendant 8-9 ans. Il travaillait 40-50 heures par semaine pour environ 2 000€/mois (charges incluses), avec deux enfants à la maison.",
    "Le constat : niveau client en chute (inflation, gens qui font eux-mêmes leur jardin), prix matières premières qui montent. Il a senti l'avenir basculer vers internet et a découvert Agencilab via un autre YouTubeur qui partageait les vidéos de Louis. Au démarrage : il n'avait jamais touché un ordinateur, il a dû s'en acheter un.",
  ],

  parcoursMaintenant: [
    "Damien s'est positionné sur la création de sites internet (avec ses 8-9 ans de boulot manuel, internet était tout neuf). Il a démarré la formation en mai 2025 puis bloqué un moment pour raisons personnelles. Reprise active fin juillet/août.",
    "Avec les Infanteries : déclic. Il a signé son 1er site à 800€ avec sa cliente le matin du témoignage, et un complément Google Business à 100€/mois. La technique du site web (lui montrer son site web avant de discuter prix) a marché du premier coup. Il a 2 rendez-vous prévus le lendemain. Et le plus impressionnant : une journée de travail pour faire un site complet, là où avant 2-3 jours minimum.",
  ],

  qa: [
    {
      question: "Tu travaillais 50h/semaine pour 2 000€/mois en paysagisme. Aujourd'hui ?",
      answer: [
        "Aujourd'hui je facture 800€ pour un site qui me prend une journée à faire. C'est un tiers de mon ancien CA mensuel en 1 jour de travail. Ça paraît irréel quand tu compares.",
        "Et c'est pas une question de chance, c'est juste que les compétences que j'ai acquises avec l'accompagnement valent ça. Avant je ne savais même pas allumer un ordinateur correctement. Aujourd'hui je crée un site web carré, je gère Google My Business, je sais prospecter.",
      ],
    },
    {
      question: "Les Infanteries ont été un tournant pour toi : pourquoi ?",
      answer: [
        "Avant, j'essayais de faire 6 missions à la fois et je me dispersais. Les Infanteries me donnent une mission par semaine et je m'y concentre. C'est là que j'ai vu un résultat incroyable : juste en me focalisant sur une seule mission claire, j'ai produit plus en une semaine que sur 3 mois avant.",
        "Et le petit groupe d'Infanterie, c'est différent de la communauté générale. On est 5-6, on se sent moins intimidé pour parler, on construit ensemble. C'est ça qui m'a remis en mouvement.",
      ],
    },
    {
      question: "Tu dirais quoi à un autre artisan/manuel qui hésite ?",
      answer: [
        "Faut passer à l'action. C'est seulement en se lançant qu'on voit ce dont on est capable. Suivez les étapes, suivez les coachs qui sont passés par là, et tu finiras par y arriver. C'est mathématique : tu peux avoir toutes les compétences du monde, sans l'action tu n'auras jamais le résultat.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: false,
};

export default reussite;
