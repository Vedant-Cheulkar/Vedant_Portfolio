// Page transition wrapper — fade-up on enter
// Note: Exit animations require a layout-level AnimatePresence which
// Next.js App Router doesn't natively support, so we only animate enter.
'use client';

import { motion } from 'framer-motion';
import { easing, duration } from './lib/animations';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.normal, ease: easing.smooth }}
        >
            {children}
        </motion.div>
    );
}
