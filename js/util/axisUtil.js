import { newSvgElem } from "./svgUtil.js";

export function createYAxisLabel(
  value,
  chartStyle,
  padding,
  centerPoint,
  scale,
  scaleFactor,
) {
  const scaledPos =
    chartStyle.height - padding.y - (centerPoint + value * scale * scaleFactor);

  const label = newSvgElem("text", {
    x: padding.x - 17,
    y: scaledPos,
    "dominant-baseline": "central",
    "text-anchor": "end",
    color: "white",
    class: "axisLabel",
  });
  label.textContent = value;

  const bBox = label.getBBox();

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
    y1: scaledPos,
    y2: scaledPos,
    stroke: "#bbb",
    "stroke-width": 1,
  });

  console.log(bBox);
  return newSvgElem("g", {}, [background, dash, label]);
}
