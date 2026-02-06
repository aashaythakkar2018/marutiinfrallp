"use client";

import { MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FacilitySection() {
    return (
        <section className="py-24 bg-navy text-white relative overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('/grid-pattern.svg')] bg-cover" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-white/50 tracking-wider uppercase">Our Headquarters</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">Where Innovation Meets Precision</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Location Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel p-8 md:p-12 rounded-3xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                                {/* Indian Flag simplified */}
                                <div className="w-8 h-5 flex flex-col">
                                    <div className="h-1/3 bg-[#FF9933] w-full" />
                                    <div className="h-1/3 bg-white w-full flex justify-center items-center"><div className="w-1 h-1 rounded-full bg-navy" /></div>
                                    <div className="h-1/3 bg-[#138808] w-full" />
                                </div>
                            </div>
                            <span className="text-white/70 font-medium">Gujarat, India</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold mb-2">Surat, Gujarat</h3>
                        <p className="text-lg text-white/60 mb-8">Manufacturing Hub & Headquarters</p>

                        <p className="text-gray-300 leading-relaxed mb-8">
                            Located in the industrial heart of Gujarat, our state-of-the-art facility in Surat spans across modern manufacturing units equipped with advanced machinery. This strategic location allows us to efficiently serve clients across India.
                        </p>

                        <div className="flex items-start gap-3 mb-8 text-sm text-gray-400">
                            <MapPin className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                            <p>
                                Block No. 189-190, Velachha, Mangrol,<br />
                                Surat - 394405
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "8000+ Ton Annual Capacity",
                                "Advanced Fabrication Units",
                                "Quality Testing Labs",
                                "ISO Certified Facility"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-white/80">
                                    <CheckCircle className="w-5 h-5 text-steel" />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] w-full bg-white/5 rounded-3xl overflow-hidden border border-white/10 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent z-10" />
                        <div className="absolute bottom-8 left-8 z-20">
                            <p className="text-white font-bold text-xl">State-of-the-Art Machinery</p>
                        </div>
                        {/* Placeholder for Facility Image */}
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-white/20 text-2xl font-bold">
                            Facility Image
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
