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
___CSS_LOADER_EXPORT___.push([module.id, "/* @tailwind base;\n@tailwind components;\n@tailwind utilities; */", "",{"version":3,"sources":["webpack://./src/assets/styles/main.pcss"],"names":[],"mappings":"AAAA;;sBAEsB","sourcesContent":["/* @tailwind base;\n@tailwind components;\n@tailwind utilities; */"],"sourceRoot":""}]);
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
    title: "",
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
                if (_helpers__WEBPACK_IMPORTED_MODULE_5__.environment.isServer && route.statusCode) {
                    var ctx = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_server_middlewares_express_context__WEBPACK_IMPORTED_MODULE_7__["default"].getContext());
                    var rexp = new RegExp("".concat(route.path.replace(/:[^/]+/, ".+?")));
                    if (rexp.test(docUrl.pathname)) {
                        ctx.statusCode = route.statusCode;
                        console.log(docUrl.pathname, ctx.req.path, route.path);
                    }
                }
                return routeUi;
            })
        })
    });
};
function handleRouteChange(ev) {}


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
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "preact/jsx-runtime");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
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





var Markdown = function(props) {
    var ref = _slicedToArray((0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)(""), 2), content = ref[0], setContent = ref[1];
    var _options;
    if (props.src) {
        var ref1 = _slicedToArray((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useAsyncDataFetch)({
            onServer: true,
            reuse: true
        }, /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
            var content;
            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        _ctx.next = 2;
                        return fetch(props.src).then(function(res) {
                            return res.text();
                        });
                    case 2:
                        content = _ctx.sent;
                        return _ctx.abrupt("return", {
                            content: content
                        });
                    case 4:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }))), 2), _ = ref1[0], fCb = ref1[1];
        var _options1;
        fCb(function(param) {
            var content = param.content;
            return setContent(marked__WEBPACK_IMPORTED_MODULE_2__.marked.parse(content, (_options1 = props.options) !== null && _options1 !== void 0 ? _options1 : {}));
        });
    } else setContent(marked__WEBPACK_IMPORTED_MODULE_2__.marked.parse(props.content, (_options = props.options) !== null && _options !== void 0 ? _options : {}));
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
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
var FetchStateStatus;
(function(FetchStateStatus) {
    FetchStateStatus[FetchStateStatus["Success"] = 0] = "Success";
    FetchStateStatus[FetchStateStatus["Error"] = 1] = "Error";
    FetchStateStatus[FetchStateStatus["Pending"] = 2] = "Pending";
})(FetchStateStatus || (FetchStateStatus = {}));
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
                    routes = (__webpack_require__(/*! @/views */ "./src/views/index.ts")["default"]);
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

