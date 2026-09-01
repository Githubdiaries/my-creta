# Creta Car — Built for the Next Drive

A premium, editorial-style automotive landing page for **Creta Car**, inspired by high-end, motion-led automotive case studies (Mercedes-AMG launch sites were the visual benchmark). Built as a single-page cinematic scroll experience rather than a conventional marketing page.

**Live site:** [my-creta.onrender.com](https://my-creta.onrender.com/)

---

## Overview

The site is a one-page React application (`client/src/pages/Home.tsx`) structured like chapters in a launch film: a full-bleed hero, a dark statement section, a detail/spec breakdown, an interactive instrument panel, and a closing "escape" section with a color picker. Navigation is handled via smooth in-page scrolling rather than routing.

## Design Direction — "Dark Editorial Performance"

The visual language (documented in [`ideas.md`](./ideas.md)) blends contemporary automotive art direction with Swiss International Typographic Style and motion-design title cards:

- **Color:** graphite-black and smoked silver surfaces, with **Signal Lime (`#C8F24A`)** reserved for interaction states, data points, and route markers — used like an instrument light, not decoration.
- **Layout:** a vertical, asymmetric narrative — one dominant idea per section/"frame," offset columns instead of centered marketing blocks, oversized ghost numerals behind stat blocks.
- **Typography:** Space Grotesk (display), Manrope (body copy), IBM Plex Mono (uppercase micro-labels/technical annotations).
- **Motion:** short 180–280ms ease-out transitions, staggered section reveals (translate + opacity only), a slow hero image scale drift, and full respect for `prefers-reduced-motion`.
- **Voice:** short, active, slightly provocative headlines ("Make the everyday feel engineered," "Take the long way home").

## Features

- Full-bleed animated hero with scroll-to-explore affordance
- Sticky top bar that reacts to scroll position, plus a slide-out chapter navigation panel
- Chaptered sections (`Home`, `The Machine`, `In the Detail`, `Instrument Panel`, `Go Further`) with in-page smooth scrolling
- Expandable "spec sheet" panel with headline performance stats
- Interactive color-swatch picker for the vehicle's signal color
- Fully responsive across desktop, short-landscape, and mobile breakpoints
- Accessible focus states and reduced-motion support throughout

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI primitives | Radix UI, shadcn-style components (`client/src/components/ui`) |
| Icons | lucide-react |
| Animation | Framer Motion |
| Routing | wouter |
| Server (static hosting) | Express (serves the built SPA in production) |
| Package manager | pnpm |

## Project Structure

```
my-creta/
├── client/
│   ├── index.html
│   ├── public/               # static assets
│   └── src/
│       ├── App.tsx           # app entry / theme + router wiring
│       ├── main.tsx
│       ├── index.css         # Tailwind + design tokens
│       ├── const.ts
│       ├── pages/
│       │   ├── Home.tsx      # the landing page experience
│       │   └── NotFound.tsx
│       ├── components/
│       │   ├── ui/           # Radix-based UI primitives
│       │   ├── ErrorBoundary.tsx
│       │   ├── ManusDialog.tsx
│       │   └── Map.tsx
│       ├── contexts/
│       │   └── ThemeContext.tsx
│       ├── hooks/
│       └── lib/
├── server/
│   └── index.ts              # Express static server for production
├── shared/
│   └── const.ts               # values shared between client and server
├── patches/                   # pnpm patch for `wouter`
├── ideas.md                   # design direction & brand documentation
├── todo.md                    # working notes / task log
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- [pnpm](https://pnpm.io/) (the project uses pnpm-managed dependencies and a patched package)

### Installation

```bash
git clone https://github.com/Githubdiaries/my-creta.git
cd my-creta
pnpm install
```

### Development

Runs the Vite dev server with hot module reload:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

### Build

Builds the client (via Vite) and bundles the Express server for production:

```bash
pnpm build
```

### Run in production

Serves the built app with the bundled Express server:

```bash
pnpm start
```

### Other scripts

| Script | Description |
|---|---|
| `pnpm preview` | Preview the production build locally |
| `pnpm check` | Type-check the project with `tsc --noEmit` |
| `pnpm format` | Format the codebase with Prettier |

## Deployment

The live demo is deployed on [Render](https://render.com/) at [my-creta.onrender.com](https://my-creta.onrender.com/), running `pnpm build` followed by `pnpm start`.

## License

MIT

## Credits

Built with [Manus](https://manus.im/).
