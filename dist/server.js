/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/styles/main.pcss":
/*!*************************************!*\
  !*** ./src/assets/styles/main.pcss ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.6 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.dark .dark\\:bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(15, 23, 42, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/main.pcss","<no source>"],"names":[],"mappings":"AAAA;;CAAc,CAAd;;;CAAc;;AAAd;;;EAAA,sBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,mBAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,gBAAc;AAAA;;AAAd;;;;;;CAAc;;AAAd;EAAA,gBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gBAAc,EAAd,MAAc;EAAd,cAAc;KAAd,WAAc,EAAd,MAAc;EAAd,wRAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,0BAAc;EAAd,sDAAc;UAAd,8CAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;EAAA,kBAAc;EAAd,oBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;EAAd,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,mBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,+GAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,cAAc;EAAd,cAAc;EAAd,kBAAc;EAAd,wBAAc;AAAA;;AAAd;EAAA,eAAc;AAAA;;AAAd;EAAA,WAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;EAAd,yBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;EAAA,oBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,SAAc,EAAd,MAAc;EAAd,UAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,oBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,0BAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,aAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,YAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,6BAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,0BAAc,EAAd,MAAc;EAAd,aAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,kBAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;;;;;;;;EAAA,SAAc;AAAA;;AAAd;EAAA,SAAc;EAAd,UAAc;AAAA;;AAAd;EAAA,UAAc;AAAA;;AAAd;;;EAAA,gBAAc;EAAd,SAAc;EAAd,UAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;AAAA;;AAAd;;CAAc;AAAd;EAAA,eAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;;;;EAAA,cAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;EAAd,YAAc;AAAA;;AAAd,wEAAc;AAAd;EAAA,aAAc;AAAA;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,wCAAc;EAAd,0CAAc;EAAd,mCAAc;EAAd,8BAAc;EAAd,sCAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd;AAAc;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,wCAAc;EAAd,0CAAc;EAAd,mCAAc;EAAd,8BAAc;EAAd,sCAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd;AAAc;;AAAd;EAAA,mBCAA;EDAA;CCAA;;ADAA;EAAA,qBCAA;EDAA;CCAA","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./app.config.ts":
/*!***********************!*\
  !*** ./app.config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__.g.APP_CONFIG = {
    title: '',
    mode: 'ssr',
    meta: [
        {
            charset: 'utf-8'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
        },
        {
            'http-equiv': 'X-UA-Compatible',
            content: 'IE=edge'
        }, 
    ],
    // --- Server options
    serverHost: 'localhost',
    serverPort: parseInt(process.env.PORT) || 3000,
    secretPhrase: process.env.SECRET_PHRASE,
    // --- Middleware options
    helmetOptions: {
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: false
    },
    cookieParserOptions: {},
    morganOptions: {},
    // --- Heroku options
    // --- Environmental options
    clientRuntimeConfig: {},
    serverRuntimeConfig: {}
};
__webpack_require__.g.serverRuntimeConfig = APP_CONFIG.serverRuntimeConfig;
// pendingServerSideProps is a stack of all the pending `getServerSideProps` that was called
// from across the app.
// 
__webpack_require__.g.pendingServerSideProps = [];
// pendingAsyncDataFetches is pretty much the same as pendingServerSideProps.. the only difference
// is that this stack is used by `useAsyncDataFetch` hook for data fetching, and it can also be omitted
// if the `useAsyncDataFetch` options contains `fetchOnServer: false`
//
__webpack_require__.g.pendingAsyncDataFetches = [];


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_main_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/styles/main.pcss */ "./src/assets/styles/main.pcss");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact-router */ "preact-router");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact_async_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact-async-route */ "preact-async-route");
/* harmony import */ var preact_async_route__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact_async_route__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views */ "./src/views/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _server_middlewares_express_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/server/middlewares/express-context */ "./src/server/middlewares/express-context.ts");








const App = (props)=>{
    const docUrl = new URL(document.URL);
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "dark:bg-slate-900 dark:text-white",
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((preact_router__WEBPACK_IMPORTED_MODULE_2___default()), {
            url: docUrl.pathname,
            onChange: handleRouteChange,
            children: _views__WEBPACK_IMPORTED_MODULE_4__["default"].map((route)=>{
                const routeUi = route.lazy ? /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((preact_async_route__WEBPACK_IMPORTED_MODULE_3___default()), {
                    getComponent: ()=>Promise.resolve(route.component),
                    loading: route.loading,
                    path: route.path,
                    default: route.default
                }) : /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(route.component, {
                    path: route.path,
                    default: route.default
                });
                // When a route component does not match the current url, we considered it 
                // as a whitelist url, this is done so that `getServerSideProps` should only be
                // able to add props into the component when navigated to the component.
                const isWhitelist = window.__APP_STATE__.serverSideRoutesWhitelist[route.component.name];
                if (_helpers__WEBPACK_IMPORTED_MODULE_5__.environment.isBrowser && isWhitelist) window.__whitelistRoutes[route.component.name] = routeUi;
                else if (_helpers__WEBPACK_IMPORTED_MODULE_5__.environment.isBrowser && !isWhitelist) window.__routes[route.component.name] = routeUi;
                if (_helpers__WEBPACK_IMPORTED_MODULE_5__.environment.isServer && route.statusCode) {
                    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_server_middlewares_express_context__WEBPACK_IMPORTED_MODULE_7__["default"].getContext());
                    const rexp = new RegExp(`${route.path.replace(/:[^/]+/, '[^/]+?')}`);
                    if (rexp.test(docUrl.pathname)) ctx.statusCode = route.statusCode;
                }
                return routeUi;
            })
        })
    });
};
function handleRouteChange(ev) {
    (0,_server_middlewares_express_context__WEBPACK_IMPORTED_MODULE_7__.handleInitialRouteRequest)(ev);
}


/***/ }),

/***/ "./src/components/elements/Markdown/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/elements/Markdown/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Markdown": () => (/* binding */ Markdown)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}




const Markdown = (props)=>{
    const [content, setContent] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    var _options;
    if (props.src) {
        const [_, fCb] = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.useAsyncDataFetch)({
            onServer: true,
            reuse: true
        }, /*#__PURE__*/ _asyncToGenerator(function*() {
            const content = yield fetch(props.src).then((res)=>res.text());
            return {
                content
            };
        }));
        var _options1;
        fCb(({ content  })=>setContent(marked__WEBPACK_IMPORTED_MODULE_1__.marked.parse(content, (_options1 = props.options) !== null && _options1 !== void 0 ? _options1 : {})));
    } else setContent(marked__WEBPACK_IMPORTED_MODULE_1__.marked.parse(props.content, (_options = props.options) !== null && _options !== void 0 ? _options : {}));
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: props.className,
        dangerouslySetInnerHTML: {
            __html: content
        }
    });
};


