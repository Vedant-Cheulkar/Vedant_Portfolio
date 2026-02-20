'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Faster, smoother progress simulation
        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + Math.random() * 40; // Much faster increments
                if (newProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return newProgress;
            });
        }, 50); // Faster updates

        // minimal delay to ensure smooth exit animation
        const timer = setTimeout(() => {
            setProgress(100);
            setTimeout(() => setIsLoading(false), 200); // Short delay after 100% to let users see it complete
        }, 500); // reduced from 1200ms to 500ms

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
                >
                    {/* Logo/Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <span className="text-4xl md:text-6xl font-bold tracking-tight">
                            Vedant.
                        </span>
                    </motion.div>

                    {/* Progress bar */}
                    <div className="w-48 h-[1px] bg-accent overflow-hidden">
                        <motion.div
                            className="h-full bg-foreground"
                            initial={{ width: '0%' }}
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>

                    {/* Progress text */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-4 text-xs uppercase tracking-widest text-muted"
                    >
                        {Math.floor(Math.min(progress, 100))}%
                    </motion.span>

                    {/* Decorative lines */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-1/2 left-0 right-0 h-[1px] bg-accent/20 origin-left"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
