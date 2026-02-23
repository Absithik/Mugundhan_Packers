"use client";

import { motion } from "framer-motion";
import { Truck, ArrowRight, Box, MapPin } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-bold uppercase tracking-widest text-primary">India&apos;s Boldest Movers</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-4 max-w-5xl"
                    >
                        <h1 className="text-6xl md:text-8xl font-black font-heading leading-tight tracking-tighter">
                            WE MOVE
                            <span className="block text-stroke py-2">YOUR DREAMS</span>
                            <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">LIKE ANIME.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl font-medium text-primary/60 max-w-2xl"
                    >
                        Lightning fast delivery with a pinch of anime magic.
                        Mugunthan Packers & Movers — The ultimate relocation experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 pt-8"
                    >
                        <button className="bg-primary text-white px-10 py-5 text-xl font-bold rounded-2xl flex items-center gap-3 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                            Get Quote Now <ArrowRight size={24} />
                        </button>
                        <button className="glass-card text-primary px-10 py-5 text-xl font-bold rounded-2xl border-primary/10 hover:bg-white transition-all">
                            Our Fleet
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Hero Anime Illustrations */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "120%" }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 left-0 text-primary opacity-10 pointer-events-none"
            >
                <Truck size={200} strokeWidth={0.5} />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -40, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-[20%] right-[10%] opacity-20 text-accent hidden lg:block"
            >
                <Box size={120} strokeWidth={0.5} />
            </motion.div>

            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-[20%] left-[10%] opacity-20 text-secondary hidden lg:block"
            >
                <MapPin size={80} strokeWidth={0.5} />
            </motion.div>

        </section>
    );
};
