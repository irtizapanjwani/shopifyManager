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
        <Script
          id="zoho-size-override"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  // Scale factor: 0.82 = exact small popup size
  var SCALE = 0.82;

  // Track elements we've already scaled so we don't loop on attribute mutations
  var scaled = new WeakSet();

  function isZohoEl(el) {
    if (!el || !el.style) return false;
    var id  = (el.id  || '').toLowerCase();
    var cls = typeof el.className === 'string' ? el.className.toLowerCase() : '';
    return id.includes('zoho')  || id.includes('asap')  || id.includes('zdesk') ||
           cls.includes('zoho') || cls.includes('asap') || cls.includes('zdesk');
  }

  function scaleEl(el) {
    if (!el || !el.style || scaled.has(el)) return;
    if (!isZohoEl(el)) return;

    // Only target the outermost fixed/absolute containers — not inner divs/iframes.
    // This lets Zoho's internal layout render normally; we just zoom the whole thing.
    var pos = window.getComputedStyle(el).position;
    if (pos !== 'fixed' && pos !== 'absolute') return;

    scaled.add(el);
    el.style.setProperty('transform',        'scale(' + SCALE + ')', 'important');
    el.style.setProperty('transform-origin', 'bottom right',         'important');
  }

  // Scan existing elements (widget may already be in DOM when this runs)
  document.querySelectorAll('*').forEach(scaleEl);

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      // New nodes added to the DOM
      m.addedNodes.forEach(function(node) {
        if (node.nodeType !== 1) return;
        scaleEl(node);
        node.querySelectorAll && node.querySelectorAll('*').forEach(scaleEl);
      });
      // Attribute changes (Zoho re-applies inline styles on open/close)
      if (m.type === 'attributes' && m.target) {
        scaled.delete(m.target); // re-evaluate in case Zoho reset the style
        scaleEl(m.target);
      }
    });
  });

  observer.observe(document.body, {
    childList:       true,
    subtree:         true,
    attributes:      true,
    attributeFilter: ['style', 'class']
  });
})();
            `,
          }}
        />
      </body>
    </html>
  );
}
