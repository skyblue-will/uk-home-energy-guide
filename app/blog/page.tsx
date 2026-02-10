import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Blog - UK Home Energy Guide',
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function BlogPage() {
  // Sort posts newest first
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <div className="blog-header">
        <div className="blog-header-inner">
          <h1>Blog</h1>
        </div>
      </div>

      {sortedPosts.map((post) => (
        <article key={post.slug} className="blog-post-entry">
          <div className="blog-post-entry-inner">
            <h2 className="post-title">
              <Link href={`/${post.slug}/`}>{post.title}</Link>
            </h2>

            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <p className="post-date">{formatDate(post.date)}</p>
          </div>
        </article>
      ))}
    </>
  );
}
