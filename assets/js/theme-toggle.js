// assets/js/theme-toggle.js
document.addEventListener("DOMContentLoaded", function () {
  const sunBtn = document.querySelector('.sun-btn').parentElement;
  const moonBtn = document.querySelector('.moon-btn').parentElement;

  const setTheme = (theme) => {
    document.documentElement.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
    updateToggleButton(theme);
  };

  const updateToggleButton = (theme) => {
    if (theme === 'dark') {
      sunBtn.style.display = 'list-item';
      moonBtn.style.display = 'none';
    } else {
      sunBtn.style.display = 'none';
      moonBtn.style.display = 'list-item';
    }
  };

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  sunBtn.addEventListener('click', () => setTheme('light'));
  moonBtn.addEventListener('click', () => setTheme('dark'));

  // Apply saved theme on load
  setTheme(localStorage.getItem('theme'));
});
