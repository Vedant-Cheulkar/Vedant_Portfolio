'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useCursor } from '../context/CursorContext';
import { useReducedMotion } from '../lib/hooks';

interface ProjectCardProps {
    title: string;
    year: string;
    category: string;
    description?: string;
    image: string;
    href: string;
    featured?: boolean;
    onViewDetails?: () => void;
    imageFit?: "cover" | "contain";
}

export default function ProjectCard({
    title,
    year,
    category,
    description,
    image,
    href,
    featured = false,
    index,
    onViewDetails,
    imageFit = "cover",
}: ProjectCardProps & { index: number }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { setCursorType, setCursorText } = useCursor();
    const prefersReduced = useReducedMotion();
    const cardRef = useRef<HTMLDivElement>(null);

    // ─── 3D Tilt effect ─────────────────────────────────────────
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const smoothRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
    const smoothRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

    // Image parallax within card on hover
    const imgX = useTransform(smoothRotateY, [-15, 15], [-10, 10]);
    const imgY = useTransform(smoothRotateX, [-15, 15], [10, -10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (prefersReduced || !cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        rotateX.set(y * -15); // Tilt on X axis based on Y position
        rotateY.set(x * 15);  // Tilt on Y axis based on X position
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
        setCursorType('default');
        setCursorText('');
    };

    const handleMouseEnter = () => {
        setCursorType('text');
        setCursorText('View');
    };

    const handleClick = (e: React.MouseEvent) => {
        // If there's a modal handler, use it instead of navigating
        if (onViewDetails) {
            e.preventDefault();
            onViewDetails();
        }
    };

    const isExternal = href.startsWith('http');

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={prefersReduced ? {} : {
                rotateX: smoothRotateX,
                rotateY: smoothRotateY,
                transformPerspective: 1200,
            }}
            className="group will-change-transform"
        >
            <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                onClick={handleClick}
                className="block"
            >
                {/* Image Container with inner parallax */}
                <div className={`relative overflow-hidden rounded-lg bg-accent/5 mb-6 ${featured ? 'aspect-[2/1]' : 'aspect-[4/3]'}`}>
                    <motion.div
                        className="absolute inset-[-10px]" // Slightly larger to allow parallax movement
                        style={prefersReduced ? {} : { x: imgX, y: imgY }}
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className={`transition-all duration-700 ${imageFit === 'contain' ? 'object-contain' : 'object-cover'} ${imageLoaded ? 'blur-0 scale-100' : 'blur-lg scale-105'}`}
                            onLoad={() => setImageLoaded(true)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </motion.div>

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* View indicator on hover */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <span className="hidden group-hover:flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs uppercase tracking-wider font-medium">
                            View Project
                        </span>
                    </motion.div>
                </div>

                {/* Content Below Image */}
                <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 group-hover:text-muted transition-colors duration-300">
                            {title}
                        </h3>
                        {description && (
                            <p className="text-sm text-muted/80 mb-3 max-w-lg">
                                {description}
                            </p>
                        )}
                        <div className="flex items-center gap-3 text-sm text-muted">
                            <span>{category}</span>
                            <span className="w-1 h-1 bg-muted rounded-full" />
                            <span>{year}</span>
                        </div>
                    </div>

                    {/* Index Number */}
                    <span className="text-xs font-mono text-muted/50 pt-1">
                        {index.toString().padStart(2, '0')}
                    </span>
                </div>
            </a>
        </motion.div>
    );
}
