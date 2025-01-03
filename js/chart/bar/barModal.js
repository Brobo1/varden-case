import { measureSvg, newSvgElem, setSvgAttr } from "../../util/svgUtil.js";
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
    let getAttr = getAttrBind(e);
    let city = e.classList[1];
    let unit = valueType(dataKey);
    let value = shortenValue(data[city][dataKey]);

    let modalText = newSvgElem("text", {
      fill: "white",
    });
    modalText.textContent = value + unit;
    let textDim = measureSvg(modalText);

    let modalWidth = textDim.width + 10;
    let modalHeight = textDim.height + 6;

    console.log(value);
    let yPos = getAttr("y") - modalHeight - 5;
    let xPos = getAttr("x") - (modalWidth - getAttr("width")) / 2;

    setSvgAttr(modalText, { x: xPos + 5, y: yPos + textDim.height - 1 });

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
