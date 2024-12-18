// export function getData() {
//   const url =
//     "https://ommu1982.pythonanywhere.com/static/boligprisstatistikk.json";
//
//   fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       if (!res.ok) throw new Error("Bad response");
//       return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.error("Problem with fetch operation", err));
// }

export async function getData() {
  await fetch("../data/data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error("Error fetching JSON:", err));
}