/***/ "./src/server/middlewares/express-context.ts":
/*!***************************************************!*\
  !*** ./src/server/middlewares/express-context.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// express-context.ts
//
// This utility can be used for managing the context of the express request and response lifecycle.
// There are many use cases this utility can fit. 
// This utility is following the facade pattern. hence it is not convenient to use it,
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _context: null,
    setContext: function setContext(ctx) {
        this._context = ctx;
    },
    // Accessing the _context prop directly in this facade is considered an anti-pattern,
    // instead use this getter to access it from this object.
    getContext: function getContext() {
        return this._context;
    }
});


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
/* harmony import */ var _express_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./express-context */ "./src/server/middlewares/express-context.ts");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_12__);
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
    strict: true,
    caseSensitive: true
});
ssrRouter.get("*", function() {
    var _ref = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {
        var ctx, doc, _statusCode;
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    ctx = {
                        req: req,
                        res: res,
                        statusCode: null
                    };
                    _express_context__WEBPACK_IMPORTED_MODULE_11__["default"].setContext((0,preact__WEBPACK_IMPORTED_MODULE_12__.createContext)(ctx));
                    _ctx.next = 4;
                    return renderDoc(req, res);
                case 4:
                    doc = _ctx.sent;
                    ;
                    res.status((_statusCode = ctx.statusCode) !== null && _statusCode !== void 0 ? _statusCode : 200).set("Content-Type", "text/html").send(doc).end();
                case 7:
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
                        _ctx.next = 16;
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
                    _ctx.next = 17;
                    break;
                case 16:
                    window.__APP_STATE__.asyncDataFetches = [];
                case 17:
                    // Setup the index.html here that will be send to the browser
                    document.body.innerHTML += '\n  <script crossorigin="use-credentials">\n    window.__APP_STATE__ = '.concat(devalue__WEBPACK_IMPORTED_MODULE_6___default()(initState), "\n    window.__UNISTORE_STATE__ = ").concat(devalue__WEBPACK_IMPORTED_MODULE_6___default()(initStore.getState()), "\n    window.__whitelistRoutes = {}\n    window.__routes = {}\n    window.clientRuntimeConfig = window.__APP_STATE__.clientRuntimeConfig\n  </script>\n  ");
                    if (APP_CONFIG.mode == "ssr") {
                        __webpack_require__.g.finalRender = true;
                        document.querySelector(".app-root").innerHTML = renderApp();
                        delete __webpack_require__.g.finalRender;
                    }
                    return _ctx.abrupt("return", doc.serialize());
                case 20:
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

var thank_you_route = function(props) {
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

var not_found_route = function(props) {
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

var offline_route = function(props) {
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Offline works!"
    });
};
var maintenance_route = function(props) {
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

var careers_route = function(props) {
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

var contacts_route = function(props) {
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

var faqs_route = function(props) {
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

var how_it_works_route = function(props) {
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













var routes = [
    // Login pages
    {
        path: "/login",
        component: _views_login__WEBPACK_IMPORTED_MODULE_12__.login_route
    },
    // Static pages
    {
        path: "/",
        component: _views_landing__WEBPACK_IMPORTED_MODULE_4__.landing_route
    },
    {
        path: "/careers",
        component: _views_careers__WEBPACK_IMPORTED_MODULE_5__.careers_route
    },
    {
        path: "/contacts",
        component: _views_contacts__WEBPACK_IMPORTED_MODULE_6__.contacts_route
    },
    {
        path: "/faqs",
        component: _views_faqs__WEBPACK_IMPORTED_MODULE_3__.faqs_route
    },
    {
        path: "/how-it-works",
        component: _views_how_it_works__WEBPACK_IMPORTED_MODULE_10__.how_it_works_route
    },
    {
        path: "/more-about-us",
        component: _views_more_about_us__WEBPACK_IMPORTED_MODULE_8__.more_about_us_route
    },
    {
        path: "/professionals",
        component: _views_professionals__WEBPACK_IMPORTED_MODULE_9__.professionals_route
    },
    {
        path: "/lang-courses/:lang",
        component: _views_lang_courses__WEBPACK_IMPORTED_MODULE_11__.lang_courses_route
    },
    // Pricing pages
    {
        path: "/pricings",
        component: _views_pricings__WEBPACK_IMPORTED_MODULE_7__.pricings_route
    },
    // Status pages
    {
        path: "/greetings/thank-you/:page",
        component: _views_status_200s__WEBPACK_IMPORTED_MODULE_0__.thank_you_route,
        statusCode: 202
    },
    {
        path: "/error/page-not-found",
        component: _views_status_404__WEBPACK_IMPORTED_MODULE_1__.not_found_route,
        statusCode: 404
    },
    {
        path: "/error/offline",
        component: _views_status_503__WEBPACK_IMPORTED_MODULE_2__.offline_route,
        statusCode: 503
    },
    {
        path: "/error/maintenance",
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
/* harmony import */ var _contents_fruits_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contents/fruits.json */ "./src/contents/fruits.json");
/* harmony import */ var _contents_md_message_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contents/md/message.md */ "./src/contents/md/message.md");




var landing_route = function(props) {
    var fruits = _contents_fruits_json__WEBPACK_IMPORTED_MODULE_2__.fruits;
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                children: [
                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", {
                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                    children: "Id"
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                    children: "Name (Quantity)"
                                }),
                                /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                    children: "Price"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", {
                        children: fruits.map(function(fruit) {
                            return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                            children: fruit.id
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                            children: fruit.name
                                        }),
                                        /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                            children: fruit.price
                                        })
                                    ]
                                })
                            });
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements__WEBPACK_IMPORTED_MODULE_1__.Markdown, {
                content: _contents_md_message_md__WEBPACK_IMPORTED_MODULE_3__
            })
        ]
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

var lang_courses_route = function(props) {
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

var login_route = function(props) {
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

var more_about_us_route = function(props) {
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

var pricings_route = function(props) {
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

var professionals_route = function(props) {
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "Professionals works!"
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
                test: /\.(md)$/i,
                type: "asset/source"
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
            ".js",
            ".md"
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
                    from: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("src", "assets", "robots.txt"),
                    to: path__WEBPACK_IMPORTED_MODULE_3___default().resolve("dist")
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

/***/ "./src/contents/md/message.md":
/*!************************************!*\
  !*** ./src/contents/md/message.md ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "#### The quick brown fox jumps over the lazy dog.\n---\nOkay now that we are done writing all of these, we will now commit these to our data.\n\n- Firstly";

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

/***/ }),

/***/ "./src/contents/fruits.json":
/*!**********************************!*\
  !*** ./src/contents/fruits.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"updated_at":"","fruits":[{"id":1,"name":"Apple (x17)","price":"₱1,550"},{"id":2,"name":"Mangosteen (x13)","price":"₱2,310"},{"id":3,"name":"Pineapple (x11)","price":"₱1,341"},{"id":4,"name":"Watermelon (x13)","price":"₱2,651"},{"id":5,"name":"Kiwi (x84)","price":"₱9,761"},{"id":6,"name":"Papaya (x12)","price":"₱5,321"}]}');

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

var server = express__WEBPACK_IMPORTED_MODULE_4___default()();
if (_helpers_ssr_utils__WEBPACK_IMPORTED_MODULE_1__.isDevelopment) (0,_middlewares__WEBPACK_IMPORTED_MODULE_2__.setupDevMiddleware)(server);
server.use(compression__WEBPACK_IMPORTED_MODULE_7___default()());
server.use(helmet__WEBPACK_IMPORTED_MODULE_8___default()(APP_CONFIG.helmetOptions));
server.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()("", APP_CONFIG.cookieParserOptions));
server.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()("dev", APP_CONFIG.morganOptions));
server.use(express__WEBPACK_IMPORTED_MODULE_4___default()["static"](path__WEBPACK_IMPORTED_MODULE_6___default().resolve("dist"), {
    index: false
}));
// server.use('/api', apiRouter)
server.use(_middlewares__WEBPACK_IMPORTED_MODULE_2__.ssrRouter);
server.listen(APP_CONFIG.serverPort, APP_CONFIG.serverHost, function() {});

})();

/******/ })()
;
//# sourceMappingURL=server.js.map