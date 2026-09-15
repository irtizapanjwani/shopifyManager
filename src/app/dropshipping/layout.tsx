import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Dropshipping Automation | ${siteConfig.name}`,
  description: `Scale your dropshipping business with turnkey automated Shopify stores, winning product research, and expert management.`,
};

export default function DropshippingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
