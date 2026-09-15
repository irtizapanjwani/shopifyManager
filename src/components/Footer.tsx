"use client";

import { useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { openZohoDeskChat } from "@/lib/zohoDesk";

const serviceLinks = [
  "Shopify Services",
  "E-Commerce Marketing",
  "Done For You",
  "Dropshipping",
] as const;

const quickLinks = [
  { label: "Contact Us", href: "/#contact" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQs", href: "/#faq" },
] as const;

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export default function Footer() {
  useEffect(() => {
    const handleOpenChat = () => openZohoDeskChat();
    window.addEventListener("openHelpChat", handleOpenChat);
    return () => window.removeEventListener("openHelpChat", handleOpenChat);
  }, []);

  return (
    <footer
      id="contact"
      className="bg-[#010810] text-white pt-16 pb-8"
    >
      <div className="w-full px-5 sm:px-10 lg:px-[72px]">

        {/* ── Footer Columns ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          {/* Brand */}
          <div className="col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/shopify-logo/shopifylogowhite.webp"
                alt="Shopify Managers Logo"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Shopify Managers is the leading Shopify agency that covers various solutions
              to help you grow your online business to success.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base">
              Services
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base">
              Quick Links
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base">
              Contact Information
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon />
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white transition-colors">{siteConfig.contactEmail}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────── */}
        <div className="border-t border-slate-700 pt-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-white font-medium">
              © Shopify Managers {new Date().getFullYear()}. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Services</Link>
              <span className="text-slate-600">|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-slate-600">|</span>
              <Link href="/refunds" className="hover:text-white transition-colors">Refunds & Dispute</Link>
            </div>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed text-center md:text-left">
            shopifymanagers independent company that provides design and development services
            for e-commerce solutions. We are not affiliated, associated, authorized, endorsed by,
            or in any way officially connected with Shopify Inc., or any of its subsidiaries or
            affiliates. The name &ldquo;Shopify&rdquo; as well as related names, marks, emblems, and images
            are registered trademarks of their respective owners.
          </p>
        </div>
      </div>

    </footer>
  );
}
