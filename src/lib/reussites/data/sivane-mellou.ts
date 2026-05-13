import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de Sivane Mellou (transcrit par Whisper).
 *
 * Source : Témoignages/Sivane Mellou.md (35:55)
 *
 * À valider avant publication :
 * - [ ] Validation par Sivane
 * - [ ] Ajouter la photo
 * - [ ] Remplacer le placeholder vidéo
 */
const reussite: Reussite = {
  slug: "sivane-mellou",
  name: "Sivane Mellou",
  outcomeHeadline:
    "À 20 ans, étudiant ingénieur à Strasbourg : 1er client signé à 500€ + 20 R1 décrochés sur sa 1ère niche",
  photo: "/images/reussites/sivane-mellou.jpg",
  oldJob: "Étudiant ingénieur",
  city: "Strasbourg",
  age: 20,

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement : 1er client signé en 5 mois en parallèle des études",
    },
  ],

  stats: [
    { label: "1er client signé", value: "500€" },
    { label: "Taux R1 (sur 130 appels)", value: "15%" },
  ],

  parcoursAvant: [
    "Sivane a 20 ans et est étudiant en ingénierie à Strasbourg. Il suit Louis depuis longtemps, et il y a un an environ il s'était inscrit à un appel sans bien savoir de quoi il s'agissait, et avait initialement refusé l'accompagnement parce que c'était trop tôt mentalement.",
    "Cette année, après que Louis en a reparlé dans une vidéo, Sivane a réservé un nouvel appel et saisi l'opportunité. Sa motivation : devenir indépendant à terme, sans abandonner ses études d'ingénieur. Il a rejoint Agencilab en septembre 2025 avec l'idée de construire en parallèle de son cursus.",
  ],

  parcoursMaintenant: [
    "Cinq mois après son démarrage, Sivane a signé son 1er client payant à 500€ (un vignoble dans le département de l'Aube). Avant cette signature, il avait passé environ 130 cold calls répartis sur les départements 02 à 10. Sur ces appels, il a décroché plus de 20 R1 (rendez-vous découverte), soit un taux de R1 d'environ 15%. Excellent ratio pour un démarrage en parallèle des études.",
    "Son insight stratégique : la prospection département par département est puissante pour segmenter, mais elle l'a piégé sur un point. Dans le département de l'Aube ça a marché du tonnerre, mais quand il a switché aux autres départements voisins, son taux de réponse a chuté. Diagnostic : il a perdu en énergie (inconsciemment) au moment de la transition. Mais aussi il n'avait pas testé les grands départements vinicoles (Bordeaux, Côte du Rhône, Châteauneuf-du-Pape, etc.).",
    "Pivot en cours : il continue les vignerons en parallèle d'une nouvelle niche (chambres d'hôtes via Booking/Airbnb, plus compliquées à prospecter car les numéros ne sont pas toujours affichés). En parallèle, il a accepté une opportunité de prospecter pour Yoann (autre membre Agencilab plus avancé) pour sécuriser un revenu pendant qu'il développe sa propre activité. Objectif : 2 000€/mois de revenus sécurisés (toutes sources confondues), pour avoir un matelas sans abandonner ses études.",
  ],

  qa: [
    {
      question: "Tu fais des études d'ingénieur ET tu lances une activité Growth Marketing. Comment ?",
      answer: [
        "C'est compliqué, je ne vais pas mentir. C'est démotivant d'avoir deux activités où l'une (les études) c'est juste étudier alors que l'autre (Agencilab) te rapporte de l'argent et des résultats concrets. Mais je tiens parce que je veux pas tout sacrifier d'un coup : j'ai investi des années dans mon cursus.",
        "Mon premier mois en Agencilab c'était difficile, parce que j'étais à la fois en pleine charge cours et en pleine charge formation. Mais aujourd'hui j'ai pris le rythme. Le travail c'est la régularité, pas l'intensité quotidienne. Je préfère faire 1-2 heures bien focalisées chaque jour que de tout faire d'un coup le week-end.",
      ],
    },
    {
      question: "1er client signé à 500€ : raconte.",
      answer: [
        "C'est un vignoble dans le département de l'Aube, signé il y a même pas un mois. C'est mon premier client réellement payant. Avant ça j'avais un client \"gratuit\" pour apprendre à livrer, mais lui c'est le vrai. 500€ pour la prestation.",
        "Ce qui m'a frappé : pour arriver à cette signature, j'ai passé environ 130 cold calls répartis sur les départements 02 à 10. J'ai décroché plus de 20 R1 sur l'ensemble. Donc statistiquement, je suis dans un bon ratio, sauf que dans les autres départements à part l'Aube, mon taux de réponse a chuté. Le diagnostic c'est en partie l'énergie qui s'effondre quand tu changes de zone, et en partie le fait que je n'avais pas testé les départements à forts vignobles (Bordeaux, Châteauneuf-du-Pape).",
      ],
    },
    {
      question: "Tu as fait quoi face au plateau après ton 1er client ?",
      answer: [
        "J'ai eu une phase de doute. J'ai pivoté vers les chambres d'hôtes (Booking/Airbnb) où la prospection est plus compliquée parce que les numéros sont moins visibles. J'ai pris peu d'appels sur cette nouvelle niche pour l'instant, c'est en cours.",
        "En parallèle, j'ai accepté l'opportunité de prospecter pour Yoann, un autre membre Agencilab plus avancé. Ça me permet d'avoir un revenu plus sécurisé pendant que je construis ma propre activité. La règle que j'ai apprise grâce à Louis sur ce bilan : choisir 3 niches au démarrage et s'y tenir avec constance et la même énergie partout, pas changer dès qu'une zone semble moins prometteuse. Je l'applique maintenant.",
      ],
    },
    {
      question: "Qu'est-ce que tu dirais à un autre étudiant qui hésite à se lancer ?",
      answer: [
        "Premièrement : ne pas avoir peur d'être arrivé trop tard. C'était ma plus grosse peur au démarrage (que les meilleurs clients soient déjà tous pris par d'autres). En vérité, il y a constamment de nouveaux vignerons, de nouveaux artisans, de nouveaux acteurs. Le marché se renouvelle.",
        "Deuxièmement : ne pas se comparer aux autres qui réussissent en 1-3 mois. Chacun a son timing, son temps disponible, ses contraintes. Moi je suis étudiant, je n'ai pas le même temps qu'un membre à plein temps. Mais j'avance, j'ai signé un client en 5 mois, et c'est la trajectoire qui compte sur le long terme. On construit un projet long terme, pas un coup de chance court terme.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: false,
};

export default reussite;
