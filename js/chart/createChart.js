import { addAxes } from "./axes.js";
import { addBars } from "./bar/bars.js";
import { getData } from "../data.js";

export async function createChart(chartData, barColors, strokeColor) {
  const data = await getData();

  let padding = { x: 80, y: 50 };
  let scaleFactor = 0.9;

  const chart = document.getElementById("chart");
  let chartStyles = window.getComputedStyle(chart);
  let chartStyle = {
    width: parseInt(chartStyles.width),
    height: parseInt(chartStyles.height),
    xAxis: parseInt(chartStyles.width) - padding.x * 2,
    yAxis: parseInt(chartStyles.height) - padding.y * 2,
  };
  chart.innerHTML = "";

  let minMax = { min: Infinity, max: -Infinity };

  for (const city in data) {
    minMax = {
      min: Math.min(minMax.min, data[city][chartData]),
      max: Math.max(minMax.max, data[city][chartData]),
    };
  }

  let range = minMax.min < 0 ? minMax.max - minMax.min : minMax.max;
  console.log(minMax, range);

  let scale = chartStyle.yAxis / range;
  let offset = minMax.min < 0 ? scale * Math.abs(minMax.min) : 0;

  let barWidth = 30;

  addBars(
    chartStyle,
    data,
    padding,
    barWidth,
    offset,
    scale,
    scaleFactor,
    barColors,
    strokeColor,
    chartData,
  );
  addAxes(chartStyle, padding, offset, minMax, scale, scaleFactor);
}
