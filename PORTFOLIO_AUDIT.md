# Portfolio Audit & Improvement Plan

## 1. Executive Summary
**Score:** 8.5/10
**Verdict:** Strong "Dark Mode" aesthetic with premium feel. Code structure is senior-level.
**Critical Issues:** Artificial loading delays (Preloader), generic stock imagery, and potential performance bottlenecks with event listeners.
**Updates:** Custom Cursor removed to resolve lag issues.

---

## 2. 🚨 HOW TO START (High Priority Fixes)

These are the changes you should make **immediately** to instantly boost the quality and performance of your portfolio.

### A. Remove Artificial Delay in Preloader
**File:** `app/components/Preloader.tsx`
**Why:** Recruiters spend ~6 seconds deciding. Don't waste 1.2s of that on a black screen.
**Action:**
1. Remove the `setTimeout` inside `useEffect`.
2. Instead, rely on `window.onload` or simply a shorter, real-time progress simulation that finishes as soon as components mount.
3. [x] **Done.** Wait time reduced significantly.

### B. Replace Stock Photography
**File:** `app/components/About.tsx` / `app/lib/data.ts`
**Why:** Using a stock photo (Unsplash ID `photo-1507003211169`) immediately breaks trust. It looks like a template.
**Action:**
- [x] Replace the `portraitImage` URL in `app/lib/data.ts` with a photo of yourself.

### C. Fix Navigation Logic
**File:** `app/components/Navbar.tsx`
**Why:** Hash links (like `#about`) fail if the user is on a sub-page (like `/projects`).
**Action:**
- [x] Update `navLinks` handling. If `pathname !== '/'`, prepend `/` to the hash link (e.g., `/#about`).

---

## 3. UI/UX Improvements

### Typography & Hierarchy
- **Hero Section (`app/components/Hero.tsx`):**
  - [x] Changed `leading` to `leading-none` for better visual hierarchy.
- **Contrast Check (`app/components/ProjectGrid.tsx`):**
  - [x] Increased `text-muted` contrast to `#a1a1aa`.

### Animations & Interactions
- **Performance (`app/components/ProjectCard.tsx`):**
  - [x] Added `will-change-transform` to tilt cards.
- **Mobile Hints:**
  - [x] Added "Swipe" indicator for mobile Hero.
- **Lag Reduction:**
  - [x] **Removed Custom Cursor** as it was causing significant performance issues.

---

## 4. Performance & Next.js Optimization

### Image Optimization
**File:** `app/components/ProjectCard.tsx`
**Action:**
- [x] Updated `sizes` prop to be responsive.

### Accessibility (SEO)
**Files:** `Navbar.tsx`, `About.tsx`
**Action:**
- [x] Add `aria-label` to icon-only buttons (like Social Links).

### Code Splitting
- [x] Lazy loaded `ProjectModal`.

---

## 5. Complete Checklist

### Phase 1: Critical (Do Today)
- [x] Remove `setTimeout` from `Preloader.tsx`
- [x] Upload real photo to `public/projects/photo.png` and update `data.ts`
- [x] Fix Navbar links to support cross-page navigation (e.g., `/#about`)
- [x] Remove causing lag Custom Cursor

### Phase 2: Polish (Do Tomorrow)
- [x] Add `will-change-transform` to tilt cards
- [x] Improve `Image` sizes prop in `ProjectCard`
- [x] Increase text contrast for `text-muted`
- [x] Add `aria-labels` to social icons

### Phase 3: Enhancements (Optional)
- [x] Replace `mailto:` with a real contact form (UI implemented, backend ready)
- [x] Add "Swipe" indicator for mobile Hero
- [ ] Replace CSS noise base64 with optimized SVG overlay
