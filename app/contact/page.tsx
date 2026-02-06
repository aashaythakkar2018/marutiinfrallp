import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-dark-bg text-white">
            <Navbar />
            <PageHeader
                title="Get In Touch"
                description="Ready to start your project? Contact us for a consultation and quote."
            />

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <FadeIn>
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Our Office</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Survey No. 222, Plot No. 9, <br />
                                            Veraval (Shapar), Rajkot - 360024, <br />
                                            Gujarat, India.
                                        </p>
                                        <a href="https://maps.google.com" target="_blank" className="text-secondary text-sm mt-2 inline-block hover:underline">View on Google Maps</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                                        <p className="text-gray-400 mb-1">Mon-Sat from 9am to 6pm.</p>
                                        <a href="tel:+919876543210" className="text-white hover:text-secondary text-lg font-medium transition-colors">+91 98765 43210</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                                        <p className="text-gray-400 mb-1">For all inquiries.</p>
                                        <a href="mailto:info@marutiinfra.com" className="text-white hover:text-secondary text-lg font-medium transition-colors">info@marutiinfra.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <FadeIn delay={0.2}>
                        <div className="bg-dark-card border border-white/5 p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                        <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                        <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                    <select id="subject" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Request Quote - PEB</option>
                                        <option>Request Quote - Structural Steel</option>
                                        <option>Careers</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors" placeholder="Tell us about your project..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <Footer />
        </div>
    )
}
