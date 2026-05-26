# Wes — Portfolio Site

Minimal portfolio built with Vite + React + Tailwind + Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy to Vercel (easiest)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import → select the repo
3. It auto-detects Vite — just click Deploy
4. Done. You get a `.vercel.app` URL instantly

## Deploy to GitHub Pages (free)

```bash
# Install the deploy plugin
npm install -D vite-plugin-gh-pages

# Build and deploy
npm run build
npx gh-pages -d dist
```

## Project structure

```
src/
├── App.tsx                    # Main layout — assembles all sections
├── main.tsx                   # React entry point
├── index.css                  # Theme variables + Tailwind
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Sticky nav, scroll spy, dark mode toggle
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx           # Hero with code block + CTAs
│   │   ├── About.tsx          # Bio + stat counters
│   │   ├── Experience.tsx     # Work timeline
│   │   ├── Projects.tsx       # Featured project cards
│   │   ├── Skills.tsx         # Tech stack grid
│   │   └── Contact.tsx        # CTA + links
│   └── ui/
│       ├── FadeIn.tsx         # Scroll-triggered fade animation
│       ├── ProjectCard.tsx    # Expandable project card
│       ├── SectionHeading.tsx # Reusable section label
│       └── TechBadge.tsx      # Tech stack pill
├── data/
│   ├── projects.ts            # ← Edit your projects here
│   ├── experience.ts          # ← Edit your work history here
│   └── skills.ts              # ← Edit your skills here
└── hooks/
    ├── useDarkMode.ts         # System pref + toggle
    ├── useInView.ts           # Intersection observer
    └── useScrollSpy.ts        # Active nav detection
```

## Customizing

All your content lives in `src/data/`. Update projects, experience, and
skills there — the components pull from those files automatically.

For links (GitHub, LinkedIn, email, resume), search for `href="#"` across
the components and replace with your actual URLs.