/***/ }),

/***/ "./src/components/elements/index.ts":
/*!******************************************!*\
  !*** ./src/components/elements/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Markdown": () => (/* reexport safe */ _Markdown__WEBPACK_IMPORTED_MODULE_0__.Markdown)
/* harmony export */ });
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Markdown */ "./src/components/elements/Markdown/index.tsx");



/***/ }),

/***/ "./src/contents/index.ts":
/*!*******************************!*\
  !*** ./src/contents/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAppLocale": () => (/* binding */ getAppLocale),
/* harmony export */   "setAppLocale": () => (/* binding */ setAppLocale)
/* harmony export */ });
/* harmony import */ var _helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/ssr-utils */ "./src/helpers/ssr-utils.ts");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_middlewares_express_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/server/middlewares/express-context */ "./src/server/middlewares/express-context.ts");



//
function setAppLocale(locale) {
    document.cookie = `${encodeURIComponent('appCurrentLocale')}=${encodeURIComponent(locale !== null && locale !== void 0 ? locale : 'en')}; SameSite=Lax; secure;`;
}
function getAppLocale() {
    let appLocale;
    if (_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_0__.environment.isServer) {
        var ref;
        const { req  } = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext)(_server_middlewares_express_context__WEBPACK_IMPORTED_MODULE_2__["default"].getContext());
        appLocale = (ref = req.cookies) === null || ref === void 0 ? void 0 : ref.appCurrentLocale;
    } else {
        const appCurrentLocalePatt = RegExp("appCurrentLocale=(?<appCurrentLocale>[a-z]{2})", "i");
        // If the appCurrentLocale cookie is happen to be not set, we will
        // execute `setAppLocale` to set the cookie to its default value.
        if (!appCurrentLocalePatt.test(document.cookie)) setAppLocale();
        // @watch
        const { appCurrentLocale  } = document.cookie.match(appCurrentLocalePatt).groups;
        appLocale = appCurrentLocale;
    }
    return appLocale;
}


/***/ }),

/***/ "./src/helpers/hooks.ts":
/*!******************************!*\
  !*** ./src/helpers/hooks.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDocMetadata": () => (/* binding */ setDocMetadata),
/* harmony export */   "useAppTheme": () => (/* binding */ useAppTheme),
/* harmony export */   "useDocMetadata": () => (/* binding */ useDocMetadata),
/* harmony export */   "useRouterChangeEffect": () => (/* binding */ useRouterChangeEffect)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ssr_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ssr-utils */ "./src/helpers/ssr-utils.ts");


/**
 * useRouterChangeEffect is a hook that will get triggered whenever the location.pathname of
 * is updated via history API or in other sorts of way.
 */ function useRouterChangeEffect(efCb) {
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(efCb, [
        location.pathname
    ]);
}
// ---- html doc metadata related functions
/**
 * useDocMetadata
 */ function useDocMetadata() {
    return Array.from(document.head.querySelectorAll('meta'));
}
/**
 * setDocumentMetadata
 */ function setDocMetadata(Ms) {
    if (_ssr_utils__WEBPACK_IMPORTED_MODULE_1__.environment.isFinalRender) for (const metadata of Ms){
        const meta = document.createElement('meta');
        for(const key in metadata)meta.setAttribute(key, metadata[key]);
        document.head.appendChild(meta);
    }
}
/**
 * useTheme
 */ function useAppTheme() {
    const [theme, setTheme] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(_ssr_utils__WEBPACK_IMPORTED_MODULE_1__.environment.isBrowser ? localStorage.theme : undefined);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (theme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [
        theme
    ]);
    return [
        theme,
        setTheme
    ];
}


/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchStateStatus": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_1__.FetchStateStatus),
/* harmony export */   "enableDevTools": () => (/* binding */ enableDevTools),
/* harmony export */   "environment": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_1__.environment),
/* harmony export */   "getAppContentByLocale": () => (/* binding */ getAppContentByLocale),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_1__.getServerSideProps),
/* harmony export */   "initAppState": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_1__.initAppState),
/* harmony export */   "initUniStore": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_1__.initUniStore),
/* harmony export */   "isDevelopment": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_1__.isDevelopment),
/* harmony export */   "isProduction": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_1__.isProduction),
/* harmony export */   "resolvePendingAsyncDataFetches": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_1__.resolvePendingAsyncDataFetches),
/* harmony export */   "resolvePendingProps": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_1__.resolvePendingProps),
/* harmony export */   "setDocMetadata": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.setDocMetadata),
/* harmony export */   "useAppTheme": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.useAppTheme),
/* harmony export */   "useAsyncDataFetch": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_1__.useAsyncDataFetch),
/* harmony export */   "useDocMetadata": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.useDocMetadata),
/* harmony export */   "useRouterChangeEffect": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.useRouterChangeEffect)
/* harmony export */ });
/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/contents */ "./src/contents/index.ts");
/* harmony import */ var _ssr_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ssr-utils */ "./src/helpers/ssr-utils.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./src/helpers/hooks.ts");




function enableDevTools() {
    if (_ssr_utils__WEBPACK_IMPORTED_MODULE_1__.isDevelopment) {
        Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! preact/devtools */ "preact/devtools", 23));
        Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! preact/debug */ "preact/debug", 23));
    }
}
function getAppContentByLocale(path, forceLocale) {
    return __webpack_require__("./src/contents sync recursive ^\\.\\/.*\\/.*$")(`./${forceLocale !== null && forceLocale !== void 0 ? forceLocale : (0,_contents__WEBPACK_IMPORTED_MODULE_0__.getAppLocale)()}/${path}`);
}


/***/ }),

/***/ "./src/helpers/ssr-utils.ts":
/*!**********************************!*\
  !*** ./src/helpers/ssr-utils.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchStateStatus": () => (/* binding */ FetchStateStatus),
/* harmony export */   "environment": () => (/* binding */ environment),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "initAppState": () => (/* binding */ initAppState),
/* harmony export */   "initUniStore": () => (/* binding */ initUniStore),
/* harmony export */   "isDevelopment": () => (/* binding */ isDevelopment),
/* harmony export */   "isProduction": () => (/* binding */ isProduction),
/* harmony export */   "resolvePendingAsyncDataFetches": () => (/* binding */ resolvePendingAsyncDataFetches),
/* harmony export */   "resolvePendingProps": () => (/* binding */ resolvePendingProps),
/* harmony export */   "useAsyncDataFetch": () => (/* binding */ useAsyncDataFetch)
/* harmony export */ });
/* harmony import */ var unistore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unistore */ "unistore");
/* harmony import */ var unistore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unistore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_devtools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/devtools */ "unistore/devtools");
/* harmony import */ var unistore_devtools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_devtools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./src/helpers/hooks.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}




