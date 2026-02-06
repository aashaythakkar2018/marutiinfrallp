import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

export default function FAQ() {
    const faqs = [
        {
            question: "What is a Pre-Engineered Building (PEB)?",
            answer: "A PEB is a steel structure built over a structural concept of primary members, secondary members, and the cover sheeting connected to each other. They are custom designed to be lighter in weight and high in strength."
        },
        {
            question: "What are the advantages of PEB over conventional buildings?",
            answer: "PEBs offer faster construction (30-50% faster), lower cost, flexibility in expansion, larger clear spans, and better quality control as components are manufactured in a controlled factory environment."
        },
        {
            question: "Can PEB structures be used for residential purposes?",
            answer: "Yes, PEB technology is versatile and can be adapted for residential use, although it is most commonly used for industrial and commercial buildings due to its large span capabilities."
        },
        {
            question: "Do you provide erection services?",
            answer: "Yes, we provide end-to-end solutions which include design, manufacturing, logistics, and on-site erection by our certified engineering teams."
        },
        {
            question: "What safety standards do you follow?",
            answer: "We strictly adhere to international safety standards including AISC (American Institute of Steel Construction) and MBMA (Metal Building Manufacturers Association) guidelines."
        }
    ];

    return (
        <div className="min-h-screen bg-dark-bg text-white">
            <Navbar />
            <PageHeader
                title="Frequently Asked Questions"
                description="Answers to common questions about PEB technology and our services."
            />

            <div className="max-w-3xl mx-auto px-6 py-24">
                <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="p-6 rounded-xl bg-dark-card border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
