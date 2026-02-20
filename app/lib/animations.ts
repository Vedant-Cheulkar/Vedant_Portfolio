// Centralized animation configuration for consistent motion across the portfolio
// All timing, easing, and variant definitions live here

// ─── Easing Curves ───────────────────────────────────────────────
export const easing = {
    // Primary easing — smooth deceleration, used for most transitions
    smooth: [0.22, 1, 0.36, 1] as const,
    // Bounce easing — slight overshoot for playful elements
    bounce: [0.68, -0.55, 0.265, 1.55] as const,
    // Snappy easing — quick start, smooth end
    snappy: [0.25, 0.1, 0.25, 1] as const,
};

// ─── Duration Presets ────────────────────────────────────────────
export const duration = {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
    slower: 1.2,
};

// ─── Spring Configs ──────────────────────────────────────────────
export const spring = {
    // Default spring — balanced feel
    default: { type: 'spring' as const, stiffness: 300, damping: 30 },
    // Soft spring — gentle, floaty movement
    soft: { type: 'spring' as const, stiffness: 150, damping: 15, mass: 0.5 },
    // Stiff spring — snappy feedback
    stiff: { type: 'spring' as const, stiffness: 500, damping: 28, mass: 0.5 },
    // Bouncy spring — for playful interactions
    bouncy: { type: 'spring' as const, stiffness: 400, damping: 10 },
};

// ─── Reusable Variants ──────────────────────────────────────────

// Fade up — standard section reveal
export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: duration.slow, delay, ease: easing.smooth },
    }),
};

// Fade in — simple opacity
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        transition: { duration: duration.normal, delay, ease: easing.smooth },
    }),
};

// Slide from left
export const slideLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: duration.slow, delay, ease: easing.smooth },
    }),
};

// Slide from right
export const slideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: duration.slow, delay, ease: easing.smooth },
    }),
};

// Stagger container — for child element staggering
export const staggerContainer = (staggerDelay: number = 0.1, delayChildren: number = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelay,
            delayChildren,
        },
    },
});

// Stagger child — individual items within stagger container
export const staggerChild = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration.normal, ease: easing.smooth },
    },
};

// Scale in — for modals and overlays
export const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: duration.fast, ease: easing.smooth },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: duration.fast, ease: easing.snappy },
    },
};

// Page transition
export const pageTransition = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration.normal, ease: easing.smooth },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: duration.fast, ease: easing.snappy },
    },
};
