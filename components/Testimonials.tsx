"use client"

import { useState } from 'react'
import { Play } from 'lucide-react'
import FadeIn from './FadeIn'
import { Card } from '@/components/ui/card'

interface Testimonial {
    id: string
    title: string
    videoId: string
}

const testimonials: Testimonial[] = [
    {
        id: "testimonial-1",
        title: "Maruti Infraeng Testimonial 1",
        videoId: "Q7zjVc-YvDo",
    },
    {
        id: "testimonial-2",
        title: "Maruti Infraeng Testimonial 2",
        videoId: "ojuVR59AtRg",
    },
    {
        id: "testimonial-3",
        title: "Maruti Infraeng Testimonial 3",
        videoId: "9CJIyx5674I",
    }
]

function VideoCard({ testimonial }: { testimonial: Testimonial }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`)

    return (
        <Card className="relative z-10 overflow-hidden border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="relative aspect-video bg-slate-900 overflow-hidden">
                {!isPlaying ? (
                    <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                        aria-label={`Play ${testimonial.title}`}
                    >
                        {/* Thumbnail */}
                        <img
                            src={imgSrc}
                            alt={testimonial.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            onError={() => {
                                // Fallback to high quality if max resolution is not available
                                if (imgSrc.includes('maxresdefault')) {
                                    setImgSrc(`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`)
                                }
                            }}
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                        {/* Play Button */}
                        <div className="relative z-20 w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 fill-current ml-1" />
                        </div>
                    </button>
                ) : (
                    <iframe
                        className="w-full h-full relative z-20"
                        src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        title={testimonial.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </div>
        </Card>
    )
}

export default function Testimonials() {
    return (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white relative z-0">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
                            Client Stories
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Hear directly from our clients about their experience working with Maruti Infraeng LLP
                        </p>
                        <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full" />
                    </div>
                </FadeIn>

                {/* Video Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={testimonial.id} delay={index * 0.2}>
                            <VideoCard testimonial={testimonial} />
                        </FadeIn>
                    ))}
                </div>

                {/* Optional: Trust Indicators */}
                <FadeIn delay={0.4}>
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-full shadow-md border border-slate-100">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary">100+</div>
                                <div className="text-sm text-slate-600">Happy Clients</div>
                            </div>
                            <div className="w-px h-12 bg-slate-200" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary">500+</div>
                                <div className="text-sm text-slate-600">Projects Completed</div>
                            </div>
                            <div className="w-px h-12 bg-slate-200" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary">15+</div>
                                <div className="text-sm text-slate-600">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
