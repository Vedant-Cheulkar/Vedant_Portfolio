# Implementation Plan: Work Experience Section

## 1. Objective
Add a professional **Work Experience** section to showcase your internship at **Rigved Infotech**.
This section will highlight your dual role as a **Frontend Developer** and **QA Tester**, emphasizing your versatility and attention to detail (Pixel Perfect UI).

## 2. Design Concept
*   **Layout:** Vertical Timeline with glassmorphism cards.
*   **Style:** Consistent with the "Dark Mode/Premium" aesthetic. Glowing accents for the timeline nodes.
*   **Interaction:** Cards slide in on scroll.
*   **Placement:** Insert between **Hero** and **Projects** (or after Projects).
    *   *Recommendation:* `Hero -> Work Experience -> Projects -> Achievements -> About -> Contact`
    *   *Reasoning:* Experience is your most "real-world" asset right now.

## 3. Data Structure (`app/lib/data.ts`)
We will add a new `experience` array containing:

1.  **Frontend Developer Intern**
    *   **Dates:** Feb 2026 - Present
    *   **Company:** Rigved Infotech Pvt Ltd (Inferred from path, please confirm)
    *   **Focus:** Building "Elite-Pro" (School Admin Dashboard).
    *   **Tech:** React.js, Tailwind CSS? (You mentioned working as frontend, assuming similar stack).

2.  **QA Tester Intern**
    *   **Dates:** Dec 2025 - Present
    *   **Company:** Rigved Infotech Pvt Ltd
    *   **Projects:** Vittam PWA, Mauli Marketing App, Mission Happiness (UltraTech).
    *   **Key Skills:** Functional Testing, API Testing, **Pixel-Perfect UI Testing** (Figma matching).

## 4. Implementation Steps

### Step 1: Update Data
*   Modify `app/lib/data.ts` to export `workExperience` data.

### Step 2: Create Component (`app/components/Experience.tsx`)
*   Build a responsive timeline component.
*   Use `framer-motion` for entrance animations.
*   Display roles, dates, and bullet points for responsibilities.

### Step 3: Update Page Layout (`app/page.tsx`)
*   Import `Experience` component.
*   Place it immediately after `<Hero />`.

### Step 4: Update Navigation (`app/lib/data.ts` & `Navbar.tsx`)
*   Add "Experience" to the navigation menu links (`#experience`).

## 5. Timeline
*   **Estimated Time:** 20-30 minutes.

---

## Example Data Preview

```typescript
export const experience = [
    {
        id: 1,
        role: "Frontend Developer Intern",
        company: "Rigved Infotech",
        period: "Feb 2026 - Present",
        description: "Developing 'Elite-Pro', a comprehensive School Admin Dashboard. Focusing on responsive UI implementations and component architecture.",
    },
    {
        id: 2,
        role: "QA Tester Intern",
        company: "Rigved Infotech",
        period: "Dec 2025 - Present",
        description: "Ensuring quality for multiple projects including Vittam PWA and UltraTech's Mission Happiness. Specialized in Cosmetic UI Testing (Figma Pixel-Perfect), Functional Testing, and API validation.",
    },
]
```
