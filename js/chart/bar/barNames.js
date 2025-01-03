import { newSvgElem } from "../../util/svgUtil.js";
import { barColors, strokeColor } from "../../constants/colors.js";
import { chartStyle } from "../../util/chartUtil.js";

export function addBarName(city, barNameXPos, textWrap) {
  const dimensions = chartStyle();

  const barName = newSvgElem("text", {
    class: `barName ${city} text`,
    x: barNameXPos + 16,
    y: dimensions.height - 40 + textWrap,
    "font-size": 20,
  });
  barName.textContent = city;

  const barNameColor = newSvgElem("rect", {
    class: `barName ${city} color`,
    x: barNameXPos,
    y: dimensions.height - 53 + textWrap,
    width: 12,
    height: 12,
    fill: barColors[city].fill,
    stroke: strokeColor.noHover,
    "stroke-width": 1,
  });

  const barNameContainer = newSvgElem("svg", { class: `barName ${city}` }, [
    barName,
    barNameColor,
  ]);

  const barNamesContainer = document.getElementById("barNamesContainer");
  barNamesContainer.appendChild(barNameContainer);

  let barNameBBox = barNameContainer.getBBox();

  const background = newSvgElem("rect", {
    class: `barName ${city} background`,
    x: barNameBBox.x - 4,
    y: barNameBBox.y,
    width: barNameBBox.width + 8,
    height: barNameBBox.height,
    fill: "#9b9b9b",
    rx: 3,
  });
  barNameContainer.prepend(background);

  return barName.getBBox().width;
}
