"use client";

import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section
        className="relative min-h-[800px] flex items-center"
        style={{
          background:
            "linear-gradient(180deg, #061a10 0%, #0A2515 12%, #0F3320 28%, #145A32 42%, #1B7A42 58%, #22A350 74%, #2CC968 88%, #34E077 100%)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-[72px] w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px]">
            <h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.2]"
              style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}
            >
              See What Others Are Saying About Us
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#19532E] transition-all duration-300"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 text-white text-sm font-semibold hover:text-white/80 transition-all duration-300"
              >
                Check Out Our Pricing
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/shopify-pricing/4.png"
              alt="Testimonials illustration"
              width={600}
              height={600}
              className="w-full max-w-[550px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <Testimonials allTestimonials={true} />
    </>
  );
}
