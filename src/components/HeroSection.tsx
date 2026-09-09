"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ConsultModal from "./ConsultModal";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="relative w-full h-screen min-h-[620px] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Shopify Launchpad Images/bg-banner.png"
          alt="Team collaborating on e-commerce strategy"
          fill
          className="object-cover scale-[1.15] origin-center"
          style={{ objectPosition: "60% center" }}
          priority
          sizes="100vw"
        />
        {/* Top dark stripe gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #050d08 0%, #050d08 50px, rgba(5,13,8,0.7) 90px, rgba(5,13,8,0.2) 140px, transparent 200px)",
          }}
        />
        {/* Subtle right-side tint — keeps image visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(6,16,11,0.15) 50%, rgba(6,16,11,0.35) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-[72px] pt-24">
        <div className="flex justify-end">
          <div className="max-w-[600px] space-y-6">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-white tracking-tight leading-[1.08]"
            >
              Build a Successful
              <br />
              E-Commerce Business
              <br />
              on Shopify
            </h1>

            <p className="text-base sm:text-[17px] text-white/90 font-normal leading-relaxed">
              The world is evolving. Is your business evolving, too? We&apos;re an
              award-winning agency specializing in result-driven Shopify solutions.
              Our team is guided by human-centric ideas to help startups,
              mid-sized, and enterprise businesses with Shopify design,
              development, and optimization.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-bold bg-white text-[#08130e] hover:bg-slate-100 hover:shadow-xl transition-all cursor-pointer"
              >
                Get a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
