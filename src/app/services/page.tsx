import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EssentialFeatures from "@/components/EssentialFeatures";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ClientsWorkedWithUs from "@/components/ClientsWorkedWithUs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Shopify Services | ${siteConfig.name}`,
  description: "Explore our comprehensive Shopify services including store design, development, migration, speed optimization, and e-commerce marketing.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[855px] flex items-center overflow-hidden bg-gradient-to-b from-[#071B0F] via-[#329F58] to-[#3BC26C]"
      >
        <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 md:px-[82px] pt-28 sm:pt-0">
          <div className="max-w-[700px]">

            {/* Shopify / Shopify Plus */}
            <div className="mb-6 flex items-center gap-3">
              <span className="text-lg sm:text-xl font-bold text-white">
                Shopify
              </span>
              <span className="text-lg sm:text-xl text-white">|</span>
              <span className="text-lg sm:text-xl font-bold italic text-white">
                shopifyplus
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-[38px] font-extrabold leading-[1.25] tracking-[-0.5px] text-white">
              We&apos;re Your Shopify Partner: Find Out the Best Solution for Your Shopify Store.
            </h1>

            {/* Paragraph */}
            <p className="mt-6 sm:mt-7 max-w-[600px] text-sm sm:text-base font-normal leading-[1.75] text-white">
              Struggling with building your online store? Shopify Managers
              specializes in delivering the all-inclusive Shopify solutions
              that offers scalability, performance and flexibility needed to
              manage stores in different languages, currencies and locations.
            </p>

            {/* Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-3">
              <Link href="/shopify-services" className="w-full sm:w-auto h-10 sm:h-[46px] rounded-full border border-white text-xs sm:text-sm font-semibold text-white transition hover:bg-white hover:text-[#145126] flex items-center justify-center px-5 sm:px-6">
                Shopify Service
              </Link>
              <Link href="/ecommerce-marketing" className="w-full sm:w-auto h-10 sm:h-[46px] rounded-full border border-white text-xs sm:text-sm font-semibold text-white transition hover:bg-white hover:text-[#145126] flex items-center justify-center px-5 sm:px-6">
                E-Commerce Marketing
              </Link>
              <Link href="/done-for-you" className="w-full sm:w-auto h-10 sm:h-[46px] rounded-full border border-white text-xs sm:text-sm font-semibold text-white transition hover:bg-white hover:text-[#145126] flex items-center justify-center px-5 sm:px-6">
                Done For You
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients That Worked with Us ── */}
      <ClientsWorkedWithUs />

      {/* ── Shopify Store Development ── */}
      <section className="bg-white px-6 pt-20 pb-8 sm:pt-28 sm:pb-8">
        <div className="mx-auto max-w-[900px] pb-12 lg:pb-16">
          <div className="relative z-10 overflow-hidden rounded-[36px] bg-gradient-to-b from-[#59DFAB] to-[#46E680] px-7 py-8 text-white shadow-sm sm:px-10 lg:ml-3 lg:-rotate-[4deg] lg:px-12 lg:py-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_.8fr]">
              <div className="relative z-10 max-w-[650px]">
                <p className="text-base font-semibold">
                  Ready to start your Shopify business?
                </p>
                <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
                  Get Assistance in <strong className="font-extrabold">Building a Sales-Driven Store</strong>
                </h2>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/#contact"
                    className="rounded-full border border-white px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#46E680]"
                  >
                    Shopify Store Design
                  </Link>
                  <Link
                    href="/#contact"
                    className="rounded-full border border-white px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#46E680]"
                  >
                    Shopify Store Development
                  </Link>
                </div>

                <p className="mt-8 max-w-[630px] text-base leading-8 sm:text-lg">
                  We have a team of experts who craft visually engaging and functional Shopify stores for you. Every business wants to grow customers, and we leverage the latest technologies and best practices to create a seamless shopping experience. If you&apos;re looking to set your store up for long-term success, we&apos;re here to help.
                </p>

                <Link
                  href="/#contact"
                  className="mt-9 inline-flex rounded-full border border-white px-9 py-3 text-sm font-bold transition hover:bg-white hover:text-[#46E680]"
                >
                  Learn More
                </Link>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <Image
                  src="/shopify-services/1.png"
                  alt="Shopify store design screens"
                  width={625}
                  height={484}
                  className="w-full max-w-[480px] h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-2 overflow-hidden rounded-[36px] bg-gradient-to-b from-[#59DFAB] to-[#46E680] px-7 py-8 text-white shadow-sm sm:px-10 lg:ml-40 lg:-mt-3 lg:w-[900px] lg:rotate-[4deg] lg:px-12 lg:py-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_.8fr]">
              <div className="relative z-10 max-w-[620px]">
                <p className="text-base font-semibold">
                  Looking to attract targeted customers?
                </p>
                <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
                  Get Strategic <strong className="font-extrabold">E-Commerce Marketing Solutions</strong>
                </h2>

                <div className="mt-7 flex flex-wrap gap-3">
                  {['SEO', 'PPC', 'Social Media Advertising', 'Email Marketing'].map((service) => (
                    <Link
                      key={service}
                      href="/#contact"
                      className="rounded-full border border-white px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#46E680]"
                    >
                      {service}
                    </Link>
                  ))}
                </div>

                <p className="mt-8 max-w-[600px] text-base leading-8 sm:text-lg">
                  We specialize in delivering result-driven e-commerce marketing solutions that improve store visibility, attract targeted traffic, and boost conversions. With a focus on data-driven insights and continuous optimization, we ensure the marketing strategies are not only effective but sustainable in the long run.
                </p>

                <Link
                  href="/#contact"
                  className="mt-9 inline-flex rounded-full border border-white px-9 py-3 text-sm font-bold transition hover:bg-white hover:text-[#46E680]"
                >
                  Learn More
                </Link>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <Image
                  src="/shopify-services/2.png"
                  alt="E-commerce marketing illustration"
                  width={476}
                  height={433}
                  className="w-full max-w-[410px] h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="relative z-30 mt-2 overflow-hidden rounded-[36px] bg-gradient-to-b from-[#59DFAB] to-[#46E680] px-7 py-8 text-white shadow-sm sm:px-10 lg:-ml-12 lg:-mt-3 lg:w-[900px] lg:-rotate-[4deg] lg:px-12 lg:py-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_.8fr]">
              <div className="relative z-10 max-w-[620px]">
                <p className="text-base font-semibold">
                  We Will Handle Everything.
                </p>
                <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
                  Get All-Inclusive <strong className="font-extrabold">Shopify Features</strong>
                </h2>

                <div className="mt-7 flex flex-wrap gap-3">
                  {['Product Hunting', 'Product Sourcing', 'Product Shipping'].map((service) => (
                    <Link
                      key={service}
                      href="/#contact"
                      className="rounded-full border border-white px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#46E680]"
                    >
                      {service}
                    </Link>
                  ))}
                </div>

                <p className="mt-8 max-w-[600px] text-base leading-8 sm:text-lg">
                  We provide a range of Shopify solutions to support every area of your e-commerce business. Whether you&apos;re looking to expand your product line, searching for reliable suppliers or building a seamless shipping process, we&apos;ve got you covered. Get the best features that drive growth and achieve your KPIs.
                </p>

                <Link
                  href="/#contact"
                  className="mt-9 inline-flex rounded-full border border-white px-9 py-3 text-sm font-bold transition hover:bg-white hover:text-[#46E680]"
                >
                  Learn More
                </Link>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <Image
                  src="/shopify-services/3.png"
                  alt="All-inclusive Shopify features illustration"
                  width={453}
                  height={356}
                  className="w-full max-w-[400px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EssentialFeatures />

      <Testimonials />
      <FAQ />
    </>
  );
}
