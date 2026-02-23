import { Package, Truck, Home, Warehouse } from "lucide-react";

export const SERVICES_OVERVIEW_CONTENT = {
    tagline: "Professional Moving Services",
    title: {
        main: "SALEM'S MOST ",
        highlight: "RELIABLE MOVERS"
    },
    description: "Top-rated house shifting and office relocation services in Salem. We ensure a safe, stress-free move every time.",
    services: [
        {
            title: "House Shifting in Salem",
            desc: "Expert home relocation services across Fairlands, Hasthampatti, and Suramangalam.",
            icon: Home,
            color: "bg-blue-500/10 text-blue-500",
            link: "/services/house-shifting-salem"
        },
        {
            title: "Office Relocation",
            desc: "Fast and efficient corporate shifting for businesses in Salem and Erode.",
            icon: Warehouse,
            color: "bg-purple-500/10 text-purple-500",
            link: "/services/office-relocation-salem"
        },
        {
            title: "Vehicle Transport",
            desc: "Secure transport for your bike or car from Salem to anywhere in India.",
            icon: Truck,
            color: "bg-orange-500/10 text-orange-500",
            link: "/services/bike-transport-salem"
        },
        {
            title: "Professional Packing",
            desc: "High-quality packing materials to safeguard your belongings during transit.",
            icon: Package,
            color: "bg-teal-500/10 text-teal-500",
            link: "/services/packing"
        }
    ]
};
