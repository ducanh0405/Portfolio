/**
 * Main app - Nav, Contact form helpers
 * Language: English only
 */
const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'projects.html', label: 'Projects' },
  { href: 'blog.html', label: 'Blog' },
  { href: 'contact.html', label: 'Contact' },
  { href: 'map.html', label: 'Map' }
];

const CONTACT_INFO = {
  address: 'Nguyen Huu Canh Street, Binh Thanh District, Ho Chi Minh City, Vietnam',
  email: 'anduc0405vsg@gmail.com',
  phone: '+84 902 614 506'
};

const I18N = {
  lang: 'en',
  dict: {}
};

function get(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), obj);
}

function t(key) {
  const raw = get(I18N.dict, key);
  return typeof raw === 'string' ? raw : key;
}

async function loadI18n() {
  try {
    const res = await fetch('i18n/en.json', { cache: 'force-cache' });
    if (!res.ok) throw new Error('Failed to load i18n/en.json');
    I18N.dict = await res.json();
  } catch (e) {
    I18N.dict = {};
    console.error(e);
  }
  document.documentElement.lang = 'en';
}

function applyTranslations(root = document) {
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val !== key) el.textContent = val;
  });
  root.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (val !== key) el.innerHTML = val;
  });
  root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val !== key) el.setAttribute('placeholder', val);
  });
  root.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    const val = t(key);
    if (val !== key) el.setAttribute('aria-label', val);
  });
  root.querySelectorAll('[data-i18n-value]').forEach(el => {
    const key = el.getAttribute('data-i18n-value');
    const val = t(key);
    if (val !== key) el.setAttribute('value', val);
  });
}

function renderNav() {
  const el = document.getElementById('nav-container') || document.getElementById('primary-nav');
  if (!el) return;
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  el.innerHTML = NAV_LINKS.map(l =>
    `<li><a href="${l.href}"${currentPage === l.href ? ' aria-current="page"' : ''}>${l.label}</a></li>`
  ).join('');
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });
}

function updateCurrentYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function initContactPage() {
  const addr = document.getElementById('contact-address');
  const email = document.getElementById('contact-email');
  const phone = document.getElementById('contact-phone');
  if (addr) addr.textContent = CONTACT_INFO.address;
  if (email) email.textContent = CONTACT_INFO.email;
  if (phone) phone.textContent = CONTACT_INFO.phone;
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadI18n();
  renderNav();
  initMobileNav();
  applyTranslations();
  initContactPage();
  updateCurrentYear();
});
