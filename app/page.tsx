import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ServiceCards from "@/components/ServiceCards";
import ProcessFlow from "@/components/ProcessFlow";
import Footer from "@/components/Footer";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { RotateCw } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-secondary selection:text-white">
      <Navbar />
      <Hero />
      <ClientLogos />
      <ServiceCards />
      <ProcessFlow />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#1A3A5C]" style={{ backgroundColor: '#1A3A5C' }}>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white !text-white" style={{ color: '#ffffff' }}>Ready To Build</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#1A3A5C] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold gap-2">
              Get a Custom Quote <RotateCw className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
