import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:
        "https://veera-karle-portfolio.vercel.app",

      lastModified: new Date(),

      changeFrequency: "weekly",

      priority: 1,

      images: [
        "https://veera-karle-portfolio.vercel.app/images/logo.png",
      ],
    },
  ];
}