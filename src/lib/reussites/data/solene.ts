import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de Solène (transcrit par Whisper).
 *
 * Source : Témoignages/Solène.md (03:36 — bilan court)
 *
 * À valider avant publication :
 * - [ ] Validation par Solène
 * - [ ] Ajouter la photo dans /public/images/reussites/solene.jpg
 * - [ ] Remplacer le placeholder vidéo
 */
const reussite: Reussite = {
  slug: "solene",
  name: "Solène",
  outcomeHeadline:
    "D'étudiante en médecine (3e année) à Growth Marketer : 3 clients sites web signés en parallèle de ses études",
  photo: "/images/reussites/solene.jpg",
  oldJob: "Étudiante en médecine (3e année)",

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement : 3 clients signés en parallèle des études de médecine",
    },
  ],

  stats: [
    { label: "Clients sites web signés", value: "3" },
    { label: "Clientes email marketing", value: "2 (avant pivot)" },
    { label: "Taux closing sur prospects intéressés", value: "1 sur 2-3" },
  ],

  parcoursAvant: [
    "Solène est étudiante en médecine, en 3e année. Quand elle a choisi médecine, l'idée derrière était claire : avoir un emploi qui lui permettrait de voyager, de garder de la flexibilité géographique tout en gagnant correctement sa vie. Une vision noble de la voie médicale.",
    "Mais en faisant ses premiers stages, la réalité du terrain l'a percutée : ce n'était pas du tout l'emploi qu'elle imaginait. Les horaires, la pression, le modèle hiérarchique hospitalier, rien ne correspondait à la liberté qu'elle cherchait. Elle a alors commencé à explorer d'autres options.",
    "Elle s'était déjà inscrite à plusieurs autres accompagnements en ligne avant Agencilab. Son propre constat : elle se définissait comme « une touriste des formations » — tu achètes, tu prends quelques notes, tu demandes le remboursement quelques jours après. Aucun n'avait débouché sur du concret pour elle. Elle a rejoint Agencilab fin août / début septembre 2025.",
  ],

  parcoursMaintenant: [
    "Solène a démarré sa prospection vers mi-septembre 2025. Elle a d'abord testé l'email marketing via Instagram et a signé 2 clientes (qui lui ont surtout servi à monter en compétence et à récolter des témoignages). Puis l'opportunité de créer des sites web pour des entreprises en ligne lui est tombée dessus, et elle a pivoté pour se positionner principalement là-dessus.",
    "Sa méthode actuelle : du cold calling avec un taux de conversion bien structuré. Pour 10 prospects appelés, environ 1 montre un intérêt réel. Et sur ces prospects intéressés, elle signe 1 sur 2 à 3, soit un taux global de conversion d'environ 3-5% sur appel froid (un excellent ratio pour une débutante).",
    "Outcome actuel : 3 clients en sites web actifs, à côté des 2 clientes initiales en email marketing. Tout cela en parallèle de ses études de médecine, sans abandonner son cursus. Elle prévoit d'accélérer la prospection en début 2026 après sa période d'examens.",
    "Ce qui est notable dans son parcours : c'est la 1ère formation où elle a vraiment passé du stade d'achat-curiosité à du concret signé. La différence selon elle : le côté ultra-pratique des modules (« à la fin de chaque vidéo, tu peux y aller, t'appliques les consignes ») et surtout les appels de coaching personnalisés en petit comité.",
  ],

  qa: [
    {
      question: "Tu fais médecine et tu lances une activité Growth Marketing en parallèle. Comment ?",
      answer: [
        "Quand j'ai choisi médecine, je voulais un emploi qui me permettait de voyager, d'avoir de la flexibilité, de gagner ma vie n'importe où. Mais en faisant les stages, j'ai vu la réalité du terrain et ce n'était pas du tout pour moi. Donc j'ai commencé à explorer d'autres options.",
        "Le Growth Marketing me permet de continuer mes études sans les abandonner (je suis en 3e année, j'ai un investissement énorme déjà), tout en construisant en parallèle quelque chose qui me correspondra mieux à terme. C'est exactement la flexibilité que je cherchais et que je ne trouvais pas dans l'hôpital.",
      ],
    },
    {
      question: "Tu disais que tu étais « une touriste des formations » avant. Qu'est-ce qui change avec Agencilab ?",
      answer: [
        "C'est vrai, j'avais fait plusieurs autres accompagnements avant et le pattern était toujours le même : j'achetais, je prenais quelques notes, je demandais le remboursement quelques jours après. Aucun ne m'avait fait passer à l'action.",
        "Chez Agencilab, c'est le côté concret qui a tout changé pour moi. À la fin de chaque vidéo, tu peux aller appliquer immédiatement. Les modules ne sont pas généralistes, ils te donnent une consigne, tu prends l'après-midi, tu fais l'action. Et surtout, dès que tu te poses une question, il y a une vidéo qui répond. C'est ce niveau de structuration qui m'a fait passer du stade « touriste » au stade « actrice ».",
      ],
    },
    {
      question: "Ton ratio de prospection : raconte.",
      answer: [
        "Je fais surtout du cold calling. Sur 10 prospects que j'appelle à froid, environ 1 est intéressé pour creuser un peu. Et sur ces prospects intéressés, je signe 1 sur 2 ou 3.",
        "Donc sur 100 appels froids, je signe environ 3-5 clients. C'est un ratio qui me convient bien pour la phase actuelle. J'ai déjà 3 clients sites web actifs et 2 clientes en email marketing avant le pivot. L'objectif maintenant c'est de scaler la prospection au début 2026 quand je sortirai de ma période d'examens.",
      ],
    },
    {
      question: "Qu'est-ce qui est vraiment la valeur ajoutée de l'incubateur pour toi ?",
      answer: [
        "Le coaching en petit comité. Quand on n'est pas extrêmement nombreux, vous prenez vraiment le temps (même si ça dépasse parfois l'heure prévue) de donner 10-15 minutes à chacun. Tu peux mettre en avant ta problématique précise, vous répondez avec plusieurs angles parce qu'il y a souvent toi et Lucas qui donnez des avis différents sur la même question.",
        "Et au-delà du coaching, il y a la cohésion entre membres. On se parle entre nous sur Instagram, je peux poser une question à un autre membre directement. C'est vraiment un côté communauté que je n'avais jamais vécu dans les autres accompagnements. Tu sais que si tu as un problème, tu ne seras jamais seul à le résoudre.",
      ],
    },
    {
      question: "À une autre étudiante qui hésite à investir tôt dans un accompagnement, tu dirais quoi ?",
      answer: [
        "D'arrêter d'être une touriste. C'est exactement le piège dans lequel j'étais avant Agencilab : tu achètes plein de petites formations, tu prends 3 notes, tu te dis « je le ferai plus tard ». Tu n'avances pas.",
        "Ce qu'il faut chercher c'est un accompagnement qui te force au concret : des consignes à appliquer immédiatement, des coachings où tu peux poser tes questions précises, une communauté pour ne pas lâcher. Si tu trouves ça, fonce. Plus tu commences tôt, plus tu construis en parallèle de tes études et plus tu te donnes d'options pour ta vie d'après.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: true,
  draft: false,
};

export default reussite;
