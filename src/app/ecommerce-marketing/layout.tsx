import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `E-commerce Marketing | ${siteConfig.name}`,
  description: `Drive traffic, increase conversions, and scale your Shopify store with data-driven e-commerce marketing strategies.`,
};

export default function EcommerceMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
