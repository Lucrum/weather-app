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

  if (dayData.daily_will_it_rain && dayData.daily_will_it_snow) {
    img.src = snowRainyIcon;
  } else if (dayData.daily_will_it_rain) {
    img.src = rainyIcon;
  } else if (dayData.daily_will_it_snow) {
    img.src = snowyIcon;
  } else {
    img.src = sunnyIcon;
  }
  div.append(percentage, img);

  return div;
}

// celsius is a boolean
export function createForecastCard(data, metric) {
  const dayData = data.day;
  const div = document.createElement("div");
  // date
  const date = document.createElement("h2");
  div.className = "forecast-card";
  date.textContent = data.date;

  // condition
  const condition = document.createElement("h3");
  condition.textContent = dayData.condition.text;
  // precipitation
  const precipitation = generatePrecipitation(dayData);

  // max temp, min temp
  const temperatures = generateTemperatures(dayData, metric);

  div.append(date, condition, precipitation, temperatures);
  return div;
}

export default createForecastCard;
