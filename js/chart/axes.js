import { getData } from "../data.js";

const chart = document.getElementById("chart");

export function addAxes() {
  let chartStyles = window.getComputedStyle(chart);
  console.log(chartStyles);

  let verticalAxisLine = `
    <line
      x1="0"
      y1=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2}
      x2=${parseInt(chartStyles.width) - parseInt(chartStyles.padding) * 2}
      y2=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2}
      stroke="#bbb"
      stroke-width="3"
     />`;

  let horizontalAxisLine = `
    <line
      x1="0"
      y1="0"
      x2="0"
      y2="${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2}"
      stroke="#bbb"
      stroke-width="3"
    />`;

  chart.innerHTML = verticalAxisLine + horizontalAxisLine;
}
