"use client";

import Image from "next/image";
import Link from "next/link";

export default function DropshippingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]" style={{ background: "linear-gradient(180deg, #000000 0%, #050a05 50%, #0a1510 100%)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}>
      <div style={{ width: "100%", paddingLeft: "24px", paddingRight: "24px", height: "100px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "10px" }}>
        <Link href="/" aria-label="Shopify Managers Home" className="flex items-center group focus:outline-none flex-shrink-0">
          <Image src="/Shopify Launchpad Images/logo-white.png" alt="Shopify Managers Logo" width={153} height={63} className="h-[55px] w-auto" priority />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center space-x-8 text-sm font-medium text-white" aria-label="Dropshipping navigation">
            <Link href="/" className="hover:text-[#9bc43f] transition-colors py-2">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#9bc43f] transition-colors py-2">
              About
            </Link>
            <Link href="/services" className="hover:text-[#9bc43f] transition-colors py-2">
              Services
            </Link>
            <Link href="/pricing" className="hover:text-[#9bc43f] transition-colors py-2">
              Pricing
            </Link>
            <Link href="/portfolio" className="hover:text-[#9bc43f] transition-colors py-2">
              Portfolio
            </Link>
            <Link href="/process" className="hover:text-[#9bc43f] transition-colors py-2">
              Process
            </Link>
          </nav>
        </div>

        <button
          className="hidden lg:inline-flex px-6 py-3.5 rounded bg-[#8bc53f] text-[#0a1f14] text-sm font-bold hover:bg-[#9bc43f] transition-colors cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
