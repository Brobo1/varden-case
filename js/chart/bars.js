const chart = document.getElementById("chart");

let chartStyles = window.getComputedStyle(chart);

export function addBar(padding, barHeight, city, spacing, width) {
  let YAxisLen = parseInt(chartStyles.height) - parseInt(padding);
  let barStartPoint = YAxisLen - barHeight;

  let bar = `
    <rect x="${padding + spacing}" y=${barStartPoint - 1} width="${width}" height="${barHeight}"/>
    <text x="${padding + spacing}" y="${padding + 440}">${city}</text>
  `;
  chart.innerHTML += bar;
}

export function addBars(data, padding, width) {
  let spacing = 0;
  let yAxisLen = parseInt(chartStyles.height) - parseInt(padding);
  let xAxisLen = parseInt(chartStyles.width) - parseInt(padding) * 2;
  let numBars = Object.keys(data).length;
  let totalSpacing = xAxisLen - numBars * width;
  let spaceBetweenBars = totalSpacing / (numBars + 1);

  for (const city in data) {
    spacing += spaceBetweenBars;
    addBar(
      padding,
      Math.abs(yAxisLen * Math.abs(data[city].dMonth)),
      city,
      spacing,
      width,
    );
    spacing += width;
  }
}
