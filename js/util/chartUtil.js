//functions to handle chart logic

//clear the chart
export function clearChart(chart) {
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }
}
