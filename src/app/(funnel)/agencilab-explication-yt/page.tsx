import type { Metadata } from "next";
import ExplicationContent from "@/components/funnel/ExplicationContent";

export const metadata: Metadata = {
  title: "Documentaire Agencilab — La vidéo complète",
  description: "Regarde la documentaire complète et réserve ton appel gratuit.",
  robots: { index: false, follow: true },
};

const VSL_ID = "xPVms50Et1ABNkA6";

export default function AgencilabExplicationYt() {
  return (
    <ExplicationContent
      vslId={VSL_ID}
      iClosedUrl="https://app.iclosed.io/e/fit-mass-formation/agencilab-youtube-principal"
      iClosedTitle="(P) Réserve ton appel avec l'équipe de Louis"
    />
  );
}
