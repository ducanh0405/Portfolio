## AI Usage Log

### 2026-03-10 – Homepage & Docs Updates
- **Tool**: Cursor AI assistant
- **What was done**:
  - Created an initial empty API documentation file at `docs/api.md`.
  - Added a root `.env` file with placeholder variables for future local configuration.
  - Added a root `checklist.md` summarizing remaining tasks for the portfolio assignment (structure, content, forms, media, accessibility, deployment).
  - Updated this `docs/AI_usage_logs.md` entry to document the AI usage.
- **How I will modify/use this**:
  - I will fill in real API details in `docs/api.md` later.
  - I will replace placeholder values in `.env` with real secrets locally (without committing sensitive data).
  - I will use `checklist.md` to track and tick off assignment requirements as I complete them.

### 2026-03-10 – README alignment with requirements
- **Tool**: Cursor AI assistant
- **What was done**:
  - Reviewed `requirement.md` and updated `readme.md` to better match the assignment specification (site map, features mapped to rubric, how to run locally, deployment notes, credits section, and AI usage explanation).
  - Documented how the project structure (pages, CSS, JS, i18n) fits the required checklist.
- **How I will modify/use this**:
  - I will keep the README updated when I add or remove pages, features, or deployment details.
  - I will add concrete credits for any external images, icons, or resources I use.

### 2026-03-10 – Light blue–violet theme tuning
- **Tool**: Cursor AI assistant
- **What was done**:
  - Adjusted global color variables and the hero background in `css/style.css` to use a cohesive, lighter blue–violet palette.
  - Ensured text and card backgrounds remain high-contrast and easy to read while matching the hero’s colors.
- **How I will modify/use this**:
  - I will keep using the CSS variables in `:root` when adding new components so the theme stays consistent.
  - I will tweak specific section colors only through the variables if I need small visual changes later.

### 2026-03-10 – Realistic content refresh
- **Tool**: Cursor AI assistant
- **What was done**:
  - Replaced placeholder text with more realistic portfolio content in `index.html`, `projects.html`, `blog.html`, and `contact.html`.
  - Updated project descriptions, experience bullets, education/certification lines, blog summaries, and contact/social links.
  - Synced translated text by updating `i18n/en.json` and `i18n/vi.json` for project subtitle and contact intro.
- **How I will modify/use this**:
  - I will replace any remaining sample details with final project-specific information and real public links.
  - I will keep EN/VI translations aligned whenever I change visible page content.

### 2026-03-10 – AI workspace UI redesign
- **Tool**: Cursor AI assistant
- **What was done**:
  - Redesigned `projects.html` into a React + Tailwind + Framer Motion collaborative AI workspace.
  - Implemented an omni-bar command center (natural language + slash commands + file attachments).
  - Added generative UI widgets in the stream (interactive data table and Recharts-based chart widget).
  - Added transparency states with a collapsible Thinking Trace and animated processing indicators.
  - Added a contextual sidebar showing active files, data sources, variables, and last command.
- **How I will modify/use this**:
  - I will wire the mock command handlers to my real backend agent APIs.
  - I will replace demo datasets and memory values with real runtime context from my app.

### 2026-03-10 – Whole project consistency update
- **Tool**: Cursor AI assistant
- **What was done**:
  - Added `map.html` with Google Maps iframe and embedded YouTube section to complete media/iframe requirements.
  - Standardized navigation coverage by adding `Map` to rendered nav links in `js/main.js` and to fallback/footer links across pages.
  - Added favicon links to pages missing it and refined remaining placeholder details in `index.html` (experience location fields).
  - Updated `readme.md` and `checklist.md` to reflect the current project structure and completed items.
- **How I will modify/use this**:
  - I will replace demo media/embed links with final assets if needed.
  - I will continue using checklist/readme updates after each major feature pass to keep documentation in sync.

### 2026-03-10 – Fix projects page and unify navbar
- **Tool**: Cursor AI assistant
- **What was done**:
  - Replaced the unstable `projects.html` implementation with a robust static projects page to remove runtime errors.
  - Standardized navigation/header across all pages to match the home page style (`site-header`, `site-nav`, brand, mobile toggle).
  - Centralized mobile nav toggle and year update logic in `js/main.js` so every page behaves consistently.
- **How I will modify/use this**:
  - I will keep all future pages using the same header structure to avoid navigation drift.
  - If I reintroduce advanced UI on `projects.html`, I will integrate it incrementally with fallback content.

### 2026-03-10 – Remove quick-links section above footer
- **Tool**: Cursor AI assistant
- **What was done**:
  - Removed the standalone `Quick Links` section located above the footer in `index.html`.
  - Kept footer navigation intact so users still have direct navigation links.
- **How I will modify/use this**:
  - I will keep only one primary quick-links area (footer) to reduce visual repetition.
