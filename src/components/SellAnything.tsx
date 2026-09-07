import Image from "next/image";

const panels = [
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=800&fit=crop&auto=format&q=80",
    alt: "Paint brushes and art supplies in a glass jar on an artist workspace",
    label: "Sell Art Items",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop&auto=format&q=80",
    alt: "Modern wooden furniture with a console table, framed artwork, and a small plant",
    label: "Sell Furniture Items",
  },
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=800&fit=crop&auto=format&q=80",
    alt: "Large decorated chocolate cake with white icing dripping down the sides",
    label: "Sell Cakes Online",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=800&fit=crop&auto=format&q=80",
    alt: "Desktop computer setup displaying website designs on a clean white desk",
    label: "Sell Digital Products Online",
  },
  {
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=800&fit=crop&auto=format&q=80",
    alt: "Colorful art supplies and paint brushes arranged on a workspace",
    label: "Sell Art Items",
  },
] as const;

function PanelCard({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="flex-shrink-0 w-[220px] sm:w-[260px] lg:w-[300px] flex flex-col items-center">
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="300px"
        />
      </div>
      <p className="mt-4 text-center text-xs sm:text-sm font-semibold text-[#08130e] leading-snug">
        {label}
      </p>
    </div>
  );
}

export default function SellAnything() {
  const doubled = [...panels, ...panels];

  return (
    <section className="bg-white pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          <span className="text-[#08130e]">Sell Anything. </span>
          <span className="text-[#8BC53F]">Make Profit.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center text-base sm:text-lg text-[#3a3a3a] mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
          We&apos;ve built Shopify stores for various industries.
        </p>
      </div>

      {/* Scrolling image row */}
      <div className="mt-8 sm:mt-10">
        <div className="flex gap-5 sm:gap-6 lg:gap-7 animate-marquee w-max">
          {doubled.map((panel, i) => (
            <PanelCard
              key={`${panel.label}-${i}`}
              src={panel.src}
              alt={panel.alt}
              label={panel.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
