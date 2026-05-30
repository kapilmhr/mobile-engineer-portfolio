# Staff Mobile Engineer Portfolio

A cinematic, dark-mode portfolio built with **React 19**, **Vite 6**, **TypeScript**, and **Tailwind CSS v4**. Features interactive architecture diagrams, animated engineering deep-dives, and a terminal emulator.

## ✨ Features

- **Interactive Platform Architecture** — SVG-based system diagram with hover tooltips, animated data flows, and flow-type filters
- **Engineering Deep Dives** — Offline-first sync (CRDT), zero-trust auth (OAuth2+PKCE), and cold-start performance diagrams
- **"How It Works" Section** — Tabbed build/launch/runtime pipeline diagrams for iOS, Android, Flutter, React Native, and KMP
- **10 Mobile Solution Showcases** — Each with an animated mobile mockup: trading engine, encrypted chat, booking flow, adaptive streaming, and more
- **Engineering Principles** — 6 opinionated principle cards with CSS reveal animations
- **Tech Stack Marquee** — Infinite-scrolling logo carousel (27 tech icons via DevIcons CDN)
- **Interactive Terminal** — Functional command-line emulator with predefined commands
- **Smooth Scroll Navigation** — Fixed nav with active-section highlighting via IntersectionObserver
- **Framer Motion Animations** — Page-load, scroll-triggered, and interaction-based animations throughout

## 🛠 Tech Stack

| Category | Technology |
| -------- | ---------- |
| Framework | React 19 + Vite 6 + TypeScript 5.8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | Framer Motion v12 (`motion`) |
| Icons | `lucide-react` + `simple-icons` |
| Fonts | Space Grotesk (display) + JetBrains Mono (mono) via Google Fonts |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── index.html              # Entry point with nav + inline critical CSS
├── src/
│   ├── main.tsx            # React mount point
│   ├── App.tsx             # All sections and components
│   ├── HowItWorksSection.tsx  # Platform pipeline diagrams
│   └── index.css           # Tailwind v4 theme + global styles
├── docs/
│   ├── technical-documentation.md
│   └── improvements.md
├── vite.config.ts          # Vite + Tailwind plugin config
└── tsconfig.json           # TypeScript config
```

## 📝 License

MIT © [Kapil Maharjan](https://github.com/kapilmhr)
