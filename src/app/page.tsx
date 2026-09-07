import HeroSection from "@/components/HeroSection";
import ExpandReach from "@/components/ExpandReach";
import SellAnything from "@/components/SellAnything";
import AwardsStrip from "@/components/AwardsStrip";
import CoreSolutions from "@/components/CoreSolutions";
import ThreePillars from "@/components/ThreePillars";
import WhyUs from "@/components/WhyUs";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpandReach />
      <SellAnything />
      <ThreePillars />
      <CTABanner />
      <CoreSolutions />
      <PortfolioShowcase />
      <WhyUs />
      <AwardsStrip />
      <PricingSection />
      <Testimonials />
      <FAQ />
    </>
  );
}
