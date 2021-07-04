
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

(function () {
    if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', Theme.LIGHT);
        body.classList.add(Theme.LIGHT);
        return;
    };
})();

body.className = localStorage.getItem('theme');

function setTheme(oldThemeName, themeName) {
    localStorage.setItem('theme', themeName);
    body.classList.remove(oldThemeName);
    body.classList.add(themeName);
};

function toggleTheme() {
    if (localStorage.getItem('theme') === Theme.LIGHT) {
        setTheme(Theme.LIGHT, Theme.DARK);
        themeSwitchToggle.checked = true;
    } else {
        setTheme(Theme.DARK, Theme.LIGHT);
    };
}

(function () {
    if (localStorage.getItem('theme') === Theme.DARK) {
        themeSwitchToggle.checked = true;
        return;
    };
})();

themeSwitchToggle.addEventListener('change', toggleTheme)

