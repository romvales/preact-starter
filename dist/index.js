/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@preact-hooks/unistore/dist/hooks.modern.js":
/*!******************************************************************!*\
  !*** ./node_modules/@preact-hooks/unistore/dist/hooks.modern.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreContext": () => (/* binding */ s),
/* harmony export */   "StoreProvider": () => (/* binding */ v),
/* harmony export */   "useAction": () => (/* binding */ p),
/* harmony export */   "useSelector": () => (/* binding */ h),
/* harmony export */   "useStore": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var a="undefined"!=typeof window?preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect,i=(r,e)=>r===e,l=r=>(r=r.split(/\s*,\s*/),e=>{for(var t={},n=0;n<r.length;n++)t[r[n]]=e[r[n]];return t}),s=(0,preact__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),v=s.Provider,f=()=>(0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext)(s),h=function(r,n){void 0===n&&(n=i);var c,u=f(),[,o]=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer)(r=>r+1,0),s=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),v=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),h=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),p="string"==typeof r;try{if(s.current!==r||h.current){var d=u.getState();c=p?l(r)(d):r(d)}else c=v.current}catch(r){var g="An error occured while selecting the store state: "+r.message+".";throw h.current&&(g+="\nThe error may be related to the previous error:\n"+h.current.stack+"\n\nOriginal stack trace:"),new Error(g)}return a(()=>{s.current=p?l(r):r,v.current=c,h.current=null}),a(()=>{var r=()=>{try{var r=s.current(u.getState());if(n(r,v.current))return;v.current=r}catch(r){h.current=r}o({})},e=u.subscribe(r);return r(),()=>e()},[u]),c},p=r=>{var e=f();return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>e.action(r),[e,r])};


