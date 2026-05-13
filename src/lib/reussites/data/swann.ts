import type { Reussite } from "../types";

/** Source : Témoignages/Infanteries/Swann.md (16:04) */
const reussite: Reussite = {
  slug: "swann",
  name: "Swann",
  outcomeHeadline:
    "D'étudiant fin d'école d'ingé IA à 4 clients signés à 2 000€ pièce en 2 mois et demi (8 000€ générés)",
  photo: "/images/reussites/swann.jpg",
  oldJob: "Étudiant fin d'école d'ingénieur IA & informatique",
  age: 24,

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Témoignage Infanteries : 4 clients × 2 000€ en 2,5 mois grâce au background IA",
    },
  ],

  stats: [
    { label: "Clients signés", value: "4" },
    { label: "Tarif par client", value: "2 000€" },
    { label: "CA total", value: "8 000€" },
    { label: "Durée", value: "2,5 mois" },
  ],

  parcoursAvant: [
    "Swann a 24 ans et termine sa dernière année d'école d'ingénieur, spécialisé en IA et informatique. 10 ans de code derrière lui, 6 ans d'IA. Il a toujours voulu créer son propre logiciel/structure mais n'osait pas (manque d'organisation administrative + courage). Il consommait depuis 23 ans des vidéos de créateurs d'activités (Alex Hormozi notamment).",
    "Déclic mi-avril 2025 : fin d'école qui approche, vision claire des CDI recherche qui ne lui plaisent pas, conviction qu'il « en a sous le capot » et qu'il ne peut plus attendre. Il rejoint Agencilab pour transformer cette envie latente en exécution structurée.",
  ],

  parcoursMaintenant: [
    "Swann a signé ses 4 clients dans les 2 premières semaines de l'incubateur, soit fin avril 2025. Tarif moyen : 2 000€ par client = 8 000€ générés en 2,5 mois cumulés. Service : sites internet + process d'automatisation IA. Il a arrêté de prendre de nouveaux clients ensuite parce qu'il était saturé en livraison.",
    "Avantage clé : il fait un site en 3-4 heures grâce à son background tech, là où la moyenne est de 1-3 jours. Et il a directement intégré des automatisations IA dans ses prestations, ce qui justifie le tarif.",
    "Sa prochaine étape : passer de tickets 2 000€ à des tickets 5-10 000€ avec des sites beaucoup plus structurés (animations 3D, automatisations avancées, slider personnalisés). Moins de clients, plus de valeur par client, moins de charge totale.",
  ],

  qa: [
    {
      question: "Comment tu as signé 4 clients en 2 semaines ?",
      answer: [
        "J'ai un background tech fort (10 ans de code, 6 ans d'IA). Ça m'a permis de proposer dès le démarrage des prestations différenciantes : sites + automatisations IA, pas juste un site générique. Et j'ai utilisé mon réseau proche en plus de la prospection froide structurée par Agencilab.",
        "L'autre clé : la chronologie semaine par semaine de l'incubateur. Tu n'as plus l'option « il faut que je fasse ma boîte », tu as l'option « cette semaine je déclare ma boîte, cette semaine je prospecte ». Décomposer en sous-étapes faisables a tout débloqué pour moi.",
      ],
    },
    {
      question: "Qu'est-ce qui t'a freiné pendant 2 ans avant de te lancer ?",
      answer: [
        "L'absence de plan. Je voulais créer quelque chose mais je n'osais pas décomposer en sous-étapes. Je pensais qu'il fallait faire un gros site internet en une soirée, puis prospecter. C'est pas comme ça que ça marche : il faut un plan structuré sur des mois.",
        "L'incubateur t'oblige à suivre les chapitres semaine par semaine avec un objectif défini. Tu es focalisé sur la mission de la semaine, pas sur l'ensemble du projet. C'est cette discipline qui m'a manqué pendant 2 ans en solo.",
      ],
    },
    {
      question: "Tu mets quoi en avant de Agencilab vs faire en solo ?",
      answer: [
        "Trois choses. La chronologie qui décompose le projet en étapes faisables. Les cours et templates qui te font gagner un temps de fou (tu ne pars pas de zéro sur les schémas, les structures, les pipelines). Et le groupe : tu vois les autres travailler, ça te pousse à bouger ton cul les jours où tu doutes.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: true,
  draft: false,
};

export default reussite;
