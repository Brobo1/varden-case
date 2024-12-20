const chart = document.getElementById("chart");

let chartStyles = window.getComputedStyle(chart);
export function addBar(padding, barHeight, city, spacing) {
  let YAxisLen = parseInt(chartStyles.height) - parseInt(padding);
  let barStartPoint = YAxisLen - barHeight;

  let bar = `
    <rect x="${padding + spacing}" y=${barStartPoint - 1} width="30" height="${barHeight}"/>
    <text x="${padding + spacing}" y="${padding + 440}">${city}</text>
  `;
  chart.innerHTML += bar;
}

export function addBars(data, padding) {
  let spacing = 20;
  let yAxisLen = parseInt(chartStyles.height) - parseInt(padding);
  let xAxisLen = parseInt(chartStyles.width);

  for (const city in data) {
    addBar(
      padding,
      Math.abs(yAxisLen * Math.abs(data[city].dMonth)),
      city,
      spacing,
    );

    spacing += (xAxisLen - 150) / (Object.keys(data).length - 1);
  }
}
