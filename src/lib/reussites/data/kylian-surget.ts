import type { Reussite } from "../types";

/**
 * Synthèse du bilan Agencilab de Kylian Surget (transcrit par Whisper).
 *
 * Source : Témoignages/Kylian Surget.md (26:59)
 *
 * À valider avant publication :
 * - [ ] Validation par Kylian
 * - [ ] Ajouter la photo dans /public/images/reussites/kylian-surget.jpg
 * - [ ] Remplacer le placeholder vidéo
 */
const reussite: Reussite = {
  slug: "kylian-surget",
  name: "Kylian Surget",
  outcomeHeadline:
    "De salarié à 4 clients Growth Marketing signés en 1 mois et demi + 35 000€ générés en parallèle",
  photo: "/images/reussites/kylian-surget.jpg",
  oldJob: "Salarié",

  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan d'accompagnement : 4 clients en 1 mois et demi via 300 cold calls",
    },
  ],

  stats: [
    { label: "Clients Growth Marketing signés", value: "4 en 1,5 mois" },
    { label: "CA dropshipping en parallèle", value: "35 000€ en 3 semaines" },
  ],

  parcoursAvant: [
    "Kylian est tombé sur Louis via une pub Instagram et a accroché immédiatement après avoir suivi ses lives. Il a commencé l'accompagnement Agencilab en février 2025. À ce moment-là, il était encore salarié.",
    "Il s'est très vite spécialisé sur deux compétences précises : la création de sites internet et le SEO. Il a choisi sa niche dès le départ : les avocats et les juristes. Pas un choix au hasard, c'est une niche où les budgets sont importants et où le téléphone fonctionne bien.",
  ],

  parcoursMaintenant: [
    "Kylian a quitté son emploi salarié en avril 2025 pour passer à 100% sur son activité Growth Marketing. En seulement 1 mois et demi, il a passé plus de 300 cold calls et signé 4 clients : 3 cabinets d'avocats et son coach sportif (qui était un lead chaud). Pour démultiplier sa vente, il s'est aussi formé en parallèle aux techniques de vente avancées.",
    "Travail en équipe : il bosse avec Sacha (autre membre Agencilab) à plein temps depuis 3 semaines au moment du bilan. Sacha l'aide à structurer la prospection. Côté outils : Kylian va à fond sur le SEO côté contenu et backlinks, et s'appuie sur Cursor / Lovable pour accélérer la production de sites.",
    "Activité parallèle : il fait aussi du dropshipping en équipe avec Sacha. En 3 semaines, ils ont généré 35 000€ de chiffre d'affaires en trouvant 2 produits gagnants sur 3 testés. Cette double activité lui permet de financer sa structuration tout en construisant son activité sur la durée. Côté fiscalité, il est en phase de passage en SASU pour optimiser, tout en gardant sa micro-entreprise jusqu'au plafond annuel pour profiter de l'ACRE.",
  ],

  qa: [
    {
      question: "Tu peux te présenter et raconter comment tu as démarré ?",
      answer: [
        "Je m'appelle Kylian. J'ai commencé l'accompagnement Agencilab en février 2025 et j'ai vraiment commencé à bosser à plein temps en avril, quand j'ai quitté mon taf. Je me suis spécialisé dans le SEO et la création de sites internet, en visant principalement les avocats et les juristes en priorité.",
        "En parallèle, j'ai aussi lancé une activité de dropshipping et je suis allé chercher des compétences additionnelles en vente avec d'autres ressources. Au début j'étais à plein temps salarié, j'ai monté en compétence sur les soirs et les week-ends, puis j'ai sauté à plein temps quand j'ai vu que c'était viable.",
      ],
    },
    {
      question: "300 cold calls pour 4 clients en 1 mois et demi : raconte-nous.",
      answer: [
        "Pour les avocats, le téléphone c'est ce qui marche le mieux. Les emails passent rarement, les réseaux sociaux non plus. Donc j'ai bombardé en cold calling : 300 appels en peu de temps pour ouvrir mes premières conversations.",
        "Sur le ratio, 4 clients sur 300 appels c'est concret. 3 cabinets d'avocats signés en cold call, plus mon coach sportif qui était déjà un lead chaud (donc plus facile à clôturer). Et au-delà du volume, ce qui a tout changé pour moi c'est de bosser sur les techniques de vente avancées en parallèle : comment gérer les objections, comment garder le cadre, comment faire passer les émotions pendant un appel. L'accompagnement Agencilab donne les bases, et c'est très bien pour démarrer, mais sur le pur skill de vente j'ai cherché à approfondir avec une ressource dédiée.",
      ],
    },
    {
      question: "Tu fais aussi 35 000€ en 3 semaines en dropshipping. Comment c'est possible ?",
      answer: [
        "J'ai testé 3 produits et j'ai eu 2 gagnants. C'est ça qui fait toute la différence en dropshipping : trouver le produit gagnant. Et l'avantage que j'avais sur les autres dropshippers, c'est que j'avais des compétences SEO et copywriting récupérées chez Agencilab. Donc quand mes vidéos passaient sur les réseaux, mes pages produits convertissaient bien mieux qu'un dropshipper lambda.",
        "En fait, j'ai utilisé l'accompagnement Agencilab pour amplifier mon dropshipping. C'est ce qui est cool : les compétences que tu acquiers ici ne servent pas qu'au Growth Marketing, elles servent à toutes les activités où tu vends quelque chose en ligne. Bémol : le dropshipping n'est pas une activité long terme, c'est cyclique et les lois européennes (DMA, DSA) se durcissent. Donc le Growth Marketing reste mon vrai pari long terme.",
      ],
    },
    {
      question: "Tu travailles avec un autre membre Agencilab. Pourquoi ?",
      answer: [
        "Je bosse avec Sacha depuis 3 semaines au moment de cet appel, à plein temps. C'est aussi un membre Agencilab. On s'est associés à la fois sur l'activité Growth Marketing (lui m'aide sur la prospection) et sur le dropshipping (on gère 4 produits, 2 chacun). On se complète : moi je suis plus fort sur le copywriting et le SEO, lui est meilleur sur les créatifs.",
        "On a structuré l'association proprement : chacun garde sa micro-entreprise séparée, comme ça on évite de payer des charges réciproques et l'impôt double. On se répartit les produits en deux. C'est plus simple fiscalement et ça nous laisse la flexibilité de partir chacun de notre côté plus tard si on veut.",
      ],
    },
    {
      question: "Qu'est-ce que tu dirais à quelqu'un qui hésite à se lancer ?",
      answer: [
        "On n'a qu'une vie. Si tu te rates, tu te rates, mais vaut mieux avoir des regrets d'avoir échoué que des remords de ne pas avoir essayé. Surtout que se lancer sur Growth Marketing aujourd'hui, c'est une compétence transférable : même si ton activité ne décolle pas comme tu veux, tu te retrouves avec un savoir-faire que tu peux activer sur le dropshipping, sur ton propre produit, sur du freelance.",
        "Et un dernier truc : t'es libre de tes journées. Tu travailles chez toi, tu vas en coworking si t'en as envie. C'est très différent de ce que tu vis en salariat. Ce n'est pas magique, il y a une charge de travail, mais cette liberté change ton rapport au travail en profondeur.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: false,
  draft: false,
};

export default reussite;
