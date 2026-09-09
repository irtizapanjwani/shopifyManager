"use client";

import Image from "next/image";
import Link from "next/link";

const portfolioImages = Array.from({ length: 15 }, (_, i) => ({
  src: `/shopify-portfolio/${i + 1}.jpg`,
  alt: `Portfolio ${i + 1}`,
}));

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section
        className="relative min-h-[800px] flex items-end justify-center pb-24"
        style={{
          background:
            "linear-gradient(180deg, #061a10 0%, #0A2515 12%, #0F3320 28%, #145A32 42%, #1B7A42 58%, #22A350 74%, #2CC968 88%, #34E077 100%)",
        }}
      >
        <div className="max-w-[920px] mx-auto px-6 text-center">
          <h1
            className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-[1.38]"
            style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}
          >
            Look At Our Impressive E-Commerce Shopify Portfolio and Get Inspired!
          </h1>
          <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-[750px] mx-auto">
            Explore our award-winning Shopify portfolio, where you&apos;ll find tangible evidence of our work&apos;s impact on businesses. From increased sales to enhanced brand visibility, our portfolio shows the transformative power of effective e-commerce solutions.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="px-7 py-3 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#19532E] transition-all duration-300"
            >
              Shopify Service
            </Link>
            <Link
              href="/services"
              className="px-7 py-3 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#19532E] transition-all duration-300"
            >
              E-Commerce Marketing
            </Link>
            <Link
              href="/services"
              className="px-7 py-3 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#19532E] transition-all duration-300"
            >
              Done For You
            </Link>
          </div>
        </div>
      </section>

      {/* ── Portfolio Grid ── */}
      <section className="bg-white py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((img) => (
              <div
                key={img.src}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
