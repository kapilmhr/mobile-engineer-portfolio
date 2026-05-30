# Mobile Engineer Portfolio — Technical Documentation

> **Generated:** 2026-04-03 | **Framework:** React 19 + Vite 6 + TypeScript 5.8

---

## Summary Table

| Category       | Technology / Library                                    |
| -------------- | ------------------------------------------------------- |
| **Framework**  | React 19 + Vite 6 + TypeScript 5.8                      |
| **Styling**    | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) + vanilla CSS |
| **Icons**      | `lucide-react` v0.546 + `simple-icons` v16.12           |
| **Animation**  | `motion` (Framer Motion v12.23) + CSS keyframes          |
| **AI**         | `@google/genai` v1.29 (dependency present, **not imported in source**) |
| **Maps**       | `@vis.gl/react-google-maps` v1.7 (dependency present, **not imported in source**) |
| **Routing**    | None — Single Page Application with `#hash` scroll navigation |
| **Server**     | `express` v4.21 (dependency present, **not used in current source**) |
| **Fonts**      | Google Fonts: Space Grotesk (display) + JetBrains Mono (mono) |

---

## 1. Project Structure

### 1.1 Complete File Tree

```
mobile-engineer-portfolio/
├── .env.example                  # Environment variable template
├── .git/                         # Git repository
├── .gitignore                    # Git ignore rules
├── README.md                     # Project readme
├── app/
│   └── applet/
│       └── fetch.cjs             # CommonJS fetch utility (scraping tool)
├── docs/                         # Documentation (this file)
├── fetch.js                      # Root-level fetch utility (scraping tool)
├── index.html                    # Vite entry point — contains nav, inline CSS, JS
├── metadata.json                 # AI Studio project metadata
├── package-lock.json             # Lockfile
├── package.json                  # Dependencies & scripts
├── src/
│   ├── App.tsx                   # Main app component (3630 lines, 180KB)
│   ├── HowItWorksSection.tsx     # "How It Works" section (1751 lines, 87KB)
│   ├── fetch.js                  # Duplicate fetch utility (CommonJS)
│   ├── fetch.ts                  # Fetch utility (TypeScript/ESM)
│   ├── index.css                 # Tailwind v4 theme + global styles
│   ├── main.tsx                  # React entry point
│   ├── replace.ts                # Color replacement script for rebranding
│   ├── replace2.ts               # Additional replacement script
│   ├── replace3.ts               # Additional replacement script
│   ├── replace4.ts               # Additional replacement script
│   ├── replace5.ts               # Additional replacement script
│   ├── replace6.ts               # Additional replacement script
│   ├── replace7.ts               # Additional replacement script
│   ├── replace8.ts               # Additional replacement script
│   ├── replace9.ts               # Additional replacement script
│   ├── replace10.ts              # Additional replacement script
│   └── replace11.ts              # Additional replacement script
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite build configuration
```

### 1.2 Directory Purposes

| Directory | Purpose |
| --------- | ------- |
| `/` (root) | Config files: `vite.config.ts`, `tsconfig.json`, `package.json`, `index.html` |
| `/src/` | All application source code — React components, CSS, utilities |
| `/app/applet/` | AI Studio applet configuration (contains a fetch scraping utility) |
| `/docs/` | Documentation output |

### 1.3 Naming Conventions

- **Files:** `PascalCase` for React components (`App.tsx`, `HowItWorksSection.tsx`), `camelCase` for utilities (`fetch.ts`, `replace.ts`)
- **Functions:** `PascalCase` for React components (`HeroSection`, `WorkSection`), `camelCase` for helpers (`handleCommand`, `scrollToSection`)
- **CSS classes in `index.html`:** `kebab-case` (`nav-inner`, `about-container`, `bio-card-header`)
- **CSS tokens:** `--font-sans`, `--font-mono` (kebab-case with `--` prefix)

### 1.4 Framework & Tooling Identification

| Config File | Technology |
| ----------- | ---------- |
| `vite.config.ts` | Vite 6 with `@vitejs/plugin-react` and `@tailwindcss/vite` plugins |
| `tsconfig.json` | TypeScript 5.8, ES2022 target, JSX react-jsx, bundler module resolution |
| `package.json` | React 19, Tailwind CSS v4, `motion` (Framer Motion v12) |

---

## 2. Icons & Assets

### 2.1 Static Asset Locations

