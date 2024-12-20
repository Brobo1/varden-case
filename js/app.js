import { getData } from "./data.js";
import { addAxes } from "./chart/axes.js";

addAxes();

window.addEventListener("resize", () => {
  addAxes();
});
