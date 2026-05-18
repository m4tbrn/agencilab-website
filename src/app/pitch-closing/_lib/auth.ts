/**
 * Protection par mot de passe du pitch de closing /pitch-closing.
 *
 * Même principe que /incubateur : cookie httpOnly contenant un jeton dérivé
 * (SHA-256), mot de passe via PITCH_CLOSING_PASSWORD (fallback par défaut).
 */
import { cookies } from "next/headers";
import { createHash } from "crypto";

export const ACCESS_COOKIE = "pitch_closing_access";

const PASSWORD = process.env.PITCH_CLOSING_PASSWORD ?? "agencilab2026";

function deriveToken(password: string): string {
  return createHash("sha256").update(`pitch-closing::${password}`).digest("hex");
}

export const VALID_TOKEN = deriveToken(PASSWORD);

export function checkPassword(password: string): boolean {
  return deriveToken(password) === VALID_TOKEN;
}

export async function isUnlocked(): Promise<boolean> {
  const store = await cookies();
  return store.get(ACCESS_COOKIE)?.value === VALID_TOKEN;
}
