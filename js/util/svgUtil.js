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

export function setSvgAttr(elem, attr = {}) {
  for (const [key, val] of Object.entries(attr)) {
    elem.setAttribute(key, val.toString());
  }
}