/***/ }),

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = ({onlyFirst = false} = {}) => {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, onlyFirst ? undefined : 'g');
};


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ "./node_modules/axios/lib/defaults/transitional.js");
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");
var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");
var parseProtocol = __webpack_require__(/*! ../helpers/parseProtocol */ "./node_modules/axios/lib/helpers/parseProtocol.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    var protocol = parseProtocol(fullPath);

    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults/index.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = __webpack_require__(/*! ./cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/axios/lib/env/data.js").version);
axios.toFormData = __webpack_require__(/*! ./helpers/toFormData */ "./node_modules/axios/lib/helpers/toFormData.js");

// Expose AxiosError class
axios.AxiosError = __webpack_require__(/*! ../lib/core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var CanceledError = __webpack_require__(/*! ./CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new CanceledError(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function CanceledError(message) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

module.exports = CanceledError;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var buildFullPath = __webpack_require__(/*! ./buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

var prototype = AxiosError.prototype;
var descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED'
// eslint-disable-next-line func-names
].forEach(function(code) {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = function(error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

module.exports = AxiosError;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");
var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ./AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");
var transitionalDefaults = __webpack_require__(/*! ./transitional */ "./node_modules/axios/lib/defaults/transitional.js");
var toFormData = __webpack_require__(/*! ../helpers/toFormData */ "./node_modules/axios/lib/helpers/toFormData.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ../adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ../adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    var isObjectPayload = utils.isObject(data);
    var contentType = headers && headers['Content-Type'];

    var isFileList;

    if ((isFileList = utils.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: __webpack_require__(/*! ./env/FormData */ "./node_modules/axios/lib/helpers/null.js")
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = {
  "version": "0.27.2"
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((module) => {

// eslint-disable-next-line strict
module.exports = null;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/

function toFormData(obj, formData) {
  // eslint-disable-next-line no-param-reassign
  formData = formData || new FormData();

  var stack = [];

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  function build(data, parentKey) {
    if (utils.isPlainObject(data) || utils.isArray(data)) {
      if (stack.indexOf(data) !== -1) {
        throw Error('Circular reference detected in ' + parentKey);
      }

      stack.push(data);

      utils.forEach(data, function each(value, key) {
        if (utils.isUndefined(value)) return;
        var fullKey = parentKey ? parentKey + '.' + key : key;
        var arr;

        if (value && !parentKey && typeof value === 'object') {
          if (utils.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
            // eslint-disable-next-line func-names
            arr.forEach(function(el) {
              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }

        build(value, fullKey);
      });

      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data));
    }
  }

  build(obj);

  return formData;
}

module.exports = toFormData;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(/*! ../env/data */ "./node_modules/axios/lib/env/data.js").version);
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

// eslint-disable-next-line func-names
var kindOf = (function(cache) {
  // eslint-disable-next-line func-names
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
})(Object.create(null));

function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */

function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */

function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};

  destObj = destObj || {};

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */
function toArray(thing) {
  if (!thing) return null;
  var i = thing.length;
  if (isUndefined(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

// eslint-disable-next-line func-names
var isTypedArray = (function(TypedArray) {
  // eslint-disable-next-line func-names
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray,
  isFileList: isFileList
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/main.pcss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/main.pcss ***!
  \*********************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v3.2.6 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline;-webkit-text-decoration:underline dotted currentColor;text-decoration:underline dotted currentColor}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder, textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.bottom-0{bottom:0}.bottom-\\[-1px\\]{bottom:-1px}.left-0{left:0}.right-0{right:0}.top-0{top:0}.isolate{isolation:isolate}.z-10{z-index:10}.z-20{z-index:20}.z-40{z-index:40}.float-left{float:left}.m-3{margin:.75rem}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-bottom:.5rem;margin-top:.5rem}.my-3{margin-bottom:.75rem;margin-top:.75rem}.my-4{margin-bottom:1rem;margin-top:1rem}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mr-4{margin-right:1rem}.mt-1{margin-top:.25rem}.mt-10{margin-top:2.5rem}.mt-16{margin-top:4rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-7{margin-top:1.75rem}.mt-9{margin-top:2.25rem}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.hidden{display:none}.h-12{height:3rem}.h-44{height:11rem}.h-48{height:12rem}.h-52{height:13rem}.h-6{height:1.5rem}.h-60{height:15rem}.h-7{height:1.75rem}.h-72{height:18rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-full{height:100%}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-12{width:3rem}.w-32{width:8rem}.w-48{width:12rem}.w-6{width:1.5rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-96{width:24rem}.w-\\[20rem\\]{width:20rem}.w-full{width:100%}.w-screen{width:100vw}.min-w-max{min-width:-moz-max-content;min-width:max-content}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.grow{flex-grow:1}.grow-0{flex-grow:0}.table-fixed{table-layout:fixed}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-tl-lg{border-top-left-radius:.5rem}.rounded-tl-none{border-top-left-radius:0}.rounded-tr-lg{border-top-right-radius:.5rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-slate-300{--tw-border-opacity:1;border-color:rgba(203,213,225,var(--tw-border-opacity))}.bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.bg-gray-700{--tw-bg-opacity:1;background-color:rgba(55,65,81,var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.bg-gray-800\\/80{background-color:rgba(31,41,55,.8)}.bg-primary-200{--tw-bg-opacity:1;background-color:rgba(133,65,219,var(--tw-bg-opacity))}.bg-primary-300{--tw-bg-opacity:1;background-color:rgba(118,55,199,var(--tw-bg-opacity))}.bg-primary-400{--tw-bg-opacity:1;background-color:rgba(93,21,185,var(--tw-bg-opacity))}.bg-rose-600{--tw-bg-opacity:1;background-color:rgba(225,29,72,var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-7{padding:1.75rem}.p-8{padding:2rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-16{padding-left:4rem;padding-right:4rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-\\[0\\.5rem\\]{padding-left:.5rem;padding-right:.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.pb-2{padding-bottom:.5rem}.pb-6{padding-bottom:1.5rem}.pb-\\[5rem\\]{padding-bottom:5rem}.pt-\\[4rem\\]{padding-top:4rem}.text-center{text-align:center}.text-justify{text-align:justify}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-\\[3rem\\]{font-size:3rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.text-blue-600{--tw-text-opacity:1;color:rgba(37,99,235,var(--tw-text-opacity))}.text-blue-700{--tw-text-opacity:1;color:rgba(29,78,216,var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:rgba(209,213,219,var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgba(55,65,81,var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgba(17,24,39,var(--tw-text-opacity))}.text-primary-300{--tw-text-opacity:1;color:rgba(118,55,199,var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.opacity-30{opacity:.3}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.invert{--tw-invert:invert(100%)}.invert,.sepia{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.sepia{--tw-sepia:sepia(100%)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.dark-contains{filter:invert(44%) sepia(64%) saturate(587%) hue-rotate(224deg) brightness(87%) contrast(94%)}.light-contains{filter:invert(25%) sepia(42%) saturate(4829%) hue-rotate(257deg) brightness(81%) contrast(90%)}.dark-not-contains{filter:invert(100%) sepia(3%) saturate(1294%) hue-rotate(180deg) brightness(97%) contrast(89%)}.light-not-contains{filter:invert(5%) sepia(9%) saturate(636%) hue-rotate(109deg) brightness(95%) contrast(95%)}.dark hr,.dark table,.dark td,.dark th,.dark tr{--tw-border-opacity:1;border-color:rgba(51,65,85,var(--tw-border-opacity))}.dark .dark\\:border-primary-400{--tw-border-opacity:1;border-color:rgba(93,21,185,var(--tw-border-opacity))}.dark .dark\\:bg-gray-900{--tw-bg-opacity:1;background-color:rgba(17,24,39,var(--tw-bg-opacity))}.dark .dark\\:bg-slate-700{--tw-bg-opacity:1;background-color:rgba(51,65,85,var(--tw-bg-opacity))}.dark .dark\\:bg-slate-800{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.dark .dark\\:bg-slate-900{--tw-bg-opacity:1;background-color:rgba(15,23,42,var(--tw-bg-opacity))}.dark .dark\\:text-blue-400{--tw-text-opacity:1;color:rgba(96,165,250,var(--tw-text-opacity))}.dark .dark\\:text-gray-600{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.dark .dark\\:text-slate-400{--tw-text-opacity:1;color:rgba(148,163,184,var(--tw-text-opacity))}.dark .dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.dark .dark\\:dark-contains{filter:invert(44%) sepia(64%) saturate(587%) hue-rotate(224deg) brightness(87%) contrast(94%)}.dark .dark\\:dark-not-contains{filter:invert(100%) sepia(3%) saturate(1294%) hue-rotate(180deg) brightness(97%) contrast(89%)}@media (min-width:1024px){.lg\\:w-16{width:4rem}.lg\\:object-top{-o-object-position:top;object-position:top}}@media (min-width:1280px){.xl\\:w-16{width:4rem}.xl\\:rounded-bl-lg{border-bottom-left-radius:.5rem}.xl\\:rounded-tr-none{border-top-right-radius:0}}", "",{"version":3,"sources":["webpack://./src/assets/styles/main.pcss","<no source>"],"names":[],"mappings":"AAAA,+DAAc,CAAd,iBAAA,sBAAc,CAAd,qBAAc,CAAd,eAAA,eAAc,CAAd,KAAA,6BAAc,CAAd,4BAAc,CAAd,iNAAc,CAAd,eAAc,CAAd,eAAc,CAAd,aAAc,CAAd,UAAc,CAAd,KAAA,mBAAc,CAAd,QAAc,CAAd,GAAA,oBAAc,CAAd,aAAc,CAAd,QAAc,CAAd,oBAAA,yBAAc,CAAd,qDAAc,CAAd,6CAAc,CAAd,kBAAA,iBAAc,CAAd,mBAAc,CAAd,EAAA,aAAc,CAAd,uBAAc,CAAd,SAAA,kBAAc,CAAd,kBAAA,mGAAc,CAAd,aAAc,CAAd,MAAA,aAAc,CAAd,QAAA,aAAc,CAAd,aAAc,CAAd,iBAAc,CAAd,uBAAc,CAAd,IAAA,aAAc,CAAd,IAAA,SAAc,CAAd,MAAA,wBAAc,CAAd,oBAAc,CAAd,aAAc,CAAd,sCAAA,aAAc,CAAd,mBAAc,CAAd,cAAc,CAAd,mBAAc,CAAd,mBAAc,CAAd,QAAc,CAAd,SAAc,CAAd,cAAA,mBAAc,CAAd,gDAAA,yBAAc,CAAd,4BAAc,CAAd,qBAAc,CAAd,gBAAA,YAAc,CAAd,iBAAA,eAAc,CAAd,SAAA,uBAAc,CAAd,wDAAA,WAAc,CAAd,cAAA,4BAAc,CAAd,mBAAc,CAAd,4BAAA,uBAAc,CAAd,6BAAA,yBAAc,CAAd,YAAc,CAAd,QAAA,iBAAc,CAAd,mDAAA,QAAc,CAAd,SAAA,QAAc,CAAd,gBAAA,SAAc,CAAd,WAAA,eAAc,CAAd,QAAc,CAAd,SAAc,CAAd,SAAA,eAAc,CAAd,oDAAA,aAAc,CAAd,SAAc,CAAd,yCAAA,aAAc,CAAd,SAAc,CAAd,qBAAA,cAAc,CAAd,UAAA,cAAc,CAAd,+CAAA,aAAc,CAAd,qBAAc,CAAd,UAAA,WAAc,CAAd,cAAc,CAAd,SAAA,YAAc,CAAd,iBAAA,uBAAc,CAAd,uBAAc,CAAd,kBAAc,CAAd,kBAAc,CAAd,aAAc,CAAd,aAAc,CAAd,aAAc,CAAd,cAAc,CAAd,cAAc,CAAd,YAAc,CAAd,YAAc,CAAd,iBAAc,CAAd,qCAAc,CAAd,cAAc,CAAd,mBAAc,CAAd,qBAAc,CAAd,sBAAc,CAAd,uBAAc,CAAd,iBAAc,CAAd,0BAAc,CAAd,2BAAc,CAAd,mCAAc,CAAd,uCAAc,CAAd,gCAAc,CAAd,2BAAc,CAAd,mCAAc,CAAd,WAAc,CAAd,iBAAc,CAAd,eAAc,CAAd,gBAAc,CAAd,iBAAc,CAAd,aAAc,CAAd,eAAc,CAAd,YAAc,CAAd,kBAAc,CAAd,oBAAc,CAAd,0BAAc,CAAd,wBAAc,CAAd,yBAAc,CAAd,0BAAc,CAAd,sBAAc,CAAd,uBAAc,CAAd,wBAAc,CAAd,qBAAc,CAAd,WAAA,uBAAc,CAAd,uBAAc,CAAd,kBAAc,CAAd,kBAAc,CAAd,aAAc,CAAd,aAAc,CAAd,aAAc,CAAd,cAAc,CAAd,cAAc,CAAd,YAAc,CAAd,YAAc,CAAd,iBAAc,CAAd,qCAAc,CAAd,cAAc,CAAd,mBAAc,CAAd,qBAAc,CAAd,sBAAc,CAAd,uBAAc,CAAd,iBAAc,CAAd,0BAAc,CAAd,2BAAc,CAAd,mCAAc,CAAd,uCAAc,CAAd,gCAAc,CAAd,2BAAc,CAAd,mCAAc,CAAd,WAAc,CAAd,iBAAc,CAAd,eAAc,CAAd,gBAAc,CAAd,iBAAc,CAAd,aAAc,CAAd,eAAc,CAAd,YAAc,CAAd,kBAAc,CAAd,oBAAc,CAAd,0BAAc,CAAd,wBAAc,CAAd,yBAAc,CAAd,0BAAc,CAAd,sBAAc,CAAd,uBAAc,CAAd,wBAAc,CAAd,qBAAc,CACd,WAAA,UAAoB,CAApB,yBAAA,WAAA,eAAoB,CAAA,CAApB,yBAAA,WAAA,eAAoB,CAAA,CAApB,0BAAA,WAAA,gBAAoB,CAAA,CAApB,0BAAA,WAAA,gBAAoB,CAAA,CAApB,0BAAA,WAAA,gBAAoB,CAAA,CACpB,OAAA,cAAmB,CAAnB,UAAA,iBAAmB,CAAnB,UAAA,iBAAmB,CAAnB,UAAA,QAAmB,CAAnB,iBAAA,WAAmB,CAAnB,QAAA,MAAmB,CAAnB,SAAA,OAAmB,CAAnB,OAAA,KAAmB,CAAnB,SAAA,iBAAmB,CAAnB,MAAA,UAAmB,CAAnB,MAAA,UAAmB,CAAnB,MAAA,UAAmB,CAAnB,YAAA,UAAmB,CAAnB,KAAA,aAAmB,CAAnB,MAAA,gBAAmB,CAAnB,iBAAmB,CAAnB,SAAA,gBAAmB,CAAnB,iBAAmB,CAAnB,MAAA,mBAAmB,CAAnB,gBAAmB,CAAnB,MAAA,oBAAmB,CAAnB,iBAAmB,CAAnB,MAAA,kBAAmB,CAAnB,eAAmB,CAAnB,MAAA,oBAAmB,CAAnB,iBAAmB,CAAnB,MAAA,oBAAmB,CAAnB,MAAA,mBAAmB,CAAnB,MAAA,oBAAmB,CAAnB,MAAA,kBAAmB,CAAnB,MAAA,qBAAmB,CAAnB,MAAA,kBAAmB,CAAnB,MAAA,iBAAmB,CAAnB,MAAA,kBAAmB,CAAnB,MAAA,mBAAmB,CAAnB,MAAA,kBAAmB,CAAnB,MAAA,iBAAmB,CAAnB,MAAA,iBAAmB,CAAnB,OAAA,iBAAmB,CAAnB,OAAA,eAAmB,CAAnB,MAAA,gBAAmB,CAAnB,MAAA,iBAAmB,CAAnB,MAAA,eAAmB,CAAnB,MAAA,kBAAmB,CAAnB,MAAA,kBAAmB,CAAnB,MAAA,kBAAmB,CAAnB,cAAA,oBAAmB,CAAnB,MAAA,YAAmB,CAAnB,aAAA,mBAAmB,CAAnB,OAAA,aAAmB,CAAnB,QAAA,YAAmB,CAAnB,MAAA,WAAmB,CAAnB,MAAA,YAAmB,CAAnB,MAAA,YAAmB,CAAnB,MAAA,YAAmB,CAAnB,KAAA,aAAmB,CAAnB,MAAA,YAAmB,CAAnB,KAAA,cAAmB,CAAnB,MAAA,YAAmB,CAAnB,KAAA,WAAmB,CAAnB,KAAA,cAAmB,CAAnB,QAAA,WAAmB,CAAnB,UAAA,YAAmB,CAAnB,cAAA,gBAAmB,CAAnB,MAAA,UAAmB,CAAnB,MAAA,UAAmB,CAAnB,MAAA,WAAmB,CAAnB,KAAA,YAAmB,CAAnB,KAAA,aAAmB,CAAnB,KAAA,UAAmB,CAAnB,KAAA,aAAmB,CAAnB,MAAA,WAAmB,CAAnB,aAAA,WAAmB,CAAnB,QAAA,UAAmB,CAAnB,UAAA,WAAmB,CAAnB,WAAA,0BAAmB,CAAnB,qBAAmB,CAAnB,QAAA,WAAmB,CAAnB,aAAA,aAAmB,CAAnB,MAAA,WAAmB,CAAnB,QAAA,WAAmB,CAAnB,aAAA,kBAAmB,CAAnB,gBAAA,cAAmB,CAAnB,UAAA,qBAAmB,CAAnB,WAAA,cAAmB,CAAnB,aAAA,sBAAmB,CAAnB,WAAA,oBAAmB,CAAnB,cAAA,kBAAmB,CAAnB,aAAA,wBAAmB,CAAnB,gBAAA,sBAAmB,CAAnB,iBAAA,6BAAmB,CAAnB,iBAAA,eAAmB,CAAnB,aAAA,kBAAmB,CAAnB,aAAA,oBAAmB,CAAnB,cAAA,oBAAmB,CAAnB,YAAA,mBAAmB,CAAnB,YAAA,oBAAmB,CAAnB,eAAA,4BAAmB,CAAnB,iBAAA,wBAAmB,CAAnB,eAAA,6BAAmB,CAAnB,QAAA,gBAAmB,CAAnB,UAAA,gBAAmB,CAAnB,UAAA,uBAAmB,CAAnB,kBAAA,qBAAmB,CAAnB,uDAAmB,CAAnB,UAAA,iBAAmB,CAAnB,iDAAmB,CAAnB,aAAA,iBAAmB,CAAnB,oDAAmB,CAAnB,aAAA,iBAAmB,CAAnB,oDAAmB,CAAnB,iBAAA,kCAAmB,CAAnB,gBAAA,iBAAmB,CAAnB,sDAAmB,CAAnB,gBAAA,iBAAmB,CAAnB,sDAAmB,CAAnB,gBAAA,iBAAmB,CAAnB,qDAAmB,CAAnB,aAAA,iBAAmB,CAAnB,qDAAmB,CAAnB,gBAAA,4BAAmB,CAAnB,UAAA,iBAAmB,CAAnB,uDAAmB,CAAnB,cAAA,mBAAmB,CAAnB,gBAAmB,CAAnB,KAAA,cAAmB,CAAnB,KAAA,aAAmB,CAAnB,KAAA,cAAmB,CAAnB,KAAA,YAAmB,CAAnB,KAAA,eAAmB,CAAnB,KAAA,eAAmB,CAAnB,KAAA,YAAmB,CAAnB,MAAA,mBAAmB,CAAnB,oBAAmB,CAAnB,OAAA,iBAAmB,CAAnB,kBAAmB,CAAnB,MAAA,mBAAmB,CAAnB,oBAAmB,CAAnB,MAAA,iBAAmB,CAAnB,kBAAmB,CAAnB,MAAA,oBAAmB,CAAnB,qBAAmB,CAAnB,gBAAA,kBAAmB,CAAnB,mBAAmB,CAAnB,MAAA,oBAAmB,CAAnB,iBAAmB,CAAnB,MAAA,qBAAmB,CAAnB,kBAAmB,CAAnB,MAAA,oBAAmB,CAAnB,MAAA,qBAAmB,CAAnB,aAAA,mBAAmB,CAAnB,aAAA,gBAAmB,CAAnB,aAAA,iBAAmB,CAAnB,cAAA,kBAAmB,CAAnB,UAAA,gBAAmB,CAAnB,gBAAmB,CAAnB,UAAA,kBAAmB,CAAnB,mBAAmB,CAAnB,eAAA,cAAmB,CAAnB,WAAA,cAAmB,CAAnB,kBAAmB,CAAnB,SAAA,kBAAmB,CAAnB,mBAAmB,CAAnB,SAAA,iBAAmB,CAAnB,mBAAmB,CAAnB,SAAA,iBAAmB,CAAnB,mBAAmB,CAAnB,WAAA,eAAmB,CAAnB,eAAA,eAAmB,CAAnB,eAAA,mBAAmB,CAAnB,4CAAmB,CAAnB,eAAA,mBAAmB,CAAnB,4CAAmB,CAAnB,eAAA,mBAAmB,CAAnB,8CAAmB,CAAnB,eAAA,mBAAmB,CAAnB,8CAAmB,CAAnB,eAAA,mBAAmB,CAAnB,2CAAmB,CAAnB,eAAA,mBAAmB,CAAnB,2CAAmB,CAAnB,eAAA,mBAAmB,CAAnB,2CAAmB,CAAnB,eAAA,mBAAmB,CAAnB,2CAAmB,CAAnB,kBAAA,mBAAmB,CAAnB,6CAAmB,CAAnB,YAAA,mBAAmB,CAAnB,8CAAmB,CAAnB,YAAA,UAAmB,CAAnB,WAAA,yEAAmB,CAAnB,iGAAmB,CAAnB,2DAAmB,CAAnB,8GAAmB,CAAnB,cAAA,6BAAmB,CAAnB,kBAAmB,CAAnB,QAAA,wBAAmB,CAAnB,eAAA,gLAAmB,CAAnB,OAAA,sBAAmB,CAAnB,QAAA,gLAAmB,CAIjB,eACE,6FACF,CAEA,gBACE,8FACF,CAEA,mBACE,8FACF,CAEA,oBACE,2FACF,CAKA,gDAAA,qBAA4B,CAA5B,oDAA4B,CAzB9B,gCAAA,sBCAA,ADAA,sDCAA,ADAA,yBAAA,kBCAA,ADAA,qDCAA,ADAA,0BAAA,kBCAA,ADAA,qDCAA,ADAA,0BAAA,kBCAA,ADAA,qDCAA,ADAA,0BAAA,kBCAA,ADAA,qDCAA,ADAA,2BAAA,oBCAA,ADAA,8CCAA,ADAA,2BAAA,oBCAA,ADAA,4CCAA,ADAA,4BAAA,oBCAA,ADAA,+CCAA,ADAA,wBAAA,oBCAA,ADAA,+CCAA,ADME,2BACE,6FACF,CAMA,+BACE,8FACF,CAhBF,0BAAA,UAAA,WCAA,ADAA,gBAAA,uBCAA,ADAA,oBCAA,CAAA,ADAA,0BAAA,UAAA,WCAA,ADAA,mBAAA,gCCAA,ADAA,qBAAA,0BCAA,CAAA","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer utilities {\n\n  .dark-contains {\n    filter: invert(44%) sepia(64%) saturate(587%) hue-rotate(224deg) brightness(87%) contrast(94%);\n  }\n\n  .light-contains {\n    filter: invert(25%) sepia(42%) saturate(4829%) hue-rotate(257deg) brightness(81%) contrast(90%);\n  }\n\n  .dark-not-contains {\n    filter: invert(100%) sepia(3%) saturate(1294%) hue-rotate(180deg) brightness(97%) contrast(89%);\n  }\n\n  .light-not-contains {\n    filter: invert(5%) sepia(9%) saturate(636%) hue-rotate(109deg) brightness(95%) contrast(95%);\n  }\n  \n}\n\nhr, table, tr, td, th {\n  @apply dark:border-slate-700;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Image.pcss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Image.pcss ***!
  \*******************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MessageNotification.pcss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MessageNotification.pcss ***!
  \*********************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".message-notification{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);border-radius:.5rem;border-width:1px;box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);display:flex;margin-bottom:.75rem;margin-top:.75rem;padding:1rem}.dark .message-notification p{--tw-text-opacity:1;color:rgba(100,116,139,var(--tw-text-opacity))}.dark .message-notification{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity));border-color:rgba(30,41,59,var(--tw-border-opacity))}.message-notification .message-notification__content{flex:1 1 0%;flex-grow:1;margin-left:1rem;margin-right:1rem}.message-notification .message-notification__content .content__title{font-size:1.125rem;font-weight:600;line-height:1.75rem;margin-bottom:.75rem}.message-notification .message-notification__content .content__message{text-align:left}.message-notification .message-notification__content .content__message .message__link{--tw-text-opacity:1;color:rgba(29,78,216,var(--tw-text-opacity))}.dark .message-notification .message-notification__content .content__message .message__link{--tw-text-opacity:1;color:rgba(96,165,250,var(--tw-text-opacity))}.message-notification .message-notification__icon-wrapper{flex-grow:0;flex-shrink:1;margin-top:.25rem}.message-notification .message-notification__hide{align-items:center;display:inline-flex;flex-grow:0;flex-shrink:1}", "",{"version":3,"sources":["webpack://./src/components/MessageNotification.pcss"],"names":[],"mappings":"AAEE,sBAAA,uEAAgD,CAAhD,+FAAgD,CAAhD,mBAAgD,CAAhD,gBAAgD,CAAhD,2DAAgD,CAAhD,8GAAgD,CAAhD,YAAgD,CAAhD,oBAAgD,CAAhD,iBAAgD,CAAhD,YAAgD,CAG9C,8BAAA,mBAA0B,CAA1B,8CAA0B,CAG5B,4BAAA,qBAA8C,CAA9C,iBAA8C,CAA9C,oDAA8C,CAA9C,oDAA8C,CAG5C,qDAAA,WAAuB,CAAvB,WAAuB,CAAvB,gBAAuB,CAAvB,iBAAuB,CAGrB,qEAAA,kBAAiC,CAAjC,eAAiC,CAAjC,mBAAiC,CAAjC,oBAAiC,CAIjC,uEAAA,eAAgB,CAGd,sFAAA,mBAAuC,CAAvC,4CAAuC,CAAvC,4FAAA,mBAAuC,CAAvC,6CAAuC,CAM3C,0DAAA,WAA8B,CAA9B,aAA8B,CAA9B,iBAA8B,CAI9B,kDAAA,kBAAkD,CAAlD,mBAAkD,CAAlD,WAAkD,CAAlD,aAAkD","sourcesContent":["\n.message-notification {\n  @apply flex border p-4 rounded-lg my-3 shadow-md;\n\n  p {\n    @apply dark:text-slate-500;\n  }\n\n  @apply dark:bg-slate-800 dark:border-slate-800;\n\n  .message-notification__content {\n    @apply grow flex-1 mx-4;\n\n    .content__title {\n      @apply text-lg mb-3 font-semibold;\n    }\n\n    .content__message {\n      @apply text-left;\n\n      .message__link {\n        @apply text-blue-700 dark:text-blue-400;\n      }\n    }\n  }\n\n  .message-notification__icon-wrapper {\n    @apply grow-0 flex-shrink mt-1;\n  }\n\n  .message-notification__hide {\n    @apply grow-0 flex-shrink inline-flex items-center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/404.pcss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/404.pcss ***!
  \************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".page-not-found{width:100%}@media (min-width:640px){.page-not-found{max-width:640px}}@media (min-width:768px){.page-not-found{max-width:768px}}@media (min-width:1024px){.page-not-found{max-width:1024px}}@media (min-width:1280px){.page-not-found{max-width:1280px}}@media (min-width:1536px){.page-not-found{max-width:1536px}}.page-not-found{align-items:center;display:flex;justify-content:center;margin-left:auto;margin-right:auto;min-height:100vh}.page-not-found .page-not-found__message .message__heading{font-size:2.25rem;line-height:2.5rem}", "",{"version":3,"sources":["webpack://./src/views/404.pcss"],"names":[],"mappings":"AAEE,gBAAA,UAAsE,CAAtE,yBAAA,gBAAA,eAAsE,CAAA,CAAtE,yBAAA,gBAAA,eAAsE,CAAA,CAAtE,0BAAA,gBAAA,gBAAsE,CAAA,CAAtE,0BAAA,gBAAA,gBAAsE,CAAA,CAAtE,0BAAA,gBAAA,gBAAsE,CAAA,CAAtE,gBAAA,kBAAsE,CAAtE,YAAsE,CAAtE,sBAAsE,CAAtE,gBAAsE,CAAtE,iBAAsE,CAAtE,gBAAsE,CAIlE,2DAAA,iBAAe,CAAf,kBAAe","sourcesContent":["\n.page-not-found {\n  @apply container mx-auto flex justify-center items-center min-h-screen;\n\n  .page-not-found__message {\n    .message__heading {\n      @apply text-4xl;\n    }\n\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/About.pcss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/About.pcss ***!
  \**************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".about-page{width:100%}@media (min-width:640px){.about-page{max-width:640px}}@media (min-width:768px){.about-page{max-width:768px}}@media (min-width:1024px){.about-page{max-width:1024px}}@media (min-width:1280px){.about-page{max-width:1280px}}@media (min-width:1536px){.about-page{max-width:1536px}}.about-page{display:flex;flex-direction:column;margin-left:auto;margin-right:auto;min-height:100vh;padding-bottom:5rem;padding-left:.75rem;padding-right:.75rem}.about-page .about-page__header{padding-top:4rem}.about-page .about-page__header .header__logo{height:13rem;width:13rem}.about-page .about-page__header .header__fr-main{--tw-text-opacity:1;color:rgba(93,21,185,var(--tw-text-opacity));font-size:1.875rem;font-weight:600;line-height:2.25rem;margin-bottom:1.5rem;margin-top:1.5rem}.dark .about-page .about-page__header .header__fr-main{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.about-page .about-page__header .header__fr-message,.about-page .about-page__header .header__fr-small-message{text-align:justify}.dark .about-page .about-page__header .header__fr-message,.dark .about-page .about-page__header .header__fr-small-message{--tw-text-opacity:1;color:rgba(100,116,139,var(--tw-text-opacity))}.about-page .about-page__header p{margin-bottom:1rem}.about-page .about-page__main .main__gcash-qrcode figcaption{align-items:center;display:flex;flex-direction:column;margin-bottom:2rem;margin-top:2rem}.about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__separator{font-weight:600;margin-bottom:.5rem;margin-top:.5rem}.about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile{--tw-border-opacity:1;border-color:rgba(148,93,218,var(--tw-border-opacity));border-radius:.75rem;border-width:2px;display:flex;width:100%}.dark .about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile input{border-radius:.5rem;flex-grow:1;font-size:1.125rem;font-weight:600;line-height:1.75rem;outline:2px solid transparent;outline-offset:2px;text-align:center}.dark .about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile input{color:rgba(75,85,99,var(--tw-text-opacity))}.about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile input{background-color:transparent}.dark .about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile input{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.about-page .about-page__main .main__gcash-qrcode figcaption .gcash-qrcode__mobile button{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;background-color:rgba(133,65,219,var(--tw-bg-opacity));border-radius:.5rem;border-bottom-left-radius:0;border-top-left-radius:0;color:rgba(255,255,255,var(--tw-text-opacity));display:flex;justify-content:center;padding:.75rem}.about-page .about-page__main .main__gcash-qrcode aside.qr-modal{--tw-bg-opacity:1;align-items:center;background-color:rgba(55,65,81,var(--tw-bg-opacity));flex-direction:column;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:10}.about-page .about-page__main .main__gcash-qrcode aside.qr-modal img{width:24rem}.about-page .about-page__main .main__gcash-qrcode .gcash-qrcode__qr-modal{--tw-text-opacity:1;align-items:center;background-color:#007dfe;border-radius:1rem;color:rgba(255,255,255,var(--tw-text-opacity));display:flex;justify-content:center;padding:.5rem .75rem;width:100%}.about-page .about-page__main .main__gcash-qrcode .gcash-qrcode__qr-modal .qr-modal__logo{border-radius:.375rem;width:3rem}.about-page .about-page__main .main__gcash-qrcode .gcash-qrcode__qr-modal span{font-weight:700;margin-left:.75rem}.about-page .about-page__footer .footer__email-form{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);background-color:rgba(133,65,219,var(--tw-bg-opacity));border-radius:.5rem;border-width:1px;box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:rgba(255,255,255,var(--tw-text-opacity));margin-top:2.25rem;padding:1rem}.dark .about-page .about-page__footer .footer__email-form{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity));border-style:none}.about-page .about-page__footer .footer__email-form .email-form__title{font-size:1.5rem;font-weight:600;line-height:-2%;line-height:2rem;margin-bottom:1rem}.about-page .about-page__footer .footer__email-form p.email-form__message{margin-bottom:1rem}.dark .about-page .about-page__footer .footer__email-form p.email-form__message{--tw-text-opacity:1;color:rgba(148,163,184,var(--tw-text-opacity))}.about-page .about-page__footer .footer__email-form p.email-form__note{border-radius:.5rem;border-width:2px;display:flex;margin-bottom:1rem;margin-top:.5rem;padding:.75rem}.dark .about-page .about-page__footer .footer__email-form p.email-form__note{--tw-border-opacity:1;--tw-text-opacity:1;border-color:rgba(93,21,185,var(--tw-border-opacity));color:rgba(148,163,184,var(--tw-text-opacity))}.about-page .about-page__footer .footer__email-form p.email-form__note svg{width:8rem}.dark .about-page .about-page__footer .footer__email-form p.email-form__note svg{--tw-text-opacity:1;color:rgba(133,65,219,var(--tw-text-opacity))}.about-page .about-page__footer .footer__email-form section{display:flex;flex-direction:column}.about-page .about-page__footer .footer__email-form label{--tw-text-opacity:1;color:rgba(156,163,175,var(--tw-text-opacity));margin-left:.75rem;margin-top:.75rem;position:absolute}.about-page .about-page__footer .footer__email-form input[type=email],.about-page .about-page__footer .footer__email-form input[type=tel],.about-page .about-page__footer .footer__email-form input[type=text],.about-page .about-page__footer .footer__email-form textarea{--tw-border-opacity:1;--tw-text-opacity:1;border-color:rgba(203,213,225,var(--tw-border-opacity));border-radius:.5rem;border-width:1px;color:rgba(0,0,0,var(--tw-text-opacity));margin-bottom:.5rem;outline:2px solid transparent;outline-offset:2px;padding:.75rem}.dark .about-page .about-page__footer .footer__email-form input[type=email],.dark .about-page .about-page__footer .footer__email-form input[type=tel],.dark .about-page .about-page__footer .footer__email-form input[type=text],.dark .about-page .about-page__footer .footer__email-form textarea{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(15,23,42,var(--tw-bg-opacity));border-style:none;color:rgba(255,255,255,var(--tw-text-opacity))}.about-page .about-page__footer .footer__email-form textarea{resize:none}.about-page .about-page__footer .footer__email-form .email-form__submit-btn{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);background-color:rgba(93,21,185,var(--tw-bg-opacity));border-radius:.75rem;box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:rgba(255,255,255,var(--tw-text-opacity));cursor:pointer;font-size:1.125rem;font-weight:600;line-height:1.75rem;margin-top:1.75rem;padding:1rem;width:100%}", "",{"version":3,"sources":["webpack://./src/views/About.pcss"],"names":[],"mappings":"AACE,YAAA,UACW,CADX,yBAAA,YAAA,eACW,CAAA,CADX,yBAAA,YAAA,eACW,CAAA,CADX,0BAAA,YAAA,gBACW,CAAA,CADX,0BAAA,YAAA,gBACW,CAAA,CADX,0BAAA,YAAA,gBACW,CAAA,CADX,YAAA,YACW,CADX,qBACW,CADX,gBACW,CADX,iBACW,CADX,gBACW,CADX,mBACW,CADX,mBACW,CADX,oBACW,CAGT,gCAAA,gBAAgB,CAGd,8CAAA,YAAgB,CAAhB,WAAgB,CAIhB,iDAAA,mBAAmD,CAAnD,4CAAmD,CAAnD,kBAAmD,CAAnD,eAAmD,CAAnD,mBAAmD,CAAnD,oBAAmD,CAAnD,iBAAmD,CACnD,uDAAA,mBAAsB,CAAtB,8CAAsB,CAItB,8GAAA,kBAAuC,CAAvC,0HAAA,mBAAuC,CAAvC,8CAAuC,CAIvC,kCAAA,kBAAW,CAST,6DAAA,kBAAsC,CAAtC,YAAsC,CAAtC,qBAAsC,CAAtC,kBAAsC,CAAtC,eAAsC,CAGpC,sFAAA,eAAyB,CAAzB,mBAAyB,CAAzB,gBAAyB,CAIzB,mFAAA,qBAAyD,CAAzD,sDAAyD,CAAzD,oBAAyD,CAAzD,gBAAyD,CAAzD,YAAyD,CAAzD,UAAyD,CAEzD,yFAAA,iBAAwB,CAAxB,oDAAwB,CAItB,yFAAA,mBAC0C,CAD1C,WAC0C,CAD1C,kBAC0C,CAD1C,eAC0C,CAD1C,mBAC0C,CAD1C,6BAC0C,CAD1C,kBAC0C,CAD1C,iBAC0C,CAD1C,+FAAA,2CAC0C,CAE1C,yFAAA,4BAAqC,CAArC,+FAAA,mBAAqC,CAArC,8CAAqC,CAIrC,0FAGA,iBAAgC,CAAhC,mBAAgC,CAHhC,kBACiC,CAEjC,sDAAgC,CAHhC,mBACiC,CADjC,2BACiC,CADjC,wBACiC,CAEjC,8CAAgC,CAHhC,YACiC,CADjC,sBACiC,CADjC,cACiC,CAQrC,iEAAA,iBACsC,CADtC,kBACsC,CADtC,oDACsC,CADtC,qBACsC,CADtC,YACsC,CADtC,sBACsC,CADtC,MACsC,CADtC,cACsC,CADtC,KACsC,CADtC,UACsC,CADtC,UACsC,CAGpC,qEAAA,WAAW,CAIf,0EAGE,mBACuC,CADvC,kBACuC,CAHvC,wBAAyB,CAEzB,kBACuC,CADvC,8CACuC,CADvC,YACuC,CADvC,sBACuC,CADvC,oBACuC,CADvC,UAWF,CAPI,0FAAA,qBAAsB,CAAtB,UAAsB,CAItB,+EAAA,eAAqB,CAArB,kBAAqB,CAWzB,oDAAA,iBACY,CADZ,mBACY,CADZ,yEACY,CADZ,iGACY,CADZ,sDACY,CADZ,mBACY,CADZ,gBACY,CADZ,2DACY,CADZ,8GACY,CADZ,8CACY,CADZ,kBACY,CADZ,YACY,CAEZ,0DAAA,iBAAyC,CAAzC,oDAAyC,CAAzC,iBAAyC,CAEzC,uEAEE,gBAAkC,CAAlC,eAAkC,CADlC,eAAgB,CAChB,gBAAkC,CAAlC,kBACF,CAGE,0EAAA,kBAA+B,CAA/B,gFAAA,mBAA+B,CAA/B,8CAA+B,CAI/B,uEAAA,mBACyC,CADzC,gBACyC,CADzC,YACyC,CADzC,kBACyC,CADzC,gBACyC,CADzC,cACyC,CADzC,6EAAA,qBACyC,CADzC,mBACyC,CADzC,qDACyC,CADzC,8CACyC,CAGvC,2EAAA,UAAiC,CAAjC,iFAAA,mBAAiC,CAAjC,6CAAiC,CAKnC,4DAAA,YAAoB,CAApB,qBAAoB,CAIpB,0DAAA,mBAAuC,CAAvC,8CAAuC,CAAvC,kBAAuC,CAAvC,iBAAuC,CAAvC,iBAAuC,CAIvC,4QAAA,qBACgB,CADhB,mBACgB,CADhB,uDACgB,CADhB,mBACgB,CADhB,gBACgB,CADhB,wCACgB,CADhB,mBACgB,CADhB,6BACgB,CADhB,kBACgB,CADhB,cACgB,CAEhB,oSAAA,iBACkB,CADlB,mBACkB,CADlB,oDACkB,CADlB,iBACkB,CADlB,8CACkB,CAIlB,6DAAA,WAAkB,CAIlB,4EAAA,iBAC4C,CAD5C,mBAC4C,CAD5C,yEAC4C,CAD5C,iGAC4C,CAD5C,qDAC4C,CAD5C,oBAC4C,CAD5C,2DAC4C,CAD5C,8GAC4C,CAD5C,8CAC4C,CAD5C,cAC4C,CAD5C,kBAC4C,CAD5C,eAC4C,CAD5C,mBAC4C,CAD5C,kBAC4C,CAD5C,YAC4C,CAD5C,UAC4C","sourcesContent":[".about-page {\n  @apply px-3 flex flex-col container mx-auto min-h-screen\n    pb-[5rem];\n\n  .about-page__header {\n    @apply pt-[4rem];\n\n    .header__logo {\n      @apply h-52 w-52;\n    }\n    \n    .header__fr-main {\n      @apply text-3xl font-semibold my-6 text-primary-400;\n      @apply dark:text-white;\n    }\n\n    .header__fr-message, .header__fr-small-message {\n      @apply text-justify dark:text-slate-500;\n    }\n\n    p {\n      @apply mb-4;\n    }\n  }\n\n  .about-page__main {\n\n    .main__gcash-qrcode {\n\n      figcaption {\n        @apply flex flex-col items-center my-8;\n\n        .gcash-qrcode__separator {\n          @apply font-semibold my-2;\n        }\n\n        .gcash-qrcode__mobile {\n          @apply flex w-full border-2 rounded-xl border-primary-100;\n        \n          @apply dark:bg-slate-800;\n\n\n          input {\n            @apply grow outline-none rounded-lg text-center\n              text-lg dark:text-gray-600 font-semibold;\n            \n            @apply bg-transparent dark:text-white;\n          }\n\n          button {\n            @apply rounded-lg p-3 flex justify-center items-center\n              rounded-tl-none rounded-bl-none;\n            \n            @apply bg-primary-200 text-white;\n          }\n        }\n      }\n      \n      aside.qr-modal {\n        @apply fixed h-screen top-0 left-0 flex-col justify-center \n          z-10 bg-gray-700 items-center w-full;\n        \n        img {\n          @apply w-96;\n        }\n      } \n\n      .gcash-qrcode__qr-modal {\n        background-color: #007dfe;\n\n        @apply flex items-center py-2 px-3 w-full\n          justify-center rounded-2xl text-white;\n\n        .qr-modal__logo {\n          @apply w-12 rounded-md;\n        }\n\n        span {\n          @apply ml-3 font-bold;\n        }\n\n      }\n\n    }\n  }\n\n  .about-page__footer {\n\n    .footer__email-form {\n      @apply mt-9 border p-4 rounded-lg shadow-lg bg-primary-200\n        text-white;\n\n      @apply dark:bg-slate-800 dark:border-none;\n\n      .email-form__title {\n        line-height: -2%;\n        @apply text-2xl font-semibold mb-4;\n      }\n\n      p.email-form__message {\n        @apply mb-4 dark:text-slate-400;\n      }\n\n      p.email-form__note {\n        @apply flex border-2 dark:border-primary-400 my-2\n          p-3 rounded-lg dark:text-slate-400 mb-4;\n\n        svg {\n          @apply w-32 dark:text-primary-200;\n        }\n      }\n\n      section {\n        @apply flex flex-col;\n      }\n\n      label {\n        @apply absolute mt-3 ml-3 text-gray-400;\n      }\n\n      input[type='email'], input[type='tel'], input[type='text'], textarea {\n        @apply outline-none border border-slate-300 rounded-lg mb-2\n          p-3 text-black;\n\n        @apply dark:text-white dark:bg-slate-900\n          dark:border-none;\n      }\n\n      textarea {\n        @apply resize-none;\n      }\n\n      .email-form__submit-btn {\n        @apply cursor-pointer w-full p-4 mt-7 bg-primary-400 rounded-xl\n          shadow-lg font-semibold text-white text-lg;\n      }\n    }    \n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Catalog.pcss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Catalog.pcss ***!
  \****************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".catalog-page{width:100%}@media (min-width:640px){.catalog-page{max-width:640px}}@media (min-width:768px){.catalog-page{max-width:768px}}@media (min-width:1024px){.catalog-page{max-width:1024px}}@media (min-width:1280px){.catalog-page{max-width:1280px}}@media (min-width:1536px){.catalog-page{max-width:1536px}}.catalog-page{margin-left:auto;margin-right:auto;min-height:100vh;padding-left:1rem;padding-right:1rem}.catalog-page .catalog-page__header{--tw-bg-opacity:1;--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);background-color:rgba(133,65,219,var(--tw-bg-opacity));box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);display:flex;justify-content:space-between;left:0;padding:.75rem;position:fixed;top:0;width:100vw;z-index:40}.dark .catalog-page .catalog-page__header{--tw-bg-opacity:1;background-color:rgba(118,55,199,var(--tw-bg-opacity))}.catalog-page .catalog-page__header .header__theme-toggler{--tw-text-opacity:1;align-items:center;color:rgba(255,255,255,var(--tw-text-opacity));display:flex;flex-shrink:1;justify-content:center;margin-left:.5rem;width:3rem}.catalog-page .catalog-page__header .header__filter-options{--tw-text-opacity:1;color:rgba(133,65,219,var(--tw-text-opacity));flex-shrink:1;margin-right:.5rem;width:3rem}.dark .catalog-page .catalog-page__header .header__filter-options{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.catalog-page .catalog-page__header .header__search-bar{--tw-bg-opacity:1;align-items:center;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:1rem;display:flex;padding:.75rem 1rem;width:100%}.dark .catalog-page .catalog-page__header .header__search-bar{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(17,24,39,var(--tw-bg-opacity));color:rgba(255,255,255,var(--tw-text-opacity))}.catalog-page .catalog-page__header .header__search-bar .search-bar__logo{--tw-text-opacity:1;color:rgba(133,65,219,var(--tw-text-opacity));cursor:pointer;display:inline-block;flex-grow:0;margin-right:1rem}.dark .catalog-page .catalog-page__header .header__search-bar .search-bar__logo{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.catalog-page .catalog-page__header .header__search-bar .search-bar__text-field{flex-grow:1;outline:2px solid transparent;outline-offset:2px;width:100%}.dark .catalog-page .catalog-page__header .header__search-bar .search-bar__text-field{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(17,24,39,var(--tw-bg-opacity));color:rgba(255,255,255,var(--tw-text-opacity))}.catalog-page .catalog-page__main{margin-top:4rem;padding-top:1.5rem}.catalog-page .catalog-page__main .main__love-section .love-section__title-nav{align-items:center;display:flex}.catalog-page .catalog-page__main .main__love-section .love-section__title-nav hr:first-child{flex-grow:0;width:1rem}.catalog-page .catalog-page__main .main__love-section .love-section__title-nav button{margin-left:.75rem}.catalog-page .catalog-page__main .main__love-section .love-section__title-nav hr{flex-grow:1}.catalog-page .catalog-page__main .main__love-section .love-section__title-nav .title-nav__section-title{align-items:center;display:flex;font-size:1.25rem;font-weight:600;line-height:1.75rem;margin-left:.75rem;margin-right:.75rem}.catalog-page .catalog-page__main .main__love-section .love-section__title-nav .title-nav__section-title svg{margin-right:.5rem}.catalog-page .catalog-page__main .main__main-section{padding-bottom:1rem}.catalog-page .catalog-page__main .main__main-section .main-section__title-nav{align-items:center;display:flex}.catalog-page .catalog-page__main .main__main-section .main-section__title-nav span{margin-left:.5rem}.catalog-page .catalog-page__main .main__main-section .main-section__title-nav hr:first-child{flex-grow:0;width:1rem}.catalog-page .catalog-page__main .main__main-section .main-section__title-nav hr{flex-grow:1}.catalog-page .catalog-page__main .main__main-section .main-section__title-nav .title-nav__section-title{display:flex;font-size:1.25rem;font-weight:600;line-height:1.75rem;margin-left:.75rem;margin-right:.75rem}.catalog-page .catalog-page__main .main__main-section .main-section__title-nav .title-nav__section-title img{margin-right:.5rem}.love-section__data-items{overflow-x:auto}.love-section__items{margin-top:1.5rem;min-width:-moz-max-content;min-width:max-content;padding-bottom:1.5rem}.love-section__items .items__love-item{--tw-text-opacity:1;--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);border-radius:.75rem;box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:rgba(255,255,255,var(--tw-text-opacity));cursor:pointer;display:inline-block;height:15rem;margin-right:1rem;padding:1rem;position:relative;width:24rem}.love-section__items .items__love-item .love-item__breed-bg-filter{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity));border-radius:.75rem;height:100%;isolation:isolate;left:0;opacity:.3;position:absolute;top:0;width:100%}.love-section__items .items__love-item .love-item__breed-bg-filter:hover{opacity:0}.love-section__items .items__love-item .love-item__breed-name{font-size:1.5rem;font-weight:600;line-height:2rem}.love-section__items .items__love-item .love-item__breed-name,.love-section__items .items__love-item .love-item__breed-other-names{position:relative;text-shadow:.5px .5px 0 #000,-.5px -.5px 0 #000,.5px -.5px 0 #000,-.5px .5px 0 #000;z-index:20}.love-section__items .items__love-item .love-item__breed-other-names{margin-top:.75rem}.main__filters-section{left:0;margin-bottom:.5rem;padding-left:1rem;padding-right:1rem;position:fixed;width:100%;z-index:30}.main__filters-section .filters-section__form{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.75rem;box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:rgba(0,0,0,var(--tw-text-opacity));flex-direction:column;margin-top:.25rem;padding:.75rem;width:100%}.dark .main__filters-section .filters-section__form{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity));color:rgba(255,255,255,var(--tw-text-opacity))}.main__filters-section .filters-section__form label{font-weight:600;margin-bottom:.25rem;margin-top:1rem}.main__filters-section .filters-section__form input,.main__filters-section .filters-section__form select{border-radius:.5rem;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.75rem;width:100%}.dark .main__filters-section .filters-section__form input,.dark .main__filters-section .filters-section__form select{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgba(51,65,85,var(--tw-bg-opacity));border-color:rgba(30,41,59,var(--tw-border-opacity))}.main-section__items{margin-top:1.5rem}.main-section__items .items__item{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);border-radius:.5rem;border-width:1px;box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);margin-bottom:1.25rem;margin-top:.5rem}.dark .main-section__items .items__item{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity));border-color:rgba(15,23,42,var(--tw-border-opacity))}.main-section__items .items__item .item__breed-info{display:flex;flex-wrap:wrap}.main-section__items .items__item .breed-info__image{border-top-left-radius:.5rem;border-top-right-radius:.5rem;cursor:pointer;flex:1 1 0%;height:100%;max-width:100%;-o-object-fit:cover;object-fit:cover}@media (min-width:1024px){.main-section__items .items__item .breed-info__image{width:4rem}}@media (min-width:1280px){.main-section__items .items__item .breed-info__image{border-bottom-left-radius:.5rem;border-top-right-radius:0;width:4rem}}.main-section__items .items__item figcaption.breed-info__details{flex:1 1 0%;flex-grow:1;margin:.5rem 1rem 1rem}.main-section__items .items__item figcaption.breed-info__details hr{isolation:isolate;width:100%}.main-section__items .items__item figcaption.breed-info__details .details__breed-name{cursor:pointer;font-size:1.25rem;font-weight:700;line-height:1.75rem}.main-section__items .items__item figcaption.breed-info__details .details__breed-type{--tw-text-opacity:1;color:rgba(55,65,81,var(--tw-text-opacity));margin-bottom:.75rem}.dark .main-section__items .items__item figcaption.breed-info__details .details__breed-type{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity))}.main-section__items .items__item figcaption.breed-info__details .details__breed-other-names{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity));margin-bottom:.25rem}.dark .main-section__items .items__item figcaption.breed-info__details .details__breed-other-names{--tw-text-opacity:1;color:rgba(148,163,184,var(--tw-text-opacity))}.main-section__items .items__item figcaption.breed-info__details hr{margin-bottom:.5rem;margin-top:.5rem}.main-section__items .items__item figcaption.breed-info__details .details__breed-other-names{display:flex}.main-section__items .items__item .details__breed-infos li{margin-bottom:.25rem}.main-section__items .items__item .details__breed-infos li:last-child{margin-bottom:0}.main-section__items .items__item .details__breed-infos .breed-infos__origins{align-items:center;display:flex}.main-section__items .items__item .details__breed-infos .breed-infos__origins .origins__names{margin-left:.5rem}.main-section__items .items__item .details__breed-infos .breed-infos__count-images{align-items:center;display:flex}.main-section__items .items__item .details__breed-infos .breed-infos__count-images .images__message{margin-left:.5rem}.main-section__items .items__item .details__breed-infos .breed-infos__breed-id{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem;margin-top:1.25rem}.main-section__items .items__item .details__breed-infos .breed-infos__breed-id .breed-id__value{margin-left:.5rem}.main-section__controls{display:flex;justify-content:flex-end;margin-bottom:.75rem;margin-top:.75rem}.main-section__controls .controls__reload-data{align-items:center;display:inline-flex}.main-section__controls .controls__reload-data span{display:inline-block;margin-left:.5rem;margin-right:.5rem}.main-section__paginate{display:flex;justify-content:space-between;width:100%}.main-section__paginate .paginate__page-nav{border-radius:.5rem;padding:.5rem}.dark .main-section__paginate .paginate__page-nav{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.youtube-embed__wrapper{margin-bottom:.75rem}.youtube-embed__wrapper iframe{height:18rem;width:100%}", "",{"version":3,"sources":["webpack://./src/views/Catalog.pcss"],"names":[],"mappings":"AAEE,cAAA,UAA0C,CAA1C,yBAAA,cAAA,eAA0C,CAAA,CAA1C,yBAAA,cAAA,eAA0C,CAAA,CAA1C,0BAAA,cAAA,gBAA0C,CAAA,CAA1C,0BAAA,cAAA,gBAA0C,CAAA,CAA1C,0BAAA,cAAA,gBAA0C,CAAA,CAA1C,cAAA,gBAA0C,CAA1C,iBAA0C,CAA1C,gBAA0C,CAA1C,iBAA0C,CAA1C,kBAA0C,CAGxC,oCAAA,iBAC+B,CAD/B,yEAC+B,CAD/B,iGAC+B,CAD/B,sDAC+B,CAD/B,2DAC+B,CAD/B,8GAC+B,CAD/B,YAC+B,CAD/B,6BAC+B,CAD/B,MAC+B,CAD/B,cAC+B,CAD/B,cAC+B,CAD/B,KAC+B,CAD/B,WAC+B,CAD/B,UAC+B,CAE/B,0CAAA,iBAA0B,CAA1B,sDAA0B,CAGxB,2DAAA,mBAAwE,CAAxE,kBAAwE,CAAxE,8CAAwE,CAAxE,YAAwE,CAAxE,aAAwE,CAAxE,sBAAwE,CAAxE,iBAAwE,CAAxE,UAAwE,CAIxE,4DAAA,mBAA6C,CAA7C,6CAA6C,CAA7C,aAA6C,CAA7C,kBAA6C,CAA7C,UAA6C,CAC7C,kEAAA,mBAAsB,CAAtB,8CAAsB,CAItB,wDAAA,iBACqB,CADrB,kBACqB,CADrB,uDACqB,CADrB,kBACqB,CADrB,YACqB,CADrB,mBACqB,CADrB,UACqB,CAErB,8DAAA,iBAAuC,CAAvC,mBAAuC,CAAvC,oDAAuC,CAAvC,8CAAuC,CAGrC,0EAAA,mBACkB,CADlB,6CACkB,CADlB,cACkB,CADlB,oBACkB,CADlB,WACkB,CADlB,iBACkB,CAElB,gFAAA,mBAAsB,CAAtB,8CAAsB,CAItB,gFAAA,WAA+B,CAA/B,6BAA+B,CAA/B,kBAA+B,CAA/B,UAA+B,CAE/B,sFAAA,iBAAuC,CAAvC,mBAAuC,CAAvC,oDAAuC,CAAvC,8CAAuC,CAO3C,kCAAA,eAAiB,CAAjB,kBAAiB,CAKb,+EAAA,kBAAwB,CAAxB,YAAwB,CAGtB,8FAAA,WAAiB,CAAjB,UAAiB,CAIjB,sFAAA,kBAAW,CAIX,kFAAA,WAAW,CAIX,yGAAA,kBAAmD,CAAnD,YAAmD,CAAnD,iBAAmD,CAAnD,eAAmD,CAAnD,mBAAmD,CAAnD,kBAAmD,CAAnD,mBAAmD,CAGjD,6GAAA,kBAAW,CAOjB,sDAAA,mBAAW,CAGT,+EAAA,kBAAwB,CAAxB,YAAwB,CAGtB,oFAAA,iBAAW,CAIX,8FAAA,WAAiB,CAAjB,UAAiB,CAIjB,kFAAA,WAAW,CAIX,yGAAA,YAAsC,CAAtC,iBAAsC,CAAtC,eAAsC,CAAtC,mBAAsC,CAAtC,kBAAsC,CAAtC,mBAAsC,CAGpC,6GAAA,kBAAW,CASrB,0BAAA,eAAsB,CAItB,qBAAA,iBAA0B,CAA1B,0BAA0B,CAA1B,qBAA0B,CAA1B,qBAA0B,CAGxB,uCAAA,mBACqC,CADrC,yEACqC,CADrC,iGACqC,CADrC,oBACqC,CADrC,2DACqC,CADrC,8GACqC,CADrC,8CACqC,CADrC,cACqC,CADrC,oBACqC,CADrC,YACqC,CADrC,iBACqC,CADrC,YACqC,CADrC,iBACqC,CADrC,WACqC,CAGnC,mEAAA,iBAEiB,CAFjB,oDAEiB,CAFjB,oBAEiB,CAFjB,WAEiB,CAFjB,iBAEiB,CAFjB,MAEiB,CAFjB,UAEiB,CAFjB,iBAEiB,CAFjB,KAEiB,CAFjB,UAEiB,CAFjB,yEAAA,SAEiB,CAIjB,8DAAA,gBAA2C,CAA3C,eAA2C,CAA3C,gBAA2C,CAU3C,mIAVA,iBAA2C,CAE3C,mFAIsB,CANtB,UAUyB,CAAzB,qEAAA,iBAAyB,CAY7B,uBAAA,MAAyC,CAAzC,mBAAyC,CAAzC,iBAAyC,CAAzC,kBAAyC,CAAzC,cAAyC,CAAzC,UAAyC,CAAzC,UAAyC,CAGvC,8CAAA,iBAC8B,CAD9B,mBAC8B,CAD9B,yEAC8B,CAD9B,iGAC8B,CAD9B,uDAC8B,CAD9B,oBAC8B,CAD9B,2DAC8B,CAD9B,8GAC8B,CAD9B,wCAC8B,CAD9B,qBAC8B,CAD9B,iBAC8B,CAD9B,cAC8B,CAD9B,UAC8B,CAE9B,oDAAA,iBAAwC,CAAxC,mBAAwC,CAAxC,oDAAwC,CAAxC,8CAAwC,CAGtC,oDAAA,eAA8B,CAA9B,oBAA8B,CAA9B,eAA8B,CAI9B,yGAAA,mBAA6C,CAA7C,gBAA6C,CAA7C,cAA6C,CAA7C,kBAA6C,CAA7C,cAA6C,CAA7C,UAA6C,CAE7C,qHAAA,qBAA8C,CAA9C,iBAA8C,CAA9C,oDAA8C,CAA9C,oDAA8C,CAOlD,qBAAA,iBAAW,CAGT,kCAAA,yEACY,CADZ,iGACY,CADZ,mBACY,CADZ,gBACY,CADZ,2DACY,CADZ,8GACY,CADZ,qBACY,CADZ,gBACY,CAEZ,wCAAA,qBAA8C,CAA9C,iBAA8C,CAA9C,oDAA8C,CAA9C,oDAA8C,CAG5C,oDAAA,YAAqB,CAArB,cAAqB,CAIrB,qDAAA,4BAGmC,CAHnC,6BAGmC,CAHnC,cAGmC,CAHnC,WAGmC,CAHnC,WAGmC,CAHnC,cAGmC,CAHnC,mBAGmC,CAHnC,gBAGmC,CAHnC,0BAAA,qDAAA,UAGmC,CAAA,CAHnC,0BAAA,qDAAA,+BAGmC,CAHnC,yBAGmC,CAHnC,UAGmC,CAAA,CAInC,iEAAA,WAAiC,CAAjC,WAAiC,CAAjC,sBAAiC,CAG/B,oEAAA,iBAAqB,CAArB,UAAqB,CAIrB,sFAAA,cAAuC,CAAvC,iBAAuC,CAAvC,eAAuC,CAAvC,mBAAuC,CAIvC,sFAAA,mBAAyB,CAAzB,2CAAyB,CAAzB,oBAAyB,CACzB,4FAAA,mBAAyB,CAAzB,8CAAyB,CAIzB,6FAAA,mBAAyB,CAAzB,2CAAyB,CAAzB,oBAAyB,CACzB,mGAAA,mBAA0B,CAA1B,8CAA0B,CAI1B,oEAAA,mBAAW,CAAX,gBAAW,CAIX,6FAAA,YAAW,CAQX,2DAAA,oBAAW,CAIX,sEAAA,eAAW,CAIX,8EAAA,kBAAwB,CAAxB,YAAwB,CAGtB,8FAAA,iBAAW,CAKb,mFAAA,kBAAwB,CAAxB,YAAwB,CAGtB,oGAAA,iBAAW,CAKb,+EAAA,mBAAiC,CAAjC,8CAAiC,CAAjC,iBAAiC,CAAjC,mBAAiC,CAAjC,kBAAiC,CAG/B,gGAAA,iBAAW,CASnB,wBAAA,YAA4B,CAA5B,wBAA4B,CAA5B,oBAA4B,CAA5B,iBAA4B,CAG1B,+CAAA,kBAA+B,CAA/B,mBAA+B,CAG7B,oDAAA,oBAAwB,CAAxB,iBAAwB,CAAxB,kBAAwB,CAM5B,wBAAA,YAAkC,CAAlC,6BAAkC,CAAlC,UAAkC,CAGhC,4CAAA,mBAAuC,CAAvC,aAAuC,CAAvC,kDAAA,iBAAuC,CAAvC,oDAAuC,CAKzC,wBAAA,oBAAW,CAET,+BAAA,YAAkB,CAAlB,UAAkB","sourcesContent":[".catalog-page {\n\n  @apply container mx-auto px-4 min-h-screen;\n\n  .catalog-page__header {\n    @apply fixed flex bg-primary-200 w-screen left-0 top-0 z-40\n      shadow-lg p-3 justify-between;\n\n    @apply dark:bg-primary-300;\n\n    .header__theme-toggler {\n      @apply flex-shrink w-12 flex items-center ml-2 justify-center text-white;\n    }\n\n    .header__filter-options {\n      @apply flex-shrink w-12 mr-2 text-primary-200;\n      @apply dark:text-white;\n    }\n\n    .header__search-bar {\n      @apply flex bg-white py-3 px-4 rounded-2xl\n        items-center w-full;\n\n      @apply dark:bg-gray-900 dark:text-white;\n\n      .search-bar__logo {\n        @apply inline-block cursor-pointer mr-4 grow-0\n          text-primary-200;\n\n        @apply dark:text-white;\n      }\n\n      .search-bar__text-field {\n        @apply grow outline-none w-full;\n\n        @apply dark:text-white dark:bg-gray-900;\n      }\n\n    }\n  }\n\n  .catalog-page__main {\n    @apply mt-16 pt-6;\n\n    .main__love-section {\n\n      .love-section__title-nav {\n        @apply flex items-center;\n\n        hr:first-child {\n          @apply grow-0 w-4;\n        }\n\n        button {\n          @apply ml-3;\n        }\n\n        hr {\n          @apply grow;\n        }\n\n        .title-nav__section-title {\n          @apply text-xl font-semibold flex items-center mx-3;\n\n          svg {\n            @apply mr-2;\n          }\n        }\n      }\n    }\n\n    .main__main-section {\n      @apply pb-4;\n\n      .main-section__title-nav {\n        @apply flex items-center;\n        \n        span {\n          @apply ml-2;\n        }\n\n        hr:first-child {\n          @apply grow-0 w-4;\n        }\n\n        hr {\n          @apply grow;\n        }\n       \n        .title-nav__section-title {\n          @apply text-xl font-semibold flex mx-3;\n\n          img {\n            @apply mr-2;\n          }\n        }\n      }\n    }\n  }\n}\n\n.love-section__data-items {\n  @apply overflow-x-auto;  \n}\n\n.love-section__items {\n  @apply min-w-max pb-6 mt-6;\n\n  .items__love-item {\n    @apply relative cursor-pointer inline-block w-96 mr-4 h-60\n      text-white p-4 rounded-xl shadow-lg;\n\n    .love-item__breed-bg-filter {\n      @apply w-full h-full bg-gray-800 isolate\n        absolute top-0 left-0 opacity-30 rounded-xl\n        hover:opacity-0;\n    }\n\n    .love-item__breed-name {\n      @apply relative text-2xl z-20 font-semibold;\n\n      text-shadow:\n        0.5px  0.5px 0 #000,\n        -0.5px -0.5px 0 #000,  \n          0.5px -0.5px 0 #000,\n        -0.5px  0.5px 0 #000;\n    }\n\n    .love-item__breed-other-names {\n      @apply relative mt-3 z-20;\n\n      text-shadow:\n        0.5px  0.5px 0 #000,\n        -0.5px -0.5px 0 #000,  \n          0.5px -0.5px 0 #000,\n        -0.5px  0.5px 0 #000;\n    }\n  }\n}\n\n.main__filters-section {\n  @apply mb-2 fixed left-0 w-full px-4 z-30;\n\n  .filters-section__form {\n    @apply w-full shadow-lg rounded-xl p-3 mt-1 \n      flex-col bg-white text-black;\n\n    @apply dark:bg-slate-800 dark:text-white;\n\n    label {\n      @apply mt-4 mb-1 font-semibold;\n    }\n\n    input, select {\n      @apply text-base p-3 rounded-lg border w-full;\n      \n      @apply dark:bg-slate-700 dark:border-slate-800;\n    }\n  }\n\n}\n\n.main-section__items {\n  @apply mt-6;\n\n  .items__item {\n    @apply mb-5 mt-2 border shadow-lg\n      rounded-lg;\n\n    @apply dark:bg-slate-800 dark:border-slate-900;\n\n    .item__breed-info {\n      @apply flex flex-wrap;\n    }\n\n    .breed-info__image {\n      @apply cursor-pointer flex-1\n        object-cover rounded-tl-lg rounded-tr-lg\n        xl:rounded-tr-none xl:rounded-bl-lg\n        xl:w-16 lg:w-16 h-full max-w-full;\n    }\n    \n    figcaption.breed-info__details {  \n      @apply grow flex-1 mx-4 my-4 mt-2;\n      \n      hr {\n        @apply isolate w-full;\n      }\n\n      .details__breed-name {\n        @apply cursor-pointer text-xl font-bold;\n      }\n\n      .details__breed-type {\n        @apply text-gray-700 mb-3;\n        @apply dark:text-gray-500;\n      }\n\n      .details__breed-other-names {\n        @apply text-gray-800 mb-1;\n        @apply dark:text-slate-400;\n      }\n\n      hr {\n        @apply my-2;\n      }\n\n      .details__breed-other-names {\n        @apply flex;\n      }\n\n    }\n\n    .details__breed-infos {\n\n      li {\n        @apply mb-1;\n      }\n\n      li:last-child {\n        @apply mb-0;\n      }\n\n      .breed-infos__origins {\n        @apply flex items-center;\n\n        .origins__names {\n          @apply ml-2;\n        }\n      }\n\n      .breed-infos__count-images {\n        @apply flex items-center;\n\n        .images__message {\n          @apply ml-2;\n        }\n      }\n\n      .breed-infos__breed-id {\n        @apply mt-5 text-sm text-gray-500;\n\n        .breed-id__value {\n          @apply ml-2;\n        }\n      }\n    }\n  }\n\n}\n\n.main-section__controls {\n  @apply flex justify-end my-3;\n\n  .controls__reload-data {\n    @apply inline-flex items-center;\n\n    span {\n      @apply inline-block mx-2;\n    }\n  }\n}\n\n.main-section__paginate {\n  @apply flex w-full justify-between;\n\n  .paginate__page-nav {\n    @apply p-2 rounded-lg dark:bg-slate-800;\n  }\n}\n\n.youtube-embed__wrapper {\n  @apply mb-3;\n  iframe {\n    @apply w-full h-72;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Home.pcss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Home.pcss ***!
  \*************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".home-page__videoplayback{height:100vh;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;width:100%}@media (min-width:1024px){.home-page__videoplayback{-o-object-position:top;object-position:top}}.home-page__videoplayback-filter{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity));height:100vh;left:0;opacity:.7;position:absolute;top:0;width:100%}.dark .home-page p{--tw-text-opacity:1;color:rgba(100,116,139,var(--tw-text-opacity))}.home-page{width:100%}@media (min-width:640px){.home-page{max-width:640px}}@media (min-width:768px){.home-page{max-width:768px}}@media (min-width:1024px){.home-page{max-width:1024px}}@media (min-width:1280px){.home-page{max-width:1280px}}@media (min-width:1536px){.home-page{max-width:1536px}}.home-page{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));display:flex;flex-direction:column;height:100vh;justify-content:center;margin-left:auto;margin-right:auto;padding-left:1.25rem;padding-right:1.25rem;position:relative;z-index:20}.home-page .home-page__header .header__breedfind-logo{height:12rem;margin-bottom:1.5rem;margin-top:2.5rem;width:12rem}.home-page .home-page__main{display:flex;flex-direction:column;flex-grow:1;justify-content:center;margin-bottom:1.5rem;padding-left:.25rem;padding-right:.25rem}.home-page .home-page__main .main__message-wrapper{flex-grow:1}.home-page .home-page__main .main__welcome-title{font-size:3rem;font-weight:600;margin-bottom:2rem}.home-page .home-page__main .main__welcome-message{font-size:1.125rem;font-weight:300;line-height:1.75rem}.home-page .home-page__main .main__welcome-message span{--tw-text-opacity:1;color:rgba(148,93,218,var(--tw-text-opacity));font-weight:700}.home-page .home-page__main .main__data-sources .data-sources__desc{align-items:center;display:flex}.home-page .home-page__main .main__data-sources .data-sources__desc .desc__bullet:before{content:\" • \";font-size:2.5rem}.home-page .home-page__main .main__data-sources .data-sources__desc span:last-child{margin-left:.25rem}.home-page .home-page__main .main__data-sources .data-sources__desc span:last-child a{--tw-text-opacity:1;color:rgba(148,93,218,var(--tw-text-opacity));font-weight:700}.home-page .home-page__footer{margin-bottom:2.5rem}.home-page .home-page__footer .footer__start-button{--tw-bg-opacity:1;align-items:center;background-color:rgba(133,65,219,var(--tw-bg-opacity));border-radius:1.5rem;display:flex;justify-content:center;padding:1.75rem;width:100%}.home-page .home-page__footer .footer__start-button span{font-size:1.25rem;font-weight:600;line-height:1.75rem;margin-left:.5rem}", "",{"version":3,"sources":["webpack://./src/views/Home.pcss"],"names":[],"mappings":"AACE,0BAAA,YAAuE,CAAvE,MAAuE,CAAvE,mBAAuE,CAAvE,gBAAuE,CAAvE,iBAAuE,CAAvE,KAAuE,CAAvE,UAAuE,CAAvE,0BAAA,0BAAA,sBAAuE,CAAvE,mBAAuE,CAAA,CAIvE,iCAAA,iBAAgE,CAAhE,iDAAgE,CAAhE,YAAgE,CAAhE,MAAgE,CAAhE,UAAgE,CAAhE,iBAAgE,CAAhE,KAAgE,CAAhE,UAAgE,CAM9D,mBAAA,mBAA0B,CAA1B,8CAA0B,CAG5B,WAAA,UACiB,CADjB,yBAAA,WAAA,eACiB,CAAA,CADjB,yBAAA,WAAA,eACiB,CAAA,CADjB,0BAAA,WAAA,gBACiB,CAAA,CADjB,0BAAA,WAAA,gBACiB,CAAA,CADjB,0BAAA,WAAA,gBACiB,CAAA,CADjB,WAAA,mBACiB,CADjB,8CACiB,CADjB,YACiB,CADjB,qBACiB,CADjB,YACiB,CADjB,sBACiB,CADjB,gBACiB,CADjB,iBACiB,CADjB,oBACiB,CADjB,qBACiB,CADjB,iBACiB,CADjB,UACiB,CAIb,sDAAA,YAA2B,CAA3B,oBAA2B,CAA3B,iBAA2B,CAA3B,WAA2B,CAK7B,4BAAA,YAAkD,CAAlD,qBAAkD,CAAlD,WAAkD,CAAlD,sBAAkD,CAAlD,oBAAkD,CAAlD,mBAAkD,CAAlD,oBAAkD,CAGhD,mDAAA,WAAW,CAIX,iDAAA,cAAqC,CAArC,eAAqC,CAArC,kBAAqC,CAIrC,mDAAA,kBAAyB,CAAzB,eAAyB,CAAzB,mBAAyB,CAGvB,wDAAA,mBAAiC,CAAjC,6CAAiC,CAAjC,eAAiC,CAMjC,oEAAA,kBAAwB,CAAxB,YAAwB,CAExB,yFAEE,aAAc,CADd,gBAEF,CAGE,oFAAA,kBAAW,CAGT,sFAAA,mBAAiC,CAAjC,6CAAiC,CAAjC,eAAiC,CAQzC,8BAAA,oBAAY,CAEV,oDAAA,iBAC0B,CAD1B,kBAC0B,CAD1B,sDAC0B,CAD1B,oBAC0B,CAD1B,YAC0B,CAD1B,sBAC0B,CAD1B,eAC0B,CAD1B,UAC0B,CAGxB,yDAAA,iBAAiC,CAAjC,eAAiC,CAAjC,mBAAiC,CAAjC,iBAAiC","sourcesContent":[".home-page__videoplayback {\n  @apply absolute h-screen w-full lg:object-top object-cover top-0 left-0;\n}\n\n.home-page__videoplayback-filter {\n  @apply absolute h-screen w-full top-0 left-0 bg-black opacity-70;\n}\n\n.home-page {\n\n  p {\n    @apply dark:text-slate-500;\n  }\n\n  @apply relative z-20 container mx-auto h-screen flex flex-col justify-center\n    px-5 text-white;\n\n  .home-page__header {\n    .header__breedfind-logo {\n      @apply h-48 w-48 mt-10 mb-6;\n    }\n  }\n\n  .home-page__main {\n    @apply grow flex flex-col justify-center px-1 mb-6;\n\n    .main__message-wrapper {\n      @apply grow;\n    }\n\n    .main__welcome-title {\n      @apply text-[3rem] mb-8 font-semibold;\n    }\n\n    .main__welcome-message {\n      @apply text-lg font-light;\n      \n      span {\n        @apply font-bold text-primary-100;\n      }\n    }\n\n    .main__data-sources {\n      .data-sources__desc {\n        @apply flex items-center;\n\n        .desc__bullet::before {\n          font-size: 2.5rem;\n          content: ' • ';\n        }\n\n        span:last-child {\n          @apply ml-1;\n\n          a {\n            @apply font-bold text-primary-100;\n          }\n        }\n      }\n    }\n  }\n\n  .home-page__footer {\n    @apply mb-10;\n    .footer__start-button {\n      @apply flex justify-center w-full p-7 bg-primary-200\n        rounded-3xl items-center;\n\n      span {\n        @apply ml-2 text-xl font-semibold;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Info.pcss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Info.pcss ***!
  \*************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".info-page{width:100%}@media (min-width:640px){.info-page{max-width:640px}}@media (min-width:768px){.info-page{max-width:768px}}@media (min-width:1024px){.info-page{max-width:1024px}}@media (min-width:1280px){.info-page{max-width:1280px}}@media (min-width:1536px){.info-page{max-width:1536px}}.info-page{margin-left:auto;margin-right:auto;min-height:100vh}.dark .info-page p{--tw-text-opacity:1;color:rgba(100,116,139,var(--tw-text-opacity))}.info-page .info-page__header{position:relative}.info-page .info-page__header .info-page__breed-image{height:18rem;-o-object-fit:cover;object-fit:cover;width:100%}.info-page .info-page__header .info-page__breed-image-filter{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity));height:18rem;opacity:.4;position:absolute;top:0;width:100%}.info-page .info-page__header .info-page__main-nav{word-wrap:break-word;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));padding:1rem;position:absolute;top:0;z-index:10}.info-page .info-page__header .info-page__main-nav .main-nav__heading{align-items:flex-start;display:flex}.info-page .info-page__header .info-page__main-nav .main-nav__heading .info-nav__wrapper{padding-left:1rem}.info-page .info-page__header .info-page__main-nav .info-nav__title{font-size:1.875rem;font-weight:600;line-height:2.25rem}.info-page .info-page__header .info-page__main-nav .info-nav__breed-other-names{--tw-text-opacity:1;color:rgba(209,213,219,var(--tw-text-opacity));width:100%}.info-page .info-page__header .info-page__modal-nav{bottom:-1px;position:absolute;right:0;z-index:10}.info-page .info-page__header .info-page__modal-nav,.info-page .info-page__header .info-page__modal-nav p{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.info-page .info-page__header .info-page__modal-nav .modal-nav__view-button{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);background-color:rgba(118,55,199,var(--tw-bg-opacity));border-radius:9999px;box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:rgba(255,255,255,var(--tw-text-opacity));margin-bottom:.75rem;margin-right:.75rem;padding:1.25rem}.info-page .info-page__main{padding-left:.75rem;padding-right:.75rem}.info-page .info-page__main .main__share-button{--tw-text-opacity:1;color:rgba(118,55,199,var(--tw-text-opacity));margin-right:.25rem;padding:.75rem;position:absolute;right:0}.info-page .info-page__main .main__top-content .top-content__breed-groups{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity));display:flex;font-size:1.125rem;line-height:1.75rem;margin-top:.5rem}.info-page .info-page__main .main__top-content .top-content__breed-groups .breed-groups__item{--tw-text-opacity:1;color:rgba(118,55,199,var(--tw-text-opacity));font-weight:600;margin-right:.5rem}.info-page .info-page__main .main__top-content .top-content__breed-type{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity))}.info-page .info-page__main .main__top-content .top-content__breed-temperaments-title{font-size:1.25rem;font-weight:700;line-height:1.75rem;margin-bottom:.75rem;margin-top:1rem}.info-page .info-page__main .main__top-content hr{margin-bottom:.5rem}.info-page .info-page__main .main__top-content .top-content__breed-temperaments{display:flex;flex-wrap:wrap}.info-page .info-page__main .main__top-content .top-content__breed-temperaments .temperaments__item{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);background-color:rgba(133,65,219,var(--tw-bg-opacity));border-radius:.75rem;box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:rgba(255,255,255,var(--tw-text-opacity));font-size:.875rem;font-weight:600;line-height:1.25rem;margin-bottom:.5rem;margin-right:.5rem;padding:.5rem 1rem}.info-page .info-page__main .main__breed-history{margin-bottom:2rem}.info-page .info-page__main .main__breed-history .breed-history__title{align-items:center;display:flex;font-size:1.25rem;font-weight:700;justify-content:space-between;line-height:1.75rem;margin-bottom:1rem;margin-top:1rem}.info-page .info-page__main .main__breed-history .breed-history__content.less{height:11rem;overflow:hidden;text-overflow:ellipsis}.info-page .info-page__main .main__breed-history hr{margin-bottom:.25rem;margin-top:.25rem}.info-page .info-page__main .main__bottom-content .bottom-content__fci-doc{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);align-items:flex-start;border-radius:.5rem;border-width:1px;box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);display:flex;margin-bottom:1rem;margin-top:1rem;padding:1rem}.dark .info-page .info-page__main .main__bottom-content .bottom-content__fci-doc{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity));border-color:rgba(30,41,59,var(--tw-border-opacity))}.info-page .info-page__main .main__bottom-content .bottom-content__fci-doc img{height:100%;width:100%}.info-page .info-page__main .main__bottom-content .bottom-content__fci-doc .fci-doc__logo-wrapper{flex-grow:1;margin-right:1rem;padding:.25rem;width:8rem}.info-page .info-page__main .main__bottom-content .bottom-content__fci-doc .fci-doc__content-wrapper{word-break:break-all}.info-page .info-page__main .main__bottom-content .bottom-content__fci-doc .fci-doc__content-wrapper .content-wrapper__title{font-size:1.125rem;font-weight:600;line-height:1.75rem;margin-bottom:.75rem}.info-page .info-page__main .main__bottom-content .bottom-content__fci-doc .fci-doc__content-wrapper .content-wrapper__info{--tw-text-opacity:1;color:rgba(29,78,216,var(--tw-text-opacity))}.dark .info-page .info-page__main .main__bottom-content .bottom-content__fci-doc .fci-doc__content-wrapper .content-wrapper__info{--tw-text-opacity:1;color:rgba(59,130,246,var(--tw-text-opacity))}.info-page .info-page__main .main__bottom-content .bottom-content__sizes-title{font-size:1.25rem;font-weight:600;line-height:1.75rem;margin-bottom:.75rem}.info-page .info-page__main .main__bottom-content .bottom-content__sizes{align-items:flex-end;display:flex;justify-content:center;margin-top:.25rem}.info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item{align-items:center;display:flex;flex-direction:column;flex-grow:1}.info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item label{--tw-text-opacity:1;color:rgba(17,24,39,var(--tw-text-opacity));font-size:1rem;font-weight:600;line-height:1.5rem}.dark .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item label{--tw-text-opacity:1;color:rgba(229,231,235,var(--tw-text-opacity))}.info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item div{align-items:flex-end;display:flex;justify-content:center}.info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item label.contains-size{--tw-text-opacity:1;color:rgba(118,55,199,var(--tw-text-opacity))}.dark .info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item label.contains-size{--tw-text-opacity:1;color:rgba(148,93,218,var(--tw-text-opacity))}.info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__smallest-size{width:100%}.info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__smallest-size img{height:3rem}.info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__small-size img{height:4rem}.info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__medium-size img{height:5rem}.info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__large-size img{height:6rem}.info-page .info-page__main .main__bottom-content .bottom-content__sizes .sizes__item .item__giant-size img{height:7rem}.info-page .info-page__main .main__bottom-content .bottom-content__stats-title{align-items:center;display:flex;font-size:1.25rem;line-height:1.75rem;margin-bottom:.5rem;margin-top:.5rem}.info-page .info-page__main .main__bottom-content .bottom-content__stats-title span{font-weight:600;margin-left:.5rem}.info-page .info-page__main .main__bottom-content .bottom-content__chars,.info-page .info-page__main .main__bottom-content .bottom-content__stats{margin-bottom:2rem;table-layout:fixed;width:100%}.info-page .info-page__main .main__bottom-content .bottom-content__chars td,.info-page .info-page__main .main__bottom-content .bottom-content__chars th,.info-page .info-page__main .main__bottom-content .bottom-content__stats td,.info-page .info-page__main .main__bottom-content .bottom-content__stats th{border-width:1px;padding:.5rem}.info-page .info-page__main .main__bottom-content .bottom-content__chars th,.info-page .info-page__main .main__bottom-content .bottom-content__stats th{font-weight:600;text-align:left}.info-page .info-page__main .main__bottom-content .bottom-content__chars caption,.info-page .info-page__main .main__bottom-content .bottom-content__stats caption{--tw-text-opacity:1;caption-side:bottom;color:rgba(107,114,128,var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem}.info-page .info-page__main .main__bottom-content .bottom-content__chars .item__value svg{--tw-text-opacity:1;color:rgba(250,204,21,var(--tw-text-opacity));float:left}.info-page .info-page__main .main__bottom-content .bottom-content__chars .item__value span{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem;margin-left:.25rem}.info-page .info-page__main .main__bottom-content .bottom-content__breed-colors-title{font-size:1.25rem;font-weight:700;line-height:1.75rem;margin-bottom:.75rem;margin-top:1rem}.info-page .info-page__main .main__bottom-content .bottom-content__breed-colors li:first-child{border-top-width:1px}.info-page .info-page__main .main__bottom-content .bottom-content__breed-colors li{border-bottom-width:1px;padding-bottom:.5rem;padding-top:.5rem}.dark .info-page .info-page__main .main__bottom-content .bottom-content__breed-colors li{--tw-border-opacity:1;border-color:rgba(51,65,85,var(--tw-border-opacity))}.info-page .info-page__main .main__bottom-content .bottom-content__breed-similars-title{font-size:1.25rem;font-weight:700;line-height:1.75rem;margin-bottom:1rem;margin-top:1rem}.info-page .info-page__main .main__bottom-content .bottom-content__breed-similars{display:flex;flex-wrap:wrap;position:relative}.info-page .info-page__main .main__bottom-content .bottom-content__breed-similars .breed-similars__item{border-radius:.5rem;display:flex;flex:1 1 0%;flex-direction:column;flex-wrap:wrap;height:15rem;margin-top:.25rem;padding-left:.5rem;padding-right:.5rem;position:relative;width:50%}.info-page .info-page__main .main__bottom-content .bottom-content__breed-similars .breed-similars__item .item__wrapper{cursor:pointer;flex-grow:1;position:relative;width:100%}.info-page .info-page__main .main__bottom-content .bottom-content__breed-similars .breed-similars__item .item__image{border-radius:.5rem;height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;width:100%}.info-page .info-page__main .main__bottom-content .bottom-content__breed-similars .breed-similars__item .item__name{word-wrap:break-word;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));font-size:1.5rem;font-weight:700;line-height:2rem;margin:.75rem;position:relative;text-shadow:.5px .5px 0 #000,-.5px -.5px 0 #000,.5px -.5px 0 #000,-.5px .5px 0 #000}.info-page .info-page__main .main__bottom-content .bottom-content__breed-similars .breed-similars__item .item__lifespan{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity));flex-grow:0;flex-shrink:1;margin-top:.25rem}.info-page .info-page__main .main__bottom-content .bottom-content__misc .misc__heading{font-size:1.25rem;font-weight:700;line-height:1.75rem;margin-bottom:1rem;margin-top:1rem}.info-page .info-page__main .main__bottom-content .bottom-content__misc .misc__refs .refs__item span:before{content:\"•\";font-size:2.5rem;position:absolute}.info-page .info-page__main .main__bottom-content .bottom-content__misc .misc__refs .refs__item{--tw-text-opacity:1;color:rgba(37,99,235,var(--tw-text-opacity));font-size:1rem;line-height:1.5rem;margin-bottom:.25rem}.dark .info-page .info-page__main .main__bottom-content .bottom-content__misc .misc__refs .refs__item{--tw-text-opacity:1;color:rgba(96,165,250,var(--tw-text-opacity))}.info-page .info-page__main .main__bottom-content .bottom-content__misc .misc__refs .refs__item a{margin-left:1.25rem}.info-page .info-page__footer{bottom:0;left:0;padding:2rem;width:100%}.info-page .info-page__footer,.info-page .info-page__footer .footer__love-button{display:flex;justify-content:center}.info-page .info-page__footer .footer__love-button{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);align-items:center;background-color:rgba(225,29,72,var(--tw-bg-opacity));border-radius:1.5rem;box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:rgba(255,255,255,var(--tw-text-opacity));font-size:1.125rem;font-weight:700;line-height:1.75rem;padding:1.25rem 4rem;width:20rem}.info-page .info-page__footer .footer__love-button span{margin-left:.5rem}.modal-nav__modal{--tw-text-opacity:1;background-color:rgba(31,41,55,.8);color:rgba(255,255,255,var(--tw-text-opacity));height:100vh;isolation:isolate;left:0;position:fixed;top:0;width:100vw}.modal-nav__modal .nav__image-container{align-items:center;display:flex;height:100%;position:absolute}.modal-nav__modal .nav__image-container .image-container__breed-image{padding-left:1.25rem;padding-right:1.25rem}.modal-nav__modal .modal__nav{display:flex;flex-direction:column;height:100%}.modal-nav__modal .modal__nav .nav__paginate-controls{align-items:flex-end;display:flex;flex-direction:column;padding:1rem;z-index:20}.modal-nav__modal .modal__nav .nav__paginate-controls aside.paginate-controls__note{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(118,55,199,var(--tw-bg-opacity));border-radius:.5rem;color:rgba(255,255,255,var(--tw-text-opacity));font-size:.75rem;line-height:1rem;margin-top:1.25rem;padding:1rem}.modal-nav__modal .modal__nav .nav__close-modal,.modal-nav__modal .modal__nav .nav__paginate-controls-2{z-index:10}.modal-nav__modal .modal__nav .nav__paginate-controls-2{align-items:center;display:flex;flex-grow:1;height:100vh;justify-content:space-between;position:absolute;width:100%}.youtube-embed__wrapper{border-radius:.5rem}", "",{"version":3,"sources":["webpack://./src/views/Info.pcss"],"names":[],"mappings":"AACE,WAAA,UAAqC,CAArC,yBAAA,WAAA,eAAqC,CAAA,CAArC,yBAAA,WAAA,eAAqC,CAAA,CAArC,0BAAA,WAAA,gBAAqC,CAAA,CAArC,0BAAA,WAAA,gBAAqC,CAAA,CAArC,0BAAA,WAAA,gBAAqC,CAAA,CAArC,WAAA,gBAAqC,CAArC,iBAAqC,CAArC,gBAAqC,CAGnC,mBAAA,mBAA0B,CAA1B,8CAA0B,CAI1B,8BAAA,iBAAe,CAGb,sDAAA,YAA+B,CAA/B,mBAA+B,CAA/B,gBAA+B,CAA/B,UAA+B,CAI/B,6DAAA,iBAAqD,CAArD,iDAAqD,CAArD,YAAqD,CAArD,UAAqD,CAArD,iBAAqD,CAArD,KAAqD,CAArD,UAAqD,CAIrD,mDAAA,oBAC4B,CAD5B,mBAC4B,CAD5B,8CAC4B,CAD5B,YAC4B,CAD5B,iBAC4B,CAD5B,KAC4B,CAD5B,UAC4B,CAGxB,sEAAA,sBAAuB,CAAvB,YAAuB,CAGrB,yFAAA,iBAAW,CAKf,oEAAA,kBAA6B,CAA7B,eAA6B,CAA7B,mBAA6B,CAI7B,gFAAA,mBAA2B,CAA3B,8CAA2B,CAA3B,UAA2B,CAK7B,oDAAA,WAC0B,CAD1B,iBAC0B,CAD1B,OAC0B,CAD1B,UAC0B,CAGxB,0GAJF,mBAC0B,CAD1B,8CAImB,CAIjB,4EAAA,iBACqB,CADrB,mBACqB,CADrB,yEACqB,CADrB,iGACqB,CADrB,sDACqB,CADrB,oBACqB,CADrB,2DACqB,CADrB,8GACqB,CADrB,8CACqB,CADrB,oBACqB,CADrB,mBACqB,CADrB,eACqB,CAMzB,4BAAA,mBAAW,CAAX,oBAAW,CAGT,gDAAA,mBAAiD,CAAjD,6CAAiD,CAAjD,mBAAiD,CAAjD,cAAiD,CAAjD,iBAAiD,CAAjD,OAAiD,CAK/C,0EAAA,mBAAsC,CAAtC,2CAAsC,CAAtC,YAAsC,CAAtC,kBAAsC,CAAtC,mBAAsC,CAAtC,gBAAsC,CAGpC,8FAAA,mBAA0C,CAA1C,6CAA0C,CAA1C,eAA0C,CAA1C,kBAA0C,CAK5C,wEAAA,mBAAoB,CAApB,8CAAoB,CAIpB,sFAAA,iBAAkC,CAAlC,eAAkC,CAAlC,mBAAkC,CAAlC,oBAAkC,CAAlC,eAAkC,CAIlC,kDAAA,mBAAW,CAIX,gFAAA,YAAqB,CAArB,cAAqB,CAGnB,oGAAA,iBAC+C,CAD/C,mBAC+C,CAD/C,yEAC+C,CAD/C,iGAC+C,CAD/C,sDAC+C,CAD/C,oBAC+C,CAD/C,2DAC+C,CAD/C,8GAC+C,CAD/C,8CAC+C,CAD/C,iBAC+C,CAD/C,eAC+C,CAD/C,mBAC+C,CAD/C,mBAC+C,CAD/C,kBAC+C,CAD/C,kBAC+C,CAMnD,iDAAA,kBAAW,CAGT,uEAAA,kBACc,CADd,YACc,CADd,iBACc,CADd,eACc,CADd,6BACc,CADd,mBACc,CADd,kBACc,CADd,eACc,CAId,8EAAA,YAAyC,CAAzC,eAAyC,CAAzC,sBAAyC,CAIzC,oDAAA,oBAAW,CAAX,iBAAW,CAMX,2EAAA,yEAA4D,CAA5D,iGAA4D,CAA5D,sBAA4D,CAA5D,mBAA4D,CAA5D,gBAA4D,CAA5D,2DAA4D,CAA5D,8GAA4D,CAA5D,YAA4D,CAA5D,kBAA4D,CAA5D,eAA4D,CAA5D,YAA4D,CAE5D,iFAAA,qBAA8C,CAA9C,iBAA8C,CAA9C,oDAA8C,CAA9C,oDAA8C,CAG5C,+EAAA,WAAoB,CAApB,UAAoB,CAIpB,kGAAA,WAAyB,CAAzB,iBAAyB,CAAzB,cAAyB,CAAzB,UAAyB,CAIzB,qGAAA,oBAAgB,CAGd,6HAAA,kBAAiC,CAAjC,eAAiC,CAAjC,mBAAiC,CAAjC,oBAAiC,CAGjC,4HAAA,mBAAuC,CAAvC,4CAAuC,CAAvC,kIAAA,mBAAuC,CAAvC,6CAAuC,CAM3C,+EAAA,iBAAiC,CAAjC,eAAiC,CAAjC,mBAAiC,CAAjC,oBAAiC,CAIjC,yEAAA,oBAAyC,CAAzC,YAAyC,CAAzC,sBAAyC,CAAzC,iBAAyC,CAIvC,sFAAA,kBAAsC,CAAtC,YAAsC,CAAtC,qBAAsC,CAAtC,WAAsC,CAGpC,4FAAA,mBAA4C,CAA5C,2CAA4C,CAA5C,cAA4C,CAA5C,eAA4C,CAA5C,kBAA4C,CAE5C,kGAAA,mBAAyB,CAAzB,8CAAyB,CAIzB,0FAAA,oBAAoC,CAApC,YAAoC,CAApC,sBAAoC,CAIpC,0GAAA,mBAA6C,CAA7C,6CAA6C,CAA7C,gHAAA,mBAA6C,CAA7C,6CAA6C,CAI7C,2GAAA,UAAa,CAGX,+GAAA,WAAW,CAOX,4GAAA,WAAW,CAOX,6GAAA,WAAW,CAOX,4GAAA,WAAW,CAOX,4GAAA,WAAW,CAOjB,+EAAA,kBAAqC,CAArC,YAAqC,CAArC,iBAAqC,CAArC,mBAAqC,CAArC,mBAAqC,CAArC,gBAAqC,CAGnC,oFAAA,eAAyB,CAAzB,iBAAyB,CAK3B,kJAAA,kBAA8B,CAA9B,kBAA8B,CAA9B,UAA8B,CAG5B,gTAAA,gBAAiB,CAAjB,aAAiB,CAIjB,wJAAA,eAA8B,CAA9B,eAA8B,CAI9B,kKAAA,mBAA4B,CAC5B,mBAAoB,CADpB,8CAA4B,CAA5B,iBAA4B,CAA5B,mBAA4B,CAS1B,0FAAA,mBAAiC,CAAjC,6CAAiC,CAAjC,UAAiC,CAIjC,2FAAA,mBAAiC,CAAjC,8CAAiC,CAAjC,iBAAiC,CAAjC,mBAAiC,CAAjC,kBAAiC,CAMrC,sFAAA,iBAAkC,CAAlC,eAAkC,CAAlC,mBAAkC,CAAlC,oBAAkC,CAAlC,eAAkC,CAKlC,+FACE,oBACF,CAGE,mFAAA,uBAA0C,CAA1C,oBAA0C,CAA1C,iBAA0C,CAA1C,yFAAA,qBAA0C,CAA1C,oDAA0C,CAK5C,wFAAA,iBAA6B,CAA7B,eAA6B,CAA7B,mBAA6B,CAA7B,kBAA6B,CAA7B,eAA6B,CAI7B,kFAAA,YAA8B,CAA9B,cAA8B,CAA9B,iBAA8B,CAG5B,wGAAA,mBAC0B,CAD1B,YAC0B,CAD1B,WAC0B,CAD1B,qBAC0B,CAD1B,cAC0B,CAD1B,YAC0B,CAD1B,iBAC0B,CAD1B,kBAC0B,CAD1B,mBAC0B,CAD1B,iBAC0B,CAD1B,SAC0B,CAGxB,uHAAA,cAA0C,CAA1C,WAA0C,CAA1C,iBAA0C,CAA1C,UAA0C,CAI1C,qHAAA,mBACY,CADZ,WACY,CADZ,mBACY,CADZ,gBACY,CADZ,iBACY,CADZ,UACY,CAIZ,oHAAA,oBACa,CADb,mBACa,CADb,8CACa,CADb,gBACa,CADb,eACa,CADb,gBACa,CADb,aACa,CADb,iBACa,CAEb,mFAFa,CAUb,wHAAA,mBACE,CADF,2CACE,CADF,WACE,CADF,aACE,CADF,iBACE,CAOJ,uFAAA,iBAA6B,CAA7B,eAA6B,CAA7B,mBAA6B,CAA7B,kBAA6B,CAA7B,eAA6B,CAM3B,4GACA,WAAY,CACZ,gBAAiB,CAFjB,iBAAe,CAMf,gGAAA,mBAAsD,CAAtD,4CAAsD,CAAtD,cAAsD,CAAtD,kBAAsD,CAAtD,oBAAsD,CAAtD,sGAAA,mBAAsD,CAAtD,6CAAsD,CAItD,kGAAA,mBAAW,CASnB,8BAAA,QAAqD,CAArD,MAAqD,CAArD,YAAqD,CAArD,UAAqD,CAGnD,iFAHF,YAAqD,CAArD,sBAK8C,CAF5C,mDAAA,iBAE4C,CAF5C,mBAE4C,CAF5C,yEAE4C,CAF5C,iGAE4C,CAF5C,kBAE4C,CAF5C,qDAE4C,CAF5C,oBAE4C,CAF5C,2DAE4C,CAF5C,8GAE4C,CAF5C,8CAE4C,CAF5C,kBAE4C,CAF5C,eAE4C,CAF5C,mBAE4C,CAF5C,oBAE4C,CAF5C,WAE4C,CAGxC,wDAAA,iBAAW,CAOnB,kBAAA,mBAEU,CAFV,kCAEU,CAFV,8CAEU,CAFV,YAEU,CAFV,iBAEU,CAFV,MAEU,CAFV,cAEU,CAFV,KAEU,CAFV,WAEU,CAGR,wCAAA,kBAAwC,CAAxC,YAAwC,CAAxC,WAAwC,CAAxC,iBAAwC,CAGtC,sEAAA,oBAAW,CAAX,qBAAW,CAKb,8BAAA,YAA2B,CAA3B,qBAA2B,CAA3B,WAA2B,CAGzB,sDAAA,oBAAuC,CAAvC,YAAuC,CAAvC,qBAAuC,CAAvC,YAAuC,CAAvC,UAAuC,CAGrC,oFAAA,iBACyB,CADzB,mBACyB,CADzB,sDACyB,CADzB,mBACyB,CADzB,8CACyB,CADzB,gBACyB,CADzB,gBACyB,CADzB,kBACyB,CADzB,YACyB,CAS3B,wGAJA,UAKU,CADV,wDAAA,kBACU,CADV,YACU,CADV,WACU,CADV,YACU,CADV,6BACU,CADV,iBACU,CADV,UACU,CAcd,wBAAA,mBAAiB","sourcesContent":[".info-page {\n  @apply container mx-auto min-h-screen;\n\n  p {\n    @apply dark:text-slate-500;\n  }\n\n  .info-page__header {\n    @apply relative;\n\n    .info-page__breed-image {\n      @apply h-72 object-cover w-full;\n    }\n\n    .info-page__breed-image-filter {\n      @apply absolute top-0 bg-black h-72 w-full opacity-40;\n    }\n\n    .info-page__main-nav {\n      @apply z-10 absolute top-0\n        text-white p-4 break-words;\n\n        .main-nav__heading {\n          @apply flex items-start;\n\n          .info-nav__wrapper {\n            @apply pl-4;\n          }\n        }\n\n      .info-nav__title {\n        @apply text-3xl font-semibold;\n      }\n\n      .info-nav__breed-other-names {\n        @apply text-gray-300 w-full;\n      }\n    }\n\n    .info-page__modal-nav {\n      @apply z-10 absolute right-0\n        text-white bottom-[-1px];\n\n      p {\n        @apply text-white;\n      }\n\n      .modal-nav__view-button {\n        @apply bg-primary-300 text-white p-5 rounded-full\n          shadow-lg mb-3 mr-3;\n      }\n    }\n  }\n\n  .info-page__main {\n    @apply px-3;\n\n    .main__share-button {\n      @apply absolute right-0 mr-1 p-3 text-primary-300;\n    }\n\n    .main__top-content {\n      .top-content__breed-groups {\n        @apply text-lg text-gray-800 mt-2 flex;\n\n        .breed-groups__item {\n          @apply mr-2 text-primary-300 font-semibold;\n        }\n      }\n\n      .top-content__breed-type {\n        @apply text-gray-500;\n      }\n      \n      .top-content__breed-temperaments-title {\n        @apply text-xl font-bold mt-4 mb-3;\n      }\n\n      hr {\n        @apply mb-2;\n      }\n\n      .top-content__breed-temperaments {\n        @apply flex flex-wrap;\n\n        .temperaments__item {\n          @apply mr-2 mb-2 text-sm bg-primary-200 px-4 py-2\n            rounded-xl font-semibold shadow-lg text-white;\n        }\n      }\n    }\n\n    .main__breed-history {\n      @apply mb-8;\n\n      .breed-history__title {\n        @apply text-xl font-bold my-4 flex justify-between\n          items-center;\n      }\n\n      .breed-history__content.less {\n        @apply h-44 overflow-hidden text-ellipsis;\n      }\n\n      hr {\n        @apply my-1;\n      }\n    }\n\n    .main__bottom-content {\n      .bottom-content__fci-doc {\n        @apply flex items-start border p-4 rounded-lg my-4 shadow-lg;\n\n        @apply dark:bg-slate-800 dark:border-slate-800;\n\n        img {\n          @apply w-full h-full;\n        }\n\n        .fci-doc__logo-wrapper {\n          @apply grow w-32 p-1 mr-4;\n        }\n\n        .fci-doc__content-wrapper {\n          @apply break-all;\n\n          .content-wrapper__title {\n            @apply font-semibold text-lg mb-3;\n          }\n          .content-wrapper__info {\n            @apply text-blue-700 dark:text-blue-500;\n          }\n        }\n      }\n\n      .bottom-content__sizes-title {\n        @apply text-xl font-semibold mb-3;\n      }\n      \n      .bottom-content__sizes {\n        @apply mt-1 flex items-end justify-center;\n\n        \n        .sizes__item {\n          @apply grow flex flex-col items-center;\n\n          label {\n            @apply text-base text-gray-900 font-semibold;\n\n            @apply dark:text-gray-200;\n          }\n\n          div {\n            @apply flex justify-center items-end;\n          }\n          \n          label.contains-size {\n            @apply text-primary-300 dark:text-primary-100;\n          }\n\n          .item__smallest-size {\n            @apply w-full;\n\n            img {\n              @apply h-12;\n            }\n          }\n\n          .item__small-size {\n            \n            img {\n              @apply h-16;\n            }\n          }\n\n          .item__medium-size {\n            \n            img {\n              @apply h-20;\n            }\n          }\n\n          .item__large-size {\n            \n            img {\n              @apply h-24;\n            }\n          }\n\n          .item__giant-size {\n            \n            img {\n              @apply h-28;\n            }\n          }\n        }\n      }\n\n      .bottom-content__stats-title {\n        @apply flex items-center text-xl my-2;\n\n        span {\n          @apply font-semibold ml-2;\n        }\n      }\n\n      .bottom-content__stats, .bottom-content__chars {\n        @apply w-full table-fixed mb-8;\n\n        td, th {\n          @apply border p-2;\n        }\n\n        th {\n          @apply font-semibold text-left;\n        }\n\n        caption {\n          @apply text-gray-500 text-sm;\n          caption-side: bottom;\n        }\n      }\n\n      .bottom-content__chars {\n        \n        .item__value {\n          svg {\n            @apply float-left text-yellow-400;\n          }\n          \n          span {\n            @apply text-sm text-gray-500 ml-1;\n          }\n        }\n      }\n\n      .bottom-content__breed-colors-title {\n        @apply text-xl my-4 mb-3 font-bold;\n      }\n\n      .bottom-content__breed-colors {\n\n        li:first-child {\n          border-top-width: 1px;\n        }\n\n        li {\n          @apply border-b py-2 dark:border-slate-700;\n        }\n      }\n\n      .bottom-content__breed-similars-title {\n        @apply text-xl my-4 font-bold;\n      }\n\n      .bottom-content__breed-similars {\n        @apply flex flex-wrap relative;\n        \n        .breed-similars__item {\n          @apply relative h-60 mt-1 px-[0.5rem] rounded-lg flex-1 flex \n            flex-col flex-wrap w-1/2;\n\n          .item__wrapper {\n            @apply relative grow cursor-pointer w-full;\n          }\n\n          .item__image {\n            @apply absolute h-full w-full object-cover\n              rounded-lg;\n          }\n\n          .item__name {\n            @apply m-3 relative text-2xl text-white font-bold\n              break-words;\n\n            text-shadow: \n              0.5px  0.5px 0 #000,\n              -0.5px -0.5px 0 #000,  \n                0.5px -0.5px 0 #000,\n              -0.5px  0.5px 0 #000;\n          }\n\n          .item__lifespan {\n            @apply flex-shrink grow-0 text-gray-600 mt-1\n              ; \n          }\n        }\n      }\n\n      .bottom-content__misc {\n        .misc__heading {\n          @apply text-xl font-bold my-4;\n        }\n\n        .misc__refs {\n          \n          .refs__item span::before {\n            @apply absolute;\n            content: '•';\n            font-size: 2.5rem;\n          }\n\n          .refs__item {\n            @apply mb-1 dark:text-blue-400 text-blue-600 text-base;\n          }\n\n          .refs__item a {\n            @apply ml-5;\n          }\n        }\n      }\n    }\n\n  }\n\n  .info-page__footer {\n    @apply p-8 flex justify-center left-0 bottom-0 w-full;\n\n    .footer__love-button {\n      @apply flex p-5 px-16 w-[20rem]\n        rounded-3xl justify-center text-lg items-center\n        font-bold shadow-lg bg-rose-600 text-white;\n\n        span {\n          @apply ml-2;\n        }\n    }\n  }\n}\n\n.modal-nav__modal {\n  @apply fixed isolate top-0 left-0\n    text-white bg-gray-800/80 w-screen\n    h-screen;\n\n  .nav__image-container {\n    @apply absolute flex h-full items-center;\n\n    .image-container__breed-image {\n      @apply px-5;\n    }\n  }\n\n  .modal__nav {\n    @apply flex flex-col h-full;\n\n    .nav__paginate-controls {\n      @apply z-20 flex flex-col items-end p-4;\n\n      aside.paginate-controls__note {\n        @apply bg-primary-300 text-white p-4\n          rounded-lg mt-5 text-xs;\n      }\n    }\n\n    .nav__close-modal {\n      @apply z-10;\n    }\n\n    .nav__paginate-controls-2 {\n      @apply z-10 grow flex w-full items-center justify-between absolute\n        h-screen;\n\n        .nav__left-button {\n\n        }\n\n        .nav__right-button {\n\n        }\n    }\n  }\n}\n\n.youtube-embed__wrapper {\n  @apply rounded-lg;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var named_references_1 = __webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");
var numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), { all: named_references_1.namedReferences.html5 });
var encodeRegExps = {
    specialChars: /[<>'"&]/g,
    nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
};
var defaultEncodeOptions = {
    mode: 'specialChars',
    level: 'all',
    numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */
function encode(text, _a) {
    var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? 'specialChars' : _c, _d = _b.numeric, numeric = _d === void 0 ? 'decimal' : _d, _e = _b.level, level = _e === void 0 ? 'all' : _e;
    if (!text) {
        return '';
    }
    var encodeRegExp = encodeRegExps[mode];
    var references = allNamedReferences[level].characters;
    var isHex = numeric === 'hexadecimal';
    encodeRegExp.lastIndex = 0;
    var _b = encodeRegExp.exec(text);
    var _c;
    if (_b) {
        _c = '';
        var _d = 0;
        do {
            if (_d !== _b.index) {
                _c += text.substring(_d, _b.index);
            }
            var _e = _b[0];
            var result_1 = references[_e];
            if (!result_1) {
                var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
                result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
            }
            _c += result_1;
            _d = _b.index + _e.length;
        } while ((_b = encodeRegExp.exec(text)));
        if (_d !== text.length) {
            _c += text.substring(_d);
        }
    }
    else {
        _c =
            text;
    }
    return _c;
}
exports.encode = encode;
var defaultDecodeOptions = {
    scope: 'body',
    level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
    xml: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.xml
    },
    html4: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html4
    },
    html5: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html5
    }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
    level: 'all'
};
/** Decodes a single entity */
function decodeEntity(entity, _a) {
    var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? 'all' : _b;
    if (!entity) {
        return '';
    }
    var _b = entity;
    var decodeEntityLastChar_1 = entity[entity.length - 1];
    if (false) {}
    else if (false) {}
    else {
        var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
        if (decodeResultByReference_1) {
            _b = decodeResultByReference_1;
        }
        else if (entity[0] === '&' && entity[1] === '#') {
            var decodeSecondChar_1 = entity[2];
            var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X'
                ? parseInt(entity.substr(3), 16)
                : parseInt(entity.substr(2));
            _b =
                decodeCode_1 >= 0x10ffff
                    ? outOfBoundsChar
                    : decodeCode_1 > 65535
                        ? surrogate_pairs_1.fromCodePoint(decodeCode_1)
                        : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
        }
    }
    return _b;
}
exports.decodeEntity = decodeEntity;
/** Decodes all entities in the text */
function decode(text, _a) {
    var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a, decodeCode_1 = decodeSecondChar_1.level, level = decodeCode_1 === void 0 ? 'all' : decodeCode_1, _b = decodeSecondChar_1.scope, scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;
    if (!text) {
        return '';
    }
    var decodeRegExp = decodeRegExps[level][scope];
    var references = allNamedReferences[level].entities;
    var isAttribute = scope === 'attribute';
    var isStrict = scope === 'strict';
    decodeRegExp.lastIndex = 0;
    var replaceMatch_1 = decodeRegExp.exec(text);
    var replaceResult_1;
    if (replaceMatch_1) {
        replaceResult_1 = '';
        var replaceLastIndex_1 = 0;
        do {
            if (replaceLastIndex_1 !== replaceMatch_1.index) {
                replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
            }
            var replaceInput_1 = replaceMatch_1[0];
            var decodeResult_1 = replaceInput_1;
            var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
            if (isAttribute
                && decodeEntityLastChar_2 === '=') {
                decodeResult_1 = replaceInput_1;
            }
            else if (isStrict
                && decodeEntityLastChar_2 !== ';') {
                decodeResult_1 = replaceInput_1;
            }
            else {
                var decodeResultByReference_2 = references[replaceInput_1];
                if (decodeResultByReference_2) {
                    decodeResult_1 = decodeResultByReference_2;
                }
                else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
                    var decodeSecondChar_2 = replaceInput_1[2];
                    var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X'
                        ? parseInt(replaceInput_1.substr(3), 16)
                        : parseInt(replaceInput_1.substr(2));
                    decodeResult_1 =
                        decodeCode_2 >= 0x10ffff
                            ? outOfBoundsChar
                            : decodeCode_2 > 65535
                                ? surrogate_pairs_1.fromCodePoint(decodeCode_2)
                                : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
                }
            }
            replaceResult_1 += decodeResult_1;
            replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
        } while ((replaceMatch_1 = decodeRegExp.exec(text)));
        if (replaceLastIndex_1 !== text.length) {
            replaceResult_1 += text.substring(replaceLastIndex_1);
        }
    }
    else {
        replaceResult_1 =
            text;
    }
    return replaceResult_1;
}
exports.decode = decode;


/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.bodyRegExps={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g};exports.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":'"',"&quot;":'"',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;","ª":"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;","µ":"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;","º":"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;","À":"&Agrave;","Á":"&Aacute;","Â":"&Acirc;","Ã":"&Atilde;","Ä":"&Auml;","Å":"&Aring;","Æ":"&AElig;","Ç":"&Ccedil;","È":"&Egrave;","É":"&Eacute;","Ê":"&Ecirc;","Ë":"&Euml;","Ì":"&Igrave;","Í":"&Iacute;","Î":"&Icirc;","Ï":"&Iuml;","Ð":"&ETH;","Ñ":"&Ntilde;","Ò":"&Ograve;","Ó":"&Oacute;","Ô":"&Ocirc;","Õ":"&Otilde;","Ö":"&Ouml;","×":"&times;","Ø":"&Oslash;","Ù":"&Ugrave;","Ú":"&Uacute;","Û":"&Ucirc;","Ü":"&Uuml;","Ý":"&Yacute;","Þ":"&THORN;","ß":"&szlig;","à":"&agrave;","á":"&aacute;","â":"&acirc;","ã":"&atilde;","ä":"&auml;","å":"&aring;","æ":"&aelig;","ç":"&ccedil;","è":"&egrave;","é":"&eacute;","ê":"&ecirc;","ë":"&euml;","ì":"&igrave;","í":"&iacute;","î":"&icirc;","ï":"&iuml;","ð":"&eth;","ñ":"&ntilde;","ò":"&ograve;","ó":"&oacute;","ô":"&ocirc;","õ":"&otilde;","ö":"&ouml;","÷":"&divide;","ø":"&oslash;","ù":"&ugrave;","ú":"&uacute;","û":"&ucirc;","ü":"&uuml;","ý":"&yacute;","þ":"&thorn;","ÿ":"&yuml;",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;","Œ":"&OElig;","œ":"&oelig;","Š":"&Scaron;","š":"&scaron;","Ÿ":"&Yuml;","ˆ":"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;","ƒ":"&fnof;","Α":"&Alpha;","Β":"&Beta;","Γ":"&Gamma;","Δ":"&Delta;","Ε":"&Epsilon;","Ζ":"&Zeta;","Η":"&Eta;","Θ":"&Theta;","Ι":"&Iota;","Κ":"&Kappa;","Λ":"&Lambda;","Μ":"&Mu;","Ν":"&Nu;","Ξ":"&Xi;","Ο":"&Omicron;","Π":"&Pi;","Ρ":"&Rho;","Σ":"&Sigma;","Τ":"&Tau;","Υ":"&Upsilon;","Φ":"&Phi;","Χ":"&Chi;","Ψ":"&Psi;","Ω":"&Omega;","α":"&alpha;","β":"&beta;","γ":"&gamma;","δ":"&delta;","ε":"&epsilon;","ζ":"&zeta;","η":"&eta;","θ":"&theta;","ι":"&iota;","κ":"&kappa;","λ":"&lambda;","μ":"&mu;","ν":"&nu;","ξ":"&xi;","ο":"&omicron;","π":"&pi;","ρ":"&rho;","ς":"&sigmaf;","σ":"&sigma;","τ":"&tau;","υ":"&upsilon;","φ":"&phi;","χ":"&chi;","ψ":"&psi;","ω":"&omega;","ϑ":"&thetasym;","ϒ":"&upsih;","ϖ":"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;","℘":"&weierp;","ℑ":"&image;","ℜ":"&real;","™":"&trade;","ℵ":"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":"\n","&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":'"',"&QUOT;":'"',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"\t","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":'"',"&quot;":'"',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{"Æ":"&AElig;","&":"&amp;","Á":"&Aacute;","Ă":"&Abreve;","Â":"&Acirc;","А":"&Acy;","𝔄":"&Afr;","À":"&Agrave;","Α":"&Alpha;","Ā":"&Amacr;","⩓":"&And;","Ą":"&Aogon;","𝔸":"&Aopf;","⁡":"&af;","Å":"&angst;","𝒜":"&Ascr;","≔":"&coloneq;","Ã":"&Atilde;","Ä":"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;","Б":"&Bcy;","∵":"&because;","ℬ":"&bernou;","Β":"&Beta;","𝔅":"&Bfr;","𝔹":"&Bopf;","˘":"&breve;","≎":"&bump;","Ч":"&CHcy;","©":"&copy;","Ć":"&Cacute;","⋒":"&Cap;","ⅅ":"&DD;","ℭ":"&Cfr;","Č":"&Ccaron;","Ç":"&Ccedil;","Ĉ":"&Ccirc;","∰":"&Cconint;","Ċ":"&Cdot;","¸":"&cedil;","·":"&middot;","Χ":"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;","ℂ":"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;","𝒞":"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;","Ђ":"&DJcy;","Ѕ":"&DScy;","Џ":"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;","Ď":"&Dcaron;","Д":"&Dcy;","∇":"&nabla;","Δ":"&Delta;","𝔇":"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;","ⅆ":"&dd;","𝔻":"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;","𝒟":"&Dscr;","Đ":"&Dstrok;","Ŋ":"&ENG;","Ð":"&ETH;","É":"&Eacute;","Ě":"&Ecaron;","Ê":"&Ecirc;","Э":"&Ecy;","Ė":"&Edot;","𝔈":"&Efr;","È":"&Egrave;","∈":"&isinv;","Ē":"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;","Ę":"&Eogon;","𝔼":"&Eopf;","Ε":"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;","ℰ":"&expectation;","⩳":"&Esim;","Η":"&Eta;","Ë":"&Euml;","∃":"&exist;","ⅇ":"&exponentiale;","Ф":"&Fcy;","𝔉":"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;","𝔽":"&Fopf;","∀":"&forall;","ℱ":"&Fscr;","Ѓ":"&GJcy;",">":"&gt;","Γ":"&Gamma;","Ϝ":"&Gammad;","Ğ":"&Gbreve;","Ģ":"&Gcedil;","Ĝ":"&Gcirc;","Г":"&Gcy;","Ġ":"&Gdot;","𝔊":"&Gfr;","⋙":"&ggg;","𝔾":"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;","𝒢":"&Gscr;","≫":"&gg;","Ъ":"&HARDcy;","ˇ":"&caron;","^":"&Hat;","Ĥ":"&Hcirc;","ℌ":"&Poincareplane;","ℋ":"&hamilt;","ℍ":"&quaternions;","─":"&boxh;","Ħ":"&Hstrok;","≏":"&bumpeq;","Е":"&IEcy;","Ĳ":"&IJlig;","Ё":"&IOcy;","Í":"&Iacute;","Î":"&Icirc;","И":"&Icy;","İ":"&Idot;","ℑ":"&imagpart;","Ì":"&Igrave;","Ī":"&Imacr;","ⅈ":"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;","Į":"&Iogon;","𝕀":"&Iopf;","Ι":"&Iota;","ℐ":"&imagline;","Ĩ":"&Itilde;","І":"&Iukcy;","Ï":"&Iuml;","Ĵ":"&Jcirc;","Й":"&Jcy;","𝔍":"&Jfr;","𝕁":"&Jopf;","𝒥":"&Jscr;","Ј":"&Jsercy;","Є":"&Jukcy;","Х":"&KHcy;","Ќ":"&KJcy;","Κ":"&Kappa;","Ķ":"&Kcedil;","К":"&Kcy;","𝔎":"&Kfr;","𝕂":"&Kopf;","𝒦":"&Kscr;","Љ":"&LJcy;","<":"&lt;","Ĺ":"&Lacute;","Λ":"&Lambda;","⟪":"&Lang;","ℒ":"&lagran;","↞":"&twoheadleftarrow;","Ľ":"&Lcaron;","Ļ":"&Lcedil;","Л":"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;","𝔏":"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;","Ŀ":"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;","𝕃":"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;","Ł":"&Lstrok;","≪":"&ll;","⤅":"&Map;","М":"&Mcy;"," ":"&MediumSpace;","ℳ":"&phmmat;","𝔐":"&Mfr;","∓":"&mp;","𝕄":"&Mopf;","Μ":"&Mu;","Њ":"&NJcy;","Ń":"&Nacute;","Ň":"&Ncaron;","Ņ":"&Ncedil;","Н":"&Ncy;","​":"&ZeroWidthSpace;","\n":"&NewLine;","𝔑":"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;","ℕ":"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;","𝒩":"&Nscr;","Ñ":"&Ntilde;","Ν":"&Nu;","Œ":"&OElig;","Ó":"&Oacute;","Ô":"&Ocirc;","О":"&Ocy;","Ő":"&Odblac;","𝔒":"&Ofr;","Ò":"&Ograve;","Ō":"&Omacr;","Ω":"&ohm;","Ο":"&Omicron;","𝕆":"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;","𝒪":"&Oscr;","Ø":"&Oslash;","Õ":"&Otilde;","⨷":"&Otimes;","Ö":"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;","П":"&Pcy;","𝔓":"&Pfr;","Φ":"&Phi;","Π":"&Pi;","±":"&pm;","ℙ":"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;","𝒫":"&Pscr;","Ψ":"&Psi;",'"':"&quot;","𝔔":"&Qfr;","ℚ":"&rationals;","𝒬":"&Qscr;","⤐":"&drbkarow;","®":"&reg;","Ŕ":"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;","Ř":"&Rcaron;","Ŗ":"&Rcedil;","Р":"&Rcy;","ℜ":"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;","Ρ":"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;","ℝ":"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;","ℛ":"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;","Щ":"&SHCHcy;","Ш":"&SHcy;","Ь":"&SOFTcy;","Ś":"&Sacute;","⪼":"&Sc;","Š":"&Scaron;","Ş":"&Scedil;","Ŝ":"&Scirc;","С":"&Scy;","𝔖":"&Sfr;","↑":"&uparrow;","Σ":"&Sigma;","∘":"&compfn;","𝕊":"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;","𝒮":"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;","Þ":"&THORN;","™":"&trade;","Ћ":"&TSHcy;","Ц":"&TScy;","\t":"&Tab;","Τ":"&Tau;","Ť":"&Tcaron;","Ţ":"&Tcedil;","Т":"&Tcy;","𝔗":"&Tfr;","∴":"&therefore;","Θ":"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;","𝕋":"&Topf;","⃛":"&tdot;","𝒯":"&Tscr;","Ŧ":"&Tstrok;","Ú":"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;","Ў":"&Ubrcy;","Ŭ":"&Ubreve;","Û":"&Ucirc;","У":"&Ucy;","Ű":"&Udblac;","𝔘":"&Ufr;","Ù":"&Ugrave;","Ū":"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;","Ų":"&Uogon;","𝕌":"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;","ϒ":"&upsih;","Υ":"&Upsilon;","Ů":"&Uring;","𝒰":"&Uscr;","Ũ":"&Utilde;","Ü":"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;","В":"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;","𝔙":"&Vfr;","𝕍":"&Vopf;","𝒱":"&Vscr;","⊪":"&Vvdash;","Ŵ":"&Wcirc;","⋀":"&xwedge;","𝔚":"&Wfr;","𝕎":"&Wopf;","𝒲":"&Wscr;","𝔛":"&Xfr;","Ξ":"&Xi;","𝕏":"&Xopf;","𝒳":"&Xscr;","Я":"&YAcy;","Ї":"&YIcy;","Ю":"&YUcy;","Ý":"&Yacute;","Ŷ":"&Ycirc;","Ы":"&Ycy;","𝔜":"&Yfr;","𝕐":"&Yopf;","𝒴":"&Yscr;","Ÿ":"&Yuml;","Ж":"&ZHcy;","Ź":"&Zacute;","Ž":"&Zcaron;","З":"&Zcy;","Ż":"&Zdot;","Ζ":"&Zeta;","ℨ":"&zeetrf;","ℤ":"&integers;","𝒵":"&Zscr;","á":"&aacute;","ă":"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;","â":"&acirc;","а":"&acy;","æ":"&aelig;","𝔞":"&afr;","à":"&agrave;","ℵ":"&aleph;","α":"&alpha;","ā":"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;","ą":"&aogon;","𝕒":"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","'":"&apos;","å":"&aring;","𝒶":"&ascr;","*":"&midast;","ã":"&atilde;","ä":"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;","б":"&bcy;","„":"&ldquor;","⦰":"&bemptyv;","β":"&beta;","ℶ":"&beth;","≬":"&twixt;","𝔟":"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;","𝕓":"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;","𝒷":"&bscr;","⁏":"&bsemi;","\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;","ć":"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;","č":"&ccaron;","ç":"&ccedil;","ĉ":"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;","ċ":"&cdot;","⦲":"&cemptyv;","¢":"&cent;","𝔠":"&cfr;","ч":"&chcy;","✓":"&checkmark;","χ":"&chi;","○":"&cir;","⧃":"&cirE;","ˆ":"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;","𝕔":"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;","𝒸":"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;","ℸ":"&daleth;","‐":"&hyphen;","⤏":"&rBarr;","ď":"&dcaron;","д":"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;","δ":"&delta;","⦱":"&demptyv;","⥿":"&dfisht;","𝔡":"&dfr;","♦":"&diams;","ϝ":"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;","ђ":"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;","𝕕":"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;","𝒹":"&dscr;","ѕ":"&dscy;","⧶":"&dsol;","đ":"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;","џ":"&dzcy;","⟿":"&dzigrarr;","é":"&eacute;","⩮":"&easter;","ě":"&ecaron;","≖":"&eqcirc;","ê":"&ecirc;","≕":"&eqcolon;","э":"&ecy;","ė":"&edot;","≒":"&fallingdotseq;","𝔢":"&efr;","⪚":"&eg;","è":"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;","ℓ":"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;","ē":"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;","ŋ":"&eng;"," ":"&ensp;","ę":"&eogon;","𝕖":"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;","ε":"&epsilon;","ϵ":"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;","ℯ":"&escr;","η":"&eta;","ð":"&eth;","ë":"&euml;","€":"&euro;","!":"&excl;","ф":"&fcy;","♀":"&female;","ﬃ":"&ffilig;","ﬀ":"&fflig;","ﬄ":"&ffllig;","𝔣":"&ffr;","ﬁ":"&filig;",fj:"&fjlig;","♭":"&flat;","ﬂ":"&fllig;","▱":"&fltns;","ƒ":"&fnof;","𝕗":"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;","𝒻":"&fscr;","⪌":"&gtreqqless;","ǵ":"&gacute;","γ":"&gamma;","⪆":"&gtrapprox;","ğ":"&gbreve;","ĝ":"&gcirc;","г":"&gcy;","ġ":"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;","𝔤":"&gfr;","ℷ":"&gimel;","ѓ":"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;","𝕘":"&gopf;","ℊ":"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;","ъ":"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;","ℏ":"&plankv;","ĥ":"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;","𝔥":"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;","𝕙":"&hopf;","―":"&horbar;","𝒽":"&hscr;","ħ":"&hstrok;","⁃":"&hybull;","í":"&iacute;","î":"&icirc;","и":"&icy;","е":"&iecy;","¡":"&iexcl;","𝔦":"&ifr;","ì":"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;","ĳ":"&ijlig;","ī":"&imacr;","ı":"&inodot;","⊷":"&imof;","Ƶ":"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;","ё":"&iocy;","į":"&iogon;","𝕚":"&iopf;","ι":"&iota;","¿":"&iquest;","𝒾":"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;","ĩ":"&itilde;","і":"&iukcy;","ï":"&iuml;","ĵ":"&jcirc;","й":"&jcy;","𝔧":"&jfr;","ȷ":"&jmath;","𝕛":"&jopf;","𝒿":"&jscr;","ј":"&jsercy;","є":"&jukcy;","κ":"&kappa;","ϰ":"&varkappa;","ķ":"&kcedil;","к":"&kcy;","𝔨":"&kfr;","ĸ":"&kgreen;","х":"&khcy;","ќ":"&kjcy;","𝕜":"&kopf;","𝓀":"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;","ĺ":"&lacute;","⦴":"&laemptyv;","λ":"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;","ľ":"&lcaron;","ļ":"&lcedil;","л":"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;","𝔩":"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;","љ":"&ljcy;","⥫":"&llhard;","◺":"&lltri;","ŀ":"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;","𝕝":"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;","𝓁":"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;","ł":"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;","м":"&mcy;","—":"&mdash;","𝔪":"&mfr;","℧":"&mho;","µ":"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;","𝕞":"&mopf;","𝓂":"&mscr;","μ":"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;","ń":"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;","ŉ":"&napos;","♮":"&natural;","⩃":"&ncap;","ň":"&ncaron;","ņ":"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;","н":"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;","𝔫":"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;","њ":"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;","𝕟":"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;","𝓃":"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;","ñ":"&ntilde;","ν":"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;","ó":"&oacute;","ô":"&ocirc;","о":"&ocy;","ő":"&odblac;","⨸":"&odiv;","⦼":"&odsold;","œ":"&oelig;","⦿":"&ofcir;","𝔬":"&ofr;","˛":"&ogon;","ò":"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;","ō":"&omacr;","ω":"&omega;","ο":"&omicron;","⦶":"&omid;","𝕠":"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;","ℴ":"&oscr;","ª":"&ordf;","º":"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;","ø":"&oslash;","⊘":"&osol;","õ":"&otilde;","⨶":"&otimesas;","ö":"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;","п":"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;","𝔭":"&pfr;","φ":"&phi;","ϕ":"&varphi;","☎":"&phone;","π":"&pi;","ϖ":"&varpi;","ℎ":"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;","𝕡":"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;","𝓅":"&pscr;","ψ":"&psi;"," ":"&puncsp;","𝔮":"&qfr;","𝕢":"&qopf;","⁗":"&qprime;","𝓆":"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;","ŕ":"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;","ř":"&rcaron;","ŗ":"&rcedil;","р":"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;","𝔯":"&rfr;","⥬":"&rharul;","ρ":"&rho;","ϱ":"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;","𝕣":"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;","𝓇":"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;","ś":"&sacute;","⪴":"&scE;","⪸":"&succapprox;","š":"&scaron;","ş":"&scedil;","ŝ":"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;","с":"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;","𝔰":"&sfr;","♯":"&sharp;","щ":"&shchcy;","ш":"&shcy;","­":"&shy;","σ":"&sigma;","ς":"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;","ь":"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;","𝕤":"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;","𝓈":"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;","ß":"&szlig;","⌖":"&target;","τ":"&tau;","ť":"&tcaron;","ţ":"&tcedil;","т":"&tcy;","⌕":"&telrec;","𝔱":"&tfr;","θ":"&theta;","ϑ":"&vartheta;","þ":"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;","𝕥":"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;","𝓉":"&tscr;","ц":"&tscy;","ћ":"&tshcy;","ŧ":"&tstrok;","⥣":"&uHar;","ú":"&uacute;","ў":"&ubrcy;","ŭ":"&ubreve;","û":"&ucirc;","у":"&ucy;","ű":"&udblac;","⥾":"&ufisht;","𝔲":"&ufr;","ù":"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;","ū":"&umacr;","ų":"&uogon;","𝕦":"&uopf;","υ":"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;","ů":"&uring;","◹":"&urtri;","𝓊":"&uscr;","⋰":"&utdot;","ũ":"&utilde;","ü":"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;","в":"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;","𝔳":"&vfr;","𝕧":"&vopf;","𝓋":"&vscr;","⦚":"&vzigzag;","ŵ":"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;","℘":"&wp;","𝔴":"&wfr;","𝕨":"&wopf;","𝓌":"&wscr;","𝔵":"&xfr;","ξ":"&xi;","⋻":"&xnis;","𝕩":"&xopf;","𝓍":"&xscr;","ý":"&yacute;","я":"&yacy;","ŷ":"&ycirc;","ы":"&ycy;","¥":"&yen;","𝔶":"&yfr;","ї":"&yicy;","𝕪":"&yopf;","𝓎":"&yscr;","ю":"&yucy;","ÿ":"&yuml;","ź":"&zacute;","ž":"&zcaron;","з":"&zcy;","ż":"&zdot;","ζ":"&zeta;","𝔷":"&zfr;","ж":"&zhcy;","⇝":"&zigrarr;","𝕫":"&zopf;","𝓏":"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}};

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.fromCodePoint=String.fromCodePoint||function(astralCodePoint){return String.fromCharCode(Math.floor((astralCodePoint-65536)/1024)+55296,(astralCodePoint-65536)%1024+56320)};exports.getCodePoint=String.prototype.codePointAt?function(input,position){return input.codePointAt(position)}:function(input,position){return(input.charCodeAt(position)-55296)*1024+input.charCodeAt(position+1)-56320+65536};exports.highSurrogateFrom=55296;exports.highSurrogateTo=56319;

/***/ }),

/***/ "./node_modules/preact-async-route/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/preact-async-route/dist/index.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")) :
	0;
}(this, (function (preact) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsyncRoute = function (_Component) {
	_inherits(AsyncRoute, _Component);

	function AsyncRoute() {
		_classCallCheck(this, AsyncRoute);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.state = {
			componentData: null
		};
		return _this;
	}

	AsyncRoute.prototype.loadComponent = function loadComponent() {
		var _this2 = this;

		if (this.props.component) {
			return this.setState({
				componentData: this.props.component
			});
		}
		var componentData = this.props.getComponent(this.props.url, function (_ref) {
			var component = _ref.component;

			// Named param for making callback future proof
			if (component) {
				_this2.setState({
					componentData: component
				});
			}
		}, _extends({}, this.props, this.props.matches));

		// In case returned value was a promise
		if (componentData && componentData.then) {
			// IIFE to check if a later ending promise was creating a race condition
			// Check test case for more info
			(function (url) {
				componentData.then(function (component) {
					if (url !== _this2.props.url) {
						_this2.setState({ componentData: null }, function () {
							_this2.loadComponent();
						});
						return;
					}
					_this2.setState({
						componentData: component
					});
				});
			})(this.props.url);
		}
	};

	AsyncRoute.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		var _this3 = this;

		if (this.props.path && this.props.path !== nextProps.path) {
			this.setState({
				componentData: null
			}, function () {
				_this3.loadComponent();
			});
		}
	};

	AsyncRoute.prototype.componentWillMount = function componentWillMount() {
		this.loadComponent();
	};

	AsyncRoute.prototype.render = function render() {
		if (this.state.componentData) {
			return preact.h(this.state.componentData, this.props);
		} else if (this.props.loading) {
			var loadingComponent = this.props.loading();
			return loadingComponent;
		}
		return null;
	};

	return AsyncRoute;
}(preact.Component);

return AsyncRoute;

})));
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Children": () => (/* binding */ k),
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "PureComponent": () => (/* binding */ C),
/* harmony export */   "StrictMode": () => (/* binding */ fn),
/* harmony export */   "Suspense": () => (/* binding */ T),
/* harmony export */   "SuspenseList": () => (/* binding */ D),
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ X),
/* harmony export */   "cloneElement": () => (/* binding */ rn),
/* harmony export */   "createContext": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createFactory": () => (/* binding */ tn),
/* harmony export */   "createPortal": () => (/* binding */ V),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "findDOMNode": () => (/* binding */ on),
/* harmony export */   "flushSync": () => (/* binding */ cn),
/* harmony export */   "forwardRef": () => (/* binding */ R),
/* harmony export */   "hydrate": () => (/* binding */ B),
/* harmony export */   "isValidElement": () => (/* binding */ en),
/* harmony export */   "lazy": () => (/* binding */ U),
/* harmony export */   "memo": () => (/* binding */ E),
/* harmony export */   "render": () => (/* binding */ z),
/* harmony export */   "startTransition": () => (/* binding */ an),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ un),
/* harmony export */   "unstable_batchedUpdates": () => (/* binding */ ln),
/* harmony export */   "useCallback": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
/* harmony export */   "useContext": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useDebugValue": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
/* harmony export */   "useDeferredValue": () => (/* binding */ sn),
/* harmony export */   "useEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect),
/* harmony export */   "useErrorBoundary": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
/* harmony export */   "useImperativeHandle": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
/* harmony export */   "useInsertionEffect": () => (/* binding */ vn),
/* harmony export */   "useLayoutEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect),
/* harmony export */   "useMemo": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
/* harmony export */   "useReducer": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
/* harmony export */   "useRef": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
/* harmony export */   "useState": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState),
/* harmony export */   "useSyncExternalStore": () => (/* binding */ dn),
/* harmony export */   "useTransition": () => (/* binding */ hn),
/* harmony export */   "version": () => (/* binding */ nn)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function S(n,t){for(var e in t)n[e]=t[e];return n}function g(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function C(n){this.props=n}function E(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:g(this.props,n)}function r(t){return this.shouldComponentUpdate=e,(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(C.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).isPureReactComponent=!0,C.prototype.shouldComponentUpdate=function(n,t){return g(this.props,n)||g(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__.options.__b;preact__WEBPACK_IMPORTED_MODULE_1__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var x="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function R(n){function t(t){var e=S({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=x,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).map(t))},k={map:N,forEach:N,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray},A=preact__WEBPACK_IMPORTED_MODULE_1__.options.__e;preact__WEBPACK_IMPORTED_MODULE_1__.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);A(n,t,e,r)};var O=preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount;function T(){this.__u=0,this.t=null,this.__b=null}function L(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function U(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(e,u)}return u.displayName="Lazy",u.__f=!0,u}function D(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(T.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=L(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},T.prototype.componentWillUnmount=function(){this.t=[]},T.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__a&&(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,n.fallback);return u&&(u.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,t.__a?null:n.children),u]};var F=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function I(n){return this.getChildContext=function(){return n.context},n.children}function M(n){var t=this,e=n.i;t.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(I,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function V(n,t){var e=(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(M,{__v:n,i:t});return e.containerInfo=t,e}(D.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__a=function(n){var t=this,e=L(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),F(t,n,r)):u()};e?e(o):o()}},D.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},D.prototype.componentDidUpdate=D.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){F(n,e,t)})};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,$="undefined"!=typeof document,j=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var H=preact__WEBPACK_IMPORTED_MODULE_1__.options.event;function Z(){}function Y(){return this.cancelBubble}function q(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__.options.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=q,n.nativeEvent=n};var G,J={configurable:!0,get:function(){return this.class}},K=preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];$&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!j(e.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():u&&P.test(o)?o=o.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===i&&(i=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),r[o]&&(o="oninputCapture")),r[o]=i)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J))}n.$$typeof=W,K&&K(n)};var Q=preact__WEBPACK_IMPORTED_MODULE_1__.options.__r;preact__WEBPACK_IMPORTED_MODULE_1__.options.__r=function(n){Q&&Q(n),G=n.__c};var X={ReactCurrentDispatcher:{current:{readContext:function(n){return G.__n[n.__c].props.value}}}},nn="17.0.2";function tn(n){return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.bind(null,n)}function en(n){return!!n&&n.$$typeof===W}function rn(n){return en(n)?preact__WEBPACK_IMPORTED_MODULE_1__.cloneElement.apply(null,arguments):n}function un(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,n),!0)}function on(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},cn=function(n,t){return n(t)},fn=preact__WEBPACK_IMPORTED_MODULE_1__.Fragment;function an(n){n()}function sn(n){return n}function hn(){return[!1,an]}var vn=preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;function dn(t,u){var o=u(),i=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)({s:{__:o,h:u}}),l=i[0].s,c=i[1];return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function(){l.__=o,l.h=u,l.__!==u()&&c({s:l})},[t,o,u]),(0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return l.__!==l.h()&&c({s:l}),t(function(){l.__!==l.h()&&c({s:l})})},[t]),o}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,useInsertionEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,useTransition:hn,useDeferredValue:sn,useSyncExternalStore:dn,startTransition:an,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue,version:"17.0.2",Children:k,render:z,hydrate:B,unmountComponentAtNode:un,createPortal:V,createElement:preact__WEBPACK_IMPORTED_MODULE_1__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_1__.createContext,createFactory:tn,cloneElement:rn,createRef:preact__WEBPACK_IMPORTED_MODULE_1__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,isValidElement:en,findDOMNode:on,Component:preact__WEBPACK_IMPORTED_MODULE_1__.Component,PureComponent:C,memo:E,forwardRef:R,flushSync:cn,unstable_batchedUpdates:ln,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,Suspense:T,SuspenseList:D,lazy:U,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:X});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ d),
/* harmony export */   "Fragment": () => (/* binding */ p),
/* harmony export */   "cloneElement": () => (/* binding */ q),
/* harmony export */   "createContext": () => (/* binding */ B),
/* harmony export */   "createElement": () => (/* binding */ h),
/* harmony export */   "createRef": () => (/* binding */ y),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "hydrate": () => (/* binding */ S),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "options": () => (/* binding */ l),
/* harmony export */   "render": () => (/* binding */ P),
/* harmony export */   "toChildArray": () => (/* binding */ x)
/* harmony export */ });
var n,l,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v(l,f,t,o,null)}function v(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function y(){return{current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?_(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function b(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||setTimeout)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_(t):o,t.__h),z(u,t),t.__e!=o&&k(t)))})}function w(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(p,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null}j(n,k,d=d||f,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m(k,s,n):s=A(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_(d))}for(u.__e=g,h=C;h--;)null!=x[h]&&("function"==typeof u.type&&null!=x[h].__e&&x[h].__e==u.__d&&(u.__d=_(i,h+1)),N(x[h],x[h]));if(w)for(h=0;h<w.length;h++)M(w[h],w[++h],w[++h])}function m(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m(i,l,u):A(u,i,i,t,i.__e,l));return l}function x(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){x(n,l)}):l.push(n)),l}function A(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l.__b)&&a(u);try{n:if("function"==typeof H){if(g=u.props,m=(a=H.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in H&&H.prototype.render?u.__c=h=new H(g,x):(u.__c=h=new d(g,x),h.constructor=H,h.render=O),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=H.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,H.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==H.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==H.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k)})}if(h.context=x,h.props=g,h.__v=u,h.__P=n,A=l.__r,C=0,"prototype"in H&&H.prototype.render)h.state=h.__s,h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context);else do{h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++C<25);h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),$=null!=a&&a.type===p&&null==a.key?a.props.children:a,w(n,Array.isArray($)?$:[$],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(a=l.diffed)&&a(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),h=(y=i.props||f).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H(l,"checked",k,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||a(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function P(u,i,t){var o,r,e;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j(i,u=(!o&&t||i).__k=h(p,null,[u]),r||f,f,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z(e,u)}function S(n,l){P(n,l,S)}function q(l,u,i){var t,o,r,f=s({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),v(l.type,f,t||l.key,o||l.ref,null)}function B(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(b)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=e.slice,l={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),b(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b(this))},d.prototype.render=p,t=[],g.__r=0,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* binding */ T),
/* harmony export */   "useContext": () => (/* binding */ q),
/* harmony export */   "useDebugValue": () => (/* binding */ x),
/* harmony export */   "useEffect": () => (/* binding */ h),
/* harmony export */   "useErrorBoundary": () => (/* binding */ V),
/* harmony export */   "useImperativeHandle": () => (/* binding */ A),
/* harmony export */   "useLayoutEffect": () => (/* binding */ s),
/* harmony export */   "useMemo": () => (/* binding */ F),
/* harmony export */   "useReducer": () => (/* binding */ y),
/* harmony export */   "useRef": () => (/* binding */ _),
/* harmony export */   "useState": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,r,u,i,o=0,c=[],f=[],e=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,l=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,m=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function d(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:f}),i.__[t]}function p(n){return o=1,y(z,n)}function y(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):z(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){r.u=!0;var c=r.shouldComponentUpdate;r.shouldComponentUpdate=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!!i&&(!c||c.call(this,n,t,r))}}return o.__N||o.__}function h(u,i){var o=d(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&w(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o))}function s(u,i){var o=d(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&w(o.__H,i)&&(o.__=u,o.i=i,r.__h.push(o))}function _(n){return o=5,F(function(){return{current:n}},[])}function A(n,t,r){o=6,s(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function F(n,r){var u=d(t++,7);return w(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F(function(){return n},t)}function q(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function x(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(r?r(t):t)}function V(n){var u=d(t++,10),i=p();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n){u.__&&u.__(n),i[1](n)}),[i[0],function(){i[1](void 0)}]}function b(){for(var t;t=c.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(j),t.__H.__h.forEach(k),t.__H.__h=[]}catch(r){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){r=null,e&&e(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=f,n.__N=n.i=void 0})):(i.__h.forEach(j),i.__h.forEach(k),i.__h=[])),u=r},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==c.push(o)&&i===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((i=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||function(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r))})(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==f&&(n.__=n.__V),n.i=void 0,n.__V=f})),u=r=null},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,r){r.some(function(t){try{t.__h.forEach(j),t.__h=t.__h.filter(function(n){return!n.__||k(n)})}catch(u){r.some(function(n){n.__h&&(n.__h=[])}),r=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),l&&l(t,r)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{j(n)}catch(n){r=n}}),r&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,u.__v))};var g="function"==typeof requestAnimationFrame;function j(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function k(n){var t=r;n.__c=n.__(),r=t}function w(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function z(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "jsx": () => (/* binding */ e),
/* harmony export */   "jsxDEV": () => (/* binding */ e),
/* harmony export */   "jsxs": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var o=0;function e(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:f,__self:t};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(a),a}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/ansi-regex/index.js");

module.exports = string => typeof string === 'string' ? string.replace(ansiRegex(), '') : string;


/***/ }),

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
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./main.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/main.pcss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./main.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/main.pcss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./main.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/main.pcss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Image.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Image.pcss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Image.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Image.pcss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Image.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Image.pcss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Image_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./MessageNotification.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MessageNotification.pcss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./MessageNotification.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MessageNotification.pcss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./MessageNotification.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MessageNotification.pcss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./404.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/404.pcss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./404.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/404.pcss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./404.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/404.pcss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_404_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./About.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/About.pcss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./About.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/About.pcss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./About.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/About.pcss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Catalog.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Catalog.pcss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Catalog.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Catalog.pcss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Catalog.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Catalog.pcss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Catalog_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Home.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Home.pcss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Home.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Home.pcss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Home.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Home.pcss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Home_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Info.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Info.pcss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Info.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Info.pcss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./Info.pcss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/views/Info.pcss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Info_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _assets_styles_main_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/styles/main.pcss */ "./src/assets/styles/main.pcss");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact-router */ "./node_modules/preact-router/dist/preact-router.mjs");
/* harmony import */ var preact_async_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact-async-route */ "./node_modules/preact-async-route/dist/index.js");
/* harmony import */ var preact_async_route__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact_async_route__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views */ "./src/views/index.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services */ "./src/services/index.ts");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");








var App = function(props) {
    var docUrl = new URL(document.URL);
    return /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "dark:bg-slate-900 dark:text-white",
        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_router__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _Image_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.pcss */ "./src/components/Image.pcss");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact-router */ "./node_modules/preact-router/dist/preact-router.mjs");
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");





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
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _MessageNotification_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageNotification.pcss */ "./src/components/MessageNotification.pcss");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact-router */ "./node_modules/preact-router/dist/preact-router.mjs");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
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
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
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
        __webpack_require__.e(/*! import() */ "node_modules_preact_devtools_dist_devtools_module_js").then(__webpack_require__.bind(__webpack_require__, /*! preact/devtools */ "./node_modules/preact/devtools/dist/devtools.module.js"));
        __webpack_require__.e(/*! import() */ "node_modules_preact_debug_dist_debug_module_js").then(__webpack_require__.bind(__webpack_require__, /*! preact/debug */ "./node_modules/preact/debug/dist/debug.module.js"));
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
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore */ "./node_modules/unistore/dist/unistore.es.js");
/* harmony import */ var unistore_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unistore/devtools */ "./node_modules/unistore/devtools.js");
/* harmony import */ var unistore_devtools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unistore_devtools__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
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
var isDevelopment = "development" === "development";
var isProduction = !isDevelopment;
function initUniStore(store) {
    var initStore = window.__UNISTORE_STATE__ ? window.__UNISTORE_STATE__ : window.__UNISTORE_STATE__ = {};
    var C = unistore__WEBPACK_IMPORTED_MODULE_1__["default"];
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

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/App */ "./src/App.tsx");
/* harmony import */ var _server_SSRContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/server/SSRContext */ "./src/server/SSRContext.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
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






(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.enableDevTools)();
function renderApp(App) {
    return _renderApp.apply(this, arguments);
}
function _renderApp() {
    _renderApp = _asyncToGenerator(/*#__PURE__*/ regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(App) {
        var appRootEl, renderFunc;
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    appRootEl = document.querySelector(".app-root");
                    renderFunc = _helpers__WEBPACK_IMPORTED_MODULE_5__.isDevelopment ? preact__WEBPACK_IMPORTED_MODULE_2__.render : preact__WEBPACK_IMPORTED_MODULE_2__.hydrate;
                    if (_helpers__WEBPACK_IMPORTED_MODULE_5__.environment.isBrowser) {
                        if (localStorage.theme === "dark") document.documentElement.classList.add("dark");
                        else document.documentElement.classList.remove("dark");
                    }
                    renderFunc(/*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_server_SSRContext__WEBPACK_IMPORTED_MODULE_4__.ServerContext, {
                        value: (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.initAppState)(),
                        store: (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.initUniStore)(),
                        children: /*#__PURE__*/ (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(App, {})
                    }), appRootEl);
                case 4:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _renderApp.apply(this, arguments);
}
renderApp(_App__WEBPACK_IMPORTED_MODULE_3__.App);
if (true) module.hot.accept(/*! ./App */ "./src/App.tsx", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
(function() {
    requestAnimationFrame(function() {
        var _$App = (__webpack_require__(/*! @/App */ "./src/App.tsx").App);
        renderApp(_$App);
    });
})(__WEBPACK_OUTDATED_DEPENDENCIES__); });


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
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _preact_hooks_unistore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @preact-hooks/unistore */ "./node_modules/@preact-hooks/unistore/dist/hooks.modern.js");



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
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preact_hooks_unistore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @preact-hooks/unistore */ "./node_modules/@preact-hooks/unistore/dist/hooks.modern.js");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact-router */ "./node_modules/preact-router/dist/preact-router.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _404_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.pcss */ "./src/views/404.pcss");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact-router */ "./node_modules/preact-router/dist/preact-router.mjs");



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
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _About_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.pcss */ "./src/views/About.pcss");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./src/components/index.ts");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
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
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _Catalog_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Catalog.pcss */ "./src/views/Catalog.pcss");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/index */ "./src/services/index.ts");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact-router */ "./node_modules/preact-router/dist/preact-router.mjs");
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
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _Home_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.pcss */ "./src/views/Home.pcss");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact-router */ "./node_modules/preact-router/dist/preact-router.mjs");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "./src/services/index.ts");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
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
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _Info_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Info.pcss */ "./src/views/Info.pcss");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact-router */ "./node_modules/preact-router/dist/preact-router.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.ts");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
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