const environment = {
    get isBrowser () {
        return typeof process === 'undefined' && "object" === 'undefined' && 0 && 0 || typeof Worker === 'function';
    },
    get isServer () {
        return !this.isBrowser && "object" !== 'undefined';
    },
    get isFinalRender () {
        return __webpack_require__.g.finalRender;
    }
};
const isDevelopment = true;
const isProduction = !isDevelopment;
function initUniStore(store) {
    const initStore = window.__UNISTORE_STATE__ ? window.__UNISTORE_STATE__ : window.__UNISTORE_STATE__ = {};
    const C = (unistore__WEBPACK_IMPORTED_MODULE_0___default());
    return isDevelopment && environment.isBrowser ? unistore_devtools__WEBPACK_IMPORTED_MODULE_1___default()(C(initStore)) : C(initStore);
}
function initAppState() {
    const initState = window.__APP_STATE__ ? window.__APP_STATE__ : window.__APP_STATE__ = {
        serverSideProps: [],
        serverSideRoutesWhitelist: {},
        clientRuntimeConfig: APP_CONFIG.clientRuntimeConfig,
        whitelistedRoutes: {}
    };
    __webpack_require__.g.clientRuntimeConfig = window.clientRuntimeConfig = window.__APP_STATE__.clientRuntimeConfig;
    return initState;
}
/**
 * getServerSideProps as the name implies, the data-fetching that this function performs
 * only occurs in the server. Its response will be appended on to the component passed.
 * 
 * @param C 
 * @param aF 
 */ function getServerSideProps(C, aF) {
    return _getServerSideProps.apply(this, arguments);
}
function _getServerSideProps() {
    _getServerSideProps = _asyncToGenerator(function*(C, aF) {
        const fName = C.name;
        const memoTchecksOldRes = memoTchecks[fName];
        let isNotComponent = false;
        // C.toString() and performing checks in regex is an expensive operation, 
        // calling it regularly surely will impact the runtime of getServerSideProps.
        //
        // do: Check if C is a function component, by using regex we check certain keywords
        //     that the JSX runtime (and other possible candidate keywords) uses and
        //     memoize the result to `memoTchecks` and then update the flag `isNotComponent`
        if (!memoTchecksOldRes) memoTchecks[fName] = isNotComponent = !/(_jsxRuntime|children|jsxs?|Fragment)/g.test(C.toString());
        if (isNotComponent) throw new TypeError(`${C.name.length ? C.name : '(anonymous)'} is not a valid function component.`);
        if (environment.isServer) pendingServerSideProps.push({
            C,
            aF
        });
        else {
            let defaultProps;
            const browserPropsFallback = function() {
                var _ref = _asyncToGenerator(function*(fName, routes) {
                    yield aF(null).then((props)=>{
                        const routeUi = routes[fName];
                        routeUi.props = Object.assign(routeUi.props, props);
                        defaultProps = props;
                    });
                });
                return function browserPropsFallback(fName, routes) {
                    return _ref.apply(this, arguments);
                };
            }();
            if (window.__APP_STATE__.serverSideRoutesWhitelist[fName]) yield browserPropsFallback(fName, window.__whitelistRoutes);
            else {
                const serverSideProps = window.__APP_STATE__.serverSideProps;
                let index = window.__APP_STATE__.serverSidePropsIndex--;
                // Reset the pointer's value to serverSideProps.
                if (index == 0) index = window.__APP_STATE__.serverSidePropsIndex = serverSideProps.length;
                defaultProps = serverSideProps[serverSideProps.length - index];
                if (defaultProps == undefined) yield browserPropsFallback(fName, window.__routes);
            }
            var _defaultProps;
            C.defaultProps = Object.assign((_defaultProps = C.defaultProps) !== null && _defaultProps !== void 0 ? _defaultProps : {}, defaultProps);
        }
    });
    return _getServerSideProps.apply(this, arguments);
}
var FetchStateStatus;
(function(FetchStateStatus) {
    FetchStateStatus[FetchStateStatus["Success"] = 0] = "Success";
    FetchStateStatus[FetchStateStatus["Error"] = 1] = "Error";
    FetchStateStatus[FetchStateStatus["Pending"] = 2] = "Pending";
})(FetchStateStatus || (FetchStateStatus = {}));
const memoTchecks = {};
/**
 * resolvePendingProps 
 * @param ctx 
 */ function resolvePendingProps(ctx) {
    return _resolvePendingProps.apply(this, arguments);
}
function _resolvePendingProps() {
    _resolvePendingProps = _asyncToGenerator(function*(ctx) {
        const routes = (__webpack_require__(/*! @/views */ "./src/views/index.ts")["default"]);
        const routesWhitelist = {};
        const Ps = pendingServerSideProps;
        const serverSideProps = [];
        // numBadProps is a counter for props that are not well defined after
        // resolving some aF function from the `pendingServerSideProps`. This
        // counter will be subtracted from the total serverSideProps length.
        //
        // A badprops is a resolved value by the async aF function from 
        // `getServerSideProps` which is not suitable to be merge to the
        // `defaultProps` of the `C` component.
        //
        let numBadProps = 0;
        // Resolve all async props and assign it to the component's 
        // static property `defaultProps`, we also store a copy of the resolved
        // props to the `serverSideProps` for rendering it later on
        // the browser.
        const propsResolvers = [];
        for(let index = 0; index < Ps.length; index++){
            Ps[index].C.defaultProps = {};
            const { req  } = ctx;
            let isExcluded = false;
            // When component `Ps[index].C` does not match the current request URL path
            // we exclude it from the ones that will be data fetched by the server and
            // we put it in a `whitelist` that will be data fetched in the client
            // once `useRouterChangeEffect` detected a URL change in the browser.
            //
            // Additionally, if it matches the current request URL path we will capture
            // the request url for any url parameters ':[keyword]' and then place it
            // into the `defaultProps` of the component.
            for (const route of routes){
                const patt = new RegExp(route.path.replaceAll(/:[^/]+/g, '([^/]+)'));
                if (route.component == Ps[index].C && route.path != req.path && !patt.test(req.path)) {
                    isExcluded = true;
                    routesWhitelist[Ps[index].C.name] = true;
                    break;
                }
                let currIndex = 1;
                const params = route.path.matchAll(/:([^/]+)/g);
                for (const [, param] of params){
                    var ref;
                    const matches = (ref = req.path.match(patt)) !== null && ref !== void 0 ? ref : [];
                    const C = Ps[index].C;
                    C.defaultProps = Object.assign(C.defaultProps, {
                        [param]: matches[currIndex++]
                    });
                }
            }
            if (isExcluded) continue;
            propsResolvers.push((function() {
                var _ref = _asyncToGenerator(function*(Ps, i) {
                    let isGoodProps = true;
                    const { C , aF  } = Ps[i];
                    const asyncProps = yield aF(ctx);
                    if (typeof asyncProps !== 'undefined' && asyncProps != undefined && typeof asyncProps === 'object' && typeof asyncProps !== 'number' && !(asyncProps instanceof Array) && !(asyncProps instanceof Map) && typeof asyncProps !== 'boolean' && !(asyncProps instanceof Set) && typeof asyncProps !== 'string' && typeof asyncProps !== 'bigint' && typeof asyncProps !== 'function' && typeof asyncProps !== 'symbol' && !(Symbol.iterator in asyncProps) && !(Symbol.asyncIterator in asyncProps)) serverSideProps[i] = asyncProps;
                    else {
                        isGoodProps = false;
                        numBadProps++;
                    }
                    if (isGoodProps) C.defaultProps = Object.assign(C.defaultProps, asyncProps);
                    Promise.resolve();
                });
                return function(Ps, i) {
                    return _ref.apply(this, arguments);
                };
            })()(Ps, index));
        }
        yield Promise.all(propsResolvers);
        window.__APP_STATE__.serverSideProps = serverSideProps;
        window.__APP_STATE__.serverSidePropsIndex = propsResolvers.length - numBadProps;
        window.__APP_STATE__.serverSideRoutesWhitelist = routesWhitelist;
    });
    return _resolvePendingProps.apply(this, arguments);
}
/**
 * useAsyncDataFetch is a hook function that performs data fetching on the client and server-side, it accepts
 * two parameters: `options` and `aCb`, the `options` contains flags that can control how `useAsyncDataFetch`
 * data fetches these flags are (`onServer` and `reuse`).
 * 
 *  `onServer` instructs this hook to whether data fetch only in the browser or both.
 *  `reuse`    instructs this hook to not perform the `aCb` callback / data fetch in the browser and must
 *             only index the (by the `aCb` callback) the data that was fetched from the server.
 *
 * `aCb` call back is where the data fetched will go after `useAsyncDataFetch` has finished fetching.
 * 
 * @param aCb 
 */ function useAsyncDataFetch(options = {
    onServer: true,
    reuse: false,
    forced: false
}, aCb) {
    const { isBrowser , isServer  } = environment;
    const [fState, setState] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState)({
        status: 2
    });
    const [fRes, setFRes] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    let fRCb = ()=>{};
    if (isBrowser) {
        (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useRouterChangeEffect)(()=>{
            const ssrDataCounter = window.__APP_STATE__.asyncDataFetchesIndex;
            const ssrData = window.__APP_STATE__.asyncDataFetches[ssrDataCounter - 1];
            let isNotPopulated = true;
            // If the ssrData has not been indexed in the browser, instead of
            // performing an HTTP request, we are gonna used the value of `ssrData.data`
            // then we flag `ssrData.data` as used.
            if (options.onServer && ssrData && (!ssrData.used || options.reuse)) {
                setState({
                    status: 0
                });
                setFRes(ssrData.data);
                ssrData.used = true;
                isNotPopulated = false;
                window.__APP_STATE__.asyncDataFetchesIndex++;
                // Reset asyncDataFetches counter when it reaches the maximum length.
                if (ssrDataCounter >= window.__APP_STATE__.asyncDataFetches.length) window.__APP_STATE__.asyncDataFetchesIndex = 1;
            }
            // If there wasn't an ssr data found in the window.__APP_STATE___ (i.e.
            // the fetched data was not populated) we will call the async callback
            // passed and populated the data with the fetched ones. If the options.forced
            // option on the other hand is set we will enforce to call the callback function.
            if (isNotPopulated || options.forced) aCb([
                fState,
                setState
            ]).then((res)=>{
                setState({
                    status: 0
                });
                setFRes(res);
            }).catch((err)=>{
                setState({
                    status: 1,
                    message: err
                });
            });
        });
        fRCb = (cb)=>{
            (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
                if (fState.status == 0) cb(fRes);
            }, [
                fState.status
            ]);
        };
    }
    if (options.onServer && isServer) {
        const asyncDataFetches = window.__APP_STATE__.asyncDataFetches;
        if (!asyncDataFetches) pendingAsyncDataFetches.push({
            fState: [
                fState,
                setState
            ],
            C: aCb,
            options
        });
        else fRCb = (cb)=>{
            const ssrDataCounter = window.__APP_STATE__.asyncDataFetchesIndex;
            const ssrData = asyncDataFetches[ssrDataCounter - 1];
            if (ssrData) {
                setState({
                    status: 0
                });
                setFRes(ssrData.data);
                window.__APP_STATE__.asyncDataFetchesIndex++;
                // Reset asyncDataFetches counter when it reaches the maximum length.
                if (ssrDataCounter >= window.__APP_STATE__.asyncDataFetches.length) window.__APP_STATE__.asyncDataFetchesIndex = 1;
                if (fRes) return cb(fRes);
            }
        };
    }
    return [
        fState,
        fRCb
    ];
}
/**
 * resolvePendingAsyncDataFetches
 */ function resolvePendingAsyncDataFetches() {
    return _resolvePendingAsyncDataFetches.apply(this, arguments);
}
function _resolvePendingAsyncDataFetches() {
    _resolvePendingAsyncDataFetches = _asyncToGenerator(function*() {
        const Pa = pendingAsyncDataFetches;
        const asyncDataFetches = [];
        const resolveFetches = [];
        for(let index = 0; index < Pa.length; index++){
            if (!Pa[index].options.onServer) continue;
            resolveFetches.push((function() {
                var _ref = _asyncToGenerator(function*(Pi, index) {
                    const { C , fState  } = Pi;
                    asyncDataFetches[index] = {
                        data: yield C(fState),
                        used: false
                    };
                    Promise.resolve();
                });
                return function(Pi, index) {
                    return _ref.apply(this, arguments);
                };
            })()(Pa[index], index));
        }
        yield Promise.all(resolveFetches);
        window.__APP_STATE__.asyncDataFetches = asyncDataFetches;
        window.__APP_STATE__.asyncDataFetchesIndex = resolveFetches.length;
        pendingAsyncDataFetches = [];
    });
    return _resolvePendingAsyncDataFetches.apply(this, arguments);
}


