"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Clock, Truck, Headphones } from "lucide-react";

const features = [
    {
        title: "Anime-Level Speed",
        desc: "Lightning fast relocation that breaks the speed of sound.",
        icon: Truck,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Sticker Strength",
        desc: "Our packing is so strong, it feels like it's glued with magic.",
        icon: ShieldCheck,
        color: "text-accent",
        bg: "bg-accent/10"
    },
    {
        title: "Sensei Team",
        desc: "Trained professionals who handle your goods like masters.",
        icon: Users,
        color: "text-secondary",
        bg: "bg-secondary/10"
    },
    {
        title: "Global Standards",
        desc: "Moving beyond borders with premium anime precision.",
        icon: Award,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Clockwork Timing",
        desc: "On time, every time. No fillers, just delivery.",
        icon: Clock,
        color: "text-teal-500",
        bg: "bg-teal-500/10"
    },
    {
        title: "24/7 Support",
        desc: "Always here to guide you through your relocation arc.",
        icon: Headphones,
        color: "text-primary",
        bg: "bg-primary/10"
    }
];

export const WhyChooseUs = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-secondary font-black uppercase tracking-[0.4em] text-sm">Our Strength</h2>
                        <h3 className="text-5xl md:text-7xl font-black font-heading tracking-tighter italic">
                            WHY WE <span className="text-accent underline decoration-primary">DOMINATE</span> THE INDUSTRY
                        </h3>
                    </div>
                    <p className="text-lg font-medium text-primary/60 max-w-sm">
                        We don't just move boxes; we move adventures. Experience the power of professional anime-style logistics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                            className="glass-card p-10 rounded-[40px] group transition-all anime-sticker"
                        >
                            <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-8 border-2 border-white shadow-lg`}>
                                <feature.icon size={32} />
                            </div>
                            <h4 className="text-2xl font-black font-heading mb-4 tracking-tighter">{feature.title}</h4>
                            <p className="text-primary/60 font-medium leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
