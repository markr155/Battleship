/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \****************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-text: #ddd;
  --background-color: #000;
  --player-ship-bg: blue;
  --clickable-hover: #ff9191e9;
  --clickable-active: #ff9191a9;
  --hit: #ff1313;
  --miss: #1d19688b;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: var(--main-text);
}
body {
  background: var(--background-color);
}

.dialogue {
  margin: 1rem auto;
  width: 80%;
  text-align: center;
}

.playing-board-container {
  width: 90%;
  margin: 0 auto;
  display: none;
  flex-direction: column;
  text-align: center;
}

h4 {
  text-decoration: underline;
}

.game-setup-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-setup-ships-container {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.game-setup-buttons-container {
  display: flex;
  margin-top: 1.5rem;
  justify-content: space-evenly;
  width: 100%;
  align-self: center;
}

.setup-button,
.restart-button {
  color: var(--background-color);
  padding: 0.2rem 0.4rem;
  border-radius: 5%;
  border: 0;
}

.restart-button {
  margin: 1.5rem;
}

.game-setup-ship {
  line-height: 2rem;
  margin: 1rem;
}

.setup-ship-square-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.horizontal {
  flex-direction: row;
}

.vertical {
  flex-direction: column;
}

.setup-ship-square {
  aspect-ratio: 1;
  width: 1.5rem;
  border: 1px var(--background-color) solid;
  background: var(--player-ship-bg);
}

@media only screen and (min-width: 800px) {
  body {
    font-size: 1.2rem;
  }
  h4 {
    margin-top: 2rem;
  }
  .board-container {
    flex-direction: row;
    width: 70%;
  }

  .game-setup-container {
    width: 75%;
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 1rem;
    align-items: start;
  }

  .playing-board-container {
    width: 90%;
    flex-direction: row;
  }

  .player-board-container {
    width: 50%;
  }

  .player1-board,
  .player2-board {
    width: 50%;
    padding: 2rem;
  }

  .game-setup-board {
    width: 65%;
    max-width: 50%;
  }

  .game-setup-ships-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: 1.5rem;
    width: 30%;
  }

  .game-setup-ship {
    line-height: 2.5rem;
    /* margin: 2rem; */
  }

  .game-setup-buttons-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    width: auto;
  }
  .setup-button {
    width: 80%;
    margin: 0.5rem;
  }
}

.player1-board,
.player2-board,
.game-setup-board {
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(10, 1fr);
  gap: 0;
  width: 90%;
}

.game-square {
  aspect-ratio: 1;
  border: 1px solid black;
  background: var(--main-text);
}

.clickable:hover {
  background: var(--clickable-hover);
}

.clickable:active {
  background: var(--clickable-active);
}

.ship {
  background: var(--player-ship-bg);
}

.placed {
  display: none;
}

.hidden {
  opacity: 0;
}

header {
  text-align: center;
}

.hit {
  background: var(--hit);
}

.miss {
  background: var(--miss);
}

#end-game-modal {
  background: var(--background-color);
  color: var(--main-text);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./styles/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,sBAAsB;EACtB,4BAA4B;EAC5B,6BAA6B;EAC7B,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,uBAAuB;AACzB;AACA;EACE,mCAAmC;AACrC;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,6BAA6B;EAC7B,WAAW;EACX,kBAAkB;AACpB;;AAEA;;EAEE,8BAA8B;EAC9B,sBAAsB;EACtB,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,yCAAyC;EACzC,iCAAiC;AACnC;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,mBAAmB;IACnB,6BAA6B;IAC7B,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,UAAU;EACZ;;EAEA;;IAEE,UAAU;IACV,aAAa;EACf;;EAEA;IACE,UAAU;IACV,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,iBAAiB;IACjB,UAAU;EACZ;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,WAAW;EACb;EACA;IACE,UAAU;IACV,cAAc;EAChB;AACF;;AAEA;;;EAGE,aAAa;EACb,YAAY;EACZ,sCAAsC;EACtC,MAAM;EACN,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,4BAA4B;AAC9B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mCAAmC;EACnC,uBAAuB;EACvB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,kBAAkB;AACpB","sourcesContent":[":root {\n  --main-text: #ddd;\n  --background-color: #000;\n  --player-ship-bg: blue;\n  --clickable-hover: #ff9191e9;\n  --clickable-active: #ff9191a9;\n  --hit: #ff1313;\n  --miss: #1d19688b;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: var(--main-text);\n}\nbody {\n  background: var(--background-color);\n}\n\n.dialogue {\n  margin: 1rem auto;\n  width: 80%;\n  text-align: center;\n}\n\n.playing-board-container {\n  width: 90%;\n  margin: 0 auto;\n  display: none;\n  flex-direction: column;\n  text-align: center;\n}\n\nh4 {\n  text-decoration: underline;\n}\n\n.game-setup-container {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.game-setup-ships-container {\n  display: flex;\n  justify-content: space-around;\n  text-align: center;\n}\n\n.game-setup-buttons-container {\n  display: flex;\n  margin-top: 1.5rem;\n  justify-content: space-evenly;\n  width: 100%;\n  align-self: center;\n}\n\n.setup-button,\n.restart-button {\n  color: var(--background-color);\n  padding: 0.2rem 0.4rem;\n  border-radius: 5%;\n  border: 0;\n}\n\n.restart-button {\n  margin: 1.5rem;\n}\n\n.game-setup-ship {\n  line-height: 2rem;\n  margin: 1rem;\n}\n\n.setup-ship-square-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.horizontal {\n  flex-direction: row;\n}\n\n.vertical {\n  flex-direction: column;\n}\n\n.setup-ship-square {\n  aspect-ratio: 1;\n  width: 1.5rem;\n  border: 1px var(--background-color) solid;\n  background: var(--player-ship-bg);\n}\n\n@media only screen and (min-width: 800px) {\n  body {\n    font-size: 1.2rem;\n  }\n  h4 {\n    margin-top: 2rem;\n  }\n  .board-container {\n    flex-direction: row;\n    width: 70%;\n  }\n\n  .game-setup-container {\n    width: 75%;\n    flex-direction: row;\n    justify-content: space-evenly;\n    padding-bottom: 1rem;\n    align-items: start;\n  }\n\n  .playing-board-container {\n    width: 90%;\n    flex-direction: row;\n  }\n\n  .player-board-container {\n    width: 50%;\n  }\n\n  .player1-board,\n  .player2-board {\n    width: 50%;\n    padding: 2rem;\n  }\n\n  .game-setup-board {\n    width: 65%;\n    max-width: 50%;\n  }\n\n  .game-setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    width: 30%;\n  }\n\n  .game-setup-ship {\n    line-height: 2.5rem;\n    /* margin: 2rem; */\n  }\n\n  .game-setup-buttons-container {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 0.5rem;\n    width: auto;\n  }\n  .setup-button {\n    width: 80%;\n    margin: 0.5rem;\n  }\n}\n\n.player1-board,\n.player2-board,\n.game-setup-board {\n  display: grid;\n  margin: 1rem;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 0;\n  width: 90%;\n}\n\n.game-square {\n  aspect-ratio: 1;\n  border: 1px solid black;\n  background: var(--main-text);\n}\n\n.clickable:hover {\n  background: var(--clickable-hover);\n}\n\n.clickable:active {\n  background: var(--clickable-active);\n}\n\n.ship {\n  background: var(--player-ship-bg);\n}\n\n.placed {\n  display: none;\n}\n\n.hidden {\n  opacity: 0;\n}\n\nheader {\n  text-align: center;\n}\n\n.hit {\n  background: var(--hit);\n}\n\n.miss {\n  background: var(--miss);\n}\n\n#end-game-modal {\n  background: var(--background-color);\n  color: var(--main-text);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 3rem;\n  text-align: center;\n}"],"sourceRoot":""}]);
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

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");

function gameBoard(isComputer = false) {
  // Set board length/width
  const boardSize = 10;
  // Create board
  const board = Array.from({ length: boardSize }, () =>
    Array(boardSize).fill(null),
  );

  // Initialise arrays to track attacks
  // maybe change hits/miss to a tracker object
  const attacksMissed = [];
  const attacksHit = [];
  const shipsPlaced = [];

  const placeShip = (ship, coord, isHorizontal) => {
    // isHorizontal == orientation boolean
    const x = parseInt(coord[0]);
    const y = parseInt(coord[1]);
    const length = ship.length;
    // sets starting x, y to ensure ship doesnt overflow
    // if horizontal, y position changes, if vertical, x position changes
    const startX = parseInt(
      isHorizontal ? Math.min(x, boardSize - ship.length) : x,
    );
    const startY = parseInt(
      isHorizontal ? y : Math.min(y, boardSize - ship.length),
    );
    // checks if ship has already been placed
    for (let i = 0; i < length; i++) {
      if (isHorizontal) {
        if (!!board[startX + i][startY]) return ship.length;
      } else {
        if (!!board[startX][startY + i]) return ship.length;
      }
    }
    // places ship on board
    for (let i = 0; i < length; i++) {
      isHorizontal
        ? (board[startX + i][startY] = ship)
        : (board[startX][startY + i] = ship);
    }

    shipsPlaced.push(ship);
    return null;
  };

  const receiveAttack = (coord) => {
    // Check attack is on the board
    const [x, y] = coord;
    if (x > boardSize - 1 || y > boardSize - 1 || x < 0 || y < 0)
      return "invalid attack coordinate";
    // Check if square has been attacked before
    // refactor

    let hasBeenAttacked = false;
    attacksHit.forEach((attack) => {
      if (attack[0] === x && attack[1] === y) {
        hasBeenAttacked = true;
      }
    });

    attacksMissed.forEach((attack) => {
      if (attack[0] === x && attack[1] === y) {
        hasBeenAttacked = true;
      }
    });

    if (hasBeenAttacked) return "Square already attacked";
    const tarSquare = board[x][y];
    if (!!tarSquare) {
      tarSquare.hit();
      attacksHit.push([x, y]);
      return "hit";
    } else {
      attacksMissed.push([x, y]);
      return "miss";
    }
  };

  const hasAllSunk = () => {
    // if all ships in shipsPlaced have sunk return true
    const shipsSunk = shipsPlaced.filter((ship) => ship.isSunk());
    return shipsSunk.length == shipsPlaced.length ? true : false;
  };

  return {
    boardSize,
    placeShip,
    receiveAttack,
    get getBoard() {
      return board;
    },
    get getMisses() {
      return attacksMissed;
    },
    hasAllSunk,
  };
}
// checks if square has been hit before

// module.exports = gameBoard;


/***/ }),

