const chart = document.getElementById("chart");

export function barModal(e) {
  function onMouseOver(e) {
    let target = e.target;
    console.log(target);
  }

  function onMouseOut(e) {
    let target = e.target;
  }

  return { onMouseOver, onMouseOut };
}
