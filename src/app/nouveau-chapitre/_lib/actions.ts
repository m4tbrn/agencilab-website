"use server";

import Stripe from "stripe";
import { redirect } from "next/navigation";

/**
 * Checkout Stripe HÉBERGÉ pour l'offre de lancement Agencilab à -70% (997€, paiement unique).
 *
 * Fonctionne avec juste STRIPE_SECRET_KEY dans .env.local (prix construit à la volée).
 * Si tu préfères un Price Stripe déjà créé, mets son id dans STRIPE_PRICE_AGENCILAB_LANCEMENT
 * et il sera utilisé en priorité.
 */
export async function createLancementCheckout() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY manquante dans .env.local");
  }

  const stripe = new Stripe(secretKey);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://agencilab.com";
  const priceId = process.env.STRIPE_PRICE_AGENCILAB_LANCEMENT;

  const line_items: Stripe.Checkout.SessionCreateParams["line_items"] = priceId
    ? [{ price: priceId, quantity: 1 }]
    : [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: 99700, // 997,00 €
            product_data: {
              name: "Agencilab — Offre promotionnelle exclusive -70%",
              description:
                "Accès complet à l'incubateur Agencilab au tarif promotionnel exclusif, une seule fois.",
            },
          },
        },
      ];

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    allow_promotion_codes: true,
    success_url: `${baseUrl}/nouveau-chapitre/merci?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/nouveau-chapitre`,
    metadata: { produit: "agencilab-lancement-70" },
  });

  if (!session.url) {
    throw new Error("Stripe n'a pas renvoyé d'URL de paiement");
  }

  redirect(session.url);
}

/**
 * Paiement en 5 fois : abonnement mensuel de 5 x 219€.
 * ATTENTION : Stripe ne coupe pas tout seul après 5 prélèvements. Il faut soit
 * annuler l'abonnement à la main après le 5e paiement, soit brancher un webhook
 * qui attache une subscription schedule (à faire avant le lancement si on veut
 * l'automatiser). Le montant se pilote via STRIPE_PRICE_AGENCILAB_5X (Price
 * récurrent déjà créé) ou à défaut le prix inline ci-dessous.
 */
export async function createLancement5xCheckout() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY manquante dans .env.local");
  }

  const stripe = new Stripe(secretKey);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://agencilab.com";
  const priceId = process.env.STRIPE_PRICE_AGENCILAB_5X;

  const line_items: Stripe.Checkout.SessionCreateParams["line_items"] = priceId
    ? [{ price: priceId, quantity: 1 }]
    : [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: 23900, // 239,00 € x 5 mois (total 1 195€)
            recurring: { interval: "month" },
            product_data: {
              name: "Agencilab — Offre promotionnelle exclusive -70% (5 fois)",
              description:
                "Accès complet à l'incubateur Agencilab, réglé en 5 mensualités.",
            },
          },
        },
      ];

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items,
    success_url: `${baseUrl}/nouveau-chapitre/merci?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/nouveau-chapitre`,
    metadata: { produit: "agencilab-lancement-70-5x" },
    subscription_data: {
      metadata: { produit: "agencilab-lancement-70-5x", echeances: "5" },
    },
  });

  if (!session.url) {
    throw new Error("Stripe n'a pas renvoyé d'URL de paiement");
  }

  redirect(session.url);
}
