import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // L'ancienne URL /turnoff a été renommée en /sevrage.
      // Redirect permanent (301) pour ne perdre aucune ad ni lien existant.
      {
        source: "/turnoff",
        destination: "/sevrage",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // /alicia-vision/* est servi par le repo `alicia` (déployé sur Vercel
      // sous le projet alicia). On garde l'URL agencilab.com côté navigateur
      // via une rewrite (proxy transparent · pas un redirect).
      {
        source: "/alicia-vision",
        destination: "https://alicia.vercel.app/alicia-vision",
      },
      {
        source: "/alicia-vision/:path*",
        destination: "https://alicia.vercel.app/alicia-vision/:path*",
      },
    ];
  },
};

export default nextConfig;
