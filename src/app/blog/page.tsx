import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Project-focused articles by Iqbal covering Next.js, AI automation, SaaS architecture, and SEO-friendly product builds.",
  keywords: [
    "Iqbal blog",
    "Next.js projects",
    "AI automation",
    "SaaS case study",
    "Full Stack Developer blog",
    "SEO-friendly web apps",
  ],
  alternates: {
    canonical: "https://iqbaldev.in/blog",
  },
  openGraph: {
    title: "Iqbal Blog | Project Case Studies",
    description:
      "Read project-driven case studies on AI systems, SaaS products, and modern web development.",
    url: "https://iqbaldev.in/blog",
    siteName: "Iqbal Portfolio",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-widest text-blue-500 font-semibold">
            Blog
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold">
            Project Stories & SEO Insights
          </h1>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Practical case studies from real builds—AI exam systems, campus
            platforms, SaaS products, and performance-first Next.js apps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-transparent p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {post.coverImage ? (
                <div className="relative h-48 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>

              <h2 className="mt-4 text-xl md:text-2xl font-semibold">
                {post.title}
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-500"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