/***/ }),

/***/ "./src/server/SSRContext.tsx":
/*!***********************************!*\
  !*** ./src/server/SSRContext.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSRContext": () => (/* binding */ SSRContext),
/* harmony export */   "ServerContext": () => (/* binding */ ServerContext)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _preact_hooks_unistore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @preact-hooks/unistore */ "@preact-hooks/unistore");
/* harmony import */ var _preact_hooks_unistore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_preact_hooks_unistore__WEBPACK_IMPORTED_MODULE_2__);



const SSRContext = (0,preact__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const ServerContext = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SSRContext.Provider, {
        value: props.value,
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_preact_hooks_unistore__WEBPACK_IMPORTED_MODULE_2__.StoreProvider, {
            value: props.store,
            children: props.children
        })
    });
};


/***/ }),

/***/ "./src/server/middlewares/express-context.ts":
/*!***************************************************!*\
  !*** ./src/server/middlewares/express-context.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getRouteByName": () => (/* binding */ getRouteByName),
/* harmony export */   "handleInitialRouteRequest": () => (/* binding */ handleInitialRouteRequest)
/* harmony export */ });
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views */ "./src/views/index.ts");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact-router */ "preact-router");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/ssr-utils */ "./src/helpers/ssr-utils.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
// express-context.ts
//
// This utility can be used for managing the context of the express request and response lifecycle.
// There are many use cases this utility can fit. 




