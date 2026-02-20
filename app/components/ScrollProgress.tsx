// ScrollProgress — enhanced with subtle glow and smoother easing
'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    // Smoother spring with custom damping
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 50,
        restDelta: 0.001,
    });

    // Glow opacity — increases as you scroll further
    const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0.4, 0.8]);

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-[2px]">
            <motion.div
                className="h-full bg-foreground origin-left"
                style={{ scaleX }}
            />
            {/* Subtle glow effect beneath the progress bar */}
            <motion.div
                className="h-[6px] bg-foreground/20 blur-sm origin-left -mt-[2px]"
                style={{ scaleX, opacity: glowOpacity }}
            />
        </div>
    );
}
