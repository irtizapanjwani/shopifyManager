"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import ConsultModal from "@/components/ConsultModal";

export default function EcommerceMarketingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Hero Section ── */}
      <section
        className="relative min-h-[800px] flex items-center pt-48 pb-20"
        style={{
          background:
            "linear-gradient(180deg, #061a10 0%, #0A2515 12%, #0F3320 28%, #145A32 42%, #1B7A42 58%, #22A350 74%, #2CC968 88%, #34E077 100%)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:pl-4 md:pr-6 w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex-1 max-w-[700px] pt-22">
            <h1
              className="text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-white leading-[1.3]"
              style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}
            >
              Grow Your Online Business with<br />Proven<br />E-commerce Marketing Strategies
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-3 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#19532E] transition-all duration-300"
              >
                Get a Free Consultation
              </button>
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
              src="/shopify-custom-services/1.png"
              alt="Shopify Services illustration"
              width={600}
              height={600}
              className="w-full max-w-[550px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Services Tabs ── */}
      <section className="bg-white pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-nowrap items-center justify-center gap-8 md:gap-14 mb-24">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 9l-2 2m0 0l2 2m-2-2h8" />
              </svg>
              <span className="text-xl font-bold text-gray-800">Development.</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13h16M7 17h4" />
              </svg>
              <span className="text-xl font-bold text-gray-800">Shopify Design.</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-xl font-bold text-gray-800">Shopify CRO.</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a2 2 0 11-4 0" />
              </svg>
              <span className="text-xl font-bold text-gray-800">Shopify Support.</span>
            </div>
          </div>

          {/* Green Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-[#46E680] to-[#58DDB0] pt-20 px-16 pb-0 text-center relative">
            <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-normal text-white leading-tight mb-6">
              We Craft Personalized Marketing Campaigns To <span className="font-extrabold">Enhance<br />Your E-Commerce Store's Performance.</span>
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed max-w-4xl mx-auto mb-8">
              Are you planning to kickstart your Shopify business? Or want to revamp your already existing store? We will help you globalize your business. We offer 24/7 free support for the design and development of your Shopify e-commerce store. Our main focus is to make your business visible to the global market. Our team has the expertise to help you reach your target audience and generate more sales leads.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-gray-800 text-sm font-semibold hover:bg-gray-100 transition-all duration-300 mb-24"
            >
              Get a Free Consultation
            </button>
          </div>

          {/* Service Cards - Overlapping the green banner */}
          <div className="relative z-10 -mt-24 mb-8">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg mb-5">
                    <Image
                      src="/shopify-custom-services/5.png"
                      alt="Shopify Design"
                      width={140}
                      height={140}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <span className="text-base font-bold text-gray-800">Shopify Design</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg mb-5">
                    <Image
                      src="/shopify-custom-services/6.png"
                      alt="Shopify Development"
                      width={140}
                      height={140}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <span className="text-base font-bold text-gray-800">Shopify Development</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg mb-5">
                    <Image
                      src="/shopify-custom-services/7.png"
                      alt="Shopify Migration"
                      width={140}
                      height={140}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <span className="text-base font-bold text-gray-800">Shopify Migration</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg mb-5">
                    <Image
                      src="/shopify-custom-services/8.png"
                      alt="Support and Maintenance"
                      width={140}
                      height={140}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <span className="text-base font-bold text-gray-800">Support and<br />Maintenance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customized Solutions Section */}
          <div className="py-20 text-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                <span className="text-gray-800 font-normal">Drive Real Results With Our</span> <span className="text-[#58DDB0] font-bold">Tailored E-<br />commerce SEO Strategies</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
                We combine industry expertise with innovative tactics to create tailored strategies that drive measurable outcomes for your business. Whether you aim to increase sales, improve ROI, or expand your market reach, our team is committed to delivering the results you need to succeed. Achieve your business goals and exceed expectations with our impactful e-commerce strategies. Contact us today!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <div className="bg-[#1a2332]">
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div className="text-center">
                <div className="flex justify-center mb-8 h-[250px]">
                  <Image
                    src="/shopify-custom-services/10.png"
                    alt="Shopify Design Solutions"
                    width={300}
                    height={250}
                    className="h-[250px] w-auto object-contain"
                  />
                </div>
                <p className="text-white text-sm mb-3">begin Your E-commerce Journey</p>
                <h3 className="text-2xl font-semibold leading-tight mb-5">
                  <span className="text-white">Understanding Your </span> <span className="text-[#58DDB0] font-semibold">Target Audience First</span>
                </h3>
                <p className="text-white text-sm leading-relaxed mb-6">
                  A business success begins with knowing your audience and what they're searching for online. We understand your audience's behaviors and preferences through extensive research and analysis. We can develop a tailored marketing strategy that resonates with them by understanding their needs, pain points, and aspirations. Our approach includes everything from optimizing your website for relevant keywords to creating compelling content and enhancing user experience - all aiming to connect with your audience and drive positive results.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-gray-500 text-white text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>

              {/* Card 2 */}
              <div className="text-center">
                <div className="flex justify-center mb-8 h-[250px]">
                  <Image
                    src="/shopify-custom-services/11.png"
                    alt="Shopify Development"
                    width={300}
                    height={250}
                    className="h-[250px] w-auto object-contain"
                  />
                </div>
                <p className="text-white text-sm mb-3">Let’s Turn Vision into Reality</p>
                <h3 className="text-2xl font-semibold leading-tight mb-5">
                  <span className="text-white">Building a </span> <span className="text-[#58DDB0]">Comprehensive Marketing Strategy</span>
                </h3>
                <p className="text-white text-sm leading-relaxed mb-6 font-semibold">
                  Now that we've understood your target audience, it's time to craft a comprehensive marketing strategy for your e-commerce store. We'll work closely with you to develop a comprehensive plan that addresses your unique business goals and challenges. From on-page optimization and content marketing to social media engagement and paid advertising, our experts develop strategies that maximize your visibility, attract qualified traffic, and increase conversions. Ready to take your e-commerce to the next level? Let's craft a winning strategy together.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-gray-500 text-white text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>

              {/* Card 3 */}
              <div className="text-center">
                <div className="flex justify-center mb-8 h-[250px]">
                  <Image
                    src="/shopify-custom-services/12.png"
                    alt="Maintenance Services"
                    width={300}
                    height={250}
                    className="h-[200px] w-auto object-contain"
                  />
                </div>
                <p className="text-white text-sm mb-3">Identify Areas For Improvement</p>
                <h3 className="text-2xl font-semibold leading-tight mb-5">
                  <span className="text-white">Testing and </span><span className="text-[#58DDB0]">Improving Performance</span>
                </h3>
                <p className="text-white text-sm leading-relaxed mb-6">
                  Our commitment to your success doesn't end after implementation. Using data analysis, user feedback, and industry best practices, we identify areas for optimization and fine-tune your strategy for maximum effectiveness. Whether it's tweaking meta tags, optimizing page load speed, or fine-tuning content structure, every adjustment aims to enhance your website's performance and drive meaningful results. Ready to refine your e-commerce approach and achieve lasting success? Let's collaborate and optimize your strategy for maximum impact.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-gray-500 text-white text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 mt-4"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />

      {/* FAQ Section */}
      <FAQ />

      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
