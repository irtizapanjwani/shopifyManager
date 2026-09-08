"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Slide {
  title: string;
  body: string;
  icon: React.ReactNode;
}

const slides: Slide[] = [
  {
    title: "Expert Team",
    body: "We have 300+ Shopify experts with more than a decade of experience in the e-commerce industry. Our track of record showcases our team's expertise in various e-commerce industries. They are well-versed about the technicalities, latest features, and functionalities of e-commerce. Our team has up-to-date knowledge about the latest trends and insights in the e-commerce industry.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="28" cy="28" r="10" stroke="white" strokeWidth="3"/>
        <circle cx="52" cy="28" r="10" stroke="white" strokeWidth="3"/>
        <path d="M12 62c0-10 8-16 16-16s16 6 16 16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <path d="M36 62c0-10 8-16 16-16s16 6 16 16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Conversion Optimisation",
    body: "Every screen is engineered with strict CRO protocols, frictionless 1-click checkout options, and psychological buying triggers. We design with data-backed A/B testing to ensure your store converts visitors into loyal customers at the highest rate possible.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="10" y="40" width="12" height="24" rx="2" stroke="white" strokeWidth="3"/>
        <rect x="28" y="28" width="12" height="36" rx="2" stroke="white" strokeWidth="3"/>
        <rect x="46" y="18" width="12" height="46" rx="2" stroke="white" strokeWidth="3"/>
        <rect x="64" y="8" width="12" height="56" rx="2" stroke="white" strokeWidth="3"/>
        <path d="M16 36 L34 24 L52 14 L70 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3"/>
      </svg>
    ),
  },
  {
    title: "Mobile Responsiveness",
    body: "Over 75% of your shoppers are mobile. Our templates offer thumb-friendly tactile navigation and sub-second load times. Every element is crafted to deliver a seamless experience across all devices and screen sizes.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="22" y="8" width="36" height="64" rx="6" stroke="white" strokeWidth="3"/>
        <line x1="22" y1="20" x2="58" y2="20" stroke="white" strokeWidth="2"/>
        <line x1="22" y1="56" x2="58" y2="56" stroke="white" strokeWidth="2"/>
        <circle cx="40" cy="64" r="3" stroke="white" strokeWidth="2"/>
        <path d="M30 32 L38 42 L52 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "24/7 Support & Maintenance",
    body: "Zero-downtime updates, live security scans, automated backup schedules, and proactive bug fixing so you never miss a sale. Our dedicated support team is always available to keep your store running smoothly around the clock.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="28" stroke="white" strokeWidth="3"/>
        <path d="M40 22 V40 L54 48" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="40" cy="40" r="4" fill="white"/>
      </svg>
    ),
  },
  {
    title: "Scalability & Adaptability",
    body: "Whether preparing for a Flash Sale, Black Friday surge, or scaling across multiple global markets, our architecture handles millions in concurrent checkout traffic without a glitch. Grow fearlessly with infrastructure built for scale.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <path d="M12 60 L28 40 L40 50 L56 24 L68 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M56 24 L68 24 L68 36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="60" r="4" fill="white"/>
        <circle cx="28" cy="40" r="4" fill="white"/>
        <circle cx="40" cy="50" r="4" fill="white"/>
        <circle cx="56" cy="24" r="4" fill="white"/>
        <circle cx="68" cy="12" r="4" fill="white"/>
      </svg>
    ),
  },
];

export default function WhyUs() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const s = slides[active];

  return (
    <section
      id="about"
      className="py-20 lg:py-24 bg-[#292D3F]"
      aria-labelledby="whyus-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: heading + slide content */}
          <div className="flex flex-col justify-between">
            <div>
              <h2
                id="whyus-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-xl leading-tight"
              >
                Why We&apos;re the{" "}
                <span className="text-[#59DFAB]">
                  Ideal E-Commerce Shopify Partner
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Growth-driven. Efficient. Seamless operations.
              </p>
            </div>

            <div className="mt-12 flex gap-5">
              {/* Icon */}
              <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-[#59DFAB] flex items-center justify-center p-5">
                {s.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                  {s.body}
                </p>

                {/* Dots */}
                <div className="flex items-center gap-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                        i === active
                          ? "bg-[#59DFAB] border-[#59DFAB]"
                          : "bg-transparent border-slate-400 hover:border-slate-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Shopify illustration */}
          <div className="relative w-full min-h-[360px] lg:min-h-[500px] flex items-center justify-center">
            <Image
              src="/Shopify Launchpad Images/ideal.png"
              alt="Ideal Shopify e-commerce partner illustration"
              width={722}
              height={652}
              className="w-full max-w-[540px] lg:max-w-[650px] h-auto object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
