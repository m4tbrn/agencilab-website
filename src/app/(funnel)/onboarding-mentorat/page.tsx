import type { Metadata } from "next";
import OnboardingContent from "@/components/funnel/OnboardingContent";

export const metadata: Metadata = {
  title: "Bienvenue dans le Mentorat — Agencilab",
  description: "Remplis ton formulaire d'onboarding pour démarrer le Mentorat.",
  robots: { index: false, follow: false },
};

export default function OnboardingMentoratPage() {
  return <OnboardingContent programme="mentorat" />;
}
