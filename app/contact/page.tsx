import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import LocationMap from "@/components/contact/LocationMap";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 text-slate-900">
            <Navbar />
            <PageHeader
                title="Get In Touch"
                description="Ready to start your project? Contact us for a consultation and quote."
            />

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
                    {/* Contact Info */}
                    <div className="order-2 lg:order-1">
                        <ContactInfo />
                    </div>

                    {/* Contact Form */}
                    <div className="order-1 lg:order-2">
                        <ContactForm />
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full">
                    <LocationMap />
                </div>
            </div>

            <Footer />
        </div>
    )
}
