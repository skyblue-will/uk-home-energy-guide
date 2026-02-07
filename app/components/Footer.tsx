import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <h2 className="footer-title">UK Home Energy Guide</h2>
        <p className="footer-tagline">Your trusted source for home energy guidance</p>

        <div className="footer-spacer" aria-hidden="true" />

        <div className="footer-nav-columns">
          <div className="footer-nav-column">
            <ul>
              <li><Link href="/blog/">Blog</Link></li>
              <li><a href="#">About</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Authors</a></li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <ul>
              <li><a href="#">Events</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Patterns</a></li>
              <li><a href="#">Themes</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-spacer" aria-hidden="true" />

        <div className="footer-bottom">
          <p>Twenty Twenty-Five</p>
          <p>Designed with WordPress</p>
        </div>
      </div>
    </footer>
  );
}
