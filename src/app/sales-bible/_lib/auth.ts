/**
 * Protection par mot de passe de la Sales Bible (/sales-bible).
 *
 * Cookie httpOnly + jeton SHA-256, indépendant du cookie de /pitch.
 * Mot de passe via env SALES_BIBLE_PASSWORD (fallback ci-dessous).
 */
import { cookies } from "next/headers";
import { createHash } from "crypto";

export const ACCESS_COOKIE = "sales_bible_access";

const PASSWORD = process.env.SALES_BIBLE_PASSWORD ?? "sales2026";

function deriveToken(password: string): string {
  return createHash("sha256").update(`sales-bible::${password}`).digest("hex");
}

export const VALID_TOKEN = deriveToken(PASSWORD);

export function checkPassword(password: string): boolean {
  return deriveToken(password) === VALID_TOKEN;
}

export async function isUnlocked(): Promise<boolean> {
  const store = await cookies();
  return store.get(ACCESS_COOKIE)?.value === VALID_TOKEN;
}