/***/ "./node_modules/unistore/devtools.js":
/*!*******************************************!*\
  !*** ./node_modules/unistore/devtools.js ***!
  \*******************************************/
/***/ ((module) => {

module.exports = function unistoreDevTools(store) {
	var extension = window.__REDUX_DEVTOOLS_EXTENSION__ || window.top.__REDUX_DEVTOOLS_EXTENSION__;
	var ignoreState = false;

	if (!extension) {
		console.warn('Please install/enable Redux devtools extension');
		store.devtools = null;

		return store;
	}

	if (!store.devtools) {
		store.devtools = extension.connect();
		store.devtools.subscribe(function (message) {
			if (message.type === 'DISPATCH' && message.state) {
				ignoreState = (message.payload.type === 'JUMP_TO_ACTION' || message.payload.type === 'JUMP_TO_STATE');
				store.setState(JSON.parse(message.state), true);
			}
		});
		store.devtools.init(store.getState());
		store.subscribe(function (state, action) {
			var actionName = action && action.name || 'setState';

			if (!ignoreState) {
				store.devtools.send(actionName, state);
			} else {
				ignoreState = false;
			}
		});
	}

	return store;
}


/***/ }),

/***/ "./node_modules/unistore/dist/unistore.es.js":
/*!***************************************************!*\
  !*** ./node_modules/unistore/dist/unistore.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function n(n,t){for(var r in t)n[r]=t[r];return n}/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(t){var r=[];function u(n){for(var t=[],u=0;u<r.length;u++)r[u]===n?n=null:t.push(r[u]);r=t}function e(u,e,f){t=e?u:n(n({},t),u);for(var i=r,o=0;o<i.length;o++)i[o](t,f)}return t=t||{},{action:function(n){function r(t){e(t,!1,n)}return function(){for(var u=arguments,e=[t],f=0;f<arguments.length;f++)e.push(u[f]);var i=n.apply(this,e);if(null!=i)return i.then?i.then(r):r(i)}},setState:e,subscribe:function(n){return r.push(n),function(){u(n)}},unsubscribe:u,getState:function(){return t}}}
//# sourceMappingURL=unistore.es.js.map


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client-overlay.js":
/*!***************************************************************!*\
  !*** ./node_modules/webpack-hot-middleware/client-overlay.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*eslint-env browser*/

