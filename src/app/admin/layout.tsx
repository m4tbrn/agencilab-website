import type { Metadata } from "next";

/**
 * Layout pour les outils internes admin (générateur de liens, dashboards, etc.).
 * Tous noindex/nofollow par défaut.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
