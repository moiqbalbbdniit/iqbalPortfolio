import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = blogPosts.map((post) => ({
    url: `https://iqbaldev.in/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
  }));

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
    {
      url: "https://iqbaldev.in/blog",
      lastModified: new Date(),
    },
    ...blogEntries,
  ];
}
