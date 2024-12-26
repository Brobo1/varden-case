import { addAxes } from "./axes.js";
import { addBars } from "./bars.js";
import { getData } from "../data.js";

export async function createChart(chartData) {
  const data = await getData();
  let minMax = { min: Infinity, max: -Infinity };

  for (const city in data) {
    minMax = {
      min: Math.min(minMax.min, data[city][chartData]),
      max: Math.max(minMax.max, data[city][chartData]),
    };
  }

  let padding = { x: 80, y: 50 };

  let barWidth = 30;

  addAxes(padding, 0, minMax);
  addBars(data, padding, barWidth);
}
