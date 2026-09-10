"use client";

import { useState } from "react";
import Image from "next/image";
import ConsultModal from "./ConsultModal";

export default function CTABanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-b from-[#56E5A3] to-[#4DF78D] text-white py-8 sm:py-10 lg:py-0 lg:min-h-[355px] relative overflow-visible">
        <div className="w-full px-[72px] min-h-[inherit] relative z-10 grid lg:grid-cols-2 items-center gap-8 lg:gap-16">
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
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3 mt-6 rounded-full font-bold text-[#08130e] bg-white hover:bg-slate-100 hover:scale-105 transition-all text-sm sm:text-base shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
