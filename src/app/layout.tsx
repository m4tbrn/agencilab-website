import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Agencilab — Apprends une activité très rentable et crée ton deuxième salaire",
  description:
    "Agencilab accompagne les salariés à se créer un complément de revenus de 1 500 à 3 000€/mois grâce à une activité très rentable, sans quitter leur emploi. +900 personnes accompagnées.",
  openGraph: {
    title: "Agencilab — Apprends une activité très rentable et crée ton deuxième salaire",
    description:
      "Rejoins +900 salariés qui se créent un deuxième salaire grâce à une activité très rentable.",
    type: "website",
    locale: "fr_FR",
    url: "https://agencilab.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${interTight.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script type="text/javascript" src="https://app.iclosed.io/assets/widget.js" async />
        <script type="text/javascript" src="https://app.iclosed.io/assets/widget.js" data-cta-widget="GuibSlbXxsLW" async />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
