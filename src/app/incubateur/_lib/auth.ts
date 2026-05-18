/**
 * Protection par mot de passe du pitch deck /incubateur.
 *
 * Le cookie ne stocke jamais le mot de passe en clair : il contient un
 * jeton dérivé (SHA-256). Le mot de passe est lu depuis la variable
 * d'environnement INCUBATEUR_PASSWORD, avec un fallback par défaut pour
 * que la page fonctionne même sans .env (à surcharger en prod sur Vercel).
 */
import { cookies } from "next/headers";
import { createHash } from "crypto";

export const ACCESS_COOKIE = "incubateur_access";

const PASSWORD = process.env.INCUBATEUR_PASSWORD ?? "agencilab2026";

function deriveToken(password: string): string {
  return createHash("sha256").update(`incubateur::${password}`).digest("hex");
}

/** Jeton attendu dans le cookie pour un accès valide. */
export const VALID_TOKEN = deriveToken(PASSWORD);

/** Vrai si le mot de passe saisi correspond. */
export function checkPassword(password: string): boolean {
  return deriveToken(password) === VALID_TOKEN;
}

/** Vrai si la requête courante porte un cookie d'accès valide. */
export async function isUnlocked(): Promise<boolean> {
  const store = await cookies();
  return store.get(ACCESS_COOKIE)?.value === VALID_TOKEN;
}
