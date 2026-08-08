import { LANCEMENT_OUVERTURE } from "@/app/nouveau-chapitre/_lib/config";

/** Format ICS : dates en UTC, AAAAMMJJTHHMMSSZ. */
function icsDate(d: Date) {
  return d
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

/**
 * Fichier .ics "Ouverture Agencilab -70%" pour Apple Calendar / Outlook.
 * Événement d'une heure au moment de l'ouverture, avec le lien de la page.
 */
export function GET(request: Request) {
  const debut = new Date(LANCEMENT_OUVERTURE);
  const fin = new Date(debut.getTime() + 60 * 60 * 1000);
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
  const url = `${baseUrl}/nouveau-chapitre`;

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Agencilab//Lancement//FR",
    "BEGIN:VEVENT",
    `UID:lancement-70-${icsDate(debut)}@agencilab.com`,
    `DTSTAMP:${icsDate(new Date(0))}`,
    `DTSTART:${icsDate(debut)}`,
    `DTEND:${icsDate(fin)}`,
    "SUMMARY:Ouverture Agencilab à -70% (48h seulement)",
    `DESCRIPTION:Les portes ouvrent. Une seule fois\\, 48 heures. ${url}`,
    `URL:${url}`,
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Agencilab ouvre à -70% dans 15 minutes",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="agencilab-lancement.ics"',
    },
  });
}
