"use client";

import FadeIn from "@/components/FadeIn";
import { Shield, Target, Lightbulb, Users } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Our Vision",
        description: "To be the beacon of reliability and innovation in the Pre-Engineered Building industry worldwide. We are not just setting standards; we are redefining them."
    },
    {
        icon: Shield,
        title: "Our Mission",
        description: "Redefining steel construction with innovation, reliability, and sustainability. We create high-quality buildings that exceed expectations."
    },
    {
        icon: Lightbulb,
        title: "Craftsmanship",
        description: "Every structure we build reflects superior craftsmanship and meticulous attention to detail, meeting the highest standards of quality and durability."
    },
    {
        icon: Users,
        title: "Reliability",
        description: "A steadfast dedication to fulfilling commitments. We envision a future where trust meets innovation, and excellence knows no bounds."
    }
];

export default function ValuesSection() {
    return (
        <section className="py-24 bg-dark-bg text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
                        <p className="text-gray-400 text-lg">The principles that guide every structure we raise.</p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((item, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="h-full p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
                                <div className="mb-6 inline-flex p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
