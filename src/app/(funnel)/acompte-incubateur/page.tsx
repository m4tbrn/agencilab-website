import type { Metadata } from "next";
import AcompteContent from "@/components/funnel/AcompteContent";

export const metadata: Metadata = {
  title: "Ta place est réservée dans l'Incubateur — Agencilab",
  description: "Ton acompte est reçu. Dernière étape pour démarrer l'Incubateur.",
  robots: { index: false, follow: false },
};

export default function AcompteIncubateurPage() {
  return <AcompteContent programme="incubateur" />;
}
