export async function getData() {
  await fetch("../data/data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error("Error fetching JSON:", err));
}
