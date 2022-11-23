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

/***/ "./components/ondra/ondra.js":
/*!***********************************!*\
  !*** ./components/ondra/ondra.js ***!
  \***********************************/
/***/ (() => {

eval("class Ondra extends HTMLElement {\n    constructor() {\n        super();\n        this.shadow = this.attachShadow({mode: 'open'});\n    }\n\n    connectedCallback() {\n        this.render();\n    }\n\n    render() {\n        this.shadow.innerHTML = `\n            <style>\n                .circle {\n                    width: 100px;\n                    height: 100px;\n                    background-color: red;\n                    border-radius: 50%;\n                }\n            </style>\n            <div>\n                <h2>My Circle</h2>\n                <div class=\"circle\"></div>\n            </div> \n        `;\n    }\n}\n\ncustomElements.define('ondra-tag', Ondra);\n\n//# sourceURL=webpack://webcomponentvanilla/./components/ondra/ondra.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./components/ondra/ondra.js"]();
/******/ 	
/******/ })()
;