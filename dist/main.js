/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.ts":
/*!************************!*\
  !*** ./src/contact.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var contact = document.createElement("main");
var title = document.createElement("h1");
title.textContent = "Fast Restaurant";
var phone = document.createElement("div");
phone.textContent = "(+0)111 0101 000";
var address = document.createElement("div");
address.textContent =
    "Node Street, Scribaya, East Java, 101, United States of JavaScript";
var map = document.createElement("div");
map.textContent = "placeholder for google map here...";
contact.appendChild(title);
contact.appendChild(phone);
contact.appendChild(address);
contact.appendChild(map);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),

/***/ "./src/header.ts":
/*!***********************!*\
  !*** ./src/header.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tabContact": () => (/* binding */ tabContact),
/* harmony export */   "tabHome": () => (/* binding */ tabHome),
/* harmony export */   "tabMenu": () => (/* binding */ tabMenu)
/* harmony export */ });
var header = document.createElement("header");
var tabHome = document.createElement("button");
tabHome.textContent = "Home";
var tabMenu = document.createElement("button");
tabMenu.textContent = "Menu";
var tabContact = document.createElement("button");
tabContact.textContent = "Contact";
header.appendChild(tabHome);
header.appendChild(tabMenu);
header.appendChild(tabContact);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/home.ts":
/*!*********************!*\
  !*** ./src/home.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var home = document.createElement("main");
var title = document.createElement("h1");
title.textContent = "Fast Restaurant";
var description = document.createElement("em");
description.textContent = "fast food, high quality";
home.appendChild(title);
home.appendChild(description);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/menu.ts":
/*!*********************!*\
  !*** ./src/menu.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var menu = document.createElement("main");
var name = document.createElement("h3");
name.textContent = "Pizza";
var description = document.createElement("em");
description.textContent = "best pizza you will ever eat";
menu.append(name);
menu.append(description);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.ts");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.ts");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.ts");




var content = document.getElementById("content");
content.appendChild(_header__WEBPACK_IMPORTED_MODULE_0__["default"]);
content.appendChild(_home__WEBPACK_IMPORTED_MODULE_1__["default"]);
var currentTab = _home__WEBPACK_IMPORTED_MODULE_1__["default"];
_header__WEBPACK_IMPORTED_MODULE_0__.tabHome.onclick = function () { return changeTab(_home__WEBPACK_IMPORTED_MODULE_1__["default"]); };
_header__WEBPACK_IMPORTED_MODULE_0__.tabMenu.onclick = function () { return changeTab(_menu__WEBPACK_IMPORTED_MODULE_2__["default"]); };
_header__WEBPACK_IMPORTED_MODULE_0__.tabContact.onclick = function () { return changeTab(_contact__WEBPACK_IMPORTED_MODULE_3__["default"]); };
function changeTab(tab) {
    content.removeChild(currentTab);
    content.appendChild(tab);
    currentTab = tab;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC50cyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS50cyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LnRzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJGYXN0IFJlc3RhdXJhbnRcIjtcblxuY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucGhvbmUudGV4dENvbnRlbnQgPSBcIigrMCkxMTEgMDEwMSAwMDBcIjtcblxuY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hZGRyZXNzLnRleHRDb250ZW50ID1cbiAgXCJOb2RlIFN0cmVldCwgU2NyaWJheWEsIEVhc3QgSmF2YSwgMTAxLCBVbml0ZWQgU3RhdGVzIG9mIEphdmFTY3JpcHRcIjtcblxuY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1hcC50ZXh0Q29udGVudCA9IFwicGxhY2Vob2xkZXIgZm9yIGdvb2dsZSBtYXAgaGVyZS4uLlwiO1xuXG5jb250YWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcbmNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmUpO1xuY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbmNvbnRhY3QuYXBwZW5kQ2hpbGQobWFwKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDtcbiIsImNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbmV4cG9ydCBjb25zdCB0YWJIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRhYkhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuZXhwb3J0IGNvbnN0IHRhYk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudGFiTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG5leHBvcnQgY29uc3QgdGFiQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50YWJDb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbmhlYWRlci5hcHBlbmRDaGlsZCh0YWJIb21lKTtcbmhlYWRlci5hcHBlbmRDaGlsZCh0YWJNZW51KTtcbmhlYWRlci5hcHBlbmRDaGlsZCh0YWJDb250YWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJGYXN0IFJlc3RhdXJhbnRcIjtcblxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZW1cIik7XG5kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiZmFzdCBmb29kLCBoaWdoIHF1YWxpdHlcIjtcblxuaG9tZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5ob21lLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcbiIsImNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbm5hbWUudGV4dENvbnRlbnQgPSBcIlBpenphXCI7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJlbVwiKTtcbmRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJiZXN0IHBpenphIHlvdSB3aWxsIGV2ZXIgZWF0XCI7XG5cbm1lbnUuYXBwZW5kKG5hbWUpO1xubWVudS5hcHBlbmQoZGVzY3JpcHRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaGVhZGVyLCB7IHRhYkhvbWUsIHRhYk1lbnUsIHRhYkNvbnRhY3QgfSBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuY29udGVudC5hcHBlbmRDaGlsZChob21lKTtcbmxldCBjdXJyZW50VGFiID0gaG9tZTtcblxudGFiSG9tZS5vbmNsaWNrID0gKCkgPT4gY2hhbmdlVGFiKGhvbWUpO1xudGFiTWVudS5vbmNsaWNrID0gKCkgPT4gY2hhbmdlVGFiKG1lbnUpO1xudGFiQ29udGFjdC5vbmNsaWNrID0gKCkgPT4gY2hhbmdlVGFiKGNvbnRhY3QpO1xuXG5mdW5jdGlvbiBjaGFuZ2VUYWIodGFiOiBIVE1MRWxlbWVudCkge1xuICBjb250ZW50LnJlbW92ZUNoaWxkKGN1cnJlbnRUYWIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRhYik7XG4gIGN1cnJlbnRUYWIgPSB0YWI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=