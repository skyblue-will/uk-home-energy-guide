import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - UK Home Energy Guide',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-content" style={{ paddingTop: 'var(--wp--preset--spacing--60)', paddingBottom: 'var(--wp--preset--spacing--60)' }}>
      <div className="page-content-inner">
        <h1>Privacy Policy</h1>

        <p>
          UK Home Energy Guide is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website.
        </p>

        <h2>Information We Collect</h2>

        <p>
          We may collect non-personal information such as browser type, operating system, and pages visited. If you contact us directly, we may receive additional information such as your name and email address.
        </p>

        <h2>How We Use Your Information</h2>

        <p>
          Any information we collect is used to improve the content and experience of our website. We do not sell or share personal data with third parties except as required by law.
        </p>

        <h2>Cookies</h2>

        <p>
          Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings.
        </p>

        <h2>Third-Party Links</h2>

        <p>
          Our website may contain affiliate links to third-party sites. We are not responsible for the privacy practices or content of those sites.
        </p>

        <h2>Changes to This Policy</h2>

        <p>
          We may update this Privacy Policy from time to time. Any changes will be reflected on this page.
        </p>

        <p>
          If you have any questions about this Privacy Policy, please contact us.
        </p>
      </div>
    </div>
  );
}
