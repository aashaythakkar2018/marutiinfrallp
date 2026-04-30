"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Textarea from '@/components/ui/Textarea';
import { Card } from '@/components/ui/card';

export default function CareerForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [fileName, setFileName] = useState<string>('No file chosen');

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
                    formType: 'career',
                    name: formData.get('name'),
                    address: formData.get('address'),
                    position: formData.get('position'),
                    city: formData.get('city'),
                    postcode: formData.get('postcode'),
                    phone: formData.get('phone'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message'),
                }),
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setFileName('No file chosen');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('No file chosen');
        }
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
                <h3 className="text-2xl font-bold text-navy mb-2">Application Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                    Thank you for your interest. Our HR team will review your application and get back to you soon.
                </p>
                <Button
                    onClick={() => setStatus('idle')}
                    variant="outline"
                    className="border-slate-300 text-navy hover:bg-slate-50"
                >
                    Submit Another Application
                </Button>
            </Card>
        );
    }

    return (
        <Card className="p-8 md:p-10 bg-white border border-slate-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name *</label>
                    <Input
                        name="name"
                        placeholder="Enter your full name"
                        required
                        className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Address *</label>
                    <Input
                        name="address"
                        placeholder="Enter your address"
                        required
                        className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                    />
                </div>

                {/* Custom Select styling to match Input */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">Position</label>
                    <div className="relative">
                        <select name="position" className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent appearance-none cursor-pointer focus-visible:bg-white transition-colors">
                            <option value="">--select--</option>
                            <option value="Structural Engineer">Structural Engineer</option>
                            <option value="Site Supervisor">Site Supervisor</option>
                            <option value="Sales Executive">Sales Executive</option>
                            <option value="Project Manager">Project Manager</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">City *</label>
                    <Input
                        name="city"
                        placeholder="Enter your city"
                        required
                        className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Postcode *</label>
                    <Input
                        name="postcode"
                        placeholder="Enter postcode"
                        required
                        className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                    />
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <Input
                            placeholder="(+91) India"
                            defaultValue="(+91) India"
                            readOnly
                            className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                        />
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="phone"
                            placeholder="Phone"
                            type="tel"
                            required
                            className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                    <Input
                        name="subject"
                        placeholder="Subject"
                        className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white"
                    />
                </div>

                {/* File Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Choose file</label>
                    <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-2">
                        <label className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                            Choose File
                            <input type="file" className="hidden" onChange={handleFileChange} />
                        </label>
                        <span className="text-sm text-slate-500 truncate">{fileName}</span>
                    </div>
                </div>

                <Textarea
                    name="message"
                    label="Your Message"
                    placeholder="Tell us about yourself..."
                    className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus-visible:bg-white min-h-[120px]"
                />

                <Button
                    type="submit"
                    className="w-full bg-navy hover:bg-navy/90 text-white gap-2"
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? (
                        <>
                            Submitting...
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        </>
                    ) : (
                        <>
                            Submit Application
                            <Send className="w-5 h-5" />
                        </>
                    )}
                </Button>
            </form>
        </Card>
    );
}
