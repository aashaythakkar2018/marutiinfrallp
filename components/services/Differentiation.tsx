"use client";

import { motion } from 'framer-motion';
import { Shield, Factory, MapPin, Network, TrendingUp } from 'lucide-react';

const features = [
    {
        icon: Shield,
        color: "#FF6B35",
        title: "ISO 9001:2015 Certified",
        description: "Quality management processes & time-definite performance."
    },
    {
        icon: Factory,
        color: "#3A7CA5",
        title: "8000+ Ton Annual Capacity",
        description: "State-of-the-art manufacturing facilities with advanced machinery for high-volume projects."
    },
    {
        icon: MapPin,
        color: "#FF6B35",
        title: "Pan-India Operations",
        description: "Strategic location in Surat ensures efficient delivery across India."
    },
    {
        icon: Network,
        color: "#3A7CA5",
        title: "Client-Centric Service",
        description: "Dedicated support team and real-time project tracking for complete transparency."
    },
    {
        icon: TrendingUp,
        color: "#FF6B35",
        title: "Scalable Solutions",
        description: "Modular service plans adaptable to projects of any size and complexity."
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number] // Expo ease
        }
    }
};

export default function Differentiation() {
    return (
        <section className="py-24 px-6 md:px-10 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-text-tertiary font-medium tracking-widest uppercase text-sm">Fueling every move</span>
                    <h3 className="text-[32px] font-semibold text-navy mt-3">What Sets Us Apart:</h3>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mt-16"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 12px 40px rgba(26,58,92,0.12)",
                                borderColor: "#3A7CA5",
                                transition: { duration: 0.3, ease: 'easeOut' }
                            }}
                            className="flex flex-col items-center text-center p-8 bg-bg-off-white rounded-2xl border border-gray-100 transition-colors duration-300 group cursor-default"
                        >
                            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                <feature.icon size={48} color={feature.color} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-lg font-semibold text-navy mb-3">
                                {feature.title}
                            </h4>
                            <p className="text-sm text-text-secondary leading-[1.6]">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
