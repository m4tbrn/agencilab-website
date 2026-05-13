import type { Reussite } from "../types";

/**
 * [EXEMPLE — À REMPLACER PAR UNE VRAIE INTERVIEW]
 *
 * Structure : vidéo embed + parcours intro + Q&A tels que dans l'interview.
 *
 * Avant publication réelle :
 * - Remplacer toutes les données par celles d'un vrai membre
 * - Mettre draft: false uniquement quand l'interview est validée par le membre
 * - Ajouter une vraie photo dans /public/images/reussites/
 * - Remplacer videoUrl par l'embed YouTube/Vimeo du vrai témoignage
 */
const reussite: Reussite = {
  slug: "exemple-thomas",
  name: "[EXEMPLE] Thomas L.",
  outcomeHeadline: "De 1 850€/mois à 4 320€/mois en 7 mois",
  photo: "/images/visages/julien.jpg",
  oldJob: "Technicien de maintenance",
  city: "Lyon",
  age: 31,

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ],

  stats: [
    { label: "Revenu avant", value: "1 850€" },
    { label: "Revenu actuel", value: "4 320€" },
    { label: "Durée", value: "7 mois" },
    { label: "Clients actifs", value: "3" },
  ],

  parcoursAvant: [
    "Thomas a 31 ans et vivait à Lyon avec sa compagne. Il travaillait depuis 8 ans en maintenance industrielle dans une usine de la banlieue lyonnaise : salaire fixe à 1 850€ net par mois, 50h par semaine avec les astreintes du weekend.",
    "Après deux tentatives ratées en ligne (formation e-commerce abandonnée à 800€, tentative de dropshipping arrêtée après avoir brûlé 1 500€ en pub Facebook), il était devenu très méfiant à l'idée de payer pour apprendre quoi que ce soit sur internet.",
  ],

  parcoursMaintenant: [
    "Aujourd'hui, Thomas a 3 clients récurrents en Growth Marketing (cabinets dentaires lyonnais). Son revenu mensuel est passé de 1 850€ à 4 320€, et il vient de passer à mi-temps dans son ancien job industriel pour anticiper l'achat d'un appartement avec sa compagne.",
    "Sa stack quotidienne : campagnes Meta Ads pour l'acquisition de patients, suivi en mensuel récurrent, prospection structurée pour anticiper la croissance.",
  ],

  qa: [
    {
      question: "Comment t'es tombé sur Agencilab ?",
      answer: [
        "Je suivais Louis sur YouTube depuis presque un an je crois. Au début c'était pour comprendre comment le marketing fonctionnait, par curiosité, parce que dans mon ancien emploi on est très loin de tout ça. Je regardais ses vidéos le soir en mangeant, sans projet particulier.",
        "Le déclic ça a été une vidéo où il parlait des plafonds salariaux dans les métiers techniques. J'ai cliqué exactement parce que je vivais ça. Ensuite j'ai vu un de ses documentaires, j'ai pris rendez-vous, et le call avec Pierre m'a convaincu que c'était pas une formation classique mais un vrai accompagnement.",
      ],
    },
    {
      question: "Quelle était ta plus grosse peur avant de te lancer ?",
      answer: [
        "Sincèrement ? Me faire arnaquer encore une fois. J'avais déjà perdu 800€ sur une formation e-commerce qui m'avait laissé tout seul, et 1 500€ en pubs Facebook qui ont rien donné. À chaque fois j'avais l'impression d'être con après coup.",
        "Ce qui m'a rassuré chez Agencilab c'est qu'on m'a montré le contrat avant que je signe quoi que ce soit. Avec les garanties écrites, le suivi hebdo, tout. C'est la première fois que je voyais ça dans une offre comme celle-là.",
      ],
    },
    {
      question: "Combien de temps avant de signer ton premier client ?",
      answer: [
        "3 mois. Mais sur les 2 premiers mois j'étais à 0€ et j'ai vraiment cru que ça allait jamais marcher. J'ai contacté 47 prospects avant le premier oui. À un moment j'ai même envoyé un message à Louis pour lui dire que j'arrêtais.",
        "C'est lui qui m'a rappelé le soir-même pour faire un point. Il m'a fait revoir tout mon angle de pitch en 30 minutes. Je parlais de moi (« je suis Growth Marketer ») alors qu'il fallait parler du problème du client. Le 50e prospect que j'ai contacté avec le nouveau pitch est devenu mon premier client.",
      ],
    },
    {
      question: "Tu vends quoi concrètement à tes clients ?",
      answer: [
        "Je travaille avec des cabinets dentaires. Ce que je leur vends c'est l'acquisition de nouveaux patients via des campagnes Meta Ads ciblées, principalement pour leurs créneaux spécialisés (implantologie, orthodontie adulte) qui ont des marges plus élevées et qui sont souvent sous-remplis.",
        "Concrètement je m'occupe de tout : la stratégie, les visuels, le copy des annonces, le ciblage, l'optimisation. Le cabinet reçoit juste des rendez-vous qualifiés. Je suis facturé en mensuel, c'est entre 850 et 1 500€ par mois par client selon le volume.",
      ],
    },
    {
      question: "À quoi ressemble une semaine type pour toi maintenant ?",
      answer: [
        "Du lundi au mercredi je suis encore en mi-temps à l'usine, de 6h à 13h. C'est un choix : je garde la stabilité du salaire fixe le temps d'avoir 6 mois de trésorerie devant moi.",
        "L'après-midi et le jeudi-vendredi je suis sur Agencilab. Concrètement : 50% du temps sur la production pour mes clients actuels, 30% sur les reportings et calls clients, 20% sur la prospection de nouveaux. Le jeudi je bloque les calls Agencilab (mentor, mastermind). Le samedi matin je continue à me former, et le weekend est complètement off.",
      ],
    },
    {
      question: "Qu'est-ce qui a changé dans ta vie au-delà des revenus ?",
      answer: [
        "Beaucoup de choses. Déjà physiquement, je n'ai plus les douleurs de dos que j'avais à force de travailler debout pendant 8 ans. Ça m'avait jamais frappé à quel point ça pesait avant que ça disparaisse.",
        "Émotionnellement aussi, j'ai retrouvé un sentiment de contrôle sur ma vie. Quand t'es salarié dans une usine, t'as l'impression que les décisions sont prises pour toi. Là je décide qui je prends comme client, comment je structure mes journées, quand je prends mes vacances. Et avec ma compagne on a recommencé à faire des projets — on regarde des appartements à acheter, on parle d'avoir un enfant dans les 2 ans. Ça aurait été impossible à mon ancien salaire.",
      ],
    },
    {
      question: "Si tu devais conseiller quelqu'un qui hésite à se lancer, tu lui dirais quoi ?",
      answer: [
        "De pas croire qu'il faut être quelqu'un de spécial pour y arriver. Moi j'avais aucune compétence marketing au début. J'étais technicien, je passais mes journées avec un multimètre et une clé de 13. Si moi j'ai pu, n'importe qui peut.",
        "Par contre il faut accepter que ça va être dur les 2-3 premiers mois et que personne ne va te porter à bout de bras. L'accompagnement Agencilab est super, mais c'est toi qui dois passer les appels. Ce qui compte c'est de pas abandonner au moment où tu doutes, et d'avoir des gens autour de toi qui te tiennent dans le mouvement quand toi t'es à plat.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: true,
  draft: false,
};

export default reussite;
