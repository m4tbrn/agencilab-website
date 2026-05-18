import type { Metadata } from "next";
import AcompteContent from "@/components/funnel/AcompteContent";

export const metadata: Metadata = {
  title: "Ta place est réservée dans le Mentorat — Agencilab",
  description: "Ton acompte est reçu. Dernière étape pour démarrer le Mentorat.",
  robots: { index: false, follow: false },
};

export default function AcompteMentoratPage() {
  return <AcompteContent programme="mentorat" />;
}
