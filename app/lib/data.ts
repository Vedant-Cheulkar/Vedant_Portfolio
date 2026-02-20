// ─── Centralized Data ────────────────────────────────────────────────────────
// All content lives here — change text/links without touching component files.
// Components import from this file instead of defining data inline.

import { Github, Linkedin, Twitter } from 'lucide-react';

// ─── Site-wide Config ───────────────────────────────────────────────────────

export const siteConfig = {
    name: 'Vedant Cheulkar',
    title: 'Vedant Cheulkar | Developer & Tester',
    description:
        'Personal portfolio of Vedant Cheulkar — A passionate developer and tester building mobile apps and ensuring software quality.',
    email: 'vedantcheulkar29032004@gmail.com',
    location: 'Navi Mumbai',
    role: 'IT Engineering Student & React Native Developer',
    tagline: 'Developer',
    resumePath: '/Vedant Cheulkar.pdf',
    github: 'https://github.com/Vedant-Cheulkar',
};

// ─── Navigation ─────────────────────────────────────────────────────────────

export const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
];

// ─── Social Links ───────────────────────────────────────────────────────────

export const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Vedant-Cheulkar', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/VedantCheulkar', icon: Linkedin },
    { name: 'Twitter', href: 'https://x.com/VedantCheulkar', icon: Twitter },
];

// ─── Skills ─────────────────────────────────────────────────────────────────

export const skills = [
    'React Native',
    'Expo',
    'TypeScript',
    'Next.js',
    'Firebase',
    'Node.js',
    'Express',
    'PostgreSQL',
    'MongoDB',
    'Postman',
    'Git',
];

// ─── Experience ─────────────────────────────────────────────────────────────

export const experience = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "Kstar Technology LLP",
        period: "Feb 2026 - Present",
        description: "Leading frontend development for 'Elite-Pro' (School Admin Dashboard). Implementing responsive UI designs and optimizing component performance.",
        skills: ["React.js", "API Integration", "TypeScript", "Figma Integration"]
    },
    {
        id: 2,
        role: "QA Tester Intern",
        company: "Kstar Technology LLP",
        period: "Dec 2025 - Present",
        description: "Ensuring pixel-perfect UI implementation and functional stability. Notable projects include Vittam PWA, Mauli Marketing App, and UltraTech's 'Mission Happiness'.",
        skills: ["Functional Testing", "API Testing", "Cosmetic UI Testing"]
    },
];

// ─── Homepage Projects ──────────────────────────────────────────────────────

export interface Project {
    id: number;
    title: string;
    year: string;
    category: string;
    description: string;
    image: string;
    href: string;
    featured?: boolean;
    imageFit?: "cover" | "contain";
}

export const homeProjects: Project[] = [
    {
        id: 1,
        title: 'Elite-Pro',
        year: '2026',
        category: 'React.js • TypeScript • API Integration',
        description:
            'Leading frontend development for School Admin Dashboard. Implementing responsive UI designs and optimizing performance.',
        image: '/projects/dashboard-placeholder.jpg', // Using a placeholder, user can update
        href: 'https://github.com/Vedant-Cheulkar',
        featured: true,
        imageFit: 'cover',
    },
    {
        id: 2,
        title: 'Vedant Portfolio',
        year: '2026',
        category: 'Next.js • Tailwind CSS • Framer Motion',
        description:
            'Modern developer portfolio featuring glassmorphism, smooth animations, and a high-performance architecture.',
        image: '/projects/my.png',
        href: 'https://github.com/Vedant-Cheulkar/Vedant_Portfolio',
        featured: false,
        imageFit: 'contain',
    },
    {
        id: 3,
        title: 'Raksha Setu',
        year: '2025',
        category: 'React Native • Firebase • Gemini AI',
        description:
            'Women safety app with SOS alerts, live tracking, AI chatbot, legal assistant & community forum.',
        image: '/projects/rakshasetu-2.png',
        href: 'https://github.com/PratikPisal4304/17-TEAM_RAKSHASETU',
        featured: false,
        imageFit: 'contain',
    },
];

// ─── /projects Page Data ────────────────────────────────────────────────────

export const featuredProjects = [
    {
        id: 1,
        title: 'Raksha Setu',
        description:
            'Women safety app with SOS alerts, live tracking, AI chatbot, legal assistant & community forum.',
        tech: ['React Native', 'Firebase', 'Gemini AI', 'Google Maps'],
        image: '/projects/rakshasetu-2.png',
        github: 'https://github.com/PratikPisal4304/17-TEAM_RAKSHASETU',
        featured: true,
    },
    {
        id: 2,
        title: 'Expenza',
        description:
            'Financial transaction tracker with real-time balance updates and secure authentication.',
        tech: ['React Native', 'Expo', 'PostgreSQL', 'Clerk'],
        image: '/projects/banner.png',
        github: 'https://github.com/Vedant-Cheulkar/Expenza',
        featured: true,
    },
];

