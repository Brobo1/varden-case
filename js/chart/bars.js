const chart = document.getElementById("chart");

export function addBar(
  chartStyle,
  padding,
  barHeight,
  city,
  spacing,
  width,
  offset,
  isNegative,
) {
  let centerPoint = chartStyle.height - padding.y - offset;
  let barStartPoint = isNegative
    ? centerPoint + 1
    : centerPoint - barHeight - 1;

  let bar = `
    <rect
      x=${padding.x + spacing}
      y=${barStartPoint}
      width=${width}
      height=${barHeight}
    />

    <text
      x=${padding.x + spacing}
      y=${padding.y + 440}
            transform="rotate(90, ${padding.x + spacing}, ${padding.y + 420})"
      text-anchor="middle"
      >
      ${city}
    </text>
  `;
  chart.innerHTML += bar;
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

    spacing += width;
  }
}
