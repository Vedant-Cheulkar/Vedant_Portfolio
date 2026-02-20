'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { easing, duration, spring, staggerContainer, staggerChild } from '../lib/animations';
import { socialLinks } from '../lib/data';

export default function Footer() {
    const { setCursorType } = useCursor();

    const handleMouseEnter = () => setCursorType('hover');
    const handleMouseLeave = () => setCursorType('default');

    // Smooth scroll to top with spring feel
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-16 border-t border-accent/10">
            <div className="container-fluid">
                {/* Divider animation */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: duration.slower, ease: easing.smooth }}
                    className="h-[1px] bg-accent/20 mb-12 origin-left"
                />

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Copyright */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: duration.normal, ease: easing.smooth }}
                        className="text-sm text-muted/60"
                    >
                        © {new Date().getFullYear()} Vedant Cheulkar. All rights reserved.
                    </motion.p>

                    {/* Social Links with stagger */}
                    <motion.div
                        variants={staggerContainer(0.1, 0.3)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-6"
                    >
                        {socialLinks.map(({ name, href, icon: Icon }) => (
                            <motion.a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={staggerChild}
                                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                                className="text-muted/60 hover:text-foreground transition-colors"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                aria-label={name}
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Back to Top — spring-based motion */}
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: duration.normal, ease: easing.smooth }}
                        onClick={scrollToTop}
                        whileHover={{ y: -4, transition: spring.bouncy }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted/60 hover:text-foreground transition-colors group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>Back to top</span>
                        <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
