import { createChart } from "./chart/createChart.js";

let chartData = "dMonth";

createChart(chartData);

window.addEventListener("resize", () => {
  // document.getElementById("chart").innerHTML = "";
  createChart(chartData);
});
