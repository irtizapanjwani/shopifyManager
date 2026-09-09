interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How long does a typical Shopify build take?",
    answer:
      "A focused theme launch usually ships in 3–5 weeks. Custom 2.0 and Plus programmes run 8–16 weeks depending on catalogue size, integrations, and content readiness.",
  },
  {
    question: "Do you migrate from WooCommerce, Magento, or another Shopify store?",
    answer:
      "Yes. We migrate products, customers, redirects, and order history with a freeze plan so you do not lose SEO equity or live checkout during cutover.",
  },
  {
    question: "Can you work with our in-house marketers and developers?",
    answer:
      "We regularly pair with internal teams. Shopify Managers can own the full stack or slot in as theme, CRO, or Plus architecture specialists.",
  },
  {
    question: "What is included in ongoing support?",
    answer:
      "Retainers cover theme updates, app QA, Core Web Vitals monitoring, security patches, and a shared Slack channel. Hours and response SLAs are scoped per plan.",
  },
  {
    question: "Do you only work on Shopify Plus?",
    answer:
      "No. We build on Shopify, Shopify Plus, and Hydrogen. Plus is recommended when you need B2B, checkout extensibility, or multi-market operations.",
  },
  {
    question: "How do we start?",
    answer:
      "Send your store URL and goals through the contact form. We reply within two business hours with a discovery slot and a complimentary UX and speed audit.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 sm:py-28 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="w-full px-[72px]">
        <div className="text-center mb-16">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-950 tracking-tight"
          >
            Frequently <span className="font-extrabold text-[#58DDB0]">Asked Questions</span>
          </h2>
          <p className="mt-8 text-base sm:text-lg text-slate-700">
            Have confusions? Don&apos;t worry. Check out some of the commonly asked queries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7 md:gap-x-8 md:gap-y-7">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group bg-[#f6f7f8] px-6 py-7 sm:px-9 sm:py-8"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg sm:text-[22px] font-medium leading-snug text-slate-700">
                <span className="pr-4">{item.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 flex-shrink-0 stroke-current stroke-[2.5] transition-transform group-open:rotate-180"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
