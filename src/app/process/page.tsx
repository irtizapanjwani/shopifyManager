"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

const processSteps = [
  {
    title: "Planning",
    description:
      "We collaborate closely to define project scope, outline features, and more, ensuring a clear roadmap before moving forward with the design and development process.",
  },
  {
    title: "Design and Development",
    description:
      "Our team brings your vision to life by creating custom designs and developing a functional Shopify store that reflects your brand and resonates with your audience.",
  },
  {
    title: "Final Launch",
    description:
      "We test all features to ensure they work seamlessly, and then we coordinate with you to set a launch date and deploy your Shopify store to the live environment.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our dedicated team provides ongoing support for updates, maintenance, and troubleshooting to ensure your Shopify store continues to perform at its best.",
  },
];

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(-1);

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
              We Make It Easy For You To Achieve Your Goals
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
              src="/shopify-about/3.png"
              alt="Process illustration"
              width={500}
              height={500}
              className="w-full max-w-[450px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Clients That Worked with Us ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-[46px] font-normal text-[#0d3d23] mb-12"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Clients That <span className="text-[#59DFAB]">Worked with Us</span>
          </h2>

          <div className="flex justify-center">
            <Image
              src="/shopify-services/clients-strip.png"
              alt="Client logos"
              width={1400}
              height={80}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── How Does It Work ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              How We Build Your E-Commerce Shopify Store
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3d23] mb-8">
              How Does <span className="text-[#59DFAB]">It Work</span>
            </h2>

            {/* Accordion Steps */}
            <div className="space-y-0">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`border-b border-gray-200 ${
                    index === 0 ? "border-t" : ""
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(-1)}
                >
                  <button
                    className={`w-full text-left py-5 text-lg font-semibold transition-colors ${
                      activeStep === index
                        ? "text-[#0d3d23]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {step.title}
                  </button>
                  {activeStep === index && (
                    <div className="pb-5">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/shopify-process/build.png"
              alt="How it works"
              width={550}
              height={550}
              className="w-full max-w-[500px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner />

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── FAQ ── */}
      <FAQ />
    </>
  );
}
