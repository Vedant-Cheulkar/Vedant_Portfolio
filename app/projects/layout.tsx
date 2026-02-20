import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Vedant Cheulkar',
    description: 'A collection of projects by Vedant Cheulkar — from React Native mobile apps to full-stack web applications.',
    openGraph: {
        title: 'Projects | Vedant Cheulkar',
        description: 'A collection of projects by Vedant Cheulkar — from React Native mobile apps to full-stack web applications.',
        type: 'website',
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
