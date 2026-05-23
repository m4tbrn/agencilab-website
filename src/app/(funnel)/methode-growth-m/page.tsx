import type { Metadata } from "next";
import OffreContent from "@/components/funnel/OffreContent";

export const metadata: Metadata = {
  title: "Documentaire Agencilab — La vidéo complète",
  description:
    "Regarde la vidéo complète et rejoins Agencilab pour lancer ton activité de Growth Marketer.",
  robots: { index: false, follow: true },
};

// Même VSL que le funnel Meta actuel (explication-m).
const VSL_ID = "5exToSbRr2Tj9hUm";

export default function MethodeGrowth() {
  return <OffreContent vslId={VSL_ID} revealAfterSeconds={21 * 60} />;
}
