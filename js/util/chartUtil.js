export function clearChart(chart) {
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }
}
