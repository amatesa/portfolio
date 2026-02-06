# Portfolio – Web · Data · Digital Products

Personal portfolio of **Alejandro Matesa**, a hybrid profile focused on operations, data analysis and digital products.  
The site works as a central hub for my web projects, data-related work and future ebooks/toolkits.

> Live demo: https://amatesa.github.io/portfolio  <!-- Ajusta la URL si es distinta -->

---

## 🔍 Overview

This project is a **single-page portfolio site** built with **HTML, CSS and vanilla JavaScript**.  
It is designed to:

- Present my profile as an **Operations & Data** professional with a web background.
- Highlight a small set of **real projects** (not just course exercises).
- Host **digital products & resources** (ebooks, templates, toolkits).
- Make it easy for recruiters and clients to:
  - Scan my skills quickly.
  - Jump to GitHub repos and live demos.
  - Reach out via email or LinkedIn.

The site is fully responsive and supports **English/Spanish** and **light/dark themes**.

---

## ✨ Features

- **Bilingual content (ES / EN)**  
  Texts are handled via a simple `data-i18n` + `translations` approach, no external libraries. :contentReference[oaicite:25]{index=25}  

- **Light / Dark theme toggle**  
  Implemented with CSS custom properties and a small JS helper (`data-theme` on `<html>` + `localStorage`).   

- **Responsive layout**  
  Built with flexbox, CSS grid and `clamp()` for typography; optimized for mobile-first, tablets and desktop. :contentReference[oaicite:27]{index=27}  

- **Projects section with filters**  
  Projects are defined in a `projects` array (JS) and rendered dynamically.  
  Users can filter by category (Web, Data, Products, Other).   

- **Digital products / resources section**  
  Cards for ebooks, templates and toolkits:
  - Support for “Coming soon” badge.
  - CTA can be a download link or an external purchase URL.   

- **Background particles**  
  Lightweight canvas animation that adapts to the current accent color (`--accent`).   

- **Scroll reveal animations**  
  Implemented via `IntersectionObserver` + CSS transitions (no heavy animation libraries).   

---

## 🧱 Tech stack

- **HTML5** – semantic, single-page structure (`index.html`). :contentReference[oaicite:32]{index=32}  
- **CSS3** – custom properties, flexbox, grid, responsive layout (`styles.css`). :contentReference[oaicite:33]{index=33}  
- **JavaScript (ES6)** – DOM manipulation, language/theme handling, dynamic rendering (`script.js`). :contentReference[oaicite:34]{index=34}  

No frameworks, no bundlers.

---

## 📁 Project structure

```text
portfolio/
  ├── index.html       # Main page (sections: Hero, Projects, Resources, About, Contact)
  ├── styles.css       # Global styles, design tokens, components (cards, tags, hero, etc.)
  ├── script.js        # Language & theme toggle, data-driven rendering, particles, nav
  └── assets/          # Images and static assets (project thumbnails, avatar, etc.)
