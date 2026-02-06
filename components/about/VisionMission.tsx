"use client";

import Card from '@/components/ui/Card';
import { Target, Flag, Award } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function VisionMission() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-orange font-bold tracking-widest uppercase text-sm">Vision & Mission</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">What Drives Us.</h2>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Vision */}
                    <FadeIn delay={0.2} className="h-full">
                        <Card className="p-8 md:p-10 h-full flex flex-col items-start bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-[2rem]">
                            <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mb-8 text-orange">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We envision being the beacon of reliability and innovation in the Pre-Engineered Building industry worldwide. Through exceptional service, cutting-edge quality, and cost-effective solutions, we&apos;re not just setting standards; we&apos;re redefining them.
                            </p>
                        </Card>
                    </FadeIn>

                    {/* Mission */}
                    <FadeIn delay={0.3} className="h-full">
                        <Card className="p-8 md:p-10 h-full flex flex-col items-start bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-[2rem]">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 text-secondary">
                                <Flag className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We&apos;re not just building structures; we&apos;re sculpting the future. Our mission is to redefine steel construction with innovation, reliability, and sustainability. Through seamless execution and cutting-edge technology, we create high-quality buildings that exceed expectations.
                            </p>
                        </Card>
                    </FadeIn>

                    {/* Values */}
                    <FadeIn delay={0.4} className="h-full">
                        <Card className="p-8 md:p-10 h-full flex flex-col items-start bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-[2rem]">
                            <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 text-navy">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4">Our Values</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every structure we build reflects superior craftsmanship and meticulous attention to detail, meeting the highest standards of quality and durability. Our visionary leadership is committed to steering the company towards a future where innovation meets reliability.
                            </p>
                        </Card>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
