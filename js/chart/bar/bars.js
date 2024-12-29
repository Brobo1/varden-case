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
  color,
  strokeColor,
) {
  const barsContainer = document.getElementById("barsContainer");
  let centerPoint = chartStyle.height - padding.y - offset;
  let barStartPoint = isNegative ? centerPoint : centerPoint - barHeight;

  const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  bar.setAttribute("class", `bar ${city}`);
  bar.setAttribute("x", (padding.x + spacing).toString());
  bar.setAttribute("y", barStartPoint.toString());
  bar.setAttribute("width", width.toString());
  bar.setAttribute("height", barHeight.toString());
  bar.setAttribute("fill", color);
  bar.setAttribute("stroke", strokeColor.noHover);
  bar.setAttribute("stroke-width", "1");

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
  barColors,
  strokeColor,
  chartData,
) {
  let spacing = 0;
  let numBars = Object.keys(data).length;
  let totalSpacing = chartStyle.xAxis - numBars * width;
  let spaceBetweenBars = totalSpacing / (numBars + 1);
  let textWrap = 0;

  let barNameXPos = 4;
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

  let wrapLineWidth = 0;
  for (const city in data) {
    spacing += spaceBetweenBars;
    console.log(wrapLineWidth);

    let value = data[city][chartData];
    let barHeight = Math.abs(value * scale) * scaleFactor;
    let isNegative = value < 0;
    let color = barColors[city];

    addBar(
      chartStyle,
      padding,
      barHeight,
      city,
      spacing,
      width,
      offset,
      isNegative,
      color.fill,
      strokeColor,
    );

    let barNameWidth =
      addBarName(
        chartStyle,
        padding,
        city,
        barNameXPos,
        color.fill,
        strokeColor,
        textWrap,
      ) + 26;

    wrapLineWidth += barNameWidth;
    barNameXPos += barNameWidth;
    if (wrapLineWidth > 300) {
      wrapLineWidth = 0;
      textWrap += 21;
      barNameXPos = 4;
    }

    spacing += width;
  }

  barNamesContainer.setAttribute(
    "x",
    `${(chartStyle.width - barNamesContainer.getBBox().width) / 2}`,
  );
}