There is **no dedicated `/public` or `/assets` directory**. Static assets are:
- Served from root (e.g., `avatar.png` referenced as `src="avatar.png"`)
- Loaded from CDNs:
  - **DevIcons CDN**: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/...`
  - **Unsplash**: Background images for mock widgets
  - **Picsum Photos**: Thumbnail placeholders

### 2.2 Lucide React Icons

Every icon below is imported from `lucide-react` at the top of `src/App.tsx` (line 8):

```typescript
import {
  ArrowUpRight, Code2, Smartphone, Terminal, Cpu, Layers,
  Github, Linkedin, Mail, MapPin, Navigation, Shield, Lock,
  TrendingUp, Plane, Ticket, QrCode, CreditCard, ArrowRight,
  Heart, Play, Plus, Star, GitFork, ExternalLink, Database,
  Server, Activity, Zap, CheckCircle, WifiOff, Cloud,
  RefreshCw, ShieldCheck, Timer, Wifi, LineChart, User
} from 'lucide-react';
```

| Icon | Used In |
| ---- | ------- |
| `ArrowUpRight` | Imported (general use) |
| `Code2` | `HeroSection` — role badge |
| `Terminal` | `HeroSection` — CTA button |
| `Github` | `HeroSection`, `OpenSourceSection`, `ContactSection` — social links |
| `Linkedin` | `ContactSection` — social link |
| `Mail` | `ContactSection` — CTA button |
| `MapPin` | `HeroSection` — location badge |
| `Navigation` | `MapRouteWidget` — route destination marker |
| `Shield` | `SecureChatWidget`, `InsuranceWidget`, `SystemArchitectureSection`, `AuthSequenceDiagram` |
| `Lock` | `SecureChatWidget` — E2E encryption indicator |
| `TrendingUp` | `HeroSection` stats, `TradingWidget` |
| `Timer` | `HeroSection` stats, bottom strip |
| `ArrowRight` | `HeroSection` CTA, `HeroSection` stats, `FlightWidget` |
| `Heart` | `DatingMatchWidget` — match animation |
| `Play` | `ThoughtLeadershipSection`, `AuthSequenceDiagram`, `StreamingWidget` |
| `Plus` | `StreamingWidget` — "My List" button |
| `Star` | `OpenSourceSection` — repo stars |
| `GitFork` | `OpenSourceSection` — repo forks |
| `ExternalLink` | `ThoughtLeadershipSection`, `OpenSourceSection` |
| `Layers` | `ThoughtLeadershipSection` — RFC icon |
| `Plane` | `FlightWidget` — boarding pass |
| `QrCode` | `FlightWidget` — boarding pass |
| `CreditCard` | `FlightWidget` — payment card |
| `ShieldCheck` | `ThoughtLeadershipSection` — ADR icon |
| `RefreshCw` | `AuthSequenceDiagram` — restart button |
| `WifiOff` | `AuthSequenceDiagram` — failure paths |
| `Cpu` | `StackSection` — Metal & ARKit |
| `Smartphone` | Imported (not actively rendered) |
| `Ticket`, `Database`, `Server`, `Activity`, `Zap`, `CheckCircle`, `Cloud`, `Wifi`, `LineChart`, `User` | Imported (available for use) |

### 2.3 Simple Icons

Imported from `simple-icons` at line 9 of `src/App.tsx`:

```typescript
import { siApple, siAndroid, siSwift, siKotlin, siReact, siFlutter, siBluetooth } from 'simple-icons';
```

| Icon | Used In |
| ---- | ------- |
| `siApple` | `StackSection` — iOS skill |
| `siAndroid` | `StackSection` — Android skill |
| `siSwift` | `StackSection` — Swift & SwiftUI |
| `siKotlin` | `StackSection` — Kotlin & Compose |
| `siReact` | `StackSection` — React Native |
| `siFlutter` | `StackSection` — Flutter |
| `siBluetooth` | `StackSection` — CoreBluetooth |

These are rendered through a custom `SimpleIcon` wrapper component (lines 11–26).

### 2.4 DevIcon CDN Images (TechMarquee)

Used in `TechMarquee` component — 27 tech logos loaded from `cdn.jsdelivr.net`:

**Row 1:** `swift`, `kotlin`, `apple`, `android`, `react`, `flutter`, `typescript`, `tailwindcss`, `figma`

**Row 2:** `nodejs`, `python`, `go`, `graphql`, `firebase`, `googlecloud`, `amazonwebservices`, `mongodb`, `postgresql`

**Row 3:** `docker`, `kubernetes`, `github`, `gitlab`, `jira`, `slack`, `redis`, `linux`, `vercel`

### 2.5 Font Loading

Fonts are loaded via Google Fonts in `index.html` (line 9):
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

There are **no local font files** — fonts are served entirely from Google Fonts CDN.

---

## 3. Theme & Styling — What Needs to Change

### 3.1 Tailwind CSS v4 Config Location

The Tailwind v4 configuration is in **`src/index.css`** using the `@theme` directive (NOT a `tailwind.config.js` file). The Tailwind Vite plugin is loaded in `vite.config.ts`:

```typescript
// vite.config.ts line 1 & 9
import tailwindcss from '@tailwindcss/vite';
plugins: [react(), tailwindcss()],
```

### 3.2 Full Theme Config

```css
/* src/index.css — lines 1–6 */
@import "tailwindcss";

@theme {
  --font-sans: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}
