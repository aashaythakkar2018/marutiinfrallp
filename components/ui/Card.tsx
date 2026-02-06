"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function Card({
    children,
    className,
    hoverEffect = true,
    ...props
}: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={hoverEffect ? {
                y: -12,
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(26,58,92,0.15)"
            } : undefined}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
                "bg-white border border-bg-light rounded-2xl overflow-hidden",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
