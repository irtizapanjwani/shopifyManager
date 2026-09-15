import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Shopify Services | ${siteConfig.name}`,
  description: `Complete Shopify store management, optimization, and development services to help your brand grow.`,
};

export default function ShopifyServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
