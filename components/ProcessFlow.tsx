"use client";

import FadeIn from './FadeIn';
import { Lightbulb, PenTool, Factory, ShieldCheck } from 'lucide-react';

const steps = [
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Consultation & Planning",
        description: "We analyze your requirements to define structural needs, optimizing cost and efficiency from day one.",
        cols: "md:col-span-2",
        bg: "bg-white"
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        title: "Design & Engineering",
        description: "Advanced 3D modeling and structural analysis to ensure safety standards and precise fabrication.",
        cols: "md:col-span-1",
        bg: "bg-gray-50",
        dark: true
    },
    {
        icon: <Factory className="w-8 h-8" />,
        title: "Fabrication",
        description: "State-of-the-art manufacturing with automated machinery ensuring millimeter-level precision.",
        cols: "md:col-span-1",
        bg: "bg-gray-50"
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Erection & Handover",
        description: "Safe and swift on-site installation by our expert teams, delivering turnkey projects on schedule.",
        cols: "md:col-span-2",
        bg: "bg-white"
    }
];

export default function ProcessFlow() {
    return (
        <section className="py-16 bg-ivory-bg text-card-dark theme-light border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">How We Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            Seamless Execution <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">End-to-End</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
                    {steps.map((step, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1} className={`${step.cols}`}>
                            <div className={`${step.bg} h-full p-8 rounded-3xl border border-gray-100 hover:border-secondary/30 transition-all hover:shadow-lg group flex flex-col justify-between`}>
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
                                    <p className="text-gray-500 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <span className="text-6xl font-black text-gray-100 group-hover:text-secondary/5 transition-colors select-none">
                                        0{idx + 1}
                                    </span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
