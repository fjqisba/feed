// Restore before the page stylesheet paints. Keep IDs aligned with theme.ts.
(() => {
  const allowed = ["light", "dark", "green", "paper", "blue", "slate"];
  let theme = "light";
  try {
    const saved = localStorage.getItem("myfeeds-reader-theme-v1");
    if (allowed.includes(saved)) theme = saved;
  } catch {
    /* Reading remains available when storage is blocked. */
  }
  document.documentElement.dataset.readerTheme = theme;
})();
