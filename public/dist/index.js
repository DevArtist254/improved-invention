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

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/search */ \"./public/js/ui/search.js\");\n/* harmony import */ var _ui_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/map */ \"./public/js/ui/map.js\");\n/* harmony import */ var _ui_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/results */ \"./public/js/ui/results.js\");\n/* harmony import */ var _ui_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/popup */ \"./public/js/ui/popup.js\");\n\n\n\n\n\nconst map = document.getElementById(\"map\");\n\nconst init = function () {\n  _ui_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleAnimation();\n  _ui_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleSearch();\n  if(map) {\n    _ui_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMap();\n  }\n  _ui_results__WEBPACK_IMPORTED_MODULE_2__[\"default\"].windowAnimation();\n  _ui_popup__WEBPACK_IMPORTED_MODULE_3__[\"default\"].prevBtn();\n  _ui_popup__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nextBtn();\n  _ui_popup__WEBPACK_IMPORTED_MODULE_3__[\"default\"].currentSlide();\n};\n\ninit();\n\nconsole.log(\"Hello world\");\n\n\n//# sourceURL=webpack://mji/./public/js/index.js?");

/***/ }),

/***/ "./public/js/ui/map.js":
/*!*****************************!*\
  !*** ./public/js/ui/map.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Location {\n  #btn = document.getElementById(\"userLocation\");\n  #map = document.getElementById(\"map\");\n\n  displayMap() {\n    this.#btn.addEventListener(\"click\", async (e) => {\n      e.preventDefault();\n      const locations = JSON.parse(this.#map.dataset.locations);\n\n      console.log(locations);\n\n      const map = L.map(\"map\").setView(\n        [locations[0].coordinates[1], locations[0].coordinates[0]],\n        13\n      );\n\n      L.tileLayer(\"https://tile.openstreetmap.org/{z}/{x}/{y}.png\", {\n        maxZoom: 19,\n        attribution:\n          '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>',\n      }).addTo(map);\n\n      locations.forEach(location => {\n        L.marker([location.coordinates[1], location.coordinates[0]], {\n          title: `${location.description}`,\n        }).addTo(map);\n      });\n\n      // L.popup()\n      //   .setLatLng([locations[0].coordinates[1], locations[0].coordinates[0]])\n      //   .setContent(\"<p>Hello world!<br />This is a nice popup.</p>\")\n      //   .openOn(map);\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Location());\n\n//# sourceURL=webpack://mji/./public/js/ui/map.js?");

/***/ }),

/***/ "./public/js/ui/popup.js":
/*!*******************************!*\
  !*** ./public/js/ui/popup.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Popup {\n    #slideIndex = 1;\n    #slides = document?.getElementsByClassName(\"popup__content--sliders\");\n    #prev = document?.getElementById(\"prev\");\n    #next = document?.getElementById(\"next\");\n    #tn = document?.querySelector(\".thumbnail\");\n\n    constructor() {\n        this.showSlides(this.#slideIndex);\n    }\n\n    currentSlide() {\n        this.#tn.addEventListener(\"click\", (e) => {\n            console.log(Number(e.target.id));\n            this.showSlides(this.#slideIndex = Number(e.target.id));\n        })\n    }\n\n    nextSlide(n) {\n        this.showSlides(this.#slideIndex += n);\n    }\n\n    showSlides(n) {\n        if(n > this.#slides.length) { this.#slideIndex = 1 }\n        if(n < 1) {this.#slideIndex = this.#slides.length }\n\n        for(let i = 0; i < this.#slides.length; i++) {\n            this.#slides[i].style.width = \"0\";\n        }\n\n        this.#slides[this.#slideIndex - 1].style.width = \"100%\";\n        this.#slides[this.#slideIndex - 1].style.transition = \"width 500ms ease-in-out\"\n    }\n\n    prevBtn() {\n        this.#prev.addEventListener(\"click\", () => {\n            this.nextSlide(-1);\n        })\n    }\n\n    nextBtn() {\n        this.#next.addEventListener(\"click\", () => {\n            this.nextSlide(1);\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Popup());\n\n//# sourceURL=webpack://mji/./public/js/ui/popup.js?");

/***/ }),

/***/ "./public/js/ui/results.js":
/*!*********************************!*\
  !*** ./public/js/ui/results.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nclass Results {\n  #sideBar = document?.querySelector(\".sidebar__content\");\n  #main = document?.querySelector(\".sidebar\");\n  #window = window;\n\n  windowAnimation() {\n    this.#window.addEventListener(\"scroll\", () => {\n      const parentRect = this.#main.getBoundingClientRect();\n      const sidebarRect = this.#sideBar.getBoundingClientRect();\n\n      if (\n        parentRect.top <= 20 &&\n        parentRect.bottom - sidebarRect.height >= 20\n      ) {\n        this.#sideBar.classList.add(\"sticky\");\n      } else {\n        this.#sideBar.classList.remove(\"sticky\");\n      }\n    });\n\n  }\n}\n\nconst results = new Results();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (results);\n\n\n//# sourceURL=webpack://mji/./public/js/ui/results.js?");

/***/ }),

/***/ "./public/js/ui/search.js":
/*!********************************!*\
  !*** ./public/js/ui/search.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Search {\n    #inputSearch = document.querySelector(\"#searchInput\");\n    #searchArea = document.querySelector(\".nav__search\");\n    #select = document.querySelector(\".nav__search--select\");\n    #search = document.querySelector(\"#search\");\n\n    handleSearch() {\n        this.#search.addEventListener(\"submit\", async (e) => {\n          e.preventDefault();\n\n          const formData = new FormData(search);\n\n          if (formData.get(\"category\") === \"default\") {\n            formData.delete(\"category\");\n          }\n\n          this.#inputSearch.value = \"\";\n          this.#select.value = \"default\";\n\n          try {\n            const res = await fetch(\n              `/results?${new URLSearchParams(formData).toString()}`\n            );\n\n            window.location.replace(\n              `/results?${new URLSearchParams(formData).toString()}`\n            );\n          } catch (error) {\n            console.log(error);\n          }\n        });\n    }\n\n    handleAnimation() {\n        this.#searchArea.addEventListener(\"click\", () => {\n          this.#select.style.width = \"12.5rem\";\n          this.#inputSearch.style.marginTop = \"initial\";\n        });\n\n        this.#inputSearch.addEventListener(\"focusout\", () => {\n          this.#select.style.width = \"0\";\n          this.#inputSearch.style.marginTop = \"1rem\";\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Search());\n\n//# sourceURL=webpack://mji/./public/js/ui/search.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/index.js");
/******/ 	
/******/ })()
;