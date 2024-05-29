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








`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;EACE,oBAAoB;EACpB,2BAA2B;AAC7B;;AAEA;EACE,iCAAiC;EACjC,SAAS;AACX;;AAEA;EACE,cAAc;EACd,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,eAAe;AACjB;;;AAGA;EACE,aAAa;EACb,qCAAqC;EACrC,oCAAoC;;AAEtC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;;AAElB;;AAEA,sDAAsD;;AAEtD;EACE,gBAAgB;EAChB,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,SAAS;AACX;;;AAGA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;;;;AAKA,4DAA4D;;;AAG5D,sBAAsB;;AAEtB;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,MAAM;;AAER;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;;;;AAIA,+BAA+B;;;;AAI/B;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,QAAQ;EACR,iCAAiC;;AAEnC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,kCAAkC;;AAEpC;;;AAGA,oDAAoD;;AAEpD;EACE,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,UAAU;;AAEZ;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,WAAW;EACX,yCAAyC;AAC3C;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,oBAAoB;AACtB;;AAEA,qCAAqC;;AAErC;EACE,gBAAgB;EAChB,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,sCAAsC;EACtC,oCAAoC;AACtC;;;AAGA;EACE,aAAa;EACb,iBAAiB;AACnB;;;;AAIA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;;AAGA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,0CAA0C;EAC1C,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,QAAQ;EACR,mBAAmB;;AAErB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,2BAA2B,CAAC,uBAAuB;EACnD,eAAe,CAAC,8BAA8B;EAC9C,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;AACrB;;;AAGA,yCAAyC;;AAEzC;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,4BAA4B,EAAE,mBAAmB;EACjD,iCAAiC,EAAE,qBAAqB;AAC1D;;AAEA,kBAAkB;AAClB;EACE,sBAAsB,EAAE,qBAAqB;EAC7C,YAAY,EAAE,qBAAqB;EACnC,aAAa;EACb,sBAAsB;EACtB,UAAU,EAAE,2BAA2B;EACvC,kBAAkB,EAAE,2BAA2B;EAC/C,QAAQ,EAAE,0BAA0B;EACpC,2BAA2B,EAAE,sBAAsB;EACnD,sEAAsE,EAAE,iBAAiB;EACzF,mBAAmB;AACrB;;AAEA;EACE,UAAU,EAAE,gCAAgC;EAC5C,gBAAgB,EAAE,6DAA6D;EAC/E,oBAAoB,EAAE,uDAAuD;EAC7E,eAAe,EAAE,gCAAgC;AACnD;;AAEA;EACE,kBAAkB;AACpB;;;AAGA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,8BAA8B;EAC9B,SAAS;EACT,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;;AAGA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;AACpB;;;AAGA,oCAAoC;;AAEpC;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,0CAA0C;EAC1C,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":["/*  6 row x 5 col master grid*/\n:root{\n  --header-space: 40px;\n  --light-background: #DFE6EE;\n}\n\nbody{\n  font-family: 'Roboto', sans-serif;\n  margin: 0;\n}\n\np{\n  color: #656363;\n  margin: 0;\n  font-size: 14px;\n}\n\nh3{\n  margin: 5px;\n  margin-left: 0;\n  font-weight: 600;\n}\n\nh2{\n  font-weight: lighter;\n}\n\nh1{\n  font-size: 23px;\n}\n\n\n.content{\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(8, 150px);\n\n}\n\nsvg{\n  width: 30px;\n  height: auto;\n}\n.dashboard-logo{\n  width: 50px;\n  height: auto;\n}\n\n.home-button{\n  margin-top: 20px;\n  \n}\n\n/* ------- Sidebar Styles -------------------------- */ \n\n.sidebar{\n  grid-column: 1/2;\n  grid-row: 1/9; \n  background-color: #81B622; \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 50px;\n}\n\n\n.project-div{\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.nav{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n  color: white;\n  padding-left: 25px;\n  max-height: 46px;\n}\n\n\n\n\n/* Header bar Section -------------------------------------*/ \n\n\n/* top line -------- */\n\n.header{\n  grid-column: 2/6;\n  grid-row: 1/2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  gap: 0;\n\n}\n\n.search-actions-bar{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n\n\n/* ----- bottom line -------- */\n\n\n\n.profile-actions-bar{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0;\n  gap: 20px;\n  width: 100%;\n}\n\n.profile{\n  display: flex;\n  margin-right: auto;\n  align-items: center;\n  gap: 8px;\n  padding-left: var(--header-space);\n\n}\n\n.nav-buttons{\n  display: flex;\n  gap: 30px;\n  padding-right: var(--header-space);\n\n}\n\n\n/* ----- header flex item children styles -------- */\n\n.profile-icon-small{\n  max-height: 60px;\n  width: auto;\n}\n.profile-icon-large{\n  max-height: 80px;\n  width: auto;\n}\n\nbutton{\n  border-radius: 24px;\n  background-color: #81B622;\n  border-width: 0;\n  color: white;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 25px;\n  padding-right: 25px;\n  font-weight: bold;\n}\n\n.search-button{\n  background-color: transparent;\n  border-radius: 0;\n  padding: 0;\n\n}\n\n#search-bar{\n  border-radius: 10px;\n  height: 25px;\n  border-width: 0;\n  width: 100%;\n  background-color: var(--light-background);\n}\n\n.search-wrapper{\n  flex-basis: 100%;\n}\n.profile-name{\n  margin-top: 0;\n}\n\n.profile-text{\n  max-height: 60px;\n}\n\nh4{\n  margin: 0;\n  font-weight: lighter;\n}\n\n/* ----- main dash content -------- */\n\n.main-dash{\n  grid-column: 2/6;\n  grid-row: 2/9;\n  background-color: #DFE6EE;\n  display: grid;\n  grid-template-columns: repeat(40, 1fr);\n  grid-template-rows: repeat(19, 30px);\n}\n\n\n.projects-text{\n  grid-row: 1/3;\n  grid-column: 2/13;\n}\n\n\n\n.to-do-container{\n  grid-row: 3/19;\n  grid-column: 2/14;\n}\n\n.in-progress-container{\n  grid-row: 3/19;\n  grid-column: 15/27;\n}\n\n.complete-container{\n  grid-row: 3/19;\n  grid-column: 28/40;\n}\n\n.task-area{\n  background-color: white;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n\n.tile{\n  background-color: white;  \n  border-radius: 8px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-left: 8px solid #EAB325;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding-left: 8px;\n  padding-top: 8px;\n  padding-right: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  gap: 15px;\n}\n\n.status-label{\n  padding-left: 15px;\n  margin-top: 10px;\n}\n\n.tile-actions{\n  display: flex;\n  flex-direction: row;  \n  margin-left: auto; \n  margin-right: 8px;\n  margin-bottom: 8px;\n  gap: 5px;\n  align-items: center;\n  \n}\n\nhr{\n  border: none;\n  width: 75%;\n  border-top: 1px dashed #ccc;/* Set the line color */\n  margin-top: 5px;/* Add some vertical spacing */\n  align-self: center;\n}\n\n.announcements{\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n\n/* ----- edit modal -- display -------- */\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.modal-content {\n  background-color: #fff; /* White background */\n  margin: auto; /* Center the modal */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 30%; /* Adjust width as needed */\n  position: relative; /* Position the container */\n  top: 50%; /* Position from the top */\n  transform: translateY(-50%); /* Center vertically */\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); /* Add a shadow */\n  border-radius: 15px;\n}\n\ntextarea {\n  width: 60%; /* Set the desired fixed width */\n  resize: vertical; /* Allow vertical resizing, but prevent horizontal resizing */\n  font-family: inherit; /* Optional: Inherit the font from the parent element */\n  font-size: 1rem; /* Optional: Set the font size */\n}\n\n#due-date-label{\n  margin-right: 75px;\n}\n\n\n.modal-content-wrapper{\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 30px;\n  margin: 10px;\n  max-width: 100%;\n}\n\n.statuses{\n  margin-top: -10px;\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.status-child{\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n\n#task-form{\n  margin-top: 10px;\n}\n\n.task-name-wrapper{\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 25px;\n  gap: 30px;\n}\n\n.task-field{\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.save-button-wrapper{\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 15px;\n  margin-right: 20px;\n}\n\n\n/* ----- add task buttons -------- */\n\n.add-task-button{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background-color: #eceff3; \n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 15px;\n  border-radius: 8px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
    
    createTask(project,name,description,status,dueDate = null,id){
        const newTask = new Task(name,description,status,dueDate,id)
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
        this.tasks = [];
        // this.__icon = rand(image) <--- come back later
        this.__numTasks = 0;
        this.id = 1//Math.floor(Math.random() * (Math.floor(100000 + 1))); 
        
        if(typeof(name)=== "string"){
            this.name = name
        }
        else{
            throw new Error('Name is not a string')
        } 

    }

    appendTask(newTask){
        if(typeof(newTask)==="object"){
            this.tasks.push(newTask);
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
    constructor(name,description,status,dueDate,id=null){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate; 
        this.status = status;
        if(!id){
            this.id = Math.floor(Math.random() * (Math.floor(100000 + 1)));
        }else{
            this.id = id
        }
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
    
    // set local storage
    const serializedAppData = JSON.stringify(appData);
    localStorage.setItem('appData',serializedAppData);
    

    
    const dataModal = document.getElementsByClassName('modal')[0]; // close modal
    dataModal.style.display = "none";
    console.log(appData)

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


 



function loadFlatNote(){
    if(localStorage.getItem('appData')===null){
        const appData = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Controller();

        appData.activeProject = appData.createProject('Example Project'); // shows what the active project on the page is 
        appData.createTask(appData.activeProject,'sample task','description for sample task','complete');
        console.log('no local storage data was found')
        return appData;
    }else{
        const appData = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Controller();
        const serializedAppData = localStorage.getItem('appData');
        const rawAppData = JSON.parse(serializedAppData);


        for(let i=0;i<rawAppData.projects.length;i++){ // loop through projects
            let prjToConvert = rawAppData.projects[i];
            console.log(prjToConvert)
            let tempProject = appData.createProject(prjToConvert.name);

            for(let j=0;j< prjToConvert.tasks.length;j++){ // loop through tasks
                let tskToConvert = prjToConvert.tasks[j];
                // extract the fields 
                let tTaskName = tskToConvert.name;
                let tTaskDes = tskToConvert.description;
                let tTaskStatus = tskToConvert.status;
                let tTaskId = tskToConvert.id;
                let tTaskDD = tskToConvert.dueDate; 
                // create the task obj and append to prj
                appData.createTask(tempProject,tTaskName,tTaskDes,tTaskStatus,tTaskDD,tTaskId);
            }

        }

        // assign the active project
        appData.activeProject = appData.projects[0];

        console.log('local storage data was found')
        return appData;
    }
}


const appData = loadFlatNote();
(0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_2__.drawHeader)(appData);
(0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_2__.drawProjectSidebar)(appData);
console.log(appData)
;(0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_2__.renderProject)(appData, appData.activeProject);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0EsT0FBTyx3RkFBd0YsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsVUFBVSxjQUFjLGNBQWMsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLGVBQWUsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQixHQUFHOztBQUUxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVOztBQUVsQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhOztBQUVoRDtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQsT0FBTztBQUNuRSxzREFBc0QsT0FBTztBQUM3RDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsMEJBQTBCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHlCQUF5QjtBQUNyRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOENBQWdCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM3NCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2lDO0FBQ3lCOzs7O0FBSWhGO0FBQ0E7QUFDQSw0QkFBNEIsbURBQVU7O0FBRXRDLDBFQUEwRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNEJBQTRCLG1EQUFVO0FBQ3RDO0FBQ0E7OztBQUdBLG9CQUFvQiw2QkFBNkIsTUFBTTtBQUN2RDtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDZCQUE2QixNQUFNO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsNkRBQVU7QUFDVixxRUFBa0I7QUFDbEI7QUFDQSxpRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsYXRub3RlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZsYXRub3RlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2ZsYXRub3RlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZsYXRub3RlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mbGF0bm90ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mbGF0bm90ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mbGF0bm90ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZsYXRub3RlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9mbGF0bm90ZS8uL3NyYy9kb20tZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2ZsYXRub3RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZsYXRub3RlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZsYXRub3RlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mbGF0bm90ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZsYXRub3RlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mbGF0bm90ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mbGF0bm90ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmxhdG5vdGUvLi9zcmMvbWFpbi1yZWZhY3RvcmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAgNiByb3cgeCA1IGNvbCBtYXN0ZXIgZ3JpZCovXG46cm9vdHtcbiAgLS1oZWFkZXItc3BhY2U6IDQwcHg7XG4gIC0tbGlnaHQtYmFja2dyb3VuZDogI0RGRTZFRTtcbn1cblxuYm9keXtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG59XG5cbnB7XG4gIGNvbG9yOiAjNjU2MzYzO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaDN7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDJ7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5oMXtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5cbi5jb250ZW50e1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxNTBweCk7XG5cbn1cblxuc3Zne1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmRhc2hib2FyZC1sb2dve1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaG9tZS1idXR0b257XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIFxufVxuXG4vKiAtLS0tLS0tIFNpZGViYXIgU3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovIFxuXG4uc2lkZWJhcntcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDEvOTsgXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MUI2MjI7IFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogNTBweDtcbn1cblxuXG4ucHJvamVjdC1kaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLm5hdntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgbWF4LWhlaWdodDogNDZweDtcbn1cblxuXG5cblxuLyogSGVhZGVyIGJhciBTZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBcblxuXG4vKiB0b3AgbGluZSAtLS0tLS0tLSAqL1xuXG4uaGVhZGVye1xuICBncmlkLWNvbHVtbjogMi82O1xuICBncmlkLXJvdzogMS8yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZ2FwOiAwO1xuXG59XG5cbi5zZWFyY2gtYWN0aW9ucy1iYXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuXG4vKiAtLS0tLSBib3R0b20gbGluZSAtLS0tLS0tLSAqL1xuXG5cblxuLnByb2ZpbGUtYWN0aW9ucy1iYXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBnYXA6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZmlsZXtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1oZWFkZXItc3BhY2UpO1xuXG59XG5cbi5uYXYtYnV0dG9uc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1oZWFkZXItc3BhY2UpO1xuXG59XG5cblxuLyogLS0tLS0gaGVhZGVyIGZsZXggaXRlbSBjaGlsZHJlbiBzdHlsZXMgLS0tLS0tLS0gKi9cblxuLnByb2ZpbGUtaWNvbi1zbWFsbHtcbiAgbWF4LWhlaWdodDogNjBweDtcbiAgd2lkdGg6IGF1dG87XG59XG4ucHJvZmlsZS1pY29uLWxhcmdle1xuICBtYXgtaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuYnV0dG9ue1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFCNjIyO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VhcmNoLWJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDA7XG5cbn1cblxuI3NlYXJjaC1iYXJ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XG59XG5cbi5zZWFyY2gtd3JhcHBlcntcbiAgZmxleC1iYXNpczogMTAwJTtcbn1cbi5wcm9maWxlLW5hbWV7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5wcm9maWxlLXRleHR7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG59XG5cbmg0e1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4vKiAtLS0tLSBtYWluIGRhc2ggY29udGVudCAtLS0tLS0tLSAqL1xuXG4ubWFpbi1kYXNoe1xuICBncmlkLWNvbHVtbjogMi82O1xuICBncmlkLXJvdzogMi85O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNkVFO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0MCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTksIDMwcHgpO1xufVxuXG5cbi5wcm9qZWN0cy10ZXh0e1xuICBncmlkLXJvdzogMS8zO1xuICBncmlkLWNvbHVtbjogMi8xMztcbn1cblxuXG5cbi50by1kby1jb250YWluZXJ7XG4gIGdyaWQtcm93OiAzLzE5O1xuICBncmlkLWNvbHVtbjogMi8xNDtcbn1cblxuLmluLXByb2dyZXNzLWNvbnRhaW5lcntcbiAgZ3JpZC1yb3c6IDMvMTk7XG4gIGdyaWQtY29sdW1uOiAxNS8yNztcbn1cblxuLmNvbXBsZXRlLWNvbnRhaW5lcntcbiAgZ3JpZC1yb3c6IDMvMTk7XG4gIGdyaWQtY29sdW1uOiAyOC80MDtcbn1cblxuLnRhc2stYXJlYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cblxuLnRpbGV7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNFQUIzMjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGdhcDogMTVweDtcbn1cblxuLnN0YXR1cy1sYWJlbHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udGlsZS1hY3Rpb25ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93OyAgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyBcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZ2FwOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxufVxuXG5ocntcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNzUlO1xuICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNjY2M7LyogU2V0IHRoZSBsaW5lIGNvbG9yICovXG4gIG1hcmdpbi10b3A6IDVweDsvKiBBZGQgc29tZSB2ZXJ0aWNhbCBzcGFjaW5nICovXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmFubm91bmNlbWVudHN7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5cbi8qIC0tLS0tIGVkaXQgbW9kYWwgLS0gZGlzcGxheSAtLS0tLS0tLSAqL1xuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuXG4vKiBNb2RhbCBDb250ZW50ICovXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IC8qIFdoaXRlIGJhY2tncm91bmQgKi9cbiAgbWFyZ2luOiBhdXRvOyAvKiBDZW50ZXIgdGhlIG1vZGFsICovXG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiAzMCU7IC8qIEFkanVzdCB3aWR0aCBhcyBuZWVkZWQgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBQb3NpdGlvbiB0aGUgY29udGFpbmVyICovXG4gIHRvcDogNTAlOyAvKiBQb3NpdGlvbiBmcm9tIHRoZSB0b3AgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpOyAvKiBBZGQgYSBzaGFkb3cgKi9cbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogNjAlOyAvKiBTZXQgdGhlIGRlc2lyZWQgZml4ZWQgd2lkdGggKi9cbiAgcmVzaXplOiB2ZXJ0aWNhbDsgLyogQWxsb3cgdmVydGljYWwgcmVzaXppbmcsIGJ1dCBwcmV2ZW50IGhvcml6b250YWwgcmVzaXppbmcgKi9cbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIE9wdGlvbmFsOiBJbmhlcml0IHRoZSBmb250IGZyb20gdGhlIHBhcmVudCBlbGVtZW50ICovXG4gIGZvbnQtc2l6ZTogMXJlbTsgLyogT3B0aW9uYWw6IFNldCB0aGUgZm9udCBzaXplICovXG59XG5cbiNkdWUtZGF0ZS1sYWJlbHtcbiAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xufVxuXG5cbi5tb2RhbC1jb250ZW50LXdyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zdGF0dXNlc3tcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnN0YXR1cy1jaGlsZHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG5cblxuI3Rhc2stZm9ybXtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRhc2stbmFtZS13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBnYXA6IDMwcHg7XG59XG5cbi50YXNrLWZpZWxke1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLnNhdmUtYnV0dG9uLXdyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuXG4vKiAtLS0tLSBhZGQgdGFzayBidXR0b25zIC0tLS0tLS0tICovXG5cbi5hZGQtdGFzay1idXR0b257XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7IFxuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cblxuXG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4QkFBOEI7QUFDOUI7RUFDRSxvQkFBb0I7RUFDcEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG9DQUFvQzs7QUFFdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCOztBQUVsQjs7QUFFQSxzREFBc0Q7O0FBRXREO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsU0FBUztBQUNYOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFD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dkIsMENBQTBDO0VBQzFDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAgNiByb3cgeCA1IGNvbCBtYXN0ZXIgZ3JpZCovXFxuOnJvb3R7XFxuICAtLWhlYWRlci1zcGFjZTogNDBweDtcXG4gIC0tbGlnaHQtYmFja2dyb3VuZDogI0RGRTZFRTtcXG59XFxuXFxuYm9keXtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxucHtcXG4gIGNvbG9yOiAjNjU2MzYzO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5oM3tcXG4gIG1hcmdpbjogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5oMntcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG5oMXtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG59XFxuXFxuXFxuLmNvbnRlbnR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDE1MHB4KTtcXG5cXG59XFxuXFxuc3Zne1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5kYXNoYm9hcmQtbG9nb3tcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaG9tZS1idXR0b257XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgXFxufVxcblxcbi8qIC0tLS0tLS0gU2lkZWJhciBTdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi8gXFxuXFxuLnNpZGViYXJ7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvOTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFCNjIyOyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG5cXG4ucHJvamVjdC1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm5hdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIG1heC1oZWlnaHQ6IDQ2cHg7XFxufVxcblxcblxcblxcblxcbi8qIEhlYWRlciBiYXIgU2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gXFxuXFxuXFxuLyogdG9wIGxpbmUgLS0tLS0tLS0gKi9cXG5cXG4uaGVhZGVye1xcbiAgZ3JpZC1jb2x1bW46IDIvNjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBnYXA6IDA7XFxuXFxufVxcblxcbi5zZWFyY2gtYWN0aW9ucy1iYXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuXFxuLyogLS0tLS0gYm90dG9tIGxpbmUgLS0tLS0tLS0gKi9cXG5cXG5cXG5cXG4ucHJvZmlsZS1hY3Rpb25zLWJhcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvZmlsZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWhlYWRlci1zcGFjZSk7XFxuXFxufVxcblxcbi5uYXYtYnV0dG9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1oZWFkZXItc3BhY2UpO1xcblxcbn1cXG5cXG5cXG4vKiAtLS0tLSBoZWFkZXIgZmxleCBpdGVtIGNoaWxkcmVuIHN0eWxlcyAtLS0tLS0tLSAqL1xcblxcbi5wcm9maWxlLWljb24tc21hbGx7XFxuICBtYXgtaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5wcm9maWxlLWljb24tbGFyZ2V7XFxuICBtYXgtaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbmJ1dHRvbntcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFCNjIyO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy10b3A6IDEycHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlYXJjaC1idXR0b257XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbn1cXG5cXG4jc2VhcmNoLWJhcntcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcbn1cXG5cXG4uc2VhcmNoLXdyYXBwZXJ7XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG4ucHJvZmlsZS1uYW1le1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLnByb2ZpbGUtdGV4dHtcXG4gIG1heC1oZWlnaHQ6IDYwcHg7XFxufVxcblxcbmg0e1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbi8qIC0tLS0tIG1haW4gZGFzaCBjb250ZW50IC0tLS0tLS0tICovXFxuXFxuLm1haW4tZGFzaHtcXG4gIGdyaWQtY29sdW1uOiAyLzY7XFxuICBncmlkLXJvdzogMi85O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTZFRTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDE5LCAzMHB4KTtcXG59XFxuXFxuXFxuLnByb2plY3RzLXRleHR7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgZ3JpZC1jb2x1bW46IDIvMTM7XFxufVxcblxcblxcblxcbi50by1kby1jb250YWluZXJ7XFxuICBncmlkLXJvdzogMy8xOTtcXG4gIGdyaWQtY29sdW1uOiAyLzE0O1xcbn1cXG5cXG4uaW4tcHJvZ3Jlc3MtY29udGFpbmVye1xcbiAgZ3JpZC1yb3c6IDMvMTk7XFxuICBncmlkLWNvbHVtbjogMTUvMjc7XFxufVxcblxcbi5jb21wbGV0ZS1jb250YWluZXJ7XFxuICBncmlkLXJvdzogMy8xOTtcXG4gIGdyaWQtY29sdW1uOiAyOC80MDtcXG59XFxuXFxuLnRhc2stYXJlYXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4udGlsZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNFQUIzMjU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uc3RhdHVzLWxhYmVse1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnRpbGUtYWN0aW9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyAgXFxuICBtYXJnaW4tbGVmdDogYXV0bzsgXFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbn1cXG5cXG5ocntcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA3NSU7XFxuICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNjY2M7LyogU2V0IHRoZSBsaW5lIGNvbG9yICovXFxuICBtYXJnaW4tdG9wOiA1cHg7LyogQWRkIHNvbWUgdmVydGljYWwgc3BhY2luZyAqL1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYW5ub3VuY2VtZW50c3tcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG5cXG4vKiAtLS0tLSBlZGl0IG1vZGFsIC0tIGRpc3BsYXkgLS0tLS0tLS0gKi9cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IC8qIFdoaXRlIGJhY2tncm91bmQgKi9cXG4gIG1hcmdpbjogYXV0bzsgLyogQ2VudGVyIHRoZSBtb2RhbCAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogMzAlOyAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFBvc2l0aW9uIHRoZSBjb250YWluZXIgKi9cXG4gIHRvcDogNTAlOyAvKiBQb3NpdGlvbiBmcm9tIHRoZSB0b3AgKi9cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7IC8qIEFkZCBhIHNoYWRvdyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDYwJTsgLyogU2V0IHRoZSBkZXNpcmVkIGZpeGVkIHdpZHRoICovXFxuICByZXNpemU6IHZlcnRpY2FsOyAvKiBBbGxvdyB2ZXJ0aWNhbCByZXNpemluZywgYnV0IHByZXZlbnQgaG9yaXpvbnRhbCByZXNpemluZyAqL1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIE9wdGlvbmFsOiBJbmhlcml0IHRoZSBmb250IGZyb20gdGhlIHBhcmVudCBlbGVtZW50ICovXFxuICBmb250LXNpemU6IDFyZW07IC8qIE9wdGlvbmFsOiBTZXQgdGhlIGZvbnQgc2l6ZSAqL1xcbn1cXG5cXG4jZHVlLWRhdGUtbGFiZWx7XFxuICBtYXJnaW4tcmlnaHQ6IDc1cHg7XFxufVxcblxcblxcbi5tb2RhbC1jb250ZW50LXdyYXBwZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3RhdHVzZXN7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnN0YXR1cy1jaGlsZHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcblxcbiN0YXNrLWZvcm17XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udGFzay1uYW1lLXdyYXBwZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi50YXNrLWZpZWxke1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLnNhdmUtYnV0dG9uLXdyYXBwZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi8qIC0tLS0tIGFkZCB0YXNrIGJ1dHRvbnMgLS0tLS0tLS0gKi9cXG5cXG4uYWRkLXRhc2stYnV0dG9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7IFxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZy10b3A6IDJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIENvbnRyb2xsZXJ7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdDtcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlVGFzayhwcm9qZWN0LG5hbWUsZGVzY3JpcHRpb24sc3RhdHVzLGR1ZURhdGUgPSBudWxsLGlkKXtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKG5hbWUsZGVzY3JpcHRpb24sc3RhdHVzLGR1ZURhdGUsaWQpXG4gICAgICAgIHByb2plY3QuYXBwZW5kVGFzayhuZXdUYXNrKVxuXG5cbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0KG5hbWUpe1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTsgXG5cbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7IFxuICAgIH1cblxuICAgIHRhc2tMb29rdXAodGFza0lEKXsgLy9oZWxwZXIgZnVuY3Rpb24gZm9yIHRhc2sgbG9va3VwXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHRoaXMucHJvamVjdHNbaV07XG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgaiA8IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50UHJvamVjdC50YXNrc1tqXS5pZCA9PT0gdGFza0lEKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LnRhc2tzW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgICAgLy8gdGhpcy5fX2ljb24gPSByYW5kKGltYWdlKSA8LS0tIGNvbWUgYmFjayBsYXRlclxuICAgICAgICB0aGlzLl9fbnVtVGFza3MgPSAwO1xuICAgICAgICB0aGlzLmlkID0gMS8vTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1hdGguZmxvb3IoMTAwMDAwICsgMSkpKTsgXG4gICAgICAgIFxuICAgICAgICBpZih0eXBlb2YobmFtZSk9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBpcyBub3QgYSBzdHJpbmcnKVxuICAgICAgICB9IFxuXG4gICAgfVxuXG4gICAgYXBwZW5kVGFzayhuZXdUYXNrKXtcbiAgICAgICAgaWYodHlwZW9mKG5ld1Rhc2spPT09XCJvYmplY3RcIil7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICB0aGlzLl9fbnVtVGFza3MrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXcgUHJvamVjdCB5b3UgYXJlIHRyeWluZyB0byBhZGQgaXMgbm90IGFuIG9iamVjdCcpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlVGFzayhjb21wbGV0ZVRhc2spe1xuICAgICAgICBpZih0aGlzLnRhc2tzLmluY2x1ZGVzKGNvbXBsZXRlVGFzaykpe1xuICAgICAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKGNvbXBsZXRlVGFzayksMSk7XG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdUYXNrIGlzIG5vdCBpbiBwcm9qZWN0Jyk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5jbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsZGVzY3JpcHRpb24sc3RhdHVzLGR1ZURhdGUsaWQ9bnVsbCl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTsgXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICBpZighaWQpe1xuICAgICAgICAgICAgdGhpcy5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNYXRoLmZsb29yKDEwMDAwMCArIDEpKSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7VGFzaywgUHJvamVjdCwgQ29udHJvbGxlcn1cbiIsImltcG9ydCBwcm9maWxlSWNvbkltYWdlIGZyb20gJy4vcHJvZmlsZS1pY29uLnBuZyc7IFxuXG5sZXQgYWN0aXZlVGFzazsgLy8gc2hvd3Mgd2hhdCB0aGUgYWN0aXZlIHRhc2sgb24gdGhlIHBhZ2UgaXNcbmxldCBjdXJyZW50U3RhdGU7IC8vIHNob3dzIHdoYXQgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVkaXQgbW9kYWwgc2hvdWxkIGJlIChwb3NzaWJsZSB2YWx1ZXMgYXJlICdlZGl0JyBvciAnY3JlYXRlJylcblxuZnVuY3Rpb24gZWRpdFRhc2soYXBwRGF0YSwgdGFza0lEKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpOyAvLyBjbGVhciBmb3JtIGRhdGFcbiAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICBjb25zdCB0YXNrID0gYXBwRGF0YS50YXNrTG9va3VwKHRhc2tJRCk7IC8vIGZldGNoIHRhc2tcbiAgICBhY3RpdmVUYXNrID0gdGFzazsgXG5cbiAgICBjdXJyZW50U3RhdGUgPSAnZWRpdCdcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUnKS52YWx1ZSA9ICB0YXNrLm5hbWU7IC8vIGRyYXcgdGFzayBkYXRhIGludG8gZnJvbVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2NyaXB0aW9uJykudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpLnZhbHVlID0gdGFzay5kdWVEYXRlOyBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwidGFzay1zdGF0dXNcIl1bdmFsdWU9XCIke3Rhc2suc3RhdHVzfVwiXWApLmNoZWNrZWQgPSB0cnVlO1xuXG5cbiAgICBjb25zdCBkYXRhTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCcpWzBdOyAvLyBzaG93IG1vZGFsXG4gICAgZGF0YU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbn1cblxuXG5mdW5jdGlvbiBhZGRUYXNrKHN0YXR1cyl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTsgLy8gY2xlYXIgZm9ybSBkYXRhXG4gICAgZm9ybS5yZXNldCgpO1xuXG4gICAgY3VycmVudFN0YXRlID0gJ2NyZWF0ZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInRhc2stc3RhdHVzXCJdW3ZhbHVlPVwiJHtzdGF0dXN9XCJdYCkuY2hlY2tlZCA9IHRydWU7IC8vIGRlZmF1bHQgcmFkaW8gYnV0dG9uIHRvIGNvcnJlY3Qgc3RhdHVzXG5cbiAgICBjb25zdCBkYXRhTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCcpWzBdOyAvLyBzaG93IG1vZGFsXG4gICAgZGF0YU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgXG59XG5cbmZ1bmN0aW9uIHNhdmVUYXNrKGFwcERhdGEpe1xuICAgIGNvbnN0IGVudGVyZWRUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUnKS52YWx1ZTtcblxuICAgIGNvbnN0IGVudGVyZWRUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJ0YXNrLXN0YXR1c1wiXScpO1xuICAgIGNvbnN0IGNoZWNrZWRSYWRpb0J1dHRvbiA9IEFycmF5LmZyb20ocmFkaW9CdXR0b25zKS5maW5kKHJhZGlvID0+IHJhZGlvLmNoZWNrZWQpOyBcbiAgICBjb25zdCBlbnRlcmVkVGFza1N0YXR1cyA9IGNoZWNrZWRSYWRpb0J1dHRvbiA/IGNoZWNrZWRSYWRpb0J1dHRvbi52YWx1ZSA6IG51bGw7XG5cbiAgICBpZihjdXJyZW50U3RhdGUgPT09ICdlZGl0Jyl7XG4gICAgICAgIGFjdGl2ZVRhc2submFtZSA9IGVudGVyZWRUYXNrTmFtZTtcbiAgICAgICAgYWN0aXZlVGFzay5kZXNjcmlwdGlvbiA9IGVudGVyZWRUYXNrRGVzY3JpcHRpb247XG4gICAgICAgIGFjdGl2ZVRhc2suZHVlRGF0ZSA9IGVudGVyZWRUYXNrRHVlRGF0ZTsgXG4gICAgICAgIGFjdGl2ZVRhc2suc3RhdHVzID0gZW50ZXJlZFRhc2tTdGF0dXM7IC8vIHVwZGF0ZSB0aGUgc3RhdHVzIFxuICAgIH1cblxuICAgIGVsc2UgaWYoY3VycmVudFN0YXRlID09PSdjcmVhdGUnKXtcbiAgICAgICAgYXBwRGF0YS5jcmVhdGVUYXNrKGFwcERhdGEuYWN0aXZlUHJvamVjdCxlbnRlcmVkVGFza05hbWUsZW50ZXJlZFRhc2tEZXNjcmlwdGlvbixlbnRlcmVkVGFza1N0YXR1cyxlbnRlcmVkVGFza0R1ZURhdGUpO1xuICAgIH1cbiAgICBcbiAgICAvLyBzZXQgbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0IHNlcmlhbGl6ZWRBcHBEYXRhID0gSlNPTi5zdHJpbmdpZnkoYXBwRGF0YSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcERhdGEnLHNlcmlhbGl6ZWRBcHBEYXRhKTtcbiAgICBcblxuICAgIFxuICAgIGNvbnN0IGRhdGFNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJylbMF07IC8vIGNsb3NlIG1vZGFsXG4gICAgZGF0YU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zb2xlLmxvZyhhcHBEYXRhKVxuXG4gICAgcmVuZGVyUHJvamVjdChhcHBEYXRhLGFwcERhdGEuYWN0aXZlUHJvamVjdCk7XG5cbn1cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KGFwcERhdGEscHJvamVjdCl7XG5cbiAgICBhcHBEYXRhLmFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xuICAgIGRyYXdQcm9qZWN0QXJlYShhcHBEYXRhKTsgXG5cbiAgICAvLyAtLS0gZHJhdyBoZWFkbGluZSB0ZXh0IC0tLS1cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRsaW5lJylbMF07XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9ICdwcm9qZWN0LW5hbWUnO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7YXBwRGF0YS5hY3RpdmVQcm9qZWN0Lm5hbWV9YDtcbiAgICBoZWFkbGluZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgIC8vIC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0gLS0tLVxuXG4gICAgZm9yKGxldCBpPTA7IGk8IHByb2plY3QudGFza3MubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgdGhpc1Rhc2sgPSBwcm9qZWN0LnRhc2tzW2ldO1xuICAgICAgICBpZih0aGlzVGFzay5zdGF0dXMgPT09ICd0by1kbycpe1xuICAgICAgICAgICAgZHJhd1Rhc2soYXBwRGF0YSx0aGlzVGFzaywndG8tZG8nKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpc1Rhc2suc3RhdHVzID09PSAnaW4tcHJvZ3Jlc3MnKXtcbiAgICAgICAgICAgIGRyYXdUYXNrKGFwcERhdGEsdGhpc1Rhc2ssJ2luLXByb2dyZXNzJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXNUYXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJyl7XG4gICAgICAgICAgICBkcmF3VGFzayhhcHBEYXRhLHRoaXNUYXNrLCdjb21wbGV0ZScpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aGlzIHRhc2sgJHt0aGlzVGFzay5uYW1lfSBkb2VzIG5vdCBoYXZlIGEgc3RhdHVzYClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkcmF3UHJvamVjdEFyZWEoYXBwRGF0YSl7XG4gICAgLy8gQ3JlYXRlIHRoZSB0b3AtbGV2ZWwgZGl2XG4gICAgY29uc3QgdG9wTGV2ZWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLWRhc2gnKVswXTtcbiAgICB0b3BMZXZlbERpdi5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vIC0tLS0tLS0tLS0gQ1JFQVRFIFRIRSBNT0RBTCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIENyZWF0ZSB0aGUgb3V0ZXIgZGl2IGVsZW1lbnRcbiAgICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG91dGVyRGl2LmlkID0gJ2VkaXQtdGFzayc7XG4gICAgb3V0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgaW5uZXIgZGl2IGVsZW1lbnRcbiAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgY2xvc2Ugc3BhbiBlbGVtZW50XG4gICAgY29uc3QgY2xvc2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNsb3NlU3Bhbi5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICAgIGNsb3NlU3Bhbi50ZXh0Q29udGVudCA9ICfDlyc7XG4gICAgY2xvc2VTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgb3V0ZXJEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KVxuICAgIGlubmVyRGl2LmFwcGVuZENoaWxkKGNsb3NlU3Bhbik7XG5cblxuICAgIC8vIENyZWF0ZSB0aGUgZm9ybSBlbGVtZW50XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlkID0gJ3Rhc2stZm9ybSc7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRhc2sgbmFtZSB3cmFwcGVyIGRpdlxuICAgIGNvbnN0IHRhc2tOYW1lV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tOYW1lV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUtd3JhcHBlcicpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0YXNrIG5hbWUgbGFiZWxcbiAgICBjb25zdCB0YXNrTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrTmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stbmFtZScpO1xuICAgIHRhc2tOYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBOYW1lJztcbiAgICB0YXNrTmFtZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza05hbWVMYWJlbCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRhc2sgbmFtZSBpbnB1dFxuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tOYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0YXNrTmFtZUlucHV0LmlkID0gJ3Rhc2stbmFtZSc7XG4gICAgdGFza05hbWVJbnB1dC5uYW1lID0gJ3Rhc2stbmFtZSc7XG4gICAgdGFza05hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdUYXNrIE5hbWUuLi4nO1xuICAgIHRhc2tOYW1lV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lV3JhcHBlcik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRpbGUgZGl2XG4gICAgY29uc3QgdGlsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbGVEaXYuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBtb2RhbCBjb250ZW50IHdyYXBwZXIgZGl2XG4gICAgY29uc3QgbW9kYWxDb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudC13cmFwcGVyJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRhc2sgZGVzY3JpcHRpb24gZmllbGRcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEZXNjcmlwdGlvbkZpZWxkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZmllbGQnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdGFzayBkZXNjcmlwdGlvbiBsYWJlbFxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgIHRhc2tEZXNjcmlwdGlvbkZpZWxkLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbkxhYmVsKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdGFzayBkZXNjcmlwdGlvbiB0ZXh0YXJlYVxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25UZXh0YXJlYS5pZCA9ICd0YXNrLWRlc2NyaXB0aW9uJztcbiAgICB0YXNrRGVzY3JpcHRpb25UZXh0YXJlYS5uYW1lID0gJ3Rhc2stZGVzY3JpcHRpb24nO1xuICAgIHRhc2tEZXNjcmlwdGlvblRleHRhcmVhLnJvd3MgPSAzO1xuICAgIHRhc2tEZXNjcmlwdGlvblRleHRhcmVhLmNvbHMgPSA1MDtcbiAgICB0YXNrRGVzY3JpcHRpb25UZXh0YXJlYS5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIGRlc2NyaXB0aW9uLi4uJztcbiAgICB0YXNrRGVzY3JpcHRpb25GaWVsZC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25UZXh0YXJlYSk7XG4gICAgbW9kYWxDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25GaWVsZCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGR1ZSBkYXRlIGZpZWxkXG4gICAgY29uc3QgZHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZmllbGQnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZHVlIGRhdGUgbGFiZWxcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgZHVlRGF0ZUxhYmVsLmlkID0gJ2R1ZS1kYXRlLWxhYmVsJztcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgIGR1ZURhdGVGaWVsZC5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkdWUgZGF0ZSBpbnB1dFxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gJ2R1ZS1kYXRlJztcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWUtZGF0ZSc7XG4gICAgZHVlRGF0ZUZpZWxkLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gICAgbW9kYWxDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChkdWVEYXRlRmllbGQpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBzdGF0dXNlcyBkaXZcbiAgICBjb25zdCBzdGF0dXNlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXR1c2VzRGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXR1c2VzJyk7XG4gICAgc3RhdHVzZXNEaXYudGV4dENvbnRlbnQgPSAnVGFzayBTdGF0dXMnO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0by1kbyBzdGF0dXMgY2hpbGQgZGl2XG4gICAgY29uc3QgdG9kb1N0YXR1c0NoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1N0YXR1c0NoaWxkLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1jaGlsZCcpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0by1kbyBzdGF0dXMgcmFkaW8gaW5wdXRcbiAgICBjb25zdCB0b2RvUmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb1JhZGlvSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgdG9kb1JhZGlvSW5wdXQuaWQgPSAndG8tZG8nO1xuICAgIHRvZG9SYWRpb0lucHV0Lm5hbWUgPSAndGFzay1zdGF0dXMnO1xuICAgIHRvZG9SYWRpb0lucHV0LnZhbHVlID0gJ3RvLWRvJztcbiAgICB0b2RvUmFkaW9JbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICB0b2RvU3RhdHVzQ2hpbGQuYXBwZW5kQ2hpbGQodG9kb1JhZGlvSW5wdXQpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0by1kbyBzdGF0dXMgbGFiZWxcbiAgICBjb25zdCB0b2RvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvZG9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaGlsZCcpO1xuICAgIHRvZG9MYWJlbC50ZXh0Q29udGVudCA9ICdUbyBEbyc7XG4gICAgdG9kb1N0YXR1c0NoaWxkLmFwcGVuZENoaWxkKHRvZG9MYWJlbCk7XG4gICAgc3RhdHVzZXNEaXYuYXBwZW5kQ2hpbGQodG9kb1N0YXR1c0NoaWxkKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgaW4tcHJvZ3Jlc3Mgc3RhdHVzIGNoaWxkIGRpdlxuICAgIGNvbnN0IGluUHJvZ3Jlc3NTdGF0dXNDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluUHJvZ3Jlc3NTdGF0dXNDaGlsZC5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtY2hpbGQnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgaW4tcHJvZ3Jlc3Mgc3RhdHVzIHJhZGlvIGlucHV0XG4gICAgY29uc3QgaW5Qcm9ncmVzc1JhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGluUHJvZ3Jlc3NSYWRpb0lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIGluUHJvZ3Jlc3NSYWRpb0lucHV0LmlkID0gJ2luLXByb2dyZXNzJztcbiAgICBpblByb2dyZXNzUmFkaW9JbnB1dC5uYW1lID0gJ3Rhc2stc3RhdHVzJztcbiAgICBpblByb2dyZXNzUmFkaW9JbnB1dC52YWx1ZSA9ICdpbi1wcm9ncmVzcyc7XG4gICAgaW5Qcm9ncmVzc1N0YXR1c0NoaWxkLmFwcGVuZENoaWxkKGluUHJvZ3Jlc3NSYWRpb0lucHV0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgaW4tcHJvZ3Jlc3Mgc3RhdHVzIGxhYmVsXG4gICAgY29uc3QgbW9kYWxpblByb2dyZXNzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG1vZGFsaW5Qcm9ncmVzc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NoaWxkJyk7XG4gICAgbW9kYWxpblByb2dyZXNzTGFiZWwudGV4dENvbnRlbnQgPSAnSW4gUHJvZ3Jlc3MnO1xuICAgIGluUHJvZ3Jlc3NTdGF0dXNDaGlsZC5hcHBlbmRDaGlsZChtb2RhbGluUHJvZ3Jlc3NMYWJlbCk7XG4gICAgc3RhdHVzZXNEaXYuYXBwZW5kQ2hpbGQoaW5Qcm9ncmVzc1N0YXR1c0NoaWxkKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgY29tcGxldGUgc3RhdHVzIGNoaWxkIGRpdlxuICAgIGNvbnN0IGNvbXBsZXRlU3RhdHVzQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wbGV0ZVN0YXR1c0NoaWxkLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1jaGlsZCcpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBjb21wbGV0ZSBzdGF0dXMgcmFkaW8gaW5wdXRcbiAgICBjb25zdCBjb21wbGV0ZVJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbXBsZXRlUmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBjb21wbGV0ZVJhZGlvSW5wdXQuaWQgPSAnY29tcGxldGUnO1xuICAgIGNvbXBsZXRlUmFkaW9JbnB1dC5uYW1lID0gJ3Rhc2stc3RhdHVzJztcbiAgICBjb21wbGV0ZVJhZGlvSW5wdXQudmFsdWUgPSAnY29tcGxldGUnO1xuICAgIGNvbXBsZXRlU3RhdHVzQ2hpbGQuYXBwZW5kQ2hpbGQoY29tcGxldGVSYWRpb0lucHV0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgY29tcGxldGUgc3RhdHVzIGxhYmVsXG4gICAgY29uc3QgbW9kYWxjb21wbGV0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBtb2RhbGNvbXBsZXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2hpbGQnKTtcbiAgICBtb2RhbGNvbXBsZXRlTGFiZWwudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICAgIGNvbXBsZXRlU3RhdHVzQ2hpbGQuYXBwZW5kQ2hpbGQobW9kYWxjb21wbGV0ZUxhYmVsKTtcbiAgICBzdGF0dXNlc0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZVN0YXR1c0NoaWxkKTtcbiAgICBtb2RhbENvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHN0YXR1c2VzRGl2KTtcbiAgICB0aWxlRGl2LmFwcGVuZENoaWxkKG1vZGFsQ29udGVudFdyYXBwZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGlsZURpdik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHNhdmUgYnV0dG9uIHdyYXBwZXIgZGl2XG4gICAgY29uc3Qgc2F2ZUJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXZlQnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzYXZlLWJ1dHRvbi13cmFwcGVyJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHNhdmUgYnV0dG9uXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVCdXR0b24uaWQgPSAnc2F2ZS1idXR0b24nO1xuICAgIHNhdmVCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7IC8vIGFkZCB0aGUgY29ycmVjdCBTQVZFIGxpc3RlbmVyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgICAgIHNhdmVUYXNrKGFwcERhdGEpO1xuICAgIFxuICAgIH0pXG5cbiAgICBzYXZlQnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNhdmVCdXR0b25XcmFwcGVyKTtcbiAgICBpbm5lckRpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChpbm5lckRpdik7XG5cbiAgICAvLyBBcHBlbmQgdGhlIG91dGVyIGRpdiB0byB0aGUgZG9jdW1lbnQgYm9keVxuICAgIHRvcExldmVsRGl2LmFwcGVuZENoaWxkKG91dGVyRGl2KTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENSRUFURSBNT0RBTCBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBDcmVhdGUgdGhlIGhlYWRsaW5lIGRpdlxuICAgIGNvbnN0IGhlYWRsaW5lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGxpbmVEaXYuY2xhc3NOYW1lID0gJ2hlYWRsaW5lIHByb2plY3RzLXRleHQnO1xuICAgIFxuICAgIC8vIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7YWN0aXZlUHJvamVjdC5uYW1lfWA7IC0tLS0tLSBub3QgYXNzaWduaW5nIGl0IGhlcmUgXG5cbiAgICB0b3BMZXZlbERpdi5hcHBlbmRDaGlsZChoZWFkbGluZURpdik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIFwiVG8gRG9cIiB0YXNrIGFyZWFcbiAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eb0NvbnRhaW5lci5jbGFzc05hbWUgPSAndG8tZG8tY29udGFpbmVyIHRhc2stYXJlYSc7XG4gICAgY29uc3QgdG9Eb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eb0xhYmVsLmNsYXNzTmFtZSA9ICdzdGF0dXMtbGFiZWwnO1xuICAgIGNvbnN0IHRvRG9MYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRvRG9MYWJlbFRleHQudGV4dENvbnRlbnQgPSAnVG8gRG8nO1xuICAgIHRvRG9MYWJlbC5hcHBlbmRDaGlsZCh0b0RvTGFiZWxUZXh0KTtcbiAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9MYWJlbCk7XG4gICAgY29uc3QgdG9Eb0FkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9BZGRCdXR0b24uY2xhc3NOYW1lID0gJ2FkZC10YXNrLWJ1dHRvbic7XG4gICAgdG9Eb0FkZEJ1dHRvbi5pZCA9ICdhZGQtdG8tZG8tdGFzayc7XG4gICAgdG9Eb0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnsgLy8gQUREIFBST0pFQ1QgQlVUVE9OIC0tIFRPLURPXG4gICAgICAgIGFkZFRhc2soJ3RvLWRvJyk7XG4gICAgfSlcbiAgICBjb25zdCB0b0RvU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICB0b0RvU3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0b0RvU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICBjb25zdCB0b0RvU3ZnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aXRsZScpO1xuICAgIHRvRG9TdmdUaXRsZS50ZXh0Q29udGVudCA9ICdwbHVzJztcbiAgICBjb25zdCB0b0RvU3ZnUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIHRvRG9TdmdQYXRoLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDAwMDAwJyk7XG4gICAgdG9Eb1N2Z1BhdGguc2V0QXR0cmlidXRlKCdkJywgJ00xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaJyk7XG4gICAgdG9Eb1N2Zy5hcHBlbmRDaGlsZCh0b0RvU3ZnVGl0bGUpO1xuICAgIHRvRG9TdmcuYXBwZW5kQ2hpbGQodG9Eb1N2Z1BhdGgpO1xuICAgIHRvRG9BZGRCdXR0b24uYXBwZW5kQ2hpbGQodG9Eb1N2Zyk7XG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvQWRkQnV0dG9uKTtcbiAgICB0b3BMZXZlbERpdi5hcHBlbmRDaGlsZCh0b0RvQ29udGFpbmVyKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgXCJJbiBQcm9ncmVzc1wiIHRhc2sgYXJlYVxuICAgIGNvbnN0IGluUHJvZ3Jlc3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpblByb2dyZXNzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdpbi1wcm9ncmVzcy1jb250YWluZXIgdGFzay1hcmVhJztcbiAgICBjb25zdCBpblByb2dyZXNzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpblByb2dyZXNzTGFiZWwuY2xhc3NOYW1lID0gJ3N0YXR1cy1sYWJlbCc7XG4gICAgY29uc3QgaW5Qcm9ncmVzc0xhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaW5Qcm9ncmVzc0xhYmVsVGV4dC50ZXh0Q29udGVudCA9ICdJbiBQcm9ncmVzcyc7XG4gICAgaW5Qcm9ncmVzc0xhYmVsLmFwcGVuZENoaWxkKGluUHJvZ3Jlc3NMYWJlbFRleHQpO1xuICAgIGluUHJvZ3Jlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5Qcm9ncmVzc0xhYmVsKTtcbiAgICBjb25zdCBpblByb2dyZXNzQWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5Qcm9ncmVzc0FkZEJ1dHRvbi5jbGFzc05hbWUgPSAnYWRkLXRhc2stYnV0dG9uJztcbiAgICBpblByb2dyZXNzQWRkQnV0dG9uLmlkID0gJ2FkZC1pbi1wcm9ncmVzcy10YXNrJztcbiAgICBpblByb2dyZXNzQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+eyAvLyBBREQgUFJPSkVDVCBCVVRUT04gLS0gSU4gUFJPR1JFU1NcbiAgICAgICAgYWRkVGFzaygnaW4tcHJvZ3Jlc3MnKTtcbiAgICB9KVxuICAgIGNvbnN0IGluUHJvZ3Jlc3NTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGluUHJvZ3Jlc3NTdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIGluUHJvZ3Jlc3NTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgIGNvbnN0IGluUHJvZ3Jlc3NTdmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RpdGxlJyk7XG4gICAgaW5Qcm9ncmVzc1N2Z1RpdGxlLnRleHRDb250ZW50ID0gJ3BsdXMnO1xuICAgIGNvbnN0IGluUHJvZ3Jlc3NTdmdQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgaW5Qcm9ncmVzc1N2Z1BhdGguc2V0QXR0cmlidXRlKCdmaWxsJywgJyMwMDAwMDAnKTtcbiAgICBpblByb2dyZXNzU3ZnUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1onKTtcbiAgICBpblByb2dyZXNzU3ZnLmFwcGVuZENoaWxkKGluUHJvZ3Jlc3NTdmdUaXRsZSk7XG4gICAgaW5Qcm9ncmVzc1N2Zy5hcHBlbmRDaGlsZChpblByb2dyZXNzU3ZnUGF0aCk7XG4gICAgaW5Qcm9ncmVzc0FkZEJ1dHRvbi5hcHBlbmRDaGlsZChpblByb2dyZXNzU3ZnKTtcbiAgICBpblByb2dyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGluUHJvZ3Jlc3NBZGRCdXR0b24pO1xuICAgIHRvcExldmVsRGl2LmFwcGVuZENoaWxkKGluUHJvZ3Jlc3NDb250YWluZXIpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBcIkNvbXBsZXRlXCIgdGFzayBhcmVhXG4gICAgY29uc3QgY29tcGxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wbGV0ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29tcGxldGUtY29udGFpbmVyIHRhc2stYXJlYSc7XG4gICAgY29uc3QgY29tcGxldGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbXBsZXRlTGFiZWwuY2xhc3NOYW1lID0gJ3N0YXR1cy1sYWJlbCc7XG4gICAgY29uc3QgY29tcGxldGVMYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbXBsZXRlTGFiZWxUZXh0LnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcbiAgICBjb21wbGV0ZUxhYmVsLmFwcGVuZENoaWxkKGNvbXBsZXRlTGFiZWxUZXh0KTtcbiAgICBjb21wbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUxhYmVsKTtcbiAgICBjb25zdCBjb21wbGV0ZUFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbXBsZXRlQWRkQnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtdGFzay1idXR0b24nO1xuICAgIGNvbXBsZXRlQWRkQnV0dG9uLmlkID0gJ2FkZC1jb21wbGV0ZS10YXNrJztcbiAgICBjb21wbGV0ZUFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnsgLy8gQUREIFBST0pFQ1QgQlVUVE9OIC0tIENPTVBMRVRFXG4gICAgICAgIGFkZFRhc2soJ2NvbXBsZXRlJyk7XG4gICAgfSlcbiAgICBjb25zdCBjb21wbGV0ZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgY29tcGxldGVTdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIGNvbXBsZXRlU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICBjb25zdCBjb21wbGV0ZVN2Z1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGl0bGUnKTtcbiAgICBjb21wbGV0ZVN2Z1RpdGxlLnRleHRDb250ZW50ID0gJ3BsdXMnO1xuICAgIGNvbnN0IGNvbXBsZXRlU3ZnUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIGNvbXBsZXRlU3ZnUGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzAwMDAwMCcpO1xuICAgIGNvbXBsZXRlU3ZnUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1onKTtcbiAgICBjb21wbGV0ZVN2Zy5hcHBlbmRDaGlsZChjb21wbGV0ZVN2Z1RpdGxlKTtcbiAgICBjb21wbGV0ZVN2Zy5hcHBlbmRDaGlsZChjb21wbGV0ZVN2Z1BhdGgpO1xuICAgIGNvbXBsZXRlQWRkQnV0dG9uLmFwcGVuZENoaWxkKGNvbXBsZXRlU3ZnKTtcbiAgICBjb21wbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUFkZEJ1dHRvbik7XG4gICAgdG9wTGV2ZWxEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVDb250YWluZXIpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSB0b3AtbGV2ZWwgZGl2IHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnQnKVswXTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRvcExldmVsRGl2KTtcblxufVxuXG5cbmZ1bmN0aW9uIGRyYXdUYXNrKGFwcERhdGEsdGFzayxzdGF0dXMpe1xuICAgIC8vIENyZWF0ZSB0aGUgb3V0ZXIgZGl2IGVsZW1lbnRcbiAgICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG91dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICBvdXRlckRpdi5pZCA9IHRhc2suaWQ7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGlubmVyIGRpdiBmb3IgdGlsZS10ZXh0XG4gICAgY29uc3QgdGlsZVRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aWxlVGV4dERpdi5jbGFzc0xpc3QuYWRkKCd0aWxlLXRleHQnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgaDMgZWxlbWVudFxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBgJHt0YXNrLm5hbWV9YDtcblxuICAgIC8vIENyZWF0ZSB0aGUgcCBlbGVtZW50XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICBwLnRleHRDb250ZW50ID0gYCR7dGFzay5kZXNjcmlwdGlvbn1gO1xuXG4gICAgLy8gQXBwZW5kIGgzIGFuZCBwIHRvIHRpbGVUZXh0RGl2XG4gICAgdGlsZVRleHREaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIHRpbGVUZXh0RGl2LmFwcGVuZENoaWxkKHApO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBpbm5lciBkaXYgZm9yIHRpbGUtYWN0aW9uc1xuICAgIGNvbnN0IHRpbGVBY3Rpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlsZUFjdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgndGlsZS1hY3Rpb25zJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHAgZWxlbWVudCBmb3IgZHVlIGRhdGVcbiAgICBjb25zdCBkdWVEYXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkdWVEYXRlUC5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgIGR1ZURhdGVQLnRleHRDb250ZW50ID0gYER1ZTogJHt0YXNrLmR1ZURhdGV9YDtcblxuICAgIC8vIENyZWF0ZSB0aGUgZGl2IGZvciBlZGl0LWN0YVxuICAgIGNvbnN0IGVkaXRDdGFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gPC0tLS0tLS0tLS0tLS0tLSBhZGQgZWRpdCBjdGEgY2FsbGJhY2tcbiAgICBlZGl0Q3RhRGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQtY3RhJyk7XG4gICAgZWRpdEN0YURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgZWRpdFRhc2soYXBwRGF0YSx0YXNrLmlkKVxuICAgIH0pXG5cbiAgICAvLyBDcmVhdGUgdGhlIFNWRyBlbGVtZW50XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRpdGxlIGVsZW1lbnRcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdwZW5jaWwtYm94LW91dGxpbmUnO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBwYXRoIGVsZW1lbnRcbiAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTE5LDE5VjVINVYxOUgxOU0xOSwzQTIsMiAwIDAsMSAyMSw1VjE5QzIxLDIwLjExIDIwLjEsMjEgMTksMjFINUEyLDIgMCAwLDEgMywxOVY1QTIsMiAwIDAsMSA1LDNIMTlNMTYuNyw5LjM1TDE1LjcsMTAuMzVMMTMuNjUsOC4zTDE0LjY1LDcuM0MxNC44Niw3LjA4IDE1LjIxLDcuMDggMTUuNDIsNy4zTDE2LjcsOC41OEMxNi45Miw4Ljc5IDE2LjkyLDkuMTQgMTYuNyw5LjM1TTcsMTQuOTRMMTMuMDYsOC44OEwxNS4xMiwxMC45NEw5LjA2LDE3SDdWMTQuOTRaJyk7XG5cbiAgICAvLyBBcHBlbmQgdGl0bGUgYW5kIHBhdGggdG8gc3ZnXG4gICAgc3ZnLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG5cbiAgICAvLyBBcHBlbmQgc3ZnIHRvIGVkaXRDdGFEaXZcbiAgICBlZGl0Q3RhRGl2LmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgICAvLyBjcmVhdGUgY29tcGxldGUtdGFzayBhY3Rpb24gXG4gICAgY29uc3QgY2hlY2tTdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja1N2Z0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmstY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2hlY2tzdmc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3N2ZycpO1xuICAgIGNoZWNrc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsJ3ZpZXdCb3gnLCcwIDAgMjQgMjQnKTtcbiAgICBjb25zdCBjaGVja3RpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50PSdjaGVjay1jaXJjbGUtb3V0bGluZSc7XG4gICAgY29uc3QgY2hlY2twYXRoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG4gICAgY2hlY2twYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsJ2QnLCdNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEyIDIwQzcuNTkgMjAgNCAxNi40MSA0IDEyUzcuNTkgNCAxMiA0IDIwIDcuNTkgMjAgMTIgMTYuNDEgMjAgMTIgMjBNMTYuNTkgNy41OEwxMCAxNC4xN0w3LjQxIDExLjU5TDYgMTNMMTAgMTdMMTggOUwxNi41OSA3LjU4WicpO1xuICAgIGNoZWNrc3ZnLmFwcGVuZENoaWxkKGNoZWNrdGl0bGUpO1xuICAgIGNoZWNrc3ZnLmFwcGVuZENoaWxkKGNoZWNrcGF0aCk7XG4gICAgY2hlY2tTdmdDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tzdmcpO1xuICAgIGNoZWNrU3ZnQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBhcHBEYXRhLmFjdGl2ZVByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcbiAgICAgICAgZHJhd1Byb2plY3RBcmVhKGFwcERhdGEpO1xuICAgICAgICByZW5kZXJQcm9qZWN0KGFwcERhdGEsYXBwRGF0YS5hY3RpdmVQcm9qZWN0KTtcbiAgICAgICAgXG4gICAgfSlcblxuXG4gICAgLy8gQXBwZW5kIGR1ZURhdGVQIGFuZCBlZGl0Q3RhRGl2IHRvIHRpbGVBY3Rpb25zRGl2XG4gICAgdGlsZUFjdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVApO1xuICAgIHRpbGVBY3Rpb25zRGl2LmFwcGVuZENoaWxkKGVkaXRDdGFEaXYpO1xuICAgIHRpbGVBY3Rpb25zRGl2LmFwcGVuZENoaWxkKGNoZWNrU3ZnQ29udGFpbmVyKTtcbiAgICAvLyBBcHBlbmQgdGlsZVRleHREaXYgYW5kIHRpbGVBY3Rpb25zRGl2IHRvIG91dGVyRGl2XG4gICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQodGlsZVRleHREaXYpO1xuICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKHRpbGVBY3Rpb25zRGl2KTtcblxuICAgIC8vIEFwcGVuZCB0aGUgb3V0ZXJEaXYgdG8gdGhlIGRvY3VtZW50IGJvZHlcbiAgICBcbiAgICBjb25zdCB0YXNrU3dpbWxhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3N0YXR1c30tY29udGFpbmVyYClbMF07XG4gICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhZGQtJHtzdGF0dXN9LXRhc2tgKTtcbiAgICB0YXNrU3dpbWxhbmUuaW5zZXJ0QmVmb3JlKG91dGVyRGl2LHRhc2tCdXR0b24pXG5cbn1cblxuXG5mdW5jdGlvbiBkcmF3UHJvamVjdFNpZGViYXIoYXBwRGF0YSl7XG4gICAgLy8gQ3JlYXRlIHRoZSBvdXRlciBkaXYgZm9yIHRoZSBob21lIGJ1dHRvblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaWRlYmFyJylbMF07XG4gICAgc2lkZWJhci5pbm5lckhUTUwgPSAnJztcblxuICAgIFxuICAgIGNvbnN0IGhvbWVCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lQnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUtYnV0dG9uJywgJ25hdicpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBTVkcgZWxlbWVudCBmb3IgdGhlIGRhc2hib2FyZCBsb2dvXG4gICAgY29uc3QgZGFzaGJvYXJkU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBkYXNoYm9hcmRTdmcuY2xhc3NMaXN0LmFkZCgnZGFzaGJvYXJkLWxvZ28nKTtcbiAgICBkYXNoYm9hcmRTdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIGRhc2hib2FyZFN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRpdGxlIGVsZW1lbnQgZm9yIHRoZSBTVkdcbiAgICBjb25zdCBzdmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndGl0bGUnKTtcbiAgICBzdmdUaXRsZS50ZXh0Q29udGVudCA9ICd2aWV3LWRhc2hib2FyZCc7XG4gICAgZGFzaGJvYXJkU3ZnLmFwcGVuZENoaWxkKHN2Z1RpdGxlKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgcGF0aCBlbGVtZW50IGZvciB0aGUgU1ZHXG4gICAgY29uc3Qgc3ZnUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIHN2Z1BhdGguc2V0QXR0cmlidXRlKCdmaWxsJywgJyNGRkZGRkYnKTtcbiAgICBzdmdQYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNMTMsM1Y5SDIxVjNNMTMsMjFIMjFWMTFIMTNNMywyMUgxMVYxNUgzTTMsMTNIMTFWM0gzVjEzWicpO1xuICAgIGRhc2hib2FyZFN2Zy5hcHBlbmRDaGlsZChzdmdQYXRoKTtcbiAgICBob21lQnV0dG9uRGl2LmFwcGVuZENoaWxkKGRhc2hib2FyZFN2Zyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGhlYWRpbmcgZm9yIFwiQWN0aXZlIFByb2plY3RzXCJcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0c0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGFjdGl2ZVByb2plY3RzSGVhZGluZy50ZXh0Q29udGVudCA9ICdBY3RpdmUgUHJvamVjdHMnO1xuICAgIGhvbWVCdXR0b25EaXYuYXBwZW5kQ2hpbGQoYWN0aXZlUHJvamVjdHNIZWFkaW5nKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgb3V0ZXIgZGl2IGZvciB0aGUgcHJvamVjdFxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGl2Jyk7XG5cbiAgICBmb3IobGV0IGk9MDtpPGFwcERhdGEucHJvamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW5uZXIgZGl2IGZvciB0aGUgcHJvamVjdFxuICAgICAgICBjb25zdCBwcm9qZWN0SW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdElubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ25hdicsICdwcm9qZWN0Jyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBTVkcgZWxlbWVudCBmb3IgdGhlIHByb2plY3QgaWNvblxuICAgICAgICBjb25zdCBwcm9qZWN0U3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgcHJvamVjdFN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgICAgIHByb2plY3RTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGl0bGUgZWxlbWVudCBmb3IgdGhlIHByb2plY3QgU1ZHXG4gICAgICAgIGNvbnN0IHByb2plY3RTdmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndGl0bGUnKTtcbiAgICAgICAgcHJvamVjdFN2Z1RpdGxlLnRleHRDb250ZW50ID0gJ2xheWVycy10cmlwbGUnO1xuICAgICAgICBwcm9qZWN0U3ZnLmFwcGVuZENoaWxkKHByb2plY3RTdmdUaXRsZSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwYXRoIGVsZW1lbnQgZm9yIHRoZSBwcm9qZWN0IFNWR1xuICAgICAgICBjb25zdCBwcm9qZWN0U3ZnUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgICAgICBwcm9qZWN0U3ZnUGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnI0ZGRkZGRicpO1xuICAgICAgICBwcm9qZWN0U3ZnUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTEyIDBMMyA3TDQuNjMgOC4yN0wxMiAxNEwxOS4zNiA4LjI3TDIxIDdMMTIgME0xOS4zNyAxMC43M0wxMiAxNi40N0w0LjYyIDEwLjc0TDMgMTJMMTIgMTlMMjEgMTJMMTkuMzcgMTAuNzNNMTkuMzcgMTUuNzNMMTIgMjEuNDdMNC42MiAxNS43NEwzIDE3TDEyIDI0TDIxIDE3TDE5LjM3IDE1LjczWicpO1xuICAgICAgICBwcm9qZWN0U3ZnLmFwcGVuZENoaWxkKHByb2plY3RTdmdQYXRoKTtcbiAgICAgICAgcHJvamVjdElubmVyRGl2LmFwcGVuZENoaWxkKHByb2plY3RTdmcpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaGVhZGluZyBmb3IgdGhlIHByb2plY3QgbmFtZVxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwcm9qZWN0TmFtZUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgICAgIHByb2plY3ROYW1lSGVhZGluZy50ZXh0Q29udGVudCA9IGAke2FwcERhdGEucHJvamVjdHNbaV0ubmFtZX1gO1xuICAgICAgICBwcm9qZWN0SW5uZXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVIZWFkaW5nKTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIHByb2plY3QgaW5uZXIgZGl2IHRvIHRoZSBwcm9qZWN0IG91dGVyIGRpdlxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbm5lckRpdik7XG5cbiAgICAgICAgLy8gYWRkIHNlbGVjdC1wcm9qZWN0IGxpc3RlbmVyXG4gICAgICAgIHByb2plY3RJbm5lckRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIHJlbmRlclByb2plY3QoYXBwRGF0YSxhcHBEYXRhLnByb2plY3RzW2ldKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIC8vIEFwcGVuZCB0aGUgaG9tZSBidXR0b24gZGl2IGFuZCBwcm9qZWN0IGRpdiB0byB0aGUgZG9jdW1lbnQgYm9keVxuXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uRGl2KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG59XG5cblxuXG5mdW5jdGlvbiBkcmF3SGVhZGVyKGFwcERhdGEpe1xuICAgICAgICAvLyBDcmVhdGUgdGhlIG91dGVyIGRpdiBlbGVtZW50XG4gICAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdXRlckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9maWxlLWFjdGlvbnMtYmFyJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGlubmVyIGRpdiBmb3IgcHJvZmlsZVxuICAgIGNvbnN0IHByb2ZpbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9maWxlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGUnKTtcbiAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChwcm9maWxlRGl2KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZGl2IGZvciBwcm9maWxlIGljb25cbiAgICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWNvbkRpdi5jbGFzc0xpc3QuYWRkKCdiYXItaXRlbS0yJyk7XG4gICAgY29uc3QgcHJvZmlsZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9maWxlSWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9maWxlLWljb24tbGFyZ2UnKTtcbiAgICBwcm9maWxlSWNvbi5zcmMgPSBwcm9maWxlSWNvbkltYWdlO1xuICAgIHByb2ZpbGVJY29uLmFsdCA9ICdzbGFrb3RoJztcbiAgICBpY29uRGl2LmFwcGVuZENoaWxkKHByb2ZpbGVJY29uKTtcbiAgICBwcm9maWxlRGl2LmFwcGVuZENoaWxkKGljb25EaXYpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkaXYgZm9yIHByb2ZpbGUgdGV4dFxuICAgIGNvbnN0IHByb2ZpbGVUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvZmlsZVRleHREaXYuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS10ZXh0Jyk7XG4gICAgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGdyZWV0aW5nLnRleHRDb250ZW50ID0gJ0hpIHRoZXJlLCc7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9maWxlLW5hbWUnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gJ1d5YXR0IEhhZ2VuIChAd3lndXkpJztcbiAgICBwcm9maWxlVGV4dERpdi5hcHBlbmRDaGlsZChncmVldGluZyk7XG4gICAgcHJvZmlsZVRleHREaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgcHJvZmlsZURpdi5hcHBlbmRDaGlsZChwcm9maWxlVGV4dERpdik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRpdiBmb3IgbmF2IGJ1dHRvbnNcbiAgICBjb25zdCBuYXZCdXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9ucycpO1xuICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKG5hdkJ1dHRvbnNEaXYpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBuZXdCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdCdXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnbmV3LWJ1dHRvbicpO1xuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gICAgbmV3QnV0dG9uRGl2LmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG4gICAgbmF2QnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChuZXdCdXR0b25EaXYpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkZWxldGUgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBkZWxldGVCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVCdXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgUHJvamVjdCc7XG4gICAgZGVsZXRlQnV0dG9uRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgbmF2QnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b25EaXYpO1xuXG4gICAgLy9EZWxldGUgcHJvamVjdCBjYWxsYmFja1xuICAgIGRlbGV0ZUJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbGV0IGRlbGV0ZUluZGV4ID0gYXBwRGF0YS5wcm9qZWN0cy5pbmRleE9mKGFwcERhdGEuYWN0aXZlUHJvamVjdCk7XG4gICAgICAgIGFwcERhdGEucHJvamVjdHMuc3BsaWNlKGRlbGV0ZUluZGV4LDEpO1xuICAgICAgICBhcHBEYXRhLmFjdGl2ZVByb2plY3QgPSBhcHBEYXRhLnByb2plY3RzWzBdO1xuXG4gICAgICAgIGRyYXdQcm9qZWN0U2lkZWJhcihhcHBEYXRhKTtcbiAgICAgICAgZHJhd1Byb2plY3RBcmVhKGFwcERhdGEpO1xuICAgICAgICByZW5kZXJQcm9qZWN0KGFwcERhdGEsYXBwRGF0YS5hY3RpdmVQcm9qZWN0KTtcblxuICAgICAgICBcbiAgICB9KVxuXG4gICAgLy8gQWRkIFByb2plY3QgY2FsbGJhY2sgXG4gICAgbmV3QnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBkb21DcmVhdGVQcm9qZWN0KGFwcERhdGEpO1xuICAgIH0pXG4gICAgLy8gQXBwZW5kIHRoZSBvdXRlciBkaXYgdG8gdGhlIGRvY3VtZW50IGJvZHlcbiAgICBjb25zdCBoZWFkZXJCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXInKVswXTtcbiAgICBoZWFkZXJCYXIuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xufVxuXG5cbmZ1bmN0aW9uIGRvbUNyZWF0ZVByb2plY3QoYXBwRGF0YSl7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QtZGl2JylbMF07XG5cblxuICAgIGNvbnN0IHByb2plY3RJbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0SW5uZXJEaXYuY2xhc3NMaXN0LmFkZCgnbmF2JywgJ3Byb2plY3QnKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIFNWRyBlbGVtZW50IGZvciB0aGUgcHJvamVjdCBpY29uXG4gICAgY29uc3QgcHJvamVjdFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgcHJvamVjdFN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgcHJvamVjdFN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0aXRsZSBlbGVtZW50IGZvciB0aGUgcHJvamVjdCBTVkdcbiAgICBjb25zdCBwcm9qZWN0U3ZnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3RpdGxlJyk7XG4gICAgcHJvamVjdFN2Z1RpdGxlLnRleHRDb250ZW50ID0gJ2xheWVycy10cmlwbGUnO1xuICAgIHByb2plY3RTdmcuYXBwZW5kQ2hpbGQocHJvamVjdFN2Z1RpdGxlKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHBhdGggZWxlbWVudCBmb3IgdGhlIHByb2plY3QgU1ZHXG4gICAgY29uc3QgcHJvamVjdFN2Z1BhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICBwcm9qZWN0U3ZnUGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnI0ZGRkZGRicpO1xuICAgIHByb2plY3RTdmdQYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNMTIgMEwzIDdMNC42MyA4LjI3TDEyIDE0TDE5LjM2IDguMjdMMjEgN0wxMiAwTTE5LjM3IDEwLjczTDEyIDE2LjQ3TDQuNjIgMTAuNzRMMyAxMkwxMiAxOUwyMSAxMkwxOS4zNyAxMC43M00xOS4zNyAxNS43M0wxMiAyMS40N0w0LjYyIDE1Ljc0TDMgMTdMMTIgMjRMMjEgMTdMMTkuMzcgMTUuNzNaJyk7XG4gICAgcHJvamVjdFN2Zy5hcHBlbmRDaGlsZChwcm9qZWN0U3ZnUGF0aCk7XG4gICAgcHJvamVjdElubmVyRGl2LmFwcGVuZENoaWxkKHByb2plY3RTdmcpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBoZWFkaW5nIGZvciB0aGUgcHJvamVjdCBuYW1lXG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRGaWVsZC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0RmllbGQuaWQgPSAncHJvamVjdC1uYW1lLWlucHV0JztcbiAgICBpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gJ0VudGVyIHByb2plY3QgbmFtZSc7XG4gICAgICAgIFxuICAgIHByb2plY3RJbm5lckRpdi5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcbiAgICBcblxuXG4gICAgY29uc3QgY2hlY2tTdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja1N2Z0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmstY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2hlY2tzdmc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3N2ZycpO1xuICAgIGNoZWNrc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsJ3ZpZXdCb3gnLCcwIDAgMjQgMjQnKTtcbiAgICBjb25zdCB0aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywndGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudD0nY2hlY2stY2lyY2xlLW91dGxpbmUnO1xuICAgIGNvbnN0IHBhdGg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3BhdGgnKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsJ2ZpbGwnLCcjRkZGRkZGJyk7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCdkJywnTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMiAyMEM3LjU5IDIwIDQgMTYuNDEgNCAxMlM3LjU5IDQgMTIgNCAyMCA3LjU5IDIwIDEyIDE2LjQxIDIwIDEyIDIwTTE2LjU5IDcuNThMMTAgMTQuMTdMNy40MSAxMS41OUw2IDEzTDEwIDE3TDE4IDlMMTYuNTkgNy41OFonKTtcbiAgICBjaGVja3N2Zy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY2hlY2tzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG5cbiAgICAvL3Byb2plY3RJbm5lckRpdi5hcHBlbmRDaGlsZChjaGVja3N2ZylcbiAgICBjaGVja1N2Z0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja3N2Zyk7XG4gICAgcHJvamVjdElubmVyRGl2LmFwcGVuZENoaWxkKGNoZWNrU3ZnQ29udGFpbmVyKTtcblxuICAgIGNoZWNrU3ZnQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGFwcERhdGEuY3JlYXRlUHJvamVjdChpbnB1dEZpZWxkLnZhbHVlKVxuICAgICAgICBhcHBEYXRhLmFjdGl2ZVByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgICAgICByZW5kZXJQcm9qZWN0KGFwcERhdGEsYXBwRGF0YS5hY3RpdmVQcm9qZWN0KTtcbiAgICAgICAgZHJhd1Byb2plY3RTaWRlYmFyKGFwcERhdGEpO1xuICAgIH0pXG5cbiAgICAvLyBBcHBlbmQgdGhlIHByb2plY3QgaW5uZXIgZGl2IHRvIHRoZSBwcm9qZWN0IG91dGVyIGRpdlxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdElubmVyRGl2KTtcblxuXG59XG5cblxuZXhwb3J0e2VkaXRUYXNrLCBhZGRUYXNrLCBzYXZlVGFzaywgcmVuZGVyUHJvamVjdCwgZHJhd1Byb2plY3RBcmVhLCBkcmF3VGFzayxkcmF3UHJvamVjdFNpZGViYXIsIGRyYXdIZWFkZXIsIGRvbUNyZWF0ZVByb2plY3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7Q29udHJvbGxlciwgUHJvamVjdCwgVGFza30gZnJvbSAnLi9jbGFzc2VzLmpzJztcbmltcG9ydCB7cmVuZGVyUHJvamVjdCxkcmF3UHJvamVjdFNpZGViYXIsIGRyYXdIZWFkZXJ9IGZyb20gJy4vZG9tLWZ1bmN0aW9ucy5qcyc7IFxuXG5cblxuZnVuY3Rpb24gbG9hZEZsYXROb3RlKCl7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcERhdGEnKT09PW51bGwpe1xuICAgICAgICBjb25zdCBhcHBEYXRhID0gbmV3IENvbnRyb2xsZXIoKTtcblxuICAgICAgICBhcHBEYXRhLmFjdGl2ZVByb2plY3QgPSBhcHBEYXRhLmNyZWF0ZVByb2plY3QoJ0V4YW1wbGUgUHJvamVjdCcpOyAvLyBzaG93cyB3aGF0IHRoZSBhY3RpdmUgcHJvamVjdCBvbiB0aGUgcGFnZSBpcyBcbiAgICAgICAgYXBwRGF0YS5jcmVhdGVUYXNrKGFwcERhdGEuYWN0aXZlUHJvamVjdCwnc2FtcGxlIHRhc2snLCdkZXNjcmlwdGlvbiBmb3Igc2FtcGxlIHRhc2snLCdjb21wbGV0ZScpO1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gbG9jYWwgc3RvcmFnZSBkYXRhIHdhcyBmb3VuZCcpXG4gICAgICAgIHJldHVybiBhcHBEYXRhO1xuICAgIH1lbHNle1xuICAgICAgICBjb25zdCBhcHBEYXRhID0gbmV3IENvbnRyb2xsZXIoKTtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZEFwcERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwRGF0YScpO1xuICAgICAgICBjb25zdCByYXdBcHBEYXRhID0gSlNPTi5wYXJzZShzZXJpYWxpemVkQXBwRGF0YSk7XG5cblxuICAgICAgICBmb3IobGV0IGk9MDtpPHJhd0FwcERhdGEucHJvamVjdHMubGVuZ3RoO2krKyl7IC8vIGxvb3AgdGhyb3VnaCBwcm9qZWN0c1xuICAgICAgICAgICAgbGV0IHByalRvQ29udmVydCA9IHJhd0FwcERhdGEucHJvamVjdHNbaV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmpUb0NvbnZlcnQpXG4gICAgICAgICAgICBsZXQgdGVtcFByb2plY3QgPSBhcHBEYXRhLmNyZWF0ZVByb2plY3QocHJqVG9Db252ZXJ0Lm5hbWUpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPCBwcmpUb0NvbnZlcnQudGFza3MubGVuZ3RoO2orKyl7IC8vIGxvb3AgdGhyb3VnaCB0YXNrc1xuICAgICAgICAgICAgICAgIGxldCB0c2tUb0NvbnZlcnQgPSBwcmpUb0NvbnZlcnQudGFza3Nbal07XG4gICAgICAgICAgICAgICAgLy8gZXh0cmFjdCB0aGUgZmllbGRzIFxuICAgICAgICAgICAgICAgIGxldCB0VGFza05hbWUgPSB0c2tUb0NvbnZlcnQubmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgdFRhc2tEZXMgPSB0c2tUb0NvbnZlcnQuZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgbGV0IHRUYXNrU3RhdHVzID0gdHNrVG9Db252ZXJ0LnN0YXR1cztcbiAgICAgICAgICAgICAgICBsZXQgdFRhc2tJZCA9IHRza1RvQ29udmVydC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgdFRhc2tERCA9IHRza1RvQ29udmVydC5kdWVEYXRlOyBcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHRhc2sgb2JqIGFuZCBhcHBlbmQgdG8gcHJqXG4gICAgICAgICAgICAgICAgYXBwRGF0YS5jcmVhdGVUYXNrKHRlbXBQcm9qZWN0LHRUYXNrTmFtZSx0VGFza0Rlcyx0VGFza1N0YXR1cyx0VGFza0RELHRUYXNrSWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3NpZ24gdGhlIGFjdGl2ZSBwcm9qZWN0XG4gICAgICAgIGFwcERhdGEuYWN0aXZlUHJvamVjdCA9IGFwcERhdGEucHJvamVjdHNbMF07XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2xvY2FsIHN0b3JhZ2UgZGF0YSB3YXMgZm91bmQnKVxuICAgICAgICByZXR1cm4gYXBwRGF0YTtcbiAgICB9XG59XG5cblxuY29uc3QgYXBwRGF0YSA9IGxvYWRGbGF0Tm90ZSgpO1xuZHJhd0hlYWRlcihhcHBEYXRhKTtcbmRyYXdQcm9qZWN0U2lkZWJhcihhcHBEYXRhKTtcbmNvbnNvbGUubG9nKGFwcERhdGEpXG5yZW5kZXJQcm9qZWN0KGFwcERhdGEsIGFwcERhdGEuYWN0aXZlUHJvamVjdCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==