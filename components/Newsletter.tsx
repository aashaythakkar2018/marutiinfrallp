"use client";

import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

import { useState } from 'react';

export default function Newsletter() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formType: 'newsletter',
                    email: formData.get('email'),
                }),
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="max-w-xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4 text-navy font-bold text-lg">
                        <span className="text-orange">MARUTI</span>INFRA
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-6">Stay updated with our latest projects.</h3>

                    <form onSubmit={handleSubmit} className="flex shadow-lg shadow-navy/5 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-orange/50 transition-all">
                        <div className="flex-grow relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email address"
                                className="w-full h-14 pl-12 pr-4 bg-gray-50 text-navy outline-none placeholder:text-gray-400"
                            />
                        </div>
                        <button 
                            type="submit" 
                            disabled={status === 'submitting'}
                            className="w-14 h-14 bg-navy text-white flex items-center justify-center hover:bg-steel transition-colors disabled:opacity-70"
                        >
                            {status === 'submitting' ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            ) : status === 'success' ? (
                                <span className="text-green-400">✓</span>
                            ) : (
                                <ArrowRight className="w-6 h-6" />
                            )}
                        </button>
                    </form>
                    {status === 'success' && (
                        <p className="text-green-600 text-sm mt-4 font-medium relative top-2">Subscribed successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 text-sm mt-4 font-medium relative top-2">Subscription failed. Please try again.</p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