```

### 3.3 Design Tokens in `index.html` (Inline CSS)

The `index.html` file contains a large inline `<style>` block (lines 10–563) with CSS custom properties:

```css
:root {
  --bg: #080a0f;
  --bg2: #0b0e14;
  --border: rgba(255, 255, 255, 0.08);
  --green: #4ade80;
  --mono: 'JetBrains Mono', monospace;
  --cyan: #22d3ee;
  --display: 'Space Grotesk', sans-serif;
  --text: #f8fafc;
  --surface: rgba(255, 255, 255, 0.02);
  --text2: #94a3b8;
  --text3: #475569;
  --cyan-dim: rgba(34, 211, 238, 0.08);
}
```

### 3.4 Fonts

| Role | Font | Where Imported |
| ---- | ---- | -------------- |
| **Display / Heading** | Space Grotesk (300–700) | `index.html` line 9 (Google Fonts) |
| **Monospace / Code** | JetBrains Mono (400, 500, 700) | `index.html` line 9 (Google Fonts) |

Mapped in Tailwind via:
- `--font-sans` → Space Grotesk → used with `font-sans` and `font-family: var(--font-sans)`
- `--font-mono` → JetBrains Mono → used with `font-mono` and `font-family: var(--mono)`

### 3.5 Custom Utility Classes (`src/index.css`)

| Class | Purpose |
| ----- | ------- |
| `.noise-bg` | Full-screen SVG noise texture overlay (opacity 0.04) |
| `.glass-panel` | Glassmorphism panel: `rgba(255,255,255,0.02)` bg + `blur(16px)` backdrop |
| `.animate-marquee` | Infinite left-scroll animation (40s duration) |
| `.animate-marquee-reverse` | Infinite right-scroll animation (40s duration) |
| `.ep-principles-card` | Engineering Principles card entrance animation (opacity + translateY) |
| `.ep-principles-card.visible` | Revealed state for above |

### 3.6 Files to Update for Full Rebrand

| File | What to Change |
| ---- | -------------- |
| **`src/index.css`** | `@theme` tokens: `--font-sans`, `--font-mono`. Body background & color. Scrollbar colours. |
| **`index.html`** | `:root` CSS variables (all 12 tokens). Google Fonts `<link>`. Inline styles for nav, about section. All hardcoded hex colours (`#00d4ff`, `#080c14`, `rgba(...)` values). |
| **`src/App.tsx`** | **All 3630 lines** use hardcoded Tailwind colour classes. Key colours to replace: `bg-[#080a0f]`, `text-[#60a5fa]`, `text-[#4ade80]`, `text-[#fbbf24]`, `text-[#a78bfa]`, `text-[#f472b6]`, `text-[#54c5f8]`, `text-[#f97316]`, `bg-[#0f172a]`, `bg-[#161b27]`, `border-[#1e2a3a]`, `text-[#475569]`, `text-[#334155]`, `text-[#f1f5f9]`. |
| **`src/HowItWorksSection.tsx`** | Same hardcoded colour classes as App.tsx. SVG diagram colours. |
| **`index.html` Google Fonts link** | Replace font families to change typography |

### 3.7 Exact Token Values to Change

```
/* index.html :root */
--bg:        #080a0f       → YOUR_BG
--bg2:       #0b0e14       → YOUR_BG_SECONDARY
--border:    rgba(255,255,255,0.08) → YOUR_BORDER
--green:     #4ade80       → YOUR_ACCENT_GREEN
--cyan:      #22d3ee       → YOUR_ACCENT_PRIMARY
--text:      #f8fafc       → YOUR_TEXT_PRIMARY
--surface:   rgba(255,255,255,0.02) → YOUR_SURFACE
--text2:     #94a3b8       → YOUR_TEXT_SECONDARY
--text3:     #475569       → YOUR_TEXT_MUTED
--cyan-dim:  rgba(34,211,238,0.08) → YOUR_ACCENT_DIM
--mono:      'JetBrains Mono'     → YOUR_MONO_FONT
--display:   'Space Grotesk'      → YOUR_DISPLAY_FONT

/* src/index.css @theme */
--font-sans: "Space Grotesk" → YOUR_DISPLAY_FONT
--font-mono: "JetBrains Mono" → YOUR_MONO_FONT
```

> **Note:** The existing `src/replace.ts` script demonstrates a regex-based approach to mass-replacing colour classes in `App.tsx`. This is the pattern previously used for rebranding.

---

## 4. SEO & Sitemaps

### 4.1 Sitemap

❌ **No sitemap file exists** in the project. There is no `sitemap.xml`, no JS-generated sitemap, and no sitemap plugin configured in Vite.

### 4.2 Metadata Handling

Metadata is handled via **static HTML tags** in `index.html`:

```html
<!-- index.html line 6 -->
<title>Senior Mobile Engineer | Portfolio</title>
```

There is **no** React Helmet, `react-head`, or any dynamic meta tag management. No `<meta name="description">`, no Open Graph tags, and no JSON-LD structured data.

