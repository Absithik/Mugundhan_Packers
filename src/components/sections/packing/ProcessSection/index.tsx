import React from 'react';
import { PROCESS_CONTENT } from './content';
import { FadeIn } from './animation';

export const ProcessSection = () => {
    const { title, steps } = PROCESS_CONTENT;

    return (
        <section className="py-24 bg-soft">
            <div className="container mx-auto px-6 text-center mb-16">
                <FadeIn>
                    <h3 className="text-5xl font-black text-primary">{title}</h3>
                </FadeIn>
            </div>
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((item, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-primary/5 space-y-4 h-full">
                            <span className="text-5xl font-black text-accent/20">{item.step}</span>
                            <h4 className="text-2xl font-black text-primary">{item.title}</h4>
                            <p className="text-gray-text font-medium">{item.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};
