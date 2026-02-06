import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ServiceCards from "@/components/ServiceCards";
import ProcessFlow from "@/components/ProcessFlow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-secondary selection:text-white">
      <Navbar />
      <Hero />
      <ClientLogos />
      <ServiceCards />
      <ProcessFlow />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Vision?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Partner with us for world-class engineering solutions delivered on time and within budget.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
