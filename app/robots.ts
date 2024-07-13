import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/studio", "/privacy"],
      },
    ],
    sitemap: "https://teebags.shop/sitemap.xml",
  };
}
