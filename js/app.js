import { createChart } from "./chart/createChart.js";
import { getData } from "./data.js";
import { chartHeader } from "./chart/header/chartHeader.js";

let chartData = "Endring siste måned";

const data = await getData();

let strokeColor = {
  noHover: "#bbbbbb",
  hover: "#4b4b4b",
};

let barColors = {
  Oslo: {
    fill: "#1f77b4",
    hover: "#175a8a",
    background: "rgba(31,119,180,0.6)",
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

//Redraw the chart if window is resized
window.addEventListener("resize", () => {
  createChart(data, chartData, barColors, strokeColor);
});

//redraw the chart if dropdown has been changed
document.addEventListener("change", (e) => {
  if (e.target.id === "chart-dropdown") {
    chartData = e.target.value;
    createChart(data, chartData, barColors, strokeColor);
  }
});

window.addEventListener("mouseover", (e) => {
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
});

window.addEventListener("mouseout", (e) => {
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
});
