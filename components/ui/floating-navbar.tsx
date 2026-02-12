"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: React.ReactNode;
        dropdown?: { name: string; link: string }[];
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            const direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-[#1A1A24] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-2 items-center justify-center space-x-2 border-white/5",
                    className
                )}
            >

                {navItems.map((navItem, idx: number) => (
                    <div key={`link=${idx}`} className="relative group px-3 py-2">
                        <Link
                            href={navItem.link}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-gray-300 dark:hover:text-neutral-300 hover:text-white transition-colors"
                            )}
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
                            {navItem.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                        </Link>

                        {/* Dropdown Logic */}
                        {navItem.dropdown && (
                            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="bg-[#1A1A24] rounded-xl shadow-xl border border-white/10 p-2 min-w-[200px] overflow-hidden">
                                    {navItem.dropdown.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            href={subItem.link}
                                            className="block px-4 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors whitespace-nowrap"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
