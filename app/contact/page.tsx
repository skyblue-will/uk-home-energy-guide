import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - UK Home Energy Guide',
};

export default function ContactPage() {
  return (
    <div className="page-content" style={{ paddingTop: 'var(--wp--preset--spacing--60)', paddingBottom: 'var(--wp--preset--spacing--60)' }}>
      <div className="page-content-inner">
        <h1>Contact</h1>

        <p>
          If you have any questions, suggestions, or feedback about UK Home Energy Guide, we'd love to hear from you.
        </p>

        <p>
          You can reach us by email at: <strong>info@ukhomeenergyguide.co.uk</strong>
        </p>

        <p>
          We aim to respond to all enquiries within 48 hours.
        </p>
      </div>
    </div>
  );
}
