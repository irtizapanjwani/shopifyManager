"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ConsultModal from "@/components/ConsultModal";

const allFaqs = [
  {
    question: "What Shopify services do you offer?",
    answer:
      "We offer a comprehensive range of Shopify services including store setup, theme customization, app integration, migration, speed optimization, SEO, and ongoing maintenance to help your e-commerce business thrive.",
  },
  {
    question: "Can you optimize my Shopify store for better performance?",
    answer:
      "Yes. We optimize store speed, Core Web Vitals, and overall performance to ensure your customers enjoy a fast and seamless shopping experience.",
  },
  {
    question: "Can you set up a new Shopify store from scratch?",
    answer:
      "Absolutely. We handle everything from theme selection and customization to product setup, payment gateway integration, and launch preparation.",
  },
  {
    question: "Can you migrate my existing site to Shopify?",
    answer:
      "Yes. We migrate products, customers, order history, and redirects from WooCommerce, Magento, or any other platform with zero downtime.",
  },
  {
    question: "Can you integrate third-party apps with my Shopify store?",
    answer:
      "Yes. We integrate and configure third-party apps for marketing, analytics, inventory management, and other business needs.",
  },
  {
    question: "Can I find upgrade or downgrade options if I need to revise?",
    answer:
      "Yes. We offer flexible plans that can be adjusted based on your evolving business requirements. Contact us to discuss your needs.",
  },
  {
    question: "What key performance indicators (KPIs) do you track to assess the success?",
    answer:
      "We use KPIs like website traffic, conversion rate, average order value, customer acquisition cost (CAC), and email engagement metrics to assess the success of e-commerce marketing efforts and improve overall revenue generation.",
  },
  {
    question: "Can I sell products internationally with Shopify?",
    answer:
      "Yes, Shopify supports international selling with multi-currency and multi-language capabilities, allowing you to reach customers around the world.",
  },
  {
    question: "Can you create custom landing pages or promotional campaigns for my Shopify store?",
    answer:
      "Yes, we can create custom landing pages or promotional campaigns tailored to your specific marketing needs. Whether you're launching a new product, running a sales promotion, or hosting an event, we'll design and develop landing pages that drive engagement and conversions for your Shopify store.",
  },
  {
    question: "How can email marketing help me increase sales for my online store?",
    answer:
      "Email marketing can increase sales for your online store by nurturing leads, engaging customers with personalized content and promotions, and driving repeat purchases through targeted campaigns and automation.",
  },
  {
    question: "Do I need to purchase a Shopify theme, or can you create a custom design for my store?",
    answer:
      "We can work with both free and premium Shopify themes, or create a completely custom design tailored to your brand. We'll discuss the best option for your needs and budget during our consultation.",
  },
  {
    question: "Can I customize the products sourced for my Shopify store?",
    answer:
      "Yes. We work with you to understand your brand identity and target audience preferences. Based on your input, we tailor our product sourcing efforts to include items that resonate with your brand aesthetic and meet your customers' needs.",
  },
  {
    question: "How long does it take to set up and launch PPC campaigns?",
    answer:
      "The timeline for launching PPC campaigns depends on campaign complexity, ad creatives, and platform selection. Our agency ensures timely campaign deployment.",
  },
  {
    question: "How do we get started for our Shopify store?",
    answer:
      "Getting started is easy! Simply reach out to us to schedule a consultation. During this initial meeting, we'll discuss your business goals, Shopify store requirements, and how we can help you achieve success. From there, we'll develop a customized plan tailored to your needs and bring your Shopify vision to life.",
  },
];

export default function FAQPage() {
  const [modalOpen, setModalOpen] = useState(false);

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
              Got Questions? Contact Our Team For Expert Guidance.
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
              src="/shopify-faq/5.png"
              alt="FAQ illustration"
              width={600}
              height={600}
              className="w-full max-w-[550px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── All FAQs Combined ── */}
      <section
        id="faq"
        className="py-16 sm:py-20 bg-white"
        aria-labelledby="faq-heading"
      >
        <div className="w-full px-[72px]">
          <div className="text-center mb-10">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-slate-950 tracking-tight"
            >
              Frequently <span className="font-extrabold text-[#58DDB0]">Asked Questions</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-500">
              Have confusions? Don&apos;t worry. Check out some of the commonly asked queries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-x-7 md:gap-y-5">
            {allFaqs.map((item) => (
              <details
                key={item.question}
                className="group bg-[#f6f7f8] px-6 py-5 sm:px-8 sm:py-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base sm:text-lg font-medium leading-snug text-slate-700">
                  <span className="pr-4">{item.question}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 flex-shrink-0 stroke-current stroke-[2.5] transition-transform group-open:rotate-180"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
