/**
 * Protection par mot de passe du pitch de vente /pitch.
 *
 * Même principe que /incubateur et /pitch-closing : cookie httpOnly contenant
 * un jeton dérivé (SHA-256), mot de passe via PITCH_PASSWORD (fallback).
 */
import { cookies } from "next/headers";
import { createHash } from "crypto";

export const ACCESS_COOKIE = "pitch_access";

const PASSWORD = process.env.PITCH_PASSWORD ?? "agencilab2026";

function deriveToken(password: string): string {
  return createHash("sha256").update(`pitch::${password}`).digest("hex");
}

export const VALID_TOKEN = deriveToken(PASSWORD);

export function checkPassword(password: string): boolean {
  return deriveToken(password) === VALID_TOKEN;
}

export async function isUnlocked(): Promise<boolean> {
  const store = await cookies();
  return store.get(ACCESS_COOKIE)?.value === VALID_TOKEN;
}
