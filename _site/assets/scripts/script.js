const selector = document.querySelector("#theme-selector");
const body = document.querySelector("body");

const selectedTheme = localStorage.getItem("selected-theme") || "default";

selector.value = selectedTheme;

body.classList.toggle("dark_green", selectedTheme === "dark_green");

selector.addEventListener("change", function () {
  localStorage.setItem("selected-theme", this.value);
  body.classList.toggle("dark_green", this.value === "dark_green");
});
