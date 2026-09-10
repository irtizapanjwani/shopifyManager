"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";

const dropshippingTestimonials = [
  {
    platform: "facebook",
    quote: "They are the best; the team at Shopify WebXperts explained every step and helped streamline our entire dropshipping process. From selecting products to automating orders, they were always available for support. It was a pleasure to work with a team this much skilled and committed to the goals of our services. 5 stars.",
    name: "Jennie Baker",
    stars: 5,
  },
  {
    platform: "google",
    quote: "I love that they are willing to change whatever you're unhappy with at no additional cost. Their flexibility and commitment to customer satisfaction are outstanding. They guided us through product selection and order automation with clear communication. My experience has been a 10/10. Will always work with them!",
    name: "Jack Michael",
    stars: 5,
  },
  {
    platform: "google",
    quote: "Shopify WebXperts is fantastic! The team was very fast to respond and handled every detail with care. They efficiently set up product selection, automated orders, and integrated suppliers, all while keeping us informed. Their expert support made our business run smoother than ever. We will continue to use them!!",
    name: "Jasmine Clark",
    stars: 5,
  },
  {
    platform: "google",
    quote: "Our sales have gone up by over 16X thanks to their dropshipping service! The team was attentive and worked closely with us to fine-tune product selection and streamline order processing. The support team was professional, responded quickly, and followed up with me. I look forward to doing business in the future!",
    name: "Chris Daniel",
    stars: 5,
  },
  {
    platform: "facebook",
    quote: "The staff of Shopify WebXperts was very helpful and courteous. They explained the entire process, suggested ideas that fit my business perfectly, and were always available to address my questions. Thank you so much for going above and beyond to ensure everything is perfect. I really appreciate it!",
    name: "John Ronaldo",
    stars: 5,
  },
  {
    platform: "facebook",
    quote: "I just had to thank the awesome team at Shopify WebXperts. I was struggling with integrating my store and managing inventory, but they stepped in and handled everything seamlessly. Every problem I've had has been fixed in less than an hour! My experience has been outstanding. Well done, guys!",
    name: "Laura Brian",
    stars: 5,
  },
  {
    platform: "google",
    quote: "Easy-peasy! I'd been researching reliable services for dropshipping, and honestly, it was so confusing. But the team at Shopify WebXperts made everything simple. I am very satisfied with the services received and will definitely continue to do business with them in the future. Thank you to the entire team at the Shopify WebXperts.",
    name: "Brian George",
    stars: 5,
  },
  {
    platform: "google",
    quote: "My inventory used to be a mess, but they streamlined everything and set up seamless order processing. Now, my customers receive their products promptly, and I can focus on growing my business with peace of mind. I highly recommend them to anyone seeking expert dropshipping services in the USA. 10/10 experience!",
    name: "Alice Thompson",
    stars: 5,
  },
];

const dropshippingSteps = [
  {
    step: 1,
    title: "Niche Research",
    description:
      "We identify profitable niches with high demand and low competition, ensuring your dropshipping store is set up for success from the very beginning.",
    image: "/shopify-dropshipping/expert1.png",
  },
  {
    step: 2,
    title: "Supplier Selection",
    description:
      "We carefully vet and select reliable suppliers who offer quality products, fast shipping, and competitive pricing to maintain customer satisfaction.",
    image: "/shopify-dropshipping/expert2.png",
  },
  {
    step: 3,
    title: "Store Setup",
    description:
      "Our team builds a professional, conversion-optimized Shopify store with custom design, branding, and all essential features to start selling immediately.",
    image: "/shopify-dropshipping/expert3.png",
  },
  {
    step: 4,
    title: "Product Listing",
    description:
      "We create compelling product listings with optimized descriptions, high-quality images, and SEO-friendly content to attract and convert visitors.",
    image: "/shopify-dropshipping/expert4.png",
  },
  {
    step: 5,
    title: "Marketing Launch",
    description:
      "We implement targeted marketing campaigns across social media and search engines to drive traffic and generate consistent sales for your store.",
    image: "/shopify-dropshipping/expert5.png",
  },
  {
    step: 6,
    title: "Performance Review",
    description:
      "We also conduct regular reviews of your store's performance. We analyze sales data and customer feedback to identify areas for improvement and adjust strategies to enhance your overall business outcomes.",
    image: "/shopify-dropshipping/expert6.png",
  },
];

