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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.top-0 {\n  top: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.bottom-\\[-1px\\] {\n  bottom: -1px;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.isolate {\n  isolation: isolate;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-40 {\n  z-index: 40;\n}\n.z-20 {\n  z-index: 20;\n}\n.float-left {\n  float: left;\n}\n.m-3 {\n  margin: 0.75rem;\n}\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.ml-3 {\n  margin-left: 0.75rem;\n}\n.mt-9 {\n  margin-top: 2.25rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mt-7 {\n  margin-top: 1.75rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mr-4 {\n  margin-right: 1rem;\n}\n.mt-16 {\n  margin-top: 4rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-10 {\n  margin-top: 2.5rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.table {\n  display: table;\n}\n.hidden {\n  display: none;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-52 {\n  height: 13rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-7 {\n  height: 1.75rem;\n}\n.h-60 {\n  height: 15rem;\n}\n.h-full {\n  height: 100%;\n}\n.h-9 {\n  height: 2.25rem;\n}\n.h-48 {\n  height: 12rem;\n}\n.h-72 {\n  height: 18rem;\n}\n.h-44 {\n  height: 11rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-8 {\n  width: 2rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-full {\n  width: 100%;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-32 {\n  width: 8rem;\n}\n.w-7 {\n  width: 1.75rem;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-96 {\n  width: 24rem;\n}\n.w-9 {\n  width: 2.25rem;\n}\n.w-48 {\n  width: 12rem;\n}\n.w-\\[20rem\\] {\n  width: 20rem;\n}\n.min-w-max {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-shrink {\n  flex-shrink: 1;\n}\n.grow {\n  flex-grow: 1;\n}\n.grow-0 {\n  flex-grow: 0;\n}\n.table-fixed {\n  table-layout: fixed;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.rounded-2xl {\n  border-radius: 1rem;\n}\n.rounded-3xl {\n  border-radius: 1.5rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-tl-none {\n  border-top-left-radius: 0px;\n}\n.rounded-tl-lg {\n  border-top-left-radius: 0.5rem;\n}\n.rounded-tr-lg {\n  border-top-right-radius: 0.5rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-slate-300 {\n  --tw-border-opacity: 1;\n  border-color: rgba(203, 213, 225, var(--tw-border-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-primary-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(133, 65, 219, var(--tw-bg-opacity));\n}\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(55, 65, 81, var(--tw-bg-opacity));\n}\n.bg-primary-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(93, 21, 185, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n.bg-primary-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(118, 55, 199, var(--tw-bg-opacity));\n}\n.bg-rose-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(225, 29, 72, var(--tw-bg-opacity));\n}\n.bg-gray-800\\/80 {\n  background-color: rgba(31, 41, 55, 0.8);\n}\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-7 {\n  padding: 1.75rem;\n}\n.p-5 {\n  padding: 1.25rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-8 {\n  padding: 2rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.px-\\[0\\.5rem\\] {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-16 {\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\n.pb-\\[5rem\\] {\n  padding-bottom: 5rem;\n}\n.pt-\\[4rem\\] {\n  padding-top: 4rem;\n}\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-\\[3rem\\] {\n  font-size: 3rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgba(29, 78, 216, var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgba(209, 213, 219, var(--tw-text-opacity));\n}\n.text-primary-300 {\n  --tw-text-opacity: 1;\n  color: rgba(118, 55, 199, var(--tw-text-opacity));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgba(37, 99, 235, var(--tw-text-opacity));\n}\n.opacity-30 {\n  opacity: 0.3;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.invert {\n  --tw-invert: invert(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.sepia {\n  --tw-sepia: sepia(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.dark-contains {\n    filter: invert(44%) sepia(64%) saturate(587%) hue-rotate(224deg) brightness(87%) contrast(94%);\n  }\n.light-contains {\n    filter: invert(25%) sepia(42%) saturate(4829%) hue-rotate(257deg) brightness(81%) contrast(90%);\n  }\n.dark-not-contains {\n    filter: invert(100%) sepia(3%) saturate(1294%) hue-rotate(180deg) brightness(97%) contrast(89%);\n  }\n.light-not-contains {\n    filter: invert(5%) sepia(9%) saturate(636%) hue-rotate(109deg) brightness(95%) contrast(95%);\n  }\n.dark hr, .dark  table, .dark  tr, .dark  td, .dark  th {\n  --tw-border-opacity: 1;\n  border-color: rgba(51, 65, 85, var(--tw-border-opacity));\n}\n.dark .dark\\:border-primary-400 {\n  --tw-border-opacity: 1;\n  border-color: rgba(93, 21, 185, var(--tw-border-opacity));\n}\n.dark .dark\\:bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(15, 23, 42, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-slate-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(30, 41, 59, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-slate-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 65, 85, var(--tw-bg-opacity));\n}\n.dark .dark\\:text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.dark .dark\\:text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n.dark .dark\\:text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgba(148, 163, 184, var(--tw-text-opacity));\n}\n.dark .dark\\:text-blue-400 {\n  --tw-text-opacity: 1;\n  color: rgba(96, 165, 250, var(--tw-text-opacity));\n}\n.dark .dark\\:dark-contains {\n    filter: invert(44%) sepia(64%) saturate(587%) hue-rotate(224deg) brightness(87%) contrast(94%);\n  }\n.dark .dark\\:dark-not-contains {\n    filter: invert(100%) sepia(3%) saturate(1294%) hue-rotate(180deg) brightness(97%) contrast(89%);\n  }\n@media (min-width: 1024px) {\n\n  .lg\\:w-16 {\n    width: 4rem;\n  }\n\n  .lg\\:object-top {\n    -o-object-position: top;\n       object-position: top;\n  }\n}\n@media (min-width: 1280px) {\n\n  .xl\\:w-16 {\n    width: 4rem;\n  }\n\n  .xl\\:rounded-tr-none {\n    border-top-right-radius: 0px;\n  }\n\n  .xl\\:rounded-bl-lg {\n    border-bottom-left-radius: 0.5rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/styles/main.pcss","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer utilities {\n\n  .dark-contains {\n    filter: invert(44%) sepia(64%) saturate(587%) hue-rotate(224deg) brightness(87%) contrast(94%);\n  }\n\n  .light-contains {\n    filter: invert(25%) sepia(42%) saturate(4829%) hue-rotate(257deg) brightness(81%) contrast(90%);\n  }\n\n  .dark-not-contains {\n    filter: invert(100%) sepia(3%) saturate(1294%) hue-rotate(180deg) brightness(97%) contrast(89%);\n  }\n\n  .light-not-contains {\n    filter: invert(5%) sepia(9%) saturate(636%) hue-rotate(109deg) brightness(95%) contrast(95%);\n  }\n  \n}\n\nhr, table, tr, td, th {\n  @apply dark:border-slate-700;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Image.pcss":
/*!***********************************!*\
  !*** ./src/components/Image.pcss ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/MessageNotification.pcss":
/*!*************************************************!*\
  !*** ./src/components/MessageNotification.pcss ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.message-notification {\n\n  margin-top: 0.75rem;\n\n  margin-bottom: 0.75rem;\n\n  display: flex;\n\n  border-radius: 0.5rem;\n\n  border-width: 1px;\n\n  padding: 1rem;\n\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow)\n}\n\n  .dark .message-notification p {\n\n  --tw-text-opacity: 1;\n\n  color: rgba(100, 116, 139, var(--tw-text-opacity))\n}\n\n  .dark .message-notification {\n\n  --tw-border-opacity: 1;\n\n  border-color: rgba(30, 41, 59, var(--tw-border-opacity));\n\n  --tw-bg-opacity: 1;\n\n  background-color: rgba(30, 41, 59, var(--tw-bg-opacity))\n}\n\n  .message-notification .message-notification__content {\n\n  margin-left: 1rem;\n\n  margin-right: 1rem;\n\n  flex: 1 1 0%;\n\n  flex-grow: 1\n}\n\n  .message-notification .message-notification__content .content__title {\n\n  margin-bottom: 0.75rem;\n\n  font-size: 1.125rem;\n\n  line-height: 1.75rem;\n\n  font-weight: 600\n}\n\n  .message-notification .message-notification__content .content__message {\n\n  text-align: left\n}\n\n  .message-notification .message-notification__content .content__message .message__link {\n\n  --tw-text-opacity: 1;\n\n  color: rgba(29, 78, 216, var(--tw-text-opacity))\n}\n\n  .dark .message-notification .message-notification__content .content__message .message__link {\n\n  --tw-text-opacity: 1;\n\n  color: rgba(96, 165, 250, var(--tw-text-opacity))\n}\n\n  .message-notification .message-notification__icon-wrapper {\n\n  margin-top: 0.25rem;\n\n  flex-shrink: 1;\n\n  flex-grow: 0\n}\n\n  .message-notification .message-notification__hide {\n\n  display: inline-flex;\n\n  flex-shrink: 1;\n\n  flex-grow: 0;\n\n  align-items: center\n}\n", "",{"version":3,"sources":["webpack://./src/components/MessageNotification.pcss"],"names":[],"mappings":";AAEE;;EAAA,mBAAgD;;EAAhD,sBAAgD;;EAAhD,aAAgD;;EAAhD,qBAAgD;;EAAhD,iBAAgD;;EAAhD,aAAgD;;EAAhD,iFAAgD;;EAAhD,iGAAgD;;EAAhD,kEAAgD;;EAAhD,kEAAgD;;EAAhD;AAAgD;;EAG9C;;EAAA,oBAA0B;;EAA1B;AAA0B;;EAG5B;;EAAA,sBAA8C;;EAA9C,wDAA8C;;EAA9C,kBAA8C;;EAA9C;AAA8C;;EAG5C;;EAAA,iBAAuB;;EAAvB,kBAAuB;;EAAvB,YAAuB;;EAAvB;AAAuB;;EAGrB;;EAAA,sBAAiC;;EAAjC,mBAAiC;;EAAjC,oBAAiC;;EAAjC;AAAiC;;EAIjC;;EAAA;AAAgB;;EAGd;;EAAA,oBAAuC;;EAAvC;AAAuC;;EAAvC;;EAAA,oBAAuC;;EAAvC;AAAuC;;EAM3C;;EAAA,mBAA8B;;EAA9B,cAA8B;;EAA9B;AAA8B;;EAI9B;;EAAA,oBAAkD;;EAAlD,cAAkD;;EAAlD,YAAkD;;EAAlD;AAAkD","sourcesContent":["\n.message-notification {\n  @apply flex border p-4 rounded-lg my-3 shadow-md;\n\n  p {\n    @apply dark:text-slate-500;\n  }\n\n  @apply dark:bg-slate-800 dark:border-slate-800;\n\n  .message-notification__content {\n    @apply grow flex-1 mx-4;\n\n    .content__title {\n      @apply text-lg mb-3 font-semibold;\n    }\n\n    .content__message {\n      @apply text-left;\n\n      .message__link {\n        @apply text-blue-700 dark:text-blue-400;\n      }\n    }\n  }\n\n  .message-notification__icon-wrapper {\n    @apply grow-0 flex-shrink mt-1;\n  }\n\n  .message-notification__hide {\n    @apply grow-0 flex-shrink inline-flex items-center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/views/404.pcss":
/*!****************************!*\
  !*** ./src/views/404.pcss ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-not-found {\n\n    width: 100%\n}\n\n@media (min-width: 640px) {\n\n    .page-not-found {\n\n        max-width: 640px\n    }\n}\n\n@media (min-width: 768px) {\n\n    .page-not-found {\n\n        max-width: 768px\n    }\n}\n\n@media (min-width: 1024px) {\n\n    .page-not-found {\n\n        max-width: 1024px\n    }\n}\n\n@media (min-width: 1280px) {\n\n    .page-not-found {\n\n        max-width: 1280px\n    }\n}\n\n@media (min-width: 1536px) {\n\n    .page-not-found {\n\n        max-width: 1536px\n    }\n}\n\n.page-not-found {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    display: flex;\n\n    min-height: 100vh;\n\n    align-items: center;\n\n    justify-content: center\n}\n\n  .page-not-found .page-not-found__message .message__heading {\n\n    font-size: 2.25rem;\n\n    line-height: 2.5rem\n}\n", "",{"version":3,"sources":["webpack://./src/views/404.pcss"],"names":[],"mappings":";AAEE;;IAAA;AAAsE;;AAAtE;;IAAA;;QAAA;IAAsE;AAAA;;AAAtE;;IAAA;;QAAA;IAAsE;AAAA;;AAAtE;;IAAA;;QAAA;IAAsE;AAAA;;AAAtE;;IAAA;;QAAA;IAAsE;AAAA;;AAAtE;;IAAA;;QAAA;IAAsE;AAAA;;AAAtE;;IAAA,iBAAsE;;IAAtE,kBAAsE;;IAAtE,aAAsE;;IAAtE,iBAAsE;;IAAtE,mBAAsE;;IAAtE;AAAsE;;EAIlE;;IAAA,kBAAe;;IAAf;AAAe","sourcesContent":["\n.page-not-found {\n  @apply container mx-auto flex justify-center items-center min-h-screen;\n\n  .page-not-found__message {\n    .message__heading {\n      @apply text-4xl;\n    }\n\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/views/About.pcss":
/*!******************************!*\
  !*** ./src/views/About.pcss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about-page {\n        width: 100%;\n\n}\n\n@media (min-width: 640px) {\n\n        .about-page {\n                max-width: 640px;\n\n        }\n\n}\n\n@media (min-width: 768px) {\n\n        .about-page {\n                max-width: 768px;\n\n        }\n\n}\n\n@media (min-width: 1024px) {\n\n        .about-page {\n                max-width: 1024px;\n\n        }\n\n}\n\n@media (min-width: 1280px) {\n\n        .about-page {\n                max-width: 1280px;\n\n        }\n\n}\n\n@media (min-width: 1536px) {\n\n        .about-page {\n                max-width: 1536px;\n\n        }\n\n}\n\n.about-page {\n        margin-left: auto;\n        margin-right: auto;\n        display: flex;\n        min-height: 100vh;\n        flex-direction: column;\n        padding-left: 0.75rem;\n        padding-right: 0.75rem;\n        padding-bottom: 5rem;\n\n}\n\n  .about-page .about-page__header {\n        padding-top: 4rem;\n\n}\n\n  .about-page .about-page__header .header__logo {\n        height: 13rem;\n        width: 13rem;\n\n}\n\n  .about-page .about-page__header .header__fr-main {\n        margin-top: 1.5rem;\n        margin-bottom: 1.5rem;\n        font-size: 1.875rem;\n        line-height: 2.25rem;\n        font-weight: 600;\n        --tw-text-opacity: 1;\n        color: rgba(93, 21, 185, var(--tw-text-opacity));\n\n}\n\n  .dark .about-page .about-page__header .header__fr-main {\n        --tw-text-opacity: 1;\n        color: rgba(255, 255, 255, var(--tw-text-opacity));\n\n}\n\n  .about-page .about-page__header .header__fr-message,  .about-page .about-page__header .header__fr-small-message {\n        text-align: justify;\n\n}\n\n  .dark .about-page .about-page__header .header__fr-message, .dark  .about-page .about-page__header .header__fr-small-message {\n        --tw-text-opacity: 1;\n        color: rgba(100, 116, 139, var(--tw-text-opacity));\n\n}\n\n  .about-page .about-page__header p {\n        margin-bottom: 1rem;\n\n}\n\n  .about-page .about-page__main .main__gcash-qrcode figcaption {\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n}\n\n  .about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__separator {\n        margin-top: 0.5rem;\n        margin-bottom: 0.5rem;\n        font-weight: 600;\n\n}\n\n  .about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile {\n        display: flex;\n        width: 100%;\n        border-radius: 0.75rem;\n        border-width: 2px;\n        --tw-border-opacity: 1;\n        border-color: rgba(148, 93, 218, var(--tw-border-opacity));\n\n}\n\n  .dark .about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile {\n        --tw-bg-opacity: 1;\n        background-color: rgba(30, 41, 59, var(--tw-bg-opacity));\n\n}\n\n  .about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile input {\n        flex-grow: 1;\n        border-radius: 0.5rem;\n        text-align: center;\n        font-size: 1.125rem;\n        line-height: 1.75rem;\n        font-weight: 600;\n        outline: 2px solid transparent;\n        outline-offset: 2px;\n\n}\n\n  .dark .about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile input {\n        --tw-text-opacity: 1;\n        color: rgba(75, 85, 99, var(--tw-text-opacity));\n\n}\n\n  .about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile input {\n        background-color: transparent;\n\n}\n\n  .dark .about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile input {\n        --tw-text-opacity: 1;\n        color: rgba(255, 255, 255, var(--tw-text-opacity));\n\n}\n\n  .about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 0.5rem;\n        border-top-left-radius: 0px;\n        border-bottom-left-radius: 0px;\n        padding: 0.75rem;\n        --tw-bg-opacity: 1;\n        background-color: rgba(133, 65, 219, var(--tw-bg-opacity));\n        --tw-text-opacity: 1;\n        color: rgba(255, 255, 255, var(--tw-text-opacity));\n\n}\n\n  .about-page .about-page__main .main__gcash-qrcode aside.qr-modal {\n        position: fixed;\n        top: 0px;\n        left: 0px;\n        z-index: 10;\n        height: 100vh;\n        width: 100%;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        --tw-bg-opacity: 1;\n        background-color: rgba(55, 65, 81, var(--tw-bg-opacity));\n\n}\n\n  .about-page .about-page__main .main__gcash-qrcode aside.qr-modal img {\n        width: 24rem;\n\n}\n\n  .about-page .about-page__main .main__gcash-qrcode .gcash-qrcode__qr-modal {\n        background-color: #007dfe;\n        display: flex;\n        width: 100%;\n        align-items: center;\n        justify-content: center;\n        border-radius: 1rem;\n        padding-top: 0.5rem;\n        padding-bottom: 0.5rem;\n        padding-left: 0.75rem;\n        padding-right: 0.75rem;\n        --tw-text-opacity: 1;\n        color: rgba(255, 255, 255, var(--tw-text-opacity));\n\n      }\n\n  .about-page .about-page__main .main__gcash-qrcode .gcash-qrcode__qr-modal .qr-modal__logo {\n        width: 3rem;\n        border-radius: 0.375rem;\n\n}\n\n  .about-page .about-page__main .main__gcash-qrcode .gcash-qrcode__qr-modal span {\n        margin-left: 0.75rem;\n        font-weight: 700;\n\n}\n\n  .about-page .about-page__footer .footer__email-form {\n        margin-top: 2.25rem;\n        border-radius: 0.5rem;\n        border-width: 1px;\n        --tw-bg-opacity: 1;\n        background-color: rgba(133, 65, 219, var(--tw-bg-opacity));\n        padding: 1rem;\n        --tw-text-opacity: 1;\n        color: rgba(255, 255, 255, var(--tw-text-opacity));\n        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n\n}\n\n  .dark .about-page .about-page__footer .footer__email-form {\n        border-style: none;\n        --tw-bg-opacity: 1;\n        background-color: rgba(30, 41, 59, var(--tw-bg-opacity));\n\n}\n\n  .about-page .about-page__footer .footer__email-form .email-form__title {\n        line-height: -2%;\n        margin-bottom: 1rem;\n        font-size: 1.5rem;\n        line-height: 2rem;\n        font-weight: 600;\n      }\n\n  .about-page .about-page__footer .footer__email-form p.email-form__message {\n        margin-bottom: 1rem;\n\n}\n\n  .dark .about-page .about-page__footer .footer__email-form p.email-form__message {\n        --tw-text-opacity: 1;\n        color: rgba(148, 163, 184, var(--tw-text-opacity));\n\n}\n\n  .about-page .about-page__footer .footer__email-form p.email-form__note {\n        margin-top: 0.5rem;\n        margin-bottom: 1rem;\n        display: flex;\n        border-radius: 0.5rem;\n        border-width: 2px;\n        padding: 0.75rem;\n\n}\n\n  .dark .about-page .about-page__footer .footer__email-form p.email-form__note {\n        --tw-border-opacity: 1;\n        border-color: rgba(93, 21, 185, var(--tw-border-opacity));\n        --tw-text-opacity: 1;\n        color: rgba(148, 163, 184, var(--tw-text-opacity));\n\n}\n\n  .about-page .about-page__footer .footer__email-form p.email-form__note svg {\n        width: 8rem;\n\n}\n\n  .dark .about-page .about-page__footer .footer__email-form p.email-form__note svg {\n        --tw-text-opacity: 1;\n        color: rgba(133, 65, 219, var(--tw-text-opacity));\n\n}\n\n  .about-page .about-page__footer .footer__email-form section {\n        display: flex;\n        flex-direction: column;\n\n}\n\n  .about-page .about-page__footer .footer__email-form label {\n        position: absolute;\n        margin-top: 0.75rem;\n        margin-left: 0.75rem;\n        --tw-text-opacity: 1;\n        color: rgba(156, 163, 175, var(--tw-text-opacity));\n\n}\n\n  .about-page .about-page__footer .footer__email-form input[type='email'],  .about-page .about-page__footer .footer__email-form input[type='tel'],  .about-page .about-page__footer .footer__email-form input[type='text'],  .about-page .about-page__footer .footer__email-form textarea {\n        margin-bottom: 0.5rem;\n        border-radius: 0.5rem;\n        border-width: 1px;\n        --tw-border-opacity: 1;\n        border-color: rgba(203, 213, 225, var(--tw-border-opacity));\n        padding: 0.75rem;\n        --tw-text-opacity: 1;\n        color: rgba(0, 0, 0, var(--tw-text-opacity));\n        outline: 2px solid transparent;\n        outline-offset: 2px;\n\n}\n\n  .dark .about-page .about-page__footer .footer__email-form input[type='email'], .dark  .about-page .about-page__footer .footer__email-form input[type='tel'], .dark  .about-page .about-page__footer .footer__email-form input[type='text'], .dark  .about-page .about-page__footer .footer__email-form textarea {\n        border-style: none;\n        --tw-bg-opacity: 1;\n        background-color: rgba(15, 23, 42, var(--tw-bg-opacity));\n        --tw-text-opacity: 1;\n        color: rgba(255, 255, 255, var(--tw-text-opacity));\n\n}\n\n  .about-page .about-page__footer .footer__email-form textarea {\n        resize: none;\n\n}\n\n  .about-page .about-page__footer .footer__email-form .email-form__submit-btn {\n        margin-top: 1.75rem;\n        width: 100%;\n        cursor: pointer;\n        border-radius: 0.75rem;\n        --tw-bg-opacity: 1;\n        background-color: rgba(93, 21, 185, var(--tw-bg-opacity));\n        padding: 1rem;\n        font-size: 1.125rem;\n        line-height: 1.75rem;\n        font-weight: 600;\n        --tw-text-opacity: 1;\n        color: rgba(255, 255, 255, var(--tw-text-opacity));\n        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n\n}\n", "",{"version":3,"sources":["webpack://./src/views/About.pcss"],"names":[],"mappings":"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","sourcesContent":[".about-page {\n  @apply px-3 flex flex-col container mx-auto min-h-screen\n    pb-[5rem];\n\n  .about-page__header {\n    @apply pt-[4rem];\n\n    .header__logo {\n      @apply h-52 w-52;\n    }\n    \n    .header__fr-main {\n      @apply text-3xl font-semibold my-6 text-primary-400;\n      @apply dark:text-white;\n    }\n\n    .header__fr-message, .header__fr-small-message {\n      @apply text-justify dark:text-slate-500;\n    }\n\n    p {\n      @apply mb-4;\n    }\n  }\n\n  .about-page__main {\n\n    .main__gcash-qrcode {\n\n      figcaption {\n        @apply flex flex-col items-center my-8;\n\n        .gcash-qrcode__separator {\n          @apply font-semibold my-2;\n        }\n\n        .gcash-qrcode__mobile {\n          @apply flex w-full border-2 rounded-xl border-primary-100;\n        \n          @apply dark:bg-slate-800;\n\n\n          input {\n            @apply grow outline-none rounded-lg text-center\n              text-lg dark:text-gray-600 font-semibold;\n            \n            @apply bg-transparent dark:text-white;\n          }\n\n          button {\n            @apply rounded-lg p-3 flex justify-center items-center\n              rounded-tl-none rounded-bl-none;\n            \n            @apply bg-primary-200 text-white;\n          }\n        }\n      }\n      \n      aside.qr-modal {\n        @apply fixed h-screen top-0 left-0 flex-col justify-center \n          z-10 bg-gray-700 items-center w-full;\n        \n        img {\n          @apply w-96;\n        }\n      } \n\n      .gcash-qrcode__qr-modal {\n        background-color: #007dfe;\n\n        @apply flex items-center py-2 px-3 w-full\n          justify-center rounded-2xl text-white;\n\n        .qr-modal__logo {\n          @apply w-12 rounded-md;\n        }\n\n        span {\n          @apply ml-3 font-bold;\n        }\n\n      }\n\n    }\n  }\n\n  .about-page__footer {\n\n    .footer__email-form {\n      @apply mt-9 border p-4 rounded-lg shadow-lg bg-primary-200\n        text-white;\n\n      @apply dark:bg-slate-800 dark:border-none;\n\n      .email-form__title {\n        line-height: -2%;\n        @apply text-2xl font-semibold mb-4;\n      }\n\n      p.email-form__message {\n        @apply mb-4 dark:text-slate-400;\n      }\n\n      p.email-form__note {\n        @apply flex border-2 dark:border-primary-400 my-2\n          p-3 rounded-lg dark:text-slate-400 mb-4;\n\n        svg {\n          @apply w-32 dark:text-primary-200;\n        }\n      }\n\n      section {\n        @apply flex flex-col;\n      }\n\n      label {\n        @apply absolute mt-3 ml-3 text-gray-400;\n      }\n\n      input[type='email'], input[type='tel'], input[type='text'], textarea {\n        @apply outline-none border border-slate-300 rounded-lg mb-2\n          p-3 text-black;\n\n        @apply dark:text-white dark:bg-slate-900\n          dark:border-none;\n      }\n\n      textarea {\n        @apply resize-none;\n      }\n\n      .email-form__submit-btn {\n        @apply cursor-pointer w-full p-4 mt-7 bg-primary-400 rounded-xl\n          shadow-lg font-semibold text-white text-lg;\n      }\n    }    \n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/views/Catalog.pcss":
/*!********************************!*\
  !*** ./src/views/Catalog.pcss ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".catalog-page {\n\n      width:\n        100%\n}\n\n@media (min-width: 640px) {\n\n      .catalog-page {\n\n            max-width:\n        640px\n      }\n}\n\n@media (min-width: 768px) {\n\n      .catalog-page {\n\n            max-width:\n        768px\n      }\n}\n\n@media (min-width: 1024px) {\n\n      .catalog-page {\n\n            max-width:\n        1024px\n      }\n}\n\n@media (min-width: 1280px) {\n\n      .catalog-page {\n\n            max-width:\n        1280px\n      }\n}\n\n@media (min-width: 1536px) {\n\n      .catalog-page {\n\n            max-width:\n        1536px\n      }\n}\n\n.catalog-page {\n\n      margin-left:\n        auto;\n\n      margin-right:\n        auto;\n\n      min-height:\n        100vh;\n\n      padding-left:\n        1rem;\n\n      padding-right:\n        1rem\n}\n\n  .catalog-page .catalog-page__header {\n\n      position:\n        fixed;\n\n      left:\n        0px;\n\n      top:\n        0px;\n\n      z-index:\n        40;\n\n      display:\n        flex;\n\n      width:\n        100vw;\n\n      justify-content:\n        space-between;\n\n      --tw-bg-opacity:\n        1;\n\n      background-color:\n        rgba(133, 65, 219, var(--tw-bg-opacity));\n\n      padding:\n        0.75rem;\n\n      --tw-shadow:\n        0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n\n      --tw-shadow-colored:\n        0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n\n      box-shadow:\n        0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n      box-shadow:\n        0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n      box-shadow:\n        var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow)\n}\n\n  .dark .catalog-page .catalog-page__header {\n\n      --tw-bg-opacity:\n        1;\n\n      background-color:\n        rgba(118, 55, 199, var(--tw-bg-opacity))\n}\n\n  .catalog-page .catalog-page__header .header__theme-toggler {\n\n      margin-left:\n        0.5rem;\n\n      display:\n        flex;\n\n      width:\n        3rem;\n\n      flex-shrink:\n        1;\n\n      align-items:\n        center;\n\n      justify-content:\n        center;\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n  .catalog-page .catalog-page__header .header__filter-options {\n\n      margin-right:\n        0.5rem;\n\n      width:\n        3rem;\n\n      flex-shrink:\n        1;\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(133, 65, 219, var(--tw-text-opacity))\n}\n\n  .dark .catalog-page .catalog-page__header .header__filter-options {\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n  .catalog-page .catalog-page__header .header__search-bar {\n\n      display:\n        flex;\n\n      width:\n        100%;\n\n      align-items:\n        center;\n\n      border-radius:\n        1rem;\n\n      --tw-bg-opacity:\n        1;\n\n      background-color:\n        rgba(255, 255, 255, var(--tw-bg-opacity));\n\n      padding-top:\n        0.75rem;\n\n      padding-bottom:\n        0.75rem;\n\n      padding-left:\n        1rem;\n\n      padding-right:\n        1rem\n}\n\n  .dark .catalog-page .catalog-page__header .header__search-bar {\n\n      --tw-bg-opacity:\n        1;\n\n      background-color:\n        rgba(17, 24, 39, var(--tw-bg-opacity));\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n  .catalog-page .catalog-page__header .header__search-bar .search-bar__logo {\n\n      margin-right:\n        1rem;\n\n      display:\n        inline-block;\n\n      flex-grow:\n        0;\n\n      cursor:\n        pointer;\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(133, 65, 219, var(--tw-text-opacity))\n}\n\n  .dark .catalog-page .catalog-page__header .header__search-bar .search-bar__logo {\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n  .catalog-page .catalog-page__header .header__search-bar .search-bar__text-field {\n\n      width:\n        100%;\n\n      flex-grow:\n        1;\n\n      outline:\n        2px solid transparent;\n\n      outline-offset:\n        2px\n}\n\n  .dark .catalog-page .catalog-page__header .header__search-bar .search-bar__text-field {\n\n      --tw-bg-opacity:\n        1;\n\n      background-color:\n        rgba(17, 24, 39, var(--tw-bg-opacity));\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n  .catalog-page .catalog-page__main {\n\n      margin-top:\n        4rem;\n\n      padding-top:\n        1.5rem\n}\n\n  .catalog-page .catalog-page__main .main__love-section .love-section__title-nav {\n\n      display:\n        flex;\n\n      align-items:\n        center\n}\n\n  .catalog-page .catalog-page__main .main__love-section .love-section__title-nav hr:first-child {\n\n      width:\n        1rem;\n\n      flex-grow:\n        0\n}\n\n  .catalog-page .catalog-page__main .main__love-section .love-section__title-nav button {\n\n      margin-left:\n        0.75rem\n}\n\n  .catalog-page .catalog-page__main .main__love-section .love-section__title-nav hr {\n\n      flex-grow:\n        1\n}\n\n  .catalog-page .catalog-page__main .main__love-section .love-section__title-nav .title-nav__section-title {\n\n      margin-left:\n        0.75rem;\n\n      margin-right:\n        0.75rem;\n\n      display:\n        flex;\n\n      align-items:\n        center;\n\n      font-size:\n        1.25rem;\n\n      line-height:\n        1.75rem;\n\n      font-weight:\n        600\n}\n\n  .catalog-page .catalog-page__main .main__love-section .love-section__title-nav .title-nav__section-title svg {\n\n      margin-right:\n        0.5rem\n}\n\n  .catalog-page .catalog-page__main .main__main-section {\n\n      padding-bottom:\n        1rem\n}\n\n  .catalog-page .catalog-page__main .main__main-section .main-section__title-nav {\n\n      display:\n        flex;\n\n      align-items:\n        center\n}\n\n  .catalog-page .catalog-page__main .main__main-section .main-section__title-nav span {\n\n      margin-left:\n        0.5rem\n}\n\n  .catalog-page .catalog-page__main .main__main-section .main-section__title-nav hr:first-child {\n\n      width:\n        1rem;\n\n      flex-grow:\n        0\n}\n\n  .catalog-page .catalog-page__main .main__main-section .main-section__title-nav hr {\n\n      flex-grow:\n        1\n}\n\n  .catalog-page .catalog-page__main .main__main-section .main-section__title-nav .title-nav__section-title {\n\n      margin-left:\n        0.75rem;\n\n      margin-right:\n        0.75rem;\n\n      display:\n        flex;\n\n      font-size:\n        1.25rem;\n\n      line-height:\n        1.75rem;\n\n      font-weight:\n        600\n}\n\n  .catalog-page .catalog-page__main .main__main-section .main-section__title-nav .title-nav__section-title img {\n\n      margin-right:\n        0.5rem\n}\n\n.love-section__data-items {\n\n      overflow-x:\n        auto\n}\n\n.love-section__items {\n\n      margin-top:\n        1.5rem;\n\n      min-width:\n        -webkit-max-content;\n\n      min-width:\n        -moz-max-content;\n\n      min-width:\n        max-content;\n\n      padding-bottom:\n        1.5rem\n}\n\n.love-section__items .items__love-item {\n\n      position:\n        relative;\n\n      margin-right:\n        1rem;\n\n      display:\n        inline-block;\n\n      height:\n        15rem;\n\n      width:\n        24rem;\n\n      cursor:\n        pointer;\n\n      border-radius:\n        0.75rem;\n\n      padding:\n        1rem;\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(255, 255, 255, var(--tw-text-opacity));\n\n      --tw-shadow:\n        0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n\n      --tw-shadow-colored:\n        0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n\n      box-shadow:\n        0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n      box-shadow:\n        0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n      box-shadow:\n        var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow)\n}\n\n.love-section__items .items__love-item .love-item__breed-bg-filter {\n\n      position:\n        absolute;\n\n      top:\n        0px;\n\n      left:\n        0px;\n\n      isolation:\n        isolate;\n\n      height:\n        100%;\n\n      width:\n        100%;\n\n      border-radius:\n        0.75rem;\n\n      --tw-bg-opacity:\n        1;\n\n      background-color:\n        rgba(31, 41, 55, var(--tw-bg-opacity));\n\n      opacity:\n        0.3\n}\n\n.love-section__items .items__love-item .love-item__breed-bg-filter:hover {\n\n      opacity:\n        0\n}\n\n.love-section__items .items__love-item .love-item__breed-name {\n\n      position:\n        relative;\n\n      z-index:\n        20;\n\n      font-size:\n        1.5rem;\n\n      line-height:\n        2rem;\n\n      font-weight:\n        600;\n\n      text-shadow:\n        0.5px  0.5px 0 #000,\n        -0.5px -0.5px 0 #000,  \n          0.5px -0.5px 0 #000,\n        -0.5px  0.5px 0 #000\n}\n\n.love-section__items .items__love-item .love-item__breed-other-names {\n\n      position:\n        relative;\n\n      z-index:\n        20;\n\n      margin-top:\n        0.75rem;\n\n      text-shadow:\n        0.5px  0.5px 0 #000,\n        -0.5px -0.5px 0 #000,  \n          0.5px -0.5px 0 #000,\n        -0.5px  0.5px 0 #000\n}\n\n.main__filters-section {\n\n      position:\n        fixed;\n\n      left:\n        0px;\n\n      z-index:\n        30;\n\n      margin-bottom:\n        0.5rem;\n\n      width:\n        100%;\n\n      padding-left:\n        1rem;\n\n      padding-right:\n        1rem\n}\n\n.main__filters-section .filters-section__form {\n\n      margin-top:\n        0.25rem;\n\n      width:\n        100%;\n\n      flex-direction:\n        column;\n\n      border-radius:\n        0.75rem;\n\n      --tw-bg-opacity:\n        1;\n\n      background-color:\n        rgba(255, 255, 255, var(--tw-bg-opacity));\n\n      padding:\n        0.75rem;\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(0, 0, 0, var(--tw-text-opacity));\n\n      --tw-shadow:\n        0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n\n      --tw-shadow-colored:\n        0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n\n      box-shadow:\n        0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n      box-shadow:\n        0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n      box-shadow:\n        var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow)\n}\n\n.dark .main__filters-section .filters-section__form {\n\n      --tw-bg-opacity:\n        1;\n\n      background-color:\n        rgba(30, 41, 59, var(--tw-bg-opacity));\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.main__filters-section .filters-section__form label {\n\n      margin-top:\n        1rem;\n\n      margin-bottom:\n        0.25rem;\n\n      font-weight:\n        600\n}\n\n.main__filters-section .filters-section__form input,  .main__filters-section .filters-section__form select {\n\n      width:\n        100%;\n\n      border-radius:\n        0.5rem;\n\n      border-width:\n        1px;\n\n      padding:\n        0.75rem;\n\n      font-size:\n        1rem;\n\n      line-height:\n        1.5rem\n}\n\n.dark .main__filters-section .filters-section__form input, .dark  .main__filters-section .filters-section__form select {\n\n      --tw-border-opacity:\n        1;\n\n      border-color:\n        rgba(30, 41, 59, var(--tw-border-opacity));\n\n      --tw-bg-opacity:\n        1;\n\n      background-color:\n        rgba(51, 65, 85, var(--tw-bg-opacity))\n}\n\n.main-section__items {\n\n      margin-top:\n        1.5rem\n}\n\n.main-section__items .items__item {\n\n      margin-bottom:\n        1.25rem;\n\n      margin-top:\n        0.5rem;\n\n      border-radius:\n        0.5rem;\n\n      border-width:\n        1px;\n\n      --tw-shadow:\n        0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n\n      --tw-shadow-colored:\n        0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n\n      box-shadow:\n        0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n      box-shadow:\n        0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\n      box-shadow:\n        var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow)\n}\n\n.dark .main-section__items .items__item {\n\n      --tw-border-opacity:\n        1;\n\n      border-color:\n        rgba(15, 23, 42, var(--tw-border-opacity));\n\n      --tw-bg-opacity:\n        1;\n\n      background-color:\n        rgba(30, 41, 59, var(--tw-bg-opacity))\n}\n\n.main-section__items .items__item .item__breed-info {\n\n      display:\n        flex;\n\n      flex-wrap:\n        wrap\n}\n\n.main-section__items .items__item .breed-info__image {\n\n      height:\n        100%;\n\n      max-width:\n        100%;\n\n      flex:\n        1 1 0%;\n\n      cursor:\n        pointer;\n\n      border-top-left-radius:\n        0.5rem;\n\n      border-top-right-radius:\n        0.5rem;\n\n      -o-object-fit:\n        cover;\n\n         object-fit:\n        cover\n}\n\n@media (min-width: 1024px) {\n\n      .main-section__items .items__item .breed-info__image {\n\n            width:\n        4rem\n      }\n}\n\n@media (min-width: 1280px) {\n\n      .main-section__items .items__item .breed-info__image {\n\n            width:\n        4rem;\n\n            border-top-right-radius:\n        0px;\n\n            border-bottom-left-radius:\n        0.5rem\n      }\n}\n\n.main-section__items .items__item figcaption.breed-info__details {\n\n      margin-left:\n        1rem;\n\n      margin-right:\n        1rem;\n\n      margin-bottom:\n        1rem;\n\n      margin-top:\n        0.5rem;\n\n      flex:\n        1 1 0%;\n\n      flex-grow:\n        1\n}\n\n.main-section__items .items__item figcaption.breed-info__details hr {\n\n      isolation:\n        isolate;\n\n      width:\n        100%\n}\n\n.main-section__items .items__item figcaption.breed-info__details .details__breed-name {\n\n      cursor:\n        pointer;\n\n      font-size:\n        1.25rem;\n\n      line-height:\n        1.75rem;\n\n      font-weight:\n        700\n}\n\n.main-section__items .items__item figcaption.breed-info__details .details__breed-type {\n\n      margin-bottom:\n        0.75rem;\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(55, 65, 81, var(--tw-text-opacity))\n}\n\n.dark .main-section__items .items__item figcaption.breed-info__details .details__breed-type {\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(107, 114, 128, var(--tw-text-opacity))\n}\n\n.main-section__items .items__item figcaption.breed-info__details .details__breed-other-names {\n\n      margin-bottom:\n        0.25rem;\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(31, 41, 55, var(--tw-text-opacity))\n}\n\n.dark .main-section__items .items__item figcaption.breed-info__details .details__breed-other-names {\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(148, 163, 184, var(--tw-text-opacity))\n}\n\n.main-section__items .items__item figcaption.breed-info__details hr {\n\n      margin-top:\n        0.5rem;\n\n      margin-bottom:\n        0.5rem\n}\n\n.main-section__items .items__item figcaption.breed-info__details .details__breed-other-names {\n\n      display:\n        flex\n}\n\n.main-section__items .items__item .details__breed-infos li {\n\n      margin-bottom:\n        0.25rem\n}\n\n.main-section__items .items__item .details__breed-infos li:last-child {\n\n      margin-bottom:\n        0px\n}\n\n.main-section__items .items__item .details__breed-infos .breed-infos__origins {\n\n      display:\n        flex;\n\n      align-items:\n        center\n}\n\n.main-section__items .items__item .details__breed-infos .breed-infos__origins .origins__names {\n\n      margin-left:\n        0.5rem\n}\n\n.main-section__items .items__item .details__breed-infos .breed-infos__count-images {\n\n      display:\n        flex;\n\n      align-items:\n        center\n}\n\n.main-section__items .items__item .details__breed-infos .breed-infos__count-images .images__message {\n\n      margin-left:\n        0.5rem\n}\n\n.main-section__items .items__item .details__breed-infos .breed-infos__breed-id {\n\n      margin-top:\n        1.25rem;\n\n      font-size:\n        0.875rem;\n\n      line-height:\n        1.25rem;\n\n      --tw-text-opacity:\n        1;\n\n      color:\n        rgba(107, 114, 128, var(--tw-text-opacity))\n}\n\n.main-section__items .items__item .details__breed-infos .breed-infos__breed-id .breed-id__value {\n\n      margin-left:\n        0.5rem\n}\n\n.main-section__controls {\n\n      margin-top:\n        0.75rem;\n\n      margin-bottom:\n        0.75rem;\n\n      display:\n        flex;\n\n      justify-content:\n        flex-end\n}\n\n.main-section__controls .controls__reload-data {\n\n      display:\n        inline-flex;\n\n      align-items:\n        center\n}\n\n.main-section__controls .controls__reload-data span {\n\n      margin-left:\n        0.5rem;\n\n      margin-right:\n        0.5rem;\n\n      display:\n        inline-block\n}\n\n.main-section__paginate {\n\n      display:\n        flex;\n\n      width:\n        100%;\n\n      justify-content:\n        space-between\n}\n\n.main-section__paginate .paginate__page-nav {\n\n      border-radius:\n        0.5rem;\n\n      padding:\n        0.5rem\n}\n\n.dark .main-section__paginate .paginate__page-nav {\n\n      --tw-bg-opacity:\n        1;\n\n      background-color:\n        rgba(30, 41, 59, var(--tw-bg-opacity))\n}\n\n.youtube-embed__wrapper {\n\n      margin-bottom:\n        0.75rem\n}\n\n.youtube-embed__wrapper iframe {\n\n      height:\n        18rem;\n\n      width:\n        100%\n}\n", "",{"version":3,"sources":["webpack://./src/views/Catalog.pcss"],"names":[],"mappings":"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","sourcesContent":[".catalog-page {\n\n  @apply container mx-auto px-4 min-h-screen;\n\n  .catalog-page__header {\n    @apply fixed flex bg-primary-200 w-screen left-0 top-0 z-40\n      shadow-lg p-3 justify-between;\n\n    @apply dark:bg-primary-300;\n\n    .header__theme-toggler {\n      @apply flex-shrink w-12 flex items-center ml-2 justify-center text-white;\n    }\n\n    .header__filter-options {\n      @apply flex-shrink w-12 mr-2 text-primary-200;\n      @apply dark:text-white;\n    }\n\n    .header__search-bar {\n      @apply flex bg-white py-3 px-4 rounded-2xl\n        items-center w-full;\n\n      @apply dark:bg-gray-900 dark:text-white;\n\n      .search-bar__logo {\n        @apply inline-block cursor-pointer mr-4 grow-0\n          text-primary-200;\n\n        @apply dark:text-white;\n      }\n\n      .search-bar__text-field {\n        @apply grow outline-none w-full;\n\n        @apply dark:text-white dark:bg-gray-900;\n      }\n\n    }\n  }\n\n  .catalog-page__main {\n    @apply mt-16 pt-6;\n\n    .main__love-section {\n\n      .love-section__title-nav {\n        @apply flex items-center;\n\n        hr:first-child {\n          @apply grow-0 w-4;\n        }\n\n        button {\n          @apply ml-3;\n        }\n\n        hr {\n          @apply grow;\n        }\n\n        .title-nav__section-title {\n          @apply text-xl font-semibold flex items-center mx-3;\n\n          svg {\n            @apply mr-2;\n          }\n        }\n      }\n    }\n\n    .main__main-section {\n      @apply pb-4;\n\n      .main-section__title-nav {\n        @apply flex items-center;\n        \n        span {\n          @apply ml-2;\n        }\n\n        hr:first-child {\n          @apply grow-0 w-4;\n        }\n\n        hr {\n          @apply grow;\n        }\n       \n        .title-nav__section-title {\n          @apply text-xl font-semibold flex mx-3;\n\n          img {\n            @apply mr-2;\n          }\n        }\n      }\n    }\n  }\n}\n\n.love-section__data-items {\n  @apply overflow-x-auto;  \n}\n\n.love-section__items {\n  @apply min-w-max pb-6 mt-6;\n\n  .items__love-item {\n    @apply relative cursor-pointer inline-block w-96 mr-4 h-60\n      text-white p-4 rounded-xl shadow-lg;\n\n    .love-item__breed-bg-filter {\n      @apply w-full h-full bg-gray-800 isolate\n        absolute top-0 left-0 opacity-30 rounded-xl\n        hover:opacity-0;\n    }\n\n    .love-item__breed-name {\n      @apply relative text-2xl z-20 font-semibold;\n\n      text-shadow:\n        0.5px  0.5px 0 #000,\n        -0.5px -0.5px 0 #000,  \n          0.5px -0.5px 0 #000,\n        -0.5px  0.5px 0 #000;\n    }\n\n    .love-item__breed-other-names {\n      @apply relative mt-3 z-20;\n\n      text-shadow:\n        0.5px  0.5px 0 #000,\n        -0.5px -0.5px 0 #000,  \n          0.5px -0.5px 0 #000,\n        -0.5px  0.5px 0 #000;\n    }\n  }\n}\n\n.main__filters-section {\n  @apply mb-2 fixed left-0 w-full px-4 z-30;\n\n  .filters-section__form {\n    @apply w-full shadow-lg rounded-xl p-3 mt-1 \n      flex-col bg-white text-black;\n\n    @apply dark:bg-slate-800 dark:text-white;\n\n    label {\n      @apply mt-4 mb-1 font-semibold;\n    }\n\n    input, select {\n      @apply text-base p-3 rounded-lg border w-full;\n      \n      @apply dark:bg-slate-700 dark:border-slate-800;\n    }\n  }\n\n}\n\n.main-section__items {\n  @apply mt-6;\n\n  .items__item {\n    @apply mb-5 mt-2 border shadow-lg\n      rounded-lg;\n\n    @apply dark:bg-slate-800 dark:border-slate-900;\n\n    .item__breed-info {\n      @apply flex flex-wrap;\n    }\n\n    .breed-info__image {\n      @apply cursor-pointer flex-1\n        object-cover rounded-tl-lg rounded-tr-lg\n        xl:rounded-tr-none xl:rounded-bl-lg\n        xl:w-16 lg:w-16 h-full max-w-full;\n    }\n    \n    figcaption.breed-info__details {  \n      @apply grow flex-1 mx-4 my-4 mt-2;\n      \n      hr {\n        @apply isolate w-full;\n      }\n\n      .details__breed-name {\n        @apply cursor-pointer text-xl font-bold;\n      }\n\n      .details__breed-type {\n        @apply text-gray-700 mb-3;\n        @apply dark:text-gray-500;\n      }\n\n      .details__breed-other-names {\n        @apply text-gray-800 mb-1;\n        @apply dark:text-slate-400;\n      }\n\n      hr {\n        @apply my-2;\n      }\n\n      .details__breed-other-names {\n        @apply flex;\n      }\n\n    }\n\n    .details__breed-infos {\n\n      li {\n        @apply mb-1;\n      }\n\n      li:last-child {\n        @apply mb-0;\n      }\n\n      .breed-infos__origins {\n        @apply flex items-center;\n\n        .origins__names {\n          @apply ml-2;\n        }\n      }\n\n      .breed-infos__count-images {\n        @apply flex items-center;\n\n        .images__message {\n          @apply ml-2;\n        }\n      }\n\n      .breed-infos__breed-id {\n        @apply mt-5 text-sm text-gray-500;\n\n        .breed-id__value {\n          @apply ml-2;\n        }\n      }\n    }\n  }\n\n}\n\n.main-section__controls {\n  @apply flex justify-end my-3;\n\n  .controls__reload-data {\n    @apply inline-flex items-center;\n\n    span {\n      @apply inline-block mx-2;\n    }\n  }\n}\n\n.main-section__paginate {\n  @apply flex w-full justify-between;\n\n  .paginate__page-nav {\n    @apply p-2 rounded-lg dark:bg-slate-800;\n  }\n}\n\n.youtube-embed__wrapper {\n  @apply mb-3;\n  iframe {\n    @apply w-full h-72;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/views/Home.pcss":
/*!*****************************!*\
  !*** ./src/views/Home.pcss ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".home-page__videoplayback {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100vh;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media (min-width: 1024px) {\n\n  .home-page__videoplayback {\n    -o-object-position: top;\n       object-position: top;\n  }\n}\n\n.home-page__videoplayback-filter {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100vh;\n  width: 100%;\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n  opacity: 0.7;\n}\n\n.dark .home-page p {\n  --tw-text-opacity: 1;\n  color: rgba(100, 116, 139, var(--tw-text-opacity));\n}\n\n.home-page {\n  width: 100%;\n}\n\n@media (min-width: 640px) {\n\n  .home-page {\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .home-page {\n    max-width: 768px;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .home-page {\n    max-width: 1024px;\n  }\n}\n\n@media (min-width: 1280px) {\n\n  .home-page {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1536px) {\n\n  .home-page {\n    max-width: 1536px;\n  }\n}\n\n.home-page {\n  position: relative;\n  z-index: 20;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.home-page .home-page__header .header__breedfind-logo {\n  margin-top: 2.5rem;\n  margin-bottom: 1.5rem;\n  height: 12rem;\n  width: 12rem;\n}\n\n.home-page .home-page__main {\n  margin-bottom: 1.5rem;\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n\n.home-page .home-page__main .main__message-wrapper {\n  flex-grow: 1;\n}\n\n.home-page .home-page__main .main__welcome-title {\n  margin-bottom: 2rem;\n  font-size: 3rem;\n  font-weight: 600;\n}\n\n.home-page .home-page__main .main__welcome-message {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 300;\n}\n\n.home-page .home-page__main .main__welcome-message span {\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgba(148, 93, 218, var(--tw-text-opacity));\n}\n\n.home-page .home-page__main .main__data-sources .data-sources__desc {\n  display: flex;\n  align-items: center;\n}\n\n.home-page .home-page__main .main__data-sources .data-sources__desc .desc__bullet::before {\n          font-size: 2.5rem;\n          content: ' • ';\n        }\n\n.home-page .home-page__main .main__data-sources .data-sources__desc span:last-child {\n  margin-left: 0.25rem;\n}\n\n.home-page .home-page__main .main__data-sources .data-sources__desc span:last-child a {\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgba(148, 93, 218, var(--tw-text-opacity));\n}\n\n.home-page .home-page__footer {\n  margin-bottom: 2.5rem;\n}\n\n.home-page .home-page__footer .footer__start-button {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(133, 65, 219, var(--tw-bg-opacity));\n  padding: 1.75rem;\n}\n\n.home-page .home-page__footer .footer__start-button span {\n  margin-left: 0.5rem;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n}\n", "",{"version":3,"sources":["webpack://./src/views/Home.pcss"],"names":[],"mappings":"AACE;EAAA,kBAAuE;EAAvE,QAAuE;EAAvE,SAAuE;EAAvE,aAAuE;EAAvE,WAAuE;EAAvE,oBAAuE;KAAvE;AAAuE;;AAAvE;;EAAA;IAAA,uBAAuE;OAAvE;EAAuE;AAAA;;AAIvE;EAAA,kBAAgE;EAAhE,QAAgE;EAAhE,SAAgE;EAAhE,aAAgE;EAAhE,WAAgE;EAAhE,kBAAgE;EAAhE,qDAAgE;EAAhE;AAAgE;;AAM9D;EAAA,oBAA0B;EAA1B;AAA0B;;AAG5B;EAAA;AACiB;;AADjB;;EAAA;IAAA;EACiB;AAAA;;AADjB;;EAAA;IAAA;EACiB;AAAA;;AADjB;;EAAA;IAAA;EACiB;AAAA;;AADjB;;EAAA;IAAA;EACiB;AAAA;;AADjB;;EAAA;IAAA;EACiB;AAAA;;AADjB;EAAA,kBACiB;EADjB,WACiB;EADjB,iBACiB;EADjB,kBACiB;EADjB,aACiB;EADjB,aACiB;EADjB,sBACiB;EADjB,uBACiB;EADjB,qBACiB;EADjB,sBACiB;EADjB,oBACiB;EADjB;AACiB;;AAIb;EAAA,kBAA2B;EAA3B,qBAA2B;EAA3B,aAA2B;EAA3B;AAA2B;;AAK7B;EAAA,qBAAkD;EAAlD,aAAkD;EAAlD,YAAkD;EAAlD,sBAAkD;EAAlD,uBAAkD;EAAlD,qBAAkD;EAAlD;AAAkD;;AAGhD;EAAA;AAAW;;AAIX;EAAA,mBAAqC;EAArC,eAAqC;EAArC;AAAqC;;AAIrC;EAAA,mBAAyB;EAAzB,oBAAyB;EAAzB;AAAyB;;AAGvB;EAAA,gBAAiC;EAAjC,oBAAiC;EAAjC;AAAiC;;AAMjC;EAAA,aAAwB;EAAxB;AAAwB;;AAExB;UACE,iBAAiB;UACjB,cAAc;QAChB;;AAGE;EAAA;AAAW;;AAGT;EAAA,gBAAiC;EAAjC,oBAAiC;EAAjC;AAAiC;;AAQzC;EAAA;AAAY;;AAEV;EAAA,aAC0B;EAD1B,WAC0B;EAD1B,mBAC0B;EAD1B,uBAC0B;EAD1B,qBAC0B;EAD1B,kBAC0B;EAD1B,0DAC0B;EAD1B;AAC0B;;AAGxB;EAAA,mBAAiC;EAAjC,kBAAiC;EAAjC,oBAAiC;EAAjC;AAAiC","sourcesContent":[".home-page__videoplayback {\n  @apply absolute h-screen w-full lg:object-top object-cover top-0 left-0;\n}\n\n.home-page__videoplayback-filter {\n  @apply absolute h-screen w-full top-0 left-0 bg-black opacity-70;\n}\n\n.home-page {\n\n  p {\n    @apply dark:text-slate-500;\n  }\n\n  @apply relative z-20 container mx-auto h-screen flex flex-col justify-center\n    px-5 text-white;\n\n  .home-page__header {\n    .header__breedfind-logo {\n      @apply h-48 w-48 mt-10 mb-6;\n    }\n  }\n\n  .home-page__main {\n    @apply grow flex flex-col justify-center px-1 mb-6;\n\n    .main__message-wrapper {\n      @apply grow;\n    }\n\n    .main__welcome-title {\n      @apply text-[3rem] mb-8 font-semibold;\n    }\n\n    .main__welcome-message {\n      @apply text-lg font-light;\n      \n      span {\n        @apply font-bold text-primary-100;\n      }\n    }\n\n    .main__data-sources {\n      .data-sources__desc {\n        @apply flex items-center;\n\n        .desc__bullet::before {\n          font-size: 2.5rem;\n          content: ' • ';\n        }\n\n        span:last-child {\n          @apply ml-1;\n\n          a {\n            @apply font-bold text-primary-100;\n          }\n        }\n      }\n    }\n  }\n\n  .home-page__footer {\n    @apply mb-10;\n    .footer__start-button {\n      @apply flex justify-center w-full p-7 bg-primary-200\n        rounded-3xl items-center;\n\n      span {\n        @apply ml-2 text-xl font-semibold;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/views/Info.pcss":
/*!*****************************!*\
  !*** ./src/views/Info.pcss ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".info-page {\n          width: 100%;\n}\n\n@media (min-width: 640px) {\n\n          .info-page {\n                    max-width: 640px;\n          }\n}\n\n@media (min-width: 768px) {\n\n          .info-page {\n                    max-width: 768px;\n          }\n}\n\n@media (min-width: 1024px) {\n\n          .info-page {\n                    max-width: 1024px;\n          }\n}\n\n@media (min-width: 1280px) {\n\n          .info-page {\n                    max-width: 1280px;\n          }\n}\n\n@media (min-width: 1536px) {\n\n          .info-page {\n                    max-width: 1536px;\n          }\n}\n\n.info-page {\n          margin-left: auto;\n          margin-right: auto;\n          min-height: 100vh;\n}\n\n  .dark .info-page p {\n          --tw-text-opacity: 1;\n          color: rgba(100, 116, 139, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__header {\n          position: relative;\n}\n\n  .info-page .info-page__header .info-page__breed-image {\n          height: 18rem;\n          width: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n}\n\n  .info-page .info-page__header .info-page__breed-image-filter {\n          position: absolute;\n          top: 0px;\n          height: 18rem;\n          width: 100%;\n          --tw-bg-opacity: 1;\n          background-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n          opacity: 0.4;\n}\n\n  .info-page .info-page__header .info-page__main-nav {\n          position: absolute;\n          top: 0px;\n          z-index: 10;\n          word-wrap: break-word;\n          padding: 1rem;\n          --tw-text-opacity: 1;\n          color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__header .info-page__main-nav .main-nav__heading {\n          display: flex;\n          align-items: flex-start;\n}\n\n  .info-page .info-page__header .info-page__main-nav .main-nav__heading .info-nav__wrapper {\n          padding-left: 1rem;\n}\n\n  .info-page .info-page__header .info-page__main-nav .info-nav__title {\n          font-size: 1.875rem;\n          line-height: 2.25rem;\n          font-weight: 600;\n}\n\n  .info-page .info-page__header .info-page__main-nav .info-nav__breed-other-names {\n          width: 100%;\n          --tw-text-opacity: 1;\n          color: rgba(209, 213, 219, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__header .info-page__modal-nav {\n          position: absolute;\n          right: 0px;\n          bottom: -1px;\n          z-index: 10;\n          --tw-text-opacity: 1;\n          color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__header .info-page__modal-nav p {\n          --tw-text-opacity: 1;\n          color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__header .info-page__modal-nav .modal-nav__view-button {\n          margin-bottom: 0.75rem;\n          margin-right: 0.75rem;\n          border-radius: 9999px;\n          --tw-bg-opacity: 1;\n          background-color: rgba(118, 55, 199, var(--tw-bg-opacity));\n          padding: 1.25rem;\n          --tw-text-opacity: 1;\n          color: rgba(255, 255, 255, var(--tw-text-opacity));\n          --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n          --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n          box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n          box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n\n  .info-page .info-page__main {\n          padding-left: 0.75rem;\n          padding-right: 0.75rem;\n}\n\n  .info-page .info-page__main .main__share-button {\n          position: absolute;\n          right: 0px;\n          margin-right: 0.25rem;\n          padding: 0.75rem;\n          --tw-text-opacity: 1;\n          color: rgba(118, 55, 199, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__main .main__top-content .top-content__breed-groups {\n          margin-top: 0.5rem;\n          display: flex;\n          font-size: 1.125rem;\n          line-height: 1.75rem;\n          --tw-text-opacity: 1;\n          color: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__main .main__top-content .top-content__breed-groups .breed-groups__item {\n          margin-right: 0.5rem;\n          font-weight: 600;\n          --tw-text-opacity: 1;\n          color: rgba(118, 55, 199, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__main .main__top-content .top-content__breed-type {\n          --tw-text-opacity: 1;\n          color: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__main .main__top-content .top-content__breed-temperaments-title {\n          margin-top: 1rem;\n          margin-bottom: 0.75rem;\n          font-size: 1.25rem;\n          line-height: 1.75rem;\n          font-weight: 700;\n}\n\n  .info-page .info-page__main .main__top-content hr {\n          margin-bottom: 0.5rem;\n}\n\n  .info-page .info-page__main .main__top-content .top-content__breed-temperaments {\n          display: flex;\n          flex-wrap: wrap;\n}\n\n  .info-page .info-page__main .main__top-content .top-content__breed-temperaments .temperaments__item {\n          margin-right: 0.5rem;\n          margin-bottom: 0.5rem;\n          border-radius: 0.75rem;\n          --tw-bg-opacity: 1;\n          background-color: rgba(133, 65, 219, var(--tw-bg-opacity));\n          padding-left: 1rem;\n          padding-right: 1rem;\n          padding-top: 0.5rem;\n          padding-bottom: 0.5rem;\n          font-size: 0.875rem;\n          line-height: 1.25rem;\n          font-weight: 600;\n          --tw-text-opacity: 1;\n          color: rgba(255, 255, 255, var(--tw-text-opacity));\n          --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n          --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n          box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n          box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n\n  .info-page .info-page__main .main__breed-history {\n          margin-bottom: 2rem;\n}\n\n  .info-page .info-page__main .main__breed-history .breed-history__title {\n          margin-top: 1rem;\n          margin-bottom: 1rem;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          font-size: 1.25rem;\n          line-height: 1.75rem;\n          font-weight: 700;\n}\n\n  .info-page .info-page__main .main__breed-history .breed-history__content.less {\n          height: 11rem;\n          overflow: hidden;\n          text-overflow: ellipsis;\n}\n\n  .info-page .info-page__main .main__breed-history hr {\n          margin-top: 0.25rem;\n          margin-bottom: 0.25rem;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__fci-doc {\n          margin-top: 1rem;\n          margin-bottom: 1rem;\n          display: flex;\n          align-items: flex-start;\n          border-radius: 0.5rem;\n          border-width: 1px;\n          padding: 1rem;\n          --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n          --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n          box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n          box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n\n  .dark .info-page .info-page__main .main__bottom-content .bottom-content__fci-doc {\n          --tw-border-opacity: 1;\n          border-color: rgba(30, 41, 59, var(--tw-border-opacity));\n          --tw-bg-opacity: 1;\n          background-color: rgba(30, 41, 59, var(--tw-bg-opacity));\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__fci-doc img {\n          height: 100%;\n          width: 100%;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__fci-doc .fci-doc__logo-wrapper {\n          margin-right: 1rem;\n          width: 8rem;\n          flex-grow: 1;\n          padding: 0.25rem;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__fci-doc .fci-doc__content-wrapper {\n          word-break: break-all;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__fci-doc .fci-doc__content-wrapper .content-wrapper__title {\n          margin-bottom: 0.75rem;\n          font-size: 1.125rem;\n          line-height: 1.75rem;\n          font-weight: 600;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__fci-doc .fci-doc__content-wrapper .content-wrapper__info {\n          --tw-text-opacity: 1;\n          color: rgba(29, 78, 216, var(--tw-text-opacity));\n}\n\n  .dark .info-page .info-page__main .main__bottom-content .bottom-content__fci-doc .fci-doc__content-wrapper .content-wrapper__info {\n          --tw-text-opacity: 1;\n          color: rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes-title {\n          margin-bottom: 0.75rem;\n          font-size: 1.25rem;\n          line-height: 1.75rem;\n          font-weight: 600;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes {\n          margin-top: 0.25rem;\n          display: flex;\n          align-items: flex-end;\n          justify-content: center;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item {\n          display: flex;\n          flex-grow: 1;\n          flex-direction: column;\n          align-items: center;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item label {\n          font-size: 1rem;\n          line-height: 1.5rem;\n          font-weight: 600;\n          --tw-text-opacity: 1;\n          color: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n  .dark .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item label {\n          --tw-text-opacity: 1;\n          color: rgba(229, 231, 235, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item div {\n          display: flex;\n          align-items: flex-end;\n          justify-content: center;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item label.contains-size {\n          --tw-text-opacity: 1;\n          color: rgba(118, 55, 199, var(--tw-text-opacity));\n}\n\n  .dark .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item label.contains-size {\n          --tw-text-opacity: 1;\n          color: rgba(148, 93, 218, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__smallest-size {\n          width: 100%;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__smallest-size img {\n          height: 3rem;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__small-size img {\n          height: 4rem;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__medium-size img {\n          height: 5rem;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__large-size img {\n          height: 6rem;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__giant-size img {\n          height: 7rem;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__stats-title {\n          margin-top: 0.5rem;\n          margin-bottom: 0.5rem;\n          display: flex;\n          align-items: center;\n          font-size: 1.25rem;\n          line-height: 1.75rem;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__stats-title span {\n          margin-left: 0.5rem;\n          font-weight: 600;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__stats,  .info-page .info-page__main .main__bottom-content .bottom-content__chars {\n          margin-bottom: 2rem;\n          width: 100%;\n          table-layout: fixed;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__stats td,  .info-page .info-page__main .main__bottom-content .bottom-content__stats th,  .info-page .info-page__main .main__bottom-content .bottom-content__chars td,  .info-page .info-page__main .main__bottom-content .bottom-content__chars th {\n          border-width: 1px;\n          padding: 0.5rem;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__stats th,  .info-page .info-page__main .main__bottom-content .bottom-content__chars th {\n          text-align: left;\n          font-weight: 600;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__stats caption,  .info-page .info-page__main .main__bottom-content .bottom-content__chars caption {\n          font-size: 0.875rem;\n          line-height: 1.25rem;\n          --tw-text-opacity: 1;\n          color: rgba(107, 114, 128, var(--tw-text-opacity));\n          caption-side: bottom;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__chars .item__value svg {\n          float: left;\n          --tw-text-opacity: 1;\n          color: rgba(250, 204, 21, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__chars .item__value span {\n          margin-left: 0.25rem;\n          font-size: 0.875rem;\n          line-height: 1.25rem;\n          --tw-text-opacity: 1;\n          color: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__breed-colors-title {\n          margin-top: 1rem;\n          margin-bottom: 0.75rem;\n          font-size: 1.25rem;\n          line-height: 1.75rem;\n          font-weight: 700;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__breed-colors li:first-child {\n          border-top-width: 1px;\n        }\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__breed-colors li {\n          border-bottom-width: 1px;\n          padding-top: 0.5rem;\n          padding-bottom: 0.5rem;\n}\n\n  .dark .info-page .info-page__main .main__bottom-content .bottom-content__breed-colors li {\n          --tw-border-opacity: 1;\n          border-color: rgba(51, 65, 85, var(--tw-border-opacity));\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__breed-similars-title {\n          margin-top: 1rem;\n          margin-bottom: 1rem;\n          font-size: 1.25rem;\n          line-height: 1.75rem;\n          font-weight: 700;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__breed-similars {\n          position: relative;\n          display: flex;\n          flex-wrap: wrap;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__breed-similars .breed-similars__item {\n          position: relative;\n          margin-top: 0.25rem;\n          display: flex;\n          height: 15rem;\n          width: 50%;\n          flex: 1 1 0%;\n          flex-direction: column;\n          flex-wrap: wrap;\n          border-radius: 0.5rem;\n          padding-left: 0.5rem;\n          padding-right: 0.5rem;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__breed-similars .breed-similars__item .item__wrapper {\n          position: relative;\n          width: 100%;\n          flex-grow: 1;\n          cursor: pointer;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__breed-similars .breed-similars__item .item__image {\n          position: absolute;\n          height: 100%;\n          width: 100%;\n          border-radius: 0.5rem;\n          -o-object-fit: cover;\n             object-fit: cover;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__breed-similars .breed-similars__item .item__name {\n          position: relative;\n          margin: 0.75rem;\n          word-wrap: break-word;\n          font-size: 1.5rem;\n          line-height: 2rem;\n          font-weight: 700;\n          --tw-text-opacity: 1;\n          color: rgba(255, 255, 255, var(--tw-text-opacity));\n\n            text-shadow: \n              0.5px  0.5px 0 #000,\n              -0.5px -0.5px 0 #000,  \n                0.5px -0.5px 0 #000,\n              -0.5px  0.5px 0 #000;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__breed-similars .breed-similars__item .item__lifespan {\n          margin-top: 0.25rem;\n          flex-shrink: 1;\n          flex-grow: 0;\n          --tw-text-opacity: 1;\n          color: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__misc .misc__heading {\n          margin-top: 1rem;\n          margin-bottom: 1rem;\n          font-size: 1.25rem;\n          line-height: 1.75rem;\n          font-weight: 700;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__misc .misc__refs .refs__item span::before {\n          position: absolute;\n            content: '•';\n            font-size: 2.5rem;\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__misc .misc__refs .refs__item {\n          margin-bottom: 0.25rem;\n          font-size: 1rem;\n          line-height: 1.5rem;\n          --tw-text-opacity: 1;\n          color: rgba(37, 99, 235, var(--tw-text-opacity));\n}\n\n  .dark .info-page .info-page__main .main__bottom-content .bottom-content__misc .misc__refs .refs__item {\n          --tw-text-opacity: 1;\n          color: rgba(96, 165, 250, var(--tw-text-opacity));\n}\n\n  .info-page .info-page__main .main__bottom-content .bottom-content__misc .misc__refs .refs__item a {\n          margin-left: 1.25rem;\n}\n\n  .info-page .info-page__footer {\n          left: 0px;\n          bottom: 0px;\n          display: flex;\n          width: 100%;\n          justify-content: center;\n          padding: 2rem;\n}\n\n  .info-page .info-page__footer .footer__love-button {\n          display: flex;\n          width: 20rem;\n          align-items: center;\n          justify-content: center;\n          border-radius: 1.5rem;\n          --tw-bg-opacity: 1;\n          background-color: rgba(225, 29, 72, var(--tw-bg-opacity));\n          padding: 1.25rem;\n          padding-left: 4rem;\n          padding-right: 4rem;\n          font-size: 1.125rem;\n          line-height: 1.75rem;\n          font-weight: 700;\n          --tw-text-opacity: 1;\n          color: rgba(255, 255, 255, var(--tw-text-opacity));\n          --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n          --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n          box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n          box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n\n  .info-page .info-page__footer .footer__love-button span {\n          margin-left: 0.5rem;\n}\n\n.modal-nav__modal {\n          position: fixed;\n          top: 0px;\n          left: 0px;\n          isolation: isolate;\n          height: 100vh;\n          width: 100vw;\n          background-color: rgba(31, 41, 55, 0.8);\n          --tw-text-opacity: 1;\n          color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.modal-nav__modal .nav__image-container {\n          position: absolute;\n          display: flex;\n          height: 100%;\n          align-items: center;\n}\n\n.modal-nav__modal .nav__image-container .image-container__breed-image {\n          padding-left: 1.25rem;\n          padding-right: 1.25rem;\n}\n\n.modal-nav__modal .modal__nav {\n          display: flex;\n          height: 100%;\n          flex-direction: column;\n}\n\n.modal-nav__modal .modal__nav .nav__paginate-controls {\n          z-index: 20;\n          display: flex;\n          flex-direction: column;\n          align-items: flex-end;\n          padding: 1rem;\n}\n\n.modal-nav__modal .modal__nav .nav__paginate-controls aside.paginate-controls__note {\n          margin-top: 1.25rem;\n          border-radius: 0.5rem;\n          --tw-bg-opacity: 1;\n          background-color: rgba(118, 55, 199, var(--tw-bg-opacity));\n          padding: 1rem;\n          font-size: 0.75rem;\n          line-height: 1rem;\n          --tw-text-opacity: 1;\n          color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.modal-nav__modal .modal__nav .nav__close-modal {\n          z-index: 10;\n}\n\n.modal-nav__modal .modal__nav .nav__paginate-controls-2 {\n          position: absolute;\n          z-index: 10;\n          display: flex;\n          height: 100vh;\n          width: 100%;\n          flex-grow: 1;\n          align-items: center;\n          justify-content: space-between;\n}\n\n.modal-nav__modal .modal__nav .nav__paginate-controls-2 .nav__left-button {\n\n        }\n\n.modal-nav__modal .modal__nav .nav__paginate-controls-2 .nav__right-button {\n\n        }\n\n.youtube-embed__wrapper {\n          border-radius: 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/views/Info.pcss"],"names":[],"mappings":"AACE;UAAA;AAAqC;;AAArC;;UAAA;oBAAA;UAAqC;AAAA;;AAArC;;UAAA;oBAAA;UAAqC;AAAA;;AAArC;;UAAA;oBAAA;UAAqC;AAAA;;AAArC;;UAAA;oBAAA;UAAqC;AAAA;;AAArC;;UAAA;oBAAA;UAAqC;AAAA;;AAArC;UAAA,iBAAqC;UAArC,kBAAqC;UAArC;AAAqC;;EAGnC;UAAA,oBAA0B;UAA1B;AAA0B;;EAI1B;UAAA;AAAe;;EAGb;UAAA,aAA+B;UAA/B,WAA+B;UAA/B,oBAA+B;aAA/B;AAA+B;;EAI/B;UAAA,kBAAqD;UAArD,QAAqD;UAArD,aAAqD;UAArD,WAAqD;UAArD,kBAAqD;UAArD,qDAAqD;UAArD;AAAqD;;EAIrD;UAAA,kBAC4B;UAD5B,QAC4B;UAD5B,WAC4B;UAD5B,qBAC4B;UAD5B,aAC4B;UAD5B,oBAC4B;UAD5B;AAC4B;;EAGxB;UAAA,aAAuB;UAAvB;AAAuB;;EAGrB;UAAA;AAAW;;EAKf;UAAA,mBAA6B;UAA7B,oBAA6B;UAA7B;AAA6B;;EAI7B;UAAA,WAA2B;UAA3B,oBAA2B;UAA3B;AAA2B;;EAK7B;UAAA,kBAC0B;UAD1B,UAC0B;UAD1B,YAC0B;UAD1B,WAC0B;UAD1B,oBAC0B;UAD1B;AAC0B;;EAGxB;UAAA,oBAAiB;UAAjB;AAAiB;;EAIjB;UAAA,sBACqB;UADrB,qBACqB;UADrB,qBACqB;UADrB,kBACqB;UADrB,0DACqB;UADrB,gBACqB;UADrB,oBACqB;UADrB,kDACqB;UADrB,mFACqB;UADrB,mGACqB;UADrB,kEACqB;UADrB,kEACqB;UADrB;AACqB;;EAMzB;UAAA,qBAAW;UAAX;AAAW;;EAGT;UAAA,kBAAiD;UAAjD,UAAiD;UAAjD,qBAAiD;UAAjD,gBAAiD;UAAjD,oBAAiD;UAAjD;AAAiD;;EAK/C;UAAA,kBAAsC;UAAtC,aAAsC;UAAtC,mBAAsC;UAAtC,oBAAsC;UAAtC,oBAAsC;UAAtC;AAAsC;;EAGpC;UAAA,oBAA0C;UAA1C,gBAA0C;UAA1C,oBAA0C;UAA1C;AAA0C;;EAK5C;UAAA,oBAAoB;UAApB;AAAoB;;EAIpB;UAAA,gBAAkC;UAAlC,sBAAkC;UAAlC,kBAAkC;UAAlC,oBAAkC;UAAlC;AAAkC;;EAIlC;UAAA;AAAW;;EAIX;UAAA,aAAqB;UAArB;AAAqB;;EAGnB;UAAA,oBAC+C;UAD/C,qBAC+C;UAD/C,sBAC+C;UAD/C,kBAC+C;UAD/C,0DAC+C;UAD/C,kBAC+C;UAD/C,mBAC+C;UAD/C,mBAC+C;UAD/C,sBAC+C;UAD/C,mBAC+C;UAD/C,oBAC+C;UAD/C,gBAC+C;UAD/C,oBAC+C;UAD/C,kDAC+C;UAD/C,mFAC+C;UAD/C,mGAC+C;UAD/C,kEAC+C;UAD/C,kEAC+C;UAD/C;AAC+C;;EAMnD;UAAA;AAAW;;EAGT;UAAA,gBACc;UADd,mBACc;UADd,aACc;UADd,mBACc;UADd,8BACc;UADd,kBACc;UADd,oBACc;UADd;AACc;;EAId;UAAA,aAAyC;UAAzC,gBAAyC;UAAzC;AAAyC;;EAIzC;UAAA,mBAAW;UAAX;AAAW;;EAMX;UAAA,gBAA4D;UAA5D,mBAA4D;UAA5D,aAA4D;UAA5D,uBAA4D;UAA5D,qBAA4D;UAA5D,iBAA4D;UAA5D,aAA4D;UAA5D,mFAA4D;UAA5D,mGAA4D;UAA5D,kEAA4D;UAA5D,kEAA4D;UAA5D;AAA4D;;EAE5D;UAAA,sBAA8C;UAA9C,wDAA8C;UAA9C,kBAA8C;UAA9C;AAA8C;;EAG5C;UAAA,YAAoB;UAApB;AAAoB;;EAIpB;UAAA,kBAAyB;UAAzB,WAAyB;UAAzB,YAAyB;UAAzB;AAAyB;;EAIzB;UAAA;AAAgB;;EAGd;UAAA,sBAAiC;UAAjC,mBAAiC;UAAjC,oBAAiC;UAAjC;AAAiC;;EAGjC;UAAA,oBAAuC;UAAvC;AAAuC;;EAAvC;UAAA,oBAAuC;UAAvC;AAAuC;;EAM3C;UAAA,sBAAiC;UAAjC,kBAAiC;UAAjC,oBAAiC;UAAjC;AAAiC;;EAIjC;UAAA,mBAAyC;UAAzC,aAAyC;UAAzC,qBAAyC;UAAzC;AAAyC;;EAIvC;UAAA,aAAsC;UAAtC,YAAsC;UAAtC,sBAAsC;UAAtC;AAAsC;;EAGpC;UAAA,eAA4C;UAA5C,mBAA4C;UAA5C,gBAA4C;UAA5C,oBAA4C;UAA5C;AAA4C;;EAE5C;UAAA,oBAAyB;UAAzB;AAAyB;;EAIzB;UAAA,aAAoC;UAApC,qBAAoC;UAApC;AAAoC;;EAIpC;UAAA,oBAA6C;UAA7C;AAA6C;;EAA7C;UAAA,oBAA6C;UAA7C;AAA6C;;EAI7C;UAAA;AAAa;;EAGX;UAAA;AAAW;;EAOX;UAAA;AAAW;;EAOX;UAAA;AAAW;;EAOX;UAAA;AAAW;;EAOX;UAAA;AAAW;;EAOjB;UAAA,kBAAqC;UAArC,qBAAqC;UAArC,aAAqC;UAArC,mBAAqC;UAArC,kBAAqC;UAArC;AAAqC;;EAGnC;UAAA,mBAAyB;UAAzB;AAAyB;;EAK3B;UAAA,mBAA8B;UAA9B,WAA8B;UAA9B;AAA8B;;EAG5B;UAAA,iBAAiB;UAAjB;AAAiB;;EAIjB;UAAA,gBAA8B;UAA9B;AAA8B;;EAI9B;UAAA,mBAA4B;UAA5B,oBAA4B;UAA5B,oBAA4B;UAA5B,kDAA4B;UAC5B;AAD4B;;EAS1B;UAAA,WAAiC;UAAjC,oBAAiC;UAAjC;AAAiC;;EAIjC;UAAA,oBAAiC;UAAjC,mBAAiC;UAAjC,oBAAiC;UAAjC,oBAAiC;UAAjC;AAAiC;;EAMrC;UAAA,gBAAkC;UAAlC,sBAAkC;UAAlC,kBAAkC;UAAlC,oBAAkC;UAAlC;AAAkC;;EAKlC;UACE,qBAAqB;QACvB;;EAGE;UAAA,wBAA0C;UAA1C,mBAA0C;UAA1C;AAA0C;;EAA1C;UAAA,sBAA0C;UAA1C;AAA0C;;EAK5C;UAAA,gBAA6B;UAA7B,mBAA6B;UAA7B,kBAA6B;UAA7B,oBAA6B;UAA7B;AAA6B;;EAI7B;UAAA,kBAA8B;UAA9B,aAA8B;UAA9B;AAA8B;;EAG5B;UAAA,kBAC0B;UAD1B,mBAC0B;UAD1B,aAC0B;UAD1B,aAC0B;UAD1B,UAC0B;UAD1B,YAC0B;UAD1B,sBAC0B;UAD1B,eAC0B;UAD1B,qBAC0B;UAD1B,oBAC0B;UAD1B;AAC0B;;EAGxB;UAAA,kBAA0C;UAA1C,WAA0C;UAA1C,YAA0C;UAA1C;AAA0C;;EAI1C;UAAA,kBACY;UADZ,YACY;UADZ,WACY;UADZ,qBACY;UADZ,oBACY;aADZ;AACY;;EAIZ;UAAA,kBACa;UADb,eACa;UADb,qBACa;UADb,iBACa;UADb,iBACa;UADb,gBACa;UADb,oBACa;UADb,kDACa;;YAEb;;;;;AAFa;;EAUb;UAAA,mBACE;UADF,cACE;UADF,YACE;UADF,oBACE;UADF;AACE;;EAOJ;UAAA,gBAA6B;UAA7B,mBAA6B;UAA7B,kBAA6B;UAA7B,oBAA6B;UAA7B;AAA6B;;EAM3B;UAAA,kBAAe;YACf,YAAY;YACZ;AAFe;;EAMf;UAAA,sBAAsD;UAAtD,eAAsD;UAAtD,mBAAsD;UAAtD,oBAAsD;UAAtD;AAAsD;;EAAtD;UAAA,oBAAsD;UAAtD;AAAsD;;EAItD;UAAA;AAAW;;EASnB;UAAA,SAAqD;UAArD,WAAqD;UAArD,aAAqD;UAArD,WAAqD;UAArD,uBAAqD;UAArD;AAAqD;;EAGnD;UAAA,aAE4C;UAF5C,YAE4C;UAF5C,mBAE4C;UAF5C,uBAE4C;UAF5C,qBAE4C;UAF5C,kBAE4C;UAF5C,yDAE4C;UAF5C,gBAE4C;UAF5C,kBAE4C;UAF5C,mBAE4C;UAF5C,mBAE4C;UAF5C,oBAE4C;UAF5C,gBAE4C;UAF5C,oBAE4C;UAF5C,kDAE4C;UAF5C,mFAE4C;UAF5C,mGAE4C;UAF5C,kEAE4C;UAF5C,kEAE4C;UAF5C;AAE4C;;EAGxC;UAAA;AAAW;;AAOnB;UAAA,eAEU;UAFV,QAEU;UAFV,SAEU;UAFV,kBAEU;UAFV,aAEU;UAFV,YAEU;UAFV,uCAEU;UAFV,oBAEU;UAFV;AAEU;;AAGR;UAAA,kBAAwC;UAAxC,aAAwC;UAAxC,YAAwC;UAAxC;AAAwC;;AAGtC;UAAA,qBAAW;UAAX;AAAW;;AAKb;UAAA,aAA2B;UAA3B,YAA2B;UAA3B;AAA2B;;AAGzB;UAAA,WAAuC;UAAvC,aAAuC;UAAvC,sBAAuC;UAAvC,qBAAuC;UAAvC;AAAuC;;AAGrC;UAAA,mBACyB;UADzB,qBACyB;UADzB,kBACyB;UADzB,0DACyB;UADzB,aACyB;UADzB,kBACyB;UADzB,iBACyB;UADzB,oBACyB;UADzB;AACyB;;AAK3B;UAAA;AAAW;;AAIX;UAAA,kBACU;UADV,WACU;UADV,aACU;UADV,aACU;UADV,WACU;UADV,YACU;UADV,mBACU;UADV;AACU;;AAER;;QAEA;;AAEA;;QAEA;;AAMN;UAAA;AAAiB","sourcesContent":[".info-page {\n  @apply container mx-auto min-h-screen;\n\n  p {\n    @apply dark:text-slate-500;\n  }\n\n  .info-page__header {\n    @apply relative;\n\n    .info-page__breed-image {\n      @apply h-72 object-cover w-full;\n    }\n\n    .info-page__breed-image-filter {\n      @apply absolute top-0 bg-black h-72 w-full opacity-40;\n    }\n\n    .info-page__main-nav {\n      @apply z-10 absolute top-0\n        text-white p-4 break-words;\n\n        .main-nav__heading {\n          @apply flex items-start;\n\n          .info-nav__wrapper {\n            @apply pl-4;\n          }\n        }\n\n      .info-nav__title {\n        @apply text-3xl font-semibold;\n      }\n\n      .info-nav__breed-other-names {\n        @apply text-gray-300 w-full;\n      }\n    }\n\n    .info-page__modal-nav {\n      @apply z-10 absolute right-0\n        text-white bottom-[-1px];\n\n      p {\n        @apply text-white;\n      }\n\n      .modal-nav__view-button {\n        @apply bg-primary-300 text-white p-5 rounded-full\n          shadow-lg mb-3 mr-3;\n      }\n    }\n  }\n\n  .info-page__main {\n    @apply px-3;\n\n    .main__share-button {\n      @apply absolute right-0 mr-1 p-3 text-primary-300;\n    }\n\n    .main__top-content {\n      .top-content__breed-groups {\n        @apply text-lg text-gray-800 mt-2 flex;\n\n        .breed-groups__item {\n          @apply mr-2 text-primary-300 font-semibold;\n        }\n      }\n\n      .top-content__breed-type {\n        @apply text-gray-500;\n      }\n      \n      .top-content__breed-temperaments-title {\n        @apply text-xl font-bold mt-4 mb-3;\n      }\n\n      hr {\n        @apply mb-2;\n      }\n\n      .top-content__breed-temperaments {\n        @apply flex flex-wrap;\n\n        .temperaments__item {\n          @apply mr-2 mb-2 text-sm bg-primary-200 px-4 py-2\n            rounded-xl font-semibold shadow-lg text-white;\n        }\n      }\n    }\n\n    .main__breed-history {\n      @apply mb-8;\n\n      .breed-history__title {\n        @apply text-xl font-bold my-4 flex justify-between\n          items-center;\n      }\n\n      .breed-history__content.less {\n        @apply h-44 overflow-hidden text-ellipsis;\n      }\n\n      hr {\n        @apply my-1;\n      }\n    }\n\n    .main__bottom-content {\n      .bottom-content__fci-doc {\n        @apply flex items-start border p-4 rounded-lg my-4 shadow-lg;\n\n        @apply dark:bg-slate-800 dark:border-slate-800;\n\n        img {\n          @apply w-full h-full;\n        }\n\n        .fci-doc__logo-wrapper {\n          @apply grow w-32 p-1 mr-4;\n        }\n\n        .fci-doc__content-wrapper {\n          @apply break-all;\n\n          .content-wrapper__title {\n            @apply font-semibold text-lg mb-3;\n          }\n          .content-wrapper__info {\n            @apply text-blue-700 dark:text-blue-500;\n          }\n        }\n      }\n\n      .bottom-content__sizes-title {\n        @apply text-xl font-semibold mb-3;\n      }\n      \n      .bottom-content__sizes {\n        @apply mt-1 flex items-end justify-center;\n\n        \n        .sizes__item {\n          @apply grow flex flex-col items-center;\n\n          label {\n            @apply text-base text-gray-900 font-semibold;\n\n            @apply dark:text-gray-200;\n          }\n\n          div {\n            @apply flex justify-center items-end;\n          }\n          \n          label.contains-size {\n            @apply text-primary-300 dark:text-primary-100;\n          }\n\n          .item__smallest-size {\n            @apply w-full;\n\n            img {\n              @apply h-12;\n            }\n          }\n\n          .item__small-size {\n            \n            img {\n              @apply h-16;\n            }\n          }\n\n          .item__medium-size {\n            \n            img {\n              @apply h-20;\n            }\n          }\n\n          .item__large-size {\n            \n            img {\n              @apply h-24;\n            }\n          }\n\n          .item__giant-size {\n            \n            img {\n              @apply h-28;\n            }\n          }\n        }\n      }\n\n      .bottom-content__stats-title {\n        @apply flex items-center text-xl my-2;\n\n        span {\n          @apply font-semibold ml-2;\n        }\n      }\n\n      .bottom-content__stats, .bottom-content__chars {\n        @apply w-full table-fixed mb-8;\n\n        td, th {\n          @apply border p-2;\n        }\n\n        th {\n          @apply font-semibold text-left;\n        }\n\n        caption {\n          @apply text-gray-500 text-sm;\n          caption-side: bottom;\n        }\n      }\n\n      .bottom-content__chars {\n        \n        .item__value {\n          svg {\n            @apply float-left text-yellow-400;\n          }\n          \n          span {\n            @apply text-sm text-gray-500 ml-1;\n          }\n        }\n      }\n\n      .bottom-content__breed-colors-title {\n        @apply text-xl my-4 mb-3 font-bold;\n      }\n\n      .bottom-content__breed-colors {\n\n        li:first-child {\n          border-top-width: 1px;\n        }\n\n        li {\n          @apply border-b py-2 dark:border-slate-700;\n        }\n      }\n\n      .bottom-content__breed-similars-title {\n        @apply text-xl my-4 font-bold;\n      }\n\n      .bottom-content__breed-similars {\n        @apply flex flex-wrap relative;\n        \n        .breed-similars__item {\n          @apply relative h-60 mt-1 px-[0.5rem] rounded-lg flex-1 flex \n            flex-col flex-wrap w-1/2;\n\n          .item__wrapper {\n            @apply relative grow cursor-pointer w-full;\n          }\n\n          .item__image {\n            @apply absolute h-full w-full object-cover\n              rounded-lg;\n          }\n\n          .item__name {\n            @apply m-3 relative text-2xl text-white font-bold\n              break-words;\n\n            text-shadow: \n              0.5px  0.5px 0 #000,\n              -0.5px -0.5px 0 #000,  \n                0.5px -0.5px 0 #000,\n              -0.5px  0.5px 0 #000;\n          }\n\n          .item__lifespan {\n            @apply flex-shrink grow-0 text-gray-600 mt-1\n              ; \n          }\n        }\n      }\n\n      .bottom-content__misc {\n        .misc__heading {\n          @apply text-xl font-bold my-4;\n        }\n\n        .misc__refs {\n          \n          .refs__item span::before {\n            @apply absolute;\n            content: '•';\n            font-size: 2.5rem;\n          }\n\n          .refs__item {\n            @apply mb-1 dark:text-blue-400 text-blue-600 text-base;\n          }\n\n          .refs__item a {\n            @apply ml-5;\n          }\n        }\n      }\n    }\n\n  }\n\n  .info-page__footer {\n    @apply p-8 flex justify-center left-0 bottom-0 w-full;\n\n    .footer__love-button {\n      @apply flex p-5 px-16 w-[20rem]\n        rounded-3xl justify-center text-lg items-center\n        font-bold shadow-lg bg-rose-600 text-white;\n\n        span {\n          @apply ml-2;\n        }\n    }\n  }\n}\n\n.modal-nav__modal {\n  @apply fixed isolate top-0 left-0\n    text-white bg-gray-800/80 w-screen\n    h-screen;\n\n  .nav__image-container {\n    @apply absolute flex h-full items-center;\n\n    .image-container__breed-image {\n      @apply px-5;\n    }\n  }\n\n  .modal__nav {\n    @apply flex flex-col h-full;\n\n    .nav__paginate-controls {\n      @apply z-20 flex flex-col items-end p-4;\n\n      aside.paginate-controls__note {\n        @apply bg-primary-300 text-white p-4\n          rounded-lg mt-5 text-xs;\n      }\n    }\n\n    .nav__close-modal {\n      @apply z-10;\n    }\n\n    .nav__paginate-controls-2 {\n      @apply z-10 grow flex w-full items-center justify-between absolute\n        h-screen;\n\n        .nav__left-button {\n\n        }\n\n        .nav__right-button {\n\n        }\n    }\n  }\n}\n\n.youtube-embed__wrapper {\n  @apply rounded-lg;\n}\n"],"sourceRoot":""}]);
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
    title: "breedFind | A Dog Breed Database",
    mode: "ssr",
    meta: [
        {
            charset: "utf-8"
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
        },
        {
            "http-equiv": "X-UA-Compatible",
            content: "IE=edge"
        }, 
    ],
    // --- Server options
    serverHost: "0.0.0.0",
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
    clientRuntimeConfig: {
        BASE_URL: "http://localhost:3000"
    },
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
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views */ "./src/views/index.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services */ "./src/services/index.ts");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_7__);








var App = function(props) {
    var docUrl = new URL(document.URL);
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "dark:bg-slate-900 dark:text-white",
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((preact_router__WEBPACK_IMPORTED_MODULE_2___default()), {
            url: docUrl.pathname,
            onChange: handleRouteChange,
            children: _views__WEBPACK_IMPORTED_MODULE_4__["default"].map(function(route) {
                var routeUi = route.lazy ? /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((preact_async_route__WEBPACK_IMPORTED_MODULE_3___default()), {
                    getComponent: function() {
                        return Promise.resolve(route.component);
                    },
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
                var isWhitelist = window.__APP_STATE__.serverSideRoutesWhitelist[route.component.name];
                if (_helpers__WEBPACK_IMPORTED_MODULE_5__.environment.isBrowser && isWhitelist) window.__whitelistRoutes[route.component.name] = routeUi;
                else if (_helpers__WEBPACK_IMPORTED_MODULE_5__.environment.isBrowser && !isWhitelist) window.__routes[route.component.name] = routeUi;
                return routeUi;
            })
        })
    });
};
function handleRouteChange(ev) {
    var state = new _services__WEBPACK_IMPORTED_MODULE_6__.AppStateStore;
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {
        if (state.isNewStart() && (0,preact_router__WEBPACK_IMPORTED_MODULE_2__.getCurrentUrl)() == "/breeds") (0,preact_router__WEBPACK_IMPORTED_MODULE_2__.route)("/", true);
        return function() {
            return state.Close();
        };
    }, []);
}


/***/ }),

/***/ "./src/components/Image.tsx":
/*!**********************************!*\
  !*** ./src/components/Image.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.pcss */ "./src/components/Image.pcss");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact-router */ "preact-router");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/compat */ "preact/compat");
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact_compat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_4__);





var Image = function(props) {
    var ref = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    var onImageLoad = function() {};
    var imageUi = /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            ref: ref,
            onLoad: onImageLoad,
            src: props.src,
            alt: props.alt,
            className: props.className ? "".concat(props.className) : null,
            onClick: props.onClick
        })
    });
    return props.lazy ? /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_compat__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
        fallback: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            children: props.alt
        }),
        children: imageUi
    }) : imageUi;
};


/***/ }),

/***/ "./src/components/MessageNotification.tsx":
/*!************************************************!*\
  !*** ./src/components/MessageNotification.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageNotification": () => (/* binding */ MessageNotification)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageNotification.pcss */ "./src/components/MessageNotification.pcss");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact-router */ "preact-router");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}





var MessageNotification = function(props) {
    var messages = [
        "Sending a small amount will help me a lot.",
        "Even sending an amount of ₱ 1.00 is a huge help for me.",
        "A temporary personal fundraising, sending a small amount will help.", 
    ];
    var ref = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)(), 2), message = ref[0], setMessage = ref[1];
    var ref1 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)(_helpers__WEBPACK_IMPORTED_MODULE_4__.environment.isBrowser ? localStorage.hiddenAt : 0), 2), hiddenAt = ref1[0], setHiddenAt = ref1[1];
    var ref2 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)(Date.now()), 2), timestamp = ref2[0], setTimestamp = ref2[1];
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {
        setMessage(messages.at(Math.round(Math.random() * 100 % messages.length) - 1));
    }, []);
    var onCloseMessage = function() {
        var hideFor = Date.now() + 3600000 // hide dialog for an hour. 
        ;
        localStorage.hiddenAt = hideFor;
        setHiddenAt(hideFor);
    };
    if (_helpers__WEBPACK_IMPORTED_MODULE_4__.environment.isBrowser) setInterval(function() {
        setTimestamp(Date.now());
    }, 1e3);
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: hiddenAt == 0 || hiddenAt == undefined || timestamp >= hiddenAt ? /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
            className: "message-notification",
            children: [
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "message-notification__icon-wrapper",
                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                        class: "w-8 h-8",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        })
                    })
                }),
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "message-notification__content",
                    children: [
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                            className: "content__title",
                            children: "Asking for a Small Help"
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "content__message",
                            children: [
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        message,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                    className: "message__link",
                                    href: "/about",
                                    children: "Click to help"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                    "aria-label": "hide message notification",
                    className: "message-notification__hide",
                    onClick: onCloseMessage,
                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                        class: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M6 18L18 6M6 6l12 12"
                        })
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {})
    });
};


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": () => (/* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_1__.Image),
/* harmony export */   "MessageNotification": () => (/* reexport safe */ _MessageNotification__WEBPACK_IMPORTED_MODULE_0__.MessageNotification)
/* harmony export */ });
/* harmony import */ var _MessageNotification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageNotification */ "./src/components/MessageNotification.tsx");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./src/components/Image.tsx");




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
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}


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
    return Array.from(document.head.querySelectorAll("meta"));
}
/**
 * setDocumentMetadata
 */ function setDocMetadata(Ms) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    if (_ssr_utils__WEBPACK_IMPORTED_MODULE_1__.environment.isFinalRender) try {
        for(var _iterator = Ms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var metadata = _step.value;
            var meta = document.createElement("meta");
            for(var key in metadata)meta.setAttribute(key, metadata[key]);
            document.head.appendChild(meta);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
/**
 * useTheme
 */ function useAppTheme() {
    var ref = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(_ssr_utils__WEBPACK_IMPORTED_MODULE_1__.environment.isBrowser ? localStorage.theme : undefined), 2), theme = ref[0], setTheme = ref[1];
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        if (theme === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
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
/* harmony export */   "FetchStateStatus": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_0__.FetchStateStatus),
/* harmony export */   "enableDevTools": () => (/* binding */ enableDevTools),
/* harmony export */   "environment": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_0__.environment),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_0__.getServerSideProps),
/* harmony export */   "initAppState": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_0__.initAppState),
/* harmony export */   "initUniStore": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_0__.initUniStore),
/* harmony export */   "isDevelopment": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_0__.isDevelopment),
/* harmony export */   "isProduction": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_0__.isProduction),
/* harmony export */   "resolvePendingAsyncDataFetches": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_0__.resolvePendingAsyncDataFetches),
/* harmony export */   "resolvePendingProps": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_0__.resolvePendingProps),
/* harmony export */   "setDocMetadata": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.setDocMetadata),
/* harmony export */   "useAppTheme": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useAppTheme),
/* harmony export */   "useAsyncDataFetch": () => (/* reexport safe */ _ssr_utils__WEBPACK_IMPORTED_MODULE_0__.useAsyncDataFetch),
/* harmony export */   "useDocMetadata": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useDocMetadata),
/* harmony export */   "useRouterChangeEffect": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useRouterChangeEffect)
/* harmony export */ });
/* harmony import */ var _ssr_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-utils */ "./src/helpers/ssr-utils.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./src/helpers/hooks.ts");



