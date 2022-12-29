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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("const arrRightLarge = document.querySelector('.poto-gallery__arrowright-large');\nconst arrLeftLarge = document.querySelector('.poto-gallery__arrowleft-large');\nconst arrRightMedium = document.querySelector('.poto-gallery__arrowright-medium');\nconst arrLeftMedium = document.querySelector('.poto-gallery__arrowleft-medium');\nconst arrRightSmall = document.querySelector('.poto-gallery__arrowright-small');\nconst arrLeftSmall = document.querySelector('.poto-gallery__arrowleft-small');\nconst slidesLarge = document.querySelectorAll('.photo-gallery__slide-large');\nconst slidesMedium = document.querySelectorAll('.photo-gallery__slide-medium');\nconst slidesSmall = document.querySelectorAll('.photo-gallery__slide-small');\nlet slideNumber;\nfunction initVisibleSlide(arrSlides, n) {\n  for (let i = 0; i < arrSlides.length; i++) {\n    arrSlides[i].classList.remove('photo-gallery__slide-visible');\n  }\n  ;\n  slideNumber = n;\n  arrSlides[slideNumber].classList.add('photo-gallery__slide-visible');\n}\n;\nfunction slideRight(arrSlides) {\n  slideNumber++;\n  if (slideNumber >= arrSlides.length) {\n    arrSlides[slideNumber - 1].classList.remove('photo-gallery__slide-visible');\n    slideNumber = 0;\n    arrSlides[slideNumber].classList.add('photo-gallery__slide-visible');\n  } else {\n    arrSlides[slideNumber - 1].classList.remove('photo-gallery__slide-visible');\n    arrSlides[slideNumber].classList.add('photo-gallery__slide-visible');\n  }\n  ;\n}\n;\nfunction slideLeft(arrSlides) {\n  if (slideNumber <= 0) {\n    arrSlides[slideNumber].classList.remove('photo-gallery__slide-visible');\n    slideNumber = arrSlides.length - 1;\n    arrSlides[slideNumber].classList.add('photo-gallery__slide-visible');\n  } else {\n    arrSlides[slideNumber].classList.remove('photo-gallery__slide-visible');\n    slideNumber--;\n    arrSlides[slideNumber].classList.add('photo-gallery__slide-visible');\n  }\n  ;\n}\n;\ninitVisibleSlide(slidesLarge, 0);\narrRightLarge.addEventListener('click', function () {\n  slideRight(slidesLarge);\n});\narrLeftLarge.addEventListener('click', function () {\n  slideLeft(slidesLarge);\n});\ninitVisibleSlide(slidesMedium, 0);\narrRightMedium.addEventListener('click', function () {\n  slideRight(slidesMedium);\n});\narrLeftMedium.addEventListener('click', function () {\n  slideLeft(slidesMedium);\n});\ninitVisibleSlide(slidesSmall, 0);\narrRightSmall.addEventListener('click', function () {\n  slideRight(slidesSmall);\n});\narrLeftSmall.addEventListener('click', function () {\n  slideLeft(slidesSmall);\n});\nconst mobileMenu = document.querySelector('.mobile-menu');\nconst mobileMenuBtn = document.querySelector('.mobile-menu__button');\nconst mobileMenuNav = document.querySelector('.mobile-menu__nav');\nmobileMenuBtn.addEventListener('click', function () {\n  mobileMenu.classList.toggle('mobile-menu-active');\n  mobileMenuBtn.classList.toggle('mobile-menu__button-active');\n  mobileMenuNav.classList.toggle('mobile-menu__nav-active');\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/scss/main.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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