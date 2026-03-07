/**
 * Main app - Nav, Contact form helpers
 * Single source of truth for nav links
 */
const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'projects.html', label: 'Projects' },
  { href: 'blog.html', label: 'Blog' },
  { href: 'contact.html', label: 'Contact' }
];

const CONTACT_INFO = {
  address: 'HCMIU, Vietnam',
  email: 'ducanh@mail.com',
  phone: '+84 xxx xxx xxx'
};

function renderNav() {
  const el = document.getElementById('nav-container');
  if (!el) return;
  el.innerHTML = NAV_LINKS.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
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
  initContactPage();
});
