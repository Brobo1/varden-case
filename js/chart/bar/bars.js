import { addBarName } from "./barNames.js";

const chart = document.getElementById("chart");

function addBar(
  chartStyle,
  padding,
  barHeight,
  city,
  spacing,
  width,
  offset,
  isNegative,
) {
  const barsContainer = document.getElementById("barsContainer");
  let centerPoint = chartStyle.height - padding.y - offset;
  let barStartPoint = isNegative
    ? centerPoint + 1
    : centerPoint - barHeight - 1;

  const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  bar.setAttribute("x", (padding.x + spacing).toString());
  bar.setAttribute("y", barStartPoint.toString());
  bar.setAttribute("width", width.toString());
  bar.setAttribute("height", barHeight.toString());

  barsContainer.appendChild(bar);
}

export function addBars(
  chartStyle,
  data,
  padding,
  width,
  offset,
  scale,
  scaleFactor,
) {
  let spacing = 0;
  let numBars = Object.keys(data).length;
  let totalSpacing = chartStyle.xAxis - numBars * width;
  let spaceBetweenBars = totalSpacing / (numBars + 1);

  let barNameXPos = padding.x;
  let barNamesContainer = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  barNamesContainer.id = "barNamesContainer";
  chart.appendChild(barNamesContainer);

  let barsContainer = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  barsContainer.id = "barsContainer";
  chart.appendChild(barsContainer);

  for (const city in data) {
    spacing += spaceBetweenBars;

    let value = data[city].dMonth;
    let barHeight = Math.abs(value * scale) * scaleFactor;
    let isNegative = value < 0;

    addBar(
      chartStyle,
      padding,
      barHeight,
      city,
      spacing,
      width,
      offset,
      isNegative,
    );
    barNameXPos += addBarName(chartStyle, padding, city, barNameXPos) + 5;

    spacing += width;
  }
}
