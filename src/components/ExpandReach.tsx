import Image from "next/image";

const features = [
  "Custom Shopify Store Design",
  "Responsive Theme Development",
  "Shopify Marketing Integration",
  "Product Upload and Management",
  "Custom Store Setup",
  "Integrations and Apps",
  "Robust Security Measures",
  "Comprehensive Shopify Features",
] as const;

export default function ExpandReach() {
  return (
    <section className="bg-white pt-16 pb-8 sm:pt-24 sm:pb-8 lg:pt-32 lg:pb-8">
      <div className="w-full px-[72px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column ───────────────────────────── */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-14 space-y-8 border border-[#e5e5e5]">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2]">
              <span className="text-[#1a1a1a]">Expand Your Reach with</span>
              <br />
              <span className="text-[#59DFAB]">
                Expert Shopify E-Commerce Services
              </span>
            </h2>

            <p className="text-base sm:text-[16px] text-[#4a4a4a] leading-relaxed max-w-lg font-normal">
              Shopify is a great platform to help businesses take their business
              online. It is fast and responsive and offers a large set of
              features that provide a personalized experience. Our experts
              provide various Shopify solutions and assist you in achieving
              profitable results.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
              {features.map((feat, i) => (
                <div
                  key={feat}
                  className="flex items-center gap-3 py-4 border-b border-[#d9e6d5]"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-[#6cc24a]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    />
                  </svg>
                  <span className="text-sm sm:text-[15px] font-medium text-[#1a1a1a]">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — image with decorations ── */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main image */}
            <div className="relative w-full max-w-[741px] aspect-[741/779]">
              <Image
                src="/Shopify Launchpad Images/expand.png"
                alt="Expand your e-commerce reach"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
