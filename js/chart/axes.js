const chart = document.getElementById("chart");

export function addAxes(
  chartStyle,
  padding,
  centerPoint,
  minMax,
  scale,
  scaleFactor,
) {
  let xAxis = `
    <line
      id=center-axis
      x1=${padding.x + 1}
      x2=${chartStyle.width - padding.x}
      y1=${chartStyle.height - padding.y - centerPoint}
      y2=${chartStyle.height - padding.y - centerPoint}
      stroke=#bbb
      stroke-width=1
     />`;

  let yAxis = `
    <line
      id=vertical-axis
      x1=${padding.x}
      x2=${padding.x}
      y1=${padding.y}
      y2=${chartStyle.height - padding.y}
      stroke=#bbb
      stroke-width=1
    />`;

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

  chart.innerHTML = yAxis + xAxis + text;
  chart.append(text);
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
