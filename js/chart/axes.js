import { getData } from "../data.js";

const chart = document.getElementById("chart");

export function addAxes(padding, centerPoint) {
  let chartStyles = window.getComputedStyle(chart);

  let horizontalAxisLine = `
    <line
      id="horizontal-axis"
      x1="${padding}"
      x2=${parseInt(chartStyles.width) - parseInt(chartStyles.padding) * 2 - padding}
      y1=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2 - padding}
      y2=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2 - padding}
      stroke="#bbb"
      stroke-width="1"
     />`;
  let centerAxis = `
    <line
      id="center-axis"
      x1="${padding}"
      x2=${parseInt(chartStyles.width) - parseInt(chartStyles.padding) * 2 - padding}
      y1=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2 - padding - centerPoint}
      y2=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2 - padding - centerPoint}
      stroke="#bbb"
      stroke-width="1"
     />`;

  let verticalAxisLine = `
    <line
      id="vertical-axis"
      x1="${padding}"
      x2="${padding}"
      y1="${padding}"
      y2="${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2 - padding}"
      stroke="#bbb"
      stroke-width="1"
    />`;

  chart.innerHTML = verticalAxisLine + horizontalAxisLine + centerAxis;
}