// This utility is following the facade pattern. hence it is not convenient to use it,
//
const context = {
    _context: null,
    setContext (ctx) {
        this._context = ctx;
    },
    // Accessing the _context prop directly in this facade is considered an anti-pattern,
    // instead use this getter to access it from this object.
    getContext () {
        return this._context;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);
function getRouteByName(name) {
    for (const route of Object.values(_views__WEBPACK_IMPORTED_MODULE_0__["default"])){
        if (route.name === name) return route;
    }
    throw new TypeError('route was not found');
}
function handleInitialRouteRequest(route) {
    const [_route, setRoute] = (0,preact_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    let wasNotFound = false;
    // If `route.current` is undefined, it is considered that such path does not exist.
    if (route.current === undefined) wasNotFound = true;
    if (wasNotFound) {
        if (_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_2__.environment.isServer) {
            const ctx = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(context.getContext());
            ctx.routeFound = false;
            ctx.statusCode = 404;
        } else setTimeout(()=>setRoute({
                url: getRouteByName('not-found').path,
                replace: true
            }), 0);
    }
}


/***/ }),

/***/ "./src/server/middlewares/index.ts":
/*!*****************************************!*\
  !*** ./src/server/middlewares/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupDevMiddleware": () => (/* reexport safe */ _setup_dev_router__WEBPACK_IMPORTED_MODULE_0__.setupDevMiddleware),
/* harmony export */   "ssrRouter": () => (/* reexport safe */ _setup_ssr_router__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _setup_dev_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup-dev-router */ "./src/server/middlewares/setup-dev-router.ts");
/* harmony import */ var _setup_ssr_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup-ssr-router */ "./src/server/middlewares/setup-ssr-router.tsx");




/***/ }),

/***/ "./src/server/middlewares/setup-dev-router.ts":
/*!****************************************************!*\
  !*** ./src/server/middlewares/setup-dev-router.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupDevMiddleware": () => (/* binding */ setupDevMiddleware)
/* harmony export */ });
/* harmony import */ var _helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/ssr-utils */ "./src/helpers/ssr-utils.ts");
/* harmony import */ var webpackConfig_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpackConfig/dev */ "./webpack/dev.ts");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ "webpack");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");
/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");
/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__);





const devCompiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()(webpackConfig_dev__WEBPACK_IMPORTED_MODULE_1__["default"]);
function setupDevMiddleware(app) {
    if (_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_0__.isProduction) return;
    app.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default()(devCompiler, {
        index: false,
        stats: 'errors-warnings',
        serverSideRender: true,
        writeToDisk: true,
        publicPath: webpackConfig_dev__WEBPACK_IMPORTED_MODULE_1__["default"].output.publicPath
    }));
    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default()(devCompiler, {
        heartbeat: 2000
    }));
}


/***/ }),

/***/ "./src/server/middlewares/setup-ssr-router.tsx":
/*!*****************************************************!*\
  !*** ./src/server/middlewares/setup-ssr-router.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsdom */ "jsdom");
/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsdom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact_render_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact-render-to-string */ "preact-render-to-string");
/* harmony import */ var preact_render_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact_render_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devalue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devalue */ "devalue");
/* harmony import */ var devalue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devalue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
/* harmony import */ var _server_SSRContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/server/SSRContext */ "./src/server/SSRContext.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/App */ "./src/App.tsx");
/* harmony import */ var _helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/ssr-utils */ "./src/helpers/ssr-utils.ts");
/* harmony import */ var _express_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./express-context */ "./src/server/middlewares/express-context.ts");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_11__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}












