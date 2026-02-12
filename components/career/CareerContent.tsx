"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, TrendingUp, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function CareerContent() {
    const benefits = [
        {
            icon: <Briefcase className="w-5 h-5 text-orange" />,
            title: "Professional Growth",
            description: "Continuous learning and development opportunities."
        },
        {
            icon: <Users className="w-5 h-5 text-orange" />,
            title: "Inclusive Culture",
            description: "A diverse environment that fosters creativity."
        },
        {
            icon: <TrendingUp className="w-5 h-5 text-orange" />,
            title: "Career Advancement",
            description: "Clear paths for promotion and leadership roles."
        },
        {
            icon: <Lightbulb className="w-5 h-5 text-orange" />,
            title: "Innovation Focused",
            description: "Work on cutting-edge engineering projects."
        }
    ];

    return (
        <div className="space-y-8 sticky top-24">
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-navy mb-6"
                >
                    Career At Maruti
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="prose prose-lg text-slate-600 space-y-4"
                >
                    <p>
                        At Maruti Infraeng LLP, our commitment to excellence is fueled by our core values and ethical standards. With expertise in engineering, procurement, and construction, we serve clients both domestically and internationally in the steel building sector.
                    </p>
                    <p>
                        Our diverse and inclusive work environment fosters creativity, enabling us to achieve significant milestones and offering enriching career opportunities across various roles.
                    </p>
                    <p className="font-semibold text-navy">
                        We are seeking individuals whose skills and aspirations align with our dynamic work culture. If you&apos;re driven to excel and eager to expand your horizons, consider joining Maruti Infraeng LLP to unleash your full potential.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid sm:grid-cols-2 gap-4 mt-8"
            >
                {benefits.map((benefit, idx) => (
                    <Card key={idx} className="p-4 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-navy/5 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                            {benefit.icon}
                        </div>
                        <h3 className="font-bold text-navy text-sm mb-1">{benefit.title}</h3>
                        <p className="text-xs text-slate-500">{benefit.description}</p>
                    </Card>
                ))}
            </motion.div>

            {/* 3D Decorative Element Placeholder - keeping it subtle as per request */}
            <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-slate-900 mt-8 hidden md:block group">
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/80 font-bold tracking-widest uppercase text-sm border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                        Join Our Vision
                    </span>
                </div>
            </div>
        </div>
    );
}
