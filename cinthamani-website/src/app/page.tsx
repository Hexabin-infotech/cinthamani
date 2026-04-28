import HeroSection from "@/components/home/HeroSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import PartnersSection from "@/components/home/PartnersSection";
import StatsSection from "@/components/home/StatsSection";
import { WhyChooseAccordion } from "@/components/ui/interactive-image-accordion";
import { WaitlistHero } from "@/components/ui/waitlist-hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <PartnersSection />
      <StatsSection />
      <WhyChooseAccordion />
      <WaitlistHero />
    </>
  );
}
