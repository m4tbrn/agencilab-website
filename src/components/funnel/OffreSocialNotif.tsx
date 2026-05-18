"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Notifications sociales de la page offre.
 * Alterne entre plusieurs types (nouvelle inscription / renouvellement de
 * mois) avec un horodatage aléatoire, pour rester crédible et non répétitif.
 * S'activent UNIQUEMENT une fois l'offre révélée (signal `offre:revealed`).
 */

const FIRST_NAMES = [
  "Lucas", "Thomas", "Antoine", "Julien", "Maxime", "Romain", "Nicolas",
  "Hugo", "Florian", "Valentin", "Nathan", "Quentin", "Théo", "Mehdi",
  "Yanis", "Adam", "Julie", "Sarah", "Camille", "Manon", "Clara", "Inès",
];

const CITIES = [
  "Paris", "Lyon", "Marseille", "Toulouse", "Bordeaux", "Nantes", "Lille",
  "Strasbourg", "Montpellier", "Nice", "Rennes", "Grenoble", "Rouen",
  "Dijon", "Angers", "Reims", "Tours", "Caen", "Annecy", "Metz",
];

const TEMPS = [
  "à l'instant", "il y a 3 min", "il y a 8 min", "il y a 15 min",
  "il y a 24 min", "il y a 38 min", "il y a 47 min", "il y a 1 h",
  "il y a 2 h",
];

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Intervalle entre deux notifs : 80 à 170 s (espacé, non-scam).
function nextInterval() {
  return 80000 + Math.floor(Math.random() * 90000);
}

type Notif = { name: string; city: string; message: string; quand: string };

function buildNotif(): Notif {
  const name = rand(FIRST_NAMES);
  const city = rand(CITIES);
  // 1 chance sur 2 : nouvelle inscription, sinon renouvellement de mois.
  const message =
    Math.random() < 0.5
      ? "vient de rejoindre Cash Cow Express"
      : `a pris son ${rand([2, 3, 4, 5, 6])}e mois d'abonnement`;
  return { name, city, message, quand: rand(TEMPS) };
}

export default function OffreSocialNotif() {
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<Notif>({
    name: "",
    city: "",
    message: "",
    quand: "",
  });
  const showRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Détecte la révélation de l'offre.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as unknown as { __offreRevealed?: boolean }).__offreRevealed) {
      setArmed(true);
      return;
    }
    const onReveal = () => setArmed(true);
    window.addEventListener("offre:revealed", onReveal);
    return () => window.removeEventListener("offre:revealed", onReveal);
  }, []);

  // Boucle de notifs une fois armé.
  useEffect(() => {
    if (!armed) return;

    const schedule = (delay: number) => {
      showRef.current = setTimeout(() => {
        setData(buildNotif());
        setVisible(true);
        hideRef.current = setTimeout(() => {
          setVisible(false);
          schedule(nextInterval());
        }, 7000);
      }, delay);
    };

    // Première notif 35 à 70 s après le reveal (pas tout de suite).
    schedule(35000 + Math.floor(Math.random() * 35000));

    return () => {
      if (showRef.current) clearTimeout(showRef.current);
      if (hideRef.current) clearTimeout(hideRef.current);
    };
  }, [armed]);

  if (!visible) return null;

  return (
    <div className="animate-slide-up fixed bottom-4 left-1/2 z-40 w-full -translate-x-1/2 px-4 sm:bottom-6 sm:left-6 sm:w-auto sm:translate-x-0 sm:px-0 max-[380px]:hidden">
      <div className="mx-auto flex max-w-[440px] items-center gap-3 rounded-2xl border border-white/10 bg-[#131316] px-5 py-3.5 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#10b981] text-[0.875rem] font-bold text-white">
          {data.name[0]}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[0.8125rem] leading-tight text-white">
              <span className="font-semibold">{data.name}</span>{" "}
              <span className="text-white/55">de {data.city}</span>
            </p>
            <span className="shrink-0 text-[0.6875rem] text-white/35">
              {data.quand}
            </span>
          </div>
          <p className="mt-0.5 text-[0.75rem] font-medium leading-tight text-[#10b981]">
            {data.message}
          </p>
        </div>
      </div>
    </div>
  );
}
