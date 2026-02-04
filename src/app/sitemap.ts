import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://iqbaldev.in",
      lastModified: new Date(),
    },
    {
      url: "https://iqbaldev.in/about",
      lastModified: new Date(),
    },
    {
      url: "https://iqbaldev.in/projects",
      lastModified: new Date(),
    },
    {
      url: "https://iqbaldev.in/skills",
      lastModified: new Date(),
    },
  ];
}
