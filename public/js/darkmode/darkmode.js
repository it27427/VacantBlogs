(() => {
  'use strict';

  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const setTheme = (theme) => {
    if (theme === 'auto') {
      document.documentElement.setAttribute(
        'data-bs-theme',
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      );
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };

  setTheme(getPreferredTheme());

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme');

    if (!themeSwitcher) {
      return;
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text');
    const activeThemeIcon = document.querySelector('.theme-icon-active use');
    const btnToActive = document.querySelector(
      `[data-bs-theme-value="${theme}"]`
    );
    const svgOfActiveBtn = btnToActive
      .querySelector('svg use')
      .getAttribute('href');

    document.querySelectorAll('[data-bs-theme-value]').forEach((element) => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
    });

    btnToActive.classList.add('active');
    btnToActive.setAttribute('aria-pressed', 'true');
    activeThemeIcon.setAttribute('href', svgOfActiveBtn);
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel);

    if (focus) {
      themeSwitcher.focus();
    }
  };

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme());
      }
    });

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme());

    document.querySelectorAll('[data-bs-theme-value]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value');
        setStoredTheme(theme);
        setTheme(theme);
        showActiveTheme(theme, true);

        const darkButton = toggle.nextElementSibling;
        const lightButton = toggle.previousElementSibling;

        if (theme === 'light') {
          darkButton.classList.toggle('d-none');
          toggle.classList.toggle('d-none');
        }

        if (theme === 'dark') {
          lightButton.classList.toggle('d-none');
          toggle.classList.toggle('d-none');
        }
      });
    });
  });
})();

// const buttonLight = document.querySelector('#btn-light');
// const buttonDark = document.querySelector('#btn-dark');

// function toggleDark() {
//   this.classList.add('d-none');
//   buttonDark.classList.remove('d-none');
// }

// function toggleLight() {
//   this.classList.add('d-none');
//   buttonLight.classList.remove('d-none');
// }

// buttonLight.addEventListener('click', toggleDark);
// buttonDark.addEventListener('click', toggleLight);

// const toggleButtons = document.querySelectorAll('btn-mode');

// toggleButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     const lightButton = button.getAttribute('data-bs-theme-value');
//     const darkButton = button.getAttribute('data-bs-theme-value');

//     console.log(lightButton);

// if (lightButton) {
// }
//   });
// });
