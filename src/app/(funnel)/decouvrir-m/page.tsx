import type { Metadata } from "next";
import CoursContent from "@/components/funnel/CoursContent";

export const metadata: Metadata = {
  title: "Documentaire — Comment générer +3 500€/mois à côté de ton travail | Agencilab",
  description:
    "Découvre comment générer +3 500€/mois en parallèle de ton emploi grâce à une activité (très) rentable méconnue. Sans école de commerce, sans diplôme, sans quitter ton travail.",
  robots: { index: false, follow: true },
};

const TALLY_SRC =
  "https://tally.so/embed/w4ZOZ5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const TALLY_TITLE = "Formulaire de capture - VSL Agencilab - Facebook Ads";

export default function DecouvrirM() {
  return (
    <CoursContent tallySrc={TALLY_SRC} tallyTitle={TALLY_TITLE} source="meta" />
  );
}
