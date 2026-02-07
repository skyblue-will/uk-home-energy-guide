import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <>
      <div className="home-featured-image">
        <div className="home-featured-image-inner">
          <figure className="wp-block-post-featured-image">
            <img
              src="/images/hero.jpeg"
              alt="Modern house with solar panels"
              width={1024}
              height={574}
            />
          </figure>
        </div>
      </div>

      <div className="home-content">
        <div className="home-content-inner">
          <h1>Home</h1>

          <p>
            Welcome to UK Home Energy Guide — your trusted source for clear, unbiased guidance on home energy costs and savings.
          </p>

          <p>
            Whether you're considering heat pumps, solar panels, or insulation upgrades, we provide simple explanations, cost breakdowns, and practical tips to help you make informed decisions.
          </p>

          <p>
            Explore our guides and articles to save money, reduce your energy bills, and improve your home's efficiency. Everything here is independent, reliable, and easy to understand.
          </p>

          <p><strong>Call-to-Action:</strong></p>

          <p>
            Start exploring our guides to see what works best for your home and budget.
          </p>
        </div>
      </div>
    </>
  );
}
