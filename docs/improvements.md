# Portfolio Improvements — Prioritised Roadmap

> **Created:** 2026-04-03 | **Status:** Draft

---

## 🔴 Critical (Do These First)

### 1. SEO is completely missing

A portfolio exists to be **found**. Right now there's no `<meta description>`, no Open Graph tags, no `robots.txt`, no sitemap, and no structured data. If someone shares your link on LinkedIn or Slack, it'll show a blank preview card.

**What to do:**
- Add `<meta name="description">` and Open Graph / Twitter card meta tags to `index.html`
- Create `/public/robots.txt` and `/public/sitemap.xml`
- Add `Person` JSON-LD schema (enables Google's Knowledge Panel for your name)
- Add a descriptive `<title>` with your name (currently generic: "Senior Mobile Engineer | Portfolio")

**Files to change:** `index.html`, new `public/` directory

---

### 2. Gemini API key is exposed client-side

`vite.config.ts` injects `GEMINI_API_KEY` directly into the frontend bundle via `process.env.GEMINI_API_KEY`. Anyone can extract it from browser DevTools → Sources.

**What to do:**
- **Option A:** Remove it entirely (it's unused right now)
- **Option B:** Proxy calls through an Express backend (you already have `express` as a dependency) so the key only lives server-side

**Files to change:** `vite.config.ts`

---

### 3. Remove unused heavyweight dependencies

`@google/genai`, `@vis.gl/react-google-maps`, `express`, and `dotenv` are all installed but **never imported** in any source file. They bloat `node_modules` and may accidentally leak into the client bundle.

**What to do:**
- Run `npm uninstall @google/genai @vis.gl/react-google-maps express dotenv @types/express`
- Remove corresponding `define` entries from `vite.config.ts`
- Re-add them individually when you actually implement AI or Maps features

**Files to change:** `package.json`, `vite.config.ts`

---

## 🟡 High Impact (Architecture & Performance)

### 4. Split the monolith files

`App.tsx` is **180KB / 3630 lines** — every component in the app lives in a single file. This hurts maintainability and prevents code-splitting, meaning the browser downloads everything before rendering anything.

**What to do:**
- Extract each section into its own file under `src/sections/`:
  ```
  src/sections/HeroSection.tsx
  src/sections/AboutSection.tsx
  src/sections/TechMarquee.tsx
  src/sections/ImpactMetricsSection.tsx
  src/sections/EngineeringPrinciplesSection.tsx
  src/sections/SystemArchitectureSection.tsx
  src/sections/EngineeringDeepDivesSection.tsx
  src/sections/WorkSection.tsx
  src/sections/InteractiveTerminal.tsx
  src/sections/ThoughtLeadershipSection.tsx
  src/sections/OpenSourceSection.tsx
  src/sections/ContactSection.tsx
  ```
- Extract widget components into `src/widgets/`:
  ```
  src/widgets/TradingWidget.tsx
  src/widgets/FlightWidget.tsx
  src/widgets/SecureChatWidget.tsx
  src/widgets/InsuranceWidget.tsx
  src/widgets/DatingMatchWidget.tsx
  src/widgets/StreamingWidget.tsx
  src/widgets/MapMarkersWidget.tsx
  src/widgets/MapRouteWidget.tsx
  src/widgets/PushNotifWidget.tsx
  src/widgets/DownloadWidget.tsx
  ```
- Extract shared components into `src/components/`:
  ```
  src/components/MobileMockup.tsx
  src/components/SimpleIcon.tsx
  src/components/Slider.tsx
  ```
- Lazy-load below-fold sections using `React.lazy()` + `<Suspense>`:
  ```tsx
  const SystemArchitectureSection = React.lazy(
    () => import('./sections/SystemArchitectureSection')
  );
  ```

**Files to change:** `src/App.tsx` (split into ~25 new files)

---

### 5. Centralise the design system

Every colour is hardcoded hundreds of times across 5000+ lines (`text-[#60a5fa]`, `bg-[#0f172a]`, etc.). You've already built **11 `replace*.ts` regex scripts** to cope with rebranding — that's a smell.

**What to do:**
- Define all brand colours as Tailwind `@theme` tokens in `src/index.css`:
  ```css
  @theme {
    --color-bg-primary: #080a0f;
    --color-bg-secondary: #0b0e14;
    --color-bg-card: #0f172a;
    --color-bg-surface: #161b27;
    --color-border: #1e2a3a;
    --color-border-hover: #2d3f55;
    --color-text-primary: #f8fafc;
    --color-text-secondary: #94a3b8;
    --color-text-muted: #475569;
    --color-accent-blue: #60a5fa;
    --color-accent-green: #4ade80;
    --color-accent-amber: #fbbf24;
    --color-accent-purple: #a78bfa;
    --color-accent-pink: #f472b6;
    --color-accent-cyan: #54c5f8;
    --color-accent-orange: #f97316;
    --color-accent-red: #f87171;
  }
  ```
- Replace every hardcoded hex with the semantic token:
  - `text-[#60a5fa]` → `text-accent-blue`
  - `bg-[#0f172a]` → `bg-bg-card`
  - `border-[#1e2a3a]` → `border-border`
- Delete all `replace*.ts` scripts — they become unnecessary
- To rebrand, change **one file** (`src/index.css`) instead of running regex across thousands of lines

**Files to change:** `src/index.css`, `src/App.tsx`, `src/HowItWorksSection.tsx`, `index.html`

---

### 6. Add a `public/` directory for static assets

`avatar.png` is referenced in code but there's no clear static asset directory. Vite serves files from `/public/` as static assets at the root URL.

**What to do:**
- Create `/public/` directory
- Move `avatar.png` into `/public/`
- Add `og-image.png` (1200×630px) for social sharing previews
- Add `favicon.ico` and `apple-touch-icon.png`
- Add `resume.pdf` (currently referenced by the nav's "↓ Resume" button linking to `/resume.pdf`)

**Files to change:** New `/public/` directory, update any asset references

---

## 🟢 Polish (Differentiation & UX)

### 7. Make the Interactive Terminal actually useful

The terminal only responds to 4 hardcoded strings (`whoami`, `skills`, `contact`, `experience`). For a **staff engineer** portfolio, this is a missed opportunity to demonstrate technical depth.

**What to do:**
- Add richer commands: `projects --filter flutter`, `resume --download`, `architecture --show`, `certifications`
- Consider connecting it to Gemini AI to answer freeform questions about your experience (would require implementing the Express backend proxy from item #2)
- Add tab-completion and command history (up/down arrow)
- Make it a primary navigation tool for technical recruiters

**Files to change:** `src/App.tsx` → `InteractiveTerminal` component

---

### 8. Add real project links and evidence

The `WorkSection` projects and `ThoughtLeadershipSection` items all point to `href="#"` placeholder URLs. Credibility requires proof.

**What to do:**
- Link `ThoughtLeadershipSection` items to real blog posts, recorded talks, or slide decks
- Link `OpenSourceSection` repos to actual GitHub URLs (two already have real URLs: `hatch` and `Easy-Folder-Picker`)
- For company work you can't share publicly: add anonymised architecture diagrams, performance before/after screenshots, or written case studies
- Add testimonials or recommendation quotes from colleagues

**Files to change:** `src/App.tsx` → `WorkSection`, `ThoughtLeadershipSection`

---

### 9. Accessibility improvements

Several interactive elements lack proper accessibility support. This matters for inclusive design and is something a staff engineer should model.

**What to do:**
- Add `aria-label` attributes to all icon-only buttons and links
- Improve colour contrast on `text-[#334155]` over `bg-[#0f172a]` (currently fails WCAG AA)
- Add keyboard navigation to the interactive SVG diagrams (Architecture, Startup Path, Auth Sequence)
- Ensure the noise overlay (`.noise-bg`, `z-index: 50`) has `aria-hidden="true"` to prevent screen reader interference
- Add proper `alt` text to all images (some use generic strings like `"tech-logo"`)
- Test with VoiceOver/TalkBack

**Files to change:** `src/App.tsx`, `src/HowItWorksSection.tsx`, `src/index.css`

---

### 10. Add page load performance metrics

Your portfolio **demonstrates** mobile performance expertise (startup critical path diagram, 55% TTI improvement). Practice what you preach by optimising the portfolio itself.

**What to do:**
- Add `<link rel="preload">` for Space Grotesk and JetBrains Mono fonts to eliminate FOUT
- Add `loading="lazy"` to below-fold images (Unsplash backgrounds, Picsum thumbnails)
- Convert `avatar.png` to WebP/AVIF with a `<picture>` fallback
- Run Lighthouse and aim for 90+ Performance score
- Consider embedding the Lighthouse score as a badge in the footer — that's a flex for a performance-focused engineer
- Add `<link rel="dns-prefetch">` for external domains (`fonts.googleapis.com`, `cdn.jsdelivr.net`, `images.unsplash.com`)

**Files to change:** `index.html`, image assets

---

## 📋 Quick Wins (< 30 min each)

| # | Task | Why | File(s) |
|---|------|-----|---------|
| A | Add `favicon.ico` + Apple touch icon | Browser tab shows default Vite icon | `public/favicon.ico`, `index.html` |
| B | Add `<link rel="canonical">` | Prevents duplicate content issues | `index.html` |
| C | Clean up dev utility scripts | `fetch.js`, `fetch.ts`, `replace*.ts` are scaffolding left in the repo | Delete 13 files from `src/` |
| D | Update `README.md` | Currently 122 bytes — first thing people see on GitHub | `README.md` |
| E | Add `"homepage"` and `"repository"` to `package.json` | Standard for open-source projects | `package.json` |
| F | Fix the `"name"` field in `package.json` | Currently `"react-example"` — should be `"mobile-engineer-portfolio"` | `package.json` |
| G | Move nav + about CSS from inline `<style>` to `src/index.css` | 550 lines of inline CSS in `index.html` is hard to maintain | `index.html`, `src/index.css` |

---

## Suggested Implementation Order

```
Phase 1 — Foundation (Week 1)
├── #1  SEO meta tags, robots.txt, sitemap
├── #2  Remove exposed API key
├── #3  Remove unused dependencies
├── Quick wins A, B, C, D, E, F
│
Phase 2 — Architecture (Week 2–3)
├── #4  Split monolith into sections/widgets/components
├── #5  Centralise design tokens
├── #6  Set up /public/ directory with assets
├── Quick win G
│
Phase 3 — Polish (Week 4+)
├── #7  Enhanced Interactive Terminal
├── #8  Add real project links
├── #9  Accessibility audit & fixes
└── #10 Performance optimisation + Lighthouse
```
