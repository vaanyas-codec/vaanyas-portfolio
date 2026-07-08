# Vaanya Kshatriya — Portfolio

Personal portfolio built on top of [cupidbity/portfolio-template](https://github.com/cupidbity/portfolio-template), customised with my projects, photos, and a scrapbook section I'm unreasonably fond of.

Built with React, TypeScript, Vite, and Tailwind CSS.
Live at: [vaanyas-portfolio-meah.vercel.app](https://vaanyas-portfolio-meah.vercel.app)
---

## What's in here

**About** — roles typewriter, scrapbook photo journal with 14 photos and page-flip navigation, contact chips, live GitHub contribution graph

**Projects** — Credit Card Fraud Detection, Skin Lesion Classifier, Real-Time ASL Detection. Each has a detail page with overview, tech stack, and highlights.

**Experience** — Accodyn Technologies internship (Feb 2025 to June 2025)

**Skills** — 3D dome gallery with all 17 icons from my actual stack, auto-spin, hover to pause, tooltip on each icon

**Leadership** — Synapse AI Club (VP), E-Cell MIT-WPU (Thrive Head), IIC (Secretary), with a timeline layout

---

## Stack

React 19, TypeScript, Vite, Tailwind CSS, Radix UI, Lucide Icons, GSAP, React Spring, React Router DOM

---

## Running locally

```bash
git clone https://github.com/vaanyas-codec/vaanyas-portfolio.git
cd vaanyas-portfolio
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:5173`.

## Environment variables

Add these to your `.env` before running:

```
VITE_GITHUB_URL=https://github.com/vaanyas-codec
VITE_LINKEDIN_URL=https://www.linkedin.com/in/vaanya-kshatriya-/
VITE_EMAIL=vaanya.kshatriya@gmail.com

VITE_GITHUB_PROJECT1_URL=https://github.com/vaanyas-codec/credit-card-fraud-detection
VITE_GITHUB_PROJECT2_URL=https://github.com/vaanyas-codec/skin-lesion-classifier
VITE_GITHUB_PROJECT3_URL=https://github.com/vaanyas-codec/realtime-sign-language-recognition
```

## Build

```bash
npm run build
```

Output goes to `dist/`. Deploy anywhere that serves static files. I use Vercel, connected to this repo, auto-deploys on every push to main.

---

## Project structure

```
src/
  assets/              photos, icons, stickers, tech stack SVGs
  components/
    section/           About, Projects, Experience, Skills, Leadership, Navigation, Footer
    project/           ProjectLayout, ProjectHeader, ProjectOverview, TechStack, TechnicalHighlights
    ui/                dome gallery, image carousel, aurora, cards, badges
  config/
    socialLinks.ts     all URLs in one place, pulled from .env
  contexts/
    DarkModeContext    light/dark toggle with localStorage persistence
  pages/
    projects/          CreditCardFraudDetection, SkinLesionClassifier, RealtimeAslDetection
    Contact.tsx
  styles/
    colors.ts          full colour palette consumed via useThemeColors hook
  App.tsx              routes and layout
public/
  resume.pdf           my resume, linked from the About section
```

---

## Things I changed from the base template


Replaced the placeholder content throughout. Added a Leadership/Extracurriculars section from scratch. Rebuilt the About photo section as a scrapbook with single-page flip animation. Added 17 skill icons covering my actual ML/data stack (PyTorch, XGBoost, FastAPI, scikit-learn, OpenCV, MediaPipe, Pandas, NumPy, and so on). Wired live GitHub repo stats to the project cards. Added auto-spin to the skills dome with hover-to-pause and per-icon tooltips.

---

## License

MIT. Base template by [cupidbity](https://github.com/cupidbity/portfolio-template).