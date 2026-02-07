import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative w-full h-[400px] sm:h-[500px]">
        <Image
          src="/images/hero.jpeg"
          alt="Modern English-style house with solar panels on the roof"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              UK Home Energy Guide
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
              Clear, unbiased guidance on home energy costs and savings.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="prose">
          <p>
            Welcome to UK Home Energy Guide — your trusted source for clear,
            unbiased guidance on home energy costs and savings.
          </p>
          <p>
            Whether you&apos;re considering heat pumps, solar panels, or insulation
            upgrades, we provide simple explanations, cost breakdowns, and
            practical tips to help you make informed decisions.
          </p>
          <p>
            Explore our guides and articles to save money, reduce your energy
            bills, and improve your home&apos;s efficiency. Everything here is
            independent, reliable, and easy to understand.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors"
          >
            Start exploring our guides →
          </Link>
        </div>
      </div>
    </div>
  );
}