function enableDevTools() {
    if (_ssr_utils__WEBPACK_IMPORTED_MODULE_0__.isDevelopment) {
        Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! preact/devtools */ "preact/devtools", 23));
        Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! preact/debug */ "preact/debug", 23));
    }
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
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore */ "unistore");
/* harmony import */ var unistore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var unistore_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unistore/devtools */ "unistore/devtools");
/* harmony import */ var unistore_devtools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unistore_devtools__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./src/helpers/hooks.ts");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}





var environment = {
    get isBrowser () {
        return typeof process === "undefined" && "object" === "undefined" && 0 && 0 || typeof Worker === "function";
    },
    get isServer () {
        return !this.isBrowser && "object" !== "undefined";
    },
    get isFinalRender () {
        return __webpack_require__.g.finalRender;
    }
};
var isDevelopment = true;
var isProduction = !isDevelopment;
function initUniStore(store) {
    var initStore = window.__UNISTORE_STATE__ ? window.__UNISTORE_STATE__ : window.__UNISTORE_STATE__ = {};
    var C = (unistore__WEBPACK_IMPORTED_MODULE_1___default());
    return isDevelopment && environment.isBrowser ? unistore_devtools__WEBPACK_IMPORTED_MODULE_2___default()(C(initStore)) : C(initStore);
}
function initAppState() {
    var initState = window.__APP_STATE__ ? window.__APP_STATE__ : window.__APP_STATE__ = {
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
    _getServerSideProps = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(C, aF) {
        var fName, memoTchecksOldRes, isNotComponent, defaultProps, browserPropsFallback, serverSideProps, index, _defaultProps;
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    fName = C.name;
                    memoTchecksOldRes = memoTchecks[fName];
                    isNotComponent = false;
                    // C.toString() and performing checks in regex is an expensive operation, 
                    // calling it regularly surely will impact the runtime of getServerSideProps.
                    //
                    // do: Check if C is a function component, by using regex we check certain keywords
                    //     that the JSX runtime (and other possible candidate keywords) uses and
                    //     memoize the result to `memoTchecks` and then update the flag `isNotComponent`
                    if (!memoTchecksOldRes) memoTchecks[fName] = isNotComponent = !/(_jsxRuntime|children|jsxs?|Fragment)/g.test(C.toString());
                    if (!isNotComponent) {
                        _ctx.next = 6;
                        break;
                    }
                    throw new TypeError("".concat(C.name.length ? C.name : "(anonymous)", " is not a valid function component."));
                case 6:
                    if (!environment.isServer) {
                        _ctx.next = 10;
                        break;
                    }
                    pendingServerSideProps.push({
                        C: C,
                        aF: aF
                    });
                    _ctx.next = 26;
                    break;
                case 10:
                    ;
                    browserPropsFallback = function() {
                        var _ref = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(fName, routes) {
                            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                                while(1)switch(_ctx.prev = _ctx.next){
                                    case 0:
                                        _ctx.next = 2;
                                        return aF(null).then(function(props) {
                                            var routeUi = routes[fName];
                                            routeUi.props = Object.assign(routeUi.props, props);
                                            defaultProps = props;
                                        });
                                    case 2:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return function browserPropsFallback(fName, routes) {
                            return _ref.apply(this, arguments);
                        };
                    }();
                    if (!window.__APP_STATE__.serverSideRoutesWhitelist[fName]) {
                        _ctx.next = 17;
                        break;
                    }
                    _ctx.next = 15;
                    return browserPropsFallback(fName, window.__whitelistRoutes);
                case 15:
                    _ctx.next = 24;
                    break;
                case 17:
                    serverSideProps = window.__APP_STATE__.serverSideProps;
                    index = window.__APP_STATE__.serverSidePropsIndex--;
                    // Reset the pointer's value to serverSideProps.
                    if (index == 0) index = window.__APP_STATE__.serverSidePropsIndex = serverSideProps.length;
                    defaultProps = serverSideProps[serverSideProps.length - index];
                    if (!(defaultProps == undefined)) {
                        _ctx.next = 24;
                        break;
                    }
                    _ctx.next = 24;
                    return browserPropsFallback(fName, window.__routes);
                case 24:
                    ;
                    C.defaultProps = Object.assign((_defaultProps = C.defaultProps) !== null && _defaultProps !== void 0 ? _defaultProps : {}, defaultProps);
                case 26:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _getServerSideProps.apply(this, arguments);
}
var memoTchecks = {};
/**
 * resolvePendingProps 
 * @param ctx 
 */ function resolvePendingProps(ctx) {
    return _resolvePendingProps.apply(this, arguments);
}
function _resolvePendingProps() {
    _resolvePendingProps = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {
        var _loop, routes, routesWhitelist, Ps, serverSideProps, numBadProps, propsResolvers, index;
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _loop = function(index) {
                        Ps[index].C.defaultProps = {};
                        var req = ctx.req;
                        var isExcluded = false;
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            // When component `Ps[index].C` does not match the current request URL path
                            // we exclude it from the ones that will be data fetched by the server and
                            // we put it in a `whitelist` that will be data fetched in the client
                            // once `useRouterChangeEffect` detected a URL change in the browser.
                            //
                            // Additionally, if it matches the current request URL path we will capture
                            // the request url for any url parameters ':[keyword]' and then place it
                            // into the `defaultProps` of the component.
                            for(var _iterator = routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var route = _step.value;
                                var patt = new RegExp(route.path.replaceAll(/:[^/]+/g, "([^/]+)"));
                                if (route.component == Ps[index].C && route.path != req.path && !patt.test(req.path)) {
                                    isExcluded = true;
                                    routesWhitelist[Ps[index].C.name] = true;
                                    break;
                                }
                                var currIndex = 1;
                                var params = route.path.matchAll(/:([^/]+)/g);
                                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(var _iterator1 = params[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        var _value = _slicedToArray(_step1.value, 2), param = _value[1];
                                        var ref;
                                        var matches = (ref = req.path.match(patt)) !== null && ref !== void 0 ? ref : [];
                                        var C = Ps[index].C;
                                        C.defaultProps = Object.assign(C.defaultProps, _defineProperty({}, param, matches[currIndex++]));
                                    }
                                } catch (err) {
                                    _didIteratorError1 = true;
                                    _iteratorError1 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError1) {
                                            throw _iteratorError1;
                                        }
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        if (isExcluded) return "continue";
                        propsResolvers.push((function() {
                            var _ref = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Ps, i) {
                                var isGoodProps, _i, C, aF, asyncProps;
                                return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                                    while(1)switch(_ctx.prev = _ctx.next){
                                        case 0:
                                            isGoodProps = true;
                                            _i = Ps[i], C = _i.C, aF = _i.aF;
                                            _ctx.next = 4;
                                            return aF(ctx);
                                        case 4:
                                            asyncProps = _ctx.sent;
                                            if (typeof asyncProps !== "undefined" && asyncProps != undefined && typeof asyncProps === "object" && typeof asyncProps !== "number" && !_instanceof(asyncProps, Array) && !_instanceof(asyncProps, Map) && typeof asyncProps !== "boolean" && !_instanceof(asyncProps, Set) && typeof asyncProps !== "string" && (typeof asyncProps === "undefined" ? "undefined" : _typeof(asyncProps)) !== "bigint" && typeof asyncProps !== "function" && (typeof asyncProps === "undefined" ? "undefined" : _typeof(asyncProps)) !== "symbol" && !(Symbol.iterator in asyncProps) && !(Symbol.asyncIterator in asyncProps)) serverSideProps[i] = asyncProps;
                                            else {
                                                isGoodProps = false;
                                                numBadProps++;
                                            }
                                            if (isGoodProps) C.defaultProps = Object.assign(C.defaultProps, asyncProps);
                                            Promise.resolve();
                                        case 8:
                                        case "end":
                                            return _ctx.stop();
                                    }
                                }, _callee);
                            }));
                            return function(Ps, i) {
                                return _ref.apply(this, arguments);
                            };
                        })()(Ps, index));
                    };
                    routes = (__webpack_require__(/*! @/views */ "./src/views/index.tsx")["default"]);
                    routesWhitelist = {};
                    Ps = pendingServerSideProps;
                    serverSideProps = [];
                    numBadProps = 0;
                    propsResolvers = [];
                    for(index = 0; index < Ps.length; index++)_loop(index);
                    _ctx.next = 10;
                    return Promise.all(propsResolvers);
                case 10:
                    window.__APP_STATE__.serverSideProps = serverSideProps;
                    window.__APP_STATE__.serverSidePropsIndex = propsResolvers.length - numBadProps;
                    window.__APP_STATE__.serverSideRoutesWhitelist = routesWhitelist;
                case 13:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
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
 */ function useAsyncDataFetch() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        onServer: true,
        reuse: false,
        forced: false
    }, aCb = arguments.length > 1 ? arguments[1] : void 0;
    var isBrowser = environment.isBrowser, isServer = environment.isServer;
    var ref = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)({
        status: 2
    }), 2), fState = ref[0], setState = ref[1];
    var ref1 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)(null), 2), fRes = ref1[0], setFRes = ref1[1];
    var fRCb = function() {};
    if (isBrowser) {
        (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useRouterChangeEffect)(function() {
            var ssrDataCounter = window.__APP_STATE__.asyncDataFetchesIndex;
            var ssrData = window.__APP_STATE__.asyncDataFetches[ssrDataCounter - 1];
            var isNotPopulated = true;
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
                // Reset asyncDataFetches counter whene it reaches the maximum length.
                if (ssrDataCounter >= window.__APP_STATE__.asyncDataFetches.length) window.__APP_STATE__.asyncDataFetchesIndex = 1;
            }
            // If there wasn't an ssr data found in the window.__APP_STATE___ (i.e.
            // the fetched data was not populated) we will call the async callback
            // passed and populated the data with the fetched ones. If the options.forced
            // option on the other hand is set we will enforce to call the callback function.
            if (isNotPopulated || options.forced) aCb([
                fState,
                setState
            ]).then(function(res) {
                setState({
                    status: 0
                });
                setFRes(res);
            }).catch(function(err) {
                setState({
                    status: 1,
                    message: err
                });
            });
        });
        fRCb = function(cb) {
            (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {
                if (fState.status == 0) cb(fRes);
            }, [
                fState.status
            ]);
        };
    }
    if (options.onServer && isServer) {
        var asyncDataFetches = window.__APP_STATE__.asyncDataFetches;
        if (!asyncDataFetches) pendingAsyncDataFetches.push({
            fState: [
                fState,
                setState
            ],
            C: aCb,
            options: options
        });
        else fRCb = function(cb) {
            var ssrDataCounter = window.__APP_STATE__.asyncDataFetchesIndex;
            var ssrData = asyncDataFetches[ssrDataCounter - 1];
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
var FetchStateStatus;
(function(FetchStateStatus) {
    FetchStateStatus[FetchStateStatus["Success"] = 0] = "Success";
    FetchStateStatus[FetchStateStatus["Error"] = 1] = "Error";
    FetchStateStatus[FetchStateStatus["Pending"] = 2] = "Pending";
})(FetchStateStatus || (FetchStateStatus = {}));
/**
 * resolvePendingAsyncDataFetches
 */ function resolvePendingAsyncDataFetches() {
    return _resolvePendingAsyncDataFetches.apply(this, arguments);
}
function _resolvePendingAsyncDataFetches() {
    _resolvePendingAsyncDataFetches = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var Pa, asyncDataFetches, resolveFetches, index;
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    Pa = pendingAsyncDataFetches;
                    asyncDataFetches = [];
                    resolveFetches = [];
                    index = 0;
                case 4:
                    if (!(index < Pa.length)) {
                        _ctx.next = 11;
                        break;
                    }
                    if (Pa[index].options.onServer) {
                        _ctx.next = 7;
                        break;
                    }
                    return _ctx.abrupt("continue", 8);
                case 7:
                    resolveFetches.push((function() {
                        var _ref = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Pi, index) {
                            var C, fState;
                            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                                while(1)switch(_ctx.prev = _ctx.next){
                                    case 0:
                                        C = Pi.C, fState = Pi.fState;
                                        _ctx.next = 3;
                                        return C(fState);
                                    case 3:
                                        _ctx.t0 = _ctx.sent;
                                        asyncDataFetches[index] = {
                                            data: _ctx.t0,
                                            used: false
                                        };
                                        Promise.resolve();
                                    case 6:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return function(Pi, index) {
                            return _ref.apply(this, arguments);
                        };
                    })()(Pa[index], index));
                case 8:
                    index++;
                    _ctx.next = 4;
                    break;
                case 11:
                    _ctx.next = 13;
                    return Promise.all(resolveFetches);
                case 13:
                    window.__APP_STATE__.asyncDataFetches = asyncDataFetches;
                    window.__APP_STATE__.asyncDataFetchesIndex = resolveFetches.length;
                    pendingAsyncDataFetches = [];
                case 16:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
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



var SSRContext = (0,preact__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
var ServerContext = function(props) {
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SSRContext.Provider, {
        value: props.value,
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_preact_hooks_unistore__WEBPACK_IMPORTED_MODULE_2__.StoreProvider, {
            value: props.store,
            children: props.children
        })
    });
};


/***/ }),

/***/ "./src/server/api/index.ts":
/*!*********************************!*\
  !*** ./src/server/api/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
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



var apiRouter = (0,express__WEBPACK_IMPORTED_MODULE_1__.Router)();
var ax = axios__WEBPACK_IMPORTED_MODULE_2___default().create({
    baseURL: "http://localhost:5900/"
});
apiRouter.use(function() {
    var _ref = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res, next) {
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    res.set("Content-Type", "application/json");
                    next();
                case 2:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function(req, res, next) {
        return _ref.apply(this, arguments);
    };
}());
apiRouter.get("/breeds/:id?", function() {
    var _ref = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    ax.get("/breeds").then(function() {
                        var _ref = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(r) {
                            var id;
                            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                                while(1)switch(_ctx.prev = _ctx.next){
                                    case 0:
                                        id = req.params.id;
                                        if (!(id != undefined)) {
                                            _ctx.next = 3;
                                            break;
                                        }
                                        return _ctx.abrupt("return", res.status(302).send(r.data[id]));
                                    case 3:
                                        return _ctx.abrupt("return", res.status(200).send(r.data));
                                    case 4:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return function(r) {
                            return _ref.apply(this, arguments);
                        };
                    }()).catch(function(err) {
                        return res.status(404).send(err);
                    });
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiRouter);


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





var devCompiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()(webpackConfig_dev__WEBPACK_IMPORTED_MODULE_1__["default"]);
function setupDevMiddleware(app) {
    if (_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_0__.isProduction) return;
    app.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default()(devCompiler, {
        index: false,
        stats: "errors-warnings",
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
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsdom */ "jsdom");
/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsdom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var preact_render_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact-render-to-string */ "preact-render-to-string");
/* harmony import */ var preact_render_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(preact_render_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devalue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devalue */ "devalue");
/* harmony import */ var devalue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devalue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
/* harmony import */ var _server_SSRContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/server/SSRContext */ "./src/server/SSRContext.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/App */ "./src/App.tsx");
/* harmony import */ var _helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/helpers/ssr-utils */ "./src/helpers/ssr-utils.ts");
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











