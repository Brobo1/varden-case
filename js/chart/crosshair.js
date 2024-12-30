const chart = document.getElementById("chart");

let coord = 0;

function onMouseMove(e) {
  const rect = chart.getBoundingClientRect();
  let mousePos = e.clientY;
  const yPos = Math.round(mousePos - rect.y);
  if (coord !== yPos) {
  }
  coord = yPos;
}

export function crosshair() {
  chart.removeEventListener("mousemove", onMouseMove);
  chart.addEventListener("mousemove", onMouseMove);
}
