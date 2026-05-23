import type { Metadata } from "next";
import { isUnlocked } from "./_lib/auth";
import PasswordGate from "./_lib/PasswordGate";
import PitchView from "./_lib/PitchView";

export const metadata: Metadata = {
  title: "Pitch de vente — Agencilab",
  description: "Support de présentation interne pour les appels de vente.",
  robots: { index: false, follow: false },
};

// La lecture du cookie d'accès force le rendu dynamique.
export default async function PitchPage() {
  const unlocked = await isUnlocked();
  return unlocked ? <PitchView /> : <PasswordGate />;
}
