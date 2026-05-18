import type { Metadata } from "next";
import { isUnlocked } from "./_lib/auth";
import PasswordGate from "./_lib/PasswordGate";
import ClosingDeck from "./_lib/ClosingDeck";

export const metadata: Metadata = {
  title: "Pitch de closing — Agencilab",
  description: "Support de présentation interne pour les appels de closing.",
  robots: { index: false, follow: false },
};

// La lecture du cookie d'accès force le rendu dynamique.
export default async function PitchClosingPage() {
  const unlocked = await isUnlocked();
  return unlocked ? <ClosingDeck /> : <PasswordGate />;
}
