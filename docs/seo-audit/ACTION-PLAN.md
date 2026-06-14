# SEO Action Plan — Kapil Maharjan Portfolio

**Date:** 2026-06-14 · **Target:** `https://kapil.info.np/` · **Goal:** 90+ readiness + rank for *AI-assisted mobile engineer* / *mobile engineer Sydney*
**Today:** 72/100 (repo) · ~30 (live, old Flutter site) → **After this plan: ~88–92/100** (94+ after the Phase 2 Astro migration)

> **Guiding principle: the safe way to the best result.** Ship the smooth client-rendered SPA, win SEO through `<head>` signals (meta, JSON-LD, OG) + `llms.txt` — all of which carry zero rendering risk. The one step that hurt real visitors (Puppeteer HTML snapshot) is **removed** and replaced by a proper **Phase 2 Astro migration**, to be done later when the site is stable.

> ⚠️ **Nothing here has been applied yet — this is the plan.** Each step gives you: **What → Why → Exact change (copy-paste) → How to verify → Effort/Impact.**
> When you're ready, say *"apply Step N"* (or "apply Steps 3–6") and I'll make the edits.

**Legend:** 🔴 Critical · 🟠 High · 🟡 Medium · 🟢 Low · Effort: S < 30 min · M 1–3 h · L half-day+

---

## ⭐ Do-this-first checklist (the 90+ critical path)

```
[~] Step 1  Deploy this repo to kapil.info.np            🔴  M   YOU: connect Vercel + DNS (vercel.json added)
[~] Step 2  Verify robots.txt + sitemap return 200       🔴  S   YOU: run after deploy (commands below)
[ ] Step 3  Rewrite <title>/description/keywords/geo     🟠  S   READY — safe head-only; rolled back, re-apply anytime
[ ] Step 4  Upgrade JSON-LD to Person+WebSite+ProfilePage🟠  S   READY — safe head-only; rolled back, re-apply anytime
[x] Step 5  Add llms.txt + welcome AI crawlers           🟠  S   DONE (public/llms.txt + robots.txt)
[ ] Step 6  Update package.json metadata                 🟡  S   READY — safe; rolled back, re-apply anytime
[→] Step 7  Pre-render content for no-JS bots            🟡  L   PHASE 2 (Astro) — Puppeteer snapshot REMOVED; it broke motion/diagrams
[~] Step 8  Compress images (og/avatar/favicon)          🟠  S   PARTLY DONE (og/avatar compressed) · see IMAGE-GUIDE.md
[ ] Step 9  State the AI-assisted positioning + fix h1   🟠  M   READY — safe; rolled back, re-apply anytime
```
**Status (current working tree): the smooth SPA is restored.** Kept (safe, no rendering risk): `llms.txt`, `robots.txt` AI-crawler welcomes, updated `sitemap.xml` date, and compressed `og-image.png` / `kapil_avatar.png`. **Rolled back** to stop the flash/re-animate: the Puppeteer prerender (Step 7) **and** the in-page edits that rode along with it (Steps 3, 4, 6, 9 — these are *safe* and can be re-applied cleanly anytime; they only touch `<head>` + copy, never the render path). Remaining: Step 1 (deploy), Step 2 (verify), Steps 3/4/6/9 (re-apply head SEO), Step 8 (finish images), Steps 10–15 polish + authority. **Step 7 → Phase 2 Astro.**

### What's wired for deploy (Step 1, Vercel)
- Plain Vite SPA: `npm run build` → `dist/`. Vercel auto-detects Vite and serves it — **no Puppeteer, no custom build step, no `build:ssg`.** (Optional: add a tiny `vercel.json` with an SPA rewrite `/(.*) → /index.html` so deep links resolve.)
- **You:** push to GitHub → import the repo in Vercel → add `kapil.info.np` as a custom domain → point DNS to Vercel (and remove the old Firebase Hosting connection so the Flutter app stops serving).

