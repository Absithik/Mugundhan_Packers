import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/branches/HeroSection';
import { BranchesGrid } from '@/components/sections/branches/BranchesGrid';

export const metadata: Metadata = {
    title: "Top Packers and Movers in Namakkal | Mugunthan Movers",
    description: "Best packers and movers in Namakkal for local and domestic shifting. We offer affordable house moving and packing services in Namakkal with expert staff.",
    keywords: ["Packers and Movers in Namakkal", "Best Shifting Service Namakkal", "Home Relocation Namakkal", "Local Movers Namakkal"],
    alternates: {
        canonical: 'https://mugunthanpackers.com/packers-and-movers-in-namakkal',
    },
};

export default function NamakkalPage() {
    return (
        <div className="bg-white">
            <HeroSection />
            <div className="py-20 text-center container mx-auto px-6">
                <h2 className="text-4xl font-black text-primary mb-6">Expert Shifting Services in Namakkal</h2>
                <p className="text-lg text-primary/60 max-w-2xl mx-auto font-medium">
                    Mugunthan Packers and Movers is proud to serve the Namakkal region with top-tier relocation solutions. Whether you are moving locally within Namakkal or to another city, our team ensures a smooth and safe transition.
                </p>
            </div>
            <BranchesGrid />
        </div>
    );
}
