import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Pricing Plans | ${siteConfig.name}`,
  description: `Transparent and flexible pricing plans for Shopify store setup, customization, maintenance, and growth.`,
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
