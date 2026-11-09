import type { MetadataRoute } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://estarmed.co";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/video-scenes"],
    },
    sitemap: `${site}/sitemap.xml`,
  };
}
