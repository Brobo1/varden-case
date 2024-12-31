import { addAxes } from "./axes.js";
import { addBars } from "./bar/bars.js";
import { chartHeader } from "./header/chartHeader.js";
import { crosshair } from "./crosshair.js";
import { clearChart, chartStyle } from "../util/chartUtil.js";
import { padding } from "../constants/chartConsts.js";

export function createChart(data, dataKey) {
  let barWidth = 30;

  const chart = document.getElementById("chart");
  const dimensions = chartStyle();

  //redraw the chart
  clearChart(chart);

  let minMax = { min: Infinity, max: -Infinity };

  for (const city in data) {
    minMax = {
      min: Math.min(minMax.min, data[city][dataKey]),
      max: Math.max(minMax.max, data[city][dataKey]),
    };
  }

  let range = minMax.min < 0 ? minMax.max - minMax.min : minMax.max;
  let scale = dimensions.yAxis / range;
  let offset = minMax.min < 0 ? scale * Math.abs(minMax.min) : 0;

  addBars(data, barWidth, offset, scale, dataKey);
  addAxes(offset, minMax, scale);
  // crosshair(offset, scale);
}
