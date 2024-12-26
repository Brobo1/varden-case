const chart = document.getElementById("chart");

export function addAxes(padding, centerPoint, minMax) {
  let chartStyles = window.getComputedStyle(chart);

  let horizontalAxisLine = `
    <line
      id="horizontal-axis"
      x1="${padding.x}"
      x2=${parseInt(chartStyles.width) - parseInt(chartStyles.padding) * 2 - padding.x}
      y1=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2 - padding.y}
      y2=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2 - padding.y}
      stroke="#bbb"
      stroke-width="1"
     />`;

  let centerAxis = `
    <line
      id="center-axis"
      x1="${padding.x}"
      x2=${parseInt(chartStyles.width) - parseInt(chartStyles.padding) * 2 - padding.x}
      y1=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2 - padding.y - centerPoint}
      y2=${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2 - padding.y - centerPoint}
      stroke="#bbb"
      stroke-width="1"
     />`;

  let verticalAxisLine = `
    <line
      id="vertical-axis"
      x1="${padding.x}"
      x2="${padding.x}"
      y1="${padding.y}"
      y2="${parseInt(chartStyles.height) - parseInt(chartStyles.padding) * 2 - padding.y}"
      stroke="#bbb"
      stroke-width="1"
    />`;

  chart.innerHTML = verticalAxisLine + horizontalAxisLine + centerAxis;
}
