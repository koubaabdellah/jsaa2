(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("wix-perf-measure", [], factory);
	else if(typeof exports === 'object')
		exports["wix-perf-measure"] = factory();
	else
		root["wix-perf-measure"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/wix-perf-measure/35527b6db783acf1576dabb35159d06fcd03cabe1ee973cd2b068cb2/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: noop, label, rejector, isUndefined, isNumber, isBoolean, isString, round, excludeSearch, getFirstEntryByType, extract, handleFinish, disconnectHandler, getClosestElementWithId, closestId, closestContainer, closestSelector, addField, allFulfilled, batch, objectAssignDeep */
/*! exports used: addField, allFulfilled, batch, closestContainer, closestId, closestSelector, disconnectHandler, excludeSearch, extract, getClosestElementWithId, getFirstEntryByType, handleFinish, isBoolean, isNumber, isUndefined, noop, rejector, round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return noop; });
/* unused harmony export label */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return rejector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isBoolean; });
/* unused harmony export isString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return excludeSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getFirstEntryByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return extract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return handleFinish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return disconnectHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getClosestElementWithId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return closestId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return closestContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return closestSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return allFulfilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return batch; });
/* unused harmony export objectAssignDeep */
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ 1);
//@ts-check

/**
 * @typedef {new (callback: PerformanceObserverCallback) => PerformanceObserver} PerformanceObserverType
 * @typedef {[Window & typeof globalThis,Performance,PerformanceObserverType,((handler:TimerHandler,timeout?:number) => number),((handle:number) => void)]} State
 */

function noop() {}
var label = function label(s) {
  return "" + _constants_js__WEBPACK_IMPORTED_MODULE_0__[/* MARKER */ "d"] + s;
};
function rejector(value) {
  return function () {
    return Promise.reject(value);
  };
}

function isType(type) {
  return function (v) {
    return typeof v === type;
  };
}

var isUndefined = isType('undefined');
var isNumber = isType('number');
var isBoolean = isType('boolean');
var isString = isType('string');
function round(obj) {
  return Object.entries(obj).filter(function (_ref) {
    var value = _ref[1];
    return typeof value === 'number';
  }).reduce(function (acc, _ref2) {
    var key = _ref2[0],
        value = _ref2[1];
    acc[key] = Math.round(value);
    return acc;
  }, obj);
}
/**
 * Shorten URL to imporant part
 * @param {string} url
 */

function excludeSearch(url) {
  return url && url.replace(/\?.*$/, '');
}
/**
 * Return the first entry for an entry type, if it exists
 * @param {Performance} performance 
 * @param {string} entryType 
 * @returns {PerformanceEntry|undefined}
 */

function getFirstEntryByType(performance, entryType) {
  var _performance$getEntri;

  return performance.getEntriesByType == null ? void 0 : (_performance$getEntri = performance.getEntriesByType(entryType)) == null ? void 0 : _performance$getEntri[0];
}
/**
 * Extracts a field value from a promise return
 * @param {Promise} promise 
 * @param {string|number} field 
 */

function extract(promise, field) {
  return promise.then(function (_ref3) {
    var value = _ref3[field];
    return value;
  });
}
/**
 * Finish function factory
 * @template T
 * @param {Array<T>} cbs 
 * @param {T} cb 
 * @param {() => void} terminate
 */

function handleFinish(cbs, cb, terminate) {
  return function () {
    var index = cbs.indexOf(cb);

    if (index > -1) {
      cbs.splice(index, 1);

      if (cbs.length === 0) {
        terminate();
      }
    }
  };
}
/**
 * Create disconnect handler
 * @param {PerformanceObserver} observer 
 */

function disconnectHandler(observer) {
  return function () {
    return observer.disconnect();
  };
}
/**
 * Get id of closest containing ancestor that has an id, or id param if provided
 * @param {Element} [element]
 */

function getClosestElementWithId(element) {
  return closestSelector(element, '*[id]') || element;
}
/**
 * Get id of closest containing ancestor that has an id, or id param if provided
 * @param {Element} [element]
 * @param {string} [id]
 */

function closestId(element, id) {
  var _closestSelector;

  return id || ((_closestSelector = closestSelector(element, '*[id]')) == null ? void 0 : _closestSelector.id);
}
/**
 * Get container element
 * @param {Element} [element]
 */

function closestContainer(element) {
  return closestSelector(element, 'h1,h2,h3,h4,h5,h6,p,picture,wix-image,article,section') || element;
}
/**
 * @param {Element | undefined} element 
 * @param {string} selector
 */

function closestSelector(element, selector) {
  return element == null ? void 0 : element.closest(selector);
}
/**
 * Add field value to property bag, coercing to boolean if name starts with "is"
 * @param {Object} target 
 * @param {string} key
 * @param {*} value 
 */

function addField(target, key, value) {
  if (!isUndefined(value)) {
    target[key] = /^is/.test(key) ? !!value : value;
  }
}
/**
 * Waits until all promises are settled, and return promise with fulfilled values
 * @template T
 * @param {Promise<T>[]} promises 
 */

function allFulfilled(promises) {
  return (
    /** @type {any} */
    Promise.allSettled(promises).then(function (results) {
      return results.filter(function (_ref4) {
        var status = _ref4.status;
        return status === 'fulfilled';
      }).map(function (result) {
        return result.value;
      });
    })
  );
}
/**
 * Combine multiple fulfilled entries into a single entry
 * @param {string} entryType 
 * @param  {...Promise} promises 
 */

function batch(entryType) {
  for (var _len = arguments.length, promises = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    promises[_key - 1] = arguments[_key];
  }

  return new Promise(function (resolve) {
    allFulfilled(promises).then(function (values) {
      var result = values.reduce(function (acc, value) {
        return Object.assign(acc, value);
      }, {});
      result.entryType = entryType;
      resolve(result);
    });
  });
}
var objectAssignDeep = function objectAssignDeep(partialData, data) {
  Object.entries(partialData).forEach(function (_ref5) {
    var key = _ref5[0],
        value = _ref5[1];

    if (typeof value === 'object') {
      if (!data[key]) {
        data[key] = value;
      } else {
        objectAssignDeep(partialData[key], data[key]);
      }
    } else {
      data[key] = partialData[key];
    }
  });
};

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: CLS_FACTOR, PIXEL_RATIO_FACTOR, MAX_DOWNLOAD_SPEED, MARKER, LISTEN, LISTEN_ONCE */
/*! exports used: CLS_FACTOR, LISTEN, LISTEN_ONCE, MARKER, MAX_DOWNLOAD_SPEED, PIXEL_RATIO_FACTOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLS_FACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PIXEL_RATIO_FACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MAX_DOWNLOAD_SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MARKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LISTEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LISTEN_ONCE; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-check
var CLS_FACTOR = 10000;
var PIXEL_RATIO_FACTOR = 10;
var MAX_DOWNLOAD_SPEED = 10000;
var MARKER = "\u23F1"; // stopwatch

var LISTEN = {
  capture: true,
  passive: true
};
var LISTEN_ONCE = _objectSpread(_objectSpread({}, LISTEN), {}, {
  once: true
});

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./utils/wixBiSession.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWixBiSession; });
//@ts-check

/**
 * Get wixBiSession for Wix sessions
 * @param {Object} window
 */
function getWixBiSession(window) {
  var _window$bi;

  return window.wixBiSession || ((_window$bi = window.bi) == null ? void 0 : _window$bi.wixBiSession);
}

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./actions/loadInfo.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses injected variables (process) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadInfo; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ 0);
 //@ts-check

/* global process, requirejs */

var INFO_LABEL = 'wix-perf-measure-info';
/**
 * @type {Promise}
 */

var info;
/**
 * @typedef {import('../utils/utils.js').State} State
 */

/**
 * Load and execgit statute info helper
 * @param {State} state 
 * @param {Document} document
 * @param {string} src
 * @param {Promise[]} measurements
 * @param {import('../entries/crux.js').getCurrentLcp} getCurrentLcp
 * @param {(state: State) => import('../entries/cls.js').LayoutShiftResult} cls
 */

