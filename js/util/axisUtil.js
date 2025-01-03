import { measureSvg, newSvgElem } from "./svgUtil.js";
import { padding, scaleFactor } from "../constants/chartConsts.js";
import { chartStyle } from "./chartUtil.js";
import { shortenValue, valueType } from "./unitUtil.js";

//create labels for the y-axis
export function createYAxisLabel(value, centerPoint, scale, dataKey) {
  let dimensions = chartStyle();
  const yPos = dimensions.yAxis + padding.y - value;
  let unit = valueType(dataKey);
  let labelText = "";

  const label = newSvgElem("text", {
    x: padding.x - 17,
    y: yPos,
    "dominant-baseline": "central",
    "text-anchor": "end",
    color: "white",
    class: "axisLabel",
  });
  let rawValue = (value - centerPoint) / scale / scaleFactor;
  if (unit.includes("NOK")) {
    labelText = shortenValue(rawValue);
  } else {
    labelText = shortenValue(rawValue).toFixed(2);
  }
  label.textContent = labelText + unit;

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
    x2: padding.x,
    y1: yPos,
    y2: yPos,
    stroke: "#bbb",
    "stroke-width": 1,
  });

  return newSvgElem("g", {}, [background, dash, label]);
}