### 4.3 Current SEO Metadata by Page

| Route | Title | Description | OG Tags |
| ----- | ----- | ----------- | ------- |
| `/` (SPA) | `Senior Mobile Engineer \| Portfolio` | ❌ None | ❌ None |

### 4.4 robots.txt

❌ **No `robots.txt` file exists** anywhere in the project.

### 4.5 JSON-LD Structured Data

❌ **Not present**

### 4.6 Steps to Add SEO Properly

1. **Create `public/` directory** (Vite serves files from `/public/` as static assets)
2. **Add `public/robots.txt`**:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://yourdomain.com/sitemap.xml
   ```
3. **Add `public/sitemap.xml`** (static XML since it's a SPA):
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourdomain.com/</loc>
       <lastmod>2026-04-03</lastmod>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```
4. **Update `index.html`** `<head>` with:
   ```html
   <meta name="description" content="Staff Mobile Engineer portfolio...">
   <meta property="og:title" content="Kapil Maharjan — Staff Mobile Engineer">
   <meta property="og:description" content="...">
   <meta property="og:image" content="https://yourdomain.com/og-image.png">
   <meta property="og:url" content="https://yourdomain.com">
   <meta property="og:type" content="website">
   <meta name="twitter:card" content="summary_large_image">
   <link rel="canonical" href="https://yourdomain.com/">
   ```
5. Optionally add a `<script type="application/ld+json">` block for Person structured data.

---

## 5. Component Architecture

### 5.1 All Components & Locations

Every component is defined in **only two files**:

#### `src/App.tsx` (3630 lines)

| Component | Line | Type | Description |
| --------- | ---- | ---- | ----------- |
| `App` (default export) | 30 | **Page Root** | Main layout with cursor glow + all sections |
| `SimpleIcon` | 11 | Shared/Reusable | SVG wrapper for `simple-icons` data |
| `HeroSection` | 78 | Section | Hero with avatar, stats, CTAs |
| `AboutSection` | 382 | Section | Bio card, stats row, focus areas |
| `TechMarquee` | 505 | Section | Infinite-scrolling tech logo marquee |
| `ImpactMetricsSection` | 551 | Section | Animated stat cards + migration table |
| `EngineeringPrinciplesSection` | 1608 | Section | 6 principle cards with CSS reveal |
| `SystemArchitectureSection` | 1773 | Section | Interactive SVG architecture diagram |
| `EngineeringDeepDivesSection` | 2069 | Section | Container for 3 deep-dive diagrams |
| `OfflineSyncDiagram` | 2096 | Widget | Interactive offline-first sync diagram |
| `AuthSequenceDiagram` | 2387 | Widget | Animated auth sequence diagram |
| `StartupPerformanceDiagram` | 2815 | Widget | Interactive startup timeline |
| `WorkSection` | 706 | Section | Filterable project grid with mobile mockups |
| `MobileMockup` | 878 | Shared/Reusable | iPhone-style device frame |
| `MockMapBackground` | 905 | Widget | Map background image for mock widgets |
| `MapMarkersWidget` | 918 | Widget | Pulsing map markers demo |
| `MockMarker` | 936 | Shared/Reusable | Single animated marker |
| `MapRouteWidget` | 949 | Widget | Animated route pathfinding demo |
| `PushNotifWidget` | 982 | Widget | Push notification animation |
| `DownloadWidget` | 1035 | Widget | Download progress bars |
| `SecureChatWidget` | 1076 | Widget | E2EE chat simulation |
| `EncryptedText` | 1138 | Widget | Random character scramble effect |
| `InsuranceWidget` | 1152 | Widget | Insurance premium calculator demo |
| `Slider` | 1291 | Shared/Reusable | Range slider component |
| `InteractiveTerminal` | 1317 | Section | Terminal emulator with commands |
| `ThoughtLeadershipSection` | 1435 | Section | Conference talks & articles |
| `OpenSourceSection` | 1516 | Section | GitHub repos showcase |
| `StackSection` | 3157 | Section | Technical skills grid (unused in render) |
| `ContactSection` | 3207 | Section | CTA + social links + footer |
| `TradingWidget` | 3250 | Widget | Real-time trading chart |
| `FlightWidget` | 3324 | Widget | Flight booking flow |
| `DatingMatchWidget` | 3478 | Widget | Profile matching animation |
| `ProfileCard` | 3532 | Widget | Dating app profile card |
| `StreamingWidget` | 3584 | Widget | Video streaming UI |

#### `src/HowItWorksSection.tsx` (1751 lines)

| Component | Line | Type | Description |
| --------- | ---- | ---- | ----------- |
| `HowItWorksSection` (named export) | 1466 | Section | Tabbed platform architecture diagrams |
| `AndroidWidget` | 49 | Widget | Android build/launch/runtime SVG diagram |
| `IOSWidget` | 311 | Widget | iOS build/launch/runtime SVG diagram |
| `FlutterWidget` | 573 | Widget | Flutter build/launch/runtime SVG diagram |
| (React Native + KMP widgets) | ~830+ | Widget | RN and KMP architecture diagrams |

