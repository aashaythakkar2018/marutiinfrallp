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


        </section>
    )
}
