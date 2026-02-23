import React from "react";
import { Truck, ArrowRight, Box, MapPin } from "lucide-react";
import { HERO_CONTENT } from "./content";
import { FadeInUp, ScaleIn, Floating, PulseScale, MarqueeTruck } from "./animation";

export const HeroSection = () => {
    const { badge, title, description, buttons } = HERO_CONTENT;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">

                    <FadeInUp>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20">
                            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-sm font-bold uppercase tracking-widest text-primary">{badge.text}</span>
                        </div>
                    </FadeInUp>

                    <ScaleIn>
                        <div className="space-y-4 max-w-5xl">
                            <h1 className="text-6xl md:text-8xl font-black font-heading leading-tight tracking-tighter">
                                {title.line1}
                                <span className="block text-stroke py-2">{title.line2}</span>
                                <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">{title.line3}</span>
                            </h1>
                        </div>
                    </ScaleIn>

                    <FadeInUp delay={0.5}>
                        <p className="text-xl md:text-2xl font-medium text-primary/60 max-w-2xl">
                            {description}
                        </p>
                    </FadeInUp>

                    <FadeInUp delay={0.8}>
                        <div className="flex flex-col sm:flex-row gap-6 pt-8">
                            <button className="bg-primary text-white px-10 py-5 text-xl font-bold rounded-2xl flex items-center gap-3 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                                {buttons.primary.text} <ArrowRight size={24} />
                            </button>
                            <button className="glass-card text-primary px-10 py-5 text-xl font-bold rounded-2xl border-primary/10 hover:bg-white transition-all">
                                {buttons.secondary.text}
                            </button>
                        </div>
                    </FadeInUp>
                </div>
            </div>

            {/* Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <MarqueeTruck>
                    <div className="absolute bottom-10 left-0 text-primary opacity-10">
                        <Truck size={200} strokeWidth={0.5} />
                    </div>
                </MarqueeTruck>

                <div className="absolute top-[20%] right-[10%] opacity-20 text-accent hidden lg:block">
                    <Floating duration={4} y={[0, -40, 0]}>
                        <Box size={120} strokeWidth={0.5} />
                    </Floating>
                </div>

                <div className="absolute bottom-[20%] left-[10%] opacity-20 text-secondary hidden lg:block">
                    <PulseScale duration={3}>
                        <MapPin size={80} strokeWidth={0.5} />
                    </PulseScale>
                </div>
            </div>
        </section>
    );
};
