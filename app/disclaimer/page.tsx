import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - UK Home Energy Guide",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
        Disclaimer
      </h1>
      <div className="prose">
        <p>
          The information on this website is for general guidance only. While we
          strive for accuracy, UK Home Energy Guide does not provide
          professional, financial, or legal advice.
        </p>
        <p>
          Users should verify any offers, prices, or schemes independently
          before making decisions.
        </p>
        <p>
          Affiliate links may be included in some articles. This helps support
          the site and allows us to continue producing free, high-quality
          content.
        </p>
      </div>
    </div>
  );
}
