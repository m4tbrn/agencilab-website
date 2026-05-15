/**
 * Helpers pour parser les searchParams de la brochure :
 *   - `?closer=Tino|Matis` : nom du conseiller assigné au rdv
 *   - `?rdv=2026-05-20T14:00` : date ISO du rdv pour personnaliser l'affichage
 *   - `?prenom=Lucas` : prénom du lead pour maximiser la perso (utilisé partout)
 *
 * Génération du lien :
 *   - Phase 1 (actuel) : le closer compose le lien manuellement après booking iClosed
 *   - Phase 2 (futur) : webhook iClosed → Supabase → short-link auto-généré
 */

/**
 * Normalise un prénom : trim + capitalisation propre.
 * "lucas " → "Lucas"
 * "JEAN-MICHEL" → "Jean-Michel"
 * "élise" → "Élise"
 * Filtre les valeurs douteuses (> 40 chars, caractères non-lettres).
 */
export function normalizePrenom(value?: string | string[]): string | null {
  if (!value) return null;
  const raw = Array.isArray(value) ? value[0] : value;
  const trimmed = raw.trim();
  if (!trimmed || trimmed.length > 40) return null;
  // Autorise lettres unicode + tirets + apostrophes + espaces (Jean-Michel, O'Connor, Marie Claire)
  if (!/^[\p{L}][\p{L}\s'’-]*$/u.test(trimmed)) return null;
  return trimmed
    .toLocaleLowerCase("fr-FR")
    .split(/([\s'’-])/)
    .map((part) =>
      /[\s'’-]/.test(part)
        ? part
        : part.charAt(0).toLocaleUpperCase("fr-FR") + part.slice(1),
    )
    .join("");
}

/**
 * Construit la query string `?closer=X&rdv=Y&prenom=Z` en filtrant les valeurs vides.
 */
export function buildBrochureQuery(opts: {
  closer?: string | null;
  rdvRaw?: string | null;
  prenom?: string | null;
}): string {
  const parts: string[] = [];
  if (opts.closer) parts.push(`closer=${opts.closer}`);
  if (opts.rdvRaw) parts.push(`rdv=${encodeURIComponent(opts.rdvRaw)}`);
  if (opts.prenom) parts.push(`prenom=${encodeURIComponent(opts.prenom)}`);
  return parts.length ? `?${parts.join("&")}` : "";
}

export const KNOWN_CLOSERS = ["Tino", "Matis"] as const;
export type Closer = (typeof KNOWN_CLOSERS)[number];

export function normalizeCloser(
  value?: string | string[],
): Closer | null {
  if (!value) return null;
  const raw = Array.isArray(value) ? value[0] : value;
  const found = KNOWN_CLOSERS.find(
    (c) => c.toLowerCase() === raw.trim().toLowerCase(),
  );
  return found ?? null;
}

/**
 * Parse une string ISO `2026-05-20T14:00` et retourne `le mardi 20 mai à 14h`.
 * Timezone fixée sur Europe/Paris (audience FR).
 * Retourne `null` si la valeur est absente ou invalide → utiliser le fallback "le jour J".
 */
export function formatRdvDate(value?: string | string[]): string | null {
  if (!value) return null;
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return null;

  const d = new Date(raw);
  if (isNaN(d.getTime())) return null;

  const tz = "Europe/Paris";

  const datePart = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: tz,
  }).format(d);

  const hourFormatter = new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: tz,
  });
  const time = hourFormatter.format(d);
  const [hStr, mStr] = time.split(":");
  const h = parseInt(hStr, 10);
  const hourFr = mStr === "00" ? `${h}h` : `${h}h${mStr}`;

  return `le ${datePart} à ${hourFr}`;
}
