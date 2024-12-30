//functions to handle svg related operations

//create new svg elements
export function newSvgElem(type, attr = {}, children = []) {
  const elem = document.createElementNS("http://www.w3.org/2000/svg", type);
  for (const [key, val] of Object.entries(attr)) {
    elem.setAttribute(key, val.toString());
  }
  for (const child of children) {
    elem.appendChild(child);
  }
  return elem;
}

//update svg attributes
export function setSvgAttr(elem, attr = {}) {
  for (const [key, val] of Object.entries(attr)) {
    elem.setAttribute(key, val.toString());
  }
}

//elements on temporary container and return measurements
export function measureSvg(elem) {
  const tempCont = document.getElementById("temp-svg");
  tempCont.appendChild(elem);
  const bBox = elem.getBBox();
  tempCont.removeChild(elem);
  return bBox;
}
