"use client";

import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 bg-[#1a2e1a]/95 backdrop-blur-md border-b border-[#2d4a35] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Shopify Managers Home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#8cb63c] flex items-center justify-center text-[#08130e] shadow-sm flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center leading-none">
              <span className="text-white text-xl font-bold tracking-tight">Shopify</span>
              <span className="text-[#9bc43f] text-xl font-semibold tracking-tight ml-1">Managers</span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-400 mt-0.5">
              Premier Commerce Agency
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-white" aria-label="Main navigation">
          {/* Services dropdown */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-[#9bc43f] transition-colors py-2 focus:outline-none"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                className={`w-4 h-4 text-slate-400 group-hover:text-[#9bc43f] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-56 bg-[#1a2e1a] shadow-2xl rounded-xl border border-[#2d4a35] p-2 z-50">
                {serviceLinks.map((svc) => (
                  <Link
                    key={svc}
                    href="/#services"
                    className="block px-4 py-2.5 rounded-lg text-xs font-semibold text-white hover:bg-[#162a20] hover:text-[#9bc43f] transition-colors"
                  >
                    {svc}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#9bc43f] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full text-sm font-bold bg-white text-[#08130e] hover:bg-slate-100 hover:scale-105 transition-all shadow-md"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1a2e1a] border-t border-[#2d4a35] px-4 pb-6 pt-4 space-y-1">
          <Link
            href="/#services"
            className="block px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-[#162a20] hover:text-[#9bc43f] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-[#162a20] hover:text-[#9bc43f] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/#contact"
              className="block w-full text-center px-7 py-3 rounded-full text-sm font-bold bg-white text-[#08130e] hover:bg-slate-100 transition-all shadow-md"
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