var ssrRouter = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)({
    strict: true
});
ssrRouter.get("*", function() {
    var _ref = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.t0 = res.status(200).set("Content-Type", "text/html");
                    _ctx.next = 3;
                    return renderDoc(req, res);
                case 3:
                    _ctx.t1 = _ctx.sent;
                    _ctx.t0.send.call(_ctx.t0, _ctx.t1).end();
                case 5:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
function renderDoc(req, res) {
    return _renderDoc.apply(this, arguments);
}
function _renderDoc() {
    _renderDoc = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {
        var currentUrl, doc, initState, initStore;
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    currentUrl = "".concat(req.protocol, "://").concat(req.headers.host).concat(req.originalUrl);
                    _ctx.next = 3;
                    return jsdom__WEBPACK_IMPORTED_MODULE_3__.JSDOM.fromFile(path__WEBPACK_IMPORTED_MODULE_5___default().resolve("dist", "index.html"), {
                        url: currentUrl,
                        userAgent: req.headers["user-agent"],
                        contentType: req.headers["content-type"],
                        referrer: req.headers["referer"],
                        pretendToBeVisual: true,
                        resources: "usable",
                        runScripts: "dangerously",
                        cookieJar: null
                    });
                case 3:
                    doc = _ctx.sent;
                    // @ts-ignore
                    __webpack_require__.g.window = doc.window;
                    __webpack_require__.g.document = window.document;
                    initState = (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.initAppState)();
                    initStore = (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.initUniStore)();
                    if (!(APP_CONFIG.mode == "ssr")) {
                        _ctx.next = 14;
                        break;
                    }
                    _ctx.next = 11;
                    return (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.resolvePendingProps)({
                        req: req,
                        res: res
                    });
                case 11:
                    renderApp(_helpers__WEBPACK_IMPORTED_MODULE_7__.initAppState, initStore);
                    _ctx.next = 14;
                    return (0,_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_10__.resolvePendingAsyncDataFetches)();
                case 14:
                    // Setup the index.html here that will be send to the browser
                    document.body.innerHTML += '\n  <script crossorigin="use-credentials">\n    window.__APP_STATE__ = '.concat(devalue__WEBPACK_IMPORTED_MODULE_6___default()(initState), "\n    window.__UNISTORE_STATE__ = ").concat(devalue__WEBPACK_IMPORTED_MODULE_6___default()(initStore.getState()), "\n    window.__whitelistRoutes = {}\n    window.__routes = {}\n    window.clientRuntimeConfig = window.__APP_STATE__.clientRuntimeConfig\n  </script>\n  ");
                    if (APP_CONFIG.mode == "ssr") {
                        __webpack_require__.g.finalRender = true;
                        document.querySelector(".app-root").innerHTML = renderApp();
                        delete __webpack_require__.g.finalRender;
                    }
                    return _ctx.abrupt("return", doc.serialize());
                case 17:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _renderDoc.apply(this, arguments);
}
function renderApp(appState, store) {
    return (0,preact_render_to_string__WEBPACK_IMPORTED_MODULE_4__.render)(/*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_server_SSRContext__WEBPACK_IMPORTED_MODULE_8__.ServerContext, {
        value: appState !== null && appState !== void 0 ? appState : (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.initAppState)(),
        store: store !== null && store !== void 0 ? store : (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.initUniStore)(),
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_App__WEBPACK_IMPORTED_MODULE_9__.App, {})
    }), null, {
        pretty: _helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_10__.isDevelopment
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ssrRouter);


/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStateStore": () => (/* binding */ AppStateStore)
/* harmony export */ });
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preact_hooks_unistore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @preact-hooks/unistore */ "@preact-hooks/unistore");
/* harmony import */ var _preact_hooks_unistore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_preact_hooks_unistore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact-router */ "preact-router");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}





