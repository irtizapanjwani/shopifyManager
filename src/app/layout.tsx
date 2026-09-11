"use client";

import { Manrope, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DropshippingHeader from "@/components/DropshippingHeader";
import { ToastProvider } from "@/components/Toast";
import { usePathname } from "next/navigation";

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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDropshipping = pathname === "/dropshipping";

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className={`${manrope.className} min-h-full flex flex-col font-sans antialiased bg-[#fbfdfc]`}>
        <ToastProvider>
          {isDropshipping ? <DropshippingHeader /> : <Header />}
          <main className="flex-1">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
