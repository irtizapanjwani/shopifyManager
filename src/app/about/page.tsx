"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EssentialFeatures from "@/components/EssentialFeatures";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ConsultModal from "@/components/ConsultModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Hero Section ── */}
      <section
        className="relative min-h-[800px] flex items-end justify-center pb-24"
        style={{
          background:
            "linear-gradient(180deg, #061a10 0%, #0A2515 12%, #0F3320 28%, #145A32 42%, #1B7A42 58%, #22A350 74%, #2CC968 88%, #34E077 100%)",
        }}
      >
        <div className="max-w-[920px] mx-auto px-6 text-center">
          <h1
            className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-[1.38]"
            style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}
          >
            Shopify Managers is a top-performing Shopify agency that offers robust and conversion-driven store for all business owners. We&rsquo;re founders just like you with the aim of helping businesses ignite growth and achieve limitless scale.
          </h1>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center mt-10 px-8 py-3 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#19532E] transition-all duration-300"
          >
            Get a Free Consultation
          </button>
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

      {/* ── How Shopify Managers Came into Existence ── */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center gap-10" style={{ background: "linear-gradient(135deg, #1CBE78 0%, #3EDB8E 55%, #5CEB9C 100%)" }}>
            {/* Text Content */}
            <div className="flex-1 text-white">
              <h2
                className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}
              >
                How Shopify Managers Came into Existence
              </h2>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                It all started with a simple vision: to help businesses sell their products online. Since 2015, Shopify Managers has been delivering a comprehensive range of Shopify solutions to help in running a sales-driven store. We have experience in collaborating with various industries, whether it&apos;s startups, small, medium or enterprise-level businesses. Shopify Managers has a record of building 1000+ Shopify stores and envision to build a standard of excellence in the e-commerce industry and create value for the clients.
              </p>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src="/shopify-about/22.png"
                alt="Shopify Managers illustration"
                width={350}
                height={350}
                className="w-[280px] md:w-[350px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Leading E-Commerce Shopify Agency ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              <Image
                src="/shopify-about/expand.png"
                alt="Shopify Managers team"
                width={500}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3d23] leading-tight mb-6">
              Leading <span className="text-[#59DFAB]">E-Commerce Shopify Agency</span> in the USA
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We&apos;re an award-winning agency that has been recognized by the industry for its outstanding work. Shopify Managers has received various awards, including making into the Top 10 Best Shopify Development Partner in 2023 by Trust Pilot.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-4">
              We initiated with the mission of providing the best e-commerce services for our clients. Shopify is a cloud-based e-commerce platform that allows businesses to create, manage and promote their own online store. Shopify Managers has established itself as an expert in building user-friendly, reliable, and secure e-commerce stores, making it easier for merchants to sell their products and services online. We are a team of e-commerce experts with a quality-first attitude and years of experience, ensuring your online store works at it&apos;s best.
            </p>
          </div>
        </div>
      </section>

      {/* ── Essential Features ── */}
      <EssentialFeatures />

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── FAQ ── */}
      <FAQ />

      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}