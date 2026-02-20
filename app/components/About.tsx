'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MagneticButton from './ui/MagneticButton';
import { useCursor } from '../context/CursorContext';
import { Download } from 'lucide-react';
import TextReveal from './ui/TextReveal';
import { easing, duration, staggerContainer, staggerChild } from '../lib/animations';
import { useReducedMotion } from '../lib/hooks';
import { siteConfig, aboutContent, skills } from '../lib/data';

export default function About() {
    const { setCursorType } = useCursor();
    const prefersReduced = useReducedMotion();

    const handleMouseEnter = () => setCursorType('hover');
    const handleMouseLeave = () => setCursorType('default');



    return (
        <section id="about" className="py-32 md:py-40 relative light-mode">
            <div className="container-fluid">
                {/* Section Label */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: duration.normal, ease: easing.smooth }}
                    className="text-xs font-mono uppercase tracking-widest text-muted/60 mb-4 block"
                >
                    About Me
                </motion.span>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Portrait with reveal animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: duration.slower, ease: easing.smooth }}
                        className="relative aspect-[3/3.2] overflow-hidden rounded-lg"
                    >
                        <Image
                            src={aboutContent.portraitImage}
                            alt="Vedant Cheulkar"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: duration.slow, delay: 0.2, ease: easing.smooth }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8">
                            <TextReveal>{aboutContent.heading}</TextReveal>
                        </h2>

                        <div className="space-y-6 text-muted leading-relaxed mb-10">
                            {aboutContent.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        {/* Skills with staggered reveal + progress-style animation */}
                        <div className="mb-10">
                            <h3 className="text-xs uppercase tracking-widest text-muted/60 mb-6">
                                Technologies & Tools
                            </h3>
                            <motion.div
                                variants={staggerContainer(0.05, 0.3)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-3"
                            >
                                {skills.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        variants={staggerChild}
                                        whileHover={prefersReduced ? {} : {
                                            scale: 1.05,
                                            borderColor: 'rgba(255,255,255,0.3)',
                                            transition: { duration: 0.2 }
                                        }}
                                        className="text-sm px-4 py-2 border border-accent hover:border-foreground/30 transition-colors cursor-default"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: duration.normal, ease: easing.smooth }}
                            className="flex flex-wrap gap-4"
                        >
                            <MagneticButton href="#contact" className="text-sm uppercase tracking-widest">
                                Get in Touch
                            </MagneticButton>
                            <MagneticButton
                                href={siteConfig.resumePath}
                                className="text-sm uppercase tracking-widest"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Download size={16} className="mr-2" />
                                Resume
                            </MagneticButton>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