var AppStateStore = /*#__PURE__*/ function() {
    "use strict";
    function AppStateStore(store) {
        var _this = this;
        _classCallCheck(this, AppStateStore);
        this.Start = function() {
            _this.Reload().then(function(res) {
                _this.Resume();
                _this.setRoute("/breeds", true);
            }).catch(function(err) {
                var ref;
                if (_helpers__WEBPACK_IMPORTED_MODULE_4__.environment.isBrowser) _this.Resume();
                if ((ref = _this.state) === null || ref === void 0 ? void 0 : ref.startedAt) _this.setRoute("/breeds", true);
            });
        };
        var _this1 = this;
        this.Reload = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        return _ctx.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/breeds").then(function(res) {
                            var _state;
                            var lovedBreeds = ((_state = _this1.state) !== null && _state !== void 0 ? _state : {
                                lovedBreeds: {}
                            }).lovedBreeds;
                            var breeds = res.data;
                            var ABreeds = Object.values(breeds);
                            var breedLocations = _toConsumableArray(new Set(ABreeds.map(function(breed) {
                                return breed.origins;
                            }).filter(function(origins) {
                                return origins;
                            }).flat()));
                            var breedGroups = [
                                "Hound",
                                "Companion",
                                "Terrier",
                                "Herding",
                                "Toy",
                                "Working",
                                "Sporting",
                                "Northern"
                            ];
                            var breedSizes = _toConsumableArray(new Set(ABreeds.map(function(breed) {
                                return breed.size;
                            }).filter(function(size) {
                                return size;
                            }).flat())).slice(0, 5);
                            _this1.store.setState({
                                A: {
                                    startedAt: Date.now(),
                                    breeds: breeds,
                                    lovedBreeds: lovedBreeds,
                                    fundNotification: {
                                        closed: false,
                                        closedAt: 0
                                    },
                                    breedLocations: breedLocations,
                                    breedGroups: breedGroups,
                                    breedSizes: breedSizes
                                }
                            });
                            localStorage.setItem(_this1.lkey, JSON.stringify(_this1.store.getState()));
                        }));
                    case 1:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }));
        this.Resume = function() {
            _this.store.setState(JSON.parse(localStorage.getItem(_this.lkey)));
            _this._state = _this.store.getState().A;
        };
        this.Close = function() {
            _this.store.setState({});
            _this._state = {};
        };
        var _this2 = this;
        this.Add = function() {
            var _ref = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(breed) {
                return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            if (_this2._debounceId) {
                                clearTimeout(_this2._debounceId);
                                _this2._debounceId = null;
                            }
                            _this2._debounceId = setTimeout(function() {
                                _this2.Resume();
                                var lovedBreeds = _this2.state.lovedBreeds;
                                var lovedBreed = lovedBreeds[breed.id];
                                if (lovedBreed) lovedBreeds[breed.id].count++;
                                else lovedBreeds[breed.id] = {
                                    count: 0,
                                    lovedAt: Date.now()
                                };
                                _this2.store.setState({
                                    A: Object.assign(_this2.state, {
                                        lovedBreeds: lovedBreeds
                                    })
                                }, false);
                                localStorage.setItem(_this2.lkey, JSON.stringify(_this2.store.getState()));
                                Promise.resolve();
                            }, 1e3);
                        case 2:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }));
            return function(breed) {
                return _ref.apply(this, arguments);
            };
        }();
        this._store = store !== null && store !== void 0 ? store : (0,_preact_hooks_unistore__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    }
    var _proto = AppStateStore.prototype;
    _proto.setRoute = function setRoute(pathname, replace) {
        (0,preact_router__WEBPACK_IMPORTED_MODULE_2__.route)("/breeds", true);
    };
    _proto.isNewStart = function isNewStart() {
        return localStorage.getItem(this.lkey) == undefined;
    };
    AppStateStore.GetServerBreeds = function GetServerBreeds() {
        return _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
            var ax;
            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        ax = axios__WEBPACK_IMPORTED_MODULE_3___default().create({
                            baseURL: "http://localhost:5900/"
                        });
                        _ctx.next = 3;
                        return ax.get("/breeds");
                    case 3:
                        return _ctx.abrupt("return", _ctx.sent.data);
                    case 4:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }))();
    };
    _createClass(AppStateStore, [
        {
            key: "store",
            get: function get() {
                return this._store;
            }
        },
        {
            key: "state",
            get: function get() {
                this.Resume();
                return this._store.getState().A;
            }
        },
        {
            key: "lkey",
            get: function get() {
                return AppStateStore._lkey;
            }
        }
    ]);
    return AppStateStore;
}();
AppStateStore._lkey = "breedfind-web";


