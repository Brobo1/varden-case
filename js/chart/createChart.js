import { addAxes } from "./axes.js";
import { addBars } from "./bars.js";

export async function createChart() {
  let padding = 40;
  addAxes(padding, 50);
  await addBars(padding);
}
