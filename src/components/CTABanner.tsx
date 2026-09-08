import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-b from-[#56E5A3] to-[#4DF78D] text-white py-8 sm:py-10 lg:py-0 lg:min-h-[355px] relative overflow-visible">
      <div className="max-w-7xl min-h-[inherit] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 items-center gap-8 lg:gap-16">
        <div className="relative flex justify-center lg:justify-start self-stretch min-h-[280px] lg:min-h-0">
          <Image
            src="/Shopify Launchpad Images/shopify2.png"
            alt="Shopify shopper and storefront illustration"
            width={598}
            height={514}
            className="absolute bottom-0 left-1/2 w-full max-w-[360px] -translate-x-1/2 h-auto sm:max-w-[420px] lg:w-[530px] lg:max-w-none"
          />
        </div>

        <div className="max-w-2xl text-center lg:text-left">
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
