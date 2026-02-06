import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Heavy Machinery Plant",
        client: "Global Motors Ltd.",
        location: "Pune, Maharashtra",
        area: "45,000 sq. ft.",
        description: "A state-of-the-art PEB facility designed for heavy crane operations (25MT) with high-bay lighting and ventilation systems."
    },
    {
        title: "Pharma Warehouse",
        client: "MediCare Pharma",
        location: "Ahmedabad, Gujarat",
        area: "30,000 sq. ft.",
        description: "Temperature-controlled storage warehouse with puff panel insulation and seamless racking system compatibility."
    },
    {
        title: "Textile Spinning Unit",
        client: "CottonFab India",
        location: "Surat, Gujarat",
        area: "60,000 sq. ft.",
        description: "Wide-span structure designed to minimize column interference for large-scale spinning machinery."
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-dark-bg text-white">
            <Navbar />
            <PageHeader
                title="Case Studies"
                description="In-depth look at our engineering solutions and project execution."
            />

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="space-y-12">
                    {projects.map((project, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="group grid md:grid-cols-2 gap-8 items-center bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-secondary/30 transition-colors">
                                <div className="h-64 md:h-full min-h-[300px] bg-white/5 relative">
                                    <img
                                        src={`https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop`}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 md:p-12">
                                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{project.client}</span>
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{project.location}</span>
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{project.area}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-gray-400 mb-8 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center text-secondary font-semibold hover:text-white transition-colors">
                                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
