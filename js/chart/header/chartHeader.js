const headerDiv = document.getElementById("chart-header");

export function chartHeader(data) {
  headerDiv.innerHTML = "";

  let dropdown = document.createElement("select");
  dropdown.id = "chart-dropdown";
  dropdown.ariaLabel = "Select data";

  for (const option in data.Oslo) {
    let dropdownOption = document.createElement("option");
    dropdownOption.textContent = option;
    dropdown.append(dropdownOption);
  }

  headerDiv.append(dropdown);
}
