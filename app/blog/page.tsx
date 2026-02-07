import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
};

const AFFILIATE_DISCLAIMER = 'This article contains affiliate links to renewable energy products and services, including solar panels, battery storage, heat pumps, and energy comparison tools. We may earn a commission if you make a purchase or request a quote through these links, at no extra cost to you. All opinions are our own and based on research.';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00Z');
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

            <div className="post-content">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <p className="affiliate-disclaimer">{AFFILIATE_DISCLAIMER}</p>

            <p className="post-date">{formatDate(post.date)}</p>
          </div>
        </article>
      ))}
    </>
  );
}
