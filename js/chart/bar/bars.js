import { addBarName } from "./barNames.js";
import { newSvgElem } from "../../util/svgUtil.js";
import { padding, scaleFactor } from "../../constants/chartConsts.js";
import { chartStyle } from "../../util/chartUtil.js";
import { barColors, strokeColor } from "../../constants/colors.js";

const chart = document.getElementById("chart");

// Create bars
function addBar(barHeight, city, spacing, width, offset, isNegative) {
  const barsContainer = document.getElementById("barsContainer");
  let centerPoint = chartStyle().height - padding.y - offset;
  let barStartPoint = isNegative ? centerPoint : centerPoint - barHeight;

  const bar = newSvgElem("rect", {
    class: `bar ${city}`,
    x: padding.x + spacing,
    y: barStartPoint,
    width: width,
    height: barHeight,
    fill: barColors[city].fill,
    stroke: strokeColor.noHover,
    "stroke-width": 1,
  });

  barsContainer.appendChild(bar);
}

// create container for bars and append bars to it
export function addBars(data, barWidth, offset, scale, chartKey) {
  let dimensions = chartStyle();
  let spacing = 0;
  let numBars = Object.keys(data).length;
  let totalSpacing = dimensions.xAxis - numBars * barWidth;
  let spaceBetweenBars = totalSpacing / (numBars + 1);
  let textWrap = 0;

  let barNameXPos = 4;

  const barNamesContainer = newSvgElem("svg", {}, []);

  barNamesContainer.id = "barNamesContainer";
  chart.appendChild(barNamesContainer);

  let barsContainer = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  barsContainer.id = "barsContainer";
  chart.appendChild(barsContainer);

  let wrapLineWidth = 0;
  for (const city in data) {
    spacing += spaceBetweenBars;

    let value = data[city][chartKey];
    let barHeight = Math.abs(value * scale) * scaleFactor;
    let isNegative = value < 0;

    addBar(barHeight, city, spacing, barWidth, offset, isNegative);

    let barNameWidth = addBarName(city, barNameXPos, textWrap) + 28;

    wrapLineWidth += barNameWidth;
    barNameXPos += barNameWidth;
    if (wrapLineWidth > 300) {
      wrapLineWidth = 0;
      textWrap += 28;
      barNameXPos = 4;
    }

    spacing += barWidth;
  }

  barNamesContainer.setAttribute(
    "x",
    `${(dimensions.width - barNamesContainer.getBBox().width) / 2}`,
  );
}
