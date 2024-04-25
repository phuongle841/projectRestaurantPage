import "./style.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

let buttons = document.querySelectorAll("button");
let homeButton = buttons[0];
let menuButton = buttons[1];
let aboutButton = buttons[2];

(function defaultPage(params) {
  about.build();
})();

homeButton.addEventListener("click", () => {
  home.build();
});

menuButton.addEventListener("click", () => {
  menu.build();
});
aboutButton.addEventListener("click", () => {
  about.build();
});
