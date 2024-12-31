import { createYAxisLabel } from "../util/axisUtil.js";
import { setSvgAttr } from "../util/svgUtil.js";
import { padding, scaleFactor } from "../constants/chartConsts.js";

const chart = document.getElementById("chart");

let coord = 0;

function onMouseMove(e, centerPoint, scale) {
  let mousePos = e.clientY;
  const yAxis = document.getElementById("yAxis").getBoundingClientRect();
  const yPos = Math.round(yAxis.bottom - mousePos);
  if (coord !== yPos && yAxis.top < mousePos && yAxis.bottom > mousePos) {
    const scaledValue = yPos;
    const axisCrosshair = createYAxisLabel(
      scaledValue.toFixed(2),
      centerPoint,
      scale,
    );
    chart.querySelector(".crosshairLabel")?.remove();
    setSvgAttr(axisCrosshair, { class: "crosshairLabel" });
    chart.appendChild(axisCrosshair);
  }
  coord = yPos;
}

export function crosshair(centerPoint, scale) {
  chart.removeEventListener("mousemove", onMouseMove);
  chart.addEventListener("mousemove", (e) =>
    onMouseMove(e, centerPoint, scale),
  );
}
