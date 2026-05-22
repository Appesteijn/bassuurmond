import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bassuurmond.nl",
      lastModified: new Date("2025-05-22"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