/***/ }),

/***/ "./src/views/404.tsx":
/*!***************************!*\
  !*** ./src/views/404.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFound": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _404_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.pcss */ "./src/views/404.pcss");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact-router */ "preact-router");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact_router__WEBPACK_IMPORTED_MODULE_2__);



var NotFound = function(props) {
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
            className: "page-not-found",
            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: "page-not-found__message",
                children: [
                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                        className: "message__heading",
                        children: "Page Not Found"
                    }),
                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "message__main",
                        children: "The page you were trying to access does not exist."
                    }),
                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                        className: "message__alt",
                        children: [
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                                className: "alt__links",
                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                    className: "links__item",
                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        className: "item__link",
                                        href: "/breeds",
                                        children: "Catalog Page"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption", {
                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    children: "Are you lost?"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ "./src/views/About.tsx":
/*!*****************************!*\
  !*** ./src/views/About.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "About": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _About_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.pcss */ "./src/views/About.pcss");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./src/components/index.ts");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_GCASH_QRCode_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/GCASH_QRCode.jpg */ "./src/assets/images/GCASH_QRCode.jpg");
/* harmony import */ var _assets_images_gcash_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/images/gcash-logo.png */ "./src/assets/images/gcash-logo.png");
/* harmony import */ var _assets_images_breedfind_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/images/breedfind.png */ "./src/assets/images/breedfind.png");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}








