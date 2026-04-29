import type { Metadata } from "next";
import ConfirmationContent from "@/components/funnel/ConfirmationContent";

export const metadata: Metadata = {
  title: "Candidature reçue — Agencilab",
  description: "Ta candidature à Agencilab est en cours d'analyse.",
  robots: { index: false, follow: true },
};

export default function ConfirmationMeta() {
  return <ConfirmationContent vslId="ddsqsE6mNeMIKQGV" />;
}
