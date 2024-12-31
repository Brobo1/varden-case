const headerDiv = document.getElementById("chart-header");

export function chartHeader(data) {
  headerDiv.innerHTML = "";

  let dropdown = document.createElement("select");
  dropdown.id = "chart-dropdown";
  dropdown.ariaLabel = "Select data";

  for (const option in data.Oslo) {
    let dropdownOption = document.createElement("option");
    dropdownOption.className = "chart-dropdown-option";
    dropdownOption.textContent = option;
    dropdown.append(dropdownOption);
  }

  const title = document.createElement("h2");
  title.id = "chartTitle";
  title.textContent = "Boligpris: ";

  headerDiv.append(title, dropdown);
}
