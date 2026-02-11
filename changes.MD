# Comprehensive Change Log - feature/file-manager-and-styling-fixes

This branch implements a significant overhaul of the Developer Portfolio, introducing a new "riced" Unix-inspired Projects Explorer, advanced terminal features, and comprehensive visual refinements.

---

## 🛠️ Major Implementations

### 1. New "Projects" Explorer (File Manager)
- **Modular Design:** Replaced the simple list-based projects view with a functional File Manager.
- **Components:** Created `PathBar`, `FileSidebar`, and `FileGrid` sub-components.
- **Interactive Previews:** Implemented a persistent side-panel that displays project screenshots, descriptions, and tech stacks on hover.
- **Smart Navigation:** Start directory defaulted to `/projects`, with categories for `Web`, `Data Science`, and `Databases`.
- **Logic:** Integrated proactive mouse tracking to ensure previews trigger correctly during folder navigation.

### 2. Advanced Terminal Ricing
- **p10k Style Prompt:** Implemented a two-line zsh-style prompt with green `user@host` and blue `path`.
- **Real-time Syntax Highlighting:** Commands are now validated as you type (Green for valid, Red for invalid, Frost for arguments).
- **Tab-Completion:** Rudimentary autocomplete for valid terminal commands and virtual filenames.
- **Transient Prompts:** Historical entries "collapse" into compact single lines to maximize vertical space.
- **Terminal Fetch:** Added a custom `TerminalFetch` (neofetch) component with ASCII art and system metadata.
- **New Commands:** Added `clear` and `pwd`.

### 3. Visual & Interaction Overhaul
- **SVG Icon System:** Completely refactored the entire icon set (`src/assets/`) for vector sharpness and weight consistency.
- **Window Management:** 
    - Fixed the "carrousel around" exit animations.
    - Centered and constrained the size of single-window layouts.
    - Implemented elegant glow and scale effects for window control buttons (red/yellow/green dots).
- **Typography:** Switched to responsive `clamp()` sizing for all headers and paragraphs to improve reflow during window resizing.
- **Stability:** Fixed "shaky text" animations in the Dock and refined Top Bar popover hitboxes to prevent overlapping.

---

## 📂 Affected Files

### New Components & Pages
- `src/components/FileManager/*` (PathBar, Sidebar, Grid)
- `src/components/TerminalFetch/*`
- `src/pages/FileManager/*` (Renamed to "Projects" in UI)
- `public/screenshots/placeholder.svg`

### Refactored Logic & Hooks
- `src/hooks/useFileSystem.js` (Updated directory hierarchy)
- `src/hooks/runTerminalCommand.js` (Added new commands)
- `src/components/TerminalInputLine/*` (Syntax highlighting & Tab logic)
- `src/components/TerminalHistory/*` (Transient logic & animations)

### Styling & Assets
- `src/assets/*.svg` (Universal icon refactor)
- `src/styles/typography.css` (Responsive font overhaul)
- `src/components/Window/Window.module.css` (Gap fixes & dot hovers)
- `src/components/TilingLayout/*` (Animation & resizing fixes)
- `src/components/TopBarPopover/*` (Animation & hitbox fixes)

---

## ✅ Status
- Conventional commits used throughout.
- Branch: `feature/file-manager-and-styling-fixes`
- Pull Request targeted to: `main`
