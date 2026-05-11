import type { Metadata } from "next";
import ExplicationContent from "@/components/funnel/ExplicationContent";

export const metadata: Metadata = {
  title: "Documentaire Agencilab — La vidéo complète",
  description: "Regarde le documentaire complet et réserve ton appel gratuit.",
  robots: { index: false, follow: true },
};

const VSL_ID = "xpgshs9F4f4GdIfM";

export default function ExplicationIg() {
  return (
    <ExplicationContent
      source="ig"
      vslId={VSL_ID}
      iClosedUrl="https://app.iclosed.io/e/fit-mass-formation/agencilab-instagram"
      iClosedTitle="(I) Candidater à Agencilab"
    />
  );
}
