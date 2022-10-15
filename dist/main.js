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

/***/ "./src/basicLightbox.js":
/*!******************************!*\
  !*** ./src/basicLightbox.js ***!
  \******************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n!function (e) {\n  if (\"object\" == ( false ? 0 : _typeof(exports)) && \"undefined\" != \"object\") module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}\n}(function () {\n  return function e(n, t, o) {\n    function r(c, u) {\n      if (!t[c]) {\n        if (!n[c]) {\n          var s = undefined;\n          if (!u && s) return require(c, !0);\n          if (i) return i(c, !0);\n          var a = new Error(\"Cannot find module '\" + c + \"'\");\n          throw a.code = \"MODULE_NOT_FOUND\", a;\n        }\n        var l = t[c] = {\n          exports: {}\n        };\n        n[c][0].call(l.exports, function (e) {\n          return r(n[c][1][e] || e);\n        }, l, l.exports, e, n, t, o);\n      }\n      return t[c].exports;\n    }\n    for (var i = undefined, c = 0; c < o.length; c++) {\n      r(o[c]);\n    }\n    return r;\n  }({\n    1: [function (e, n, t) {\n      \"use strict\";\n\n      Object.defineProperty(t, \"__esModule\", {\n        value: !0\n      }), t.create = t.visible = void 0;\n      var o = function o(e) {\n          var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],\n            t = document.createElement(\"div\");\n          return t.innerHTML = e.trim(), !0 === n ? t.children : t.firstChild;\n        },\n        r = function r(e, n) {\n          var t = e.children;\n          return 1 === t.length && t[0].tagName === n;\n        },\n        i = function i(e) {\n          return null != (e = e || document.querySelector(\".basicLightbox\")) && !0 === e.ownerDocument.body.contains(e);\n        };\n      t.visible = i;\n      t.create = function (e, n) {\n        var t = function (e, n) {\n            var t = o('\\n\\t\\t<div class=\"basicLightbox '.concat(n.className, '\">\\n\\t\\t\\t<div class=\"basicLightbox__placeholder\" role=\"dialog\"></div>\\n\\t\\t</div>\\n\\t')),\n              i = t.querySelector(\".basicLightbox__placeholder\");\n            e.forEach(function (e) {\n              return i.appendChild(e);\n            });\n            var c = r(i, \"IMG\"),\n              u = r(i, \"VIDEO\"),\n              s = r(i, \"IFRAME\");\n            return !0 === c && t.classList.add(\"basicLightbox--img\"), !0 === u && t.classList.add(\"basicLightbox--video\"), !0 === s && t.classList.add(\"basicLightbox--iframe\"), t;\n          }(e = function (e) {\n            var n = \"string\" == typeof e,\n              t = e instanceof HTMLElement == !0;\n            if (!1 === n && !1 === t) throw new Error(\"Content must be a DOM element/node or string\");\n            return !0 === n ? Array.from(o(e, !0)) : \"TEMPLATE\" === e.tagName ? [e.content.cloneNode(!0)] : Array.from(e.children);\n          }(e), n = function () {\n            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};\n            if (null == (e = Object.assign({}, e)).closable && (e.closable = !0), null == e.className && (e.className = \"\"), null == e.onShow && (e.onShow = function () {}), null == e.onClose && (e.onClose = function () {}), \"boolean\" != typeof e.closable) throw new Error(\"Property `closable` must be a boolean\");\n            if (\"string\" != typeof e.className) throw new Error(\"Property `className` must be a string\");\n            if (\"function\" != typeof e.onShow) throw new Error(\"Property `onShow` must be a function\");\n            if (\"function\" != typeof e.onClose) throw new Error(\"Property `onClose` must be a function\");\n            return e;\n          }(n)),\n          c = function c(e) {\n            return !1 !== n.onClose(u) && function (e, n) {\n              return e.classList.remove(\"basicLightbox--visible\"), setTimeout(function () {\n                return !1 === i(e) || e.parentElement.removeChild(e), n();\n              }, 410), !0;\n            }(t, function () {\n              if (\"function\" == typeof e) return e(u);\n            });\n          };\n        !0 === n.closable && t.addEventListener(\"click\", function (e) {\n          e.target === t && c();\n        });\n        var u = {\n          element: function element() {\n            return t;\n          },\n          visible: function visible() {\n            return i(t);\n          },\n          show: function show(e) {\n            return !1 !== n.onShow(u) && function (e, n) {\n              return document.body.appendChild(e), setTimeout(function () {\n                requestAnimationFrame(function () {\n                  return e.classList.add(\"basicLightbox--visible\"), n();\n                });\n              }, 10), !0;\n            }(t, function () {\n              if (\"function\" == typeof e) return e(u);\n            });\n          },\n          close: c\n        };\n        return u;\n      };\n    }, {}]\n  }, {}, [1])(1);\n});\n\n//# sourceURL=webpack://goit-recruitment-task-js/./src/basicLightbox.js?");

/***/ }),