### 5.2 Organisation Pattern

Components are organised **by type within flat files** (component-based), not by feature. All are co-located in just two files:
- `App.tsx` — main app + all sections and widgets
- `HowItWorksSection.tsx` — extracted due to size

### 5.3 Context Providers & Custom Hooks

❌ **No Context Providers** — the app has no React Context usage.

❌ **No Custom Hooks** — all logic uses inline `useState`, `useEffect`, and `useRef`.

### 5.4 State Management

**Local `useState` only.** There is no Context API, Redux, Zustand, or any state management library. Each component manages its own state independently.

| Pattern | Where Used |
| ------- | ---------- |
| `useState` | Every interactive component (filters, animations, hover states) |
| `useRef` | `App` (containerRef), `InteractiveTerminal` (bottomRef), `AuthSequenceDiagram` (svgRef) |
| `useScroll` | `App` — Framer Motion scroll progress (imported but unused currently) |
| `useEffect` | Animation timers, IntersectionObserver, event listeners |

---

## 6. Tailwind CSS v4 Configuration

### 6.1 Full Theme Config Contents

```css
/* src/index.css — complete file */
@import "tailwindcss";

@theme {
  --font-sans: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 64px;
}

body {
  background-color: #000;
  color: #fff;
  font-family: var(--font-sans);
  overflow-x: hidden;
}
```

### 6.2 Custom Design Tokens

| Token | Value | Usage |
| ----- | ----- | ----- |
| `--font-sans` | `"Space Grotesk", ui-sans-serif, system-ui, sans-serif` | Body text, headings via `font-sans` |
| `--font-mono` | `"JetBrains Mono", ui-monospace, SFMono-Regular, monospace` | Code text, labels via `font-mono` |

> **Note:** There are **no custom colour tokens** in the Tailwind `@theme`. All colours are hardcoded as arbitrary Tailwind values (e.g., `bg-[#0f172a]`, `text-[#60a5fa]`) or standard Tailwind palette classes (e.g., `text-zinc-400`, `bg-emerald-500`).

### 6.3 Rebranding Step-by-Step

1. **Update fonts:**
   - Change `index.html` Google Fonts `<link>` to your fonts
   - Update `src/index.css` `@theme` `--font-sans` and `--font-mono`
   - Update `index.html` `:root` `--mono` and `--display`

2. **Update `index.html` `:root` variables:**
   - Replace all 12 custom properties with your brand palette

3. **Update all hardcoded colours in `src/App.tsx`** (recommended approach: use the existing `src/replace.ts` script pattern):
   - Primary accent: `#60a5fa` (blue) — used for CTAs, highlights
   - Secondary accents: `#4ade80` (green), `#fbbf24` (amber), `#a78bfa` (purple), `#f472b6` (pink), `#54c5f8` (cyan), `#f97316` (orange)
   - Background: `#080a0f`, `#0b0e14`, `#0f172a`, `#161b27`, `#111827`
   - Borders: `#1e2a3a`, `#2d3f55`
   - Text: `#f8fafc`, `#f1f5f9`, `#94a3b8`, `#475569`, `#334155`

4. **Update all hardcoded colours in `src/HowItWorksSection.tsx`** — same colour classes

5. **Update `index.html` inline styles** — nav colours, about section colours (all the `#00d4ff`, `#22d3ee`, etc.)

6. **Update `src/index.css` body** — `background-color: #000` and scrollbar colours

### 6.4 Responsive Design Patterns

