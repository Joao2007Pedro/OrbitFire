/* ═══════════════════════════════════════════
   OrbitFire — main.js
   Front-End Design: nav scroll + scroll reveal
   Web Development: adicione slideshow, quiz, temas aqui
═══════════════════════════════════════════ */

// ── Nav scroll effect ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 60);
});

// ── Scroll reveal ──
const revealEls = document.querySelectorAll(
  '.problem-card, .tech-card, .obj-item, .audience-card, .benefit-row, .flow-step, .big-benefit'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// ── Active nav link highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}`
      ? 'var(--c-fire)'
      : '';
  });
});
// Logica de alternancia e localStorage