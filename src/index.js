import "./style.css";
import { home } from "./home.js";
import { menu } from "./home.js";

let buttons = document.querySelectorAll("button");
let homeButton = buttons[0];
let menuButton = buttons[1];
let aboutButton = buttons[2];

(function defaultPage(params) {
  home.build();
})();
