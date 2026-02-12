"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const expertiseItems = [
    "Tailored building designs to meet specific project requirements.",
    "State-of-the-art manufacturing facilities equipped with cutting-edge technology.",
    "Comprehensive project planning and execution from concept to completion.",
    "Expert construction teams with extensive experience in metal building systems.",
    "Eco-friendly design and construction practices to minimize environmental impact.",
    "Dedicated customer service team for ongoing support and maintenance."
];

export default function KeyExpertise() {
    return (
        <section className="py-24 px-6 md:px-10 bg-bg-off-white">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-orange font-medium tracking-widest uppercase text-sm">Key Expertise</span>
                    <h2 className="text-[32px] md:text-[56px] font-bold text-navy mt-3 leading-[1.2]">
                        Core Capabilities
                    </h2>
                    <p className="text-lg text-text-tertiary mt-4">
                        Delivering tailored steel construction solutions to build your future.
                    </p>

                    <div className="mt-8">
                        <Link href="/contact">
                            <Button
                                variant="default"
                                className="mt-6 bg-white text-orange hover:bg-gray-100"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-16">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex gap-4 items-start"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <Check className="w-5 h-5 text-steel" strokeWidth={3} />
                            </div>
                            <p className="text-base text-text-primary leading-[1.7] font-regular">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
