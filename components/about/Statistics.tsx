"use client";

import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
    { number: "8000+", label: "Ton Annual Capacity", delay: 0 },
    { number: "2500+", label: "Satisfied Clients", delay: 0.1 },
    { number: "112M+", label: "Annual Turnover", delay: 0.2 },
    { number: "10000+", label: "Projects Completed", delay: 0.3 },
];

function Counter({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
            const suffix = value.replace(/[0-9]/g, '');

            const controls = animate(0, numericValue, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
                    }
                }
            });

            return () => controls.stop();
        }
    }, [isInView, value]);

    return <span ref={ref} className="tabular-nums">0</span>;
}

export default function Statistics() {
    return (
        <section className="py-20 bg-bg-off-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, delay: stat.delay }}
                            className="text-center group"
                        >
                            <h3 className="text-5xl md:text-6xl font-bold font-display text-orange mb-2 group-hover:text-orange-dark transition-colors">
                                <Counter value={stat.number} />
                            </h3>
                            <p className="text-navy font-medium tracking-wide border-t border-gray-200 inline-block pt-4 group-hover:border-orange transition-colors">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
