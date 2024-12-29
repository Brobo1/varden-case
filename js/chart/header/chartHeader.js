const headerDiv = document.getElementById("chart-header");

export function chartHeader(data, chartData) {
  headerDiv.innerHTML = "";

  let chartTitle = document.createElement("h2");
  chartTitle.id = "chart-title";
  chartTitle.textContent = "data";

  headerDiv.append(chartTitle);
}
