# Full SEO Audit — Kapil Maharjan Portfolio

**Date:** 2026-06-14
**Auditor:** Senior Engineer + Senior SEO (advisory)
**Target domain:** `https://kapil.info.np/`
**Site:** This repo — React 19 + Vite 6 single-page portfolio
**Goal:** Make **Kapil Maharjan** visible in-market and rank for mobile-engineering + **AI-assisted mobile engineer** queries; reach a **90+** SEO readiness score.

> **This is a planning document. No source files were changed.** Every proposed edit is written out as copy-paste-ready blocks in `ACTION-PLAN.md`. Apply them when you're ready (or ask me to apply them).

---

## 0. How to read this report

- **Score today:** `72/100` (repo readiness) — but **the live domain currently serves a different, old site**, so the *effective live score is ~30*.
- **Score after the action plan:** projected **91–94/100** (see §9 for the math and what each phase buys you).
- The plan is sequenced so the **highest-leverage, lowest-effort** items come first.

---

## 1. Executive Summary

### 1.1 The one thing that matters most
🔴 **`https://kapil.info.np/` is NOT this portfolio.** It currently serves an **old Flutter web app** ("Kapil's Portfolio", meta description literally `"Lead Engineer"`, Firebase-hosted, no schema/OG, robots.txt + sitemap return 404). This React portfolio — which is well-built and SEO-aware — **is not deployed anywhere**.

Until this repo is deployed to the domain, **none of the optimization below is visible to Google or anyone else.** Deployment is Step 1 of the action plan.

### 1.2 The second thing that matters most
🔴 **The site is 100% client-side rendered (CSR).** The built `<body>` is literally `<nav>…</nav><div id="root"></div><script>`. All the rich content (iOS ×67, Android ×72, Flutter ×45, KMP ×35, React Native ×20 keyword mentions) **only exists after JavaScript runs.**

- Googlebot *can* render JS, so it will mostly see it — but it's slower, budget-limited, and fragile.
- **AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Bing's preview bot) largely DON'T run JS** → they see an almost-empty page. Since you specifically want **"AI-assisted mobile engineer"** visibility *and* AI-search visibility, this is the single biggest content blocker. **Pre-rendering the HTML unlocks all your existing content at once.**

### 1.3 Business / entity type detected
Personal-brand professional portfolio — single entity (`Person`: Kapil Maharjan), single page, no blog. Local relevance: **Sydney, Australia**. This means your realistic SEO wins are **(a) your name/entity, (b) role + specialty + location long-tails, (c) AI-assisted niche**, not generic head terms (see §10 Ranking Reality Check).

### 1.4 Top 5 Critical Issues
| # | Issue | Why it matters | Fix → step |
|---|-------|----------------|-----------|
| 1 | Live domain serves the **old Flutter app**; this repo undeployed | Google indexes the wrong, thin site | ACTION-PLAN **Step 1** |
| 2 | **Pure CSR** — empty `<body>` before JS | AI crawlers + previews see no content; weak for "AI-assisted" + AI search | **Step 7** (prerender) |
| 3 | **No keyword targeting for "AI-assisted mobile engineer"** — appears once, buried in an OSS card | Your #1 priority term is almost absent from title/desc/h1/schema | **Steps 3, 4, 9** |
| 4 | `robots.txt` + `sitemap.xml` **404 on live domain** | No crawl directives / sitemap discovery | auto-fixed by Step 1; verify in **Step 2** |
| 5 | **Oversized media** (og 1.5 MB, avatar 939 KB/2440px, favicon.svg 313 KB) | Slow LCP, social scrapers may drop the OG image | **Step 8** |

### 1.5 Top 5 Quick Wins (high impact, < 30 min each)
1. Rewrite `<title>` + meta description + add `keywords`/geo meta → **Step 3**.
2. Upgrade JSON-LD to a `Person` + `WebSite` + `ProfilePage` `@graph` with AI-assisted `knowsAbout` → **Step 4**.
3. Add `public/llms.txt` (factual, quotable entity summary) → **Step 5**.
4. Update `package.json` description/keywords/homepage → **Step 6**.
5. Fix marquee `alt="tech-logo"` and reconcile "10+/12+ years" + title inconsistencies → **Steps 10, 11**.

---

## 2. Technical SEO — Score 75/100

