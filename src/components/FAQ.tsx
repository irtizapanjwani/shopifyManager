interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What Shopify services do you offer?",
    answer:
      "We offer a comprehensive range of Shopify services including store setup, theme customization, app integration, migration, speed optimization, SEO, and ongoing maintenance to help your e-commerce business thrive.",
  },
  {
    question: "Can you optimize my Shopify store for better performance?",
    answer:
      "Yes. We optimize store speed, Core Web Vitals, and overall performance to ensure your customers enjoy a fast and seamless shopping experience.",
  },
  {
    question: "Can you set up a new Shopify store from scratch?",
    answer:
      "Absolutely. We handle everything from theme selection and customization to product setup, payment gateway integration, and launch preparation.",
  },
  {
    question: "Can you migrate my existing site to Shopify?",
    answer:
      "Yes. We migrate products, customers, order history, and redirects from WooCommerce, Magento, or any other platform with zero downtime.",
  },
  {
    question: "Can you integrate third-party apps with my Shopify store?",
    answer:
      "Yes. We integrate and configure third-party apps for marketing, analytics, inventory management, and other business needs.",
  },
  {
    question: "Can I find upgrade or downgrade options if I need to revise?",
    answer:
      "Yes. We offer flexible plans that can be adjusted based on your evolving business requirements. Contact us to discuss your needs.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="w-full px-[72px]">
        <div className="text-center mb-10">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-slate-950 tracking-tight"
          >
            Frequently <span className="font-extrabold text-[#58DDB0]">Asked Questions</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-500">
            Have confusions? Don&apos;t worry. Check out some of the commonly asked queries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-x-7 md:gap-y-5">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group bg-[#f6f7f8] px-6 py-5 sm:px-8 sm:py-6"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base sm:text-lg font-medium leading-snug text-slate-700">
                <span className="pr-4">{item.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 flex-shrink-0 stroke-current stroke-[2.5] transition-transform group-open:rotate-180"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