var clientOverlay = document.createElement('div');
clientOverlay.id = 'webpack-hot-middleware-clientOverlay';
var styles = {
  background: 'rgba(0,0,0,0.85)',
  color: '#e8e8e8',
  lineHeight: '1.6',
  whiteSpace: 'pre',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: '13px',
  position: 'fixed',
  zIndex: 9999,
  padding: '10px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  dir: 'ltr',
  textAlign: 'left',
};

var ansiHTML = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'ff3348',
  green: '3fff4f',
  yellow: 'ffd30e',
  blue: '169be0',
  magenta: 'f840b7',
  cyan: '0ad8e9',
  lightgrey: 'ebe7e3',
  darkgrey: '6d7891',
};

var htmlEntities = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");

function showProblems(type, lines) {
  clientOverlay.innerHTML = '';
  lines.forEach(function (msg) {
    msg = ansiHTML(htmlEntities.encode(msg));
    var div = document.createElement('div');
    div.style.marginBottom = '26px';
    div.innerHTML = problemType(type) + ' in ' + msg;
    clientOverlay.appendChild(div);
  });
  if (document.body) {
    document.body.appendChild(clientOverlay);
  }
}

function clear() {
  if (document.body && clientOverlay.parentNode) {
    document.body.removeChild(clientOverlay);
  }
}

