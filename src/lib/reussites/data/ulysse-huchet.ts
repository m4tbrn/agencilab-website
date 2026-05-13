import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab d'Ulysse Huchet (transcrit par Whisper).
 *
 * Source : Témoignages/Ulysse Huchet.md (23:25)
 *
 * À valider avant publication :
 * - [ ] Validation par Ulysse
 * - [ ] Ajouter la photo dans /public/images/reussites/ulysse-huchet.jpg
 * - [ ] Remplacer le placeholder vidéo
 */
const reussite: Reussite = {
  slug: "ulysse-huchet",
  name: "Ulysse Huchet",
  outcomeHeadline:
    "À 19 ans et encore lycéen : 4 sites couvreurs signés en parallèle des cours via 1 774 cold calls",
  photo: "/images/reussites/ulysse-huchet.jpg",
  oldJob: "Lycéen (et ex-achat-revente sneakers)",
  age: 19,

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement : 1 774 cold calls et 4 clients à 19 ans",
    },
  ],

  stats: [
    { label: "Sites signés", value: "4" },
    { label: "Tarif site (paiement unique)", value: "1 200€" },
    { label: "Tarif site mensualisé", value: "100€/mois × 12" },
    { label: "Google Ads en complément", value: "200-300€/client" },
  ],

  parcoursAvant: [
    "Ulysse a 19 ans. À 15-16 ans il avait déjà une petite activité d'achat-revente de sneakers : il restaurait des chaussures, refaisait la peinture, les nettoyait, et les revendait avec plus-value sur Vinted. Ça marchait bien, jusqu'au jour où il s'est fait bannir de Vinted.",
    "Il s'est mis à chercher autre chose. Il a regardé beaucoup de livres, de YouTube, d'idées d'activités en parallèle de ses études. Il est tombé sur les vidéos YouTube de Louis et a décidé de rejoindre Agencilab en fin 2023, alors qu'il avait 18 ans, juste avant son passage en post-bac.",
    "Le déclic était clair : il sentait que la voie salariat classique ne lui correspondait pas. Il avait fait quelques stages dans le cadre de ses études et avait constaté que travailler pour quelqu'un n'était pas dans son ADN. Il voulait construire quelque chose à lui en parallèle de son cursus.",
  ],

  parcoursMaintenant: [
    "Ulysse est toujours étudiant (en post-bac). Il consacre 3 à 4 heures par jour à son activité Growth Marketing en parallèle des cours (et 6 à 7 heures par jour pendant les vacances scolaires). Sa niche est ultra-précise : les couvreurs (artisans toiture) partout en France.",
    "Sa méthode de prospection est purement quantitative : il a constitué une liste de 1 800 couvreurs via Google Maps, scrapé les emails et numéros, puis a passé 1 774 cold calls. Il obtient environ 1 R1 (rendez-vous découverte) pour 10 appels, soit ~170 R1 cumulés. Il a affiné son pitch au fil du temps avec des maquettes de pages web préparées qu'il envoie en post-appel.",
    "Outcome : 4 sites web signés, dont 2 en paiement unique à 1 200€ et 2 en mensualisé sur 12 mois à 100€/mois (il a remarqué que beaucoup d'artisans se refroidissent face à un paiement unique, donc il propose l'étalement). En plus des sites, il signe ponctuellement des campagnes Google Ads à 200-300€ pour des clients existants qui veulent booster leur fiche établissement.",
    "Ses prochains chantiers : améliorer son taux de closing (il close ~3% sur appel direct, l'objectif c'est 20-30%) en s'enregistrant à chaque R1 pour s'écouter et corriger, puis scaler en déléguant les sites ou le cold call à d'autres membres Agencilab.",
  ],

  qa: [
    {
      question: "À 19 ans et encore lycéen : comment tu t'organises ?",
      answer: [
        "Ça dépend des semaines. Quand je suis en cours, je dégage 3 à 4 heures par jour le soir sur l'activité (prospection, R1, création des sites). En vacances scolaires, je monte à 6-7 heures par jour. Le jeudi-vendredi je ne suis pas en cours toute la journée, donc je peux pousser plus.",
        "J'ai surtout intégré une discipline quotidienne : je me cale tous les jours une session de relances de R1, parce que les artisans c'est très long à signer, ils ne te rappellent pas, il faut sans cesse insister. C'est ça la vraie clé sur ma niche.",
      ],
    },
    {
      question: "1 774 cold calls : raconte-nous ta méthode.",
      answer: [
        "J'ai fait une liste de 1 800 couvreurs en scrappant tous les départements de France via Google Maps. Numéros de téléphone, emails, adresses, tout. Et après j'ai bombardé en cold call : aujourd'hui j'en suis à 1 774 appels passés. C'est rude mais c'est mathématique.",
        "Ma niche est compliquée par nature : les artisans, c'est évasif, ils sont toujours les pieds dans le guidon, ils ne te rappellent pas. Donc il faut relancer encore et encore. Sur les 1 774 appels, je dois obtenir environ 1 R1 pour 10 appels qui aboutissent à une vraie conversation, soit environ 170 R1 effectués. Sur ces 170 R1, j'ai signé 4 sites pour l'instant — donc clairement mon taux de closing est ma marge de progression #1.",
      ],
    },
    {
      question: "Comment tu vends à des artisans qui ont peur d'être arnaqués ?",
      answer: [
        "C'est l'objection classique sur les artisans : quand je leur dis 1 200€ en paiement unique, beaucoup se refroidissent. Ils ont peur, ils se demandent si c'est du sérieux. Donc j'ai trouvé une solution : je propose un paiement mensualisé à 100€/mois sur 12 mois. C'est moins rentable pour moi (l'argent a plus de valeur maintenant que dans un an), mais à chaque fois ça me débloque la signature.",
        "Et pour les rassurer en amont, j'envoie des maquettes de pages web en post-appel. Ils voient concrètement à quoi va ressembler leur site, ça les rassure énormément. La maquette + le paiement étalé, c'est la combo qui fait basculer.",
      ],
    },
    {
      question: "Tu as quel objectif pour la suite ?",
      answer: [
        "Court terme (par trimestre) : passer à 2 000-3 000€/mois de CA stable pour avoir vraiment un matelas de sécurité financier. Long terme, ouvrir mon activité, recruter, déléguer la production des sites et le cold call pour me concentrer sur le développement commercial.",
        "Ce qui me freine pour l'instant c'est mon taux de closing. Quand tu fais 1 R1 sur 10 appels, et que tu signes 1 sur 40 R1 environ, tu plafonnes. Mon plan : enregistrer mes prochains R1, les écouter avec un coach Agencilab pour identifier ce que je rate, et améliorer progressivement. Si je passe à 20% de closing sur mes R1 actuels avec le même volume, je triple mes clients sans rien changer d'autre.",
      ],
    },
    {
      question: "Qu'est-ce que tu dirais à un autre jeune qui hésite à investir dans un accompagnement à 18-19 ans ?",
      answer: [
        "Faut pas avoir peur d'investir sur soi. Beaucoup de personnes de notre génération ont l'idéologie que toutes les formations en ligne, c'est du scam. Et je comprends parce qu'il y en a beaucoup qui sont nulles. Mais ne pas investir sur sa propre montée en compétence, c'est plus risqué que d'investir.",
        "Et mon deuxième conseil : aller à l'essentiel. Moi au début j'ai un peu traînassé sur les tâches secondaires, j'ai perdu pas mal de temps. La tâche essentielle quand tu démarres, c'est la prospection : signer ton premier client. Tout le reste c'est secondaire. Concentre-toi à 80% sur ça les premiers mois et tu auras des résultats.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: true,
  draft: false,
};

export default reussite;
