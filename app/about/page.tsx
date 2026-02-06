import AboutHero from '@/components/about/AboutHero';
import Timeline from '@/components/about/Timeline';
import VisionMission from '@/components/about/VisionMission';
import FacilitySection from '@/components/about/FacilitySection';
import TeamGrid from '@/components/about/TeamGrid';
import Certifications from '@/components/about/Certifications';
import Statistics from '@/components/about/Statistics';
import FinalCTA from '@/components/about/FinalCTA';
import Newsletter from '@/components/Newsletter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <AboutHero />

            {/* Intro Text Section */}
            <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto text-center" id="intro">
                <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-navy font-light">
                    Maruti Infraeng LLP is a premier provider specializing in <strong className="font-semibold text-orange">Pre-Engineered Metal Building Systems (PEB)</strong>, offering comprehensive solutions from design to execution.
                </p>
                <p className="mt-8 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    With a strong emphasis on professionalism and customer dedication, we stand out for our commitment to delivering tailor-made PEB structures that exceed expectations. Our team comprises highly skilled engineers equipped with modern Software.
                </p>
            </section>

            <Timeline />

            <VisionMission />

            <FacilitySection />

            <TeamGrid />

            <Certifications />

            <Statistics />

            <FinalCTA />

            <Newsletter />

            <Footer />
        </main>
    );
}
