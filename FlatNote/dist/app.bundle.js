/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/*  6 row x 5 col master grid*/
:root{
  --header-space: 40px;
  --light-background: #DFE6EE;
}

body{
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

p{
  color: #656363;
  margin: 0;
  font-size: 14px;
}

h3{
  margin: 5px;
  margin-left: 0;
  font-weight: 600;
}

h2{
  font-weight: lighter;
}

h1{
  font-size: 23px;
}


.content{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(8, 150px);

}

svg{
  width: 30px;
  height: auto;
}
.dashboard-logo{
  width: 50px;
  height: auto;
}

.home-button{
  margin-top: 20px;
  
}

/* ------- Sidebar Styles -------------------------- */ 

.sidebar{
  grid-column: 1/2;
  grid-row: 1/9; 
  background-color: #81B622; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
}


.project-div{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: white;
  padding-left: 25px;
  max-height: 46px;
}




/* Header bar Section -------------------------------------*/ 


/* top line -------- */

.header{
  grid-column: 2/6;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 0;

}

.search-actions-bar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}



/* ----- bottom line -------- */



.profile-actions-bar{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  gap: 20px;
  width: 100%;
}

.profile{
  display: flex;
  margin-right: auto;
  align-items: center;
  gap: 8px;
  padding-left: var(--header-space);

}

.nav-buttons{
  display: flex;
  gap: 30px;
  padding-right: var(--header-space);

}


/* ----- header flex item children styles -------- */

.profile-icon-small{
  max-height: 60px;
  width: auto;
}
.profile-icon-large{
  max-height: 80px;
  width: auto;
}

button{
  border-radius: 24px;
  background-color: #81B622;
  border-width: 0;
  color: white;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: bold;
}

.search-button{
  background-color: transparent;
  border-radius: 0;
  padding: 0;

}

#search-bar{
  border-radius: 10px;
  height: 25px;
  border-width: 0;
  width: 100%;
  background-color: var(--light-background);
}

.search-wrapper{
  flex-basis: 100%;
}
.profile-name{
  margin-top: 0;
}

.profile-text{
  max-height: 60px;
}

h4{
  margin: 0;
  font-weight: lighter;
}

/* ----- main dash content -------- */

.main-dash{
  grid-column: 2/6;
  grid-row: 2/9;
  background-color: #DFE6EE;
  display: grid;
  grid-template-columns: repeat(40, 1fr);
  grid-template-rows: repeat(19, 30px);
}


.projects-text{
  grid-row: 1/3;
  grid-column: 2/13;
}



.to-do-container{
  grid-row: 3/19;
  grid-column: 2/14;
}

.in-progress-container{
  grid-row: 3/19;
  grid-column: 15/27;
}

.complete-container{
  grid-row: 3/19;
  grid-column: 28/40;
}

.task-area{
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}


.tile{
  background-color: white;  
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-left: 8px solid #EAB325;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 8px;
  padding-top: 8px;
  padding-right: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  gap: 15px;
}

.status-label{
  padding-left: 15px;
  margin-top: 10px;
}

.tile-actions{
  display: flex;
  flex-direction: row;  
  margin-left: auto; 
  margin-right: 8px;
  margin-bottom: 8px;
  gap: 5px;
  align-items: center;
  
}

hr{
  border: none;
  width: 75%;
  border-top: 1px dashed #ccc;/* Set the line color */
  margin-top: 5px;/* Add some vertical spacing */
  align-self: center;
}

.announcements{
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
}


/* ----- edit modal -- display -------- */

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fff; /* White background */
  margin: auto; /* Center the modal */
  padding: 20px;
  border: 1px solid #888;
  width: 30%; /* Adjust width as needed */
  position: relative; /* Position the container */
  top: 50%; /* Position from the top */
  transform: translateY(-50%); /* Center vertically */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); /* Add a shadow */
  border-radius: 15px;
}

textarea {
  width: 60%; /* Set the desired fixed width */
  resize: vertical; /* Allow vertical resizing, but prevent horizontal resizing */
  font-family: inherit; /* Optional: Inherit the font from the parent element */
  font-size: 1rem; /* Optional: Set the font size */
}

#due-date-label{
  margin-right: 75px;
}


.modal-content-wrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  margin: 10px;
  max-width: 100%;
}

.statuses{
  margin-top: -10px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: flex-end;
}

.status-child{
  display: flex;
  flex-direction: column;
  gap: 5px;
}


#task-form{
  margin-top: 10px;
}

.task-name-wrapper{
  display: flex;
  justify-content: flex-start;
  margin-left: 25px;
  gap: 30px;
}

