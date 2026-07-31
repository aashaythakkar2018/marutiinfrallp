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
                    <nav className="mb-8 grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-row flex-wrap justify-center gap-y-4 gap-x-6 text-sm font-medium text-slate-600 text-center">
                        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-navy transition-colors">About</Link>
                        <Link href="/services" className="hover:text-navy transition-colors">Services</Link>
                        <Link href="/peb" className="hover:text-navy transition-colors">PEB</Link>
                        <Link href="/gallery" className="col-span-2 sm:col-span-1 hover:text-navy transition-colors">Gallery</Link>
                        <Link href="/career" className="hover:text-navy transition-colors">Career</Link>
                        <Link href="/blog" className="hover:text-navy transition-colors">Blog</Link>
                        <Link href="/contact" className="hover:text-navy transition-colors">Contact</Link>
                    </nav>

                    {/* Socials */}
                    <div className="mb-8 flex space-x-4">
                        <Link href="https://www.facebook.com/marutinfraeng/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-600 hover:bg-navy hover:text-white hover:border-navy hover:shadow-md transition-all duration-300">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Button>
                        </Link>
                        <Link href="https://www.instagram.com/maruti_infraengllp" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-600 hover:bg-navy hover:text-white hover:border-navy hover:shadow-md transition-all duration-300">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/company/106003480/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-600 hover:bg-navy hover:text-white hover:border-navy hover:shadow-md transition-all duration-300">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </Link>
                        <Link href="https://www.youtube.com/@marutinfraindia" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-600 hover:bg-navy hover:text-white hover:border-navy hover:shadow-md transition-all duration-300">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">Youtube</span>
                            </Button>
                        </Link>
                    </div>

                    {/* Contact Info (Adhering to "keep all data as it is") */}
                    <div className="mb-8 text-center text-slate-500 text-sm space-y-4 md:space-y-2">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-orange shrink-0" />
                                <span>Block No. 189-190, Velachha, Mangrol, Surat - 394405, Gujarat, India.</span>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-orange" />
                                <a href="tel:+919998053911" className="hover:text-navy">+91 99980 53911</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-orange" />
                                <a href="mailto:info@marutiinfraeng.co.in" className="hover:text-navy break-all md:break-normal">info@marutiinfraeng.co.in</a>
                            </div>
                        </div>
                    </div>

                    {/* Subscription */}
                    <div className="mb-8 w-full max-w-md">
                        <form className="flex flex-col sm:flex-row gap-3">
                            <div className="w-full">
                                <Label htmlFor="email" className="sr-only">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="rounded-full border-slate-200 focus:border-navy w-full"
                                />
                            </div>
                            <Button type="submit" className="rounded-full bg-navy hover:bg-navy-light text-white w-full sm:w-auto">Subscribe</Button>
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
