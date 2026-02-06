"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden theme-dark">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-dark-bg/60 z-10" /> {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,4,16,0.3),rgba(2,4,16,1))] z-20" /> {/* Gradient Vignette */}

                {/* Chevron Pattern Overlay */}
                <div className="absolute inset-0 z-[15] opacity-20"
                    style={{ backgroundImage: 'radial-gradient(#3A7CA5 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                >
                    {/* Placeholder Industry Video */}
                    <source src="https://cdn.coverr.co/videos/coverr-construction-site-overhead-view-5244/1080p.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-30 max-w-7xl mx-auto px-6 pt-20">
                <div className="max-w-5xl">
                    <FadeIn delay={0.2}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            Premium Industrial Solutions
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1] md:leading-[1]">
                            Your Vision, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                                Built with Precision.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
                            <span className="text-secondary font-bold text-2xl md:text-3xl align-middle mr-2">•</span>
                            Leading the way in Pre-Engineered Buildings and heavy structural steel engineering.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg hover:bg-secondary/90 hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(255,77,0,0.5)]"
                            >
                                Get a Quote
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/services"
                                className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
                            >
                                Our Services
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent z-40" />
        </section>
    )
}
