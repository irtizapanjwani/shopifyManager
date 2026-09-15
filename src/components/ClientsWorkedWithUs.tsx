import Image from "next/image";

interface ClientsWorkedWithUsProps {
  showTitle?: boolean;
}

export default function ClientsWorkedWithUs({ showTitle = true }: ClientsWorkedWithUsProps) {
  return (
    <section className="bg-white pt-20 pb-10 sm:pt-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {showTitle && (
          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#0d3d23] tracking-tight"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Clients That <span className="text-[#59DFAB] font-bold">Worked with Us</span>
          </h2>
        )}

        <p className="mt-5 mb-1 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
          We have a track record of building Shopify stores for various well-known businesses.
        </p>

        {/* 6 Client Logos — 2 rows of 3, soft light-gray */}
        <div className="mt-10 sm:mt-12 max-w-3xl mx-auto grid grid-cols-3 gap-y-8 gap-x-6 sm:gap-y-10 sm:gap-x-10 place-items-center">

          {/* 1. Billionaire Boys Club */}
          <div className="flex items-center justify-center w-[58px] sm:w-[66px] md:w-[72px]">
            <Image
              src="/shopify-clients/client-1.png"
              alt="Billionaire Boys Club"
              width={100}
              height={67}
              className="w-full h-auto object-contain grayscale opacity-70"
            />
          </div>

          {/* 2. Candy Kittens */}
          <div className="flex items-center justify-center w-[100px] sm:w-[110px] md:w-[118px]">
            <Image
              src="/shopify-clients/client-2.png"
              alt="Candy Kittens"
              width={150}
              height={21}
              className="w-full h-auto object-contain grayscale opacity-70"
            />
          </div>

          {/* 3. Doisy & Dam */}
          <div className="flex items-center justify-center w-[68px] sm:w-[76px] md:w-[82px]">
            <Image
              src="/shopify-clients/client-3.png"
              alt="Doisy & Dam"
              width={120}
              height={61}
              className="w-full h-auto object-contain grayscale opacity-70"
            />
          </div>

          {/* 4. Lifeboats */}
          <div className="flex items-center justify-center w-[65px] sm:w-[72px] md:w-[78px]">
            <Image
              src="/shopify-clients/client-4.png"
              alt="RNLI Lifeboats"
              width={120}
              height={59}
              className="w-full h-auto object-contain grayscale opacity-70"
            />
          </div>

          {/* 5. Rude Health */}
          <div className="flex items-center justify-center w-[48px] sm:w-[54px] md:w-[58px]">
            <Image
              src="/shopify-clients/client-5.png"
              alt="Rude Health"
              width={90}
              height={70}
              className="w-full h-auto object-contain grayscale opacity-70"
            />
          </div>

          {/* 6. Samsung */}
          <div className="flex items-center justify-center w-[95px] sm:w-[105px] md:w-[112px]">
            <Image
              src="/shopify-clients/client-6.png"
              alt="Samsung"
              width={150}
              height={22}
              className="w-full h-auto object-contain grayscale opacity-70"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
