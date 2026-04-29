"use client";

import { useEffect, useRef, useState } from "react";

const FIRST_NAMES = [
  "Lucas", "Thomas", "Antoine", "Julien", "Maxime", "Alexandre",
  "Nicolas", "Mathieu", "Hugo", "Romain", "Sébastien", "Florian",
  "Kevin", "Dylan", "Alexis", "Valentin", "Nathan", "Quentin",
  "Théo", "Mehdi", "Sofiane", "Ilias", "Ryan", "Yanis", "Adam",
  "Emma", "Julie", "Sarah", "Chloé", "Laura", "Camille", "Léa",
  "Manon", "Clara", "Inès",
];

const LOCATIONS = [
  { city: "Paris", code: "75011" },
  { city: "Paris", code: "75018" },
  { city: "Lyon", code: "69003" },
  { city: "Lyon", code: "69007" },
  { city: "Marseille", code: "13008" },
  { city: "Marseille", code: "13012" },
  { city: "Toulouse", code: "31500" },
  { city: "Bordeaux", code: "33200" },
  { city: "Nantes", code: "44100" },
  { city: "Lille", code: "59000" },
  { city: "Strasbourg", code: "67100" },
  { city: "Montpellier", code: "34090" },
  { city: "Nice", code: "06000" },
  { city: "Rennes", code: "35000" },
  { city: "Grenoble", code: "38000" },
  { city: "Rouen", code: "76000" },
  { city: "Toulon", code: "83000" },
  { city: "Dijon", code: "21000" },
  { city: "Angers", code: "49000" },
  { city: "Reims", code: "51100" },
  { city: "Saint-Étienne", code: "42000" },
  { city: "Clermont-Ferrand", code: "63000" },
  { city: "Aix-en-Provence", code: "13100" },
  { city: "Brest", code: "29200" },
  { city: "Limoges", code: "87000" },
  { city: "Tours", code: "37000" },
  { city: "Amiens", code: "80000" },
  { city: "Besançon", code: "25000" },
  { city: "Orléans", code: "45000" },
  { city: "Metz", code: "57000" },
  { city: "Caen", code: "14000" },
  { city: "Annecy", code: "74000" },
];

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function nextInterval() {
  return 25000 + Math.floor(Math.random() * 20000);
}

export default function FunnelSocialNotif() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "", code: "" });
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const schedule = () => {
      showTimeoutRef.current = setTimeout(() => {
        const loc = rand(LOCATIONS);
        setData({ name: rand(FIRST_NAMES), city: loc.city, code: loc.code });
        setVisible(true);
        // Notifie les autres composants (LiveViewers) qu'un opt-in vient de tomber
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("agencilab:opt-in"));
        }
        hideTimeoutRef.current = setTimeout(() => {
          setVisible(false);
          schedule();
        }, 10000);
      }, nextInterval());
    };

    schedule();

    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    showTimeoutRef.current = setTimeout(() => {
      const loc = rand(LOCATIONS);
      setData({ name: rand(FIRST_NAMES), city: loc.city, code: loc.code });
      setVisible(true);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("agencilab:opt-in"));
      }
      hideTimeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 10000);
    }, nextInterval());
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 sm:left-6 sm:translate-x-0 z-40 animate-slide-up px-4 w-full sm:w-auto sm:px-0 max-[380px]:hidden">
      <div className="relative flex items-center gap-3 bg-[#131316] border border-white/10 rounded-2xl px-5 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.35)] mx-auto max-w-[460px]">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Fermer"
          className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white text-[#131316] shadow-md hover:bg-[#f0f0f0] flex items-center justify-center transition-colors"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M1 1L9 9M9 1L1 9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center text-white font-700 text-[0.875rem] shrink-0">
          {data.name[0]}
        </div>
        <div className="min-w-0">
          <p className="text-[0.8125rem] text-white leading-tight">
            <span className="font-600">{data.name}</span>{" "}
            <span className="text-white/60">
              de {data.city} {data.code}
            </span>
          </p>
          <p className="text-[0.75rem] text-[#10b981] font-500 leading-tight mt-0.5">
            vient d&apos;accéder au documentaire
          </p>
        </div>
      </div>
    </div>
  );
}
