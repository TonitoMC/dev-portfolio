# My Developer Portfolio

A Unix-inspired, tiling window manager portfolio built with React, Vite and Bun.  
Explore my projects, FAQ, and contact info in a playful, interactive desktop-like environment publicly hosted [here](https://jose-merida.netlify.app)

---

## 🚀 Technologies Used

- **React** — Component-driven UI
- **Vite** — Lightning-fast build tool and dev server
- **Bun** — Modern JS runtime and package manager
- **Framer Motion** — Smooth, modern animations for window transitions
- **SVGR** — SVGs as React components for icons
- **Netlify** — Simple, fast deployment

---

## ✨ Features

- **Tiling Window Manager UI:**  
  Open, close, and tile multiple pages (About, Projects, FAQ, Contact, Terminal) just like a real WM.  
  Master-stack layout with smooth transitions.

- **Terminal Emulator:**  
  - Supports `ls`, `cd`, `cat`, and `help` commands.
  - Virtual filesystem with dynamic files:  
    - `about.txt`
    - `projects/ProjectName.txt`  
    - `faq/faq.txt`
    - `contact/email.txt`, `contact/github.txt`
  - Clickable links in terminal output.

- **Dock & TopBar:**  
  - Dock for launching apps, styled like a real desktop.
  - TopBar with dynamic icons, popovers, and system info.

- **Data-Driven:**  
  - Projects, FAQ, and contact info are loaded from JSON files in `/public` for easy updates without redeploying.

- **Single Source of Truth for Icons:**  
  - All icons are managed via an `iconList` for consistency and easy updates.

---

## 🛠️ Design

- **Component-Driven:**  
  Every UI element is a reusable, modular React component, making the codebase easy to maintain and extend.

- **Global CSS Variables:**  
  Colors, spacing, and typography are managed with CSS variables for consistent theming and easy tweaks.

- **Semantic HTML:**  
  Uses `<main>`, `<section>`, `<article>`, `<nav>`, and `<button>` for accessibility and SEO.

- **Animations with Framer Motion:**  
  All window transitions and popovers use Framer Motion for a modern, smooth feel.

---

## 🖥️ How to Run Locally

```bash
bun install
bun run dev
```
or with npm/yarn:
```bash
npm install
npm run dev
```

---
