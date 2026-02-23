"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
    { label: "Happy Clients", value: 5000, suffix: "+" },
    { label: "Years Experience", value: 10, suffix: "+" },
    { label: "Branches", value: 50, suffix: "+" },
    { label: "Success Rate", value: 100, suffix: "%" },
];

const StatItem = ({ stat }: { stat: typeof stats[0] }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = true;

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const stepValue = stat.value / steps;
            let current = 0;
            const timer = setInterval(() => {
                current += stepValue;
                if (current >= stat.value) {
                    setCount(stat.value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
            return () => clearInterval(timer);
        }
    }, [isInView, stat.value]);

    return (
        <div ref={ref} className="text-center space-y-2">
            <div className="text-6xl md:text-8xl font-black font-heading text-primary flex items-center justify-center tracking-tighter">
                <span>{count}</span>
                <span className="text-accent">{stat.suffix}</span>
            </div>
            <p className="text-primary/40 text-sm font-black uppercase tracking-[0.4em]">{stat.label}</p>
        </div>
    );
};

export const StatsCounter = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
                    {stats.map((stat, idx) => (
                        <StatItem key={idx} stat={stat} />
                    ))}
                </div>
            </div>

            {/* Decorative Anime Lines */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/5 -z-0" />
            <div className="absolute top-1/2 left-1/4 w-[1px] h-full bg-primary/5 -z-0" />
            <div className="absolute top-1/2 left-3/4 w-[1px] h-full bg-primary/5 -z-0" />
        </section>
    );
};
