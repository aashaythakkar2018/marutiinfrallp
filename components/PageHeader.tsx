export default function PageHeader({ title, description }: { title: string, description: string }) {
    return (
        <div className="relative py-24 bg-dark-bg overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-secondary/5" />
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{title}</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
