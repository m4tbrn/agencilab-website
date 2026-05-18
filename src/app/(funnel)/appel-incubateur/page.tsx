import type { Metadata } from "next";
import AppelContent from "@/components/funnel/AppelContent";

export const metadata: Metadata = {
  title: "Réserve ton appel d'intégration Incubateur — Agencilab",
  description: "Réserve ton appel d'intégration pour démarrer l'Incubateur.",
  robots: { index: false, follow: false },
};

export default function AppelIncubateurPage() {
  return <AppelContent programme="incubateur" />;
}
