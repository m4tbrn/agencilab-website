import type { Metadata } from "next";
import AppelContent from "@/components/funnel/AppelContent";

export const metadata: Metadata = {
  title: "Réserve ton appel d'intégration Mentorat — Agencilab",
  description: "Réserve ton appel d'intégration pour démarrer le Mentorat.",
  robots: { index: false, follow: false },
};

export default function AppelMentoratPage() {
  return <AppelContent programme="mentorat" />;
}
