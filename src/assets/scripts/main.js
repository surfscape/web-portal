document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("remove-before");
  const selector = document.querySelector("#theme-selector");
  const body = document.querySelector("body");

  const selectedTheme = localStorage.getItem("selected-theme") || "default";

  selector.value = selectedTheme;

  body.classList.toggle("dark_green", selectedTheme === "dark_green");
  body.classList.toggle("xp", selectedTheme === "xp");

  selector.addEventListener("change", function () {
    localStorage.setItem("selected-theme", this.value);
    body.classList.remove("dark_green", "xp");
    body.classList.add(this.value);
  });

  if (localStorage.getItem("remove-scanline") === "true") {
    checkbox.setAttribute("checked", "checked");
    body.classList.remove("scanlines");
  }

  checkbox.addEventListener("change", function (event) {
    if (event.target.checked) {
      body.classList.remove("scanlines");
      localStorage.setItem("remove-scanline", "true");
    } else {
      body.classList.add("scanlines");
      localStorage.setItem("remove-scanline", "false");
    }
  });
});
