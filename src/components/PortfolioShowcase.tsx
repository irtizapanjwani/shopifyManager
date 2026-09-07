"use client";

import Image from "next/image";

const row1 = [
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop", alt: "Fashion store" },
  { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", alt: "E-commerce checkout" },
  { src: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop", alt: "Online shopping" },
  { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop", alt: "Product display" },
  { src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop", alt: "Accessories store" },
  { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop", alt: "Sneaker store" },
];

const row2 = [
  { src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=400&fit=crop", alt: "Footwear collection" },
  { src: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=400&fit=crop", alt: "Sneaker collection" },
  { src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=400&fit=crop", alt: "Fashion products" },
  { src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=400&fit=crop", alt: "Clothing store" },
  { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop", alt: "Fashion shopping" },
  { src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop", alt: "Retail display" },
];

export default function PortfolioShowcase() {
  return (
    <section
      className="py-16 bg-[#0f1a2e] overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2
          id="portfolio-heading"
          className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
        >
          Check Out the{" "}
          <span className="text-[#8BC53F]">E-Commerce Work We&apos;re Proud</span>{" "}
          of
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Take a moment to explore our portfolio and discover the endless possibilities for your digital future.
        </p>
      </div>

      {/* Row 1 — scrolls left to right */}
      <div className="relative mb-6">
        <div className="flex gap-5 w-max animate-marquee-right">
          {[...row1, ...row1].map((img, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] h-[220px] sm:h-[260px] lg:h-[280px] rounded-xl overflow-hidden relative"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="420px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right to left */}
      <div className="relative">
        <div className="flex gap-5 w-max animate-marquee-left">
          {[...row2, ...row2].map((img, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] h-[220px] sm:h-[260px] lg:h-[280px] rounded-xl overflow-hidden relative"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="420px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
