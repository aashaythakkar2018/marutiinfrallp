"use client";

import { motion } from "framer-motion";

export default function FadeIn({
    children,
    delay = 0,
    direction = "up",
    className = ""
}: {
    children: React.ReactNode,
    delay?: number,
    direction?: "up" | "down" | "left" | "right",
    className?: string
}) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 }, // Initial position (hidden)
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