var About = function(props) {
    // ref
    var modalRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    var gcashNumRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    var ref = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useState)({}), 2), form = ref[0], setForm = ref[1];
    var onFormSubmit = function() {
        var _ref = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ev) {
            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        ev.preventDefault();
                        location.href = "mailto:romdevmod@gmail.com?subject=".concat(form.name, " (").concat(form.email, ")&body=").concat(btoa(JSON.stringify(form)));
                    case 2:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }));
        return function onFormSubmit(ev) {
            return _ref.apply(this, arguments);
        };
    }();
    var onInputUpdate = function(ev) {
        var target = ev.currentTarget;
        setForm(_objectSpreadProps(_objectSpread({}, form), _defineProperty({}, target.name, target.value)));
    };
    var onToggleModal = function() {
        var target = modalRef.current;
        var classList = target.classList;
        if (classList.contains("hidden")) {
            classList.remove("hidden");
            classList.add("flex");
        } else {
            classList.remove("flex");
            classList.add("hidden");
        }
    };
    var onMobileNumberCopy = function() {
        navigator.clipboard.writeText("09636434432");
        navigator.vibrate([
            200
        ]);
    };
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "about-page",
            children: [
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
                    className: "about-page__header",
                    children: [
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                            className: "header__logo",
                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
                                src: _assets_images_breedfind_png__WEBPACK_IMPORTED_MODULE_7__,
                                alt: "fundraising logo",
                                className: "bg-transparent"
                            })
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                            className: "header__fr-main",
                            children: "Asking for help,"
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                            className: "header__fr-message",
                            children: "Good day, I am asking for a small help from all of you who found this app. Currently I am unemployed (trying to find a job) and struggling with my personal financial issues as a result, both my mental and physical health becomes a lot worse than before, I am in agonizing right now from various symptoms of inflammatory bowel disease, constipation, rectal and colon bleeding, these drastically affected my mental health and my overall well-being. A small help from all of you is hugely enough to help myself return to a much more stable state."
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                            className: "header__fr-small-message",
                            children: "I don't want to leave behind my 3 lovely dogs (1 golden retriver, 2 cross-breed 'aspin'), they are my inspirations that led me to make this web app."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("main", {
                    className: "about-page__main",
                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("figure", {
                        className: "main__gcash-qrcode",
                        children: [
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("aside", {
                                className: "qr-modal hidden",
                                ref: modalRef,
                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
                                    lazy: true,
                                    src: _assets_images_GCASH_QRCode_jpg__WEBPACK_IMPORTED_MODULE_5__,
                                    onClick: onToggleModal
                                })
                            }),
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("figcaption", {
                                children: [
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                                        className: "gcash-qrcode__message"
                                    }),
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                                        className: "gcash-qrcode__qr-modal",
                                        onClick: onToggleModal,
                                        children: [
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
                                                lazy: true,
                                                src: _assets_images_gcash_logo_png__WEBPACK_IMPORTED_MODULE_6__,
                                                className: "qr-modal__logo"
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                                                children: "Scan QR Code"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                                        className: "gcash-qrcode__separator",
                                        children: "or"
                                    }),
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                        className: "gcash-qrcode__mobile",
                                        children: [
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                                                type: "tel",
                                                className: "mobile__mobile",
                                                value: "09*****4432",
                                                readOnly: true,
                                                ref: gcashNumRef
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                                title: "Copy GCash Number",
                                                className: "mobile__copy",
                                                onClick: onMobileNumberCopy,
                                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                    class: "w-7 h-7",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        "stroke-width": "2",
                                                        d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer", {
                    className: "about-page__footer",
                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
                        className: "footer__email-form",
                        onSubmit: onFormSubmit,
                        children: [
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                                className: "email-form__title",
                                children: "Got concerns? Connect with me."
                            }),
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                                className: "email-form__message",
                                children: "If you have any concerns with the information that I have scraped or about how I asked for help, Please contact me by filling this form so that we could settle the issue."
                            }),
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                                className: "email-form__note",
                                children: [
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                        class: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                                        children: "An email dialog will popup after you submitted this form with the message that you have provided encoded as base64."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
                                className: "email-form__fname",
                                children: [
                                    !form.name ? /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                        htmlFor: "email-fullname",
                                        className: "email-form__fname-label",
                                        children: "Full Name"
                                    }) : /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {}),
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                                        name: "name",
                                        value: form.name,
                                        id: "email-fullname",
                                        type: "text",
                                        className: "email-form__fname-textfield",
                                        autoComplete: "off",
                                        onInput: onInputUpdate,
                                        required: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
                                className: "email-form__email",
                                children: [
                                    !form.email ? /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                        htmlFor: "email-address",
                                        className: "email-form__email-label",
                                        children: "Email"
                                    }) : /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {}),
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                                        name: "email",
                                        value: form.email,
                                        id: "email-address",
                                        type: "email",
                                        className: "email-form__email-textfield",
                                        autoComplete: "off",
                                        onInput: onInputUpdate,
                                        required: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
                                className: "email-form__phone",
                                children: [
                                    !form.mobile ? /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                        htmlFor: "email-mobile",
                                        className: "email-form__phone-label",
                                        children: "Mobile"
                                    }) : /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {}),
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                                        name: "mobile",
                                        value: form.mobile,
                                        id: "email-mobile",
                                        type: "tel",
                                        className: "email-form__phone-textfield",
                                        autoComplete: "off",
                                        onInput: onInputUpdate,
                                        required: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
                                className: "email-form__message",
                                children: [
                                    !form.message ? /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                        htmlFor: "email-message",
                                        className: "email-form__message",
                                        children: "Message"
                                    }) : /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {}),
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
                                        name: "message",
                                        value: form.message,
                                        id: "email-message",
                                        className: "email-form__message-textarea",
                                        onInput: onInputUpdate,
                                        required: true,
                                        rows: 8
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                                type: "submit",
                                value: "Send",
                                className: "email-form__submit-btn"
                            })
                        ]
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ "./src/views/Catalog.tsx":
/*!*******************************!*\
  !*** ./src/views/Catalog.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Catalog": () => (/* binding */ Catalog)
