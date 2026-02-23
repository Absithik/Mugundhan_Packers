"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Globe } from "lucide-react";

const cities = [
    "New Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata",
    "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Coimbatore"
];

export const ServiceArea = () => {
    return (
        <section id="coverage" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-secondary font-black uppercase tracking-[0.4em] text-sm">Our Network</h2>
                            <h3 className="text-5xl md:text-7xl font-black font-heading tracking-tighter italic">
                                SERVING EVERY <span className="text-accent underline decoration-primary">CORNER</span> OF INDIA
                            </h3>
                        </div>

                        <p className="text-xl font-medium text-primary/60 leading-relaxed">
                            50+ branches, 200+ specialized vehicles, and a team that treats every move as their next great adventure.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {cities.map((city, idx) => (
                                <motion.div
                                    key={city}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
                                    className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border-2 border-primary/5 shadow-sm font-black text-primary hover:border-accent hover:text-accent transition-all cursor-default"
                                >
                                    <MapPin size={16} />
                                    {city}
                                </motion.div>
                            ))}
                        </div>

                        <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-primary/20 group">
                            Explore Branch Network <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    <div className="relative">
                        <motion.div
                            animate={{ opacity: 1, rotate: 0 }}
                            className="rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white relative group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1590674033314-0465f7253457?auto=format&fit=crop&q=80&w=1200"
                                alt="Network Map"
                                className="w-full h-[600px] object-cover grayscale brightness-110 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />

                            {/* Anime Sticker Over Map */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="w-32 h-32 bg-accent/30 rounded-full blur-2xl"
                                />
                                <div className="bg-accent text-white p-6 rounded-[30px] shadow-2xl relative z-10 anime-sticker">
                                    <Globe size={40} className="animate-spin-slow" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
