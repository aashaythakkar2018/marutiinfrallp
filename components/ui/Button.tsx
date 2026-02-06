"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    children,
    className,
    icon,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-xl";

    const variants = {
        primary: "bg-orange text-white hover:bg-orange-dark shadow-lg shadow-orange/30",
        secondary: "bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white",
        outline: "bg-transparent border border-white/20 text-white hover:bg-white/10",
        ghost: "bg-transparent text-navy hover:bg-navy/5",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
    };

    return (
        <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
            {icon && <span className="ml-2">{icon}</span>}
        </motion.button>
    );
}
