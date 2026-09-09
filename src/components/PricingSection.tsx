"use client";

import Link from "next/link";
import Image from "next/image";
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
    featured: true,
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
  return (
    <div className="absolute -top-6 right-5 z-10">
      <Image
        src={`/Shopify Launchpad Images/${type === "toprated" ? "toprated-seal" : "bestseller-seal"}.webp`}
        alt={type === "toprated" ? "Top rated" : "Best seller"}
        width={72}
        height={72}
        className="w-16 sm:w-[72px] h-auto"
      />
    </div>
  );
}

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<PlanTab>("E-Commerce");
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const plans = planData[activeTab];

  return (
    <section
      id="pricing"
      className="py-20 bg-[#f5f6f7]"
      aria-labelledby="pricing-heading"
    >
      <div className="w-full px-[72px]">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            E-Commerce Shopify <span className="text-[#58DDB0]">Pricing Plans</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Looking for affordable Shopify options? Invest now for the growth and success of your business.
          </p>

          {/* Tabs */}
          <div className="inline-flex flex-wrap justify-center gap-3 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setHoveredPlan(null);
                }}
                className={`px-8 py-3 rounded-full text-sm font-bold border-2 transition-all ${
                  activeTab === tab
                    ? "bg-[#58DDB0] border-[#58DDB0] text-white"
                    : "bg-white border-slate-300 text-slate-600 hover:border-slate-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const isHighlighted = hoveredPlan
              ? hoveredPlan === plan.name
              : Boolean(plan.featured);

            return (
            <div
              key={plan.name}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`rounded-xl p-7 lg:p-8 flex flex-col justify-between relative min-h-full border transition-all duration-300 ${
                isHighlighted
                  ? "bg-[#58DDB0] border-[#58DDB0] text-white shadow-lg lg:-translate-y-3"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              {plan.badge && <BadgeRibbon type={plan.badge} />}

              <div>
                <h3
                  className={`text-2xl font-black ${
                    isHighlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    isHighlighted ? "text-white/90" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>

                <div
                  className={`mt-5 mb-6 inline-flex items-baseline gap-2 rounded-r-full px-5 py-2.5 ${
                    isHighlighted ? "bg-white" : "bg-slate-100"
                  }`}
                >
                  <span
                    className={`text-4xl font-black ${
                      isHighlighted ? "text-[#58DDB0]" : "text-slate-700"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span
                      className={`text-sm font-semibold ${
                        isHighlighted ? "text-[#58DDB0]/80" : "text-slate-500"
                      }`}
                    >
                      {plan.priceNote}
                    </span>
                  )}
                  <span
                    className={`text-lg font-semibold line-through ${
                        isHighlighted ? "text-slate-300" : "text-slate-400"
                    }`}
                  >
                    {plan.originalPrice}
                  </span>
                </div>

                <ul
                  className={`space-y-3 text-sm ${
                    activeTab === "E-Commerce"
                      ? "max-h-[300px] overflow-y-auto pr-2"
                      : ""
                  }`}
                >
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-2.5 ${
                        isHighlighted ? "text-white" : "text-slate-600"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                          isHighlighted
                            ? "bg-white text-[#58DDB0]"
                            : "bg-[#58DDB0] text-white"
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
                    isHighlighted
                      ? "border-2 border-white bg-transparent text-white"
                      : "bg-[#58DDB0] text-white"
                  }`}
                >
                  Get Started
                </Link>
                <Link
                  href="/#contact"
                  className={`flex-1 text-center py-3 rounded-full text-sm font-bold border-2 transition-colors ${
                    isHighlighted
                      ? "border-white bg-white text-[#08130e]"
                      : "border-slate-100 bg-white text-[#08130e]"
                  }`}
                >
                  <span className="inline-flex items-center justify-center gap-1.5">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                    </svg>
                    Chat Now
                  </span>
                </Link>
              </div>
              <Link
                href="/#contact"
                className={`mt-7 text-center text-sm font-semibold underline underline-offset-4 transition-colors ${
                  isHighlighted ? "text-white" : "text-slate-900"
                }`}
              >
                View Details
              </Link>
            </div>
            );
          })}
        </div>

        {/* Essential Features */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Essential Features Included in{" "}
              <span className="text-[#58DDB0]">E-Commerce Shopify Plan</span>
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
