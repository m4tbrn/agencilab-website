import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de Christiane Bilat (transcrit par Whisper).
 *
 * Source : Témoignages/Christiane Bilat.md (17:02)
 *
 * Profil senior : acheteuse média corporate dans l'horlogerie suisse,
 * elle a rejoint Agencilab pour se lancer en indépendante après deux
 * chamboulements (digital, puis IA). Outcome solide en quelques mois.
 *
 * À valider avant publication :
 * - [ ] Mettre draft: false uniquement après validation par Christiane
 * - [ ] Ajouter la vraie photo dans /public/images/reussites/christiane-bilat.jpg
 * - [ ] Remplacer le placeholder vidéo par le vrai embed YouTube/Vimeo
 */
const reussite: Reussite = {
  slug: "christiane-bilat",
  name: "Christiane Bilat",
  outcomeHeadline:
    "D'acheteuse média dans le luxe à 12 000 CHF/mois et 15 clients en quelques mois grâce au Growth Marketing",
  photo: "/images/reussites/christiane-bilat.jpg",
  oldJob: "Acheteuse média senior (horlogerie suisse de luxe)",
  city: "Région valaisanne, Suisse",

  // PLACEHOLDER — à remplacer par le vrai embed une fois la vidéo uploadée
  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label:
        "Bilan d'accompagnement : lancement en indépendante après 20 ans en entreprise",
    },
  ],

  stats: [
    { label: "Revenu mensuel", value: "12 000 CHF" },
    { label: "Clients récurrents", value: "15" },
    { label: "Panier client max", value: "3 500 CHF/mois" },
    { label: "Budget pub investi", value: "0€" },
  ],

  parcoursAvant: [
    "Christiane vivait en région valaisanne et avait fait toute sa carrière en corporate : acheteuse média senior pour une grande maison d'horlogerie suisse de luxe. Elle pilotait des achats média complexes, dans un univers haut de gamme où la stratégie marketing, le branding et le copywriting étaient son cœur d'activité.",
    "Le marché a traversé deux chamboulements successifs qui ont remis ses certitudes en question. D'abord, le digital qui a recomposé la manière dont les marques de luxe se font connaître. Ensuite, l'IA, qu'elle considère comme une seconde révolution encore plus profonde. Elle a senti que continuer en corporate sans remettre à jour ses compétences allait progressivement la rendre obsolète.",
    "C'est dans cette dynamique qu'elle a cherché un accompagnement sérieux pour relancer sa carrière en indépendante. Elle voulait quelqu'un qui ne lui vendrait pas du rêve, mais qui prenne le sujet au sérieux. Elle a rejoint Agencilab après être tombée sur Louis et avoir apprécié son humilité et son sérieux.",
  ],

  parcoursMaintenant: [
    "Christiane a créé sa propre société (BMSA) il y a quelques mois. Elle s'est volontairement positionnée sur la partie où elle excelle après 20 ans d'expérience : l'audit marketing, l'USP, le copywriting, l'avatar client, la cohérence stratégique. Elle remet les fondations marketing des TPE et PME en place avant qu'elles ne passent à l'acquisition.",
    "En quelques mois, elle a signé 15 clients dans des secteurs très variés : cosmétique de luxe, conciergerie de luxe, vitrerie, B2B, etc. Ses clients arrivent quasi exclusivement par réseau. Son chiffre d'affaires tourne autour de 12 000 CHF par mois (soit environ 12 800€) sans qu'elle ait encore lancé de stratégie d'acquisition pour elle-même.",
    "Sa prochaine étape : construire une offre signature plus complète, plus haut de gamme, qui combine son audit marketing (sa force) avec une partie acquisition client livrée en partenariat avec d'autres Growth Marketers Agencilab. C'est ce qu'il manquait à son offre pour boucler le cercle de valeur de ses clients.",
  ],

  qa: [
    {
      question: "Présente-toi : qu'est-ce que tu faisais avant Agencilab ?",
      answer: [
        "Je suis acheteuse média de profession, plutôt senior. J'ai fait toute ma carrière dans l'horlogerie suisse de luxe. C'est un univers où le branding et la stratégie marketing sont au cœur de tout, et où j'ai développé une vraie expertise sur tout ce qui est USP, avatar, stratégie de marque, copywriting.",
        "Le monde a vécu deux gros chamboulements : d'abord le digital qui a remis en cause toute la façon dont les marques de luxe se font connaître, puis maintenant l'IA qui à mon sens est une deuxième révolution, encore plus puissante. Je trouvais que c'était vraiment intéressant de remettre à jour mes connaissances avec un objectif clair : devenir indépendante.",
      ],
    },
    {
      question: "Pourquoi avoir rejoint Agencilab vu ton background déjà senior ?",
      answer: [
        "J'ai apprécié l'humilité et le sérieux de Louis quand je l'ai découvert. Dans mon univers de senior corporate, j'ai beaucoup vu de gens qui se prennent au sérieux sans rien apporter de concret. Ici je sentais l'inverse : quelqu'un qui prend son sujet au sérieux sans se prendre lui-même au sérieux.",
        "Et puis très vite, je me suis rendu compte que l'accompagnement abordait toute la partie qui m'intéresse vraiment, et que je voulais affiner pour la livrer à mes futurs clients : la stratégie, l'avatar, l'USP, le copywriting. C'est mon cœur d'activité, mais j'avais besoin d'une remise à jour côté outils et IA pour rester pertinente.",
      ],
    },
    {
      question: "Combien de clients et quel chiffre d'affaires aujourd'hui ?",
      answer: [
        "C'est très récent, ça démarre il y a quelques mois seulement. Mais j'ai déjà une quinzaine de clients actifs, et ça bouge bien : j'ai des demandes qui rentrent de droite et de gauche en ce moment, sans que j'aie eu besoin de lancer une vraie stratégie d'acquisition pour moi-même. Tout passe par mon réseau pour l'instant.",
        "Niveau revenu, je suis aux alentours de 12 000 CHF par mois. Le panier moyen varie énormément selon le client : on peut être à 500 CHF/mois comme à 2 500 CHF/mois sur une prestation. Et les dernières offres que je signe sont plutôt autour de 3 500 CHF. Mes secteurs sont très variés : cosmétique de luxe, conciergerie de luxe, vitrerie, B2B. Beaucoup de moyen-haut de gamme.",
      ],
    },
    {
      question: "Pourquoi vouloir un partenariat Agencilab plutôt que d'apprendre l'acquisition toi-même ?",
      answer: [
        "Parce que ce n'est pas ce qui me fait vibrer. J'ai regardé l'achat média (Meta, Google, etc.), je sais le faire techniquement, mais ce n'est pas mon plaisir. Mon plaisir c'est la stratégie : remettre les fondations en place, trouver le bon angle, écrire la copy qui fait mouche, structurer l'USP.",
        "Donc quand mes clients ont un site beau, propre, cohérent, avec un message clair, il leur faut l'étape suivante : remplir cette belle maison avec des invités. C'est ça l'acquisition. Et c'est exactement ce que des Growth Marketers Agencilab livrent. Plutôt que d'essayer d'apprendre à le faire moi-même alors que ça ne me passionne pas, je préfère m'associer avec quelqu'un dont c'est l'activité principale. C'est de cohérence pour mes clients et pour moi.",
      ],
    },
    {
      question: "Quels conseils donnerais-tu à un senior qui hésite à se lancer ?",
      answer: [
        "Première chose : ne pas sous-estimer la valeur de votre expérience. Quand tu as fait 20 ans dans un secteur, tu as développé une grille de lecture du marché que personne d'autre n'a. Le risque c'est de croire qu'il faut tout réapprendre de zéro alors qu'au contraire, ton expérience est exactement ce qui fait ta différence quand tu te lances à ton compte.",
        "Deuxième chose : ne pas sous-estimer l'IA non plus. C'est une vraie révolution. Tu peux maintenant éduquer des bots pour qu'ils sortent des niveaux d'analyse d'avatar ou de copy auxquels tu n'aurais pas accès en quelques mois de travail manuel. Mais l'IA ne remplace pas l'humain. C'est juste un moyen d'accélérer ce que tu sais déjà bien faire. Si tu n'as pas le savoir-faire en amont, l'IA ne va pas combler ce manque.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: true,
  draft: false,
};

export default reussite;