/* harmony export */ });
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Catalog_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Catalog.pcss */ "./src/views/Catalog.pcss");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/index */ "./src/services/index.ts");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact-router */ "preact-router");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(preact_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
/* harmony import */ var _helpers_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/helpers/hooks */ "./src/helpers/hooks.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components */ "./src/components/index.ts");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}










// To avoid repeatedly calling the useAsyncDataFetch function
// we create a cached version of the breeds and lovedBreeds that
// the recently fetched data acquired.
var cBreeds;
var cLovedBreeds;
var Catalog = function(props) {
    var state = new _services_index__WEBPACK_IMPORTED_MODULE_4__.AppStateStore();
    // ref
    var loveItemsRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    var itemsRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    var headerBarRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    var filtersRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    var filtersButtonRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    // state
    var ref = _slicedToArray((0,_helpers_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppTheme)(), 2), theme = ref[0], setTheme = ref[1];
    var ref1 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(false), 2), isHidden = ref1[0], setVisibility = ref1[1];
    var ref2 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(true), 2), isFilterHidden = ref2[0], setFilterView = ref2[1];
    var ref3 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(cBreeds), 2), breeds = ref3[0], setBreeds = ref3[1];
    var ref4 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(cLovedBreeds), 2), lovedBreeds = ref4[0], setLovedBreeds = ref4[1];
    var ref5 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(Object.keys(cBreeds !== null && cBreeds !== void 0 ? cBreeds : {}).length), 2), count = ref5[0], setCount = ref5[1];
    var ref6 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(Object.keys(cLovedBreeds !== null && cLovedBreeds !== void 0 ? cLovedBreeds : {}).length), 2), loveBsCount = ref6[0], setLoveBsCount = ref6[1];
    var ref7 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)({
        itemCount: 10,
        cursor: 0,
        name: "",
        filters: {
            group: "",
            location: "",
            size: ""
        }
    }), 2), options = ref7[0], setOptions = ref7[1];
    var fState = {};
    if (!cBreeds && !cLovedBreeds) {
        var ref8 = _slicedToArray((0,_helpers__WEBPACK_IMPORTED_MODULE_7__.useAsyncDataFetch)({
            onServer: true,
            forced: true
        }, /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
            var breeds, lovedBreeds, _state, bs, lBs;
            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        breeds = {};
                        lovedBreeds = {};
                        if (!_helpers__WEBPACK_IMPORTED_MODULE_7__.environment.isBrowser) {
                            _ctx.next = 6;
                            break;
                        }
                        {
                            state.Resume();
                            _state = state.state, bs = _state.breeds, lBs = _state.lovedBreeds;
                            breeds = bs;
                            lovedBreeds = lBs;
                        }
                        _ctx.next = 8;
                        break;
                    case 6:
                        _ctx.next = 8;
                        return _services_index__WEBPACK_IMPORTED_MODULE_4__.AppStateStore.GetServerBreeds().then(function(data) {
                            return breeds = data;
                        }).catch(function() {});
                    case 8:
                        return _ctx.abrupt("return", {
                            breeds: breeds,
                            lovedBreeds: lovedBreeds
                        });
                    case 9:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }))), 2), fStat = ref8[0], fCb = ref8[1];
        fCb(function(param) {
            var breeds = param.breeds, lovedBreeds = param.lovedBreeds;
            var bsLen = Object.keys(breeds).length;
            var lBsLen = Object.keys(lovedBreeds).length;
            setBreeds(breeds);
            if (lBsLen) {
                setLovedBreeds(lovedBreeds);
                setLoveBsCount(lBsLen);
            }
            setCount(bsLen);
        });
        fState = fStat;
    }
    if (_helpers__WEBPACK_IMPORTED_MODULE_7__.environment.isBrowser) {
        var _catalogState, ref9;
        setOptions((ref9 = JSON.parse((_catalogState = localStorage.catalogState) !== null && _catalogState !== void 0 ? _catalogState : "null")) !== null && ref9 !== void 0 ? ref9 : options);
        delete localStorage.catalogState;
        (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {
            state.Resume();
            var S = state.state;
            var ref = S !== null && S !== void 0 ? S : {
                breeds: {},
                lovedBreeds: {}
            }, breeds = ref.breeds, lovedBreeds = ref.lovedBreeds;
            setBreeds(breeds);
            setLovedBreeds(lovedBreeds);
            window.addEventListener("scroll", function() {
                var bound = document.body.getBoundingClientRect();
                if (headerBarRef.current == undefined) return;
                if (bound.top <= -300) {
                    headerBarRef.current.style.display = "none";
                    filtersRef.current.classList.add("hidden");
                } else headerBarRef.current.style.display = "flex";
            });
            setLoveBsCount(Object.values(lovedBreeds).length);
            setCount(Object.values(breeds).length);
            cBreeds = {};
            cLovedBreeds = {};
            return function() {
                cBreeds = breeds;
                cLovedBreeds = lovedBreeds;
            };
        }, []);
    }
    var onFormSubmit = function(ev) {
        ev.preventDefault();
    };
    var onKeywordUpdate = function(ev) {
        var name = ev.currentTarget;
        var items = loveItemsRef.current;
        filtersRef.current.classList.add("hidden");
        if (name.value.trim().length == 0) {
            items.classList.remove("hidden");
            setVisibility(false);
        } else {
            items.classList.add("hidden");
            setVisibility(true);
        }
        setOptions(_objectSpreadProps(_objectSpread({}, options), {
            name: name.value,
            cursor: 0
        }));
    };
    var onHideSection = function(ev) {
        var button = ev.currentTarget;
        var selectedRef = {
            "filters-hide": filtersRef,
            "fav-hide": loveItemsRef
        };
        var setterMap = {
            "filters-hide": setFilterView,
            "fav-hide": setVisibility
        };
        var selected = selectedRef[button.id].current;
        var selClassList = selected.classList;
        if (selClassList.contains("hidden")) {
            selClassList.remove("hidden");
            selClassList.add("flex");
            setterMap[button.id](false);
        } else {
            selClassList.remove("flex");
            selClassList.add("hidden");
            setterMap[button.id](true);
        }
    };
    var onReload = function() {
        state.Reload().catch(function() {
            console.log("Bad");
        });
    };
    var onPaginate = function(counter) {
        if (counter == undefined) setOptions;
        return function() {
            var items = itemsRef.current;
            var pageCount = getPageCount(count, options) - 1;
            var newValue;
            if (options.cursor == pageCount && counter == 1) newValue = 0;
            else if (options.cursor == 0 && counter == -1) newValue = pageCount;
            else newValue = options.cursor + counter;
            setOptions(_objectSpreadProps(_objectSpread({}, options), {
                cursor: newValue
            }));
            items.scrollIntoView({
                behavior: "smooth"
            });
        };
    };
    var onSetPage = function(ev) {
        var select = ev.currentTarget;
        var items = itemsRef.current;
        setOptions(_objectSpreadProps(_objectSpread({}, options), {
            cursor: parseInt(select.value)
        }));
        items.scrollIntoView();
    };
    var onToggleTheme = function() {
        var theme = localStorage.theme;
        if (theme === "dark") delete localStorage.theme;
        else localStorage.theme = "dark";
        setTheme(localStorage.theme);
    };
    var onChangeFilter = function(ev) {
        var target = ev.currentTarget;
        var targetProp = target.name.match(/([a-z]+?)-filter/).at(1);
        var filters = _objectSpreadProps(_objectSpread({}, options.filters), _defineProperty({}, targetProp, target.value));
        setOptions(_objectSpreadProps(_objectSpread({}, options), {
            filters: filters
        }));
    };
    var image = "";
    var title = document.title = "breedFind | All Dog Breeds Catalog";
    var description = "Browse breedFind for a specific breed of dog you are longing for.";
    var type = "article";
    var url = document.URL;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.setDocMetadata)([
        {
            name: "description",
            content: description
        },
        {
            property: "og:image",
            content: image
        },
        {
            property: "og:title",
            content: title
        },
        {
            property: "og:description",
            content: description
        },
        {
            property: "og:type",
            content: type
        },
        {
            property: "og:url",
            content: url
        },
        {
            property: "twitter:image",
            content: image
        },
        {
            property: "twitter:title",
            content: title
        },
        {
            property: "twitter:description",
            content: description
        },
        {
            property: "twitter:type",
            content: type
        },
        {
            property: "twitter:url",
            content: url
        }, 
    ]);
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(preact__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: (fState.status === _helpers__WEBPACK_IMPORTED_MODULE_7__.FetchStateStatus.Success || cBreeds) && /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "catalog-page",
            children: [
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
                    className: "catalog-page__header",
                    ref: headerBarRef,
                    children: [
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
                            className: "header__search-bar",
                            onSubmit: onFormSubmit,
                            children: [
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                    ref: filtersButtonRef,
                                    className: "header__filter-options",
                                    id: "filters-hide",
                                    "aria-label": "".concat(isFilterHidden ? "show" : "hide", " filter options"),
                                    onClick: onHideSection,
                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                        class: "w-7 h-7",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                    className: "search-bar__logo",
                                    htmlFor: "search",
                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                        class: "w-7 h-7",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                                    className: "search-bar__text-field",
                                    id: "search",
                                    type: "text",
                                    placeholder: "Dig for a dog breed...",
                                    noValidate: true,
                                    autoComplete: "off",
                                    value: options.name,
                                    onInput: onKeywordUpdate
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                            "aria-label": "toggle ".concat(theme != "dark" ? "dark" : "light", " theme"),
                            className: "header__theme-toggler",
                            onClick: onToggleTheme,
                            children: theme != "dark" ? /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                className: "theme-toggler__light",
                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                    class: "w-7 h-7",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    })
                                })
                            }) : /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                className: "theme-toggler__dark",
                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                    class: "w-7 h-7",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("main", {
                    className: "catalog-page__main",
                    children: [
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
                            className: "main__filters-section",
                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("form", {
                                className: "filters-section__form hidden",
                                ref: filtersRef,
                                children: function() {
                                    var ref, ref1, ref2;
                                    var breedGroups = [];
                                    var breedLocations = [];
                                    var breedSizes = [];
                                    if (_helpers__WEBPACK_IMPORTED_MODULE_7__.environment.isBrowser && !state.isNewStart()) {
                                        state.Resume();
                                        var _state = state.state, bg = _state.breedGroups, bl = _state.breedLocations, bs = _state.breedSizes;
                                        breedGroups = bg;
                                        breedLocations = bl;
                                        breedSizes = bs;
                                    }
                                    var ui = /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                                htmlFor: "filter-breed-group",
                                                className: "form__groups-filter-title",
                                                children: "Group"
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
                                                onChange: onChangeFilter,
                                                value: (ref = options.filters) === null || ref === void 0 ? void 0 : ref.group,
                                                name: "group-filter",
                                                id: "filter-breed-group",
                                                className: "form__groups-filter",
                                                children: [
                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                                                        value: "",
                                                        children: "No Filter"
                                                    }),
                                                    breedGroups.map(function(group) {
                                                        return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                                                            value: group,
                                                            children: group
                                                        });
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                                htmlFor: "filter-breed-locations",
                                                className: "form__locations-filter-title",
                                                children: "Origin"
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                                                name: "location-filter",
                                                id: "filter-breed-locations",
                                                onChange: onChangeFilter,
                                                value: (ref1 = options.filters) === null || ref1 === void 0 ? void 0 : ref1.location,
                                                className: "form__locations-filter",
                                                type: "text",
                                                list: "location-list",
                                                placeholder: "Filter by breed origin"
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("datalist", {
                                                id: "location-list",
                                                children: breedLocations.map(function(location) {
                                                    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                                                        value: location,
                                                        children: location
                                                    });
                                                })
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                                htmlFor: "filter-breed-size",
                                                className: "form__size-filter-title",
                                                children: "Size"
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
                                                onChange: onChangeFilter,
                                                value: (ref2 = options.filters) === null || ref2 === void 0 ? void 0 : ref2.size,
                                                name: "size-filter",
                                                id: "filter-breed-size",
                                                className: "form__size-filter",
                                                children: [
                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                                                        value: "",
                                                        children: "No Filter"
                                                    }),
                                                    breedSizes.map(function(size) {
                                                        return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                                                            value: size,
                                                            children: size
                                                        });
                                                    })
                                                ]
                                            })
                                        ]
                                    });
                                    if (_helpers__WEBPACK_IMPORTED_MODULE_7__.environment.isServer) return ui;
                                    return ui;
                                }()
                            })
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
                            className: "main__love-section",
                            children: [
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
                                    className: "love-section__title-nav",
                                    children: [
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {}),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                                            className: "title-nav__section-title",
                                            children: [
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                    class: "w-7 h-7",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        "stroke-width": "2",
                                                        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                                                    children: [
                                                        "Love",
                                                        loveBsCount != undefined && /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                                                            className: "text-base font-base pb-2",
                                                            children: [
                                                                " (",
                                                                loveBsCount,
                                                                ")"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {}),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                            "aria-label": "".concat(isHidden ? "show" : "hide", " loved items"),
                                            className: "title-nav__hide-section",
                                            id: "fav-hide",
                                            onClick: onHideSection,
                                            children: isHidden ? /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                class: "w-9 h-9",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                })
                                            }) : /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                class: "w-9 h-9",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M5 15l7-7 7 7"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                    className: "love-section__data-items",
                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                                        className: "love-section__items flex",
                                        ref: loveItemsRef,
                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FavoriteItems, {
                                            options: options,
                                            breeds: breeds,
                                            lovedBreeds: lovedBreeds
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
                            className: "main__main-section",
                            children: [
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
                                    className: "main-section__title-nav",
                                    ref: itemsRef,
                                    children: [
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {}),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                                            className: "title-nav__section-title",
                                            children: [
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                    class: "w-7 h-7",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        "stroke-width": "2",
                                                        d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                                                    children: [
                                                        "Breeds",
                                                        count != undefined && /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                                                            className: "text-base font-base pb-2",
                                                            children: [
                                                                "(",
                                                                count,
                                                                ")"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {}),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("form", {
                                            className: "main-section__controls",
                                            onSubmit: function(ev) {
                                                return ev.preventDefault();
                                            },
                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                                                className: "controls__reload-data",
                                                onClick: onReload,
                                                children: [
                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                                                        children: "Reload"
                                                    }),
                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                        class: "w-7 h-7",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                            "stroke-linecap": "round",
                                                            "stroke-linejoin": "round",
                                                            "stroke-width": "2",
                                                            d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__.MessageNotification, {}),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                                    className: "main-section__items",
                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ListItems, {
                                        breeds: breeds,
                                        options: options,
                                        setCount: setCount
                                    })
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
                                    className: "main-section__paginate",
                                    children: [
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                            "aria-label": "previous page",
                                            className: "paginate__prev-button",
                                            onClick: onPaginate(-1),
                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                class: "w-9 h-9",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M15 19l-7-7 7-7"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select", {
                                            "aria-label": "select page",
                                            className: "paginate__page-nav",
                                            value: options.cursor >= getPageCount(count, options) ? 1 : options.cursor,
                                            onChange: onSetPage,
                                            children: _toConsumableArray(new Array(getPageCount(count, options)).keys()).map(function(page) {
                                                return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("option", {
                                                    value: page,
                                                    children: [
                                                        "Page ",
                                                        page + 1
                                                    ]
                                                });
                                            })
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                            "aria-label": "next page",
                                            className: "paginate__next-button",
                                            onClick: onPaginate(1),
                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                class: "w-9 h-9",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M9 5l7 7-7 7"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
var FavoriteItems = function(props) {
    var _loop = function(id) {
        props.lovedBreeds[id];
        var breed = props.breeds[id];
        var onBreedClick = function() {
            localStorage.catalogState = JSON.stringify(props.options);
            (0,preact_router__WEBPACK_IMPORTED_MODULE_6__.route)("/breeds/".concat(id));
        };
        ui.push(/*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            className: "items__love-item group",
            "data-id": breed.id,
            style: {
                backgroundImage: "url(".concat(breed.images.at(0), ")"),
                backgroundSize: "cover",
                backgroundPosition: "center"
            },
            onClick: onBreedClick,
            children: [
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                    className: "love-item__breed-name",
                    dangerouslySetInnerHTML: {
                        __html: breed.name
                    }
                }),
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    className: "love-item__breed-other-names",
                    dangerouslySetInnerHTML: {
                        __html: breed.otherNames.join(" / ")
                    }
                }),
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    className: "love-item__breed-bg-filter"
                })
            ]
        }, breed.id));
    };
    var ui = [];
    for(var id in props.lovedBreeds)_loop(id);
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: ui.reverse()
    });
};
var ListItems = function(props) {
    var ui = [];
    var breeds = props.breeds, options = props.options, setCount = props.setCount;
    var filters = options.filters;
    var filtered = Object.entries(breeds).filter(function(param) {
        var _param = _slicedToArray(param, 2), breed = _param[1];
        return new RegExp("(".concat(options.name, ")"), "i").test(breed.name);
    }).filter(function(param) {
        var _param = _slicedToArray(param, 2), breed = _param[1];
        if (!filters.group.length) return true;
        if (breed.breedGroups == undefined) return false;
        var isMatch = false;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = breed.breedGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var group = _step.value;
                isMatch = new RegExp(filters.group, "i").test(group);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return isMatch;
    }).filter(function(param) {
        var _param = _slicedToArray(param, 2), breed = _param[1];
        if (!filters.location.length) return true;
        if (breed.origins == undefined) return false;
        var isMatch = false;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = breed.origins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var location = _step.value;
                isMatch = new RegExp(filters.location, "i").test(location);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return isMatch;
    }).filter(function(param) {
        var _param = _slicedToArray(param, 2), breed = _param[1];
        if (!filters.size.length) return true;
        if (breed.size == undefined) return false;
        var isMatch = false;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = breed.size[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var size = _step.value;
                isMatch = new RegExp(filters.size, "i").test(size);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return isMatch;
    });
    setCount(filtered.length);
    var i = options.itemCount * options.cursor;
    var j = options.itemCount * (options.cursor + 1);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var _value = _slicedToArray(_step.value, 2), id = _value[0], breed = _value[1];
            var onBreedClick = function() {
                localStorage.catalogState = JSON.stringify(options);
                (0,preact_router__WEBPACK_IMPORTED_MODULE_6__.route)("/breeds/" + id);
            };
            ui.push(/*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                className: "items__item",
                "data-id": breed.id,
                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("figure", {
                    className: "item__breed-info",
                    children: [
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
                            className: "breed-info__image",
                            src: breed.images.at(0),
                            alt: "".concat(breed.name, " image"),
                            onClick: onBreedClick
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("figcaption", {
                            className: "breed-info__details",
                            children: [
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                                    className: "details__breed-name",
                                    dangerouslySetInnerHTML: {
                                        __html: breed.name
                                    },
                                    onClick: onBreedClick
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                                    className: "details__breed-other-names",
                                    dangerouslySetInnerHTML: {
                                        __html: breed.otherNames.join(" / ")
                                    }
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                    className: "details__breed-type",
                                    children: breed.type
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {}),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
                                    className: "details__breed-infos",
                                    children: [
                                        breed.origins && /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                                            className: "breed-infos__origins",
                                            children: [
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                                    "aria-label": "breed origin",
                                                    className: "origins__label",
                                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                        class: "w-6 h-6",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                            "stroke-linecap": "round",
                                                            "stroke-linejoin": "round",
                                                            "stroke-width": "2",
                                                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                                                    className: "origins__names",
                                                    children: breed.origins.join(", ")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                                            className: "breed-infos__count-images",
                                            children: [
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                                    "aria-label": "breed images count",
                                                    className: "origins__images",
                                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                        class: "w-6 h-6",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                            "stroke-linecap": "round",
                                                            "stroke-linejoin": "round",
                                                            "stroke-width": "2",
                                                            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                                                    className: "images__message",
                                                    children: [
                                                        breed.images.length,
                                                        " available"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                                            className: "breed-infos__breed-id",
                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("data", {
                                                value: id,
                                                children: [
                                                    "ID:",
                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                                                        className: "breed-id__value",
                                                        children: id
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, breed.id));
        };
        for(var _iterator = filtered.slice(i, j)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: ui
    });
};
function getPageCount(breedsCount, options) {
    return Math.floor(breedsCount / options.itemCount) + 1;
}


/***/ }),

/***/ "./src/views/Home.tsx":
/*!****************************!*\
  !*** ./src/views/Home.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.pcss */ "./src/views/Home.pcss");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact-router */ "preact-router");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "./src/services/index.ts");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/ssr-utils */ "./src/helpers/ssr-utils.ts");
/* harmony import */ var _helpers_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/hooks */ "./src/helpers/hooks.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components */ "./src/components/index.ts");
/* harmony import */ var _assets_images_pexels_rodnae_productions_7515916_mp4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/images/pexels-rodnae-productions-7515916.mp4 */ "./src/assets/images/pexels-rodnae-productions-7515916.mp4");
/* harmony import */ var _assets_images_breedfind_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/images/breedfind.png */ "./src/assets/images/breedfind.png");











