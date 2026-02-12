"use client";

import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

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
                            Survey No. 222, Plot No. 9, <br />
                            Veraval (Shapar), Rajkot - 360024, <br />
                            Gujarat, India.
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
                            <a href="tel:+919876543210" className="block text-slate-600 hover:text-navy transition-colors">
                                +91 98765 43210
                            </a>
                            <a href="mailto:info@marutiinfra.com" className="block text-slate-600 hover:text-navy transition-colors">
                                info@marutiinfra.com
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
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <a
                            key={i}
                            href="#"
                            className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-navy hover:bg-navy hover:border-navy hover:text-white transition-all duration-300"
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