function loadInfo(state, document, src, measurements, getCurrentLcp, cls) {
  Object.defineProperty(measurements, 'info', {
    value: function value() {
      var window = state[0];

      if (typeof process === 'undefined') {
        /** @type {Object} */
        window.process = {
          env: {}
        }; // It's OK to leak it for debugging
      }

      if (false) {}

      if (!info) {
        info = new Promise(function (resolve, reject) {
          if (!src) {
            return reject();
          }

          var script = document.createElement('script');
          script.src = src.replace('measure.', 'measure-info.');
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      info.then(function () {
        // @ts-ignore
        if (typeof requirejs === 'function') {
          // @ts-ignore
          requirejs([INFO_LABEL], invoke, fail);
        } else {
          invoke(window[INFO_LABEL]);
        }
      })["catch"](fail);

      function invoke(r) {
        if (r) {
          r["default"](measurements, getCurrentLcp()["catch"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "p"]), cls(state));
        } else {
          fail();
        }
      }

      function fail() {
        console.info('Failed to load info'); // eslint-disable-line no-console
      }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ 4)))

/***/ }),
/* 4 */
/*!*****************************************************************************!*\
  !*** /home/builduser/work/ecb8c1c6a59aa27c/node_modules/process/browser.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./index.js + 37 modules ***!
  \*******************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/loadInfo.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/constants.js */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/wixBiSession.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./utils/constants.js
var constants = __webpack_require__(1);

// CONCATENATED MODULE: ./utils/windowEvents.js
//@ts-check

/**
 * Hook up DOM event handler
 * @param {Window | Document | Element} target 
 * @param {string} type 
 * @param {EventListenerOrEventListenerObject} listener 
 * @param {boolean} [once = true] 
 */

function windowEvents_addEventListener(target, type, listener, once) {
  if (once === void 0) {
    once = true;
  }

  target.addEventListener(type, listener, once ? constants["c" /* LISTEN_ONCE */] : constants["b" /* LISTEN */]);
}
/**
 * Remove DOM event handler
 * @param {Window | Document | Element} target 
 * @param {string} type 
 * @param {EventListenerOrEventListenerObject} listener 
 * @param {boolean} [once = true] 
 */

function windowEvents_removeEventListener(target, type, listener, once) {
  if (once === void 0) {
    once = true;
  }

  target.removeEventListener(type, listener, once ? constants["c" /* LISTEN_ONCE */] : constants["b" /* LISTEN */]);
}
var dcl = windowEvents_once(function (readyState) {
  return readyState !== 'loading';
}, 'DOMContentLoaded');
var load = windowEvents_once(function (readyState) {
  return readyState === 'complete';
}, 'load');
var pagehide = windowEvents_once(function () {
  return false;
}, 'pagehide', false);

function stateToPromise(window, isState, eventName, delay) {
  return new Promise(function (resolve) {
    if (isState(window.document.readyState)) {
      resolve({
        startTime: 0
      });
    } else {
      var _resolve = function _resolve(ev) {
        return resolve({
          startTime: ev.timeStamp
        });
      };

      var handler = delay ? function (ev) {
        return setTimeout(function () {
          return _resolve(ev);
        }, 0);
      } : _resolve;
      windowEvents_addEventListener(window, eventName, handler);
    }
  });
}
/**
 * @param {(s:string) => (boolean)} isState 
 * @param {string} eventName
 * @param {boolean} [delay = true]
 * @returns {(window: Window) => Promise<{startTime: number}>}
 */


function windowEvents_once(isState, eventName, delay) {
  if (delay === void 0) {
    delay = true;
  }

  var promise;
  return function (window) {
    if (!promise) {
      promise = stateToPromise(window, isState, eventName, delay);
    }

    return promise;
  };
}
/**
 * Dispatch a custom event
 * @param {Object} window 
 * @param {string} label 
 * @param {any} detail 
 * @param {EventTarget} [target=window] 
 */


function fireEvent(window, label, detail, target) {
  if (target === void 0) {
    target = window;
  }

  target.dispatchEvent(new window.CustomEvent(label, {
    detail: detail
  }));
}
// CONCATENATED MODULE: ./entries/hidden.js
//@ts-check

var hidden_entryType = 'visibility';
var VISIBILITY = 'visibilitychange';
/**
 * Get visibility attributes
 * @param {import('../utils/utils.js').State} state
 * @return {Promise<{entryType: 'visibility', type: string, startTime: number}>}
 */

function hidden_hidden(_ref) {
  var window = _ref[0];
  return new Promise(function (resolve) {
    if (isHidden(window)) {
      return done(VISIBILITY, 0);
    }

    windowEvents_addEventListener(window, VISIBILITY, visibilitychange, false);

    function visibilitychange(_ref2) {
      var timeStamp = _ref2.timeStamp;

      if (isHidden(window)) {
        windowEvents_removeEventListener(document, VISIBILITY, visibilitychange, false);
        done(VISIBILITY, timeStamp);
      }
    }

    pagehide(window).then(function (_ref3) {
      var startTime = _ref3.startTime;
      return done('pagehide', startTime);
    });
    /**
     * @param {string} type 
     * @param {number} startTime 
     */

    function done(type, startTime) {
      resolve({
        entryType: hidden_entryType,
        type: type,
        startTime: startTime
      });
    }
  });
}
/**
 * @param {Window} window 
 * @returns {boolean}
 */

function isHidden(_ref4) {
  var document = _ref4.document;
  var visibilityState = document.visibilityState;
  return typeof visibilityState === 'undefined' ? document.hidden : visibilityState === 'hidden';
}
// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(0);

// EXTERNAL MODULE: ./utils/wixBiSession.js
var utils_wixBiSession = __webpack_require__(2);

// CONCATENATED MODULE: ./utils/config.js
//@ts-check


var config = {
  __proto__: {
    load: config_load
  },
  newClsMethod: true,
  resourceDebounce: 2000,
  taskDelta: 300,
  longTask: 60,
  eventDelta: 500,
  ttiDurationInc: 2000,
  ignoreResources: 'cdn_detect,-analytics,perf-measure',
  label: makeLabel('Performance'),
  clientType: '',
  fcpPolyfill: 'wixFirstPaint',
  fcpPolyfillId: 'wix-first-paint',
  pageEvent: makeLabel('Page'),
  clsEvent: makeLabel('Cls'),
  storagePrefix: 'wix-perf-measure',
  sessionDelta: false,
  noMeasure: false,
  log: false
};

function makeLabel(id) {
  return "wix" + id + "Measurements";
}
/**
 * Load configuration from script tag dataSet
 * @param {Window} window
 * @param {DOMStringMap} dataset 
 */


function config_load(window, _ref) {
  var dataset = _ref.dataset,
      src = _ref.src;
  Object.entries(config).map(function (_ref2) {
    var key = _ref2[0],
        value = _ref2[1];
    return [dataset[key], key, value];
  }).filter(function (_ref3) {
    var data = _ref3[0];
    return !Object(utils["o" /* isUndefined */])(data);
  }).forEach(function (_ref4) {
    var data = _ref4[0],
        key = _ref4[1],
        value = _ref4[2];

    if (Object(utils["m" /* isBoolean */])(value)) {
      data = true;
    } else if (Object(utils["n" /* isNumber */])(value)) {
      var n = Number(data);
      data = Number.isNaN(n) ? value : n;
    }

    config[key] = data;
  });

  if (src) {
    config.src = src;
    var m = /\d+\.\d+\.\d+/.exec(src);

    if (m) {
      config.version = m[0];
    }
  }

  if (!config.clientType && Object(utils_wixBiSession["a" /* default */])(window)) {
    config.clientType = 'ugc';
  }
}

/* harmony default export */ var utils_config = (config);
// CONCATENATED MODULE: ./entries/client.js
//@ts-check



/**
 * Get client attributes
 * @param {import('../utils/utils.js').State} state
 * @returns {Promise}
 */

function client(_ref) {
  var window = _ref[0];
  var screen = window.screen;
  var result = {
    screenRes: screen.width + "x" + screen.height,
    availScreenRes: screen.availWidth + "x" + screen.availHeight,
    windowInner: window.innerWidth + "x" + window.innerHeight,
    windowOuter: window.outerWidth + "x" + window.outerHeight,
    devicePixelRatio: window.devicePixelRatio * constants["f" /* PIXEL_RATIO_FACTOR */],
    colorDepth: screen.colorDepth
  };

  if (utils_config.version) {
    result.version = utils_config.version;
  }

  var orientation = screen.orientation;

  if (orientation != null && orientation.type) {
    result.orientation = orientation.type;
  }
  /** @type {Object} */


  var navigator = window.navigator;
  var connection = navigator.connection,
      deviceMemory = navigator.deviceMemory,
      hardwareConcurrency = navigator.hardwareConcurrency;

  if (hardwareConcurrency) {
    result.cores = hardwareConcurrency;
  }

  if (deviceMemory) {
    result.memory = Math.floor(deviceMemory);
  }

  if (connection) {
    var type = connection.type,
        effectiveType = connection.effectiveType,
        rtt = connection.rtt,
        downlink = connection.downlink,
        saveData = connection.saveData;

    if (type) {
      result.networkType = type;
    }

    if (effectiveType) {
      result.effectiveType = effectiveType;
    }

    if (Object(utils["n" /* isNumber */])(rtt) && rtt) {
      result.rtt = rtt;
    }

    if (downlink) {
      result.download = Math.min(downlink, constants["e" /* MAX_DOWNLOAD_SPEED */]);
    }

    if (Object(utils["m" /* isBoolean */])(saveData)) {
      result.saveData = saveData;
    }
  }

  if (window.matchMedia) {
    var mql = window.matchMedia('(prefers-reduced-motion:reduce)');
    result.reducedMotion = mql.matches;
  }

  return !navigator.getBattery ? Promise.resolve(result) : navigator.getBattery().then(function (_ref2) {
    var charging = _ref2.charging,
        level = _ref2.level;
    result.lowBattery = charging === false && level < 0.1;
    return result;
  })["catch"](function () {
    return result;
  });
}
// CONCATENATED MODULE: ./utils/consent.js
//@ts-check

var ESSENTIAL_FIELDS = {
  analytics: true,
  entryType: true,
  clientType: true,
  version: true,
  cores: true,
  memory: true,
  effectiveType: true,
  rtt: true,
  download: true,
  saveData: true,
  url: true,
  dns: true,
  tcp: true,
  ssl: true,
  ttfb: true,
  redirect: true,
  fetchStart: true,
  response: true,
  navigationType: true,
  protocol: true,
  pageCaching: true,
  _brandId: true,
  viewerName: true,
  v: true,
  dc: true,
  microPop: true,
  cdn: true,
  msid: true,
  pageId: true,
  fp: true,
  fcp: true,
  tti: true,
  tbt: true,
  lcp: true,
  lcpSize: true,
  closestId: true,
  lcpTag: true,
  lcpResourceType: true,
  lcpFontClass: true,
  lcpInLightbox: true,
  cls: true,
  countCls: true,
  clsId: true,
  clsTag: true,
  clsOld: true,
  ttlb: true,
  dcl: true,
  transferSize: true,
  decodedBodySize: true,
  isSsr: true,
  ssrDuration: true,
  ssrTimestamp: true,
  startTime: true,
  duration: true,
  delay: true,
  action: true,
  type: true,
  pn: true,
  count: true,
  simLH6: true,
  isMobile: true,
  maybeBot: true,
  btype: true,
  numOfResponsivenessEvents: true,
  worstLatency: true,
  actions: true,
  elementType: true,
  worstLatencyByEntry: true,
  compId: true,
  loadState: true
};
/**
 * Apply consent policy restrictions
 * @param {Object} window
 * @param {Object} measurement 
 */

function applyConsent(window, measurement) {
  if (Symbol.iterator in measurement) {
    return measurement;
  }

  measurement.analytics = analyticsAllowed(window);

  if (measurement.analytics) {
    return measurement;
  }

  return Object.entries(measurement).filter(function (_ref) {
    var key = _ref[0];
    return ESSENTIAL_FIELDS[key];
  }).reduce(function (acc, _ref2) {
    var key = _ref2[0],
        value = _ref2[1];
    acc[key] = value;
    return acc;
  }, {});
}
/**
 * Shorten URL to imporant part
 * @param {string} url 
 * @param {Object} window
 */

function fixURL(url, window) {
  var e = /^https?:\/\/(?:www\.)?(.*)/.exec(url);

  var _short = e ? e[1] : url;

  return analyticsAllowed(window) ? _short : Object(utils["h" /* excludeSearch */])(_short);
}
function analyticsAllowed(_ref3) {
  var _consentPolicyManager, _consentPolicyManager2;

  var consentPolicyManager = _ref3.consentPolicyManager;
  return !!(consentPolicyManager != null && (_consentPolicyManager = consentPolicyManager.getCurrentConsentPolicy()) != null && (_consentPolicyManager2 = _consentPolicyManager.policy) != null && _consentPolicyManager2.analytics);
}
// CONCATENATED MODULE: ./entries/navStart.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-check


var navStart_entryType = 'navigation-start';
var RETRY = {
  COUNT: 10,
  DELAY: 100
};
/**
 * @param {import('../utils/utils.js').State} state
 */

function navStart(_ref) {
  var window = _ref[0],
      performance = _ref[1];
  return new Promise(function (resolve, reject) {
    var count = 0;

    _resolve();

    function _resolve() {
      var _performance$timing = performance.timing,
          navigationStart = _performance$timing.navigationStart,
          fetchStart = _performance$timing.fetchStart,
          domainLookupStart = _performance$timing.domainLookupStart,
          domainLookupEnd = _performance$timing.domainLookupEnd,
          redirectStart = _performance$timing.redirectStart,
          redirectEnd = _performance$timing.redirectEnd,
          connectStart = _performance$timing.connectStart,
          connectEnd = _performance$timing.connectEnd,
          secureConnectionStart = _performance$timing.secureConnectionStart,
          requestStart = _performance$timing.requestStart,
          responseStart = _performance$timing.responseStart;
      var ttfb = responseStart - navigationStart;

      if (!(ttfb >= 0)) {
        if (++count > RETRY.COUNT) {
          reject(navStart_entryType);
        } else {
          setTimeout(_resolve, RETRY.DELAY);
        }

        return;
      }

      var referrer = window.document.referrer,
          href = window.location.href;
      var navigation =
      /** @type {PerformanceNavigationTiming} */
      Object(utils["k" /* getFirstEntryByType */])(performance, 'navigation');
      resolve(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
        entryType: navStart_entryType,
        url: fixURL(href, window),
        referrer: fixURL(referrer, window)
      }, navigation && {
        navigationType: navigation.type,
        protocol: navigation.nextHopProtocol
      }), {}, {
        dns: domainLookupEnd - domainLookupStart
      }, Object(utils["n" /* isNumber */])(fetchStart) && {
        fetchStart: fetchStart - navigationStart
      }), redirectEnd && {
        redirect: redirectEnd - redirectStart
      }), secureConnectionStart ? {
        tcp: secureConnectionStart - connectStart,
        ssl: connectEnd - secureConnectionStart
      } : {
        tcp: connectEnd - connectStart
      }), {}, {
        ttfb: ttfb,
        response: responseStart - requestStart
      }));
    }
  });
}
// CONCATENATED MODULE: ./entries/navFinish.js
function navFinish_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function navFinish_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? navFinish_ownKeys(Object(source), !0).forEach(function (key) { navFinish_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : navFinish_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function navFinish_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-check


var navFinish_entryType = 'navigation-finish';
var CACHE_LIMIT_MS = 13;
var CDN_LIMIT_MS = 333;
var BROWSER = 'browser';
var ETAG = 'eTag';
var MAYBE = 'maybe';
/**
 * 
 * @param {import('../utils/utils.js').State} state
 */

function navFinish(_ref) {
  var performance = _ref[1];
  return load(window).then(function () {
    var timing = performance.timing;
    var navigationStart = timing.navigationStart,
        domContentLoadedEventEnd = timing.domContentLoadedEventEnd,
        loadEventEnd = timing.loadEventEnd;
    var responseEnd = timing.responseEnd;

    if (!(responseEnd >= navigationStart)) {
      responseEnd = timing.domInteractive || timing.domContentLoadedEventStart;
    }

    var navigation =
    /** @type {PerformanceNavigationTiming} */
    Object(utils["k" /* getFirstEntryByType */])(performance, 'navigation');
    var pageCaching = determineCaching(navigation);

    var result = navFinish_objectSpread(navFinish_objectSpread({
      entryType: navFinish_entryType,
      duration: loadEventEnd - navigationStart,
      ttlb: responseEnd - navigationStart,
      dcl: domContentLoadedEventEnd - navigationStart
    }, navigation && {
      transferSize: navigation.transferSize,
      decodedBodySize: navigation.decodedBodySize
    }), pageCaching && {
      pageCaching: pageCaching
    });

    return result;
  });
}

function determineCaching(navigation) {
  if (navigation) {
    var requestStart = navigation.requestStart,
        responseStart = navigation.responseStart,
        responseEnd = navigation.responseEnd,
        transferSize = navigation.transferSize,
        encodedBodySize = navigation.encodedBodySize;

    if (Object(utils["n" /* isNumber */])(transferSize)) {
      if (transferSize === 0) {
        return BROWSER;
      }

      if (transferSize < encodedBodySize) {
        return ETAG;
      }
    } else {
      if (responseStart - requestStart < CACHE_LIMIT_MS) {
        return BROWSER;
      }

      if (responseEnd - responseStart < CACHE_LIMIT_MS) {
        return MAYBE + " " + ETAG;
      }
    }

    if (responseEnd - responseStart < CDN_LIMIT_MS) {
      return MAYBE + " CDN";
    }
  }
}
// CONCATENATED MODULE: ./entries/wixStart.js
//@ts-check


var wixStart_entryType = 'wix-start';
/**
 * Initial Wix session attributes
 * @param {import('../utils/utils.js').State} state
 */

function wixStart(_ref) {
  var window = _ref[0];
  var wixBiSession = Object(utils_wixBiSession["a" /* default */])(window);

  if (!wixBiSession) {
    return Promise.reject(wixStart_entryType);
  }

  var result = {};
  var thunderboltVersion =
  /** @type {Object} */
  window.thunderboltVersion,
      viewerModel =
  /** @type {Object} */
  window.viewerModel,
      boltVersion =
  /** @type {Object} */
  window.boltVersion,
      rendererModel =
  /** @type {Object} */
  window.rendererModel;

  var _ref2 = (viewerModel == null ? void 0 : viewerModel.site) || rendererModel || {},
      _ref2$site = _ref2.site,
      site = _ref2$site === void 0 ? {} : _ref2$site;

  Object(utils["a" /* addField */])(result, 'msid', site.metaSiteId || wixBiSession.msId);
  var commonConfig = window.commonConfig || (viewerModel == null ? void 0 : viewerModel.siteFeaturesConfigs.commonConfig);
  Object(utils["a" /* addField */])(result, '_brandId', commonConfig == null ? void 0 : commonConfig.brand);

  if (thunderboltVersion) {
    viewerInfo(site.isResponsive ? 'thunderboltResponsive' : 'thunderbolt', thunderboltVersion);
  } else {
    viewerInfo(wixBiSession.renderType, boltVersion);
  }

  Object(utils["a" /* addField */])(result, 'dc', wixBiSession.dc || site.dc);
  return Promise.resolve(result);

  function viewerInfo(viewerName, v) {
    Object(utils["a" /* addField */])(result, 'viewerName', viewerName);
    Object(utils["a" /* addField */])(result, 'v', v);
  }
}
// CONCATENATED MODULE: ./utils/storage.js


/**
 * Get value from localStorage if consent allows, remove it otherwise
 * @param {Window} window 
 * @param {string} key 
 */

function get(window, key) {
  return storageOp(window, key, function (localStorage, k) {
    return localStorage.getItem(k);
  });
}
/**
 * Set value to localStorage if consent allows, remove it otherwise
 * @param {Window} window 
 * @param {string} key 
 * @param {*} value 
 */

function set(window, key, value) {
  storageOp(window, key, function (localStorage, k) {
    return localStorage.setItem(k, value);
  });
}
/**
 * Remove value from localStorage
 * @param {Window} window 
 * @param {string} key 
 */

function remove(window, key) {
  storageOp(window, key);
}

function storageOp(window, key, cb) {
  key = utils_config.storagePrefix + "-" + key;

  try {
    var localStorage = window.localStorage;

    if (cb && analyticsAllowed(window)) {
      return cb(localStorage, key);
    }

    localStorage.removeItem(key);
  } catch (e) {// empty
  }
}
// CONCATENATED MODULE: ./entries/wixFinish.js
function wixFinish_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function wixFinish_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? wixFinish_ownKeys(Object(source), !0).forEach(function (key) { wixFinish_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : wixFinish_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function wixFinish_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-check





var wixFinish_entryType = 'wix-finish';
var FIELDS = ['microPop', 'is_rollout', 'is_platform_loaded', 'maybeBot', 'isjp'];
var MAP_NAME = {
  is_rollout: 'isRollout',
  is_platform_loaded: 'isPlatformLoaded',
  isjp: 'maybeBot'
};
var TIMESTAMP = 'timestamp';
/**
 * Final Wix session attributes
 * @param {import('../utils/utils.js').State} state
 * @param {Promise} interactive
 */

function wixFinish(state, interactive) {
  var window =
  /** @type {Object} */
  state[0];
  var model = window.fetchDynamicModel || Promise.resolve({});
  return Object(utils["b" /* allFulfilled */])([model, interactive, dcl(window)]).then(function (_ref) {
    var _window$viewerModel, _window$rendererModel;

    var visitorId = _ref[0].visitorId;
    var wixBiSession = Object(utils_wixBiSession["a" /* default */])(window);

    if (!wixBiSession) {
      throw wixFinish_entryType;
    }

    var isSsr = !window.clientSideRender;
    var btype = wixBiSession.btype;
    var commonConfig = window.commonConfig || ((_window$viewerModel = window.viewerModel) == null ? void 0 : _window$viewerModel.siteFeaturesConfigs.commonConfig);
    var bsi = commonConfig.bsi;

    var result = wixFinish_objectSpread(wixFinish_objectSpread(wixFinish_objectSpread({
      entryType: wixFinish_entryType,
      isSsr: isSsr,
      isWelcome: !!window.requestCloseWelcomeScreen,
      url: window.location.href
    }, visitorId && {
      visitorId: visitorId
    }), btype && {
      btype: btype
    }), bsi && {
      bsi: bsi
    });

    Object(utils["a" /* addField */])(result, 'pageId', ((_window$rendererModel = window.rendererModel) == null ? void 0 : _window$rendererModel.landingPageId) || window.firstPageId);

    if (isSsr) {
      var _window$ssrInfo = window.ssrInfo,
          ssrInfo = _window$ssrInfo === void 0 ? {} : _window$ssrInfo;
      Object(utils["a" /* addField */])(result, 'ssrDuration', ssrInfo.renderBodyTime || ssrInfo.timeSpentInSSR);
      Object(utils["a" /* addField */])(result, 'ssrTimestamp', ssrInfo.renderTimeStamp);
    }

    FIELDS.forEach(function (field) {
      return Object(utils["a" /* addField */])(result, MAP_NAME[field] || field, wixBiSession[field]);
    });
    addSessionDelta(result);
    return result;
  });

  function addSessionDelta(result) {
    if (!utils_config.sessionDelta) {
      remove(window, TIMESTAMP);
      return;
    }

    var prevSession = get(window, TIMESTAMP);
    var currSession = updateTimestamp();
    var sessionDelta = currSession - prevSession;

    if (sessionDelta > 0 && sessionDelta < currSession) {
      result.sessionDelta = sessionDelta;
    }

    windowEvents_addEventListener(window.document, 'consentPolicyChanged', updateTimestamp, false);
  }

  function updateTimestamp() {
    var timestamp = Date.now();
    set(window, TIMESTAMP, timestamp);
    return timestamp;
  }
}
// CONCATENATED MODULE: ./utils/observe.js
function observe_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function observe_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? observe_ownKeys(Object(source), !0).forEach(function (key) { observe_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : observe_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function observe_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-check

/**
 * @callback ObserverCallback
 * @param {PerformanceEntryList} list
 * @param {PerformanceObserver} [observer]
 */

/**
 * Wrapper for PerformanceObserver
 * @param {import('../utils/utils.js').PerformanceObserverType} PerformanceObserver 
 * @param {string} type 
 * @param {ObserverCallback} [cb = noop] 
 * @param {boolean} [buffered = true]
 * @param {object} [more]
 * @returns {PerformanceObserver|undefined}
 */

function observe(PerformanceObserver, type, cb, buffered, more) {
  if (cb === void 0) {
    cb = utils["p" /* noop */];
  }

  if (buffered === void 0) {
    buffered = true;
  }

  if (!PerformanceObserver) {
    return;
  }

  var supportedEntryTypes =
  /** @type {object} */
  PerformanceObserver.supportedEntryTypes;

  if (!supportedEntryTypes || !supportedEntryTypes.includes(type)) {
    return;
  }

  var observer = new PerformanceObserver(function (list, observer) {
    return cb(list.getEntries(), observer);
  });

  try {
    observer.observe(observe_objectSpread({
      type: type,
      buffered: buffered
    }, more));
  } catch (e) {
    observer.observe({
      entryTypes: [type]
    });
  }

  return observer;
}
// CONCATENATED MODULE: ./utils/observeResources.js
//@ts-check



/** @typedef {(entry: PerformanceResourceTiming) => boolean} PerformanceEntryFilter */

/** @type {PerformanceEntryFilter} */

var isScript = function isScript(_ref) {
  var initiatorType = _ref.initiatorType,
      name = _ref.name;
  return initiatorType === 'script' || initiatorType === 'link' && /\.js$/.test(name);
};
/** @type {PerformanceEntryFilter} */

var isAjax = function isAjax(_ref2) {
  var initiatorType = _ref2.initiatorType;
  return initiatorType === 'fetch' || initiatorType === 'xmlhttprequest';
};
/** @type {PerformanceEntryFilter} */

var isImage = function isImage(_ref3) {
  var initiatorType = _ref3.initiatorType,
      name = _ref3.name;
  return initiatorType === 'img' || initiatorType === 'image' || initiatorType === 'css' && /\.(?:jpe?g|png|webp|gif)/i.test(name);
};
/** @type {PerformanceEntryFilter} */

var isFont = function isFont(_ref4) {
  var initiatorType = _ref4.initiatorType,
      name = _ref4.name;
  return initiatorType === 'css' && name.includes('font') || /\.(?:woff2?|ttf|eot)/i.test(name);
};
/**
 * @callback ObserveResourcesCallback
 * @param {PerformanceResourceTiming[]} entries
 * @returns {void}
 */

/**
 * @type {PerformanceObserver}
 */

var observeResources_observer;
/**
 * @type {ObserveResourcesCallback[]}
 */

var cbs = [];
/**
 * Report resource as they are downloaded
 * @param {import('../utils/utils.js').PerformanceObserverType} PerformanceObserver 
 * @param {ObserveResourcesCallback} cb 
 * @param {boolean} buffered
 */

function observeResources(PerformanceObserver, cb, buffered) {
  if (cbs.push(cb) === 1) {
    var ignores = utils_config.ignoreResources.split(',');
    observeResources_observer = observe(PerformanceObserver, 'resource', function (entries) {
      entries = entries.filter(function (_ref5) {
        var name = _ref5.name;
        return !ignores.some(function (ignore) {
          return name.includes(ignore);
        });
      });

      if (entries.length) {
        cbs.forEach(function (cb) {
          return cb(
          /** @type {PerformanceResourceTiming[]} */
          entries);
        });
      }
    }, buffered);
  }

  return {
    observer: observeResources_observer,
    finish: Object(utils["l" /* handleFinish */])(cbs, cb, Object(utils["g" /* disconnectHandler */])(observeResources_observer))
  };
}
// CONCATENATED MODULE: ./utils/collectResources.js
//@ts-check



var LARGE_TIME = 1000000;
var min = Math.min,
    max = Math.max;
/**
 * 
 * @param {import('./utils.js').State} state
 * @param {string} entryType
 * @param {Object} [options]
 * @param {import('./observeResources.js').PerformanceEntryFilter} [options.filter]
 * @param {boolean} [options.tag = true]
 * @param {number} [options.debounce]
 */

function collectResources(_ref, entryType, _temp) {
  var PerformanceObserver = _ref[2],
      setTimeout = _ref[3],
      clearTimeout = _ref[4];

  var _ref2 = _temp === void 0 ? {} : _temp,
      filter = _ref2.filter,
      _ref2$tag = _ref2.tag,
      tag = _ref2$tag === void 0 ? true : _ref2$tag,
      _ref2$debounce = _ref2.debounce,
      debounce = _ref2$debounce === void 0 ? utils_config.resourceDebounce : _ref2$debounce;

  var promise = new Promise(function (resolve, reject) {
    var resources = [];
    var timer = setTimeout(done, debounce);

    var _observeResources = observeResources(PerformanceObserver, function (entries) {
      if (filter) {
        entries = entries.filter(filter);
      }

      if (entries.length) {
        resources.push.apply(resources, entries);
        clearTimeout(timer);
        timer = setTimeout(done, debounce);
      }
    }, true),
        observer = _observeResources.observer,
        finish = _observeResources.finish;

    function done() {
      if (!observer) {
        return reject();
      }

      var extra = observer.takeRecords == null ? void 0 : observer.takeRecords();

      if (extra) {
        resources.push.apply(resources, extra);
      }

      finish();
      resolve(resources);
    }
  }).then(function (r) {
    var resources =
    /** @type {PerformanceResourceTiming[]} */
    r;
    var count = resources.length;

    if (!count) {
      throw entryType;
    }

    var _resources$reduce = resources.reduce(function (acc, _ref3) {
      var transferSize = _ref3.transferSize,
          responseStart = _ref3.responseStart,
          responseEnd = _ref3.responseEnd;
      return {
        tbd: acc.tbd + transferSize,
        firstResponse: responseStart > 0 && responseStart < acc.firstResponse ? responseStart : acc.firstResponse,
        lastResponse: max(acc.lastResponse, responseEnd)
      };
    }, {
      tbd: 0,
      firstResponse: LARGE_TIME,
      lastResponse: 0
    }),
        tbd = _resources$reduce.tbd,
        firstResponse = _resources$reduce.firstResponse,
        lastResponse = _resources$reduce.lastResponse;

    var ttfbs = resources.filter(function (_ref4) {
      var requestStart = _ref4.requestStart;
      return Object(utils["n" /* isNumber */])(requestStart);
    }).map(function (_ref5) {
      var requestStart = _ref5.requestStart,
          responseStart = _ref5.responseStart;
      return responseStart - requestStart;
    }).sort();
    var length = ttfbs.length;
    var half = length >> 1;
    var startTime = min(firstResponse, lastResponse);
    var result = {
      count: count,
      startTime: startTime,
      duration: lastResponse - startTime,
      mttfb: length % 2 ? ttfbs[half] : (ttfbs[half - 1] + ttfbs[half]) / 2,
      attfb: ttfbs.reduce(function (acc, ttfb) {
        return acc + ttfb;
      }, 0) / length
    };

    if (!Number.isNaN(tbd)) {
      result.tbd = tbd;
    }

    return result;
  })["catch"](function () {
    return {
      count: 0
    };
  });
  return tag ? promise.then(tagToAvoidConflicts) : promise;

  function tagToAvoidConflicts(result) {
    var tagLabel = capitalize(entryType);
    return Object.entries(result).reduce(function (acc, _ref6) {
      var key = _ref6[0],
          value = _ref6[1];
      acc[key + tagLabel] = value;
      return acc;
    }, {});
  }

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
}
// CONCATENATED MODULE: ./entries/scripts.js
//@ts-check


/**
 * Get scripts resources attributes 
 * @param {import('../utils/utils.js').State} state
 */

function scripts(state) {
  return collectResources(state, 'scripts', {
    filter: isScript
  });
}
// CONCATENATED MODULE: ./entries/images.js
//@ts-check


/**
 * Get image resources attributes 
 * @param {import('../utils/utils.js').State} state
 */

function images_images(state) {
  return collectResources(state, 'images', {
    filter: isImage
  });
}
// CONCATENATED MODULE: ./entries/fonts.js
//@ts-check


/**
 * Get font resources attributes 
 * @param {import('../utils/utils.js').State} state
 */

function fonts(state) {
  return collectResources(state, 'fonts', {
    filter: isFont
  });
}
// CONCATENATED MODULE: ./utils/promisifyObserver.js
//@ts-check

/**
 * @callback promisifiedObserverCallback
 * @param {PerformanceEntryList} entries 
 * @param {(r:*) => void} finish - and report
 * @returns {void}
 */

/**
 * @typedef {Promise & {takeRecords: () => (PerformanceEntryList | undefined)}} promisifiedObserver
 */

/**
 * Wrap PerformanceObserver in a promise
 * @param {import('../utils/utils.js').PerformanceObserverType} PerformanceObserver 
 * @param {string} entryType 
 * @param {promisifiedObserverCallback} cb 
 * @param {boolean} [buffered]
 */

function promisifyObserver(PerformanceObserver, entryType, cb, buffered) {
  var observer;
  var promise =
  /** @type {promisifiedObserver} */
  new Promise(function (resolve, reject) {
    observer = observe(PerformanceObserver, entryType, function (entries) {
      return cb(entries, function (result) {
        observer.disconnect();
        resolve(result);
      });
    }, buffered);

    if (!observer) {
      reject(entryType);
    }
  });

  promise.takeRecords = function () {
    var _observer;

    return (_observer = observer) == null ? void 0 : _observer.takeRecords == null ? void 0 : _observer.takeRecords();
  };

  return promise;
}
// CONCATENATED MODULE: ./polyfills/fcp.js
//@ts-check


/**
 * Get FCP polyfill
 * @param {Window} window 
 * @param {string} entryType 
 */

function fcp_fcpPolyfill(window, entryType) {
  return new Promise(function (resolve, reject) {
    // Use polyfill
    var fcpPolyfill = utils_config.fcpPolyfill,
        fcpPolyfillId = utils_config.fcpPolyfillId;

    if (fcpPolyfill in window) {
      resolvePaint();
    } else {
      windowEvents_addEventListener(window, fcpPolyfill, resolvePaint);
      dcl(window).then(function () {
        if (!window.document.getElementById(fcpPolyfillId)) {
          reject(entryType);
        }
      });
    }

    function resolvePaint() {
      var when = window[fcpPolyfill];
      resolve({
        entryType: entryType,
        fp: when,
        fcp: when
      });
    }
  });
}
// CONCATENATED MODULE: ./entries/fcp.js
//@ts-check


var fcp_entryType = 'paint';
var FCP = 'fcp';
var fcp_MAP_NAME = {
  'first-paint': 'fp',
  'first-contentful-paint': FCP
};
/**
 * Get FCP
 * @param {import('../utils/utils.js').State} state
 */

function fcp(_ref) {
  var window = _ref[0],
      PerformanceObserver = _ref[2];
  var paints = {
    entryType: "initial-" + fcp_entryType
  };
  return promisifyObserver(PerformanceObserver, fcp_entryType, function (entries, resolve) {
    var done = entries.reduce(function (acc, _ref2) {
      var name = _ref2.name,
          startTime = _ref2.startTime;
      name = fcp_MAP_NAME[name] || name;
      paints[name] = startTime;
      return acc || name === FCP;
    }, false);

    if (done) {
      resolve(paints);
    }
  })["catch"](function () {
    return fcp_fcpPolyfill(window, paints.entryType);
  });
}
// CONCATENATED MODULE: ./polyfills/longtasks.js
//@ts-check



/**
 * Resolve longtask polyfill attribues
 * @param {import('../utils/utils.js').State} state
 * @param {(entries: Array<{startTime: number, duration: number}>) => void} cb
 */

function longtasks(_ref, cb) {
  var _ref$ = _ref[0],
      requestAnimationFrame = _ref$.requestAnimationFrame,
      cancelAnimationFrame = _ref$.cancelAnimationFrame,
      performance = _ref[1],
      PerformanceObserver = _ref[2];
  var observer = observe(PerformanceObserver, 'longtask', cb, false); // false because buffered not fully supported yet for longtask

  if (observer) {
    return Object(utils["g" /* disconnectHandler */])(observer);
  } // Use polyfill


  var startTime = performance.now();
  var longTask = utils_config.longTask;
  var id = requestAnimationFrame(getTaskDuration);
  return function () {
    return cancelAnimationFrame(id);
  };

  function getTaskDuration(now) {
    var duration = now - startTime;

    if (duration >= longTask) {
      cb([{
        startTime: startTime,
        duration: duration
      }]);
    }

    startTime = now;
    id = requestAnimationFrame(getTaskDuration);
  }
}
// CONCATENATED MODULE: ./entries/tti-tbt.js
//@ts-check





var tti_tbt_entryType = 'interactive';
var tti_tbt_max = Math.max,
    tti_tbt_min = Math.min;
/**
 * Get TTI and TBT attributes
 * @param {import('../utils/utils.js').State} state 
 * @param {Promise<number>} start
 * @param {Promise<{startTime: number, delay: number}>} [interaction]
 */

function tti_tbt(state, start, interaction) {
  var window = state[0],
      PerformanceObserver = state[2],
      setTimeout = state[3],
      clearTimeout = state[4];
  var resourceDebounce = utils_config.resourceDebounce,
      taskDelta = utils_config.taskDelta,
      ttiDurationInc = utils_config.ttiDurationInc;
  return start.then(function (start) {
    return new Promise(function (resolve) {
      var finished = start;
      var ltDone = true;
      var ltTimer = 0;
      var lts = [];
      var ltStop = longtasks(state, function (entries) {
        lts.push.apply(lts, entries);
        ltDone = false;
        clearTimeout(ltTimer);
        ltTimer = setTimeout(function () {
          ltDone = true;
          checkDone();
        }, taskDelta);
      });
      var dclPromise = dcl(window);
      var resourceDone = false;
      var resourceTimer = setTimeout(checkResourceDone, resourceDebounce);

      var _observeResources = observeResources(PerformanceObserver, function (rs) {
        rs = rs.filter(function (r) {
          return isAjax(r) || isScript(r);
        });

        if (rs.length) {
          resourceDone = false;
          finished = rs.reduce(function (acc, _ref) {
            var startTime = _ref.startTime,
                duration = _ref.duration;
            return tti_tbt_max(acc, startTime + duration);
          }, finished); // TTI cannot happen before DCL otherwise SSR failures will get great TTI scores which is wrong

          dclPromise.then(function (_ref2) {
            var startTime = _ref2.startTime;
            finished = tti_tbt_max(startTime, finished);
            clearTimeout(resourceTimer);
            resourceTimer = setTimeout(checkResourceDone, resourceDebounce);
          });
        }
      }, false),
          resourceStop = _observeResources.finish;

      interaction == null ? void 0 : interaction.then(function (_ref3) {
        var startTime = _ref3.startTime,
            delay = _ref3.delay;
        return done(startTime + delay);
      }, utils["p" /* noop */]);

      function checkResourceDone() {
        resourceDone = true;
        checkDone();
      }

      function checkDone() {
        if (ltDone && resourceDone) {
          done(1000000);
        }
      }

      function done(interactionEnd) {
        ltStop();
        resourceStop();
        resolve([lts, start, finished, interactionEnd]);
      }
    });
  }).then(function (_ref4) {
    var lts = _ref4[0],
        start = _ref4[1],
        finished = _ref4[2],
        interactionEnd = _ref4[3];
    var tti = calc_tti(lts, start, finished, interactionEnd);
    var document = window.document,
        innerHeight = window.innerHeight;
    var tbt = calc_tbt(lts, tti);
    var result = {
      tti: tti,
      tbt: tbt,
      iframes:
      /** @type {Document} */
      document.querySelectorAll('iframe').length
    };
    var pageHeight = tti_tbt_max(document.body.offsetHeight, innerHeight);

    if (pageHeight > 0) {
      result.screens = document.body.scrollHeight / pageHeight;
    }

    return result;
  })["catch"](Object(utils["q" /* rejector */])(tti_tbt_entryType));

  function calc_tti(lts, start, finished, interactionEnd) {
    if (start === finished) {
      finished += ttiDurationInc;
    }

    var tail = lts.findIndex(function (_ref5) {
      var startTime = _ref5.startTime,
          duration = _ref5.duration;

      if (startTime > finished + taskDelta) {
        return true;
      }

      finished = tti_tbt_max(finished, startTime + duration);
    });

    if (tail === -1) {
      tail = lts.length;
    }

    var found = tail > 0 ? function (llt) {
      return llt.startTime + llt.duration;
    }(lts[tail - 1]) : 0;
    return tti_tbt_max(tti_tbt_min(found, interactionEnd), start);
  }

  function calc_tbt(lts, tti) {
    var tbt = 0;

    for (var i = 0; i < lts.length; ++i) {
      var _lts$i = lts[i],
          startTime = _lts$i.startTime,
          duration = _lts$i.duration;

      if (startTime > tti) {
        break;
      }

      tbt += tti_tbt_max(duration - 50, 0);
    }

    return tbt;
  }
}
// CONCATENATED MODULE: ./entries/lcp.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function lcp_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function lcp_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? lcp_ownKeys(Object(source), !0).forEach(function (key) { lcp_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : lcp_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function lcp_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-check



var lcp_entryType = 'largest-contentful-paint';
/**
 * Get LCP attributes
 * @param {import('../utils/utils.js').State} state
 * @param {Promise} interactive
 * @param {Promise} visibility
 * @param {Promise} interaction
 */

function lcp_lcp(_ref, interactive, visibility, interaction) {
  var performance = _ref[1],
      PerformanceObserver = _ref[2],
      setTimeout = _ref[3],
      clearTimeout = _ref[4];
  return interactive.then(function (_ref2) {
    var tti = _ref2.tti;
    var resourceDebounce = utils_config.resourceDebounce;
    var timer;
    var timeout = new Promise(function (resolve) {
      var delay = Math.max(resourceDebounce - (performance.now() - tti), 0);
      timer = setTimeout(resolve, delay);
    });
    var lcpPromise = promisifyObserver(PerformanceObserver, lcp_entryType, function (entries, resolve) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        return resolve(entries[entries.length - 1]);
      }, resourceDebounce);
    });
    return Promise.race([lcpPromise, timeout, visibility.then(utils["p" /* noop */]), interaction.then(utils["p" /* noop */])]).then(function (lcpFound) {
      var records = lcpPromise.takeRecords == null ? void 0 : lcpPromise.takeRecords();

      var _records$slice = records == null ? void 0 : records.slice(-1),
          lcpFoundMore = _records$slice[0];

      return lcpResult(lcpFoundMore || lcpFound);
    })["catch"](Object(utils["q" /* rejector */])(lcp_entryType));
  });
}
/**
 * @typedef {Object} LargestContentfulPaintType
 * @property {number} startTime
 * @property {number} size
 * @property {string} url
 * @property {string} id
 * @property {Element} [element]
 * 
 * @typedef {LargestContentfulPaintType & PerformanceEntry} LargestContentfulPaint
 */

/**
 * Calculate LCP result from measurement
 * @param {LargestContentfulPaint} lcp
 */

function lcpResultValue(lcp) {
  var _m$;

  var startTime = lcp.startTime,
      size = lcp.size,
      url = lcp.url,
      element = lcp.element,
      id = lcp.id;
  var container = Object(utils["d" /* closestContainer */])(element);
  var lcpTag = container == null ? void 0 : container.tagName;
  var lcpFontClass = getFontClass(container);
  var cid = Object(utils["e" /* closestId */])(element, id);
  var m = /\.(jpe?g|png|gif|svg|webp)/i.exec(url);
  var lcpResourceType = (m == null ? void 0 : (_m$ = m[1]) == null ? void 0 : _m$.toLowerCase().replace('jpeg', 'jpg')) || 'other';
  return lcp_objectSpread(lcp_objectSpread(lcp_objectSpread(lcp_objectSpread(lcp_objectSpread({
    entryType: lcp_entryType,
    lcp: startTime,
    lcpSize: size
  }, cid && {
    closestId: cid
  }), lcpTag && {
    lcpTag: lcpTag
  }), url && {
    lcpResourceType: lcpResourceType
  }), lcpFontClass && {
    lcpFontClass: lcpFontClass
  }), {}, {
    lcpInLightbox: inLightbox(element)
  });
}
/**
 * Calculate LCP result from measurement
 * @param {LargestContentfulPaint} [lcp]
 */

function lcpResult(lcp) {
  if (!lcp) {
    return Promise.reject(lcp_entryType);
  }

  return Promise.resolve(lcpResultValue(lcp));
}

function getFontClass(element) {
  if (element) {
    for (var _iterator = _createForOfIteratorHelperLoose(element.classList), _step; !(_step = _iterator()).done;) {
      var cls = _step.value;
      var m = /^font_\d$/.exec(cls);

      if (m) {
        return m[0];
      }
    }
  }
}

function inLightbox(element) {
  return Object(utils["f" /* closestSelector */])(element, '#POPUPS_ROOT') !== null;
}
// CONCATENATED MODULE: ./utils/takeRecords.js
//@ts-check

/**
 * Helper for taking records from PerformanceObserver
 * @param {any} PerformanceObserver 
 * @param {string} type 
 */

function takeRecords(PerformanceObserver, type) {
  var observer = observe(PerformanceObserver, type);

  if (observer) {
    var result = observer.takeRecords == null ? void 0 : observer.takeRecords();
    observer.disconnect();
    return result;
  }
}
// CONCATENATED MODULE: ./entries/cls.js
function cls_createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = cls_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function cls_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return cls_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cls_arrayLikeToArray(o, minLen); }

function cls_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//@ts-check




var cls_entryType = 'layout-shift';
/**
 * @typedef {Object} LayoutShiftAttribution
 * @property {Node} [node]
 * @property {DOMRectReadOnly} currentRect;
 * 
 * @typedef {Object} LayoutShiftType
 * @property {number} startTime
 * @property {number} value
 * @property {boolean} hadRecentInput;
 * @property {Array<LayoutShiftAttribution>} sources
 * 
 * @typedef {LayoutShiftType & PerformanceEntry} LayoutShift
 * 
 * @typedef {Object} LayoutShiftResult
 * @property {number} cls
 * @property {number} countCls
 * @property {string} [clsId]
 * @property {string} [clsTag]
 * @property {Element} [element]
 */

var WINDOW = {
  MAX_SIZE: 200,
  MAX_INTERVAL: 100
};
var NO_WINDOW = {
  MAX_SIZE: 10000000,
  MAX_INTERVAL: 10000000
};
/**
 * Get CLS attributes
 * @param {import('../utils/utils.js').State} state
 * @param {boolean} [shouldGetElement]
 * @returns {LayoutShiftResult}
 */

function cls_cls(_ref, shouldGetElement) {
  var PerformanceObserver = _ref[2];
  var entries = takeRecords(PerformanceObserver, cls_entryType);

  if (!entries) {
    return;
  }

  var window = utils_config.newClsMethod ? WINDOW : NO_WINDOW;
  var clsOld = 0;

  var _entries$filter$map$r =
  /** @type {Array<LayoutShift>} */
  entries.filter(function (_ref2) {
    var hadRecentInput = _ref2.hadRecentInput;
    return !hadRecentInput;
  }).map(function (_ref3) {
    var _ref3$sources = _ref3.sources,
        sources = _ref3$sources === void 0 ? [] : _ref3$sources,
        value = _ref3.value,
        startTime = _ref3.startTime;
    clsOld += value;

    var _sources$reduce = sources.reduce(function (acc, _ref4) {
      var node = _ref4.node,
          _ref4$currentRect = _ref4.currentRect,
          width = _ref4$currentRect.width,
          height = _ref4$currentRect.height;
      var area = width * height;
      return area < acc[1] ? acc : [node, area];
    }, [null, -1]),
        node = _sources$reduce[0];

    return [value, node, startTime];
  }).reduce(function (acc, entry) {
    var _acc$slice = acc.slice(-1),
        current = _acc$slice[0];

    if (current) {
      var startTime = entry[2];
      var first = current[0];

      if (startTime - first[2] < window.MAX_SIZE) {
        var _current$slice = current.slice(-1),
            last = _current$slice[0];

        if (startTime - last[2] < window.MAX_INTERVAL) {
          current.push(entry);
          return acc;
        }
      }
    }

    acc.push([entry]);
    return acc;
  }, []).reduce(function (acc, sequence) {
    var value = sequence.reduce(function (acc, _ref5) {
      var value = _ref5[0];
      return acc + value;
    }, 0);

    if (value <= acc[0]) {
      return acc;
    }

    var map = sequence.filter(function (_ref6) {
      var node = _ref6[1];
      return node;
    }).reduce(function (acc, _ref7) {
      var value = _ref7[0],
          node = _ref7[1];
      acc.set(node, value + (acc.get(node) || 0));
      return acc;
    }, new Map());
    return [value, sequence.length, map];
  }, [0, 0]),
      cls = _entries$filter$map$r[0],
      countCls = _entries$filter$map$r[1],
      map = _entries$filter$map$r[2];

  var result = {
    cls: cls * constants["a" /* CLS_FACTOR */],
    countCls: countCls,
    clsOld: clsOld * constants["a" /* CLS_FACTOR */]
  };

  if (map) {
    var nodes = [];

    for (var _iterator = cls_createForOfIteratorHelperLoose(map.entries()), _step; !(_step = _iterator()).done;) {
      var entry = _step.value;
      nodes.push(entry);
    }

    if (nodes.length) {
      var _node;

      nodes.sort(function (a, b) {
        return b[1] - a[1];
      });
      var node =
      /** @type {Element} */
      nodes[0][0];

      if (((_node = node) == null ? void 0 : _node.nodeType) !== Node.ELEMENT_NODE) {
        node = node.parentElement;
      }

      if (shouldGetElement && node) {
        result.element = Object(utils["d" /* closestContainer */])(node);
      }

      var cid = Object(utils["e" /* closestId */])(node);

      if (cid) {
        result.clsId = cid;
      }

      var _node2 = node,
          tagName = _node2.tagName;

      if (tagName) {
        result.clsTag = tagName;
      }
    }
  }

  return result;
}
// CONCATENATED MODULE: ./utils/interaction.js
//@ts-check


var EVENT_TYPES = ['pointerdown', 'click', 'mousedown', 'keydown', 'touchstart'];
/**
 * @callback interactionCallback
 * @param {string} action 
 * @param {number} startTime 
 * @param {number} delay 
 * @returns {void}
 */

/**
 * Register for user interactions
 * @param {import('./utils.js').State} state
 * @param {interactionCallback} cb 
 * @param {Array<string>} [event_types]
 */

function interaction_interaction(_ref, cb, event_types) {
  var window = _ref[0],
      performance = _ref[1];

  if (event_types === void 0) {
    event_types = EVENT_TYPES;
  }

  var prev = 0;
  event_types.forEach(function (eventType) {
    return windowEvents_addEventListener(window, eventType, onInput, false);
  });
  return function () {
    event_types.forEach(function (eventType) {
      return windowEvents_removeEventListener(window, eventType, onInput, false);
    });
  };
  /**
   * @param {Event} event
   */

  function onInput(_ref2) {
    var type = _ref2.type,
        timeStamp = _ref2.timeStamp,
        cancelable = _ref2.cancelable;

    if (!cancelable) {
      return;
    }

    var now = performance.now();
    var end = timeStamp > 1e12 ? Date.now() : now;
    var delay = Math.max(end - timeStamp, 0);
    var startTime = now - delay;

    if (type === EVENT_TYPES[0]) {
      onPointerDown(type, startTime, delay);
    } else {
      notify(type, startTime, delay);
    }
  }
  /**
   * @param {string} action 
   * @param {number} startTime 
   * @param {number} delay 
   */


  function onPointerDown(action, startTime, delay) {
    windowEvents_addEventListener(window, 'pointerup', onPointerUp, false);
    windowEvents_addEventListener(window, 'pointercancel', removePointerEventListeners, false);

    function onPointerUp() {
      notify(action, startTime, delay);
      removePointerEventListeners();
    }

    function removePointerEventListeners() {
      windowEvents_removeEventListener(window, 'pointerup', onPointerUp, false);
      windowEvents_removeEventListener(window, 'pointercancel', removePointerEventListeners, false);
    }
  }
  /**
   * @param {string} action 
   * @param {number} startTime 
   * @param {number} delay 
   */


  function notify(action, startTime, delay) {
    var now = startTime + delay;

    if (now - prev < utils_config.eventDelta) {
      return;
    }

    prev = now;
    cb(action, startTime, delay);
  }
}
// CONCATENATED MODULE: ./polyfills/fid.js
//@ts-check

/**
 * Resolve FID polyfill attribues
 * @param {import('../utils/utils.js').State} state
 * @param {string} entryType
 */

function fidPolyfill(state, entryType) {
  return new Promise(function (resolve) {
    var finish = interaction_interaction(state, function (action, startTime, delay) {
      finish();
      resolve({
        entryType: entryType,
        action: action,
        startTime: startTime,
        delay: delay
      });
    });
  });
}
// CONCATENATED MODULE: ./entries/fid.js
//@ts-check



var fid_entryType = 'first-input';
/**
 * Resolve FID attribues
 * @param {import('../utils/utils.js').State} state
 */

function fid(state) {
  var PerformanceObserver = state[2],
      setTimeout = state[3];
  return promisifyObserver(PerformanceObserver, fid_entryType, function (entries, resolve) {
    var _entries$ =
    /** @type {any} */
    entries[0],
        name = _entries$.name,
        startTime = _entries$.startTime,
        processingStart = _entries$.processingStart,
        duration = _entries$.duration,
        target = _entries$.target;
    var result = {
      entryType: fid_entryType,
      action: name,
      startTime: startTime,
      delay: processingStart - startTime,
      duration: duration
    };
    var cid = Object(utils["e" /* closestId */])(target);

    if (cid) {
      result.closestId = cid;
    }

    setTimeout(function () {
      return resolve(result);
    }, 0);
  })["catch"](function () {
    return fidPolyfill(state, fid_entryType);
  });
}
// CONCATENATED MODULE: ./utils/sequence.js
function sequence_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function sequence_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? sequence_ownKeys(Object(source), !0).forEach(function (key) { sequence_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : sequence_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function sequence_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Construct a value sequence, reported by both async iterator and a custom event
 * @param {Window} window 
 * @param {string} entryType
 * @param {string} [eventName]
 */

function sequence(window, entryType, eventName) {
  var _objectSpread2;

  var promises = [];
  var values = [];
  var resolve;

  var next = function next() {
    return promises.push(new Promise(function (r) {
      return resolve = r;
    }));
  };

  next();
  return {
    report: function report(value) {
      value = prepareMeasurement(window, value);
      values.push(value);
      resolve({
        value: value
      });
      next();

      if (eventName) {
        fireEvent(window, eventName, value);
      }
    },
    result: Promise.resolve(sequence_objectSpread((_objectSpread2 = {
      entryType: entryType
    }, _objectSpread2[Symbol.iterator] = function () {
      var index = 0;
      return {
        next: function next() {
          return {
            value: values[index++],
            done: index > values.length
          };
        }
      };
    }, _objectSpread2[Symbol.asyncIterator] = function () {
      var index = 0;
      return {
        next: function next() {
          return promises[index++];
        }
      };
    }, _objectSpread2), eventName && {
      eventName: eventName
    }))
  };
}
/**
 * @template
 * @param {T} payload
 * @param {Window} window
 * @returns {Readonly<T>}
 */

function prepareMeasurement(window, payload) {
  return Object.freeze(Object(utils["r" /* round */])(applyConsent(window, sequence_objectSpread(sequence_objectSpread({}, payload), {}, {
    clientType: utils_config.clientType
  }))));
}
// CONCATENATED MODULE: ./actions/markAndMeasure.js
//@ts-check

var TTI_LABEL = 'tti';
var LCP_LABEL = 'lcp';
/**
 * Create marks and measures for performance metrics
 * @param {Performance} performance 
 * @param {Promise<Readonly<{}>>[]} measurements 
 */

function markAndMeasure(performance, measurements) {
  Object(utils["b" /* allFulfilled */])(measurements).then(function (values) {
    var _find = find(values, 'loaded'),
        tti = _find.tti,
        tbt = _find.tbt,
        lcp = _find.lcp;

    if (!mark(TTI_LABEL, tti, tbt)) {
      performance.clearMarks(TTI_LABEL); // Don't show wrong mark/measure on limited browsers

      return;
    }

    mark(LCP_LABEL, lcp);

    var _find2 = find(values, 'initial-paint'),
        fcp = _find2.fcp;

    var lcpFirst = lcp < tti;
    var lcpDuration = {
      start: lcpFirst ? fcp : tti,
      end: lcp
    };
    var ttiDuration = {
      start: lcpFirst ? lcp : fcp,
      end: tti,
      detail: tbt
    };
    measure(performance, LCP_LABEL, lcpDuration);
    measure(performance, TTI_LABEL, ttiDuration);
  }, utils["p" /* noop */]);
  /**
   * @param {{entryType: string}[]} values 
   * @param {string} et 
   * @returns {{fcp: number, tti: number, tbt: number, lcp: number}}
   */

  function find(values, et) {
    return (
      /** @type {Object} */
      values.find(function (_ref) {
        var entryType = _ref.entryType;
        return entryType === et;
      }) || {}
    );
  }
  /**
   * @param {string} label 
   * @param {number} startTime 
   * @param {any} detail 
   */


  function mark(label, startTime, detail) {
    if (startTime) {
      return (
        /** @type {(string, Object) => Object} */
        performance.mark(label, {
          startTime: startTime,
          detail: detail
        })
      );
    }
  }
}
/**
 * Create measure for page metrics
 * @param {Performance} performance
 * @param {{pn: number, startTime: number, tti: number, tbt: number}} page 
 */

function measurePage(performance, _ref2) {
  var pn = _ref2.pn,
      startTime = _ref2.startTime,
      tti = _ref2.tti,
      tbt = _ref2.tbt;
  measure(performance, "page #" + pn + " tti", {
    start: startTime,
    end: tti,
    detail: tbt
  });
}
/**
 * @param {Performance} performance
 * @param {string} label 
 * @param {{start: number, end: number, detail?: any}} options
 */

function measure(performance, label, options) {
  if (options.end > options.start) {
    // TODO: fix syntax error as in this ticket https://jira.wixpress.com/browse/TB-6232
    try {
      performance.measure(label, options);
    } catch (e) {}
  }
}
// CONCATENATED MODULE: ./entries/pages.js
function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? pages_ownKeys(Object(source), !0).forEach(function (key) { pages_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-check









var subEntryType = 'page-transition';
var pages_entryType = subEntryType + "s";
var pn = 0;
/**
 * Get page transition duration
 * @param {import('../utils/utils.js').State} state
 */

function pages(state) {
  var window = state[0],
      performance = state[1],
      PerformanceObserver = state[2];
  var origin = getCurrentURL();
  var clientType = utils_config.clientType,
      pageEvent = utils_config.pageEvent;

  var _sequence = sequence(window, pages_entryType, pageEvent),
      report = _sequence.report,
      result = _sequence.result;

  windowEvents_addEventListener(window, 'popstate', function (_ref) {
    var type = _ref.type,
        timeStamp = _ref.timeStamp;
    return _report(type, timeStamp, 0);
  }, false);

  if (!observe(PerformanceObserver, 'event', eventTiming, false, {
    durationThreshold: 1
  })) {
    interaction_interaction(state, _report, ['click']);
  }

  var measuring = false;
  return result;
  /**
   * @param {PerformanceEntryList} entries 
   */

  function eventTiming(entries) {
    // Loop from end
    entries.reduceRight(function (acc, entry) {
      var name = entry.name;

      if (name === 'click' || name === 'keyup') {
        _report(name, entry.startTime, entry.duration);
      }

      return acc;
    }, undefined);
  }
  /**
   * @param {string} action 
   * @param {number} startTime 
   * @param {number} delay 
   */


  function _report(action, startTime, delay) {
    if (measuring) {
      return;
    }

    measuring = true;
    tti_tbt(state, Promise.resolve(startTime + delay)).then(function (finish) {
      measuring = false;
      var destination = getCurrentURL();

      if (urlChanged(origin, destination)) {
        var duration = finish.tti - startTime;

        var value = pages_objectSpread({
          entryType: subEntryType,
          clientType: clientType,
          origin: origin,
          destination: destination,
          action: action,
          startTime: startTime,
          delay: delay,
          duration: duration,
          pn: ++pn
        }, finish);

        origin = destination;
        report(value);

        if (!utils_config.noMeasure) {
          measurePage(performance, value);
        }
      }
    });
  }

  function getCurrentURL() {
    return fixURL(window.location.href, window);
  }

  function urlChanged(origin, destination) {
    return Object(utils["h" /* excludeSearch */])(origin) !== Object(utils["h" /* excludeSearch */])(destination);
  }
}
function getPn() {
  return pn;
}
// CONCATENATED MODULE: ./entries/crux.js
function crux_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function crux_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? crux_ownKeys(Object(source), !0).forEach(function (key) { crux_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : crux_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function crux_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-check




var crux_entryType = 'crux';
var cwvFuncs;
/**
 * Compute LCP and CLS as close as possible to CrUX
 * @param {import('../utils/utils.js').State} state
 * @param {Promise<{startTime: number}>} visibility
 */

function crux_crux(state, visibility) {
  var PerformanceObserver = state[2];
  var lcpFound;
  var lcpPromise = Promise.resolve({});

  function update(entries) {
    if (entries != null && entries.length) {
      var _entries$slice = entries.slice(-1);

      lcpFound = _entries$slice[0];
      lcpPromise = lcpResult(
      /** @type {import('./lcp.js').LargestContentfulPaint} */
      lcpFound);
    }
  }

  var observer = observe(PerformanceObserver, lcp_entryType, update);
  cwvFuncs = {
    cls: function cls() {
      return cls_cls(state, true);
    },
    lcp: function lcp() {
      update(observer.takeRecords == null ? void 0 : observer.takeRecords());
      return lcpFound;
    }
  };
  return visibility.then(function (_ref) {
    var startTime = _ref.startTime;
    return lcpPromise.then(function (lcpValue) {
      var clsValue = cls_cls(state);

      return crux_objectSpread(crux_objectSpread(crux_objectSpread({}, clsValue), lcpValue), {}, {
        entryType: crux_entryType,
        startTime: startTime,
        pn: getPn()
      });
    });
  });
}
function getCurrentLcp() {
  var _cwvFuncs;

  return lcpResult((_cwvFuncs = cwvFuncs) == null ? void 0 : _cwvFuncs.lcp());
}
/**
 * @template T
 * @param {T} target
 * @returns {T}
 */

function addGetters(target) {
  /** @type {PropertyDescriptorMap} */
  var map = {};
  addProp('lcp');
  addProp('cls');
  return Object.defineProperties(target, map);

  function addProp(prop) {
    map[prop] = {
      value: function value() {
        var _cwvFuncs2, _cwvFuncs2$prop;

        return (_cwvFuncs2 = cwvFuncs) == null ? void 0 : (_cwvFuncs2$prop = _cwvFuncs2[prop]()) == null ? void 0 : _cwvFuncs2$prop.element;
      }
    };
  }
}
// CONCATENATED MODULE: ./entries/crux-cls.js
function crux_cls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function crux_cls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? crux_cls_ownKeys(Object(source), !0).forEach(function (key) { crux_cls_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : crux_cls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function crux_cls_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var crux_cls_subEntryType = 'crux-cls';
var crux_cls_entryType = crux_cls_subEntryType + "-s";
/**
 * Get page transition duration
 * @param {import('../utils/utils.js').State} state
 * @param {Promise} crux
 */

function crux_cls(state, crux) {
  return crux.then(function (_ref) {
    var prevCls = _ref.cls;
    var count = 0;
    var window = state[0];

    var _sequence = sequence(window, crux_cls_entryType, utils_config.clsEvent),
        report = _sequence.report,
        result = _sequence.result;

    windowEvents_addEventListener(window, 'visibilitychange', _report, false);
    return result;

    function _report() {
      if (!isHidden(window)) {
        hidden_hidden(state).then(function (_ref2) {
          var startTime = _ref2.startTime;
          var result = cls_cls(state);

          if (result && result.cls !== prevCls) {
            prevCls = result.cls;
            report(crux_cls_objectSpread(crux_cls_objectSpread({}, result), {}, {
              entryType: crux_cls_subEntryType,
              startTime: startTime,
              count: ++count
            }));
          }
        });
      }
    }
  });
}
// CONCATENATED MODULE: ./actions/log.js
//@ts-check


/**
 * Log measurements to console
 * @param {Promise[]} together 
 * @param {Promise[]} individually 
 */

function log(together, individually) {
  Object(utils["b" /* allFulfilled */])(together).then(function (values) {
    return values.forEach(doLog);
  }, utils["p" /* noop */]);
  individually.forEach(function (measurement) {
    return measurement.then(doLog, utils["p" /* noop */]);
  });
}
function doLog(value) {
  console.log(constants["d" /* MARKER */], value); // eslint-disable-line no-console
}
// CONCATENATED MODULE: /home/builduser/work/ecb8c1c6a59aa27c/node_modules/web-vitals/dist/web-vitals.attribution.js
var web_vitals_attribution_e,t,web_vitals_attribution_n,web_vitals_attribution_r,i,a=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},o=function(e){if("loading"===document.readyState)return"loading";var t=a();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},u=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},c=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:u(r)+(r.className&&r.className.length?"."+r.className.replace(/\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},s=-1,f=function(){return s},l=function(e){addEventListener("pageshow",(function(t){t.persisted&&(s=t.timeStamp,e(t))}),!0)},d=function(){var e=a();return e&&e.activationStart||0},web_vitals_attribution_m=function(e,t){var n=a(),r="navigate";return f()>=0?r="back-forward-cache":n&&(r=document.prerendering||d()>0?"prerender":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},web_vitals_attribution_v=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){t(e.getEntries())}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},p=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},h=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},g=-1,T=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(){p((function(e){var t=e.timeStamp;g=t}),!0)},E=function(){return g<0&&(g=T(),y(),l((function(){setTimeout((function(){g=T(),y()}),0)}))),{get firstHiddenTime(){return g}}},S=function(e,t){t=t||{};var n,r=[1800,3e3],i=E(),a=web_vitals_attribution_m("FCP"),o=function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(c&&c.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=e.startTime-d(),a.entries.push(e),n(!0)))}))},u=window.performance&&window.performance.getEntriesByName&&window.performance.getEntriesByName("first-contentful-paint")[0],c=u?null:web_vitals_attribution_v("paint",o);(u||c)&&(n=h(e,a,r,t.reportAllChanges),u&&o([u]),l((function(i){a=web_vitals_attribution_m("FCP"),n=h(e,a,r,t.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,n(!0)}))}))})))},b=!1,C=-1,w=function(e,t){!function(e,t){t=t||{};var n=[.1,.25];b||(S((function(e){C=e.value})),b=!0);var r,i=function(t){C>-1&&e(t)},a=web_vitals_attribution_m("CLS",0),o=0,u=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=u[0],n=u[u.length-1];o&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(o+=e.value,u.push(e)):(o=e.value,u=[e]),o>a.value&&(a.value=o,a.entries=u,r())}}))},s=web_vitals_attribution_v("layout-shift",c);s&&(r=h(i,a,n,t.reportAllChanges),p((function(){c(s.takeRecords()),r(!0)})),l((function(){o=0,C=-1,a=web_vitals_attribution_m("CLS",0),r=h(i,a,n,t.reportAllChanges)})))}((function(t){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];n&&(e.attribution={largestShiftTarget:c(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:o(t.startTime)})}}else e.attribution={};var r}(t),e(t)}),t)},L=function(e,t){S((function(t){!function(e){if(e.entries.length){var t=a(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:o(e.entries[0].startTime),navigationEntry:t,fcpEntry:n}}}else e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:o(f())}}(t),e(t)}),t)},A={passive:!0,capture:!0},F=new Date,M=function(r,i){web_vitals_attribution_e||(web_vitals_attribution_e=i,t=r,web_vitals_attribution_n=new Date,I(removeEventListener),B())},B=function(){if(t>=0&&t<web_vitals_attribution_n-F){var i={entryType:"first-input",name:web_vitals_attribution_e.type,target:web_vitals_attribution_e.target,cancelable:web_vitals_attribution_e.cancelable,startTime:web_vitals_attribution_e.timeStamp,processingStart:web_vitals_attribution_e.timeStamp+t};web_vitals_attribution_r.forEach((function(e){e(i)})),web_vitals_attribution_r=[]}},x=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){M(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,A),removeEventListener("pointercancel",r,A)};addEventListener("pointerup",n,A),addEventListener("pointercancel",r,A)}(t,e):M(t,e)}},I=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,x,A)}))},k=function(n,i){i=i||{};var a,o=[100,300],u=E(),c=web_vitals_attribution_m("FID"),s=function(e){e.startTime<u.firstHiddenTime&&(c.value=e.processingStart-e.startTime,c.entries.push(e),a(!0))},f=function(e){e.forEach(s)},d=web_vitals_attribution_v("first-input",f);a=h(n,c,o,i.reportAllChanges),d&&p((function(){f(d.takeRecords()),d.disconnect()}),!0),d&&l((function(){var u;c=web_vitals_attribution_m("FID"),a=h(n,c,o,i.reportAllChanges),web_vitals_attribution_r=[],t=-1,web_vitals_attribution_e=null,I(addEventListener),u=s,web_vitals_attribution_r.push(u),B()}))},D=function(e,t){k((function(t){!function(e){var t=e.entries[0];e.attribution={eventTarget:c(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:o(t.startTime)}}(t),e(t)}),t)},P=0,N=1/0,q=0,R=function(e){e.forEach((function(e){e.interactionId&&(N=Math.min(N,e.interactionId),q=Math.max(q,e.interactionId),P=q?(q-N)/7+1:0)}))},H=function(){return i?P:performance.interactionCount||0},O=function(){"interactionCount"in performance||i||(i=web_vitals_attribution_v("event",R,{type:"event",buffered:!0,durationThreshold:0}))},j=0,U=function(){return H()-j},V=[],_={},z=function(e){var t=V[V.length-1],n=_[e.interactionId];if(n||V.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};_[r.id]=r,V.push(r)}V.sort((function(e,t){return t.latency-e.latency})),V.splice(10).forEach((function(e){delete _[e.id]}))}},G=function(e,t){t=t||{};var n=[200,500];O();var r,i=web_vitals_attribution_m("INP"),a=function(e){e.forEach((function(e){(e.interactionId&&z(e),"first-input"===e.entryType)&&(!V.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&z(e))}));var t,n=(t=Math.min(V.length-1,Math.floor(U()/50)),V[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},o=web_vitals_attribution_v("event",a,{durationThreshold:t.durationThreshold||40});r=h(e,i,n,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),p((function(){a(o.takeRecords()),i.value<0&&U()>0&&(i.value=0,i.entries=[]),r(!0)})),l((function(){V=[],j=H(),i=web_vitals_attribution_m("INP"),r=h(e,i,n,t.reportAllChanges)})))},J=function(e,t){G((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:c(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:o(t.startTime)}}else e.attribution={}}(t),e(t)}),t)},K={},Q=function(e,t){!function(e,t){t=t||{};var n,r=[2500,4e3],i=E(),a=web_vitals_attribution_m("LCP"),o=function(e){var t=e[e.length-1];if(t){var r=t.startTime-d();r<i.firstHiddenTime&&(a.value=r,a.entries=[t],n())}},u=web_vitals_attribution_v("largest-contentful-paint",o);if(u){n=h(e,a,r,t.reportAllChanges);var c=function(){K[a.id]||(o(u.takeRecords()),u.disconnect(),K[a.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,c,{once:!0,capture:!0})})),p(c,!0),l((function(i){a=web_vitals_attribution_m("LCP"),n=h(e,a,r,t.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,K[a.id]=!0,n(!0)}))}))}))}}((function(t){!function(e){if(e.entries.length){var t=a();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],o=Math.max(0,t.responseStart-n),u=Math.max(o,i?(i.requestStart||i.startTime)-n:0),s=Math.max(u,i?i.responseEnd-n:0),f=Math.max(s,r?r.startTime-n:0),l={element:c(r.element),timeToFirstByte:o,resourceLoadDelay:u-o,resourceLoadTime:s-u,elementRenderDelay:f-s,navigationEntry:t,lcpEntry:r};r.url&&(l.url=r.url),i&&(l.lcpResourceEntry=i),e.attribution=l}}else e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(t),e(t)}),t)},W=function e(t){document.prerendering?addEventListener("prerenderingchange",(function(){return e(t)}),!0):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},X=function(e,t){t=t||{};var n=[800,1800],r=web_vitals_attribution_m("TTFB"),i=h(e,r,n,t.reportAllChanges);W((function(){var o=a();if(o){if(r.value=Math.max(o.responseStart-d(),0),r.value<0||r.value>performance.now())return;r.entries=[o],i(!0),l((function(){r=web_vitals_attribution_m("TTFB",0),(i=h(e,r,n,t.reportAllChanges))(!0)}))}}))},Y=function(e,t){X((function(t){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),a=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:a-i,requestTime:e.value-a,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(t),e(t)}),t)};

