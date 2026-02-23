"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, PackageCheck, Truck, CheckCircle2, ChevronRight } from "lucide-react";

const steps = [
    {
        title: "Booking",
        desc: "Instant assessment with a pinch of anime speed.",
        icon: ClipboardCheck,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Packing",
        desc: "Multi-layered stickers and wraps for your treasures.",
        icon: PackageCheck,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Moving",
        desc: "Your ride moves in a safe, animated bubble of care.",
        icon: Truck,
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    },
    {
        title: "Delivery",
        desc: "Unpacked and set up with a celebratory spark.",
        icon: CheckCircle2,
        color: "text-teal-500",
        bg: "bg-teal-500/10"
    }
];

export const HowItWorks = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-primary/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-secondary font-black uppercase tracking-[0.4em] text-sm">The Journey</h2>
                    <h3 className="text-5xl md:text-7xl font-black font-heading tracking-tighter italic">
                        HOW WE <span className="text-accent underline decoration-primary">SPEEDRUN</span> YOUR MOVE
                    </h3>
                </div>

                <div className="relative">
                    {/* Animated Connective Path (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] z-0">
                        <svg width="100%" height="2" className="overflow-visible">
                            <path
                                d="M 0 1 L 1000 1"
                                className="delivery-path stroke-primary/10 stroke-2"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.15 }}
                                className="flex flex-col items-center text-center space-y-6"
                            >
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    className={`w-32 h-32 ${step.bg} ${step.color} rounded-[40px] flex items-center justify-center border-4 border-white shadow-xl anime-sticker`}
                                >
                                    <step.icon size={48} />
                                </motion.div>
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black font-heading tracking-tighter">{step.title}</h4>
                                    <p className="font-medium text-primary/60">{step.desc}</p>
                                </div>
                                {idx < steps.length - 1 && (
                                    <div className="lg:hidden">
                                        <ChevronRight size={32} className="text-primary/20 rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Floating Trust Banner */}
                <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-32 glass-card p-12 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-8 border-primary/10"
                >
                    <div className="space-y-2">
                        <h4 className="text-4xl font-black font-heading tracking-tight italic">YOUR HAPPINESS, REIMAGINED.</h4>
                        <p className="text-lg font-medium text-primary/60">12,400+ Families moved with anime-style precision.</p>
                    </div>
                    <div className="flex -space-x-4">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-accent overflow-hidden shadow-lg">
                                <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="avatar" />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
