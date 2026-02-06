"use client";

import Button from '@/components/ui/Button';
import { RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange to-orange-dark z-0" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-cover opacity-10 z-0" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl md:leading-tight font-bold mb-8"
                >
                    Ready to Build Your Vision?
                    <span className="block text-2xl md:text-3xl font-normal mt-4 opacity-90">Let&apos;s Build the Future.</span>
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
                        className="h-16 px-10 text-lg bg-white text-orange border-none hover:bg-gray-100 hover:text-orange-dark shadow-xl"
                        icon={<RefreshCw className="w-5 h-5 animate-spin-slow" />}
                    >
                        Get a Custom Quote
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
