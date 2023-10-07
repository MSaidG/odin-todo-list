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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-color: yellowgreen;
    overflow: scroll;
}

.special {

    cursor: pointer;
    color: blue;
}

.selected {

    color: brown;
}


.list-item {

    display: grid;
    background-color: brown;

    /*max-height: 15vh;*/

    grid-template-columns: 1fr 5fr 1fr 1fr 1fr;
}

h3 {
    text-align: center;
}

.list-item p {
    text-align: center;
    max-width: 40vw;
    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;

}

.description {
    margin-top: 0px;
    margin-bottom: 5px;
    padding: 15px;
}

.description-input {

    min-height: 10vh;
    word-wrap: break-word;
    word-break: break-all;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;;IAEI,eAAe;IACf,WAAW;AACf;;AAEA;;IAEI,YAAY;AAChB;;;AAGA;;IAEI,aAAa;IACb,uBAAuB;;IAEvB,oBAAoB;;IAEpB,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,mBAAmB;;IAEnB,gBAAgB;IAChB,uBAAuB;;AAE3B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;AACjB;;AAEA;;IAEI,gBAAgB;IAChB,qBAAqB;IACrB,qBAAqB;AACzB","sourcesContent":["body {\n    background-color: yellowgreen;\n    overflow: scroll;\n}\n\n.special {\n\n    cursor: pointer;\n    color: blue;\n}\n\n.selected {\n\n    color: brown;\n}\n\n\n.list-item {\n\n    display: grid;\n    background-color: brown;\n\n    /*max-height: 15vh;*/\n\n    grid-template-columns: 1fr 5fr 1fr 1fr 1fr;\n}\n\nh3 {\n    text-align: center;\n}\n\n.list-item p {\n    text-align: center;\n    max-width: 40vw;\n    white-space: nowrap;\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n}\n\n.description {\n    margin-top: 0px;\n    margin-bottom: 5px;\n    padding: 15px;\n}\n\n.description-input {\n\n    min-height: 10vh;\n    word-wrap: break-word;\n    word-break: break-all;\n}"],"sourceRoot":""}]);
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBtn: () => (/* binding */ addBtn),
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   closeBtn: () => (/* binding */ closeBtn),
/* harmony export */   context: () => (/* binding */ context),
/* harmony export */   createTodoItem: () => (/* binding */ createTodoItem),
/* harmony export */   descriptionInpt: () => (/* binding */ descriptionInpt),
/* harmony export */   descriptionLbl: () => (/* binding */ descriptionLbl),
/* harmony export */   dialog: () => (/* binding */ dialog),
/* harmony export */   dialogText: () => (/* binding */ dialogText),
/* harmony export */   dueDateInpt: () => (/* binding */ dueDateInpt),
/* harmony export */   dueDateLbl: () => (/* binding */ dueDateLbl),
/* harmony export */   editKey: () => (/* binding */ editKey),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   list: () => (/* binding */ list),
/* harmony export */   listContext: () => (/* binding */ listContext),
/* harmony export */   priorityInpt: () => (/* binding */ priorityInpt),
/* harmony export */   priorityLbl: () => (/* binding */ priorityLbl),
/* harmony export */   projectBtn: () => (/* binding */ projectBtn),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   showBtn: () => (/* binding */ showBtn),
/* harmony export */   titleInpt: () => (/* binding */ titleInpt),
/* harmony export */   titleLbl: () => (/* binding */ titleLbl),
/* harmony export */   updateTodoItem: () => (/* binding */ updateTodoItem)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/logger.js");



// Navigation
const body = document.querySelector("body");
const dialog = document.createElement("dialog");
const context = document.createElement("div");
const showBtn = document.createElement("button");
const projectBtn = document.createElement("button");
const projectList = document.createElement("ul");
const header = document.createElement("header");

// Todo Form
const form = document.createElement("form");
const closeBtn = document.createElement("button");
const addBtn = document.createElement("button");
const dialogText = document.createElement("p");
const titleLbl = document.createElement("label");
const descriptionLbl = document.createElement("label");
const dueDateLbl = document.createElement("label");
const priorityLbl = document.createElement("label");
const titleInpt = document.createElement("input");
//export const descriptionInpt = document.createElement("input");
const descriptionInpt = document.createElement("textarea");
const dueDateInpt = document.createElement("input");
const priorityInpt = document.createElement("input");
const listContext = document.createElement("div");
const list = document.createElement("ul");

let editKey = 0;


context.classList.add("project");
context.setAttribute("id", "main");

header.style.display = "flex";
header.style.gap = "1rem";

list.style.display = "flex";
list.style.flexDirection = "column";
list.style.gap = "10px";

projectList.style.display = "flex";
projectList.style.gap = "2rem";

descriptionInpt.classList.add("description-input");

showBtn.textContent = "ADD TODO";
projectBtn.textContent = "NEW PROJECT";

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "10px";

// Dialog form
dialogText.textContent = "Add Your Todo";
titleLbl.textContent = "Title: ";
titleInpt.setAttribute("required", "");
descriptionLbl.textContent = "Description: ";
dueDateLbl.textContent = "Due Date: ";
priorityLbl.textContent = "Priority: ";
addBtn.textContent = "Add";
closeBtn.textContent = "Close";

showBtn.addEventListener("click", () => {
  addBtn.textContent = "Add";
  titleInpt.value = "";
  descriptionInpt.value = "";
  dueDateInpt.value = "";
  priorityInpt.value = "";
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});


body.append(context);
header.append(showBtn, projectBtn, projectList);
context.append(header, dialog, listContext);
dialog.append(form);
listContext.append(list);
form.append(dialogText, titleLbl, titleInpt, 
  descriptionLbl, descriptionInpt, 
  dueDateLbl, dueDateInpt,
  priorityLbl, priorityInpt,
  addBtn, closeBtn);

function createTodoItem (key) {
  let jsonData = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getData)(key);
  let data = JSON.parse(jsonData);
  let currentProject = context.id;

  if (data.project === currentProject) {
    const listItemContext = document.createElement("div");
    const buttonContext = document.createElement("div");
    const descriptionContext = document.createElement("div");
    const descriptionText = document.createElement("p");
    const titleH = document.createElement("h3");
    const descriptionP = document.createElement("p");
    const dueDateP = document.createElement("p");
    const priorityP = document.createElement("p");
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
  
    listItemContext.classList.add("list-item");

    listItemContext.style.justifyContent = "space-between";

    descriptionContext.style.backgroundColor = "red";
    descriptionContext.style.display = "none";
    descriptionText.textContent = data.description;
    descriptionText.classList.add("description");

    listItemContext.addEventListener("click", () => {
      if (descriptionContext.style.display === "none") {
        descriptionContext.style.display = "block";
      }
      else {
        descriptionContext.style.display = "none";
      }
    });

    listItem.classList.add("todo-item");
  
    buttonContext.style.display = "flex";
    buttonContext.style.gap = "10px";
  
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("id", key);
  
    editBtn.textContent = "Edit";
    editBtn.setAttribute("id", key);
  
    deleteBtn.addEventListener("click", (e) => {
  
      let key = e.target.id;
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.removeData)(key);
      listItem.remove();
    });
  
    editBtn.addEventListener("click", (e) => {
  
      editKey = e.target.id;
      addBtn.textContent = "Edit";
  
      let jsonData = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getData)(editKey);
      let data = JSON.parse(jsonData);
  
      dialog.showModal();
  
      titleInpt.value = data.title;  
      descriptionInpt.value = data.description;  
      dueDateInpt.value = data.dueDate;  
      priorityInpt.value = data.priority;  
  
    });
  
    if (data.title)titleH.textContent = data.title;
    if (data.description) descriptionP.textContent = data.description;
    if (data.dueDate) dueDateP.textContent = data.dueDate;
    if (data.priority) priorityP.textContent = data.priority;
  
    descriptionContext.append(descriptionText);
    buttonContext.append(editBtn, deleteBtn);
    listItemContext.append(titleH, descriptionP, dueDateP, priorityP, buttonContext);
    listItem.append(listItemContext, descriptionContext);
    list.append(listItem)
  }

}

