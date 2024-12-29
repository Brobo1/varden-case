export function addBarName(
  chartStyle,
  padding,
  city,
  barNameXPos,
  color,
  strokeColor,
) {
  const barNamesContainer = document.getElementById("barNamesContainer");

  const barName = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text",
  );
  barName.textContent = city;
  barName.setAttribute("x", (barNameXPos + 13).toString());
  barName.setAttribute("y", (chartStyle.height - 10).toString());

  const barNameColor = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect",
  );
  barNameColor.setAttribute("class", `barNameColor ${city}`);
  barNameColor.setAttribute("x", barNameXPos.toString());
  barNameColor.setAttribute("y", (chartStyle.height - 20).toString());
  barNameColor.setAttribute("width", "10");
  barNameColor.setAttribute("height", "10");
  barNameColor.setAttribute("fill", color);
  barNameColor.setAttribute("stroke", strokeColor.noHover);
  barNameColor.setAttribute("stroke-width", "1");

  const barNameContainer = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  barNameContainer.append(barNameColor, barName);

  // let bBox = barNamesContainer.getBBox();
  barNamesContainer.appendChild(barNameContainer);

  let bBox = barNameContainer.getBBox();
  let background = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect",
  );
  background.setAttribute("class", `barNameBg ${city}`);
  background.setAttribute("x", (bBox.x.toString() - 4).toString());
  background.setAttribute("y", bBox.y.toString());
  background.setAttribute("width", (bBox.width + 8).toString());
  background.setAttribute("height", bBox.height.toString());
  background.setAttribute("fill", "#9b9b9b");
  background.setAttribute("rx", "3");
  barNameContainer.prepend(background);

  return barName.getBBox().width;
}
