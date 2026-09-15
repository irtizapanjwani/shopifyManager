import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Portfolio | ${siteConfig.name}`,
  description: `Explore our portfolio of high-converting Shopify and Shopify Plus stores designed and built by our team.`,
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