function updateTodoItem (key) {
  
  const listItems = document.querySelectorAll(".todo-item");

  listItems.forEach((item) => {

    let button = item.querySelector("button");

    if (key === button.id)
    {
      item.remove();
    }
  });

}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayAllData: () => (/* binding */ displayAllData),
/* harmony export */   getData: () => (/* binding */ getData),
/* harmony export */   removeData: () => (/* binding */ removeData),
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/logger.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");






// DOM Manipulation
const storage = window["localStorage"];


_dom__WEBPACK_IMPORTED_MODULE_2__.addBtn.addEventListener("click", (e) => {

  e.preventDefault();
  let isValid = checkValidation();
  
  if (isValid) {

    if (e.target.textContent === "Add") {
      
        let todo = setTodo(_dom__WEBPACK_IMPORTED_MODULE_2__.titleInpt.value, _dom__WEBPACK_IMPORTED_MODULE_2__.descriptionInpt.value, 
          _dom__WEBPACK_IMPORTED_MODULE_2__.dueDateInpt.value, _dom__WEBPACK_IMPORTED_MODULE_2__.priorityInpt.value);
        
        storeData(todo);
        displayData(todo.id);
    }
    else if (e.target.textContent === "Edit") {

        let jsonData = getData(_dom__WEBPACK_IMPORTED_MODULE_2__.editKey);
        let data = JSON.parse(jsonData);

        data.title = _dom__WEBPACK_IMPORTED_MODULE_2__.titleInpt.value;
        data.description = _dom__WEBPACK_IMPORTED_MODULE_2__.descriptionInpt.value;
        data.dueDate = _dom__WEBPACK_IMPORTED_MODULE_2__.dueDateInpt.value;
        data.priority = _dom__WEBPACK_IMPORTED_MODULE_2__.priorityInpt.value;

        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateTodoItem)(_dom__WEBPACK_IMPORTED_MODULE_2__.editKey);
        storeData(data);
        displayData(data.id);
    } 

  }

});