var Home = function(props) {
    var state = new _services__WEBPACK_IMPORTED_MODULE_4__.AppStateStore();
    if (_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_6__.environment.isBrowser && !state.isNewStart()) (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {
        state.Resume();
        if (state.state.breeds != undefined && Object.keys(state.state.breeds)) (0,preact_router__WEBPACK_IMPORTED_MODULE_3__.route)("/breeds", true);
        return function() {
            return state.Close();
        };
    }, []);
    var image = "";
    var title = document.title;
    var description = "breedFind is a simple utility web app that can quickly search for a specific dog breed. If you’re a dog lover, I’m sure you’ll find this tool useful.";
    var type = "article";
    var url = document.URL;
    (0,_helpers_hooks__WEBPACK_IMPORTED_MODULE_7__.setDocMetadata)([
        {
            name: "description",
            content: description
        },
        {
            property: "og:image",
            content: image
        },
        {
            property: "og:title",
            content: title
        },
        {
            property: "og:description",
            content: description
        },
        {
            property: "og:type",
            content: type
        },
        {
            property: "og:url",
            content: url
        },
        {
            property: "twitter:image",
            content: image
        },
        {
            property: "twitter:title",
            content: title
        },
        {
            property: "twitter:description",
            content: description
        },
        {
            property: "twitter:type",
            content: type
        },
        {
            property: "twitter:url",
            content: url
        }, 
    ]);
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video", {
                className: "home-page__videoplayback",
                src: _assets_images_pexels_rodnae_productions_7515916_mp4__WEBPACK_IMPORTED_MODULE_9__,
                autoPlay: true,
                loop: true,
                muted: true
            }),
            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "home-page__videoplayback-filter"
            }),
            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "home-page",
                children: [
                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", {
                        className: "home-page__header",
                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                            className: "header__breedfind-logo",
                            src: _assets_images_breedfind_png__WEBPACK_IMPORTED_MODULE_10__,
                            alt: "breedfind logo"
                        })
                    }),
                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: "home-page__main",
                        children: [
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "main__message-wrapper",
                                children: [
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                        className: "main__welcome-title",
                                        children: "Welcome,"
                                    }),
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "main__welcome-message",
                                        children: [
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                children: "breedFind"
                                            }),
                                            " is a simple utility web app that can quickly search for a specific dog breed. If you’re a dog lover, I’m sure you’ll find this tool useful."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                                className: "main__data-sources",
                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "data-sources__desc",
                                    children: [
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "desc__bullet"
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                "Data from",
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_router__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                                    href: "https://www.dogbreedslist.info",
                                                    children: " dogbreedslist.info"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer", {
                        className: "home-page__footer",
                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "footer__start-button",
                            onClick: state.Start,
                            children: [
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                    class: "w-7 h-7",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    })
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    children: "Start Digging!"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ "./src/views/Info.tsx":
/*!****************************!*\
  !*** ./src/views/Info.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Info": () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Info_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Info.pcss */ "./src/views/Info.pcss");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact-router */ "preact-router");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(preact_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/services */ "./src/services/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components */ "./src/components/index.ts");
/* harmony import */ var _assets_images_dog_icon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/images/dog-icon.svg */ "./src/assets/images/dog-icon.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/images/logo.svg */ "./src/assets/images/logo.svg");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}











var Info = function(props) {
    var state = new _services__WEBPACK_IMPORTED_MODULE_7__.AppStateStore();
    var updatedStats = function() {
        var ref, ref1;
        if (_helpers__WEBPACK_IMPORTED_MODULE_5__.environment.isServer) return;
        state.Resume();
        var lovedBreeds = state.state.lovedBreeds;
        var ref2, ref3;
        return {
            count: (ref2 = (ref = lovedBreeds[props.id]) === null || ref === void 0 ? void 0 : ref.count) !== null && ref2 !== void 0 ? ref2 : 0,
            lovedAt: (ref3 = (ref1 = lovedBreeds[props.id]) === null || ref1 === void 0 ? void 0 : ref1.lovedAt) !== null && ref3 !== void 0 ? ref3 : 0
        };
    };
    var modalRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    var ref = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_6__.useState)(true), 2), isShownLess = ref[0], setState = ref[1];
    var _breed;
    var ref1 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_6__.useState)((_breed = props.breed) !== null && _breed !== void 0 ? _breed : props.breeds[props.id]), 2), breed = ref1[0], setBreed = ref1[1];
    var ref2 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_6__.useState)(updatedStats()), 2), stats = ref2[0], setStats = ref2[1];
    var ref3 = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_6__.useState)(0), 2), pCounter = ref3[0], setPCounter = ref3[1];
    var updatePaginateCounter = function(index) {
        if (pCounter >= breed.images.length - 1) setPCounter(0);
        else if (pCounter < 0) setPCounter(breed.images.length - 2);
        else setPCounter(pCounter + index);
    };
    var historyToText = function(breed) {
        var span = document.createElement("span");
        span.innerHTML = breed === null || breed === void 0 ? void 0 : breed.history;
        return span.textContent;
    };
    var onModalChangeView = function() {
        var modal = modalRef.current;
        var classList = modal.classList;
        if (classList.contains("hidden")) classList.remove("hidden");
        else classList.add("hidden");
    };
    var onClickShareButton = function() {
        var canShare = false;
        var sdata = {
            title: "'".concat(breed.name, "' Breed Information"),
            text: breed.history.slice(0, 30) + "...",
            url: document.URL
        };
        if (navigator.canShare(sdata)) canShare = true;
        if (canShare) navigator.share(sdata).catch(function() {});
    };
    var onClickLoveButton = function() {
        setStats(_objectSpreadProps(_objectSpread({}, stats), {
            count: stats.count + 1
        }));
        state.Add(breed);
    };
    var onGoBack = function() {
        (0,preact_router__WEBPACK_IMPORTED_MODULE_4__.route)("/breeds", true);
    };
    if (_helpers__WEBPACK_IMPORTED_MODULE_5__.environment.isBrowser) (0,preact_hooks__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {
        var lovedBreeds = state.state.lovedBreeds;
        if (Object.keys(props.breeds).length == 0) {
            var breeds = state.state.breeds;
            Object.assign(props, {
                breeds: Object.assign(breeds, {})
            });
        }
        setBreed(props.breeds[props.id]);
        setStats(updatedStats());
        if (lovedBreeds[props.id]) setStats(lovedBreeds[props.id]);
        if (!modalRef.current.classList.contains("hidden")) onModalChangeView();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        return function() {
            return state.Close();
        };
    }, [
        window.location.pathname
    ]);
    document.title = "breedFind | ".concat(breed === null || breed === void 0 ? void 0 : breed.name, " Breed Information");
    var image = breed === null || breed === void 0 ? void 0 : breed.images.at(0);
    var title = document.title;
    var description = historyToText(breed);
    var type = "article";
    var url = document.URL;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.setDocMetadata)([
        {
            name: "description",
            content: description
        },
        {
            property: "og:image",
            content: image
        },
        {
            property: "og:title",
            content: title
        },
        {
            property: "og:description",
            content: description
        },
        {
            property: "og:type",
            content: type
        },
        {
            property: "og:url",
            content: url
        },
        {
            property: "twitter:image",
            content: image
        },
        {
            property: "twitter:title",
            content: image
        },
        {
            property: "twitter:description",
            content: description
        },
        {
            property: "twitter:type",
            content: type
        },
        {
            property: "twitter:url",
            content: url
        }, 
    ]);
    var ref4, ref5;
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(preact__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "info-page",
            id: "".concat(breed === null || breed === void 0 ? void 0 : breed.id, "-page"),
            children: [
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
                    className: "info-page__header",
                    children: [
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                            className: "info-page__breed-image",
                            src: breed === null || breed === void 0 ? void 0 : breed.images.at(0),
                            alt: "".concat(breed === null || breed === void 0 ? void 0 : breed.name, " image")
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                            className: "info-page__breed-image-filter"
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
                            className: "info-page__main-nav",
                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                className: "main-nav__heading",
                                children: [
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                        "aria-label": "go back to catalog page",
                                        className: "info-nav__back",
                                        onClick: onGoBack,
                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                            class: "w-12 h-12",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                        className: "info-nav__wrapper",
                                        children: [
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
                                                className: "info-nav__title",
                                                dangerouslySetInnerHTML: {
                                                    __html: breed === null || breed === void 0 ? void 0 : breed.name
                                                }
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                                                className: "info-nav__breed-other-names",
                                                dangerouslySetInnerHTML: {
                                                    __html: breed === null || breed === void 0 ? void 0 : breed.otherNames.join(" / ")
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
                            className: "info-page__modal-nav",
                            children: [
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                    "aria-label": "view breed images",
                                    className: "modal-nav__view-button",
                                    onClick: onModalChangeView,
                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                                        class: "w-7 h-7",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
                                    className: "modal-nav__modal hidden",
                                    ref: modalRef,
                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
                                        className: "modal__nav",
                                        children: [
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                                className: "nav__paginate-controls",
                                                children: [
                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                                        className: "nav__close-modal",
                                                        onClick: onModalChangeView,
                                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                            class: "w-9 h-9",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round",
                                                                "stroke-width": "2",
                                                                d: "M6 18L18 6M6 6l12 12"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("aside", {
                                                        className: "paginate-controls__note",
                                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                                                            className: "note__message",
                                                            children: "You might see unrelated images to the breed, this is due to how I scraped the data from various sources. Sorry about that."
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                                className: "nav__paginate-controls-2",
                                                children: [
                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                                        "aria-label": "view left item",
                                                        className: "nav__left-button",
                                                        onClick: function() {
                                                            return updatePaginateCounter(-1);
                                                        },
                                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                            class: "w-9 h-9",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round",
                                                                "stroke-width": "2",
                                                                d: "M15 19l-7-7 7-7"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                                        "aria-label": "view right item",
                                                        className: "nav__right-button",
                                                        onClick: function() {
                                                            return updatePaginateCounter(1);
                                                        },
                                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                            class: "w-9 h-9",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round",
                                                                "stroke-width": "2",
                                                                d: "M9 5l7 7-7 7"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                                className: "nav__image-container",
                                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                                                    alt: "".concat(breed === null || breed === void 0 ? void 0 : breed.name, " image"),
                                                    className: "image-container__breed-image",
                                                    src: breed === null || breed === void 0 ? void 0 : breed.images.at(pCounter)
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("main", {
                    className: "info-page__main",
                    children: [
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                            "aria-label": "share button",
                            className: "main__share-button",
                            onClick: onClickShareButton,
                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
                            className: "main__top-content",
                            children: [
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                                    "aria-label": "breed groups list",
                                    className: "top-content__breed-groups",
                                    children: (breed === null || breed === void 0 ? void 0 : breed.breedGroups) && breed.breedGroups.map(function(group) {
                                        return group.split(",").map(function(group) {
                                            return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                                                className: "breed-groups__item",
                                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(preact_router__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                    className: "item__link",
                                                    href: "#",
                                                    children: [
                                                        "#",
                                                        group.trim()
                                                    ]
                                                })
                                            });
                                        });
                                    })
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                                    className: "top-content__breed-type",
                                    children: breed === null || breed === void 0 ? void 0 : breed.type
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.MessageNotification, {}),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                                    className: "top-content__breed-temperaments-title",
                                    children: "Temperaments"
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {}),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                                    className: "top-content__breed-temperaments",
                                    children: breed === null || breed === void 0 ? void 0 : breed.temperaments.map(function(temperament) {
                                        return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                                            className: "temperaments__item",
                                            children: temperament
                                        });
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
                            className: "main__breed-history",
                            children: [
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                    className: "breed-history__title",
                                    children: [
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                                            className: "title__main",
                                            children: "History"
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                            "aria-label": "Show ".concat(isShownLess ? "more" : "less", " button..."),
                                            className: "title__button",
                                            onClick: function() {
                                                return setState(!isShownLess);
                                            },
                                            children: isShownLess ? /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                class: "w-7 h-7",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M4 6h16M4 12h16M4 18h7"
                                                })
                                            }) : /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                class: "w-7 h-7",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M4 8h16M4 16h16"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {}),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                                    className: "breed-history__content ".concat(isShownLess ? "less" : ""),
                                    children: function() {
                                        var span = document.createElement("span");
                                        span.innerHTML = breed === null || breed === void 0 ? void 0 : breed.history;
                                        return span.textContent;
                                    }()
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
                            className: "main__bottom-content",
                            children: [
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                                    className: "bottom-content__sizes-title",
                                    children: "Breed Size"
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                                    className: "bottom-content__sizes",
                                    children: [
                                        "Smallest",
                                        "Small",
                                        "Medium",
                                        "Large",
                                        "Giant"
                                    ].map(function(size) {
                                        /*#__PURE__*/ return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                                            className: "sizes__item",
                                            children: [
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                                    id: "".concat(size.toLowerCase(), "-size"),
                                                    className: "item__".concat(size.toLowerCase(), "-size"),
                                                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                                                        alt: "".concat(size, " dog icon"),
                                                        className: new Set(breed === null || breed === void 0 ? void 0 : breed.size).has(size) ? "dark:dark-contains light-contains" : "dark:dark-not-contains light-not-contains",
                                                        src: _assets_images_dog_icon_svg__WEBPACK_IMPORTED_MODULE_9__
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                                    htmlFor: "".concat(size.toLowerCase(), "-size"),
                                                    className: new Set(breed === null || breed === void 0 ? void 0 : breed.size).has(size) ? "contains-size" : "not-contains-size",
                                                    children: size
                                                })
                                            ]
                                        });
                                    })
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                                    className: "bottom-content__stats-title",
                                    children: [
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                            class: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                                            children: "Statistics"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FCIDocument, {
                                    breed: breed
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table", {
                                    className: "bottom-content__stats",
                                    children: [
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
                                            className: "stats__head"
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tbody", {
                                            className: "stats__body",
                                            children: [
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
                                                    className: "body__item",
                                                    children: [
                                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                                                            className: "item__name",
                                                            children: "Origin"
                                                        }),
                                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                                                            className: "item__value",
                                                            children: (breed === null || breed === void 0 ? void 0 : breed.origins) && (breed === null || breed === void 0 ? void 0 : breed.origins.join(", "))
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
                                                    className: "body__item",
                                                    children: [
                                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                                                            className: "item__name",
                                                            children: "Life span"
                                                        }),
                                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                                                            className: "item__value",
                                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("data", {
                                                                value: JSON.stringify(breed === null || breed === void 0 ? void 0 : breed.lifeSpan.at(0)),
                                                                children: [
                                                                    "~ ",
                                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                                                                        className: "start",
                                                                        children: breed === null || breed === void 0 ? void 0 : breed.lifeSpan.at(0)
                                                                    }),
                                                                    " years"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
                                                    className: "body__item",
                                                    children: [
                                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                                                            className: "item__name",
                                                            children: "Litter size"
                                                        }),
                                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                                                            className: "item__value",
                                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("data", {
                                                                value: JSON.stringify(breed === null || breed === void 0 ? void 0 : breed.litterSize),
                                                                children: [
                                                                    "~ ",
                                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                                                                        className: "start",
                                                                        children: breed === null || breed === void 0 ? void 0 : breed.litterSize.at(0)
                                                                    }),
                                                                    " to ",
                                                                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                                                                        className: "end",
                                                                        children: [
                                                                            " ",
                                                                            breed === null || breed === void 0 ? void 0 : breed.litterSize.at(1),
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    " pups"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("caption", {
                                            children: [
                                                "Average litter and life span of the breed '",
                                                breed === null || breed === void 0 ? void 0 : breed.name,
                                                "'."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table", {
                                    className: "bottom-content__chars",
                                    children: [
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
                                            className: "chars__head"
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody", {
                                            className: "chars__body",
                                            children: Object.entries((ref4 = breed === null || breed === void 0 ? void 0 : breed.breedChars) !== null && ref4 !== void 0 ? ref4 : {}).map(function(param) {
                                                var _param = _slicedToArray(param, 2), char = _param[0], rate = _param[1];
                                                return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
                                                    className: "body__item",
                                                    children: [
                                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                                                            className: "item__name",
                                                            children: char
                                                        }),
                                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
                                                            className: "item__value",
                                                            children: [
                                                                _toConsumableArray(new Array(rate)).map(function() {
                                                                    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                                                        class: "w-6 h-6",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                                                            d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                        })
                                                                    });
                                                                }),
                                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                                                                    children: [
                                                                        "(",
                                                                        rate,
                                                                        ")"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                });
                                            })
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("caption", {
                                            children: [
                                                "Breed '",
                                                breed === null || breed === void 0 ? void 0 : breed.name,
                                                "' characteristics."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                                    className: "bottom-content__breed-colors-title",
                                    children: "Colors"
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                                    className: "bottom-content__breed-colors",
                                    children: breed === null || breed === void 0 ? void 0 : breed.colors.map(function(color) {
                                        return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                                            className: "breed-colors__item",
                                            children: color
                                        });
                                    })
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                                    className: "bottom-content__breed-similars-title",
                                    children: "Related Breeds"
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                                    className: "bottom-content__breed-similars",
                                    children: breed === null || breed === void 0 ? void 0 : breed.breedRecs.map(function(id) {
                                        var breed = props.breeds[id];
                                        if (breed == undefined) return;
                                        breed.history = historyToText(breed);
                                        var onItemClick = function() {
                                            return (0,preact_router__WEBPACK_IMPORTED_MODULE_4__.route)("/breeds/".concat(id));
                                        };
                                        return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                                            className: "breed-similars__item",
                                            children: [
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                                    className: "item__wrapper",
                                                    onClick: onItemClick,
                                                    children: [
                                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                                                            alt: "".concat(breed === null || breed === void 0 ? void 0 : breed.name, " image"),
                                                            className: "item__image",
                                                            src: breed === null || breed === void 0 ? void 0 : breed.images.at(0)
                                                        }),
                                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                                                            className: "item__name",
                                                            dangerouslySetInnerHTML: {
                                                                __html: breed === null || breed === void 0 ? void 0 : breed.name
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                                                    className: "item__lifespan",
                                                    children: [
                                                        "Lifespan: ~ ",
                                                        breed === null || breed === void 0 ? void 0 : breed.lifeSpan.at(0),
                                                        " years"
                                                    ]
                                                })
                                            ]
                                        });
                                    })
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
                                    className: "bottom-content__misc",
                                    children: [
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                                            className: "misc__heading",
                                            children: "Videos"
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
                                            className: "misc__youtube-embed",
                                            children: _helpers__WEBPACK_IMPORTED_MODULE_5__.environment.isBrowser && /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(YoutubeLinks, {
                                                breed: breed
                                            })
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                                            className: "misc__heading",
                                            children: "References"
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                                            className: "misc__refs",
                                            children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(References, {
                                                breed: breed
                                            })
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {})
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer", {
                    className: "info-page__footer",
                    children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                        "aria-label": "love ".concat(breed === null || breed === void 0 ? void 0 : breed.name),
                        className: "footer__love-button",
                        onClick: onClickLoveButton,
                        children: [
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                                class: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                })
                            }),
                            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                                children: [
                                    "Love (",
                                    (ref5 = stats === null || stats === void 0 ? void 0 : stats.count) !== null && ref5 !== void 0 ? ref5 : 0,
                                    ")"
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.getServerSideProps)(Info, function() {
    var _ref = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {
        var breeds, breed, ref, ref1, state, req;
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    ;
                    ;
                    if (!_helpers__WEBPACK_IMPORTED_MODULE_5__.environment.isBrowser) {
                        _ctx.next = 6;
                        break;
                    }
                    {
                        ;
                        ref1 = JSON.parse((ref = localStorage.getItem(_services__WEBPACK_IMPORTED_MODULE_7__.AppStateStore._lkey)) !== null && ref !== void 0 ? ref : "{}"), state = ref1.A;
                        breeds = state ? state.breeds : {};
                        breed = null;
                    }
                    _ctx.next = 18;
                    break;
                case 6:
                    req = ctx.req;
                    _ctx.prev = 7;
                    _ctx.next = 10;
                    return _services__WEBPACK_IMPORTED_MODULE_7__.AppStateStore.GetServerBreeds();
                case 10:
                    breeds = _ctx.sent;
                    _ctx.next = 17;
                    break;
                case 13:
                    _ctx.prev = 13;
                    _ctx.t0 = _ctx["catch"](7);
                    breeds = {};
                    breed = null;
                case 17:
                    breed = breeds[req.params.id];
                case 18:
                    return _ctx.abrupt("return", {
                        breeds: breeds,
                        breed: breed
                    });
                case 19:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                7,
                13
            ]
        ]);
    }));
    return function(ctx) {
        return _ref.apply(this, arguments);
    };
}());
var YoutubeLinks = function(props) {
    var ref;
    var ui = [];
    var references = (ref = props.breed) === null || ref === void 0 ? void 0 : ref.refs;
    for(var refkey in references){
        if (!/youtube\.com/.test(refkey)) continue;
        var embed = references[refkey];
        ui.push(/*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "youtube-embed__wrapper",
            dangerouslySetInnerHTML: {
                __html: embed.html
            }
        }));
    }
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: ui
    });
};
var References = function(props) {
    var ref;
    var ui = [];
    for(var refkey in (ref = props.breed) === null || ref === void 0 ? void 0 : ref.refs){
        var ref1;
        var ref2 = (ref1 = props.breed) === null || ref1 === void 0 ? void 0 : ref1.refs[refkey];
        if (ref2.title == undefined) continue;
        ui.push(/*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            className: "refs__item",
            children: [
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    className: "item__bullet"
                }),
                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                    href: refkey,
                    target: "_blank",
                    children: ref2.title
                })
            ]
        }));
    }
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: ui
    });
};
var FCIDocument = function(props) {
    var breed = props.breed;
    var refs = breed === null || breed === void 0 ? void 0 : breed.refs;
    var fciDocLink;
    for(var ref in refs)if (/\.pdf$/.test(ref)) fciDocLink = ref;
    if (!fciDocLink) return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {});
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("aside", {
        className: "bottom-content__fci-doc",
        children: [
            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "fci-doc__logo-wrapper",
                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                    lazy: true,
                    src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_10__,
                    alt: "Federation Cynologique Internationale logo"
                })
            }),
            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "fci-doc__content-wrapper",
                children: [
                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                        className: "content-wrapper__title",
                        children: "Federation Cynologique Internationale"
                    }),
                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                        className: "content-wrapper__info",
                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(preact_router__WEBPACK_IMPORTED_MODULE_4__.Link, {
                            href: fciDocLink,
                            target: "_blank",
                            children: fciDocLink
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ "./src/views/index.tsx":
/*!*****************************!*\
  !*** ./src/views/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "About": () => (/* reexport safe */ _About__WEBPACK_IMPORTED_MODULE_1__.About),
/* harmony export */   "Catalog": () => (/* reexport safe */ _Catalog__WEBPACK_IMPORTED_MODULE_2__.Catalog),
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_3__.Home),
/* harmony export */   "Info": () => (/* reexport safe */ _Info__WEBPACK_IMPORTED_MODULE_4__.Info),
/* harmony export */   "NotFound": () => (/* reexport safe */ _404__WEBPACK_IMPORTED_MODULE_0__.NotFound),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404 */ "./src/views/404.tsx");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ "./src/views/About.tsx");
/* harmony import */ var _Catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Catalog */ "./src/views/Catalog.tsx");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./src/views/Home.tsx");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Info */ "./src/views/Info.tsx");





var routes = [
    {
        path: "/",
        component: _Home__WEBPACK_IMPORTED_MODULE_3__.Home
    },
    {
        path: "/breeds",
        component: _Catalog__WEBPACK_IMPORTED_MODULE_2__.Catalog
    },
    {
        path: "/breeds/:id",
        component: _Info__WEBPACK_IMPORTED_MODULE_4__.Info
    },
    {
        path: "/about",
        component: _About__WEBPACK_IMPORTED_MODULE_1__.About
    },
    {
        path: "/404",
        component: _404__WEBPACK_IMPORTED_MODULE_0__.NotFound,
        default: true
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);



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






var devConfig = {
    mode: "development",
    devtool: "cheap-module-source-map",
    name: "web",
    entry: {
        index: [
            path__WEBPACK_IMPORTED_MODULE_3___default().resolve("src", "index.tsx"),
            "webpack-hot-middleware/client?name=web&path=/__webpack_hmr&timeout=2000", 
        ]
    },
    output: {
        path: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("dist"),
        publicPath: "/",
        filename: "[name].js",
        clean: true
    },
    module: {
        noParse: /gun\.js$/,
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: "swc-loader"
            },
            {
                test: /\.(gif|png|jpe?g|webp|mp[3-4]|ogg|mpeg|m4a|flac|ico|3gp|toff)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/[hash][ext][query]"
                }
            },
            {
                test: /\.(svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/[hash][ext][query]"
                }
            },
            {
                test: /\.(p?css)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader", 
                ]
            }, 
        ]
    },
    resolve: {
        alias: {
            "@": path__WEBPACK_IMPORTED_MODULE_3___default().resolve("src"),
            "webpackConfig": path__WEBPACK_IMPORTED_MODULE_3___default().resolve("webpack"),
            "react": "preact/compat",
            "react-dom": "preact/compat",
            "react/jsx-runtime": "preact/jsx-runtime"
        },
        extensions: [
            ".ts",
            ".tsx",
            ".json",
            ".pcss",
            ".js"
        ],
        modules: [
            "node_modules"
        ]
    },
    plugins: [
        new (html_webpack_plugin__WEBPACK_IMPORTED_MODULE_4___default())({
            minify: !_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_2__.isDevelopment,
            title: APP_CONFIG.title,
            template: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("src", "assets", "index.html"),
            favicon: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("src", "assets", "images", "breedfind.png"),
            inject: "body",
            scriptLoading: "module",
            publicPath: "/",
            filename: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("dist", "index.html"),
            meta: Object.assign({}, APP_CONFIG.meta)
        }),
        new (copy_webpack_plugin__WEBPACK_IMPORTED_MODULE_5___default())({
            patterns: [
                {
                    from: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("src", "assets", "app.webmanifest"),
                    to: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("dist")
                },
                {
                    from: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("src", "sw.js"),
                    to: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("dist")
                },
                {
                    from: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("src", "assets", "robots.txt"),
                    to: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("dist")
                },
                {
                    from: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("src", "assets", "android"),
                    to: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("dist/android")
                },
                {
                    from: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("src", "assets", "windows11"),
                    to: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("dist/windows11")
                },
                {
                    from: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("src", "assets", "ios"),
                    to: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("dist/ios")
                }, 
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
    stats: "normal",
    // @ts-ignore
    devServer: {
        hot: true,
        compress: true,
        historyApiFallback: true
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (devConfig);


/***/ }),

/***/ "./src/assets/images/GCASH_QRCode.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/GCASH_QRCode.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/951b6e61a198717d9956.jpg";

/***/ }),

/***/ "./src/assets/images/breedfind.png":
/*!*****************************************!*\
  !*** ./src/assets/images/breedfind.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8e242967cdd9782bf9c0.png";

/***/ }),

/***/ "./src/assets/images/dog-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/images/dog-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/464966b315989a73236f.svg";

/***/ }),

/***/ "./src/assets/images/gcash-logo.png":
/*!******************************************!*\
  !*** ./src/assets/images/gcash-logo.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2c758689c48d2e702d5e.png";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8745fcaf340a315438ea.svg";

/***/ }),

/***/ "./src/assets/images/pexels-rodnae-productions-7515916.mp4":
/*!*****************************************************************!*\
  !*** ./src/assets/images/pexels-rodnae-productions-7515916.mp4 ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f105103d1e0dec7e35c5.mp4";

/***/ }),

/***/ "@preact-hooks/unistore":
/*!*****************************************!*\
  !*** external "@preact-hooks/unistore" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@preact-hooks/unistore");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ "preact/compat":
/*!********************************!*\
  !*** external "preact/compat" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("preact/compat");

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

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("regenerator-runtime");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/server/api/index.ts");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_9__);









// @ts-ignore

var server = express__WEBPACK_IMPORTED_MODULE_5___default()();
if (_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_1__.isDevelopment) (0,_middlewares__WEBPACK_IMPORTED_MODULE_2__.setupDevMiddleware)(server);
server.use(compression__WEBPACK_IMPORTED_MODULE_8___default()());
server.use(helmet__WEBPACK_IMPORTED_MODULE_9___default()(APP_CONFIG.helmetOptions));
server.use(cookie_parser__WEBPACK_IMPORTED_MODULE_6___default()("", APP_CONFIG.cookieParserOptions));
server.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()("dev", APP_CONFIG.morganOptions));
server.use(express__WEBPACK_IMPORTED_MODULE_5___default()["static"](path__WEBPACK_IMPORTED_MODULE_7___default().resolve("dist"), {
    index: false
}));
server.use("/api", _api__WEBPACK_IMPORTED_MODULE_3__["default"]);
server.use(_middlewares__WEBPACK_IMPORTED_MODULE_2__.ssrRouter);
server.listen(APP_CONFIG.serverPort, APP_CONFIG.serverHost, function() {});

})();

/******/ })()
;
//# sourceMappingURL=server.js.map