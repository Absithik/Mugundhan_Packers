import type { Metadata } from 'next';
import { HeroSection } from "../components/sections/home/HeroSection";

export const metadata: Metadata = {
  title: "Best Packers and Movers in Salem | Mugunthan Packers",
  description: "Top packers and movers in Salem. Reliable house shifting, office moving, and vehicle transport. Get a free quote today for safe and fast relocation!",
  keywords: ["Packers and Movers in Salem", "Best Packers and Movers in Salem", "Movers and Packers Salem", "Mugunthan Packers"],
  alternates: {
    canonical: 'https://mugunthanpackers.com',
  },
};
import { WhyChooseUsSection } from "../components/sections/home/WhyChooseUsSection";
import { ServicesOverviewSection } from "../components/sections/home/ServicesOverviewSection";
import { HowItWorksSection } from "../components/sections/home/HowItWorksSection";
import { StatsCounterSection } from "../components/sections/home/StatsCounterSection";
import { TestimonialsSection } from "../components/sections/home/TestimonialsSection";
import { ServiceAreaSection } from "../components/sections/home/ServiceAreaSection";
import { FAQSection } from "../components/sections/home/FAQSection";
import { CTASection } from "../components/sections/home/CTASection";
import { FloatingActions } from "@/components/ui/FloatingActions";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesOverviewSection />
      <HowItWorksSection />
      <StatsCounterSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <FAQSection />
      <CTASection />
      <FloatingActions />
    </div>
  );
}
