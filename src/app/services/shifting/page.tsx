import React from 'react';
import { Home, Building2, Truck, CheckCircle2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ShiftingServices() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="pt-40 pb-20 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl">
                        <Home size={40} />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-6">Seamless <span className="text-accent">Shifting.</span></h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">Relocating your home or office is now a weekend leisure activity.</p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-24">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="p-16 rounded-[60px] bg-soft border border-primary/5 space-y-8 hover:bg-primary hover:text-white transition-all duration-700 group">
                        <Building2 className="text-accent" size={48} />
                        <h2 className="text-5xl font-black">Office Shifting</h2>
                        <p className="text-lg font-medium opacity-70">Dedicated corporate moving teams to ensure zero business interruption. We handle IT infrastructure with extreme care.</p>
                        <ul className="space-y-4">
                            {['Server Rack Moving', 'Modular Furniture Assembly', 'Secure Document Transport'].map(i => (
                                <li key={i} className="flex items-center gap-3 font-bold"><CheckCircle2 className="text-accent" size={20} /> {i}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-16 rounded-[60px] bg-soft border border-primary/5 space-y-8 hover:bg-primary hover:text-white transition-all duration-700 group">
                        <Home className="text-accent" size={48} />
                        <h2 className="text-5xl font-black">Home Relocation</h2>
                        <p className="text-lg font-medium opacity-70">From cozy apartments to luxury villas, we handle every household item with a personalized touch of care.</p>
                        <ul className="space-y-4">
                            {['Full Furniture Dismantling', 'Kitchenware Organization', 'Electronic Safety Setup'].map(i => (
                                <li key={i} className="flex items-center gap-3 font-bold"><CheckCircle2 className="text-accent" size={20} /> {i}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] rounded-full" />
                <div className="container mx-auto px-6 text-center space-y-8 relative z-10">
                    <h3 className="text-5xl md:text-7xl font-black">Our Zero-Stress Guarantee.</h3>
                    <p className="text-2xl text-white/60 max-w-3xl mx-auto font-medium">If we don't deliver your goods within the committed time frame, we refund 10% of your moving cost. No questions asked.</p>
                    <div className="flex justify-center gap-6 pt-8">
                        <div className="flex flex-col items-center gap-2">
                            <Truck className="text-accent" size={40} />
                            <span className="font-bold uppercase tracking-widest text-sm">Insured Transit</span>
                        </div>
                        <div className="w-px h-16 bg-white/10" />
                        <div className="flex flex-col items-center gap-2">
                            <MapPin className="text-accent" size={40} />
                            <span className="font-bold uppercase tracking-widest text-sm">GPS Tracking</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