function problemType(type) {
  var problemColors = {
    errors: colors.red,
    warnings: colors.yellow,
  };
  var color = problemColors[type] || colors.red;
  return (
    '<span style="background-color:#' +
    color +
    '; color:#000000; padding:3px 6px; border-radius: 4px;">' +
    type.slice(0, -1).toUpperCase() +
    '</span>'
  );
}

module.exports = function (options) {
  for (var color in options.ansiColors) {
    if (color in colors) {
      colors[color] = options.ansiColors[color];
    }
    ansiHTML.setColors(colors);
  }

  for (var style in options.overlayStyles) {
    styles[style] = options.overlayStyles[style];
  }

  for (var key in styles) {
    clientOverlay.style[key] = styles[key];
  }

  return {
    showProblems: showProblems,
    clear: clear,
  };
};

module.exports.clear = clear;
module.exports.showProblems = showProblems;


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client.js?name=web&path=/__webpack_hmr&timeout=2000":
/*!*************************************************************************************************!*\
  !*** ./node_modules/webpack-hot-middleware/client.js?name=web&path=/__webpack_hmr&timeout=2000 ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __resourceQuery = "?name=web&path=/__webpack_hmr&timeout=2000";
/* module decorator */ module = __webpack_require__.nmd(module);
/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/

var options = {
  path: '/__webpack_hmr',
  timeout: 20 * 1000,
  overlay: true,
  reload: false,
  log: true,
  warn: true,
  name: '',
  autoConnect: true,
  overlayStyles: {},
  overlayWarnings: false,
  ansiColors: {},
};
if (true) {
  var overrides = Object.fromEntries(
    new URLSearchParams(__resourceQuery.slice(1))
  );
  setOverrides(overrides);
}

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn(
    "webpack-hot-middleware's client requires EventSource to work. " +
      'You should include a polyfill if you want to support this browser: ' +
      'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools'
  );
} else {
  if (options.autoConnect) {
    connect();
  }
}

