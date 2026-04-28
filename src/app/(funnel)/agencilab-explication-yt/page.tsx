import type { Metadata } from "next";
import ExplicationContent from "@/components/funnel/ExplicationContent";

export const metadata: Metadata = {
  title: "Documentaire Agencilab — La vidéo complète",
  description: "Regarde la documentaire complète et réserve ton appel gratuit.",
  robots: { index: false, follow: true },
};

// TODO: remplacer "BOKinTlwRUDuZ4BM" par l'ID Vidalytics de la VSL d'explication YouTube
// (pour l'instant on utilise la VSL de la home par défaut)
const VSL_ID = "BOKinTlwRUDuZ4BM";

export default function AgencilabExplicationYt() {
  return (
    <ExplicationContent
      vslId={VSL_ID}
      iClosedUrl="https://app.iclosed.io/e/fit-mass-formation/agencilab-youtube-principal"
      iClosedTitle="(P) Réserve ton appel avec l'équipe de Louis"
    />
  );
}
