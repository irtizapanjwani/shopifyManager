interface Industry {
  emoji: string;
  title: string;
  description: string;
}

const industries: Industry[] = [
  {
    emoji: "🧶",
    title: "Handmade Items",
    description: "Bespoke artisan goods & craft marketplaces.",
  },
  {
    emoji: "🎨",
    title: "Art & Collectibles",
    description: "Limited editions, gallerists & high-ticket items.",
  },
  {
    emoji: "🛋️",
    title: "Luxury Furniture",
    description: "High-AOV interior products with 3D/AR preview.",
  },
  {
    emoji: "🎂",
    title: "Cakes & Gourmet Food",
    description: "Perishable schedules, delivery slots & subscriptions.",
  },
  {
    emoji: "⚡",
    title: "Digital & Subscriptions",
    description: "Recurring billing, license keys & media downloads.",
  },
];

export default function IndustrySectors() {
  return (
    <section className="py-20 bg-white" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008060]">
            Industry Versatility
          </span>
          <h2
            id="industries-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1"
          >
            Sell Anything. Make Profit.
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            We&apos;ve built high-converting Shopify stores for various industries across North America and Europe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="p-6 text-center rounded-2xl border border-slate-200 bg-[#fbfdfc] hover:border-[#008060] hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform shadow-sm">
                {ind.emoji}
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{ind.title}</h4>
              <p className="text-xs text-slate-500 mt-2">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
