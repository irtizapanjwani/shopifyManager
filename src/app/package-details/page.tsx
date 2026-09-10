"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import PricingModal from "@/components/PricingModal";
import { useState } from "react";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  features: string[];
}

const allPlans: PricingTier[] = [
  {
    name: "Beginner Shopify",
    description: "Revolutionize your online presence with our Shopify website design services.",
    price: "$249",
    originalPrice: "$498",
    features: [
      "Theme-based Design",
      "Up-To 10 Products",
      "Dedicated Designer & Developer",
      "Unlimited Revisions",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
    ],
  },
  {
    name: "Growth Shopify",
    description: "Create dream Shopify website with our expert design and development services.",
    price: "$599",
    originalPrice: "$1198",
    features: [
      "Customized Design",
      "Up-To 50 Products",
      "Mini Shopping Cart Integration",
      "Payment Module Integration",
      "Dedicated Designer & Developer",
      "Unlimited Revisions",
      "100% Satisfaction Guarantee",
    ],
  },
  {
    name: "Level Up Shopify",
    description: "Transform your online presence with our Shopify web design services.",
    price: "$999",
    originalPrice: "$1998",
    features: [
      "Customized Design",
      "Up-To 75 Products",
      "Full Shopping Cart Integration",
      "Payment Module Integration",
      "Easy Product Search",
      "Dedicated Designer & Developer",
      "Unlimited Revisions",
    ],
  },
  {
    name: "Pro Shopify",
    description: "Build Shopify store easily with our professional services.",
    price: "$1499",
    originalPrice: "$2998",
    features: [
      "Customized Design",
      "Up-To 125 Products",
      "Full Shopping Cart Integration",
      "Payment Module Integration",
      "Easy Product Search",
      "Product Reviews",
      "Blog Page",
    ],
  },
  {
    name: "Executive Shopify",
    description: "Effortlessly set up Shopify store with the help of our experts.",
    price: "$2499",
    originalPrice: "$4998",
    features: [
      "Unlimited Pages Website with Unique Design",
      "5 Custom Logo Design",
      "Up-to 250 products",
      "FREE Unlimited Revisions",
      "Custom Shopping Cart Integration",
      "Multiple Payment Module Integration",
      "Navegational and Search Optimisation",
    ],
  },
  {
    name: "Top Tier Shopify",
    description: "Maximize your potential with our expert Shopify store design services.",
    price: "$4999",
    originalPrice: "$9998",
    features: [
      "Complete Custom Design & Development",
      "Unique, User-Friendly, Interactive, Dynamic, High-End UI Design",
      "Up-to 500 products (Option To Scale)",
      "Unlimited Banner Designs",
      "Interactive Sliding Banners",
      "Special Hover Effects",
    ],
  },
];

function PackageDetailsContent() {
  const searchParams = useSearchParams();
  const planName = searchParams.get("plan") || "Beginner Shopify";
  const [modalOpen, setModalOpen] = useState(false);

  const plan = allPlans.find((p) => p.name === planName) || allPlans[0];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[400px] flex items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg, #061a10 0%, #0A2515 12%, #0F3320 28%, #145A32 42%, #1B7A42 58%, #22A350 74%, #2CC968 88%, #34E077 100%)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 w-full text-center pt-32 pb-20">
          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white"
            style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}
          >
            Package Details
          </h1>
        </div>
      </section>

      {/* Package Content */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Plan Info */}
            <div className="flex-1 bg-[#58DDB0] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p className="text-sm mb-4 text-white/90">{plan.description}</p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-xl line-through text-white/60">{plan.originalPrice}</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex-1 py-3 rounded-full border-2 border-white bg-transparent text-white font-bold text-sm hover:bg-white hover:text-[#58DDB0] transition-colors"
                >
                  Get Started
                </button>
                <button
                  onClick={() => window.dispatchEvent(new Event("openHelpChat"))}
                  className="flex-1 py-3 rounded-full border-2 border-white bg-white text-[#58DDB0] font-bold text-sm hover:bg-transparent hover:text-white transition-colors"
                >
                  <span className="inline-flex items-center justify-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                    </svg>
                    Chat Now
                  </span>
                </button>
              </div>
            </div>

            {/* Right: Features */}
            <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-800">
                    <span className="w-2 h-2 bg-gray-800 rounded-full flex-shrink-0"></span>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PricingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planName={plan.name}
        planPrice={plan.price}
      />
    </>
  );
}

export default function PackageDetailsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
      <PackageDetailsContent />
    </Suspense>
  );
}
