"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Senior Manager",
        content: "Mugunthan moved our office like a high-budget anime arc. Surgical precision and zero damage.",
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Anita Sharma",
        role: "Home Owner",
        content: "The most playful moving experience ever! Their team is like a group of logistics superheroes.",
        avatar: "https://i.pravatar.cc/100?img=25",
    },
    {
        name: "Vikram Singh",
        role: "Logistics Pro",
        content: "I trust Mugunthan for everything. Their packing is so good, it should be in a museum.",
        avatar: "https://i.pravatar.cc/100?img=33",
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-primary">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-accent font-black uppercase tracking-[0.4em] text-sm">Fan Club</h2>
                        <h3 className="text-5xl md:text-7xl font-black font-heading tracking-tighter italic text-white">
                            TRUSTED BY <span className="text-accent underline decoration-white/20">THOUSANDS</span>
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[50px] space-y-8 shadow-2xl relative group"
                        >
                            <Quote className="text-accent size-12 absolute -top-6 -left-2 rotate-180 bg-white rounded-full p-2 border-4 border-primary/5" />
                            <p className="text-xl font-bold text-primary leading-relaxed italic">"{t.content}"</p>

                            <div className="flex items-center gap-4 pt-6 border-t border-primary/5">
                                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-4 border-accent/20" />
                                <div>
                                    <h4 className="font-black text-primary text-xl leading-none">{t.name}</h4>
                                    <p className="text-primary/40 text-xs font-black uppercase tracking-widest mt-1">{t.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 group-hover:scale-110 transition-transform origin-left">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-accent text-accent" />)}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-0 right-0 p-10 opacity-5 pointer-events-none">
                <Quote size={300} className="text-white" />
            </div>
        </section>
    );
};
