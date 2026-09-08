"use client";

import Image from "next/image";

const solutions = [
  {
    title: "Shopify Service",
    imageSrc: "/Shopify Launchpad Images/i1.png",
    imageAlt: "Shopify service illustration",
    description:
      "First impression matters. If you want to attract a large audience, your store needs to look worth navigating. We build user-friendly Shopify stores that drive your audience to click on the purchase button.",
  },
  {
    title: "E-Commerce Marketing",
    imageSrc: "/Shopify Launchpad Images/i2.png",
    imageAlt: "E-commerce marketing illustration",
    description:
      "The e-commerce platform is highly competitive. You need a strong marketing game to keep your store ahead. Our proven marketing strategies assist you in reaching your target audience across multiple channels.",
  },
  {
    title: "Done for You",
    imageSrc: "/Shopify Launchpad Images/i3.png",
    imageAlt: "Done-for-you Shopify illustration",
    description:
      "Are you struggling with kickstarting your Shopify store? Let us take care of everything. We cover various areas, including product hunting, product sourcing, and shipping, to help you expand your online reach.",
  },
];

export default function CoreSolutions() {
  return (
    <section
      className="py-20 bg-[#292f40]"
      aria-labelledby="solutions-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="solutions-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            What We Have in{" "}
            <span className="text-[#59DFAB]">Store for You</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            If you&apos;re ready to start your e-commerce business, we have the best e-commerce
            solutions to help you grow your business to success in a short span of time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol) => {
            return (
              <div
                key={sol.title}
                className="p-8 flex flex-col items-center text-center"
              >
                <div className="w-44 h-44 mb-6">
                  <Image
                    src={sol.imageSrc}
                    alt={sol.imageAlt}
                    width={176}
                    height={176}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {sol.title}
                </h3>
                <p className="text-sm text-white leading-relaxed">
                  {sol.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
