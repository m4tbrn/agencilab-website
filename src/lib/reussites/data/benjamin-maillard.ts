import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de Benjamin Maillard (transcrit par Whisper).
 *
 * Source : Témoignages/Benjamin Maillard.md (27:35)
 *
 * À valider avant publication :
 * - [ ] Validation par Benjamin
 * - [ ] Ajouter la photo dans /public/images/reussites/benjamin-maillard.jpg
 * - [ ] Remplacer le placeholder vidéo
 */
const reussite: Reussite = {
  slug: "benjamin-maillard",
  name: "Benjamin Maillard",
  outcomeHeadline:
    "D'ex-routier à +3 000€/mois en Growth Marketing avec sa femme qui le rejoint",
  photo: "/images/reussites/benjamin-maillard.jpg",
  oldJob: "Ancien routier (transporteur à son compte)",
  city: "Vannes",

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label:
        "Bilan d'accompagnement : retour de la prospection physique avec audit",
    },
  ],

  stats: [
    { label: "Revenu mensuel", value: "+3 000€" },
    { label: "Clients signés", value: "7" },
    { label: "Taux closing en physique", value: "50%" },
  ],

  parcoursAvant: [
    "Benjamin était routier à son compte pendant des années, à partir en semaine et à enchaîner les longues journées. Il a arrêté son activité de transport il y a presque deux ans, pour une raison simple : être plus présent pour sa famille (sa femme et ses deux filles). Mais en arrêtant, il a perdu son revenu principal.",
    "Pour rebondir, il a d'abord tenté le dropshipping, sans succès. C'est en cherchant une autre voie qu'il est tombé sur Louis et l'accompagnement Agencilab. Il s'est positionné sur la création de sites internet et le référencement SEO, en partant de zéro côté compétences techniques.",
  ],

  parcoursMaintenant: [
    "Aujourd'hui à Vannes, Benjamin a 7 clients signés au total (dont 4 en signature directe payante depuis le déclic de sa nouvelle méthode). Il génère plus de 3 000€/mois en mode mensuel récurrent et la trajectoire est en hausse.",
    "Le pivot qui a tout changé : il est passé d'une prospection digitale qui marchait peu à une prospection physique structurée avec un audit personnalisé pour chaque entreprise visitée. Résultat : environ 50% de taux de conversion sur les rendez-vous obtenus en physique, là où le digital lui rapportait peu.",
    "Sa femme, en arrêt maladie longue durée, voit comment il bosse au quotidien et a décidé de le rejoindre : elle quitte son emploi en avril 2026 pour intégrer 100% l'activité avec lui. Elle prend la partie gestion clientèle (où elle excelle), lui se concentre sur la production. Objectif court terme : 10 000€/mois en rythme stable. Objectif décembre 2026 : 50 000€/mois, avec une structuration en SAS et une délégation de la prospection et de la création de sites.",
  ],

  qa: [
    {
      question: "Tu peux te présenter et raconter ton parcours avant Agencilab ?",
      answer: [
        "Avant Agencilab, j'étais routier à mon compte. J'ai arrêté il y a presque deux ans, pour la famille essentiellement. Je partais la semaine, je n'étais pas présent. J'ai d'abord testé un peu de dropshipping, sans grand succès, et c'est à ce moment-là que j'ai découvert Louis et Agencilab.",
        "Avec l'accompagnement, j'ai pu décider de la direction que je voulais : je suis parti sur la création de sites internet et le référencement SEO. J'ai vraiment démarré en janvier 2025 et j'ai signé 4 premiers clients, mais c'était les montagnes russes : je prospectais, puis je faisais les sites, puis je re-prospectais. Entre juin et octobre 2025, j'ai dû reprendre un boulot à côté parce que c'était trop irrégulier. Depuis novembre-décembre 2025, je suis à 100% dessus et ça décolle vraiment.",
      ],
    },
    {
      question: "Qu'est-ce qui a tout changé dans ta méthode de prospection ?",
      answer: [
        "J'ai arrêté de tout faire en digital et je suis passé en prospection physique avec un audit personnalisé. Concrètement : je cherche des entreprises locales sur Google Maps, je regarde leur site, je détecte ce qui ne va pas (référencement, design, prise de rendez-vous), je prépare un mini-audit, et je vais les voir directement.",
        "Le ratio est complètement différent. Sur les rendez-vous que j'obtiens en physique, je signe environ une fois sur deux. C'est très chronophage, mais quand tu compares à des semaines de cold call qui ne donnent rien, ça vaut le coup. Maintenant je veux structurer la suite : déléguer la prospection téléphonique à un freelance et garder la prospection physique pour les gros tickets.",
      ],
    },
    {
      question: "Ta femme va te rejoindre. Comment c'est arrivé ?",
      answer: [
        "Elle est en arrêt maladie depuis plus d'un an. En me voyant bosser au quotidien, ce que je faisais, ce que ça rapportait, elle s'est intéressée. Elle est plus forte que moi sur la partie gestion et clientèle, là où je suis moins bon. Donc on s'est dit : pourquoi ne pas s'associer ?",
        "Elle a entamé sa procédure pour quitter son boulot, et en avril 2026 elle me rejoint à 100%. On va créer la société (probablement une holding avec une SAS pour l'activité et une SCI pour notre immobilier), et on va se répartir les rôles : moi sur la production technique et la prospection physique, elle sur la gestion client et la coordination. L'objectif c'est de stabiliser à 10 000€/mois rapidement, puis monter à 50 000€/mois d'ici décembre 2026.",
      ],
    },
    {
      question: "Qu'est-ce que tu dirais à quelqu'un qui hésite à rejoindre Agencilab ?",
      answer: [
        "Que vu de l'extérieur, oui, ça peut sembler comme « encore une de ces formations en ligne dans le vent ». Mais pour le coup ce n'est pas le cas. Louis est une vraie personne, l'accompagnement est carré, les modules sont qualis, c'est bien expliqué.",
        "Et surtout : il y a tellement de domaines abordés (sites, marketing, community management, etc.) que chacun finit par trouver sa voie là-dedans. Moi au début j'étais parti sur autre chose et j'ai fini sur la création de sites, c'est là où je me retrouve le plus aujourd'hui. Donc ce que je dirais c'est : lance-toi. 2025 a été dur pour moi à plusieurs moments, j'ai voulu arrêter, mais je suis content de ne pas l'avoir fait.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: true,
  draft: false,
};

export default reussite;