// CONCATENATED MODULE: /home/builduser/work/ecb8c1c6a59aa27c/node_modules/web-vitals/attribution.js
/*
 Copyright 2022 Google LLC
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// Creates the `web-vitals/attribution` import in node-based bundlers.
// This will not be needed when export maps are widely supported.


// CONCATENATED MODULE: ./entries/responsiveness.js
function responsiveness_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function responsiveness_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? responsiveness_ownKeys(Object(source), !0).forEach(function (key) { responsiveness_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : responsiveness_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function responsiveness_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var RESPONSIVENESS = 'responsiveness';
var DOM_TREE_LIMIT = 20;
var isInfoCalled = false;

var responsiveness_sequence = sequence(window, RESPONSIVENESS, RESPONSIVENESS),
    responsiveness_report = responsiveness_sequence.report,
    responsiveness_result = responsiveness_sequence.result;

window.addEventListener('info-called', function () {
  return isInfoCalled = true;
});
/**
 * @param {boolean} isLoggingEnabled
 */

var responsiveness_startMeasureResponsiveness = function startMeasureResponsiveness(isLoggingEnabled) {
  J(responsiveness_measureINP(isLoggingEnabled));
  return responsiveness_result;
};
/**
* @param {boolean} isLogging
 * @returns {(metric: import('web-vitals').MetricWithAttribution) => void}
 */

