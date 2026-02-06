import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import { Download, FileText } from "lucide-react";

export default function Brochure() {
    return (
        <div className="min-h-screen bg-dark-bg text-white">
            <Navbar />
            <PageHeader
                title="Resources & Downloads"
                description="Download our company profile and technical specifications."
            />

            <div className="max-w-4xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-8">
                    <FadeIn delay={0.1}>
                        <div className="p-8 rounded-2xl bg-dark-card border border-white/5 flex flex-col items-center text-center hover:border-secondary transition-colors h-full">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Corporate Brochure</h3>
                            <p className="text-gray-400 mb-8 max-w-sm flex-grow">
                                Comprehensive overview of our company, vision, services, and major project portfolio.
                            </p>
                            {/* TODO: Replace '#' with actual brochure PDF link */}
                            <a
                                href="#"
                                id="download-brochure-link"
                                className="px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF (12MB)
                            </a>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="p-8 rounded-2xl bg-dark-card border border-white/5 flex flex-col items-center text-center hover:border-secondary transition-colors h-full">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Technical Specs</h3>
                            <p className="text-gray-400 mb-8 max-w-sm flex-grow">
                                Detailed technical data sheets for our PEB systems, roofing materials, and structural steel grades.
                            </p>
                            {/* TODO: Replace '#' with actual specs PDF link */}
                            <a
                                href="#"
                                id="download-specs-link"
                                className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF (5MB)
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <Footer />
        </div>
    )
}
