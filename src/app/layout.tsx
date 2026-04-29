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
    "Agencilab accompagne les salariés à se créer un complément de revenus de 1 500 à 3 000€/mois grâce à une activité très rentable, sans quitter leur emploi. +900 personnes accompagnées.",
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
      "Rejoins +900 salariés qui se créent un deuxième salaire grâce à une activité très rentable.",
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
      "Rejoins +900 salariés qui génèrent 1 500 à 3 000€/mois grâce au Growth Marketing.",
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
        <script type="text/javascript" src="https://app.iclosed.io/assets/widget.js" async />
        <script type="text/javascript" src="https://app.iclosed.io/assets/widget.js" data-cta-widget="GuibSlbXxsLW" async />

        {/* Metricool tracker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"5bac3f2627723e43b4b1eed3e610b5b9"})});`,
          }}
        />

        {/* Hotjar Tracking Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6459200,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />

        {/* Meta Pixel Code */}
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
fbq('init', '866353391210411');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=866353391210411&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
