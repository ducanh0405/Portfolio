# Duc Anh Portfolio Website

Personal portfolio website for Lab 1 assignment at HCMIU.  
The site introduces myself, shows projects, a blog, and a full contact form.

---

## 1. Tech stack

- **HTML5**: semantic structure (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3**: custom layout, Flexbox, Grid, responsive breakpoint (~768px), CSS variables
- **JavaScript**: small enhancements (nav / contact info / range slider support – optional)

---

## 2. Site map

All files are in the project root unless noted.

- `index.html` – **Home**
  - Hero section, short intro, portfolio preview, quick links
- `about.html` – **About**
  - Background, interests, short bio
- `projects.html` – **Portfolio / Projects**
  - Project cards with title, description, category and “Case Study” links
- `blog.html` – **Blog list**
  - List of blog posts with date and excerpt
- `post-1.html` – **Sample blog post**
  - “Getting Started with Machine Learning”
- `contact.html` – **Contact (full form)**
  - Styled two‑column contact section + form (name, email, location, budget, subject, message, etc.)
- `policy.html` – **Privacy & Terms**
  - Simple privacy policy and terms text
- `css/style.css` – Global styles for all pages
- `js/main.js` – Small JS for navigation / contact info (if used)
- `docs/AI_usage_logs.md` – AI usage log (for assignment)
- `docs/draft.md` – Initial site map / draft notes

---

## 3. Main features

- **Consistent navigation & footer**
  - Sticky top nav with links to all main pages
  - Large footer with quick links + policy link on every page
- **Responsive layout**
  - Home hero + sections adjust for mobile (≤768px)
  - Projects and portfolio use CSS Grid (1 column on mobile)
- **Portfolio section**
  - 6 projects on `projects.html`, 3 featured projects on home
- **Blog**
  - Blog listing page + 1 detailed post
- **Contact form**
  - Clean UI like modern landing pages
  - Required fields: Name, Email, Budget, Subject, Message
- **Accessibility basics**
  - Landmarks (`header`, `nav`, `main`, `footer`)
  - `aria-label` for nav where needed
  - Focus / hover styles for links and buttons