"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
    {
        id: "01",
        title: "Pre-Engineered Buildings",
        description: "Complete turnkey solutions for industrial sheds, warehouses, and factories designed for durability and speed.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
        link: "/peb"
    },
    {
        id: "02",
        title: "Heavy Structural Steel",
        description: "Precision-engineered steel structures for heavy industries, power plants, and infrastructure projects.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
        link: "/services"
    },
    {
        id: "03",
        title: "Industrial Roofing",
        description: "High-performance roofing systems ensuring leak-proof and weather-resistant protection for your assets.",
        image: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=2070&auto=format&fit=crop",
        link: "/services"
    },
    {
        id: "04",
        title: "Civil Construction",
        description: "Integrated civil works providing strong foundations and flooring for seamless structural erection.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        link: "/services"
    }
];

export default function ServiceCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative bg-ivory-bg text-card-dark py-16 px-6 md:px-12 theme-light">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                {/* Sticky Left Content */}
                <div className="lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-12">
                    <FadeIn>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-black leading-[1.1]">
                            Solutions that <br />
                            <span className="text-gray-400">fit your needs.</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-md mb-12">
                            From concept to commissioning, we deliver engineering excellence across every vertical of industrial construction.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <Link href="/services" className="inline-flex items-center gap-2 text-secondary font-bold text-lg hover:gap-4 transition-all">
                            View all services <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </FadeIn>

                    {/* Decorative Element */}
                    <div className="hidden lg:block absolute bottom-12 left-0 w-24 h-24 border-l-4 border-b-4 border-secondary/20 rounded-bl-3xl" />
                </div>

                {/* Scrollable Right Content */}
                <div className="flex flex-col gap-12 py-12">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100 overflow-hidden"
                            >
                                <div className="flex flex-col gap-6 relative z-10">
                                    <span className="text-secondary font-mono text-lg font-bold">
                                        {service.id}
                                    </span>

                                    <h3 className="text-3xl font-bold text-black group-hover:text-secondary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-500 text-lg leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="h-64 mt-6 rounded-2xl overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
}
