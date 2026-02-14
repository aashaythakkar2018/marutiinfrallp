"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Textarea from '@/components/ui/Textarea';
import { Card } from '@/components/ui/card';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <Card className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-12 bg-white border border-slate-200 shadow-xl">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-20 h-20 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-6 border border-green-100"
                >
                    <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <Button
                    onClick={() => setStatus('idle')}
                    variant="outline"
                    className="border-slate-300 text-navy hover:bg-slate-50"
                >
                    Send Another Message
                </Button>
            </Card>
        );
    }

    return (
        <Card className="p-8 md:p-10 bg-white border border-slate-200 shadow-xl">
            <h2 className="text-3xl font-bold text-navy mb-2">Send us a message</h2>
            <p className="text-slate-600 mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name</label>
                        <Input
                            placeholder="John Doe"
                            required
                            className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                            style={{ color: '#0F172A' }}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email Address</label>
                        <Input
                            type="email"
                            placeholder="john@example.com"
                            required
                            className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                            style={{ color: '#0F172A' }}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone Number</label>
                        <Input
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                            style={{ color: '#0F172A' }}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Company Name</label>
                        <Input
                            placeholder="Company Ltd."
                            className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                            style={{ color: '#0F172A' }}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <div className="relative">
                        <select className="w-full flex h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent appearance-none cursor-pointer focus-visible:bg-white transition-colors">
                            <option className="bg-white text-navy">General Inquiry</option>
                            <option className="bg-white text-navy">Pre-Engineered Buildings (PEB)</option>
                            <option className="bg-white text-navy">Structural Steel</option>
                            <option className="bg-white text-navy">Turnkey Solutions</option>
                            <option className="bg-white text-navy">Careers</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <Textarea
                    label="Message"
                    placeholder="Tell us about your project requirements..."
                    required
                    className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                    style={{ color: '#0F172A' }}
                />

                <Button
                    type="submit"
                    className="w-full gap-2 text-white"
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? (
                        <>
                            Sending...
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="w-5 h-5" />
                        </>
                    )}
                </Button>
            </form>
        </Card>
    );
}
