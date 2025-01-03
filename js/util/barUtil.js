import { barColors, strokeColor } from "../constants/colors.js";

export function barHoverColor(bar) {
  let target = bar.classList;

  bar.setAttribute("stroke", strokeColor.hover);
  bar.setAttribute("fill", barColors[target[1]].hover);

  let nameColor = document.querySelector(`.barName.${target[1]}.color`);
  nameColor.setAttribute("stroke", strokeColor.hover);
  nameColor.setAttribute("fill", barColors[target[1]].hover);

  let nameBgColor = document.querySelector(`.barName.${target[1]}.background`);
  nameBgColor.setAttribute("fill", barColors[target[1]].background);
}

export function barNoHoverColor(bar) {
  let target = bar.classList;

  bar.setAttribute("stroke", strokeColor.noHover);
  bar.setAttribute("fill", barColors[target[1]].fill);

  let nameColor = document.querySelector(`.barName.${target[1]}.color`);
  nameColor.setAttribute("stroke", strokeColor.noHover);
  nameColor.setAttribute("fill", barColors[target[1]].fill);

  let nameBgColor = document.querySelector(`.barName.${target[1]}.background`);
  nameBgColor.setAttribute("fill", "#9b9b9b");
}
