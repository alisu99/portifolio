// ─── NAVBAR scroll ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── MOBILE MENU ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ─── TERMINAL ANIMATION ───
const lines = [
  '$ python manage.py runserver',
  '> Starting development server...',
  '$ git commit -m "feat: API endpoint"',
  '> [main 4a2f91c] feat: API endpoint',
  '$ docker compose up --build',
  '> Building backend image...',
  '$ pytest --cov=api tests/',
  '> 42 passed in 0.87s ✓',
];

const output = document.getElementById('terminalOutput');
const cursor = document.getElementById('cursor');
let lineIdx = 0;
let charIdx = 0;
let typing = true;
let waiting = false;

function typeNext() {
  if (waiting) return;

  const line = lines[lineIdx];

  if (typing) {
    if (charIdx < line.length) {
      output.textContent = line.slice(0, charIdx + 1);
      charIdx++;
      setTimeout(typeNext, 38);
    } else {
      typing = false;
      waiting = true;
      setTimeout(() => {
        waiting = false;
        typing = true;
        charIdx = 0;
        lineIdx = (lineIdx + 1) % lines.length;
        output.textContent = '';
        typeNext();
      }, 1800);
    }
  }
}

// Start terminal after short delay
setTimeout(typeNext, 800);

// ─── FADE-IN on scroll ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.project-card, .stack-group, .timeline-item, .contato-card, .formacao-item, .section-title, .sobre-text'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});