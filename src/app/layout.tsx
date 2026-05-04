import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter_Tight, Caveat } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agencilab — Apprends une activité très rentable et crée ton deuxième salaire",
  description:
    "Agencilab accompagne les salariés à se créer un complément de revenus de 1 500 à 3 000€/mois grâce à une activité très rentable, sans quitter leur emploi. +1 018 personnes accompagnées.",
  keywords: [
    "growth marketing",
    "deuxième salaire",
    "complément de revenus",
    "marketing digital",
    "reconversion professionnelle",
    "agencilab",
    "formation marketing",
    "revenus complémentaires",
    "freelance marketing",
  ],
  authors: [{ name: "Agencilab" }],
  creator: "Agencilab",
  metadataBase: new URL("https://agencilab.com"),
  alternates: {
    canonical: "https://agencilab.com",
  },
  openGraph: {
    title: "Agencilab — Apprends une activité très rentable et crée ton deuxième salaire",
    description:
      "Rejoins +1 018 salariés qui se créent un deuxième salaire grâce à une activité très rentable.",
    type: "website",
    locale: "fr_FR",
    url: "https://agencilab.com",
    siteName: "Agencilab",
    images: [
      {
        url: "/images/hero-group.jpg",
        width: 1200,
        height: 630,
        alt: "La communauté Agencilab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencilab — Crée ton deuxième salaire",
    description:
      "Rejoins +1 018 salariés qui génèrent 1 500 à 3 000€/mois grâce au Growth Marketing.",
    images: ["/images/hero-group.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${interTight.variable} ${caveat.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        {/* Preconnect aux domaines tiers utilisés par les funnels (Tally + iClosed) :
            réduit le temps de TLS handshake quand l'iframe / le script sont chargés. */}
        <link rel="preconnect" href="https://tally.so" crossOrigin="" />
        <link rel="dns-prefetch" href="https://tally.so" />
        <link rel="preconnect" href="https://app.iclosed.io" crossOrigin="" />
        <link rel="dns-prefetch" href="https://app.iclosed.io" />
        <link
          rel="preload"
          href="https://tally.so/widgets/embed.js"
          as="script"
        />
        {/* iClosed Lift Widgets — tous site-wide sur le NDD principal */}
        <script
          type="text/javascript"
          src="https://app.iclosed.io/assets/widget.js"
          data-cta-widget="GuibSlbXxsLW"
          async
        ></script>
        <script
          type="text/javascript"
          src="https://app.iclosed.io/assets/widget.js"
          data-cta-widget="TfOxNQ_5L3pA"
          async
        ></script>
        <script
          type="text/javascript"
          src="https://app.iclosed.io/assets/widget.js"
          data-cta-widget="1fp_C3NxGqdj"
          async
        ></script>

        {/* Meta Pixel Code — base seulement (pas de PageView auto, voir CoursContent pour le PageView capture) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '866353391210411');`,
          }}
        />

      </head>
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
