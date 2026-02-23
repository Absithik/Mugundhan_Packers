import React from 'react';
import { Package, ShieldCheck, Box, Hammer, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function PackingServices() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="pt-40 pb-20 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl">
                        <Package size={40} />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-6">Scientific <span className="text-accent underline decoration-white/10">Packing.</span></h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">Because the safety of your move starts with the quality of the box.</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm">Packing Standards</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight">Multi-Layered Protection For Every Item.</h3>
                            <p className="text-lg text-gray-text font-medium leading-relaxed">
                                At Mugunthan Packers & Movers, we don't just wrap items; we engineer a protective cocoon around them. Our packing protocols are derived from international aerospace cargo standards.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-soft rounded-[40px] border border-primary/5 space-y-4">
                                    <ShieldCheck className="text-accent" />
                                    <h4 className="text-xl font-black text-primary">Fragile Handling</h4>
                                    <p className="text-gray-text text-sm font-medium">Extra-thick bubble wraps and custom-cut thermocol for electronics and glassware.</p>
                                </div>
                                <div className="p-8 bg-soft rounded-[40px] border border-primary/5 space-y-4">
                                    <Box className="text-accent" />
                                    <h4 className="text-xl font-black text-primary">Industrial Grade</h4>
                                    <p className="text-gray-text text-sm font-medium">Heavy-duty corrugated sheets and wooden crates for machinery and antiques.</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[60px] overflow-hidden shadow-3xl">
                            <img src="https://images.unsplash.com/photo-1549194388-f61be84a6e9e?auto=format&fit=crop&q=80&w=1200" alt="Packing" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-soft">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h3 className="text-5xl font-black text-primary">The 4-Layer Packing Shield.</h3>
                </div>
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { step: "01", title: "Soft Wrap", desc: "Anti-static foam or butter paper for the primary surface protection." },
                        { step: "02", title: "Bubble Guard", desc: "High-density bubble wrap to absorb vibration and impact during transit." },
                        { step: "03", title: "Corrugated Seal", desc: "5-ply heavy duty cardboard sheets to prevent external pressure or piercing." },
                        { step: "04", title: "Shrink & Strap", desc: "Final industrial shrink wrapping to lock everything in place and prevent moisture." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl border border-primary/5 space-y-4">
                            <span className="text-5xl font-black text-accent/20">{item.step}</span>
                            <h4 className="text-2xl font-black text-primary">{item.title}</h4>
                            <p className="text-gray-text font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ placeholder */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h3 className="text-4xl font-black text-primary mb-12 text-center">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                        {[
                            { q: "Do you provide packing materials?", a: "Yes, we provide all high-quality packing materials including boxes, tapes, wraps, and crates as part of our service." },
                            { q: "How do you handle extremely fragile antiques?", a: "We use custom-built wooden crates and specialized shock-absorbent materials specifically for antiques and high-value art." }
                        ].map((faq, i) => (
                            <div key={i} className="p-8 rounded-[30px] border border-primary/10">
                                <h5 className="text-xl font-black text-primary mb-2 flex gap-3"><CheckCircle2 className="text-accent shrink-0" /> {faq.q}</h5>
                                <p className="text-gray-text font-medium pl-9">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