| Pattern | Implementation |
| ------- | -------------- |
| Mobile-first | Tailwind default utility classes apply mobile-first, then `md:` and `lg:` breakpoints |
| Grid layouts | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` pattern used extensively |
| Navigation | Hamburger menu with `@media (max-width: 900px)` in `index.html` inline CSS |
| Typography | `clamp()` for responsive heading sizes (e.g., `clamp(2.8rem, 5vw, 4.5rem)`) |
| About section | `@media (max-width: 900px)` and `@media (max-width: 480px)` in `index.html` |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables marquee and nav transitions |

---

## 7. Google Gemini AI Integration

### 7.1 Dependency Status

`@google/genai` v1.29.0 is listed in `package.json` dependencies, but **is NOT imported or used anywhere in the source code**.

### 7.2 API Key Configuration

The key is defined in the environment and exposed to the frontend:

```typescript
// vite.config.ts line 11
'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
```

```bash
# .env.example line 4
GEMINI_API_KEY="MY_GEMINI_API_KEY"
```

### 7.3 Model & Prompts

No model is called. No prompts exist in the codebase. The dependency appears to be a **placeholder for future AI features** (e.g., enhancing the `InteractiveTerminal` with AI responses).

### 7.4 Backend Express Server

`express` v4.21 is listed as a dependency with `@types/express` in devDependencies, but **no Express server code exists** in the current source. There is no `server.ts`, `server.js`, or API route setup.

### 7.5 How to Implement Gemini AI

To activate AI features (e.g., in the Interactive Terminal):

1. Import: `import { GoogleGenAI } from '@google/genai';`
2. Instantiate: `const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });`
3. Call: `const response = await ai.models.generateContent({ model: 'gemini-2.0-flash', contents: [{ text: prompt }] });`
4. **Security Warning:** The current Vite config exposes the API key to the frontend via `process.env.GEMINI_API_KEY`. For production, you should proxy through a backend Express server.

---

## 8. Environment Variables & Config

### 8.1 All Environment Variables

| Variable | Source | Exposed To | Purpose |
| -------- | ------ | ---------- | ------- |
| `GEMINI_API_KEY` | `.env` | **Frontend** (via `process.env.GEMINI_API_KEY`) | Google Gemini AI API authentication |
| `GOOGLE_MAPS_PLATFORM_KEY` | `.env` | **Frontend** (via `process.env.GOOGLE_MAPS_PLATFORM_KEY`) | Google Maps API (unused currently) |
| `APP_URL` | `.env` | Server-side only | Application URL (AI Studio runtime) |
| `DISABLE_HMR` | System env | Vite server config | Disables HMR in AI Studio environment |

### 8.2 Frontend-Exposed Variables (VITE_ prefix not used)

This project does **not** use the standard `VITE_` prefix convention. Instead, it uses `vite.config.ts` `define` to manually inject env vars as `process.env.*`:

```typescript
define: {
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
  'process.env.GOOGLE_MAPS_PLATFORM_KEY': JSON.stringify(env.GOOGLE_MAPS_PLATFORM_KEY || ''),
},
```

### 8.3 `.env` File for Local Development

Create a `.env` file in the project root:

```bash
# Required for Gemini AI (if implementing AI features)
GEMINI_API_KEY="your-gemini-api-key"

# Optional: Google Maps (if implementing map features)
GOOGLE_MAPS_PLATFORM_KEY="your-maps-api-key"

# Optional: Application URL
APP_URL="http://localhost:3000"
```

### 8.4 NPM Scripts

```json
{
  "dev": "vite --port=3000 --host=0.0.0.0",
  "build": "vite build",
  "preview": "vite preview",
  "clean": "rm -rf dist",
  "lint": "tsc --noEmit"
}
```

Run locally with `npm run dev` → serves at `http://localhost:3000`

---

## 9. Routing & Pages

### 9.1 Routing Solution

**No routing library is used.** The app is a **Single Page Application** using `#hash` scroll navigation. Smooth scrolling is enabled via CSS:

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 64px; /* accounts for fixed nav height */
}
```

### 9.2 All Routes / Sections

Navigation links in `index.html` (lines 574–583):

| Hash URL | Section Component | Description |
| -------- | ----------------- | ----------- |
| `#hero` | `HeroSection` | Hero with avatar, stats, CTAs |
| `#about` | `AboutSection` | Bio, philosophy, focus areas |
| `#stack` | `TechMarquee` | Infinite-scrolling tech logos |
| `#stats` | `ImpactMetricsSection` | Animated metrics + migration table |
| `#principles` | `EngineeringPrinciplesSection` | Engineering principles cards |
| (no hash) | `HowItWorksSection` | Platform architecture deep-dives |
| `#architecture` | `SystemArchitectureSection` | Interactive platform architecture SVG |
| `#problems` | `EngineeringDeepDivesSection` | Offline sync, auth, startup diagrams |
| `#solutions` | `WorkSection` | Filterable engineering solutions grid |
| `#terminal` | `InteractiveTerminal` | Terminal emulator |
| `#thought-leadership` | `ThoughtLeadershipSection` | Talks, articles, ADRs |
| `#oss` | `OpenSourceSection` | Open source repositories |
| `#contact` | `ContactSection` | CTA + social links + footer |

### 9.3 Protected / Nested Routes

❌ None. There are no protected routes, layouts, or nested routing.

### 9.4 How to Add a New Page

Since there's no router, to add a "page" you add a **section**:

1. **Create the section component** in `src/App.tsx` (or a new file):
   ```tsx
   function NewSection() {
     return (
       <section id="new-section" className="py-32 px-6 md:px-12 lg:px-24">
         <div className="max-w-7xl mx-auto">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tight">New Section</h2>
         </div>
       </section>
     );
   }
   ```

2. **Add it to the render order** in `App()` (line 59–73):
   ```tsx
   <main className="relative z-10">
     ...existing sections...
     <NewSection />
   </main>
   ```

3. **Add a nav link** in `index.html` (line 574):
   ```html
   <li><a href="#new-section">New</a></li>
   ```

---

## 10. Animation & Motion

### 10.1 Framer Motion Usage

The `motion` package (Framer Motion v12) is imported in two files:

