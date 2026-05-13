import type { MetadataRoute } from "next";
import { getPublishedReussites } from "@/lib/reussites/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const reussites = getPublishedReussites();

  return [
    {
      url: "https://agencilab.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://agencilab.com/reussites",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...reussites.map((r) => ({
      url: `https://agencilab.com/reussites/${r.slug}`,
      lastModified: new Date(r.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: "https://agencilab.com/mentions-legales",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://agencilab.com/politique-de-confidentialite",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
