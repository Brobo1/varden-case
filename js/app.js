import { createChart } from "./chart/createChart.js";

let chartData = "dMonth";

createChart(chartData);

window.addEventListener("resize", () => {
  createChart(chartData);
});
