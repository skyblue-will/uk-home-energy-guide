import Link from "next/link";

const col1 = [
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Authors", href: "#" },
];

const col2 = [
  { label: "Events", href: "#" },
  { label: "Shop", href: "#" },
  { label: "Patterns", href: "#" },
  { label: "Themes", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e0e0e0] mt-16">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Site info */}
          <div>
            <h3 className="text-lg font-bold mb-2">UK Home Energy Guide</h3>
            <p className="text-sm text-[#666]">
              Your trusted source for clear, unbiased guidance on home energy
              costs and savings.
            </p>
          </div>

          {/* Nav column 1 */}
          <div>
            <nav className="flex flex-col gap-2">
              {col1.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#1a1a1a] no-underline hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Nav column 2 */}
          <div>
            <nav className="flex flex-col gap-2">
              {col2.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#1a1a1a] no-underline hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#e0e0e0] text-center text-sm text-[#666]">
          Designed with WordPress
        </div>
      </div>
    </footer>
  );
}
