import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

export default function Gallery() {
    const images = [
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070&auto=format&fit=crop",
    ];

    return (
        <div className="min-h-screen bg-dark-bg text-white">
            <Navbar />
            <PageHeader
                title="Project Gallery"
                description="A visual tour of our engineering milestones. From conceptualization to completion."
            />

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, idx) => (
                        <FadeIn key={idx} delay={idx * 0.05} className="group relative aspect-video overflow-hidden rounded-xl bg-dark-card border border-white/5">
                            {/* Using img tag for simplicity, in production Next.js Image should be used */}
                            <img
                                src={src}
                                alt={`Project ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <span className="text-white font-medium">Auto-Component Factory, Gujarat</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
