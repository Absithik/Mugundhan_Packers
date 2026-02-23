"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FloatingActions } from "@/components/ui/FloatingActions";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <HowItWorks />
      <StatsCounter />
      <Testimonials />
      <ServiceArea />

      {/* Final CTA Banner */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="bg-primary relative p-12 lg:p-24 rounded-[60px] overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left group border-white/10 shadow-3xl text-white">
            <div className="relative space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border-white/20">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-bounce" />
                <span className="text-xs font-black uppercase tracking-widest text-accent">Reliable and safety</span>
              </div>
              <h4 className="text-5xl lg:text-7xl font-black font-heading tracking-tighter italic uppercase">START YOUR NEXT <span className="text-accent underline decoration-white/20">ADVENTURE</span> TODAY.</h4>
              <p className="text-xl text-white/60 font-medium">
                Join 12,000+ happy customers who experienced the reliability and safety of Mugunthan.
              </p>
            </div>

            <div className="relative flex flex-col gap-4">
              <button className="bg-accent text-primary px-12 py-8 text-2xl font-black rounded-3xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                Let's Move!
              </button>
              <p className="text-white/40 text-sm font-black uppercase tracking-[0.4em]">Zero Stress. Max Reliable.</p>
            </div>
          </div>
        </div>
      </section>

      <FloatingActions />
    </div>
  );
}
