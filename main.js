/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forecastCard.js":
/*!*****************************!*\
  !*** ./src/forecastCard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createForecastCard: () => (/* binding */ createForecastCard),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// temperatures\nfunction generateTempExtremes(dayData, metric) {\n  const div = document.createElement(\"div\");\n  const high = document.createElement(\"p\");\n  const low = document.createElement(\"p\");\n  if (metric) {\n    high.textContent = dayData.maxtemp_c;\n    low.textContent = dayData.mintemp_c;\n  } else {\n    high.textContent = Math.round(dayData.maxtemp_f);\n    low.textContent = Math.round(dayData.mintemp_f);\n  }\n  div.append(high, low);\n\n  return div;\n}\n\n// celsius is a boolean\nfunction createForecastCard(data, metric) {\n  const dayData = data.day;\n  const div = document.createElement(\"div\");\n  // date\n  const date = document.createElement(\"h2\");\n  date.textContent = data.date;\n\n  // condition\n  const condition = document.createElement(\"h3\");\n  condition.textContent = dayData.condition.text;\n  // if rainy, how much?\n\n  // max temp, min temp\n  const tempsDiv = document.createElement(\"div\");\n  const avg = document.createElement(\"p\");\n  if (metric) {\n    avg.textContent = dayData.avgtemp_c;\n  } else {\n    avg.textContent = Math.round(dayData.avgtemp_f);\n  }\n  const extremes = generateTempExtremes(dayData, metric);\n  tempsDiv.append(avg, extremes);\n\n  // avg temp\n  //\n\n  //\n  div.append(date, condition, tempsDiv);\n  console.log(div);\n  return div;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForecastCard);\n\n\n//# sourceURL=webpack://webpack-template/./src/forecastCard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forecastCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecastCard */ \"./src/forecastCard.js\");\n\n\nconst apikey = \"78dba40657e94103bbc183047240301\";\nconst days = 3; // free tier limitation\n\nconst searchBox = document.querySelector(\"input#location\");\nconst searchButton = document.querySelector(\"button#search\");\nconst forecastContainer = document.querySelector(\"div#forecast-container\");\nconst metricSelect = document.querySelector(\"input#metric\");\n\nasync function getData(location) {\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${location}&days=${days}&aqi=no&alerts=no`\n  );\n  const data = response.json();\n  return data;\n}\n\nasync function generateForecasts(location, metric) {\n  const data = await getData(location);\n  const forecastCards = [];\n  const forecasts = data.forecast.forecastday;\n\n  forecasts.forEach((forecastDay) => {\n    console.log(forecastDay);\n    forecastCards.push((0,_forecastCard__WEBPACK_IMPORTED_MODULE_0__.createForecastCard)(forecastDay, metric));\n  });\n\n  forecastContainer.replaceChildren(...forecastCards);\n}\n\nsearchButton.addEventListener(\"click\", () => {\n  console.log(metricSelect.checked);\n  generateForecasts(searchBox.value, metricSelect.checked);\n});\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;