const ssrRouter = (0,express__WEBPACK_IMPORTED_MODULE_1__.Router)({
    strict: true,
    caseSensitive: true
});
const ssrHandler = function() {
    var _ref = _asyncToGenerator(function*(req, res) {
        const ctx = {
            req,
            res,
            statusCode: null,
            routeFound: true
        };
        _express_context__WEBPACK_IMPORTED_MODULE_10__["default"].setContext((0,preact__WEBPACK_IMPORTED_MODULE_11__.createContext)(ctx));
        const doc = yield renderDoc(req, res);
        var _statusCode;
        res.status((_statusCode = ctx.statusCode) !== null && _statusCode !== void 0 ? _statusCode : 200).set('Content-Type', 'text/html').send(doc).end();
    });
    return function ssrHandler(req, res) {
        return _ref.apply(this, arguments);
    };
}();
ssrRouter.get('*', ssrHandler);
function renderDoc(req, res) {
    return _renderDoc.apply(this, arguments);
}
function _renderDoc() {
    _renderDoc = _asyncToGenerator(function*(req, res) {
        const currentUrl = `${req.protocol}://${req.headers.host}${req.originalUrl}`;
        const doc = yield jsdom__WEBPACK_IMPORTED_MODULE_2__.JSDOM.fromFile(path__WEBPACK_IMPORTED_MODULE_4___default().resolve('dist', 'index.html'), {
            url: currentUrl,
            userAgent: req.headers['user-agent'],
            contentType: req.headers['content-type'],
            referrer: req.headers['referer'],
            pretendToBeVisual: true,
            resources: 'usable',
            runScripts: 'dangerously',
            cookieJar: null
        });
        // @ts-ignore
        __webpack_require__.g.window = doc.window;
        __webpack_require__.g.document = window.document;
        __webpack_require__.g.self = window.self;
        const initState = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.initAppState)();
        const initStore = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.initUniStore)();
        if (APP_CONFIG.mode == 'ssr') {
            yield (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.resolvePendingProps)({
                req,
                res
            });
            renderApp(_helpers__WEBPACK_IMPORTED_MODULE_6__.initAppState, initStore);
            yield (0,_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_9__.resolvePendingAsyncDataFetches)();
        } else window.__APP_STATE__.asyncDataFetches = [];
        // Setup the index.html here that will be send to the browser
        document.body.innerHTML += `
  <script>
    window.__APP_STATE__ = ${devalue__WEBPACK_IMPORTED_MODULE_5___default()(initState)}
    window.__UNISTORE_STATE__ = ${devalue__WEBPACK_IMPORTED_MODULE_5___default()(initStore.getState())}
    window.__whitelistRoutes = {}
    window.__routes = {}
    window.clientRuntimeConfig = window.__APP_STATE__.clientRuntimeConfig
  </script>
  `;
        if (APP_CONFIG.mode == 'ssr') {
            __webpack_require__.g.finalRender = true;
            document.querySelector('.app-root').innerHTML = renderApp();
            delete __webpack_require__.g.finalRender;
        }
        return doc.serialize();
    });
    return _renderDoc.apply(this, arguments);
}
function renderApp(appState, store) {
    return (0,preact_render_to_string__WEBPACK_IMPORTED_MODULE_3__.render)(/*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_server_SSRContext__WEBPACK_IMPORTED_MODULE_7__.ServerContext, {
        value: appState !== null && appState !== void 0 ? appState : (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.initAppState)(),
        store: store !== null && store !== void 0 ? store : (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.initUniStore)(),
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_8__.App, {})
    }), null, {
        pretty: _helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_9__.isDevelopment
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ssrRouter);


/***/ }),

/***/ "./src/views/_status/200s/index.tsx":
/*!******************************************!*\
  !*** ./src/views/_status/200s/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "thank_you_route": () => (/* binding */ thank_you_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const thank_you_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Thank you works!"
    });
};


/***/ }),

/***/ "./src/views/_status/404/index.tsx":
/*!*****************************************!*\
  !*** ./src/views/_status/404/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "not_found_route": () => (/* binding */ not_found_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const not_found_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Not found works!"
    });
};


/***/ }),

/***/ "./src/views/_status/503/index.tsx":
/*!*****************************************!*\
  !*** ./src/views/_status/503/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maintenance_route": () => (/* binding */ maintenance_route),
/* harmony export */   "offline_route": () => (/* binding */ offline_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const offline_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Offline works!"
    });
};
const maintenance_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Maintenance works!"
    });
};


/***/ }),

/***/ "./src/views/careers/index.tsx":
/*!*************************************!*\
  !*** ./src/views/careers/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "careers_route": () => (/* binding */ careers_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const careers_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Careers works!"
    });
};


/***/ }),

/***/ "./src/views/contacts/index.tsx":
/*!**************************************!*\
  !*** ./src/views/contacts/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts_route": () => (/* binding */ contacts_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const contacts_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Contacts works!"
    });
};


/***/ }),

/***/ "./src/views/faqs/index.tsx":
/*!**********************************!*\
  !*** ./src/views/faqs/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "faqs_route": () => (/* binding */ faqs_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const faqs_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "FAQs works!"
    });
};


/***/ }),

/***/ "./src/views/how-it-works/index.tsx":
/*!******************************************!*\
  !*** ./src/views/how-it-works/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "how_it_works_route": () => (/* binding */ how_it_works_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const how_it_works_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "How it works, works!"
    });
};


/***/ }),

/***/ "./src/views/index.ts":
/*!****************************!*\
  !*** ./src/views/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_status_200s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/_status/200s */ "./src/views/_status/200s/index.tsx");
/* harmony import */ var _views_status_404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/_status/404 */ "./src/views/_status/404/index.tsx");
/* harmony import */ var _views_status_503__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/_status/503 */ "./src/views/_status/503/index.tsx");
/* harmony import */ var _views_faqs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/faqs */ "./src/views/faqs/index.tsx");
/* harmony import */ var _views_landing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/landing */ "./src/views/landing/index.tsx");
/* harmony import */ var _views_careers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/careers */ "./src/views/careers/index.tsx");
/* harmony import */ var _views_contacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/contacts */ "./src/views/contacts/index.tsx");
/* harmony import */ var _views_pricings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pricings */ "./src/views/pricings/index.tsx");
/* harmony import */ var _views_more_about_us__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/more-about-us */ "./src/views/more-about-us/index.tsx");
/* harmony import */ var _views_professionals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/professionals */ "./src/views/professionals/index.tsx");
/* harmony import */ var _views_how_it_works__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/how-it-works */ "./src/views/how-it-works/index.tsx");
/* harmony import */ var _views_lang_courses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/lang-courses */ "./src/views/lang-courses/index.tsx");
/* harmony import */ var _views_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/views/login */ "./src/views/login/index.tsx");
/* harmony import */ var _views_services_coworking_space__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/views/services/coworking-space */ "./src/views/services/coworking-space/index.tsx");
/* harmony import */ var _views_services_visa_counselling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/views/services/visa-counselling */ "./src/views/services/visa-counselling/index.tsx");
/* harmony import */ var _views_services_workshops__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/views/services/workshops */ "./src/views/services/workshops/index.tsx");
















