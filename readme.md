# Duc Anh Portfolio Website

Personal portfolio website for **Lab 1 – Assignment 1** at HCMIU.  
The site introduces myself, shows projects, a blog, and a full contact form.

---

## 1. Tech stack

- **HTML5**: semantic structure (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3**: custom layout, Flexbox/Grid, responsive breakpoint (~768px), CSS variables
- **JavaScript**: small enhancements (navigation, contact info, basic i18n)

The project follows the requirements in `requirement.md` (structure, form, media, responsiveness, accessibility, deployment).

---

## 2. Site map

All HTML files are in the project root:

- `index.html` – **Home**
  - Hero section, short intro, portfolio preview, skills, experience, education, blog preview, contact CTA, quick links
- `about.html` – **About**
  - Background, interests, short bio
- `projects.html` – **Portfolio / Projects**
  - AI collaborative workspace demo with command center, thinking trace, and interactive widgets
- `blog.html` – **Blog list**
  - List of blog posts with date and excerpt
- `post-1.html` – **Sample blog post**
  - Example article (e.g. “Getting Started with Machine Learning”)
- `contact.html` – **Contact (full form)**
  - Styled two‑column contact section + form
  - Includes all required input types (`text/email/tel/password/number/date/range/color/file/radio/checkbox/select/textarea/datalist/hidden`) plus submit/reset, validation constraints, and friendly error messages
- `policy.html` – **Privacy & Terms**
  - Simple privacy policy and terms text
- `map.html` – **Map & Media**
  - Embedded Google Maps location + YouTube iframe section

Supporting files:

- `css/style.css` – Global styles for all pages (layout, typography, responsive, components)
- `js/main.js` – Small JS helpers (navigation rendering + contact info injection)
- `i18n/en.json`, `i18n/vi.json` – Basic EN / VI translation dictionaries
- `checklist.md` – Assignment-oriented checklist (requirements from `requirement.md`)
- `docs/AI_usage_logs.md` – AI usage log (for assignment)
- `docs/api.md` – Empty API documentation draft
- `docs/draft.md` – Initial site map / draft notes

---

## 3. Main features (mapped to requirements)

- **Structure & navigation**
  - 7 separate HTML pages with consistent header / nav / footer
  - Clear internal links between Home, About, Projects, Blog, Contact, Policy
- **Media & content**
  - Multiple images with `alt` text (portfolio cards / blog visuals)
  - Includes `figure` / `figcaption` and iframe content via `map.html`
- **Responsive layout**
  - Home hero + sections adapt for mobile (≤768px)
  - Projects and blog lists use CSS Grid (1 column on small screens)
- **Portfolio**
  - AI-first workspace prototype on `projects.html`
  - Featured projects on Home linking back to the main projects page
- **Blog**
  - Blog listing page + one detailed post page
- **Contact form**
  - Full contact page with assignment-compliant form controls and validation
  - Uses `fieldset`/`legend`, labels, `required`/`pattern`/`min`/`max`/`step`, and custom friendly validation messages
- **Accessibility basics**
  - Landmarks (`header`, `nav`, `main`, `footer`)
  - Keyboard-focusable navigation and buttons with visible hover/focus styles
  - Meta viewport, meta description, and proper heading structure per page

See `checklist.md` for a detailed, tickable list aligned with the rubric in `requirement.md`.

---

## 4. How to run locally

You can open the site in two simple ways:

1. **Open directly in browser**
   - Clone or download the repository.
   - Double‑click `index.html` (or open it via “Open with…” in your browser).

2. **Using a simple local server (recommended)**
   - Use VS Code Live Server, Python `http.server`, or any static server.
   - Example with Python (from the project root):
     - `python -m http.server 5500`
   - Then visit `http://localhost:5500/index.html`.

---

## 5. Deployment

The project is intended to be deployed as a **static site** (GitHub Pages or Netlify), as required by the assignment.

- **GitHub repository**: `https://github.com/ducanh0405/Portfolio`
- **Expected live URL (GitHub Pages)**: `https://ducanh0405.github.io/Portfolio/`  
  (Confirm this is configured when you enable GitHub Pages.)

After deployment, verify:

- All links between pages work.
- All styles and images load correctly.
- Contact form displays and validates as expected (HTML5 validation).

---

## 6. Credits

Update this section with exact sources you use:

- Any icons or illustrations (e.g. from [Font Awesome], [Heroicons], etc.) – **add links and licenses**.
- Any images (e.g. from [Unsplash], [Pexels], [Freepik]) – **add author / URL**.
- Any external tutorials or design inspirations – optional but recommended to mention.

At the moment, the site uses mostly custom markup and styling; add credits here as you introduce external assets.

---

## 7. AI usage

- The file `docs/AI_usage_logs.md` tracks how AI tools (such as Cursor) were used.
- For each significant AI-assisted change, a new dated entry is added describing:
  - What the AI did (files / features it helped with).
  - How you will review or modify the result.

You should keep that log up to date to comply with the assignment’s AI usage policy in `requirement.md`.