export const allProjects = [
    {
        title: 'Expenza',
        description: 'Financial transaction tracker with real-time balance updates and secure authentication.',
        tech: ['React Native', 'Expo', 'PostgreSQL', 'Clerk'],
        github: 'https://github.com/Vedant-Cheulkar/Expenza',
    },
    {
        title: 'Cricket Auction Tool',
        description: 'Full stack cricket auction simulator with team management and bidding system.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/Vedant-Cheulkar/Cricket-Auction-Tool',
    },
    {
        title: 'CampusHub',
        description: 'Student Marketplace & Smart Xerox Platform for campus services.',
        tech: ['JavaScript', 'Web Development'],
        github: 'https://github.com/Vedant-Cheulkar/CampusHub',
    },
    {
        title: 'TelMedApp',
        description:
            'Telemedicine application for rural healthcare access through video consultations.',
        tech: ['TypeScript', 'React Native', 'Healthcare'],
        github: 'https://github.com/Vedant-Cheulkar/TelMedApp',
    },
    {
        title: 'ZennitUI',
        description: 'Frontend Clash competition project showcasing UI/UX skills.',
        tech: ['JavaScript', 'CSS', 'UI Design'],
        github: 'https://github.com/Vedant-Cheulkar/ZennitUI',
    },
    {
        title: 'Daily Sync',
        description: 'Productivity and daily logging application.',
        tech: ['JavaScript', 'Full Stack'],
        github: 'https://github.com/Vedant-Cheulkar/Daily_Sync',
    },
    {
        title: 'React Native Expo',
        description: 'Collection of React Native projects built with Expo.',
        tech: ['React Native', 'Expo', 'Mobile'],
        github: 'https://github.com/Vedant-Cheulkar/React-Native-Expo',
    },
    {
        title: 'Tic Tac Toe',
        description: 'Classic Tic Tac Toe game with clean UI.',
        tech: ['JavaScript', 'Game Dev'],
        github: 'https://github.com/Vedant-Cheulkar/Tic-Tac-Toe',
    },
    {
        title: 'Weather App',
        description: 'Weather forecasting application with location-based data.',
        tech: ['HTML', 'JavaScript', 'API'],
        github: 'https://github.com/Vedant-Cheulkar/Weather-App',
    },
    {
        title: 'StopWatch',
        description: 'Simple and elegant stopwatch application.',
        tech: ['CSS', 'JavaScript'],
        github: 'https://github.com/Vedant-Cheulkar/StopWatch',
    },
    {
        title: 'Landing Page',
        description: 'Modern landing page design.',
        tech: ['SCSS', 'HTML', 'Design'],
        github: 'https://github.com/Vedant-Cheulkar/Landing-page',
    },
];

// ─── Achievements ───────────────────────────────────────────────────────────

export const achievements = [
    {
        title: 'Odoo x Gujarat Vidyapith Hackathon 2025',
        position: 'Top 50',
        description:
            'Selected among top 50 teams from 2000+ registrations. Built "Raksha Setu" — a comprehensive women safety platform.',
        location: 'Gujarat Vidyapith, Gujarat',
        date: 'Mar 2025',
    },
    {
        title: 'Odoo x Nirman 2025',
        position: 'Top 75',
        description:
            'Selected among top 75 teams from 600+ registrations. Developed a Telemedicine App for rural healthcare access.',
        location: 'Amity University, Mumbai',
        date: 'Feb 2025',
    },
    {
        title: 'Hackcelestial 1.0',
        position: 'Top 40',
        description:
            'Developed an Alumni Portal connecting past and present students for mentorship, job referrals & events.',
        location: 'Pillai College of Engineering, Panvel',
        date: 'Aug 2024',
    },
];

// ─── About Section ──────────────────────────────────────────────────────────

export const aboutContent = {
    heading: 'A passionate developer',
    paragraphs: [
        "I'm an IT Engineering student at Pillai HOC College of Engineering & Technology, Kharghar. I specialize in building mobile applications using React Native and have experience with full-stack development.",
        "As a hackathon finalist, I've developed solutions for women safety, healthcare access, and campus connectivity. I'm also skilled in manual and API testing using Postman and currently serve as a Graphic Designer for the ACE Club.",
    ],
    // TODO: Replace with your actual portrait photo — currently using stock image
    portraitImage: "/projects/photo.png",
};
