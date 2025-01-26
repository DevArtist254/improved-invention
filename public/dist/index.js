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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/store */ \"./public/js/store/store.js\");\n/* harmony import */ var _ui_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/search */ \"./public/js/ui/search.js\");\n/* harmony import */ var _ui_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/map */ \"./public/js/ui/map.js\");\n\n\n\n\n\nconst sideBar = document?.querySelector(\".images__sec\");\nconst main = document?.getElementById(\"main\");\n\nwindow.addEventListener(\"scroll\", () => {\n  const parentRect = main.getBoundingClientRect();\n  const sidebarRect = sideBar.getBoundingClientRect();\n\n  if (parentRect.top <= 20 && parentRect.bottom - sidebarRect.height >= 20) {\n    sideBar.classList.add(\"sticky\");\n  } else {\n    sideBar.classList.remove(\"sticky\");\n  }\n})\n\nconst sideTip = document?.getElementById(\"safety_tips\");\n\nwindow.addEventListener(\"scroll\", () => {\n  const parentRect = sideBar.getBoundingClientRect();\n  const sideBarRect = sideTip.getBoundingClientRect();\n\n  if (parentRect.top <= 20 && parentRect.bottom - sideBarRect.height >= 20) {\n    sideTip.classList.add(\"sticky\");\n  } else {\n    sideTip.classList.remove(\"sticky\");\n  }\n})\n\nconst init = function () {\n  _ui_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"].handleAnimation();\n  _ui_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"].handleSearch();\n  _ui_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayMap();\n}\n\ninit();\n\nconst unsubscribe = _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(() => {\n  console.log(\"Current state:\", _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState());\n});\n\n// Dispatch some actions\n\n_store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch({ type: \"INCREMENT\" });\n_store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch({ type: \"INCREMENT\" });\n_store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch({ type: \"INCREMENT\" });\n_store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch({ type: \"DECREMENT\" });\n\n_store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch({type: 'SET_NAME', payload: 'Alice'});\n_store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch({ type: 'SET_AGE', payload: 25});\n\nunsubscribe();\n\n_store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch({ type: \"INCREMENT\" });\n\nconsole.log(\"Hello world\");\n\n\n//# sourceURL=webpack://mji/./public/js/index.js?");

/***/ }),

/***/ "./public/js/store/combineReducers.js":
/*!********************************************!*\
  !*** ./public/js/store/combineReducers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ combineReducers)\n/* harmony export */ });\nfunction combineReducers(reducers) {\n    return (state = {}, action) => {\n        const nextState = {};\n\n        for(const key in reducers) {\n            const reducer = reducers[key];\n            const previousStateForKey = state[key];\n            nextState[key] = reducer(previousStateForKey, action);\n        }\n\n        return nextState;\n    }\n}\n\n//# sourceURL=webpack://mji/./public/js/store/combineReducers.js?");

/***/ }),

/***/ "./public/js/store/counterReducer.js":
/*!*******************************************!*\
  !*** ./public/js/store/counterReducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ counterReducer)\n/* harmony export */ });\nconst initialState = {\n  count: 0,\n};\n\nfunction counterReducer(state = initialState, action) {\n  switch (action.type) {\n    case \"INCREMENT\":\n      return { ...state, count: state.count + 1 };\n    case \"DECREMENT\":\n      return { ...state, count: state.count - 1 };\n    case \"RESET\":\n      return { ...state, count: 0 };\n    default:\n      return state;\n  }\n}\n\n\n//# sourceURL=webpack://mji/./public/js/store/counterReducer.js?");

/***/ }),

/***/ "./public/js/store/createStore.js":
/*!****************************************!*\
  !*** ./public/js/store/createStore.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createStore)\n/* harmony export */ });\nfunction createStore(reducer) {\n  let state;\n  const listeners = [];\n\n  const getState = () => state;\n\n  const dispatch = (action) => {\n    state = reducer(state, action);\n\n    listeners.forEach((listener) => listener());\n  };\n\n  const subscribe = (listener) => {\n    listeners.push(listener); // Add listener to the array\n    // Return an unsubscribe function\n    return () => {\n      const index = listeners.indexOf(listener);\n      if (index !== -1) listeners.splice(index, 1);\n    };\n  };\n\n  dispatch({ type: \"@@INIT\" });\n\n  return { getState, dispatch, subscribe };\n}\n\n\n//# sourceURL=webpack://mji/./public/js/store/createStore.js?");

/***/ }),

/***/ "./public/js/store/store.js":
/*!**********************************!*\
  !*** ./public/js/store/store.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore */ \"./public/js/store/createStore.js\");\n/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combineReducers */ \"./public/js/store/combineReducers.js\");\n/* harmony import */ var _counterReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counterReducer */ \"./public/js/store/counterReducer.js\");\n/* harmony import */ var _usersReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usersReducer */ \"./public/js/store/usersReducer.js\");\n\n\n\n\n\nconst rootReducer = (0,_combineReducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    counter: _counterReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    user: _usersReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n})\n\nconst store = (0,_createStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rootReducer);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n\n//# sourceURL=webpack://mji/./public/js/store/store.js?");

/***/ }),

/***/ "./public/js/store/usersReducer.js":
/*!*****************************************!*\
  !*** ./public/js/store/usersReducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userReducer)\n/* harmony export */ });\nconst initialState = {\n    name: \"\",\n    age: 0\n}\n\nfunction userReducer(state = initialState, action) {\n    switch (action.type) {\n      case \"SET_NAME\":\n        return { ...state, name: action.payload };\n      case \"SET_AGE\":\n        return { ...state, age: action.payload };\n      default:\n        return state;\n    }\n}\n\n//# sourceURL=webpack://mji/./public/js/store/usersReducer.js?");

/***/ }),

/***/ "./public/js/ui/map.js":
/*!*****************************!*\
  !*** ./public/js/ui/map.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Location {\n  #btn = document.getElementById(\"sellersLocations\");\n  #map = document.getElementById(\"map\");\n  #locations = JSON.parse(this.#map.dataset.locations);\n\n  displayMap() {\n    this.#btn.addEventListener(\"click\", async (e) => {\n     e.preventDefault();\n     \n     console.log(this.#locations);\n\n    const map = L.map(\"map\").setView([51.505, -0.09], 13);\n\n     L.tileLayer(\"https://tile.openstreetmap.org/{z}/{x}/{y}.png\", {\n       maxZoom: 19,\n       attribution:\n         '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>',\n     }).addTo(map);\n    })\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Location());\n\n//# sourceURL=webpack://mji/./public/js/ui/map.js?");

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