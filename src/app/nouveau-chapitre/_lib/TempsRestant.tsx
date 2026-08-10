"use client";

import { useEffect, useState } from "react";
import { LANCEMENT_FIN } from "./config";

/** Temps restant en toutes lettres ("46 heures et 12 minutes"), mis à jour chaque minute. */
export default function TempsRestant() {
  const [txt, setTxt] = useState("quelques heures");

  useEffect(() => {
    const maj = () => {
      const diff = new Date(LANCEMENT_FIN).getTime() - Date.now();
      if (diff <= 0) {
        setTxt("0 minute");
        return;
      }
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      setTxt(h > 0 ? `${h} heures et ${m} minutes` : `${m} minutes`);
    };
    maj();
    const id = setInterval(maj, 60_000);
    return () => clearInterval(id);
  }, []);

  return <>{txt}</>;
}
