# Portfolio Redesign PRD: dhirenvazirani.com

## Overview
Redesign the existing Next.js + Tailwind portfolio from a dark/cyan "vibe coded" template into a clean, businessy, modern developer portfolio that signals: practical engineer who ships production systems.

## Current State
- **Stack**: Next.js (App Router), Tailwind CSS, deployed on Vercel
- **Structure**: Home (hero), Experience (timeline), Projects (cards), Skills, Contact
- **Problem**: Generic dark hacker aesthetic, too much dead space, reads as template not professional

## Design Direction

### Aesthetic: "Clean Technical" (light-dominant, editorial feel)
- **Theme**: Light background with a dark accent palette. Think: Stripe docs meets a well-designed SaaS landing page. NOT another dark mode dev portfolio.
- **Typography**: Use a distinctive pair. Suggestion: a geometric sans-serif display font (e.g., Sora, Outfit, or Satoshi from Google Fonts/Fontshare) for headings, clean readable sans (e.g., DM Sans, Plus Jakarta Sans) for body. Absolutely no Inter, Roboto, or system fonts.
- **Color palette**: Off-white/warm gray background (#FAFAF9 or similar), near-black text (#1A1A1A), one strong accent color (deep blue #2563EB or emerald #059669, pick one), subtle gray borders and cards.
- **Spacing**: Generous but purposeful whitespace. Content-dense sections should breathe but not float.
- **Motion**: Subtle entrance animations on scroll (staggered fade-up), smooth hover states on cards. No flashy particle effects or grid backgrounds.

### What Makes It Memorable
An embedded AI chatbot (Phase 2, add placeholder button for now) that lets recruiters ask questions about Dhiren's experience. "Try AI Assistant" button in hero, chatbot drawer/modal. For Phase 1, this is just a styled button that says "Ask my AI" with a tooltip "Coming soon."

## Page Structure (Single Page, Smooth Scroll)

### 1. Navigation (sticky)
- Left: "DV" wordmark or "Dhiren Vazirani" in display font
- Right: Home, Experience, Projects, Skills, Contact
- Clean border-bottom on scroll, subtle backdrop blur
- Mobile: hamburger menu

### 2. Hero Section
- Left-aligned layout (NOT centered like current)
- Small "Open to Opportunities" pill badge with green dot (like Tarun's site)
- Large name: "Dhiren Vazirani"
- Subtitle tags: `Data Engineering · AI Systems · Cloud Infrastructure`
- 2-sentence tagline: "I build production AI and data systems in financial services. From RAG platforms to serverless pipelines, I ship software that turns complex data into real products."
- Row of CTA buttons: [GitHub] [LinkedIn] [Resume] [Ask my AI (coming soon)]
- Optional: Professional headshot or abstract geometric element on right side

### 3. Experience Section
- Section label: "Experience" (simple, no "02 // EXPERIENCE" numbering)
- Keep the timeline layout BUT modernize it:
  - Cards with clean white backgrounds, subtle border, light shadow on hover
  - Company name as a subtle accent-colored label
  - Role title bold, dates right-aligned in muted text
  - 2-3 bullet points per role with concrete metrics (not paragraph blocks)
  - Tech tags as small pills below each entry
- Roles to display:
  - Data Engineer, MetroStar Systems (Jan 2025 - Oct 2025)
  - Data Analyst / Engineer, PNC Bank (Mar 2024 - Jul 2024)
  - Data Scientist / Engineer, BNY Mellon (Aug 2023 - Feb 2024)
  - Data Analyst Intern, Comcast (May 2022 - Aug 2022)

### 4. Projects Section (Bento Grid Layout)
Replace the current flat card grid with a bento-style grid:
- **Featured project (large card, spans 2 columns)**: Earnings Call Intelligence Agent
  - "Flagship" badge
  - Description, tech stack pills, [Live Demo] [Source] links
  - Maybe a small architecture diagram or terminal screenshot as visual
- **Secondary cards (1 column each)**:
  - MIRA: AI Talent Acquisition Platform
  - SQL Adversarial Testing Agent (NEW, add this)
  - GitHub Tech Trends Pipeline
- Each card: title, 2-line description, tech pills, links
- Cards should have hover lift effect with subtle shadow

### 5. Skills / Tech Stack Section
Replace the current layout with a grouped grid:
- **Categories**: Languages, Cloud & Infrastructure, Data & ML, Frameworks & Tools
- Display as icon + label pairs in a clean grid (not just text pills)
- Key technologies to highlight:
  - Languages: Python, SQL, Java, TypeScript
  - Cloud: AWS (Lambda, S3, Glue, Athena, API Gateway), Azure (Databricks, Data Factory, Cognitive Search, OpenAI)
  - Data: Microsoft Fabric, PySpark, Pandas, Delta Lake, DuckDB, Pinecone
  - Frameworks: FastAPI, React, Next.js, Docker, Terraform
  - AI/ML: GPT-4, RAG, LangChain, Vector Embeddings

### 6. Education & Certifications (NEW section, brief)
- B.S. Computer Science, Rutgers University
- Microsoft Certified: Fabric Data Engineer Associate
- Display as a clean 2-column row, no cards needed

### 7. Contact / Footer
- Simple CTA: "Let's connect" with email, LinkedIn, GitHub icon links
- Clean footer with copyright

## Technical Requirements

### Must Have (Phase 1)
- Responsive: mobile-first, looks great on all breakpoints
- Light theme as default (optional dark mode toggle for later)
- Smooth scroll navigation
- Scroll-triggered fade-in animations (use Framer Motion or CSS intersection observer)
- SEO: proper meta tags, Open Graph tags for link previews
- Fast: no unnecessary dependencies, optimize images
- Accessible: proper heading hierarchy, alt text, keyboard navigation

### Nice to Have (Phase 2)
- AI chatbot integration (OpenAI or Anthropic API + Vercel AI SDK)
- Dark mode toggle
- Blog section
- View count or analytics badge on projects

## Content Notes
- No em dashes anywhere on the site (use commas, colons, or rewrite)
- Keep all copy concise and metric-driven
- Tone: confident, practical, not boastful. "I build X that does Y" not "I'm passionate about leveraging synergies"

## File Structure Guidance
Work within the existing Next.js App Router structure:
```
app/
  layout.tsx        (global layout, fonts, metadata)
  page.tsx          (main single-page content)
  globals.css       (Tailwind + custom styles)
components/
  Navbar.tsx
  Hero.tsx
  Experience.tsx
  Projects.tsx
  Skills.tsx
  Education.tsx
  Contact.tsx
  Footer.tsx
  ui/               (reusable: Badge, Card, Button, etc.)
```

## SQL Adversarial Testing Agent (New Project to Add)
- Title: SQL Adversarial Testing Agent
- Description: "Stress-tests AI-generated SQL by auto-generating adversarial datasets that surface logic errors, not syntax errors. 3-agent pipeline with schema analysis, data generation, and validation."
- Tech: DuckDB, GPT-4o, Pydantic, FastAPI, Python
- Links: GitHub (DhirenV01/sql-adversarial-agent)
- This is the newest project, highlight it as "New" or with a badge