/***/ "./src/gamecontroller.js":
/*!*******************************!*\
  !*** ./src/gamecontroller.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameController)
/* harmony export */ });
/* harmony import */ var _src_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/player.js */ "./src/player.js");
/* harmony import */ var _src_gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _src_ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ship.js */ "./src/ship.js");




function gameController(board1, board2) {
  const board = (0,_src_gameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const player1 = (0,_src_player_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Player");
  const player2 = (0,_src_player_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Computer");

  const shipList = [
    {
      ship: (0,_src_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2),
    },
    {
      ship: (0,_src_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(3),
    },
    {
      ship: (0,_src_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(3),
    },
    {
      ship: (0,_src_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(4),
    },
    {
      ship: (0,_src_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(5),
    },
  ];

  function placeComShips(ships = shipList) {
    const failedShips = [];
    ships.forEach((ship) => {
      const coord = [
        Math.floor(Math.random() * board2.boardSize),
        Math.floor(Math.random() * board.boardSize),
      ];
      const horizontal = Math.random() > 0.5;
      const result = board2.placeShip(ship.ship, coord, horizontal);
      if (result) failedShips.push({ ship: (0,_src_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(result) });
    });
    if (failedShips[0]) placeComShips(failedShips);
  }
  let currentPlayer = player1;
  let enemyBoard = board2;
  let gameFinish = false;

  function switchCurrentPlayer() {
    currentPlayer === player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);

    enemyBoard === board2 ? (enemyBoard = board1) : (enemyBoard = board2);
  }

  const playRound = (coord, enemyBoard) => {
    const result = currentPlayer.issueAttack(enemyBoard, coord);
    if (result === "Square already attacked") return;
    if (enemyBoard.hasAllSunk()) gameFinish = true;
    if (!!gameFinish) return `${currentPlayer.name} wins!`;
    switchCurrentPlayer();
    return result;
  };

  return {
    playRound,
    placeComShips,
  };
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newPlayer)
/* harmony export */ });
function newPlayer(initialName) {
  const name = initialName;
  const comAttacks = [];

  function computerAttackCoord() {
    let x;
    let y;
    let isValidAttack = false;
    // Get x & y between 0 - 9 (not variable to board size), checks if square has been attacked
    while (isValidAttack === false) {
      isValidAttack = true;
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      comAttacks.forEach((coord) => {
        if (coord[0] === x && coord[1] === y) isValidAttack = false;
      });
    }
    comAttacks.push([x, y]);
    return [x, y];
  }

  return {
    name,
    comAttacks,
    issueAttack(board, coord) {
      let result;
      if (name === "Computer") {
        const comCoord = computerAttackCoord();
        result = [board.receiveAttack(comCoord), comCoord];
      } else result = board.receiveAttack(coord);
      return result;
    },
    computerAttackCoord,
  };
}


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderDOM)
/* harmony export */ });
/* harmony import */ var _gamecontroller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamecontroller.js */ "./src/gamecontroller.js");

const game = (0,_gamecontroller_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
function renderDOM() {
	let boardSize = 10;
	let playerShipsPlaced = [];
	let comShipsPlaced = [];
	const dialogue = document.querySelector('.dialogue');
	const modal = document.getElementById('end-game-modal');
	let roundReady = true;

	function displayBoard(boardContainer, board, isClickable = false) {
		let displayBoardSize = board.getBoard.length - 1;
		boardContainer.textContent = '';
		board.getBoard.forEach((row, y) => {
			row.forEach((col, x) => {
				const square = createBoardSquare(x, displayBoardSize - y, isClickable);
				if (!!board.getBoard[x][boardSize - 1 - y])
					if(!isClickable) square.classList.add('ship');
				boardContainer.appendChild(square);
			});
		});
	}

	function createBoardSquare(x, y, isClickable) {
		const square = document.createElement('div');
		square.classList.add('game-square');
		if (!!isClickable) {
			square.classList.add('clickable');
		}
		square.dataset.x = x;
		square.dataset.y = y;
		return square;
	}

	function makeBoardDroppable(board) {
		board.addEventListener('drop', setUpBoardDrop);
		board.addEventListener('dragover', (e) => {
			e.preventDefault();
		});
	}

	function shipLengths(name) {
		switch (name) {
			case 'carrier':
				return { length: 5 };
			case 'battleship':
				return { length: 4 };
			case 'destroyer':
				return { length: 3 };
			case 'submarine':
				return { length: 3 };
			case 'patrol-boat':
				return { length: 2 };
		}
	}

	function setUpBoardDrop(event) {
		event.preventDefault();
		const shipToDrop = event.dataTransfer.mozSourceNode;
		const shipName = shipToDrop.id;
		const ship = shipLengths(shipName);
		const x = event.target.dataset.x;
		const y = event.target.dataset.y;
		const isHorizontal = !!event.dataTransfer.mozSourceNode.classList.contains(
			'horizontal'
		)
			? true
			: false;
		// error handling
		if (!ship) {
			console.log('no ship selected');
			return;
		}

		const [startX, startY] = startXY(x, y, isHorizontal, ship);

		// checks if ship has already been placed
		const validPlace = isValidPlace(ship, startX, startY, isHorizontal);
		if (!validPlace) {
			return `${shipName} placement failed`;
		}
		// places ship on board
		for (let i = 0; i < ship.length; i++) {
			isHorizontal
				? document
						.querySelector(`[data-x='${startX + i}'][data-y='${startY}']`)
						.classList.add('ship')
				: document
						.querySelector(`[data-x='${startX}'][data-y='${startY - i}']`)
						.classList.add('ship');
		}
		// Toggles Ship displaying after being placed
		if (shipToDrop instanceof HTMLElement) {
			shipToDrop.classList.toggle('placed');
		}
		playerShipsPlaced.push({
			length: ship.length,
			coord: [x, y],
			horizontal: isHorizontal,
		});
		return 'success';
	}

	// sets starting x, y to ensure ship doesnt overflow
	// if horizontal, y position changes, if vertical, x position changes
	function startXY(x, y, isHorizontal, ship) {
		const newX = parseInt(
			isHorizontal ? Math.min(x, boardSize - ship.length) : x
		);
		const newY = parseInt(isHorizontal ? y : Math.max(y, ship.length - 1));
		return [newX, newY];
	}

	function resetSetupBoard(setupShipElements) {
		setupShipElements.forEach((ship) => {
			if (ship.classList.contains('placed')) ship.classList.remove('placed');
			if (ship.classList.contains('vertical')) {
				ship.classList.remove('vertical');
				ship.classList.add('horizontal');
			}
		});
		playerShipsPlaced = [];
	}

	function getPlayerSetup() {
		if (playerShipsPlaced.length < 5) {
			return;
		}
		return playerShipsPlaced;
	}

	function attackEnemyOnClick(
		playerBoardDisplay,
		enemyBoardDisplay,
		gameController,
		enemyBoard,
		playerBoard
	) {
		enemyBoardDisplay.childNodes.forEach((square) => {
			square.addEventListener('click', (e) => {
				if (roundReady === false) return;
				roundReady = false;
				dialogue.textContent = '';
				const playerCoords = [e.target.dataset.x, e.target.dataset.y];
				dialogue.appendChild(attackingText(playerCoords));
				const playerResult = gameController.playRound(playerCoords, enemyBoard);
				const comResult = gameController.playRound(playerCoords, playerBoard);
				if (!playerResult || !comResult) return;
				const comSquare = playerBoardDisplay.querySelector(
					`[data-x="${comResult[1][0]}"][data-y="${comResult[1][1]}"]`
				);
				setTimeout(() => {
					if (playerResult === 'hit') {
						updateDialogue('It was a hit!');
						square.classList.add('hit');
						square.classList.remove('clickable');
					} else if (playerResult === 'miss') {
						updateDialogue('You missed!');
						square.classList.remove('clickable');
						square.classList.add('miss');
					} else {
						showEndGameModal(playerResult);
						return;
					}
					setTimeout(() => {
						updateDialogue('Computer attacking...');
						setTimeout(() => {
							if (comResult[0] === 'hit') {
								updateDialogue('You were hit!');
								comSquare.classList.add('hit');
							} else if (comResult[0] === 'miss') {
								updateDialogue('The computer missed!');
								comSquare.classList.add('miss');
							} else {
								showEndGameModal(comResult);
								return;
							}
							setTimeout(() => {
								updateDialogue('Your turn, click to attack');
								roundReady = true;
							}, 700); 
						}, 800); 
					}, 800); 
				}, 800); 
			});
		});
	}

	function showEndGameModal(result) {
		const endMsg = document.createElement('p');
		endMsg.textContent = result;
		const restartButton = document.createElement('button');
		restartButton.classList.add('restart-button');
		restartButton.textContent = 'Restart Game';
		restartButton.addEventListener('click', () => window.location.reload());
		modal.appendChild(endMsg);
		modal.appendChild(restartButton);
		modal.showModal();
	}

	function updateDialogue(text) {
		dialogue.textContent = '';
		const element = document.createElement('h3');
		element.textContent = text;
		dialogue.appendChild(element);
	}

	function attackingText(coord) {
		const element = document.createElement('h3');
		element.textContent = `Attacking position [${coord[0]}, ${coord[1]}]`;
		return element;
	}

	function isValidPlace(ship, startX, startY, isHorizontal) {
		let validPlace = true;
		for (let i = 0; i < ship.length; i++) {
			if (isHorizontal) {
				if (
					document
						.querySelector(`[data-x='${startX + i}'][data-y='${startY}']`)
						.classList.contains('ship')
				)
					validPlace = false;
			} else {
				if (
					document
						.querySelector(`[data-x='${startX}'][data-y='${startY - i}']`)
						.classList.contains('ship')
				)
					validPlace = false;
			}
		}
		return validPlace;
	}

	function dummyShipDrop(shipName, x, y, isHorizontal) {
		const ship = shipLengths(shipName);
		const dummyEvent = {
			preventDefault: () => {},
			dataTransfer: {
				mozSourceNode: {
					id: shipName,
					classList: {
						contains: (className) => (className = isHorizontal),
					},
				},
			},
			target: {
				dataset: { x, y },
			},
		};
		const result = setUpBoardDrop(dummyEvent);
		return result;
	}
	function randomiseSetup(setupShipElements) {
		let someFailed = false;
		setupShipElements.forEach((ship, index) => {
			if (ship.classList.contains('placed')) return;
			const shipName = ship.id;
			const [x, y] = getNewCoords();
			const randHorizontal = Math.random() < 0.5;
			const result = dummyShipDrop(shipName, x, y, randHorizontal);
			if (!(result === 'success')) {
				someFailed = true;
				return;
			}
			ship.classList.add('placed');
		});
		if (someFailed) randomiseSetup(setupShipElements);
	}

	function getNewCoords() {
		return [
			Math.floor(Math.random() * boardSize),
			Math.floor(Math.random() * boardSize),
		];
	}

	return {
		displayBoard,
		makeBoardDroppable,
		resetSetupBoard,
		getPlayerSetup,
		attackEnemyOnClick,
		randomiseSetup,
	};
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newShip)
/* harmony export */ });
function newShip(length) {
  if (length <= 0) {
    throw new Error("Length must be above 0");
  }
  let timesHit = 0;

  const hit = () => {
    timesHit++;
  };

  const isSunk = () => {
    return timesHit === length ? true : false;
  };
  return {
    length,
    hit,
    isSunk,
  };
}

