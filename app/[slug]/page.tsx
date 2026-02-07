import type { Metadata } from 'next';
import { posts, getPostBySlug, getAllSlugs } from '../../lib/posts';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Not Found' };
  }
  return {
    title: post.title,
  };
}

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

export default function PostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="page-content" style={{ paddingTop: 'var(--wp--preset--spacing--60)', paddingBottom: 'var(--wp--preset--spacing--60)' }}>
        <div className="page-content-inner">
          <h1>Page not found</h1>
          <p>Sorry, the page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.split('\n\n');

  return (
    <>
      <div className="single-post-header">
        <div className="single-post-header-inner">
          <figure className="wp-block-post-featured-image">
            <img
              src="/images/hero.jpeg"
              alt={post.title}
              width={1024}
              height={574}
            />
          </figure>
          <h1>{post.title}</h1>
        </div>
      </div>

      <div className="single-post-content">
        <div className="single-post-content-inner">
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <p className="affiliate-disclaimer">{AFFILIATE_DISCLAIMER}</p>

          <p className="single-post-date">{formatDate(post.date)}</p>
        </div>
      </div>
    </>
  );
}
