import { newSvgElem } from "../../util/svgUtil.js";

export function addBarName(
  chartStyle,
  padding,
  city,
  barNameXPos,
  color,
  strokeColor,
  textWrap,
) {
  const barName = newSvgElem("text", {
    x: barNameXPos + 16,
    y: chartStyle.height - 40 + textWrap,
    "font-size": 20,
  });
  barName.textContent = city;

  const barNameColor = newSvgElem("rect", {
    class: `barNameColor ${city}`,
    x: barNameXPos,
    y: chartStyle.height - 53 + textWrap,
    width: 12,
    height: 12,
    fill: color,
    stroke: strokeColor.noHover,
    "stroke-width": 1,
  });

  const barNameContainer = newSvgElem("g", {}, [barName, barNameColor]);

  const barNamesContainer = document.getElementById("barNamesContainer");
  barNamesContainer.appendChild(barNameContainer);

  let barNameBBox = barNameContainer.getBBox();

  const background = newSvgElem("rect", {
    class: `barNameBg ${city}`,
    x: barNameBBox.x.toString() - 4,
    y: barNameBBox.y,
    width: barNameBBox.width + 8,
    height: barNameBBox.height,
    fill: "#9b9b9b",
    rx: 3,
  });
  barNameContainer.prepend(background);

  return barName.getBBox().width;
}
