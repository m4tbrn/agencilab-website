"use server";

import Stripe from "stripe";
import { redirect } from "next/navigation";

export type Plan = "mensuel" | "annuel";

/** Price IDs Stripe — renseignes dans .env.local */
const PRICE_IDS: Record<Plan, string | undefined> = {
  mensuel: process.env.STRIPE_PRICE_MENSUEL,
  annuel: process.env.STRIPE_PRICE_ANNUEL,
};

/**
 * Crée une session Stripe Checkout HÉBERGÉE (redirection) pour le plan
 * choisi et envoie directement le client vers la page de paiement Stripe.
 * Utilisée par les boutons "Choisir le mensuel / l'annuel" de la page offre.
 */
export async function createCheckoutSession(plan: Plan) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY manquante dans .env.local");
  }

  const priceId = PRICE_IDS[plan];
  if (!priceId) {
    throw new Error(
      `Price ID manquant pour le plan "${plan}" (STRIPE_PRICE_${plan.toUpperCase()})`,
    );
  }

  const stripe = new Stripe(secretKey);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://agencilab.com";

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    allow_promotion_codes: true,
    success_url: `${baseUrl}/rejoindre-cash-cow-express/merci?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/methode-growth-m`,
    metadata: { produit: "cash-cow-express", plan },
    subscription_data: {
      metadata: { produit: "cash-cow-express", plan },
    },
  });

  if (!session.url) {
    throw new Error("Stripe n'a pas renvoyé d'URL de paiement");
  }

  redirect(session.url);
}
