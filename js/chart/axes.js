const chart = document.getElementById("chart");

export function addAxes(chartStyle, padding, centerPoint) {
  let horizontalAxisLine = `
    <line
      id="horizontal-axis"
      x1="${padding.x}"
      x2=${chartStyle.width - padding.x}
      y1=${chartStyle.height - padding.y}
      y2=${chartStyle.height - padding.y}
      stroke="#bbb"
      stroke-width="1"
     />`;

  let centerAxis = `
    <line
      id="center-axis"
      x1="${padding.x}"
      x2=${chartStyle.width - padding.x}
      y1=${chartStyle.height - padding.y - centerPoint}
      y2=${chartStyle.height - padding.y - centerPoint}
      stroke="#bbb"
      stroke-width="1"
     />`;

  let verticalAxisLine = `
    <line
      id="vertical-axis"
      x1="${padding.x}"
      x2="${padding.x}"
      y1="${padding.y}"
      y2="${chartStyle.height - padding.y}"
      stroke="#bbb"
      stroke-width="1"
    />`;

  chart.innerHTML = verticalAxisLine + centerAxis;
}
