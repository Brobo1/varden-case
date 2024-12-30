import { crosshair } from "./crosshair.js";
import { createYAxisLabel } from "../util/axisUtil.js";

const chart = document.getElementById("chart");

export function addAxes(
  chartStyle,
  padding,
  centerPoint,
  minMax,
  scale,
  scaleFactor,
) {
  let axisContainer = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  axisContainer.id = "axisContainer";
  chart.appendChild(axisContainer);

  //Create xAxis
  let xAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
  xAxis.id = "xAxis";
  xAxis.setAttribute("stroke", "#bbb");
  let xAxisPos = [
    { x1: padding.x + 1 },
    { x2: chartStyle.width - padding.x },
    { y1: chartStyle.height - padding.y - centerPoint },
    { y2: chartStyle.height - padding.y - centerPoint },
  ];
  for (const attr of xAxisPos) {
    let key = Object.keys(attr)[0];
    xAxis.setAttribute(key, attr[key]);
  }

  //Create yAxis
  let yAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
  yAxis.id = "yAxis";
  yAxis.setAttribute("stroke", "#bbb");
  let yAxisPos = [
    { x1: padding.x },
    { x2: padding.x },
    { y1: padding.y },
    { y2: chartStyle.height - padding.y + 0.5 },
  ];
  for (const attr of yAxisPos) {
    let key = Object.keys(attr)[0];
    yAxis.setAttribute(key, attr[key]);
  }

  //Add labels to yAxis
  let values = [minMax.min, 0, minMax.max];
  for (const value of values) {
    axisContainer.append(
      createYAxisLabel(
        value,
        chartStyle,
        padding,
        centerPoint,
        scale,
        scaleFactor,
      ),
    );
  }

  // crosshair();
  axisContainer.append(xAxis, yAxis);
}
