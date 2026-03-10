/**
 * Main app - Nav, Contact form helpers
 * Single source of truth for nav links
 */
const NAV_LINKS = [
  { href: 'index.html', labelKey: 'nav.home' },
  { href: 'about.html', labelKey: 'nav.about' },
  { href: 'projects.html', labelKey: 'nav.projects' },
  { href: 'blog.html', labelKey: 'nav.blog' },
  { href: 'contact.html', labelKey: 'nav.contact' }
];

const CONTACT_INFO = {
  address: 'Nguyen Huu Canh Street , Binh Thanh District, Ho Chi Minh City, Vietnam',
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

function format(template, vars) {
  if (!template || !vars) return template;
  return template.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, key) => {
    const val = get(vars, key);
    return val == null ? '' : String(val);
  });
}

function t(key, vars) {
  const raw = get(I18N.dict, key);
  if (typeof raw === 'string') return format(raw, vars);
  return key;
}

function getPreferredLang() {
  const saved = localStorage.getItem('lang');
  if (saved === 'en' || saved === 'vi') return saved;
  const nav = (navigator.language || '').toLowerCase();
  return nav.startsWith('vi') ? 'vi' : 'en';
}

async function loadI18n(lang) {
  I18N.lang = lang;
  try {
    const res = await fetch(`i18n/${lang}.json`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to load i18n/${lang}.json`);
    I18N.dict = await res.json();
  } catch (e) {
    I18N.dict = {};
    console.error(e);
  }
  document.documentElement.lang = lang;
}

function applyTranslations(root = document) {
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  root.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });
  root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });
  root.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    el.setAttribute('aria-label', t(key));
  });
  root.querySelectorAll('[data-i18n-value]').forEach(el => {
    const key = el.getAttribute('data-i18n-value');
    el.setAttribute('value', t(key));
  });
}

function renderNav() {
  const el = document.getElementById('nav-container') || document.getElementById('primary-nav');
  if (!el) return;
  el.innerHTML = NAV_LINKS.map(l => `<li><a href="${l.href}">${t(l.labelKey)}</a></li>`).join('');
}

function initContactPage() {
  const addr = document.getElementById('contact-address');
  const email = document.getElementById('contact-email');
  const phone = document.getElementById('contact-phone');
  if (addr) addr.textContent = CONTACT_INFO.address;
  if (email) email.textContent = CONTACT_INFO.email;
  if (phone) phone.textContent = CONTACT_INFO.phone;
}

function initLangSwitcher() {
  const select = document.getElementById('lang-select');
  if (!select) return;
  select.value = I18N.lang;
  select.addEventListener('change', async () => {
    const next = select.value === 'vi' ? 'vi' : 'en';
    localStorage.setItem('lang', next);
    await loadI18n(next);
    renderNav();
    applyTranslations();
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadI18n(getPreferredLang());
  renderNav();
  initLangSwitcher();
  applyTranslations();
  initContactPage();
});
