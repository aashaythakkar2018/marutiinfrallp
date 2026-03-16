"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const heroVariants = {
    headline: {
        initial: { opacity: 0, y: 80, scale: 0.95 },
        animate: {
            opacity: 1, y: 0, scale: 1,
            transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        }
    },
    subtitle: {
        initial: { opacity: 0, y: 40 },
        animate: {
            opacity: 1, y: 0,
            transition: { duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
        }
    },
    image: {
        initial: { scale: 1.2, opacity: 0 },
        animate: {
            scale: 1, opacity: 1,
            transition: { duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        }
    }
};

export default function ServicesHero() {
    return (
        <section className="relative min-h-[700px] h-screen w-full flex flex-col lg:flex-row bg-bg-off-white overflow-hidden">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 order-2 lg:order-1 bg-bg-off-white z-10">
                <div className="max-w-[600px]">
                    <motion.h1
                        variants={heroVariants.headline}
                        initial="initial"
                        animate="animate"
                        className="text-[48px] md:text-[64px] lg:text-[96px] font-bold text-navy leading-[1.1]"
                    >
                        Tailored Steel Solutions
                    </motion.h1>

                    <motion.p
                        variants={heroVariants.subtitle}
                        initial="initial"
                        animate="animate"
                        className="text-lg md:text-xl text-gray-500 mt-6 md:mt-8 font-normal"
                    >
                        Our Services
                    </motion.p>

                    <motion.h3
                        variants={heroVariants.subtitle}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.7 }}
                        className="text-[24px] md:text-[32px] font-semibold text-text-primary mt-8 md:mt-10"
                    >
                        For a Modern World.
                    </motion.h3>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 h-[40vh] lg:h-full relative order-1 lg:order-2">
                <motion.div
                    variants={heroVariants.image}
                    initial="initial"
                    animate="animate"
                    className="w-full h-full relative"
                >
                    <Image
                        src="/images/services-new-hero.jpg" // Updated to the new uploaded image
                        alt="Steel structure manufacturing"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay for smooth blending */}
                    <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-bg-off-white/80 via-transparent to-transparent lg:from-bg-off-white lg:via-transparent lg:to-transparent z-10 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
