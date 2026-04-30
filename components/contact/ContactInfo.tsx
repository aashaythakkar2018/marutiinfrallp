"use client";

import React from 'react';
import { MapPin, Phone, Clock, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactInfo() {
    return (
        <div className="space-y-12">
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-navy mb-6"
                >
                    Let&apos;s Build Something <span className="text-navy">Great Together.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-slate-600 leading-relaxed max-w-lg"
                >
                    Whether you have a question about our services, pricing, or want to discuss a potential project, our team is ready to help.
                </motion.p>
            </div>

            {/* Company Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl"
            >
                <Image
                    src="/images/company-aerial-view.jpg"
                    alt="Maruti Infraeng LLP - Aerial View"
                    fill
                    className="object-cover"
                />
            </motion.div>

            <div className="space-y-8">
                {/* Office Location */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-5"
                >
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-navy shrink-0">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-2">Our Head Office</h3>
                        <p className="text-slate-600 leading-relaxed mb-3">
                            Block No. 189-190, Velachha, Mangrol, <br />
                            Surat - 394405, Gujarat, India.
                        </p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            className="text-navy hover:text-navy transition-colors text-sm font-semibold flex items-center gap-1 group"
                        >
                            View on Google Maps
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </motion.div>

                {/* Contact Details */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex gap-5"
                >
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-navy shrink-0">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-2">Phone & Email</h3>
                        <div className="space-y-2">
                            <a href="tel:+919998053911" className="block text-slate-600 hover:text-navy transition-colors">
                                +91 99980 53911
                            </a>
                            <a href="mailto:info@marutiinfraeng.co.in" className="block text-slate-600 hover:text-navy transition-colors">
                                info@marutiinfraeng.co.in
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Working Hours */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-5"
                >
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-navy shrink-0">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-2">Working Hours</h3>
                        <p className="text-slate-600">Monday - Saturday</p>
                        <p className="text-navy font-medium">9:00 AM - 6:00 PM</p>
                    </div>
                </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-8 border-t border-slate-200"
            >
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Follow Us</h4>
                <div className="flex gap-4">
                    <a
                        href="https://www.facebook.com/marutinfraeng/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-navy hover:bg-navy hover:border-navy hover:text-white transition-all duration-300"
                    >
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.instagram.com/maruti_infraengllp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-navy hover:bg-navy hover:border-navy hover:text-white transition-all duration-300"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/106003480/admin/dashboard/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-navy hover:bg-navy hover:border-navy hover:text-white transition-all duration-300"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.youtube.com/@marutinfraindia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-navy hover:bg-navy hover:border-navy hover:text-white transition-all duration-300"
                    >
                        <Youtube className="w-5 h-5" />
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
