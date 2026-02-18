"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { WorldMap } from '@/components/ui/world-map';
import Image from 'next/image';

export default function LocationMap() {
    return (
        <div className="relative w-full bg-gray-50 rounded-3xl overflow-hidden border border-slate-200 shadow-inner group">

            <WorldMap
                lineColor="#1A3A5C"
                dots={[
                    {
                        start: { lat: 51.5074, lng: -0.1278 }, // London
                        end: { lat: 21.4365, lng: 73.0645 }, // Surat (Velachha)
                    },
                    {
                        start: { lat: 25.2048, lng: 55.2708 }, // Dubai
                        end: { lat: 21.4365, lng: 73.0645 }, // Surat (Velachha)
                    },
                    {
                        start: { lat: 1.3521, lng: 103.8198 }, // Singapore
                        end: { lat: 21.4365, lng: 73.0645 }, // Surat (Velachha)
                    },
                    {
                        start: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                        end: { lat: 21.4365, lng: 73.0645 }, // Surat (Velachha)
                    },
                    {
                        start: { lat: 40.7128, lng: -74.0060 }, // New York
                        end: { lat: 21.4365, lng: 73.0645 }, // Surat (Velachha)
                    },
                ]}
            />

            {/* Pin and Card Container - Preserved for specific location details */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute pointer-events-auto"
                    // Approximate position for Surat on map
                    style={{ top: '38%', left: '70%' }}
                >
                    {/* Floating Address Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 }} // Delayed to appear after map animation
                        className="absolute top-6 left-1/2 -translate-x-1/2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-20 pointer-events-auto"
                    >
                        <div className="w-full h-24 bg-slate-100 rounded-lg mb-3 relative overflow-hidden group/card">
                            <Image
                                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
                                alt="Factory Location - Surat, Gujarat"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h4 className="font-bold text-navy text-lg mb-1">Surat, Gujarat</h4>
                        <p className="text-sm text-slate-500 font-medium mb-3">Headquarters & Manufacturing</p>

                        <div className="space-y-2">
                            <div className="flex items-start gap-2 text-xs text-slate-600">
                                <MapPin className="w-3.5 h-3.5 mt-0.5 text-navy shrink-0" />
                                <p>Block No. 189-190, Velachha, Mangrol, Surat - 394405</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Legend/Title Overlay */}
            <div className="absolute top-8 left-8 z-10 pointer-events-none">
                <p className="text-xs font-bold tracking-widest text-slate-400 mb-1 uppercase">Global Reach, Local Strength</p>
                <h3 className="text-3xl font-bold text-navy">Reach Us</h3>
                <p className="text-slate-500 text-sm mt-2">Operating from our strategic hub in Gujarat.</p>
            </div>
        </div>
    );
}
