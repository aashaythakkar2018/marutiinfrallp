import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import { Building2, Hammer, Factory, Settings } from 'lucide-react';

const services = [
    {
        title: "Pre-Engineered Buildings (PEB)",
        description: "Complete steel building systems that are pre-designed and pre-fabricated. Ideal for factories, warehouses, and showrooms.",
        icon: Building2,
        features: ["Fast Construction", "Large Clear Spans", "Cost Effective", "Architectural Versatility"]
    },
    {
        title: "Structural Steel Fabrication",
        description: "Heavy steel structures for industrial plants, refineries, and metro stations. We handle complex geometries with ease.",
        icon: Hammer,
        features: ["Heavy Girders", "Pipe Racks", "Equipment Supports", "High Capacity Cranes"]
    },
    {
        title: "Industrial Trusses",
        description: "Wide-span roofing solutions for stadiums, auditoriums, and airport hangers using tubular or angular sections.",
        icon: Factory,
        features: ["Aesthetic Designs", "High Strength-to-Weight Ratio", "Corrosion Resistant", "Modular Assembly"]
    },
    {
        title: "Erection & Installation",
        description: "Professional on-site installation services with a focus on safety and speed.",
        icon: Settings,
        features: ["Certified Riggers", "Crane Services", "Safety Compliance", "Site Management"]
    }
];

export default function Services() {
    return (
        <div className="min-h-screen bg-dark-bg text-white">
            <Navbar />
            <PageHeader
                title="Our Services"
                description="Comprehensive engineering solutions tailored for the industrial sector. From design to commissioning."
            />

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-12">
                    {services.map((service, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="group p-8 rounded-2xl bg-dark-card border border-white/5 hover:border-secondary/50 transition-colors h-full">
                                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
