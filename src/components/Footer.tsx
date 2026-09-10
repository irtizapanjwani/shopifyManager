"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

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
  const [chatOpen, setChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleOpenChat = () => setChatOpen(true);
    window.addEventListener("openHelpChat", handleOpenChat);
    return () => window.removeEventListener("openHelpChat", handleOpenChat);
  }, []);

  return (
    <footer
      id="contact"
      className="bg-[#010810] text-white pt-16 pb-8"
    >
      <div className="w-full px-[72px]">

        {/* ── Footer Columns ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          {/* Brand */}
          <div className="col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/Shopify Launchpad Images/logo-white.png"
                alt="Shopify Launchpad Logo"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Shopify Launchpad is the leading Shopify agency that covers various solutions
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
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon />
                <span>{siteConfig.contactEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────── */}
        <div className="border-t border-slate-700 pt-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-white font-medium">
              © Shopify Launchpad {new Date().getFullYear()}. All rights reserved.
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
            shopifylaunchpads independent company that provides design and development services
            for e-commerce solutions. We are not affiliated, associated, authorized, endorsed by,
            or in any way officially connected with Shopify Inc., or any of its subsidiaries or
            affiliates. The name &ldquo;Shopify&rdquo; as well as related names, marks, emblems, and images
            are registered trademarks of their respective owners.
          </p>
        </div>
      </div>

      {/* Floating help widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Window */}
        {chatOpen ? (
          <div className="w-[340px] bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-[#1a3a2a] text-white px-5 py-4 flex items-center justify-between">
              <h3 className="font-bold text-base">Chat with us</h3>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Minimize"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Sorry, we aren&apos;t online at the moment. Leave a message and we&apos;ll get back to you.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1a3a2a] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1a3a2a] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1a3a2a] transition-colors text-sm resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-400">zendesk</span>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#1a3a2a] text-white text-sm font-semibold rounded hover:bg-[#0f2a1c] transition-colors"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          /* Help Button */
          <button
            onClick={() => setChatOpen(true)}
            className="flex items-center gap-2 px-4 py-3 bg-[#1e293b] text-white rounded-full shadow-2xl hover:bg-slate-700 hover:scale-105 transition-all font-medium text-sm border border-slate-600"
            aria-label="Get help"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Help
          </button>
        )}
      </div>
    </footer>
  );
}
