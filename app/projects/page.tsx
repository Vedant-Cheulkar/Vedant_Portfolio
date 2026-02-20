'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { featuredProjects, allProjects } from '../lib/data';

export default function ProjectsPage() {
    return (
        <main className="min-h-screen py-24 container-fluid">
            {/* Back Link */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </motion.div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-16"
            >
                <span className="text-xs uppercase tracking-widest text-muted block mb-4">
                    All Work
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Projects
                </h1>
                <p className="text-lg text-muted max-w-2xl">
                    A collection of projects I&apos;ve worked on, from mobile apps to web applications,
                    showcasing my journey as a developer.
                </p>
            </motion.div>

            {/* Featured Projects */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-24"
            >
                <h2 className="text-2xl font-bold mb-8">Featured</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {featuredProjects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="group block"
                        >
                            <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-muted transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-3 py-1 bg-accent/10 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.section>

            {/* All Projects Grid */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">All Projects</h2>
                    <a
                        href="https://github.com/Vedant-Cheulkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                    >
                        <Github size={16} />
                        View GitHub Profile
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allProjects.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 * index }}
                            className="group p-6 border border-accent/30 hover:border-accent rounded-lg transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <Github size={24} className="text-muted" />
                                <ExternalLink size={16} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-muted transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-muted/80 mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.slice(0, 3).map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs text-muted/60"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.section>
        </main>
    );
}
