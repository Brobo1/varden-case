import { createYAxisLabel } from "../util/axisUtil.js";
import { padding, scaleFactor } from "../constants/chartConsts.js";
import { newSvgElem } from "../util/svgUtil.js";
import { chartStyle } from "../util/chartUtil.js";

const chart = document.getElementById("chart");

export function addAxes(centerPoint, minMax, scale, dataKey) {
  const dimensions = chartStyle();
  const axisContainer = newSvgElem("svg", {}, []);
  axisContainer.id = "axisContainer";
  chart.appendChild(axisContainer);

  //Create xAxis
  const xAxis = newSvgElem("line", {
    x1: padding.x + 1,
    x2: dimensions.width - padding.x,
    y1: dimensions.height - padding.y - centerPoint,
    y2: dimensions.height - padding.y - centerPoint,
    stroke: "#bbb",
  });
  xAxis.id = "xAxis";

  //Create yAxis
  const yAxis = newSvgElem("line", {
    x1: padding.x,
    x2: padding.x,
    y1: padding.y,
    y2: dimensions.height - padding.y + 0.5,
    stroke: "#bbb",
  });
  yAxis.id = "yAxis";

  const stepCount = 5;
  const stepHeight = (dimensions.height - padding.y * 2) / (stepCount - 1);

  for (let i = 0; i < stepCount; i++) {
    const yPos = i * stepHeight;

    axisContainer.append(createYAxisLabel(yPos, centerPoint, scale, dataKey));
  }

  //Add labels to yAxis
  // let values = [minMax.min, 0, minMax.max];
  // for (const value of values) {
  //   axisContainer.append(createYAxisLabel(value, centerPoint, scale));
  // }

  // crosshair();
  axisContainer.append(xAxis, yAxis);
}
