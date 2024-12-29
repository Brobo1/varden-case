const chart = document.getElementById("chart");

export function addAxes(
  chartStyle,
  padding,
  centerPoint,
  minMax,
  scale,
  scaleFactor,
) {
  let axisContainer = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  axisContainer.id = "axisContainer";
  chart.appendChild(axisContainer);
  console.log(axisContainer);
  let xAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
  xAxis.id = "xAxis";
  xAxis.setAttribute("stroke", "#bbb");
  let xAxisPos = [
    { x1: padding.x + 1 },
    { x2: chartStyle.width - padding.x },
    { y1: chartStyle.height - padding.y - centerPoint },
    { y2: chartStyle.height - padding.y - centerPoint },
  ];
  for (const attr of xAxisPos) {
    let key = Object.keys(attr)[0];
    xAxis.setAttribute(key, attr[key]);
  }

  let yAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
  yAxis.id = "xAxis";
  yAxis.setAttribute("stroke", "#bbb");
  let yAxisPos = [
    { x1: padding.x },
    { x2: padding.x },
    { y1: padding.y },
    { y2: chartStyle.height - padding.y },
  ];
  for (const attr of yAxisPos) {
    let key = Object.keys(attr)[0];
    yAxis.setAttribute(key, attr[key]);
  }

  let text = "";
  let values = [minMax.min, 0, minMax.max];
  for (const value of values) {
    text += yAxisLabels(
      value,
      chartStyle,
      padding,
      centerPoint,
      minMax,
      scale,
      scaleFactor,
    );
  }
  axisContainer.append(xAxis, yAxis);
}

function yAxisLabels(
  value,
  chartStyle,
  padding,
  centerPoint,
  minMax,
  scale,
  scaleFactor,
) {
  let scaledPos =
    chartStyle.height - padding.y - (centerPoint + value * scale * scaleFactor);

  let point = `
    <text
    x=${padding.x - 15}
    y=${scaledPos}
    dominant-baseline="central"
    text-anchor="end"
    >
    ${value}
    </text>
    <line
      id=center-axis
      x1=${padding.x - 10}
      x2=${padding.x - 1}
      y1=${scaledPos}
      y2=${scaledPos}
      stroke=#bbb
      stroke-width=1
     />

  `;

  return point;
}
