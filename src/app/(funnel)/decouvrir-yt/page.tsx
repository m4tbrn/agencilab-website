import type { Metadata } from "next";
import CoursContent from "@/components/funnel/CoursContent";

export const metadata: Metadata = {
  title: "Documentaire — Comment générer +3 500€/mois à côté de ton travail | Agencilab",
  description:
    "Découvre comment générer +3 500€/mois en parallèle de ton emploi grâce à une activité (très) rentable méconnue. Sans école de commerce, sans diplôme, sans quitter ton travail.",
  robots: { index: false, follow: true },
};

export default function DecouvrirYt() {
  return (
    <CoursContent
      tallySrc="https://tally.so/embed/mebzVQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      tallyTitle="Agencilab - Capture - YouTube Principal"
    />
  );
}
