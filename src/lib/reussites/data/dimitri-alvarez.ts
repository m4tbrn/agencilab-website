import type { Reussite } from "../types";

/** Source : Témoignages/Interviews/Dimitri Alvarez.md (18:04) */
const reussite: Reussite = {
  slug: "dimitri-alvarez",
  name: "Dimitri Alvarez",
  outcomeHeadline:
    "D'étudiant BTS NDRC à premier client signé en froid à 20 ans : 250€ setup + 400€/mois pendant 3 mois (media buying)",
  photo: "/images/reussites/dimitri-alvarez.jpg",
  oldJob: "Étudiant BTS NDRC en alternance (pare-brise)",
  city: "Toulouse",
  age: 20,

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Témoignage : 1er client en froid après 150 mails de prospection, 250€ + 400€/mois",
    },
  ],

  stats: [
    { label: "1er ticket signé", value: "250€ setup" },
    { label: "Récurrent client", value: "400€/mois × 3 mois" },
    { label: "Conversion prospection", value: "1/150 mails" },
    { label: "Objectif court terme", value: "5 clients avant janvier" },
  ],

  parcoursAvant: [
    "Dimitri a 20 ans et vient de Montauban. Il est en BTS NDRC à Toulouse (2e année), spécialisé digitalisation et relation client. Personne qui aime se challenger : avant Agencilab, il avait déjà testé vintage et dropshipping.",
    "À 18 ans, il prend un appel découverte avec Louis. Il achète l'incubateur mais ne le prend pas au sérieux pendant 1 an : pas assez mature. C'est en alternance, en redécouvrant les notions en cours, qu'il se dit 'ça n'a pas l'air si dur, pourquoi je ne reviens pas ?'. Il revient et prend ça vraiment au sérieux.",
  ],

  parcoursMaintenant: [
    "Dimitri a choisi le media buying Facebook avec l'aide d'Anaël (le coach). Il a d'abord lancé pour son patron en alternance (Wiglass, puis Rapide Paris) : démarrage difficile avec gros coûts d'acquisition, puis optimisation jusqu'à la rentabilité.",
    "Son vrai déclic : un client signé en froid en octobre. Il a envoyé 150 mails dans la niche pare-brise (qu'il connaissait) et a touché un prospect de Montluçon. Ticket : 250€ setup + 400€/mois pendant 3 mois sur du media buying. Tout le processus (offre irrésistible, garantie, speech d'appel, diapositives) vient directement des modules.",
    "Son objectif : 5 clients avant janvier, sans saturer. Il joue aussi la carte de la recommandation puisque son nouveau client lui a dit que si ça se passe bien, il le pousserait dans son entourage.",
  ],

  qa: [
    {
      question: "Tu as attendu 1 an avant de te lancer vraiment. Pourquoi ?",
      answer: [
        "À 18 ans je n'étais pas assez mature. Je voulais des choses, mais je ne faisais pas. Ce qui m'a débloqué : le travail sur soi. Travailler sur les choses qui ne te plaisent pas chez toi, ton physique, ta façon d'être. Ça développe ton mental.",
        "J'ai aussi fait une randonnée dans les Pyrénées. Voir un paysage, me sentir libéré, ça m'a fait un déclic. Je me suis dit : 'j'ai envie de cette liberté, et le Growth Marketing peut me l'offrir'.",
      ],
    },
    {
      question: "Tu as fait 150 mails pour signer 1 client. Tu retiens quoi ?",
      answer: [
        "Que la prospection c'est mécanique. J'ai eu 2 réponses sur 150 mails : un qui m'a tenu jusqu'au 2e appel puis a refusé sans dire pourquoi, et un qui a tout validé. La leçon : il faut une cible que tu connais (pour moi le pare-brise) et il faut envoyer en volume.",
        "Et il faut suivre les diaporamas Agencilab : l'offre irrésistible avec garantie qui rassure, le speech d'appel parfait. J'ai juste adapté à ma personne, ça a fluidifié la vente.",
      ],
    },
    {
      question: "Tes parents ont réagi comment ?",
      answer: [
        "Mes parents et mon oncle (lui-même en Growth Marketing) me poussent vers le haut. Ils sont fiers de moi. D'autres autour rabaissent ou disent de faire attention. C'est assez compliqué mais ça pousse à continuer.",
        "Et clairement c'est la meilleure décision : 1 100€ pour Agencilab, c'est cher pour un étudiant qui n'a pas de sous. Mais c'est juste un investissement. Sans ça, créer mon entreprise m'aurait pris 3 jours au lieu de 30 minutes. Et peut-être que je ne me serais jamais lancé.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: false,
};

export default reussite;
