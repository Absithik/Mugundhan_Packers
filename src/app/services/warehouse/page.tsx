import React from 'react';
import { Warehouse, Lock, Zap, ThermometerSun, ShieldCheck } from 'lucide-react';

export default function WarehouseServices() {
    return (
        <div className="bg-white">
            <section className="pt-40 pb-20 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl">
                        <Warehouse size={40} />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-6">Safe <span className="text-accent">Storage.</span></h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">Your goods stay in our high-security, climate-controlled sanctuaries.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8 p-12 bg-soft rounded-[60px] border border-primary/5">
                            <Lock className="text-accent" size={48} />
                            <h2 className="text-4xl font-black text-primary">24/7 Security</h2>
                            <p className="text-lg text-gray-text font-medium leading-relaxed">
                                CCTV surveillance, biometric access, and 24/7 physical security guards ensure your high-value goods are never unattended.
                            </p>
                        </div>
                        <div className="space-y-8 p-12 bg-soft rounded-[60px] border border-primary/5">
                            <ThermometerSun className="text-accent" size={48} />
                            <h2 className="text-4xl font-black text-primary">Climate Control</h2>
                            <p className="text-lg text-gray-text font-medium leading-relaxed">
                                Optimized temperature and humidity management to protect sensitive items like musical instruments, art, and documents.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-6 max-w-3xl space-y-8">
                    <Zap className="mx-auto text-accent" size={56} />
                    <h3 className="text-5xl font-black">inventory Management 2.0</h3>
                    <p className="text-xl text-white/50 font-medium">
                        Every item stored with us is barcoded and logged in our digital inventory. You can request a photo update of your storage unit anytime via our app.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {['Fire Proof', 'Pest Controlled', 'Moisture Free', 'Fully Insured'].map(tag => (
                            <div key={tag} className="flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full font-bold">
                                <ShieldCheck size={16} className="text-accent" />
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
