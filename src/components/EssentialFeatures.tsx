const essentialFeatures = [
  "Store Setup",
  "Theme Customization",
  "Design Improvements",
  "Store Development",
  "Theme and Apps Updates",
  "On-Page Technical SEO",
  "Store Redesign",
  "Store Speed Optimization",
  "Integrate Sales Channel",
  "PSD to HTML",
  "App Integration",
  "Shopify Migration",
  "PSD to Shopify",
  "Store Maintenance",
  "Shopify API Integration",
];

export default function EssentialFeatures() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="essential-features-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="essential-features-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Essential Features Included in{" "}
            <span className="text-[#58DDB0]">E-Commerce Shopify Plan</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Are you looking to scale up your Shopify business? We offer all-inclusive Shopify features that deliver long-term value for your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
          {essentialFeatures.map((feature, index) => {
            const colors = ["#5cc8d4", "#e88ca5", "#6b8eda", "#58DDB0", "#e88ca5"];
            return (
              <div key={feature} className="flex items-center gap-3 py-5 border-b border-slate-200">
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill={colors[index % colors.length]} aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm font-semibold text-slate-800">{feature}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
