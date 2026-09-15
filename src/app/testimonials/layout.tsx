import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Client Testimonials | ${siteConfig.name}`,
  description: `Read reviews and success stories from e-commerce brands that scaled with Shopify Managers.`,
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
