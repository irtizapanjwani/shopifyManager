import Image from "next/image";

interface Testimonial {
  platform: string;
  quote: string;
  name: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    platform: "facebook",
    quote:
      "Switching to Shopify was a game-changer, and partnering with Shopify Managers was instrumental in our success. They delivered customized solutions with extensive features that exceeded my expectations. Their expertise and support have been invaluable, and I highly recommend them to anyone looking to elevate their e-commerce experience.",
    name: "Sam Denver",
    stars: 5,
  },
  {
    platform: "google",
    quote:
      "Shopify Managers expertly transformed my vision into a thriving Shopify store. What impressed me most was their ability to deliver exceptional quality at an affordable price. The value I received far exceeded my investment, making it a truly worthwhile partnership. I'm grateful for their expertise and highly recommend their services.",
    name: "Anastasia Luke",
    stars: 5,
  },
  {
    platform: "google",
    quote:
      "Working with Shopify Managers has been a revelation! Their all-encompassing marketing solutions have enabled me to effectively reach and retain a broad customer base, resulting in significant growth for my business. Their services have truly exceeded my expectations!",
    name: "Richard Issac",
    stars: 5,
  },
  {
    platform: "google",
    quote:
      "Since teaming up with Shopify Managers, we've seen a significant boost in sales and a substantial decrease in cart abandonment rates, all thanks to Shopify's streamlined checkout process. I'm absolutely thrilled with the results!",
    name: "Eric Samuel",
    stars: 5,
  },
];

const additionalTestimonials: Testimonial[] = [
  {
    platform: "facebook",
    quote:
      "Partnering with Shopify Managers has been a game-changer for my business. With their expertise, I've been able to create a thriving Shopify store that's easy to manage, thanks to the intuitive dashboard that lets me oversee all my sales channels in one place.",
    name: "Veronica Matt",
    stars: 5,
  },
  {
    platform: "trustpilot",
    quote:
      "I recently had the pleasure of working with a top-notch Shopify designer, and I'm thrilled with the results! From start to finish, the experience was nothing short of outstanding.",
    name: "Michael Tannar",
    stars: 5,
  },
  {
    platform: "google",
    quote:
      "If you're considering building a Shopify store, I highly recommend partnering with Shopify Managers. They've transformed my online store into a stunning and effective sales machine, and I've seen a significant boost in sales within just a few months. Their expertise is truly worth investing in!",
    name: "Benjamin Clark",
    stars: 5,
  },
  {
    platform: "google",
    quote:
      "I'm grateful to Shopify Managers for their exceptional services. Their responsive and attentive team took the time to understand our vision, exceeding our expectations with top-notch results. Their dedication to delivering outstanding work is impressive! We couldn't be happier with the final product and highly recommend their services.",
    name: "Whitney Nathan",
    stars: 5,
  },
  {
    platform: "facebook",
    quote:
      "I worked with Matt to launch my Shopify store and couldn't be happier! He took the time to understand my vision, creating a clean, professional design that perfectly captures my brand. The development process was seamless and efficient, making the entire experience a breeze. Thanks, Matt, for a job well done!",
    name: "Henry Mark",
    stars: 5,
  },
  {
    platform: "google",
    quote:
      "I'm thrilled with Shopify Managers! Their team exceeded my expectations, delivering a stunning store that looks amazing and drives exceptional performance. Impressed by their expertise, attention to detail, and dedication, I highly recommend them for a top-notch Shopify experience.",
    name: "Kylie White",
    stars: 5,
  },
  {
    platform: "google",
    quote:
      "As a Shopify newbie, I was nervous about building an online store. But Shopify Managers were the perfect partner, guiding me through every stage with expert support. The process was seamless and stress-free, and my customers love the final result! I highly recommend them to anyone new to Shopify.",
    name: "Jane Chen",
    stars: 5,
  },
  {
    platform: "facebook",
    quote:
      "Shopify Managers' e-commerce SEO services have been a game-changer for my online store, driving a 45% sales increase! Their team's expertise and customized plan exceeded my expectations. I'm thrilled with the results and highly recommend their services to anyone looking to boost online visibility and drive sales.",
    name: "Ariana Lee",
    stars: 5,
  },
  {
    platform: "google",
    quote:
      "I highly recommend Shopify Managers for their exceptional design and development services. Their responsive, professional team delivered a tailored solution that exceeded our expectations, capturing our brand's essence and providing a seamless shopping experience. Unmatched expertise and dedication!",
    name: "Mark Groff",
    stars: 5,
  },
  {
    platform: "google",
    quote:
      "I'm blown away by Shopify Managers' e-commerce SEO services! Their team's expertise has significantly increased our organic traffic and online reach. Their innovative, tailored strategies have exceeded my expectations. I'm impressed with their dedication to staying ahead of the curve and delivering exceptional results. Kudos to the team for a job well done!",
    name: "David Miller",
    stars: 5,
  },
  {
    platform: "google",
    quote:
      "Partnering with Shopify Managers has been a game-changer for my online store. They've driven significant traffic and sales growth through strategic marketing campaigns, leveraging their Shopify expertise to reach new customers and boost conversions. I'm thrilled with the results and confident in their ability to fuel long-term success for my brand.",
    name: "Amanda Rodriguez",
    stars: 5,
  },
  {
    platform: "facebook",
    quote:
      "I'm thrilled with Shopify Managers' Social Media Management service. Since partnering, our engagement has soared 45% in just a few months. Their creative content, strategic posting, and engagement tactics have resonated with our audience, driving website traffic and sales. I'm impressed and look forward to continued collaboration.",
    name: "Tom Baker",
    stars: 5,
  },
];

