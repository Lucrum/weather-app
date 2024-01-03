// temperatures
function generateTempExtremes(dayData, metric) {
  const div = document.createElement("div");
  const high = document.createElement("p");
  const low = document.createElement("p");
  if (metric) {
    high.textContent = dayData.maxtemp_c;
    low.textContent = dayData.mintemp_c;
  } else {
    high.textContent = Math.round(dayData.maxtemp_f);
    low.textContent = Math.round(dayData.mintemp_f);
  }
  div.append(high, low);

  return div;
}

// celsius is a boolean
export function createForecastCard(data, metric) {
  const dayData = data.day;
  const div = document.createElement("div");
  // date
  const date = document.createElement("h2");
  date.textContent = data.date;

  // condition
  const condition = document.createElement("h3");
  condition.textContent = dayData.condition.text;
  // if rainy, how much?

  // max temp, min temp
  const tempsDiv = document.createElement("div");
  const avg = document.createElement("p");
  if (metric) {
    avg.textContent = dayData.avgtemp_c;
  } else {
    avg.textContent = Math.round(dayData.avgtemp_f);
  }
  const extremes = generateTempExtremes(dayData, metric);
  tempsDiv.append(avg, extremes);

  // avg temp
  //

  //
  div.append(date, condition, tempsDiv);
  console.log(div);
  return div;
}

export default createForecastCard;
