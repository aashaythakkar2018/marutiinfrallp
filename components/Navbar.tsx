"use client";

import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'PEB', href: '/peb' },
        {
            name: 'Gallery',
            href: '/gallery',
            dropdown: [
                { name: 'Structural Steel', href: '/gallery/structural-steel' },
                { name: 'Projects', href: '/projects' },
                { name: 'Complete Solution', href: '/gallery/complete-solution' }
            ]
        },
        { name: 'Careers', href: '/career' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "py-2" : "py-6"
            )}
        >
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-col z-50 relative">
                    <span className={cn("text-2xl font-bold tracking-tighter transition-colors", scrolled ? "text-navy" : "text-white")}>
                        MARUTI<span className="text-orange">INFRA</span>
                    </span>
                </Link>

                {/* Desktop Nav - Centered Pill */}
                <div className={cn(
                    "hidden lg:flex items-center absolute left-1/2 -translate-x-1/2",
                    "bg-[#1A1A24] px-8 py-3 rounded-full border border-white/5 shadow-2xl backdrop-blur-md"
                )}>
                    {/* Links */}
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                                >
                                    {item.name}
                                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                                </Link>

                                {/* Dropdown Hover */}
                                {item.dropdown && (
                                    <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-[#1A1A24] rounded-xl shadow-xl border border-white/10 p-2 min-w-[200px] overflow-hidden">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Button */}
                <div className="hidden lg:flex items-center gap-4 z-50">
                    <Button
                        variant="primary"
                        size="md"
                        className="rounded-full px-8 bg-orange hover:bg-orange-dark text-white shadow-lg shadow-orange/20 border-none"
                    >
                        Get Quote
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn("lg:hidden p-2 transition-colors z-50", scrolled ? "text-navy" : "text-white")}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed inset-0 top-0 bg-navy z-40 overflow-y-auto pt-24"
                    >
                        <div className="p-6 flex flex-col gap-6">
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-2xl font-semibold text-white hover:text-orange transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="mt-2 pl-4 flex flex-col gap-2 border-l border-white/10">
                                            {item.dropdown.map(sub => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-white/60 hover:text-white"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            <div className="mt-8 border-t border-white/10 pt-8">
                                <Button className="w-full justify-center rounded-full">Get a Quote</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
