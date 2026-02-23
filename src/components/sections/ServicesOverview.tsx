"use client";

import { motion } from "framer-motion";
import { Package, Truck, Home, Warehouse, ArrowRight, Shield, Clock, MapPin } from "lucide-react";

const services = [
    {
        title: "House Shifting",
        desc: "Complete home relocation with anime-style precision.",
        icon: Home,
        color: "bg-blue-500/10 text-blue-500",
        delay: 0.1
    },
    {
        title: "Office Moving",
        desc: "Fast-track workspace setup for high-speed agencies.",
        icon: Warehouse,
        color: "bg-purple-500/10 text-purple-500",
        delay: 0.2
    },
    {
        title: "Vehicle Transport",
        desc: "Your ride moves in a safe, animated bubble of care.",
        icon: Truck,
        color: "bg-orange-500/10 text-orange-500",
        delay: 0.3
    },
    {
        title: "Premium Packing",
        desc: "Multi-layered stickers and wraps for your treasures.",
        icon: Package,
        color: "bg-teal-500/10 text-teal-500",
        delay: 0.4
    }
];

export const ServicesOverview = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-secondary font-black uppercase tracking-[0.4em] text-sm">Super Services</h2>
                        <h3 className="text-5xl md:text-7xl font-black font-heading leading-tight italic">
                            WE HANDLE <span className="text-accent underline decoration-primary">EVERYTHING</span>
                        </h3>
                    </div>
                    <p className="text-lg font-medium text-primary/60 max-w-sm">
                        Professional logistics wrapped in a playful experience. Safe, fast, and visually stunning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: service.delay }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-card p-10 rounded-[40px] group transition-all"
                        >
                            <div className={`w-20 h-20 ${service.color} rounded-[24px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <service.icon size={40} />
                            </div>
                            <h4 className="text-3xl font-black font-heading mb-4 tracking-tighter">{service.title}</h4>
                            <p className="text-primary/60 font-medium mb-8 leading-relaxed">
                                {service.desc}
                            </p>
                            <button className="flex items-center gap-2 font-black text-primary hover:text-accent transition-colors">
                                Details <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
