import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import { MapPin, Clock } from "lucide-react";

export default function Career() {
    const jobs = [
        {
            title: "Senior Structural Engineer",
            location: "Rajkot, Gujarat",
            type: "Full-time",
            dept: "Engineering"
        },
        {
            title: "Site Supervisor",
            location: "Pan India",
            type: "Contract",
            dept: "Operations"
        },
        {
            title: "Sales Executive",
            location: "Ahmedabad, Gujarat",
            type: "Full-time",
            dept: "Sales"
        }
    ];

    return (
        <div className="min-h-screen bg-dark-bg text-white">
            <Navbar />
            <PageHeader
                title="Join Our Team"
                description="Build your career with the industry leaders in infrastructure engineering."
            />

            <div className="max-w-4xl mx-auto px-6 py-24">
                <div className="mb-12">
                    <FadeIn>
                        <h2 className="text-2xl font-bold text-white mb-4">Current Openings</h2>
                        <p className="text-gray-400">
                            We are always looking for talented individuals to join our growing team. Send your CV to <a href="mailto:hr@marutiinfra.com" className="text-secondary hover:underline">hr@marutiinfra.com</a>
                        </p>
                    </FadeIn>
                </div>

                <div className="space-y-4">
                    {jobs.map((job, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="p-6 rounded-xl bg-dark-card border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-white/20 transition-colors">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                                    <div className="flex gap-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                                    </div>
                                </div>
                                <button className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-secondary hover:border-secondary transition-all">
                                    Apply Now
                                </button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
