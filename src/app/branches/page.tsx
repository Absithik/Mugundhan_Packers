import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const branches = [
    { city: "Chennai (Headquarters)", address: "Logistics Tower, T. Nagar", phone: "044 2434 2000", email: "chennai@mugunthan.com" },
    { city: "Mumbai", address: "Plaza 12, Vashi Sector 17", phone: "022 6789 4000", email: "mumbai@mugunthan.com" },
    { city: "New Delhi", address: "G-42, Okhla Phase III", phone: "011 4123 5000", email: "delhi@mugunthan.com" },
    { city: "Bangalore", address: "HSR Layout, 5th Main", phone: "080 3456 7000", email: "blr@mugunthan.com" },
    { city: "Hyderabad", address: "Plot 89, Gachibowli Area", phone: "040 2345 6000", email: "hyd@mugunthan.com" },
    { city: "Pune", address: "Baner Road, Balewadi", phone: "020 2728 8000", email: "pune@mugunthan.com" },
];

export default function BranchesPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="pt-40 pb-20 bg-primary text-white">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-black mb-8">Our <span className="text-accent">Presence.</span></h1>
                    <p className="text-2xl text-white/60 max-w-2xl font-medium leading-relaxed">
                        From Metro cities to remote towns, we have a localized team ready to serve you anywhere in India.
                    </p>
                </div>
            </section>

            {/* Branch Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {branches.map((b, i) => (
                            <div key={i} className="p-10 rounded-[50px] bg-soft border border-primary/5 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent mb-8 shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                                    <MapPin size={28} />
                                </div>
                                <h3 className="text-3xl font-black text-primary mb-6">{b.city}</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-3 text-gray-text font-medium">
                                        <Navigation className="text-accent shrink-0" size={18} />
                                        <span>{b.address}</span>
                                    </div>
                                    <div className="flex gap-3 text-gray-text font-medium">
                                        <Phone className="text-accent shrink-0" size={18} />
                                        <span>{b.phone}</span>
                                    </div>
                                    <div className="flex gap-3 text-gray-text font-medium">
                                        <Mail className="text-accent shrink-0" size={18} />
                                        <span>{b.email}</span>
                                    </div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-primary/5">
                                    <Button variant="outline" className="w-full border-primary/10 text-primary font-black py-4 rounded-2xl hover:bg-primary hover:text-white">
                                        View On Map
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Network Stats */}
            <section className="py-24 bg-primary text-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-5xl font-black">Expanding To Serve You Better.</h2>
                            <p className="text-xl text-white/60 font-medium">
                                We are adding 5 new branches every quarter. Our goal is to have a Mugunthan service center within 50km of every Indian household by 2026.
                            </p>
                            <div className="flex gap-10">
                                <div>
                                    <p className="text-5xl font-black text-accent">50+</p>
                                    <p className="text-white/40 font-black uppercase tracking-widest text-xs mt-2">Active Branches</p>
                                </div>
                                <div className="w-px h-16 bg-white/10" />
                                <div>
                                    <p className="text-5xl font-black text-accent">1200+</p>
                                    <p className="text-white/40 font-black uppercase tracking-widest text-xs mt-2">Fleet Drivers</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1590674033314-0465f7253457?auto=format&fit=crop&q=80&w=1200"
                                alt="Indian Map Network"
                                className="w-full opacity-20 grayscale"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
