import React from 'react';
import { HERO_CONTENT } from './content';
import { EntryAnimation } from './animation';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { PencilTruck, PencilBox, PencilArrow } from '@/components/ui/PencilArt';
import { FloatAnimation } from '@/components/animations/FloatAnimation';

export const HeroSection = () => {
    const { title, description, ctas } = HERO_CONTENT;

    return (
        <section className="relative pt-48 pb-32 overflow-hidden bg-primary">
            {/* Pencil Art Decorations */}
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
                <div className="absolute top-20 left-10 w-64">
                    <FloatAnimation delay={0.5} duration={5}>
                        <PencilTruck className="text-white w-full h-auto" delay={1.2} />
                    </FloatAnimation>
                </div>
                <div className="absolute bottom-20 right-10 w-48 rotate-12">
                    <FloatAnimation delay={1.2} duration={6}>
                        <PencilBox className="text-white w-full h-auto" delay={1.5} />
                    </FloatAnimation>
                </div>
                <div className="absolute top-40 right-1/4 w-32 -rotate-12">
                    <FloatAnimation delay={0.8} duration={4}>
                        <PencilArrow className="text-white w-full h-auto" delay={2} />
                    </FloatAnimation>
                </div>
                <div className="absolute bottom-1/4 left-1/4 w-24">
                    <FloatAnimation delay={1.5} duration={5}>
                        <PencilBox className="text-white w-full h-auto" delay={2.2} />
                    </FloatAnimation>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <EntryAnimation>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
                            {title.main}
                            <span className="text-accent underline decoration-white/10">{title.highlight}</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/70 mb-12 font-medium leading-relaxed max-w-3xl mx-auto">
                            {description}
                        </p>

                        <div className="flex flex-col sm:row items-center justify-center gap-6">
                            <Link
                                href={ctas.primary.href}
                                className="w-full sm:w-auto px-10 py-5 bg-accent text-white rounded-2xl font-black text-lg shadow-2xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
                            >
                                {ctas.primary.label}
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>

                            <a
                                href={ctas.secondary.href}
                                className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white rounded-2xl font-black text-lg backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2 group"
                            >
                                <Phone size={20} className="text-accent" />
                                {ctas.secondary.label}
                            </a>
                        </div>
                    </EntryAnimation>
                </div>
            </div>
        </section>
    );
};
