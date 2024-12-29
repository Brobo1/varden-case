export function addBarName(chartStyle, padding, city, barNameXPos) {
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
  barNameColor.setAttribute("x", barNameXPos.toString());
  barNameColor.setAttribute("y", (chartStyle.height - 20).toString());
  barNameColor.setAttribute("width", "10");
  barNameColor.setAttribute("height", "10");

  const barNameContainer = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  barNameContainer.append(barNameColor, barName);

  barNamesContainer.appendChild(barNameContainer);

  return barName.getBBox().width;
}
