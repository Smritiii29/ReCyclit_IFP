# RecycLit — Version 1 (Frontend Prototype)

Smart waste segregation system — frontend interactive prototype.
"Understand Your Waste. Sort It Better."

## Status

This is the **project scaffold**: folder structure, design tokens, routing,
and the global Navbar/Footer are in place. Each page listed below is a
placeholder and will be built out step by step.

- [x] File structure, Vite config, design tokens
- [x] Navbar + Footer
- [ ] Home page (hero, how-it-works, analyze preview, categories, impact)
- [ ] Analyze page (upload/camera interface)
- [ ] Result page (mock classification)
- [ ] Sorting page (animated sequence)
- [ ] Learn page (educational content)
- [ ] History page (future-ready placeholder)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Project structure

```
RecycLit/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/       # Navbar, Footer, and future reusable components
│   ├── pages/             # Home, Analyze, Result, Sorting, Learn, History
│   ├── data/
│   │   └── wasteCategories.js
│   ├── App.jsx             # Routes
│   ├── main.jsx            # Entry point
│   └── index.css           # Design tokens + global styles
├── package.json
└── vite.config.js
```

## Design system

All colors, spacing, and type live as CSS custom properties in
`src/index.css`, built around Jade Turquoise (Pantone 18-5633 TPX):

- `--color-jade` — primary brand/accent
- `--color-charcoal` — headings, nav text
- `--color-background` — warm off-white page background
- `--color-sand` — secondary/educational sections
- `--color-coral` — sparing warning/attention accent
- `--color-blue` — secondary tech/info accent

Fonts: **Space Grotesk** (display/headings) + **Inter** (body), loaded via
Google Fonts in `index.html`.

## Architecture note

The frontend is intentionally decoupled from AI/backend logic. For now,
mock data stands in for real predictions:

```
Frontend → Mock classification data
```

Later:

```
Frontend → Backend API → AI model → Prediction → Frontend
```

See the project brief for the full Version 1–6 roadmap (backend + history,
real YOLOv8 integration, sensor fusion, physical smart-bin integration).
