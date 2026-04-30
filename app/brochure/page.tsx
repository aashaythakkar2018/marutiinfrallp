import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import { Download, FileText } from "lucide-react";

export default function Brochure() {
    return (
        <div className="min-h-screen bg-gray-50 text-slate-900">
            <Navbar />
            <PageHeader
                title="Resources & Downloads"
                description="Download our company profile and technical specifications."
            />

            <div className="max-w-4xl mx-auto px-6 py-24">
                <div className="flex justify-center">
                    <FadeIn delay={0.1}>
                        <div className="p-12 rounded-2xl bg-white border border-slate-200 shadow-lg flex flex-col items-center text-center hover:border-navy/30 transition-all duration-300 max-w-lg w-full group">
                            <div className="w-24 h-24 rounded-full bg-navy/5 flex items-center justify-center text-navy mb-8 group-hover:scale-110 transition-transform">
                                <FileText className="w-12 h-12" />
                            </div>
                            <h3 className="text-3xl font-bold text-navy mb-4">Corporate Brochure</h3>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                Comprehensive overview of our company, vision, services, and major project portfolio.
                            </p>
                            <a
                                href="/Marutiinfra%20brochure%20compressed.pdf"
                                download="Maruti_Infra_Brochure.pdf"
                                className="px-10 py-4 bg-navy text-white text-lg rounded-xl font-semibold hover:bg-navy/90 transition-all flex items-center gap-3 shadow-lg shadow-navy/20 hover:shadow-navy/40 hover:-translate-y-1"
                            >
                                <Download className="w-5 h-5" />
                                Download PDF
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <Footer />
        </div>
    )
}
