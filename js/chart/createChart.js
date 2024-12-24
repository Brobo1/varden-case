import { addAxes } from "./axes.js";
import { addBars } from "./bars.js";
import { getData } from "../data.js";

export async function createChart() {
  const data = await getData();

  let padding = 40;
  let barWidth = 30;

  addAxes(padding, 0);
  addBars(data, padding, barWidth);
}
