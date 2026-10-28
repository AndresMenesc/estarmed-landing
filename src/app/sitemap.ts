import type { MetadataRoute } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://estarmed.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site}/privacidad`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${site}/terminos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
