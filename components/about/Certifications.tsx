"use client";

import Card from '@/components/ui/Card';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

export default function Certifications() {
    return (
        <section className="py-24 bg-bg-off-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-orange font-semibold tracking-wider uppercase">Industry Standards</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Certified. Verified. Compliant.</h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Maruti Infraeng LLP operates under ISO 9001 standards and complies with all national building codes.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Award,
                            title: "ISO 9001:2015 Certified",
                            description: "Our operations follow strict quality management standards, ensuring consistency and efficiency at every stage."
                        },
                        {
                            icon: ShieldCheck,
                            title: "Safety Compliant",
                            description: "We adhere to all national and international safety regulations, ensuring our structures meet the highest standards."
                        },
                        {
                            icon: CheckCircle,
                            title: "Quality Assurance",
                            description: "Every project undergoes rigorous quality checks at multiple stages — from design and fabrication to installation."
                        }
                    ].map((item, index) => (
                        <Card key={index} className="p-10 border-none bg-white">
                            <div className="w-16 h-16 rounded-full bg-bg-off-white flex items-center justify-center mb-6 text-navy">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {item.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
