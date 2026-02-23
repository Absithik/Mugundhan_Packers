import React from 'react';
import { Truck, Navigation, Shield, Thermometer } from 'lucide-react';

export default function TransportServices() {
    return (
        <div className="bg-white">
            <section className="pt-40 pb-20 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl">
                        <Truck size={40} />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-6">Fleet <span className="text-accent">Excellence.</span></h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">Our tech-enabled specialized containers are the safest rooms on wheels.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "GPS Tracking", icon: <Navigation />, desc: "Real-time location and speed monitoring of every vehicle." },
                            { title: "Insured Consignment", icon: <Shield />, desc: "Comprehensive insurance coverage for all goods in transit." },
                            { title: "Weather Proof", icon: <Thermometer />, desc: "Closed-containers protected from rain, dust, and heat." },
                            { title: "Air Suspension", icon: <Truck />, desc: "Advanced suspension for fragile and high-value equipment." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[40px] bg-soft border border-primary/5 space-y-4">
                                <div className="text-accent">{item.icon}</div>
                                <h4 className="text-2xl font-black text-primary">{item.title}</h4>
                                <p className="text-gray-text font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-soft">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-primary">Vehicle Transportation</h2>
                        <p className="text-lg text-gray-text font-medium leading-relaxed">
                            We specialize in the safe transport of luxury cars and high-end bikes using dedicated vehicle carriers. Our specialized hydraulic ramps ensure safe loading without single scratch.
                        </p>
                        <div className="p-8 bg-white rounded-[40px] shadow-xl border border-primary/5">
                            <p className="font-black text-primary text-xl mb-2">99.9% On-Time Record</p>
                            <p className="text-gray-text font-bold">We value your time as much as your belongings.</p>
                        </div>
                    </div>
                    <div className="rounded-[50px] overflow-hidden shadow-3xl">
                        <img src="https://images.unsplash.com/photo-1519003722824-192d992a6058?auto=format&fit=crop&q=80&w=1200" alt="Transport" className="w-full h-auto" />
                    </div>
                </div>
            </section>
        </div>
    );
}
