# Step 8 — Image Optimization (manual, do-it-yourself)

You're handling images manually. Here's exactly what to do, file by file. Goal: cut ~2 MB of weight for faster LCP and reliable social previews. **The code side is already done** (hero `<img>` now has `width/height/loading/decoding` + a keyword alt).

> Tools: you have macOS `sips` (built in). For best compression use **[Squoosh](https://squoosh.app)** (free, in-browser, nothing to install). `cwebp`/`pngquant` are NOT installed.

---

## 1. `public/kapil_avatar.png` — 2440×2309, ~744 KB → target ≤120 KB
It renders at only ~300px wide, so 2440px is ~8× too big.

**Easiest (terminal, in place):**
```bash
cd /Users/kapil/server/mobile-engineer-portfolio
sips -Z 600 public/kapil_avatar.png --out public/kapil_avatar.png
```
`-Z 600` caps the longest side at 600px (2× the 300px display = crisp on retina).

**Better compression (Squoosh):**
1. Open https://squoosh.app → drag `kapil_avatar.png`.
2. Right panel: **Resize** → width `600`.
3. Encoder: **OxiPNG**, tick **Reduce palette** (~256 colours) — keeps transparency, shrinks a lot.
4. Download → replace `public/kapil_avatar.png`.

✅ Verify: `ls -lh public/kapil_avatar.png` → well under 150 KB.

---

## 2. `public/og-image.png` — 1200×630, ~667 KB → target ≤300 KB
Keep the 1200×630 dimensions (correct for social cards). Just shrink the bytes.

**Squoosh, keep PNG (no code change):**
1. https://squoosh.app → drag `og-image.png` (do **not** resize — keep 1200×630).
2. Encoder: **OxiPNG** + **Reduce palette**. If it won't drop under ~300 KB and the image is photographic, use **Browser PNG** then palette-reduce, or use the JPEG option below.
3. Download → replace `public/og-image.png`.

**Or JPEG (smaller, needs a 1-line meta change):**
1. Squoosh → **MozJPEG**, quality ~78 → download as `og-image.jpg`.
2. Put `og-image.jpg` in `public/`, delete `og-image.png`.
3. Tell me — I'll update the 2 references in `index.html` (`og:image` + `twitter:image`) from `.png` to `.jpg`. (Don't forget this or the preview breaks.)

✅ Verify: `ls -lh public/og-image.*` → ≤300 KB. Test the card at https://www.opengraph.xyz/ after deploy.

---

## 3. `public/favicon.svg` — 313 KB (a 1024px raster embedded in an SVG)
This loads on every page visit — way too heavy for a favicon. Pick ONE:

**Option A — regenerate properly (recommended):**
1. Go to https://realfavicongenerator.net (you already used it — see the file's metadata).
2. Upload a clean square logo → download the package → replace the favicon files in `public/`.
A real favicon SVG should be < 5 KB.

**Option B — just drop the heavy SVG (fastest, 30 sec):**
You already ship `favicon.ico` (48×48) and `favicon-96x96.png`, which cover all browsers. Remove the SVG reference so the 313 KB file never loads. Tell me and I'll delete this line from `index.html`:
```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
```
(and you can delete `public/favicon.svg`).

✅ Verify: the heavy SVG is gone or < 5 KB.

---

## After you replace the files
```bash
npm run build:ssg          # rebuild (also re-runs the prerender)
ls -lh dist/og-image* dist/kapil_avatar*   # confirm the small versions copied through
```
That's it — Step 8 complete. Total expected saving: ~1.5–1.8 MB.

> Optional WebP: if you later install tools (`brew install webp`), you can serve `kapil_avatar.webp`; I'd then update the `<img src>` in `src/HeroSection.tsx`. Not required to hit 90+.
