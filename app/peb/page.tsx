"use client"

import Navbar from "@/components/Navbar"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import PageHeader from "@/components/PageHeader"
import FadeIn from "@/components/FadeIn"
import { Gallery6 } from "@/components/ui/gallery6"
import { CheckCircle2, Box, Layers, Shield, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function PEB() {
    const pebFeatures = [
        {
            title: "Main Frame",
            description: "Rigid steel frames of the building are mainly considered as the Main Frames of PEB. Maruti PEB rigid frame comprises of tapered columns and tapered rafters (the fabricated tapered sections are referred to as built-up members).",
            icon: Box,
        },
        {
            title: "Secondary Structural",
            description: "Secondary members are load-carrying members suitable to ensure the stability of the building against forces from all directions. These primarily include Purlins and Girts, Eave Struts, Rod Bracing and Open Steel Web joists.",
            icon: Layers,
        },
        {
            title: "Roof Wall",
            description: "Elevate your building's aesthetics and performance with Maruti Infraeng LLP's cutting-edge roof wall solutions. Designed for durability, energy efficiency, and architectural appeal, our roof wall systems offer unmatched protection and visual impact.",
            icon: Shield,
        },
        {
            title: "Building Additions",
            description: "Discover the latest expansion in Maruti Infraeng LLP's portfolio with our newest building addition. Designed with innovation and crafted with precision, our addition promises to redefine space, elevate functionality, and inspire creativity.",
            icon: CheckCircle2,
        },
        {
            title: "Accessories",
            description: "Enhance your spaces with Maruti Infraeng LLP's curated collection of accessories. From stylish furnishings to practical fixtures, our accessories are meticulously selected to complement and elevate your environment.",
            icon: ArrowRight,
        },
    ]

    const galleryItems = [
        {
            id: "peb-1",
            title: "PRE ENGINEERED BUILDINGS",
            summary: "Maruti Infraeng LLP is dedicated to adhering to the latest editions, supplements, and addenda of the following U.S. and Indian codes during the analysis, design, and fabrication of Pre-Engineered Building (PEB)",
            url: "#",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: "peb-2",
            title: "MAIN FRAME",
            summary: "Rigid steel frames of the building are mainly considered as the Main Frames of PEB. Maruti PEB rigid frame comprises of tapered columns and tapered rafters (the fabricated tapered sections are referred to as built-up members).",
            url: "#",
            image: "https://images.unsplash.com/photo-1590642916589-592dff5c9ba1?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: "peb-3",
            title: "SECONDARY STRUCTURAL",
            summary: "Secondary members are load-carrying members suitable to ensure the stability of the building against forces from all directions. These primarily include Purlins and Girts, Eave Struts, Rod Bracing and Open Steel Web joists.",
            url: "#",
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
        },
        {
            id: "peb-4",
            title: "ROOF WALL",
            summary: "Elevate your building's aesthetics and performance with Maruti Infraeng LLP's cutting-edge roof wall solutions. Designed for durability, energy efficiency, and architectural appeal, our roof wall systems offer unmatched protection and visual impact",
            url: "#",
            image: "https://images.unsplash.com/photo-1621257449629-6880df0a4239?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: "peb-5",
            title: "BUILDING ADDITIONS",
            summary: "Discover the latest expansion in Maruti Infraeng LLP's portfolio with our newest building addition. Designed with innovation and crafted with precision, our addition promises to redefine space, elevate functionality, and inspire creativity",
            url: "#",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
        },
        {
            id: "peb-6",
            title: "ACCESSORIES",
            summary: "Enhance your spaces with Maruti Infraeng LLP's curated collection of accessories. From stylish furnishings to practical fixtures, our accessories are meticulously selected to complement and elevate your environment.",
            url: "#",
            image: "https://images.unsplash.com/photo-1505670868843-a6e3523588f0?q=80&w=2067&auto=format&fit=crop",
        }
    ]

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />
            <PageHeader
                title="Pre-Engineered Buildings"
                description="The modern solution for industrial construction. Speed, economy, and versatility combined."
            />

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <FadeIn>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose PEB?</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Pre-Engineered Buildings (PEBs) are steel structures built over a structural concept of primary members, secondary members, and the cover sheeting connected to each other. The structural members are custom designed to be lighter in weight as well as high in strength.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Maruti Infra Engineering specializes in designing PEBs that optimize material usage, reducing costs while maintaining structural integrity for extreme manufacturing conditions.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                                    <div className="text-3xl font-bold text-secondary mb-1">30%</div>
                                    <div className="text-sm text-slate-500">Faster Construction</div>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                                    <div className="text-3xl font-bold text-secondary mb-1">20%</div>
                                    <div className="text-sm text-slate-500">Cost Savings</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="h-[400px] rounded-2xl bg-slate-100 border border-slate-200 relative overflow-hidden shadow-lg">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=1997&auto=format&fit=crop')] bg-cover bg-center" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <div className="text-xl font-bold">Structural Excellence</div>
                                <div className="text-sm text-white/80">Engineered for durability</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Components</h2>
                        <p className="text-slate-600">
                            Our PEB systems are comprised of high-quality components designed to work together seamlessly for optimal performance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pebFeatures.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <Card className="h-full border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                                        <CardHeader>
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-slate-600 leading-relaxed">
                                                {feature.description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="bg-slate-50">
                <Gallery6
                    heading="Our PEB Projects"
                    items={galleryItems}
                    demoUrl="/projects"
                />
            </div>

            <StackedCircularFooter />
        </div>
    )
}
