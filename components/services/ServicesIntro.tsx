"use client";

import { motion } from 'framer-motion';

export default function ServicesIntro() {
    return (
        <section className="py-24 px-6 md:px-10 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="max-w-4xl mx-auto text-center"
            >
                <p className="text-xl md:text-2xl leading-[1.7] text-text-secondary font-regular">
                    At Maruti Infraeng LLP, we offer comprehensive and innovative
                    solutions in Pre-Engineered Metal Building Systems, designed
                    to meet diverse construction needs. By choosing Maruti Infraeng
                    LLP, you are partnering with a leader in the pre-engineered
                    metal building industry, committed to delivering excellence,
                    innovation, and reliability in every project.
                </p>
            </motion.div>
        </section>
    );
}
