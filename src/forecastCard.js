import { format } from "date-fns";
import rainyIcon from "./images/icons/weather-pouring.svg";
import snowyIcon from "./images/icons/weather-snowy.svg";
import snowRainyIcon from "./images/icons/weather-snowy-rainy.svg";
import sunnyIcon from "./images/icons/weather-sunny.svg";

// temperatures
function generateTemperatures(dayData, metric) {
  const div = document.createElement("div");
  const avg = document.createElement("p");
  const high = document.createElement("p");
  const low = document.createElement("p");
  div.className = "temperatures";
  avg.classList.add("temperature", "average");
  high.className = "temperature";
  low.classList = "temperature";

  if (metric) {
    avg.textContent = `${dayData.avgtemp_c}°C`;
    high.textContent = `${dayData.maxtemp_c}°C`;
    low.textContent = `${dayData.mintemp_c}°C`;
  } else {
    avg.textContent = `${Math.round(dayData.avgtemp_f)}°F`;
    high.textContent = `${Math.round(dayData.maxtemp_f)}°F`;
    low.textContent = `${Math.round(dayData.mintemp_f)}°F`;
  }
  div.append(avg, high, low);

  return div;
}

function getLikeliestPrecipitation(dayData) {
  // if it will rain, or snow, or both, display icon
  let res = "sunny";

  if (dayData.daily_will_it_rain && dayData.daily_will_it_snow) {
    res = "rainysnowy";
  } else if (dayData.daily_will_it_rain) {
    res = "rainy";
  } else if (dayData.daily_will_it_snow) {
    res = "snowy";
  }

  return res;
}

function generatePrecipitation(dayData) {
  const div = document.createElement("div");
  const percentage = document.createElement("p");
  const img = document.createElement("img");
  div.className = "precipitation";
  img.className = "small-icon";

  // display the likliest precipitation
  if (dayData.daily_chance_of_snow > dayData.daily_chance_of_rain) {
    percentage.textContent = `${dayData.daily_chance_of_snow}%`;
  } else {
    percentage.textContent = `${dayData.daily_chance_of_rain}%`;
  }

  // if it will rain, or snow, or both, display icon

  const likeliestPrecipitation = getLikeliestPrecipitation(dayData);

  if (likeliestPrecipitation === "rainysnowy") {
    img.src = snowRainyIcon;
  } else if (likeliestPrecipitation === "rainy") {
    img.src = rainyIcon;
  } else if (likeliestPrecipitation === "snowy") {
    img.src = snowyIcon;
  } else {
    img.src = sunnyIcon;
  }

  div.append(percentage, img);

  return div;
}

// formats the YYYY-mm-dd date into something prettier
// e.g. Thursday, Jan 4
function generateDate(data) {
  const dateDiv = document.createElement("h2");
  const day = document.createElement("h2");
  const date = document.createElement("h3");
  const dateData = new Date(data.date);
  const dateOffset = new Date(
    dateData.getTime() - dateData.getTimezoneOffset() * -60000
  );
  day.textContent = format(dateOffset, "EEEE");
  date.textContent = format(dateOffset, "LLL d");
  dateDiv.append(day, date);
  return dateDiv;
}

// celsius is a boolean
export function createForecastCard(data, metric) {
  const dayData = data.day;
  const div = document.createElement("div");
  div.className = "forecast-card";
  div.classList.add(getLikeliestPrecipitation(dayData));
  // date
  const date = generateDate(data);

  // condition
  const condition = document.createElement("h3");
  condition.className = "condition";
  condition.textContent = dayData.condition.text;
  // precipitation
  const precipitation = generatePrecipitation(dayData);

  // max temp, min temp
  const temperatures = generateTemperatures(dayData, metric);

  div.append(date, condition, precipitation, temperatures);
  return div;
}

export default createForecastCard;
