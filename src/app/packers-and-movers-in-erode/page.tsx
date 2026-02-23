import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/branches/HeroSection';
import { BranchesGrid } from '@/components/sections/branches/BranchesGrid';

export const metadata: Metadata = {
    title: "Expert Packers and Movers in Erode | Reliable Shifting",
    description: "Mugunthan Packers & Movers provides expert shifting services in Erode. Fast, safe, and professional house relocation and office moving at competitive rates.",
    keywords: ["Packers and Movers in Erode", "Best Shifting Service Erode", "Home Relocation Erode", "Erode Movers and Packers"],
    alternates: {
        canonical: 'https://mugunthanpackers.com/packers-and-movers-in-erode',
    },
};

export default function ErodePage() {
    return (
        <div className="bg-white">
            <HeroSection />
            <div className="py-20 text-center container mx-auto px-6">
                <h2 className="text-4xl font-black text-primary mb-6">Reliable Moving Services in Erode</h2>
                <p className="text-lg text-primary/60 max-w-2xl mx-auto font-medium">
                    Looking for trustworthy movers in Erode? Mugunthan Packers and Movers offers comprehensive shifting solutions tailored to your needs. From household goods to office equipment, we move everything with precision in Erode.
                </p>
            </div>
            <BranchesGrid />
        </div>
    );
}
