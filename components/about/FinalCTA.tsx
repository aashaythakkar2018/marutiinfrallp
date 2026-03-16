"use client";

import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
    return (
        <section className="py-12 md:py-16 relative overflow-hidden bg-[#1A3A5D]">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl md:leading-tight font-bold mb-8 text-white"
                >
                    Ready to Build Your Vision?
                    <span className="block text-3xl md:text-4xl font-normal mt-4 opacity-90 text-white">Let&apos;s Build the Future.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Button
                        variant="secondary"
                        size="lg"
                        className="h-16 px-10 text-lg bg-white text-[#1A3A5D] border-none hover:bg-gray-100 hover:text-[#152e4a] shadow-xl gap-2 rounded-full font-semibold transition-all duration-300"
                    >
                        Get a Custom Quote
                        <RefreshCw className="w-5 h-5 animate-spin-slow text-[#1A3A5D]" />
                    </Button>

                </motion.div>
            </div>
        </section>
    );
}
