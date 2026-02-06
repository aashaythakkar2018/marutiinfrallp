import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark-card border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
                            MARUTI<span className="text-secondary">INFRA</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Leading the way in Pre-Engineered Buildings and structural steel solutions. Quality, Innovation, and Integrity in every structure.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
                            <li><Link href="/projects" className="hover:text-secondary transition-colors">Projects</Link></li>
                            <li><Link href="/career" className="hover:text-secondary transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/peb" className="hover:text-secondary transition-colors">Pre-Engineered Buildings</Link></li>
                            <li><Link href="/services" className="hover:text-secondary transition-colors">Structural Steel</Link></li>
                            <li><Link href="/services" className="hover:text-secondary transition-colors">Industrial Trusses</Link></li>
                            <li><Link href="/services" className="hover:text-secondary transition-colors">Heavy Fabrication</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-6 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <span>
                                    Survey No. 222, Plot No. 9, <br />
                                    Veraval (Shapar), Rajkot - 360024, <br />
                                    Gujarat, India.
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a href="mailto:info@marutiinfra.com" className="hover:text-white transition-colors">info@marutiinfra.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Maruti Infra Engineering LLP. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
