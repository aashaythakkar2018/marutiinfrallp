"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { label: "Years of Excellence", value: "25+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Square Feet Built", value: "10M+" },
    { label: "Client Retention", value: "98%" },
];

export default function StatsGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 bg-ivory-bg">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-6 bg-white rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</h3>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
