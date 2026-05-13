import type { Reussite } from "../types";

/**
 * Source : Témoignages/Infanteries/Johan (témoignage).md (18:17)
 * Note : Yohan (prénom) — différent de Johan Foschia.
 */
const reussite: Reussite = {
  slug: "johan-foschia",
  name: "Johan Foschia",
  outcomeHeadline:
    "D'ex-animateur centre de loisirs post-Covid à Growth Marketer en duo : 1er client signé + nouveau projet en équipe de 4",
  photo: "/images/reussites/yohan.jpg",
  oldJob: "Ex-animateur centre de loisirs (10 ans)",
  city: "Gers",
  age: 37,

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Témoignage Infanteries + Mentorat : reconversion post-Covid à 37 ans",
    },
  ],

  parcoursAvant: [
    "Yohan a 37 ans et vit dans le Gers (sud-ouest). Il a été animateur dans un centre de loisirs pendant 10 ans avant que le Covid ne le pousse à arrêter. Sans direction claire, il cherchait à droite à gauche et a découvert les vidéos de Louis. Le déclic : confiance en lui, parce que Louis ne fait pas vendeur de rêve.",
  ],

  parcoursMaintenant: [
    "Yohan a rejoint l'incubateur il y a environ un an. Il s'est positionné sur la création de sites internet + référencement Google. Trajectoire : 6 premiers mois en autodidacte sur l'incubateur, puis Infanteries en groupe (clic majeur), puis Mentorat 12 semaines (clic personnel).",
    "C'est avec le Mentorat qu'il a signé son 1er client, et qu'il a pu mettre en place une vraie stratégie de prospection adaptée à son profil introverti. Il pivote actuellement vers du community management dans le cadre d'un nouveau projet en équipe de 4 personnes : santé mentale, yoga, sensibilisation environnement. Lui apporte la patte Growth Marketing au collectif.",
  ],

  qa: [
    {
      question: "Tu es passé Incubateur → Infanteries → Mentorat. Pourquoi cette progression ?",
      answer: [
        "Chaque format apporte un niveau d'accompagnement différent. L'incubateur c'est la base et les modules. Les Infanteries c'est un coup de pied au cul en petit groupe motivant pour passer à l'action. Le Mentorat c'est du un-à-un, ultra-personnalisé, où on peut gérer mes blocages spécifiques semaine après semaine.",
        "Pour moi qui suis plutôt introverti et qui doute facilement, c'est passer du général au sur-mesure qui a vraiment fait la différence. C'est avec le Mentorat que j'ai eu mon premier vrai client.",
      ],
    },
    {
      question: "Tu pivotes vers le community management : pourquoi ce changement ?",
      answer: [
        "Une opportunité est arrivée : un projet collectif à 4 personnes (yoga, santé mentale, sensibilisation environnement). Mes amis ont chacun leur expertise (deux profs de yoga, une sur l'environnement, une sur la structure) et moi j'apporte la patte marketing.",
        "Ce qui est cool avec l'accompagnement Agencilab, c'est que tout est accessible. Le marketing en général dépasse largement le seul service sites internet. Demain je peux changer de service en gardant les fondations apprises. Tout est transposable.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: false,
};

export default reussite;
