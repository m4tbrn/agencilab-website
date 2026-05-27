/**
 * Config des deux programmes d'accompagnement Agencilab.
 * Utilisée par les pages du tunnel post-paiement (acompte / onboarding / appel).
 */

export type ProgrammeKey = "incubateur" | "mentorat";

export type Programme = {
  /** Nom court, ex: "Incubateur" */
  nom: string;
  /** Nom avec article défini, ex: "l'Incubateur" */
  nomComplet: string;
  /** Forme "dans l'Incubateur" / "dans le Mentorat" */
  dans: string;
};

export const PROGRAMMES: Record<ProgrammeKey, Programme> = {
  incubateur: {
    nom: "Incubateur",
    nomComplet: "l'Incubateur",
    dans: "dans l'Incubateur",
  },
  mentorat: {
    nom: "Mentorat",
    nomComplet: "le Mentorat",
    dans: "dans le Mentorat",
  },
};

/**
 * Intégrations à brancher (placeholders à remplacer par les vraies valeurs).
 * Centralisé ici pour ne modifier qu'un seul fichier.
 */
export const INTEGRATIONS: Record<
  ProgrammeKey,
  {
    /** Lien WhatsApp du conseiller (page acompte) */
    whatsappConseiller: string;
    /** Form Tally d'onboarding — src complet de l'embed */
    onboardingTallySrc: string;
    /** Slug calLink Cal.com pour l'appel d'intégration */
    appelCalLink: string;
    /** Namespace Cal.com (isolé par programme) */
    appelCalNamespace: string;
  }
> = {
  incubateur: {
    // TODO : remplacer par le vrai lien WhatsApp du conseiller Incubateur
    whatsappConseiller: "https://wa.me/33684080455",
    // Form Tally d'onboarding Incubateur (https://tally.so/r/jaegxR)
    onboardingTallySrc:
      "https://tally.so/embed/jaegxR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    appelCalLink: "team/agencilab/onboarding",
    appelCalNamespace: "onboarding",
  },
  mentorat: {
    // TODO : remplacer par le vrai lien WhatsApp du conseiller Mentorat
    whatsappConseiller: "https://wa.me/33684080455",
    // Form Tally d'onboarding Mentorat (https://tally.so/r/81Ny8k)
    onboardingTallySrc:
      "https://tally.so/embed/81Ny8k?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    appelCalLink: "team/agencilab/onboarding-mentorat",
    appelCalNamespace: "onboarding-mentorat",
  },
};