| Check | Status | Notes |
|-------|:------:|-------|
| HTTPS + HSTS | ✅ | Host sends `strict-transport-security`. |
| `www → apex` redirect | ✅ | 301 (verified live). |
| `http → https` redirect | ✅ | 301 (verified live). |
| Custom 404 | ✅ | Random paths 404 correctly. |
| `<html lang>` | ✅ | `en` (recommend `en-AU` — Step 3). |
| Canonical | ✅ | `https://kapil.info.np/` matches OG URL. |
| robots meta | ✅ | `index, follow` (recommend adding `max-image-preview:large` — Step 3). |
| robots.txt in build | ✅ | Builds to `dist/` root; deploys with the app. |
| sitemap.xml in build | ✅ | Same; `lastmod` is stale (`2026-04-03`). |
| **Deployment** | 🔴 | **Repo not deployed; live = old Flutter app.** |
| **Rendering (SSR/SSG)** | 🔴 | **Pure CSR, no prerender.** Body empty without JS. |
| Sitemap richness | 🟡 | Single URL (fine for a 1-pager). |
| `dist/` freshness | 🟡 | Built from an older nav; rebuild before deploy. |

**Verdict:** The plumbing is mostly correct. The two red items (deploy + CSR) are the whole game.

---

## 3. Content Quality & E-E-A-T — Score 76/100

**Strengths (genuinely strong)**
- ~1,660 words of specific, senior-level content. Concrete proof: **1M+ users, 55% TTI/crash/ANR gains, 7 migrations, 7 engineers mentored, 12+ years**.
- Named, credible techniques: QuadTree clustering in C++/Metal, CRDT offline sync, OAuth2 + PKCE zero-trust, SQLite queueing, cold-start critical path. This is exactly what recruiters and AI engines reward.
- Clear entity identity (name, role, Sydney, GitHub, LinkedIn).
- An **authentic AI-assisted hook already exists**: the "iOS SwiftUI Skills" OSS card — *"Claude, Cursor and Copilot skills that teach AI assistants iOS development…"* (`src/OpenSourceSection.tsx:20`). You actually build AI-agent tooling for mobile dev. **This is your differentiator — it's currently one sentence; it should be a headline theme.**

**Gaps**
- 🔴 **All prose is CSR-only** → invisible to non-JS crawlers (fix = prerender, Step 7).
- 🔴 **"AI-assisted mobile engineer" is not a stated positioning.** "AI" appears ~1 time in visible content. To rank for it, the site must *say* it (title, h1, a dedicated section) — see Steps 3 & 9.
- 🟡 **Consistency (E-E-A-T trust):** "10+ years" (index.html) vs "12+ years" (hero/footer); "Staff Mobile Engineer" vs "Staff / Principal Engineer" (`src/HeroSection.tsx:128`). Pick one each.
- 🟡 **Two emails in the codebase:** footer `kapilmhr016@gmail.com` (`src/ContactFooter.tsx:47`); schema has none. Choose one public email, use everywhere + in schema.
- 🟢 No freshness signal (no "last updated" / dated notes).

---

## 4. On-Page SEO — Score 80/100

| Element | Current | Assessment |
|---------|---------|-----------|
| `<title>` | `Kapil Maharjan — Staff Mobile Engineer \| Portfolio` | Good, but no AI-assisted / location; "Portfolio" wastes pixels. → Step 3 |
| Meta description | "…10+ years…interactive architecture diagrams…" | Decent; lacks Sydney/Australia + AI-assisted; says 10+ (inconsistent). → Step 3 |
| `<h1>` | **Exactly one** ✅ — "I've shipped on every major mobile stack." (`src/HeroSection.tsx:142`) | Great brand voice, **zero target keywords** (no name, "mobile engineer", AI). → Step 9 |
| Heading hierarchy | h1→h2→h3/h4 mostly logical | A few `h2→h4` skips in `EngineeringDeepDivesSection.tsx`. → Step 12 |
| Section IDs | `#hero #stats #stack #how-it-works #architecture #solutions #problems #thought-leadership #oss #contact` | Descriptive ✅ |
| In-body nav | Static HTML anchor links ✅ | Crawlable even pre-JS. |
| Image alt | hero ✅ `"Kapil — Staff Mobile Engineer"`; marquee 🔴 `alt="tech-logo"` ×27 | → Step 10 |

---

## 5. Schema / Structured Data — Score 80/100

