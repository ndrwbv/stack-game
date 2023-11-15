import { init } from "./init";
import { render } from "./render";
import { gameLoop } from "./gameLoop";
import "./style.css";

init();
window.addEventListener("click", gameLoop);
render();
