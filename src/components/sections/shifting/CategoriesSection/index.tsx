import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CATEGORIES_CONTENT } from './content';
import { FadeIn } from './animation';

export const CategoriesSection = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {CATEGORIES_CONTENT.map((cat, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="p-16 rounded-[60px] bg-soft border border-primary/5 space-y-8 hover:bg-primary hover:text-white transition-all duration-700 group h-full flex flex-col">
                            <cat.icon className="text-accent" size={48} />
                            <h2 className="text-5xl font-black">{cat.title}</h2>
                            <p className="text-lg font-medium opacity-70">
                                {cat.description}
                            </p>
                            <ul className="space-y-4 flex-grow">
                                {cat.features.map(feat => (
                                    <li key={feat} className="flex items-center gap-3 font-bold">
                                        <CheckCircle2 className="text-accent" size={20} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};