**`src/App.tsx` line 6:**
```typescript
import { motion, useScroll, AnimatePresence } from 'motion/react';
```

**`src/HowItWorksSection.tsx` line 2:**
```typescript
import { motion, AnimatePresence } from 'motion/react';
```

### 10.2 Animation Inventory

| Component | Animation Type | Details |
| --------- | -------------- | ------- |
| `HeroSection` | **Page load** | `initial → animate` fade+slide-up with staggered delays (0.05–0.64s) |
| `ImpactMetricsSection` | **Scroll** | `whileInView` fade+slide-up + IntersectionObserver counter animation |
| `WorkSection` | **Scroll + Interaction** | `whileInView` for section entry; `AnimatePresence` for filter transitions |
| `MobileMockup` | **Scroll** | `whileInView` fade+slide-up |
| `MockMarker` | **Continuous** | `animate` pulsing scale + opacity loop |
| `MapRouteWidget` | **Continuous** | `animate` SVG path drawing with `pathLength` |
| `PushNotifWidget` | **Timed** | `AnimatePresence` notifications sliding in/out on interval |
| `DownloadWidget` | **Continuous** | `animate` width transitions on progress bars |
| `SecureChatWidget` | **Timed** | `AnimatePresence` messages entering, text scramble effect |
| `InsuranceWidget` | **Timed** | `AnimatePresence` step transitions, autoplay demo loop |
| `InteractiveTerminal` | **Scroll** | `whileInView` section entry |
| `ThoughtLeadershipSection` | **Scroll** | `whileInView` staggered card reveals |
| `OpenSourceSection` | **Scroll** | `whileInView` staggered card reveals |
| `EngineeringPrinciplesSection` | **Scroll** | CSS-based reveal via IntersectionObserver (`.visible` class toggle) |
| `SystemArchitectureSection` | **Hover** | SVG node scale on hover, `AnimatePresence` detail tooltip |
| `OfflineSyncDiagram` | **User interaction** | SVG particle animations on button click |
| `AuthSequenceDiagram` | **Timed + Interaction** | Step-by-step autoplay with SVG particles; clickable progress |
| `StartupPerformanceDiagram` | **Scroll + Interaction** | IntersectionObserver trigger; draggable scrubber |
| `ContactSection` | **Scroll** | `whileInView` scale-up entry |
| `TradingWidget` | **Continuous** | Price updates every 300ms, chart polyline updates |
| `FlightWidget` | **Timed** | `AnimatePresence` step transitions (list → booking → ticket) |
| `DatingMatchWidget` | **Timed** | Card scaling + sliding; heart match animation |
| `StreamingWidget` | **Static** | No motion animations (static layout) |
| `HowItWorksSection` | **Interaction** | Tab switching with `AnimatePresence`; SVG diagram animations |
| `TechMarquee` | **Continuous (CSS)** | CSS `@keyframes marquee` infinite scroll |

### 10.3 Shared Animation Variants

❌ **No shared variant objects.** All animations are defined inline within each component. Common patterns include:
- `initial={{ opacity: 0, y: 20 }}` → `whileInView={{ opacity: 1, y: 0 }}`
- `viewport={{ once: true }}` (most section animations play once only)
- Staggered delays: `transition={{ delay: i * 0.1 }}`

### 10.4 SVG Animations

Extensive use of:
- `<motion.path>` with `strokeDashoffset` and `pathLength` for flowing line animations
- `<animate>` and `<animateMotion>` native SVG elements for particle effects
- CSS `@keyframes` for dashed flow lines (`.flow-line-platform`, `.flow-line`)

### 10.5 How to Disable All Animations Globally

**Option 1: CSS**
Add to `src/index.css`:
```css
*, *::before, *::after {
  animation-duration: 0s !important;
  animation-delay: 0s !important;
  transition-duration: 0s !important;
  transition-delay: 0s !important;
}
```

**Option 2: Framer Motion**
Wrap `<App />` in a `<LazyMotion>` provider with `reducedMotion="always"` or use the `MotionConfig` provider:
```tsx
import { MotionConfig } from 'motion/react';

<MotionConfig reducedMotion="always">
  <App />
</MotionConfig>
```

**Option 3:** The app already respects `@media (prefers-reduced-motion: reduce)` for some elements (nav transitions, marquee dot). Extend this to all motion components for accessibility.

---

## 11. Google Maps Integration

### 11.1 Current Status

`@vis.gl/react-google-maps` v1.7.1 is listed in `package.json` but **is NOT imported or used anywhere** in the source code.

### 11.2 API Key

Configured but not consumed:
```typescript
// vite.config.ts line 12
'process.env.GOOGLE_MAPS_PLATFORM_KEY': JSON.stringify(env.GOOGLE_MAPS_PLATFORM_KEY || ''),
```

### 11.3 Map Features Currently Implemented

