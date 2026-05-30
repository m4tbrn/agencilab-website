import type { Metadata } from "next";
import CoursContent from "@/components/funnel/CoursContent";

export const metadata: Metadata = {
  title: "Documentaire — Comment transformer ton épargne dormante en +2 987€/mois | Agencilab",
  description:
    "Découvre comment cette activité méconnue peut transformer ton épargne dormante en +2 987€/mois de complément de revenus. Sans bourse, sans crypto, sans placement risqué.",
  robots: { index: false, follow: true },
};

// Même form Tally que /decouvrir-m (on isole la variable = la copy)
const TALLY_SRC =
  "https://tally.so/embed/w4ZOZ5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const TALLY_TITLE = "Formulaire de capture - VSL Agencilab - Facebook Ads (variant épargne)";

export default function DecouvrirM2() {
  return (
    <CoursContent
      tallySrc={TALLY_SRC}
      tallyTitle={TALLY_TITLE}
      source="meta"
      metaVariant="epargne"
    />
  );
}
