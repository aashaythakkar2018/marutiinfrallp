"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <iframe
                    src="https://www.youtube.com/embed/YlUthMUU-RQ?autoplay=1&mute=1&controls=0&loop=1&playlist=YlUthMUU-RQ&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&vq=hd1080&playsinline=1"
                    className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full min-h-[56.25vw] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
                <FadeIn delay={0.2}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-md shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        Premium Industrial Solutions
                    </div>
                </FadeIn>

                <div className="max-w-5xl mx-auto">
                    <FadeIn delay={0.4}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                            Your Vision, <br />
                            <span className="text-white">
                                Built with Precision.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
                            Leading the way in Pre-Engineered Buildings and heavy structural steel engineering.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-10 py-5 bg-orange-600 text-white rounded-full font-bold text-lg hover:bg-orange-700 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                            >
                                Get a Quote
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/services"
                                className="w-full sm:w-auto px-10 py-5 bg-black/30 border border-white/30 text-white rounded-full font-bold text-lg hover:bg-black/40 hover:border-white/50 transition-all backdrop-blur-md shadow-lg"
                            >
                                Our Services
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
