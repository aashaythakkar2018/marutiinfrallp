"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';
import Image from 'next/image';

export default function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen min-h-[700px] bg-navy overflow-hidden flex items-center justify-center">
            {/* Background Parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-navy/60 z-10" />
                {/* Hero Background Image */}
                <Image
                    src="/images/About us HERO Image.JPG"
                    alt="Maruti Infraeng LLP - About Us"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy z-[5]" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center text-white">
                <div className="flex flex-col items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 80, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-2">
                            Driven by Purpose.
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 0.7, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-xl md:text-2xl font-light tracking-wide uppercase"
                    >
                        About Us
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9, type: "spring", stiffness: 200 }}
                        className="my-8"
                    >
                        <button className="w-20 h-20 rounded-full bg-orange/20 backdrop-blur-sm border border-orange/50 flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                            <div className="w-14 h-14 rounded-full bg-orange flex items-center justify-center shadow-lg shadow-orange/30 group-hover:shadow-orange/50 transition-shadow">
                                <Play className="w-6 h-6 text-white ml-1 fill-white" />
                            </div>
                        </button>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold"
                    >
                        Built on Trust.
                    </motion.h2>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </div>
    );
}
