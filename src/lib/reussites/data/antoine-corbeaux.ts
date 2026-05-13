import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab d'Antoine Corbeaux (transcrit par Whisper).
 *
 * Source : Témoignages/Antoine Corbeaux.md (19:48)
 *
 * ⚠️ Stade très early : pas encore de client signé. Témoignage axé sur
 * le dilemme passion vs économique et la transition entrepreneurship + études.
 * Mis en draft par défaut, à valider avec Antoine avant publication.
 *
 * À valider avant publication :
 * - [ ] Validation par Antoine
 * - [ ] Ajouter la photo dans /public/images/reussites/antoine-corbeaux.jpg
 * - [ ] Remplacer le placeholder vidéo
 */
const reussite: Reussite = {
  slug: "antoine-corbeaux",
  name: "Antoine Corbeaux",
  outcomeHeadline:
    "À 28 ans, école d'ingé forestier + lancement Growth Marketing en parallèle (niche systèmes de sécurité)",
  photo: "/images/reussites/antoine-corbeaux.jpg",
  oldJob: "Étudiant ingénieur forestier (ex-Allemagne en communauté)",
  city: "Toulouse",
  age: 28,

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement : concilier études d'ingénieur et lancement Growth Marketing",
    },
  ],

  parcoursAvant: [
    "Antoine a 28 ans et vit à Toulouse. Avant son école d'ingénieur, il avait fait un parcours atypique : il est parti vivre en communauté en Allemagne pendant un temps, où il faisait des travaux forestiers et du maraîchage. Il a aussi commencé des études en électronique avant de bifurquer.",
    "En septembre 2025, il est entré en école d'ingénieur forestier pour 3 ans, parce que la forêt est sa passion. Mais en parallèle, une question pragmatique l'a rongé : est-ce que ce voie-passion va vraiment lui permettre de mettre sa famille à l'abri financièrement et d'avoir la liberté géographique qu'il veut ? Le monde évolue, et il veut avoir des portes de sortie.",
  ],

  parcoursMaintenant: [
    "Antoine est en train de tester l'approche dual : continuer son école d'ingénieur ET lancer son activité Growth Marketing en parallèle. Il a fini la phase 2 de l'accompagnement Agencilab et il a choisi sa niche : les systèmes de sécurité (caméras, vidéosurveillance, alarmes). Une niche où il y a du marché et qui colle avec son background électronique précédent.",
    "Services choisis : sites internet + publicité Google/Facebook. Il démarre la prospection avec ce double objectif en tête : tester si l'activité décolle suffisamment pour devenir son activité principale à terme, ou si elle reste un side qui finance ses projets forestiers d'avenir (ouvrir éventuellement une activité dans l'écosystème forestier qui combinerait son expertise forêt + ses compétences Growth Marketing).",
  ],

  qa: [
    {
      question: "Tu hésites entre passion forestière et activité économique. Pourquoi ?",
      answer: [
        "C'est complètement ça. D'un côté, la forêt c'est mon cœur, je trouve ça exceptionnel de travailler en forêt. De l'autre, c'est mon pragmatisme qui parle : à 28 ans, je pense à construire une famille, à mettre des gens à l'abri financièrement, à avoir la liberté géographique d'aller où je veux si la situation se dégrade.",
        "Le Growth Marketing me donne potentiellement cette liberté. La forêt me donne potentiellement le sens. La question c'est : est-ce que je peux allier les deux, ou est-ce qu'il faut choisir ? Mon plan pour l'instant c'est de tester les deux en parallèle, et de voir comment ça évolue dans les prochains mois.",
      ],
    },
    {
      question: "Pourquoi avoir choisi les systèmes de sécurité comme niche ?",
      answer: [
        "Parce qu'il y a un marché solide et qu'avec mes premières études en électronique, j'ai des connaissances techniques qui me permettent de mieux comprendre cet univers. Je m'étais aussi posé la question des microprocesseurs, des semi-conducteurs, mais ça me paraissait trop niche et trop B2B grosse industrie.",
        "Les caméras de sécurité et les systèmes vidéosurveillance, c'est un marché concret avec beaucoup d'acteurs locaux qui ont besoin d'aide pour leur visibilité en ligne. La plupart ont déjà un site, donc je vais probablement commencer par leur proposer du Google Ads ou du Facebook Ads plutôt que de leur revendre un site dont ils n'ont pas besoin.",
      ],
    },
    {
      question: "Tu as quoi comme retours sur l'incubateur jusqu'ici ?",
      answer: [
        "Globalement, les vidéos sont qualitatives, les modules sont bien pensés, et la formation est complète. Le suivi avec les coachs hebdo c'est vraiment précieux. Ce qui pourrait être amélioré : que les vidéos soient un peu moins sombres, et créer des canaux locaux ou des espaces de co-working par grande ville pour permettre aux membres de se rencontrer en dehors de l'écran. Toulouse, on est plusieurs, ça pourrait être bénéfique de dynamiser ça.",
        "J'ai aussi du mal à travailler chez moi, je suis plus productif dans un espace dédié hors maison. Donc l'idée d'un co-working communautaire local ce serait vraiment top.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: true,
};

export default reussite;
