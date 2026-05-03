import type { Metadata } from "next";
import ExplicationContent from "@/components/funnel/ExplicationContent";

export const metadata: Metadata = {
  title: "Documentaire Agencilab — La vidéo complète",
  description: "Regarde la documentaire complète et réserve ton appel gratuit.",
  robots: { index: false, follow: true },
};

const VSL_ID = "hnxXJsxZr8usm2de";

const ICLOSED_URL =
  "https://app.iclosed.io/e/fit-mass-formation/agencilab-newsletters";
const ICLOSED_TITLE = "(E) Réserve ton appel avec l'équipe de Louis";

export default function ExplicationN() {
  return (
    <ExplicationContent
      vslId={VSL_ID}
      iClosedUrl={ICLOSED_URL}
      iClosedTitle={ICLOSED_TITLE}
      source="newsletter"
    />
  );
}
