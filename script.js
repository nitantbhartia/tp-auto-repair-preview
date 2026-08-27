(() => {
  const root = document.documentElement;
  const menuToggle = document.querySelector('.menu-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  const languageButtons = document.querySelectorAll('[data-language]');
  const languageNodes = document.querySelectorAll('.lang');

  const setLanguage = (lang) => {
    root.lang = lang;
    root.dataset.language = lang;
    languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === lang)));
    languageNodes.forEach((node) => { node.style.display = node.classList.contains(`lang-${lang}`) ? 'inline' : 'none'; });
  };
  const setMenu = (open) => {
    if (!menuToggle || !primaryNav) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    primaryNav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  };

  languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  primaryNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('resize', () => { if (window.innerWidth > 820) setMenu(false); });
  setLanguage(root.dataset.language || 'en');

  document.querySelectorAll('.faq-list details').forEach((detail) => detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('.faq-list details').forEach((other) => { if (other !== detail) other.open = false; });
  }));

  const revealNodes = document.querySelectorAll('.reveal');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, instance) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      instance.unobserve(entry.target);
    }), { threshold: 0.12 });
    revealNodes.forEach((node) => observer.observe(node));
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
