/**
 * Config du lancement Agencilab -72%.
 *
 * LANCEMENT_OUVERTURE : date/heure d'ouverture des portes (fuseau Paris).
 *   La page de tease (/lancement/bientot) fait son compte à rebours vers elle.
 * LANCEMENT_FIN : date/heure de fermeture des portes, toujours fixée à minuit
 *   le soir. Personne n'achète entre le dernier email de la soirée et 8h du
 *   matin, donc la fenêtre s'arrête toujours sur une soirée.
 *
 *   Repoussée au mercredi 12 août minuit. En interne, la cause est technique :
 *   le bouton d'achat a planté pendant la quasi-totalité des 40 heures
 *   d'origine (STRIPE_SECRET_KEY absente sur Vercel). En public, la raison
 *   annoncée est la cinquantaine de réponses reçues et les messages arrivés
 *   après minuit demandant une réouverture, ce qui est vrai aussi. Ne pas
 *   remettre la panne dans le copy, les emails de la journée n'en parlent pas.
 */
export const LANCEMENT_OUVERTURE = "2026-08-10T08:00:00+02:00";
export const LANCEMENT_FIN = "2026-08-13T00:00:00+02:00";

export const PRIX_PROMO = "997€";
export const PRIX_NORMAL = "3 600€";
