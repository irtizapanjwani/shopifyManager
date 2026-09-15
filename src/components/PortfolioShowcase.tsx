"use client";

import Image from "next/image";

const row1 = [
  { src: "/Shopify%20Launchpad%20Images/1.jpg", alt: "Shopify store 1" },
  { src: "/Shopify%20Launchpad%20Images/2.jpg", alt: "Shopify store 2" },
  { src: "/Shopify%20Launchpad%20Images/3.jpg", alt: "Shopify store 3" },
  { src: "/Shopify%20Launchpad%20Images/4.jpg", alt: "Shopify store 4" },
];

const row2 = [
  { src: "/Shopify%20Launchpad%20Images/5.jpg", alt: "Shopify store 5" },
  { src: "/Shopify%20Launchpad%20Images/6.jpg", alt: "Shopify store 6" },
  { src: "/Shopify%20Launchpad%20Images/7.jpg", alt: "Shopify store 7" },
  { src: "/Shopify%20Launchpad%20Images/8.jpg", alt: "Shopify store 8" },
];

export default function PortfolioShowcase() {
  return (
    <section
      className="py-16 bg-[#292f40] overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      <div className="w-full px-5 sm:px-10 lg:px-[72px] text-center mb-12">
        <h2
          id="portfolio-heading"
          className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
        >
          Check Out the{" "}
          <span className="text-[#59DFAB]">E-Commerce Work We&apos;re Proud</span>{" "}
          of
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Take a moment to explore our portfolio and discover the endless possibilities for your digital future.
        </p>
      </div>

      {/* Row 1 — scrolls left to right */}
      <div className="relative mb-4 sm:mb-6">
        <div className="flex gap-4 sm:gap-6 w-max animate-marquee-right">
          {[...row1, ...row1].map((img, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 w-[280px] sm:w-[400px] md:w-[480px] lg:w-[530px] aspect-[529/420] overflow-hidden relative rounded-none shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 480px, 530px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right to left */}
      <div className="relative">
        <div className="flex gap-4 sm:gap-6 w-max animate-marquee-left">
          {[...row2, ...row2].map((img, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 w-[280px] sm:w-[400px] md:w-[480px] lg:w-[530px] aspect-[529/420] overflow-hidden relative rounded-none shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 480px, 530px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
