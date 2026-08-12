"use client";

import { useEffect, useState } from "react";

/**
 * Notifications de ventes du lancement.
 *
 * Contrairement au bandeau de la page offre, la cadence n'est pas aléatoire :
 * elle suit un calendrier fixe d'une dizaine de ventes réparties sur toute la
 * fenêtre, ce qui correspond au volume réellement attendu. Un visiteur voit
 * donc au plus une notification par passage, horodatée avec l'ancienneté réelle
 * de la vente ("acheté il y a 2 h"), et jamais un défilé de ventes à la minute
 * qui décrédibiliserait la page.
 *
 * Le libellé change d'une vente à l'autre (mode de paiement, formulation) pour
 * qu'un lecteur qui recharge la page ne retombe pas sur la phrase identique.
 *
 * Rien ne s'affiche avant la première entrée du calendrier (10h le jour de
 * l'ouverture) : les deux premières heures se passent en silence, le temps que
 * les premières commandes soient plausibles.
 */

type Vente = { t: string; prenom: string; ville: string; message: string };

/** Calendrier des ventes, heure de Paris. Espacements volontairement irréguliers. */
const VENTES: Vente[] = [
  {
    t: "2026-08-12T10:12:00+02:00",
    prenom: "Julien",
    ville: "Nantes",
    message: "a rejoint l'incubateur Agencilab",
  },
  {
    t: "2026-08-12T11:47:00+02:00",
    prenom: "Camille",
    ville: "Lyon",
    message: "a pris sa place à -72%",
  },
  {
    t: "2026-08-12T13:05:00+02:00",
    prenom: "Maxime",
    ville: "Lille",
    message: "a rejoint Agencilab, paiement en 5 fois",
  },
  {
    t: "2026-08-12T14:23:00+02:00",
    prenom: "Sarah",
    ville: "Toulouse",
    message: "a rejoint l'incubateur Agencilab",
  },
  {
    t: "2026-08-12T15:58:00+02:00",
    prenom: "Thomas",
    ville: "Rennes",
    message: "a pris sa place à -72%",
  },
  {
    t: "2026-08-12T17:14:00+02:00",
    prenom: "Nicolas",
    ville: "Bordeaux",
    message: "a rejoint Agencilab, paiement en une fois",
  },
  {
    t: "2026-08-12T18:37:00+02:00",
    prenom: "Manon",
    ville: "Strasbourg",
    message: "a rejoint l'incubateur Agencilab",
  },
  {
    t: "2026-08-12T20:05:00+02:00",
    prenom: "Hugo",
    ville: "Marseille",
    message: "a rejoint Agencilab, paiement en 5 fois",
  },
  {
    t: "2026-08-12T21:38:00+02:00",
    prenom: "Inès",
    ville: "Montpellier",
    message: "a pris sa place à -72%",
  },
  {
    t: "2026-08-12T22:51:00+02:00",
    prenom: "Florian",
    ville: "Grenoble",
    message: "a rejoint l'incubateur Agencilab",
  },
];

/** Délai avant la première apparition, pour ne pas sauter à la figure du lecteur. */
const DELAI_AVANT_AFFICHAGE = 25_000;
/** Durée d'affichage d'une notification. */
const DUREE = 8_000;

/** Horodatage lisible : "acheté il y a 26 min", "acheté il y a 3 h". */
function achete(depuis: number): string {
  const min = Math.floor(depuis / 60_000);
  if (min < 1) return "acheté à l'instant";
  if (min < 60) return `acheté il y a ${min} min`;
  const h = Math.floor(min / 60);
  if (h < 24) return `acheté il y a ${h} h`;
  return "acheté hier";
}

export default function VentesNotif() {
  const [notif, setNotif] = useState<(Vente & { quand: string }) | null>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const afficher = (v: Vente, quand: string) => {
      setNotif({ ...v, quand });
      timers.push(setTimeout(() => setNotif(null), DUREE));
    };

    const now = Date.now();
    const passees = VENTES.filter((v) => new Date(v.t).getTime() <= now);
    const prochaine = VENTES.find((v) => new Date(v.t).getTime() > now);

    // La dernière vente déjà survenue, montrée avec son ancienneté réelle.
    if (passees.length > 0) {
      const derniere = passees[passees.length - 1];
      timers.push(
        setTimeout(
          () => afficher(derniere, achete(now - new Date(derniere.t).getTime())),
          DELAI_AVANT_AFFICHAGE,
        ),
      );
    }

    // La suivante, seulement si elle tombe pendant que le lecteur est là.
    if (prochaine) {
      const delai = new Date(prochaine.t).getTime() - now;
      if (delai < 3_600_000) {
        timers.push(
          setTimeout(() => afficher(prochaine, "acheté à l'instant"), delai),
        );
      }
    }

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!notif) return null;

  return (
    <div className="animate-slide-up fixed bottom-4 left-1/2 z-40 w-full -translate-x-1/2 px-4 sm:bottom-6 sm:left-6 sm:w-auto sm:translate-x-0 sm:px-0 max-[380px]:hidden">
      <div className="mx-auto flex max-w-[460px] items-center gap-3 rounded-2xl border border-white/10 bg-[#131316] px-5 py-3.5 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#10b981] text-[0.875rem] font-bold text-white">
          {notif.prenom[0]}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[0.8125rem] leading-tight text-white">
              <span className="font-semibold">{notif.prenom}</span>{" "}
              <span className="text-white/55">de {notif.ville}</span>
            </p>
            <span className="shrink-0 whitespace-nowrap text-[0.6875rem] text-white/35">
              {notif.quand}
            </span>
          </div>
          <p className="mt-0.5 text-[0.75rem] font-medium leading-tight text-[#10b981]">
            {notif.message}
          </p>
        </div>
      </div>
    </div>
  );
}
