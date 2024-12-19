import { getData } from "../data.js";

const chart = document.getElementById("chart");

export async function addAxes() {
  let data = await getData();

  console.log(chart);
}
