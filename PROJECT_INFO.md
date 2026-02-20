# Vedant Portfolio — Project Documentation

A modern, animated personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | React framework with file-based routing, SSR, and image optimization |
| **TypeScript** | Type-safe development across all components |
| **Tailwind CSS 3.4** | Utility-first CSS framework for rapid styling |
| **Framer Motion 11** | Declarative animations — scroll reveals, page transitions, spring physics |
| **Lucide React** | Lightweight icon library (ArrowRight, Github, Trophy, etc.) |
| **Inter** (Google Fonts) | Primary typeface loaded via `next/font` with `display: swap` |

---

## � Directory Structure

```
Vedant_Portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — fonts, metadata, providers, navbar, preloader
│   ├── page.tsx                  # Homepage — assembles all sections
│   ├── globals.css               # Global styles, CSS variables, noise texture, utilities
│   │
│   ├── components/               # All UI components
│   │   ├── Hero.tsx              # Full-screen hero with name, subtitle, developer/tester cards
│   │   ├── ProjectGrid.tsx       # "Selected Work" section — 4 featured project cards
│   │   ├── ProjectCard.tsx       # Individual project card with image zoom, hover effects
│   │   ├── About.tsx             # Bio, portrait, skills grid, resume download
│   │   ├── Achievements.tsx      # Hackathon awards list with trophy icons
│   │   ├── Contact.tsx           # "Let's work together" CTA with email link
│   │   ├── Footer.tsx            # Copyright, social links, back-to-top
│   │   ├── Navbar.tsx            # Fixed navbar with scroll-based backdrop blur
│   │   ├── MobileMenu.tsx        # Full-screen mobile navigation overlay
│   │   ├── Preloader.tsx         # Animated loading screen with progress bar
│   │   ├── CustomCursor.tsx      # Custom cursor with dot + trailing ring (desktop only)
│   │   ├── ScrollProgress.tsx    # Top progress bar showing scroll position
│   │   └── ui/                   # Reusable UI primitives
│   │       ├── MagneticButton.tsx   # Button that follows mouse with spring physics
│   │       └── TextReveal.tsx       # Word-by-word and character-by-character text animations
│   │
│   ├── context/
│   │   └── CursorContext.tsx     # React Context for custom cursor state management
│   │
│   └── projects/
│       ├── layout.tsx            # Projects page metadata (title, description)
│       └── page.tsx              # "/projects" route — featured + all projects grid
│
├── public/
│   ├── projects/                 # Project screenshots (rakshasetu-2.png, banner.png)
│   └── Vedant Cheulkar.pdf       # Downloadable resume
│
├── tailwind.config.ts            # Tailwind theme — custom colors, fonts, animations
├── next.config.js                # Next.js config — remote image patterns
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.js             # PostCSS with Tailwind and Autoprefixer
├── package.json                  # Dependencies and scripts
└── .eslintrc.json                # ESLint configuration
```

---

## 🏗️ Architecture & Design Decisions

### App Router (Next.js 14)
Uses the `/app` directory with file-based routing. The root `layout.tsx` wraps all pages with:
- **CursorProvider** — React Context for cursor state shared across all components
- **CustomCursor** — renders the animated cursor dot + ring
- **Preloader** — shows a loading animation on first visit
- **ScrollProgress** — progress bar at the top of the viewport
- **Navbar** — fixed header with scroll-based styling

### Component Pattern
Every component is a **client component** (`'use client'`) because they use Framer Motion animations and/or the `useCursor` hook. Components follow a pattern of:
1. Framer Motion `initial` / `whileInView` for scroll-triggered animations
2. `useCursor()` hook for custom cursor interaction states
3. Tailwind classes for responsive styling

### Custom Cursor System
A custom cursor system using React Context (`CursorContext`):
- **States:** `default` (small dot), `hover` (expanded dot), `text` (expanded with label), `hidden`
- Components call `setCursorType()` and `setCursorText()` on mouse events
- `CustomCursor.tsx` renders two elements: a main dot (with `mix-blend-difference`) and a trailing ring
- Automatically disabled on touch devices

### Styling Approach
- **Tailwind CSS** for component-level styling with custom theme tokens
- **CSS Variables** in `globals.css` for core design tokens (`--background`, `--foreground`, `--muted`, `--accent`)
- **Noise texture** via inline SVG on `body::before` for subtle film grain effect
- Dark theme (`#0a0a0a` background, `#ffffff` foreground)

### Animation Strategy
All animations use **Framer Motion** with consistent easing `[0.22, 1, 0.36, 1]` (custom cubic bezier). Key patterns:
- `whileInView` for scroll-triggered reveals (sections, cards)
- `spring` physics for magnetic button and cursor movement
- `CharacterReveal` / `TextReveal` for staggered text animations
- `AnimatePresence` for mount/unmount transitions (mobile menu, preloader)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/Vedant-Cheulkar/Vedant_Portfolio.git

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at **http://localhost:3000**

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Homepage — Hero, Projects, About, Achievements, Contact, Footer |
| `/projects` | Full projects archive — featured projects with images + all GitHub repos |

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| `background` | `#0a0a0a` | Page background |
| `foreground` | `#ffffff` | Primary text |
| `muted` | `#888888` | Secondary text, labels |
| `accent` | `#333333` | Borders, dividers, subtle backgrounds |

### Typography
- **Font:** Inter (loaded via `next/font/google`)
- **Headings:** Bold, tight tracking (`tracking-tight`, `tracking-tighter`)
- **Labels:** Uppercase, widest tracking, extra-small (`text-xs uppercase tracking-widest`)

### Responsive Breakpoints
Uses Tailwind's default breakpoints:
- `md` (768px) — tablet layout shifts
- `lg` (1024px) — desktop grid layouts
- `xl` (1280px) — larger hero typography
