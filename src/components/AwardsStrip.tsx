export default function AwardsStrip() {
  return (
    <section className="py-14 bg-white" aria-label="Awards and recognition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          USA&apos;s Top 10{" "}
          <span className="text-[#8BC53F]">
            E-Commerce Shopify Development Agency
          </span>
        </h3>
        <p className="mt-3 text-sm text-slate-500">
          We are honored to have received recognition by prestigious awards.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {/* Clutch */}
          <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 100 110" className="w-20 h-22 sm:w-24 sm:h-26" fill="none">
              <polygon points="50,5 95,30 95,80 50,105 5,80 5,30" stroke="#6b7280" strokeWidth="2.5" fill="#f3f4f6"/>
              <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" stroke="#9ca3af" strokeWidth="1.5" fill="#e5e7eb"/>
              <text x="50" y="35" textAnchor="middle" fill="#374151" fontSize="8" fontWeight="bold">TOP</text>
              <text x="50" y="45" textAnchor="middle" fill="#6b7280" fontSize="5">DESIGN AGENCIES</text>
              <rect x="25" y="50" width="50" height="16" rx="2" fill="#374151"/>
              <text x="50" y="61" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Clutch</text>
              <text x="50" y="78" textAnchor="middle" fill="#6b7280" fontSize="6">2019</text>
            </svg>
          </div>

          {/* GoodFirms */}
          <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 100 110" className="w-20 h-22 sm:w-24 sm:h-26" fill="none">
              <circle cx="50" cy="50" r="42" stroke="#6b7280" strokeWidth="2.5" fill="#f3f4f6"/>
              <circle cx="50" cy="50" r="36" stroke="#9ca3af" strokeWidth="1.5" fill="#e5e7eb"/>
              <text x="50" y="30" textAnchor="middle" fill="#374151" fontSize="7" fontWeight="bold">GoodFirms</text>
              <rect x="22" y="42" width="56" height="18" rx="3" fill="#374151"/>
              <text x="50" y="54" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="bold">TOP SOFTWARE</text>
              <text x="50" y="75" textAnchor="middle" fill="#6b7280" fontSize="5">DEVELOPMENT COMPANY</text>
              <text x="50" y="88" textAnchor="middle" fill="#9ca3af" fontSize="4.5">goodfirms.co</text>
            </svg>
          </div>

          {/* Arrow/Triangle */}
          <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24" fill="none">
              <polygon points="50,10 90,50 50,90" stroke="#6b7280" strokeWidth="2.5" fill="#d1d5db"/>
              <polygon points="50,25 75,50 50,75" stroke="#9ca3af" strokeWidth="1.5" fill="#e5e7eb"/>
              <polygon points="50,38 62,50 50,62" fill="#9ca3af"/>
            </svg>
          </div>

          {/* Top Design Firms */}
          <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 100 110" className="w-20 h-22 sm:w-24 sm:h-26" fill="none">
              <polygon points="50,8 88,28 88,72 50,92 12,72 12,28" stroke="#6b7280" strokeWidth="2.5" fill="#f3f4f6"/>
              <polygon points="50,18 78,33 78,67 50,82 22,67 22,33" stroke="#9ca3af" strokeWidth="1.5" fill="#e5e7eb"/>
              <text x="50" y="40" textAnchor="middle" fill="#374151" fontSize="14" fontWeight="bold">TOP</text>
              <text x="50" y="52" textAnchor="middle" fill="#6b7280" fontSize="6">DESIGN FIRMS</text>
              <line x1="30" y1="58" x2="70" y2="58" stroke="#9ca3af" strokeWidth="1"/>
              <text x="50" y="70" textAnchor="middle" fill="#9ca3af" fontSize="8">★★★★★</text>
            </svg>
          </div>

          {/* Top Web Design Agencies */}
          <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 100 110" className="w-20 h-22 sm:w-24 sm:h-26" fill="none">
              <circle cx="50" cy="50" r="42" stroke="#6b7280" strokeWidth="2.5" fill="#f3f4f6"/>
              <circle cx="50" cy="50" r="36" stroke="#9ca3af" strokeWidth="1.5" fill="#e5e7eb"/>
              <text x="50" y="28" textAnchor="middle" fill="#374151" fontSize="5.5">Top Web Design Agencies</text>
              <text x="50" y="38" textAnchor="middle" fill="#6b7280" fontSize="5">United States</text>
              <rect x="28" y="44" width="44" height="16" rx="2" fill="#374151"/>
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">2018</text>
              <text x="50" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">TopCity</text>
            </svg>
          </div>

          {/* Agency Spotter */}
          <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 100 110" className="w-20 h-22 sm:w-24 sm:h-26" fill="none">
              <rect x="8" y="15" width="84" height="70" rx="4" stroke="#6b7280" strokeWidth="2.5" fill="#f3f4f6"/>
              <text x="50" y="32" textAnchor="middle" fill="#9ca3af" fontSize="8">★★★★★</text>
              <text x="50" y="44" textAnchor="middle" fill="#6b7280" fontSize="5">Clients Recommend Us On</text>
              <rect x="18" y="50" width="64" height="18" rx="3" fill="#374151"/>
              <text x="50" y="62" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">agencyspotter</text>
              <text x="50" y="78" textAnchor="middle" fill="#6b7280" fontSize="6">2019</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