/***/ "./src/first-task.js":
/*!***************************!*\
  !*** ./src/first-task.js ***!
  \***************************/
/***/ (() => {

eval("function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar StringBuilder = /*#__PURE__*/_createClass(function StringBuilder() {\n  var baseString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  _classCallCheck(this, StringBuilder);\n  this.value = baseString;\n});\n;\nStringBuilder.prototype.append = function (str) {\n  this.value = this.value + str;\n  return this;\n};\nStringBuilder.prototype.prepend = function (str) {\n  this.value = str + this.value;\n  return this;\n};\nStringBuilder.prototype.pad = function (str) {\n  this.value = str + this.value + str;\n  return this;\n};\nvar builder = new StringBuilder(\".\");\nbuilder.append(\"^\").prepend(\"^\").pad(\"=\");\n\n//add result to dom\nvar resultButton = document.querySelector('#result');\nvar addResultTodDOM = function addResultTodDOM() {\n  var resultDiv = document.createElement('div');\n  resultDiv.textContent = builder.value;\n  resultDiv.style = \"margin:30px 0; font-size: 24px;\";\n  document.querySelector('.main-container').appendChild(resultDiv);\n};\nif (resultButton) {\n  console.log(builder);\n  resultButton.addEventListener('click', addResultTodDOM);\n}\n\n//# sourceURL=webpack://goit-recruitment-task-js/./src/first-task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.scss */ \"./style/main.scss\");\n/* harmony import */ var _first_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-task */ \"./src/first-task.js\");\n/* harmony import */ var _first_task__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_first_task__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _second_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second-task */ \"./src/second-task.js\");\n/* harmony import */ var _second_task__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_second_task__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _third_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./third-task */ \"./src/third-task.js\");\n/* harmony import */ var _third_task__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_third_task__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _basicLightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basicLightbox */ \"./src/basicLightbox.js\");\n/* harmony import */ var _basicLightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_basicLightbox__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://goit-recruitment-task-js/./src/index.js?");

/***/ }),

/***/ "./src/second-task.js":
/*!****************************!*\
  !*** ./src/second-task.js ***!
  \****************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nvar input = document.querySelector('.js-input');\nvar boxesContainer = document.querySelector('#boxes');\nvar controls = document.querySelector('#controls');\nvar getRandomValue = function getRandomValue() {\n  return Math.ceil(Math.random() * 255);\n};\nvar getRandomColor = function getRandomColor() {\n  return \"rgb(\".concat(getRandomValue(), \", \").concat(getRandomValue(), \", \").concat(getRandomValue(), \")\");\n};\nvar createBoxes = function createBoxes(amount) {\n  for (var i = 0; i < amount; i += 1) {\n    var singleBox = document.createElement('div');\n    singleBox.style = \"\\n        background: \".concat(getRandomColor(), \"; \\n        width: \").concat(30 + i * 10, \"px;\\n        height: \").concat(30 + i * 10, \"px;\\n        margin: 10px auto;\");\n    boxesContainer.append(singleBox);\n  }\n};\nvar destroyBoxes = function destroyBoxes() {\n  return _toConsumableArray(boxesContainer.children).forEach(function (elem) {\n    return elem.remove();\n  });\n};\n\n// eventListners\nvar handlerButton = function handlerButton(e) {\n  if (e.target.dataset.action === \"create\" && boxesContainer.children.length === 0 && input.valueAsNumber < 101) {\n    var amount = input.valueAsNumber;\n    createBoxes(amount);\n    input.value = \"\";\n  } else if (e.target.dataset.action === \"destroy\") {\n    destroyBoxes();\n    input.value = \"\";\n  }\n};\nif (controls) {\n  controls.addEventListener(\"click\", handlerButton);\n}\n\n//# sourceURL=webpack://goit-recruitment-task-js/./src/second-task.js?");

/***/ }),

