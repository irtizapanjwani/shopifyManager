import Link from "next/link";
import { siteConfig } from "@/config/site";

const serviceLinks = [
  "Shopify Services",
  "E-Commerce Marketing",
  "Done For You Stores",
  "Dropshipping Automation",
  "Theme 2.0 Customization",
] as const;

const quickLinks = [
  { label: "Contact Us", href: "/#contact" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Our Process", href: "/#process" },
  { label: "Pricing Plans", href: "/#pricing" },
  { label: "Client Testimonials", href: "/#testimonials" },
  { label: "FAQs", href: "/#faq" },
] as const;

const ShopBagIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#08130e] text-white pt-20 pb-12 border-t border-[#1b3024]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Footer Columns ─────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-14 border-b border-[#1b3024] text-xs">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#8cb63c] flex items-center justify-center text-[#08130e]">
                <ShopBagIcon />
              </div>
              <span className="text-white text-lg font-bold tracking-tight">
                Shopify <span className="text-[#9bc43f]">Managers</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed pr-4">
              {siteConfig.name} is the leading Shopify agency covering various solutions
              to help you grow your online business to success.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Core Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <Link href="/#services" className="hover:text-[#9bc43f] transition-colors">
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#9bc43f] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="text-white font-medium">{siteConfig.phone}</li>
              <li>{siteConfig.contactEmail}</li>
              <li>{siteConfig.locations}</li>
              <li className="pt-2 text-[#9bc43f] font-semibold">
                Support Hours: {siteConfig.supportHours}
              </li>
            </ul>
          </div>
        </div>

        {/* ── Legal ─────────────────────────────────────────── */}
        <div className="pt-8 text-[11px] text-slate-500 space-y-4">
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> Shopify Managers is an independent company providing
            design, development, and marketing consulting services for e-commerce solutions.
            We are not affiliated, associated, authorised, endorsed by, or in any way
            officially connected with Shopify Inc., or any of its subsidiaries or affiliates.
            The name &ldquo;Shopify&rdquo; as well as related names, marks, emblems, and images are
            registered trademarks of their respective owners.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
            <div>Copyright © {new Date().getFullYear()} Shopify Managers. All rights reserved.</div>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
              <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating help widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/#contact"
          title="Help & Support"
          className="flex items-center justify-center w-11 h-11 bg-white text-[#08130e] rounded-full shadow-2xl hover:bg-slate-100 hover:scale-110 transition-all font-bold text-base border border-slate-200"
          aria-label="Get help"
        >
          ?
        </Link>
      </div>
    </footer>
  );
}
