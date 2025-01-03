import { newSvgElem } from "../../util/svgUtil.js";
import { chartStyle } from "../../util/chartUtil.js";
import { padding } from "../../constants/chartConsts.js";
import { shortenValue, valueType } from "../../util/unitUtil.js";

const chart = document.getElementById("chart");

export function barModal(data, dataKey) {
  let modal = null;

  function getAttrBind(target) {
    return function getAttr(attr) {
      return parseInt(target.getAttribute(attr));
    };
  }

  function onMouseOver(e) {
    let getAttr = getAttrBind(e.target);
    let modalWidth = 100;
    let modalHeight = 40;
    let city = e.target.classList[1];
    let unit = valueType(dataKey);
    let value = shortenValue(data[city][dataKey]);

    console.log(value);

    let yPos = getAttr("y") - modalHeight - 10;
    let xPos = getAttr("x") - (modalWidth - getAttr("width")) / 2;

    let modalText = newSvgElem("text", {
      x: xPos + 5,
      y: yPos + 20,
      fill: "white",
    });
    modalText.textContent = value + unit;

    let modalRect = newSvgElem("rect", {
      x: xPos,
      y: yPos,
      rx: 2,
      height: modalHeight,
      width: modalWidth,
      "fill-opacity": 0.5,
    });

    modal = newSvgElem("g", {}, [modalRect, modalText]);

    chart.appendChild(modal);
  }

  function onMouseOut() {
    chart.removeChild(modal);
  }

  return { onMouseOver, onMouseOut };
}
