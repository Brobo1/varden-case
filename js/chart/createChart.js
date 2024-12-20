import { addAxes } from "./axes.js";
import { addBars } from "./bars.js";
import { getData } from "../data.js";

export async function createChart() {
  const data = await getData();

  let padding = 40;
  addAxes(padding, 50);
  addBars(data, padding);
}
