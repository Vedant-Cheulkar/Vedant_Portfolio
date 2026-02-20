import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';

import ErrorBoundary from './components/ErrorBoundary';
import { siteConfig } from './lib/data';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: ['developer', 'tester', 'portfolio', 'react native', 'mobile development'],
    authors: [{ name: siteConfig.name }],
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        type: 'website',
        images: ['/og-image.png'],
    },
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <ErrorBoundary>
                    <Preloader />
                    <ScrollProgress />
                    <Navbar />
                    <main>{children}</main>
                </ErrorBoundary>
            </body>
        </html>
    );
}