const routes = [
    // Login pages
    {
        path: '/login',
        component: _views_login__WEBPACK_IMPORTED_MODULE_12__.login_route
    },
    // Static pages
    {
        path: '/',
        component: _views_landing__WEBPACK_IMPORTED_MODULE_4__.landing_route
    },
    {
        path: '/careers',
        component: _views_careers__WEBPACK_IMPORTED_MODULE_5__.careers_route
    },
    {
        path: '/contacts',
        component: _views_contacts__WEBPACK_IMPORTED_MODULE_6__.contacts_route
    },
    {
        path: '/faqs',
        component: _views_faqs__WEBPACK_IMPORTED_MODULE_3__.faqs_route
    },
    {
        path: '/how-it-works',
        component: _views_how_it_works__WEBPACK_IMPORTED_MODULE_10__.how_it_works_route
    },
    {
        path: '/more-about-us',
        component: _views_more_about_us__WEBPACK_IMPORTED_MODULE_8__.more_about_us_route
    },
    {
        path: '/professionals',
        component: _views_professionals__WEBPACK_IMPORTED_MODULE_9__.professionals_route
    },
    {
        path: '/lang-courses/:lang',
        component: _views_lang_courses__WEBPACK_IMPORTED_MODULE_11__.lang_courses_route
    },
    {
        path: '/shared-workspace',
        component: _views_services_coworking_space__WEBPACK_IMPORTED_MODULE_13__.services_coworking_space_route
    },
    {
        path: '/visa-counselling',
        component: _views_services_visa_counselling__WEBPACK_IMPORTED_MODULE_14__.services_visa_counselling_route
    },
    {
        path: '/workshops/:workshop',
        component: _views_services_workshops__WEBPACK_IMPORTED_MODULE_15__.services_workshops_route
    },
    // Pricing pages
    {
        path: '/pricings',
        component: _views_pricings__WEBPACK_IMPORTED_MODULE_7__.pricings_route
    },
    {
        path: '/lang-courses/:lang/pricings',
        component: _views_pricings__WEBPACK_IMPORTED_MODULE_7__.pricings_route
    },
    {
        path: '/visa-counselling/pricings',
        component: _views_pricings__WEBPACK_IMPORTED_MODULE_7__.pricings_route
    },
    {
        path: '/shared-workspace/pricings',
        component: _views_pricings__WEBPACK_IMPORTED_MODULE_7__.pricings_route
    },
    // Status pages
    {
        name: 'thank-you',
        path: '/greetings/thank-you/:page',
        component: _views_status_200s__WEBPACK_IMPORTED_MODULE_0__.thank_you_route,
        statusCode: 202
    },
    {
        name: 'not-found',
        path: '/error/page-not-found',
        component: _views_status_404__WEBPACK_IMPORTED_MODULE_1__.not_found_route,
        statusCode: 404
    },
    {
        name: 'off',
        path: '/error/offline',
        component: _views_status_503__WEBPACK_IMPORTED_MODULE_2__.offline_route,
        statusCode: 503
    },
    {
        name: 'maintenance',
        path: '/error/maintenance',
        component: _views_status_503__WEBPACK_IMPORTED_MODULE_2__.maintenance_route,
        statusCode: 503
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ "./src/views/landing/index.tsx":
/*!*************************************!*\
  !*** ./src/views/landing/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "landing_route": () => (/* binding */ landing_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/elements */ "./src/components/elements/index.ts");
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/index */ "./src/helpers/index.ts");



const landing_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements__WEBPACK_IMPORTED_MODULE_1__.Markdown, {
            content: (0,_helpers_index__WEBPACK_IMPORTED_MODULE_2__.getAppContentByLocale)('message.md')
        })
    });
};


/***/ }),

/***/ "./src/views/lang-courses/index.tsx":
/*!******************************************!*\
  !*** ./src/views/lang-courses/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lang_courses_route": () => (/* binding */ lang_courses_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const lang_courses_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Lang courses works!"
    });
};


/***/ }),

/***/ "./src/views/login/index.tsx":
/*!***********************************!*\
  !*** ./src/views/login/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login_route": () => (/* binding */ login_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const login_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Login works!"
    });
};


/***/ }),

/***/ "./src/views/more-about-us/index.tsx":
/*!*******************************************!*\
  !*** ./src/views/more-about-us/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "more_about_us_route": () => (/* binding */ more_about_us_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const more_about_us_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "More about us works!"
    });
};


/***/ }),

/***/ "./src/views/pricings/index.tsx":
/*!**************************************!*\
  !*** ./src/views/pricings/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pricings_route": () => (/* binding */ pricings_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const pricings_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Pricings works!"
    });
};


/***/ }),

/***/ "./src/views/professionals/index.tsx":
/*!*******************************************!*\
  !*** ./src/views/professionals/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "professionals_route": () => (/* binding */ professionals_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const professionals_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Professionals works!"
    });
};


/***/ }),

/***/ "./src/views/services/coworking-space/index.tsx":
/*!******************************************************!*\
  !*** ./src/views/services/coworking-space/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "services_coworking_space_route": () => (/* binding */ services_coworking_space_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const services_coworking_space_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Services coworking space works!"
    });
};


/***/ }),

/***/ "./src/views/services/visa-counselling/index.tsx":
/*!*******************************************************!*\
  !*** ./src/views/services/visa-counselling/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "services_visa_counselling_route": () => (/* binding */ services_visa_counselling_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const services_visa_counselling_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Services visa counselling works!"
    });
};


/***/ }),

/***/ "./src/views/services/workshops/index.tsx":
/*!************************************************!*\
  !*** ./src/views/services/workshops/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "services_workshops_route": () => (/* binding */ services_workshops_route)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const services_workshops_route = (props)=>{
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Services workshops works!"
    });
};


/***/ }),

/***/ "./webpack/dev.ts":
/*!************************!*\
  !*** ./webpack/dev.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ "./app.config.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ "webpack");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/ssr-utils */ "./src/helpers/ssr-utils.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html_webpack_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-webpack-plugin */ "html-webpack-plugin");
/* harmony import */ var html_webpack_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_webpack_plugin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var copy_webpack_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! copy-webpack-plugin */ "copy-webpack-plugin");
/* harmony import */ var copy_webpack_plugin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(copy_webpack_plugin__WEBPACK_IMPORTED_MODULE_5__);






