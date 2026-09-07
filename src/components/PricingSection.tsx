"use client";

import Link from "next/link";
import { useState } from "react";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  priceNote?: string;
  features: string[];
  badge?: "bestseller" | "toprated";
  featured?: boolean;
}

const ecommercePlans: PricingTier[] = [
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
    badge: "bestseller",
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
    badge: "toprated",
    featured: true,
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
];

const smmPlans: PricingTier[] = [
  {
    name: "Startup",
    description: "Attract More Leads",
    price: "$550",
    originalPrice: "$1100",
    priceNote: "/month",
    features: [
      "Prior Analysis",
      "Social Media Strategy",
      "Social Media Audit",
      "Social Recommendations",
      "Content Plan Creation",
      "12 Posts Per Month",
      "5 Graphic Social Posts",
    ],
  },
  {
    name: "SMM for SME",
    description: "Transform Your Online Store",
    price: "$999",
    originalPrice: "$1998",
    priceNote: "/month",
    features: [
      "Prior Analysis",
      "Social Media Strategy",
      "Social Media Audit",
      "Social Recommendations",
      "Content Plan Creation",
      "24 Posts Per Month",
      "10 Graphic Social Posts",
    ],
  },
  {
    name: "Professional",
    description: "Seamless Store Solutions",
    price: "$1999",
    originalPrice: "$3998",
    priceNote: "/month",
    features: [
      "Prior Analysis",
      "Social Media Strategy",
      "Social Media Audit",
      "Social Recommendations",
      "Content Plan Creation",
      "36 Posts Per Month",
      "20 Graphic Social Posts",
    ],
  },
];

const semPlans: PricingTier[] = [
  {
    name: "Essential SEM",
    description: "For businesses starting with paid search",
    price: "$550",
    originalPrice: "$1100",
    priceNote: "/month",
    features: [
      "+ 10% of ad spend",
      "Minimum ad spend: $1,500/month",
      "Included Campaign Types:",
      "Google Search (Branded + Non-Branded)",
      "1 Conversion Goal Setup",
      "What's Included:",
      "Full keyword research & competitor analysis",
      "Campaign setup & structure",
    ],
  },
  {
    name: "Growth SEM",
    description: "For scaling ecommerce & service businesses",
    price: "$999",
    originalPrice: "$1998",
    priceNote: "/month",
    features: [
      "+ 9% of ad spend",
      "Minimum ad spend: $3,000/month",
      "Included Campaign Types:",
      "Google Search",
      "Google Shopping OR Performance Max (choose one)",
      "Display Remarketing",
      "What's Included:",
      "Everything in Essential, plus:",
    ],
  },
  {
    name: "Scale & Dominate SEM",
    description: "For aggressive growth & full-funnel domination",
    price: "$1999",
    originalPrice: "$3998",
    priceNote: "/month",
    badge: "toprated",
    featured: true,
    features: [
      "+ 8% of ad spend",
      "Minimum ad spend: $6,000/month",
      "Included Campaign Types:",
      "Search",
      "Shopping",
      "Performance Max",
      "Display Remarketing",
      "Discovery",
      "Bing Ads",
    ],
  },
];

type PlanTab = "E-Commerce" | "SMM" | "SEM";
const tabs: PlanTab[] = ["E-Commerce", "SMM", "SEM"];

const planData: Record<PlanTab, PricingTier[]> = {
  "E-Commerce": ecommercePlans,
  SMM: smmPlans,
  SEM: semPlans,
};

const essentialFeatures = [
  "Store Setup",
  "Theme Customization",
  "Design Improvements",
  "Store Development",
  "Theme and Apps Updates",
  "On-Page Technical SEO",
  "Store Redesign",
  "Store Speed Optimization",
  "Integrate Sales Channel",
  "PSD to HTML",
  "App Integration",
  "Shopify Migration",
  "PSD to Shopify",
  "Store Maintenance",
  "Shopify API Integration",
];

