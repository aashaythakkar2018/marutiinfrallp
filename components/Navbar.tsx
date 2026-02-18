"use client";

import { Home, User, Building2, Briefcase, Image, Users, FileText, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavBar } from '@/components/ui/tubelight-navbar';
import NextImage from 'next/image';

export default function Navbar() {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'About', url: '/about', icon: User },
        { name: 'PEB', url: '/peb', icon: Building2 },
        { name: 'Services', url: '/services', icon: Briefcase },
        { name: 'Gallery', url: '/gallery', icon: Image },
        { name: 'Career', url: '/career', icon: Users },
        { name: 'Brochure', url: '/brochure', icon: FileText },
        { name: 'Contact', url: '/contact', icon: Phone },
    ];

    return (
        <>
            {/* Navbar Background for visibility */}
            <div className="fixed top-0 left-0 right-0 h-24 bg-white/90 backdrop-blur-md shadow-sm z-40 border-b border-slate-100" />

            {/* Logo - Fixed Top Left */}
            <div className="fixed top-2 left-6 z-50">
                <Link href="/" className="block">
                    <NextImage
                        src="/images/Lof with tag line.png"
                        alt="Maruti Infra Engineering"
                        width={200}
                        height={80}
                        className="h-20 w-auto object-contain"
                    />
                </Link>
            </div>

            {/* Tubelight Navbar - Centered (Bottom on Mobile, Top on Desktop) */}
            <NavBar items={navItems} className="z-50" />

            {/* Get Quote Button - Fixed Top Right */}
            <div className="fixed top-6 right-6 z-50">
                <Link href="/contact">
                    <Button
                        className="rounded-full px-6 bg-orange hover:bg-orange-dark text-white shadow-lg shadow-orange/20 border-none text-sm hidden sm:flex"
                    >
                        Get Quote
                    </Button>
                </Link>
                {/* Mobile specific button/icon if needed, but NavBar handles mobile menu items */}
            </div>
        </>
    );
}
