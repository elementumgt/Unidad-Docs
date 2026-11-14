(() => {
  // Este script corre antes que la app y no puede importar módulos: el
  // try/catch cubre el almacenamiento bloqueado (SecurityError).
  let savedTheme;
  try {
    savedTheme = localStorage.getItem("unidad-legal-theme");
  } catch {
    savedTheme = null;
  }
  const theme = ["system", "light", "dark"].includes(savedTheme) ? savedTheme : "system";
  const resolved = theme === "system"
    ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : theme;

  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.resolvedTheme = resolved;
})();
