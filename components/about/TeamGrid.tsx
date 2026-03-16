"use client";
// Force file update

import { Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const team = [
    {
        name: "Sanjay Vaghasiya",
        role: "Founder & CEO",
        image: "/images/FOUNDER.jpeg",
        quote: "Building with integrity."
    },
    {
        name: "Atulbhai Vaghasiya",
        role: "Director of Operations",
        image: "/images/DIRECTOR.jpeg",
        quote: "Excellence in every detail."
    }
];

export default function TeamGrid() {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-orange font-semibold tracking-wider uppercase">The Team</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">People You Can Rely On.</h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Our strength lies in our people — from skilled engineers to dedicated project managers. Meet the leadership team driving Maruti Infraeng&apos;s success.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {team.map((member, index) => (
                        <Card key={index} className="group cursor-pointer overflow-hidden p-0 border-none bg-gray-50">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
                                <Image
                                    src={member.image}
                                    alt={member.role}
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <button className="text-white bg-[#0077b5] p-2 rounded-lg hover:scale-110 transition-transform">
                                        <Linkedin className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 bg-white border border-t-0 border-gray-100 rounded-b-2xl">
                                <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">&apos;{member.quote}&apos;</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
