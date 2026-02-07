import Link from "next/link";
import { posts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - UK Home Energy Guide",
  description:
    "Browse all articles on home energy, heat pumps, solar panels, and more.",
};

export default function BlogPage() {
  return (
    <div className="max-w-wide mx-auto px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
        Blog
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className="group block border border-gray-100 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 mb-3 leading-snug">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-sm text-gray-600 line-clamp-3">
              {post.content.split("\n")[0]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
