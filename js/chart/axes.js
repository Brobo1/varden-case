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

  let step = (dimensions.height - padding.y) / 3;
  console.log(dimensions.height - padding.y);

  console.log(step);

  for (let i = centerPoint; i <= dimensions.yAxis; i += step) {
    axisContainer.append(createYAxisLabel(i, centerPoint, scale, dataKey));
  }
  if (centerPoint !== 0)
    for (let i = centerPoint; i >= 0; i -= step) {
      axisContainer.append(createYAxisLabel(i, centerPoint, scale, dataKey));
    }

  //Add labels to yAxis
  // let values = [minMax.min, 0, minMax.max];
  // for (const value of values) {
  //   axisContainer.append(createYAxisLabel(value, centerPoint, scale));
  // }

  // crosshair();
  axisContainer.append(xAxis, yAxis);
}