const dropshippingPlans = [
  {
    name: "Starter",
    description: "Transform your online store with our top-tier dropshipping services.",
    price: "$1200",
    originalPrice: "$2400",
    features: [
      "Shopify Store Setup (Basic)",
      "Mobile Optimization",
      "Legal Pages (Privacy, Refund, TOS)",
      "Dropshipping App Integration (Basic - DSers)",
      "Product Import & Setup (10 Products)",
      "Payment Gateway Setup",
    ],
  },
  {
    name: "Growth",
    description: "Improve your business efficiency with our expert dropshipping services.",
    price: "$2500",
    originalPrice: "$5000",
    features: [
      "Shopify Store Setup (Advanced)",
      "Mobile Optimization",
      "Legal Pages (Privacy, Refund, TOS)",
      "Dropshipping App Integration (Best Options)",
      "Product Import & Setup (20 Products)",
      "Payment Gateway Setup",
      "Branded Logo Design (Basic Logo)",
      "Custom Home Page Design",
      "On-Page SEO Optimization (Basic SEO)",
      "Automated Order Fulfillment Setup",
      "Email Capture & Basic Popups",
      "Social Media Integration (Basic)",
      "Post-Launch Support (15 Days)",
    ],
  },
  {
    name: "Pro Brand",
    description: "Take your e-commerce business to the next level with our dropshipping expertise.",
    price: "$5000",
    originalPrice: "$10000",
    features: [
      "Shopify Store Setup (Premium Design)",
      "Mobile Optimization",
      "Legal Pages (Privacy, Refund, TOS)",
      "Dropshipping App Integration (Advanced Integrations)",
      "Product Import & Setup (40 Products)",
      "Payment Gateway Setup",
      "Branded Logo Design (Custom Logo)",
      "Custom Homepage Design",
      "On-Page SEO Optimization (Full SEO)",
      "Automated Order Fulfillment Setup",
      "Email Capture & Basic Popups",
      "Social Media Integration (Full Setup)",
      "Post-Launch Support (30 Days)",
      "Abandoned Cart Recovery Setup",
      "Facebook Pixel & Google Analytics",
      "Custom Branding (Color Palette, Fonts, Guidelines)",
      "Conversion Boosters (Urgency, Reviews, Trust Badges)",
      "Strategy Call (30-Min)",
    ],
  },
  {
    name: "Empire",
    description: "Cut costs and boost efficiency with our optimized dropshipping services.",
    price: "$11000",
    originalPrice: "$22000",
    features: [
      "Shopify Store Setup (Custom Premium Build)",
      "Mobile Optimization",
      "Legal Pages (Privacy, Refund, TOS)",
      "Dropshipping App Integration (Private Supplier Setup)",
      "Product Import & Setup (100+ Fully Optimized)",
      "Payment Gateway Setup",
      "Branded Logo Design (Premium Branding Kit)",
      "Custom Homepage Design",
      "On-Page SEO Optimization (Full SEO + Speed Boost)",
      "Automated Order Fulfillment Setup",
      "Email Capture & Basic Popups",
      "Social Media Integration (Full Setup + Strategy)",
      "Post-Launch Support (60 Days + Concierge)",
      "Abandoned Cart Recovery Setup",
      "Facebook Pixel & Google Analytics",
      "Custom Branding (Color Palette, Fonts, Guidelines)",
      "Conversion Boosters (Urgency, Reviews, Trust Badges)",
      "Strategy Call (60-Min)",
      "Brand Domain & Email Setup",
      "Premium Apps & Plugin Integrations",
      "Free Product Vendors (3–5)",
      "Facebook & Google Ad Creatives (Full Funnel Ads)",
      "TikTok & Reels Short Videos (5 Branded Shorts)",
      "Full Brand Identity & Store Strategy Plan",
    ],
  },
];

const N = dropshippingPlans.length;
const trip = [...dropshippingPlans, ...dropshippingPlans, ...dropshippingPlans];