function checkValidation() {

  _dom__WEBPACK_IMPORTED_MODULE_2__.titleInpt.setCustomValidity(""); 
  let isValid = _dom__WEBPACK_IMPORTED_MODULE_2__.titleInpt.reportValidity();
  
  if (isValid){
    _dom__WEBPACK_IMPORTED_MODULE_2__.dialog.close();
  } 
  else 
  {
    _dom__WEBPACK_IMPORTED_MODULE_2__.titleInpt.setCustomValidity("Shouldn't be empty!");
  }
  
  return isValid;
}

// TODO OBJECT
function setTodo(title, description, dueDate, priority) {
  const todo = {}
  let project = document.querySelector(".project").id;

  todo.id = Date.now().toString();
  todo.title = title;
  todo.description = description;
  todo.dueDate = dueDate;
  todo.priority = priority;
  todo.project = project;

  return todo;
}

// CREATE TODO LIST
displayAllData();
displayData();
(0,_project__WEBPACK_IMPORTED_MODULE_3__.displayProjects)();
function displayData (key) {

  if (hasNumber(key)) {

    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createTodoItem)(key);
  }

}
function displayAllData() {

  for (let key in storage) {

    if (hasNumber(key)) {

      (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createTodoItem)(key);
    }
  
  }
}


function hasNumber(myString) {
  return /\d/.test(myString);
}

// USE OF FORMAT AND COMPARE

// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ]
// dates.sort(compareAsc)
// dates.forEach((e) => {
// 
//     p(e);
// });




// WINDOW FUNCTIONS

function storeData (item) {

  return storage.setItem(item.id, JSON.stringify(item));
}

function getData (key) {

  return storage.getItem(key);
}

function removeData (key) {

  return storage.removeItem(key);
}


if (!Window.storeData) {
  Window.storeData = storeData;
} else {
  console.warn('storeData is already assigned!');
}

if (!Window.getData) {
  Window.getData = getData;
} else {
  console.warn('getStorageData is already assigned!');
}

