"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Dropshipping", href: "/#services" },
  { label: "About Us", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQs", href: "/#faq" },
  { label: "Testimonials", href: "/#testimonials" },
] as const;

const serviceLinks = [
  "Theme Development",
  "Store Migration",
  "CRO & Speed Optimization",
  "Headless Shopify",
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Top navbar (transparent, visible at top only) ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 h-20 pt-3 flex items-center justify-between">
          <Link href="/" aria-label="Shopify Launch Pad Home" className="flex items-center group focus:outline-none flex-shrink-0">
            <Image src="/Shopify Launchpad Images/logo-white.png" alt="Shopify Launch Pad Logo" width={200} height={65} className="h-[65px] w-auto" priority />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center space-x-8 text-sm font-medium text-white" aria-label="Main navigation">
              <div className="relative group cursor-pointer" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 hover:text-[#9bc43f] transition-colors py-2 focus:outline-none" aria-expanded={servicesOpen} aria-haspopup="true">
                  Services
                  <svg className={`w-4 h-4 text-slate-400 group-hover:text-[#9bc43f] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-56 bg-[#1a2e1a] shadow-2xl rounded-xl border border-[#2d4a35] p-2 z-50">
                    {serviceLinks.map((svc) => (
                      <Link key={svc} href="/#services" className="block px-4 py-2.5 rounded-lg text-xs font-semibold text-white hover:bg-[#162a20] hover:text-[#9bc43f] transition-colors">
                        {svc}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-[#9bc43f] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link href="/#contact" className="inline-flex items-center justify-center px-7 py-2.5 rounded-full text-sm font-bold bg-white text-[#08130e] hover:bg-slate-100 hover:scale-105 transition-all shadow-md">
              Contact Us
            </Link>
          </div>

          <button className="lg:hidden flex flex-col gap-1.5 p-2 text-white focus:outline-none" onClick={() => setMobileOpen((o) => !o)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-[#1a2e1a] border-t border-[#2d4a35] px-4 pb-6 pt-4 space-y-1">
            <Link href="/#services" className="block px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-[#162a20] hover:text-[#9bc43f] transition-colors" onClick={() => setMobileOpen(false)}>
              Services
            </Link>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="block px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-[#162a20] hover:text-[#9bc43f] transition-colors" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex justify-end">
              <Link href="/#contact" className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-bold bg-white text-[#08130e] hover:bg-slate-100 transition-all shadow-md" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ── Scrolled navbar (green, visible after scrolling) ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        } bg-[#1a3a2a] shadow-lg`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 h-20 pt-3 flex items-center justify-between">
          <Link href="/" aria-label="Shopify Launch Pad Home" className="flex items-center group focus:outline-none flex-shrink-0">
            <Image src="/Shopify Launchpad Images/logo-white.png" alt="Shopify Launch Pad Logo" width={200} height={65} className="h-[65px] w-auto" priority />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center space-x-8 text-sm font-medium text-white" aria-label="Main navigation">
              <div className="relative group cursor-pointer" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 hover:text-[#9bc43f] transition-colors py-2 focus:outline-none" aria-expanded={servicesOpen} aria-haspopup="true">
                  Services
                  <svg className={`w-4 h-4 text-slate-400 group-hover:text-[#9bc43f] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-56 bg-[#1a2e1a] shadow-2xl rounded-xl border border-[#2d4a35] p-2 z-50">
                    {serviceLinks.map((svc) => (
                      <Link key={svc} href="/#services" className="block px-4 py-2.5 rounded-lg text-xs font-semibold text-white hover:bg-[#162a20] hover:text-[#9bc43f] transition-colors">
                        {svc}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-[#9bc43f] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link href="/#contact" className="inline-flex items-center justify-center px-7 py-2.5 rounded-full text-sm font-bold bg-[#6cc24a] text-white hover:bg-[#5ba83d] hover:scale-105 transition-all shadow-md">
              Contact Us
            </Link>
          </div>

          <button className="lg:hidden flex flex-col gap-1.5 p-2 text-white focus:outline-none" onClick={() => setMobileOpen((o) => !o)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-[#1a2e1a] border-t border-[#2d4a35] px-4 pb-6 pt-4 space-y-1">
            <Link href="/#services" className="block px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-[#162a20] hover:text-[#9bc43f] transition-colors" onClick={() => setMobileOpen(false)}>
              Services
            </Link>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="block px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-[#162a20] hover:text-[#9bc43f] transition-colors" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex justify-end">
              <Link href="/#contact" className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-bold bg-[#6cc24a] text-white hover:bg-[#5ba83d] transition-all shadow-md" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