function Card({ plan }: { plan: typeof dropshippingPlans[0] }) {
  return (
    <div
      className="bg-white rounded-[20px] overflow-visible border border-slate-200/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex flex-col h-[680px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      {/* Inner Header Container */}
      <div className="mx-3 mt-3 rounded-[16px] bg-[#E9F0ED] px-7 py-7 transition-colors duration-300 hover:bg-[#95BF47] group min-h-[200px] flex flex-col justify-between">
        <div>
          <span className="inline-block px-4 py-1.5 bg-white border border-slate-300 group-hover:border-white/40 rounded-md text-[14px] font-semibold text-[#065F46] mb-4 transition-colors duration-300">
            {plan.name}
          </span>
          <p className="text-[15px] font-normal text-[#5F718A] group-hover:text-white/90 mb-5 transition-colors duration-300" style={{ lineHeight: "1.55" }}>
            {plan.description}
          </p>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-[40px] font-normal text-[#065F46] group-hover:text-white leading-none transition-colors duration-300">{plan.price}</span>
          <span className="text-[16px] font-normal text-[#8FA2BA] group-hover:text-white/60 line-through transition-colors duration-300">{plan.originalPrice}</span>
        </div>
      </div>

      {/* Scrollable Feature List */}
      <div
        className="px-7 pt-6 pb-3 flex-1 overflow-y-auto relative"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#59DFAB #DADADA" }}
      >
        <ul className="space-y-[10px]">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[15px] font-normal text-[#5F718A]" style={{ lineHeight: "1.55", fontFamily: "var(--font-inter), sans-serif" }}>
              <span className="text-[#95BF47] mt-[3px] flex-shrink-0 text-[8px] text-black text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700 }}>•</span>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Buttons */}
      <div className="px-5 pb-5 pt-2 flex gap-3">
        <button className="flex-1 py-2.5 rounded bg-[#95BF47] text-white text-[15px] font-semibold hover:bg-[#85b336] transition-colors duration-300 cursor-pointer">
          Get Started
        </button>
        <button className="flex-1 py-2.5 rounded-md border border-slate-300 text-[#5D718C] text-[15px] font-semibold hover:border-[#95BF47] hover:text-[#95BF47] transition-colors duration-300 cursor-pointer">
          Chat Now
        </button>
      </div>
      <div className="px-5 pb-4 text-center">
        <a href="#" className="text-[13px] text-[#195f35] underline hover:text-[#95BF47] transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          View Details
        </a>
      </div>
    </div>
  );
}

export default function DropshippingPage() {
  const [activeDropStep, setActiveDropStep] = useState(0);
  const [baseIndex, setBaseIndex] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const baseRef = useRef(0);
  const dropTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    dropTimerRef.current = setInterval(() => {
      setActiveDropStep((prev) => (prev + 1) % 6);
    }, 2500);
    return () => { if (dropTimerRef.current) clearInterval(dropTimerRef.current); };
  }, []);

  const slideNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideOffset(-33.333);
    setTimeout(() => {
      setSlideOffset(0);
      baseRef.current = (baseRef.current + 1) % N;
      setBaseIndex(baseRef.current);
      setIsAnimating(false);
    }, 600);
  }, [isAnimating]);

  useEffect(() => {
    if (paused || isAnimating) return;
    timerRef.current = setInterval(slideNext, 2600);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, isAnimating, slideNext]);

  const jumpSlide = (dir: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideOffset(dir > 0 ? -33.333 : 33.333);
    setTimeout(() => {
      setSlideOffset(0);
      baseRef.current = (baseRef.current + dir + N) % N;
      setBaseIndex(baseRef.current);
      setIsAnimating(false);
    }, 600);
  };

  const cards = [0, 1, 2, 3].map((i) => trip[baseIndex + i]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[800px] flex items-center pt-28"
        style={{
          background:
            "linear-gradient(180deg, #000000 0%, #050F04 15%, #10250B 35%, #1F3A12 55%, #476F28 75%, #74A63F 100%)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-[650px]">
            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15]"
              style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}
            >
              Start Selling Online with<br />Trusted Dropshipping<br />Services
            </h1>
            <div className="mt-10">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#0a1f14] transition-all duration-300"
              >
                Secure your spot now
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/shopify-dropshipping/dropshipping-banner.png"
              alt="Dropshipping Services"
              width={600}
              height={600}
              className="w-full max-w-[550px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Dropshipping Pricing Section */}
      <section className="bg-[#f5f6f7] py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 tracking-tight mb-3">
            Dropshipping <span className="text-[#58DDB0]">Shopify Pricing Plans</span>
          </h2>
          <p className="text-center text-sm sm:text-base text-slate-500 mb-12">
            Looking for affordable Shopify options? Invest now for the growth and success of your business.
          </p>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => jumpSlide(-1)}
              className="absolute -left-5 top-[45%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.08)] flex items-center justify-center text-slate-400 hover:text-slate-700 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer"
              aria-label="Previous plans"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Carousel Viewport */}
            <div
              className="overflow-hidden mx-6"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                className="flex"
                style={{
                  transform: `translateX(${slideOffset}%)`,
                  transition: isAnimating ? "transform 0.6s cubic-bezier(0.4,0,0.2,1)" : "none",
                }}
              >
                {cards.map((plan, i) => (
                  <div key={`${plan.name}-${baseIndex}-${i}`} className="w-full md:w-1/3 flex-shrink-0 px-3">
                    <Card plan={plan} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => jumpSlide(1)}
              className="absolute -right-5 top-[45%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.08)] flex items-center justify-center text-slate-400 hover:text-slate-700 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer"
              aria-label="Next plans"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Features Comparison Table */}
      <section className="bg-[#f5f6f7] py-16">
        <div className="w-full px-0">
          <div className="bg-white rounded-none shadow-none border-0 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="text-left py-6 px-6 text-[16px] font-semibold text-black w-[25%] border-r border-slate-300">Features</th>
                  <th className="text-center py-6 px-4 w-[18.75%] border-r border-slate-300">
                    <div className="text-[16px] font-semibold text-black">Starter</div>
                    <div className="text-[22px] font-bold text-black mt-1">$1200</div>
                  </th>
                  <th className="text-center py-6 px-4 w-[18.75%] border-r border-slate-300">
                    <div className="text-[16px] font-semibold text-black">Growth</div>
                    <div className="text-[22px] font-bold text-black mt-1">$2500</div>
                  </th>
                  <th className="text-center py-6 px-4 w-[18.75%] border-r border-slate-300">
                    <div className="text-[16px] font-semibold text-black">Pro Brand</div>
                    <div className="text-[22px] font-bold text-black mt-1">$5000</div>
                  </th>
                  <th className="text-center py-6 px-4 w-[18.75%]">
                    <div className="text-[16px] font-semibold text-black">Empire</div>
                    <div className="text-[22px] font-bold text-black mt-1">$11000</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Shopify Store Setup</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Basic</div></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Advanced</div></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Premium Design</div></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Custom Premium Build</div></td>
                </tr>
                <tr className="border-b border-slate-300 bg-gray-100">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Mobile Optimization</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Legal Pages (Privacy, Refund, TOS)</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300 bg-gray-100">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Dropshipping App Integration</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Basic (DSers)</div></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Best Options</div></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Advanced Integrations</div></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Private Supplier Setup</div></td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Product Import & Setup</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">10 Products</div></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">20 Products</div></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">40 Products</div></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">100+ Fully Optimized</div></td>
                </tr>
                <tr className="border-b border-slate-300 bg-gray-100">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Payment Gateway Setup</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Branded Logo Design</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Basic Logo</div></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Custom Logo</div></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Premium Branding Kit</div></td>
                </tr>
                <tr className="border-b border-slate-300 bg-gray-100">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Custom Homepage Design</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">On-Page SEO Optimization</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Basic SEO</div></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Full SEO</div></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Full SEO + Speed Boost</div></td>
                </tr>
                <tr className="border-b border-slate-300 bg-gray-100">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Automated Order Fulfillment Setup</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Email Capture & Basic Popups</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300 bg-gray-100">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Social Media Integration</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Basic</div></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Full Setup</div></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Full Setup + Strategy</div></td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Post-Launch Support</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">15 Days</div></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">30 Days</div></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">60 Days + Concierge</div></td>
                </tr>
                <tr className="border-b border-slate-300 bg-gray-100">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Abandoned Cart Recovery Setup</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Facebook Pixel & Google Analytics</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300 bg-gray-100">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Custom Branding (Color Palette, Fonts, Guidelines)</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Conversion Boosters (Urgency, Reviews, Trust Badges)</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300 bg-gray-100">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Strategy Call</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">30-Min</div></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">60-Min</div></td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Brand Domain & Email Setup</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300 bg-gray-100">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Premium Apps & Plugin Integrations</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Free Product Vendors</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">3–5</div></td>
                </tr>
                <tr className="border-b border-slate-300 bg-gray-100">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Facebook & Google Ad Creatives (Static)</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">Full Funnel Ads</div></td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">TikTok & Reels Short Videos</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span><div className="text-[13px] text-gray-500 mt-0.5">5 Branded Shorts</div></td>
                </tr>
                <tr>
                  <td className="py-3 px-6 text-[14px] font-medium text-black border-r border-slate-300">Full Brand Identity & Store Strategy Plan</td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center border-r border-slate-300"><span className="text-[#ef4444] text-[14px]">✕</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-[#22c55e] text-[18px]">✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Heading Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl lg:text-[1.75rem] font-normal text-gray-700 leading-tight whitespace-nowrap" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Get Expert Dropshipping Solutions That Help Your Business<br />Thrive
          </h2>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="bg-white pb-20">
        <div className="w-full px-4 md:px-8">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-5">
                <img src="/shopify-dropshipping/b1.png" alt="Automated Order Processing" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Automated Order Processing</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Our system handles order processing automatically, which means we don't have to manually manage each order—everything runs smoothly with minimal effort.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-5">
                <img src="/shopify-dropshipping/b2.png" alt="Fraud Protection and Security" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Fraud Protection and Security</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                We implement advanced fraud protection and secure payment gateways to safeguard our customers' data and transactions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-5">
                <img src="/shopify-dropshipping/b3.png" alt="Supplier Vetting and Quality Control" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Supplier Vetting and Quality Control</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                We carefully vet suppliers and maintain strict quality control to ensure that the products we handle for our clients meet high standards of reliability and quality.
              </p>
            </div>
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[820px] mx-auto">
            {/* Card 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-5">
                <img src="/shopify-dropshipping/b4.png" alt="SEO and Marketing Tools" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>SEO and Marketing Tools</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                We offer our clients access to SEO and marketing tools to help optimize their stores for search engines and manage effective marketing campaigns, driving traffic and sales.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-5">
                <img src="/shopify-dropshipping/b5.png" alt="Product Import and Sync" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Product Import and Sync</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                We handle the import and synchronization of product details, including descriptions and images, to keep our clients' store catalogs up-to-date with minimal effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process Section */}
      <section className="bg-[#1a1f2e] py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Our Easy 6-step <span className="text-[#59DFAB]">Dropshipping Process</span>
              </h2>
              <p className="text-gray-400 text-[15px] mb-10" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Growth-driven. Efficient. Seamless operations.
              </p>

              {/* Step Content */}
              <div className="flex items-start gap-6 mb-10">
                <div className="w-32 h-32 flex-shrink-0">
                  <img src={dropshippingSteps[activeDropStep].image} alt={dropshippingSteps[activeDropStep].title} className="w-full h-full object-contain rounded-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    <span className="text-[#59DFAB]">Step-{dropshippingSteps[activeDropStep].step}</span> {dropshippingSteps[activeDropStep].title}
                  </h3>
                  <p className="text-gray-400 text-[14px] leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    {dropshippingSteps[activeDropStep].description}
                  </p>
                </div>
              </div>

              {/* Step Indicators with connecting line */}
              <div className="flex items-center">
                {dropshippingSteps.map((_, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                        index === activeDropStep
                          ? "bg-[#59DFAB] scale-125"
                          : index < activeDropStep
                          ? "bg-[#59DFAB]/60"
                          : "bg-gray-600"
                      }`}
                      onClick={() => setActiveDropStep(index)}
                    />
                    {index < 5 && (
                      <div className={`w-8 h-0.5 transition-all duration-300 ${
                        index < activeDropStep ? "bg-[#59DFAB]/60" : "bg-gray-600"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <img src="/shopify-dropshipping/ideal.png" alt="Dropshipping Process" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Dropshipping Section */}
      <section className="bg-white py-20">
        <div className="w-full flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 pl-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Benefits of Dropshipping
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Dropshipping eliminates inventory management since you don't need to purchase or store products yourself. This significantly lowers overhead costs, saving you money on warehousing and shipping expenses.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Additionally, dropshipping makes it easy to scale your business by allowing you to quickly expand your product range without dealing with logistical challenges.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Ready to get started? Get in touch today!
            </p>
            <Link href="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-full text-[15px] font-semibold hover:bg-gray-800 transition-colors duration-300" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Get in Touch with Us
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img src="/shopify-dropshipping/9.png" alt="Benefits of Dropshipping" className="w-[80%] h-auto" />
          </div>
        </div>
      </section>

      {/* You'll Also Get Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-2">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-16" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            You'll Also Get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 px-8 py-12 min-h-[280px]">
              <div className="w-16 h-16 mb-6">
                <img src="/shopify-dropshipping/b6.png" alt="100% Satisfaction" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>100% Satisfaction</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                We ensure complete satisfaction with our products and services, or we'll make it right.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 px-8 py-12 min-h-[280px]">
              <div className="w-16 h-16 mb-6">
                <img src="/shopify-dropshipping/b7.png" alt="100% Quality Assurance" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>100% Quality Assurance</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                We promise that every product meets our rigorous quality standards, or we'll provide a replacement.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 px-8 py-12 min-h-[280px]">
              <div className="w-16 h-16 mb-6">
                <img src="/shopify-dropshipping/b8.png" alt="Free 30-Day Post-Launch" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Free 30-Day Post-Launch</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Receive a comprehensive review of your service and performance for free during the first month after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        title={<>What Our Clients Have to Say</>}
        subtitle="Read the positive reviews and testimonials we've received from our happy clients."
        customTestimonials={dropshippingTestimonials}
      />
      <CTABanner />
      <FAQ />
    </>
  );
}
