/**
 * @typedef {Object} CityData
 * @property {number} dMonth
 * @property {number} dMonthSeasonAdj
 * @property {string} ytd
 * @property {number} dYr
 * @property {number} d5Yr
 * @property {number} d10Yr
 * @property {string} avgMCost
 * @property {string} avgCost
 */

/**
 * @typedef {Object} Data
 * @property {CityData} Oslo
 * @property {CityData} Bergen
 * @property {CityData} Trondheim
 * @property {CityData} Stavanger
 * @property {CityData} Kristiansand
 * @property {CityData} Tromsø
 * @property {CityData} Norge
 */

export async function getData() {
  try {
    const res = await fetch("./data/data.json").then((res) => res.json());
    return transformData(res);
  } catch (err) {
    console.error("Error fetching JSON:", err);
  }
}

function transformData(originalData) {
  const result = {};

  for (const city in originalData) {
    if (originalData.hasOwnProperty(city)) {
      const originalCityData = originalData[city];
      const transformedCityData = {};

      for (const [key, value] of Object.entries(originalCityData)) {
        if (typeof value === "string") {
          transformedCityData[key] = parseFloat(value.split(" ").join(""));
        } else transformedCityData[key] = value;
      }

      result[city.split(" ")[0]] = transformedCityData;
    }
  }
  return result;
}
