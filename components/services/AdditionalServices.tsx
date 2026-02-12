"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const additionalServices = [
    { title: "Visionary Planning Solutions", image: "/images/service-planning.png" },
    { title: "Ingenious Structural Design", image: "/images/service-design.png" },
    { title: "Punctual Steel Structure Delivery", image: "/images/service-delivery.png" },
    { title: "Precision Steel Structure Erection", image: "/images/service-erection.png" }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
        }
    }
};

export default function AdditionalServices() {
    return (
        <section className="py-24 px-6 md:px-10 bg-bg-off-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-[32px] font-semibold text-navy">Core Services</h3>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12"
                >
                    {additionalServices.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
                            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-shadow duration-300"
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-300" />
                            </div>

                            <div className="p-8 flex items-center justify-between">
                                <h4 className="text-xl font-bold text-navy group-hover:text-orange transition-colors duration-300 w-[80%]">
                                    {service.title}
                                </h4>
                                <div className="w-10 h-10 rounded-full bg-bg-off-white flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-all duration-300">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
