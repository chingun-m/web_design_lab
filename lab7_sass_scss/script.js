document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const contentArea = document.getElementById("contentArea");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeText = document.getElementById("themeText");
  const html = document.documentElement;

  setTimeout(() => {
    loader.style.display = "none";
    contentArea.classList.remove(".content-area--hidden");
  }, 700);

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let theme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");

  function applyTheme(t) {
    html.setAttribute("data-theme", t);
    themeText.textContent = t === "dark" ? "Light" : "Dark";
    localStorage.setItem("theme", t);
  }

  applyTheme(theme);

  themeToggleBtn.addEventListener("click", () => {
    theme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(theme);
  });
});
