"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DropshippingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" aria-label="Shopify Managers Home" className="flex items-center group focus:outline-none flex-shrink-0">
          <Image src="/shopify-logo/shopifylogowhite.webp" alt="Shopify Managers Logo" width={153} height={63} className="h-[48px] md:h-[55px] w-auto" priority />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center space-x-8 text-sm font-medium text-white" aria-label="Dropshipping navigation">
            <Link href="/" className="hover:text-[#9bc43f] transition-colors py-2">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#9bc43f] transition-colors py-2">
              About
            </Link>
            <Link href="/shopify-services" className="hover:text-[#9bc43f] transition-colors py-2">
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

        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#8bc53f] text-[#0a1f14] text-sm font-bold hover:bg-[#9bc43f] transition-colors cursor-pointer"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 text-white focus:outline-none"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#040904]/98 backdrop-blur-xl border-t border-white/10 px-6 pb-6 pt-4 space-y-2">
          <Link href="/" className="block py-2 text-sm font-semibold text-white hover:text-[#9bc43f]" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block py-2 text-sm font-semibold text-white hover:text-[#9bc43f]" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="/shopify-services" className="block py-2 text-sm font-semibold text-white hover:text-[#9bc43f]" onClick={() => setMobileOpen(false)}>
            Services
          </Link>
          <Link href="/pricing" className="block py-2 text-sm font-semibold text-white hover:text-[#9bc43f]" onClick={() => setMobileOpen(false)}>
            Pricing
          </Link>
          <Link href="/portfolio" className="block py-2 text-sm font-semibold text-white hover:text-[#9bc43f]" onClick={() => setMobileOpen(false)}>
            Portfolio
          </Link>
          <Link href="/process" className="block py-2 text-sm font-semibold text-white hover:text-[#9bc43f]" onClick={() => setMobileOpen(false)}>
            Process
          </Link>
          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-block w-full text-center py-3 rounded-full bg-[#8bc53f] text-[#0a1f14] text-sm font-bold hover:bg-[#9bc43f]"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
