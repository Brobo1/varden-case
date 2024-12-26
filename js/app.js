import { getData } from "./data.js";
import { addAxes } from "./chart/axes.js";
import { addBar } from "./chart/bars.js";
import { createChart } from "./chart/createChart.js";

let chartData = "dMonth";

createChart(chartData);

window.addEventListener("resize", () => {
  createChart(chartData);
});
