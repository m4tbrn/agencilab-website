import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de Jennifer Bessad (transcrit par Whisper).
 *
 * Source : Témoignages/Jennifer Bessad.md (15:15)
 *
 * ⚠️ Stade early : pause prise après la création d'entreprise, en train de
 * reprendre la motivation. Pas de client signé. Mis en draft.
 */
const reussite: Reussite = {
  slug: "jennifer-bessad",
  name: "Jennifer Bessad",
  outcomeHeadline:
    "De chef de service salariée et maman de 2 enfants à Growth Marketer en cours de relance",
  photo: "/images/reussites/jennifer-bessad.jpg",
  oldJob: "Chef de service (salariée)",

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement : retour de motivation après une pause",
    },
  ],

  parcoursAvant: [
    "Jennifer est chef de service dans une entreprise, maman de 2 enfants et investie dans son emploi salarié. Elle a un projet de changement de vie clair et motivé : se construire une activité parallèle qui lui donnerait progressivement plus de liberté.",
    "Elle s'est lancée chez Agencilab en mars 2025. Les premiers modules sur l'organisation et le mindset l'ont énormément aidée à mieux gérer son temps, dans sa vie pro autant que privée. Mais au moment de la création d'entreprise (logo, déclaration URSSAF, etc.), il y a eu un creux : un mélange de coup de peur et de quotidien qui prend le dessus.",
  ],

  parcoursMaintenant: [
    "Jennifer a traversé plusieurs mois moins assidus, ce qu'elle avait anticipé (le côté montagnes russes du parcours). Elle reprend désormais la motivation et veut s'y remettre sérieusement. Le bilan d'accompagnement avec Louis fait partie de cet élan de redémarrage.",
    "Son orientation : l'email marketing, parce qu'elle se sent à l'aise à l'écrit et que les exercices proposés dans le module lui ont parlé. Sa cible se précise : elle pivote vers des activités en ligne (e-commerce, coachs sportifs avec présence Instagram, etc.) plutôt que les entreprises locales (salles de sport, boutiques de chocolat) initialement considérées, car l'email marketing fonctionne nettement mieux sur des activités purement en ligne.",
  ],

  qa: [
    {
      question: "Tu as pris une pause après quelques mois. Qu'est-ce qui s'est passé ?",
      answer: [
        "Honnêtement, c'est un creux comme on peut tous en avoir. Les deux premiers mois j'ai bien avancé, j'avais fait la phase 3, et au moment de la création d'entreprise (logo, déclaration URSSAF, etc.), il y a eu un coup de peur. Le quotidien d'une maman de 2 enfants à temps plein avec une autre activité, c'est dense. Du coup j'ai été moins assidue.",
        "Je m'étais préparée à ce côté montagnes russes du parcours et je sais que c'est normal. Là, je reprends de la motivation, je m'y remets. C'est pour ça que j'ai réservé ce bilan : c'était un élan de plus pour me rebooster et me dire que là, je n'ai plus le choix, je m'y file vraiment.",
      ],
    },
    {
      question: "Tu as choisi l'email marketing : pourquoi ?",
      answer: [
        "Parce que je me sens à l'aise à l'écrit. C'est cohérent avec mon emploi de chef de service où je suis tout le temps en train d'écrire. Les exercices proposés dans le module email marketing m'ont parlé tout de suite, je me suis éclatée à les faire. Le copywriting, la structuration d'une séquence, ça vient assez naturellement chez moi.",
        "Je suis moins à l'aise avec la création d'images et de contenu visuel. Donc plutôt que de me forcer sur quelque chose qui n'est pas mon point fort, je préfère doubler mes chances en partant sur l'angle où j'ai déjà des facilités.",
      ],
    },
    {
      question: "Qu'est-ce que tu retiens du programme jusqu'ici ?",
      answer: [
        "La phase 1 sur le mindset et l'organisation est vraiment géniale. C'est intelligent de mettre les gens en condition avant de plonger dans le technique. Pour moi c'est plus qu'une formation : c'est un changement de mode de vie. Et ça m'a aidée bien au-delà de l'activité Growth Marketing, dans ma vie privée et pro classique aussi.",
        "Mon point d'amélioration personnel : la communauté. Je suis quelqu'un qui peut avoir du mal à s'intégrer dans un groupe et qui préfère un format plus individuel. C'est plus une particularité de mon profil que de l'accompagnement en soi. Pour des gens comme moi, peut-être proposer plus de coaching individuel ou un coach attitré pour le particulier serait un plus.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: true,
};

export default reussite;
