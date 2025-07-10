# Mystery Phenomena Files

> An X-Files-inspired interactive multi-page website built with pure HTML, CSS & Vanilla JS, enhanced by GSAP, Swiper, Three.js and Chart.js.

---

## 🔗 Table of Contents

1. [Project Overview](#project-overview)  
2. [Key Features](#key-features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation & Run](#installation--run)  
5. [Folder Structure](#folder-structure)  
6. [Usage](#usage)  
7. [Deployment](#deployment)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## Project Overview

Mystery Phenomena Files is a lightweight, component-based demo site that walks you through the world’s most enigmatic events in true X-Files style:

- **Multi‐page navigation** with dropdown menu & mobile hamburger  
- **Hero section** with full-bleed mysterious background and overlay text  
- **Phenomena Explorer**: scroll-triggered GSAP & Three.js animations  
- **Features Carousel**: Swiper-powered cards loaded from JSON  
- **Data Insights**: Chart.js visualizations for testimonials & metrics  
- **Contact**: A11y-friendly form with validation and keyboard support  

All pages are handcrafted in **HTML5**, **CSS3** (custom properties + keyframes) and **Vanilla JavaScript** (ES Modules), ready for further expansion.

---

## Key Features

- **Header & Navigation**  
  - Responsive sticky nav via `header.js`  
  - Dropdowns and accessible hamburger menu  
- **Hero**  
  - Parallax background with semi-transparent text container  
  - Focusable search/CTA element  
- **Phenomena Explorer**  
  - GSAP ScrollTrigger & Three.js scene for immersive storytelling  
- **Features Section**  
  - JSON-driven Swiper carousel showcasing core modules  
- **Testimonials & Metrics**  
  - Interactive charts driven by Chart.js and local data  
- **Contact Form**  
  - Real-time validation, ARIA attributes, and keyboard navigation  

---

## Tech Stack

- **Markup**: HTML5, ES6 Modules  
- **Styles**: CSS3 custom properties, Flexbox, Grid, @keyframes  
- **Animation**: GSAP, ScrollTrigger  
- **Carousel**: Swiper.js  
- **3D & Charts**: Three.js, Chart.js  
- **Tooling**: Vite, npm, GitHub Pages  

---

## Getting Started

### Prerequisites

- Node.js v14+ (for Vite dev server)  
- Git & GitHub account  

### Installation & Run

```bash
# 1. Clone this repository
git clone git@github.com:<your-username>/mystery-phenomena-files.git
cd mystery-phenomena-files

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
````

---

## Folder Structure

```
mystery-phenomena-files/
├─ assets/
│  ├─ css/
│  │  ├─ reset.css
│  │  ├─ variables.css
│  │  ├─ base.css
│  │  ├─ layout.css
│  │  └─ animations.css
│  ├─ img/
│  └─ js/
│     ├─ header.js
│     ├─ hero.js
│     ├─ scrollEffects.js
│     └─ main.js
├─ data/
│  ├─ features.json
│  └─ testimonials.json
├─ mermaid/
│  ├─ site-structure.mmd
│  └─ interaction-flow.mmd
├─ index.html
├─ about.html
├─ phenomena.html
├─ testimonials.html
├─ contact.html
├─ README.md
└─ vite.config.js
```

---

## Usage

Open your browser at the address provided by the dev server (usually `http://localhost:3000`) and navigate through the Mystery Phenomena Files site. All interactive modules and animations will load automatically.

---

## Deployment

This project can be deployed to GitHub Pages:

1. Push the `main` branch to GitHub.
2. In your repo settings, enable GitHub Pages from the `gh-pages` branch (or `docs/`).
3. The site will be available at `https://<your-username>.github.io/mystery-phenomena-files`.

---

## Contributing

1. Fork the repo
2. Create a feature branch

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes
4. Open a Pull Request against `main`

---

## License

Distributed under the MIT License. See `LICENSE` for details.

````

---

**Commit 範例**

```bash
git checkout -b feature/docs-readme
git add README.md
git commit -m "docs(readme): refine README with TOC, sections, and project details"
git push -u origin feature/docs-readme
````
