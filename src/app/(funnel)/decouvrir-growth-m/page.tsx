import type { Metadata } from "next";
import CoursContent from "@/components/funnel/CoursContent";

export const metadata: Metadata = {
  title:
    "La méthode pour générer un deuxième salaire grâce au Growth Marketing | Agencilab",
  description:
    "Accède à la vidéo qui explique comment générer un deuxième salaire grâce au Growth Marketing, en parallèle de ton emploi.",
  robots: { index: false, follow: true },
};

// Side tunnel (test) : opt-in -> VSL (/methode-growth-m) -> Stripe -> merci.
// TODO : configurer la redirection de fin du form Tally vers
//        /methode-growth-m (réglage "Redirect on completion" dans Tally).
// Form Tally (https://tally.so/r/lbYVjk).
const TALLY_SRC =
  "https://tally.so/embed/lbYVjk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const TALLY_TITLE = "Capture - Side tunnel Cash Cow Express";

export default function DecouvrirGrowthM() {
  return (
    <>
      <CoursContent
        tallySrc={TALLY_SRC}
        tallyTitle={TALLY_TITLE}
        source="meta"
      />
    </>
  );
}
