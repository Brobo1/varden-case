import { createChart } from "./chart/createChart.js";
import { getData } from "./data.js";
import { chartHeader } from "./chart/header/chartHeader.js";
import { barColors, strokeColor } from "./constants/colors.js";
import { barModal } from "./chart/bar/barModal.js";
import { barHoverColor, barNoHoverColor } from "./util/barUtil.js";
import { setSvgAttr } from "./util/svgUtil.js";

let chart = document.getElementById("chart");

const data = await getData();
let dataKey = "Endring siste måned";
let modalHandler = barModal(data, dataKey);

chartHeader(data);
createChart(data, dataKey);

// //Redraw the chart if window is resized
function onWindowResize() {
  createChart(data, dataKey);
}
window.addEventListener("resize", onWindowResize);

// //redraw the chart if dropdown has been changed
function onDropdownChange(e) {
  if (e.target.id === "chart-dropdown") {
    dataKey = e.target.value;
    createChart(data, dataKey);
    modalHandler = barModal(data, dataKey);
  }
}
document.addEventListener("change", onDropdownChange);

function onBarMouseOver(e) {
  let target = e.target.classList;
  let bar = document.querySelector(`.bar.${target[1]}`);

  if (target.contains("bar") || target.contains("barName")) {
    barHoverColor(bar);
    modalHandler.onMouseOver(bar);
  }
}
chart.addEventListener("mouseover", onBarMouseOver);

function onBarMouseOut(e) {
  let target = e.target.classList;
  let bar = document.querySelector(`.bar.${target[1]}`);

  if (target.contains("bar") || target.contains("barName")) {
    barNoHoverColor(bar);
    modalHandler.onMouseOut(bar);
  }
}
chart.addEventListener("mouseout", onBarMouseOut);

// chart.addEventListener("mousemove");