.task-field{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.save-button-wrapper{
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  margin-right: 20px;
}


/* ----- add task buttons -------- */

.add-task-button{
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #eceff3; 
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 15px;
  border-radius: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
}








`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/*  6 row x 5 col master grid*/\n:root{\n  --header-space: 40px;\n  --light-background: #DFE6EE;\n}\n\nbody{\n  font-family: 'Roboto', sans-serif;\n  margin: 0;\n}\n\np{\n  color: #656363;\n  margin: 0;\n  font-size: 14px;\n}\n\nh3{\n  margin: 5px;\n  margin-left: 0;\n  font-weight: 600;\n}\n\nh2{\n  font-weight: lighter;\n}\n\nh1{\n  font-size: 23px;\n}\n\n\n.content{\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(8, 150px);\n\n}\n\nsvg{\n  width: 30px;\n  height: auto;\n}\n.dashboard-logo{\n  width: 50px;\n  height: auto;\n}\n\n.home-button{\n  margin-top: 20px;\n  \n}\n\n/* ------- Sidebar Styles -------------------------- */ \n\n.sidebar{\n  grid-column: 1/2;\n  grid-row: 1/9; \n  background-color: #81B622; \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 50px;\n}\n\n\n.project-div{\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.nav{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n  color: white;\n  padding-left: 25px;\n  max-height: 46px;\n}\n\n\n\n\n/* Header bar Section -------------------------------------*/ \n\n\n/* top line -------- */\n\n.header{\n  grid-column: 2/6;\n  grid-row: 1/2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  gap: 0;\n\n}\n\n.search-actions-bar{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n\n\n/* ----- bottom line -------- */\n\n\n\n.profile-actions-bar{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0;\n  gap: 20px;\n  width: 100%;\n}\n\n.profile{\n  display: flex;\n  margin-right: auto;\n  align-items: center;\n  gap: 8px;\n  padding-left: var(--header-space);\n\n}\n\n.nav-buttons{\n  display: flex;\n  gap: 30px;\n  padding-right: var(--header-space);\n\n}\n\n\n/* ----- header flex item children styles -------- */\n\n.profile-icon-small{\n  max-height: 60px;\n  width: auto;\n}\n.profile-icon-large{\n  max-height: 80px;\n  width: auto;\n}\n\nbutton{\n  border-radius: 24px;\n  background-color: #81B622;\n  border-width: 0;\n  color: white;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 25px;\n  padding-right: 25px;\n  font-weight: bold;\n}\n\n.search-button{\n  background-color: transparent;\n  border-radius: 0;\n  padding: 0;\n\n}\n\n#search-bar{\n  border-radius: 10px;\n  height: 25px;\n  border-width: 0;\n  width: 100%;\n  background-color: var(--light-background);\n}\n\n.search-wrapper{\n  flex-basis: 100%;\n}\n.profile-name{\n  margin-top: 0;\n}\n\n.profile-text{\n  max-height: 60px;\n}\n\nh4{\n  margin: 0;\n  font-weight: lighter;\n}\n\n/* ----- main dash content -------- */\n\n.main-dash{\n  grid-column: 2/6;\n  grid-row: 2/9;\n  background-color: #DFE6EE;\n  display: grid;\n  grid-template-columns: repeat(40, 1fr);\n  grid-template-rows: repeat(19, 30px);\n}\n\n\n.projects-text{\n  grid-row: 1/3;\n  grid-column: 2/13;\n}\n\n\n\n.to-do-container{\n  grid-row: 3/19;\n  grid-column: 2/14;\n}\n\n.in-progress-container{\n  grid-row: 3/19;\n  grid-column: 15/27;\n}\n\n.complete-container{\n  grid-row: 3/19;\n  grid-column: 28/40;\n}\n\n.task-area{\n  background-color: white;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n\n.tile{\n  background-color: white;  \n  border-radius: 8px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-left: 8px solid #EAB325;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding-left: 8px;\n  padding-top: 8px;\n  padding-right: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  gap: 15px;\n}\n\n.status-label{\n  padding-left: 15px;\n  margin-top: 10px;\n}\n\n.tile-actions{\n  display: flex;\n  flex-direction: row;  \n  margin-left: auto; \n  margin-right: 8px;\n  margin-bottom: 8px;\n  gap: 5px;\n  align-items: center;\n  \n}\n\nhr{\n  border: none;\n  width: 75%;\n  border-top: 1px dashed #ccc;/* Set the line color */\n  margin-top: 5px;/* Add some vertical spacing */\n  align-self: center;\n}\n\n.announcements{\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n\n/* ----- edit modal -- display -------- */\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.modal-content {\n  background-color: #fff; /* White background */\n  margin: auto; /* Center the modal */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 30%; /* Adjust width as needed */\n  position: relative; /* Position the container */\n  top: 50%; /* Position from the top */\n  transform: translateY(-50%); /* Center vertically */\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); /* Add a shadow */\n  border-radius: 15px;\n}\n\ntextarea {\n  width: 60%; /* Set the desired fixed width */\n  resize: vertical; /* Allow vertical resizing, but prevent horizontal resizing */\n  font-family: inherit; /* Optional: Inherit the font from the parent element */\n  font-size: 1rem; /* Optional: Set the font size */\n}\n\n#due-date-label{\n  margin-right: 75px;\n}\n\n\n.modal-content-wrapper{\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 30px;\n  margin: 10px;\n  max-width: 100%;\n}\n\n.statuses{\n  margin-top: -10px;\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.status-child{\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n\n#task-form{\n  margin-top: 10px;\n}\n\n.task-name-wrapper{\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 25px;\n  gap: 30px;\n}\n\n.task-field{\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.save-button-wrapper{\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 15px;\n  margin-right: 20px;\n}\n\n\n/* ----- add task buttons -------- */\n\n.add-task-button{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background-color: #eceff3; \n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 15px;\n  border-radius: 8px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controller: () => (/* binding */ Controller),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Controller{

    constructor(){
        this.projects = [];
        this.activeProject;
    }
    
    createTask(project,name,description,status,dueDate = null){
        const newTask = new Task(name,description,status,dueDate)
        project.appendTask(newTask)


    }

    createProject(name){
        const newProject = new Project(name);
        this.projects.push(newProject); 

        return newProject; 
    }

    taskLookup(taskID){ //helper function for task lookup
        for(let i=0; i< this.projects.length; i++){
            let currentProject = this.projects[i];
            for(let j=0; j < currentProject.tasks.length; j++){
                if(currentProject.tasks[j].id === taskID){
                    return currentProject.tasks[j];
                }
            }
        }
    }



}

class Project {
    constructor(name){
        this.__tasks = [];
        // this.__icon = rand(image) <--- come back later
        this.__numTasks = 0;
        this.id = 1//Math.floor(Math.random() * (Math.floor(100000 + 1))); 
        
        if(typeof(name)=== "string"){
            this.__name = name
        }
        else{
            throw new Error('Name is not a string')
        } 

    }

    get name(){
        return this.__name;   
    }
    get tasks(){
        if(this.__tasks.length != 0){
            return this.__tasks
        }
        else{
            return this.__tasks // does there need to be some kind of check for 0 length?
        }
    }
    set name(name){
        if(typeof(name)=== "string"){
            this.__name = name
        }
        else{
            throw new Error('Name you are trying to set is not a string')
        }
    }
    appendTask(newTask){
        if(typeof(newTask)==="object"){
            this.__tasks.push(newTask);
            this.__numTasks++;
        }
        else{
            throw new Error('New Project you are trying to add is not an object')
        }
    }
    removeTask(completeTask){
        if(this.tasks.includes(completeTask)){
            this.tasks.splice(this.tasks.indexOf(completeTask),1);

        }else{
            throw new Error ('Task is not in project');
        }

    }

}

class Task{
    constructor(name,description,status,dueDate){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate; 
        this.status = status;
        this.id = Math.floor(Math.random() * (Math.floor(100000 + 1)));
    }
}




/***/ }),

/***/ "./src/dom-functions.js":
/*!******************************!*\
  !*** ./src/dom-functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   domCreateProject: () => (/* binding */ domCreateProject),
/* harmony export */   drawHeader: () => (/* binding */ drawHeader),
/* harmony export */   drawProjectArea: () => (/* binding */ drawProjectArea),
/* harmony export */   drawProjectSidebar: () => (/* binding */ drawProjectSidebar),
/* harmony export */   drawTask: () => (/* binding */ drawTask),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   renderProject: () => (/* binding */ renderProject),
/* harmony export */   saveTask: () => (/* binding */ saveTask)
/* harmony export */ });
/* harmony import */ var _profile_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-icon.png */ "./src/profile-icon.png");
 

let activeTask; // shows what the active task on the page is
let currentState; // shows what the current state of the edit modal should be (possible values are 'edit' or 'create')

function editTask(appData, taskID){
    const form = document.getElementById('task-form'); // clear form data
    form.reset();

    const task = appData.taskLookup(taskID); // fetch task
    activeTask = task; 

    currentState = 'edit'

    document.getElementById('task-name').value =  task.name; // draw task data into from
    document.getElementById('task-description').value = task.description;
    document.getElementById('due-date').value = task.dueDate; 
    document.querySelector(`input[name="task-status"][value="${task.status}"]`).checked = true;


    const dataModal = document.getElementsByClassName('modal')[0]; // show modal
    dataModal.style.display = "block";

}


function addTask(status){
    const form = document.getElementById('task-form'); // clear form data
    form.reset();

    currentState = 'create';
    document.querySelector(`input[name="task-status"][value="${status}"]`).checked = true; // default radio button to correct status

    const dataModal = document.getElementsByClassName('modal')[0]; // show modal
    dataModal.style.display = "block";
    
}

function saveTask(appData){
    const enteredTaskName = document.getElementById('task-name').value;

    const enteredTaskDueDate = document.getElementById('due-date').value;
    const enteredTaskDescription = document.getElementById('task-description').value;
    const radioButtons = document.querySelectorAll('input[name="task-status"]');
    const checkedRadioButton = Array.from(radioButtons).find(radio => radio.checked); 
    const enteredTaskStatus = checkedRadioButton ? checkedRadioButton.value : null;

    if(currentState === 'edit'){
        activeTask.name = enteredTaskName;
        activeTask.description = enteredTaskDescription;
        activeTask.dueDate = enteredTaskDueDate; 
        activeTask.status = enteredTaskStatus; // update the status 
    }

    else if(currentState ==='create'){
        appData.createTask(appData.activeProject,enteredTaskName,enteredTaskDescription,enteredTaskStatus,enteredTaskDueDate);
    }


    const dataModal = document.getElementsByClassName('modal')[0]; // close modal
    dataModal.style.display = "none";

    renderProject(appData,appData.activeProject);

}








function renderProject(appData,project){

    appData.activeProject = project;
    drawProjectArea(appData); 

    // --- draw headline text ----
    const headline = document.getElementsByClassName('headline')[0];
    const projectName = document.createElement('h2');
    projectName.className = 'project-name';
    projectName.textContent = `${appData.activeProject.name}`;
    headline.appendChild(projectName);
     // --- ------------------ ----

    for(let i=0; i< project.tasks.length; i++){
        let thisTask = project.tasks[i];
        if(thisTask.status === 'to-do'){
            drawTask(appData,thisTask,'to-do')
        }
        else if(thisTask.status === 'in-progress'){
            drawTask(appData,thisTask,'in-progress')
        }
        else if(thisTask.status === 'complete'){
            drawTask(appData,thisTask,'complete')
        }
        else{
            console.log(`this task ${thisTask.name} does not have a status`)
        }
    }
}


function drawProjectArea(appData){
    // Create the top-level div
    const topLevelDiv = document.getElementsByClassName('main-dash')[0];
    topLevelDiv.innerHTML = '';

    // ---------- CREATE THE MODAL -----------------------------------------------
    // Create the outer div element
    const outerDiv = document.createElement('div');
    outerDiv.id = 'edit-task';
    outerDiv.classList.add('modal');

    // Create the inner div element
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('modal-content');

    // Create the close span element
    const closeSpan = document.createElement('span');
    closeSpan.classList.add('close');
    closeSpan.textContent = '×';
    closeSpan.addEventListener('click', ()=>{
        outerDiv.style.display = 'none';
    })
    innerDiv.appendChild(closeSpan);


    // Create the form element
    const form = document.createElement('form');
    form.id = 'task-form';

    // Create the task name wrapper div
    const taskNameWrapper = document.createElement('div');
    taskNameWrapper.classList.add('task-name-wrapper');

    // Create the task name label
    const taskNameLabel = document.createElement('label');
    taskNameLabel.setAttribute('for', 'task-name');
    taskNameLabel.textContent = 'Task Name';
    taskNameWrapper.appendChild(taskNameLabel);

    // Create the task name input
    const taskNameInput = document.createElement('input');
    taskNameInput.type = 'text';
    taskNameInput.id = 'task-name';
    taskNameInput.name = 'task-name';
    taskNameInput.placeholder = 'Task Name...';
    taskNameWrapper.appendChild(taskNameInput);
    form.appendChild(taskNameWrapper);

    // Create the tile div
    const tileDiv = document.createElement('div');
    tileDiv.classList.add('tile');

    // Create the modal content wrapper div
    const modalContentWrapper = document.createElement('div');
    modalContentWrapper.classList.add('modal-content-wrapper');

    // Create the task description field
    const taskDescriptionField = document.createElement('div');
    taskDescriptionField.classList.add('task-field');

    // Create the task description label
    const taskDescriptionLabel = document.createElement('label');
    taskDescriptionLabel.setAttribute('for', 'task-description');
    taskDescriptionLabel.textContent = 'Description';
    taskDescriptionField.appendChild(taskDescriptionLabel);

    // Create the task description textarea
    const taskDescriptionTextarea = document.createElement('textarea');
    taskDescriptionTextarea.id = 'task-description';
    taskDescriptionTextarea.name = 'task-description';
    taskDescriptionTextarea.rows = 3;
    taskDescriptionTextarea.cols = 50;
    taskDescriptionTextarea.placeholder = 'Enter your description...';
    taskDescriptionField.appendChild(taskDescriptionTextarea);
    modalContentWrapper.appendChild(taskDescriptionField);

    // Create the due date field
    const dueDateField = document.createElement('div');
    dueDateField.classList.add('task-field');

    // Create the due date label
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'task-due-date');
    dueDateLabel.id = 'due-date-label';
    dueDateLabel.textContent = 'Due Date';
    dueDateField.appendChild(dueDateLabel);

    // Create the due date input
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'due-date';
    dueDateInput.name = 'due-date';
    dueDateField.appendChild(dueDateInput);
    modalContentWrapper.appendChild(dueDateField);

    // Create the statuses div
    const statusesDiv = document.createElement('div');
    statusesDiv.classList.add('statuses');
    statusesDiv.textContent = 'Task Status';

    // Create the to-do status child div
    const todoStatusChild = document.createElement('div');
    todoStatusChild.classList.add('status-child');

    // Create the to-do status radio input
    const todoRadioInput = document.createElement('input');
    todoRadioInput.type = 'radio';
    todoRadioInput.id = 'to-do';
    todoRadioInput.name = 'task-status';
    todoRadioInput.value = 'to-do';
    todoRadioInput.checked = true;
    todoStatusChild.appendChild(todoRadioInput);

    // Create the to-do status label
    const todoLabel = document.createElement('label');
    todoLabel.setAttribute('for', 'child');
    todoLabel.textContent = 'To Do';
    todoStatusChild.appendChild(todoLabel);
    statusesDiv.appendChild(todoStatusChild);

    // Create the in-progress status child div
    const inProgressStatusChild = document.createElement('div');
    inProgressStatusChild.classList.add('status-child');

    // Create the in-progress status radio input
    const inProgressRadioInput = document.createElement('input');
    inProgressRadioInput.type = 'radio';
    inProgressRadioInput.id = 'in-progress';
    inProgressRadioInput.name = 'task-status';
    inProgressRadioInput.value = 'in-progress';
    inProgressStatusChild.appendChild(inProgressRadioInput);

    // Create the in-progress status label
    const modalinProgressLabel = document.createElement('label');
    modalinProgressLabel.setAttribute('for', 'child');
    modalinProgressLabel.textContent = 'In Progress';
    inProgressStatusChild.appendChild(modalinProgressLabel);
    statusesDiv.appendChild(inProgressStatusChild);

    // Create the complete status child div
    const completeStatusChild = document.createElement('div');
    completeStatusChild.classList.add('status-child');

    // Create the complete status radio input
    const completeRadioInput = document.createElement('input');
    completeRadioInput.type = 'radio';
    completeRadioInput.id = 'complete';
    completeRadioInput.name = 'task-status';
    completeRadioInput.value = 'complete';
    completeStatusChild.appendChild(completeRadioInput);

    // Create the complete status label
    const modalcompleteLabel = document.createElement('label');
    modalcompleteLabel.setAttribute('for', 'child');
    modalcompleteLabel.textContent = 'Complete';
    completeStatusChild.appendChild(modalcompleteLabel);
    statusesDiv.appendChild(completeStatusChild);
    modalContentWrapper.appendChild(statusesDiv);
    tileDiv.appendChild(modalContentWrapper);
    form.appendChild(tileDiv);

    // Create the save button wrapper div
    const saveButtonWrapper = document.createElement('div');
    saveButtonWrapper.classList.add('save-button-wrapper');

    // Create the save button
    const saveButton = document.createElement('button');
    saveButton.id = 'save-button';
    saveButton.type = 'submit';
    saveButton.textContent = 'Save';
    form.addEventListener('submit', function(event){ // add the correct SAVE listener
        event.preventDefault();
    
        saveTask(appData);
    
    })

    saveButtonWrapper.appendChild(saveButton);
    form.appendChild(saveButtonWrapper);
    innerDiv.appendChild(form);
    outerDiv.appendChild(innerDiv);

    // Append the outer div to the document body
    topLevelDiv.appendChild(outerDiv);
    // ---------------------- CREATE MODAL END ---------------------------

    // Create the headline div
    const headlineDiv = document.createElement('div');
    headlineDiv.className = 'headline projects-text';
    
    // projectName.textContent = `${activeProject.name}`; ------ not assigning it here 

    topLevelDiv.appendChild(headlineDiv);

    // Create the "To Do" task area
    const toDoContainer = document.createElement('div');
    toDoContainer.className = 'to-do-container task-area';
    const toDoLabel = document.createElement('div');
    toDoLabel.className = 'status-label';
    const toDoLabelText = document.createElement('h3');
    toDoLabelText.textContent = 'To Do';
    toDoLabel.appendChild(toDoLabelText);
    toDoContainer.appendChild(toDoLabel);
    const toDoAddButton = document.createElement('div');
    toDoAddButton.className = 'add-task-button';
    toDoAddButton.id = 'add-to-do-task';
    toDoAddButton.addEventListener('click',()=>{ // ADD PROJECT BUTTON -- TO-DO
        addTask('to-do');
    })
    const toDoSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    toDoSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    toDoSvg.setAttribute('viewBox', '0 0 24 24');
    const toDoSvgTitle = document.createElement('title');
    toDoSvgTitle.textContent = 'plus';
    const toDoSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    toDoSvgPath.setAttribute('fill', '#000000');
    toDoSvgPath.setAttribute('d', 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    toDoSvg.appendChild(toDoSvgTitle);
    toDoSvg.appendChild(toDoSvgPath);
    toDoAddButton.appendChild(toDoSvg);
    toDoContainer.appendChild(toDoAddButton);
    topLevelDiv.appendChild(toDoContainer);

    // Create the "In Progress" task area
    const inProgressContainer = document.createElement('div');
    inProgressContainer.className = 'in-progress-container task-area';
    const inProgressLabel = document.createElement('div');
    inProgressLabel.className = 'status-label';
    const inProgressLabelText = document.createElement('h3');
    inProgressLabelText.textContent = 'In Progress';
    inProgressLabel.appendChild(inProgressLabelText);
    inProgressContainer.appendChild(inProgressLabel);
    const inProgressAddButton = document.createElement('div');
    inProgressAddButton.className = 'add-task-button';
    inProgressAddButton.id = 'add-in-progress-task';
    inProgressAddButton.addEventListener('click',()=>{ // ADD PROJECT BUTTON -- IN PROGRESS
        addTask('in-progress');
    })
    const inProgressSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    inProgressSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    inProgressSvg.setAttribute('viewBox', '0 0 24 24');
    const inProgressSvgTitle = document.createElement('title');
    inProgressSvgTitle.textContent = 'plus';
    const inProgressSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    inProgressSvgPath.setAttribute('fill', '#000000');
    inProgressSvgPath.setAttribute('d', 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    inProgressSvg.appendChild(inProgressSvgTitle);
    inProgressSvg.appendChild(inProgressSvgPath);
    inProgressAddButton.appendChild(inProgressSvg);
    inProgressContainer.appendChild(inProgressAddButton);
    topLevelDiv.appendChild(inProgressContainer);

    // Create the "Complete" task area
    const completeContainer = document.createElement('div');
    completeContainer.className = 'complete-container task-area';
    const completeLabel = document.createElement('div');
    completeLabel.className = 'status-label';
    const completeLabelText = document.createElement('h3');
    completeLabelText.textContent = 'Complete';
    completeLabel.appendChild(completeLabelText);
    completeContainer.appendChild(completeLabel);
    const completeAddButton = document.createElement('div');
    completeAddButton.className = 'add-task-button';
    completeAddButton.id = 'add-complete-task';
    completeAddButton.addEventListener('click',()=>{ // ADD PROJECT BUTTON -- COMPLETE
        addTask('complete');
    })
    const completeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    completeSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    completeSvg.setAttribute('viewBox', '0 0 24 24');
    const completeSvgTitle = document.createElement('title');
    completeSvgTitle.textContent = 'plus';
    const completeSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    completeSvgPath.setAttribute('fill', '#000000');
    completeSvgPath.setAttribute('d', 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    completeSvg.appendChild(completeSvgTitle);
    completeSvg.appendChild(completeSvgPath);
    completeAddButton.appendChild(completeSvg);
    completeContainer.appendChild(completeAddButton);
    topLevelDiv.appendChild(completeContainer);

    // Append the top-level div to the document body
    const contentDiv = document.getElementsByClassName('content')[0];
    contentDiv.appendChild(topLevelDiv);

}


function drawTask(appData,task,status){
    // Create the outer div element
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('tile');
    outerDiv.id = task.id;

    // Create the inner div for tile-text
    const tileTextDiv = document.createElement('div');
    tileTextDiv.classList.add('tile-text');

    // Create the h3 element
    const h3 = document.createElement('h3');
    h3.classList.add('task-title');
    h3.textContent = `${task.name}`;

    // Create the p element
    const p = document.createElement('p');
    p.classList.add('task-description');
    p.textContent = `${task.description}`;

    // Append h3 and p to tileTextDiv
    tileTextDiv.appendChild(h3);
    tileTextDiv.appendChild(p);

    // Create the inner div for tile-actions
    const tileActionsDiv = document.createElement('div');
    tileActionsDiv.classList.add('tile-actions');

    // Create the p element for due date
    const dueDateP = document.createElement('p');
    dueDateP.classList.add('due-date');
    dueDateP.textContent = `Due: ${task.dueDate}`;

    // Create the div for edit-cta
    const editCtaDiv = document.createElement('div'); // <--------------- add edit cta callback
    editCtaDiv.classList.add('edit-cta');
    editCtaDiv.addEventListener('click',()=>{
        editTask(appData,task.id)
    })

    // Create the SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 24 24');

    // Create the title element
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = 'pencil-box-outline';

    // Create the path element
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z');

    // Append title and path to svg
    svg.appendChild(title);
    svg.appendChild(path);

    // Append svg to editCtaDiv
    editCtaDiv.appendChild(svg);

    // create complete-task action 
    const checkSvgContainer = document.createElement('div');
    checkSvgContainer.classList.add('checkmark-container');
    const checksvg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    checksvg.setAttributeNS(null,'viewBox','0 0 24 24');
    const checktitle=document.createElementNS('http://www.w3.org/2000/svg','title');
    title.textContent='check-circle-outline';
    const checkpath=document.createElementNS('http://www.w3.org/2000/svg','path');
    checkpath.setAttributeNS(null,'d','M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z');
    checksvg.appendChild(checktitle);
    checksvg.appendChild(checkpath);
    checkSvgContainer.appendChild(checksvg);
    checkSvgContainer.addEventListener('click',()=>{
        appData.activeProject.removeTask(task);
        drawProjectArea(appData);
        renderProject(appData,appData.activeProject);
        
    })


    // Append dueDateP and editCtaDiv to tileActionsDiv
    tileActionsDiv.appendChild(dueDateP);
    tileActionsDiv.appendChild(editCtaDiv);
    tileActionsDiv.appendChild(checkSvgContainer);
    // Append tileTextDiv and tileActionsDiv to outerDiv
    outerDiv.appendChild(tileTextDiv);
    outerDiv.appendChild(tileActionsDiv);

    // Append the outerDiv to the document body
    
    const taskSwimlane = document.getElementsByClassName(`${status}-container`)[0];
    const taskButton = document.getElementById(`add-${status}-task`);
    taskSwimlane.insertBefore(outerDiv,taskButton)

}


function drawProjectSidebar(appData){
    // Create the outer div for the home button
    const sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.innerHTML = '';

    
    const homeButtonDiv = document.createElement('div');
    homeButtonDiv.classList.add('home-button', 'nav');

    // Create the SVG element for the dashboard logo
    const dashboardSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    dashboardSvg.classList.add('dashboard-logo');
    dashboardSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    dashboardSvg.setAttribute('viewBox', '0 0 24 24');

    // Create the title element for the SVG
    const svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    svgTitle.textContent = 'view-dashboard';
    dashboardSvg.appendChild(svgTitle);

    // Create the path element for the SVG
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath.setAttribute('fill', '#FFFFFF');
    svgPath.setAttribute('d', 'M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z');
    dashboardSvg.appendChild(svgPath);
    homeButtonDiv.appendChild(dashboardSvg);

    // Create the heading for "Active Projects"
    const activeProjectsHeading = document.createElement('h1');
    activeProjectsHeading.textContent = 'Active Projects';
    homeButtonDiv.appendChild(activeProjectsHeading);

    // Create the outer div for the project
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');

    for(let i=0;i<appData.projects.length;i++){
        // Create the inner div for the project
        const projectInnerDiv = document.createElement('div');
        projectInnerDiv.classList.add('nav', 'project');

        // Create the SVG element for the project icon
        const projectSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        projectSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        projectSvg.setAttribute('viewBox', '0 0 24 24');

        // Create the title element for the project SVG
        const projectSvgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        projectSvgTitle.textContent = 'layers-triple';
        projectSvg.appendChild(projectSvgTitle);

        // Create the path element for the project SVG
        const projectSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        projectSvgPath.setAttribute('fill', '#FFFFFF');
        projectSvgPath.setAttribute('d', 'M12 0L3 7L4.63 8.27L12 14L19.36 8.27L21 7L12 0M19.37 10.73L12 16.47L4.62 10.74L3 12L12 19L21 12L19.37 10.73M19.37 15.73L12 21.47L4.62 15.74L3 17L12 24L21 17L19.37 15.73Z');
        projectSvg.appendChild(projectSvgPath);
        projectInnerDiv.appendChild(projectSvg);

        // Create the heading for the project name
        const projectNameHeading = document.createElement('h3');
        projectNameHeading.classList.add('project-name');
        projectNameHeading.textContent = `${appData.projects[i].name}`;
        projectInnerDiv.appendChild(projectNameHeading);

        // Append the project inner div to the project outer div
        projectDiv.appendChild(projectInnerDiv);

        // add select-project listener
        projectInnerDiv.addEventListener('click',()=>{
            renderProject(appData,appData.projects[i]);
        })

    }

    // Append the home button div and project div to the document body

    sidebar.appendChild(homeButtonDiv);
    sidebar.appendChild(projectDiv);

}



function drawHeader(appData){
        // Create the outer div element
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('profile-actions-bar');

    // Create the inner div for profile
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile');
    outerDiv.appendChild(profileDiv);

    // Create the div for profile icon
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('bar-item-2');
    const profileIcon = document.createElement('img');
    profileIcon.classList.add('profile-icon-large');
    profileIcon.src = _profile_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    profileIcon.alt = 'slakoth';
    iconDiv.appendChild(profileIcon);
    profileDiv.appendChild(iconDiv);

    // Create the div for profile text
    const profileTextDiv = document.createElement('div');
    profileTextDiv.classList.add('profile-text');
    const greeting = document.createElement('h4');
    greeting.textContent = 'Hi there,';
    const name = document.createElement('h2');
    name.classList.add('profile-name');
    name.textContent = 'Wyatt Hagen (@wyguy)';
    profileTextDiv.appendChild(greeting);
    profileTextDiv.appendChild(name);
    profileDiv.appendChild(profileTextDiv);

    // Create the div for nav buttons
    const navButtonsDiv = document.createElement('div');
    navButtonsDiv.classList.add('nav-buttons');
    outerDiv.appendChild(navButtonsDiv);

    // Create the new project button
    const newButtonDiv = document.createElement('div');
    newButtonDiv.classList.add('new-button');
    const newButton = document.createElement('button');
    newButton.textContent = 'New Project';
    newButtonDiv.appendChild(newButton);
    navButtonsDiv.appendChild(newButtonDiv);

    // Create the delete project button
    const deleteButtonDiv = document.createElement('div');
    deleteButtonDiv.classList.add('delete-button');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Project';
    deleteButtonDiv.appendChild(deleteButton);
    navButtonsDiv.appendChild(deleteButtonDiv);

    //Delete project callback
    deleteButtonDiv.addEventListener('click',()=>{
        let deleteIndex = appData.projects.indexOf(appData.activeProject);
        appData.projects.splice(deleteIndex,1);
        appData.activeProject = appData.projects[0];

        drawProjectSidebar(appData);
        drawProjectArea(appData);
        renderProject(appData,appData.activeProject);

        
    })

    // Add Project callback 
    newButtonDiv.addEventListener('click',()=>{
        domCreateProject(appData);
    })
    // Append the outer div to the document body
    const headerBar = document.getElementsByClassName('header')[0];
    headerBar.appendChild(outerDiv);
}


function domCreateProject(appData){
    const projectDiv = document.getElementsByClassName('project-div')[0];


    const projectInnerDiv = document.createElement('div');
        projectInnerDiv.classList.add('nav', 'project');

        // Create the SVG element for the project icon
    const projectSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    projectSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    projectSvg.setAttribute('viewBox', '0 0 24 24');

        // Create the title element for the project SVG
    const projectSvgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    projectSvgTitle.textContent = 'layers-triple';
    projectSvg.appendChild(projectSvgTitle);

        // Create the path element for the project SVG
    const projectSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    projectSvgPath.setAttribute('fill', '#FFFFFF');
    projectSvgPath.setAttribute('d', 'M12 0L3 7L4.63 8.27L12 14L19.36 8.27L21 7L12 0M19.37 10.73L12 16.47L4.62 10.74L3 12L12 19L21 12L19.37 10.73M19.37 15.73L12 21.47L4.62 15.74L3 17L12 24L21 17L19.37 15.73Z');
    projectSvg.appendChild(projectSvgPath);
    projectInnerDiv.appendChild(projectSvg);

    // Create the heading for the project name
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'project-name-input';
    inputField.placeholder = 'Enter project name';
        
    projectInnerDiv.appendChild(inputField);
    


    const checkSvgContainer = document.createElement('div');
    checkSvgContainer.classList.add('checkmark-container');
    const checksvg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    checksvg.setAttributeNS(null,'viewBox','0 0 24 24');
    const title=document.createElementNS('http://www.w3.org/2000/svg','title');
    title.textContent='check-circle-outline';
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttributeNS(null,'fill','#FFFFFF');
    path.setAttributeNS(null,'d','M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z');
    checksvg.appendChild(title);
    checksvg.appendChild(path);

    //projectInnerDiv.appendChild(checksvg)
    checkSvgContainer.appendChild(checksvg);
    projectInnerDiv.appendChild(checkSvgContainer);

    checkSvgContainer.addEventListener('click',()=>{
        let newProject = appData.createProject(inputField.value)
        appData.activeProject = newProject;
        renderProject(appData,appData.activeProject);
        drawProjectSidebar(appData);
    })

    // Append the project inner div to the project outer div
    projectDiv.appendChild(projectInnerDiv);


}




/***/ }),

/***/ "./src/profile-icon.png":
/*!******************************!*\
  !*** ./src/profile-icon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93c4af24ccab5f459c5b.png";

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/*!********************************!*\
  !*** ./src/main-refactored.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");
/* harmony import */ var _dom_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-functions.js */ "./src/dom-functions.js");


 


const appData = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Controller();

appData.activeProject = appData.createProject('Example Project'); // shows what the active project on the page is 
appData.createTask(appData.activeProject,'sample task','description for sample task','complete');

(0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_2__.drawHeader)(appData);
(0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_2__.drawProjectSidebar)(appData);
(0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_2__.renderProject)(appData, appData.activeProject);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixjQUFjO0FBQ2Q7QUFDQTtBQUNBLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdDQUFnQztBQUNoQyxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGNBQWM7QUFDZCxzQkFBc0I7QUFDdEIsWUFBWTtBQUNaLCtCQUErQjtBQUMvQiwwRUFBMEU7QUFDMUU7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0EsT0FBTyx3RkFBd0YsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsVUFBVSxjQUFjLGNBQWMsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLGVBQWUsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFB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QUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQixHQUFHOztBQUUxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVOztBQUVsQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhOztBQUVoRDtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQsT0FBTztBQUNuRSxzREFBc0QsT0FBTztBQUM3RDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsMEJBQTBCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHlCQUF5QjtBQUNyRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOENBQWdCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcnNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2tCO0FBQ3dDOzs7QUFHaEYsb0JBQW9CLG1EQUFVOztBQUU5QixrRUFBa0U7QUFDbEU7O0FBRUEsNkRBQVU7QUFDVixxRUFBa0I7QUFDbEIsZ0VBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGF0bm90ZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2ZsYXRub3RlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mbGF0bm90ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZsYXRub3RlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9mbGF0bm90ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mbGF0bm90ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mbGF0bm90ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZsYXRub3RlLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvLi9zcmMvZG9tLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9mbGF0bm90ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbGF0bm90ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mbGF0bm90ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mbGF0bm90ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZsYXRub3RlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZsYXRub3RlLy4vc3JjL21haW4tcmVmYWN0b3JlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogIDYgcm93IHggNSBjb2wgbWFzdGVyIGdyaWQqL1xuOnJvb3R7XG4gIC0taGVhZGVyLXNwYWNlOiA0MHB4O1xuICAtLWxpZ2h0LWJhY2tncm91bmQ6ICNERkU2RUU7XG59XG5cbmJvZHl7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xufVxuXG5we1xuICBjb2xvcjogIzY1NjM2MztcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmgze1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgye1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuaDF7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuXG4uY29udGVudHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMTUwcHgpO1xuXG59XG5cbnN2Z3tcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5kYXNoYm9hcmQtbG9nb3tcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhvbWUtYnV0dG9ue1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBcbn1cblxuLyogLS0tLS0tLSBTaWRlYmFyIFN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqLyBcblxuLnNpZGViYXJ7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAxLzk7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFCNjIyOyBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDUwcHg7XG59XG5cblxuLnByb2plY3QtZGl2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbi5uYXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIG1heC1oZWlnaHQ6IDQ2cHg7XG59XG5cblxuXG5cbi8qIEhlYWRlciBiYXIgU2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gXG5cblxuLyogdG9wIGxpbmUgLS0tLS0tLS0gKi9cblxuLmhlYWRlcntcbiAgZ3JpZC1jb2x1bW46IDIvNjtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGdhcDogMDtcblxufVxuXG4uc2VhcmNoLWFjdGlvbnMtYmFye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cblxuLyogLS0tLS0gYm90dG9tIGxpbmUgLS0tLS0tLS0gKi9cblxuXG5cbi5wcm9maWxlLWFjdGlvbnMtYmFye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgZ2FwOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taGVhZGVyLXNwYWNlKTtcblxufVxuXG4ubmF2LWJ1dHRvbnN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taGVhZGVyLXNwYWNlKTtcblxufVxuXG5cbi8qIC0tLS0tIGhlYWRlciBmbGV4IGl0ZW0gY2hpbGRyZW4gc3R5bGVzIC0tLS0tLS0tICovXG5cbi5wcm9maWxlLWljb24tc21hbGx7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnByb2ZpbGUtaWNvbi1sYXJnZXtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbmJ1dHRvbntcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxQjYyMjtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlYXJjaC1idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwO1xuXG59XG5cbiNzZWFyY2gtYmFye1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xufVxuXG4uc2VhcmNoLXdyYXBwZXJ7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG59XG4ucHJvZmlsZS1uYW1le1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ucHJvZmlsZS10ZXh0e1xuICBtYXgtaGVpZ2h0OiA2MHB4O1xufVxuXG5oNHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLyogLS0tLS0gbWFpbiBkYXNoIGNvbnRlbnQgLS0tLS0tLS0gKi9cblxuLm1haW4tZGFzaHtcbiAgZ3JpZC1jb2x1bW46IDIvNjtcbiAgZ3JpZC1yb3c6IDIvOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTZFRTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNDAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDE5LCAzMHB4KTtcbn1cblxuXG4ucHJvamVjdHMtdGV4dHtcbiAgZ3JpZC1yb3c6IDEvMztcbiAgZ3JpZC1jb2x1bW46IDIvMTM7XG59XG5cblxuXG4udG8tZG8tY29udGFpbmVye1xuICBncmlkLXJvdzogMy8xOTtcbiAgZ3JpZC1jb2x1bW46IDIvMTQ7XG59XG5cbi5pbi1wcm9ncmVzcy1jb250YWluZXJ7XG4gIGdyaWQtcm93OiAzLzE5O1xuICBncmlkLWNvbHVtbjogMTUvMjc7XG59XG5cbi5jb21wbGV0ZS1jb250YWluZXJ7XG4gIGdyaWQtcm93OiAzLzE5O1xuICBncmlkLWNvbHVtbjogMjgvNDA7XG59XG5cbi50YXNrLWFyZWF7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5cbi50aWxle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgIFxuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjRUFCMzI1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBnYXA6IDE1cHg7XG59XG5cbi5zdGF0dXMtbGFiZWx7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRpbGUtYWN0aW9uc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgIFxuICBtYXJnaW4tbGVmdDogYXV0bzsgXG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGdhcDogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbn1cblxuaHJ7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDc1JTtcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjY2NjOy8qIFNldCB0aGUgbGluZSBjb2xvciAqL1xuICBtYXJnaW4tdG9wOiA1cHg7LyogQWRkIHNvbWUgdmVydGljYWwgc3BhY2luZyAqL1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5hbm5vdW5jZW1lbnRze1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuXG4vKiAtLS0tLSBlZGl0IG1vZGFsIC0tIGRpc3BsYXkgLS0tLS0tLS0gKi9cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLyogTW9kYWwgQ29udGVudCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvKiBXaGl0ZSBiYWNrZ3JvdW5kICovXG4gIG1hcmdpbjogYXV0bzsgLyogQ2VudGVyIHRoZSBtb2RhbCAqL1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICB3aWR0aDogMzAlOyAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogUG9zaXRpb24gdGhlIGNvbnRhaW5lciAqL1xuICB0b3A6IDUwJTsgLyogUG9zaXRpb24gZnJvbSB0aGUgdG9wICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTsgLyogQWRkIGEgc2hhZG93ICovXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDYwJTsgLyogU2V0IHRoZSBkZXNpcmVkIGZpeGVkIHdpZHRoICovXG4gIHJlc2l6ZTogdmVydGljYWw7IC8qIEFsbG93IHZlcnRpY2FsIHJlc2l6aW5nLCBidXQgcHJldmVudCBob3Jpem9udGFsIHJlc2l6aW5nICovXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiBPcHRpb25hbDogSW5oZXJpdCB0aGUgZm9udCBmcm9tIHRoZSBwYXJlbnQgZWxlbWVudCAqL1xuICBmb250LXNpemU6IDFyZW07IC8qIE9wdGlvbmFsOiBTZXQgdGhlIGZvbnQgc2l6ZSAqL1xufVxuXG4jZHVlLWRhdGUtbGFiZWx7XG4gIG1hcmdpbi1yaWdodDogNzVweDtcbn1cblxuXG4ubW9kYWwtY29udGVudC13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDMwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc3RhdHVzZXN7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5zdGF0dXMtY2hpbGR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufVxuXG5cbiN0YXNrLWZvcm17XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50YXNrLW5hbWUtd3JhcHBlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgZ2FwOiAzMHB4O1xufVxuXG4udGFzay1maWVsZHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cblxuLyogLS0tLS0gYWRkIHRhc2sgYnV0dG9ucyAtLS0tLS0tLSAqL1xuXG4uYWRkLXRhc2stYnV0dG9ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzOyBcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuXG5cblxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOEJBQThCO0FBQzlCO0VBQ0Usb0JBQW9CO0VBQ3BCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxvQ0FBb0M7O0FBRXRDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjs7QUFFbEI7O0FBRUEsc0RBQXNEOztBQUV0RDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFNBQVM7QUFDWDs7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7Ozs7QUFLQSw0REFBNEQ7OztBQUc1RCxzQkFBc0I7O0FBRXRCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLE1BQU07O0FBRVI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhC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MkJBQTJCO0VBQ3ZDLGtCQUFrQixFQUFFLDJCQUEyQjtFQUMvQyxRQUFRLEVBQUUsMEJBQTBCO0VBQ3BDLDJCQUEyQixFQUFFLHNCQUFzQjtFQUNuRCxzRUFBc0UsRUFBRSxpQkFBaUI7RUFDekYsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVSxFQUFFLGdDQUFnQztFQUM1QyxnQkFBZ0IsRUFBRSw2REFBNkQ7RUFDL0Usb0JBQW9CLEVBQUUsdURBQXVEO0VBQzdFLGVBQWUsRUFBRSxnQ0FBZ0M7QUFDbkQ7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7O0FBR0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7O0FBR0Esb0NBQW9DOztBQUVwQztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogIDYgcm93IHggNSBjb2wgbWFzdGVyIGdyaWQqL1xcbjpyb290e1xcbiAgLS1oZWFkZXItc3BhY2U6IDQwcHg7XFxuICAtLWxpZ2h0LWJhY2tncm91bmQ6ICNERkU2RUU7XFxufVxcblxcbmJvZHl7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbnB7XFxuICBjb2xvcjogIzY1NjM2MztcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuaDN7XFxuICBtYXJnaW46IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuaDJ7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuXFxuaDF7XFxuICBmb250LXNpemU6IDIzcHg7XFxufVxcblxcblxcbi5jb250ZW50e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxNTBweCk7XFxuXFxufVxcblxcbnN2Z3tcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uZGFzaGJvYXJkLWxvZ297XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmhvbWUtYnV0dG9ue1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIFxcbn1cXG5cXG4vKiAtLS0tLS0tIFNpZGViYXIgU3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovIFxcblxcbi5zaWRlYmFye1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzk7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxQjYyMjsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuXFxuLnByb2plY3QtZGl2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5uYXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICBtYXgtaGVpZ2h0OiA0NnB4O1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBIZWFkZXIgYmFyIFNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIFxcblxcblxcbi8qIHRvcCBsaW5lIC0tLS0tLS0tICovXFxuXFxuLmhlYWRlcntcXG4gIGdyaWQtY29sdW1uOiAyLzY7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZ2FwOiAwO1xcblxcbn1cXG5cXG4uc2VhcmNoLWFjdGlvbnMtYmFye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcblxcbi8qIC0tLS0tIGJvdHRvbSBsaW5lIC0tLS0tLS0tICovXFxuXFxuXFxuXFxuLnByb2ZpbGUtYWN0aW9ucy1iYXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2ZpbGV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1oZWFkZXItc3BhY2UpO1xcblxcbn1cXG5cXG4ubmF2LWJ1dHRvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taGVhZGVyLXNwYWNlKTtcXG5cXG59XFxuXFxuXFxuLyogLS0tLS0gaGVhZGVyIGZsZXggaXRlbSBjaGlsZHJlbiBzdHlsZXMgLS0tLS0tLS0gKi9cXG5cXG4ucHJvZmlsZS1pY29uLXNtYWxse1xcbiAgbWF4LWhlaWdodDogNjBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4ucHJvZmlsZS1pY29uLWxhcmdle1xcbiAgbWF4LWhlaWdodDogODBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG5idXR0b257XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxQjYyMjtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9ue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG59XFxuXFxuI3NlYXJjaC1iYXJ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnNlYXJjaC13cmFwcGVye1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuLnByb2ZpbGUtbmFtZXtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5wcm9maWxlLXRleHR7XFxuICBtYXgtaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG5oNHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4vKiAtLS0tLSBtYWluIGRhc2ggY29udGVudCAtLS0tLS0tLSAqL1xcblxcbi5tYWluLWRhc2h7XFxuICBncmlkLWNvbHVtbjogMi82O1xcbiAgZ3JpZC1yb3c6IDIvOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERkU2RUU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNDAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxOSwgMzBweCk7XFxufVxcblxcblxcbi5wcm9qZWN0cy10ZXh0e1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGdyaWQtY29sdW1uOiAyLzEzO1xcbn1cXG5cXG5cXG5cXG4udG8tZG8tY29udGFpbmVye1xcbiAgZ3JpZC1yb3c6IDMvMTk7XFxuICBncmlkLWNvbHVtbjogMi8xNDtcXG59XFxuXFxuLmluLXByb2dyZXNzLWNvbnRhaW5lcntcXG4gIGdyaWQtcm93OiAzLzE5O1xcbiAgZ3JpZC1jb2x1bW46IDE1LzI3O1xcbn1cXG5cXG4uY29tcGxldGUtY29udGFpbmVye1xcbiAgZ3JpZC1yb3c6IDMvMTk7XFxuICBncmlkLWNvbHVtbjogMjgvNDA7XFxufVxcblxcbi50YXNrLWFyZWF7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuLnRpbGV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgIFxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjRUFCMzI1O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnN0YXR1cy1sYWJlbHtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi50aWxlLWFjdGlvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgIFxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IFxcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBcXG59XFxuXFxuaHJ7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogNzUlO1xcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjY2NjOy8qIFNldCB0aGUgbGluZSBjb2xvciAqL1xcbiAgbWFyZ2luLXRvcDogNXB4Oy8qIEFkZCBzb21lIHZlcnRpY2FsIHNwYWNpbmcgKi9cXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmFubm91bmNlbWVudHN7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuXFxuXFxuLyogLS0tLS0gZWRpdCBtb2RhbCAtLSBkaXNwbGF5IC0tLS0tLS0tICovXFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQgKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvKiBXaGl0ZSBiYWNrZ3JvdW5kICovXFxuICBtYXJnaW46IGF1dG87IC8qIENlbnRlciB0aGUgbW9kYWwgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDMwJTsgLyogQWRqdXN0IHdpZHRoIGFzIG5lZWRlZCAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBQb3NpdGlvbiB0aGUgY29udGFpbmVyICovXFxuICB0b3A6IDUwJTsgLyogUG9zaXRpb24gZnJvbSB0aGUgdG9wICovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpOyAvKiBBZGQgYSBzaGFkb3cgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiA2MCU7IC8qIFNldCB0aGUgZGVzaXJlZCBmaXhlZCB3aWR0aCAqL1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDsgLyogQWxsb3cgdmVydGljYWwgcmVzaXppbmcsIGJ1dCBwcmV2ZW50IGhvcml6b250YWwgcmVzaXppbmcgKi9cXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiBPcHRpb25hbDogSW5oZXJpdCB0aGUgZm9udCBmcm9tIHRoZSBwYXJlbnQgZWxlbWVudCAqL1xcbiAgZm9udC1zaXplOiAxcmVtOyAvKiBPcHRpb25hbDogU2V0IHRoZSBmb250IHNpemUgKi9cXG59XFxuXFxuI2R1ZS1kYXRlLWxhYmVse1xcbiAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xcbn1cXG5cXG5cXG4ubW9kYWwtY29udGVudC13cmFwcGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnN0YXR1c2Vze1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5zdGF0dXMtY2hpbGR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5cXG4jdGFzay1mb3Jte1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnRhc2stbmFtZS13cmFwcGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4udGFzay1maWVsZHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5zYXZlLWJ1dHRvbi13cmFwcGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG4vKiAtLS0tLSBhZGQgdGFzayBidXR0b25zIC0tLS0tLS0tICovXFxuXFxuLmFkZC10YXNrLWJ1dHRvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzOyBcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmctdG9wOiAycHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBDb250cm9sbGVye1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZVByb2plY3Q7XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZVRhc2socHJvamVjdCxuYW1lLGRlc2NyaXB0aW9uLHN0YXR1cyxkdWVEYXRlID0gbnVsbCl7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuYW1lLGRlc2NyaXB0aW9uLHN0YXR1cyxkdWVEYXRlKVxuICAgICAgICBwcm9qZWN0LmFwcGVuZFRhc2sobmV3VGFzaylcblxuXG4gICAgfVxuXG4gICAgY3JlYXRlUHJvamVjdChuYW1lKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7IFxuXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0OyBcbiAgICB9XG5cbiAgICB0YXNrTG9va3VwKHRhc2tJRCl7IC8vaGVscGVyIGZ1bmN0aW9uIGZvciB0YXNrIGxvb2t1cFxuICAgICAgICBmb3IobGV0IGk9MDsgaTwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSB0aGlzLnByb2plY3RzW2ldO1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGogPCBjdXJyZW50UHJvamVjdC50YXNrcy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFByb2plY3QudGFza3Nbal0uaWQgPT09IHRhc2tJRCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdC50YXNrc1tqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLl9fdGFza3MgPSBbXTtcbiAgICAgICAgLy8gdGhpcy5fX2ljb24gPSByYW5kKGltYWdlKSA8LS0tIGNvbWUgYmFjayBsYXRlclxuICAgICAgICB0aGlzLl9fbnVtVGFza3MgPSAwO1xuICAgICAgICB0aGlzLmlkID0gMS8vTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1hdGguZmxvb3IoMTAwMDAwICsgMSkpKTsgXG4gICAgICAgIFxuICAgICAgICBpZih0eXBlb2YobmFtZSk9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICB0aGlzLl9fbmFtZSA9IG5hbWVcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGlzIG5vdCBhIHN0cmluZycpXG4gICAgICAgIH0gXG5cbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fX25hbWU7ICAgXG4gICAgfVxuICAgIGdldCB0YXNrcygpe1xuICAgICAgICBpZih0aGlzLl9fdGFza3MubGVuZ3RoICE9IDApe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX190YXNrc1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3Rhc2tzIC8vIGRvZXMgdGhlcmUgbmVlZCB0byBiZSBzb21lIGtpbmQgb2YgY2hlY2sgZm9yIDAgbGVuZ3RoP1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldCBuYW1lKG5hbWUpe1xuICAgICAgICBpZih0eXBlb2YobmFtZSk9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICB0aGlzLl9fbmFtZSA9IG5hbWVcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIHlvdSBhcmUgdHJ5aW5nIHRvIHNldCBpcyBub3QgYSBzdHJpbmcnKVxuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGVuZFRhc2sobmV3VGFzayl7XG4gICAgICAgIGlmKHR5cGVvZihuZXdUYXNrKT09PVwib2JqZWN0XCIpe1xuICAgICAgICAgICAgdGhpcy5fX3Rhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICB0aGlzLl9fbnVtVGFza3MrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXcgUHJvamVjdCB5b3UgYXJlIHRyeWluZyB0byBhZGQgaXMgbm90IGFuIG9iamVjdCcpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlVGFzayhjb21wbGV0ZVRhc2spe1xuICAgICAgICBpZih0aGlzLnRhc2tzLmluY2x1ZGVzKGNvbXBsZXRlVGFzaykpe1xuICAgICAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKGNvbXBsZXRlVGFzayksMSk7XG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdUYXNrIGlzIG5vdCBpbiBwcm9qZWN0Jyk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5jbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsZGVzY3JpcHRpb24sc3RhdHVzLGR1ZURhdGUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7IFxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNYXRoLmZsb29yKDEwMDAwMCArIDEpKSk7XG4gICAgfVxufVxuXG5leHBvcnQge1Rhc2ssIFByb2plY3QsIENvbnRyb2xsZXJ9XG4iLCJpbXBvcnQgcHJvZmlsZUljb25JbWFnZSBmcm9tICcuL3Byb2ZpbGUtaWNvbi5wbmcnOyBcblxubGV0IGFjdGl2ZVRhc2s7IC8vIHNob3dzIHdoYXQgdGhlIGFjdGl2ZSB0YXNrIG9uIHRoZSBwYWdlIGlzXG5sZXQgY3VycmVudFN0YXRlOyAvLyBzaG93cyB3aGF0IHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBlZGl0IG1vZGFsIHNob3VsZCBiZSAocG9zc2libGUgdmFsdWVzIGFyZSAnZWRpdCcgb3IgJ2NyZWF0ZScpXG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGFwcERhdGEsIHRhc2tJRCl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTsgLy8gY2xlYXIgZm9ybSBkYXRhXG4gICAgZm9ybS5yZXNldCgpO1xuXG4gICAgY29uc3QgdGFzayA9IGFwcERhdGEudGFza0xvb2t1cCh0YXNrSUQpOyAvLyBmZXRjaCB0YXNrXG4gICAgYWN0aXZlVGFzayA9IHRhc2s7IFxuXG4gICAgY3VycmVudFN0YXRlID0gJ2VkaXQnXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1uYW1lJykudmFsdWUgPSAgdGFzay5uYW1lOyAvLyBkcmF3IHRhc2sgZGF0YSBpbnRvIGZyb21cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbicpLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKS52YWx1ZSA9IHRhc2suZHVlRGF0ZTsgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInRhc2stc3RhdHVzXCJdW3ZhbHVlPVwiJHt0YXNrLnN0YXR1c31cIl1gKS5jaGVja2VkID0gdHJ1ZTtcblxuXG4gICAgY29uc3QgZGF0YU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwnKVswXTsgLy8gc2hvdyBtb2RhbFxuICAgIGRhdGFNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG59XG5cblxuZnVuY3Rpb24gYWRkVGFzayhzdGF0dXMpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJyk7IC8vIGNsZWFyIGZvcm0gZGF0YVxuICAgIGZvcm0ucmVzZXQoKTtcblxuICAgIGN1cnJlbnRTdGF0ZSA9ICdjcmVhdGUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJ0YXNrLXN0YXR1c1wiXVt2YWx1ZT1cIiR7c3RhdHVzfVwiXWApLmNoZWNrZWQgPSB0cnVlOyAvLyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiB0byBjb3JyZWN0IHN0YXR1c1xuXG4gICAgY29uc3QgZGF0YU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwnKVswXTsgLy8gc2hvdyBtb2RhbFxuICAgIGRhdGFNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIFxufVxuXG5mdW5jdGlvbiBzYXZlVGFzayhhcHBEYXRhKXtcbiAgICBjb25zdCBlbnRlcmVkVGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1uYW1lJykudmFsdWU7XG5cbiAgICBjb25zdCBlbnRlcmVkVGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkVGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidGFzay1zdGF0dXNcIl0nKTtcbiAgICBjb25zdCBjaGVja2VkUmFkaW9CdXR0b24gPSBBcnJheS5mcm9tKHJhZGlvQnV0dG9ucykuZmluZChyYWRpbyA9PiByYWRpby5jaGVja2VkKTsgXG4gICAgY29uc3QgZW50ZXJlZFRhc2tTdGF0dXMgPSBjaGVja2VkUmFkaW9CdXR0b24gPyBjaGVja2VkUmFkaW9CdXR0b24udmFsdWUgOiBudWxsO1xuXG4gICAgaWYoY3VycmVudFN0YXRlID09PSAnZWRpdCcpe1xuICAgICAgICBhY3RpdmVUYXNrLm5hbWUgPSBlbnRlcmVkVGFza05hbWU7XG4gICAgICAgIGFjdGl2ZVRhc2suZGVzY3JpcHRpb24gPSBlbnRlcmVkVGFza0Rlc2NyaXB0aW9uO1xuICAgICAgICBhY3RpdmVUYXNrLmR1ZURhdGUgPSBlbnRlcmVkVGFza0R1ZURhdGU7IFxuICAgICAgICBhY3RpdmVUYXNrLnN0YXR1cyA9IGVudGVyZWRUYXNrU3RhdHVzOyAvLyB1cGRhdGUgdGhlIHN0YXR1cyBcbiAgICB9XG5cbiAgICBlbHNlIGlmKGN1cnJlbnRTdGF0ZSA9PT0nY3JlYXRlJyl7XG4gICAgICAgIGFwcERhdGEuY3JlYXRlVGFzayhhcHBEYXRhLmFjdGl2ZVByb2plY3QsZW50ZXJlZFRhc2tOYW1lLGVudGVyZWRUYXNrRGVzY3JpcHRpb24sZW50ZXJlZFRhc2tTdGF0dXMsZW50ZXJlZFRhc2tEdWVEYXRlKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGRhdGFNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJylbMF07IC8vIGNsb3NlIG1vZGFsXG4gICAgZGF0YU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIHJlbmRlclByb2plY3QoYXBwRGF0YSxhcHBEYXRhLmFjdGl2ZVByb2plY3QpO1xuXG59XG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdChhcHBEYXRhLHByb2plY3Qpe1xuXG4gICAgYXBwRGF0YS5hY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbiAgICBkcmF3UHJvamVjdEFyZWEoYXBwRGF0YSk7IFxuXG4gICAgLy8gLS0tIGRyYXcgaGVhZGxpbmUgdGV4dCAtLS0tXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkbGluZScpWzBdO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSAncHJvamVjdC1uYW1lJztcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke2FwcERhdGEuYWN0aXZlUHJvamVjdC5uYW1lfWA7XG4gICAgaGVhZGxpbmUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAvLyAtLS0gLS0tLS0tLS0tLS0tLS0tLS0tIC0tLS1cblxuICAgIGZvcihsZXQgaT0wOyBpPCBwcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRoaXNUYXNrID0gcHJvamVjdC50YXNrc1tpXTtcbiAgICAgICAgaWYodGhpc1Rhc2suc3RhdHVzID09PSAndG8tZG8nKXtcbiAgICAgICAgICAgIGRyYXdUYXNrKGFwcERhdGEsdGhpc1Rhc2ssJ3RvLWRvJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXNUYXNrLnN0YXR1cyA9PT0gJ2luLXByb2dyZXNzJyl7XG4gICAgICAgICAgICBkcmF3VGFzayhhcHBEYXRhLHRoaXNUYXNrLCdpbi1wcm9ncmVzcycpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzVGFzay5zdGF0dXMgPT09ICdjb21wbGV0ZScpe1xuICAgICAgICAgICAgZHJhd1Rhc2soYXBwRGF0YSx0aGlzVGFzaywnY29tcGxldGUnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdGhpcyB0YXNrICR7dGhpc1Rhc2submFtZX0gZG9lcyBub3QgaGF2ZSBhIHN0YXR1c2ApXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZHJhd1Byb2plY3RBcmVhKGFwcERhdGEpe1xuICAgIC8vIENyZWF0ZSB0aGUgdG9wLWxldmVsIGRpdlxuICAgIGNvbnN0IHRvcExldmVsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1kYXNoJylbMF07XG4gICAgdG9wTGV2ZWxEaXYuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAvLyAtLS0tLS0tLS0tIENSRUFURSBUSEUgTU9EQUwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDcmVhdGUgdGhlIG91dGVyIGRpdiBlbGVtZW50XG4gICAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdXRlckRpdi5pZCA9ICdlZGl0LXRhc2snO1xuICAgIG91dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGlubmVyIGRpdiBlbGVtZW50XG4gICAgY29uc3QgaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbm5lckRpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGNsb3NlIHNwYW4gZWxlbWVudFxuICAgIGNvbnN0IGNsb3NlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjbG9zZVNwYW4uY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgICBjbG9zZVNwYW4udGV4dENvbnRlbnQgPSAnw5cnO1xuICAgIGNsb3NlU3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIG91dGVyRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSlcbiAgICBpbm5lckRpdi5hcHBlbmRDaGlsZChjbG9zZVNwYW4pO1xuXG5cbiAgICAvLyBDcmVhdGUgdGhlIGZvcm0gZWxlbWVudFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5pZCA9ICd0YXNrLWZvcm0nO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0YXNrIG5hbWUgd3JhcHBlciBkaXZcbiAgICBjb25zdCB0YXNrTmFtZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTmFtZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lLXdyYXBwZXInKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdGFzayBuYW1lIGxhYmVsXG4gICAgY29uc3QgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza05hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLW5hbWUnKTtcbiAgICB0YXNrTmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgTmFtZSc7XG4gICAgdGFza05hbWVXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tOYW1lTGFiZWwpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0YXNrIG5hbWUgaW5wdXRcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrTmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGFza05hbWVJbnB1dC5pZCA9ICd0YXNrLW5hbWUnO1xuICAgIHRhc2tOYW1lSW5wdXQubmFtZSA9ICd0YXNrLW5hbWUnO1xuICAgIHRhc2tOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzayBOYW1lLi4uJztcbiAgICB0YXNrTmFtZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZVdyYXBwZXIpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0aWxlIGRpdlxuICAgIGNvbnN0IHRpbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aWxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgbW9kYWwgY29udGVudCB3cmFwcGVyIGRpdlxuICAgIGNvbnN0IG1vZGFsQ29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQtd3JhcHBlcicpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0YXNrIGRlc2NyaXB0aW9uIGZpZWxkXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25GaWVsZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWZpZWxkJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRhc2sgZGVzY3JpcHRpb24gbGFiZWxcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay1kZXNjcmlwdGlvbicpO1xuICAgIHRhc2tEZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICB0YXNrRGVzY3JpcHRpb25GaWVsZC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRhc2sgZGVzY3JpcHRpb24gdGV4dGFyZWFcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uVGV4dGFyZWEuaWQgPSAndGFzay1kZXNjcmlwdGlvbic7XG4gICAgdGFza0Rlc2NyaXB0aW9uVGV4dGFyZWEubmFtZSA9ICd0YXNrLWRlc2NyaXB0aW9uJztcbiAgICB0YXNrRGVzY3JpcHRpb25UZXh0YXJlYS5yb3dzID0gMztcbiAgICB0YXNrRGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gNTA7XG4gICAgdGFza0Rlc2NyaXB0aW9uVGV4dGFyZWEucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBkZXNjcmlwdGlvbi4uLic7XG4gICAgdGFza0Rlc2NyaXB0aW9uRmllbGQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uVGV4dGFyZWEpO1xuICAgIG1vZGFsQ29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uRmllbGQpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkdWUgZGF0ZSBmaWVsZFxuICAgIGNvbnN0IGR1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVGaWVsZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWZpZWxkJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGR1ZSBkYXRlIGxhYmVsXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay1kdWUtZGF0ZScpO1xuICAgIGR1ZURhdGVMYWJlbC5pZCA9ICdkdWUtZGF0ZS1sYWJlbCc7XG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICBkdWVEYXRlRmllbGQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZHVlIGRhdGUgaW5wdXRcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWUtZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlLWRhdGUnO1xuICAgIGR1ZURhdGVGaWVsZC5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICAgIG1vZGFsQ29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUZpZWxkKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgc3RhdHVzZXMgZGl2XG4gICAgY29uc3Qgc3RhdHVzZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGF0dXNlc0Rpdi5jbGFzc0xpc3QuYWRkKCdzdGF0dXNlcycpO1xuICAgIHN0YXR1c2VzRGl2LnRleHRDb250ZW50ID0gJ1Rhc2sgU3RhdHVzJztcblxuICAgIC8vIENyZWF0ZSB0aGUgdG8tZG8gc3RhdHVzIGNoaWxkIGRpdlxuICAgIGNvbnN0IHRvZG9TdGF0dXNDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9TdGF0dXNDaGlsZC5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtY2hpbGQnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdG8tZG8gc3RhdHVzIHJhZGlvIGlucHV0XG4gICAgY29uc3QgdG9kb1JhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9SYWRpb0lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIHRvZG9SYWRpb0lucHV0LmlkID0gJ3RvLWRvJztcbiAgICB0b2RvUmFkaW9JbnB1dC5uYW1lID0gJ3Rhc2stc3RhdHVzJztcbiAgICB0b2RvUmFkaW9JbnB1dC52YWx1ZSA9ICd0by1kbyc7XG4gICAgdG9kb1JhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgdG9kb1N0YXR1c0NoaWxkLmFwcGVuZENoaWxkKHRvZG9SYWRpb0lucHV0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdG8tZG8gc3RhdHVzIGxhYmVsXG4gICAgY29uc3QgdG9kb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b2RvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2hpbGQnKTtcbiAgICB0b2RvTGFiZWwudGV4dENvbnRlbnQgPSAnVG8gRG8nO1xuICAgIHRvZG9TdGF0dXNDaGlsZC5hcHBlbmRDaGlsZCh0b2RvTGFiZWwpO1xuICAgIHN0YXR1c2VzRGl2LmFwcGVuZENoaWxkKHRvZG9TdGF0dXNDaGlsZCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGluLXByb2dyZXNzIHN0YXR1cyBjaGlsZCBkaXZcbiAgICBjb25zdCBpblByb2dyZXNzU3RhdHVzQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpblByb2dyZXNzU3RhdHVzQ2hpbGQuY2xhc3NMaXN0LmFkZCgnc3RhdHVzLWNoaWxkJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGluLXByb2dyZXNzIHN0YXR1cyByYWRpbyBpbnB1dFxuICAgIGNvbnN0IGluUHJvZ3Jlc3NSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpblByb2dyZXNzUmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBpblByb2dyZXNzUmFkaW9JbnB1dC5pZCA9ICdpbi1wcm9ncmVzcyc7XG4gICAgaW5Qcm9ncmVzc1JhZGlvSW5wdXQubmFtZSA9ICd0YXNrLXN0YXR1cyc7XG4gICAgaW5Qcm9ncmVzc1JhZGlvSW5wdXQudmFsdWUgPSAnaW4tcHJvZ3Jlc3MnO1xuICAgIGluUHJvZ3Jlc3NTdGF0dXNDaGlsZC5hcHBlbmRDaGlsZChpblByb2dyZXNzUmFkaW9JbnB1dCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGluLXByb2dyZXNzIHN0YXR1cyBsYWJlbFxuICAgIGNvbnN0IG1vZGFsaW5Qcm9ncmVzc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBtb2RhbGluUHJvZ3Jlc3NMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaGlsZCcpO1xuICAgIG1vZGFsaW5Qcm9ncmVzc0xhYmVsLnRleHRDb250ZW50ID0gJ0luIFByb2dyZXNzJztcbiAgICBpblByb2dyZXNzU3RhdHVzQ2hpbGQuYXBwZW5kQ2hpbGQobW9kYWxpblByb2dyZXNzTGFiZWwpO1xuICAgIHN0YXR1c2VzRGl2LmFwcGVuZENoaWxkKGluUHJvZ3Jlc3NTdGF0dXNDaGlsZCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGNvbXBsZXRlIHN0YXR1cyBjaGlsZCBkaXZcbiAgICBjb25zdCBjb21wbGV0ZVN0YXR1c0NoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tcGxldGVTdGF0dXNDaGlsZC5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtY2hpbGQnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgY29tcGxldGUgc3RhdHVzIHJhZGlvIGlucHV0XG4gICAgY29uc3QgY29tcGxldGVSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb21wbGV0ZVJhZGlvSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgY29tcGxldGVSYWRpb0lucHV0LmlkID0gJ2NvbXBsZXRlJztcbiAgICBjb21wbGV0ZVJhZGlvSW5wdXQubmFtZSA9ICd0YXNrLXN0YXR1cyc7XG4gICAgY29tcGxldGVSYWRpb0lucHV0LnZhbHVlID0gJ2NvbXBsZXRlJztcbiAgICBjb21wbGV0ZVN0YXR1c0NoaWxkLmFwcGVuZENoaWxkKGNvbXBsZXRlUmFkaW9JbnB1dCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGNvbXBsZXRlIHN0YXR1cyBsYWJlbFxuICAgIGNvbnN0IG1vZGFsY29tcGxldGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbW9kYWxjb21wbGV0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NoaWxkJyk7XG4gICAgbW9kYWxjb21wbGV0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcbiAgICBjb21wbGV0ZVN0YXR1c0NoaWxkLmFwcGVuZENoaWxkKG1vZGFsY29tcGxldGVMYWJlbCk7XG4gICAgc3RhdHVzZXNEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVTdGF0dXNDaGlsZCk7XG4gICAgbW9kYWxDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChzdGF0dXNlc0Rpdik7XG4gICAgdGlsZURpdi5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnRXcmFwcGVyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpbGVEaXYpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBzYXZlIGJ1dHRvbiB3cmFwcGVyIGRpdlxuICAgIGNvbnN0IHNhdmVCdXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2F2ZUJ1dHRvbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2F2ZS1idXR0b24td3JhcHBlcicpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBzYXZlIGJ1dHRvblxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlQnV0dG9uLmlkID0gJ3NhdmUtYnV0dG9uJztcbiAgICBzYXZlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpeyAvLyBhZGQgdGhlIGNvcnJlY3QgU0FWRSBsaXN0ZW5lclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgICAgICBzYXZlVGFzayhhcHBEYXRhKTtcbiAgICBcbiAgICB9KVxuXG4gICAgc2F2ZUJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uV3JhcHBlcik7XG4gICAgaW5uZXJEaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBvdXRlciBkaXYgdG8gdGhlIGRvY3VtZW50IGJvZHlcbiAgICB0b3BMZXZlbERpdi5hcHBlbmRDaGlsZChvdXRlckRpdik7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDUkVBVEUgTU9EQUwgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBoZWFkbGluZSBkaXZcbiAgICBjb25zdCBoZWFkbGluZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRsaW5lRGl2LmNsYXNzTmFtZSA9ICdoZWFkbGluZSBwcm9qZWN0cy10ZXh0JztcbiAgICBcbiAgICAvLyBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVByb2plY3QubmFtZX1gOyAtLS0tLS0gbm90IGFzc2lnbmluZyBpdCBoZXJlIFxuXG4gICAgdG9wTGV2ZWxEaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmVEaXYpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBcIlRvIERvXCIgdGFzayBhcmVhXG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9Db250YWluZXIuY2xhc3NOYW1lID0gJ3RvLWRvLWNvbnRhaW5lciB0YXNrLWFyZWEnO1xuICAgIGNvbnN0IHRvRG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9MYWJlbC5jbGFzc05hbWUgPSAnc3RhdHVzLWxhYmVsJztcbiAgICBjb25zdCB0b0RvTGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0b0RvTGFiZWxUZXh0LnRleHRDb250ZW50ID0gJ1RvIERvJztcbiAgICB0b0RvTGFiZWwuYXBwZW5kQ2hpbGQodG9Eb0xhYmVsVGV4dCk7XG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvTGFiZWwpO1xuICAgIGNvbnN0IHRvRG9BZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b0RvQWRkQnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtdGFzay1idXR0b24nO1xuICAgIHRvRG9BZGRCdXR0b24uaWQgPSAnYWRkLXRvLWRvLXRhc2snO1xuICAgIHRvRG9BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57IC8vIEFERCBQUk9KRUNUIEJVVFRPTiAtLSBUTy1ET1xuICAgICAgICBhZGRUYXNrKCd0by1kbycpO1xuICAgIH0pXG4gICAgY29uc3QgdG9Eb1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgdG9Eb1N2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdG9Eb1N2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgY29uc3QgdG9Eb1N2Z1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGl0bGUnKTtcbiAgICB0b0RvU3ZnVGl0bGUudGV4dENvbnRlbnQgPSAncGx1cyc7XG4gICAgY29uc3QgdG9Eb1N2Z1BhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICB0b0RvU3ZnUGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzAwMDAwMCcpO1xuICAgIHRvRG9TdmdQYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWicpO1xuICAgIHRvRG9TdmcuYXBwZW5kQ2hpbGQodG9Eb1N2Z1RpdGxlKTtcbiAgICB0b0RvU3ZnLmFwcGVuZENoaWxkKHRvRG9TdmdQYXRoKTtcbiAgICB0b0RvQWRkQnV0dG9uLmFwcGVuZENoaWxkKHRvRG9TdmcpO1xuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0FkZEJ1dHRvbik7XG4gICAgdG9wTGV2ZWxEaXYuYXBwZW5kQ2hpbGQodG9Eb0NvbnRhaW5lcik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIFwiSW4gUHJvZ3Jlc3NcIiB0YXNrIGFyZWFcbiAgICBjb25zdCBpblByb2dyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5Qcm9ncmVzc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnaW4tcHJvZ3Jlc3MtY29udGFpbmVyIHRhc2stYXJlYSc7XG4gICAgY29uc3QgaW5Qcm9ncmVzc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5Qcm9ncmVzc0xhYmVsLmNsYXNzTmFtZSA9ICdzdGF0dXMtbGFiZWwnO1xuICAgIGNvbnN0IGluUHJvZ3Jlc3NMYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGluUHJvZ3Jlc3NMYWJlbFRleHQudGV4dENvbnRlbnQgPSAnSW4gUHJvZ3Jlc3MnO1xuICAgIGluUHJvZ3Jlc3NMYWJlbC5hcHBlbmRDaGlsZChpblByb2dyZXNzTGFiZWxUZXh0KTtcbiAgICBpblByb2dyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGluUHJvZ3Jlc3NMYWJlbCk7XG4gICAgY29uc3QgaW5Qcm9ncmVzc0FkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluUHJvZ3Jlc3NBZGRCdXR0b24uY2xhc3NOYW1lID0gJ2FkZC10YXNrLWJ1dHRvbic7XG4gICAgaW5Qcm9ncmVzc0FkZEJ1dHRvbi5pZCA9ICdhZGQtaW4tcHJvZ3Jlc3MtdGFzayc7XG4gICAgaW5Qcm9ncmVzc0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnsgLy8gQUREIFBST0pFQ1QgQlVUVE9OIC0tIElOIFBST0dSRVNTXG4gICAgICAgIGFkZFRhc2soJ2luLXByb2dyZXNzJyk7XG4gICAgfSlcbiAgICBjb25zdCBpblByb2dyZXNzU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBpblByb2dyZXNzU3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICBpblByb2dyZXNzU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICBjb25zdCBpblByb2dyZXNzU3ZnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aXRsZScpO1xuICAgIGluUHJvZ3Jlc3NTdmdUaXRsZS50ZXh0Q29udGVudCA9ICdwbHVzJztcbiAgICBjb25zdCBpblByb2dyZXNzU3ZnUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIGluUHJvZ3Jlc3NTdmdQYXRoLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDAwMDAwJyk7XG4gICAgaW5Qcm9ncmVzc1N2Z1BhdGguc2V0QXR0cmlidXRlKCdkJywgJ00xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaJyk7XG4gICAgaW5Qcm9ncmVzc1N2Zy5hcHBlbmRDaGlsZChpblByb2dyZXNzU3ZnVGl0bGUpO1xuICAgIGluUHJvZ3Jlc3NTdmcuYXBwZW5kQ2hpbGQoaW5Qcm9ncmVzc1N2Z1BhdGgpO1xuICAgIGluUHJvZ3Jlc3NBZGRCdXR0b24uYXBwZW5kQ2hpbGQoaW5Qcm9ncmVzc1N2Zyk7XG4gICAgaW5Qcm9ncmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpblByb2dyZXNzQWRkQnV0dG9uKTtcbiAgICB0b3BMZXZlbERpdi5hcHBlbmRDaGlsZChpblByb2dyZXNzQ29udGFpbmVyKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgXCJDb21wbGV0ZVwiIHRhc2sgYXJlYVxuICAgIGNvbnN0IGNvbXBsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tcGxldGVDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbXBsZXRlLWNvbnRhaW5lciB0YXNrLWFyZWEnO1xuICAgIGNvbnN0IGNvbXBsZXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wbGV0ZUxhYmVsLmNsYXNzTmFtZSA9ICdzdGF0dXMtbGFiZWwnO1xuICAgIGNvbnN0IGNvbXBsZXRlTGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb21wbGV0ZUxhYmVsVGV4dC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG4gICAgY29tcGxldGVMYWJlbC5hcHBlbmRDaGlsZChjb21wbGV0ZUxhYmVsVGV4dCk7XG4gICAgY29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVMYWJlbCk7XG4gICAgY29uc3QgY29tcGxldGVBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wbGV0ZUFkZEJ1dHRvbi5jbGFzc05hbWUgPSAnYWRkLXRhc2stYnV0dG9uJztcbiAgICBjb21wbGV0ZUFkZEJ1dHRvbi5pZCA9ICdhZGQtY29tcGxldGUtdGFzayc7XG4gICAgY29tcGxldGVBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57IC8vIEFERCBQUk9KRUNUIEJVVFRPTiAtLSBDT01QTEVURVxuICAgICAgICBhZGRUYXNrKCdjb21wbGV0ZScpO1xuICAgIH0pXG4gICAgY29uc3QgY29tcGxldGVTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbXBsZXRlU3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICBjb21wbGV0ZVN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgY29uc3QgY29tcGxldGVTdmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RpdGxlJyk7XG4gICAgY29tcGxldGVTdmdUaXRsZS50ZXh0Q29udGVudCA9ICdwbHVzJztcbiAgICBjb25zdCBjb21wbGV0ZVN2Z1BhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICBjb21wbGV0ZVN2Z1BhdGguc2V0QXR0cmlidXRlKCdmaWxsJywgJyMwMDAwMDAnKTtcbiAgICBjb21wbGV0ZVN2Z1BhdGguc2V0QXR0cmlidXRlKCdkJywgJ00xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaJyk7XG4gICAgY29tcGxldGVTdmcuYXBwZW5kQ2hpbGQoY29tcGxldGVTdmdUaXRsZSk7XG4gICAgY29tcGxldGVTdmcuYXBwZW5kQ2hpbGQoY29tcGxldGVTdmdQYXRoKTtcbiAgICBjb21wbGV0ZUFkZEJ1dHRvbi5hcHBlbmRDaGlsZChjb21wbGV0ZVN2Zyk7XG4gICAgY29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVBZGRCdXR0b24pO1xuICAgIHRvcExldmVsRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlQ29udGFpbmVyKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgdG9wLWxldmVsIGRpdiB0byB0aGUgZG9jdW1lbnQgYm9keVxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250ZW50JylbMF07XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0b3BMZXZlbERpdik7XG5cbn1cblxuXG5mdW5jdGlvbiBkcmF3VGFzayhhcHBEYXRhLHRhc2ssc3RhdHVzKXtcbiAgICAvLyBDcmVhdGUgdGhlIG91dGVyIGRpdiBlbGVtZW50XG4gICAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdXRlckRpdi5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgb3V0ZXJEaXYuaWQgPSB0YXNrLmlkO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBpbm5lciBkaXYgZm9yIHRpbGUtdGV4dFxuICAgIGNvbnN0IHRpbGVUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlsZVRleHREaXYuY2xhc3NMaXN0LmFkZCgndGlsZS10ZXh0Jyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGgzIGVsZW1lbnRcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgIGgzLnRleHRDb250ZW50ID0gYCR7dGFzay5uYW1lfWA7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHAgZWxlbWVudFxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IGAke3Rhc2suZGVzY3JpcHRpb259YDtcblxuICAgIC8vIEFwcGVuZCBoMyBhbmQgcCB0byB0aWxlVGV4dERpdlxuICAgIHRpbGVUZXh0RGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgICB0aWxlVGV4dERpdi5hcHBlbmRDaGlsZChwKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgaW5uZXIgZGl2IGZvciB0aWxlLWFjdGlvbnNcbiAgICBjb25zdCB0aWxlQWN0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbGVBY3Rpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ3RpbGUtYWN0aW9ucycpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBwIGVsZW1lbnQgZm9yIGR1ZSBkYXRlXG4gICAgY29uc3QgZHVlRGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZHVlRGF0ZVAuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICBkdWVEYXRlUC50ZXh0Q29udGVudCA9IGBEdWU6ICR7dGFzay5kdWVEYXRlfWA7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRpdiBmb3IgZWRpdC1jdGFcbiAgICBjb25zdCBlZGl0Q3RhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIDwtLS0tLS0tLS0tLS0tLS0gYWRkIGVkaXQgY3RhIGNhbGxiYWNrXG4gICAgZWRpdEN0YURpdi5jbGFzc0xpc3QuYWRkKCdlZGl0LWN0YScpO1xuICAgIGVkaXRDdGFEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGVkaXRUYXNrKGFwcERhdGEsdGFzay5pZClcbiAgICB9KVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBTVkcgZWxlbWVudFxuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0aXRsZSBlbGVtZW50XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAncGVuY2lsLWJveC1vdXRsaW5lJztcblxuICAgIC8vIENyZWF0ZSB0aGUgcGF0aCBlbGVtZW50XG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgJ00xOSwxOVY1SDVWMTlIMTlNMTksM0EyLDIgMCAwLDEgMjEsNVYxOUMyMSwyMC4xMSAyMC4xLDIxIDE5LDIxSDVBMiwyIDAgMCwxIDMsMTlWNUEyLDIgMCAwLDEgNSwzSDE5TTE2LjcsOS4zNUwxNS43LDEwLjM1TDEzLjY1LDguM0wxNC42NSw3LjNDMTQuODYsNy4wOCAxNS4yMSw3LjA4IDE1LjQyLDcuM0wxNi43LDguNThDMTYuOTIsOC43OSAxNi45Miw5LjE0IDE2LjcsOS4zNU03LDE0Ljk0TDEzLjA2LDguODhMMTUuMTIsMTAuOTRMOS4wNiwxN0g3VjE0Ljk0WicpO1xuXG4gICAgLy8gQXBwZW5kIHRpdGxlIGFuZCBwYXRoIHRvIHN2Z1xuICAgIHN2Zy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuXG4gICAgLy8gQXBwZW5kIHN2ZyB0byBlZGl0Q3RhRGl2XG4gICAgZWRpdEN0YURpdi5hcHBlbmRDaGlsZChzdmcpO1xuXG4gICAgLy8gY3JlYXRlIGNvbXBsZXRlLXRhc2sgYWN0aW9uIFxuICAgIGNvbnN0IGNoZWNrU3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tTdmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNoZWNrc3ZnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdzdmcnKTtcbiAgICBjaGVja3N2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCd2aWV3Qm94JywnMCAwIDI0IDI0Jyk7XG4gICAgY29uc3QgY2hlY2t0aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywndGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudD0nY2hlY2stY2lyY2xlLW91dGxpbmUnO1xuICAgIGNvbnN0IGNoZWNrcGF0aD1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuICAgIGNoZWNrcGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCdkJywnTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMiAyMEM3LjU5IDIwIDQgMTYuNDEgNCAxMlM3LjU5IDQgMTIgNCAyMCA3LjU5IDIwIDEyIDE2LjQxIDIwIDEyIDIwTTE2LjU5IDcuNThMMTAgMTQuMTdMNy40MSAxMS41OUw2IDEzTDEwIDE3TDE4IDlMMTYuNTkgNy41OFonKTtcbiAgICBjaGVja3N2Zy5hcHBlbmRDaGlsZChjaGVja3RpdGxlKTtcbiAgICBjaGVja3N2Zy5hcHBlbmRDaGlsZChjaGVja3BhdGgpO1xuICAgIGNoZWNrU3ZnQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrc3ZnKTtcbiAgICBjaGVja1N2Z0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgYXBwRGF0YS5hY3RpdmVQcm9qZWN0LnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgIGRyYXdQcm9qZWN0QXJlYShhcHBEYXRhKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdChhcHBEYXRhLGFwcERhdGEuYWN0aXZlUHJvamVjdCk7XG4gICAgICAgIFxuICAgIH0pXG5cblxuICAgIC8vIEFwcGVuZCBkdWVEYXRlUCBhbmQgZWRpdEN0YURpdiB0byB0aWxlQWN0aW9uc0RpdlxuICAgIHRpbGVBY3Rpb25zRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVQKTtcbiAgICB0aWxlQWN0aW9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0Q3RhRGl2KTtcbiAgICB0aWxlQWN0aW9uc0Rpdi5hcHBlbmRDaGlsZChjaGVja1N2Z0NvbnRhaW5lcik7XG4gICAgLy8gQXBwZW5kIHRpbGVUZXh0RGl2IGFuZCB0aWxlQWN0aW9uc0RpdiB0byBvdXRlckRpdlxuICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKHRpbGVUZXh0RGl2KTtcbiAgICBvdXRlckRpdi5hcHBlbmRDaGlsZCh0aWxlQWN0aW9uc0Rpdik7XG5cbiAgICAvLyBBcHBlbmQgdGhlIG91dGVyRGl2IHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAgXG4gICAgY29uc3QgdGFza1N3aW1sYW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzdGF0dXN9LWNvbnRhaW5lcmApWzBdO1xuICAgIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWRkLSR7c3RhdHVzfS10YXNrYCk7XG4gICAgdGFza1N3aW1sYW5lLmluc2VydEJlZm9yZShvdXRlckRpdix0YXNrQnV0dG9uKVxuXG59XG5cblxuZnVuY3Rpb24gZHJhd1Byb2plY3RTaWRlYmFyKGFwcERhdGEpe1xuICAgIC8vIENyZWF0ZSB0aGUgb3V0ZXIgZGl2IGZvciB0aGUgaG9tZSBidXR0b25cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2lkZWJhcicpWzBdO1xuICAgIHNpZGViYXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBcbiAgICBjb25zdCBob21lQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdob21lLWJ1dHRvbicsICduYXYnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgU1ZHIGVsZW1lbnQgZm9yIHRoZSBkYXNoYm9hcmQgbG9nb1xuICAgIGNvbnN0IGRhc2hib2FyZFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgZGFzaGJvYXJkU3ZnLmNsYXNzTGlzdC5hZGQoJ2Rhc2hib2FyZC1sb2dvJyk7XG4gICAgZGFzaGJvYXJkU3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICBkYXNoYm9hcmRTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0aXRsZSBlbGVtZW50IGZvciB0aGUgU1ZHXG4gICAgY29uc3Qgc3ZnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3RpdGxlJyk7XG4gICAgc3ZnVGl0bGUudGV4dENvbnRlbnQgPSAndmlldy1kYXNoYm9hcmQnO1xuICAgIGRhc2hib2FyZFN2Zy5hcHBlbmRDaGlsZChzdmdUaXRsZSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHBhdGggZWxlbWVudCBmb3IgdGhlIFNWR1xuICAgIGNvbnN0IHN2Z1BhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICBzdmdQYXRoLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjRkZGRkZGJyk7XG4gICAgc3ZnUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTEzLDNWOUgyMVYzTTEzLDIxSDIxVjExSDEzTTMsMjFIMTFWMTVIM00zLDEzSDExVjNIM1YxM1onKTtcbiAgICBkYXNoYm9hcmRTdmcuYXBwZW5kQ2hpbGQoc3ZnUGF0aCk7XG4gICAgaG9tZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChkYXNoYm9hcmRTdmcpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBoZWFkaW5nIGZvciBcIkFjdGl2ZSBQcm9qZWN0c1wiXG4gICAgY29uc3QgYWN0aXZlUHJvamVjdHNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBhY3RpdmVQcm9qZWN0c0hlYWRpbmcudGV4dENvbnRlbnQgPSAnQWN0aXZlIFByb2plY3RzJztcbiAgICBob21lQnV0dG9uRGl2LmFwcGVuZENoaWxkKGFjdGl2ZVByb2plY3RzSGVhZGluZyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG91dGVyIGRpdiBmb3IgdGhlIHByb2plY3RcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRpdicpO1xuXG4gICAgZm9yKGxldCBpPTA7aTxhcHBEYXRhLnByb2plY3RzLmxlbmd0aDtpKyspe1xuICAgICAgICAvLyBDcmVhdGUgdGhlIGlubmVyIGRpdiBmb3IgdGhlIHByb2plY3RcbiAgICAgICAgY29uc3QgcHJvamVjdElubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RJbm5lckRpdi5jbGFzc0xpc3QuYWRkKCduYXYnLCAncHJvamVjdCcpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgU1ZHIGVsZW1lbnQgZm9yIHRoZSBwcm9qZWN0IGljb25cbiAgICAgICAgY29uc3QgcHJvamVjdFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgIHByb2plY3RTdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgICAgICBwcm9qZWN0U3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHRpdGxlIGVsZW1lbnQgZm9yIHRoZSBwcm9qZWN0IFNWR1xuICAgICAgICBjb25zdCBwcm9qZWN0U3ZnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3RpdGxlJyk7XG4gICAgICAgIHByb2plY3RTdmdUaXRsZS50ZXh0Q29udGVudCA9ICdsYXllcnMtdHJpcGxlJztcbiAgICAgICAgcHJvamVjdFN2Zy5hcHBlbmRDaGlsZChwcm9qZWN0U3ZnVGl0bGUpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcGF0aCBlbGVtZW50IGZvciB0aGUgcHJvamVjdCBTVkdcbiAgICAgICAgY29uc3QgcHJvamVjdFN2Z1BhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICAgICAgcHJvamVjdFN2Z1BhdGguc2V0QXR0cmlidXRlKCdmaWxsJywgJyNGRkZGRkYnKTtcbiAgICAgICAgcHJvamVjdFN2Z1BhdGguc2V0QXR0cmlidXRlKCdkJywgJ00xMiAwTDMgN0w0LjYzIDguMjdMMTIgMTRMMTkuMzYgOC4yN0wyMSA3TDEyIDBNMTkuMzcgMTAuNzNMMTIgMTYuNDdMNC42MiAxMC43NEwzIDEyTDEyIDE5TDIxIDEyTDE5LjM3IDEwLjczTTE5LjM3IDE1LjczTDEyIDIxLjQ3TDQuNjIgMTUuNzRMMyAxN0wxMiAyNEwyMSAxN0wxOS4zNyAxNS43M1onKTtcbiAgICAgICAgcHJvamVjdFN2Zy5hcHBlbmRDaGlsZChwcm9qZWN0U3ZnUGF0aCk7XG4gICAgICAgIHByb2plY3RJbm5lckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0U3ZnKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGhlYWRpbmcgZm9yIHRoZSBwcm9qZWN0IG5hbWVcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgcHJvamVjdE5hbWVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICBwcm9qZWN0TmFtZUhlYWRpbmcudGV4dENvbnRlbnQgPSBgJHthcHBEYXRhLnByb2plY3RzW2ldLm5hbWV9YDtcbiAgICAgICAgcHJvamVjdElubmVyRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lSGVhZGluZyk7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBwcm9qZWN0IGlubmVyIGRpdiB0byB0aGUgcHJvamVjdCBvdXRlciBkaXZcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5uZXJEaXYpO1xuXG4gICAgICAgIC8vIGFkZCBzZWxlY3QtcHJvamVjdCBsaXN0ZW5lclxuICAgICAgICBwcm9qZWN0SW5uZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0KGFwcERhdGEsYXBwRGF0YS5wcm9qZWN0c1tpXSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvLyBBcHBlbmQgdGhlIGhvbWUgYnV0dG9uIGRpdiBhbmQgcHJvamVjdCBkaXYgdG8gdGhlIGRvY3VtZW50IGJvZHlcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbkRpdik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxufVxuXG5cblxuZnVuY3Rpb24gZHJhd0hlYWRlcihhcHBEYXRhKXtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBvdXRlciBkaXYgZWxlbWVudFxuICAgIGNvbnN0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3V0ZXJEaXYuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1hY3Rpb25zLWJhcicpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBpbm5lciBkaXYgZm9yIHByb2ZpbGVcbiAgICBjb25zdCBwcm9maWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvZmlsZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9maWxlJyk7XG4gICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQocHJvZmlsZURpdik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRpdiBmb3IgcHJvZmlsZSBpY29uXG4gICAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljb25EaXYuY2xhc3NMaXN0LmFkZCgnYmFyLWl0ZW0tMicpO1xuICAgIGNvbnN0IHByb2ZpbGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvZmlsZUljb24uY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1pY29uLWxhcmdlJyk7XG4gICAgcHJvZmlsZUljb24uc3JjID0gcHJvZmlsZUljb25JbWFnZTtcbiAgICBwcm9maWxlSWNvbi5hbHQgPSAnc2xha290aCc7XG4gICAgaWNvbkRpdi5hcHBlbmRDaGlsZChwcm9maWxlSWNvbik7XG4gICAgcHJvZmlsZURpdi5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZGl2IGZvciBwcm9maWxlIHRleHRcbiAgICBjb25zdCBwcm9maWxlVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2ZpbGVUZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGUtdGV4dCcpO1xuICAgIGNvbnN0IGdyZWV0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBncmVldGluZy50ZXh0Q29udGVudCA9ICdIaSB0aGVyZSwnO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1uYW1lJyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9ICdXeWF0dCBIYWdlbiAoQHd5Z3V5KSc7XG4gICAgcHJvZmlsZVRleHREaXYuYXBwZW5kQ2hpbGQoZ3JlZXRpbmcpO1xuICAgIHByb2ZpbGVUZXh0RGl2LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHByb2ZpbGVEaXYuYXBwZW5kQ2hpbGQocHJvZmlsZVRleHREaXYpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkaXYgZm9yIG5hdiBidXR0b25zXG4gICAgY29uc3QgbmF2QnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbnMnKTtcbiAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChuYXZCdXR0b25zRGl2KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgbmV3QnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3QnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ25ldy1idXR0b24nKTtcbiAgICBjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdCdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgIG5ld0J1dHRvbkRpdi5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xuICAgIG5hdkJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQobmV3QnV0dG9uRGl2KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZGVsZXRlIHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlQnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgIGRlbGV0ZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIG5hdkJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uRGl2KTtcblxuICAgIC8vRGVsZXRlIHByb2plY3QgY2FsbGJhY2tcbiAgICBkZWxldGVCdXR0b25EaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGxldCBkZWxldGVJbmRleCA9IGFwcERhdGEucHJvamVjdHMuaW5kZXhPZihhcHBEYXRhLmFjdGl2ZVByb2plY3QpO1xuICAgICAgICBhcHBEYXRhLnByb2plY3RzLnNwbGljZShkZWxldGVJbmRleCwxKTtcbiAgICAgICAgYXBwRGF0YS5hY3RpdmVQcm9qZWN0ID0gYXBwRGF0YS5wcm9qZWN0c1swXTtcblxuICAgICAgICBkcmF3UHJvamVjdFNpZGViYXIoYXBwRGF0YSk7XG4gICAgICAgIGRyYXdQcm9qZWN0QXJlYShhcHBEYXRhKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdChhcHBEYXRhLGFwcERhdGEuYWN0aXZlUHJvamVjdCk7XG5cbiAgICAgICAgXG4gICAgfSlcblxuICAgIC8vIEFkZCBQcm9qZWN0IGNhbGxiYWNrIFxuICAgIG5ld0J1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgZG9tQ3JlYXRlUHJvamVjdChhcHBEYXRhKTtcbiAgICB9KVxuICAgIC8vIEFwcGVuZCB0aGUgb3V0ZXIgZGl2IHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAgY29uc3QgaGVhZGVyQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyJylbMF07XG4gICAgaGVhZGVyQmFyLmFwcGVuZENoaWxkKG91dGVyRGl2KTtcbn1cblxuXG5mdW5jdGlvbiBkb21DcmVhdGVQcm9qZWN0KGFwcERhdGEpe1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0LWRpdicpWzBdO1xuXG5cbiAgICBjb25zdCBwcm9qZWN0SW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdElubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ25hdicsICdwcm9qZWN0Jyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBTVkcgZWxlbWVudCBmb3IgdGhlIHByb2plY3QgaWNvblxuICAgIGNvbnN0IHByb2plY3RTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHByb2plY3RTdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHByb2plY3RTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGl0bGUgZWxlbWVudCBmb3IgdGhlIHByb2plY3QgU1ZHXG4gICAgY29uc3QgcHJvamVjdFN2Z1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0aXRsZScpO1xuICAgIHByb2plY3RTdmdUaXRsZS50ZXh0Q29udGVudCA9ICdsYXllcnMtdHJpcGxlJztcbiAgICBwcm9qZWN0U3ZnLmFwcGVuZENoaWxkKHByb2plY3RTdmdUaXRsZSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwYXRoIGVsZW1lbnQgZm9yIHRoZSBwcm9qZWN0IFNWR1xuICAgIGNvbnN0IHByb2plY3RTdmdQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgcHJvamVjdFN2Z1BhdGguc2V0QXR0cmlidXRlKCdmaWxsJywgJyNGRkZGRkYnKTtcbiAgICBwcm9qZWN0U3ZnUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTEyIDBMMyA3TDQuNjMgOC4yN0wxMiAxNEwxOS4zNiA4LjI3TDIxIDdMMTIgME0xOS4zNyAxMC43M0wxMiAxNi40N0w0LjYyIDEwLjc0TDMgMTJMMTIgMTlMMjEgMTJMMTkuMzcgMTAuNzNNMTkuMzcgMTUuNzNMMTIgMjEuNDdMNC42MiAxNS43NEwzIDE3TDEyIDI0TDIxIDE3TDE5LjM3IDE1LjczWicpO1xuICAgIHByb2plY3RTdmcuYXBwZW5kQ2hpbGQocHJvamVjdFN2Z1BhdGgpO1xuICAgIHByb2plY3RJbm5lckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0U3ZnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgaGVhZGluZyBmb3IgdGhlIHByb2plY3QgbmFtZVxuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RmllbGQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dEZpZWxkLmlkID0gJ3Byb2plY3QtbmFtZS1pbnB1dCc7XG4gICAgaW5wdXRGaWVsZC5wbGFjZWhvbGRlciA9ICdFbnRlciBwcm9qZWN0IG5hbWUnO1xuICAgICAgICBcbiAgICBwcm9qZWN0SW5uZXJEaXYuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG4gICAgXG5cblxuICAgIGNvbnN0IGNoZWNrU3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tTdmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNoZWNrc3ZnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdzdmcnKTtcbiAgICBjaGVja3N2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCd2aWV3Qm94JywnMCAwIDI0IDI0Jyk7XG4gICAgY29uc3QgdGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQ9J2NoZWNrLWNpcmNsZS1vdXRsaW5lJztcbiAgICBjb25zdCBwYXRoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCdmaWxsJywnI0ZGRkZGRicpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlTlMobnVsbCwnZCcsJ00xMiAyQzYuNSAyIDIgNi41IDIgMTJTNi41IDIyIDEyIDIyIDIyIDE3LjUgMjIgMTIgMTcuNSAyIDEyIDJNMTIgMjBDNy41OSAyMCA0IDE2LjQxIDQgMTJTNy41OSA0IDEyIDQgMjAgNy41OSAyMCAxMiAxNi40MSAyMCAxMiAyME0xNi41OSA3LjU4TDEwIDE0LjE3TDcuNDEgMTEuNTlMNiAxM0wxMCAxN0wxOCA5TDE2LjU5IDcuNThaJyk7XG4gICAgY2hlY2tzdmcuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNoZWNrc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuXG4gICAgLy9wcm9qZWN0SW5uZXJEaXYuYXBwZW5kQ2hpbGQoY2hlY2tzdmcpXG4gICAgY2hlY2tTdmdDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tzdmcpO1xuICAgIHByb2plY3RJbm5lckRpdi5hcHBlbmRDaGlsZChjaGVja1N2Z0NvbnRhaW5lcik7XG5cbiAgICBjaGVja1N2Z0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBhcHBEYXRhLmNyZWF0ZVByb2plY3QoaW5wdXRGaWVsZC52YWx1ZSlcbiAgICAgICAgYXBwRGF0YS5hY3RpdmVQcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICAgICAgcmVuZGVyUHJvamVjdChhcHBEYXRhLGFwcERhdGEuYWN0aXZlUHJvamVjdCk7XG4gICAgICAgIGRyYXdQcm9qZWN0U2lkZWJhcihhcHBEYXRhKTtcbiAgICB9KVxuXG4gICAgLy8gQXBwZW5kIHRoZSBwcm9qZWN0IGlubmVyIGRpdiB0byB0aGUgcHJvamVjdCBvdXRlciBkaXZcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbm5lckRpdik7XG5cblxufVxuXG5cbmV4cG9ydHtlZGl0VGFzaywgYWRkVGFzaywgc2F2ZVRhc2ssIHJlbmRlclByb2plY3QsIGRyYXdQcm9qZWN0QXJlYSwgZHJhd1Rhc2ssZHJhd1Byb2plY3RTaWRlYmFyLCBkcmF3SGVhZGVyLCBkb21DcmVhdGVQcm9qZWN0fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5pbXBvcnQge3JlbmRlclByb2plY3QsZHJhd1Byb2plY3RTaWRlYmFyLCBkcmF3SGVhZGVyfSBmcm9tICcuL2RvbS1mdW5jdGlvbnMuanMnOyBcblxuXG5jb25zdCBhcHBEYXRhID0gbmV3IENvbnRyb2xsZXIoKTtcblxuYXBwRGF0YS5hY3RpdmVQcm9qZWN0ID0gYXBwRGF0YS5jcmVhdGVQcm9qZWN0KCdFeGFtcGxlIFByb2plY3QnKTsgLy8gc2hvd3Mgd2hhdCB0aGUgYWN0aXZlIHByb2plY3Qgb24gdGhlIHBhZ2UgaXMgXG5hcHBEYXRhLmNyZWF0ZVRhc2soYXBwRGF0YS5hY3RpdmVQcm9qZWN0LCdzYW1wbGUgdGFzaycsJ2Rlc2NyaXB0aW9uIGZvciBzYW1wbGUgdGFzaycsJ2NvbXBsZXRlJyk7XG5cbmRyYXdIZWFkZXIoYXBwRGF0YSk7XG5kcmF3UHJvamVjdFNpZGViYXIoYXBwRGF0YSk7XG5yZW5kZXJQcm9qZWN0KGFwcERhdGEsIGFwcERhdGEuYWN0aXZlUHJvamVjdCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==