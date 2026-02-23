import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/packing/HeroSection';
import { StandardsSection } from '@/components/sections/packing/StandardsSection';
import { ProcessSection } from '@/components/sections/packing/ProcessSection';
import { FAQSection } from '@/components/sections/packing/FAQSection';

export const metadata: Metadata = {
    title: "Professional Packers and Movers in Salem | Safe Shifting",
    description: "Looking for professional packers and movers in Salem? Mugunthan Packers provides expert packing and moving services for households and businesses in Salem city.",
    keywords: ["Professional Packers Salem", "Movers and Packers Salem City", "Safe Packing Salem", "House Shifting Experts Salem"],
    alternates: {
        canonical: 'https://mugunthanpackers.com/services/packing',
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Packing Services in Salem",
    "description": "Premium packing services using high-quality materials for safe house shifting in Salem, Erode, and Namakkal.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Mugunthan Packers & Movers"
    },
    "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Packing Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Household Packing"
                }
            }
        ]
    }
};

export default function PackingPage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <HeroSection />
            <StandardsSection />
            <ProcessSection />
            <FAQSection />
        </div>
    );
}
