import React from 'react';
import { Package, Truck, Home, Warehouse, Shield, Clock, MapPin, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const services = [
    {
        title: "Shifting Solutions",
        slug: "shifting",
        desc: "Tailored relocation plans with dedicated moving managers to ensure zero downtime and maximum care for home and office moves.",
        icon: <Home size={40} />,
        features: ["Local & Domestic Shifting", "Furniture Dismantling", "IT Equipment Moving", "Post-Move Setup"]
    },
    {
        title: "Premium Packing",
        slug: "packing",
        desc: "Scientific packing using multi-layered honey-comb materials and reinforced crates for absolute safety during transit.",
        icon: <Package size={40} />,
        features: ["Fragile Item Handling", "Waterproof Packing", "Wooden Crating", "Custom Box Sizing"]
    },
    {
        title: "Loading & Unloading",
        slug: "loading-unloading",
        desc: "Professional handling of your belongings with specialized equipment to ensure safe loading and unloading processes.",
        icon: <MapPin size={40} />,
        features: ["Expert Handling", "Safety Equipment", "Trained Professionals", "Damage-Free Promise"]
    },
    {
        title: "National Transport",
        slug: "transport",
        desc: "Specialized fleet of closed-containers equipped with GPS and air-suspension for smooth transport across India.",
        icon: <Truck size={40} />,
        features: ["Bikes & Car Transport", "Real-time Tracking", "ISO Certified Fleet", "Insurance Included"]
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="pt-40 pb-20 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-black mb-6">Our <span className="text-accent">Solutions.</span></h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">Comprehensive logistics and relocation services designed for modern reliability.</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((s, i) => (
                            <div key={i} className="group p-12 rounded-[50px] bg-soft border border-primary/5 hover:bg-primary transition-all duration-700 hover:-translate-y-4">
                                <div className="flex flex-col md:row items-start md:items-center justify-between gap-8 mb-10">
                                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-accent shadow-lg group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                                        {s.icon}
                                    </div>
                                    <Link href={`/services/${s.slug}`}>
                                        <Button variant="outline" className="border-primary/20 text-primary group-hover:border-white/20 group-hover:text-white px-8 py-5 font-black rounded-full transition-all">
                                            View Service Details
                                        </Button>
                                    </Link>
                                </div>
                                <h2 className="text-4xl font-black text-primary mb-6 group-hover:text-white transition-colors">{s.title}</h2>
                                <p className="text-lg text-gray-text group-hover:text-white/70 font-medium mb-10 leading-relaxed">{s.desc}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {s.features.map(f => (
                                        <div key={f} className="flex items-center gap-2 text-primary group-hover:text-white/80 font-bold">
                                            <Shield size={16} className="text-accent" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    <div className="space-y-4">
                        <Shield className="mx-auto text-accent" size={48} />
                        <h4 className="text-xl font-black uppercase">ISO Certified</h4>
                    </div>
                    <div className="space-y-4">
                        <Clock className="mx-auto text-accent" size={48} />
                        <h4 className="text-xl font-black uppercase">On-Time Delivery</h4>
                    </div>
                    <div className="space-y-4">
                        <MapPin className="mx-auto text-accent" size={48} />
                        <h4 className="text-xl font-black uppercase">Pan-India Network</h4>
                    </div>
                    <div className="space-y-4">
                        <Headphones className="mx-auto text-accent" size={48} />
                        <h4 className="text-xl font-black uppercase">Dedicated Manager</h4>
                    </div>
                </div>
            </section>
        </div>
    );
}
