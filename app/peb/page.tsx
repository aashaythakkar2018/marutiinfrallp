import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

export default function PEB() {
    return (
        <div className="min-h-screen bg-dark-bg text-white">
            <Navbar />
            <PageHeader
                title="Pre-Engineered Buildings"
                description="The modern solution for industrial construction. Speed, economy, and versatility combined."
            />

            <div className="max-w-7xl mx-auto px-6 py-24 group">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Why Choose PEB?</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Pre-Engineered Buildings (PEBs) are steel structures built over a structural concept of primary members, secondary members, and the cover sheeting connected to each other. The structural members are custom designed to be lighter in weight as well as high in strength.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Maruti Infra Engineering specializes in designing PEBs that optimize material usage, reducing costs while maintaining structural integrity for extreme manufacturing conditions.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="text-3xl font-bold text-secondary mb-1">30%</div>
                                    <div className="text-sm text-gray-400">Faster Construction</div>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="text-3xl font-bold text-secondary mb-1">20%</div>
                                    <div className="text-sm text-gray-400">Cost Savings</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="h-[400px] rounded-2xl bg-dark-card border border-white/5 relative overflow-hidden">
                            {/* Placeholder for PEB Diagram/Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=1997&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
                        </div>
                    </FadeIn>
                </div>
            </div>
            <Footer />
        </div>
    )
}
