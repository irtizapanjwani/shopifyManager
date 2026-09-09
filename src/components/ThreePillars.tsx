"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Pillar {
  id: string;
  number: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
}

const pillars: Pillar[] = [
  {
    id: "build",
    number: "01",
    title: "We Build It.",
    body: "Building stores that lead customers down the sales funnel. We specialize in crafting expert Shopify solutions that have engaging visual appeal, prioritize user experience, and are highly functional. If you're looking to convert visitors into customers, get a conversion-driven store today!",
    imageSrc: "/Shopify Launchpad Images/promoteit.png",
    imageAlt: "Shopify promotion and marketing",
  },
  {
    id: "promote",
    number: "02",
    title: "We Promote It.",
    body: "Upscale your Shopify sales with expert strategies. Are you struggling to grow your store's visibility and traffic? We craft personalized strategies that ensure your Shopify store stands out in the competitive e-commerce marketplace. Achieve sustainable growth today!",
    imageSrc: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=900&fit=crop&auto=format&q=80",
    imageAlt: "Digital marketing and social media promotion concept",
  },
  {
    id: "grow",
    number: "03",
    title: "We Grow It.",
    body: "Get a successful Shopify store now! Do you want to grow your store's revenue and sale? We craft personalized shipment and product sourcing strategies that ensure your Shopify store makes the highest growth in the industry. Scale your business to success.",
    imageSrc: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=900&fit=crop&auto=format&q=80",
    imageAlt: "Happy customer with shopping bags and online shopping notifications",
  },
];

export default function ThreePillars() {
  const [activeId, setActiveId] = useState<string>("grow");

  return (
    <section
      id="process"
      className="pt-8 pb-20 bg-white"
      aria-labelledby="pillars-heading"
    >
      <div className="w-full px-[72px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Accordion */}
          <div className="space-y-0">
            {pillars.map((p) => {
              const isActive = activeId === p.id;
              return (
                <div
                  key={p.id}
                  className={`border-b border-slate-200 transition-all duration-300 ${
                    isActive ? "pb-8" : "pb-4"
                  }`}
                  onMouseEnter={() => setActiveId(p.id)}
                  onClick={() => setActiveId(p.id)}
                >
                  <button
                    type="button"
                    className="w-full text-left flex items-baseline gap-2 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#59DFAB] rounded"
                    aria-expanded={isActive}
                  >
                    <span
                        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold transition-colors duration-300 ${
                        isActive ? "text-[#08130e]" : "text-slate-300"
                      }`}
                    >
                      We
                    </span>
                    <span
                        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold transition-colors duration-300 ${
                        isActive ? "text-[#59DFAB]" : "text-slate-300"
                      }`}
                    >
                      {p.title.replace("We ", "")}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <h4 className="text-lg font-bold text-[#08130e] mb-2">
                      {p.title === "We Grow It."
                        ? "Get a successful Shopify store now!"
                        : p.title === "We Build It."
                        ? "Building stores that lead customers down the sales funnel."
                        : "Upscale your Shopify sales with expert strategies."}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {p.body}
                    </p>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#59DFAB] text-white text-sm font-bold hover:bg-[#59DFAB] hover:opacity-90 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Image */}
          <div className="relative w-full max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden lg:max-w-md">
            <Image
              src="/Shopify Launchpad Images/promoteit.png"
              alt="Shopify promotion and marketing"
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
