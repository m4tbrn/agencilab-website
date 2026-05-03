import type { Metadata } from "next";
import Script from "next/script";
import ExplicationContent from "@/components/funnel/ExplicationContent";

export const metadata: Metadata = {
  title: "Documentaire Agencilab — La vidéo complète",
  description: "Regarde la documentaire complète et réserve ton appel gratuit.",
  robots: { index: false, follow: true },
};

const VSL_ID = "VBUZFvk8KvztJ5kB";

const ICLOSED_URL =
  "https://app.iclosed.io/e/fit-mass-formation/agencilab-bienvenue";
const ICLOSED_TITLE = "(SDB) Réserve ton appel avec l'équipe de Louis";

export default function ExplicationBn() {
  return (
    <>
      <ExplicationContent
        vslId={VSL_ID}
        iClosedUrl={ICLOSED_URL}
        iClosedTitle={ICLOSED_TITLE}
        source="bienvenue"
      />
      {/* iClosed Lift Widget — bienvenue (1fp_C3NxGqdj) */}
      <Script
        src="https://app.iclosed.io/assets/widget.js"
        data-cta-widget="1fp_C3NxGqdj"
        strategy="afterInteractive"
      />
    </>
  );
}
