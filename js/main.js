/**
 * Main app - Nav, Contact form helpers
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

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  initMobileNav();
  initContactPage();
  updateCurrentYear();
});

