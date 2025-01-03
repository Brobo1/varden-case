import { barColors, strokeColor } from "../constants/colors.js";

export function barHoverColor(e) {
  let target = e.target.classList;

  e.target.setAttribute("stroke", strokeColor.hover);
  e.target.setAttribute("fill", barColors[target[1]].hover);

  let nameColor = document.querySelector(`.barNameColor.${target[1]}`);
  nameColor.setAttribute("stroke", strokeColor.hover);
  nameColor.setAttribute("fill", barColors[target[1]].hover);

  let nameBgColor = document.querySelector(`.barNameBg.${target[1]}`);
  nameBgColor.setAttribute("fill", barColors[target[1]].background);
}

export function barNoHoverColor(e) {
  let target = e.target.classList;

  e.target.setAttribute("stroke", strokeColor.noHover);
  e.target.setAttribute("fill", barColors[target[1]].fill);

  let nameColor = document.querySelector(`.barNameColor.${target[1]}`);
  nameColor.setAttribute("stroke", strokeColor.noHover);
  nameColor.setAttribute("fill", barColors[target[1]].fill);

  let nameBgColor = document.querySelector(`.barNameBg.${target[1]}`);
  nameBgColor.setAttribute("fill", "#9b9b9b");
}
