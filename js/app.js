import { createChart } from "./chart/createChart.js";
import { getData } from "./data.js";
import { chartHeader } from "./chart/header/chartHeader.js";
import { barColors, strokeColor } from "./constants/colors.js";
import { barModal } from "./chart/bar/barModal.js";
import { barHoverColor, barNoHoverColor } from "./util/barUtil.js";

let chart = document.getElementById("chart");

const data = await getData();
let dataKey = "Endring hittil i år";
let modalHandler = barModal();

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
  }
}
document.addEventListener("change", onDropdownChange);

function onBarMouseOver(e) {
  let target = e.target.classList;

  if (target.contains("bar")) {
    barHoverColor(e);
    modalHandler.onMouseOver(e);
  }
}
chart.addEventListener("mouseover", onBarMouseOver);

function onBarMouseOut(e) {
  let target = e.target.classList;

  if (target.contains("bar")) {
    barNoHoverColor(e);
    modalHandler.onMouseOut(e);
  }
}
chart.addEventListener("mouseout", onBarMouseOut);

// chart.addEventListener("mousemove");
