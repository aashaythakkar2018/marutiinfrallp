import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CareerForm from "@/components/career/CareerForm";
import CareerContent from "@/components/career/CareerContent";

export default function Career() {
    return (
        <div className="min-h-screen bg-gray-50 text-slate-900">
            <Navbar />
            <PageHeader
                title="Join Our Team"
                description="Build your career with the industry leaders in infrastructure engineering."
            />

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column: Form */}
                    <div className="order-2 lg:order-1">
                        <CareerForm />
                    </div>

                    {/* Right Column: Content */}
                    <div className="order-1 lg:order-2">
                        <CareerContent />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
