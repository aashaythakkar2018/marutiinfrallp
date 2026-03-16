"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        id: "01",
        title: "VISIONARY PLANNING SOLUTIONS",
        description: "We design, manufacture, and supply Pre-Engineered Buildings tailored to your specifications. Our planning solutions ensure optimal space utilization, cost efficiency, and structural integrity from concept to completion.",
        features: [
            { title: "Custom architectural designs", desc: "Tailored to meet specific client requirements and site conditions." },
            { title: "Advanced 3D modeling", desc: "Visualization before construction begins." },
            { title: "Cost optimization", desc: "Material efficiency and budget-friendly solutions." }
        ],
        image: "/images/visionary-planning.jpg",
        imgPos: "left"
    },
    {
        id: "02",
        title: "INGENIOUS STRUCTURAL DESIGN",
        description: "Our expert engineers utilize cutting-edge software and international standards to create structurally robust and aesthetically pleasing buildings. From concept to final design, we ensure precision in every detail.",
        features: [
            { title: "International standards", desc: "Compliance with IS codes, AISC, and Eurocode specifications." },
            { title: "Load optimization", desc: "Structural analysis for maximum efficiency and safety." },
            { title: "Material specification", desc: "High-grade steel selection for durability and performance." }
        ],
        image: "/images/ingenious-design.jpg",
        imgPos: "right"
    },
    {
        id: "03",
        title: "PUNCTUAL STEEL STRUCTURE DELIVERY",
        description: "We ensure timely delivery of fabricated steel structures to your project site. Our logistics network and quality control systems guarantee that every component arrives on schedule and in perfect condition.",
        features: [
            { title: "Real-time tracking", desc: "Monitor your order from fabrication to delivery." },
            { title: "Quality inspection", desc: "Every component checked before dispatch." },
            { title: "Logistics coordination", desc: "Pan-India delivery network for timely arrival." }
        ],
        image: "/images/core-delivery-new.jpg",
        imgPos: "left"
    },
    {
        id: "04",
        title: "PRECISION STEEL STRUCTURE ERECTION",
        description: "Our experienced erection teams ensure safe and efficient on-site installation. With modern equipment and rigorous safety protocols, we bring your vision to life with precision and professionalism.",
        features: [
            { title: "Expert installation teams", desc: "Trained professionals with extensive field experience." },
            { title: "Safety compliance", desc: "Adherence to all safety standards and protocols." },
            { title: "Quality assurance", desc: "Post-erection inspection and testing." }
        ],
        image: "/images/core-erection.jpg",
        imgPos: "right"
    }
];

export default function CoreServices() {
    return (
        <section className="py-24 px-6 md:px-10 bg-white">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-20 md:gap-32">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={`flex flex-col ${service.imgPos === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                    >
                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <h4 className="text-xl md:text-2xl font-semibold text-navy uppercase tracking-widest mb-6">
                                {service.title}
                            </h4>
                            <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <div className="space-y-6">
                                {service.features.map((feature, idx) => (
                                    <div key={idx}>
                                        <h5 className="font-bold text-navy text-base mb-1">{feature.title}</h5>
                                        <p className="text-text-secondary text-sm md:text-base leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                                {/* Number Badge */}
                                <div className={`absolute top-8 ${service.imgPos === 'right' ? 'right-8' : 'left-8'} z-20 w-16 h-16 bg-orange/90 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg`}>
                                    {service.id}
                                </div>

                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
