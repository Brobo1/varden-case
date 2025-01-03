import { newSvgElem } from "../../util/svgUtil.js";
import { chartStyle } from "../../util/chartUtil.js";
import { padding } from "../../constants/chartConsts.js";

const chart = document.getElementById("chart");

export function barModal() {
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

    let yPos = getAttr("y") - modalHeight - 10;
    let xPos = getAttr("x") - (modalWidth - getAttr("width")) / 2;

    console.log(xPos);
    let modalText = newSvgElem("text", {});
    modalText.textContent = "123";

    modal = newSvgElem(
      "rect",
      {
        x: xPos,
        y: yPos,
        height: modalHeight,
        width: modalWidth,
      },
      [modalText],
    );
    chart.appendChild(modal);
  }

  function onMouseOut() {
    chart.removeChild(modal);
  }

  return { onMouseOver, onMouseOut };
}
