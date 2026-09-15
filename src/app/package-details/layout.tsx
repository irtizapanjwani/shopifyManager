import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Package Details | ${siteConfig.name}`,
  description: `View detailed pricing and service inclusions for our custom Shopify packages and solutions.`,
};

export default function PackageDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
