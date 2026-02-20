'use client';

import { motion } from 'framer-motion';
import { Trophy, MapPin, Calendar } from 'lucide-react';
import TextReveal from './ui/TextReveal';
import { easing, duration, staggerContainer, staggerChild } from '../lib/animations';
import { useReducedMotion } from '../lib/hooks';

import { achievements } from '../lib/data';

export default function Achievements() {
    const prefersReduced = useReducedMotion();

    return (
        <section id="achievements" className="py-32 md:py-40 relative">
            <div className="container-fluid">
                {/* Section Header */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: duration.normal, ease: easing.smooth }}
                    className="text-xs font-mono uppercase tracking-widest text-muted/60 mb-4 block"
                >
                    Recognition
                </motion.span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-20">
                    <TextReveal>Achievements</TextReveal>
                </h2>

                {/* Achievement Cards */}
                <motion.div
                    variants={staggerContainer(0.15, 0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="space-y-6"
                >
                    {achievements.map((achievement, i) => (
                        <motion.div
                            key={i}
                            variants={staggerChild}
                            className="group relative border border-accent/20 rounded-lg p-6 md:p-8 hover:border-accent/40 transition-colors duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/* Trophy icon with hover animation */}
                                <motion.div
                                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-accent/30 rounded-full group-hover:border-yellow-500/40 transition-colors duration-500"
                                    whileHover={prefersReduced ? {} : {
                                        rotate: [0, -10, 10, -5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    <Trophy
                                        size={20}
                                        className="text-muted group-hover:text-yellow-500 transition-colors duration-500"
                                    />
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                                            {achievement.title}
                                        </h3>
                                        {/* Position badge */}
                                        <span className="inline-flex items-center text-xs font-mono uppercase tracking-wider px-3 py-1 border border-yellow-500/30 text-yellow-500 rounded-full w-fit">
                                            {achievement.position}
                                        </span>
                                    </div>

                                    <p className="text-muted/80 text-sm md:text-base leading-relaxed mb-4 max-w-2xl">
                                        {achievement.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted/60">
                                        <span className="flex items-center gap-1.5">
                                            <MapPin size={12} />
                                            {achievement.location}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={12} />
                                            {achievement.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Index */}
                                <span className="hidden md:block text-xs font-mono text-muted/30">
                                    {(i + 1).toString().padStart(2, '0')}
                                </span>
                            </div>

                            {/* Hover glow effect behind trophy */}
                            <div className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 bg-yellow-500/0 group-hover:bg-yellow-500/5 rounded-full blur-xl transition-all duration-700" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
