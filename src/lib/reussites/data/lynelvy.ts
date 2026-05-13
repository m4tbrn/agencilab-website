import type { Reussite } from "../types";

/**
 * Source : Témoignages/Infanteries/Lynelvy.md (11:52)
 * Stade early : pas encore de client payant. Mis en draft.
 */
const reussite: Reussite = {
  slug: "lynelvy",
  name: "Nelly",
  outcomeHeadline:
    "Étudiante en droit (avocate en droit des affaires internationales) qui se construit une activité Growth Marketing en parallèle",
  photo: "/images/reussites/lynelvy.jpg",
  oldJob: "Étudiante en droit bilingue (futur avocate)",

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Témoignage Infanteries",
    },
  ],

  parcoursAvant: [
    "Nelly est étudiante en droit bilingue, se destinant à être avocate en droit des affaires internationales. Elle a toujours voulu être financièrement libre rapidement pour ne pas dépendre de ses parents. Elle suit Louis depuis environ un an sur YouTube (elle l'avait découvert via ses contenus politique/actualité), et a fini par rejoindre Agencilab après avoir vérifié que le discours était cohérent et honnête.",
  ],

  parcoursMaintenant: [
    "Nelly s'est positionnée sur le community management (sa génération a grandi avec les réseaux sociaux) dans le domaine de l'esthétique : prothèses ongulaires d'abord, beauté plus largement ensuite. Elle a directement rejoint le format Mentorat pour avoir un coach attitré qui l'encadre semaine après semaine (utile pour sa procrastination naturelle).",
    "Pas encore de cliente payante mais elle a accompagné 2 clientes gratuitement pour se faire la main et générer des témoignages. Elle reçoit régulièrement des retours positifs en prospection sur Facebook (Instagram saturé pour sa niche). Sa contrainte principale : ses études lui imposent des phases où elle doit délaisser l'activité.",
  ],

  qa: [
    {
      question: "Pourquoi avoir choisi le Mentorat plutôt que l'incubateur classique ?",
      answer: [
        "Pour avoir un cadre clair avec des appels réguliers. Je suis quelqu'un de procrastinatrice qui fait beaucoup les choses en dernière minute. Avoir un coach attitré me force à avancer parce que je sais qu'on a un appel tel jour et qu'il faut que j'aie fait ce que je devais faire. Sans ça, j'aurais laissé filer.",
      ],
    },
    {
      question: "Ton conseil à quelqu'un qui hésite à rejoindre Agencilab ?",
      answer: [
        "Rejoignez. On est tous là à s'entraider, c'est la vraie force de l'accompagnement. Et il faut bien commencer un jour : pourquoi pas avec une communauté qui vous tire vers le haut ? Discipliné, organisé, motivé : trois mots qui résument ce qu'il faut pour réussir.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: true,
};

export default reussite;
