import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de Manon Duval (transcrit par Whisper).
 *
 * Source : Témoignages/Manon Duval.md (27:52)
 *
 * ⚠️ Note : Manon est au stade early de son parcours dans cette interview.
 * Pas de gros chiffres outcome — le focus est sur le démarrage en duo
 * (avec Adrien, autre membre Agencilab) et la structuration de son activité
 * parallèle. C'est précieux comme témoignage "starter" pour les ICP qui
 * s'identifient à un démarrage plutôt qu'à un outcome déjà énorme.
 *
 * À valider avant publication :
 * - [ ] Mettre draft: false uniquement après validation par Manon
 * - [ ] Ajouter la vraie photo dans /public/images/reussites/manon-duval.jpg
 * - [ ] Remplacer le placeholder vidéo par le vrai embed YouTube/Vimeo
 */
const reussite: Reussite = {
  slug: "manon-duval",
  name: "Manon Duval",
  outcomeHeadline:
    "D'infirmière à Growth Marketer : 1er client signé en duo avec un autre élève d'Agencilab (Adrien)",
  photo: "/images/reussites/manon-duval.jpg",
  oldJob: "Infirmière (à 100% en parallèle)",
  city: "Perpignan",

  // PLACEHOLDER — à remplacer par le vrai embed une fois la vidéo uploadée
  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement — Lancement en duo et choix de niche",
    },
  ],

  parcoursAvant: [
    "Manon est infirmière à Perpignan. À 100% temps plein dans son emploi salarié, avec des amplitudes horaires larges qui rendent toute activité en parallèle compliquée à caser. Elle a rejoint Agencilab pour se construire une activité de Growth Marketing en parallèle, sans quitter son poste à l'hôpital.",
    "Au démarrage, elle a fait face à un blocage classique : sans bagage marketing préalable, la création de son premier site internet pour une cliente était complexe. C'est dans l'incubateur Agencilab qu'elle rencontre Adrien, lui aussi membre Agencilab, plus à l'aise sur la partie technique web.",
  ],

  parcoursMaintenant: [
    "Manon et Adrien ont décidé de travailler en duo sur leur activité de Growth Marketing : elle gère la prospection et la relation client (sa tchatche est son point fort, et elle a déjà un bon réseau dans le paramédical), il gère la création des sites internet et l'acquisition côté technique. Ils viennent de signer leur premier client commun (une pizzeria locale).",
    "Ils se sont récemment alignés sur la niche : les centres d'esthétique et plus largement les professions paramédicales/bien-être. Manon a beaucoup de contacts dans ce secteur, et le marché est solvable (les centres d'esthétique ont du budget, et les ongleries en particulier sont en forte croissance).",
    "Côté organisation, Manon monte à Lyon pour planifier avec Adrien : maquettes PDF, cartes de visite, contrats prédéfinis, et un plan de prospection physique structurée (objectif : 20 centres visités par semaine sur la zone Perpignan-Montpellier-Toulouse). Adrien met en parallèle une stratégie de cold email pour générer un flux additionnel pendant qu'elle prospecte sur le terrain.",
  ],

  qa: [
    {
      question: "Présente-toi et raconte comment vous avez commencé à bosser ensemble avec Adrien.",
      answer: [
        "Je suis infirmière de profession, à Perpignan, donc au départ Agencilab c'était très complexe pour moi. J'avais aucune base en marketing digital ou en création de sites internet. Quand j'ai eu ma première cliente, c'est Adrien qui est venu m'aider parce qu'il est plus à l'aise sur la partie technique. De fil en aiguille, il m'a proposé qu'on bosse ensemble.",
        "On a eu notre premier client commun il y a quelques semaines (une pizzeria), et ça s'est très bien passé. C'était un peu brouillon mais on s'en est très bien sortis. Maintenant si on veut vraiment continuer en duo, il faut qu'on cadre les choses. C'est pour ça qu'on a pris ce call avec Louis : pour clarifier la suite et être sûrs qu'on va dans la bonne direction.",
      ],
    },
    {
      question: "Pourquoi vous avez choisi les centres d'esthétique comme niche ?",
      answer: [
        "Très honnêtement, naturellement, parce que j'ai pas mal de contacts là-dedans. Je connais bien le milieu paramédical au sens large, donc bien-être, esthétique, ce sont des univers où j'ai déjà des entrées et où j'aurai la tchatche pour pitcher.",
        "Et puis ces centres ont du budget. J'ai entendu que les ongleries en particulier, ça marche ultra bien en ce moment. Les centres d'esthétique un peu plus larges, je pense que ça ne peut que marcher. Donc on part là-dessus en focus principal, et on garde en pivot possible les autres professions paramédicales si on veut élargir.",
      ],
    },
    {
      question: "C'est quoi votre plus grande difficulté en ce moment ?",
      answer: [
        "Cadrer les choses. Et je pense qu'Adrien va te dire pareil. On est tous les deux à 100% sur nos jobs respectifs en parallèle, donc s'organiser est compliqué. On a tendance à s'éparpiller et à partir dans tous les sens. On a besoin de définir des objectifs hebdomadaires précis pour ne pas dériver.",
        "Et l'autre difficulté c'est mentale : tu fais tout sauf ce que tu dois faire. Je sais qu'à un moment j'avais juste à envoyer un message Insta à un agent immobilier pour qu'il me mette en relation avec un notaire, j'ai attendu deux jours avant de le faire. Pour mon cerveau, le simple fait d'envoyer ce message, c'était une nouvelle vie, un nouveau mécanisme — et ça crée énormément de friction. Avoir conscience de cet autosabotage, c'est la première étape pour l'arrêter.",
      ],
    },
    {
      question: "Quelle stratégie de prospection vous mettez en place ?",
      answer: [
        "Moi je pars sur de la prospection physique : je vais aller directement dans les centres d'esthétique de la zone Perpignan-Montpellier. C'est chronophage mais je préfère ça parce que ça met du concret tout de suite. J'arrive avec mon ordi, des maquettes PDF de sites internet (au cas où il n'y aurait pas de connexion), des cartes de visite, et même un petit cadeau pour marquer le coup (chocobos, idée vue dans une vidéo de psychologie de la vente).",
        "Et en parallèle, Adrien met en place une stratégie de cold email pendant que je prospecte sur le terrain. Comme ça on a deux canaux qui tournent en même temps. Pour les soirs où je rentre KO du boulot d'infirmière, je peux basculer sur du call call à la maison plutôt que de me forcer à sortir. L'objectif que je me fixe : 20 centres visités par semaine en physique.",
      ],
    },
    {
      question: "Comment tu vois la suite vu que tu es à 100% en salariée à côté ?",
      answer: [
        "Pour l'instant, je garde mon job d'infirmière à 100%. C'est compliqué côté planning parce que mes amplitudes horaires sont larges, mais comme on est en duo avec Adrien, ma seule tâche c'est la prospection. Je n'ai pas à gérer la création de sites en plus. Donc je peux vraiment me consacrer à 100% à cette seule mission quand je suis sur Agencilab.",
        "L'idée c'est de construire petit à petit un portefeuille de clients esthétique récurrents, et de voir où ça me mène dans 6-12 mois. Mais pour l'instant l'objectif court terme c'est juste de signer les premiers clients de notre niche et de structurer notre façon de bosser ensemble pour ne pas s'éparpiller.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: false,
};

export default reussite;
