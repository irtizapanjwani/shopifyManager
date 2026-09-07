import Image from "next/image";

const features = [
  "Custom Shopify Store Design",
  "Responsive Theme Development",
  "Shopify Marketing Integration",
  "Product Upload and Management",
  "Custom Store Setup",
  "Integrations and Apps",
] as const;

export default function ExpandReach() {
  return (
    <section className="bg-[#f7faf8] py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left column ───────────────────────────── */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.15]">
              <span className="text-[#08130e]">Expand Your Reach with</span>
              <br />
              <span className="text-[#8BC53F]">
                Expert Shopify E-Commerce Services
              </span>
            </h2>

            <p className="text-base sm:text-[17px] text-[#4a4a4a] leading-relaxed max-w-lg font-normal">
              Shopify is a great platform to help businesses take their business
              online. It is fast and responsive and offers a large set of
              features that provide a personalized experience. Our experts
              provide various Shopify solutions and assist you in achieving
              profitable results.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-0">
              {features.map((feat, i) => (
                <div
                  key={feat}
                  className={`flex items-center gap-3 py-4 ${
                    i < features.length - 2 || i === features.length - 2
                      ? "border-b border-[#d9e6d5]"
                      : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-[#8BC53F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
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
            {/* Green background shape */}
            <div className="absolute top-8 right-0 w-[85%] h-[90%] bg-[#8BC53F] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] -z-10" />

            {/* Main image */}
            <div className="relative w-full max-w-[480px] aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=600&h=750&fit=crop&auto=format&q=80"
                alt="Happy entrepreneur celebrating e-commerce success"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>

            {/* Floating icon card — top left */}
            <div className="absolute top-12 left-4 lg:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-[#8BC53F]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
              </svg>
            </div>

            {/* Floating icon card — right middle */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#8BC53F] rounded-xl shadow-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>

            {/* Wave decoration — bottom right */}
            <div className="absolute -bottom-4 right-4 lg:right-0 opacity-40">
              <svg
                className="w-32 sm:w-40 text-[#8BC53F]"
                viewBox="0 0 160 40"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 20 Q20 0 40 20 T80 20 T120 20 T160 20"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
                <path
                  d="M0 28 Q20 8 40 28 T80 28 T120 28 T160 28"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  opacity={0.5}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
