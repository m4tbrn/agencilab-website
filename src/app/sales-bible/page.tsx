import type { Metadata } from "next";
import { isUnlocked } from "./_lib/auth";
import PasswordGate from "./_lib/PasswordGate";
import SalesBibleView from "./_lib/SalesBibleView";

export const metadata: Metadata = {
  title: "Agencilab Sales Bible",
  description: "La bible interne des closers Agencilab.",
  robots: { index: false, follow: false },
};

export default async function SalesBiblePage() {
  const unlocked = await isUnlocked();
  return unlocked ? <SalesBibleView /> : <PasswordGate />;
}
