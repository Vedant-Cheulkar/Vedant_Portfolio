'use client';

import { motion } from 'framer-motion';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export default function TextReveal({
    children,
    className = '',
    delay = 0,
    staggerDelay = 0.03,
}: TextRevealProps) {
    const words = children.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: staggerDelay, delayChildren: delay },
        }),
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={`inline-flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="inline-block mr-[0.25em] overflow-hidden"
                    style={{ perspective: '1000px' }}
                >
                    <motion.span
                        className="inline-block origin-bottom"
                        variants={child}
                    >
                        {word}
                    </motion.span>
                </motion.span>
            ))}
        </motion.span>
    );
}

// Character-by-character reveal for special emphasis
export function CharacterReveal({
    children,
    className = '',
    delay = 0,
    staggerDelay = 0.02,
}: TextRevealProps) {
    const characters = children.split('');

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: staggerDelay, delayChildren: delay },
        },
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={child}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
