import Image from 'next/image';

export default function ClientLogos() {
    // Placeholder for client logos - in production these would be images
    // List of client logo images
    const clients = [
        { name: "Title 5", src: "/CUSTOMER LOGOS/Title (5).png" },
        { name: "Title 6", src: "/CUSTOMER LOGOS/Title (6).png" },
        { name: "Title 7", src: "/CUSTOMER LOGOS/Title (7).png" },
        { name: "Title 8", src: "/CUSTOMER LOGOS/Title (8).png" },
        { name: "Title 9", src: "/CUSTOMER LOGOS/Title (9).png" },
        { name: "Title 10", src: "/CUSTOMER LOGOS/Title (10).png" },
    ];

    return (
        <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-8">
                <p className="text-sm text-gray-500 font-medium">TRUSTED BY INDUSTRY LEADERS</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                    {[...clients, ...clients].map((client, idx) => (
                        <div key={idx} className="relative h-20 w-48 flex-shrink-0 transition-all duration-300">
                            <Image
                                src={client.src}
                                alt={client.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center ml-16">
                    {[...clients, ...clients].map((client, idx) => (
                        <div key={`dup-${idx}`} className="relative h-20 w-48 flex-shrink-0 transition-all duration-300">
                            <Image
                                src={client.src}
                                alt={client.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
