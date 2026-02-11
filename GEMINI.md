# GEMINI.md - Project Context & Implementation Guide

This document provides a comprehensive overview of the Developer Portfolio project, designed to give Large Language Models (LLMs) and developers full context on the codebase, architecture, and standards.

---

## 🚀 Project Overview
This is a Unix-inspired, tiling window manager portfolio built with **React**, **Vite**, and **Bun**. It simulates a desktop environment with a functional terminal, a master-stack windowing system, and interactive components.

### Core Philosophy
- **Modular Component Design:** Everything is a component.
- **Visual Consistency:** Driven by global CSS variables and a unified icon system.
- **Interactive UX:** Uses `framer-motion` for fluid, desktop-like transitions.
- **Data-Driven:** Content (projects, FAQs, contact info) is decoupled from the UI and loaded from JSON.

---

## 🛠️ Tech Stack
- **Framework:** React (Functional Components)
- **Styling:** CSS Modules + Global CSS Variables
- **Animations:** Framer Motion
- **Icons:** SVGR (SVGs as React components)
- **Runtime/Package Manager:** Bun (compatible with npm/yarn)
- **Documentation/UI Dev:** Storybook
- **Build Tool:** Vite

---

## 📂 Directory Structure

### `/src`
- **`assets/`**: Raw SVG icons.
- **`components/`**: Atomic and molecular UI components.
- **`constants/`**: Configuration for apps, icons, and layout elements.
- **`hooks/`**: Business logic (Terminal execution, Filesystem simulation, Page state).
- **`pages/`**: The "App" views displayed within windows.
- **`styles/`**: Global theme definitions (colors, typography, spacing).
- **`utils/`**: Helper functions (e.g., regex for links).

### `/public`
- **`*.json`**: Source of truth for portfolio content (Projects, FAQ, Contact).
- **`term.svg`**: Desktop wallpaper or specific assets.

---

## 🏗️ Architecture & Core Systems

### 1. Tiling Window Management (`src/components/TilingLayout`)
The app uses a **Master-Stack** layout:
- If 1 window is open: It is centered in the "Master" area.
- If 2+ windows are open: The first one remains in "Master" (left), and subsequent windows are vertically stacked in the "Stack" (right).
- **Animation Logic:** Managed by `framer-motion`. Resizing and transitions must be handled carefully to avoid layout shifts.

### 2. Terminal & Virtual Filesystem (`src/hooks`)
- **`useFileSystem.js`**: Simulates a directory structure based on the JSON data.
- **`runTerminalCommand.js`**: Processes commands (`ls`, `cd`, `cat`, etc.) against the simulated filesystem.
- **`Terminal.jsx`**: Provides the UI for interaction.

### 3. Icon System (`src/constants/iconList.js`)
All icons are imported as React components via SVGR and exported from a central list. **Always use this list** instead of direct imports to maintain consistency.

---

## 📝 Standards for New Implementations

### Adding a New Component
Every new component must follow this structure:
```text
src/components/MyComponent/
├── index.js              # Clean export
├── MyComponent.jsx       # Logic and JSX
├── MyComponent.module.css # Scoped styles
└── MyComponent.stories.jsx # Storybook documentation
```

### Adding a New "App" (Page)
1. **Create the Page:** Add a new folder in `src/pages/` with the standard component structure.
2. **Define in Constants:**
   - Add the app to `src/constants/pageApps.js`.
   - Add its icon/entry to `src/constants/dockApps.js` if it should appear in the dock.
3. **Logic:** Ensure the page component accepts an `onClose` prop and wraps its content in the `Window` component.

### Requirements & Constraints
- **PropTypes:** Every component **must** have PropTypes defined.
- **CSS Modules:** Avoid global selectors; use `.module.css` for component-specific styles.
- **Responsive Design:** Use `clamp()` for fluid typography and media queries for layout shifts (e.g., stacking windows vertically on mobile).
- **Text Alignment:** Default to `text-align: left` or `center`. Avoid `justify` as it breaks during fluid resizing.
- **Animations:** Use `framer-motion` for entry/exit and layout transitions.

---

## 💡 Context for LLMs

- **Where to find Global Styles?** `src/styles/colors.css` and `src/styles/typography.css`.
- **How are windows triggered?** Managed by the `useDisplayedPages` hook in `src/App.jsx`.
- **How to update content?** Edit the JSON files in `/public`. The components and terminal filesystem will update automatically.
- **Debugging Layout:** Check `TilingLayout.jsx` and its associated CSS module. The `layout` prop on `motion.div` is critical for smooth resizing.

---

## 🚀 Development Scripts
- `bun run dev`: Start development server.
- `bun run storybook`: View component documentation.
- `bun run lint`: Run ESLint.
- `bun run format`: Run Prettier.
