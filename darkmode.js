const theme_btn = document.querySelector("#theme-button");
const moon = document.querySelector("#moon-icon");
const sun = document.querySelector("#sun-icon");
const darktext = document.querySelector("#theme-button__btext");
const whitetext = document.querySelector("#theme-button__wtext");

let theme_mode = "light";

// 컬러테마를 바꿔주는 함수
function changeTheme() {
  if (theme_mode === "light") {
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
    document.body.classList.add("darkmode");
    darktext.classList.add("hidden");
    whitetext.classList.remove("hidden");
    theme_mode = "dark";
  } else {
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
    darktext.classList.remove("hidden");
    whitetext.classList.add("hidden");
    document.body.classList.remove("darkmode");
    theme_mode = "light";
  }
}

theme_btn.addEventListener("click", changeTheme);