// module.exports = newShip;


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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _src_ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ship.js */ "./src/ship.js");
/* harmony import */ var _src_gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _src_gamecontroller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/gamecontroller.js */ "./src/gamecontroller.js");
/* harmony import */ var _src_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/render.js */ "./src/render.js");





console.clear();

// Element Declaration
const playerSetUpBoard = document.querySelector(".game-setup-board");
const setUpShips = document.querySelectorAll(".setup-ship-square-container");
const setUpContainer = document.querySelector(".game-setup-container");
const playBoardContainer = document.querySelector(".playing-board-container");
const resetButton = document.querySelector(".reset-button");
const startButton = document.querySelector(".start-button");
const randomButton = document.querySelector(".random-button");
const playerBoardDisplay = document.querySelector(".player1-board");
const player2BoardDisplay = document.querySelector(".player2-board");
const dialogue = document.querySelector(".dialogue");

const render = (0,_src_render_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
const playerBoard = (0,_src_gameboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
const comBoard = (0,_src_gameboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(true);
const game = (0,_src_gamecontroller_js__WEBPACK_IMPORTED_MODULE_3__["default"])(playerBoard, comBoard);

render.displayBoard(playerSetUpBoard, playerBoard);
render.makeBoardDroppable(playerSetUpBoard);

// Set up Reset and Start buttons
resetButton.addEventListener("click", () => {
  render.displayBoard(playerSetUpBoard, playerBoard);
  render.resetSetupBoard(setUpShips);
  if (!dialogue.querySelector("h4").classList.contains("hidden"))
    dialogue.querySelector("h4").classList.add("hidden");
});

startButton.addEventListener("click", () => {
  const placedShips = render.getPlayerSetup();
  if (!!placedShips) {
    setUpContainer.style.display = "none";
    playBoardContainer.style.display = "flex";
    render.getPlayerSetup().forEach((shipPlaced) => {
      const newShip = (0,_src_ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(shipPlaced.length);
      playerBoard.placeShip(newShip, shipPlaced.coord, shipPlaced.horizontal);
    });
    game.placeComShips();
    render.displayBoard(playerBoardDisplay, playerBoard);
    render.displayBoard(player2BoardDisplay, comBoard, true);
    dialogue.textContent = "Click on the enemy board to issue an attack";
    render.attackEnemyOnClick(
      playerBoardDisplay,
      player2BoardDisplay,
      game,
      comBoard,
      playerBoard,
    );
  } else {
    dialogue.querySelector("h4").classList.remove("hidden");
  }
});
// Set up random setup button
randomButton.addEventListener("click", () => {
  render.randomiseSetup(setUpShips);
});

// Changes drag image to align with cursor
setUpShips.forEach((shipContainer) => {
  shipContainer.addEventListener("dragstart", (e) => {
    e.dataTransfer.setDragImage(e.target, 0, 0);
  });
});

// Allows ship orientation to be changed
setUpShips.forEach((shipContainer) => {
  shipContainer.addEventListener("click", () => {
    if (shipContainer.classList.contains("horizontal")) {
      shipContainer.classList.remove("horizontal");
      shipContainer.classList.add("vertical");
    } else {
      shipContainer.classList.remove("vertical");
      shipContainer.classList.add("horizontal");
    }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1GQUFtRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxV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O0FBRUEsZUFBZSwwREFBUztBQUN4QixvQkFBb0IsNkRBQVM7QUFDN0IsaUJBQWlCLDZEQUFTO0FBQzFCLGFBQWEsa0VBQWM7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQUk7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3N0eWxlcy9zdHlsZS5jc3M/YTJmNSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tYWluLXRleHQ6ICNkZGQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgLS1wbGF5ZXItc2hpcC1iZzogYmx1ZTtcbiAgLS1jbGlja2FibGUtaG92ZXI6ICNmZjkxOTFlOTtcbiAgLS1jbGlja2FibGUtYWN0aXZlOiAjZmY5MTkxYTk7XG4gIC0taGl0OiAjZmYxMzEzO1xuICAtLW1pc3M6ICMxZDE5Njg4Yjtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XG59XG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5kaWFsb2d1ZSB7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wbGF5aW5nLWJvYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmg0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5nYW1lLXNldHVwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS1zZXR1cC1zaGlwcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2FtZS1zZXR1cC1idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5zZXR1cC1idXR0b24sXG4ucmVzdGFydC1idXR0b24ge1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBib3JkZXI6IDA7XG59XG5cbi5yZXN0YXJ0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMS41cmVtO1xufVxuXG4uZ2FtZS1zZXR1cC1zaGlwIHtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuLnNldHVwLXNoaXAtc3F1YXJlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi52ZXJ0aWNhbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZXR1cC1zaGlwLXNxdWFyZSB7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgYm9yZGVyOiAxcHggdmFyKC0tYmFja2dyb3VuZC1jb2xvcikgc29saWQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBsYXllci1zaGlwLWJnKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICBoNCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxuICAuYm9hcmQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAuZ2FtZS1zZXR1cC1jb250YWluZXIge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cblxuICAucGxheWluZy1ib2FyZC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5wbGF5ZXItYm9hcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLnBsYXllcjEtYm9hcmQsXG4gIC5wbGF5ZXIyLWJvYXJkIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cblxuICAuZ2FtZS1zZXR1cC1ib2FyZCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5nYW1lLXNldHVwLXNoaXBzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB3aWR0aDogMzAlO1xuICB9XG5cbiAgLmdhbWUtc2V0dXAtc2hpcCB7XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICAvKiBtYXJnaW46IDJyZW07ICovXG4gIH1cblxuICAuZ2FtZS1zZXR1cC1idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMC41cmVtO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5zZXR1cC1idXR0b24ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwLjVyZW07XG4gIH1cbn1cblxuLnBsYXllcjEtYm9hcmQsXG4ucGxheWVyMi1ib2FyZCxcbi5nYW1lLXNldHVwLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ2FwOiAwO1xuICB3aWR0aDogOTAlO1xufVxuXG4uZ2FtZS1zcXVhcmUge1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXRleHQpO1xufVxuXG4uY2xpY2thYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xpY2thYmxlLWhvdmVyKTtcbn1cblxuLmNsaWNrYWJsZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbGlja2FibGUtYWN0aXZlKTtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wbGF5ZXItc2hpcC1iZyk7XG59XG5cbi5wbGFjZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taGl0KTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1taXNzKTtcbn1cblxuI2VuZC1nYW1lLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nOiAzcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBOztJQUVFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1tYWluLXRleHQ6ICNkZGQ7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAtLXBsYXllci1zaGlwLWJnOiBibHVlO1xcbiAgLS1jbGlja2FibGUtaG92ZXI6ICNmZjkxOTFlOTtcXG4gIC0tY2xpY2thYmxlLWFjdGl2ZTogI2ZmOTE5MWE5O1xcbiAgLS1oaXQ6ICNmZjEzMTM7XFxuICAtLW1pc3M6ICMxZDE5Njg4YjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uZGlhbG9ndWUge1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWluZy1ib2FyZC1jb250YWluZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmg0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uZ2FtZS1zZXR1cC1jb250YWluZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1zZXR1cC1zaGlwcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1zZXR1cC1idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbixcXG4ucmVzdGFydC1idXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4ucmVzdGFydC1idXR0b24ge1xcbiAgbWFyZ2luOiAxLjVyZW07XFxufVxcblxcbi5nYW1lLXNldHVwLXNoaXAge1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5zZXR1cC1zaGlwLXNxdWFyZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3Jpem9udGFsIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1zcXVhcmUge1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHZhcigtLWJhY2tncm91bmQtY29sb3IpIHNvbGlkO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGxheWVyLXNoaXAtYmcpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuICBoNCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICB9XFxuICAuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG5cXG4gIC5nYW1lLXNldHVwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgfVxcblxcbiAgLnBsYXlpbmctYm9hcmQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5wbGF5ZXItYm9hcmQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5wbGF5ZXIxLWJvYXJkLFxcbiAgLnBsYXllcjItYm9hcmQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgfVxcblxcbiAgLmdhbWUtc2V0dXAtYm9hcmQge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5nYW1lLXNldHVwLXNoaXBzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgfVxcblxcbiAgLmdhbWUtc2V0dXAtc2hpcCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxuICAgIC8qIG1hcmdpbjogMnJlbTsgKi9cXG4gIH1cXG5cXG4gIC5nYW1lLXNldHVwLWJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5zZXR1cC1idXR0b24ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gIH1cXG59XFxuXFxuLnBsYXllcjEtYm9hcmQsXFxuLnBsYXllcjItYm9hcmQsXFxuLmdhbWUtc2V0dXAtYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAwO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlIHtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi10ZXh0KTtcXG59XFxuXFxuLmNsaWNrYWJsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbGlja2FibGUtaG92ZXIpO1xcbn1cXG5cXG4uY2xpY2thYmxlOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbGlja2FibGUtYWN0aXZlKTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGxheWVyLXNoaXAtYmcpO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuI2VuZC1nYW1lLW1vZGFsIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXAuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVCb2FyZChpc0NvbXB1dGVyID0gZmFsc2UpIHtcbiAgLy8gU2V0IGJvYXJkIGxlbmd0aC93aWR0aFxuICBjb25zdCBib2FyZFNpemUgPSAxMDtcbiAgLy8gQ3JlYXRlIGJvYXJkXG4gIGNvbnN0IGJvYXJkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogYm9hcmRTaXplIH0sICgpID0+XG4gICAgQXJyYXkoYm9hcmRTaXplKS5maWxsKG51bGwpLFxuICApO1xuXG4gIC8vIEluaXRpYWxpc2UgYXJyYXlzIHRvIHRyYWNrIGF0dGFja3NcbiAgLy8gbWF5YmUgY2hhbmdlIGhpdHMvbWlzcyB0byBhIHRyYWNrZXIgb2JqZWN0XG4gIGNvbnN0IGF0dGFja3NNaXNzZWQgPSBbXTtcbiAgY29uc3QgYXR0YWNrc0hpdCA9IFtdO1xuICBjb25zdCBzaGlwc1BsYWNlZCA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZCwgaXNIb3Jpem9udGFsKSA9PiB7XG4gICAgLy8gaXNIb3Jpem9udGFsID09IG9yaWVudGF0aW9uIGJvb2xlYW5cbiAgICBjb25zdCB4ID0gcGFyc2VJbnQoY29vcmRbMF0pO1xuICAgIGNvbnN0IHkgPSBwYXJzZUludChjb29yZFsxXSk7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgLy8gc2V0cyBzdGFydGluZyB4LCB5IHRvIGVuc3VyZSBzaGlwIGRvZXNudCBvdmVyZmxvd1xuICAgIC8vIGlmIGhvcml6b250YWwsIHkgcG9zaXRpb24gY2hhbmdlcywgaWYgdmVydGljYWwsIHggcG9zaXRpb24gY2hhbmdlc1xuICAgIGNvbnN0IHN0YXJ0WCA9IHBhcnNlSW50KFxuICAgICAgaXNIb3Jpem9udGFsID8gTWF0aC5taW4oeCwgYm9hcmRTaXplIC0gc2hpcC5sZW5ndGgpIDogeCxcbiAgICApO1xuICAgIGNvbnN0IHN0YXJ0WSA9IHBhcnNlSW50KFxuICAgICAgaXNIb3Jpem9udGFsID8geSA6IE1hdGgubWluKHksIGJvYXJkU2l6ZSAtIHNoaXAubGVuZ3RoKSxcbiAgICApO1xuICAgIC8vIGNoZWNrcyBpZiBzaGlwIGhhcyBhbHJlYWR5IGJlZW4gcGxhY2VkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICBpZiAoISFib2FyZFtzdGFydFggKyBpXVtzdGFydFldKSByZXR1cm4gc2hpcC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoISFib2FyZFtzdGFydFhdW3N0YXJ0WSArIGldKSByZXR1cm4gc2hpcC5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBsYWNlcyBzaGlwIG9uIGJvYXJkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaXNIb3Jpem9udGFsXG4gICAgICAgID8gKGJvYXJkW3N0YXJ0WCArIGldW3N0YXJ0WV0gPSBzaGlwKVxuICAgICAgICA6IChib2FyZFtzdGFydFhdW3N0YXJ0WSArIGldID0gc2hpcCk7XG4gICAgfVxuXG4gICAgc2hpcHNQbGFjZWQucHVzaChzaGlwKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgLy8gQ2hlY2sgYXR0YWNrIGlzIG9uIHRoZSBib2FyZFxuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkO1xuICAgIGlmICh4ID4gYm9hcmRTaXplIC0gMSB8fCB5ID4gYm9hcmRTaXplIC0gMSB8fCB4IDwgMCB8fCB5IDwgMClcbiAgICAgIHJldHVybiBcImludmFsaWQgYXR0YWNrIGNvb3JkaW5hdGVcIjtcbiAgICAvLyBDaGVjayBpZiBzcXVhcmUgaGFzIGJlZW4gYXR0YWNrZWQgYmVmb3JlXG4gICAgLy8gcmVmYWN0b3JcblxuICAgIGxldCBoYXNCZWVuQXR0YWNrZWQgPSBmYWxzZTtcbiAgICBhdHRhY2tzSGl0LmZvckVhY2goKGF0dGFjaykgPT4ge1xuICAgICAgaWYgKGF0dGFja1swXSA9PT0geCAmJiBhdHRhY2tbMV0gPT09IHkpIHtcbiAgICAgICAgaGFzQmVlbkF0dGFja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGF0dGFja3NNaXNzZWQuZm9yRWFjaCgoYXR0YWNrKSA9PiB7XG4gICAgICBpZiAoYXR0YWNrWzBdID09PSB4ICYmIGF0dGFja1sxXSA9PT0geSkge1xuICAgICAgICBoYXNCZWVuQXR0YWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc0JlZW5BdHRhY2tlZCkgcmV0dXJuIFwiU3F1YXJlIGFscmVhZHkgYXR0YWNrZWRcIjtcbiAgICBjb25zdCB0YXJTcXVhcmUgPSBib2FyZFt4XVt5XTtcbiAgICBpZiAoISF0YXJTcXVhcmUpIHtcbiAgICAgIHRhclNxdWFyZS5oaXQoKTtcbiAgICAgIGF0dGFja3NIaXQucHVzaChbeCwgeV0pO1xuICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dGFja3NNaXNzZWQucHVzaChbeCwgeV0pO1xuICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIC8vIGlmIGFsbCBzaGlwcyBpbiBzaGlwc1BsYWNlZCBoYXZlIHN1bmsgcmV0dXJuIHRydWVcbiAgICBjb25zdCBzaGlwc1N1bmsgPSBzaGlwc1BsYWNlZC5maWx0ZXIoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIHJldHVybiBzaGlwc1N1bmsubGVuZ3RoID09IHNoaXBzUGxhY2VkLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkU2l6ZSxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZXQgZ2V0Qm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgZ2V0TWlzc2VzKCkge1xuICAgICAgcmV0dXJuIGF0dGFja3NNaXNzZWQ7XG4gICAgfSxcbiAgICBoYXNBbGxTdW5rLFxuICB9O1xufVxuLy8gY2hlY2tzIGlmIHNxdWFyZSBoYXMgYmVlbiBoaXQgYmVmb3JlXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gZ2FtZUJvYXJkO1xuIiwiaW1wb3J0IG5ld1BsYXllciBmcm9tIFwiLi4vc3JjL3BsYXllci5qc1wiO1xuaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi4vc3JjL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IG5ld1NoaXAgZnJvbSBcIi4uL3NyYy9zaGlwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKGJvYXJkMSwgYm9hcmQyKSB7XG4gIGNvbnN0IGJvYXJkID0gZ2FtZUJvYXJkKCk7XG4gIGNvbnN0IHBsYXllcjEgPSBuZXdQbGF5ZXIoXCJQbGF5ZXJcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBuZXdQbGF5ZXIoXCJDb21wdXRlclwiKTtcblxuICBjb25zdCBzaGlwTGlzdCA9IFtcbiAgICB7XG4gICAgICBzaGlwOiBuZXdTaGlwKDIpLFxuICAgIH0sXG4gICAge1xuICAgICAgc2hpcDogbmV3U2hpcCgzKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNoaXA6IG5ld1NoaXAoMyksXG4gICAgfSxcbiAgICB7XG4gICAgICBzaGlwOiBuZXdTaGlwKDQpLFxuICAgIH0sXG4gICAge1xuICAgICAgc2hpcDogbmV3U2hpcCg1KSxcbiAgICB9LFxuICBdO1xuXG4gIGZ1bmN0aW9uIHBsYWNlQ29tU2hpcHMoc2hpcHMgPSBzaGlwTGlzdCkge1xuICAgIGNvbnN0IGZhaWxlZFNoaXBzID0gW107XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgY29vcmQgPSBbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkMi5ib2FyZFNpemUpLFxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5ib2FyZFNpemUpLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGhvcml6b250YWwgPSBNYXRoLnJhbmRvbSgpID4gMC41O1xuICAgICAgY29uc3QgcmVzdWx0ID0gYm9hcmQyLnBsYWNlU2hpcChzaGlwLnNoaXAsIGNvb3JkLCBob3Jpem9udGFsKTtcbiAgICAgIGlmIChyZXN1bHQpIGZhaWxlZFNoaXBzLnB1c2goeyBzaGlwOiBuZXdTaGlwKHJlc3VsdCkgfSk7XG4gICAgfSk7XG4gICAgaWYgKGZhaWxlZFNoaXBzWzBdKSBwbGFjZUNvbVNoaXBzKGZhaWxlZFNoaXBzKTtcbiAgfVxuICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllcjE7XG4gIGxldCBlbmVteUJvYXJkID0gYm9hcmQyO1xuICBsZXQgZ2FtZUZpbmlzaCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgY3VycmVudFBsYXllciA9PT0gcGxheWVyMVxuICAgICAgPyAoY3VycmVudFBsYXllciA9IHBsYXllcjIpXG4gICAgICA6IChjdXJyZW50UGxheWVyID0gcGxheWVyMSk7XG5cbiAgICBlbmVteUJvYXJkID09PSBib2FyZDIgPyAoZW5lbXlCb2FyZCA9IGJvYXJkMSkgOiAoZW5lbXlCb2FyZCA9IGJvYXJkMik7XG4gIH1cblxuICBjb25zdCBwbGF5Um91bmQgPSAoY29vcmQsIGVuZW15Qm9hcmQpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBjdXJyZW50UGxheWVyLmlzc3VlQXR0YWNrKGVuZW15Qm9hcmQsIGNvb3JkKTtcbiAgICBpZiAocmVzdWx0ID09PSBcIlNxdWFyZSBhbHJlYWR5IGF0dGFja2VkXCIpIHJldHVybjtcbiAgICBpZiAoZW5lbXlCb2FyZC5oYXNBbGxTdW5rKCkpIGdhbWVGaW5pc2ggPSB0cnVlO1xuICAgIGlmICghIWdhbWVGaW5pc2gpIHJldHVybiBgJHtjdXJyZW50UGxheWVyLm5hbWV9IHdpbnMhYDtcbiAgICBzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYXlSb3VuZCxcbiAgICBwbGFjZUNvbVNoaXBzLFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UGxheWVyKGluaXRpYWxOYW1lKSB7XG4gIGNvbnN0IG5hbWUgPSBpbml0aWFsTmFtZTtcbiAgY29uc3QgY29tQXR0YWNrcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrQ29vcmQoKSB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgbGV0IGlzVmFsaWRBdHRhY2sgPSBmYWxzZTtcbiAgICAvLyBHZXQgeCAmIHkgYmV0d2VlbiAwIC0gOSAobm90IHZhcmlhYmxlIHRvIGJvYXJkIHNpemUpLCBjaGVja3MgaWYgc3F1YXJlIGhhcyBiZWVuIGF0dGFja2VkXG4gICAgd2hpbGUgKGlzVmFsaWRBdHRhY2sgPT09IGZhbHNlKSB7XG4gICAgICBpc1ZhbGlkQXR0YWNrID0gdHJ1ZTtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29tQXR0YWNrcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICBpZiAoY29vcmRbMF0gPT09IHggJiYgY29vcmRbMV0gPT09IHkpIGlzVmFsaWRBdHRhY2sgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb21BdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGNvbUF0dGFja3MsXG4gICAgaXNzdWVBdHRhY2soYm9hcmQsIGNvb3JkKSB7XG4gICAgICBsZXQgcmVzdWx0O1xuICAgICAgaWYgKG5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgICAgICBjb25zdCBjb21Db29yZCA9IGNvbXB1dGVyQXR0YWNrQ29vcmQoKTtcbiAgICAgICAgcmVzdWx0ID0gW2JvYXJkLnJlY2VpdmVBdHRhY2soY29tQ29vcmQpLCBjb21Db29yZF07XG4gICAgICB9IGVsc2UgcmVzdWx0ID0gYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgY29tcHV0ZXJBdHRhY2tDb29yZCxcbiAgfTtcbn1cbiIsImltcG9ydCBnYW1lQ29udHJvbGxlciBmcm9tICcuL2dhbWVjb250cm9sbGVyLmpzJztcbmNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyRE9NKCkge1xuXHRsZXQgYm9hcmRTaXplID0gMTA7XG5cdGxldCBwbGF5ZXJTaGlwc1BsYWNlZCA9IFtdO1xuXHRsZXQgY29tU2hpcHNQbGFjZWQgPSBbXTtcblx0Y29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUnKTtcblx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kLWdhbWUtbW9kYWwnKTtcblx0bGV0IHJvdW5kUmVhZHkgPSB0cnVlO1xuXG5cdGZ1bmN0aW9uIGRpc3BsYXlCb2FyZChib2FyZENvbnRhaW5lciwgYm9hcmQsIGlzQ2xpY2thYmxlID0gZmFsc2UpIHtcblx0XHRsZXQgZGlzcGxheUJvYXJkU2l6ZSA9IGJvYXJkLmdldEJvYXJkLmxlbmd0aCAtIDE7XG5cdFx0Ym9hcmRDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcblx0XHRib2FyZC5nZXRCb2FyZC5mb3JFYWNoKChyb3csIHkpID0+IHtcblx0XHRcdHJvdy5mb3JFYWNoKChjb2wsIHgpID0+IHtcblx0XHRcdFx0Y29uc3Qgc3F1YXJlID0gY3JlYXRlQm9hcmRTcXVhcmUoeCwgZGlzcGxheUJvYXJkU2l6ZSAtIHksIGlzQ2xpY2thYmxlKTtcblx0XHRcdFx0aWYgKCEhYm9hcmQuZ2V0Qm9hcmRbeF1bYm9hcmRTaXplIC0gMSAtIHldKVxuXHRcdFx0XHRcdGlmKCFpc0NsaWNrYWJsZSkgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcblx0XHRcdFx0Ym9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlQm9hcmRTcXVhcmUoeCwgeSwgaXNDbGlja2FibGUpIHtcblx0XHRjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zcXVhcmUnKTtcblx0XHRpZiAoISFpc0NsaWNrYWJsZSkge1xuXHRcdFx0c3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZScpO1xuXHRcdH1cblx0XHRzcXVhcmUuZGF0YXNldC54ID0geDtcblx0XHRzcXVhcmUuZGF0YXNldC55ID0geTtcblx0XHRyZXR1cm4gc3F1YXJlO1xuXHR9XG5cblx0ZnVuY3Rpb24gbWFrZUJvYXJkRHJvcHBhYmxlKGJvYXJkKSB7XG5cdFx0Ym9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHNldFVwQm9hcmREcm9wKTtcblx0XHRib2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzaGlwTGVuZ3RocyhuYW1lKSB7XG5cdFx0c3dpdGNoIChuYW1lKSB7XG5cdFx0XHRjYXNlICdjYXJyaWVyJzpcblx0XHRcdFx0cmV0dXJuIHsgbGVuZ3RoOiA1IH07XG5cdFx0XHRjYXNlICdiYXR0bGVzaGlwJzpcblx0XHRcdFx0cmV0dXJuIHsgbGVuZ3RoOiA0IH07XG5cdFx0XHRjYXNlICdkZXN0cm95ZXInOlxuXHRcdFx0XHRyZXR1cm4geyBsZW5ndGg6IDMgfTtcblx0XHRcdGNhc2UgJ3N1Ym1hcmluZSc6XG5cdFx0XHRcdHJldHVybiB7IGxlbmd0aDogMyB9O1xuXHRcdFx0Y2FzZSAncGF0cm9sLWJvYXQnOlxuXHRcdFx0XHRyZXR1cm4geyBsZW5ndGg6IDIgfTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRVcEJvYXJkRHJvcChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3Qgc2hpcFRvRHJvcCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlO1xuXHRcdGNvbnN0IHNoaXBOYW1lID0gc2hpcFRvRHJvcC5pZDtcblx0XHRjb25zdCBzaGlwID0gc2hpcExlbmd0aHMoc2hpcE5hbWUpO1xuXHRcdGNvbnN0IHggPSBldmVudC50YXJnZXQuZGF0YXNldC54O1xuXHRcdGNvbnN0IHkgPSBldmVudC50YXJnZXQuZGF0YXNldC55O1xuXHRcdGNvbnN0IGlzSG9yaXpvbnRhbCA9ICEhZXZlbnQuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0J2hvcml6b250YWwnXG5cdFx0KVxuXHRcdFx0PyB0cnVlXG5cdFx0XHQ6IGZhbHNlO1xuXHRcdC8vIGVycm9yIGhhbmRsaW5nXG5cdFx0aWYgKCFzaGlwKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnbm8gc2hpcCBzZWxlY3RlZCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IFtzdGFydFgsIHN0YXJ0WV0gPSBzdGFydFhZKHgsIHksIGlzSG9yaXpvbnRhbCwgc2hpcCk7XG5cblx0XHQvLyBjaGVja3MgaWYgc2hpcCBoYXMgYWxyZWFkeSBiZWVuIHBsYWNlZFxuXHRcdGNvbnN0IHZhbGlkUGxhY2UgPSBpc1ZhbGlkUGxhY2Uoc2hpcCwgc3RhcnRYLCBzdGFydFksIGlzSG9yaXpvbnRhbCk7XG5cdFx0aWYgKCF2YWxpZFBsYWNlKSB7XG5cdFx0XHRyZXR1cm4gYCR7c2hpcE5hbWV9IHBsYWNlbWVudCBmYWlsZWRgO1xuXHRcdH1cblx0XHQvLyBwbGFjZXMgc2hpcCBvbiBib2FyZFxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aXNIb3Jpem9udGFsXG5cdFx0XHRcdD8gZG9jdW1lbnRcblx0XHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke3N0YXJ0WCArIGl9J11bZGF0YS15PScke3N0YXJ0WX0nXWApXG5cdFx0XHRcdFx0XHQuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG5cdFx0XHRcdDogZG9jdW1lbnRcblx0XHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke3N0YXJ0WH0nXVtkYXRhLXk9JyR7c3RhcnRZIC0gaX0nXWApXG5cdFx0XHRcdFx0XHQuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuXHRcdH1cblx0XHQvLyBUb2dnbGVzIFNoaXAgZGlzcGxheWluZyBhZnRlciBiZWluZyBwbGFjZWRcblx0XHRpZiAoc2hpcFRvRHJvcCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRzaGlwVG9Ecm9wLmNsYXNzTGlzdC50b2dnbGUoJ3BsYWNlZCcpO1xuXHRcdH1cblx0XHRwbGF5ZXJTaGlwc1BsYWNlZC5wdXNoKHtcblx0XHRcdGxlbmd0aDogc2hpcC5sZW5ndGgsXG5cdFx0XHRjb29yZDogW3gsIHldLFxuXHRcdFx0aG9yaXpvbnRhbDogaXNIb3Jpem9udGFsLFxuXHRcdH0pO1xuXHRcdHJldHVybiAnc3VjY2Vzcyc7XG5cdH1cblxuXHQvLyBzZXRzIHN0YXJ0aW5nIHgsIHkgdG8gZW5zdXJlIHNoaXAgZG9lc250IG92ZXJmbG93XG5cdC8vIGlmIGhvcml6b250YWwsIHkgcG9zaXRpb24gY2hhbmdlcywgaWYgdmVydGljYWwsIHggcG9zaXRpb24gY2hhbmdlc1xuXHRmdW5jdGlvbiBzdGFydFhZKHgsIHksIGlzSG9yaXpvbnRhbCwgc2hpcCkge1xuXHRcdGNvbnN0IG5ld1ggPSBwYXJzZUludChcblx0XHRcdGlzSG9yaXpvbnRhbCA/IE1hdGgubWluKHgsIGJvYXJkU2l6ZSAtIHNoaXAubGVuZ3RoKSA6IHhcblx0XHQpO1xuXHRcdGNvbnN0IG5ld1kgPSBwYXJzZUludChpc0hvcml6b250YWwgPyB5IDogTWF0aC5tYXgoeSwgc2hpcC5sZW5ndGggLSAxKSk7XG5cdFx0cmV0dXJuIFtuZXdYLCBuZXdZXTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc2V0U2V0dXBCb2FyZChzZXR1cFNoaXBFbGVtZW50cykge1xuXHRcdHNldHVwU2hpcEVsZW1lbnRzLmZvckVhY2goKHNoaXApID0+IHtcblx0XHRcdGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygncGxhY2VkJykpIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2VkJyk7XG5cdFx0XHRpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcblx0XHRcdFx0c2hpcC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuXHRcdFx0XHRzaGlwLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRwbGF5ZXJTaGlwc1BsYWNlZCA9IFtdO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0UGxheWVyU2V0dXAoKSB7XG5cdFx0aWYgKHBsYXllclNoaXBzUGxhY2VkLmxlbmd0aCA8IDUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIHBsYXllclNoaXBzUGxhY2VkO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXR0YWNrRW5lbXlPbkNsaWNrKFxuXHRcdHBsYXllckJvYXJkRGlzcGxheSxcblx0XHRlbmVteUJvYXJkRGlzcGxheSxcblx0XHRnYW1lQ29udHJvbGxlcixcblx0XHRlbmVteUJvYXJkLFxuXHRcdHBsYXllckJvYXJkXG5cdCkge1xuXHRcdGVuZW15Qm9hcmREaXNwbGF5LmNoaWxkTm9kZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG5cdFx0XHRzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAocm91bmRSZWFkeSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdFx0cm91bmRSZWFkeSA9IGZhbHNlO1xuXHRcdFx0XHRkaWFsb2d1ZS50ZXh0Q29udGVudCA9ICcnO1xuXHRcdFx0XHRjb25zdCBwbGF5ZXJDb29yZHMgPSBbZS50YXJnZXQuZGF0YXNldC54LCBlLnRhcmdldC5kYXRhc2V0LnldO1xuXHRcdFx0XHRkaWFsb2d1ZS5hcHBlbmRDaGlsZChhdHRhY2tpbmdUZXh0KHBsYXllckNvb3JkcykpO1xuXHRcdFx0XHRjb25zdCBwbGF5ZXJSZXN1bHQgPSBnYW1lQ29udHJvbGxlci5wbGF5Um91bmQocGxheWVyQ29vcmRzLCBlbmVteUJvYXJkKTtcblx0XHRcdFx0Y29uc3QgY29tUmVzdWx0ID0gZ2FtZUNvbnRyb2xsZXIucGxheVJvdW5kKHBsYXllckNvb3JkcywgcGxheWVyQm9hcmQpO1xuXHRcdFx0XHRpZiAoIXBsYXllclJlc3VsdCB8fCAhY29tUmVzdWx0KSByZXR1cm47XG5cdFx0XHRcdGNvbnN0IGNvbVNxdWFyZSA9IHBsYXllckJvYXJkRGlzcGxheS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcdGBbZGF0YS14PVwiJHtjb21SZXN1bHRbMV1bMF19XCJdW2RhdGEteT1cIiR7Y29tUmVzdWx0WzFdWzFdfVwiXWBcblx0XHRcdFx0KTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHBsYXllclJlc3VsdCA9PT0gJ2hpdCcpIHtcblx0XHRcdFx0XHRcdHVwZGF0ZURpYWxvZ3VlKCdJdCB3YXMgYSBoaXQhJyk7XG5cdFx0XHRcdFx0XHRzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG5cdFx0XHRcdFx0XHRzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2thYmxlJyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwbGF5ZXJSZXN1bHQgPT09ICdtaXNzJykge1xuXHRcdFx0XHRcdFx0dXBkYXRlRGlhbG9ndWUoJ1lvdSBtaXNzZWQhJyk7XG5cdFx0XHRcdFx0XHRzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2thYmxlJyk7XG5cdFx0XHRcdFx0XHRzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzaG93RW5kR2FtZU1vZGFsKHBsYXllclJlc3VsdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dXBkYXRlRGlhbG9ndWUoJ0NvbXB1dGVyIGF0dGFja2luZy4uLicpO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChjb21SZXN1bHRbMF0gPT09ICdoaXQnKSB7XG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlRGlhbG9ndWUoJ1lvdSB3ZXJlIGhpdCEnKTtcblx0XHRcdFx0XHRcdFx0XHRjb21TcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoY29tUmVzdWx0WzBdID09PSAnbWlzcycpIHtcblx0XHRcdFx0XHRcdFx0XHR1cGRhdGVEaWFsb2d1ZSgnVGhlIGNvbXB1dGVyIG1pc3NlZCEnKTtcblx0XHRcdFx0XHRcdFx0XHRjb21TcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHNob3dFbmRHYW1lTW9kYWwoY29tUmVzdWx0KTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlRGlhbG9ndWUoJ1lvdXIgdHVybiwgY2xpY2sgdG8gYXR0YWNrJyk7XG5cdFx0XHRcdFx0XHRcdFx0cm91bmRSZWFkeSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH0sIDcwMCk7IFxuXHRcdFx0XHRcdFx0fSwgODAwKTsgXG5cdFx0XHRcdFx0fSwgODAwKTsgXG5cdFx0XHRcdH0sIDgwMCk7IFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG93RW5kR2FtZU1vZGFsKHJlc3VsdCkge1xuXHRcdGNvbnN0IGVuZE1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRlbmRNc2cudGV4dENvbnRlbnQgPSByZXN1bHQ7XG5cdFx0Y29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHJlc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVzdGFydC1idXR0b24nKTtcblx0XHRyZXN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ1Jlc3RhcnQgR2FtZSc7XG5cdFx0cmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG5cdFx0bW9kYWwuYXBwZW5kQ2hpbGQoZW5kTXNnKTtcblx0XHRtb2RhbC5hcHBlbmRDaGlsZChyZXN0YXJ0QnV0dG9uKTtcblx0XHRtb2RhbC5zaG93TW9kYWwoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZURpYWxvZ3VlKHRleHQpIHtcblx0XHRkaWFsb2d1ZS50ZXh0Q29udGVudCA9ICcnO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdGRpYWxvZ3VlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXR0YWNraW5nVGV4dChjb29yZCkge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBgQXR0YWNraW5nIHBvc2l0aW9uIFske2Nvb3JkWzBdfSwgJHtjb29yZFsxXX1dYDtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzVmFsaWRQbGFjZShzaGlwLCBzdGFydFgsIHN0YXJ0WSwgaXNIb3Jpem9udGFsKSB7XG5cdFx0bGV0IHZhbGlkUGxhY2UgPSB0cnVlO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGlzSG9yaXpvbnRhbCkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ZG9jdW1lbnRcblx0XHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke3N0YXJ0WCArIGl9J11bZGF0YS15PScke3N0YXJ0WX0nXWApXG5cdFx0XHRcdFx0XHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJylcblx0XHRcdFx0KVxuXHRcdFx0XHRcdHZhbGlkUGxhY2UgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRkb2N1bWVudFxuXHRcdFx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JyR7c3RhcnRYfSddW2RhdGEteT0nJHtzdGFydFkgLSBpfSddYClcblx0XHRcdFx0XHRcdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKVxuXHRcdFx0XHQpXG5cdFx0XHRcdFx0dmFsaWRQbGFjZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdmFsaWRQbGFjZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGR1bW15U2hpcERyb3Aoc2hpcE5hbWUsIHgsIHksIGlzSG9yaXpvbnRhbCkge1xuXHRcdGNvbnN0IHNoaXAgPSBzaGlwTGVuZ3RocyhzaGlwTmFtZSk7XG5cdFx0Y29uc3QgZHVtbXlFdmVudCA9IHtcblx0XHRcdHByZXZlbnREZWZhdWx0OiAoKSA9PiB7fSxcblx0XHRcdGRhdGFUcmFuc2Zlcjoge1xuXHRcdFx0XHRtb3pTb3VyY2VOb2RlOiB7XG5cdFx0XHRcdFx0aWQ6IHNoaXBOYW1lLFxuXHRcdFx0XHRcdGNsYXNzTGlzdDoge1xuXHRcdFx0XHRcdFx0Y29udGFpbnM6IChjbGFzc05hbWUpID0+IChjbGFzc05hbWUgPSBpc0hvcml6b250YWwpLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0dGFyZ2V0OiB7XG5cdFx0XHRcdGRhdGFzZXQ6IHsgeCwgeSB9LFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdGNvbnN0IHJlc3VsdCA9IHNldFVwQm9hcmREcm9wKGR1bW15RXZlbnQpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0ZnVuY3Rpb24gcmFuZG9taXNlU2V0dXAoc2V0dXBTaGlwRWxlbWVudHMpIHtcblx0XHRsZXQgc29tZUZhaWxlZCA9IGZhbHNlO1xuXHRcdHNldHVwU2hpcEVsZW1lbnRzLmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSByZXR1cm47XG5cdFx0XHRjb25zdCBzaGlwTmFtZSA9IHNoaXAuaWQ7XG5cdFx0XHRjb25zdCBbeCwgeV0gPSBnZXROZXdDb29yZHMoKTtcblx0XHRcdGNvbnN0IHJhbmRIb3Jpem9udGFsID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGR1bW15U2hpcERyb3Aoc2hpcE5hbWUsIHgsIHksIHJhbmRIb3Jpem9udGFsKTtcblx0XHRcdGlmICghKHJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSkge1xuXHRcdFx0XHRzb21lRmFpbGVkID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2hpcC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcblx0XHR9KTtcblx0XHRpZiAoc29tZUZhaWxlZCkgcmFuZG9taXNlU2V0dXAoc2V0dXBTaGlwRWxlbWVudHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TmV3Q29vcmRzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpLFxuXHRcdFx0TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKSxcblx0XHRdO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwbGF5Qm9hcmQsXG5cdFx0bWFrZUJvYXJkRHJvcHBhYmxlLFxuXHRcdHJlc2V0U2V0dXBCb2FyZCxcblx0XHRnZXRQbGF5ZXJTZXR1cCxcblx0XHRhdHRhY2tFbmVteU9uQ2xpY2ssXG5cdFx0cmFuZG9taXNlU2V0dXAsXG5cdH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdTaGlwKGxlbmd0aCkge1xuICBpZiAobGVuZ3RoIDw9IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhYm92ZSAwXCIpO1xuICB9XG4gIGxldCB0aW1lc0hpdCA9IDA7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIHRpbWVzSGl0Kys7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiB0aW1lc0hpdCA9PT0gbGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IG5ld1NoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgc2hpcCBmcm9tIFwiLi4vc3JjL3NoaXAuanNcIjtcbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4uL3NyYy9nYW1lYm9hcmQuanNcIjtcbmltcG9ydCBnYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vc3JjL2dhbWVjb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgcmVuZGVyRE9NIGZyb20gXCIuLi9zcmMvcmVuZGVyLmpzXCI7XG5jb25zb2xlLmNsZWFyKCk7XG5cbi8vIEVsZW1lbnQgRGVjbGFyYXRpb25cbmNvbnN0IHBsYXllclNldFVwQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtc2V0dXAtYm9hcmRcIik7XG5jb25zdCBzZXRVcFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXR1cC1zaGlwLXNxdWFyZS1jb250YWluZXJcIik7XG5jb25zdCBzZXRVcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1zZXR1cC1jb250YWluZXJcIik7XG5jb25zdCBwbGF5Qm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlpbmctYm9hcmQtY29udGFpbmVyXCIpO1xuY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0LWJ1dHRvblwiKTtcbmNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIik7XG5jb25zdCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbS1idXR0b25cIik7XG5jb25zdCBwbGF5ZXJCb2FyZERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEtYm9hcmRcIik7XG5jb25zdCBwbGF5ZXIyQm9hcmREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyLWJvYXJkXCIpO1xuY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpYWxvZ3VlXCIpO1xuXG5jb25zdCByZW5kZXIgPSByZW5kZXJET00oKTtcbmNvbnN0IHBsYXllckJvYXJkID0gZ2FtZUJvYXJkKCk7XG5jb25zdCBjb21Cb2FyZCA9IGdhbWVCb2FyZCh0cnVlKTtcbmNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcihwbGF5ZXJCb2FyZCwgY29tQm9hcmQpO1xuXG5yZW5kZXIuZGlzcGxheUJvYXJkKHBsYXllclNldFVwQm9hcmQsIHBsYXllckJvYXJkKTtcbnJlbmRlci5tYWtlQm9hcmREcm9wcGFibGUocGxheWVyU2V0VXBCb2FyZCk7XG5cbi8vIFNldCB1cCBSZXNldCBhbmQgU3RhcnQgYnV0dG9uc1xucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmVuZGVyLmRpc3BsYXlCb2FyZChwbGF5ZXJTZXRVcEJvYXJkLCBwbGF5ZXJCb2FyZCk7XG4gIHJlbmRlci5yZXNldFNldHVwQm9hcmQoc2V0VXBTaGlwcyk7XG4gIGlmICghZGlhbG9ndWUucXVlcnlTZWxlY3RvcihcImg0XCIpLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSlcbiAgICBkaWFsb2d1ZS5xdWVyeVNlbGVjdG9yKFwiaDRcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn0pO1xuXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBwbGFjZWRTaGlwcyA9IHJlbmRlci5nZXRQbGF5ZXJTZXR1cCgpO1xuICBpZiAoISFwbGFjZWRTaGlwcykge1xuICAgIHNldFVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwbGF5Qm9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHJlbmRlci5nZXRQbGF5ZXJTZXR1cCgpLmZvckVhY2goKHNoaXBQbGFjZWQpID0+IHtcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBzaGlwKHNoaXBQbGFjZWQubGVuZ3RoKTtcbiAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBzaGlwUGxhY2VkLmNvb3JkLCBzaGlwUGxhY2VkLmhvcml6b250YWwpO1xuICAgIH0pO1xuICAgIGdhbWUucGxhY2VDb21TaGlwcygpO1xuICAgIHJlbmRlci5kaXNwbGF5Qm9hcmQocGxheWVyQm9hcmREaXNwbGF5LCBwbGF5ZXJCb2FyZCk7XG4gICAgcmVuZGVyLmRpc3BsYXlCb2FyZChwbGF5ZXIyQm9hcmREaXNwbGF5LCBjb21Cb2FyZCwgdHJ1ZSk7XG4gICAgZGlhbG9ndWUudGV4dENvbnRlbnQgPSBcIkNsaWNrIG9uIHRoZSBlbmVteSBib2FyZCB0byBpc3N1ZSBhbiBhdHRhY2tcIjtcbiAgICByZW5kZXIuYXR0YWNrRW5lbXlPbkNsaWNrKFxuICAgICAgcGxheWVyQm9hcmREaXNwbGF5LFxuICAgICAgcGxheWVyMkJvYXJkRGlzcGxheSxcbiAgICAgIGdhbWUsXG4gICAgICBjb21Cb2FyZCxcbiAgICAgIHBsYXllckJvYXJkLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZGlhbG9ndWUucXVlcnlTZWxlY3RvcihcImg0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cbn0pO1xuLy8gU2V0IHVwIHJhbmRvbSBzZXR1cCBidXR0b25cbnJhbmRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZW5kZXIucmFuZG9taXNlU2V0dXAoc2V0VXBTaGlwcyk7XG59KTtcblxuLy8gQ2hhbmdlcyBkcmFnIGltYWdlIHRvIGFsaWduIHdpdGggY3Vyc29yXG5zZXRVcFNoaXBzLmZvckVhY2goKHNoaXBDb250YWluZXIpID0+IHtcbiAgc2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGUudGFyZ2V0LCAwLCAwKTtcbiAgfSk7XG59KTtcblxuLy8gQWxsb3dzIHNoaXAgb3JpZW50YXRpb24gdG8gYmUgY2hhbmdlZFxuc2V0VXBTaGlwcy5mb3JFYWNoKChzaGlwQ29udGFpbmVyKSA9PiB7XG4gIHNoaXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJob3Jpem9udGFsXCIpKSB7XG4gICAgICBzaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidmVydGljYWxcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInZlcnRpY2FsXCIpO1xuICAgICAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9yaXpvbnRhbFwiKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=