/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
function p(text) {
    console.log(text);
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectListItem: () => (/* binding */ createProjectListItem),
/* harmony export */   displayProject: () => (/* binding */ displayProject),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");



let projects = [];


_dom__WEBPACK_IMPORTED_MODULE_0__.projectBtn.addEventListener("click", () => {

    _dom__WEBPACK_IMPORTED_MODULE_0__.projectBtn.style.display = "none";
  
    const div = document.createElement("div");
    const inpt = document.createElement("input");
    const createBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
  
  
    inpt.placeholder = "Project Name: ";
    inpt.setAttribute("required", "");
  
    div.style.display = "flex";
    div.style.backgroundColor = "brown";
  
    createBtn.textContent = "Create";
    cancelBtn.textContent = "Cancel";
  
    div.append(inpt, createBtn, cancelBtn);
    _dom__WEBPACK_IMPORTED_MODULE_0__.projectBtn.after(div);
  
    createBtn.addEventListener("click", () => {
  
      inpt.setCustomValidity(""); 
      let isValid = inpt.reportValidity();
      
      if (isValid){
  
        projects.push(inpt.value);
        ___WEBPACK_IMPORTED_MODULE_1__.storage.setItem("projects", projects);
        div.remove();
        _dom__WEBPACK_IMPORTED_MODULE_0__.projectBtn.style.display = "inline-block";
        displayProject();
      } 
      else 
      {
        inpt.setCustomValidity("Shouldn't be empty!");
      }
  
    });
  
    cancelBtn.addEventListener("click", () => {
      div.remove();
      _dom__WEBPACK_IMPORTED_MODULE_0__.projectBtn.style.display = "inline-block";
    });
    
  });
  


function displayProject () {

    let data = (0,___WEBPACK_IMPORTED_MODULE_1__.getData)("projects");
    projects = data.split(",");
  
    let project = projects[projects.length - 1];
  
    createProjectListItem(project);
  
  }
  
  
  function displayProjects () {
  
    let data = (0,___WEBPACK_IMPORTED_MODULE_1__.getData)("projects");
    projects = data.split(",");
  
    for (let project of projects) {
      createProjectListItem(project);
    }
  
  }
  
  function createProjectListItem(project) {
    let li = document.createElement("li");
  
    li.classList.add("project");
    li.textContent = project;
  
    if (project === "main") li.classList.add("selected");
  
    li.addEventListener("mouseover", (e) => {
      e.target.classList.add("special");
    });
  
    li.addEventListener("mouseout", (e) => {
      e.target.classList.remove("special");
  
    });
  
    li.addEventListener("click", (e) => {
      _dom__WEBPACK_IMPORTED_MODULE_0__.context.setAttribute("id", e.target.textContent);
  
      updateAllTodoItems();
      (0,___WEBPACK_IMPORTED_MODULE_1__.displayAllData)();
  
      document.querySelector(".selected").classList.remove("selected");
      e.target.classList.add("selected");
  
    });
  
    _dom__WEBPACK_IMPORTED_MODULE_0__.projectList.append(li);
  }

    
function updateAllTodoItems () {

    const listItems = document.querySelectorAll(".todo-item");
  
    listItems.forEach((item) => {
  
        item.remove();
      
    });
  
}
  


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTSx5Q0FBTztBQUNiO0FBQ0E7QUFDQSxNQUFNLGlEQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSSw2Q0FBVztBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztVQzNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5zcGVjaWFsIHtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuLnNlbGVjdGVkIHtcblxuICAgIGNvbG9yOiBicm93bjtcbn1cblxuXG4ubGlzdC1pdGVtIHtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG5cbiAgICAvKm1heC1oZWlnaHQ6IDE1dmg7Ki9cblxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnIgMWZyIDFmcjtcbn1cblxuaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxpc3QtaXRlbSBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA0MHZ3O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uZGVzY3JpcHRpb24taW5wdXQge1xuXG4gICAgbWluLWhlaWdodDogMTB2aDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCOztJQUV2QixvQkFBb0I7O0lBRXBCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1COztJQUVuQixnQkFBZ0I7SUFDaEIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5zcGVjaWFsIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG5cXG4gICAgY29sb3I6IGJyb3duO1xcbn1cXG5cXG5cXG4ubGlzdC1pdGVtIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxuXFxuICAgIC8qbWF4LWhlaWdodDogMTV2aDsqL1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyIDFmciAxZnI7XFxufVxcblxcbmgzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNDB2dztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24taW5wdXQge1xcblxcbiAgICBtaW4taGVpZ2h0OiAxMHZoO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7cmVtb3ZlRGF0YSwgZ2V0RGF0YX0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgcCBmcm9tICcuL2xvZ2dlcic7XG5cbi8vIE5hdmlnYXRpb25cbmV4cG9ydCBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5leHBvcnQgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbmV4cG9ydCBjb25zdCBjb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmV4cG9ydCBjb25zdCBzaG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbmV4cG9ydCBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4vLyBUb2RvIEZvcm1cbmV4cG9ydCBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5leHBvcnQgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5leHBvcnQgY29uc3QgZGlhbG9nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuZXhwb3J0IGNvbnN0IHRpdGxlTGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuZXhwb3J0IGNvbnN0IGRlc2NyaXB0aW9uTGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuZXhwb3J0IGNvbnN0IGR1ZURhdGVMYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5leHBvcnQgY29uc3QgcHJpb3JpdHlMYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5leHBvcnQgY29uc3QgdGl0bGVJbnB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy9leHBvcnQgY29uc3QgZGVzY3JpcHRpb25JbnB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IGRlc2NyaXB0aW9uSW5wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbmV4cG9ydCBjb25zdCBkdWVEYXRlSW5wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmV4cG9ydCBjb25zdCBwcmlvcml0eUlucHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5leHBvcnQgY29uc3QgbGlzdENvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZXhwb3J0IGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbmV4cG9ydCBsZXQgZWRpdEtleSA9IDA7XG5cblxuY29udGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbmNvbnRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuXG5oZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuaGVhZGVyLnN0eWxlLmdhcCA9IFwiMXJlbVwiO1xuXG5saXN0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbmxpc3Quc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG5saXN0LnN0eWxlLmdhcCA9IFwiMTBweFwiO1xuXG5wcm9qZWN0TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5wcm9qZWN0TGlzdC5zdHlsZS5nYXAgPSBcIjJyZW1cIjtcblxuZGVzY3JpcHRpb25JbnB0LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcblxuc2hvd0J0bi50ZXh0Q29udGVudCA9IFwiQUREIFRPRE9cIjtcbnByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIk5FVyBQUk9KRUNUXCI7XG5cbmZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuZm9ybS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbmZvcm0uc3R5bGUuZ2FwID0gXCIxMHB4XCI7XG5cbi8vIERpYWxvZyBmb3JtXG5kaWFsb2dUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgWW91ciBUb2RvXCI7XG50aXRsZUxibC50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiO1xudGl0bGVJbnB0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuZGVzY3JpcHRpb25MYmwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbmR1ZURhdGVMYmwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIjtcbnByaW9yaXR5TGJsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG5hZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG5cbnNob3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgdGl0bGVJbnB0LnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb25JbnB0LnZhbHVlID0gXCJcIjtcbiAgZHVlRGF0ZUlucHQudmFsdWUgPSBcIlwiO1xuICBwcmlvcml0eUlucHQudmFsdWUgPSBcIlwiO1xuICBkaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlhbG9nLmNsb3NlKCk7XG59KTtcblxuXG5ib2R5LmFwcGVuZChjb250ZXh0KTtcbmhlYWRlci5hcHBlbmQoc2hvd0J0biwgcHJvamVjdEJ0biwgcHJvamVjdExpc3QpO1xuY29udGV4dC5hcHBlbmQoaGVhZGVyLCBkaWFsb2csIGxpc3RDb250ZXh0KTtcbmRpYWxvZy5hcHBlbmQoZm9ybSk7XG5saXN0Q29udGV4dC5hcHBlbmQobGlzdCk7XG5mb3JtLmFwcGVuZChkaWFsb2dUZXh0LCB0aXRsZUxibCwgdGl0bGVJbnB0LCBcbiAgZGVzY3JpcHRpb25MYmwsIGRlc2NyaXB0aW9uSW5wdCwgXG4gIGR1ZURhdGVMYmwsIGR1ZURhdGVJbnB0LFxuICBwcmlvcml0eUxibCwgcHJpb3JpdHlJbnB0LFxuICBhZGRCdG4sIGNsb3NlQnRuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtIChrZXkpIHtcbiAgbGV0IGpzb25EYXRhID0gZ2V0RGF0YShrZXkpO1xuICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xuICBsZXQgY3VycmVudFByb2plY3QgPSBjb250ZXh0LmlkO1xuXG4gIGlmIChkYXRhLnByb2plY3QgPT09IGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgY29uc3QgbGlzdEl0ZW1Db250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBidXR0b25Db250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHRpdGxlSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkdWVEYXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIFxuICAgIGxpc3RJdGVtQ29udGV4dC5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtXCIpO1xuXG4gICAgbGlzdEl0ZW1Db250ZXh0LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1iZXR3ZWVuXCI7XG5cbiAgICBkZXNjcmlwdGlvbkNvbnRleHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICBkZXNjcmlwdGlvbkNvbnRleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IGRhdGEuZGVzY3JpcHRpb247XG4gICAgZGVzY3JpcHRpb25UZXh0LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcblxuICAgIGxpc3RJdGVtQ29udGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGRlc2NyaXB0aW9uQ29udGV4dC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRleHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKTtcbiAgXG4gICAgYnV0dG9uQ29udGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgYnV0dG9uQ29udGV4dC5zdHlsZS5nYXAgPSBcIjEwcHhcIjtcbiAgXG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwga2V5KTtcbiAgXG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwga2V5KTtcbiAgXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBcbiAgICAgIGxldCBrZXkgPSBlLnRhcmdldC5pZDtcbiAgICAgIHJlbW92ZURhdGEoa2V5KTtcbiAgICAgIGxpc3RJdGVtLnJlbW92ZSgpO1xuICAgIH0pO1xuICBcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBcbiAgICAgIGVkaXRLZXkgPSBlLnRhcmdldC5pZDtcbiAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICBcbiAgICAgIGxldCBqc29uRGF0YSA9IGdldERhdGEoZWRpdEtleSk7XG4gICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xuICBcbiAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgXG4gICAgICB0aXRsZUlucHQudmFsdWUgPSBkYXRhLnRpdGxlOyAgXG4gICAgICBkZXNjcmlwdGlvbklucHQudmFsdWUgPSBkYXRhLmRlc2NyaXB0aW9uOyAgXG4gICAgICBkdWVEYXRlSW5wdC52YWx1ZSA9IGRhdGEuZHVlRGF0ZTsgIFxuICAgICAgcHJpb3JpdHlJbnB0LnZhbHVlID0gZGF0YS5wcmlvcml0eTsgIFxuICBcbiAgICB9KTtcbiAgXG4gICAgaWYgKGRhdGEudGl0bGUpdGl0bGVILnRleHRDb250ZW50ID0gZGF0YS50aXRsZTtcbiAgICBpZiAoZGF0YS5kZXNjcmlwdGlvbikgZGVzY3JpcHRpb25QLnRleHRDb250ZW50ID0gZGF0YS5kZXNjcmlwdGlvbjtcbiAgICBpZiAoZGF0YS5kdWVEYXRlKSBkdWVEYXRlUC50ZXh0Q29udGVudCA9IGRhdGEuZHVlRGF0ZTtcbiAgICBpZiAoZGF0YS5wcmlvcml0eSkgcHJpb3JpdHlQLnRleHRDb250ZW50ID0gZGF0YS5wcmlvcml0eTtcbiAgXG4gICAgZGVzY3JpcHRpb25Db250ZXh0LmFwcGVuZChkZXNjcmlwdGlvblRleHQpO1xuICAgIGJ1dHRvbkNvbnRleHQuYXBwZW5kKGVkaXRCdG4sIGRlbGV0ZUJ0bik7XG4gICAgbGlzdEl0ZW1Db250ZXh0LmFwcGVuZCh0aXRsZUgsIGRlc2NyaXB0aW9uUCwgZHVlRGF0ZVAsIHByaW9yaXR5UCwgYnV0dG9uQ29udGV4dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kKGxpc3RJdGVtQ29udGV4dCwgZGVzY3JpcHRpb25Db250ZXh0KTtcbiAgICBsaXN0LmFwcGVuZChsaXN0SXRlbSlcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb2RvSXRlbSAoa2V5KSB7XG4gIFxuICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8taXRlbVwiKTtcblxuICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgbGV0IGJ1dHRvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcblxuICAgIGlmIChrZXkgPT09IGJ1dHRvbi5pZClcbiAgICB7XG4gICAgICBpdGVtLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG5cbn1cblxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgcCBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBkaWFsb2csIGFkZEJ0biwgdGl0bGVJbnB0LFxuICBkZXNjcmlwdGlvbklucHQsICBkdWVEYXRlSW5wdCwgIHByaW9yaXR5SW5wdCwgXG4gIGNyZWF0ZVRvZG9JdGVtLCBlZGl0S2V5LCB1cGRhdGVUb2RvSXRlbSB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8vIERPTSBNYW5pcHVsYXRpb25cbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gd2luZG93W1wibG9jYWxTdG9yYWdlXCJdO1xuXG5cbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBpc1ZhbGlkID0gY2hlY2tWYWxpZGF0aW9uKCk7XG4gIFxuICBpZiAoaXNWYWxpZCkge1xuXG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkFkZFwiKSB7XG4gICAgICBcbiAgICAgICAgbGV0IHRvZG8gPSBzZXRUb2RvKHRpdGxlSW5wdC52YWx1ZSwgZGVzY3JpcHRpb25JbnB0LnZhbHVlLCBcbiAgICAgICAgICBkdWVEYXRlSW5wdC52YWx1ZSwgcHJpb3JpdHlJbnB0LnZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIHN0b3JlRGF0YSh0b2RvKTtcbiAgICAgICAgZGlzcGxheURhdGEodG9kby5pZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkVkaXRcIikge1xuXG4gICAgICAgIGxldCBqc29uRGF0YSA9IGdldERhdGEoZWRpdEtleSk7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XG5cbiAgICAgICAgZGF0YS50aXRsZSA9IHRpdGxlSW5wdC52YWx1ZTtcbiAgICAgICAgZGF0YS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdC52YWx1ZTtcbiAgICAgICAgZGF0YS5kdWVEYXRlID0gZHVlRGF0ZUlucHQudmFsdWU7XG4gICAgICAgIGRhdGEucHJpb3JpdHkgPSBwcmlvcml0eUlucHQudmFsdWU7XG5cbiAgICAgICAgdXBkYXRlVG9kb0l0ZW0oZWRpdEtleSk7XG4gICAgICAgIHN0b3JlRGF0YShkYXRhKTtcbiAgICAgICAgZGlzcGxheURhdGEoZGF0YS5pZCk7XG4gICAgfSBcblxuICB9XG5cbn0pO1xuXG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRhdGlvbigpIHtcblxuICB0aXRsZUlucHQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7IFxuICBsZXQgaXNWYWxpZCA9IHRpdGxlSW5wdC5yZXBvcnRWYWxpZGl0eSgpO1xuICBcbiAgaWYgKGlzVmFsaWQpe1xuICAgIGRpYWxvZy5jbG9zZSgpO1xuICB9IFxuICBlbHNlIFxuICB7XG4gICAgdGl0bGVJbnB0LnNldEN1c3RvbVZhbGlkaXR5KFwiU2hvdWxkbid0IGJlIGVtcHR5IVwiKTtcbiAgfVxuICBcbiAgcmV0dXJuIGlzVmFsaWQ7XG59XG5cbi8vIFRPRE8gT0JKRUNUXG5mdW5jdGlvbiBzZXRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgdG9kbyA9IHt9XG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0XCIpLmlkO1xuXG4gIHRvZG8uaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gIHRvZG8udGl0bGUgPSB0aXRsZTtcbiAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0b2RvLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0b2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRvZG8ucHJvamVjdCA9IHByb2plY3Q7XG5cbiAgcmV0dXJuIHRvZG87XG59XG5cbi8vIENSRUFURSBUT0RPIExJU1RcbmRpc3BsYXlBbGxEYXRhKCk7XG5kaXNwbGF5RGF0YSgpO1xuZGlzcGxheVByb2plY3RzKCk7XG5mdW5jdGlvbiBkaXNwbGF5RGF0YSAoa2V5KSB7XG5cbiAgaWYgKGhhc051bWJlcihrZXkpKSB7XG5cbiAgICBjcmVhdGVUb2RvSXRlbShrZXkpO1xuICB9XG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsRGF0YSgpIHtcblxuICBmb3IgKGxldCBrZXkgaW4gc3RvcmFnZSkge1xuXG4gICAgaWYgKGhhc051bWJlcihrZXkpKSB7XG5cbiAgICAgIGNyZWF0ZVRvZG9JdGVtKGtleSk7XG4gICAgfVxuICBcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGhhc051bWJlcihteVN0cmluZykge1xuICByZXR1cm4gL1xcZC8udGVzdChteVN0cmluZyk7XG59XG5cbi8vIFVTRSBPRiBGT1JNQVQgQU5EIENPTVBBUkVcblxuLy8gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ3l5eXktTU0tZGQnKVxuLy8gY29uc3QgZGF0ZXMgPSBbXG4vLyAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuLy8gICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4vLyAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKSxcbi8vIF1cbi8vIGRhdGVzLnNvcnQoY29tcGFyZUFzYylcbi8vIGRhdGVzLmZvckVhY2goKGUpID0+IHtcbi8vIFxuLy8gICAgIHAoZSk7XG4vLyB9KTtcblxuXG5cblxuLy8gV0lORE9XIEZVTkNUSU9OU1xuXG5mdW5jdGlvbiBzdG9yZURhdGEgKGl0ZW0pIHtcblxuICByZXR1cm4gc3RvcmFnZS5zZXRJdGVtKGl0ZW0uaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEgKGtleSkge1xuXG4gIHJldHVybiBzdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURhdGEgKGtleSkge1xuXG4gIHJldHVybiBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbn1cblxuXG5pZiAoIVdpbmRvdy5zdG9yZURhdGEpIHtcbiAgV2luZG93LnN0b3JlRGF0YSA9IHN0b3JlRGF0YTtcbn0gZWxzZSB7XG4gIGNvbnNvbGUud2Fybignc3RvcmVEYXRhIGlzIGFscmVhZHkgYXNzaWduZWQhJyk7XG59XG5cbmlmICghV2luZG93LmdldERhdGEpIHtcbiAgV2luZG93LmdldERhdGEgPSBnZXREYXRhO1xufSBlbHNlIHtcbiAgY29uc29sZS53YXJuKCdnZXRTdG9yYWdlRGF0YSBpcyBhbHJlYWR5IGFzc2lnbmVkIScpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHAodGV4dCkge1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdExpc3QsIHByb2plY3RCdG4sIGNvbnRleHQgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IGdldERhdGEsIGRpc3BsYXlBbGxEYXRhLCBzdG9yYWdlIH0gZnJvbSBcIi5cIjtcblxubGV0IHByb2plY3RzID0gW107XG5cblxucHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgcHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIFxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIFxuICBcbiAgICBpbnB0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IE5hbWU6IFwiO1xuICAgIGlucHQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIFxuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYnJvd25cIjtcbiAgXG4gICAgY3JlYXRlQnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBcbiAgICBkaXYuYXBwZW5kKGlucHQsIGNyZWF0ZUJ0biwgY2FuY2VsQnRuKTtcbiAgICBwcm9qZWN0QnRuLmFmdGVyKGRpdik7XG4gIFxuICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBcbiAgICAgIGlucHQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7IFxuICAgICAgbGV0IGlzVmFsaWQgPSBpbnB0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICBcbiAgICAgIGlmIChpc1ZhbGlkKXtcbiAgXG4gICAgICAgIHByb2plY3RzLnB1c2goaW5wdC52YWx1ZSk7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIHByb2plY3RzKTtcbiAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgICBwcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgICAgfSBcbiAgICAgIGVsc2UgXG4gICAgICB7XG4gICAgICAgIGlucHQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJTaG91bGRuJ3QgYmUgZW1wdHkhXCIpO1xuICAgICAgfVxuICBcbiAgICB9KTtcbiAgXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXYucmVtb3ZlKCk7XG4gICAgICBwcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIH0pO1xuICAgIFxuICB9KTtcbiAgXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0ICgpIHtcblxuICAgIGxldCBkYXRhID0gZ2V0RGF0YShcInByb2plY3RzXCIpO1xuICAgIHByb2plY3RzID0gZGF0YS5zcGxpdChcIixcIik7XG4gIFxuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV07XG4gIFxuICAgIGNyZWF0ZVByb2plY3RMaXN0SXRlbShwcm9qZWN0KTtcbiAgXG4gIH1cbiAgXG4gIFxuICBleHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzICgpIHtcbiAgXG4gICAgbGV0IGRhdGEgPSBnZXREYXRhKFwicHJvamVjdHNcIik7XG4gICAgcHJvamVjdHMgPSBkYXRhLnNwbGl0KFwiLFwiKTtcbiAgXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgY3JlYXRlUHJvamVjdExpc3RJdGVtKHByb2plY3QpO1xuICAgIH1cbiAgXG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TGlzdEl0ZW0ocHJvamVjdCkge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgXG4gICAgbGkuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgbGkudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICBcbiAgICBpZiAocHJvamVjdCA9PT0gXCJtYWluXCIpIGxpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNwZWNpYWxcIik7XG4gICAgfSk7XG4gIFxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInNwZWNpYWxcIik7XG4gIFxuICAgIH0pO1xuICBcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICBcbiAgICAgIHVwZGF0ZUFsbFRvZG9JdGVtcygpO1xuICAgICAgZGlzcGxheUFsbERhdGEoKTtcbiAgXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgXG4gICAgfSk7XG4gIFxuICAgIHByb2plY3RMaXN0LmFwcGVuZChsaSk7XG4gIH1cblxuICAgIFxuZnVuY3Rpb24gdXBkYXRlQWxsVG9kb0l0ZW1zICgpIHtcblxuICAgIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1pdGVtXCIpO1xuICBcbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBcbiAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgIFxuICAgIH0pO1xuICBcbn1cbiAgXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==