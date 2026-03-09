# Dhiren Vazirani — Portfolio

A modern, recruiter-impressive portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Dark fintech aesthetic with animated sections, typewriter hero, timeline experience, and glassmorphism project cards.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)

## Features

- **Dark terminal-meets-fintech aesthetic** — deep charcoal, electric cyan accents, animated grid background
- **Typewriter hero** with animated tagline and status badge
- **Timeline experience section** with glowing dot indicators
- **Project cards** with hover glow effects and tech stack tags
- **Categorized skills grid** with interactive hover states
- **Smooth scroll-reveal animations** via Framer Motion + Intersection Observer
- **Fully responsive** — mobile hamburger nav, adaptive grid layouts
- **SEO optimized** — Open Graph, Twitter cards, semantic HTML
- **Vercel-ready** — zero config deployment

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Language | TypeScript 5.7 |
| Deployment | Vercel |

## Quick Start

```bash
# Clone
git clone https://github.com/DhirenV01/portfolio.git
cd portfolio

# Install
npm install

# Dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Click **Deploy** — no configuration needed

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles + Tailwind + custom utilities
│   ├── layout.tsx         # Root layout with metadata/SEO
│   └── page.tsx           # Main page composing all sections
├── components/
│   ├── AnimatedSection.tsx # Scroll-reveal animation wrapper
│   ├── GridBackground.tsx  # Ambient grid + glow orbs
│   ├── Navbar.tsx         # Fixed nav with active section tracking
│   ├── Hero.tsx           # Hero with typewriter effect
│   ├── Experience.tsx     # Timeline experience cards
│   ├── Projects.tsx       # Project showcase grid
│   ├── Skills.tsx         # Categorized skill badges
│   ├── Contact.tsx        # CTA contact section
│   └── Footer.tsx         # Footer with education/cert
├── lib/
│   └── data.ts            # All content/data in one place
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Customization

All content lives in `lib/data.ts` — edit your info, experience, projects, and skills there. The design tokens (colors, fonts) are in `tailwind.config.ts` and `app/globals.css`.

## License

MIT
