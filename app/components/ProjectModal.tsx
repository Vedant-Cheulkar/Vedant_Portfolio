// Project detail modal — opens with AnimatePresence for smooth enter/exit
// Shows larger image preview, tech stack, summary, and links
'use client';

import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Github } from 'lucide-react';
import { scaleIn, easing } from '../lib/animations';

interface ProjectModalProps {
    project: {
        title: string;
        year: string;
        category: string;
        description?: string;
        image: string;
        href: string;
        featured?: boolean;
    };
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const isExternal = project.href.startsWith('http');
    const techStack = project.category.split('•').map(t => t.trim());

    // Close on Escape key — keyboard accessibility
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [handleKeyDown]);

    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: easing.smooth }}
                className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm cursor-pointer"
                onClick={onClose}
            />

            {/* Modal content */}
            <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-4 md:inset-8 lg:inset-16 z-[201] bg-background border border-accent/20 rounded-xl overflow-hidden flex flex-col"
                role="dialog"
                aria-modal="true"
                aria-label={`${project.title} project details`}
            >
                {/* Header with close button */}
                <div className="flex items-center justify-between p-6 border-b border-accent/10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h2>
                        <span className="text-xs text-muted mt-1 block">{project.year}</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                        aria-label="Close modal"
                        autoFocus
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable body */}
                <div className="flex-1 overflow-y-auto p-6">
                    {/* Large image preview */}
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-accent/5 mb-8">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 80vw"
                            priority
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Description */}
                        <div className="md:col-span-2">
                            <h3 className="text-xs uppercase tracking-widest text-muted mb-4">About</h3>
                            <p className="text-lg text-muted/90 leading-relaxed">
                                {project.description || 'A project showcasing modern development practices and clean design.'}
                            </p>
                        </div>

                        {/* Tech stack + links */}
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-muted mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm px-3 py-1.5 border border-accent/30 rounded-full hover:border-foreground/30 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xs uppercase tracking-widest text-muted mb-4">Links</h3>
                            <div className="flex flex-col gap-3">
                                {isExternal && (
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm hover:text-muted transition-colors group"
                                    >
                                        <Github size={16} />
                                        <span className="hover-line">View on GitHub</span>
                                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
