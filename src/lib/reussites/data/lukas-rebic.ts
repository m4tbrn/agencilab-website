import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de Lukas Rebic (transcrit par Whisper).
 *
 * Source : Témoignages/Lukas Rebic.md (21:50)
 *
 * ⚠️ Témoignage axé side-project + évangéliste de l'incubateur.
 * Pas de strong outcome financier. Mis en draft.
 */
const reussite: Reussite = {
  slug: "lukas-rebic",
  name: "Lukas Rebic",
  outcomeHeadline:
    "D'ingénieur en transition à constructeur de micro-SaaS IA en parallèle, avec une formation Growth Marketing comme socle",
  photo: "/images/reussites/lukas-rebic.jpg",
  oldJob: "Ingénieur (alternance, en transition)",
  city: "Bordeaux",

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement : touche-à-tout en train de trouver sa voie via les micro-SaaS",
    },
  ],

  parcoursAvant: [
    "Lukas vit à Bordeaux et est ingénieur de formation. Il a rejoint Agencilab il y a presque 2 ans, à un moment où il se cherchait : il était en alternance dans une voie qui ne lui plaisait pas et il cherchait du sens. Agencilab a été le tremplin qui lui a montré qu'on pouvait construire une boîte, faire des choses concrètes, et que ça marchait.",
    "Il avait conscience que même s'il voulait à terme rester dans la voie ingé technique, des compétences en marketing seraient toujours un plus. Donc l'accompagnement Agencilab était autant un investissement direct (lancer une activité) qu'un investissement indirect (acquérir des skills marketing transposables à n'importe quel projet futur).",
  ],

  parcoursMaintenant: [
    "Lukas a testé plusieurs voies : sites internet pour des assos et amis (réalisé qu'il n'avait pas vraiment la patte artistique), montage vidéo (a essayé avec sa copine, a appris au passage), différentes prestations marketing. Aujourd'hui sa voie qui le passionne vraiment : les micro-SaaS et les outils IA pour solopreneurs.",
    "Premier signe concret : un outil pour une association de jeux vidéo (200€) avec implémentation sur Discord. Petit ticket mais grosse satisfaction parce qu'il n'est pas développeur de base et qu'il a réussi à le faire fonctionner via IA. Sa direction maintenant : développer des micro-SaaS (CRM intelligent avec RAG IA, outils de productivité pour solopreneurs) pas trop chers, pas comme des Hubspot géants, mais avec des fonctionnalités spot pour des publics précis.",
    "Pour l'instant, son objectif court terme est de viser un cash flow positif sur ces outils (les coûts d'hébergement, dev, etc. couverts). À terme, l'objectif est d'en vivre. Il garde son parcours ingénieur en parallèle car ça reste son cœur d'expertise, mais le Growth Marketing acquis chez Agencilab est devenu un atout stratégique pour vendre ce qu'il développe.",
  ],

  qa: [
    {
      question: "Tu es ingénieur, et tu lances un projet micro-SaaS. Comment ça colle ?",
      answer: [
        "Justement parce que ça colle parfaitement. J'ai la rigueur tech d'ingénieur, mais sans le bagage en marketing, je serais incapable de vendre ce que je construis. Le mariage des deux c'est ce que m'a apporté Agencilab : le neuromarketing, la compréhension client, la construction d'une offre, le copywriting.",
        "Aujourd'hui je suis fasciné par tout ce qui est outils IA : Cursor, Lovable, etc. Je suis en train de me former à fond là-dedans et même si je ne suis pas développeur de base, je commence à construire des outils utiles. La magie c'est que je peux faire tourner techniquement, et je sais vendre ce que je construis grâce à Agencilab.",
      ],
    },
    {
      question: "Tu as testé pas mal de choses avant. Comment tu sais que c'est la bonne voie maintenant ?",
      answer: [
        "J'ai été touche-à-tout, oui : sites internet pour amis, montage vidéo, ambassadeurs, etc. Et c'est ok, je trouve. Agencilab te donne accès à tellement de domaines que tu peux tester ce qui te correspond le plus.",
        "Ce qui me fait dire que les micro-SaaS c'est ma voie : pour la première fois, je passe des journées entières à bricoler sans voir le temps passer. C'est ce niveau d'engagement qui te dit que tu as trouvé ce qui te passionne. Et c'est plus durable d'avoir un focus passionné que de courir après le truc qui rapporte le plus rapidement.",
      ],
    },
    {
      question: "Tu retiens quoi du programme Agencilab ?",
      answer: [
        "Trois choses principales. Premièrement, le format hebdomadaire avec entonnoir progressif est génial pour ne pas se perdre. Deuxièmement, les tutoriels d'opération concrets quand ils sont là (parfois il en manque) c'est ce qui transforme la théorie en pratique. Troisièmement, les coachings et les infanteries sont une plus-value énorme : quand tu doutes ou tu galères, avoir un mentor qui te re-cadre en 10 minutes, ça vaut de l'or.",
        "Et plus largement : c'est ton bébé Louis, je vois la V3 arriver, tu ne te reposes pas sur les acquis, c'est dingue. Ça donne envie de rester sur la durée parce qu'on sent que l'accompagnement évolue vraiment avec nous.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: true,
};

export default reussite;
