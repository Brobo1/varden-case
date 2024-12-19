import { getData } from "../data.js";

const chart = document.getElementById("chart");
const chartContainer = document.getElementById("chart-container");

export async function addAxes() {
  let data = await getData();
  let chartStyles = window.getComputedStyle(chart);
  console.log(chartStyles);
  let verticalAxisLine = `
    <line
      x1="0"
      y1=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2}
      x2=${parseInt(chartStyles.width) - parseInt(chartStyles.padding) * 2}
      y2=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2}
      stroke="black" stroke-width="2"/>`;
  let horizontalAxisLine = `<line x1="0" y1="0" x2="100" y2="0" stroke="black"/>`;
  chart.innerHTML = verticalAxisLine;
}
