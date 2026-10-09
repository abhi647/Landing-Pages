document.getElementById('year').textContent = new Date().getFullYear();

const consolePanel = document.querySelector('.console');

window.addEventListener('scroll', () => {
  const offset = Math.min(window.scrollY * 0.035, 16);
  consolePanel.style.transform = `translateY(${offset}px)`;
}, { passive: true });
