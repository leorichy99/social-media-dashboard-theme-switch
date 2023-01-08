const toggle = document.querySelector(".toggle");
const toggle_btn = document.querySelector(".toggle_btn");
const body = document.querySelector("body");
const topBg = document.querySelector(".top_theme");
const texts = document.querySelectorAll(".large_text");
const overviewHead = document.querySelector(".overview_head");
const cards = document.querySelectorAll(".card");
const mode = document.querySelector(".mode");

toggle.addEventListener("click", (e) => {
  e.target.classList.toggle("dark");
  toggle_btn.classList.toggle("left");
  body.classList.toggle("dark");
  topBg.classList.toggle("dark");
  overviewHead.classList.toggle("light_mode_color");

  texts.forEach((text) => {
    text.classList.toggle("light_mode");
  });

  cards.forEach((card) => {
    card.classList.toggle("card_light_mode");
  });

  if (toggle_btn.classList.contains("left")) {
    mode.innerHTML = "Dark Mode";
  } else {
    mode.innerHTML = "Light Mode";
  }
});
