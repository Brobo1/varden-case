import { addAxes } from "./axes.js";
import { addBars } from "./bar/bars.js";
import { chartHeader } from "./header/chartHeader.js";
import { crosshair } from "./crosshair.js";

export function createChart(data, chartData, barColors, strokeColor) {
  let padding = { x: 100, y: 70 };
  let scaleFactor = 0.9;

  const chart = document.getElementById("chart");
  let chartStyles = window.getComputedStyle(chart);
  let chartStyle = {
    width: parseInt(chartStyles.width),
    height: parseInt(chartStyles.height),
    xAxis: parseInt(chartStyles.width) - padding.x * 2,
    yAxis: parseInt(chartStyles.height) - padding.y * 2,
  };

  //redraw the chart
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }

  let eventCover = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect",
  );
  eventCover.setAttribute("x", chartStyle.xAxis.toString());
  eventCover.setAttribute("y", chartStyle.yAxis.toString());
  eventCover.setAttribute("width", chartStyle.width.toString());
  eventCover.setAttribute("height", chartStyle.height.toString());

  let minMax = { min: Infinity, max: -Infinity };

  for (const city in data) {
    minMax = {
      min: Math.min(minMax.min, data[city][chartData]),
      max: Math.max(minMax.max, data[city][chartData]),
    };
  }

  let range = minMax.min < 0 ? minMax.max - minMax.min : minMax.max;

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
