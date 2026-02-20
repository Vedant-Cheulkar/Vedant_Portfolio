'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '../lib/data';

export default function ContactForm() {
    // ─── 🔧 CONFIGURATION ──────────────────────────────────────────────
    // Your Formspree ID is set below:
    const FORMSPREE_ID = "xlgwwnby";
    // ───────────────────────────────────────────────────────────────────

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        // ─── 1. Send via Formspree ───
        if (FORMSPREE_ID) {
            try {
                const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    setStatus('success');
                    (e.target as HTMLFormElement).reset();
                    return; // Success! Stop here.
                }
            } catch (error) {
                console.error("Formspree failed, falling back to mailto.", error);
            }
        }

        // ─── 2. Fallback: Open Email Client ───
        // If sending fails, we open the email client to ensure delivery.
        await new Promise(resolve => setTimeout(resolve, 800));

        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        setStatus('success');
        (e.target as HTMLFormElement).reset();
    }

    return (
        <div className="w-full max-w-2xl mx-auto mt-20">
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                    >
                        <div className="w-20 h-20 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-3xl font-bold mb-3 tracking-tight text-black">Message Sent!</h3>
                        <p className="text-neutral-600 text-lg mb-6">
                            Thanks for reaching out. I'll get back to you soon.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-2 text-sm uppercase tracking-widest text-neutral-500 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="space-y-6">
                            <div className="group">
                                <label htmlFor="name" className="text-xs md:text-sm uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">Your Name*</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-transparent border-b border-neutral-400 py-3 text-lg text-black focus:outline-none focus:border-black transition-colors rounded-none"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="email" className="text-xs md:text-sm uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">Your Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-transparent border-b border-neutral-400 py-3 text-lg text-black focus:outline-none focus:border-black transition-colors rounded-none"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="message" className="text-xs md:text-sm uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">How can I help you?*</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={1}
                                    className="w-full bg-transparent border-b border-neutral-400 py-3 text-lg text-black focus:outline-none focus:border-black transition-colors resize-none rounded-none min-h-[50px]"
                                    style={{ minHeight: '50px' }}
                                    onInput={(e) => {
                                        e.currentTarget.style.height = 'auto';
                                        e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                                    }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-6">
                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-500 text-sm">
                                    <AlertCircle size={16} />
                                    <span>Something went wrong. Try again.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="group ml-auto flex items-center gap-3 text-lg font-medium hover:text-neutral-600 text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                            >
                                {status === 'submitting' ? (
                                    <span>Processing...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Send size={18} className="-ml-0.5 mt-0.5" />
                                        </div>
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
