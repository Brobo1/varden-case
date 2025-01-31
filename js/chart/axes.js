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
    x1: padding.xLeft + 1,
    x2: dimensions.width - padding.xRight,
    y1: dimensions.height - padding.yBottom - centerPoint,
    y2: dimensions.height - padding.yBottom - centerPoint,
    stroke: "#bbb",
  });
  xAxis.id = "xAxis";

  //Create yAxis
  const yAxis = newSvgElem("line", {
    x1: padding.xLeft,
    x2: padding.xLeft,
    y1: padding.yTop,
    y2: dimensions.height - padding.yBottom + 0.5,
    stroke: "#bbb",
  });
  yAxis.id = "yAxis";

  const stepCount = 5;
  const stepHeight =
    (dimensions.height - padding.yTop - padding.yBottom) / (stepCount - 1);

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
