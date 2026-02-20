// MagneticButton — rewritten with useMotionValue for consistency
// Uses springs instead of setState to avoid re-renders on every mouse move
'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    [key: string]: any;
}

export default function MagneticButton({
    children,
    className = '',
    href,
    onClick,
    ...rest
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Motion values + springs — no re-renders on mouse move
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3);
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Wrapper = href ? motion.a : motion.button;
    const wrapperProps = href ? { href } : { onClick };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block"
        >
            <Wrapper
                {...wrapperProps}
                {...rest}
                style={{ x: springX, y: springY }}
                className={`inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 ${className}`}
            >
                {children}
            </Wrapper>
        </div>
    );
}
