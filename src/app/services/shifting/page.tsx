import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/shifting/HeroSection';
import { CategoriesSection } from '@/components/sections/shifting/CategoriesSection';
import { GuaranteeSection } from '@/components/sections/shifting/GuaranteeSection';

export const metadata: Metadata = {
    title: "Best House Shifting in Salem | Office Relocation Services",
    description: "Reliable house shifting and office relocation services in Salem. We offer safe, efficient, and affordable moving across Salem, Namakkal, and Erode.",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "House Shifting and Office Relocation in Salem",
    "description": "Expert house shifting and office relocation services in Salem. Safe, efficient, and professional moving across Tamil Nadu.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Mugunthan Packers & Movers"
    },
    "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu"
    }
};

export default function ShiftingPage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <HeroSection />
            <CategoriesSection />
            <GuaranteeSection />
        </div>
    );
}
