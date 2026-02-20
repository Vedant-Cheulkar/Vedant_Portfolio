'use client';

import { motion } from 'framer-motion';
import TextReveal from './ui/TextReveal';
import { experience } from '../lib/data';
import { staggerContainer, staggerChild, easing, duration } from '../lib/animations';

export default function Experience() {
    return (
        <section id="experience" className="py-24 md:py-32 relative bg-white text-black light-mode">
            <div className="container-fluid">
                {/* Section Header */}
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: duration.normal, ease: easing.smooth }}
                        className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 block"
                    >
                        Professional Journey
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black">
                        <TextReveal>Experience</TextReveal>
                    </h2>
                </div>

                {/* Timeline Container */}
                <motion.div
                    variants={staggerContainer(0.2, 0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative border-l border-neutral-200 ml-3 md:ml-12 pl-8 md:pl-16 space-y-16"
                >
                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={staggerChild}
                            className="relative group"
                        >
                            {/* Timeline Node */}
                            <span
                                className="absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 rounded-full border border-neutral-200 bg-white group-hover:bg-black group-hover:border-black transition-all duration-300"
                            >
                                {/* Glowing dot inside */}
                                <span className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:animate-ping" />
                            </span>

                            {/* Content Card */}
                            <div className="grid md:grid-cols-12 gap-6 items-start">
                                {/* Date Range (Stick to top on mobile) */}
                                <div className="md:col-span-3">
                                    <span className="text-sm font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                                        {item.period}
                                    </span>
                                    <h4 className="text-lg md:text-xl font-bold text-black">
                                        {item.company}
                                    </h4>
                                </div>

                                {/* Role & Description */}
                                <div className="md:col-span-9">
                                    <h3 className="text-2xl font-semibold mb-4 text-black group-hover:text-neutral-700 transition-colors">
                                        {item.role}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed mb-6 max-w-2xl">
                                        {item.description}
                                    </p>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 group-hover:border-neutral-400 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