The project uses **mock map widgets** instead of real Google Maps:
- `MockMapBackground` — an Unsplash image with grayscale/invert filters to mimic a dark map
- `MapMarkersWidget` — absolute-positioned pulsing circles
- `MapRouteWidget` — SVG path animation

### 11.4 How to Integrate Real Google Maps

1. Add `GOOGLE_MAPS_PLATFORM_KEY` to your `.env` file
2. Import the library:
   ```tsx
   import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
   ```
3. Wrap usage in `<APIProvider apiKey={process.env.GOOGLE_MAPS_PLATFORM_KEY}>`:
   ```tsx
   <APIProvider apiKey={process.env.GOOGLE_MAPS_PLATFORM_KEY}>
     <Map center={{ lat: -33.8688, lng: 151.2093 }} zoom={12} mapId="DEMO_MAP_ID">
       <Marker position={{ lat: -33.8688, lng: 151.2093 }} />
     </Map>
   </APIProvider>
   ```
4. Change map style: use the `mapId` prop pointing to a Google Maps styled map
5. Change centre: modify the `center` prop coordinates

---

## 12. Performance & Build

### 12.1 Lazy Loading

❌ **No lazy-loaded components or routes.** There is no usage of `React.lazy()` or `<Suspense>`. All 3630 lines of `App.tsx` and 1751 lines of `HowItWorksSection.tsx` are loaded eagerly.

### 12.2 Vite Build Config

```typescript
// vite.config.ts — complete
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GOOGLE_MAPS_PLATFORM_KEY': JSON.stringify(env.GOOGLE_MAPS_PLATFORM_KEY || ''),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
```

**Key observations:**
- **Plugins:** `@vitejs/plugin-react` (React Fast Refresh) + `@tailwindcss/vite` (Tailwind v4)
- **Aliases:** `@` maps to project root (not `/src/`)
- **HMR:** Can be disabled via `DISABLE_HMR=true` env var (for AI Studio)
- **No custom optimisations:** No manual chunk splitting, no external CDN config, no rollup options

### 12.3 Large Dependencies to Consider Code-Splitting

| Dependency | Estimated Size | Recommendation |
| ---------- | -------------- | -------------- |
| `motion` (Framer Motion) | ~60KB gzipped | Could lazy-import for below-fold sections |
| `simple-icons` | Large (all icons bundled) | Tree-shaking should handle, but verify |
| `@google/genai` | ~50KB+ | Currently unused — remove or lazy-load when needed |
| `@vis.gl/react-google-maps` | ~100KB+ | Currently unused — remove or lazy-load when needed |
| `express` | ~200KB | Server-side only — should not be in client bundle (verify) |
| `dotenv` | ~10KB | Should not be in client bundle (verify) |

### 12.4 Build Output

Build output goes to `/dist/` (default Vite output). No custom `build.outDir` is configured.

To build: `npm run build`
To preview: `npm run preview`
To clean: `npm run clean` (runs `rm -rf dist`)

### 12.5 Recommended Performance Improvements

1. **Code-split `HowItWorksSection`** — it's 87KB and below the fold:
   ```tsx
   const HowItWorksSection = React.lazy(() => import('./HowItWorksSection'));
   ```
2. **Remove unused dependencies** — `@google/genai`, `@vis.gl/react-google-maps`, `express`, `dotenv` if not needed
3. **Add route-based lazy loading** if the app grows to multiple pages
4. **Preload critical fonts** — add `<link rel="preload">` for Space Grotesk and JetBrains Mono
5. **Optimise images** — the `avatar.png` and external images could use modern formats (WebP/AVIF)

---

## Appendix A: Utility Scripts in `/src/`

The following TypeScript scripts are **build-time utilities** (not runtime code) used for mass colour replacements during rebranding:

| File | Purpose |
| ---- | ------- |
| `replace.ts` | Regex-based colour replacement for `App.tsx` (zinc → violet/fuchsia palette) |
| `replace2.ts` – `replace11.ts` | Additional targeted replacements |
| `fetch.js` / `fetch.ts` | HTTP scrapers for extracting CSS from reference sites |

These are run manually via `tsx src/replace.ts` and are not part of the build process.

## Appendix B: `index.html` Architecture

The `index.html` file is unusually large (676 lines) because it contains:

1. **Inline `<style>` block** (lines 10–563) — all navigation CSS, about section CSS, responsive breakpoints
2. **Static HTML navigation** (lines 566–604) — rendered outside React, in plain HTML
3. **React mount point** (line 605) — `<div id="root"></div>`
4. **Inline `<script>` block** (lines 607–672) — navigation behaviour (scroll shadow, hamburger toggle, IntersectionObserver for active link highlighting)

This hybrid architecture means:
- **Navigation renders instantly** (no FOUC, no React hydration needed)
- **Nav behaviour is vanilla JS** (not React state)
- **React components mount inside `#root`** after JS loads
- Styling for the nav and about section is split between `index.html` inline CSS and Tailwind utility classes in React
