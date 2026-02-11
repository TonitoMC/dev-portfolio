# Implementation Plan: Advanced Terminal Ricing (p10k Style)

This document outlines the steps to implement advanced terminal features: Syntax Highlighting, Transient Prompts, improved aesthetics, and animations.

---

## 1. Syntax Highlighting (Real-time)
**Goal:** Highlight commands (green if valid, red if invalid) and arguments (cyan/white) as the user types.

### Implementation Steps:
1.  **Modify `TerminalInputLine.jsx`:**
    *   Create a "layered" input approach. Use a container with `position: relative`.
    *   Place a `<span>` or `<div>` with the highlighted text exactly behind a transparent `<input>`.
    *   Ensure fonts, padding, and letter-spacing are identical so they overlap perfectly.
2.  **Highlighting Logic:**
    *   Create a function `getHighlightedText(input)` that:
        *   Splits the input by spaces.
        *   Checks the first word (command) against a list of valid commands (`ls`, `cd`, `cat`, `help`, `pwd`, `clear`).
        *   If valid, wrap in a `<span style="color: var(--nord14)">`.
        *   If invalid (and not empty), wrap in a `<span style="color: var(--nord11)">`.
        *   Apply different Nord colors to arguments (e.g., `nord9` for paths/files).
3.  **CSS Updates:**
    *   Set `input { color: transparent; caret-color: var(--nord4); }` in `TerminalInputLine.module.css`.

---

## 2. Transient Prompt
**Goal:** When a command is submitted, the previous multi-line prompt should "collapse" into a single, compact line in the history to save space.

### Implementation Steps:
1.  **Modify `Terminal.jsx`:**
    *   Update the `handleCommand` function. When adding a command to the history, set a `transient: true` flag.
2.  **Update `TerminalHistory.jsx`:**
    *   Check for the `transient` flag in the history item loop.
    *   **If `transient` is true:** Render a single-line prompt like `❯ command` or `~ command` instead of the full user@host/path blocks.
    *   **If `transient` is false (active input):** Keep the current p10k multi-line layout.

---

## 3. Diverse Nord Colors & Spacing
**Goal:** Use more of the Nord palette and tighten the layout.

### Implementation Steps:
1.  **Arrow Refactor:**
    *   Change the `❯` arrow color from `nord14` (green) to `nord15` (purple) or `nord13` (yellow) to make it "pop" against the green user@host.
2.  **Padding Adjustment:**
    *   In `TerminalInputLine.module.css`, reduce `padding-bottom` from `2rem` to `0.5rem` or `1rem` for a tighter feel.
3.  **Path Refinement:**
    *   Use `nord8` (frost) for the path instead of `nord9` for better contrast.

---

## 4. Terminal Animations
**Goal:** Make the terminal feel "alive" when outputting data.

### Implementation Steps:
1.  **Output Entry Animation:**
    *   In `TerminalHistory.jsx`, wrap the `<pre className={styles.output}>` and command lines in `motion.div`.
    *   Apply a fast `initial={{ opacity: 0, x: -5 }}` and `animate={{ opacity: 1, x: 0 }}` transition.
2.  **Prompt Blink/Pulse:**
    *   Optionally add a subtle pulse animation to the active `❯` arrow using CSS keyframes or Framer Motion.

---

## 5. Metadata Update
**Goal:** Ensure all "Fetch" info reflects the latest user preference.

### Implementation Steps:
1.  **Update `TerminalFetch.jsx`:**
    *   Ensure `OS` is set to `CachyOS`.
    *   Add a new field like `Editor: nvim` or `Packages: 1337 (pacman)` for extra flavor.
