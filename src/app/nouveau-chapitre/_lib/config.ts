/**
 * Config du lancement Agencilab -72%.
 *
 * LANCEMENT_OUVERTURE : date/heure d'ouverture des portes (fuseau Paris).
 *   La page de tease (/lancement/bientot) fait son compte à rebours vers elle.
 * LANCEMENT_FIN : date/heure de fermeture des portes, fixée à minuit le soir
 *   du second jour (mardi 23h59), et non plus au matin du troisième. Personne
 *   n'achète entre le dernier email du soir et 8h du matin, donc la fenêtre
 *   s'arrête sur la soirée. La page de vente fait son compte à rebours vers
 *   elle. À repousser de 24h au moment de la réouverture.
 */
export const LANCEMENT_OUVERTURE = "2026-08-10T08:00:00+02:00";
export const LANCEMENT_FIN = "2026-08-12T00:00:00+02:00";

export const PRIX_PROMO = "997€";
export const PRIX_NORMAL = "3 600€";
