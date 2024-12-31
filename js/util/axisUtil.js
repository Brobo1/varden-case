import { measureSvg, newSvgElem } from "./svgUtil.js";
import { padding, scaleFactor } from "../constants/chartConsts.js";
import { chartStyle } from "./chartUtil.js";

//create labels for the y-axis
export function createYAxisLabel(value, centerPoint, scale) {
  let dimensions = chartStyle();

  const scaledPos =
    dimensions.height - padding.y - (centerPoint + value * scale * scaleFactor);

  const label = newSvgElem("text", {
    x: padding.x - 17,
    y: dimensions.height - padding.y - value,
    "dominant-baseline": "central",
    "text-anchor": "end",
    color: "white",
    class: "axisLabel",
  });
  label.textContent = ((value - centerPoint) / scale / scaleFactor).toFixed(2);

  const bBox = measureSvg(label);

  const background = newSvgElem("rect", {
    x: bBox.x - 4,
    y: bBox.y - 2,
    width: bBox.width + 8,
    height: bBox.height + 4,
    fill: "#9f9f9f",
    rx: 3,
  });

  const dash = newSvgElem("line", {
    x1: padding.x - 10,
    x2: padding.x - 1,
    y1: dimensions.height - padding.y - value,
    y2: dimensions.height - padding.y - value,
    stroke: "#bbb",
    "stroke-width": 1,
  });
  console.log(
    `Text value: ${label.textContent}, pixel position: ${dimensions.height - padding.y - value}`,
  );
  return newSvgElem("g", {}, [background, dash, label]);
}
