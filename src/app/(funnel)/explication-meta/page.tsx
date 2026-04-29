import type { Metadata } from "next";
import ExplicationContent from "@/components/funnel/ExplicationContent";

export const metadata: Metadata = {
  title: "Documentaire Agencilab — La vidéo complète",
  description: "Regarde la documentaire complète et réserve ton appel gratuit.",
  robots: { index: false, follow: true },
};

const VSL_ID = "xPVms50Et1ABNkA6";

// TODO: créer une URL iClosed distincte pour Meta (séparer les RDV YT/Meta)
const ICLOSED_URL =
  "https://app.iclosed.io/e/fit-mass-formation/agencilab-meta-principal";
const ICLOSED_TITLE = "(P) Réserve ton appel avec l'équipe de Louis";

export default function ExplicationMeta() {
  return (
    <ExplicationContent
      vslId={VSL_ID}
      iClosedUrl={ICLOSED_URL}
      iClosedTitle={ICLOSED_TITLE}
    />
  );
}
