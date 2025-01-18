/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ (() => {

eval("const inputSearch = document.querySelector(\"#searchInput\");\nconst searchArea = document.querySelector(\".nav__search\");\nconst select = document.querySelector(\".nav__search--select\");\n\nconst search = document.querySelector(\"#search\");\n\nsearchArea.addEventListener(\"click\", () => {\n  select.style.width = \"12.5rem\";\n  inputSearch.style.marginTop = \"initial\";\n});\n\ninputSearch.addEventListener(\"focusout\", () => {\n  select.style.width = \"0\";\n  inputSearch.style.marginTop = \"1rem\";\n});\n\nsearch.addEventListener(\"submit\", async (e) => {\n  e.preventDefault();\n\n  const formData = new FormData(search);\n\n  if(formData.get(\"category\") === \"default\") {\n    formData.delete(\"category\");\n  }\n\n  inputSearch.value = \"\";\n  select.value = \"default\";\n\n  try {\n    const res = await fetch(\n      `/results?${new URLSearchParams(formData).toString()}`\n    );\n\n   window.location.replace(\n     `/results?${new URLSearchParams(formData).toString()}`\n   );\n  } catch (error) {\n    console.log(error);\n  }\n})\n\nconsole.log(\"Hello world\");\n\n\n\n\n//# sourceURL=webpack://mji/./public/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/index.js"]();
/******/ 	
/******/ })()
;