/***/ "./src/third-task.js":
/*!***************************!*\
  !*** ./src/third-task.js ***!
  \***************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n//prepare html form\nvar mainContainer = document.querySelector('.main-container.task-3');\nvar form = document.createElement('form');\nform.id = \"search-form\";\nif (mainContainer) {\n  mainContainer.append(form);\n}\nvar input = document.createElement('input');\ninput.type = \"text\";\ninput.name = \"query\";\ninput.autocomplete = \"off\";\ninput.placeholder = \"Search images...\";\nform.append(input);\n\n// list of images\nvar list = document.createElement(\"ul\");\nlist.style = \"list-style: none; width: 800px; margin: 0 auto; padding-top: 46px;\";\n\n// =item wrapper\nvar getItem = function getItem(imgSmallUrl, imgLargeUrl, imgDescr) {\n  var item = document.createElement(\"li\");\n  var link = document.createElement(\"a\");\n  link.href = \"\".concat(imgLargeUrl);\n  link.style = \"pointer-events: none;\";\n  item.append(link);\n  var img = document.createElement('img');\n  img.src = \"\".concat(imgSmallUrl);\n  img.alt = \"\".concat(imgDescr);\n  img.dataset.src = \"\".concat(imgLargeUrl);\n  link.append(img);\n  return item;\n};\nvar getImgData = function getImgData(data) {\n  var imgData = _toConsumableArray(data).map(function (el) {\n    return {\n      smallImg: el.webformatURL,\n      largeImg: el.largeImageURL,\n      descr: \"\".concat(el.type, \" \").concat(_toConsumableArray(el.tags.split(\",\")).find(function (el) {\n        return el.split(\" \").length > 1;\n      }) ? _toConsumableArray(el.tags.split(\",\")).find(function (el) {\n        return el.split(\" \").length > 1;\n      }).trim() : el.tags.split(\",\")[0].trim())\n    };\n  });\n  return imgData;\n};\n\n// api call\nvar URL = \"https://pixabay.com/api/?key=13965574-3ae6669f35304ffc6cddc1b72\";\nvar query = \"\";\nvar page = 0;\nvar per_page = 20;\nvar node;\nvar fetchPictureList = function fetchPictureList(query, page, per_page) {\n  if (query) {\n    fetch(\"\".concat(URL, \"&q=\").concat(query, \"&page=\").concat(page, \"&per_page=\").concat(per_page)).then(function (res) {\n      return res.json();\n    }).then(function (query) {\n      return query.hits;\n    }).then(function (data) {\n      return getImgData(data);\n    }).then(function (imgs) {\n      mainContainer.append(list);\n      _toConsumableArray(imgs).map(function (img) {\n        var smallImg = img.smallImg,\n          largeImg = img.largeImg,\n          descr = img.descr;\n        var item = getItem(smallImg, largeImg, descr);\n        list.append(item);\n      });\n    }).then(function () {\n      node = document.querySelector(\"li:last-child img\");\n      node.onload = function () {\n        handlerAutoScroll();\n      };\n      handlerModalLargeImg();\n    })[\"catch\"](function (err) {\n      return mainContainer.insertAdjacentHTML(\"beforeend\", \"<p id=\\\"err\\\">\".concat(err, \"... Try again</p>\"));\n    });\n  }\n};\n\n// listners\nvar handlerSubmit = function handlerSubmit(e) {\n  e.preventDefault();\n  var errEl = document.querySelector(\"#err\");\n  errEl && errEl.remove();\n  query = input.value;\n  page = 1;\n  if (list) {\n    list.innerHTML = \"\";\n  }\n  fetchPictureList(query, page, per_page);\n};\nvar handlerAutoScroll = function handlerAutoScroll() {\n  var options = {\n    root: null,\n    rootMargin: \"0px \",\n    threshold: 0.1\n  };\n  var target = node;\n  var callback = function callback(entries, observer) {\n    entries.forEach(function (entry, arr) {\n      if (entry.isIntersecting) {\n        observer.unobserve(entry.target);\n        page++;\n        fetchPictureList(query, page, per_page);\n      }\n    });\n  };\n  var observer = new IntersectionObserver(callback, options);\n  observer.observe(target);\n};\nvar handlerModalLargeImg = function handlerModalLargeImg() {\n  if (list.childNodes.length <= per_page) {\n    document.querySelector(\"ul\").onclick = function (_ref) {\n      var target = _ref.target;\n      var link = target.firstChild;\n      link.setAttribute(\"style\", \"pointer-events: none;\");\n      var href = link.href;\n      basicLightbox.create(\"<img src=\".concat(href, \">\")).show();\n    };\n  }\n};\nform.addEventListener(\"submit\", handlerSubmit);\n\n//# sourceURL=webpack://goit-recruitment-task-js/./src/third-task.js?");

/***/ }),

/***/ "./style/main.scss":
/*!*************************!*\
  !*** ./style/main.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-recruitment-task-js/./style/main.scss?");

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