**Current:** Valid single `Person` JSON-LD (name, jobTitle, description, url, sameAs ×2, knowsAbout ×9, address). Survives the build ✅.

**Gaps → Step 4:**
- No `image`, no `email`, no stable `@id`.
- `knowsAbout` has no **AI-assisted** terms (your priority).
- Not wrapped as a `@graph` with `WebSite` + `ProfilePage` (ideal for personal-brand entity recognition / a potential knowledge panel).
- `address` missing `addressRegion` ("New South Wales").

---

## 6. Performance (Core Web Vitals) — Score 68/100 *(lab estimate; no field data — site not live)*

| Factor | Observation | Action |
|--------|-------------|--------|
| JS bundle | `index-*.js` ≈ **510 KB** raw (~150–170 KB gzip) | Acceptable; code-split heavy sections later (Step 13). |
| CSS | 88 KB | Fine. |
| Fonts | **3 families, many weights** (Plus Jakarta 300–900 + italic, JetBrains ×4, Space Grotesk ×5) via Google Fonts | Trim unused weights (Step 13). `display=swap` ✅, `preconnect` ✅. |
| Animations | Many `repeat: Infinity` (orbs w/ `blur(70px)`, triple marquee, pulses) | Continuous main-thread/compositor work → **INP + battery risk**. Pause offscreen (Step 13). `prefers-reduced-motion` present ✅ — verify it stops loops. |
| LCP | Likely hero `<h1>` (inline, fast) | Good. Avatar is `hidden md:block` → not mobile LCP. |
| CLS | Low risk | Add `width`/`height` to avatar `<motion.img>` (Step 8). |

**Note:** Real Core Web Vitals require deployment, then measure via PageSpeed/CrUX (the `seo-google` skill, once you deploy + add a free API key).

---

## 7. Images — Score 55/100

| File | Dimensions | Size | Verdict | Step |
|------|-----------|------|---------|------|
| `public/og-image.png` | 1200×630 ✅ | **1.5 MB** 🔴 | Right ratio, too heavy; target ≤300 KB | 8 |
| `public/kapil_avatar.png` | 2440×2309 🔴 | **939 KB** 🔴 | ~8× oversized (renders ≤300px); resize ~600px + WebP | 8 |
| `public/favicon.svg` | 1024×1024 (raster embedded) | **313 KB** 🔴 | Absurd for a favicon; loads every visit | 8 |
| `favicon.ico` | 48×48 | 15 KB | ✅ | — |
| `apple-touch-icon.png` | 180×180 | 12 KB | ✅ | — |
| `web-app-manifest-512x512.png` | 512×512 | 66 KB | ✅ | — |

Also: no WebP/AVIF anywhere; hero `<img>` missing `width/height/loading/fetchpriority`.

---

## 8. AI Search Readiness (GEO) — Score 45/100 *(weakest — and it's your priority)*

You explicitly want **"AI-assisted mobile engineer"** visibility *and* presence in AI answers (ChatGPT/Claude/Perplexity/AI Overviews). Today:

