import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UK Home Energy Guide",
  description:
    "Clear, unbiased guidance on home energy costs and savings.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-manrope min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b border-gray-100">
          <div className="max-w-wide mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              UK Home Energy Guide
            </Link>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-600">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-100 mt-16">
          <div className="max-w-wide mx-auto px-6 py-10 text-center">
            <p className="text-lg font-bold text-gray-900 mb-2">
              UK Home Energy Guide
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Clear, unbiased guidance on home energy costs and savings.
            </p>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} UK Home Energy Guide. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
