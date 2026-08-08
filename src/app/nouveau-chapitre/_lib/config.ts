/**
 * Config du lancement Agencilab -70%.
 *
 * LANCEMENT_OUVERTURE : date/heure d'ouverture des portes (fuseau Paris).
 *   La page de tease (/lancement/bientot) fait son compte à rebours vers elle.
 * LANCEMENT_FIN : date/heure de fermeture des portes (ouverture + 48h).
 *   La page de vente (/lancement) fait son compte à rebours vers elle.
 *   À repousser de 24h au moment de la réouverture.
 */
export const LANCEMENT_OUVERTURE = "2026-08-10T08:00:00+02:00";
export const LANCEMENT_FIN = "2026-08-12T08:00:00+02:00";

export const PRIX_PROMO = "997€";
export const PRIX_NORMAL = "3 600€";
