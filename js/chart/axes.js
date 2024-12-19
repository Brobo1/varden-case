import { getData } from "../data.js";

const chart = document.getElementById("chart");

export async function addAxes() {
  let data = await getData();
  let line = `<line x1="0"/>`;
  chart.append(line);
  console.log(data);
  console.log(chart);
}