function QuoteIcon() {
  return (
    <div className="w-14 h-14 rounded-full bg-[#46E680] flex items-center justify-center mb-4 mx-auto">
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
        <path d="M11 7.05C9.65 5.76 7.89 5.1 6 5.1c-.28 0-.5.22-.5.5V9c0 .28.22.5.5.5 1.24 0 2.3.51 3.09 1.31.2.2.2.51 0 .71l-.7.7c-.2.2-.51.2-.71 0C6.95 10.66 5.77 10.1 4.5 10.1c-1.93 0-3.5 1.57-3.5 3.5v5c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5v-7c0-2.21-1.79-4-4-4zm12 0C21.65 5.76 19.89 5.1 18 5.1c-.28 0-.5.22-.5.5V9c0 .28.22.5.5.5 1.24 0 2.3.51 3.09 1.31.2.2.2.51 0 .71l-.7.7c-.2.2-.51.2-.71 0C18.95 10.66 17.77 10.1 16.5 10.1c-1.93 0-3.5 1.57-3.5 3.5v5c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5v-7c0-2.21-1.79-4-4-4z"/>
      </svg>
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1 mb-2">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-5 h-5 text-yellow-400" fill="currentColor">
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
        </svg>
      ))}
    </div>
  );
}

function PlatformLogo({ platform }: { platform: string }) {
  if (platform === "facebook") {
    return (
      <Image
        src="/Shopify Launchpad Images/facebook-logo.png"
        alt="Facebook"
        width={50}
        height={18}
        className="h-4 w-auto object-contain"
      />
    );
  }
  if (platform === "trustpilot") {
    return (
      <span className="text-xl font-bold flex items-center gap-1">
        <span className="text-[#00b67a] text-2xl">★</span>
        <span className="text-[#00b67a]">Trustpilot</span>
      </span>
    );
  }
  return (
    <Image
      src="/Shopify Launchpad Images/google-logo.png"
      alt="Google"
      width={100}
      height={34}
      className="h-8 w-auto"
    />
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:border-[#46E680] hover:shadow-xl">
      <QuoteIcon />
      <div className="mb-4">
        <PlatformLogo platform={t.platform} />
      </div>
      <p className="text-sm text-slate-600 leading-relaxed flex-1">
        {t.quote}
      </p>
      <div className="mt-6">
        <Stars count={t.stars} />
        <div className="text-sm font-bold text-slate-900">{t.name}</div>
      </div>
    </div>
  );
}

export default function Testimonials({ allTestimonials = false }: { allTestimonials?: boolean }) {
  return (
    <section
      id="testimonials"
      className="py-20 bg-[#f5f6f7]"
      aria-labelledby="testimonials-heading"
    >
      <div className="w-full px-[72px]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Let&apos;s Hear from{" "}
            <span className="text-[#58DDB0]">Our Clients</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            We&apos;ve shared a lot about our work. Why don&apos;t you take a look at what our clients have to say about our expertise?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {(allTestimonials ? additionalTestimonials : additionalTestimonials.slice(0, 4)).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