/* istanbul ignore next */
function setOptionsAndConnect(overrides) {
  setOverrides(overrides);
  connect();
}

function setOverrides(overrides) {
  if (overrides.autoConnect)
    options.autoConnect = overrides.autoConnect == 'true';
  if (overrides.path) options.path = overrides.path;
  if (overrides.timeout) options.timeout = overrides.timeout;
  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
  if (overrides.reload) options.reload = overrides.reload !== 'false';
  if (overrides.noInfo && overrides.noInfo !== 'false') {
    options.log = false;
  }
  if (overrides.name) {
    options.name = overrides.name;
  }
  if (overrides.quiet && overrides.quiet !== 'false') {
    options.log = false;
    options.warn = false;
  }

  if (overrides.dynamicPublicPath) {
    options.path = __webpack_require__.p + options.path;
  }

  if (overrides.ansiColors)
    options.ansiColors = JSON.parse(overrides.ansiColors);
  if (overrides.overlayStyles)
    options.overlayStyles = JSON.parse(overrides.overlayStyles);

  if (overrides.overlayWarnings) {
    options.overlayWarnings = overrides.overlayWarnings == 'true';
  }
}

function EventSourceWrapper() {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    addMessageListener: function (fn) {
      listeners.push(fn);
    },
  };
}

