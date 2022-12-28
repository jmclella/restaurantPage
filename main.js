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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAbout() {\n    const mainContainer = document.createElement('div');\n    mainContainer.classList.add('main-container');\n\n    const aboutHeading = document.createElement('h1');\n    aboutHeading.classList.add('aboutHeading');\n    aboutHeading.textContent = 'Contact';\n\n    const chefName = document.createElement('p');\n    chefName.classList.add('chef-name');\n    chefName.textContent = 'Head Chef: Justin Mclellan';\n\n    const chefEmail = document.createElement('p');\n    chefEmail.classList.add('chef-email');\n    chefEmail.textContent = 'Email: jmclella@fandm.edu';\n\n    mainContainer.appendChild(aboutHeading);\n    mainContainer.appendChild(chefName);\n    mainContainer.appendChild(chefEmail);\n\n    return mainContainer;\n}\n\nfunction loadAbout() {\n    const main = document.querySelector('.main');\n    main.textContent = '';\n    main.appendChild(createAbout());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restaurantpage/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const mainContainer = document.createElement('div');\n    mainContainer.classList.add('main-container');\n\n    const par1 = document.createElement('p');\n    par1.classList.add('homePar');\n    par1.textContent = 'Welcome to Green Bowls!';\n    mainContainer.appendChild(par1);\n\n    const par2 = document.createElement('p');\n    par2.classList.add('homePar');\n    par2.textContent = 'Made with perfection since 2022';\n    mainContainer.appendChild(par2);\n\n    const imageContainer = document.createElement('img');\n    imageContainer.classList.add('homeImage');\n    imageContainer.src = \"images/chef.jpg\";\n\n    mainContainer.appendChild(imageContainer);\n\n    return mainContainer;\n}\n\nfunction loadHome() {\n    const main = document.querySelector('.main');\n    main.textContent = '';\n    main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const mainContainer = document.createElement('div');\n    mainContainer.classList.add('main-container');\n\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-container');\n\n    const tomatoSalad = 'images/tomatoSalad.jpg';\n    const summerSalad = 'images/summerSalad.jpg';\n    const quinoaBowl = 'images/quinoaBowl.jpg';\n    const fishBowl = 'images/fishBowl.jpg';\n    const colorfulGrainBowl = 'images/colorfulGrainBowl.jpg';\n    menuContainer.appendChild(createCard('Tomato Salad', '$14.25', tomatoSalad));\n    menuContainer.appendChild(createCard('Summer Salad', '$12.95', summerSalad));\n    menuContainer.appendChild(createCard('Quinoa Bowl', '$15.95', quinoaBowl));\n    menuContainer.appendChild(createCard('Fish Bowl', '$17.95', fishBowl));\n    menuContainer.appendChild(createCard('Grain Bowl', '$14.25', colorfulGrainBowl));\n\n    mainContainer.appendChild(menuContainer);\n\n    return mainContainer;\n};\n\nfunction createCard(item, price, imageSrc) {\n    const menuCard = document.createElement('div');\n    menuCard.classList.add('menuCard');\n\n    const menuItem = document.createElement('p');\n    menuItem.classList.add('menuItem');\n    menuItem.textContent = item;\n    menuCard.appendChild(menuItem);\n\n    const itemPrice = document.createElement('p');\n    itemPrice.classList.add('itemPrice');\n    itemPrice.textContent = price;\n    menuCard.appendChild(itemPrice);\n\n    const itemImage = document.createElement('img');\n    itemImage.classList.add('itemImage');\n    itemImage.src = imageSrc;\n    menuCard.appendChild(itemImage);\n\n    return menuCard;\n};\n\n\nfunction loadMenu() {\n    const main = document.querySelector('.main');\n    main.textContent = '';\n    main.appendChild(createMenu());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\nfunction createHeader() {\n    const pageHeader = document.createElement('header');\n\n    const headerTitle = document.createElement('h1');\n    headerTitle.textContent = \"Green Bowls\";\n\n    pageHeader.appendChild(headerTitle);\n    pageHeader.appendChild(createNav());\n\n    return pageHeader;\n};\n\nfunction createNav() {\n    const pageNav = document.createElement('nav');\n    pageNav.classList.add('page-nav');\n\n    const homeButton = document.createElement('button');\n    homeButton.classList.add('nav-element');\n    homeButton.textContent = 'Home';\n\n    homeButton.addEventListener('click', (e) => {\n        if (e.target.classList.contains('selected')) return;\n        setActiveButton(homeButton);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    const menuButton = document.createElement('button');\n    menuButton.classList.add('nav-element');\n    menuButton.textContent = 'Menu';\n\n    menuButton.addEventListener('click', (e) => {\n        if (e.target.classList.contains('selected')) return;\n        setActiveButton(menuButton);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    const aboutButton = document.createElement('button');\n    aboutButton.classList.add('nav-element');\n    aboutButton.textContent = 'About';\n\n    aboutButton.addEventListener('click', (e) => {\n        if (e.target.classList.contains('selected')) return;\n        setActiveButton(aboutButton);\n        (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    pageNav.appendChild(homeButton);\n    pageNav.appendChild(menuButton);\n    pageNav.appendChild(aboutButton);\n\n    return pageNav;\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll('.nav-element');\n\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove('selected');\n            console.log('class removed');\n        }\n    })\n\n    button.classList.add('selected');\n}\n\nfunction createMain() {\n    const pageMain = document.createElement('main');\n    pageMain.classList.add('main');\n    const mainContent = document.createElement('div');\n    mainContent.classList.add('main-container');\n\n    mainContent.textContent = 'Testing Testing';\n\n    pageMain.appendChild(mainContent);\n\n    return pageMain;\n};\n\nfunction createFooter() {\n    const pageFooter = document.createElement('footer');\n    const footerHeading = document.createElement('h3');\n    footerHeading.innerHTML = 'Copyright &copy; 2022 jmclella'\n\n    pageFooter.appendChild(footerHeading);\n\n    return pageFooter;\n};\n\nfunction genWebsite() {\n    const content = document.getElementById(\"content\");\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    setActiveButton(document.querySelector(\".nav-element\"));\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genWebsite);\n\n//# sourceURL=webpack://restaurantpage/./src/website.js?");

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