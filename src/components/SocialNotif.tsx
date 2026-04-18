"use client";

import { useState, useEffect } from "react";

const prenoms = [
  "Lucas", "Thomas", "Antoine", "Julien", "Mathieu",
  "Marine", "Hugo", "Sarah", "Alexandre", "Emma",
  "Maxime", "Laura", "Nicolas", "Valentin", "Léa",
  "Romain", "Camille", "Dylan", "Manon", "Théo",
  "Enzo", "Clara", "Pierre", "Chloé", "Bastien",
  "Julie", "Kévin", "Océane", "Quentin", "Pauline",
];

const villes = [
  "Lyon (69)", "Paris (75)", "Marseille (13)", "Toulouse (31)", "Bordeaux (33)",
  "Nantes (44)", "Lille (59)", "Strasbourg (67)", "Montpellier (34)", "Rennes (35)",
  "Nice (06)", "Tours (37)", "Grenoble (38)", "Rouen (76)", "Dijon (21)",
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const messages = [
  "vient de déposer sa candidature 🔥",
  (min: number) => `a déposé sa candidature il y a ${min} min`,
  "vient de déposer sa candidature",
  (min: number) => `a déposé sa candidature il y a ${min} min`,
];

export default function SocialNotif() {
  const [show, setShow] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [ville, setVille] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const showNotif = () => {
      setPrenom(getRandomItem(prenoms));
      setVille(getRandomItem(villes));
      const msg = getRandomItem(messages);
      const min = Math.floor(Math.random() * 45) + 3;
      setMessage(typeof msg === "function" ? msg(min) : msg);
      setShow(true);
      setTimeout(() => setShow(false), 8000);
    };

    // Première notif après 30s
    const first = setTimeout(showNotif, 30000);
    // Puis toutes les 45-90s
    const interval = setInterval(showNotif, 45000 + Math.random() * 45000);

    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-4 z-40 animate-[slideUp_0.4s_ease-out] sm:bottom-6 sm:left-6">
      <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-navy-950/95 px-5 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 text-sm font-bold text-navy-950">
          {prenom.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">
            {prenom} de {ville}
          </p>
          <p className="text-xs text-green-400">
            {message}
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
