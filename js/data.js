export async function getData() {
  try {
    const res = await fetch("../data/data.json");
    return await res.json();
  } catch (err) {
    console.error("Error fetching JSON:", err);
  }
}
