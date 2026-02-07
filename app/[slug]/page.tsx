import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug, getAllSlugs } from "@/lib/posts";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} - UK Home Energy Guide`,
    description: post.content.split("\n")[0].slice(0, 160),
  };
}

export default function PostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-content mx-auto px-6 py-12">
      <nav className="mb-8">
        <Link
          href="/blog"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          ← Back to Blog
        </Link>
      </nav>

      <article>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="prose">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <p className="affiliate-notice">
          This article contains affiliate links to renewable energy products and
          services, including solar panels, battery storage, heat pumps, and
          energy comparison tools. We may earn a commission if you make a
          purchase or request a quote through these links, at no extra cost to
          you. All opinions are our own and based on research.
        </p>
      </article>
    </div>
  );
}
