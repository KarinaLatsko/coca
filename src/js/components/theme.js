export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');

  themeSwitcher.addEventListener('click', () => {
    const themeTargetDataset = themeTarget.dataset;
    
    themeTargetDataset.theme == 'light'
    ? (themeTargetDataset.theme = 'dark')
    : (themeTargetDataset.theme = 'light');
  });
};