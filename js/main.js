// On the page load set the localStorage theme value to existing one if there is one. Otherwise, set it to 'light'
localStorage.setItem('theme', localStorage.getItem('theme') || 'light');

// Change theme to dark if the localStorage has that setting on
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('page__body--dark');
}

const elThemeToggleButton = document.querySelector('.theme-toggle-button');

if (elThemeToggleButton) {
  elThemeToggleButton.addEventListener('click', function () {
    // Toggle page theme
    document.body.classList.toggle('page__body--dark');

    // Update localStorage theme value
    if (document.body.classList.contains('page__body--dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}
