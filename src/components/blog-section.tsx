"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";

export default function BlogSection() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="mt-20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Latest Blogs</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Project case studies and SEO insights from my recent builds.
          </p>
        </div>
        <Link
          href="/blog"
          className="text-sm font-semibold text-blue-600 hover:text-blue-500"
        >
          View all →
        </Link>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {featured.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-transparent p-5 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {post.coverImage ? (
              <div className="relative h-40 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}

            <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-500"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
