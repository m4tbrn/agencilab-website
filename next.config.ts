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
};

export default nextConfig;
