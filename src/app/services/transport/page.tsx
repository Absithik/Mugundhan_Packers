import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/transport/HeroSection';
import { FeaturesSection } from '@/components/sections/transport/FeaturesSection';
import { VehicleSection } from '@/components/sections/transport/VehicleSection';

export const metadata: Metadata = {
    title: "Safe Vehicle Transport Salem | Bike & Car Shifting",
    description: "Secure car and bike transport services in Salem. We provide door-to-door vehicle relocation from Salem to anywhere in India. Insured and safe transit.",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Safe Vehicle Transport Salem",
    "description": "Secure car and bike transport services in Salem. Door-to-door vehicle relocation from Salem to anywhere in India.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Mugunthan Packers & Movers"
    },
    "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu"
    }
};

export default function TransportPage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <HeroSection />
            <FeaturesSection />
            <VehicleSection />
        </div>
    );
}
