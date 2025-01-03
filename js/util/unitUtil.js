import { scaleFactor } from "../constants/chartConsts.js";

export function shortenValue(value) {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "M";
  } else if (value >= 1000) {
    return Math.round(value / 1000) + "K";
  } else {
    return value;
  }
}

export function valueType(dataKey) {
  if (dataKey.includes("Endring")) {
    return "%";
  } else return " NOK";
}
