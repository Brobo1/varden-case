import { createYAxisLabel } from "../util/axisUtil.js";
import { padding } from "../constants/chartConsts.js";
import { newSvgElem } from "../util/svgUtil.js";

const chart = document.getElementById("chart");

export function addAxes(chartStyle, centerPoint, minMax, scale) {
  const axisContainer = newSvgElem("svg", {}, []);
  axisContainer.id = "axisContainer";
  chart.appendChild(axisContainer);

  //Create xAxis
  const xAxis = newSvgElem("line", {
    x1: padding.x + 1,
    x2: chartStyle.width - padding.x,
    y1: chartStyle.height - padding.y - centerPoint,
    y2: chartStyle.height - padding.y - centerPoint,
    stroke: "#bbb",
  });
  xAxis.id = "xAxis";

  //Create yAxis
  const yAxis = newSvgElem("line", {
    x1: padding.x,
    x2: padding.x,
    y1: padding.y,
    y2: chartStyle.height - padding.y + 0.5,
    stroke: "#bbb",
  });
  yAxis.id = "yAxis";

  //Add labels to yAxis
  let values = [minMax.min, 0, minMax.max];
  for (const value of values) {
    axisContainer.append(createYAxisLabel(value, centerPoint, scale));
  }

  // crosshair();
  axisContainer.append(xAxis, yAxis);
}
