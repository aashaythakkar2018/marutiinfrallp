"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';

const timelineData = [
    {
        year: "2010",
        title: "Foundation of Excellence",
        description: "Maruti Infraeng LLP was founded in Surat with a clear vision: to revolutionize the Pre-Engineered Building industry in India. Starting with a small team of dedicated engineers and a commitment to quality, we laid the foundation for what would become one of Gujarat's most trusted steel construction companies.",
        image: "/placeholder-factory.jpg"
    },
    {
        year: "2015",
        title: "Expanding Horizons",
        description: "After establishing strong roots in Gujarat, we expanded our manufacturing capacity and invested in state-of-the-art machinery. This period marked our entry into large-scale industrial projects, serving clients across multiple states. Our 8000+ ton annual capacity began to take shape.",
        image: "/placeholder-expansion.jpg"
    },
    {
        year: "2018",
        title: "National Recognition",
        description: "Maruti Infraeng earned recognition as one of the top three steel construction companies in India. We achieved ISO certification, reflecting our commitment to international quality standards. Our portfolio grew to include projects for major industries.",
        image: "/placeholder-award.jpg"
    },
    {
        year: "2022",
        title: "Technology & Innovation",
        description: "We invested heavily in cutting-edge design software and automated fabrication systems. Our engineering team grew to include specialists in structural analysis, detailing, and project management. Real-time tracking and smart project management systems were implemented.",
        image: "/placeholder-tech.jpg"
    },
    {
        year: "2025",
        title: "Future-Forward Leadership",
        description: "Today, Maruti Infraeng LLP stands as a beacon of reliability and innovation. Having completed 10,000+ projects with a 112M+ annual turnover, we continue to push boundaries. Our focus remains on sustainable construction and customer satisfaction.",
        image: "/placeholder-future.jpg"
    }
];

export default function Timeline() {
    const [activeYear, setActiveYear] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress of the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Update active year based on scroll progress
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Divide progress into segments (one for each year)
        // We use a slightly smaller max range to ensure the last item stays active at the very end
        const segment = 1 / timelineData.length;
        const index = Math.min(
            Math.floor(latest / segment),
            timelineData.length - 1
        );
        if (index !== activeYear) {
            setActiveYear(index);
        }
    });

    // Scroll progress bar height
    const scrollHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Auto-scroll handler for clicks (helper function)
    const scrollToYear = (index: number) => {
        if (!containerRef.current) return;
        const sectionHeight = containerRef.current.scrollHeight; // Total scrollable height
        const viewportHeight = window.innerHeight; // Height of one screen
        const usefulScrollHeight = sectionHeight - viewportHeight; // The actual scroll distance available

        const segment = usefulScrollHeight / timelineData.length;
        const targetScroll = (segment * index) + (segment * 0.5) + containerRef.current.offsetTop;

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    };

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-bg-off-white">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">

                    {/* Check if mobile? If so, we might want simpler behavior, but stacking sticky works too */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 h-[80vh] lg:h-auto items-center">

                        {/* Left Side: Year List & Progress */}
                        <div className="relative flex flex-row lg:flex-col lg:w-1/4 gap-8 lg:gap-4 overflow-x-auto lg:overflow-visible w-full lg:w-auto pb-4 lg:pb-0 scrollbar-hide shrink-0">
                            {/* Animated Vertical Line (Desktop only) */}
                            <div className="hidden lg:block absolute left-[-20px] top-0 bottom-0 w-1 bg-gray-200 rounded-full">
                                <motion.div
                                    style={{ height: scrollHeight }}
                                    className="w-full bg-orange rounded-full origin-top"
                                />
                            </div>

                            {timelineData.map((item, index) => (
                                <button
                                    key={item.year}
                                    onClick={() => scrollToYear(index)}
                                    className={cn(
                                        "text-left text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-500 flex items-center gap-4 shrink-0 font-bebas tracking-wide",
                                        activeYear === index
                                            ? "text-orange scale-110 translate-x-4 opacity-100"
                                            : "text-gray-300 hover:text-gray-400 scale-100 opacity-40 blur-[1px]"
                                    )}
                                >
                                    {item.year}
                                    {/* Mobile Dot Indicator */}
                                    <div className={cn(
                                        "lg:hidden h-2 w-2 rounded-full transition-colors",
                                        activeYear === index ? "bg-orange" : "bg-transparent"
                                    )} />
                                </button>
                            ))}
                        </div>

                        {/* Right Side: Content Display */}
                        <div className="lg:w-3/4 relative min-h-[400px] w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeYear}
                                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                    className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
                                >
                                    {/* Image Card */}
                                    <div className="order-2 md:order-1 relative aspect-[4/3] md:aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl skew-y-1 ring-1 ring-black/5">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-navy/5 to-transparent z-10" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 font-bold text-xl uppercase tracking-widest">
                                            {/* Simulate Image */}
                                            Image: {timelineData[activeYear].year}
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="order-1 md:order-2 space-y-6">
                                        <motion.h3
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-3xl md:text-4xl font-bold text-navy"
                                        >
                                            {timelineData[activeYear].title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-lg text-gray-600 leading-relaxed"
                                        >
                                            {timelineData[activeYear].description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
