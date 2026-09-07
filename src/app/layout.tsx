import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shopify Managers | Premier Shopify E-Commerce Agency",
  description:
    "Award-winning Shopify agency specialising in result-driven e-commerce design, development, and optimisation for startups, mid-sized, and enterprise businesses.",
  keywords: [
    "Shopify agency",
    "Shopify development",
    "e-commerce marketing",
    "Shopify Plus",
    "headless Shopify",
  ],
  openGraph: {
    title: "Shopify Managers | Premier Shopify E-Commerce Agency",
    description:
      "Build a high-converting Shopify store with the award-winning Shopify Managers agency.",
    siteName: "Shopify Managers",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} scroll-smooth`}
    >
      <body className={`${manrope.className} min-h-full flex flex-col font-sans antialiased bg-[#fbfdfc]`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
