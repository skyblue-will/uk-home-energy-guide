import type { Metadata } from 'next';
import { getPostBySlug, getAllSlugs } from '../../lib/posts';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Not Found - UK Home Energy Guide' };
  }
  return {
    title: `${post.title} - UK Home Energy Guide`,
  };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
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

  return (
    <>
      <div className="single-post-header">
        <div className="single-post-header-inner">
          <h1>{post.title}</h1>
        </div>
      </div>

      <div className="single-post-content">
        <div className="single-post-content-inner">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />

          <p className="single-post-date">{formatDate(post.date)}</p>
        </div>
      </div>
    </>
  );
}
