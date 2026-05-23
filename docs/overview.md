# Portfolio Website — Comprehensive Content Overview

> **Generated:** 2 May 2026 | **Site:** kapil.info.np | **Owner:** Kapil Maharjan

---

## Table of Contents

1. [Personal Identity & Positioning](#1-personal-identity--positioning)
2. [Technology Stack & Build System](#2-technology-stack--build-system)
3. [Site Structure & Navigation](#3-site-structure--navigation)
4. [Section-by-Section Content Breakdown](#4-section-by-section-content-breakdown)
   - 4.1 [Hero Section](#41-hero-section)
   - 4.2 [About Section](#42-about-section)
   - 4.3 [Tech Marquee](#43-tech-marquee)
   - 4.4 [Impact Metrics Section](#44-impact-metrics-section)
   - 4.5 [Engineering Principles Section](#45-engineering-principles-section)
   - 4.6 [How It Works — Platform Internals](#46-how-it-works--platform-internals)
   - 4.7 [System Architecture Section](#47-system-architecture-section)
   - 4.8 [Engineering Deep Dives Section](#48-engineering-deep-dives-section)
   - 4.9 [Engineering Solutions (Work Section)](#49-engineering-solutions-work-section)
   - 4.10 [Interactive Terminal](#410-interactive-terminal)
   - 4.11 [Thought Leadership Section](#411-thought-leadership-section)
   - 4.12 [Open Source Section](#412-open-source-section)
   - 4.13 [Contact Section & Footer](#413-contact-section--footer)
5. [All Architecture & Diagram Content](#5-all-architecture--diagram-content)
   - 5.1 [Platform Architecture — 7-Layer System](#51-platform-architecture--7-layer-system)
   - 5.2 [Platform Internals — Compilation Pipelines](#52-platform-internals--compilation-pipelines)
   - 5.3 [Offline-First Sync & CRDT Diagram](#53-offline-first-sync--crdt-diagram)
   - 5.4 [Zero-Trust Auth Sequence Diagram](#54-zero-trust-auth-sequence-diagram)
   - 5.5 [App Startup Critical Path Diagram](#55-app-startup-critical-path-diagram)
6. [All Projects (Engineering Solutions)](#6-all-projects-engineering-solutions)
7. [Statistics & Numbers Across the Site](#7-statistics--numbers-across-the-site)
8. [Design System & Visual Identity](#8-design-system--visual-identity)
9. [SEO & Metadata](#9-seo--metadata)
10. [Dependencies & Tooling](#10-dependencies--tooling)
11. [File Structure](#11-file-structure)

---

## 1. Personal Identity & Positioning

| Field | Value |
|---|---|
| **Full Name** | Kapil Maharjan |
| **Title** | Staff Mobile Engineer |
| **Experience** | 10+ years production mobile |
| **Location** | Sydney, Australia · UTC+11 |
| **Email** | stackflutter@gmail.com |
| **GitHub** | github.com/kapilmhr |
| **LinkedIn** | linkedin.com/in/kapil-maharjan/ |
| **Website** | https://kapil.info.np |
| **Open to work** | Staff / Principal roles |
| **Availability status** | "Open to select opportunities" (green pulsing badge) |

### Positioning Statement (Hero)
> "I've shipped on every major mobile stack."

Tagline subtext:
> "Swift · Kotlin · Dart · KMP · React Native. Not as a generalist who dabbles — as someone who has led 7 production migrations between them, shipped to 1M+ users, and knows exactly when to use each one and why."

### Engineering Philosophy (About)
> "Ship with conviction, refactor with humility, and always leave the codebase better than you found it."

### Bio Card (About Section)
Three paragraphs:
1. Staff Engineer with 10+ years building mobile-first products across **consumer** and **enterprise** — two of the most demanding domains for reliability, performance, and user trust.
2. Shaped engineering culture and technical direction at scale-ups, enterprise organisations, and consulting environments.
3. Currently embedded in a cross-functional product org, working with engineers across mobile, full-stack, and platform — setting technical direction, raising developer experience bar, and turning ambiguous problems into scalable solutions.

### Domain Tags
`Consumer` · `Enterprise` · `Mobile-First` · `Scale-up` · `Consulting`

### Focus Areas (About Section)
- Native Mobile Engineering (Swift / Kotlin)
- Cross-Platform & KMP Architecture
- Developer Experience & Tooling
- Technical Leadership & Mentorship

---

## 2. Technology Stack & Build System

### Frontend Framework
| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 6 |
| Language | TypeScript 5.8 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| Animation | `motion` (Framer Motion v12.23.24) |
| Icons | `lucide-react` v0.546 + `simple-icons` v16.12 |
| Fonts | Space Grotesk (display) + JetBrains Mono (monospace) via Google Fonts CDN |

### Key Dependencies (`package.json`)
```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "motion": "^12.23.24",
  "lucide-react": "^0.546.0",
  "simple-icons": "^16.12.0",
  "@tailwindcss/vite": "^4.1.14",
  "vite": "^6.2.0",
  "typescript": "~5.8.2"
}
```

### Build Commands
| Command | Purpose |
|---|---|
| `npm run dev` | Dev server on port 3000, host 0.0.0.0 |
| `npm run build` | Production build via Vite |
| `npm run preview` | Preview production build |
| `npm run lint` | TypeScript type check (`tsc --noEmit`) |
| `npm run clean` | Remove `dist/` directory |

### Source Files
| File | Size / Lines | Purpose |
|---|---|---|
| `src/App.tsx` | ~3,630 lines, ~180KB | All sections, all widget components |
| `src/HowItWorksSection.tsx` | ~1,751 lines, ~87KB | Platform internals diagrams |
| `src/index.css` | ~100 lines | Tailwind v4 theme + global styles |
| `src/main.tsx` | Small | React entry point |
| `index.html` | ~570 lines | Vite entry, nav, inline CSS, SEO meta |

---

## 3. Site Structure & Navigation

The site is a **Single Page Application (SPA)**. Navigation uses `#hash` anchor scroll, not a router.

### Navigation Bar (inline in `index.html`)
The nav is defined entirely in `index.html` as HTML + inline CSS. It contains:
- **Left**: Logo / brand text
- **Right links**: Architecture · Principles · Solutions · Terminal · Contact
- **Resume button**: `↓ Resume` (links to `/resume.pdf`)
- **Sticky top** on scroll with glass-blur background

### Section Anchors (scroll targets)
| Anchor ID | Section |
|---|---|
| `#hero` | Hero |
| `#about` | About |
| `#stack` | Tech Marquee |
| `#stats` | Impact Metrics |
| `#engineering-principles` | Engineering Principles (also `#principles`) |
| `#how-it-works` | Platform Internals |
| `#architecture` | System Architecture |
| `#problems` | Engineering Deep Dives |
| `#solutions` | Engineering Solutions (Work) |
| `#terminal` | Interactive Terminal |
| `#thought-leadership` | Thought Leadership |
| `#oss` | Open Source |
| `#contact` | Contact |

### Section Render Order (in `App.tsx`)
```
HeroSection → AboutSection → TechMarquee → ImpactMetricsSection →
EngineeringPrinciplesSection → HowItWorksSection → SystemArchitectureSection →
EngineeringDeepDivesSection → WorkSection → InteractiveTerminal →
ThoughtLeadershipSection → OpenSourceSection → ContactSection
```

---

## 4. Section-by-Section Content Breakdown

### 4.1 Hero Section

**Layout**: 3-column grid (left content / centre avatar / right stats)

**Left column — copy:**
- Cyan pill badge: `Staff Mobile Engineer · 10+ years` (pulsing dot)
- H1 headline: "I've shipped on every major mobile stack."
- Subtitle (monospace, border-left): Describes 7 migrations, 1M+ users, multi-stack expertise
- Tech pill badges (7): Swift · Kotlin · Dart · KMP · SwiftUI · Jetpack Compose · React Native
- CTA buttons:
  - Primary (blue): "See the architecture" → scrolls to `#architecture`
  - Secondary (outlined): "View decision log" → scrolls to `#engineering-principles`

**Centre column — avatar:**
- Photo: `kapil_avatar.png` (3:4 aspect ratio, rounded corners)
- Floating badge top-left: "Available" (green pulsing dot)
- Floating badge top-right: GitHub icon + "50+" + "Open Source"
- Floating badge bottom: Code2 icon + "Staff Mobile Engineer" + "iOS · Android · Flutter · KMP"

**Right column — stat cards (4 cards):**
1. `1M+` — users · largest app shipped (green, TrendingUp icon)
2. `55%` — TTI · crash · ANR gains (amber, Timer icon)
3. `7+` — migrations · every direction (purple, ArrowRight icon)
4. `7` — senior engineers mentored (pink, User icon)
5. Tech stack mini-card: UIKit · SwiftUI · XML · Compose · Flutter · KMP · RN pills

**Bottom strip:**
- `50+ repos`
- `10+ years production mobile`
- `Sydney, Australia · UTC+11`
- `Open to staff / principal roles` (right-aligned, green dot)

---

### 4.2 About Section

**Layout**: 2-column (left = identity, right = content)

**Left column:**
- Availability badge: "Open to select opportunities"
- Comment label: `// about`
- Large heading: "Staff Engineer."
- Engineering Philosophy blockquote
- Domain tags: Consumer · Enterprise · Mobile-First · Scale-up · Consulting

**Right column — Bio card (styled as a code editor):**
- Header: `bio.md` label + `markdown` language tag
- 3 paragraphs of biography text

**Stats row (4 mini-stats):**
| Value | Label |
|---|---|
| 10+ | Years |
| 2 | Domains |
| 3 | Company Types |
| 15+ | Engineers Led |

**Focus areas (4 items with ◈ icon):**
1. Native Mobile Engineering (Swift / Kotlin)
2. Cross-Platform & KMP Architecture
3. Developer Experience & Tooling
4. Technical Leadership & Mentorship

---

### 4.3 Tech Marquee

**Layout**: Full-width section with 3 infinite-scrolling rows

**Row 1** (left → right): Swift, Kotlin, Apple, Android, React, Flutter, TypeScript, Tailwind CSS, Figma

**Row 2** (right → left, reversed): Node.js, Python, Go, GraphQL, Firebase, Google Cloud, AWS, MongoDB, PostgreSQL

**Row 3** (left → right): Docker, Kubernetes, GitHub, GitLab, Jira, Slack, Redis, Linux, Vercel

- All 27 logos loaded from `cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/...`
- Grayscale by default, full colour on hover
- Scale 1.1x on hover
- Fade gradients on left and right edges

---

### 4.4 Impact Metrics Section

**Heading**: `// by the numbers — 10+ years shipping native iOS, Android & cross-platform`

**Animated counter cards (4, triggered by IntersectionObserver):**
| Colour | Metric | Context |
|---|---|---|
| Green | 1M+ users | Largest production app shipped across iOS & Android |
| Amber | 55% perf improvement | TTI, crash rate, ANR & app size — across multiple apps |
| Purple | 7 senior engineers mentored | iOS, Android & Flutter engineers across cross-functional teams |
| Pink | 7+ migrations led | End-to-end platform rewrites across every major mobile stack |

**Migration Track Record strip (7 documented migrations):**

| From | To | Note |
|---|---|---|
| React Native | Flutter | cross-platform consolidation |
| React Native | Native iOS + Android | performance-critical rewrite |
| Native iOS + Android | Flutter | single codebase, full parity |
| Legacy iOS (ObjC/UIKit) | SwiftUI | incremental, zero downtime |
| Legacy Android (Java) | Jetpack Compose | module-by-module migration |
| Native iOS + Android | KMP shared logic | business layer extraction |
| Native iOS + Android | React Native | team velocity optimisation |

**Footer note**: "iOS · Android · Flutter · KMP · React Native · SwiftUI · Jetpack Compose — shipped across all"

---

### 4.5 Engineering Principles Section

**Heading**: "Engineering Principles"
**Subtitle**: "Opinions formed by making the wrong call first."

**6 principle cards** (2-column grid, with CSS reveal animation on scroll):

| # | Category Badge | Title | Content Summary |
|---|---|---|---|
| 1 | Performance | **Instrument first. Never guess.** | Profiler before hypothesis — always on a release build on a real device. Intuition about where the bottleneck is will be wrong more often than not. |
| 2 | Architecture | **Defer framework decisions until the last responsible moment.** | Most migrations I've led existed because a team locked in a framework before requirements were stable. Decide when you have evidence, not enthusiasm. |
| 3 | Cross-Platform | **Know what the abstraction is hiding.** | Flutter, RN, and KMP all have a native layer underneath. The bugs that matter live there. Native depth is what lets you fix the problem instead of working around it. |
| 4 | Production | **The simulator is a hypothesis. Production is the spec.** | Real device, release build, throttled network. The bugs that matter never surface in CI — they show up on a 3-year-old mid-range Android on a flaky 4G connection. |
| 5 | Leadership | **Raise the team's decision quality. Don't make all the decisions.** | The worst thing a staff engineer can do is become a bottleneck. Write the ADR, run the spike, set the standard — then get out of the way. |
| 6 | Delivery | **Incremental migration beats the big rewrite. Every time.** | Keep the app shippable at every commit. Define done as 'old system deleted' not 'new system built.' The teams that shipped never stopped delivering features mid-migration. |

Each card has: custom SVG icon, colour-coded category badge, coloured bottom border accent.

---

### 4.6 How It Works — Platform Internals

**Section heading**: "How Code Becomes a Running App"
**Subtitle**: "A deep dive into compilation pipelines, runtime internals, and what actually happens between writing a line of code and it executing on a real device."
**Comment**: `// platform internals`

**Tabbed interface** — 5 platform tabs:

#### Tab 1: iOS (Swift)

**Animated SVG flowchart** split across 3 columns (Build Time | Launch | Runtime):

*Build Time column (purple):*
- Swift source (.swift files)
- swiftc + LLVM (compiles to LLVM IR)
- Linker (ld) — produces Mach-O binary

*Launch column (teal):*
- dyld — loads binary + frameworks
- @main App struct — entry point
- WindowGroup — root view instantiated

*Runtime column (blue):*
- Run loop — waits for events
- Events: Tap (@State) · Async (.task) · Sys (scene)
- View tree built — structs, body evaluated
- SwiftUI diffs + renders — Core Animation → Metal → GPU
- Feedback loops: Re-render (right) · Next tick (left)

**Stats bar (6 metrics):**
| Build | Cold Start | Perf | Hot Reload | Code Share | Size |
|---|---|---|---|---|---|
| 12s | 300ms | 120fps | N/A | 0% | 15MB |

---

#### Tab 2: Android (Kotlin)

**Animated SVG flowchart** — 3 columns (Build Time | Launch | Runtime):

*Build Time column (green):*
- Kotlin source (.kt files)
- kotlinc + D8/R8 — compiles to DEX bytecode
- Gradle packages — produces APK / AAB

*Launch column (teal):*
- Zygote fork — OS spawns app process
- Application.onCreate — global init, DI setup
- Activity.setContent — root composable set

*Runtime column (blue/amber):*
- Choreographer — frame scheduler / event loop
- Events: Tap (remember) · Flow (collectAsState) · Lifecycle (onResume)
- Composition — composables evaluated
- Layout → Draw — Canvas → RenderThread → GPU
- Feedback loops: Recompose (right) · Next frame (left)

**Stats bar (6 metrics):**
| Build | Cold Start | Perf | Hot Reload | Code Share | Size |
|---|---|---|---|---|---|
| 25s | 600ms | 120fps | ~1s | 0% | 25MB |

---

#### Tab 3: Flutter (Dart)

**Animated SVG flowchart** — 3 columns (Build Time | Launch | Runtime):

*Build Time column (rose/coral):*
- Dart source (.dart files)
- dart compile AOT — native arm64 binary
- flutter build — APK / IPA bundle

*Launch column (teal):*
- Flutter engine — C++ embedder starts
- Dart VM init — isolate spawned
- runApp() — root widget attached

*Runtime column (blue/amber):*
- Event loop — microtask + event queue
- Events: Gesture (setState) · Stream (StreamBuilder) · Notifier (Provider)
- 3 trees rebuilt — Widget → Element → Render
- Impeller / Skia — paints directly to GPU
- Feedback loops: rebuild (right) · event loop return (left)

**Stats bar (6 metrics):**
| Build | Cold Start | Perf | Hot Reload | Code Share | Size |
|---|---|---|---|---|---|
| 30s | 400ms | 120fps | <1s ✨ | 70% | 20MB |

---

#### Tab 4: React Native (TypeScript)

**Animated SVG flowchart** — 3 columns (Build Time | Launch | Runtime):

*Build Time column (pink):*
- JS / TSX source (.tsx / .ts files)
- Metro bundler — bundles JS + assets
- Expo prebuild — generates APK / IPA

*Launch column (teal):*
- Native shell starts — iOS / Android host app
- Hermes JS engine — executes JS bundle
- JSI bridge — JS ↔ native modules

*Runtime column (blue/amber):*
- JS event loop — single-threaded runtime
- Events: Touch (useState) · Async (useEffect) · Store (Redux/Zustand)
- React reconciler — virtual DOM diffed
- Native views — UIView / Android View
- Feedback loops: re-render (right) · event loop return (left)

**Stats bar (6 metrics):**
| Build | Cold Start | Perf | Fast Refresh | Code Share | Size |
|---|---|---|---|---|---|
| 45s | 800ms | 60fps | <1s ✨ | 80% | 35MB |

---

#### Tab 5: KMP (Kotlin Multiplatform)

**Animated SVG flowchart** — 3 columns (Build Time | Launch | Runtime):

*Build Time column (blue):*
- Kotlin source (.kt + commonMain)
- kotlinc multiplatform — compiles per target
- Dual output — JVM bytecode + LLVM binary

*Launch column (teal):*
- Platform entry point — Android / iOS native
- Shared module init — commonMain loaded
- Platform UI starts — Compose MP / SwiftUI

*Runtime column (blue/amber):*
- Coroutine dispatcher — main + IO + default
- Events: Flow (StateFlow) · ViewModel (shared logic) · Expect/Actual
- Shared business logic — repos, usecases, models
- Native UI renders — 100% native components
- Feedback loops: recompose (right) · coroutine return (left)

**Stats bar (6 metrics):**
| Build | Cold Start | Perf | Code Share ✨ | Targets | Size |
|---|---|---|---|---|---|
| 40s | 500ms | 120fps | ~70% | iOS+Android | 22MB |

---

Also includes a second set of **interactive node diagrams** (clickable boxes with detail cards) for each platform showing compiler/runtime/tooling node layers with `DEVELOPER LAYER` / `TOOLCHAIN LAYER` / `DEVICE RUNTIME` backgrounds.

Each node has 4 detail fields: Input, Output, Internals, Gotcha.

---

### 4.7 System Architecture Section

**Section heading**: "Platform Architecture"
**Badge**: "Staff Engineer" (Shield icon)
**Subtitle**: "An interactive blueprint of a scalable, resilient mobile ecosystem. Hover over nodes for technical details, and use the filters to trace data flows."

**Interactive controls:**
- **Flow filters**: ALL · READ · WRITE · SYNC · CICD
- **Animation speed**: SLOW · NORMAL · FAST

**Architecture diagram: 7 horizontal layers** (each as a dashed-border band):

#### Layer 1: CI/CD Pipeline (purple, y=60)
| Node | Sub-label | Details |
|---|---|---|
| **GitHub** | Trunk-based dev | Trunk-based development with strict branch protection rules and automated PR checks. |
| **GitHub Actions** | 80% coverage | Automated CI pipelines running unit, UI, and E2E tests. Enforces an 80% code coverage gate. |
| **Quality Gates** | SonarQube+Snyk | Static code analysis and vulnerability scanning (SonarQube + Snyk + CodeQL) integrated directly into the PR workflow. |
| **Build & Release** | Fastlane+EAS | Automated app signing, semantic versioning, and deployment to App Store/Play Store using Fastlane and EAS. |
| **Infra as Code** | Terraform+ArgoCD | Declarative infrastructure provisioning (Terraform + Helm) and GitOps-based continuous delivery to EKS via ArgoCD. |

#### Layer 2: Client Layer (blue, y=180)
| Node | Sub-label | Details |
|---|---|---|
| **iOS** | SwiftUI+Combine | Native iOS app with SwiftUI, Combine for reactive flows, and SQLite for offline-first capabilities. |
| **Android** | Compose+Room | Modern Android app using Jetpack Compose for UI and Room database for robust local caching. |
| **Shared KMM** *(dashed)* | Ktor+Coroutines | Kotlin Multiplatform Mobile SDK sharing core business logic, networking (Ktor), and state across platforms. |
| **Web PWA** | React+Workbox | Progressive Web App with React, utilizing Workbox for service workers and IndexedDB for offline support. |

#### Layer 3: Edge / CDN Layer (cyan, y=300)
| Node | Sub-label | Details |
|---|---|---|
| **CloudFront+WAF** | DDoS, TLS | Global CDN caching static assets, terminating TLS, and WAF protecting against DDoS and SQLi. |
| **Feature Flags** | LaunchDarkly | Real-time feature toggling and A/B testing infrastructure at the edge. |
| **Push / WS** *(pulsing)* | APNs, FCM | Real-time bi-directional communication via WebSockets (Socket.io) and native push notifications (APNs, FCM). |

#### Layer 4: API Gateway & Auth (green, y=420)
| Node | Sub-label | Details |
|---|---|---|
| **Kong Gateway** | Rate limit, JWT | API Gateway handling rate limiting, JWT validation, circuit breaking, and certificate pinning enforcement. |
| **Auth Service** | OAuth2+PKCE | Centralized authentication handling OAuth2 flows, biometric login validation, refresh token rotation, and device fingerprint binding. |
| **GraphQL BFF** | Mobile-optimized | Backend-for-Frontend aggregating microservices. Mobile-optimized with field masking, query cost limits, persisted queries, and DataLoader for N+1 prevention. |

#### Layer 5: Microservices Layer (orange, y=540)
| Node | Sub-label | Details |
|---|---|---|
| **User Service** | Golang, gRPC | High-performance Go service managing user profiles and preferences via gRPC. |
| **Content Service** | Node.js, Cache | Node.js microservice serving personalized feeds with cursor pagination and Redis cache. |
| **Notification** | Python, Fan-out | Python service consuming Kafka events to fan-out millions of push notifications via APNs/FCM. |
| **Sync Engine** *(dashed, pulsing)* | Rust, CRDT | High-throughput Rust engine resolving offline data conflicts using CRDTs and Operational Transformation. |
| **ML Inference** | SageMaker+CoreML | PyTorch models deployed on SageMaker for real-time content ranking, with Core ML / TFLite on-device fallback. |

#### Layer 6: Data Layer (red/rose, y=660)
| Node | Sub-label | Details |
|---|---|---|
| **PostgreSQL** | Multi-AZ, RLS | Primary relational datastore configured for Multi-AZ high availability, PgBouncer pooling, and Row-Level Security. |
| **Redis Cluster** | Pub/Sub, Session | In-memory data grid (ElastiCache) for session store, caching, and pub/sub message broker. |
| **Kafka** *(pulsing)* | MSK, Outbox | Event streaming backbone using Amazon MSK, event log for offline sync, Transactional Outbox pattern, and Avro schema registry. |
| **S3 + CloudFront** | Media Storage | Media storage, image CDN, and adaptive video streaming infrastructure. |

#### Layer 7: Observability (slate, y=780)
| Node | Sub-label | Details |
|---|---|---|
| **Mobile Crash** | Sentry+Crashlytics | Sentry (crash reporting + release health) and Firebase Crashlytics (ANR + crash-free rate). |
| **Mobile Perf** | Datadog+Firebase | Datadog RUM (real user monitoring, session replay, mobile vitals) and Firebase Performance (app start time, HTTP traces, screen render). |
| **Server APM** | Datadog+Prometheus | Datadog APM (distributed traces, service map) and Prometheus + Grafana (infrastructure metrics, SLO dashboards). |
| **Incident Mgmt** | PagerDuty | PagerDuty for on-call escalation and incident management. |

**Animated connections** — dashed animated paths between all nodes, filtered by selected flow type.

---

### 4.8 Engineering Deep Dives Section

**Heading**: "Solving Hard Mobile Problems"
**Subtitle**: "Beyond high-level architecture, true engineering happens in the details. Explore interactive deep dives into offline sync, zero-trust auth, and startup performance."
**Label**: `Engineering Deep Dives`

Contains 3 fully interactive diagrams — each described in detail in [Section 5](#5-all-architecture--diagram-content).

---

### 4.9 Engineering Solutions (Work Section)

**Heading**: "Engineering Solutions"
**Filter buttons**: All · Performance · Networking · Algorithms · Security & UX
**Count badge** shown dynamically based on active filter

**10 projects** displayed in a 2-column grid of iPhone mockup cards. Each card has:
- iPhone-style device frame with Dynamic Island
- Interactive animated widget inside the mock
- Project number + category label
- Title
- "The Challenge" block (red dot)
- "The Solution" block (green dot)

Full project details in [Section 6](#6-all-projects-engineering-solutions).

---

### 4.10 Interactive Terminal

**Heading**: "Interactive Terminal"
**Terminal header**: macOS traffic light buttons + `guest@portfolio:~` label

**Available commands:**
| Command | Output |
|---|---|
| `whoami` | "A passionate software engineer focused on building scalable, high-performance applications." |
| `skills` | "Frontend: React, Vue, Tailwind\nBackend: Node.js, Python, Go\nDevOps: Docker, AWS, CI/CD" |
| `contact` | "Email: stackflutter@gmail.com\nGitHub: github.com/stackflutter" |
| `experience` | "Lead Mobile Engineer @ FinTech Unicorn (2023-Present)\nSenior iOS Developer @ HealthCare Startup (2020-2023)" |
| `clear` | Clears terminal history |
| *unknown* | "Command not found: X. Try 'whoami', 'skills', 'experience', or 'contact'." |

**Quick-click suggestion buttons** displayed below terminal for each command.

---

### 4.11 Thought Leadership Section

**Heading**: "Thought Leadership"
**Comment**: `// conference talks, articles, and notable architectural decisions`

**4 items** (2×2 grid on large screens, 4 columns on xlarge):

| Year | Type | Title | Event |
|---|---|---|---|
| 2024 | Conference Talk | **Navigating the KMP Migration Minefield** | Droidcon / iOS Conf (Play icon, cyan) |
| 2023 | Article | **Why We Chose Flutter for the Enterprise Rewrite** | External Engineering Blog (ExternalLink icon, green) |
| 2023 | Architecture Decision (ADR) | **ADR-014: Unified State Management across iOS & Android** | Internal Engineering Wiki (ShieldCheck icon, purple) |
| 2022 | RFC | **RFC-089: Modularizing the Monolith for 50+ Engineers** | Internal RFC Process (Layers icon, amber) |

---

### 4.12 Open Source Section

**Heading**: "Open Source Solutions"
**Comment**: `// architectural and real-world problem solutions built for the community`
**GitHub link**: github.com/kapilmhr (top-right on desktop, bottom on mobile)

**2 projects:**

#### Hatch
- **Language**: Dart
- **URL**: https://github.com/kapilmhr/hatch
- **Description**: A comprehensive developer tool aimed at improving mobile workflow and productivity. Resolves the architectural bottleneck of inconsistent local development environments across teams.

#### Easy Folder Picker
- **Language**: Dart
- **URL**: https://github.com/kapilmhr/Easy-Folder-Picker
- **Description**: A seamless and highly customizable folder picker utility. Solves the real-world problem of fragmented file system access and permissions across different mobile OS versions.

---

### 4.13 Contact Section & Footer

**Heading (large viewport typography)**: "Let's Build Together" (italic light + gradient on "Together")

**Body copy**: "Currently accepting new projects for Q3 2026. If you're building something ambitious, I'd love to hear about it."

**CTA button**: "Start a Conversation" → `mailto:stackflutter@gmail.com` (cyan, with glowing shadow)

**Footer bar:**
- `© 2026 Kapil` (left)
- GitHub link → github.com/kapilmhr
- LinkedIn link → linkedin.com/in/kapil-maharjan/
- `Designed in California` (right)

---

## 5. All Architecture & Diagram Content

### 5.1 Platform Architecture — 7-Layer System

*(See [Section 4.7](#47-system-architecture-section) for complete node details)*

**Connection map (data flows between nodes):**

| From | To | Flow Types |
|---|---|---|
| Build & Release | iOS, Android | cicd |
| Infra as Code | Kong Gateway, PostgreSQL | cicd |
| iOS, Android, Web PWA | CloudFront+WAF | read, write |
| iOS, Android | Push/WS | sync |
| KMM | Kong Gateway | read, write |
| KMM | Sync Engine | sync |
| CloudFront+WAF | Kong Gateway | read, write |
| CloudFront+WAF | S3+CloudFront | read |
| Feature Flags | Kong Gateway | read |
| Push/WS | Sync Engine | sync |
| Kong Gateway | Auth Service | read, write |
| Kong Gateway | GraphQL BFF | read, write |
| GraphQL BFF | User Service | write |
| GraphQL BFF | Content Service | read |
| GraphQL BFF | ML Inference | read |
| User Service | PostgreSQL | write |
| Content Service | Redis Cluster | read |
| Content Service | PostgreSQL | read |
| Sync Engine | Kafka | sync, write |
| Sync Engine | PostgreSQL | sync |
| ML Inference | Redis Cluster | read |
| Kafka | Notification | write, sync |
| Notification | Push/WS | sync |
| iOS | Mobile Crash (Sentry) | all |
| Android | Mobile Perf (Datadog) | all |
| Kong Gateway | Server APM | all |
| PostgreSQL | Server APM | all |
| Server APM | Incident Mgmt (PagerDuty) | all |

---

### 5.2 Platform Internals — Compilation Pipelines

*(See [Section 4.6](#46-how-it-works--platform-internals) for full animated diagram content)*

**Quick reference comparison:**

| Platform | Build Tool | Runtime | Renderer | Code Share |
|---|---|---|---|---|
| iOS (Swift) | swiftc + LLVM → ld | Obj-C/Swift Runtime + dyld | Core Animation → Metal → GPU | 0% |
| Android (Kotlin) | kotlinc + D8/R8 → Gradle | ART (AOT+JIT) + Zygote | HWUI/Skia → Canvas → GPU | 0% |
| Flutter (Dart) | dart compile AOT | Flutter C++ Engine + Dart VM | Impeller/Skia → GPU | 70% |
| React Native (TS) | Metro bundler | Hermes JS engine + JSI bridge | React reconciler → UIView/Android View | 80% |
| KMP (Kotlin) | kotlinc multiplatform (JVM + LLVM) | Native platform runtime | Native Compose MP / SwiftUI | ~70% |

---

### 5.3 Offline-First Sync & CRDT Diagram

**Tags**: Architecture · Offline-First · CRDT Resolution · Optimistic UI

**Interactive controls:**
- **Toggle**: Network Online / Offline button
- **Action**: "+ Simulate mutation" button
- **Live state**: Queued mutation count badge / Flushing badge

**Architecture overview:**
Two regions — MOBILE CLIENT (left) and CLOUD INFRASTRUCTURE (right):

**Mobile Client nodes:**
- **React Native UI** — Optimistic updates (flashes green on online write)
- **SQLite** — Room (Android) / FMDB / CoreData (iOS)
- **Mutation Queue** — Persisted to disk, queues when offline

**Cloud Infrastructure nodes:**
- **API Gateway** — Auth + rate limiting
- **Sync Engine** — CRDT merge logic + vector clocks (animated pulsing border)
- **PostgreSQL** — Source of truth + CRDT state columns

**Flow steps (numbered badges):**
1. **Optimistic UI Write** (amber) — UI updates instantly; mutations serialized with unique UUIDs; written simultaneously to local SQLite
2. **Local Cache (SQLite)** (blue) — Room/CoreData persistence; schema mirrors cloud DB; serves as primary read cache post-sync
3. **Mutation Flush → API Gateway** (green) — Flushes immediately when online; accumulates safely to disk when offline; gateway enforces auth, rate limits, payload validation
4. **CRDT Resolution → Sync Engine** (purple) — Applies CRDT merge logic; utilizes vector clocks for causality
5. **Write Resolved State → PostgreSQL** (purple) — Final resolved state written to source of truth
6. **Schema Mirror** (blue dashed) — Sync Engine replicates schema to SQLite via schema mirrors

**When offline**: Red X overlay on cloud region, blocked connection shown with ✗ icon, mutations accumulate in queue.

---

### 5.4 Zero-Trust Auth Sequence Diagram

**Title**: "Zero-Trust Auth Sequence (OAuth2 + PKCE)"
**Sub-label**: `// Secure biometric login with hardware-backed keystore and token rotation`
**Tags**: OAuth2 · PKCE · Biometric · Zero-Trust

**Interactive controls:**
- Play/Pause button
- Restart button
- Clickable step dots on progress bar

**Three actors (lifeline columns):**
1. **Mobile App** — iOS / Android
2. **Secure Enclave** — SEP (iOS) / StrongBox (Android)
3. **Auth Server** — OAuth2 + PKCE

**7 steps with animated particle flows:**

| Step | Colour | Title | Description |
|---|---|---|---|
| PRE | Purple | **PRE: PKCE Setup** | App generates a random `code_verifier` and derives the S256 `code_challenge`. Both stay on the device for now. |
| 1 | Blue | **Prompt Biometric** | App requests biometric authentication. The Secure Enclave (SEP/StrongBox) is activated. The private key never leaves the hardware. |
| 2 | Purple | **Return Signed Challenge** | The Secure Enclave signs the challenge using the hardware-bound private key and returns the assertion to the App. |
| 3 | Green | **PKCE + Signed Challenge** | App sends the PKCE challenge and the biometric signature directly to the Auth Server, bypassing the Enclave. |
| 4 | Pink | **Access JWT + Refresh Token** | Server validates the signature and PKCE, then returns a short-lived JWT (15 min TTL) and a rotating refresh token. |
| 5 | Amber | **Store in Keystore / Keychain** | Tokens are securely stored in the hardware-backed Keystore (Android) or Keychain (iOS), encrypted at rest. |
| 6 | Red | **Alt / Failure Paths** | If biometrics fail → abort. If JWT expires → silent refresh rotates tokens. If refresh token expires → full re-auth required. |

**PKCE (S256 Method) details:**
- `code_verifier` = random 43–128 char secret, generated and kept on device
- `code_challenge` = BASE64URL(SHA256(verifier)) sent to server initially
- Intercepted auth codes are useless without the original verifier

**Failure paths:**
- Biometric fail → Enclave rejects → abort, clear challenge
- JWT expiry → Silent refresh → server rotates both access and refresh tokens
- Refresh expiry → Full re-auth required, biometric re-prompt from step 1

---

### 5.5 App Startup Critical Path Diagram

**Title**: "App Startup Critical Path"
**Sub-label**: `// Optimizing Time-to-Interactive (TTI) by deferring non-critical tasks to background threads`
**Tags**: Performance · TTI Optimisation · Threading · Cold Start

**Interactive controls:**
- **Before / After toggle** — switches between unoptimised and optimised state
- **Draggable scrubber** — scrub through timeline at any millisecond, shows active tasks at cursor
- **TTI badge** — live display of TTI value with improvement percentage

**Measurement environment**: Release builds · Pixel 6 (Android 13) · iPhone 13 (iOS 16) · No debugger attached

**Timeline tasks (6 total):**

| Task | Colour | Platform | Before | After |
|---|---|---|---|---|
| OS Init | Red | dyld (iOS), ART (Android) | Main Thread, 0–80ms | Main Thread, 0–80ms |
| DI Setup | Amber | Dagger/Hilt (Android) | Main Thread, 80–160ms | Main Thread, 80–160ms |
| UI Render | Blue | Compose / SwiftUI | Main Thread, 160–300ms | Main Thread, 160–260ms |
| Local DB Hydration | Purple | Room / CoreData | **Main Thread, 300–430ms** | **Background, 80–220ms** |
| Prefetch API Data | Cyan | OkHttp / URLSession | **Main Thread, 430–570ms** | **Network thread, 160–360ms** |
| Analytics Init | Gray | Firebase SDK | **Main Thread, 570–650ms** | **Background, 290–430ms** |

**Before state**: All tasks sequential on Main Thread → **TTI: ~650ms**
**After state**: Parallelised across 3 threads → **TTI: ~290ms** → **55% improvement**

**FMP marker** (teal dashed line): First Meaningful Paint (when UI Render completes)
**TTI marker** (white dashed line): Time to Interactive (when all tasks complete)

**Critical path annotations:**
1. **Critical Path**: OS Init → DI Setup → UI Render is the blocking sequence. DI graph construction (Hilt/Dagger) is often the largest target — lazy injection can cut 30–60ms.
2. **What was deferred**: DB Hydration off main thread → saves ~140ms; Analytics Init pushed post-TTI → saves ~80ms; API Prefetch parallelised → 0ms critical path cost.
3. **Threading model**: Main Thread = UI work only (inflate, measure, draw); Background = Kotlin Coroutines (Dispatchers.IO) / GCD global queue; Network = OkHttp dispatcher / URLSession background configuration.

---

## 6. All Projects (Engineering Solutions)

All 10 projects are presented inside iPhone 280×580px mockups with animated interactive widgets.

---

### Project 01 — High-Performance Mapping
**Category**: Performance
**Widget**: `MapMarkersWidget` — 3 pulsing animated markers on a grayscale map background

**Challenge**: Rendering 10,000+ custom markers on a map caused severe frame drops, UI freezing, and excessive battery drain on older mobile devices.

**Solution**: Implemented a custom **QuadTree clustering algorithm in C++** and offloaded marker rendering directly to the GPU using **Metal and OpenGL**.

---

### Project 02 — Real-Time Sync & Notifications
**Category**: Networking
**Widget**: `PushNotifWidget` — animated push notification banners appearing sequentially (Payment Received, System Alert, New Message, Deployment)

**Challenge**: Push notifications were arriving out of order or getting lost entirely during poor cellular network conditions.

**Solution**: Built a robust local **SQLite queuing system** with optimistic UI updates and a background sync engine with conflict resolution.

---

### Project 03 — Dynamic Pathfinding Engine
**Category**: Algorithms
**Widget**: `MapRouteWidget` — animated SVG path drawing on map background with start/end markers

**Challenge**: Calculating complex, multi-stop delivery routes entirely on the client side was too slow and consumed excessive memory.

**Solution**: Developed a **hybrid routing architecture**. The server pre-calculates primary nodes, while the mobile client uses a lightweight **A* algorithm**.

---

### Project 04 — Resumable Download Manager
**Category**: Networking
**Widget**: `DownloadWidget` — 3 animated progress bars for `core_engine.dll`, `assets_bundle.zip`, `config_prod.json` with real-time percentage and speed display

**Challenge**: Downloading large 500MB+ asset bundles frequently failed on unstable 3G/4G connections, forcing users to restart.

**Solution**: Engineered a **chunked, resumable download manager** with dynamic bandwidth allocation and **MD5 hash integrity verification**.

---

### Project 05 — E2E Encrypted Chat
**Category**: Security & UX
**Widget**: `SecureChatWidget` — healthcare chat simulation with animated cyphertext scramble effect before message decryption

**Challenge**: Healthcare professionals needed to discuss patient data via chat, but standard messaging protocols didn't meet HIPAA compliance.

**Solution**: Implemented the **Signal Protocol** for true End-to-End Encryption (E2EE) using **Curve25519 and AES-256**. Messages are decrypted entirely on-device.

---

### Project 06 — Dynamic Premium Engine
**Category**: Algorithms
**Widget**: `InsuranceWidget` — animated insurance calculator with plan selector, sliders (Age, Term, Sum Assured), "Running DAG Rules..." loading state, and quote result screen

**Challenge**: The legacy insurance quoting engine required a full page reload and a 5-second server roundtrip for every parameter change.

**Solution**: Architected a local reactive rules engine using a **directed acyclic graph (DAG)** to instantly calculate premiums on-device.

---

### Project 07 — Real-Time Trading Engine
**Category**: Performance
**Widget**: `TradingWidget` — live BTC/USD price chart (polyline + gradient fill), live order book (bids/asks updating every 300ms)

**Challenge**: Rendering high-frequency financial data (candlestick charts, live order books) caused severe UI thread blocking and battery drain on mobile.

**Solution**: Implemented a custom **WebGL/Canvas rendering pipeline** for charts and utilized **WebSockets with binary payloads (Protobuf)** to minimize parsing overhead.

---

### Project 08 — Seamless Booking Flow
**Category**: Security & UX
**Widget**: `FlightWidget` — full animated 3-step flow: flight list → checkout (with credit card) → boarding pass with QR code (SFO → JFK, Gate B12, Seat 14A)

**Challenge**: The flight booking process was disjointed, requiring multiple full-page loads which led to a 40% drop-off rate during checkout.

**Solution**: Architected a **single-page animated transition flow** using shared element transitions and optimistic pre-fetching for instant perceived load times.

---

### Project 09 — High-Speed Profile Matching
**Category**: Algorithms
**Widget**: `DatingMatchWidget` — 3-phase animation: scrolling cards → matching (pulsing border) → MATCHED (heart icon, pink glow)

**Challenge**: Matching users in real-time based on complex multi-dimensional vectors (like color preferences) was slow and resulted in stale recommendations.

**Solution**: Engineered an **in-memory graph database** and a **WebSocket-driven matching engine** that processes millions of vectors to instantly pair users.

---

### Project 10 — Adaptive Video Streaming
**Category**: Networking
**Widget**: `StreamingWidget` — Netflix-style interface with hero image, Play/My List buttons, "Trending Now" thumbnail row

**Challenge**: Users on fluctuating 3G/4G networks experienced constant buffering and poor video quality during playback.

**Solution**: Implemented a custom **HLS (HTTP Live Streaming) player** with dynamic bitrate switching and edge-caching to ensure zero-buffering playback.

---

## 7. Statistics & Numbers Across the Site

### Primary Stats (Hero right column & Impact Metrics)
| Metric | Value | Context |
|---|---|---|
| Users served | **1M+** | Largest production app shipped across iOS & Android |
| Performance improvement | **55%** | TTI, crash rate, ANR & app size combined |
| Senior engineers mentored | **7** | iOS, Android & Flutter engineers |
| Production migrations led | **7+** | End-to-end platform rewrites |
| Years experience | **10+** | Production mobile engineering |
| GitHub repos | **50+** | Open source contributions |
| Engineers led | **15+** | Across cross-functional teams |
| Domains | **2** | Consumer + Enterprise |
| Company types | **3** | Scale-ups, enterprise, consulting |

### Startup Performance Numbers
| State | TTI | FMP |
|---|---|---|
| Before optimisation | ~650ms | ~300ms |
| After optimisation | ~290ms | ~260ms |
| Improvement | **55% reduction** | — |

### Specific task optimisation savings:
- Local DB Hydration moved off main thread: **saves ~140ms**
- Analytics Init pushed post-TTI: **saves ~80ms**
- API Prefetch parallelised: **0ms critical path cost**

### Platform Benchmark Stats (HowItWorksSection)
| Metric | iOS | Android | Flutter | React Native | KMP |
|---|---|---|---|---|---|
| Build time | 12s | 25s | 30s | 45s | 40s |
| Cold start | 300ms | 600ms | 400ms | 800ms | 500ms |
| Performance | 120fps | 120fps | 120fps | 60fps | 120fps |
| Hot reload | N/A | ~1s | <1s | <1s | N/A |
| Code share | 0% | 0% | 70% | 80% | ~70% |
| App size | 15MB | 25MB | 20MB | 35MB | 22MB |

---

## 8. Design System & Visual Identity

### Aesthetic
- **Theme**: Cinematic dark mode, engineering-focused
- **Background**: Near-black (`#080a0f`, `#0b0e14`, `#0f172a`)
- **Noise overlay**: Fixed SVG fractalNoise at 4% opacity for subtle film grain
- **Custom cursor glow**: Radial gradient following mouse at 6% white opacity
- **Grid overlay**: 52×52px faint grid lines in hero section

### Typography
| Role | Font | Weights |
|---|---|---|
| Display / Headings | Space Grotesk | 300, 400, 500, 600, 700 |
| Monospace / Code | JetBrains Mono | 400, 500, 700 |

### Colour Palette (hardcoded in components)
| Colour | Hex | Usage |
|---|---|---|
| Background primary | `#080a0f` | Hero background |
| Background secondary | `#0f172a` | Cards, panels |
| Background surface | `#161b27` | Stat cards, diagram backgrounds |
| Background tertiary | `#111827` | Engineering principle cards |
| Border | `#1e2a3a` | All card borders |
| Border hover | `#2d3f55` | Hover state borders |
| Text primary | `#f8fafc`, `#f1f5f9` | Headings |
| Text secondary | `#94a3b8` | Body text |
| Text muted | `#475569`, `#334155` | Meta labels |
| Accent blue | `#60a5fa` | Primary CTA, iOS platform, links |
| Accent green | `#4ade80` | Available badge, success states |
| Accent amber | `#fbbf24` | KMP, architecture, warnings |
| Accent purple | `#a78bfa` | CI/CD, migrations, lecture |
| Accent pink | `#f472b6` | Leadership, React Native |
| Accent cyan | `#54c5f8` | Flutter, terminal, contact |
| Accent cyan (nav) | `#22d3ee` | Hero badge, nav accent |
| Accent orange | `#f97316` | Swift, UIKit, user service |
| Accent red | `#f87171` | Failure paths, errors |

### CSS Custom Properties (`:root` in `index.html`)
```css
--bg: #080a0f
--bg2: #0b0e14
--border: rgba(255, 255, 255, 0.08)
--green: #4ade80
--mono: 'JetBrains Mono', monospace
--cyan: #22d3ee
--display: 'Space Grotesk', sans-serif
--text: #f8fafc
--surface: rgba(255, 255, 255, 0.02)
--text2: #94a3b8
--text3: #475569
--cyan-dim: rgba(34, 211, 238, 0.08)
```

### Tailwind v4 Theme (`src/index.css`)
```css
@theme {
  --font-sans: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}
```

### Custom Utility Classes
| Class | Purpose |
|---|---|
| `.noise-bg` | Full-screen SVG fractalNoise overlay (opacity 0.04) |
| `.glass-panel` | `rgba(255,255,255,0.02)` bg + `blur(16px)` backdrop |
| `.animate-marquee` | 40s infinite left-scroll |
| `.animate-marquee-reverse` | 40s infinite right-scroll |
| `.ep-principles-card` | Engineering Principles entrance animation (opacity + translateY) |
| `.ep-principles-card.visible` | Revealed state |

### Animation Library
**Framer Motion (`motion`)** used for:
- `motion.div`, `motion.path`, `motion.circle` — section entrance animations
- `whileInView` with `viewport: { once: true }` for scroll-triggered reveals
- `AnimatePresence` for filtered project grid transitions
- `AnimatePresence mode="wait"` for widget state transitions (Insurance, Flight, Dating)
- Animated SVG `strokeDashoffset` for dashed flowing lines in all platform diagrams
- Particle animations using `animateMotion` in SVG for auth and offline sync diagrams
- `useScroll` + `scrollYProgress` on the container ref (available for parallax, currently setup)

---

## 9. SEO & Metadata

### `index.html` head tags (current)
```html
<title>Kapil Maharjan — Staff Mobile Engineer | Portfolio</title>
<meta name="description" content="Staff Mobile Engineer with 10+ years shipping production apps across iOS, Android, Flutter, KMP, and React Native. Explore interactive architecture diagrams, engineering deep-dives, and real-world solutions." />
<meta name="author" content="Kapil Maharjan" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://kapil.info.np/" />
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/favicon.png" />
```

### Open Graph tags
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Kapil Maharjan — Staff Mobile Engineer" />
<meta property="og:description" content="10+ years shipping native iOS, Android, Flutter, KMP & React Native. Interactive architecture diagrams and engineering deep-dives." />
<meta property="og:url" content="https://kapil.info.np/" />
<meta property="og:image" content="https://kapil.info.np/og-image.png" />
```

### Twitter Card tags
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Kapil Maharjan — Staff Mobile Engineer" />
<meta name="twitter:description" content="10+ years shipping native iOS, Android, Flutter, KMP & React Native. Interactive architecture diagrams and engineering deep-dives." />
<meta name="twitter:image" content="https://kapil.info.np/og-image.png" />
```

### JSON-LD Structured Data (Person schema)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kapil Maharjan",
  "jobTitle": "Staff Mobile Engineer",
  "description": "Staff Mobile Engineer with 10+ years building production mobile apps across iOS, Android, Flutter, KMP, and React Native.",
  "url": "https://kapil.info.np",
  "sameAs": [
    "https://github.com/kapilmhr",
    "https://www.linkedin.com/in/kapil-maharjan/"
  ],
  "knowsAbout": ["iOS", "Android", "Swift", "Kotlin", "Flutter", "KMP", "React Native", "SwiftUI", "Jetpack Compose"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sydney",
    "addressCountry": "AU"
  }
}
```

### Static files in `/public/`
- `robots.txt` — allows all crawlers, references sitemap
- `sitemap.xml` — single entry for `https://kapil.info.np/`
- `favicon.png` — site favicon

---

## 10. Dependencies & Tooling

### Runtime Dependencies
| Package | Version | Used For |
|---|---|---|
| `react` | ^19.0.0 | UI framework |
| `react-dom` | ^19.0.0 | DOM rendering |
| `motion` | ^12.23.24 | All animations (Framer Motion) |
| `lucide-react` | ^0.546.0 | UI icons (36 icons used) |
| `simple-icons` | ^16.12.0 | Brand logos (7 used: Apple, Android, Swift, Kotlin, React, Flutter, Bluetooth) |
| `@tailwindcss/vite` | ^4.1.14 | Tailwind CSS v4 Vite integration |
| `vite` | ^6.2.0 | Build tool + dev server |

### Dev Dependencies
| Package | Version | Used For |
|---|---|---|
| `typescript` | ~5.8.2 | Type checking |
| `@vitejs/plugin-react` | ^5.0.4 | React Fast Refresh |
| `tailwindcss` | ^4.1.14 | CSS framework |
| `autoprefixer` | ^10.4.21 | CSS vendor prefixes |
| `@types/node` | ^22.14.0 | Node.js type definitions |
| `tsx` | ^4.21.0 | TypeScript execution for scripts |

### Vite Config (`vite.config.ts`)
- Plugins: `@vitejs/plugin-react` + `@tailwindcss/vite`
- Dev server: port 3000, host 0.0.0.0
- TypeScript target: ES2022, JSX react-jsx, bundler module resolution

### External CDNs Used at Runtime
| CDN | Content |
|---|---|
| `fonts.googleapis.com` | Space Grotesk + JetBrains Mono fonts |
| `cdn.jsdelivr.net/gh/devicons/devicon@latest` | 27 tech logos in TechMarquee |
| `images.unsplash.com` | Map background image (MapMarkersWidget, MapRouteWidget) |
| `picsum.photos` | Video thumbnails (StreamingWidget) |

---

## 11. File Structure

```
mobile-engineer-portfolio/
├── index.html                    # Vite entry — nav, inline CSS (~563 lines), SEO meta
├── metadata.json                 # AI Studio project metadata
├── package.json                  # Dependencies & scripts
├── package-lock.json             # Lockfile
├── tsconfig.json                 # TypeScript config (ES2022, JSX react-jsx)
├── vite.config.ts                # Vite + React + Tailwind plugins
├── README.md                     # Project readme
├── public/
│   ├── robots.txt                # SEO: allow all crawlers
│   └── sitemap.xml               # SEO: single SPA URL
├── src/
│   ├── main.tsx                  # React entry point
│   ├── App.tsx                   # All sections + widgets (~3,630 lines, ~180KB)
│   ├── HowItWorksSection.tsx     # Platform internals diagrams (~1,751 lines, ~87KB)
│   └── index.css                 # Tailwind v4 @theme + global styles (~100 lines)
└── docs/
    ├── improvements.md           # Prioritised improvement roadmap
    ├── technical-documentation.md # Deep technical reference doc
    └── overview.md               # This file
```

### Component Inventory (all in `src/App.tsx` unless noted)

| Component | Type | Description |
|---|---|---|
| `App` (default export) | Root | Mouse glow cursor, noise overlay, renders all sections |
| `SimpleIcon` | Shared | SVG wrapper for simple-icons data |
| `HeroSection` | Section | Avatar, stats, tech pills, CTAs |
| `AboutSection` | Section | Bio card, stats, focus areas |
| `TechMarquee` | Section | 3 infinite-scroll rows of 27 tech logos |
| `ImpactMetricsSection` | Section | Animated counters + migration table |
| `EngineeringPrinciplesSection` | Section | 6 CSS-reveal principle cards |
| `HowItWorksSection` | Section | 5-tab platform internals (in `HowItWorksSection.tsx`) |
| `SystemArchitectureSection` | Section | 7-layer interactive SVG architecture |
| `EngineeringDeepDivesSection` | Section | Container for 3 deep dives |
| `OfflineSyncDiagram` | Widget | Interactive offline sync + CRDT |
| `AuthSequenceDiagram` | Widget | Animated OAuth2 + PKCE sequence |
| `StartupPerformanceDiagram` | Widget | Interactive startup timeline |
| `WorkSection` | Section | Filterable 10-project grid |
| `MobileMockup` | Shared | iPhone device frame |
| `MockMapBackground` | Widget | Unsplash map image background |
| `MapMarkersWidget` | Widget | Pulsing GPS marker demo |
| `MockMarker` | Shared | Single animated map marker |
| `MapRouteWidget` | Widget | A* pathfinding route animation |
| `PushNotifWidget` | Widget | Push notification banner stream |
| `DownloadWidget` | Widget | Download progress bars |
| `SecureChatWidget` | Widget | E2EE chat with cyphertext animation |
| `EncryptedText` | Widget | Random char scramble effect |
| `InsuranceWidget` | Widget | DAG-based premium calculator |
| `Slider` | Shared | Range input slider |
| `TradingWidget` | Widget | Live BTC/USD chart + order book |
| `FlightWidget` | Widget | 3-step booking → boarding pass |
| `DatingMatchWidget` | Widget | Multi-vector profile matching |
| `ProfileCard` | Widget | Dating profile card |
| `StreamingWidget` | Widget | HLS adaptive streaming UI |
| `InteractiveTerminal` | Section | Terminal emulator with 4 commands |
| `ThoughtLeadershipSection` | Section | 4 talks/articles/ADRs/RFCs |
| `OpenSourceSection` | Section | 2 GitHub repos |
| `StackSection` | Section | Technical skills grid *(defined but not rendered)* |
| `ContactSection` | Section | CTA + social links + footer |
| `IOSWidget` | Widget | iOS compilation pipeline SVG (in `HowItWorksSection.tsx`) |
| `AndroidWidget` | Widget | Android pipeline SVG (in `HowItWorksSection.tsx`) |
| `FlutterWidget` | Widget | Flutter pipeline SVG (in `HowItWorksSection.tsx`) |
| `ReactNativeWidget` | Widget | React Native pipeline SVG (in `HowItWorksSection.tsx`) |
| `KMPWidget` | Widget | KMP pipeline SVG (in `HowItWorksSection.tsx`) |
| `HowItWorksSection` (export) | Section | Tab controller + interactive node diagrams (in `HowItWorksSection.tsx`) |

---

*This document reflects the complete content of the portfolio as of 2 May 2026.*
