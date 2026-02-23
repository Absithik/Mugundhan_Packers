import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FAQ_CONTENT } from './content';
import { FadeIn } from './animation';

export const FAQSection = () => {
    const { title, items } = FAQ_CONTENT;

    return (
        <section className="py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <FadeIn>
                    <h3 className="text-4xl font-black text-primary mb-12 text-center">{title}</h3>
                </FadeIn>
                <div className="space-y-6">
                    {items.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="p-8 rounded-[30px] border border-primary/10">
                                <h5 className="text-xl font-black text-primary mb-2 flex gap-3">
                                    <CheckCircle2 className="text-accent shrink-0" />
                                    {item.q}
                                </h5>
                                <p className="text-gray-text font-medium pl-9">{item.a}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
