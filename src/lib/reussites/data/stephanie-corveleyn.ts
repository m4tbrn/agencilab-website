import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de Stéphanie Corveleyn (transcrit par Whisper).
 *
 * Source : Témoignages/Stéphanie Corveleyn.md (14:10)
 *
 * ⚠️ Note : Stéphanie est en début de parcours dans cette interview. Le focus
 * du témoignage est sur la transformation personnelle profonde plus que sur
 * les chiffres de l'activité (encore peu d'avancées chiffrées à ce stade).
 *
 * À valider avant publication :
 * - [ ] Validation par Stéphanie
 * - [ ] Ajouter la photo dans /public/images/reussites/stephanie-corveleyn.jpg
 * - [ ] Remplacer le placeholder vidéo
 */
const reussite: Reussite = {
  slug: "stephanie-corveleyn",
  name: "Stéphanie Corveleyn",
  outcomeHeadline:
    "D'enseignante avec 3 enfants à Growth Marketer en lancement, après 3 mois de transformation personnelle profonde",
  photo: "/images/reussites/stephanie-corveleyn.jpg",
  oldJob: "Enseignante",

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement : transformation perso et premiers prospects via réseau",
    },
  ],

  parcoursAvant: [
    "Stéphanie est enseignante. Elle a 3 enfants à charge et un emploi du temps déjà très rempli. Son rapport à l'enseignement était ambivalent : elle aime profondément ce qu'elle fait, mais elle ne supportait plus d'être dépendante des affectations administratives, qui l'envoient là où il y a des postes vacants, sans tenir compte de sa vie personnelle.",
    "Elle voulait sortir de cette dépendance, mais sans renier ce qu'elle aimait dans son emploi salarié. Elle cherchait un accompagnement qui combine l'aspect compétence concrète et l'aspect développement personnel, parce qu'elle sentait que sans le mindset, aucune compétence ne lui suffirait à passer à l'action.",
  ],

  parcoursMaintenant: [
    "Stéphanie a rejoint Agencilab juste avant la rentrée d'août 2025. Sa première grande transformation a été personnelle, et a duré environ 3 mois : elle a remis en cause des habitudes profondes, recadré ses valeurs, repensé son rapport à l'argent. Aujourd'hui elle fait du sport tous les jours, boit davantage d'eau, fait attention à son alimentation, et surtout elle a redéfini pourquoi elle se lève le matin (la transmission, l'éducation de ses enfants, ce qu'elle veut leur offrir).",
    "Sur la partie activité Growth Marketing à proprement parler, elle est encore en phase de lancement. Elle a déjà quelques contacts via son réseau proche qui ont dit oui à une prestation de site internet. Sa stratégie : commencer par sa zone de confiance (le réseau proche) où le lien existe déjà, puis structurer pour scaler.",
    "Elle a un déclic sur la valeur que peut apporter une membre Agencilab face à une prestataire externe : ses amies indépendantes ne sont pas satisfaites des prestataires marketing avec lesquels elles bossent. Quand Stéphanie leur dit qu'elle se forme et qu'elle peut faire le travail, elles préfèrent la choisir elle qu'un prestataire anonyme. Le rapport humain change tout sur les premiers clients.",
  ],

  qa: [
    {
      question: "Présente-toi : qu'est-ce qui t'a amenée chez Agencilab ?",
      answer: [
        "Je suis Stéphanie, je suis enseignante et j'ai 3 enfants. J'aime beaucoup mon emploi, mais c'est compliqué parce que mon administration m'envoie là où il y a des postes vacants. Je voulais sortir de cette dépendance sans renier ce que j'aime dans l'enseignement.",
        "Ce qui m'a attirée chez Agencilab, c'est l'aspect développement personnel autant que l'aspect compétence. Je sentais que sans travailler sur mon mindset, je ne passerais pas à l'action, peu importe la qualité des modules techniques. Et c'est exactement ce qui s'est passé : les premiers mois, j'ai fait un profond changement intérieur.",
      ],
    },
    {
      question: "Tu parles d'un changement de 3 mois : raconte.",
      answer: [
        "Quand j'ai rejoint, je me suis dit que j'allais aller à mon rythme parce que j'ai 3 enfants et un emploi à temps plein. Et en fait, sur les 3 premiers mois, c'est moi qui ai vraiment changé en profondeur. Aujourd'hui je fais du sport tous les jours. Je bois beaucoup plus d'eau. Je fais attention à mon alimentation. Avant, je savais qu'il fallait manger équilibré mais ce n'était pas une priorité. Là c'est devenu une priorité.",
        "J'ai surtout redéfini mes valeurs et mon rapport à l'argent. Avant je pensais qu'il fallait travailler dur pour gagner de l'argent. Maintenant je sais que c'est plutôt où tu places tes actions qui rapporte. Et je me lève le matin parce que je veux offrir une bonne éducation à mes enfants, leur apprendre plein de choses, leur transmettre. Ces valeurs me portent vraiment maintenant.",
      ],
    },
    {
      question: "Comment tu démarres ta prospection avec 3 enfants et un emploi à temps plein ?",
      answer: [
        "Par mon réseau proche, en mode très naturel. J'ai des amies qui ont des activités et qui ne sont pas satisfaites des prestataires marketing avec qui elles bossent. Quand je leur ai dit que je me formais et que je pouvais faire le travail, elles m'ont dit : « Je préfère que ce soit toi qu'un prestataire lambda que je ne connais pas. »",
        "Le lien personnel change tout sur les premiers clients. Elles ne me demandent pas une expertise de 10 ans, elles me demandent de l'écoute, de la disponibilité et un travail propre. Je leur partage ce que j'apprends, on co-construit. Et le bonus : elles vont en parler autour d'elles, donc c'est aussi comme ça que je construis ma base client.",
      ],
    },
    {
      question: "Qu'est-ce que tu dirais à quelqu'un dans ta situation (parent salarié) qui hésite à se lancer ?",
      answer: [
        "Que le développement personnel au démarrage est essentiel. Sans cette base, tu ne tiens pas dans la durée. Il faut absolument la faire avant d'attaquer la partie compétence pure.",
        "Et ensuite, accepte d'aller à ton rythme. Moi j'ai 3 enfants et un boulot à temps plein, je ne pouvais pas tout faire en 3 semaines. J'ai pris mon temps, j'ai construit progressivement, j'ai utilisé mon réseau pour mes premières prestations. L'important c'est la régularité, pas la vitesse.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: false,
};

export default reussite;
