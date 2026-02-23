import React from 'react';
import { Shield, Target, Eye, Award, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="pt-40 pb-20 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-6xl md:text-8xl font-black mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
                        Our <span className="text-accent underline decoration-white/10">Legacy</span> In <br /> Logistics.
                    </h1>
                    <p className="text-2xl text-white/60 max-w-2xl font-medium leading-relaxed">
                        Since 2009, we have been moving more than just boxes; we&apos;ve been moving lives, memories, and dreams with unwavering integrity.
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm">Company Story</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                                From A Single Truck To A National Logistics Powerhouse.
                            </h3>
                            <div className="space-y-6 text-lg text-gray-text font-medium leading-relaxed">
                                <p>
                                    Mugunthan Packers &amp; Movers was founded by Mr. Mugunthan under a simple yet powerful philosophy: &quot;Treat every customer&apos;s belongings as our own.&quot; What started as a small operation in Chennai with just one second-hand truck has today evolved into a nationwide leader in premium relocation services.
                                </p>
                                <p>
                                    Over the last 15 years, we have scaled our operations across 50+ major cities in India, maintaining an impeccable record of 99.8% damage-free deliveries. We haven&apos;t just expanded our fleet; we have expanded our capacity to care.
                                </p>
                                <p>
                                    Innovation has been at the heart of our journey. From being early adopters of multi-layered bubble-wrap technology to implementing real-time GPS tracking for every consignment, we have consistently pushed the boundaries of what consumers can expect from a moving company.
                                </p>
                                <p>
                                    Today, Mugunthan Packers &amp; Movers stands as a symbol of trust, reliability, and precision. Whether it&apos;s a small studio apartment or a massive corporate headquarters, our commitment remains the same: A seamless transition to your new beginning.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-[60px] overflow-hidden shadow-3xl border-[15px] border-soft">
                                <img
                                    src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&q=80&w=1200"
                                    alt="Mugunthan HQ"
                                    className="w-full h-auto object-cover aspect-[4/5]"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-accent p-12 rounded-[40px] text-white shadow-2xl">
                                <p className="text-6xl font-black">15+</p>
                                <p className="font-bold uppercase tracking-widest text-sm">Years of Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-soft">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-12 rounded-[50px] shadow-xl space-y-6 border border-primary/5">
                            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                                <Target size={32} />
                            </div>
                            <h4 className="text-3xl font-black text-primary">Our Mission</h4>
                            <p className="text-gray-text font-medium leading-relaxed">
                                To provide world-class, stress-free relocation experiences by combining cutting-edge technology with a deeply human-centric approach to service.
                            </p>
                        </div>
                        <div className="bg-white p-12 rounded-[50px] shadow-xl space-y-6 border border-primary/5">
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                                <Eye size={32} />
                            </div>
                            <h4 className="text-3xl font-black text-primary">Our Vision</h4>
                            <p className="text-gray-text font-medium leading-relaxed">
                                To become India's most trusted logistics partner, recognized for setting the gold standard in safety, efficiency, and customer satisfaction.
                            </p>
                        </div>
                        <div className="bg-white p-12 rounded-[50px] shadow-xl space-y-6 border border-primary/5">
                            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                                <Shield size={32} />
                            </div>
                            <h4 className="text-3xl font-black text-primary">Core Values</h4>
                            <ul className="space-y-3">
                                {['Uncompromising Integrity', 'Safety First Culture', 'Extreme Ownership', 'Continuous Innovation'].map(item => (
                                    <li key={item} className="flex items-center gap-3 font-bold text-gray-text">
                                        <CheckCircle2 size={18} className="text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Placeholder - simplified for MVP but high visual */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm">The Journey</h2>
                    <h3 className="text-5xl font-black text-primary">Milestones Of Trust.</h3>
                </div>
                <div className="container mx-auto px-6 relative">
                    <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary/5 -translate-x-1/2 hidden lg:block" />
                    <div className="space-y-20 relative">
                        {[
                            { year: "2009", title: "The Humble Beginning", desc: "Started with 1 truck and 3 staff members in Chennai." },
                            { year: "2013", title: "Regional Expansion", desc: "Crossed 1000 successful household relocations across Tamil Nadu." },
                            { year: "2018", title: "National Footprint", desc: "Opened branches in Mumbai, Delhi, and Bangalore. Fleet size hit 50." },
                            { year: "2024", title: "Premium Standard", desc: "Recognized as India's most reliable premium movers with 50+ branches." }
                        ].map((milestone, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row items-center gap-10 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="flex-1 text-center lg:text-right p-8 bg-soft rounded-[40px] border border-primary/5">
                                    <span className="text-4xl font-black text-accent">{milestone.year}</span>
                                    <h5 className="text-2xl font-black text-primary mt-2">{milestone.title}</h5>
                                    <p className="text-gray-text font-medium mt-4">{milestone.desc}</p>
                                </div>
                                <div className="w-6 h-6 bg-primary rounded-full relative z-10 border-4 border-white shadow-xl hidden lg:block" />
                                <div className="flex-1 hidden lg:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
