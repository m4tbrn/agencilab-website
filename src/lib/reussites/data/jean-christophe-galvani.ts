import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de Jean-Christophe Galvani (transcrit par Whisper).
 *
 * Source : Témoignages/Jean-Christophe Galvani.md (21:35)
 *
 * À valider avant publication :
 * - [ ] Validation par Jean-Christophe
 * - [ ] Ajouter la photo
 * - [ ] Remplacer le placeholder vidéo
 */
const reussite: Reussite = {
  slug: "jean-christophe-galvani",
  name: "Jean-Christophe Galvani",
  outcomeHeadline:
    "D'ex-développeur web au chômage à 2 clients Growth Marketing signés en 2 mois (puis pivot vers une offre tech IA)",
  photo: "/images/reussites/jean-christophe-galvani.jpg",
  oldJob: "Ex-développeur web (5 ans d'expérience)",

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement : retour, signature 2 clients et pivot vers Growth Marketing tech",
    },
  ],

  parcoursAvant: [
    "Jean-Christophe est ex-développeur web avec 5 ans d'expérience cumulés. Un profil atypique : à chaque changement d'entreprise il a dû réapprendre un nouveau langage de programmation, ce qui le faisait passer pour un junior alors qu'il avait 5 ans d'ancienneté.",
    "Il avait déjà tenté Agencilab il y a 2 ans et demi, à l'époque où le programme venait d'être créé. Il avait abandonné parce qu'il travaillait à temps plein et n'arrivait pas à concilier les deux. Le 1er mars 2025 il est tombé au chômage. Il s'est dit que c'était le bon moment pour relancer Agencilab à temps plein, et il a repris l'accompagnement en septembre 2025 pour bien démarrer.",
  ],

  parcoursMaintenant: [
    "Dès octobre 2025, Jean-Christophe avait fini les premières semaines et s'est lancé sur la création de sites internet pour artisans. Il a signé son 1er client en prospection chaude (entourage), et son 2e en prospection froide téléphonique le mois suivant. 2 clients en environ 2 mois.",
    "Mais il a senti une friction profonde : refaire des sites quasi-identiques 4 fois par mois pour des artisans, ce n'était pas son projet. Il a réfléchi à ce qu'il pouvait vraiment apporter de différenciant avec son background. Le pivot : il propose maintenant des services d'assurance qualité tech automatisée avec IA (scripts de test qui simulent un parcours utilisateur, revues de code automatisées, prise de notes IA pour les réunions tech, dashboards d'interaction utilisateur en live).",
    "Sa stratégie d'acquisition actuelle : s'inscrire sur des plateformes freelance pour valider l'offre rapidement, construire un portfolio de cas réels, puis prospecter en cold email des entreprises avec applications web. C'est le mariage entre son ancien savoir-faire dev (qu'il ne voulait pas perdre) et les compétences Growth Marketing acquises chez Agencilab.",
  ],

  qa: [
    {
      question: "Tu avais tenté Agencilab il y a 2 ans et tu as abandonné. Pourquoi être revenu ?",
      answer: [
        "À l'époque, je travaillais à temps plein comme dev et je n'arrivais pas à dégager assez de temps. J'étais arrivé jusqu'à la création d'entreprise mais je me suis senti noyé et j'ai lâché.",
        "Le 1er mars 2025 je suis tombé au chômage, et j'ai vu une vraie opportunité de faire ça correctement, à temps plein, sans avoir l'épée de Damoclès du temps. J'ai repris l'accompagnement en septembre, j'ai bien démarré, et j'ai pu signer mes premiers clients en octobre-novembre.",
      ],
    },
    {
      question: "Pourquoi avoir pivoté ton offre après 2 clients ?",
      answer: [
        "J'avais choisi sites internet pour artisans parce que je voulais aller vite et que j'avais le background tech. Mais en faisant ma 2e signature, j'ai senti quelque chose qui me freinait : refaire le même site 4 fois par mois c'est comme demander à un écrivain de réécrire le même livre. Tu ne peux pas copier-coller, donc tu reformules à chaque fois, mais c'est la même histoire. Ça m'a usé psychologiquement.",
        "Je suis retourné sur mes vraies forces : la programmation et l'IA. Les boîtes où j'ai bossé manquaient cruellement d'outils d'assurance qualité, de revues de code automatisées, de prise de notes IA en réunion. C'est sur ces angles que je pivote mon offre maintenant. Le mariage de mon savoir-faire technique avec les compétences marketing acquises chez Agencilab, ça donne quelque chose de bien plus singulier que vendre un énième site internet.",
      ],
    },
    {
      question: "Qu'est-ce que tu retiendrais comme principal apport de Agencilab ?",
      answer: [
        "Les premières parties, sur le mindset et l'organisation, sont les plus précieuses selon moi. Ça te donne un vrai coup de pied au cul pour démarrer, ça te met dans la bonne dynamique. C'est aussi sur ces premières semaines que j'ai le plus tenu sur la durée.",
        "Et la partie création d'entreprise et contrats prêts à l'emploi, c'est génial. Ça m'a fait gagner un temps fou : j'aurais probablement perdu des semaines à chercher comment faire un contrat propre, alors qu'avec un exemple à adapter j'ai pu démarrer en 2 jours. Le tutorat avec Nathan Pichon a aussi été un vrai plus pour structurer ma démarche.",
      ],
    },
    {
      question: "Qu'est-ce que tu aurais aimé qu'on te dise plus clairement au démarrage ?",
      answer: [
        "Que les services et méthodes proposés dans l'accompagnement sont des bases pour démarrer, pas des contraintes obligatoires. Si tu as des compétences ou des idées qui te permettent d'aller dans une autre direction, n'hésite pas à bifurquer.",
        "Moi j'avais cette mentalité au début : je vais absolument faire ce qu'il y a dans la formation et rien d'autre. J'ai passé 3 mois à me casser les dents sur du site internet artisan en cold call alors que mon vrai différenciant c'était de combiner mon expérience dev avec le marketing. Si j'avais bifurqué plus tôt, j'aurais gagné du temps. Pour celles et ceux qui démarrent : utilisez l'accompagnement comme une boîte à outils, pas comme un plan rigide à suivre à la lettre.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: false,
};

export default reussite;
