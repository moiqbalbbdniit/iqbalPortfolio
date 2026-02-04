import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Blog",
      description: "Project case studies and SEO-focused engineering insights.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `https://iqbaldev.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://iqbaldev.in/blog/${post.slug}`,
      siteName: "Iqbal Portfolio",
      type: "article",
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.updated).toISOString(),
    author: {
      "@type": "Person",
      name: "Mohammad Iqbal",
      url: "https://iqbaldev.in",
    },
    mainEntityOfPage: `https://iqbaldev.in/blog/${post.slug}`,
    image: post.coverImage ? [`https://iqbaldev.in${post.coverImage}`] : [],
  };

  return (
    <section className="w-full py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <Link
            href="/blog"
            className="text-sm font-semibold text-blue-600 hover:text-blue-500"
          >
            ← Back to Blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>Updated {new Date(post.updated).toLocaleDateString()}</span>
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold">
            {post.title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {post.coverImage ? (
          <div className="mt-10 relative h-72 w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="mt-12 max-w-3xl space-y-8 text-base leading-relaxed">
          {post.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2 key={index} className="text-2xl font-semibold">
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={index} className="list-disc pl-6 space-y-2">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={index} className="text-muted-foreground">
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
          <h3 className="text-xl font-semibold">Want to build something similar?</h3>
          <p className="mt-2 text-muted-foreground">
            I help teams ship fast, SEO-ready web products with modern stacks.
            Reach out to discuss your project.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-500"
          >
            View portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