function getEventSourceWrapper() {
  if (!window.__whmEventSourceWrapper) {
    window.__whmEventSourceWrapper = {};
  }
  if (!window.__whmEventSourceWrapper[options.path]) {
    // cache the wrapper for other entries loaded on
    // the same page with the same options.path
    window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();
  }
  return window.__whmEventSourceWrapper[options.path];
}

function connect() {
  getEventSourceWrapper().addMessageListener(handleMessage);

  function handleMessage(event) {
    if (event.data == '\uD83D\uDC93') {
      return;
    }
    try {
      processMessage(JSON.parse(event.data));
    } catch (ex) {
      if (options.warn) {
        console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
      }
    }
  }
}

// the reporter needs to be a singleton on the page
// in case the client is being used by multiple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey = '__webpack_hot_middleware_reporter__';
var reporter;
if (typeof window !== 'undefined') {
  if (!window[singletonKey]) {
    window[singletonKey] = createReporter();
  }
  reporter = window[singletonKey];
}

function createReporter() {
  var strip = __webpack_require__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js");

  var overlay;
  if (typeof document !== 'undefined' && options.overlay) {
    overlay = __webpack_require__(/*! ./client-overlay */ "./node_modules/webpack-hot-middleware/client-overlay.js")({
      ansiColors: options.ansiColors,
      overlayStyles: options.overlayStyles,
    });
  }

  var styles = {
    errors: 'color: #ff0000;',
    warnings: 'color: #999933;',
  };
  var previousProblems = null;
  function log(type, obj) {
    var newProblems = obj[type]
      .map(function (msg) {
        return strip(msg);
      })
      .join('\n');
    if (previousProblems == newProblems) {
      return;
    } else {
      previousProblems = newProblems;
    }

    var style = styles[type];
    var name = obj.name ? "'" + obj.name + "' " : '';
    var title = '[HMR] bundle ' + name + 'has ' + obj[type].length + ' ' + type;
    // NOTE: console.warn or console.error will print the stack trace
    // which isn't helpful here, so using console.log to escape it.
    if (console.group && console.groupEnd) {
      console.group('%c' + title, style);
      console.log('%c' + newProblems, style);
      console.groupEnd();
    } else {
      console.log(
        '%c' + title + '\n\t%c' + newProblems.replace(/\n/g, '\n\t'),
        style + 'font-weight: bold;',
        style + 'font-weight: normal;'
      );
    }
  }

  return {
    cleanProblemsCache: function () {
      previousProblems = null;
    },
    problems: function (type, obj) {
      if (options.warn) {
        log(type, obj);
      }
      if (overlay) {
        if (options.overlayWarnings || type === 'errors') {
          overlay.showProblems(type, obj[type]);
          return false;
        }
        overlay.clear();
      }
      return true;
    },
    success: function () {
      if (overlay) overlay.clear();
    },
    useCustomOverlay: function (customOverlay) {
      overlay = customOverlay;
    },
  };
}

