import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
};

export default function DisclaimerPage() {
  return (
    <div className="page-content" style={{ paddingTop: 'var(--wp--preset--spacing--60)', paddingBottom: 'var(--wp--preset--spacing--60)' }}>
      <div className="page-content-inner">
        <h1>Disclaimer</h1>

        <p>
          The information provided on UK Home Energy Guide is for general informational purposes only. While we strive to keep the content accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.
        </p>

        <h2>Affiliate Links</h2>

        <p>
          Some articles on this website contain affiliate links. This means we may earn a commission if you make a purchase through these links, at no additional cost to you. This helps support the running of the website and allows us to continue providing free content.
        </p>

        <h2>Not Professional Advice</h2>

        <p>
          The content on this site should not be taken as professional financial, legal, or technical advice. Always consult a qualified professional before making decisions about your home energy systems.
        </p>

        <h2>External Links</h2>

        <p>
          Our website may link to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot be held responsible for their respective privacy policies.
        </p>
      </div>
    </div>
  );
}
