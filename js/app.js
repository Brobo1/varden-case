import { createChart } from "./chart/createChart.js";

let chartData = "dMonth";

createChart(chartData);

window.addEventListener("resize", () => {
  // document.getElementById("chart").innerHTML = "";
  createChart(chartData);
});

window.addEventListener("mouseover", (e) => {
  let target = e.target.classList;
  if (target.contains("bar")) {
    e.target.setAttribute("stroke", "#000");
    let nameColor = document.querySelector(`.barNameColor ${target[1]}`);
    console.log(`.barNameColor ${target[1]}`);
    console.log(nameColor);
    // nameColor.setAttribute("stroke", "#000");
  }
});

window.addEventListener("mouseout", (e) => {
  let target = e.target.classList;
  if (target.contains("bar")) {
    e.target.setAttribute("stroke", "#fff");
  }
});
