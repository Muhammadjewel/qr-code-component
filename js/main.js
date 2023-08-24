const THEME_KEY = 'theme'

document.addEventListener('DOMContentLoaded', () => {
  // On the page load set the localStorage theme value to existing one if there is one. Otherwise, set it to 'light'
  const defaultColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  localStorage.setItem(THEME_KEY, localStorage.getItem(THEME_KEY) || defaultColorScheme);

  // Change theme to dark if the localStorage has that setting on
  if (localStorage.getItem(THEME_KEY) === 'dark') {
    document.body.classList.add('page__body--dark');
  }
})

const elThemeToggleButton = document.querySelector('.theme-toggle-button');

if (elThemeToggleButton) {
  elThemeToggleButton.addEventListener('click', function () {
    // Toggle page theme
    document.body.classList.toggle('page__body--dark');

    // Update localStorage theme value
    if (document.body.classList.contains('page__body--dark')) {
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      localStorage.setItem(THEME_KEY, 'light');
    }
  });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (e.matches) {
    document.body.classList.add('page__body--dark');
    localStorage.setItem(THEME_KEY, 'dark');
  }
});
