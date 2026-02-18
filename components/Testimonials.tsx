"use client"

import FadeIn from './FadeIn'
import { Card } from '@/components/ui/card'

interface Testimonial {
    id: string
    title: string
    videoUrl: string
}

const testimonials: Testimonial[] = [
    {
        id: "testimonial-1",
        title: "Maruti Infraeng Testimonial 1",
        videoUrl: "https://www.youtube.com/embed/YlUthMUU-RQ",
    },
    {
        id: "testimonial-2",
        title: "Maruti Infraeng Testimonial 2",
        videoUrl: "https://www.youtube.com/embed/Q7zjVc-YvDo",
    },
    {
        id: "testimonial-3",
        title: "Maruti Infraeng Testimonial 3",
        videoUrl: "https://www.youtube.com/embed/ojuVR59AtRg",
    },
    {
        id: "testimonial-4",
        title: "Maruti Infraeng Testimonial 4",
        videoUrl: "https://www.youtube.com/embed/9CJIyx5674I",
    }
]

export default function Testimonials() {
    return (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
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
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={testimonial.id} delay={index * 0.2}>
                            <Card className="overflow-hidden border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500">
                                {/* YouTube Video Embed */}
                                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                                    <iframe
                                        className="w-full h-full"
                                        src={testimonial.videoUrl}
                                        title={testimonial.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                            </Card>
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
