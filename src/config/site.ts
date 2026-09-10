export const siteConfig = {
  name: "Shopify Managers",
  tagline: "Premier Commerce Agency",
  description:
    "Award-winning Shopify agency specialising in result-driven e-commerce solutions for startups, mid-sized, and enterprise businesses.",
  url: "https://shopifymanagers.com",

  // Contact — update these values before going live
  contactEmail: "info@shopifymanagers.com",
  phone: "+1 (832) 402-1715",
  locations: "New York City · San Francisco · London",
  supportHours: "24/7/365",

  social: {
    twitter: "https://twitter.com/shopifymanagers",
    linkedin: "https://linkedin.com/company/shopifymanagers",
    instagram: "https://instagram.com/shopifymanagers",
  },
} as const;

export type SiteConfig = typeof siteConfig;
