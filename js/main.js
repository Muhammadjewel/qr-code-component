const elThemeTogglerButton = document.querySelector('.theme-toggle-button');

function switchTheme () {
  const elRoot = document.documentElement
  let dataTheme = elRoot.getAttribute('data-theme');

  let newTheme = (dataTheme === 'light') ? 'dark' : 'light';

  elRoot.setAttribute('data-theme', newTheme);

  localStorage.setItem('theme', newTheme);
}

if (elThemeTogglerButton) {
  elThemeTogglerButton.addEventListener('click', switchTheme);
}
