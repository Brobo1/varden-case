import { createChart } from "./chart/createChart.js";

let chartData = "dYr";

let strokeColor = {
  noHover: "#bbbbbb",
  hover: "#4b4b4b",
};

let barColors = {
  Oslo: {
    fill: "#1f77b4",
    hover: "#175a8a",
  },
  Bergen: {
    fill: "#ff7f0e",
    hover: "#cc6600",
  },
  Trondheim: {
    fill: "#2ca02c",
    hover: "#238423",
  },
  Stavanger: {
    fill: "#d62728",
    hover: "#ad2122",
  },
  Kristiansand: {
    fill: "#9467bd",
    hover: "#7a529b",
  },
  Tromsø: {
    fill: "#8c564b",
    hover: "#73463c",
  },
  Norge: {
    fill: "#e377c2",
    hover: "#c863a9",
  },
};

createChart(chartData, barColors, strokeColor);

window.addEventListener("resize", () => {
  createChart(chartData, barColors, strokeColor);
});

window.addEventListener("mouseover", (e) => {
  let target = e.target.classList;

  if (target.contains("bar")) {
    e.target.setAttribute("stroke", strokeColor.hover);
    e.target.setAttribute("fill", barColors[target[1]].hover);

    let nameColor = document.querySelector(`.barNameColor.${target[1]}`);
    nameColor.setAttribute("stroke", strokeColor.hover);
    nameColor.setAttribute("fill", barColors[target[1]].hover);
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
  }
});
