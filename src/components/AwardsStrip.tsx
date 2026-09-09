import Image from "next/image";

export default function AwardsStrip() {
  return (
    <section className="py-28 bg-white" aria-label="Awards and recognition">
      <div className="w-full px-[72px] text-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          USA&apos;s Top 10{" "}
          <span className="text-[#59DFAB]">
            E-Commerce Shopify Development Agency
          </span>
        </h3>
        <p className="mt-3 text-sm text-slate-500">
          We are honored to have received recognition by prestigious awards.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <Image
            src="/Shopify Launchpad Images/brand.png"
            alt="Brand Recognition"
            width={900}
            height={400}
            className="grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
