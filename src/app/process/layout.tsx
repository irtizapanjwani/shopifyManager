import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Our Process | ${siteConfig.name}`,
  description: `Learn about our proven end-to-end process for designing, developing, and launching successful Shopify stores.`,
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
