import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function StackedCircularFooter() {
    return (
        <footer className="bg-white border-t border-slate-200 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <div className="mb-8 p-4">
                        <Link href="/">
                            <Image
                                src="/images/Lof with tag line.png"
                                alt="Maruti Infra Engineering"
                                width={300}
                                height={160}
                                className="h-40 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="mb-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
                        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-navy transition-colors">About</Link>
                        <Link href="/services" className="hover:text-navy transition-colors">Services</Link>
                        <Link href="/peb" className="hover:text-navy transition-colors">PEB</Link>
                        <Link href="/gallery" className="hover:text-navy transition-colors">Gallery</Link>
                        <Link href="/career" className="hover:text-navy transition-colors">Career</Link>
                        <Link href="/contact" className="hover:text-navy transition-colors">Contact</Link>
                    </nav>

                    {/* Socials */}
                    {/* Socials */}
                    <div className="mb-8 flex space-x-4">
                        <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-600 hover:bg-orange/10 hover:text-orange hover:border-orange hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all duration-300">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-600 hover:bg-orange/10 hover:text-orange hover:border-orange hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all duration-300">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-600 hover:bg-orange/10 hover:text-orange hover:border-orange hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all duration-300">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-600 hover:bg-orange/10 hover:text-orange hover:border-orange hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all duration-300">
                            <Youtube className="h-5 w-5" />
                            <span className="sr-only">Youtube</span>
                        </Button>
                    </div>

                    {/* Contact Info (Adhering to "keep all data as it is") */}
                    <div className="mb-8 text-center text-slate-500 text-sm space-y-2">
                        <div className="flex items-center justify-center gap-2">
                            <MapPin className="h-4 w-4 text-orange" />
                            <span>Survey No. 222, Plot No. 9, Veraval (Shapar), Rajkot - 360024, Gujarat, India.</span>
                        </div>
                        <div className="flex items-center justify-center gap-6">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-orange" />
                                <a href="tel:+919876543210" className="hover:text-navy">+91 98765 43210</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-orange" />
                                <a href="mailto:info@marutiinfra.com" className="hover:text-navy">info@marutiinfra.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Subscription */}
                    <div className="mb-8 w-full max-w-md">
                        <form className="flex space-x-2">
                            <div className="flex-grow">
                                <Label htmlFor="email" className="sr-only">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="rounded-full border-slate-200 focus:border-navy"
                                />
                            </div>
                            <Button type="submit" className="rounded-full bg-navy hover:bg-navy-light text-white">Subscribe</Button>
                        </form>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-sm text-slate-400">
                            © {new Date().getFullYear()} Maruti Infra Engineering LLP. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { StackedCircularFooter }
