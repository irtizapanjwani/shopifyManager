import Image from "next/image";
import Link from "next/link";

const metrics = [
  { value: "+127%", label: "Store Revenue" },
  { value: "4.8%",  label: "Conversion Rate" },
  { value: "1,240+", label: "Monthly Orders" },
] as const;

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#08130e] overflow-hidden min-h-[720px] flex items-center py-16 lg:py-24 border-b border-[#1b3024]"
      aria-labelledby="hero-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1F_w0kYam3HARNkNxPW7lJw5XUlQVOf_OWO9qsfGXEoRV_Y6Anij0ujWHrJE5gnS4hp8PX1o6fU8IrHXgsXyWfgBAAWBNaECyeqdpzD68vehTneBxY8orUCRsx6Sh7x4WQbwt9PtYLU0sGbrAA2s89oTDdRoVkqfgsu6jqtz5YQvtZBBaeEUnanZfhzpwwvebFtg0TgC5eTrhIZ13aw186XWtXzVEXXAYAyKanYIXHBM7RY1Kv8N7rA"
          alt="Shopify store editor on laptop in modern office"
          fill
          className="object-cover object-center opacity-50 mix-blend-luminosity brightness-85 contrast-110"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-ambient-mask" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* ── Left column ───────────────────────────────── */}
          <div className="lg:col-span-6 space-y-7">
            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.12]"
            >
              Build a Successful<br />
              E-Commerce<br />
              Business<br />
              <span className="text-[#9bc43f]">on Shopify</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              The world is evolving — is your business evolving too? We&apos;re an award-winning
              agency specialising in result-driven Shopify solutions. Our team is guided by
              human-centric ideas to help startups, mid-sized, and enterprise businesses with
              Shopify design, development, and optimisation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-white text-[#08130e] hover:bg-slate-100 hover:shadow-xl transition-all"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/#about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-transparent text-white border border-white hover:bg-white/10 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* ── Right column — mock store frame ───────────── */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="p-3 sm:p-4 rounded-3xl bg-[#12231a]/80 border border-[#2d4a35] shadow-2xl backdrop-blur-sm">
              {/* Store preview */}
              <div className="rounded-2xl overflow-hidden border border-[#2c4737] bg-[#0c1913] relative">
                <div className="bg-white p-6 sm:p-8">
                  {/* Mock store header */}
                  <div className="flex justify-between items-center pb-4 mb-5 border-b border-slate-100">
                    <div className="text-xs font-extrabold text-slate-900 tracking-wider">
                      NATURAL•be
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-slate-500 font-medium">
                      <span>Skincare</span>
                      <span>Apparel</span>
                      <span>Lookbook</span>
                    </div>
                  </div>
                  {/* Product grid */}
                  <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Round-Neck T-Shirt</span>
                      <div className="text-sm font-extrabold text-slate-900">
                        $19{" "}
                        <span className="text-xs font-normal text-slate-400 line-through">$30</span>
                      </div>
                      <div className="flex gap-1 pt-1" aria-label="Colour options">
                        <span className="w-3 h-3 rounded-full bg-stone-300" />
                        <span className="w-3 h-3 rounded-full bg-amber-700" />
                        <span className="w-3 h-3 rounded-full bg-slate-800" />
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center h-44">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-aPn4zv8QdG9ZtyZo8bEiTXgF9DbItvh5kz17edBmzkwj1pidzPHfOXe9C8J4gnO_xYtlU93MCysmuBoQBund3pw1xokukNH6qhv_V818X974HBeDvOTqjzh9VQFVFru--biXspgOo9AmSsjoiSG5iQUz-wp31H40q5BTYtSMT6sxAh65P_eN5ppFgCfsAzxD5efdRiBvdqfTyU25py24fIUFWQPL6c3JBRPbe23lcI7sANJmxpzINQ"
                        alt="Minimalist fashion showcase"
                        width={180}
                        height={176}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-3 gap-3 pt-3.5">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-[#182820] border border-[#243c2f] rounded-xl p-3 sm:p-4"
                  >
                    <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-medium text-slate-300 mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
