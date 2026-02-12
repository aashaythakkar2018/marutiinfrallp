"use client"

import Navbar from "@/components/Navbar"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import PageHeader from "@/components/PageHeader"
import FadeIn from "@/components/FadeIn"
import Image from "next/image"

// Helper function to generate image paths
const getImages = (folder: string, count: number, extension: 'jpeg' | 'png' | 'mixed' = 'jpeg') => {
    return Array.from({ length: count }, (_, i) => {
        // Handle specific naming or mixed extensions if necessary
        // Based on file listing, we have mixed extensions for Projects and Complete Solutions
        // Simple heuristic: try both or just hardcode for robustness if needed.
        // For this task, we will construct the paths assuming standard naming 1..N
        // We will filter out in component if needed, or better, just list them explicitly
        // to avoid 404s. Given the file lists, explicit lists are safer.
        return `/${folder}/${i + 1}.${extension}`
    })
}

// Explicit lists based on file system observation
const completeSolutionImages = [
    "/COMPLETE SOLUTIONS/1.jpeg",
    "/COMPLETE SOLUTIONS/2.jpeg",
    "/COMPLETE SOLUTIONS/3.jpeg",
    "/COMPLETE SOLUTIONS/4.jpeg",
    "/COMPLETE SOLUTIONS/5.jpeg",
    "/COMPLETE SOLUTIONS/6.jpeg",
    "/COMPLETE SOLUTIONS/7.png",
    "/COMPLETE SOLUTIONS/8.png",
    "/COMPLETE SOLUTIONS/9.png",
    "/COMPLETE SOLUTIONS/10.png",
    "/COMPLETE SOLUTIONS/11.png",
    "/COMPLETE SOLUTIONS/12.png",
    "/COMPLETE SOLUTIONS/13.png",
    "/COMPLETE SOLUTIONS/14.jpeg",
]

const projectImages = [
    "/PROJECTS/1.jpeg",
    "/PROJECTS/2.jpeg",
    "/PROJECTS/3.jpeg",
    "/PROJECTS/4.jpeg",
    "/PROJECTS/5.jpeg",
    "/PROJECTS/6.png",
    "/PROJECTS/7.png",
    "/PROJECTS/8.png",
    "/PROJECTS/9.png",
    "/PROJECTS/10.png",
    "/PROJECTS/11.jpeg",
    "/PROJECTS/12.jpeg",
    "/PROJECTS/13.jpeg",
    "/PROJECTS/14.jpeg",
    "/PROJECTS/15.jpeg",
]

const structureSteelImages = [
    "/STRUCTURES STEEL/1.jpeg",
    "/STRUCTURES STEEL/2.jpeg",
    "/STRUCTURES STEEL/3.jpeg",
    "/STRUCTURES STEEL/4.jpeg",
    "/STRUCTURES STEEL/5.jpeg",
    "/STRUCTURES STEEL/6.jpeg",
]

export default function Gallery() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Navbar />
            <PageHeader
                title="Project Gallery"
                description="A visual tour of our engineering milestones. From conceptualization to completion."
            />

            <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

                {/* Section 1: Complete Solutions */}
                <section>
                    <FadeIn>
                        <div className="text-center mb-16">
                            <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Our Portfolio</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Complete Solutions</h2>
                            <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full" />
                        </div>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {completeSolutionImages.map((src, idx) => (
                            <FadeIn key={`cs-${idx}`} delay={idx * 0.05}>
                                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100">
                                    <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                                    <Image
                                        src={src}
                                        alt={`Complete Solution ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </section>

                {/* Section 2: Projects */}
                <section>
                    <FadeIn>
                        <div className="text-center mb-16">
                            <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Industrial Excellence</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Projects</h2>
                            <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full" />
                        </div>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectImages.map((src, idx) => (
                            <FadeIn key={`proj-${idx}`} delay={idx * 0.05}>
                                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100">
                                    <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                                    <Image
                                        src={src}
                                        alt={`Project ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </section>

                {/* Section 3: Structured Steel */}
                <section>
                    <FadeIn>
                        <div className="text-center mb-16">
                            <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Engineering Precision</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Structured Steel</h2>
                            <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full" />
                        </div>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {structureSteelImages.map((src, idx) => (
                            <FadeIn key={`ss-${idx}`} delay={idx * 0.05}>
                                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100">
                                    <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                                    <Image
                                        src={src}
                                        alt={`Structured Steel ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </section>

            </div>
            <StackedCircularFooter />
        </div>
    )
}
