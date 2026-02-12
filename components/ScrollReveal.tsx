"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
}

export default function ScrollReveal({
    children,
    width = "fit-content",
    delay = 0,
    direction = "up",
    className = ""
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getDirectionVariants = () => {
        switch (direction) {
            case "up": return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
            case "down": return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
            case "left": return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
            case "right": return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
            case "none": return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
            default: return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
        }
    };

    const variants = getDirectionVariants();

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
}
