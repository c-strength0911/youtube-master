const theme_btn = document.querySelector("#theme-button");
const moon = document.querySelector("#moon-icon");
const sun = document.querySelector("#sun-icon");
const darktext = document.querySelector("#theme-button__btext");
const whitetext = document.querySelector("#theme-button__wtext");

function firstLoad() {
  if (localStorage.getItem("theme") === "dark") {
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
    document.body.classList.add("darkmode");
    darktext.classList.add("hidden");
    whitetext.classList.remove("hidden");
  } else {
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
    darktext.classList.remove("hidden");
    whitetext.classList.add("hidden");
    document.body.classList.remove("darkmode");
  }
}

// 컬러테마를 바꿔주는 함수
function changeTheme() {
  if (localStorage.getItem("theme") === "light") {
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
    document.body.classList.add("darkmode");
    darktext.classList.add("hidden");
    whitetext.classList.remove("hidden");
    localStorage.setItem("theme", "dark");
  } else {
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
    darktext.classList.remove("hidden");
    whitetext.classList.add("hidden");
    document.body.classList.remove("darkmode");
    localStorage.setItem("theme", "light");
  }
}

window.addEventListener("DOMContentLoaded", firstLoad);
theme_btn.addEventListener("click", changeTheme);

// 얘들아 화이팅  😎화이팅!