- 🔴 **CSR blocks AI crawlers** — most don't run JS → they see an empty body. **Prerender (Step 7) is the unlock.**
- 🔴 **No `llms.txt`** (Step 5).
- 🔴 **No stated AI-assisted positioning** in machine-readable places (title/h1/schema/llms) — Steps 3, 4, 9.
- 🟡 robots.txt is `Allow: /` for all agents (good — doesn't block AI), but explicitly welcoming AI bots + sitemap helps (Step 5b).

**Strengths to amplify:** clean `Person` schema + `sameAs`; an authentic AI-tooling OSS project (Claude/Cursor/Copilot skills) — that's a *real* reason AI engines could cite you as an "AI-assisted mobile engineer." Make it loud.

---

## 9. Scoring — Today vs After the Plan

| Category | Weight | Today | After plan | What moves it |
|----------|:------:|:-----:|:----------:|---------------|
| Technical SEO | 22% | 75 | **95** | Deploy (S1) + prerender (S7) + sitemap/robots verified |
| Content Quality | 23% | 76 | **90** | Prerender exposes content; AI-assisted section (S9); consistency (S11) |
| On-Page SEO | 20% | 80 | **93** | Title/desc/keywords (S3); keyword-rich h1 (S9); alt (S10) |
| Schema | 10% | 80 | **95** | @graph Person+WebSite+ProfilePage, AI knowsAbout (S4) |
| Performance | 10% | 68 | **85** | Image compression (S8) + font/animation trims (S13) |
| AI Readiness | 10% | 45 | **90** | Prerender + llms.txt + AI positioning + schema (S4,5,7,9) |
| Images | 5% | 55 | **90** | Compress/resize/WebP (S8) |
| **Weighted total** | | **≈72** | **≈91–94** | |

**Path to 90+ requires, at minimum:** Step 1 (deploy), Steps 3–6 (meta/schema/llms/package), Step 7 (prerender), Step 8 (images), Step 9 (AI-assisted positioning + h1). Steps 10–13 push you comfortably past 90 and protect INP.

---

## 10. Ranking Reality Check — what's actually winnable (read this)

As your SEO lead, I won't pretend a single personal portfolio will rank page 1 for *"android"* or *"ios"*. Those SERPs are owned by Apple, Google, Wikipedia, job boards, and course sites with millions of backlinks. Chasing them in your `<title>` wastes your strongest asset. Here's the honest map:

| Keyword | Intent | Difficulty | Realistic? | Where we target it |
|---------|--------|:----------:|:----------:|--------------------|
| **Kapil Maharjan** | Your name | Trivial | ✅ #1 (own it) | title, h1, schema `@id`, llms |
| **Kapil Maharjan mobile engineer** | Name + role | Trivial | ✅ #1 | title, schema, llms |
| **AI-assisted mobile engineer** | Emerging niche | **Low–Med** | ✅ **realistic in months** — your best growth bet | title, h1, dedicated section, schema, llms, OSS project |
| **AI-assisted mobile engineer Sydney** | Niche + local | Low | ✅ realistic | h1/section + geo schema |
| **staff mobile engineer Sydney** | Role + local | Medium | ✅ realistic (mo's) | description, section, local signals |
| **Kotlin Multiplatform / KMP engineer Sydney** | Specialty + local | Low–Med | ✅ realistic | content + schema knowsAbout |
| **Flutter / React Native developer Sydney** | Specialty + local | Medium | 🟡 with backlinks/time | content + section |
| **mobile engineer Australia** | Role + national | Med–High | 🟡 long game | content + authority building |
| **mobile engineer** | Generic head | High | ⚠️ aspirational | supporting context only |
| **ios / android / flutter / react native** (bare) | Generic head | Very High | ❌ not realistic for a portfolio | weave into content for relevance, do not target in title |

**Strategy in one line:** *Own your entity → win the AI-assisted + Sydney/specialty long-tails → build authority (links, GitHub, cross-posted writing, talks) → only then nudge the broad terms.* Generic head terms come as a by-product of authority, never as a title-tag wish.

---

## 11. Off-page / authority (because you said "visible in market")

On-page makes you *eligible* to rank; authority gets you *ranked*. Detailed steps are in ACTION-PLAN **Step 14**; summary:
- **GitHub profile** as an SEO asset (profile README, pinned repos incl. the AI-skills repo, bio = "AI-assisted mobile engineer · Sydney", link to site).
- **LinkedIn** headline/about mirroring the same keywords + site link (LinkedIn ranks for your name).
- **Cross-post the deep-dives** (CRDT sync, zero-trust auth, cold-start) to **dev.to / Hashnode / Medium** with canonical back to your site → backlinks + AI-citation surface.
- **Be where AI models look:** the AI-skills repo, dev.to, Stack Overflow answers, conference/meetup talks (Sydney mobile/Flutter meetups).
- Citation consistency for the "Sydney" angle (identical Name + "Sydney, Australia" across GitHub/LinkedIn/site).

---

## 12. What I checked (so you know nothing was skipped)

Live HTTP headers, redirects (www/http), live `robots.txt` + `sitemap.xml` (both 404), raw pre-JS HTML (0 body words), built `dist/index.html` (CSR confirmed, head meta preserved), bundle/asset sizes, all 10 source components (headings, landmarks, images, alt, anchors), keyword frequency for 11 target terms, AI-term coverage, image dimensions/weights, `site.webmanifest`, `vite.config.ts` (no prerender), `package.json`, `prefers-reduced-motion`, external-link `rel`, analytics presence (none in repo).

---

*Continue to `ACTION-PLAN.md` — every fix is a numbered, copy-paste step with "what / why / exact change / how to verify."*
