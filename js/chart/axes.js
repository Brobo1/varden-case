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

  //Create xAxis
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

  //Create yAxis
  let yAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
  yAxis.id = "yAxis";
  yAxis.setAttribute("stroke", "#bbb");
  let yAxisPos = [
    { x1: padding.x },
    { x2: padding.x },
    { y1: padding.y },
    { y2: chartStyle.height - padding.y + 0.5 },
  ];
  for (const attr of yAxisPos) {
    let key = Object.keys(attr)[0];
    yAxis.setAttribute(key, attr[key]);
  }

  //Add labels to yAxis
  let values = [minMax.min, 0, minMax.max];
  for (const value of values) {
    axisContainer.append(
      yAxisLabels(value, chartStyle, padding, centerPoint, scale, scaleFactor),
    );
  }
  axisContainer.append(xAxis, yAxis);
}

function yAxisLabels(
  value,
  chartStyle,
  padding,
  centerPoint,
  scale,
  scaleFactor,
) {
  let scaledPos =
    chartStyle.height - padding.y - (centerPoint + value * scale * scaleFactor);

  let label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  // label.id = "yAxisLabel";
  label.setAttribute("x", (padding.x - 15).toString());
  label.setAttribute("y", scaledPos.toString());
  label.setAttribute("dominant-baseline", "central");
  label.setAttribute("text-anchor", "end");
  label.textContent = value;

  let dash = document.createElementNS("http://www.w3.org/2000/svg", "line");
  dash.setAttribute("x1", (padding.x - 10).toString());
  dash.setAttribute("x2", (padding.x - 1).toString());
  dash.setAttribute("y1", scaledPos.toString());
  dash.setAttribute("y2", scaledPos.toString());
  dash.setAttribute("stroke", "#bbb");
  dash.setAttribute("stroke-width", "1");

  let labelDash = document.createElementNS("http://www.w3.org/2000/svg", "g");
  labelDash.append(label, dash);

  return labelDash;
}
