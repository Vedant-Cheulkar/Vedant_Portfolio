'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import ProjectCard from './ProjectCard';

const ProjectModal = dynamic(() => import('./ProjectModal'), { ssr: false });
import TextReveal from './ui/TextReveal';
import { staggerContainer, staggerChild, easing, duration } from '../lib/animations';

import { homeProjects } from '../lib/data';

export default function ProjectGrid() {
    const [selectedProject, setSelectedProject] = useState<typeof homeProjects[0] | null>(null);

    return (
        <section id="work" className="py-32 md:py-40">
            <div className="container-fluid">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-20">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: duration.normal, ease: easing.smooth }}
                            className="text-xs font-mono uppercase tracking-widest text-muted/60 mb-4 block"
                        >
                            Selected Work
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                            <TextReveal>Projects</TextReveal>
                        </h2>
                    </div>
                    <motion.a
                        href="/projects"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: duration.normal }}
                        className="hidden md:flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
                    >
                        View All
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </motion.a>
                </div>

                {/* Project Grid with staggered reveal */}
                <motion.div
                    variants={staggerContainer(0.15, 0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
                >
                    {homeProjects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            variants={staggerChild}
                            className={project.featured ? 'md:col-span-2' : ''}
                        >
                            <ProjectCard
                                {...project}
                                index={i + 1}
                                onViewDetails={() => setSelectedProject(project)}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile "View All" link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: duration.normal, ease: easing.smooth }}
                    className="md:hidden mt-12 text-center"
                >
                    <a href="/projects" className="text-sm text-muted hover:text-foreground transition-colors">
                        View All Projects →
                    </a>
                </motion.div>
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