const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    name: 'web',
    entry: {
        index: [
            path__WEBPACK_IMPORTED_MODULE_3___default().resolve('src', 'index.tsx'),
            'webpack-hot-middleware/client?name=web&path=/__webpack_hmr&timeout=2000', 
        ]
    },
    output: {
        path: path__WEBPACK_IMPORTED_MODULE_3___default().resolve('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: 'swc-loader'
            },
            {
                test: /\.(gif|png|jpe?g|webp|mp[3-4]|ogg|mpeg|m4a|flac|ico|3gp|toff)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            },
            {
                test: /\.(md)$/i,
                type: 'asset/source'
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            },
            {
                test: /\.(p?css)$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader', 
                ]
            }, 
        ]
    },
    resolve: {
        alias: {
            '@': path__WEBPACK_IMPORTED_MODULE_3___default().resolve('src'),
            'webpackConfig': path__WEBPACK_IMPORTED_MODULE_3___default().resolve('webpack'),
            'react': 'preact/compat',
            'react-dom': 'preact/compat',
            'react/jsx-runtime': 'preact/jsx-runtime'
        },
        cache: false,
        extensions: [
            '.ts',
            '.tsx',
            '.json',
            '.pcss',
            '.js',
            '.md'
        ],
        modules: [
            'node_modules'
        ]
    },
    plugins: [
        new (html_webpack_plugin__WEBPACK_IMPORTED_MODULE_4___default())({
            minify: !_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_2__.isDevelopment,
            title: APP_CONFIG.title,
            favicon: path__WEBPACK_IMPORTED_MODULE_3___default().resolve('src', 'assets', 'favicon.ico'),
            template: path__WEBPACK_IMPORTED_MODULE_3___default().resolve('src', 'assets', 'index.html'),
            inject: 'body',
            scriptLoading: 'module',
            filename: path__WEBPACK_IMPORTED_MODULE_3___default().resolve('dist', 'index.html'),
            meta: Object.assign({}, APP_CONFIG.meta)
        }),
        new (copy_webpack_plugin__WEBPACK_IMPORTED_MODULE_5___default())({
            patterns: [
                {
                    from: path__WEBPACK_IMPORTED_MODULE_3___default().resolve('src', 'assets', 'app.webmanifest'),
                    to: path__WEBPACK_IMPORTED_MODULE_3___default().resolve('dist')
                },
                {
                    from: path__WEBPACK_IMPORTED_MODULE_3___default().resolve('src', 'assets', 'robots.txt'),
                    to: path__WEBPACK_IMPORTED_MODULE_3___default().resolve('dist')
                }
            ]
        }),
        new (webpack__WEBPACK_IMPORTED_MODULE_1___default().HotModuleReplacementPlugin)(), 
    ],
    externalsPresets: {
        web: true,
        webAsync: true
    },
    experiments: {
        topLevelAwait: true
    },
    stats: 'normal',
    // @ts-ignore
    devServer: {
        hot: true,
        compress: true,
        historyApiFallback: true
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (devConfig);


/***/ }),

/***/ "./src/contents sync recursive ^\\.\\/.*\\/.*$":
/*!*****************************************!*\
  !*** ./src/contents/ sync ^\.\/.*\/.*$ ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/empty": "./src/contents/en/empty.json",
	"./en/empty.json": "./src/contents/en/empty.json",
	"./en/message": "./src/contents/en/message.md",
	"./en/message.md": "./src/contents/en/message.md",
	"./jp/message": "./src/contents/jp/message.md",
	"./jp/message.md": "./src/contents/jp/message.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/contents sync recursive ^\\.\\/.*\\/.*$";

/***/ }),

/***/ "./src/contents/en/message.md":
/*!************************************!*\
  !*** ./src/contents/en/message.md ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "#### The quick brown fox jumps over the lazy dog.\n---\nOkay now that we are done <span class='bg-gray-300'>writing</span> all of these, we will now commit these to our data.\n\n- 1\n- 2\n- 3\n- 4\n- 5\n- 6\n- 7\n- 8\n- 9";

/***/ }),

/***/ "./src/contents/jp/message.md":
/*!************************************!*\
  !*** ./src/contents/jp/message.md ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "#### 速い茶色のキツネが怠け者の犬を飛び越えます。\n---\nこれらすべての<span class='bg-gray-300'>書き込み</span>が完了したので、これらをデータにコミットします。\n\n- 1\n- 2\n- 3\n- 4\n- 5\n- 6\n- 7\n- 8\n- 9";

/***/ }),

/***/ "@preact-hooks/unistore":
/*!*****************************************!*\
  !*** external "@preact-hooks/unistore" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@preact-hooks/unistore");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "copy-webpack-plugin":
/*!**************************************!*\
  !*** external "copy-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("copy-webpack-plugin");

/***/ }),

/***/ "devalue":
/*!**************************!*\
  !*** external "devalue" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("devalue");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "jsdom":
/*!************************!*\
  !*** external "jsdom" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsdom");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("marked");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");

/***/ }),

/***/ "preact":
/*!*************************!*\
  !*** external "preact" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("preact");

/***/ }),

/***/ "preact-async-route":
/*!*************************************!*\
  !*** external "preact-async-route" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("preact-async-route");

/***/ }),

/***/ "preact-render-to-string":
/*!******************************************!*\
  !*** external "preact-render-to-string" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("preact-render-to-string");

/***/ }),

/***/ "preact-router":
/*!********************************!*\
  !*** external "preact-router" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("preact-router");

/***/ }),

/***/ "preact/debug":
/*!*******************************!*\
  !*** external "preact/debug" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("preact/debug");

/***/ }),

/***/ "preact/devtools":
/*!**********************************!*\
  !*** external "preact/devtools" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("preact/devtools");

/***/ }),

/***/ "preact/hooks":
/*!*******************************!*\
  !*** external "preact/hooks" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("preact/hooks");

/***/ }),

/***/ "preact/jsx-runtime":
/*!*************************************!*\
  !*** external "preact/jsx-runtime" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("preact/jsx-runtime");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "unistore":
/*!***************************!*\
  !*** external "unistore" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("unistore");

/***/ }),

/***/ "unistore/devtools":
/*!************************************!*\
  !*** external "unistore/devtools" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("unistore/devtools");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "./src/contents/en/empty.json":
/*!************************************!*\
  !*** ./src/contents/en/empty.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.config */ "./app.config.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/ssr-utils */ "./src/helpers/ssr-utils.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ "./src/server/middlewares/index.ts");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_8__);



// import apiRouter from './api'





// @ts-ignore

const server = express__WEBPACK_IMPORTED_MODULE_4___default()();
if (_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_1__.isDevelopment) (0,_middlewares__WEBPACK_IMPORTED_MODULE_2__.setupDevMiddleware)(server);
server.use(compression__WEBPACK_IMPORTED_MODULE_7___default()());
server.use(helmet__WEBPACK_IMPORTED_MODULE_8___default()(APP_CONFIG.helmetOptions));
server.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()('', APP_CONFIG.cookieParserOptions));
server.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('dev', APP_CONFIG.morganOptions));
server.use(express__WEBPACK_IMPORTED_MODULE_4___default()["static"](path__WEBPACK_IMPORTED_MODULE_6___default().resolve('dist'), {
    index: false
}));
// server.use('/api', apiRouter)
server.use(_middlewares__WEBPACK_IMPORTED_MODULE_2__.ssrRouter);
server.listen(APP_CONFIG.serverPort, APP_CONFIG.serverHost, ()=>{});

})();

/******/ })()
;
//# sourceMappingURL=server.js.map