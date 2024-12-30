//functions to handle chart logic
import { padding } from "../constants/chartConsts.js";

//clear the chart
export function clearChart(chart = document.getElementById("chart")) {
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }
}

// gets the styles of the chart
export function chartStyle() {
  let chart = document.getElementById("chart");
  let chartStyles = window.getComputedStyle(chart);
  return {
    width: parseInt(chartStyles.width),
    height: parseInt(chartStyles.height),
    xAxis: parseInt(chartStyles.width) - padding.x * 2,
    yAxis: parseInt(chartStyles.height) - padding.y * 2,
  };
}
