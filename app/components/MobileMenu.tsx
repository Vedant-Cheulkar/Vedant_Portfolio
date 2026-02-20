'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useCursor } from '../context/CursorContext';
import { siteConfig } from '../lib/data';

interface MobileMenuProps {
    links: { name: string; href: string }[];
    onClose: () => void;
}

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
    const { setCursorType } = useCursor();
    const pathname = usePathname();

    const handleMouseEnter = () => setCursorType('hover');
    const handleMouseLeave = () => setCursorType('default');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background"
        >
            <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col items-center justify-center h-full gap-8"
            >
                {links.map((link) => {
                    const href = link.href.startsWith('#') && pathname !== '/' ? `/${link.href}` : link.href;
                    return (
                        <motion.a
                            key={link.name}
                            href={href}
                            variants={itemVariants}
                            onClick={onClose}
                            className="text-4xl font-bold tracking-tight hover:text-muted transition-colors"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {link.name}
                        </motion.a>
                    );
                })}

                <motion.a
                    href={`mailto:${siteConfig.email}`}
                    variants={itemVariants}
                    className="mt-8 text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {siteConfig.email}
                </motion.a>
            </motion.nav>
        </motion.div>
    );
}