### Verify after deploy (Step 2)
```bash
curl -s  https://kapil.info.np/ | grep -i "<title>"          # AI-Assisted Staff Mobile Engineer
curl -sI https://kapil.info.np/robots.txt  | head -1          # 200
curl -sI https://kapil.info.np/llms.txt    | head -1          # 200
curl -sI https://kapil.info.np/sitemap.xml | head -1          # 200
curl -s  https://kapil.info.np/ | grep -c "ai-assisted mobile development"   # > 0 (JSON-LD in <head>, after Step 4)
```
> Note: in a client-rendered SPA the **body** text won't appear in raw `curl` output — that's expected and fine for Google (it renders JS). Your no-JS SEO lives in the `<head>` (meta + JSON-LD) and in `llms.txt`. Exposing body content to no-JS bots is the Phase 2 Astro job (Step 7).

Then in Google Search Console: add the property, submit the sitemap, request indexing of `/`.

---

# PHASE A — Ship it & verify (do today)

## Step 1 — 🔴 Deploy THIS repo to `kapil.info.np` · Effort: M
**What:** Replace the old Flutter app currently served at the domain with this React build.
**Why:** The live site is a different, thin app ("Kapil's Portfolio", desc "Lead Engineer"). Every other step is invisible until this repo is the thing being served. This is the #1 blocker.

**Do this:**
1. Rebuild (current `dist/` is stale — built from an older nav):
   ```bash
   cd /Users/kapil/server/mobile-engineer-portfolio
   npm run build
   ```
2. Deploy `dist/` to the host that controls `kapil.info.np`. Recommended (zero-config for Vite SPAs): **Vercel**, **Netlify**, or **Cloudflare Pages**.
   - Add a SPA fallback so deep links work: serve `index.html` for unknown routes. (Vercel/Netlify auto-detect Vite; for a custom host add a catch-all rewrite to `/index.html`.)
3. Point the domain's DNS / hosting to the new deployment and **decommission or redirect the old Firebase project** (`kapil-portfolio.firebaseapp.com`). The old page also ships a public GA4 tag `G-H3FY6SP1QZ` — drop it.

**Verify:**
```bash
curl -s https://kapil.info.np/ | grep -i "<title>"
# WANT: Kapil Maharjan ... Mobile Engineer   (NOT "Kapil's Portfolio")
```

---

## Step 2 — 🔴 Verify robots.txt + sitemap resolve · Effort: S
**What:** Confirm crawl files return 200 after deploy (today they 404 because the Flutter site lacks them).
**Why:** Search engines need them to discover/understand the site.

