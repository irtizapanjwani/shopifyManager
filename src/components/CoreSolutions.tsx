"use client";

function ShopifyIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" style={{ animation: "float 3s ease-in-out infinite" }}>
      <rect x="50" y="40" width="100" height="130" rx="12" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="2"/>
      <rect x="60" y="55" width="80" height="50" rx="6" fill="#bae6fd"/>
      <circle cx="100" cy="80" r="12" fill="#38bdf8"/>
      <rect x="70" y="115" width="60" height="8" rx="4" fill="#7dd3fc"/>
      <rect x="80" y="130" width="40" height="6" rx="3" fill="#bae6fd"/>
      <path d="M140 60 L160 50 L160 70 Z" fill="#86efac"/>
      <circle cx="45" cy="55" r="8" fill="#fde68a" opacity="0.8"/>
      <rect x="30" y="130" width="20" height="28" rx="3" fill="#d4a574"/>
      <rect x="25" y="155" width="30" height="18" rx="3" fill="#c4956a"/>
    </svg>
  );
}

function MarketingIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" style={{ animation: "float 3s ease-in-out infinite 0.3s" }}>
      <rect x="40" y="50" width="80" height="110" rx="10" fill="#fef3c7" stroke="#fcd34d" strokeWidth="2"/>
      <rect x="50" y="65" width="60" height="40" rx="5" fill="#fde68a"/>
      <circle cx="80" cy="85" r="10" fill="#f59e0b"/>
      <rect x="55" y="115" width="50" height="6" rx="3" fill="#fcd34d"/>
      <rect x="60" y="127" width="40" height="5" rx="2.5" fill="#fde68a"/>
      <circle cx="145" cy="70" r="20" fill="#dcfce7" stroke="#86efac" strokeWidth="2"/>
      <path d="M140 70 L145 60 L150 70 L155 55" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <rect x="130" y="100" width="30" height="50" rx="4" fill="#bbf7d0"/>
      <rect x="135" y="108" width="20" height="4" rx="2" fill="#86efac"/>
      <rect x="135" y="116" width="15" height="3" rx="1.5" fill="#bbf7d0"/>
      <circle cx="150" cy="45" r="5" fill="#fde68a" opacity="0.7"/>
    </svg>
  );
}

function DoneForYouIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" style={{ animation: "float 3s ease-in-out infinite 0.6s" }}>
      <rect x="35" y="45" width="90" height="120" rx="10" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="2"/>
      <rect x="45" y="60" width="70" height="45" rx="6" fill="#ddd6fe"/>
      <circle cx="80" cy="82" r="12" fill="#a78bfa"/>
      <rect x="50" y="115" width="60" height="6" rx="3" fill="#c4b5fd"/>
      <rect x="55" y="127" width="50" height="5" rx="2.5" fill="#ddd6fe"/>
      <rect x="135" y="65" width="40" height="70" rx="6" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
      <rect x="142" y="75" width="26" height="20" rx="3" fill="#bfdbfe"/>
      <rect x="142" y="102" width="26" height="4" rx="2" fill="#93c5fd"/>
      <rect x="142" y="110" width="18" height="3" rx="1.5" fill="#bfdbfe"/>
      <circle cx="165" cy="50" r="6" fill="#fde68a" opacity="0.6"/>
      <path d="M25 140 L35 130 L45 145" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const icons = [ShopifyIcon, MarketingIcon, DoneForYouIcon];

const solutions = [
  {
    title: "Shopify Service",
    description:
      "First impression matters. If you want to attract a large audience, your store needs to look worth navigating. We build user-friendly Shopify stores that drive your audience to click on the purchase button.",
  },
  {
    title: "E-Commerce Marketing",
    description:
      "The e-commerce platform is highly competitive. You need a strong marketing game to keep your store ahead. Our proven marketing strategies assist you in reaching your target audience across multiple channels.",
  },
  {
    title: "Done for You",
    description:
      "Are you struggling with kickstarting your Shopify store? Let us take care of everything. We cover various areas, including product hunting, product sourcing, and shipping, to help you expand your online reach.",
  },
];

export default function CoreSolutions() {
  return (
    <section
      className="py-20 bg-[#0f1a2e]"
      aria-labelledby="solutions-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="solutions-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            What We Have in{" "}
            <span className="text-[#8BC53F]">Store for You</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            If you&apos;re ready to start your e-commerce business, we have the best e-commerce
            solutions to help you grow your business to success in a short span of time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => {
            const Icon = icons[i];
            return (
              <div
                key={sol.title}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-44 h-44 mb-6">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {sol.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {sol.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
