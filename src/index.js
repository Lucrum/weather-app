import { createForecastCard } from "./forecastCard";

const apikey = "78dba40657e94103bbc183047240301";
const days = 3; // free tier limitation

const searchBox = document.querySelector("input#location");
const searchButton = document.querySelector("button#search");
const forecastContainer = document.querySelector("div#forecast-container");
const metricSelect = document.querySelector("input#metric");

async function getData(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${location}&days=${days}&aqi=no&alerts=no`
  );
  const data = response.json();
  return data;
}

async function generateForecasts(location, metric) {
  const data = await getData(location);
  const forecastCards = [];
  const forecasts = data.forecast.forecastday;

  forecasts.forEach((forecastDay) => {
    console.log(forecastDay);
    forecastCards.push(createForecastCard(forecastDay, metric));
  });

  forecastContainer.replaceChildren(...forecastCards);
}

searchButton.addEventListener("click", () => {
  console.log(metricSelect.checked);
  generateForecasts(searchBox.value, metricSelect.checked);
});