var responsiveness_measureINP = function measureINP(isLogging) {
  var inpEvents = 0;
  /**
   * @param {import('web-vitals').INPMetricWithAttribution} metric 
   * @returns {void}
   */

  return function (metric) {
    var _extractingResponsive = extractingResponsivenessEventDetails(metric),
        reportData = _extractingResponsive.reportData,
        logData = _extractingResponsive.logData;

    var currentResponsivenessMeasure = responsiveness_objectSpread({
      entryType: RESPONSIVENESS,
      worstLatency: metric.value,
      numOfResponsivenessEvents: ++inpEvents
    }, reportData);

    responsiveness_report(currentResponsivenessMeasure);
    var queryParams = new URLSearchParams(window.location.search);
    var isDebugQueryParamOn = queryParams.get('debug') === 'true';

    if (isLogging || isInfoCalled || isDebugQueryParamOn) {
      doLog(responsiveness_objectSpread(responsiveness_objectSpread({
        currentLatency: metric.value
      }, currentResponsivenessMeasure), logData));
    }
  };
};
/**
 * PerformanceObserver callback for responsiveness (type "event")
 * @param {import('web-vitals').INPMetricWithAttribution} metric
 */

var extractingResponsivenessEventDetails = function extractingResponsivenessEventDetails(metric) {
  var attribution = metric.attribution;
  var actions = attribution.eventEntry.name;
  var target = attribution.eventEntry.target;
  var latencyByEntry = attribution.eventEntry.duration;
  var loadState = attribution.loadState;
  var interactionWaterfall = attribution.eventTarget;
  var startTime = attribution.eventTime;
  var elementDetails = responsiveness_getElementDetails(target);
  return {
    reportData: responsiveness_objectSpread({
      interactionWaterfall: interactionWaterfall,
      actions: actions,
      latencyByEntry: latencyByEntry,
      startTime: startTime,
      loadState: loadState
    }, elementDetails),
    logData: {
      target: target
    }
  };
};
/**
 * PerformanceObserver callback for responsiveness (type "event")
 * @param {HTMLElement} target
 * @returns {{elementType:string, compId: string}}
 */


