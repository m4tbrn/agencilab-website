/**
 * Type d'une "Réussite" (interview détaillée d'un membre Agencilab).
 *
 * Structure minimale et flexible : on transcrit l'interview que Louis fait
 * avec le membre, on garde la vidéo en haut, on raconte son parcours en intro,
 * puis on liste les Q&A telles qu'elles ont été posées/répondues.
 *
 * Tout ce qui est "structuré" (timeline, chiffres mensuels, peurs détaillées...)
 * peut vivre naturellement dans une réponse Q&A si le membre en a parlé.
 */
export type Reussite = {
  /** Slug URL : /reussites/[slug] — kebab-case, ascii only */
  slug: string;

  /** Prénom + initiale du nom (ou pseudo si membre l'a demandé) */
  name: string;

  /** Sous-titre court — outcome chiffrée (max ~80 chars) */
  outcomeHeadline: string;

  /** Photo principale (carré ou portrait, ~800px min). Path /public absolu. */
  photo: string;

  /** Contexte minimal — tous optionnels si le membre ne veut pas les partager */
  oldJob?: string;
  city?: string;
  age?: number;

  /**
   * Vidéos embed en haut de page (YouTube/Vimeo URL embed).
   * 1 ou 2 vidéos. Label optionnel pour distinguer si plusieurs.
   */
  videos?: { url: string; label?: string }[];

  /** Stats clés affichées en bar — optionnel, seulement si chiffres dispo */
  stats?: { label: string; value: string }[];

  /** Ce qu'il faisait / sa situation avant de rejoindre Agencilab (2-4 paragraphes) */
  parcoursAvant: string[];

  /** Sa situation actuelle : ce qu'il fait, où il en est (2-4 paragraphes) */
  parcoursMaintenant: string[];

  /** Questions/réponses transcrites de l'interview avec Louis */
  qa: { question: string; answer: string[] }[];

  /** Date de publication (ISO) — utilisé pour tri + sitemap */
  publishedAt: string;

  /** Featured = mis en avant en haut de l'index */
  featured?: boolean;

  /** Statut draft = ne pas afficher publiquement */
  draft?: boolean;
};
