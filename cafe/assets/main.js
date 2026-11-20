// Mobile nav
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');
toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden') === false;
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

// Footer year
document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));

// Front-end-only forms: browser validation, then a thank-you message (no data is sent anywhere)
document.querySelectorAll('form[data-demo-form]').forEach((form) => {
  const date = form.querySelector('input[type=date]');
  if (date) date.min = new Date().toISOString().slice(0, 10);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) return form.reportValidity();
    const name = form.querySelector('[name=name]')?.value.trim().split(' ')[0] || 'there';
    form.querySelector('[role=status]').textContent =
      `Thanks, ${name}! This is a demo form, so nothing was sent. On a live site you'd get a confirmation email.`;
    form.reset();
  });
});

// Gallery lightbox (native <dialog> handles Esc and focus)
const box = document.getElementById('lightbox');
if (box) {
  const img = box.querySelector('img');
  const cap = box.querySelector('figcaption');
  document.querySelectorAll('[data-full]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const thumb = btn.querySelector('img');
      img.src = btn.dataset.full;
      img.alt = thumb.alt;
      cap.textContent = thumb.alt;
      box.showModal();
    })
  );
  box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
}