var responsiveness_getElementDetails = function getElementDetails(target) {
  var _closestNode$id;

  var closestNode = Object(utils["j" /* getClosestElementWithId */])(target);
  var compId = (_closestNode$id = closestNode == null ? void 0 : closestNode.id) != null ? _closestNode$id : '';
  var elementType = target == null ? void 0 : target.localName;
  return {
    elementType: elementType,
    compId: compId
  };
};
// EXTERNAL MODULE: ./actions/loadInfo.js
var loadInfo = __webpack_require__(3);

// CONCATENATED MODULE: ./info/alert.js
function alert_createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = alert_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function alert_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return alert_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return alert_arrayLikeToArray(o, minLen); }

function alert_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var PARAM = 'showperfinfo';
/**
 * If "showPerfInfo" URL param is specified then display metrics as alert
 * @param {Window} window 
 * @param {Array<Promise<{[key: string]: string | number}>> measurements
 * @returns {boolean}
 */

function alert_alert(window, measurements) {
  var URLSearchParams =
  /** @type {Object} */
  window.URLSearchParams;

  if (URLSearchParams) {
    /** @type {URLSearchParams} */
    var searchParams = new URLSearchParams(window.location.search);

    for (var _iterator = alert_createForOfIteratorHelperLoose(searchParams.keys()), _step; !(_step = _iterator()).done;) {
      var key = _step.value;

      if (key.toLowerCase() === PARAM) {
        Promise.all(measurements.slice(0, 3)).then(function (_ref) {
          var _ref$ = _ref[0],
              viewerName = _ref$.viewerName,
              ttfb = _ref$.ttfb,
              fcp = _ref[1].fcp,
              _ref$2 = _ref[2],
              lcp = _ref$2.lcp,
              cls = _ref$2.cls,
              tti = _ref$2.tti,
              tbt = _ref$2.tbt;
          window.alert("Viewer=" + viewerName + "\nTTFB=" + ttfb + "\nFCP=" + fcp + "\nLCP=" + lcp + "\nCLS=" + cls + "\nTTI=" + tti + "\nTBT=" + tbt);
        });
        return true;
      }
    }
  }

  return false;
}
// CONCATENATED MODULE: ./index.js
//@ts-check


























