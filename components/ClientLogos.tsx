export default function ClientLogos() {
    // Placeholder for client logos - in production these would be images
    const clients = [
        "Skoda", "Hyundai", "Mahindra", "Tata Steel", "L&T", "Reliance"
    ];

    return (
        <section className="py-12 bg-dark-bg border-b border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-8">
                <p className="text-sm text-gray-500 font-medium">TRUSTED BY INDUSTRY LEADERS</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                    {[...clients, ...clients].map((client, idx) => (
                        <span key={idx} className="text-xl md:text-2xl font-bold text-white/20 uppercase tracking-widest hover:text-white/40 transition-colors cursor-default">
                            {client}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center ml-16">
                    {[...clients, ...clients].map((client, idx) => (
                        <span key={`dup-${idx}`} className="text-xl md:text-2xl font-bold text-white/20 uppercase tracking-widest hover:text-white/40 transition-colors cursor-default">
                            {client}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
