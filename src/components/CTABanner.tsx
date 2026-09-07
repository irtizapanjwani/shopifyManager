import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-[#8BC53F] to-[#6dd49e] text-white py-14 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get a High-Converting E-Commerce Shopify Store Today
          </h2>
          <p className="mt-3 text-white/90 text-sm sm:text-base leading-relaxed">
            Ready to scale your business to new heights? Break free from the ordinary and
            avail the best Shopify solutions right here!
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3 mt-6 rounded-full font-bold text-[#08130e] bg-white hover:bg-slate-100 hover:scale-105 transition-all text-sm sm:text-base shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
