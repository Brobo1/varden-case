export function addBarName(chartStyle, padding, city, barNameXPos) {
  const barNamesContainer = document.getElementById("barNamesContainer");
  const barName = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text",
  );
  barName.textContent = city;
  barName.setAttribute("y", (chartStyle.height - 10).toString());
  barName.setAttribute("x", barNameXPos.toString());
  barNamesContainer.appendChild(barName);

  const textWidth = barName.getBBox().width;
  console.log(textWidth);
}
