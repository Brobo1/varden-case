import { createYAxisLabel } from "../util/axisUtil.js";
import { setSvgAttr } from "../util/svgUtil.js";

const chart = document.getElementById("chart");

let coord = 0;
let prevKey = null;
export function crosshair(centerPoint, scale, dataKey) {
  function onMouseMove(e) {
    let mousePos = e.clientY;
    const yAxis = document.getElementById("yAxis").getBoundingClientRect();
    const yPos = Math.round(yAxis.bottom - mousePos);

    if (mousePos < yAxis.top || mousePos > yAxis.bottom) {
      chart.querySelector(".crosshairLabel")?.remove();
      return;
    }

    if (coord !== yPos || prevKey !== dataKey) {
      const axisCrosshair = createYAxisLabel(
        yPos.toFixed(2),
        centerPoint,
        scale,
        dataKey,
      );

      chart.querySelector(".crosshairLabel")?.remove();
      setSvgAttr(axisCrosshair, { class: "crosshairLabel" });
      chart.appendChild(axisCrosshair);
    }
    coord = yPos;
    prevKey = dataKey;
  }
  chart.removeEventListener("mousemove", onMouseMove);
  chart.addEventListener("mousemove", onMouseMove);
}
