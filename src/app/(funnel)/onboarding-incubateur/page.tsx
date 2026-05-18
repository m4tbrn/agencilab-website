import type { Metadata } from "next";
import OnboardingContent from "@/components/funnel/OnboardingContent";

export const metadata: Metadata = {
  title: "Bienvenue dans l'Incubateur — Agencilab",
  description: "Remplis ton formulaire d'onboarding pour démarrer l'Incubateur.",
  robots: { index: false, follow: false },
};

export default function OnboardingIncubateurPage() {
  return <OnboardingContent programme="incubateur" />;
}
