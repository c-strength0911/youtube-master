const theme_btn = document.querySelector("#theme-button");
const moon = document.querySelector("#moon-icon");
const sun = document.querySelector("#sun-icon");
const darktext = document.querySelector("#theme-button__btext");
const whitetext = document.querySelector("#theme-button__wtext");
const lightLogo = document.querySelector("#light_logo");
const darkLogo = document.querySelector("#dark_logo");
const themeInfo = window.localStorage;

function themePainting(current) {
  if (current === "dark") {
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
    darktext.classList.add("hidden");
    whitetext.classList.remove("hidden");
    darkLogo.classList.remove("hidden");
    lightLogo.classList.add("hidden");
    document.body.classList.add("darkmode");
  } else {
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
    darktext.classList.remove("hidden");
    whitetext.classList.add("hidden");
    darkLogo.classList.add("hidden");
    lightLogo.classList.remove("hidden");
    document.body.classList.remove("darkmode");
  }
}
// 컬러테마를 바꿔주는 함수
function changeTheme() {
  if (themeInfo.getItem("theme") === "light") {
    themeInfo.setItem("theme", "dark");
    themePainting(themeInfo.getItem("theme"));
  } else {
    themeInfo.setItem("theme", "light");
    themePainting(themeInfo.getItem("theme"));
  }
}

window.addEventListener(
  "DOMContentLoaded",
  themePainting(themeInfo.getItem("theme"))
);
theme_btn.addEventListener("click", changeTheme);