var TAG_ID = 'wix-perf-measure';
index_measure();

function index_measure() {
  if (typeof Promise !== 'function' || !
  /** @type {any} */
  Promise.allSettled) {
    return;
  }

  var _window = window,
      document = _window.document,
      performance = _window.performance;
  var script = document.currentScript || document.getElementById(TAG_ID);

  if (script) {
    utils_config.load(window, script);
  }

  var noMeasure = utils_config.noMeasure,
      isLogging = utils_config.log,
      label = utils_config.label;
  /** @type {import('./utils/utils.js').State} */

  var state = [window, performance, window.PerformanceObserver, window.setTimeout, window.clearTimeout];
  var measurements = obtainMeasurements(state, isLogging);
  Object(loadInfo["a" /* default */])(state, document, utils_config.src, measurements, getCurrentLcp, cls_cls);
  Object.freeze(measurements);
  var together = measurements.slice(0, 3);
  var individually = measurements.slice(3, 5);

  if (!noMeasure) {
    markAndMeasure(performance, together);
  }

  if (isLogging) {
    log(together, individually);
  }

  window[label] = measurements;
  fireEvent(window, label, measurements);
  alert_alert(window, measurements);
}
/**
 * @param {import('./utils/utils.js').State} state 
 * @param {boolean} isLogging
 */


function obtainMeasurements(state, isLogging) {
  var environment = Object(utils["c" /* batch */])('environment', client(state), navStart(state), wixStart(state));
  var visibility = hidden_hidden(state);
  var initialPaint = fcp(state);
  var interaction = fid(state);
  var interactive = tti_tbt(state, Object(utils["i" /* extract */])(initialPaint, 'fcp'), interaction);
  var lastPaint = lcp_lcp(state, interactive, visibility, interaction);
  var ss = scripts(state);
  var is = images_images(state);
  var fs = fonts(state);
  var loaded = Object(utils["c" /* batch */])('loaded', interactive, lastPaint, ss, is, fs, navFinish(state), wixFinish(state, interactive)).then(function (result) {
    return Object.assign(result, cls_cls(state));
  });
  var cruxResult = crux_crux(state, visibility);
  var measurements = [environment, initialPaint, loaded, interaction, visibility, pages(state), cruxResult, crux_cls(state, cruxResult), responsiveness_startMeasureResponsiveness(isLogging)].map(function (measurement) {
    return measurement.then(function (payload) {
      return prepareMeasurement(state[0], payload);
    });
  });
  return addGetters(measurements);
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=wix-perf-measure.bundle.js.map