import { createChart } from "./chart/createChart.js";
import { getData } from "./data.js";
import { chartHeader } from "./chart/header/chartHeader.js";
import { barColors, strokeColor } from "./constants/colors.js";

let chart = document.getElementById("chart");

const data = await getData();
let dataKey = "Endring siste måned";

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
    e.target.setAttribute("stroke", strokeColor.hover);
    e.target.setAttribute("fill", barColors[target[1]].hover);

    let nameColor = document.querySelector(`.barNameColor.${target[1]}`);
    nameColor.setAttribute("stroke", strokeColor.hover);
    nameColor.setAttribute("fill", barColors[target[1]].hover);

    let nameBgColor = document.querySelector(`.barNameBg.${target[1]}`);
    nameBgColor.setAttribute("fill", barColors[target[1]].background);
  }
}
chart.addEventListener("mouseover", onBarMouseOver);

function onBarMouseOut(e) {
  let target = e.target.classList;

  if (target.contains("bar")) {
    e.target.setAttribute("stroke", strokeColor.noHover);
    e.target.setAttribute("fill", barColors[target[1]].fill);

    let nameColor = document.querySelector(`.barNameColor.${target[1]}`);
    nameColor.setAttribute("stroke", strokeColor.noHover);
    nameColor.setAttribute("fill", barColors[target[1]].fill);

    let nameBgColor = document.querySelector(`.barNameBg.${target[1]}`);
    nameBgColor.setAttribute("fill", "#9b9b9b");
  }
}
chart.addEventListener("mouseout", onBarMouseOut);
