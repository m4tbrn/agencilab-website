import type { Metadata } from "next";
import ExplicationContent from "@/components/funnel/ExplicationContent";

/**
 * /explication-m-n
 *
 * Version "non qualifié" de la VSL Meta. Même contenu visuel que
 * /explication-m, mais SANS aucun event Meta Pixel (ni init, ni PageView,
 * ni Lead). Utilisée pour les leads que la logique Tally a filtrés comme
 * non-ICP · ils voient la VSL pour préserver le volume / le nurturing,
 * mais Meta ne les compte pas comme conversion.
 *
 * Le Pixel est désactivé à 2 niveaux :
 * 1. Dans le root layout, ce path est dans la liste d'exclusion (donc le
 *    Pixel ne s'init même pas, PageView ne fire pas)
 * 2. Ici, prop `disablePixel` pour bloquer l'event Lead côté composant
 */

export const metadata: Metadata = {
  title: "Documentaire Agencilab — La vidéo complète",
  description: "Regarde le documentaire complet et réserve ton appel gratuit.",
  robots: { index: false, follow: false },
};

const VSL_ID = "zXsq7BhD7g1i5GCI";

const ICLOSED_URL =
  "https://app.iclosed.io/e/fit-mass-formation/agencilab-neo";
const ICLOSED_TITLE = "(N) Réserve ton appel avec l'équipe de Louis";

export default function ExplicationMN() {
  return (
    <ExplicationContent
      vslId={VSL_ID}
      iClosedUrl={ICLOSED_URL}
      iClosedTitle={ICLOSED_TITLE}
      source="meta"
      revealAfterSeconds={21 * 60}
      disablePixel
    />
  );
}
