'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog/', label: 'Blog' },
  { href: '/privacy-policy/', label: 'Privacy Policy' },
  { href: '/disclaimer/', label: 'Disclaimer' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add('has-modal-open');
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.classList.remove('has-modal-open');
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.classList.remove('has-modal-open');
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <p className="site-title">
          <Link href="/" rel="home">UK Home Energy Guide</Link>
        </p>

        <div style={{ display: 'flex', flexWrap: 'nowrap', gap: 'var(--wp--preset--spacing--10)', justifyContent: 'flex-end', alignItems: 'center' }}>
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </nav>

          <button
            className="hamburger-btn"
            aria-label="Open menu"
            aria-haspopup="dialog"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 7.5h16v1.5H4z" />
              <path d="M4 15h16v1.5H4z" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-overlay" role="dialog" aria-modal="true">
          <button
            className="mobile-overlay-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
              <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z" />
            </svg>
          </button>
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
