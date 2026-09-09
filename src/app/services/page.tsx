import Image from "next/image";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[855px] overflow-hidden bg-gradient-to-b from-[#071B0F] via-[#329F58] to-[#3BC26C]">

        {/* Hero Content Container */}
        <div className="mx-auto w-full max-w-[1760px] px-[82px]">
          <div className="relative min-h-[855px]">

            {/* Left Content */}
            <div className="absolute left-0 top-[230px] z-10 w-[900px]">

              {/* Shopify / Shopify Plus */}
              <div className="mb-[38px] flex items-center gap-[14px]">
                <span className="text-[21px] font-bold text-white">
                  Shopify
                </span>

                <span className="text-[22px] text-white">
                  |
                </span>

                <span className="text-[21px] font-bold italic text-white">
                  shopifyplus
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-[900px] text-[46px] font-extrabold leading-[1.25] tracking-[-0.5px] text-white">
                We&apos;re Your Shopify Partner: Find
                <br />
                Out the
                <br />
                Best Solution for Your Shopify Store.
              </h1>

              {/* Paragraph */}
              <p className="mt-[28px] max-w-[900px] text-[19px] font-normal leading-[1.75] text-white">
                Struggling with building your online store? Shopify Launchpad
                specializes in delivering the all-inclusive Shopify solutions
                that offers scalability, performance and flexibility needed to
                manage stores in different languages, currencies and locations.
              </p>

              {/* Buttons */}
              <div className="mt-[27px] flex items-center gap-[18px]">
                <button className="h-[56px] w-[194px] rounded-full border border-white text-[16px] font-semibold text-white transition hover:bg-white hover:text-[#145126]">
                  Shopify Service
                </button>

                <button className="h-[56px] w-[262px] rounded-full border border-white text-[16px] font-semibold text-white transition hover:bg-white hover:text-[#145126]">
                  E-Commerce Marketing
                </button>

                <button className="h-[56px] w-[176px] rounded-full border border-white text-[16px] font-semibold text-white transition hover:bg-white hover:text-[#145126]">
                  Done For You
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
    </>
  );
}