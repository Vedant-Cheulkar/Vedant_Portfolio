'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import MobileMenu from './MobileMenu';

import { usePathname } from 'next/navigation';

import { siteConfig, navLinks } from '../lib/data';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { setCursorType } = useCursor();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = () => setCursorType('hover');
    const handleMouseLeave = () => setCursorType('default');

    // Handle hash links from other pages
    const getHref = (href: string) => {
        if (href.startsWith('#') && pathname !== '/') {
            return `/${href}`;
        }
        return href;
    };

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
                    }`}
            >
                <nav className="container-fluid flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="/"
                        className="text-lg font-bold tracking-tight"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Vedant.
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={getHref(link.href)}
                                className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors duration-200"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-xs uppercase tracking-widest text-foreground hover-line"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            Let&apos;s Talk
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <MobileMenu
                        links={navLinks}
                        onClose={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
