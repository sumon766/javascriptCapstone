/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Fonts */\r\n\r\n/* 1rem = 10px */\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\n/* Color palette */\r\n:root {\r\n  --dark-blue: #122c34;\r\n  --mild-blue: #224870;\r\n  --blue-blue: #2a4494;\r\n  --light-blue: #4ea5d9;\r\n  --water-blue: #44cfcb;\r\n  --text-white: #fff;\r\n  --gold: #dbae25;\r\n  --heart-red: rgb(223, 2, 2);\r\n  --count-hover: rgb(179, 4, 4);\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n/* Header */\r\nheader {\r\n  padding: 2rem 0;\r\n  background-color: var(--dark-blue);\r\n  border-bottom: var(--light-blue);\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: space-around;\r\n}\r\n\r\n.logo {\r\n  font-size: 2.5rem;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  color: var(--gold);\r\n}\r\n\r\n.logo:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: space-around;\r\n  column-gap: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.nav ul {\r\n  display: flex;\r\n  list-style: none;\r\n  justify-content: space-between;\r\n  column-gap: 1rem;\r\n}\r\n\r\n.nav-item a {\r\n  font-size: 1.9rem;\r\n  color: var(--text-white);\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-item a:hover {\r\n  color: var(--gold);\r\n}\r\n\r\n.nav-item {\r\n  color: var(--heart-red);\r\n}\r\n\r\n.nav-item:hover {\r\n  color: var(--count-hover);\r\n}\r\n\r\n#search {\r\n  padding: 0.7rem;\r\n  border-radius: 0.5rem;\r\n  border: 0;\r\n}\r\n\r\n#tv-container {\r\n  width: 75%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#programs {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  column-gap: 8%;\r\n  margin: 60px 0px;\r\n}\r\n\r\n.program {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.program img {\r\n  width: 100%;\r\n  height: 350px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.program h2 {\r\n  font-size: 18px;\r\n  font-family: 'Inter', sans-serif;\r\n  font-weight: 700;\r\n  color: #122c34;\r\n}\r\n\r\n.like-count {\r\n  margin: 12px 0px;\r\n}\r\n\r\n.like {\r\n  float: left;\r\n  margin-top: 5px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.program button {\r\n  border: none;\r\n  background-color: #2a4494;\r\n  font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: normal;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  padding: 10px 0px;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 100px; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.4); \r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n}\r\n\r\n#close {\r\n  color: #aaaaaa;\r\n  float: right;\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  position: absolute;\r\n  right: 20px;\r\n}\r\n\r\n#close:hover,\r\n#close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-image-title {\r\n  display: flex;\r\n}\r\n\r\n.modal-image-title img {\r\n  width: auto;\r\n  height: 450px;\r\n}\r\n\r\n.modal-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 50px;\r\n}\r\n\r\n.modal-description h2 {\r\n  font-size: 25px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  color: #122c34;\r\n}\r\n\r\n.modal-description p {\r\n  font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n  color: #1f2e33;\r\n  margin: 10px 0;\r\n}\r\n\r\n.modal-description p span {\r\n  font-family: 'Inter', sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n\r\n#comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nfieldset {\r\n  padding: 15px 20px;\r\n}\r\n\r\ninput {\r\n  padding: 10px;\r\n  width: 100%;\r\n  border: none;\r\n  font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\ntextarea {\r\n  padding: 10px;\r\n  width: 100%;\r\n  border: none;\r\n  margin: 15px 0;\r\n  font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n  height: 100px;\r\n}\r\n\r\ninput[type=submit] {\r\n  width: fit-content;\r\n  background-color: #2a4494;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n  border-radius: 3px;\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n  text-align: center;\r\n  padding: 2rem 0;\r\n  background-color: var(--dark-blue);\r\n  color: var(--text-white);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Fonts */\r\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap');\r\n\r\n/* 1rem = 10px */\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\n/* Color palette */\r\n:root {\r\n  --dark-blue: #122c34;\r\n  --mild-blue: #224870;\r\n  --blue-blue: #2a4494;\r\n  --light-blue: #4ea5d9;\r\n  --water-blue: #44cfcb;\r\n  --text-white: #fff;\r\n  --gold: #dbae25;\r\n  --heart-red: rgb(223, 2, 2);\r\n  --count-hover: rgb(179, 4, 4);\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n/* Header */\r\nheader {\r\n  padding: 2rem 0;\r\n  background-color: var(--dark-blue);\r\n  border-bottom: var(--light-blue);\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: space-around;\r\n}\r\n\r\n.logo {\r\n  font-size: 2.5rem;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  color: var(--gold);\r\n}\r\n\r\n.logo:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: space-around;\r\n  column-gap: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.nav ul {\r\n  display: flex;\r\n  list-style: none;\r\n  justify-content: space-between;\r\n  column-gap: 1rem;\r\n}\r\n\r\n.nav-item a {\r\n  font-size: 1.9rem;\r\n  color: var(--text-white);\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-item a:hover {\r\n  color: var(--gold);\r\n}\r\n\r\n.nav-item {\r\n  color: var(--heart-red);\r\n}\r\n\r\n.nav-item:hover {\r\n  color: var(--count-hover);\r\n}\r\n\r\n#search {\r\n  padding: 0.7rem;\r\n  border-radius: 0.5rem;\r\n  border: 0;\r\n}\r\n\r\n#tv-container {\r\n  width: 75%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#programs {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  column-gap: 8%;\r\n  margin: 60px 0px;\r\n}\r\n\r\n.program {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.program img {\r\n  width: 100%;\r\n  height: 350px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.program h2 {\r\n  font-size: 18px;\r\n  font-family: 'Inter', sans-serif;\r\n  font-weight: 700;\r\n  color: #122c34;\r\n}\r\n\r\n.like-count {\r\n  margin: 12px 0px;\r\n}\r\n\r\n.like {\r\n  float: left;\r\n  margin-top: 5px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.program button {\r\n  border: none;\r\n  background-color: #2a4494;\r\n  font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: normal;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  padding: 10px 0px;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 100px; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.4); \r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n}\r\n\r\n#close {\r\n  color: #aaaaaa;\r\n  float: right;\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  position: absolute;\r\n  right: 20px;\r\n}\r\n\r\n#close:hover,\r\n#close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-image-title {\r\n  display: flex;\r\n}\r\n\r\n.modal-image-title img {\r\n  width: auto;\r\n  height: 450px;\r\n}\r\n\r\n.modal-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 50px;\r\n}\r\n\r\n.modal-description h2 {\r\n  font-size: 25px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  color: #122c34;\r\n}\r\n\r\n.modal-description p {\r\n  font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n  color: #1f2e33;\r\n  margin: 10px 0;\r\n}\r\n\r\n.modal-description p span {\r\n  font-family: 'Inter', sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n\r\n#comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nfieldset {\r\n  padding: 15px 20px;\r\n}\r\n\r\ninput {\r\n  padding: 10px;\r\n  width: 100%;\r\n  border: none;\r\n  font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\ntextarea {\r\n  padding: 10px;\r\n  width: 100%;\r\n  border: none;\r\n  margin: 15px 0;\r\n  font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n  height: 100px;\r\n}\r\n\r\ninput[type=submit] {\r\n  width: fit-content;\r\n  background-color: #2a4494;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n  border-radius: 3px;\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n  text-align: center;\r\n  padding: 2rem 0;\r\n  background-color: var(--dark-blue);\r\n  color: var(--text-white);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/apiCall.js":
/*!********************************!*\
  !*** ./src/modules/apiCall.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const address = 'https://api.tvmaze.com/show';
const getMovies = async () => {
    const list = await fetch(address);
    const movies = await list.json();
    return movies;
}

const showMovies = async () => {
    const received = await getMovies();
    console.log(received);
    const programs = document.getElementById('programs');

    for (let i = 0; i < received.length; i += 1) {
        if(received[i].id < 7) {
            let program = document.createElement('div');
            program.className = 'program';

            let image = document.createElement('img');
            image.src = received[i].image.medium;
            program.appendChild(image);

            let title = document.createElement('h2');
            title.innerText = received[i].name;
            program.appendChild(title);

            let likeCount = document.createElement('div');
            likeCount.className = 'like-count';
            program.appendChild(likeCount);

            let likeButton = document.createElement('i');
            likeButton.className = 'fa fa-heart-o like';
            likeCount.appendChild(likeButton);

            let likeNumber = document.createElement('p');
            likeNumber.innerText = '5 likes';
            likeCount.appendChild(likeNumber);

            let commentButton = document.createElement('button');
            commentButton.id = 'comment-button-' + received[i].id;
            commentButton.type = 'button';
            commentButton.innerText = 'Comment';
            program.appendChild(commentButton);

            let moviesModal = document.createElement('div');
            moviesModal.className = 'modal';
            moviesModal.id = 'comment-modal-' + received[i].id;
            program.appendChild(moviesModal);

            let modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            moviesModal.appendChild(modalContent);

            let close = document.createElement('span');
            close.className = `close${received[i].id}`;
            close.id = 'close';
            close.innerHTML = '&times;';
            modalContent.appendChild(close);

            let modalImageTitle = document.createElement('div');
            modalImageTitle.className = 'modal-image-title';
            modalContent.appendChild(modalImageTitle);

            let modalImage = document.createElement('img');
            modalImage.src = received[i].image.medium;
            modalImageTitle.appendChild(modalImage);

            let modalDescription = document.createElement('div');
            modalDescription.className = 'modal-description';
            modalImageTitle.appendChild(modalDescription);

            let modalTitle = document.createElement('h2');
            modalTitle.innerText = received[i].name;
            modalDescription.appendChild(modalTitle);

            let storyLine = document.createElement('p');
            storyLine.innerHTML = received[i].summary;
            modalDescription.appendChild(storyLine);

            // Manual Comments Here
            let comments = document.createElement('h2');
            comments.innerText = 'Comments (2)';
            modalDescription.appendChild(comments);

            let comment1 = document.createElement('p');
            comment1.innerHTML = '<span>22/03/2023 </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.';
            modalDescription.appendChild(comment1);

            let comment2 = document.createElement('p');
            comment2.innerHTML = '<span>20/03/2023 </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.';
            modalDescription.appendChild(comment2);
            // Manual Comments Here

            // Comment Form Starts Here
            let form = document.createElement('form');
            form.id = 'comment-form';
            modalDescription.appendChild(form);

            let fieldset = document.createElement('fieldset');
            form.appendChild(fieldset);

            let legend = document.createElement('legend');
            legend.innerText = 'Add Comment';
            fieldset.appendChild(legend);

            let name = document.createElement('input');
            name.type = 'text';
            name.id = 'name';
            name.name = 'name';
            name.placeholder = 'Your Name';
            name.required = 'required';
            fieldset.appendChild(name);

            let commentText = document.createElement('textarea');
            commentText.name = 'comment';
            commentText.id = 'comment';
            commentText.placeholder = 'Your Comment';
            fieldset.appendChild(commentText);

            let submit = document.createElement('input');
            submit.type = 'submit';
            submit.name = 'submit';
            submit.value = 'Submit';
            submit.id = 'submit';
            fieldset.appendChild(submit);
            // Comment Form Starts Here

            programs.appendChild(program);

            let modal = document.getElementById(`comment-modal-${received[i].id}`);
            let btn = document.getElementById(`comment-button-${received[i].id}`);
            let span = document.getElementsByClassName(`close${received[i].id}`)[0];
        
            btn.onclick = function() {
                modal.style.display = "block";
            }
        
            span.onclick = function() {
                modal.style.display = "none";
            }
        
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMovies);

/***/ }),

/***/ "./src/images/movie.jpg":
/*!******************************!*\
  !*** ./src/images/movie.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/images/movie.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_movie_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/movie.jpg */ "./src/images/movie.jpg");
/* harmony import */ var _modules_apiCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/apiCall */ "./src/modules/apiCall.js");




(0,_modules_apiCall__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle0bbf3c1ce89459174cb6.js.map