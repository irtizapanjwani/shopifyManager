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
      className="py-20 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008060]">
            Answers First
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1"
          >
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Practical details on timelines, migrations, and how Shopify Managers engages with your team.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-[#f8faf9] px-5 py-4 open:bg-white open:border-[#008060]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-sm sm:text-base font-bold text-slate-900">
                <span className="pr-4">{item.question}</span>
                <span
                  className="flex-shrink-0 text-[#008060] text-xl leading-none group-open:rotate-45 transition-transform"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
