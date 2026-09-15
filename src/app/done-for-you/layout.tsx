import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Done For You Shopify Stores | ${siteConfig.name}`,
  description: `Launch a turnkey, fully automated Shopify e-commerce business with our expert Done For You store services.`,
};

export default function DoneForYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