var processUpdate = __webpack_require__(/*! ./process-update */ "./node_modules/webpack-hot-middleware/process-update.js");

var customHandler;
var subscribeAllHandler;
function processMessage(obj) {
  switch (obj.action) {
    case 'building':
      if (options.log) {
        console.log(
          '[HMR] bundle ' +
            (obj.name ? "'" + obj.name + "' " : '') +
            'rebuilding'
        );
      }
      break;
    case 'built':
      if (options.log) {
        console.log(
          '[HMR] bundle ' +
            (obj.name ? "'" + obj.name + "' " : '') +
            'rebuilt in ' +
            obj.time +
            'ms'
        );
      }
    // fall through
    case 'sync':
      if (obj.name && options.name && obj.name !== options.name) {
        return;
      }
      var applyUpdate = true;
      if (obj.errors.length > 0) {
        if (reporter) reporter.problems('errors', obj);
        applyUpdate = false;
      } else if (obj.warnings.length > 0) {
        if (reporter) {
          var overlayShown = reporter.problems('warnings', obj);
          applyUpdate = overlayShown;
        }
      } else {
        if (reporter) {
          reporter.cleanProblemsCache();
          reporter.success();
        }
      }
      if (applyUpdate) {
        processUpdate(obj.hash, obj.modules, options);
      }
      break;
    default:
      if (customHandler) {
        customHandler(obj);
      }
  }

  if (subscribeAllHandler) {
    subscribeAllHandler(obj);
  }
}

if (module) {
  module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    },
    setOptionsAndConnect: setOptionsAndConnect,
  };
}


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/process-update.js":
/*!***************************************************************!*\
  !*** ./node_modules/webpack-hot-middleware/process-update.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */

/* global window __webpack_hash__ */

if (false) {}

var hmrDocsUrl = 'https://webpack.js.org/concepts/hot-module-replacement/'; // eslint-disable-line max-len

var lastHash;
var failureStatuses = { abort: 1, fail: 1 };
var applyOptions = {
  ignoreUnaccepted: true,
  ignoreDeclined: true,
  ignoreErrored: true,
  onUnaccepted: function (data) {
    console.warn(
      'Ignored an update to unaccepted module ' + data.chain.join(' -> ')
    );
  },
  onDeclined: function (data) {
    console.warn(
      'Ignored an update to declined module ' + data.chain.join(' -> ')
    );
  },
  onErrored: function (data) {
    console.error(data.error);
    console.warn(
      'Ignored an error while updating module ' +
        data.moduleId +
        ' (' +
        data.type +
        ')'
    );
  },
};

function upToDate(hash) {
  if (hash) lastHash = hash;
  return lastHash == __webpack_require__.h();
}

module.exports = function (hash, moduleMap, options) {
  var reload = options.reload;
  if (!upToDate(hash) && module.hot.status() == 'idle') {
    if (options.log) console.log('[HMR] Checking for updates on the server...');
    check();
  }

  function check() {
    var cb = function (err, updatedModules) {
      if (err) return handleError(err);

      if (!updatedModules) {
        if (options.warn) {
          console.warn('[HMR] Cannot find update (Full reload needed)');
          console.warn('[HMR] (Probably because of restarting the server)');
        }
        performReload();
        return null;
      }

      var applyCallback = function (applyErr, renewedModules) {
        if (applyErr) return handleError(applyErr);

        if (!upToDate()) check();

        logUpdates(updatedModules, renewedModules);
      };

      var applyResult = module.hot.apply(applyOptions, applyCallback);
      // webpack 2 promise
      if (applyResult && applyResult.then) {
        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
        applyResult.then(function (outdatedModules) {
          applyCallback(null, outdatedModules);
        });
        applyResult.catch(applyCallback);
      }
    };

    var result = module.hot.check(false, cb);
    // webpack 2 promise
    if (result && result.then) {
      result.then(function (updatedModules) {
        cb(null, updatedModules);
      });
      result.catch(cb);
    }
  }

  function logUpdates(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function (moduleId) {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    if (unacceptedModules.length > 0) {
      if (options.warn) {
        console.warn(
          "[HMR] The following modules couldn't be hot updated: " +
            '(Full reload needed)\n' +
            'This is usually because the modules which have changed ' +
            '(and their parents) do not know how to hot reload themselves. ' +
            'See ' +
            hmrDocsUrl +
            ' for more details.'
        );
        unacceptedModules.forEach(function (moduleId) {
          console.warn('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
        });
      }
      performReload();
      return;
    }

    if (options.log) {
      if (!renewedModules || renewedModules.length === 0) {
        console.log('[HMR] Nothing hot updated.');
      } else {
        console.log('[HMR] Updated modules:');
        renewedModules.forEach(function (moduleId) {
          console.log('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
        });
      }

      if (upToDate()) {
        console.log('[HMR] App is up to date.');
      }
    }
  }

  function handleError(err) {
    if (module.hot.status() in failureStatuses) {
      if (options.warn) {
        console.warn('[HMR] Cannot check for update (Full reload needed)');
        console.warn('[HMR] ' + (err.stack || err.message));
      }
      performReload();
      return;
    }
    if (options.warn) {
      console.warn('[HMR] Update check failed: ' + (err.stack || err.message));
    }
  }

  function performReload() {
    if (reload) {
      if (options.warn) console.warn('[HMR] Reloading page');
      window.location.reload();
    }
  }
};


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

/***/ "./node_modules/preact-router/dist/preact-router.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/preact-router/dist/preact-router.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ E),
/* harmony export */   "Route": () => (/* binding */ L),
/* harmony export */   "Router": () => (/* binding */ D),
/* harmony export */   "default": () => (/* binding */ D),
/* harmony export */   "exec": () => (/* binding */ s),
/* harmony export */   "getCurrentUrl": () => (/* binding */ R),
/* harmony export */   "route": () => (/* binding */ $),
/* harmony export */   "useRouter": () => (/* binding */ C)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
var a={};function c(n,t){for(var r in t)n[r]=t[r];return n}function s(n,t,r){var i,o=/(?:\?([^#]*))?(#.*)?$/,e=n.match(o),u={};if(e&&e[1])for(var f=e[1].split("&"),c=0;c<f.length;c++){var s=f[c].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}n=d(n.replace(o,"")),t=d(t||"");for(var h=Math.max(n.length,t.length),v=0;v<h;v++)if(t[v]&&":"===t[v].charAt(0)){var l=t[v].replace(/(^:|[+*?]+$)/g,""),p=(t[v].match(/[+*?]+$/)||a)[0]||"",m=~p.indexOf("+"),y=~p.indexOf("*"),U=n[v]||"";if(!U&&!y&&(p.indexOf("?")<0||m)){i=!1;break}if(u[l]=decodeURIComponent(U),m||y){u[l]=n.slice(v).map(decodeURIComponent).join("/");break}}else if(t[v]!==n[v]){i=!1;break}return(!0===r.default||!1!==i)&&u}function h(n,t){return n.rank<t.rank?1:n.rank>t.rank?-1:n.index-t.index}function v(n,t){return n.index=t,n.rank=function(n){return n.props.default?0:d(n.props.path).map(l).join("")}(n),n.props}function d(n){return n.replace(/(^\/+|\/+$)/g,"").split("/")}function l(n){return":"==n.charAt(0)?1+"*+?".indexOf(n.charAt(n.length-1))||4:5}var p={},m=[],y=[],U=null,g={url:R()},k=(0,preact__WEBPACK_IMPORTED_MODULE_0__.createContext)(g);function C(){var n=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext)(k);if(n===g){var t=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)()[1];(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){return y.push(t),function(){return y.splice(y.indexOf(t),1)}},[])}return[n,$]}function R(){var n;return""+((n=U&&U.location?U.location:U&&U.getCurrentLocation?U.getCurrentLocation():"undefined"!=typeof location?location:p).pathname||"")+(n.search||"")}function $(n,t){return void 0===t&&(t=!1),"string"!=typeof n&&n.url&&(t=n.replace,n=n.url),function(n){for(var t=m.length;t--;)if(m[t].canRoute(n))return!0;return!1}(n)&&function(n,t){void 0===t&&(t="push"),U&&U[t]?U[t](n):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,n)}(n,t?"replace":"push"),I(n)}function I(n){for(var t=!1,r=0;r<m.length;r++)m[r].routeTo(n)&&(t=!0);return t}function M(n){if(n&&n.getAttribute){var t=n.getAttribute("href"),r=n.getAttribute("target");if(t&&t.match(/^\//g)&&(!r||r.match(/^_?self$/i)))return $(t)}}function b(n){return n.stopImmediatePropagation&&n.stopImmediatePropagation(),n.stopPropagation&&n.stopPropagation(),n.preventDefault(),!1}function W(n){if(!(n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||n.button)){var t=n.target;do{if("a"===t.localName&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(M(t))return b(n)}}while(t=t.parentNode)}}var w=!1;function D(n){n.history&&(U=n.history),this.state={url:n.url||R()}}c(D.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component,{shouldComponentUpdate:function(n){return!0!==n.static||n.url!==this.props.url||n.onChange!==this.props.onChange},canRoute:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(this.props.children);return void 0!==this.g(t,n)},routeTo:function(n){this.setState({url:n});var t=this.canRoute(n);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var n=this;w||(w=!0,U||addEventListener("popstate",function(){I(R())}),addEventListener("click",W)),m.push(this),U&&(this.u=U.listen(function(t){var r=t.location||t;n.routeTo(""+(r.pathname||"")+(r.search||""))})),this.p=!1},componentWillUnmount:function(){"function"==typeof this.u&&this.u(),m.splice(m.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(n,t){n=n.filter(v).sort(h);for(var r=0;r<n.length;r++){var i=n[r],o=s(t,i.props.path,i.props);if(o)return[i,o]}},render:function(n,t){var e,u,f=n.onChange,a=t.url,s=this.c,h=this.g((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n.children),a);if(h&&(u=(0,preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(h[0],c(c({url:a,matches:e=h[1]},e),{key:void 0,ref:void 0}))),a!==(s&&s.url)){c(g,s=this.c={url:a,previous:s&&s.url,current:u,path:u?u.props.path:null,matches:e}),s.router=this,s.active=u?[u]:[];for(var v=y.length;v--;)y[v]({});"function"==typeof f&&f(s)}return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(k.Provider,{value:s},u)}});var E=function(n){return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a",c({onClick:W},n))},L=function(n){return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(n.component,n)};
//# sourceMappingURL=preact-router.module.js.map


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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("index." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("ee467f43764b6d046f1b")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "preact-starter:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatepreact_starter"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpreact_starter"] = self["webpackChunkpreact_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.tsx");
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/webpack-hot-middleware/client.js?name=web&path=/__webpack_hmr&timeout=2000");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map