document.getElementById('year').textContent = new Date().getFullYear();

const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close');
const leadForm = document.getElementById('leadForm');
const success = document.getElementById('success');

document.querySelectorAll('[data-open]').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
  });
});

closeButton.addEventListener('click', () => {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) closeButton.click();
});

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  success.style.display = 'block';
});