function BadgeRibbon({ type }: { type: "bestseller" | "toprated" }) {
  const label = type === "bestseller" ? "BEST SELLER" : "TOP RATED";
  return (
    <div className="absolute -top-1 -right-1 z-10">
      <div className="relative">
        <svg viewBox="0 0 80 90" className="w-16 h-18 sm:w-20 sm:h-22">
          {/* Ribbon tails */}
          <polygon points="25,60 35,90 40,75 45,90 55,60" fill="#d4a843"/>
          <polygon points="30,58 38,85 40,70 42,85 50,58" fill="#c49a38"/>
          {/* Badge circle */}
          <circle cx="40" cy="35" r="28" fill="#1a1a1a" stroke="#d4a843" strokeWidth="2"/>
          <circle cx="40" cy="35" r="22" fill="none" stroke="#d4a843" strokeWidth="1" strokeDasharray="3 2"/>
          <text x="40" y="32" textAnchor="middle" fill="#d4a843" fontSize="7" fontWeight="bold">{label.split(" ")[0]}</text>
          <text x="40" y="42" textAnchor="middle" fill="#d4a843" fontSize="7" fontWeight="bold">{label.split(" ")[1]}</text>
          <text x="40" y="52" textAnchor="middle" fill="#d4a843" fontSize="5">★★★</text>
        </svg>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<PlanTab>("E-Commerce");
  const plans = planData[activeTab];

  return (
    <section
      id="pricing"
      className="py-20 bg-white"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            E-Commerce Shopify Pricing Plans
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Looking for affordable Shopify options? Invest now for the growth and success of your business.
          </p>

          {/* Tabs */}
          <div className="inline-flex flex-wrap justify-center gap-3 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-sm font-bold border-2 transition-all ${
                  activeTab === tab
                    ? "bg-[#8BC53F] border-[#8BC53F] text-white"
                    : "bg-white border-slate-300 text-slate-600 hover:border-slate-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.featured
                  ? "bg-white border-2 border-[#8BC53F] shadow-sm hover:bg-[#8BC53F] hover:shadow-xl lg:-translate-y-2"
                  : "bg-white border border-slate-200 shadow-sm hover:border-[#8BC53F] hover:bg-[#8BC53F] hover:shadow-xl"
              }`}
            >
              {plan.badge && <BadgeRibbon type={plan.badge} />}

              <div>
                <h3
                  className={`text-2xl font-black ${
                    plan.featured ? "text-slate-900 group-hover:text-white" : "text-slate-900 group-hover:text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    plan.featured ? "text-slate-500 group-hover:text-white/80" : "text-slate-500 group-hover:text-white/80"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-5 mb-6 flex items-baseline gap-2">
                  <span
                    className={`text-4xl font-black ${
                      plan.featured ? "text-slate-900 group-hover:text-white" : "text-slate-900 group-hover:text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span
                      className={`text-sm font-semibold ${
                        plan.featured ? "text-slate-500 group-hover:text-white/70" : "text-slate-500 group-hover:text-white/70"
                      }`}
                    >
                      {plan.priceNote}
                    </span>
                  )}
                  <span
                    className={`text-lg font-semibold line-through ${
                      plan.featured ? "text-slate-400 group-hover:text-white/50" : "text-slate-400 group-hover:text-white/50"
                    }`}
                  >
                    {plan.originalPrice}
                  </span>
                </div>

                <ul className="space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-2.5 ${
                        plan.featured ? "text-slate-600 group-hover:text-white/90" : "text-slate-600 group-hover:text-white/90"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                          plan.featured
                            ? "bg-[#8BC53F] text-white group-hover:bg-white group-hover:text-[#8BC53F]"
                            : "bg-[#8BC53F] text-white group-hover:bg-white group-hover:text-[#8BC53F]"
                        }`}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#contact"
                  className={`flex-1 text-center py-3 rounded-full text-sm font-bold transition-colors ${
                    plan.featured
                      ? "bg-[#8BC53F] text-white group-hover:bg-white group-hover:text-[#8BC53F]"
                      : "bg-[#8BC53F] text-white group-hover:bg-white group-hover:text-[#8BC53F]"
                  }`}
                >
                  Get Started
                </Link>
                <Link
                  href="/#contact"
                  className={`flex-1 text-center py-3 rounded-full text-sm font-bold border-2 transition-colors ${
                    plan.featured
                      ? "border-slate-300 text-slate-600 group-hover:border-white group-hover:text-white"
                      : "border-slate-300 text-slate-600 group-hover:border-white group-hover:text-white"
                  }`}
                >
                  Chat Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Features */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Essential Features Included in{" "}
              <span className="text-[#8BC53F]">E-Commerce Shopify Plan</span>
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-500">
              Are you looking to scale up your Shopify business? We offer all-inclusive Shopify features that deliver long-term value for your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
            {essentialFeatures.map((f, i) => {
              const colors = ["#5cc8d4", "#e88ca5", "#6b8eda", "#8BC53F", "#e88ca5"];
              const color = colors[i % colors.length];
              return (
                <div
                  key={f}
                  className="flex items-center gap-3 py-5 border-b border-slate-200"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill={color}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-sm font-semibold text-slate-800">{f}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
