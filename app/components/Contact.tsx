'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import { useCursor } from '../context/CursorContext';
import TextReveal from './ui/TextReveal';
import { easing, duration } from '../lib/animations';

import { siteConfig } from '../lib/data';

import ContactForm from './ContactForm';

// ... (imports)

export default function Contact() {
    const { setCursorType, setCursorText } = useCursor();

    return (
        <section id="contact" className="py-32 md:py-40 relative light-mode">
            <div className="container-fluid">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Section Label */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: duration.normal, ease: easing.smooth }}
                        className="text-xs font-mono uppercase tracking-widest text-muted/60 mb-6 block"
                    >
                        Get in Touch
                    </motion.span>

                    {/* Main Heading */}
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
                        <TextReveal>Let&apos;s work</TextReveal>
                        <br />
                        <TextReveal delay={0.3}>together</TextReveal>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: duration.normal, ease: easing.smooth }}
                        className="text-muted text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
                    >
                        Have a project in mind or want to collaborate?
                        Send me a message or email me directly at <a href={`mailto:${siteConfig.email}`} className="text-foreground underline decoration-1 underline-offset-4 hover:decoration-2 transition-all">{siteConfig.email}</a>
                    </motion.p>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: duration.normal, ease: easing.smooth }}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    );
}
