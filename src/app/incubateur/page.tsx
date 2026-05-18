import type { Metadata } from "next";
import { isUnlocked } from "./_lib/auth";
import PasswordGate from "./_lib/PasswordGate";
import IncubateurDeck from "./_lib/IncubateurDeck";

export const metadata: Metadata = {
  title: "Pitch deck — L'Incubateur par Agencilab",
  description: "Présentation privée de L'Incubateur.",
  robots: { index: false, follow: false },
};

// La lecture du cookie d'accès force le rendu dynamique.
export default async function IncubateurPage() {
  const unlocked = await isUnlocked();
  return unlocked ? <IncubateurDeck /> : <PasswordGate />;
}
