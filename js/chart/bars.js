import { getData } from "../data.js";

const chart = document.getElementById("chart");

let chartStyles = window.getComputedStyle(chart);
export function addBar(xPos, barHeight, city) {
  let YAxisLen = parseInt(chartStyles.height) - parseInt(xPos);
  let barStartPoint = YAxisLen - barHeight;

  // console.log(barStartPoint, barHeight, YAxisLen);
  let bar = `
    <rect x="${xPos}" y=${barStartPoint - 1} width="30" height="${barHeight}"/>
    <text x="${xPos}" y="${xPos + 440}">${city}</text>
  `;
  chart.innerHTML += bar;
}

export async function addBars(padding) {
  const data = await getData();

  let yAxisLen = parseInt(chartStyles.height) - parseInt(padding);
  let xAxisLen = parseInt(chartStyles.width) - parseInt(padding) * 2;

  let barWidth = 30;
  let barNum = Object.keys(data).length * barWidth;
  let currXPos = padding;
  let totalSpace = xAxisLen - barNum * barWidth;
  let spaceBetween = totalSpace / (barNum - 1);
  let spacing = 20;

  for (const city in data) {
    addBar(currXPos, Math.abs(yAxisLen * Math.abs(data[city].dMonth)), city);

    currXPos += barWidth + spaceBetween;
  }
}
