import { createChart } from "./chart/createChart.js";
import { getData } from "./data.js";
import { chartHeader } from "./chart/header/chartHeader.js";

let chart = document.getElementById("chart");
let chartData = "Endring siste måned";

const data = await getData();

let strokeColor = {
  noHover: "#6e6e6e",
  hover: "#bbbbbb",
};

let barColors = {
  Oslo: {
    fill: "#1f77b4",
    hover: "#175a8a",
    background: "#1f77b4",
  },
  Bergen: {
    fill: "#ff7f0e",
    hover: "#cc6600",
    background: "#ff7f0e",
  },
  Trondheim: {
    fill: "#2ca02c",
    hover: "#238423",
    background: "#2ca02c",
  },
  Stavanger: {
    fill: "#d62728",
    hover: "#ad2122",
    background: "#d62728",
  },
  Kristiansand: {
    fill: "#9467bd",
    hover: "#7a529b",
    background: "#9467bd",
  },
  Tromsø: {
    fill: "#8c564b",
    hover: "#73463c",
    background: "#8c564b",
  },
  Norge: {
    fill: "#e377c2",
    hover: "#c863a9",
    background: "#e377c2",
  },
};

chartHeader(data);
createChart(data, chartData, barColors, strokeColor);

// //Redraw the chart if window is resized
function onWindowResize() {
  createChart(data, chartData, barColors, strokeColor);
}
window.addEventListener("resize", onWindowResize);

// //redraw the chart if dropdown has been changed
function onDropdownChange(e) {
  if (e.target.id === "chart-dropdown") {
    chartData = e.target.value;
    createChart(data, chartData, barColors, strokeColor);
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
    nameBgColor.setAttribute("fill", "#c7c7c7");
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
    nameBgColor.setAttribute("fill", "#6b6b6b");
  }
}
chart.addEventListener("mouseout", onBarMouseOut);