**Verify:**
```bash
curl -sI https://kapil.info.np/robots.txt  | head -1   # WANT: 200
curl -sI https://kapil.info.np/sitemap.xml | head -1   # WANT: 200
```
Also update the sitemap date (it's `2026-04-03`). Edit `public/sitemap.xml`:
```xml
<lastmod>2026-06-14</lastmod>
```
Then in Google Search Console: add the property, verify ownership, and submit `https://kapil.info.np/sitemap.xml`. Request indexing of `/`.

---

# PHASE B — On-page & metadata (the quick wins)

## Step 3 — 🟠 Rewrite the `<head>` primary meta · Effort: S · File: `index.html`
**What:** Keyword-targeted title, description, keywords, geo signals; `lang="en-AU"`.
**Why:** The title is your single most important on-page signal. Lead with the winnable differentiator (**AI-assisted**) + role + **Sydney**; pack platforms + Australia into the description. (See report §10 for why we DON'T stuff "ios/android" into the title.)

**Change A —** line 2, set Australian English:
```html
<html lang="en-AU">
```

**Change B —** replace the Primary Meta Tags block (`index.html` lines 7–13):
```html
    <!-- Primary Meta Tags -->
    <title>Kapil Maharjan — AI-Assisted Staff Mobile Engineer, Sydney</title>
    <meta name="description" content="Kapil Maharjan — Sydney-based staff mobile engineer (Australia). 12+ years across iOS, Android, Flutter, KMP & React Native, shipping to 1M+ users with AI-assisted engineering workflows." />
    <meta name="keywords" content="Kapil Maharjan, mobile engineer, AI-assisted mobile engineer, AI-assisted engineer, AI assisted mobile development, iOS engineer, Android engineer, Flutter developer, Kotlin Multiplatform, KMP, React Native developer, Swift, Kotlin, mobile engineer Sydney, mobile engineer Australia, staff mobile engineer" />
    <meta name="author" content="Kapil Maharjan" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

    <!-- Geo / Local signals (Sydney, Australia) -->
    <meta name="geo.region" content="AU-NSW" />
    <meta name="geo.placename" content="Sydney" />
    <meta name="geo.position" content="-33.8688;151.2093" />
    <meta name="ICBM" content="-33.8688, 151.2093" />

    <link rel="canonical" href="https://kapil.info.np/" />
```

**Change C —** upgrade OG + Twitter (`index.html` lines 20–31) to match + add locale/site_name/image alt:
```html
    <!-- Open Graph / Social -->
    <meta property="og:type" content="profile" />
    <meta property="og:site_name" content="Kapil Maharjan" />
    <meta property="og:locale" content="en_AU" />
    <meta property="og:title" content="Kapil Maharjan — AI-Assisted Staff Mobile Engineer, Sydney" />
    <meta property="og:description" content="Sydney-based staff mobile engineer. 12+ years across iOS, Android, Flutter, KMP & React Native — shipping to 1M+ users with AI-assisted engineering workflows." />
    <meta property="og:url" content="https://kapil.info.np/" />
    <meta property="og:image" content="https://kapil.info.np/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Kapil Maharjan — AI-assisted staff mobile engineer, Sydney" />
    <meta property="profile:first_name" content="Kapil" />
    <meta property="profile:last_name" content="Maharjan" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Kapil Maharjan — AI-Assisted Staff Mobile Engineer, Sydney" />
    <meta name="twitter:description" content="Sydney-based staff mobile engineer. 12+ years across iOS, Android, Flutter, KMP & React Native — with AI-assisted engineering workflows." />
    <meta name="twitter:image" content="https://kapil.info.np/og-image.png" />
    <meta name="twitter:image:alt" content="Kapil Maharjan — AI-assisted staff mobile engineer, Sydney" />
```
> If you have an X/Twitter handle, also add `<meta name="twitter:site" content="@handle" />` and `twitter:creator`.

**Verify (after deploy):** Google Rich Results Test + [opengraph.xyz](https://www.opengraph.xyz/) on the URL; title shows the new text.

---

## Step 4 — 🟠 Upgrade JSON-LD to an `@graph` (Person + WebSite + ProfilePage) · Effort: S · File: `index.html`
**What:** Replace the single `Person` block (lines 33–53) with a connected graph that adds AI-assisted skills, image, email, region, and a stable entity id.
**Why:** Stronger entity recognition (helps "Kapil Maharjan" own the SERP / potential knowledge panel) and tells AI engines exactly what you do — including **AI-assisted mobile development**.

```html
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://kapil.info.np/#website",
          "url": "https://kapil.info.np/",
          "name": "Kapil Maharjan — AI-Assisted Staff Mobile Engineer",
          "inLanguage": "en-AU",
          "publisher": { "@id": "https://kapil.info.np/#kapil" }
        },
        {
          "@type": "ProfilePage",
          "@id": "https://kapil.info.np/#profilepage",
          "url": "https://kapil.info.np/",
          "name": "Kapil Maharjan — AI-Assisted Staff Mobile Engineer, Sydney",
          "isPartOf": { "@id": "https://kapil.info.np/#website" },
          "about": { "@id": "https://kapil.info.np/#kapil" },
          "mainEntity": { "@id": "https://kapil.info.np/#kapil" }
        },
        {
          "@type": "Person",
          "@id": "https://kapil.info.np/#kapil",
          "name": "Kapil Maharjan",
          "jobTitle": "Staff Mobile Engineer",
          "description": "AI-assisted staff mobile engineer with 12+ years building production mobile apps across iOS, Android, Flutter, Kotlin Multiplatform (KMP) and React Native, shipping to 1M+ users. Based in Sydney, Australia.",
          "url": "https://kapil.info.np/",
          "image": "https://kapil.info.np/kapil_avatar.png",
          "email": "mailto:kapilmhr016@gmail.com",
          "sameAs": [
            "https://github.com/kapilmhr",
            "https://www.linkedin.com/in/kapil-maharjan/"
          ],
          "knowsAbout": [
            "AI-assisted mobile development",
            "AI coding agents (Claude, Cursor, Copilot)",
            "Mobile engineering",
            "iOS", "Android", "Swift", "SwiftUI", "Kotlin", "Jetpack Compose",
            "Flutter", "Dart", "Kotlin Multiplatform", "KMP", "React Native",
            "Mobile app architecture", "Offline-first sync (CRDT)", "Mobile performance optimization"
          ],
          "knowsLanguage": ["en"],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sydney",
            "addressRegion": "New South Wales",
            "addressCountry": "AU"
          }
        }
      ]
    }
    </script>
```
> Decide your **canonical public email** first (footer uses `kapilmhr016@gmail.com`). Use the same one in schema, footer, and `mailto:` links.

**Verify:** [Google Rich Results Test](https://search.google.com/test/rich-results) + [Schema validator](https://validator.schema.org/) → no errors, Person/WebSite/ProfilePage detected.

---

## Step 5 — 🟠 Add `llms.txt` + welcome AI crawlers · Effort: S
**Why:** You want AI-search visibility. `llms.txt` is a plain, quotable summary AI engines can read without running JS, and explicit robots welcomes for AI bots remove any doubt.

**5a — Create `public/llms.txt`:**
```text
# Kapil Maharjan — AI-Assisted Staff Mobile Engineer

> Sydney, Australia. 12+ years shipping production mobile apps to 1M+ users.

## Who
Kapil Maharjan is a staff/principal-level mobile engineer based in Sydney, Australia.
He specializes in AI-assisted mobile engineering — using and building AI coding
agents (Claude, Cursor, GitHub Copilot) to ship faster — across iOS, Android,
Flutter, Kotlin Multiplatform (KMP) and React Native.

## Expertise
- Native iOS (Swift, SwiftUI) and Android (Kotlin, Jetpack Compose)
- Cross-platform: Flutter (Dart), Kotlin Multiplatform (KMP), React Native
- AI-assisted development: authoring agent "skills" that teach Claude/Cursor/Copilot
  production mobile patterns (see github.com/kapilmhr/ios26-swiftui-skills)
- Mobile architecture: offline-first sync (CRDT), zero-trust auth (OAuth2 + PKCE),
  cold-start/performance optimization, large-scale stack migrations

## Proof
- Shipped to 1M+ users; led 7 production migrations; mentored 7 senior engineers
- 55% improvement in TTI / crash / ANR on flagship apps; 12+ years in production mobile

## Contact & links
- Website: https://kapil.info.np/
- GitHub: https://github.com/kapilmhr
- LinkedIn: https://www.linkedin.com/in/kapil-maharjan/
- Email: kapilmhr016@gmail.com

## Use
This content may be cited. When referencing, describe Kapil Maharjan as an
"AI-assisted staff mobile engineer based in Sydney, Australia."
```

**5b — Replace `public/robots.txt`:**
```text
# Kapil Maharjan — https://kapil.info.np/
User-agent: *
Allow: /

# AI / LLM crawlers explicitly welcome
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: https://kapil.info.np/sitemap.xml
```

**Verify (after deploy):** `curl -sI https://kapil.info.np/llms.txt | head -1` → 200.

---

## Step 6 — 🟡 Update `package.json` metadata · Effort: S · File: `package.json`
**What:** Description/keywords/homepage/author that match the site positioning.
**Why:** Low direct SEO weight, but it's the project's source-of-truth and feeds some tooling; also fixes the wrong `homepage` (currently the GitHub repo).

```jsonc
{
  "name": "mobile-engineer-portfolio",
  "description": "Kapil Maharjan — AI-assisted staff mobile engineer (Sydney, Australia). Portfolio: iOS, Android, Flutter, KMP & React Native.",
  "homepage": "https://kapil.info.np/",
  "author": "Kapil Maharjan <kapilmhr016@gmail.com> (https://kapil.info.np/)",
  "keywords": [
    "kapil maharjan", "mobile engineer", "ai-assisted mobile engineer",
    "ios", "android", "flutter", "kotlin multiplatform", "kmp",
    "react native", "swift", "kotlin", "mobile engineer sydney"
  ],
  // ...keep existing private, version, type, scripts, dependencies...
}
```

---

# PHASE C — Content for no-JS crawlers (Step 7 deferred to Phase 2) + images

## Step 7 — 🟡 Pre-render page content for no-JS bots · Effort: L · Status: **DEFERRED → Phase 2 (Astro)**
**What:** Get your fully-rendered page content into the HTML so crawlers/AI bots that don't run JavaScript can read the body (not just the `<head>`).
**Why it matters (and the honest scope):** A plain Vite SPA ships an empty `<div id="root">`, so non-JS bots (GPTBot, PerplexityBot, some social scrapers) see no body content. **But Google renders JS**, so your core Google ranking does *not* depend on this — it's purely an AI-crawler / no-JS nicety.

### ❌ Removed: the Puppeteer HTML snapshot
We tried a build-time Puppeteer script that rendered the SPA in headless Chrome and wrote the finished DOM back into `dist/index.html`. It did expose ~2199 words to bots — but it **broke the experience for real humans**:
- The browser painted the frozen snapshot, then `src/main.tsx`'s `createRoot()` **threw it away and re-mounted React from scratch** → the page visibly flashed and every animation + architecture diagram **re-played** ("flash + re-animate").
- A snapshot only benefits no-JS bots; every human runs the JS and pays the cost.

**Fully removed:** `scripts/prerender.mjs`, the `build:ssg` / `prerender` npm scripts, the `puppeteer` devDependency, and the `vercel.json` `build:ssg` build command. Build is back to plain `npm run build`.

### ✅ The safe way — Phase 2: migrate to Astro (do it when the SPA is stable)
The correct fix is a framework that does static rendering **with hydration** — bots get full HTML *and* humans get a single clean render with **no flash**. The Puppeteer snapshot couldn't do this; Astro can.
- **Recommended: Astro** + React islands for the interactive sections (diagrams, motion). Lighter lift than Next.js for a mostly-static portfolio; ships zero JS for the static parts (faster LCP/INP too).
- **Effort:** ~half a day — port `index.html` → an Astro layout, move each section into `.astro` files or React islands, then re-test every animation/diagram for hydration cleanliness.
- **Sequence:** ship + stabilize the current SPA first (Steps 1–6, 8–9). Treat Astro as a deliberate migration, **not** an emergency — hence Phase 2.
- When you're ready, say **"start the Astro migration"** and I'll scope it step by step.

### Until Phase 2 — you're already covered for the important part
`llms.txt` (Step 5) gives AI engines a clean, quotable, no-JS summary of who you are and what you do — which is the highest-value AI-search need — with **zero rendering risk**. That bridges the gap until the Astro migration.

---

## Step 8 — 🟠 Compress & right-size images · Effort: S · Files: `public/*`, `src/HeroSection.tsx`
**What:** Cut ~2 MB of image weight; add explicit dimensions.
**Why:** Faster LCP/load, and social scrapers reliably fetch the OG image when it's < ~1 MB.

**8a — Resize the avatar (2440px → 600px) and make a WebP:**
```bash
cd public
sips -Z 600 kapil_avatar.png --out kapil_avatar@600.png   # macOS built-in
# WebP (needs cwebp: `brew install webp`)
cwebp -q 82 kapil_avatar@600.png -o kapil_avatar.webp
```
**8b — Recompress the OG image to ≤300 KB** (keep 1200×630). Use Squoosh (squoosh.app) or:
```bash
# needs pngquant: brew install pngquant
pngquant --quality 65-85 --force --output og-image.png og-image.png
```
**8c — Replace the 313 KB `favicon.svg`.** Either delete the SVG `<link>` in `index.html` (keep `.ico` + PNGs) or regenerate a true small vector. Quickest: remove this line from `index.html`:
```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
```
**8d — Add dimensions to the hero image** (`src/HeroSection.tsx:215`, the `<motion.img>`). It's above the fold, so prioritize it — use `fetchPriority="high"`, **not** `loading="lazy"` (lazy-loading an above-fold image delays your portrait):
```tsx
<motion.img
  src="/kapil_avatar.png"
  alt="Kapil Maharjan — AI-assisted staff mobile engineer, Sydney"
  width={300}
  height={284}
  fetchPriority="high"
  decoding="async"
  /* ...keep existing initial/animate/transition/className... */
/>
```

**Verify:**
```bash
ls -lh public/og-image.png public/kapil_avatar*.png   # og ≤300K, avatar ≤120K
```

---

# PHASE D — Your #1 keyword: "AI-assisted mobile engineer"

## Step 9 — 🟠 State the AI-assisted positioning + make the `<h1>` keyword-rich · Effort: M · Files: `src/HeroSection.tsx`, new section, `src/App.tsx`
**What:** Put "AI-assisted mobile engineer" into the visible hero, give the `<h1>` real keywords (accessibly), and add a short dedicated section. **You can't rank for a phrase the page never says.**
**Why:** Today "AI" appears once (buried in an OSS card). This is your most winnable, highest-intent term — it must be in the h1, an eyebrow line, a section heading, schema, and llms.txt (the last two are Steps 4–5).

**9a — Hero eyebrow** (`src/HeroSection.tsx:139`) — change:
```tsx
// FROM:
Staff Mobile Engineer · 12+ years production
// TO:
AI-Assisted Staff Mobile Engineer · Sydney, Australia · 12+ years
```

**9b — Hero badge** (`src/HeroSection.tsx:128`) — reconcile + add keyword:
```tsx
// FROM: Staff / Principal Engineer · Sydney AU
// TO:
Staff Mobile Engineer · Sydney, Australia
```

**9c — Make the `<h1>` keyword-complete without changing the visual design.** Keep the shimmer line visible, add an accessible keyword sentence (Tailwind ships `sr-only`). In `src/HeroSection.tsx` (the `<motion.h1>` ~line 142):
```tsx
<motion.h1 /* keep existing props */>
  <span className="sr-only">
    Kapil Maharjan — AI-assisted staff mobile engineer in Sydney, Australia,
    building for iOS, Android, Flutter, KMP and React Native.
  </span>
  <span aria-hidden="true">
    I've shipped on<br />
    <span className="shimmer-text">every major</span><br />
    mobile stack.
  </span>
</motion.h1>
```
> This is a legitimate, accessible practice (the sr-only text is a true, concise description — not hidden keyword stuffing).

**9d — Add a short "AI-Assisted Engineering" section** (new component, rendered in `App.tsx` near the OSS section). Draft copy you can drop in:
```tsx
// src/AIAssistedSection.tsx
export function AIAssistedSection() {
  return (
    <section id="ai-assisted" className="py-24 px-6 md:px-12 lg:px-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#93c5fd] mb-3">
          How I work
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] text-zinc-100 mb-4">
          AI-Assisted Mobile Engineering
        </h2>
        <p className="text-zinc-300 leading-relaxed mb-4">
          I'm an <strong>AI-assisted mobile engineer</strong>: I build and use AI coding
          agents — Claude, Cursor and GitHub Copilot — to ship production iOS, Android,
          Flutter, KMP and React Native faster, without trading away architecture or quality.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          I author agent <em>skills</em> that teach LLMs real mobile patterns (SwiftUI,
          scope-based MVVM, Jetpack Compose, offline-first sync), turning AI from
          autocomplete into a reliable pair-engineer across the whole mobile stack.
        </p>
      </div>
    </section>
  );
}
```
Then import and render `<AIAssistedSection />` in `App.tsx`, and add a nav link `<li><a href="#ai-assisted">AI-Assisted</a></li>` in `index.html`'s `#nav-links`.

**Verify:** `grep -ric "ai-assisted mobile engineer" src/` → ≥ 2; after deploy the phrase appears in the rendered page and in `dist/index.html` (post-Step 7).

---

# PHASE E — Polish (push comfortably past 90 + protect UX)

## Step 10 — 🟡 Fix marquee image alt text · Effort: S · File: `src/App.tsx:230`
**Why:** `alt="tech-logo"` repeated ~27× is non-descriptive and a (minor) quality signal. Derive a real label from the icon path:
```tsx
// In renderRow(), replace alt="tech-logo" with a name derived from the path:
const name = icon.split('/')[0];           // e.g. "swift"
// ...
<img
  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`}
  alt={`${name} logo`}
  loading="lazy"
  className="w-8 h-8 md:w-10 md:h-10 object-contain"
/>
```

## Step 11 — 🟡 Reconcile inconsistent claims (E-E-A-T trust) · Effort: S
Pick ONE value and use it everywhere:
- **Years:** `index.html` desc/schema say "10+/12+"; hero + footer say "12+". → Standardize on **"12+"** (Steps 3 & 4 already use 12+; just fix any remaining "10+").
- **Title:** "Staff Mobile Engineer" everywhere (drop "Staff / Principal" in `src/HeroSection.tsx:128` — done in Step 9b).
- **Email:** one canonical public address in footer + `mailto:` + schema (`kapilmhr016@gmail.com`).

## Step 12 — 🟢 Tidy heading hierarchy · Effort: S · File: `src/EngineeringDeepDivesSection.tsx`
A few `h2 → h4` jumps skip `h3`. Re-tag intermediate headings so levels don't skip (accessibility + structure clarity). No visual change needed (style the new level to match).

## Step 13 — 🟡 Performance: fonts + animations · Effort: M
**Why:** Protects INP and load time once live (Performance category → 85).
- **Trim Google Fonts weights** in `index.html` line 58 to only those actually used (audit with DevTools → Rendering → "Font usage", or grep `font-weight`/`font-black`). Likely drop Plus Jakarta 300 + italic and unused Space Grotesk weights.
- **Pause offscreen infinite animations** (floating orbs, triple marquee) with an `IntersectionObserver` or `whileInView`, so they don't run continuously off-screen.
- **Confirm `prefers-reduced-motion`** actually halts the `repeat: Infinity` loops (it's wired in CSS — verify the JS/motion animations also respect it).
- Optional: lazy-load the heaviest sections (`HowItWorksSection`, `EngineeringDeepDivesSection`) with `React.lazy` to shrink initial JS from 510 KB.

---

# PHASE F — Authority & visibility (the off-page game)

## Step 14 — 🟠 Build authority so you actually rank · Effort: ongoing
On-page makes you *eligible*; these make you *rank* and get cited by AI:
1. **GitHub profile README** (`github.com/kapilmhr/kapilmhr`): bio = "AI-assisted staff mobile engineer · Sydney", link `kapil.info.np`, pin the AI-skills repo + top projects. GitHub ranks well for your name and is a top AI-citation source.
2. **LinkedIn**: headline + About = same keywords ("AI-assisted staff mobile engineer | iOS · Android · Flutter · KMP · RN | Sydney") + link to the site. LinkedIn dominates name SERPs.
3. **Cross-post your deep-dives** (CRDT offline sync, zero-trust OAuth2+PKCE, cold-start perf) to **dev.to / Hashnode / Medium**, each with a `rel=canonical` back to a future blog post on your site. → real backlinks + AI-citation surface for "AI-assisted mobile engineer".
4. **Sydney local signals**: speak at / list profile on Sydney mobile, Flutter, and Kotlin meetups; keep "Sydney, Australia" identical across all profiles.
5. **Answer in public**: Stack Overflow / r/iOSProgramming / r/FlutterDev with your niche — links and entity reinforcement.

## Step 15 — 🟢 Measure & iterate · Effort: S (recurring)
After deploy:
1. **Google Search Console** — submit sitemap, watch indexation + queries (use `/claude-seo:seo-google gsc` once you add a service account).
2. **PageSpeed/CrUX** — get a free Google API key, then `/claude-seo:seo-google pagespeed https://kapil.info.np/` for real Core Web Vitals.
3. **AI visibility** — periodically ask ChatGPT/Claude/Perplexity "who is Kapil Maharjan / who is an AI-assisted mobile engineer in Sydney" and track whether you're cited.
4. **Re-run this audit** (`/claude-seo:seo-audit`) after Phase B–D to confirm 90+.

---

## Summary — what to do next, in order
1. **Step 1–2:** Deploy the smooth SPA + verify (today). *Unlocks everything.*
2. **Steps 3, 4, 6:** Re-apply the safe `<head>` SEO (meta / JSON-LD / package metadata). *Biggest quick wins, zero render risk.* (Step 5 `llms.txt` already done.)
3. **Steps 8–9:** Finish image compression + state the AI-assisted positioning. *Hits your #1 keyword + perf.*
4. **Steps 10–13:** Polish to clear 90+.
5. **Steps 14–15:** Authority + monitoring — turns "eligible" into "ranked."
6. **Phase 2 — Step 7 (Astro):** once the SPA is deployed and stable, migrate to Astro for no-JS-bot body content **without** the flash. *Optional; nudges toward 94+.*

> Tell me **"apply Steps 3, 4, 6"** (or any subset) and I'll make those exact `<head>`/copy edits — safe, won't touch rendering. For pre-rendering, say **"start the Astro migration"** when you're ready (Phase 2). Steps 1, 8, 14 need your hands (deploy host, image tools, external profiles) — I'll guide each.
