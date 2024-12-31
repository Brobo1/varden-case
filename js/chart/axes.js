import { createYAxisLabel } from "../util/axisUtil.js";
import { padding, scaleFactor } from "../constants/chartConsts.js";
import { newSvgElem } from "../util/svgUtil.js";
import { chartStyle } from "../util/chartUtil.js";

const chart = document.getElementById("chart");

export function addAxes(centerPoint, minMax, scale) {
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

  let yAxisCenterToTop = yAxis.y2.baseVal.value - centerPoint - padding.y;

  console.log(centerPoint);

  // for (let i = Math.min(minMax.min, 0); i <= minMax.max; i += minMax.max / 5) {
  //   axisContainer.append(createYAxisLabel(i.toFixed(2), centerPoint, scale));
  // }
  //

  let step = dimensions.yAxis / 5;

  for (let i = centerPoint; i <= dimensions.yAxis; i += step) {
    axisContainer.append(createYAxisLabel(i, centerPoint, scale));
    console.log(
      `i: ${i}, step: ${step}, adjustedValue (yPos): ${i}, centerPoint: ${centerPoint}`,
    );
  }
  if (centerPoint !== 0)
    for (let i = centerPoint; i >= 0 - step; i -= step) {
      axisContainer.append(createYAxisLabel(i, centerPoint, scale));
      console.log(
        `i: ${i}, step: ${step}, adjustedValue (yPos): ${i}, centerPoint: ${centerPoint}`,
      );
    }

  //Add labels to yAxis
  // let values = [minMax.min, 0, minMax.max];
  // for (const value of values) {
  //   axisContainer.append(createYAxisLabel(value, centerPoint, scale));
  // }

  // crosshair();
  axisContainer.append(xAxis, yAxis);
}
