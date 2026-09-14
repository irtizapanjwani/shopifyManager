"use client";

import { Manrope, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DropshippingHeader from "@/components/DropshippingHeader";
import { ToastProvider } from "@/components/Toast";
import { usePathname } from "next/navigation";
import Script from "next/script";

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
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
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
        <Script
          id="zohodeskasap"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var d=document;var s=d.createElement("script");s.type="text/javascript";s.id="zohodeskasapscript";s.defer=true;s.src="https://desk.zoho.com/portal/api/web/asapApp/1474200000000427025?orgId=939185184";var t=d.getElementsByTagName("script")[0];if(t&&t.parentNode){t.parentNode.insertBefore(s,t);}else{d.head.appendChild(s);}window.ZohoDeskAsapReady=function(s){var e=window.ZohoDeskAsap__asyncalls=window.ZohoDeskAsap__asyncalls||[];window.ZohoDeskAsapReadyStatus?(s&&e.push(s),e.forEach(function(call){call&&call();}),window.ZohoDeskAsap__asyncalls=null):s&&e.push(s);};`,
          }}
        />
      </body>
    </html>
  );
}
