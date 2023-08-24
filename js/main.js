const elThemeToggleButton = document.querySelector('.theme-toggle-button');

if (elThemeToggleButton) {
  elThemeToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('page__body--dark');
  });
}
