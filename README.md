# 🌱 Planto — Plant E-Commerce Website

A pixel-faithful React + Vite implementation of the **Planto** Figma design.
Dark-green botanical aesthetic with a fully responsive layout (Desktop & Mobile).

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
planto/
├── index.html                  # HTML shell + Google Fonts
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root component (assembles all sections)
    ├── index.css               # Tailwind directives + custom CSS utilities
    └── components/
        ├── shared.jsx          # Icons, StarRating, DotIndicator, image URLs
        ├── Navbar.jsx          # Sticky nav with mobile drawer
        ├── Hero.jsx            # Hero section with floating cards
        ├── TrendyPlants.jsx    # Two horizontal product cards
        ├── TopSelling.jsx      # 3×2 product card grid
        ├── CustomerReview.jsx  # Three review cards
        ├── BestO2.jsx          # Feature slider section
        └── Footer.jsx          # Footer with newsletter
```

---

## 🎨 Design System

| Token        | Value                  |
|-------------|------------------------|
| Background  | `#1a2d1a`              |
| Dark BG     | `#0d1d0d`              |
| Card BG     | `rgba(22,42,22,0.85)`  |
| Accent      | `#7cb87c`              |
| Muted text  | `#8aaa8a`              |
| Font Display| Playfair Display       |
| Font Body   | DM Sans                |

---

## 🖼️ Replacing Images

All image URLs are centralised in `src/components/shared.jsx` inside the `IMAGES` object.
Replace the Unsplash URLs with your own product images:

```js
export const IMAGES = {
  heroBg:  'YOUR_HERO_BG_URL',
  heroCard: 'YOUR_HERO_CARD_URL',
  trendy1: 'YOUR_TRENDY_1_URL',
  // ...
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Behaviour                                      |
|-----------|------------------------------------------------|
| `< 768px` | Single-column layouts, mobile nav drawer       |
| `≥ 768px` | Desktop nav, two-column hero, multi-col grids  |

---

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite 4** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling
- **Google Fonts** — Playfair Display + DM Sans

---

## 📦 Sections Implemented

- [x] Sticky Navbar (with mobile hamburger drawer)
- [x] Hero — "Breath Natural" with floating product & review cards
- [x] Our Trendy Plants — horizontal cards with image overlays
- [x] Our Top Selling — responsive 3×2 product grid with hover effects
- [x] Customer Review — three review cards with star ratings
- [x] Our Best O2 — slideshow feature section with prev/next controls
- [x] Footer — quick links, social icons, email newsletter subscription
