import ServicesHero from '@/components/services/ServicesHero';
import ServicesIntro from '@/components/services/ServicesIntro';
import KeyExpertise from '@/components/services/KeyExpertise';
import ProjectDelivery from '@/components/services/ProjectDelivery';
import Differentiation from '@/components/services/Differentiation';
import AdditionalServices from '@/components/services/AdditionalServices';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/about/FinalCTA';


export default function ServicesPage() {
    return (
        <main className="bg-bg-off-white min-h-screen">
            <Navbar />

            <ServicesHero />

            <ServicesIntro />

            <KeyExpertise />

            <ProjectDelivery />

            <Differentiation />

            <AdditionalServices />

            <FinalCTA />

            <Footer />
        </main>
    );
}
