"use client";

import { motion } from 'framer-motion';

const steps = [
    {
        id: "01",
        title: "ORDER FINALISATION PHASE",
        description: "Client requirements finalized, quotation approved, and project specifications confirmed."
    },
    {
        id: "02",
        title: "APPROVAL PHASE",
        description: "Technical drawings, engineering calculations, and design specifications submitted for client approval."
    },
    {
        id: "03",
        title: "DETAILING & MANUFACTURING PHASE",
        description: "Detailed shop drawings prepared, materials procured, and fabrication begins at our facility."
    },
    {
        id: "04",
        title: "SHIPMENT AND ERECTION PHASE",
        description: "Quality-checked components delivered to site and erected by our expert installation team."
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 15,
            mass: 1
        }
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const
        }
    }
};

export default function ProjectDelivery() {
    return (
        <section className="py-24 px-6 md:px-10 bg-bg-off-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-[32px] font-semibold text-navy">Project Delivery Process</h3>
                </div>

                <div className="relative mt-16">
                    {/* Connecting Line (Desktop) */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute top-8 left-0 w-full h-[2px] bg-gray-200 z-0 origin-left hidden lg:block"
                    />

                    {/* Steps Container */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-10"
                    >
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-center text-center relative z-10"
                            >
                                {/* Circle */}
                                <motion.div
                                    variants={circleVariants}
                                    whileHover={{ scale: 1.15, boxShadow: "0 12px 32px rgba(0,0,0,0.15)" }}
                                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-6 transition-colors duration-300 ${Number(step.id) % 2 !== 0 ? 'bg-orange' : 'bg-steel'} cursor-default`}
                                >
                                    {step.id}
                                </motion.div>

                                {/* Connecting Line (Mobile) */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute top-16 left-1/2 -ml-[1px] w-[2px] h-12 bg-gray-200 lg:hidden -z-10" />
                                )}

                                <motion.div variants={textVariants}>
                                    <h4 className="text-lg font-semibold text-navy uppercase mb-3 px-2">
                                        {step.title}
                                    </h4>
                                    <p className="text-sm text-text-secondary leading-relaxed max-w-[240px]">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
