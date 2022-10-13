!(function() {

     var ArcPWPaused = false;
     var _0x5960=['Days','tabletsdk','mobilesdk','Rolling','free','https://www.reuters.com/'];(function(_0x2acc0a,_0x388bea){var _0x1119ff=function(_0x204aa4){while(--_0x204aa4){_0x2acc0a['push'](_0x2acc0a['shift']());}};_0x1119ff(++_0x388bea);}(_0x5960,0x11f));var _0x4759=function(_0x2acc0a,_0x388bea){_0x2acc0a=_0x2acc0a-0x0;var _0x1119ff=_0x5960[_0x2acc0a];return _0x1119ff;};var ArcPWRules=[{'cr':[![],_0x4759('0x5')],'d':[![],_0x4759('0x3'),_0x4759('0x2')],'e':[!![]],'pw':_0x4759('0x0'),'rt':['>',0x3],'id':0x7c,'budget':{'id':0x74,'budgetType':_0x4759('0x4'),'calendarType':null,'calendarWeekDay':null,'rollingType':_0x4759('0x1'),'rollingDays':0x1e,'rollingHours':null}},{'cr':[![],_0x4759('0x5')],'d':[!![],_0x4759('0x3'),'tabletsdk'],'e':[!![]],'pw':_0x4759('0x0'),'rt':['>',0xa],'id':0x7d,'budget':{'id':0x75,'budgetType':_0x4759('0x4'),'calendarType':null,'calendarWeekDay':null,'rollingType':_0x4759('0x1'),'rollingDays':0x1e,'rollingHours':null}}];
     var ArcPWPublishTimestamp = 1661533737842
     window["ArcP"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../paywall-core/lib/index.js":
/*!************************************!*\
  !*** ../paywall-core/lib/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var evaluationTechniques = {
  '>': evaluateScalar.bind(null, '>'),
  '<': evaluateScalar.bind(null, '<'),
  '=': evaluateScalar.bind(null, '='),
  '!=': evaluateScalar.bind(null, '!='),
  '*': evaluateMatch.bind(null, true),
  '!*': evaluateMatch.bind(null, false),
  true: evaluateIn.bind(null, true),
  false: evaluateIn.bind(null, false)
};
var LOG_PREFIX = '[ArcP]';
/**
 * Checks if a timestamp given is same day as existing timestamp
 *
 * @param {Number} timeStamp - timeStamp in milliseconds from epoch.
 * @param {Number} comparedTimestamp - threshold of what constitutes an expired timeStamp in milliseconds.
 * @returns {Boolean} true if dates are the same day
 */

var sameDay = function sameDay(timestamp, comparedTimestamp) {
  var time = new Date(timestamp);
  var compared = new Date(comparedTimestamp);
  return time.getFullYear() === compared.getFullYear() && time.getMonth() === compared.getMonth() && time.getDate() === compared.getDate();
};
/**
 * Compares a timestamp to see if it today is the first of the month but the timestamp is
 * from a different day (used to expire things when the new month rolls in)
 *
 * @param {number} timeStamp - timeStamp in milliseconds from epoch.
 *
 * @return {Boolean} - true if it should be cleared false if not.
 */


function checkForFirstOfMonth() {
  var timeStamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
  var today = new Date();
  var lastUpdated = new Date(timeStamp);
  return today.getMonth() > lastUpdated.getMonth() || today.getFullYear() > lastUpdated.getFullYear();
}
/**
 * Compares a day of the week string against today's day of the week (used to expire if weekly reset cadence selected)
 *
 * @param {string} dayToClear - day of the week. "Sunday", "Monday", "Tuesday", etc.
 * @param {number} timeStamp - timeStamp in milliseconds from epoch.
 *
 * @return {Boolean} - true if it should be cleared false if not.
 */


function checkDayOfWeek(dayToClear) {
  var timeStamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
  var today = new Date();
  var lastUpdated = new Date(timeStamp);
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (today - lastUpdated > 1000 * 60 * 60 * 24 * 7) {
    return true;
  }

  return today.getDay() === weekdays.indexOf(dayToClear) && !sameDay(today, lastUpdated);
}
/**
 * Checks if any of the days stored in the fact count array are expired
 *
 * @param {Array} factCounts - array of objects containing read counts per day
 * @param {Number} rollingCount - number of days specified for this rolling budget period
 * @returns {Array} array of counts containing only the number of days within the rolling budget period
 */


function clearExpiredRollingCounts(factCounts, rollingCount) {
  var today = Date.now();
  var rollingHours = rollingCount * 24;

  var counts = _toConsumableArray(factCounts);

  factCounts.map(function (count, i) {
    var diff = Math.abs(today - count.date) / 1000 / 60 / 60;

    if (diff > rollingHours) {
      counts.splice(i);
    }
  });
  return counts;
}
/**
 * Checks to see if read count needs to be incremented and if rolling array needs to be updated
 *
 * @param {Number} rule Rule which the read count should be added to
 * @param {Object} readCounts - An object that contains previous readcount data (from long-term storage}
 *
 * @return {Object} object containing new read count information
 */


function checkRollingCount(rule) {
  var readCounts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //Keeps track of the number of counts per day per ruleId in the rolling array (r). Each ruleId stores an array of objects
  //with each object representing a day within the rolling window. If the visit is on the same day the last entry in the array,
  //read counts for that day are combined. If not, one count is pushed onto the array for that day. If the array is going to
  // exceed the length of the rolling window, the first item in the array is removed and a new day is pushed into it.

  var id = rule.id,
      rollingDays = rule.budget.rollingDays;
  var rollingLength = readCounts[id].r && readCounts[id].r.length;

  if (!!rollingLength && rollingLength < rollingDays && !!readCounts[id].r[rollingLength - 1].date) {
    if (sameDay(readCounts[id].r[rollingLength - 1].date, Date.now())) {
      readCounts[id].r[rollingLength - 1] = {
        date: Date.now(),
        count: readCounts[id].r[rollingLength - 1].count + 1
      };
    } else {
      readCounts[id].r.push({
        date: Date.now(),
        count: 1
      });
    }
  } else if (!!rollingLength && rollingLength >= rollingDays && !!readCounts[id].r[rollingLength - 1].date) {
    if (sameDay(readCounts[id].r[rollingLength - 1].date, Date.now())) {
      readCounts[id].r[rollingLength - 1] = {
        date: Date.now(),
        count: readCounts[id].r[rollingLength - 1].count + 1
      };
    } else {
      readCounts[id].r.shift();
      readCounts[id].r.push({
        date: Date.now(),
        count: 1
      });
    }
  } else {
    readCounts = _objectSpread(_objectSpread({}, readCounts), {}, _defineProperty({}, id, {
      r: [{
        date: Date.now(),
        count: 1
      }],
      c: 1,
      lastUpdated: Date.now()
    }));
  }

  return readCounts;
}
/**
 * Checks budget type in order to determine whether or not it's necessary to clear user history if the rule resets on a calendar basis
 *
 * @param {object} budget - budget information on the rule.
 * @param {object} readCounts - an object that contains previous readcount data (from long-term storage}
 *
 */


function checkNeedToClear(budget, readCounts) {
  if (!budget || budget && budget.budgetType === 'Calendar') {
    return budget && budget.calendarType === 'Weekly' ? checkDayOfWeek(budget.calendarWeekDay, readCounts.lastUpdated) : checkForFirstOfMonth(readCounts.lastUpdated);
  } else {
    return false;
  }
}
/**
 * Adds a read count to the appropriate places based on the parameters passed.
 *
 * @param {Number} ruleId, Id of the rule which the read count should be added to
 * @param {Object} readCounts - An object that contains previous readcount data (from long-term storage}
 */


function addReadCount() {
  var rule = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var readCounts = arguments.length > 1 ? arguments[1] : undefined;

  if (!readCounts) {
    return;
  }

  var isRolling = rule.budget && rule.budget.budgetType && rule.budget.budgetType === 'Rolling';

  if (!readCounts[rule.id]) {
    readCounts[rule.id] = {};
  }

  if (!isRolling) {
    var currentCountForId = readCounts[rule.id].c || 0;
    readCounts[rule.id].c = currentCountForId + 1;
    readCounts[rule.id].lastUpdated = Date.now();
  } else {
    var updatedReadCounts = checkRollingCount(rule, readCounts);
    readCounts[rule.id].r = clearExpiredRollingCounts(updatedReadCounts[rule.id].r, rule.budget.rollingDays);
    readCounts[rule.id].c = updatedReadCounts[rule.id].r[0] && updatedReadCounts[rule.id].r.map(function (read) {
      return read.count;
    }).reduce(function (a, b) {
      return a + b;
    });
    readCounts[rule.id].lastUpdated = Date.now();
  }

  return readCounts;
}
/**
 * Checks if a reader is exempt to a certain rule
 *
 * @param {object} rule
 * @param {object} [sub={}]
 * @param {object} [reg={}]
 * @returns {boolean} - true if reader is exempt to this rule; false otherwise.
 */


function isExemptToRule(rule) {
  var sub = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var reg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (Array.isArray(rule.e) && rule.e.length === 1) {
    return !!reg.l;
  } else {
    var isExempt = Array.isArray(sub.p) && sub.p.some(function (sku) {
      return evaluate(rule.e, sku);
    });
    var isEntitlementsFailing = !!sub.entitlementsFailed && rule.e.length > 1;
    return isExempt || isEntitlementsFailing;
  }
}
/**
 * Evaluates whether the fact matches (or not, based on the modifier) any of the conditions in the conditions array.
 * If a matcher is not passed in, it will simply do an indexOf with each condition against the fact.
 * i.e `(condition.indexOf(fact) >= 0)`
 *
 * @param {boolean} modifier
 * @param {Array} conditions
 * @param {string} fact
 * @param {function} regexpCreator - This function should take one argument and return a RegExp object. Defaults to /fact/
 *
 * @returns {boolean} true if the fact matches (or not, based on modifier being false) any of the conditions passed in.
 */


function evaluateMatch(modifier, conditions, fact, regexpCreator) {
  return conditions.some(function (condition) {
    var result = false;

    if (typeof regexpCreator === 'function') {
      var regexp = regexpCreator(condition);
      result = regexp.test(fact);
    } else {
      result = condition.indexOf(fact) >= 0;
    }

    return !!(result ^ !modifier);
  });
}

function evaluateIn(modifier, conditions, fact) {
  if (Array.isArray(fact)) {
    return !!conditions.filter(function (item) {
      return fact.includes(item);
    }).length === modifier;
  } else {
    return !!(conditions.indexOf(fact) >= 0 ^ !modifier);
  }
}
/**
 * Evaluates scalar values based on a modifier.
 *
 * @param {string} modifier - can be '<', '>', '=' or '!='
 * @param {Array} conditions - an array with its first element as a number
 * @param {string} fact
 *
 * @returns {boolean} true if the condition is passed.
 */


function evaluateScalar(modifier, conditions, fact) {
  var condition = conditions[0];

  if (!isNaN(parseInt(condition))) {
    switch (modifier) {
      case '>':
        return fact > conditions[0];

      case '<':
        return fact < conditions[0];

      case '=':
        return conditions[0] === fact;

      case '!=':
        return conditions[0] != fact;

      default:
        return true;
      // shouldn't happen, but just in case!
    }
  }
}
/**
 * Returns true if both the `condition` and `fact` are valid. For the `condition` to be valid
 * it needs to be an `Array` of at least 2 elements with the first one being of type boolean.
 *
 * For the `fact` to be valid it needs to be a non-empty string.
 *
 * @param {Array} condition - e.g. [true, 'finance', 'business'] or [false, '8.8.8.8'])
 * @param {string} fact - i.e. non-empty fact being checked against the conditions
 * @returns {boolean} -- true if the conditions & fact are valid, false otherwise.
 */


function checkConditionParams(condition, fact) {
  if (!Array.isArray(condition) || condition[0] == null || // intentional type coersion
  typeof condition[0] !== 'boolean' && !/^>|<|=|!=|\*|!\*$/.test(condition[0]) || condition.length < 2 || fact === null || fact === undefined) {
    return false;
  }

  return true;
}
/**
 * Checks that a `condition` represented by an array starting w/ a boolean (e.g. [true, 'finance, 'business']) is
 * satisfied by a `fact` represented by a string. If the first element in `condition` is true, then it
 * will return true if `fact` is in the `condition` array.  If the first element in `condition` is false,
 * it will return true if `fact` is NOT in the `condition` array.
 *
 * @param {Array} conditions - e.g. [true, 'finance', 'business'] or [false, '8.8.8.8'])
 * @param {string} fact - i.e. non-empty fact being checked against the conditions
 * @param {function} matcher - a function to run as a predicate on every element in the conditions array
 * @returns {boolean} - true if the condition matches, false if it doesn't
 */


function evaluate(conditions, fact, matcher) {
  if (!checkConditionParams(conditions, fact)) {
    return true; // if things are missing just default to true
  }

  var modifier = conditions[0];
  var result = evaluationTechniques[modifier](conditions.slice(1), fact, matcher);
  return result;
}
/**
 * Given a ruleset and a facts object, it determines whether to call the paywallCallback function.
 *
 * @param {object} ruleset
 * @param {object} facts
 */


function evaluateRuleset(ruleset, facts) {
  if (!ruleset || !facts) {
    throw new Error("".concat(LOG_PREFIX, " Missing ruleset, facts or callback parameter in evaluateRuleset\n          ruleset: ").concat(ruleset, "\n          facts: ").concat(facts));
  }

  var triggeringRules = [];
  Array.isArray(ruleset) && ruleset.forEach(function (rule) {
    var sub = facts.sub || {};
    var reg = facts.reg || {};

    if (evaluate(rule.c, facts.c) && evaluate(rule.d, facts.d) && evaluate(rule.r, facts.r) && evaluate(rule.s, facts.s) && evaluate(rule.cr, facts.cr) && evaluate(rule.continent, facts.geo && facts.geo.continent) && evaluate(rule.city, facts.geo && facts.geo.city) && evaluate(rule.country_code, facts.geo && facts.geo.country_code) && evaluate(rule.dma, facts.geo && facts.geo.dma) && evaluate(rule.georegion, facts.geo && facts.geo.georegion) && evaluate(rule.bc, facts.bc) && !isExemptToRule(rule, sub, reg)) {
      addReadCount(rule, facts.rc);

      if (evaluate(rule.rt, facts.rc[rule.id].c || 0)) {
        triggeringRules.push({
          id: rule.id,
          rc: facts.rc[rule.id].c,
          rule: _objectSpread({}, rule)
        });
      } // store the visit


      if (!facts.v) {
        facts.v = facts.v || {
          ci: []
        };
        facts.v.ci = facts.v.ci || [];
      }

      if (facts.v.ci.indexOf(facts.ci) < 0) {
        facts.v.ci.push(facts.ci);
        facts.v.lastUpdated = Date.now();
      }
    } else if (isExemptToRule(rule, sub, reg)) {
      facts.rc[rule.id] = facts.rc[rule.id] || {};
      facts.rc[rule.id].lastUpdated = Date.now();
    }
  });
  return triggeringRules;
}

module.exports = {
  evaluateRuleset: evaluateRuleset,
  evaluate: evaluate,
  checkConditionParams: checkConditionParams,
  checkForFirstOfMonth: checkForFirstOfMonth,
  checkNeedToClear: checkNeedToClear,
  checkDayOfWeek: checkDayOfWeek,
  isExemptToRule: isExemptToRule,
  sameDay: sameDay
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/paywall.js */ "./src/paywall.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "./node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "./node_modules/core-js/library/fn/object/define-properties.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

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
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
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

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);

  _Object$defineProperty(Constructor, "prototype", {
    writable: false
  });

  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
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

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/regeneratorRuntime.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/regeneratorRuntime.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js")["default"];

var _Symbol = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof _Symbol ? _Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return _Object$defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = _Object$create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);

    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = _Object$getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return _Object$setPrototypeOf ? _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = _Object$create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = _Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

var _Symbol$iterator = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime-corejs2/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/date/now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/library/fn/date/now.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "./node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-properties */ "./node_modules/core-js/library/modules/es6.object.define-properties.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_own-keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.date.now.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.date.now.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/library/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/unfetch/dist/unfetch.module.js":
/*!*****************************************************!*\
  !*** ./node_modules/unfetch/dist/unfetch.module.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})});
//# sourceMappingURL=unfetch.module.js.map


/***/ }),

/***/ "./src/factGathering/browserData.js":
/*!******************************************!*\
  !*** ./src/factGathering/browserData.js ***!
  \******************************************/
/*! exports provided: getBrowserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowserData", function() { return getBrowserData; });
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/url */ "./src/utils/url.js");




function parseReferrer() {
  if (false) {}

  var referrer = Object(_utils_url__WEBPACK_IMPORTED_MODULE_2__["getHostnameFromURL"])(document.referrer); // For now just check for google, facebook, twitter. Otherwise save the hostname

  if (/facebook\.com$/.test(referrer)) {
    return 'facebook';
  } else if (/twitter\.com$/.test(referrer)) {
    return 'twitter';
  } else if (/google\.co(m|\.[a-z]{2})$/.test(referrer)) {
    return 'google';
  } else {
    return referrer; // this may need some additional parsing.
  }
}

function getReferrer() {
  return parseReferrer();
} // TODO: 'audience' is a bit murky when it comes to requirements. Likely, however,
// there will be some inspection of cookies for audience segmentation information.
// this is just a stub...


function getAudience() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return data.a || 'something special';
}

function parseDeviceClass() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  var isMobileUserAgent = /mobi/i.test(userAgent);
  var isTabletUserAgent = /(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(userAgent);

  if (isMobileUserAgent && !isTabletUserAgent) {
    return 'mobile';
  } else if (isTabletUserAgent) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}

function getDeviceClass() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return data.d || parseDeviceClass();
}

function isPrivateMode() {
  return _isPrivateMode.apply(this, arguments);
}

function _isPrivateMode() {
  _isPrivateMode = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var isIncognito, _yield$navigator$stor, quota, fs, testKey;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isIncognito = false;

            if (!window.chrome) {
              _context.next = 14;
              break;
            }

            if (!('storage' in navigator && 'estimate' in navigator.storage)) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return navigator.storage.estimate();

          case 5:
            _yield$navigator$stor = _context.sent;
            quota = _yield$navigator$stor.quota;
            isIncognito = quota < 120000000;
            _context.next = 12;
            break;

          case 10:
            fs = window.RequestFileSystem || window.webkitRequestFileSystem;

            if (fs) {
              fs(window.TEMPORARY, 100, function () {
                isIncognito = false;
              }, function () {
                isIncognito = true;
              });
            }

          case 12:
            _context.next = 15;
            break;

          case 14:
            if (/constructor/i.test(window.HTMLElement)) {
              // Safari
              try {
                // check if we can write to localstorage
                testKey = "".concat("ArcP", ".test");
                window.localStorage.setItem(testKey, 'testValue');
                window.localStorage.removeItem(testKey);
                window.openDatabase(null, null, null, null);
                isIncognito = false;
              } catch (_) {
                isIncognito = true;
              }
            } else if ('MozAppearance' in document.documentElement.style) {
              // Mozilla
              isIncognito = !navigator.serviceWorker;
            } else if (window.PointerEvent || window.MSPointerEvent) {
              // IE10 + Edge
              isIncognito = !window.indexedDB;
            }

          case 15:
            return _context.abrupt("return", isIncognito);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _isPrivateMode.apply(this, arguments);
}

function getBrowserData(_x) {
  return _getBrowserData.apply(this, arguments);
}

function _getBrowserData() {
  _getBrowserData = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(longTermData) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = getDeviceClass(longTermData);
            _context2.t1 = getReferrer(longTermData);
            _context2.next = 4;
            return isPrivateMode();

          case 4:
            _context2.t2 = _context2.sent;
            return _context2.abrupt("return", {
              d: _context2.t0,
              r: _context2.t1,
              pm: _context2.t2
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getBrowserData.apply(this, arguments);
}

/***/ }),

/***/ "./src/factGathering/entitlements.js":
/*!*******************************************!*\
  !*** ./src/factGathering/entitlements.js ***!
  \*******************************************/
/*! exports provided: ECHO_STORE_NAME, defaultSubscriptionCheck, getSubData, defaultShouldFetchSubsCheck, shouldFetchSubs, defaultRegistrationCheck, getRegData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECHO_STORE_NAME", function() { return ECHO_STORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSubscriptionCheck", function() { return defaultSubscriptionCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubData", function() { return getSubData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultShouldFetchSubsCheck", function() { return defaultShouldFetchSubsCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldFetchSubs", function() { return shouldFetchSubs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRegistrationCheck", function() { return defaultRegistrationCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegData", function() { return getRegData; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.module.js");
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../storage/storage */ "./src/storage/storage.js");
/* harmony import */ var _utils_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/jwt */ "./src/utils/jwt.js");
/* harmony import */ var _facts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../facts */ "./src/facts.js");










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, key)); }); } return target; }







var ECHO_STORE_NAME = 'ArcPE';
/**
 * Runs the default subscriptions check (i.e. queries /sales/public/v1/entitlements)
 * If options.jwt is not found, it will get the jwt from localStorage['ArcId.USER_INFO'] which is the default.
 * It is currently assumed that you are passing a valid JWT if using options.JWT (for backwards compatibility).
 * In the future the JWT will also be checked for expiration
 *
 * If no JWT is found, an error will be thrown.
 *
 * @param {object} [options={}] options
 * @returns {Promise<object>} An object with the data fetched from the sales endpoint service and a timestamp.
 */

function defaultSubscriptionCheck() {
  return _defaultSubscriptionCheck.apply(this, arguments);
}
/**
 * if options.customSubCheck is defined, will use that to fetch entitlement data
 * else, will use our default entitlement service.  This method will update localStorage.
 *
 * @export
 * @param {object} [options={}]
 * @returns
 */

function _defaultSubscriptionCheck() {
  _defaultSubscriptionCheck = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee() {
    var options,
        start,
        url,
        entitlementsFailed,
        response,
        headers,
        jwt,
        json,
        _args = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            start = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9___default()();
            url = "".concat(options.apiOrigin ? 'https://' + options.apiOrigin : '', "/sales/public/v1/entitlements");
            entitlementsFailed = false;

            if (true) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", {
              p: ['digitalintrow'],
              timeTaken: 0,
              updated: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9___default()()
            });

          case 6:
            headers = _objectSpread({
              'Cache-Control': 'no-store'
            }, options.headers);
            _context.next = 9;
            return Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_13__["getJWT"])(options);

          case 9:
            jwt = _context.sent;

            if (jwt && !Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_13__["isJwtExpired"])(jwt)) {
              headers.Authorization = "Bearer ".concat(jwt);
            }

            if (!jwt && options.ampReaderId) {
              url = "".concat(url, "?ampReaderId=").concat(options.ampReaderId);
            }

            _context.prev = 12;
            _context.next = 15;
            return Object(unfetch__WEBPACK_IMPORTED_MODULE_11__["default"])(url, {
              headers: headers
            });

          case 15:
            response = _context.sent;
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](12);
            //Service unavailable
            entitlementsFailed = true;

          case 21:
            _context.t1 = !!response && response.ok;

            if (!_context.t1) {
              _context.next = 26;
              break;
            }

            _context.next = 25;
            return response.json();

          case 25:
            _context.t1 = _context.sent;

          case 26:
            json = _context.t1;
            return _context.abrupt("return", {
              p: json && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_10___default()(json.skus) && json.skus.map(function (entitlement) {
                return entitlement.sku;
              }) || [],
              geo: json.edgescape || {},
              timeTaken: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9___default()() - start,
              updated: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9___default()(),
              entitlementsFailed: entitlementsFailed
            });

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[12, 18]]);
  }));
  return _defaultSubscriptionCheck.apply(this, arguments);
}

function getSubData() {
  return _getSubData.apply(this, arguments);
}
/**
 * Default should fetch subs check. On every call to `ArcP.run` this function will perform a `GET` request to
 * the endpoint specified in `options.echoEndpoint`, & stores the value in localstorage under the key `ArcPE`.
 * On subsequent calls to the echo endpoint, if the value differs from the one stored in localstorage, it will
 * store the new value & return true. If the value has remained the same, or there is an error, it will return
 * false.
 *
 * If this function returns `true`, p.js will refetch entitlements for the user. If `false`, p.js will continue
 * to use the existing 24hr cache expiry for fetching fresh entitlements.
 *
 * @export
 * @param {object} [options={}]
 * @returns
 */

function _getSubData() {
  _getSubData = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee2() {
    var options,
        subCheck,
        browserData,
        userName,
        userBrowserData,
        entitlements,
        _args2 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
            subCheck = typeof options.customSubCheck === 'function' ? options.customSubCheck : defaultSubscriptionCheck;
            _context2.next = 4;
            return _storage_storage__WEBPACK_IMPORTED_MODULE_12__["longTermStore"].getItem("ArcP");

          case 4:
            _context2.t0 = _context2.sent;

            if (_context2.t0) {
              _context2.next = 7;
              break;
            }

            _context2.t0 = {};

          case 7:
            browserData = _context2.t0;
            userName = Object(_facts__WEBPACK_IMPORTED_MODULE_14__["getUserName"])(options);
            userBrowserData = browserData[userName] || {};
            _context2.next = 12;
            return subCheck(options);

          case 12:
            entitlements = _context2.sent;
            _context2.next = 15;
            return _storage_storage__WEBPACK_IMPORTED_MODULE_12__["longTermStore"].setItem("ArcP", _objectSpread(_objectSpread({}, browserData), {}, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, userName, _objectSpread(_objectSpread({}, userBrowserData), {}, {
              geo: entitlements && entitlements.geo,
              sub: entitlements
            }))));

          case 15:
            return _context2.abrupt("return", entitlements);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getSubData.apply(this, arguments);
}

function defaultShouldFetchSubsCheck() {
  return _defaultShouldFetchSubsCheck.apply(this, arguments);
}
/**
 * Run either the customShouldFetchSubs function defined in the options parameter, or the default
 * shouldFetchSubs check if no options.customShouldFetchSubs is defined.
 *
 * @export
 * @param {object} [options={}]
 * @returns {Promise<object>} A Promise resolving to a boolean indicating whether or not p.js should refetch
 * entitlements
 */

function _defaultShouldFetchSubsCheck() {
  _defaultShouldFetchSubsCheck = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee3() {
    var options,
        url,
        headers,
        prevEcho,
        nextEchoResponse,
        json,
        _args3 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
            url = options.echoEndpoint;

            if (url) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", false);

          case 4:
            headers = {
              'Cache-Control': 'no-store'
            };
            _context3.prev = 5;
            _context3.next = 8;
            return _storage_storage__WEBPACK_IMPORTED_MODULE_12__["longTermStore"].getItem(ECHO_STORE_NAME);

          case 8:
            _context3.t0 = _context3.sent;

            if (_context3.t0) {
              _context3.next = 11;
              break;
            }

            _context3.t0 = {};

          case 11:
            prevEcho = _context3.t0;
            _context3.next = 18;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t1 = _context3["catch"](5);
            // no IP found yet, set empty
            _storage_storage__WEBPACK_IMPORTED_MODULE_12__["longTermStore"].setItem(ECHO_STORE_NAME, {});
            prevEcho = {};

          case 18:
            _context3.prev = 18;
            _context3.next = 21;
            return Object(unfetch__WEBPACK_IMPORTED_MODULE_11__["default"])(url, {
              headers: headers
            });

          case 21:
            nextEchoResponse = _context3.sent;
            _context3.next = 24;
            return nextEchoResponse.json();

          case 24:
            json = _context3.sent;

            if (!json.httpStatus) {
              _context3.next = 28;
              break;
            }

            console.error(Error("".concat("[ArcP]", " ").concat(json.code || '', " ").concat(json.message || '')));
            return _context3.abrupt("return", false);

          case 28:
            if (!(json.edgedata !== prevEcho.edgedata)) {
              _context3.next = 34;
              break;
            }

            _context3.next = 31;
            return _storage_storage__WEBPACK_IMPORTED_MODULE_12__["longTermStore"].setItem(ECHO_STORE_NAME, json);

          case 31:
            return _context3.abrupt("return", true);

          case 34:
            return _context3.abrupt("return", false);

          case 35:
            _context3.next = 41;
            break;

          case 37:
            _context3.prev = 37;
            _context3.t2 = _context3["catch"](18);
            console.error('error checking echo', _context3.t2);
            return _context3.abrupt("return", false);

          case 41:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 14], [18, 37]]);
  }));
  return _defaultShouldFetchSubsCheck.apply(this, arguments);
}

function shouldFetchSubs() {
  return _shouldFetchSubs.apply(this, arguments);
}
/**
 * Default registration check. Will ensure the JWT passed is not expired if one is not provided.
 * It is currently assumed that you are passing a valid JWT if using options.JWT (for backwards compatibility).
 * In the future the JWT will also be checked for expiration
 * If options.jwt is not found, it will get the jwt from localStorage['ArcId.USER_INFO'] which is the default.
 *
 * @export
 * @param {object} [options={}]
 * @returns
 */

function _shouldFetchSubs() {
  _shouldFetchSubs = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee4() {
    var options,
        shouldFetchSubsCheck,
        shouldFetchSubs,
        _args4 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            options = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
            shouldFetchSubsCheck = typeof options.customShouldFetchSubsCheck === 'function' ? options.customShouldFetchSubsCheck : defaultShouldFetchSubsCheck;
            _context4.next = 4;
            return shouldFetchSubsCheck(options);

          case 4:
            shouldFetchSubs = _context4.sent;
            return _context4.abrupt("return", shouldFetchSubs);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _shouldFetchSubs.apply(this, arguments);
}

function defaultRegistrationCheck() {
  return _defaultRegistrationCheck.apply(this, arguments);
}
/**
 * Run either the customRegCheck function defined in the options parameter, or the default
 * reg check if no options.customRegCheck is defined.
 *
 * @export
 * @param {object} [options={}]
 * @returns {Promise<object>} A Promise resolving to an object which denotes if a user is registered or not.
 */

function _defaultRegistrationCheck() {
  _defaultRegistrationCheck = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee5() {
    var _options$customAMPExp;

    var options,
        jwt,
        isLoggedIn,
        AMPSessionExpiration,
        readerIdState,
        _args5 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            options = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
            _context5.next = 3;
            return Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_13__["getJWT"])(options);

          case 3:
            jwt = _context5.sent;
            isLoggedIn = jwt && !Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_13__["isJwtExpired"])(jwt);
            AMPSessionExpiration = (_options$customAMPExp = options.customAMPExpiration) !== null && _options$customAMPExp !== void 0 ? _options$customAMPExp : 1728000000000;

            if (!(options.ampReaderId && options.AMP && !isLoggedIn)) {
              _context5.next = 11;
              break;
            }

            _context5.next = 9;
            return options.AMP.authenticateAMPReaderID(options.ampReaderId);

          case 9:
            readerIdState = _context5.sent;

            if (readerIdState.linkedArcIdentity && readerIdState.lastLogin > readerIdState.lastLogout && _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9___default()() - readerIdState.lastLogin < AMPSessionExpiration) {
              isLoggedIn = true;
            }

          case 11:
            return _context5.abrupt("return", {
              l: isLoggedIn || false,
              updated: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9___default()()
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _defaultRegistrationCheck.apply(this, arguments);
}

function getRegData() {
  return _getRegData.apply(this, arguments);
}

function _getRegData() {
  _getRegData = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee6() {
    var options,
        regCheck,
        _args6 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
            regCheck = typeof options.customRegCheck === 'function' ? options.customRegCheck : defaultRegistrationCheck;
            return _context6.abrupt("return", regCheck(options));

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getRegData.apply(this, arguments);
}

/***/ }),

/***/ "./src/factGathering/pageData.js":
/*!***************************************!*\
  !*** ./src/factGathering/pageData.js ***!
  \***************************************/
/*! exports provided: getPageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageData", function() { return getPageData; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);


function defaultGetPageData(options) {
  var section;
  var contentType;
  var contentRestriction;
  var contentIdentifier;

  if (false) {} else {
    section = options.section;
    contentType = options.contentType;
    contentRestriction = options.contentRestriction;
    contentIdentifier = options.contentIdentifier;
  }

  if (false) {} else if (!contentIdentifier) {
    var canonicalLinkEl = document.querySelector('link[rel="canonical"]');

    if (canonicalLinkEl) {
      contentIdentifier = canonicalLinkEl.getAttribute('href');
    } else {
      throw new Error("".concat("[ArcP]", " Unable to find content identifier"));
    }
  }

  return {
    s: section,
    c: contentType,
    cr: contentRestriction,
    ci: contentIdentifier
  };
}

function getPageData(customPageData, options) {
  if (typeof customPageData !== 'function') {
    return defaultGetPageData(options);
  } else {
    return customPageData(options); // should be synchronous (not a promise!)
  }
}

/***/ }),

/***/ "./src/factGathering/readCounts.js":
/*!*****************************************!*\
  !*** ./src/factGathering/readCounts.js ***!
  \*****************************************/
/*! exports provided: getReadCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReadCounts", function() { return getReadCounts; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, key)); }); } return target; }

/**
 * Gets the read counts from the data object
 *
 * @param {Object} [data={}] - a data object representing longterm storage.
 *
 * @returns {Object} Returns either an existing read count or a new empty object
 */
function getReadCounts() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread(_objectSpread({}, data), {}, {
    rc: data.rc && (data.rc.c || data.rc.lastUpdated) ? {} : data.rc || {}
  });
}

/***/ }),

/***/ "./src/facts.js":
/*!**********************!*\
  !*** ./src/facts.js ***!
  \**********************/
/*! exports provided: getFacts, getBlueConicSegments, getUserName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFacts", function() { return getFacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlueConicSegments", function() { return getBlueConicSegments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserName", function() { return getUserName; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _factGathering_browserData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./factGathering/browserData */ "./src/factGathering/browserData.js");
/* harmony import */ var _factGathering_pageData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./factGathering/pageData */ "./src/factGathering/pageData.js");
/* harmony import */ var _factGathering_readCounts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./factGathering/readCounts */ "./src/factGathering/readCounts.js");
/* harmony import */ var _factGathering_entitlements__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./factGathering/entitlements */ "./src/factGathering/entitlements.js");
/* harmony import */ var _utils_expiration_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/expiration.js */ "./src/utils/expiration.js");
/* harmony import */ var _arc_paywall_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @arc/paywall-core */ "../paywall-core/lib/index.js");
/* harmony import */ var _arc_paywall_core__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_16__);












function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, key)); }); } return target; }








var bcCreateProfile = function bcCreateProfile() {};

function getFacts() {
  return _getFacts.apply(this, arguments);
}

function _getFacts() {
  _getFacts = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
    var longTermData,
        options,
        rules,
        customPageData,
        regData,
        userName,
        segments,
        userLongTermData,
        shouldFetchSubs,
        facts,
        subData,
        _args = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            longTermData = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            rules = _args.length > 2 ? _args[2] : undefined;
            customPageData = options.customPageData;
            _context.next = 6;
            return Object(_factGathering_entitlements__WEBPACK_IMPORTED_MODULE_14__["getRegData"])(options);

          case 6:
            regData = _context.sent;
            userName = getUserName(options);
            _context.next = 10;
            return getBlueConicSegments(options, userName);

          case 10:
            segments = _context.sent;
            userLongTermData = longTermData[userName] || {};
            _context.next = 14;
            return Object(_factGathering_entitlements__WEBPACK_IMPORTED_MODULE_14__["shouldFetchSubs"])(options);

          case 14:
            shouldFetchSubs = _context.sent;
            _context.t0 = _objectSpread;
            _context.t1 = _objectSpread;
            _context.t2 = _objectSpread;
            _context.t3 = _objectSpread;
            _context.t4 = {};
            _context.next = 22;
            return Object(_factGathering_browserData__WEBPACK_IMPORTED_MODULE_11__["getBrowserData"])(userLongTermData);

          case 22:
            _context.t5 = _context.sent;
            _context.t6 = (0, _context.t3)(_context.t4, _context.t5);
            _context.t7 = Object(_factGathering_readCounts__WEBPACK_IMPORTED_MODULE_13__["getReadCounts"])(userLongTermData);
            _context.t8 = (0, _context.t2)(_context.t6, _context.t7);
            _context.t9 = Object(_factGathering_pageData__WEBPACK_IMPORTED_MODULE_12__["getPageData"])(customPageData, options);
            _context.t10 = (0, _context.t1)(_context.t8, _context.t9);
            _context.t11 = {};
            _context.t12 = {
              reg: regData,
              sub: userLongTermData.sub,
              geo: userLongTermData.geo || {},
              v: userLongTermData.v,
              bc: segments
            };
            facts = (0, _context.t0)(_context.t10, _context.t11, _context.t12);

            if (!facts.rc) {
              facts.rc = {};
            }

            if (!facts.v || facts.v.lastUpdated && Object(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_16__["checkForFirstOfMonth"])(facts.v.lastUpdated)) {
              facts.v = {
                ci: [],
                lastUpdated: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8___default()()
              };
            } //Iterates through the user read counts and checks whether or not they need to be
            //cleared dependent on the current date/time and the budget type for that particular rule.


            _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(facts.rc).forEach(function (ruleId) {
              var i = rules.findIndex(function (rule) {
                return rule.id == ruleId;
              });
              var budget = (rules[i] || {}).budget || {};
              var clear = false;
              clear = Object(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_16__["checkNeedToClear"])(budget, facts.rc[ruleId]);
              facts.rc[ruleId] = clear ? {
                c: 0,
                r: [],
                lastUpdated: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8___default()()
              } : facts.rc[ruleId];
            });

            if (!(Object(_utils_expiration_js__WEBPACK_IMPORTED_MODULE_15__["isExpired"])(facts.sub && facts.sub.updated, 1000 * 60 * 60 * 24) || shouldFetchSubs || facts.sub.entitlementsFailed)) {
              _context.next = 41;
              break;
            }

            _context.next = 37;
            return Object(_factGathering_entitlements__WEBPACK_IMPORTED_MODULE_14__["getSubData"])(options);

          case 37:
            subData = _context.sent;
            facts.sub = {
              p: subData.p,
              updated: subData.updated,
              timeTaken: subData.timeTaken,
              entitlementsFailed: subData.entitlementsFailed
            };

            if (subData.geo) {
              facts.geo = _objectSpread(_objectSpread({}, subData.geo), {}, {
                updated: subData.updated
              });
            }

            if (subData.p && subData.p.length) {
              facts.reg = {
                l: true,
                updated: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8___default()()
              };
            }

          case 41:
            return _context.abrupt("return", facts);

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getFacts.apply(this, arguments);
}

function getBlueConicSegments(_x, _x2) {
  return _getBlueConicSegments.apply(this, arguments);
}

function _getBlueConicSegments() {
  _getBlueConicSegments = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2(options, userName) {
    var Identity, loggedIn, segments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(window && options && options.blueConicClient)) {
              _context2.next = 11;
              break;
            }

            bcCreateProfile = options.blueConicClient.profile.createProfile;
            Identity = options.Identity || window.Identity;

            if (!(typeof Identity !== 'undefined' && Identity.isLoggedIn)) {
              _context2.next = 11;
              break;
            }

            _context2.next = 6;
            return Identity.isLoggedIn();

          case 6:
            loggedIn = _context2.sent;

            if (userName !== 'anonymous' && !loggedIn) {
              options.blueConicClient && options.blueConicClient.profile && options.blueConicClient.profile.createProfile();
            }

            segments = options.blueConicClient.getSegments();
            segments = _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_10___default()(segments) && segments.map(function (seg) {
              return seg.name;
            });
            return _context2.abrupt("return", segments);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getBlueConicSegments.apply(this, arguments);
}

function getUserName(options) {
  var Identity = options.Identity || window.Identity;

  if (options.userName) {
    return options.userName;
  }

  if (typeof Identity !== 'undefined' && Identity.userIdentity && Identity.userIdentity.uuid) {
    return Identity.userIdentity.uuid;
  }

  var uuid;

  try {
    var userInfo = JSON.parse(localStorage.getItem('ArcId.USER_INFO') || '{}');
    var sessionUserInfo = JSON.parse(sessionStorage.getItem('ArcId.USER_INFO') || '{}');
    uuid = userInfo.uuid || sessionUserInfo.uuid;
  } catch (e) {
    console.error('[ArcP]: Error finding user info in browser storage', e);
  }

  if (uuid) {
    return uuid;
  }

  return 'anonymous';
}

if (window) {
  window.addEventListener('ArcSDK.logout', function () {
    bcCreateProfile();
  });
}

/***/ }),

/***/ "./src/paywall.js":
/*!************************!*\
  !*** ./src/paywall.js ***!
  \************************/
/*! exports provided: _facts, _rules, _version, _publishTimestamp, paused, reset, run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_facts", function() { return _facts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_rules", function() { return _rules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_version", function() { return _version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_publishTimestamp", function() { return _publishTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paused", function() { return paused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _facts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./facts */ "./src/facts.js");
/* harmony import */ var _factGathering_entitlements__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./factGathering/entitlements */ "./src/factGathering/entitlements.js");
/* harmony import */ var _arc_paywall_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @arc/paywall-core */ "../paywall-core/lib/index.js");
/* harmony import */ var _arc_paywall_core__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./storage/storage */ "./src/storage/storage.js");
/* harmony import */ var _utils_cleanUp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/cleanUp */ "./src/utils/cleanUp.js");
/* harmony import */ var _utils_jwt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/jwt */ "./src/utils/jwt.js");












function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_7___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_8___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default()(source, key)); }); } return target; }





function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a !== "undefined" && o[_babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default.a] || o["@@iterator"]; if (!it) { if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_12___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var _facts = {};
var _rules = ArcPWRules;
var _version = "1.67.0";
var _publishTimestamp = typeof ArcPWPublishTimestamp === 'undefined' ? false : ArcPWPublishTimestamp;
var paused = typeof ArcPWPaused === 'undefined' ? false : ArcPWPaused;

function fetchEntitlements() {
  return _fetchEntitlements.apply(this, arguments);
}

function _fetchEntitlements() {
  _fetchEntitlements = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee() {
    var options,
        subData,
        _args = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            _context.next = 3;
            return Object(_factGathering_entitlements__WEBPACK_IMPORTED_MODULE_16__["getSubData"])(options);

          case 3:
            _context.t0 = _context.sent;

            if (_context.t0) {
              _context.next = 6;
              break;
            }

            _context.t0 = {};

          case 6:
            subData = _context.t0;
            _facts.sub = {
              p: subData.p,
              updated: subData.updated,
              timeTaken: subData.timeTaken,
              entitlementsFailed: subData.entitlementsFailed
            };
            return _context.abrupt("return", _facts.sub);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchEntitlements.apply(this, arguments);
}

function executePaywall() {
  var triggeringRule = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    rule: {
      pw: ''
    }
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      paywallFunction = _ref.paywallFunction;

  _facts.v.ci = _facts.v.ci.filter(function (ci) {
    return _facts.ci !== ci;
  }); // remove the visit

  paywallFunction(triggeringRule.rule.pw); // run paywall function.

  delete triggeringRule.rule; // delete the actual rule so it only returns relevant data.

  return triggeringRule;
}

function storeReaderId() {
  return _storeReaderId.apply(this, arguments);
}
/**
 *
 *
 * @export
 * @param {object} triggeringRules an object with
 * @param {*} options
 * @returns
 */


function _storeReaderId() {
  _storeReaderId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee2() {
    var options,
        jwt,
        _args2 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
            _context2.next = 3;
            return Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_20__["getJWT"])(options);

          case 3:
            jwt = _context2.sent;

            if (jwt && !Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_20__["isJwtExpired"])(jwt)) {
              options.AMP.checkAMPReaderID(options.ampReaderId);
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _storeReaderId.apply(this, arguments);
}

function checkExemptions() {
  return _checkExemptions.apply(this, arguments);
}

function _checkExemptions() {
  _checkExemptions = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee3() {
    var triggeringRules,
        options,
        entitlements,
        ENTITLEMENTS_FETCHED,
        isSwgExempt,
        _iterator,
        _step,
        triggeringRule,
        isExempt,
        _args3 = arguments;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            triggeringRules = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
            options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            entitlements = _facts.sub;
            ENTITLEMENTS_FETCHED = false; // fetch entitlements regardless of logged in status (for ip entitlements)

            if (!(!entitlements || !entitlements.p || !entitlements.p.length)) {
              _context3.next = 9;
              break;
            }

            _context3.next = 7;
            return fetchEntitlements(options);

          case 7:
            entitlements = _context3.sent;
            ENTITLEMENTS_FETCHED = true;

          case 9:
            if (!(triggeringRules.length && options.swg && options.isSwgEntitledCheck && typeof options.isSwgEntitledCheck === 'function')) {
              _context3.next = 20;
              break;
            }

            _context3.prev = 10;
            _context3.next = 13;
            return options.isSwgEntitledCheck();

          case 13:
            isSwgExempt = _context3.sent;
            _context3.next = 19;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](10);
            console.error('Error checking SwG entitlements: ', _context3.t0);

          case 19:
            if (!isSwgExempt) {
              options.swg.getEntitlements().then(options.swgEntitlementsHandler);
            }

          case 20:
            _iterator = _createForOfIteratorHelper(triggeringRules);
            _context3.prev = 21;

            _iterator.s();

          case 23:
            if ((_step = _iterator.n()).done) {
              _context3.next = 37;
              break;
            }

            triggeringRule = _step.value;
            isExempt = Object(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_17__["isExemptToRule"])(triggeringRule.rule, _facts.sub, _facts.reg);

            if (!(!isExempt && !ENTITLEMENTS_FETCHED)) {
              _context3.next = 32;
              break;
            }

            _context3.next = 29;
            return fetchEntitlements(options);

          case 29:
            entitlements = _context3.sent;
            ENTITLEMENTS_FETCHED = true;
            isExempt = Object(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_17__["isExemptToRule"])(triggeringRule.rule, _facts.sub, _facts.reg);

          case 32:
            isExempt = isExempt || isSwgExempt;

            if (isExempt) {
              _context3.next = 35;
              break;
            }

            return _context3.abrupt("return", executePaywall(triggeringRule, options));

          case 35:
            _context3.next = 23;
            break;

          case 37:
            _context3.next = 42;
            break;

          case 39:
            _context3.prev = 39;
            _context3.t1 = _context3["catch"](21);

            _iterator.e(_context3.t1);

          case 42:
            _context3.prev = 42;

            _iterator.f();

            return _context3.finish(42);

          case 45:
            return _context3.abrupt("return", null);

          case 46:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[10, 16], [21, 39, 42, 45]]);
  }));
  return _checkExemptions.apply(this, arguments);
}

function getFactsAndEvaluateRules() {
  return _getFactsAndEvaluateRules.apply(this, arguments);
}
/**
 * Resets the paywall data in long term stores.
 * @param {Storage} longTermStore - optional - a class implementing getItem, setItem, and removeItem.
 *
 * @returns {Promise}
 */


function _getFactsAndEvaluateRules() {
  _getFactsAndEvaluateRules = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee4() {
    var _rules,
        options,
        longTermData,
        alreadyVisited,
        triggeringRules,
        _args4 = arguments;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _rules = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : [];
            options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            _context4.next = 4;
            return _storage_storage__WEBPACK_IMPORTED_MODULE_18__["longTermStore"].getItem("ArcP");

          case 4:
            _context4.t0 = _context4.sent;

            if (_context4.t0) {
              _context4.next = 7;
              break;
            }

            _context4.t0 = {};

          case 7:
            longTermData = _context4.t0;
            _context4.next = 10;
            return Object(_facts__WEBPACK_IMPORTED_MODULE_15__["getFacts"])(longTermData || {}, options, _rules);

          case 10:
            _facts = _context4.sent;
            alreadyVisited = _facts.v.ci.indexOf(_facts.ci) >= 0;
            triggeringRules = null; // evaluate ruleset

            if (!alreadyVisited && !paused) {
              triggeringRules = Object(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_17__["evaluateRuleset"])(_rules, _facts, options);
            }

            return _context4.abrupt("return", {
              alreadyVisited: alreadyVisited,
              triggeringRules: triggeringRules,
              _facts: _facts
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getFactsAndEvaluateRules.apply(this, arguments);
}

function reset(longTerm) {
  if (!longTerm) {
    Object(_storage_storage__WEBPACK_IMPORTED_MODULE_18__["initStorage"])(longTerm);
  }

  return _storage_storage__WEBPACK_IMPORTED_MODULE_18__["longTermStore"].setItem("ArcP", {});
}
/**
 * Runs paywall script by fetching facts from various sources and then evaluating the ruleset against those facts
 * @param {object} options - an object with optional functions to use to gather and store data (please see docs for more)
 * @param {Array} ruleset - An array containing rulesets. This should only be used for testing.
 *
 * @returns {Promise} - Returns `Promise.resolve({
        triggered: Array,
        timeTaken: Number,
        evaluated: Boolean,
        ruleCount: Number
      })`, or `Promise.reject(error)` if any error occured.
 */

function run() {
  return _run.apply(this, arguments);
} // Auto run to enable async loading of this script

function _run() {
  _run = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee5() {
    var options,
        ruleset,
        start,
        longTermData,
        userName,
        _yield$getFactsAndEva,
        alreadyVisited,
        triggeringRules,
        facts,
        paywallingRule,
        results,
        _args5 = arguments;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            options = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
            ruleset = _args5.length > 1 ? _args5[1] : undefined;

            if (ruleset) {
              _rules = ruleset;
            }

            if (!_storage_storage__WEBPACK_IMPORTED_MODULE_18__["longTermStore"]) {
              Object(_storage_storage__WEBPACK_IMPORTED_MODULE_18__["initStorage"])(options.longTermStorage);
            }

            if (!(typeof options.paywallFunction !== 'function')) {
              _context5.next = 6;
              break;
            }

            throw new Error("".concat("[ArcP]", " No valid paywallFunction defined -- bailing out"));

          case 6:
            start = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default()();
            _context5.next = 9;
            return _storage_storage__WEBPACK_IMPORTED_MODULE_18__["longTermStore"].getItem("ArcP");

          case 9:
            _context5.t0 = _context5.sent;

            if (_context5.t0) {
              _context5.next = 12;
              break;
            }

            _context5.t0 = {};

          case 12:
            longTermData = _context5.t0;
            userName = Object(_facts__WEBPACK_IMPORTED_MODULE_15__["getUserName"])(options);

            if (!(options.ampReaderId && options.AMP)) {
              _context5.next = 17;
              break;
            }

            _context5.next = 17;
            return storeReaderId(options);

          case 17:
            _context5.next = 19;
            return getFactsAndEvaluateRules(_rules, options);

          case 19:
            _yield$getFactsAndEva = _context5.sent;
            alreadyVisited = _yield$getFactsAndEva.alreadyVisited;
            triggeringRules = _yield$getFactsAndEva.triggeringRules;
            facts = _yield$getFactsAndEva._facts;
            _facts = facts;
            paywallingRule = null; // check entitlements and other exemptions

            if (!(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_12___default()(triggeringRules) && triggeringRules.length)) {
              _context5.next = 29;
              break;
            }

            _context5.next = 28;
            return checkExemptions(triggeringRules, options);

          case 28:
            paywallingRule = _context5.sent;

          case 29:
            _context5.next = 31;
            return _storage_storage__WEBPACK_IMPORTED_MODULE_18__["longTermStore"].setItem("ArcP", _objectSpread(_objectSpread({}, longTermData), {}, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()({}, userName, _objectSpread(_objectSpread({}, longTermData[userName]), _facts))));

          case 31:
            results = {
              triggered: paywallingRule,
              timeTaken: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default()() - start,
              visited: alreadyVisited,
              paused: paused,
              ruleCount: _rules.length,
              private: _facts.pm
            };

            if (typeof options.resultsCallback === 'function') {
              options.resultsCallback(results);
            }

            window.postMessage({
              type: 'FROM_PJS',
              ArcP: JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_13___default()(window.ArcP)),
              results: results
            }, '*'); // clean up irrelevant counts

            _context5.next = 36;
            return Object(_utils_cleanUp__WEBPACK_IMPORTED_MODULE_19__["default"])(userName, _storage_storage__WEBPACK_IMPORTED_MODULE_18__["longTermStore"], _rules);

          case 36:
            return _context5.abrupt("return", results);

          case 37:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _run.apply(this, arguments);
}

if (typeof window["ArcPOptions"] !== 'undefined') {
  setTimeout(function () {
    window.ArcP.run(window["ArcPOptions"]);
  }, 1); // run at the end of the execution stack to ensure everything is loaded.
}

/***/ }),

/***/ "./src/storage/browserStorage.js":
/*!***************************************!*\
  !*** ./src/storage/browserStorage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrowserStorage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);





var BrowserStorage = /*#__PURE__*/function () {
  function BrowserStorage() {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BrowserStorage);

    this.store = localStorage;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BrowserStorage, [{
    key: "getItem",
    value: function getItem(key) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(JSON.parse(this.store.getItem(key)));
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(this.store.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(value)));
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(this.store.removeItem(key));
    }
  }]);

  return BrowserStorage;
}();



/***/ }),

/***/ "./src/storage/cookieStorage.js":
/*!**************************************!*\
  !*** ./src/storage/cookieStorage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieStorage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);





// based on https://github.com/marcuswestin/stores/cookieStore.js
var CookieStorage = /*#__PURE__*/function () {
  function CookieStorage(isSession) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CookieStorage);

    this.isSession = isSession;
    this.doc = document;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CookieStorage, [{
    key: "getItem",
    value: function getItem(key) {
      if (!key || !this._has(key)) {
        return null;
      }

      var regexpStr = '(?:^|.*;\\s*)' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*';
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(JSON.parse(decodeURIComponent(this.doc.cookie.replace(new RegExp(regexpStr), '$1'))));
    }
  }, {
    key: "setItem",
    value: function setItem(key, data) {
      if (!key) {
        return;
      }

      this.doc.cookie = "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(data)), "; ").concat(this.isSession ? '' : 'expires=Tue, 19 Jan 2038 03:14:07 GMT; ', " path=/");
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(data);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      if (!key || !this._has(key)) {
        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.reject('No such key in the store');
      }

      this.doc.cookie = encodeURIComponent(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve();
    }
  }, {
    key: "_has",
    value: function _has(key) {
      return new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=').test(this.doc.cookie);
    }
  }]);

  return CookieStorage;
}();


var doc = document;

/***/ }),

/***/ "./src/storage/storage.js":
/*!********************************!*\
  !*** ./src/storage/storage.js ***!
  \********************************/
/*! exports provided: longTermStore, setLongTermStorage, initStorage, initStorageWithDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longTermStore", function() { return longTermStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLongTermStorage", function() { return setLongTermStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStorage", function() { return initStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStorageWithDefaults", function() { return initStorageWithDefaults; });
/* harmony import */ var _cookieStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookieStorage */ "./src/storage/cookieStorage.js");
/* harmony import */ var _browserStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browserStorage */ "./src/storage/browserStorage.js");


var longTermStore;
function setLongTermStorage(storage) {
  longTermStore = storage;
}
function initStorage(longTerm) {
  if (longTerm) {
    setLongTermStorage(longTerm);
  } else {
    initStorageWithDefaults('longTerm');
  }
}
function initStorageWithDefaults(type) {
  try {
    // check if we can write to localstorage
    var testKey = "".concat("ArcP", ".test");

    if (type === 'longTerm' || !type) {
      window.localStorage.setItem(testKey, 'testValue');
      window.localStorage.removeItem(testKey);
      setLongTermStorage(new _browserStorage__WEBPACK_IMPORTED_MODULE_1__["default"]());
    }
  } catch (_) {
    if (type === 'longTerm' || !type) {
      setLongTermStorage(new _cookieStorage__WEBPACK_IMPORTED_MODULE_0__["default"](false));
    }
  }
}

/***/ }),

/***/ "./src/utils/cleanUp.js":
/*!******************************!*\
  !*** ./src/utils/cleanUp.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cleanUp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_9__);




function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_8___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_9___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default()(source, key)); }); } return target; }









/**
 * Removes unused counts.
 * If a readcount has an id which doesn't have a corresponding one in the ruleset, it will get deleted.
 * The result will be stored into the store passed in.
 *
 */
function cleanUp(_x, _x2, _x3) {
  return _cleanUp.apply(this, arguments);
}

function _cleanUp() {
  _cleanUp = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(userName, longTermStore, rules) {
    var storedData, userCounts;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!rules || !_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default()(rules) || rules.length === 0)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            if (!(!longTermStore || typeof longTermStore.getItem !== 'function')) {
              _context.next = 4;
              break;
            }

            throw new Error("".concat("[ArcP]", " invalid storage class passed to cleanUp util"));

          case 4:
            _context.next = 6;
            return longTermStore.getItem("ArcP");

          case 6:
            storedData = _context.sent;

            if (!(!storedData || !storedData[userName])) {
              _context.next = 9;
              break;
            }

            throw new Error("".concat("[ArcP]", " no data found for this user"));

          case 9:
            userCounts = storedData[userName].rc;

            _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(userCounts).forEach(function (key) {
              if (!rules.find(function (rule) {
                return rule.id === Number(key);
              })) {
                delete userCounts[key];
              }
            });

            _context.next = 13;
            return longTermStore.setItem("ArcP", _objectSpread(_objectSpread({}, storedData), {}, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, userName, _objectSpread(_objectSpread({}, storedData[userName]), {}, {
              rc: _objectSpread({}, userCounts)
            }))));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _cleanUp.apply(this, arguments);
}

/***/ }),

/***/ "./src/utils/expiration.js":
/*!*********************************!*\
  !*** ./src/utils/expiration.js ***!
  \*********************************/
/*! exports provided: isExpired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpired", function() { return isExpired; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Checks if a timestamp is older than the allowed threshold.
 *
 * @export
 * @param {Number} timeStamp - timeStamp in milliseconds from epoch.
 * @param {Number} threshold - threshold of what constitutes an expired timeStamp in milliseconds.
 * @returns {Boolean} false if it hasn't expired yet or if no timeStamp was found.
 */
function isExpired(timeStamp, threshold) {
  if (!timeStamp) {
    return true;
  } else {
    return _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - timeStamp >= threshold;
  }
}

/***/ }),

/***/ "./src/utils/jwt.js":
/*!**************************!*\
  !*** ./src/utils/jwt.js ***!
  \**************************/
/*! exports provided: parseJwt, isJwtExpired, default, getJWT, refreshJwt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJwt", function() { return parseJwt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJwtExpired", function() { return isJwtExpired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JSONResponseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJWT", function() { return getJWT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshJwt", function() { return refreshJwt; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_11__);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, key)); }); } return target; }




function parseJwt() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  try {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  } catch (e) {
    console.error("Error parsing access token: ".concat(token, "\n    ").concat(e));
  }
}
function isJwtExpired(token) {
  try {
    var jwtPayload = parseJwt(token);
    return 1000 * jwtPayload.exp <= _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9___default()(); // jwt dates are in seconds since epoch, hence "1000 *"
  } catch (e) {
    console.error("Error checking token expiry: ".concat(token, "\n    ").concat(e));
    return true;
  }
}
function JSONResponseHandler(_x) {
  return _JSONResponseHandler.apply(this, arguments);
}

function _JSONResponseHandler() {
  _JSONResponseHandler = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee(response) {
    var responseText, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return response.text();

          case 2:
            responseText = _context.sent;
            _context.prev = 3;
            data = JSON.parse(responseText);
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](3);

            if (!((response.status / 100 | 0) === 2)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_11___default.a.resolve({
              message: responseText
            }));

          case 14:
            return _context.abrupt("return", _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_11___default.a.resolve({
              code: response.status,
              message: responseText,
              httpStatus: response.status,
              error: true
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 8]]);
  }));
  return _JSONResponseHandler.apply(this, arguments);
}

function getJWT(_x2) {
  return _getJWT.apply(this, arguments);
}

function _getJWT() {
  _getJWT = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee2(options) {
    var Identity, userInfo, selectedStorage, localUserInfo, sessionUserInfo, accessToken, refreshToken, newAccessToken;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Identity = options.Identity || window.Identity;

            if (options.jwt) {
              _context2.next = 30;
              break;
            }

            _context2.prev = 2;

            if (!(typeof Identity !== 'undefined' && Identity.userIdentity)) {
              _context2.next = 13;
              break;
            }

            _context2.next = 6;
            return Identity.heartbeat();

          case 6:
            if (!Identity.userIdentity.accessToken) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", Identity.userIdentity.accessToken);

          case 10:
            return _context2.abrupt("return", null);

          case 11:
            _context2.next = 22;
            break;

          case 13:
            try {
              localUserInfo = JSON.parse(localStorage.getItem('ArcId.USER_INFO') || '{}');
              sessionUserInfo = JSON.parse(sessionStorage.getItem('ArcId.USER_INFO') || '{}');

              if (localUserInfo && localUserInfo.uuid && localUserInfo.accessToken && localUserInfo.refreshToken) {
                selectedStorage = localStorage;
                userInfo = localUserInfo;
              } else if (sessionUserInfo && sessionUserInfo.uuid && sessionUserInfo.accessToken && sessionUserInfo.refreshToken) {
                selectedStorage = sessionStorage;
                userInfo = sessionUserInfo;
              }
            } catch (e) {
              console.error('[ArcP]: Error finding user info in browser storage', e);
            }

            accessToken = userInfo && userInfo.accessToken;
            refreshToken = userInfo && userInfo.refreshToken;

            if (!(accessToken && !isJwtExpired(accessToken) && !options.jwt)) {
              _context2.next = 18;
              break;
            }

            return _context2.abrupt("return", accessToken);

          case 18:
            _context2.next = 20;
            return refreshJwt({
              accessToken: accessToken,
              refreshToken: refreshToken,
              selectedStorage: selectedStorage,
              userInfo: userInfo,
              options: options,
              apiOrigin: options.identityApiOrigin || options.apiOrigin
            });

          case 20:
            newAccessToken = _context2.sent;
            return _context2.abrupt("return", newAccessToken);

          case 22:
            _context2.next = 28;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](2);
            console.error('[ArcP]: error getting or refreshing tokens from storage', _context2.t0);
            return _context2.abrupt("return", null);

          case 28:
            _context2.next = 31;
            break;

          case 30:
            return _context2.abrupt("return", options.jwt);

          case 31:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 24]]);
  }));
  return _getJWT.apply(this, arguments);
}

var refreshJwt = function refreshJwt(_ref) {
  var apiOrigin = _ref.apiOrigin,
      accessToken = _ref.accessToken,
      refreshToken = _ref.refreshToken,
      userInfo = _ref.userInfo,
      options = _ref.options,
      selectedStorage = _ref.selectedStorage;

  if (refreshToken && accessToken && isJwtExpired(accessToken) && !isJwtExpired(refreshToken)) {
    var origin = 'https://' + apiOrigin.replace(/^https?:\/\//, '');
    return fetch("".concat(origin, "/identity/public/v1/auth/token"), {
      method: 'POST',
      headers: _objectSpread({
        'Content-Type': 'application/json'
      }, options.headers),
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10___default()({
        token: refreshToken,
        grantType: 'refresh-token'
      })
    }).then(JSONResponseHandler).then(function (json) {
      var newUserInfo = _objectSpread(_objectSpread({}, userInfo), {}, {
        accessToken: json.accessToken,
        refreshToken: json.refreshToken || refreshToken
      });

      if (json.accessToken) {
        if (json.refreshToken) {
          selectedStorage.setItem('ArcId.USER_INFO', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10___default()(newUserInfo));
        }

        return json.accessToken;
      }

      if (json.code) {
        console.warn("$[Arc Identity SDK] code:\"".concat(json.code, "\", message:\"").concat(json.message, "\""));
        throw json;
      }
    });
  }

  if (refreshToken && isJwtExpired(refreshToken)) {
    throw new Error('$[Arc Identity SDK] Refresh token is expired');
  } else {
    throw new Error('$[Arc Identity SDK] No refresh token found for this session');
  }
};

/***/ }),

/***/ "./src/utils/url.js":
/*!**************************!*\
  !*** ./src/utils/url.js ***!
  \**************************/
/*! exports provided: getHostnameFromURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHostnameFromURL", function() { return getHostnameFromURL; });
function getHostnameFromURL(url) {
  var a = document.createElement('a');
  a.href = url;
  return a.hostname;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4uL3BheXdhbGwtY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvYXJyYXkvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9kYXRlL25vdy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9kYXRlL25vdy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5kYXRlLm5vdy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZmFjdEdhdGhlcmluZy9icm93c2VyRGF0YS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZmFjdEdhdGhlcmluZy9lbnRpdGxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2ZhY3RHYXRoZXJpbmcvcGFnZURhdGEuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2ZhY3RHYXRoZXJpbmcvcmVhZENvdW50cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZmFjdHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3BheXdhbGwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3N0b3JhZ2UvYnJvd3NlclN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3N0b3JhZ2UvY29va2llU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvc3RvcmFnZS9zdG9yYWdlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy91dGlscy9jbGVhblVwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy91dGlscy9leHBpcmF0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy91dGlscy9qd3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3V0aWxzL3VybC5qcyJdLCJuYW1lcyI6WyJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJUeXBlRXJyb3IiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiaXNBcnJheSIsImxlbiIsImFycjIiLCJldmFsdWF0aW9uVGVjaG5pcXVlcyIsImV2YWx1YXRlU2NhbGFyIiwiYmluZCIsImV2YWx1YXRlTWF0Y2giLCJ0cnVlIiwiZXZhbHVhdGVJbiIsImZhbHNlIiwiTE9HX1BSRUZJWCIsInNhbWVEYXkiLCJ0aW1lc3RhbXAiLCJjb21wYXJlZFRpbWVzdGFtcCIsInRpbWUiLCJEYXRlIiwiY29tcGFyZWQiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImNoZWNrRm9yRmlyc3RPZk1vbnRoIiwidGltZVN0YW1wIiwidW5kZWZpbmVkIiwibm93IiwidG9kYXkiLCJsYXN0VXBkYXRlZCIsImNoZWNrRGF5T2ZXZWVrIiwiZGF5VG9DbGVhciIsIndlZWtkYXlzIiwiZ2V0RGF5IiwiaW5kZXhPZiIsImNsZWFyRXhwaXJlZFJvbGxpbmdDb3VudHMiLCJmYWN0Q291bnRzIiwicm9sbGluZ0NvdW50Iiwicm9sbGluZ0hvdXJzIiwiY291bnRzIiwibWFwIiwiY291bnQiLCJkaWZmIiwiTWF0aCIsImFicyIsImRhdGUiLCJzcGxpY2UiLCJjaGVja1JvbGxpbmdDb3VudCIsInJ1bGUiLCJyZWFkQ291bnRzIiwiaWQiLCJyb2xsaW5nRGF5cyIsImJ1ZGdldCIsInJvbGxpbmdMZW5ndGgiLCJyIiwic2hpZnQiLCJjIiwiY2hlY2tOZWVkVG9DbGVhciIsImJ1ZGdldFR5cGUiLCJjYWxlbmRhclR5cGUiLCJjYWxlbmRhcldlZWtEYXkiLCJhZGRSZWFkQ291bnQiLCJpc1JvbGxpbmciLCJjdXJyZW50Q291bnRGb3JJZCIsInVwZGF0ZWRSZWFkQ291bnRzIiwicmVhZCIsInJlZHVjZSIsImEiLCJiIiwiaXNFeGVtcHRUb1J1bGUiLCJzdWIiLCJyZWciLCJlIiwibCIsImlzRXhlbXB0IiwicCIsInNvbWUiLCJza3UiLCJldmFsdWF0ZSIsImlzRW50aXRsZW1lbnRzRmFpbGluZyIsImVudGl0bGVtZW50c0ZhaWxlZCIsIm1vZGlmaWVyIiwiY29uZGl0aW9ucyIsImZhY3QiLCJyZWdleHBDcmVhdG9yIiwiY29uZGl0aW9uIiwicmVzdWx0IiwicmVnZXhwIiwiaXRlbSIsImluY2x1ZGVzIiwiaXNOYU4iLCJwYXJzZUludCIsImNoZWNrQ29uZGl0aW9uUGFyYW1zIiwibWF0Y2hlciIsImV2YWx1YXRlUnVsZXNldCIsInJ1bGVzZXQiLCJmYWN0cyIsIkVycm9yIiwiY29uY2F0IiwidHJpZ2dlcmluZ1J1bGVzIiwiZCIsInMiLCJjciIsImNvbnRpbmVudCIsImdlbyIsImNpdHkiLCJjb3VudHJ5X2NvZGUiLCJkbWEiLCJnZW9yZWdpb24iLCJiYyIsInJjIiwicnQiLCJ2IiwiY2kiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsInBhcnNlUmVmZXJyZXIiLCJFTlYiLCJyZWZlcnJlciIsImdldEhvc3RuYW1lRnJvbVVSTCIsImRvY3VtZW50IiwiZ2V0UmVmZXJyZXIiLCJnZXRBdWRpZW5jZSIsImRhdGEiLCJwYXJzZURldmljZUNsYXNzIiwidXNlckFnZW50Iiwid2luZG93IiwibmF2aWdhdG9yIiwiaXNNb2JpbGVVc2VyQWdlbnQiLCJpc1RhYmxldFVzZXJBZ2VudCIsImdldERldmljZUNsYXNzIiwiaXNQcml2YXRlTW9kZSIsImlzSW5jb2duaXRvIiwiY2hyb21lIiwic3RvcmFnZSIsImVzdGltYXRlIiwicXVvdGEiLCJmcyIsIlJlcXVlc3RGaWxlU3lzdGVtIiwid2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0iLCJURU1QT1JBUlkiLCJIVE1MRWxlbWVudCIsInRlc3RLZXkiLCJTVE9SRV9OQU1FIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJvcGVuRGF0YWJhc2UiLCJfIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXJ2aWNlV29ya2VyIiwiUG9pbnRlckV2ZW50IiwiTVNQb2ludGVyRXZlbnQiLCJpbmRleGVkREIiLCJnZXRCcm93c2VyRGF0YSIsImxvbmdUZXJtRGF0YSIsInBtIiwiRUNIT19TVE9SRV9OQU1FIiwiZGVmYXVsdFN1YnNjcmlwdGlvbkNoZWNrIiwib3B0aW9ucyIsInN0YXJ0IiwidXJsIiwiYXBpT3JpZ2luIiwidGltZVRha2VuIiwidXBkYXRlZCIsImhlYWRlcnMiLCJnZXRKV1QiLCJqd3QiLCJpc0p3dEV4cGlyZWQiLCJBdXRob3JpemF0aW9uIiwiYW1wUmVhZGVySWQiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwic2t1cyIsImVudGl0bGVtZW50IiwiZWRnZXNjYXBlIiwiZ2V0U3ViRGF0YSIsInN1YkNoZWNrIiwiY3VzdG9tU3ViQ2hlY2siLCJsb25nVGVybVN0b3JlIiwiZ2V0SXRlbSIsImJyb3dzZXJEYXRhIiwidXNlck5hbWUiLCJnZXRVc2VyTmFtZSIsInVzZXJCcm93c2VyRGF0YSIsImVudGl0bGVtZW50cyIsImRlZmF1bHRTaG91bGRGZXRjaFN1YnNDaGVjayIsImVjaG9FbmRwb2ludCIsInByZXZFY2hvIiwibmV4dEVjaG9SZXNwb25zZSIsImh0dHBTdGF0dXMiLCJjb25zb2xlIiwiZXJyb3IiLCJjb2RlIiwibWVzc2FnZSIsImVkZ2VkYXRhIiwic2hvdWxkRmV0Y2hTdWJzIiwic2hvdWxkRmV0Y2hTdWJzQ2hlY2siLCJjdXN0b21TaG91bGRGZXRjaFN1YnNDaGVjayIsImRlZmF1bHRSZWdpc3RyYXRpb25DaGVjayIsImlzTG9nZ2VkSW4iLCJBTVBTZXNzaW9uRXhwaXJhdGlvbiIsImN1c3RvbUFNUEV4cGlyYXRpb24iLCJBTVAiLCJhdXRoZW50aWNhdGVBTVBSZWFkZXJJRCIsInJlYWRlcklkU3RhdGUiLCJsaW5rZWRBcmNJZGVudGl0eSIsImxhc3RMb2dpbiIsImxhc3RMb2dvdXQiLCJnZXRSZWdEYXRhIiwicmVnQ2hlY2siLCJjdXN0b21SZWdDaGVjayIsImRlZmF1bHRHZXRQYWdlRGF0YSIsInNlY3Rpb24iLCJjb250ZW50VHlwZSIsImNvbnRlbnRSZXN0cmljdGlvbiIsImNvbnRlbnRJZGVudGlmaWVyIiwiY2Fub25pY2FsTGlua0VsIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsImdldFBhZ2VEYXRhIiwiY3VzdG9tUGFnZURhdGEiLCJnZXRSZWFkQ291bnRzIiwiYmNDcmVhdGVQcm9maWxlIiwiZ2V0RmFjdHMiLCJydWxlcyIsInJlZ0RhdGEiLCJnZXRCbHVlQ29uaWNTZWdtZW50cyIsInNlZ21lbnRzIiwidXNlckxvbmdUZXJtRGF0YSIsInJ1bGVJZCIsImZpbmRJbmRleCIsImNsZWFyIiwiaXNFeHBpcmVkIiwic3ViRGF0YSIsImJsdWVDb25pY0NsaWVudCIsInByb2ZpbGUiLCJjcmVhdGVQcm9maWxlIiwiSWRlbnRpdHkiLCJsb2dnZWRJbiIsImdldFNlZ21lbnRzIiwic2VnIiwidXNlcklkZW50aXR5IiwidXVpZCIsInVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblVzZXJJbmZvIiwic2Vzc2lvblN0b3JhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiX2ZhY3RzIiwiX3J1bGVzIiwiQXJjUFdSdWxlcyIsIl92ZXJzaW9uIiwiVkVSU0lPTiIsIl9wdWJsaXNoVGltZXN0YW1wIiwiQXJjUFdQdWJsaXNoVGltZXN0YW1wIiwicGF1c2VkIiwiQXJjUFdQYXVzZWQiLCJmZXRjaEVudGl0bGVtZW50cyIsImV4ZWN1dGVQYXl3YWxsIiwidHJpZ2dlcmluZ1J1bGUiLCJwdyIsInBheXdhbGxGdW5jdGlvbiIsInN0b3JlUmVhZGVySWQiLCJjaGVja0FNUFJlYWRlcklEIiwiY2hlY2tFeGVtcHRpb25zIiwiRU5USVRMRU1FTlRTX0ZFVENIRUQiLCJzd2ciLCJpc1N3Z0VudGl0bGVkQ2hlY2siLCJpc1N3Z0V4ZW1wdCIsImdldEVudGl0bGVtZW50cyIsInRoZW4iLCJzd2dFbnRpdGxlbWVudHNIYW5kbGVyIiwiZ2V0RmFjdHNBbmRFdmFsdWF0ZVJ1bGVzIiwiYWxyZWFkeVZpc2l0ZWQiLCJyZXNldCIsImxvbmdUZXJtIiwiaW5pdFN0b3JhZ2UiLCJydW4iLCJsb25nVGVybVN0b3JhZ2UiLCJwYXl3YWxsaW5nUnVsZSIsInJlc3VsdHMiLCJ0cmlnZ2VyZWQiLCJ2aXNpdGVkIiwicnVsZUNvdW50IiwicHJpdmF0ZSIsInJlc3VsdHNDYWxsYmFjayIsInBvc3RNZXNzYWdlIiwidHlwZSIsIkFyY1AiLCJjbGVhblVwIiwiT1BUSU9OUyIsInNldFRpbWVvdXQiLCJCcm93c2VyU3RvcmFnZSIsInN0b3JlIiwicmVzb2x2ZSIsIkNvb2tpZVN0b3JhZ2UiLCJpc1Nlc3Npb24iLCJkb2MiLCJfaGFzIiwicmVnZXhwU3RyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvb2tpZSIsIlJlZ0V4cCIsInJlamVjdCIsInNldExvbmdUZXJtU3RvcmFnZSIsImluaXRTdG9yYWdlV2l0aERlZmF1bHRzIiwic3RvcmVkRGF0YSIsInVzZXJDb3VudHMiLCJmaW5kIiwiTnVtYmVyIiwidGhyZXNob2xkIiwicGFyc2VKd3QiLCJ0b2tlbiIsImJhc2U2NFVybCIsInNwbGl0IiwiYmFzZTY0IiwiYXRvYiIsImp3dFBheWxvYWQiLCJleHAiLCJKU09OUmVzcG9uc2VIYW5kbGVyIiwidGV4dCIsInJlc3BvbnNlVGV4dCIsInN0YXR1cyIsImhlYXJ0YmVhdCIsImFjY2Vzc1Rva2VuIiwibG9jYWxVc2VySW5mbyIsInJlZnJlc2hUb2tlbiIsInNlbGVjdGVkU3RvcmFnZSIsInJlZnJlc2hKd3QiLCJpZGVudGl0eUFwaU9yaWdpbiIsIm5ld0FjY2Vzc1Rva2VuIiwib3JpZ2luIiwibWV0aG9kIiwiYm9keSIsImdyYW50VHlwZSIsIm5ld1VzZXJJbmZvIiwid2FybiIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiaG9zdG5hbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QTVCSSxDQUFQO0VBNkJEOztFQUNELElBQUk4SixZQUFZLElBQUlwSyxZQUFZLENBQUNvSyxZQUFELENBQWhDLEVBQWdEO0lBQzlDLE1BQU0sSUFBSTdPLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0VBQ0QsQ0FGRCxNQUVPO0lBQ0wsTUFBTSxJQUFJQSxLQUFKLENBQVUsNkRBQVYsQ0FBTjtFQUNEO0FBQ0YsQ0E3Q00sQzs7Ozs7Ozs7Ozs7O0FDekdQO0FBQUE7QUFBTyxTQUFTdUIsa0JBQVQsQ0FBNEIyQyxHQUE1QixFQUFpQztFQUN0QyxJQUFJaEcsQ0FBQyxHQUFHc0QsUUFBUSxDQUFDZ08sYUFBVCxDQUF1QixHQUF2QixDQUFSO0VBQ0F0UixDQUFDLENBQUN1UixJQUFGLEdBQVN2TCxHQUFUO0VBQ0EsT0FBT2hHLENBQUMsQ0FBQ3dSLFFBQVQ7QUFDRCxDIiwiZmlsZSI6IkFyY1AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG52YXIgZXZhbHVhdGlvblRlY2huaXF1ZXMgPSB7XG4gICc+JzogZXZhbHVhdGVTY2FsYXIuYmluZChudWxsLCAnPicpLFxuICAnPCc6IGV2YWx1YXRlU2NhbGFyLmJpbmQobnVsbCwgJzwnKSxcbiAgJz0nOiBldmFsdWF0ZVNjYWxhci5iaW5kKG51bGwsICc9JyksXG4gICchPSc6IGV2YWx1YXRlU2NhbGFyLmJpbmQobnVsbCwgJyE9JyksXG4gICcqJzogZXZhbHVhdGVNYXRjaC5iaW5kKG51bGwsIHRydWUpLFxuICAnISonOiBldmFsdWF0ZU1hdGNoLmJpbmQobnVsbCwgZmFsc2UpLFxuICB0cnVlOiBldmFsdWF0ZUluLmJpbmQobnVsbCwgdHJ1ZSksXG4gIGZhbHNlOiBldmFsdWF0ZUluLmJpbmQobnVsbCwgZmFsc2UpXG59O1xudmFyIExPR19QUkVGSVggPSAnW0FyY1BdJztcbi8qKlxuICogQ2hlY2tzIGlmIGEgdGltZXN0YW1wIGdpdmVuIGlzIHNhbWUgZGF5IGFzIGV4aXN0aW5nIHRpbWVzdGFtcFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lU3RhbXAgLSB0aW1lU3RhbXAgaW4gbWlsbGlzZWNvbmRzIGZyb20gZXBvY2guXG4gKiBAcGFyYW0ge051bWJlcn0gY29tcGFyZWRUaW1lc3RhbXAgLSB0aHJlc2hvbGQgb2Ygd2hhdCBjb25zdGl0dXRlcyBhbiBleHBpcmVkIHRpbWVTdGFtcCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBkYXRlcyBhcmUgdGhlIHNhbWUgZGF5XG4gKi9cblxudmFyIHNhbWVEYXkgPSBmdW5jdGlvbiBzYW1lRGF5KHRpbWVzdGFtcCwgY29tcGFyZWRUaW1lc3RhbXApIHtcbiAgdmFyIHRpbWUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuICB2YXIgY29tcGFyZWQgPSBuZXcgRGF0ZShjb21wYXJlZFRpbWVzdGFtcCk7XG4gIHJldHVybiB0aW1lLmdldEZ1bGxZZWFyKCkgPT09IGNvbXBhcmVkLmdldEZ1bGxZZWFyKCkgJiYgdGltZS5nZXRNb250aCgpID09PSBjb21wYXJlZC5nZXRNb250aCgpICYmIHRpbWUuZ2V0RGF0ZSgpID09PSBjb21wYXJlZC5nZXREYXRlKCk7XG59O1xuLyoqXG4gKiBDb21wYXJlcyBhIHRpbWVzdGFtcCB0byBzZWUgaWYgaXQgdG9kYXkgaXMgdGhlIGZpcnN0IG9mIHRoZSBtb250aCBidXQgdGhlIHRpbWVzdGFtcCBpc1xuICogZnJvbSBhIGRpZmZlcmVudCBkYXkgKHVzZWQgdG8gZXhwaXJlIHRoaW5ncyB3aGVuIHRoZSBuZXcgbW9udGggcm9sbHMgaW4pXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGFtcCAtIHRpbWVTdGFtcCBpbiBtaWxsaXNlY29uZHMgZnJvbSBlcG9jaC5cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufSAtIHRydWUgaWYgaXQgc2hvdWxkIGJlIGNsZWFyZWQgZmFsc2UgaWYgbm90LlxuICovXG5cblxuZnVuY3Rpb24gY2hlY2tGb3JGaXJzdE9mTW9udGgoKSB7XG4gIHZhciB0aW1lU3RhbXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IERhdGUubm93KCk7XG4gIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHZhciBsYXN0VXBkYXRlZCA9IG5ldyBEYXRlKHRpbWVTdGFtcCk7XG4gIHJldHVybiB0b2RheS5nZXRNb250aCgpID4gbGFzdFVwZGF0ZWQuZ2V0TW9udGgoKSB8fCB0b2RheS5nZXRGdWxsWWVhcigpID4gbGFzdFVwZGF0ZWQuZ2V0RnVsbFllYXIoKTtcbn1cbi8qKlxuICogQ29tcGFyZXMgYSBkYXkgb2YgdGhlIHdlZWsgc3RyaW5nIGFnYWluc3QgdG9kYXkncyBkYXkgb2YgdGhlIHdlZWsgKHVzZWQgdG8gZXhwaXJlIGlmIHdlZWtseSByZXNldCBjYWRlbmNlIHNlbGVjdGVkKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXlUb0NsZWFyIC0gZGF5IG9mIHRoZSB3ZWVrLiBcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgZXRjLlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGFtcCAtIHRpbWVTdGFtcCBpbiBtaWxsaXNlY29uZHMgZnJvbSBlcG9jaC5cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufSAtIHRydWUgaWYgaXQgc2hvdWxkIGJlIGNsZWFyZWQgZmFsc2UgaWYgbm90LlxuICovXG5cblxuZnVuY3Rpb24gY2hlY2tEYXlPZldlZWsoZGF5VG9DbGVhcikge1xuICB2YXIgdGltZVN0YW1wID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBEYXRlLm5vdygpO1xuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICB2YXIgbGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSh0aW1lU3RhbXApO1xuICB2YXIgd2Vla2RheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG5cbiAgaWYgKHRvZGF5IC0gbGFzdFVwZGF0ZWQgPiAxMDAwICogNjAgKiA2MCAqIDI0ICogNykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRvZGF5LmdldERheSgpID09PSB3ZWVrZGF5cy5pbmRleE9mKGRheVRvQ2xlYXIpICYmICFzYW1lRGF5KHRvZGF5LCBsYXN0VXBkYXRlZCk7XG59XG4vKipcbiAqIENoZWNrcyBpZiBhbnkgb2YgdGhlIGRheXMgc3RvcmVkIGluIHRoZSBmYWN0IGNvdW50IGFycmF5IGFyZSBleHBpcmVkXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZmFjdENvdW50cyAtIGFycmF5IG9mIG9iamVjdHMgY29udGFpbmluZyByZWFkIGNvdW50cyBwZXIgZGF5XG4gKiBAcGFyYW0ge051bWJlcn0gcm9sbGluZ0NvdW50IC0gbnVtYmVyIG9mIGRheXMgc3BlY2lmaWVkIGZvciB0aGlzIHJvbGxpbmcgYnVkZ2V0IHBlcmlvZFxuICogQHJldHVybnMge0FycmF5fSBhcnJheSBvZiBjb3VudHMgY29udGFpbmluZyBvbmx5IHRoZSBudW1iZXIgb2YgZGF5cyB3aXRoaW4gdGhlIHJvbGxpbmcgYnVkZ2V0IHBlcmlvZFxuICovXG5cblxuZnVuY3Rpb24gY2xlYXJFeHBpcmVkUm9sbGluZ0NvdW50cyhmYWN0Q291bnRzLCByb2xsaW5nQ291bnQpIHtcbiAgdmFyIHRvZGF5ID0gRGF0ZS5ub3coKTtcbiAgdmFyIHJvbGxpbmdIb3VycyA9IHJvbGxpbmdDb3VudCAqIDI0O1xuXG4gIHZhciBjb3VudHMgPSBfdG9Db25zdW1hYmxlQXJyYXkoZmFjdENvdW50cyk7XG5cbiAgZmFjdENvdW50cy5tYXAoZnVuY3Rpb24gKGNvdW50LCBpKSB7XG4gICAgdmFyIGRpZmYgPSBNYXRoLmFicyh0b2RheSAtIGNvdW50LmRhdGUpIC8gMTAwMCAvIDYwIC8gNjA7XG5cbiAgICBpZiAoZGlmZiA+IHJvbGxpbmdIb3Vycykge1xuICAgICAgY291bnRzLnNwbGljZShpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY291bnRzO1xufVxuLyoqXG4gKiBDaGVja3MgdG8gc2VlIGlmIHJlYWQgY291bnQgbmVlZHMgdG8gYmUgaW5jcmVtZW50ZWQgYW5kIGlmIHJvbGxpbmcgYXJyYXkgbmVlZHMgdG8gYmUgdXBkYXRlZFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBydWxlIFJ1bGUgd2hpY2ggdGhlIHJlYWQgY291bnQgc2hvdWxkIGJlIGFkZGVkIHRvXG4gKiBAcGFyYW0ge09iamVjdH0gcmVhZENvdW50cyAtIEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHByZXZpb3VzIHJlYWRjb3VudCBkYXRhIChmcm9tIGxvbmctdGVybSBzdG9yYWdlfVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gb2JqZWN0IGNvbnRhaW5pbmcgbmV3IHJlYWQgY291bnQgaW5mb3JtYXRpb25cbiAqL1xuXG5cbmZ1bmN0aW9uIGNoZWNrUm9sbGluZ0NvdW50KHJ1bGUpIHtcbiAgdmFyIHJlYWRDb3VudHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAvL0tlZXBzIHRyYWNrIG9mIHRoZSBudW1iZXIgb2YgY291bnRzIHBlciBkYXkgcGVyIHJ1bGVJZCBpbiB0aGUgcm9sbGluZyBhcnJheSAocikuIEVhY2ggcnVsZUlkIHN0b3JlcyBhbiBhcnJheSBvZiBvYmplY3RzXG4gIC8vd2l0aCBlYWNoIG9iamVjdCByZXByZXNlbnRpbmcgYSBkYXkgd2l0aGluIHRoZSByb2xsaW5nIHdpbmRvdy4gSWYgdGhlIHZpc2l0IGlzIG9uIHRoZSBzYW1lIGRheSB0aGUgbGFzdCBlbnRyeSBpbiB0aGUgYXJyYXksXG4gIC8vcmVhZCBjb3VudHMgZm9yIHRoYXQgZGF5IGFyZSBjb21iaW5lZC4gSWYgbm90LCBvbmUgY291bnQgaXMgcHVzaGVkIG9udG8gdGhlIGFycmF5IGZvciB0aGF0IGRheS4gSWYgdGhlIGFycmF5IGlzIGdvaW5nIHRvXG4gIC8vIGV4Y2VlZCB0aGUgbGVuZ3RoIG9mIHRoZSByb2xsaW5nIHdpbmRvdywgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGFycmF5IGlzIHJlbW92ZWQgYW5kIGEgbmV3IGRheSBpcyBwdXNoZWQgaW50byBpdC5cbiAgdmFyIGlkID0gcnVsZS5pZCxcbiAgICAgIHJvbGxpbmdEYXlzID0gcnVsZS5idWRnZXQucm9sbGluZ0RheXM7XG4gIHZhciByb2xsaW5nTGVuZ3RoID0gcmVhZENvdW50c1tpZF0uciAmJiByZWFkQ291bnRzW2lkXS5yLmxlbmd0aDtcblxuICBpZiAoISFyb2xsaW5nTGVuZ3RoICYmIHJvbGxpbmdMZW5ndGggPCByb2xsaW5nRGF5cyAmJiAhIXJlYWRDb3VudHNbaWRdLnJbcm9sbGluZ0xlbmd0aCAtIDFdLmRhdGUpIHtcbiAgICBpZiAoc2FtZURheShyZWFkQ291bnRzW2lkXS5yW3JvbGxpbmdMZW5ndGggLSAxXS5kYXRlLCBEYXRlLm5vdygpKSkge1xuICAgICAgcmVhZENvdW50c1tpZF0ucltyb2xsaW5nTGVuZ3RoIC0gMV0gPSB7XG4gICAgICAgIGRhdGU6IERhdGUubm93KCksXG4gICAgICAgIGNvdW50OiByZWFkQ291bnRzW2lkXS5yW3JvbGxpbmdMZW5ndGggLSAxXS5jb3VudCArIDFcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlYWRDb3VudHNbaWRdLnIucHVzaCh7XG4gICAgICAgIGRhdGU6IERhdGUubm93KCksXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoISFyb2xsaW5nTGVuZ3RoICYmIHJvbGxpbmdMZW5ndGggPj0gcm9sbGluZ0RheXMgJiYgISFyZWFkQ291bnRzW2lkXS5yW3JvbGxpbmdMZW5ndGggLSAxXS5kYXRlKSB7XG4gICAgaWYgKHNhbWVEYXkocmVhZENvdW50c1tpZF0ucltyb2xsaW5nTGVuZ3RoIC0gMV0uZGF0ZSwgRGF0ZS5ub3coKSkpIHtcbiAgICAgIHJlYWRDb3VudHNbaWRdLnJbcm9sbGluZ0xlbmd0aCAtIDFdID0ge1xuICAgICAgICBkYXRlOiBEYXRlLm5vdygpLFxuICAgICAgICBjb3VudDogcmVhZENvdW50c1tpZF0ucltyb2xsaW5nTGVuZ3RoIC0gMV0uY291bnQgKyAxXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZWFkQ291bnRzW2lkXS5yLnNoaWZ0KCk7XG4gICAgICByZWFkQ291bnRzW2lkXS5yLnB1c2goe1xuICAgICAgICBkYXRlOiBEYXRlLm5vdygpLFxuICAgICAgICBjb3VudDogMVxuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlYWRDb3VudHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHJlYWRDb3VudHMpLCB7fSwgX2RlZmluZVByb3BlcnR5KHt9LCBpZCwge1xuICAgICAgcjogW3tcbiAgICAgICAgZGF0ZTogRGF0ZS5ub3coKSxcbiAgICAgICAgY291bnQ6IDFcbiAgICAgIH1dLFxuICAgICAgYzogMSxcbiAgICAgIGxhc3RVcGRhdGVkOiBEYXRlLm5vdygpXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIHJlYWRDb3VudHM7XG59XG4vKipcbiAqIENoZWNrcyBidWRnZXQgdHlwZSBpbiBvcmRlciB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgaXQncyBuZWNlc3NhcnkgdG8gY2xlYXIgdXNlciBoaXN0b3J5IGlmIHRoZSBydWxlIHJlc2V0cyBvbiBhIGNhbGVuZGFyIGJhc2lzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGJ1ZGdldCAtIGJ1ZGdldCBpbmZvcm1hdGlvbiBvbiB0aGUgcnVsZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZWFkQ291bnRzIC0gYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgcHJldmlvdXMgcmVhZGNvdW50IGRhdGEgKGZyb20gbG9uZy10ZXJtIHN0b3JhZ2V9XG4gKlxuICovXG5cblxuZnVuY3Rpb24gY2hlY2tOZWVkVG9DbGVhcihidWRnZXQsIHJlYWRDb3VudHMpIHtcbiAgaWYgKCFidWRnZXQgfHwgYnVkZ2V0ICYmIGJ1ZGdldC5idWRnZXRUeXBlID09PSAnQ2FsZW5kYXInKSB7XG4gICAgcmV0dXJuIGJ1ZGdldCAmJiBidWRnZXQuY2FsZW5kYXJUeXBlID09PSAnV2Vla2x5JyA/IGNoZWNrRGF5T2ZXZWVrKGJ1ZGdldC5jYWxlbmRhcldlZWtEYXksIHJlYWRDb3VudHMubGFzdFVwZGF0ZWQpIDogY2hlY2tGb3JGaXJzdE9mTW9udGgocmVhZENvdW50cy5sYXN0VXBkYXRlZCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4vKipcbiAqIEFkZHMgYSByZWFkIGNvdW50IHRvIHRoZSBhcHByb3ByaWF0ZSBwbGFjZXMgYmFzZWQgb24gdGhlIHBhcmFtZXRlcnMgcGFzc2VkLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBydWxlSWQsIElkIG9mIHRoZSBydWxlIHdoaWNoIHRoZSByZWFkIGNvdW50IHNob3VsZCBiZSBhZGRlZCB0b1xuICogQHBhcmFtIHtPYmplY3R9IHJlYWRDb3VudHMgLSBBbiBvYmplY3QgdGhhdCBjb250YWlucyBwcmV2aW91cyByZWFkY291bnQgZGF0YSAoZnJvbSBsb25nLXRlcm0gc3RvcmFnZX1cbiAqL1xuXG5cbmZ1bmN0aW9uIGFkZFJlYWRDb3VudCgpIHtcbiAgdmFyIHJ1bGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgcmVhZENvdW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG4gIGlmICghcmVhZENvdW50cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpc1JvbGxpbmcgPSBydWxlLmJ1ZGdldCAmJiBydWxlLmJ1ZGdldC5idWRnZXRUeXBlICYmIHJ1bGUuYnVkZ2V0LmJ1ZGdldFR5cGUgPT09ICdSb2xsaW5nJztcblxuICBpZiAoIXJlYWRDb3VudHNbcnVsZS5pZF0pIHtcbiAgICByZWFkQ291bnRzW3J1bGUuaWRdID0ge307XG4gIH1cblxuICBpZiAoIWlzUm9sbGluZykge1xuICAgIHZhciBjdXJyZW50Q291bnRGb3JJZCA9IHJlYWRDb3VudHNbcnVsZS5pZF0uYyB8fCAwO1xuICAgIHJlYWRDb3VudHNbcnVsZS5pZF0uYyA9IGN1cnJlbnRDb3VudEZvcklkICsgMTtcbiAgICByZWFkQ291bnRzW3J1bGUuaWRdLmxhc3RVcGRhdGVkID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdXBkYXRlZFJlYWRDb3VudHMgPSBjaGVja1JvbGxpbmdDb3VudChydWxlLCByZWFkQ291bnRzKTtcbiAgICByZWFkQ291bnRzW3J1bGUuaWRdLnIgPSBjbGVhckV4cGlyZWRSb2xsaW5nQ291bnRzKHVwZGF0ZWRSZWFkQ291bnRzW3J1bGUuaWRdLnIsIHJ1bGUuYnVkZ2V0LnJvbGxpbmdEYXlzKTtcbiAgICByZWFkQ291bnRzW3J1bGUuaWRdLmMgPSB1cGRhdGVkUmVhZENvdW50c1tydWxlLmlkXS5yWzBdICYmIHVwZGF0ZWRSZWFkQ291bnRzW3J1bGUuaWRdLnIubWFwKGZ1bmN0aW9uIChyZWFkKSB7XG4gICAgICByZXR1cm4gcmVhZC5jb3VudDtcbiAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9KTtcbiAgICByZWFkQ291bnRzW3J1bGUuaWRdLmxhc3RVcGRhdGVkID0gRGF0ZS5ub3coKTtcbiAgfVxuXG4gIHJldHVybiByZWFkQ291bnRzO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgYSByZWFkZXIgaXMgZXhlbXB0IHRvIGEgY2VydGFpbiBydWxlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHJ1bGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbc3ViPXt9XVxuICogQHBhcmFtIHtvYmplY3R9IFtyZWc9e31dXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIHJlYWRlciBpcyBleGVtcHQgdG8gdGhpcyBydWxlOyBmYWxzZSBvdGhlcndpc2UuXG4gKi9cblxuXG5mdW5jdGlvbiBpc0V4ZW1wdFRvUnVsZShydWxlKSB7XG4gIHZhciBzdWIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgcmVnID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShydWxlLmUpICYmIHJ1bGUuZS5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gISFyZWcubDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaXNFeGVtcHQgPSBBcnJheS5pc0FycmF5KHN1Yi5wKSAmJiBzdWIucC5zb21lKGZ1bmN0aW9uIChza3UpIHtcbiAgICAgIHJldHVybiBldmFsdWF0ZShydWxlLmUsIHNrdSk7XG4gICAgfSk7XG4gICAgdmFyIGlzRW50aXRsZW1lbnRzRmFpbGluZyA9ICEhc3ViLmVudGl0bGVtZW50c0ZhaWxlZCAmJiBydWxlLmUubGVuZ3RoID4gMTtcbiAgICByZXR1cm4gaXNFeGVtcHQgfHwgaXNFbnRpdGxlbWVudHNGYWlsaW5nO1xuICB9XG59XG4vKipcbiAqIEV2YWx1YXRlcyB3aGV0aGVyIHRoZSBmYWN0IG1hdGNoZXMgKG9yIG5vdCwgYmFzZWQgb24gdGhlIG1vZGlmaWVyKSBhbnkgb2YgdGhlIGNvbmRpdGlvbnMgaW4gdGhlIGNvbmRpdGlvbnMgYXJyYXkuXG4gKiBJZiBhIG1hdGNoZXIgaXMgbm90IHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgZG8gYW4gaW5kZXhPZiB3aXRoIGVhY2ggY29uZGl0aW9uIGFnYWluc3QgdGhlIGZhY3QuXG4gKiBpLmUgYChjb25kaXRpb24uaW5kZXhPZihmYWN0KSA+PSAwKWBcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1vZGlmaWVyXG4gKiBAcGFyYW0ge0FycmF5fSBjb25kaXRpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gZmFjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gcmVnZXhwQ3JlYXRvciAtIFRoaXMgZnVuY3Rpb24gc2hvdWxkIHRha2Ugb25lIGFyZ3VtZW50IGFuZCByZXR1cm4gYSBSZWdFeHAgb2JqZWN0LiBEZWZhdWx0cyB0byAvZmFjdC9cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZmFjdCBtYXRjaGVzIChvciBub3QsIGJhc2VkIG9uIG1vZGlmaWVyIGJlaW5nIGZhbHNlKSBhbnkgb2YgdGhlIGNvbmRpdGlvbnMgcGFzc2VkIGluLlxuICovXG5cblxuZnVuY3Rpb24gZXZhbHVhdGVNYXRjaChtb2RpZmllciwgY29uZGl0aW9ucywgZmFjdCwgcmVnZXhwQ3JlYXRvcikge1xuICByZXR1cm4gY29uZGl0aW9ucy5zb21lKGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAodHlwZW9mIHJlZ2V4cENyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciByZWdleHAgPSByZWdleHBDcmVhdG9yKGNvbmRpdGlvbik7XG4gICAgICByZXN1bHQgPSByZWdleHAudGVzdChmYWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gY29uZGl0aW9uLmluZGV4T2YoZmFjdCkgPj0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gISEocmVzdWx0IF4gIW1vZGlmaWVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV2YWx1YXRlSW4obW9kaWZpZXIsIGNvbmRpdGlvbnMsIGZhY3QpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZmFjdCkpIHtcbiAgICByZXR1cm4gISFjb25kaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGZhY3QuaW5jbHVkZXMoaXRlbSk7XG4gICAgfSkubGVuZ3RoID09PSBtb2RpZmllcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gISEoY29uZGl0aW9ucy5pbmRleE9mKGZhY3QpID49IDAgXiAhbW9kaWZpZXIpO1xuICB9XG59XG4vKipcbiAqIEV2YWx1YXRlcyBzY2FsYXIgdmFsdWVzIGJhc2VkIG9uIGEgbW9kaWZpZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGlmaWVyIC0gY2FuIGJlICc8JywgJz4nLCAnPScgb3IgJyE9J1xuICogQHBhcmFtIHtBcnJheX0gY29uZGl0aW9ucyAtIGFuIGFycmF5IHdpdGggaXRzIGZpcnN0IGVsZW1lbnQgYXMgYSBudW1iZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbmRpdGlvbiBpcyBwYXNzZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBldmFsdWF0ZVNjYWxhcihtb2RpZmllciwgY29uZGl0aW9ucywgZmFjdCkge1xuICB2YXIgY29uZGl0aW9uID0gY29uZGl0aW9uc1swXTtcblxuICBpZiAoIWlzTmFOKHBhcnNlSW50KGNvbmRpdGlvbikpKSB7XG4gICAgc3dpdGNoIChtb2RpZmllcikge1xuICAgICAgY2FzZSAnPic6XG4gICAgICAgIHJldHVybiBmYWN0ID4gY29uZGl0aW9uc1swXTtcblxuICAgICAgY2FzZSAnPCc6XG4gICAgICAgIHJldHVybiBmYWN0IDwgY29uZGl0aW9uc1swXTtcblxuICAgICAgY2FzZSAnPSc6XG4gICAgICAgIHJldHVybiBjb25kaXRpb25zWzBdID09PSBmYWN0O1xuXG4gICAgICBjYXNlICchPSc6XG4gICAgICAgIHJldHVybiBjb25kaXRpb25zWzBdICE9IGZhY3Q7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8gc2hvdWxkbid0IGhhcHBlbiwgYnV0IGp1c3QgaW4gY2FzZSFcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGJvdGggdGhlIGBjb25kaXRpb25gIGFuZCBgZmFjdGAgYXJlIHZhbGlkLiBGb3IgdGhlIGBjb25kaXRpb25gIHRvIGJlIHZhbGlkXG4gKiBpdCBuZWVkcyB0byBiZSBhbiBgQXJyYXlgIG9mIGF0IGxlYXN0IDIgZWxlbWVudHMgd2l0aCB0aGUgZmlyc3Qgb25lIGJlaW5nIG9mIHR5cGUgYm9vbGVhbi5cbiAqXG4gKiBGb3IgdGhlIGBmYWN0YCB0byBiZSB2YWxpZCBpdCBuZWVkcyB0byBiZSBhIG5vbi1lbXB0eSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY29uZGl0aW9uIC0gZS5nLiBbdHJ1ZSwgJ2ZpbmFuY2UnLCAnYnVzaW5lc3MnXSBvciBbZmFsc2UsICc4LjguOC44J10pXG4gKiBAcGFyYW0ge3N0cmluZ30gZmFjdCAtIGkuZS4gbm9uLWVtcHR5IGZhY3QgYmVpbmcgY2hlY2tlZCBhZ2FpbnN0IHRoZSBjb25kaXRpb25zXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLS0gdHJ1ZSBpZiB0aGUgY29uZGl0aW9ucyAmIGZhY3QgYXJlIHZhbGlkLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cblxuXG5mdW5jdGlvbiBjaGVja0NvbmRpdGlvblBhcmFtcyhjb25kaXRpb24sIGZhY3QpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGNvbmRpdGlvbikgfHwgY29uZGl0aW9uWzBdID09IG51bGwgfHwgLy8gaW50ZW50aW9uYWwgdHlwZSBjb2Vyc2lvblxuICB0eXBlb2YgY29uZGl0aW9uWzBdICE9PSAnYm9vbGVhbicgJiYgIS9ePnw8fD18IT18XFwqfCFcXCokLy50ZXN0KGNvbmRpdGlvblswXSkgfHwgY29uZGl0aW9uLmxlbmd0aCA8IDIgfHwgZmFjdCA9PT0gbnVsbCB8fCBmYWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogQ2hlY2tzIHRoYXQgYSBgY29uZGl0aW9uYCByZXByZXNlbnRlZCBieSBhbiBhcnJheSBzdGFydGluZyB3LyBhIGJvb2xlYW4gKGUuZy4gW3RydWUsICdmaW5hbmNlLCAnYnVzaW5lc3MnXSkgaXNcbiAqIHNhdGlzZmllZCBieSBhIGBmYWN0YCByZXByZXNlbnRlZCBieSBhIHN0cmluZy4gSWYgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYGNvbmRpdGlvbmAgaXMgdHJ1ZSwgdGhlbiBpdFxuICogd2lsbCByZXR1cm4gdHJ1ZSBpZiBgZmFjdGAgaXMgaW4gdGhlIGBjb25kaXRpb25gIGFycmF5LiAgSWYgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYGNvbmRpdGlvbmAgaXMgZmFsc2UsXG4gKiBpdCB3aWxsIHJldHVybiB0cnVlIGlmIGBmYWN0YCBpcyBOT1QgaW4gdGhlIGBjb25kaXRpb25gIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNvbmRpdGlvbnMgLSBlLmcuIFt0cnVlLCAnZmluYW5jZScsICdidXNpbmVzcyddIG9yIFtmYWxzZSwgJzguOC44LjgnXSlcbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0IC0gaS5lLiBub24tZW1wdHkgZmFjdCBiZWluZyBjaGVja2VkIGFnYWluc3QgdGhlIGNvbmRpdGlvbnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hdGNoZXIgLSBhIGZ1bmN0aW9uIHRvIHJ1biBhcyBhIHByZWRpY2F0ZSBvbiBldmVyeSBlbGVtZW50IGluIHRoZSBjb25kaXRpb25zIGFycmF5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIHRoZSBjb25kaXRpb24gbWF0Y2hlcywgZmFsc2UgaWYgaXQgZG9lc24ndFxuICovXG5cblxuZnVuY3Rpb24gZXZhbHVhdGUoY29uZGl0aW9ucywgZmFjdCwgbWF0Y2hlcikge1xuICBpZiAoIWNoZWNrQ29uZGl0aW9uUGFyYW1zKGNvbmRpdGlvbnMsIGZhY3QpKSB7XG4gICAgcmV0dXJuIHRydWU7IC8vIGlmIHRoaW5ncyBhcmUgbWlzc2luZyBqdXN0IGRlZmF1bHQgdG8gdHJ1ZVxuICB9XG5cbiAgdmFyIG1vZGlmaWVyID0gY29uZGl0aW9uc1swXTtcbiAgdmFyIHJlc3VsdCA9IGV2YWx1YXRpb25UZWNobmlxdWVzW21vZGlmaWVyXShjb25kaXRpb25zLnNsaWNlKDEpLCBmYWN0LCBtYXRjaGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogR2l2ZW4gYSBydWxlc2V0IGFuZCBhIGZhY3RzIG9iamVjdCwgaXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGNhbGwgdGhlIHBheXdhbGxDYWxsYmFjayBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcnVsZXNldFxuICogQHBhcmFtIHtvYmplY3R9IGZhY3RzXG4gKi9cblxuXG5mdW5jdGlvbiBldmFsdWF0ZVJ1bGVzZXQocnVsZXNldCwgZmFjdHMpIHtcbiAgaWYgKCFydWxlc2V0IHx8ICFmYWN0cykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChMT0dfUFJFRklYLCBcIiBNaXNzaW5nIHJ1bGVzZXQsIGZhY3RzIG9yIGNhbGxiYWNrIHBhcmFtZXRlciBpbiBldmFsdWF0ZVJ1bGVzZXRcXG4gICAgICAgICAgcnVsZXNldDogXCIpLmNvbmNhdChydWxlc2V0LCBcIlxcbiAgICAgICAgICBmYWN0czogXCIpLmNvbmNhdChmYWN0cykpO1xuICB9XG5cbiAgdmFyIHRyaWdnZXJpbmdSdWxlcyA9IFtdO1xuICBBcnJheS5pc0FycmF5KHJ1bGVzZXQpICYmIHJ1bGVzZXQuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIHZhciBzdWIgPSBmYWN0cy5zdWIgfHwge307XG4gICAgdmFyIHJlZyA9IGZhY3RzLnJlZyB8fCB7fTtcblxuICAgIGlmIChldmFsdWF0ZShydWxlLmMsIGZhY3RzLmMpICYmIGV2YWx1YXRlKHJ1bGUuZCwgZmFjdHMuZCkgJiYgZXZhbHVhdGUocnVsZS5yLCBmYWN0cy5yKSAmJiBldmFsdWF0ZShydWxlLnMsIGZhY3RzLnMpICYmIGV2YWx1YXRlKHJ1bGUuY3IsIGZhY3RzLmNyKSAmJiBldmFsdWF0ZShydWxlLmNvbnRpbmVudCwgZmFjdHMuZ2VvICYmIGZhY3RzLmdlby5jb250aW5lbnQpICYmIGV2YWx1YXRlKHJ1bGUuY2l0eSwgZmFjdHMuZ2VvICYmIGZhY3RzLmdlby5jaXR5KSAmJiBldmFsdWF0ZShydWxlLmNvdW50cnlfY29kZSwgZmFjdHMuZ2VvICYmIGZhY3RzLmdlby5jb3VudHJ5X2NvZGUpICYmIGV2YWx1YXRlKHJ1bGUuZG1hLCBmYWN0cy5nZW8gJiYgZmFjdHMuZ2VvLmRtYSkgJiYgZXZhbHVhdGUocnVsZS5nZW9yZWdpb24sIGZhY3RzLmdlbyAmJiBmYWN0cy5nZW8uZ2VvcmVnaW9uKSAmJiBldmFsdWF0ZShydWxlLmJjLCBmYWN0cy5iYykgJiYgIWlzRXhlbXB0VG9SdWxlKHJ1bGUsIHN1YiwgcmVnKSkge1xuICAgICAgYWRkUmVhZENvdW50KHJ1bGUsIGZhY3RzLnJjKTtcblxuICAgICAgaWYgKGV2YWx1YXRlKHJ1bGUucnQsIGZhY3RzLnJjW3J1bGUuaWRdLmMgfHwgMCkpIHtcbiAgICAgICAgdHJpZ2dlcmluZ1J1bGVzLnB1c2goe1xuICAgICAgICAgIGlkOiBydWxlLmlkLFxuICAgICAgICAgIHJjOiBmYWN0cy5yY1tydWxlLmlkXS5jLFxuICAgICAgICAgIHJ1bGU6IF9vYmplY3RTcHJlYWQoe30sIHJ1bGUpXG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBzdG9yZSB0aGUgdmlzaXRcblxuXG4gICAgICBpZiAoIWZhY3RzLnYpIHtcbiAgICAgICAgZmFjdHMudiA9IGZhY3RzLnYgfHwge1xuICAgICAgICAgIGNpOiBbXVxuICAgICAgICB9O1xuICAgICAgICBmYWN0cy52LmNpID0gZmFjdHMudi5jaSB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZhY3RzLnYuY2kuaW5kZXhPZihmYWN0cy5jaSkgPCAwKSB7XG4gICAgICAgIGZhY3RzLnYuY2kucHVzaChmYWN0cy5jaSk7XG4gICAgICAgIGZhY3RzLnYubGFzdFVwZGF0ZWQgPSBEYXRlLm5vdygpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNFeGVtcHRUb1J1bGUocnVsZSwgc3ViLCByZWcpKSB7XG4gICAgICBmYWN0cy5yY1tydWxlLmlkXSA9IGZhY3RzLnJjW3J1bGUuaWRdIHx8IHt9O1xuICAgICAgZmFjdHMucmNbcnVsZS5pZF0ubGFzdFVwZGF0ZWQgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0cmlnZ2VyaW5nUnVsZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBldmFsdWF0ZVJ1bGVzZXQ6IGV2YWx1YXRlUnVsZXNldCxcbiAgZXZhbHVhdGU6IGV2YWx1YXRlLFxuICBjaGVja0NvbmRpdGlvblBhcmFtczogY2hlY2tDb25kaXRpb25QYXJhbXMsXG4gIGNoZWNrRm9yRmlyc3RPZk1vbnRoOiBjaGVja0ZvckZpcnN0T2ZNb250aCxcbiAgY2hlY2tOZWVkVG9DbGVhcjogY2hlY2tOZWVkVG9DbGVhcixcbiAgY2hlY2tEYXlPZldlZWs6IGNoZWNrRGF5T2ZXZWVrLFxuICBpc0V4ZW1wdFRvUnVsZTogaXNFeGVtcHRUb1J1bGUsXG4gIHNhbWVEYXk6IHNhbWVEYXlcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYy9wYXl3YWxsLmpzJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvaXMtYXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2RhdGUvbm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIik7IiwidmFyIF9Qcm9taXNlID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9wcm9taXNlXCIpO1xuXG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgX1Byb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IF9Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG5cbiAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcblxuICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuXG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9TeW1ib2wgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfT2JqZWN0JGNyZWF0ZSA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX09iamVjdCRzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfUHJvbWlzZSA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvcHJvbWlzZVwiKTtcblxuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cblxuICBtb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHZhciBleHBvcnRzID0ge30sXG4gICAgICBPcCA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgICBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICRTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIF9TeW1ib2wgPyBfU3ltYm9sIDoge30sXG4gICAgICBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgICBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgICB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBfT2JqZWN0JGRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgb2JqW2tleV07XG4gIH1cblxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3IsXG4gICAgICAgIGdlbmVyYXRvciA9IF9PYmplY3QkY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksXG4gICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yLl9pbnZva2UgPSBmdW5jdGlvbiAoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgICAgdmFyIHN0YXRlID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXRob2QsIGFyZykge1xuICAgICAgICBpZiAoXCJleGVjdXRpbmdcIiA9PT0gc3RhdGUpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG5cbiAgICAgICAgaWYgKFwiY29tcGxldGVkXCIgPT09IHN0YXRlKSB7XG4gICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbWV0aG9kKSB0aHJvdyBhcmc7XG4gICAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuXG4gICAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXCJuZXh0XCIgPT09IGNvbnRleHQubWV0aG9kKSBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkge1xuICAgICAgICAgICAgaWYgKFwic3VzcGVuZGVkU3RhcnRcIiA9PT0gc3RhdGUpIHRocm93IHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5hcmc7XG4gICAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcbiAgICAgICAgICB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gY29udGV4dC5tZXRob2QgJiYgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICAgIHN0YXRlID0gXCJleGVjdXRpbmdcIjtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IFwiY29tcGxldGVkXCIgOiBcInN1c3BlbmRlZFlpZWxkXCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBcInRocm93XCIgPT09IHJlY29yZC50eXBlICYmIChzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0oaW5uZXJGbiwgc2VsZiwgY29udGV4dCksIGdlbmVyYXRvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgICBhcmc6IGZuLmNhbGwob2JqLCBhcmcpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJ0aHJvd1wiLFxuICAgICAgICBhcmc6IGVyclxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgdmFyIGdldFByb3RvID0gX09iamVjdCRnZXRQcm90b3R5cGVPZixcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IF9PYmplY3QkY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG5cbiAgICAgIGlmIChcInRocm93XCIgIT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLFxuICAgICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBcIm9iamVjdFwiID09IF90eXBlb2YodmFsdWUpICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSkgOiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHtcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICB0aGlzLl9pbnZva2UgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuXG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSB7XG4gICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkpIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcbiAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgcmV0dXJuIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcsIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICByZXR1cm4gaW5mbyA/IGluZm8uZG9uZSA/IChjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZSwgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gY29udGV4dC5tZXRob2QgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpIDogaW5mbyA6IChjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcbiAgICAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7XG4gICAgICB0cnlMb2M6IFwicm9vdFwiXG4gICAgfV0sIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmFibGUubmV4dCkgcmV0dXJuIGl0ZXJhYmxlO1xuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSByZXR1cm4gbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGRvbmVSZXN1bHRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGRvbmU6ICEwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSwgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGdlbkZ1biAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhY3RvciAmJiAoY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTtcbiAgfSwgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHJldHVybiBfT2JqZWN0JHNldFByb3RvdHlwZU9mID8gX09iamVjdCRzZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6IChnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSwgZ2VuRnVuLnByb3RvdHlwZSA9IF9PYmplY3QkY3JlYXRlKEdwKSwgZ2VuRnVuO1xuICB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBfUHJvbWlzZSk7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpO1xuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKSwgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyBrZXlzLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSByZXR1cm4gbmV4dC52YWx1ZSA9IGtleSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkLCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdW5kZWZpbmVkLCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIXNraXBUZW1wUmVzZXQpIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICBcInRcIiA9PT0gbmFtZS5jaGFyQXQoMCkgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSAmJiAodGhpc1tuYW1lXSA9IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcm9vdFJlY29yZC50eXBlKSB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBleGNlcHRpb247XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSBcInRocm93XCIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSxcbiAgICAgICAgICAgIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgIGlmIChcInJvb3RcIiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICAgIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzRmluYWxseSkgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpbmFsbHlFbnRyeSAmJiAoXCJicmVha1wiID09PSB0eXBlIHx8IFwiY29udGludWVcIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTtcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gdHlwZSwgcmVjb3JkLmFyZyA9IGFyZywgZmluYWxseUVudHJ5ID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jLCBDb250aW51ZVNlbnRpbmVsKSA6IHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIHJldHVybiBcImJyZWFrXCIgPT09IHJlY29yZC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gcmVjb3JkLnR5cGUgPyB0aGlzLm5leHQgPSByZWNvcmQuYXJnIDogXCJyZXR1cm5cIiA9PT0gcmVjb3JkLnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUgJiYgYWZ0ZXJMb2MgJiYgKHRoaXMubmV4dCA9IGFmdGVyTG9jKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykgcmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KGVudHJ5KSwgQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHVuZGVmaW5lZCksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9LCBleHBvcnRzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX1N5bWJvbCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX1N5bWJvbCRpdGVyYXRvciA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIF9TeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgX1N5bWJvbCRpdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgX1N5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IF9TeW1ib2wgJiYgb2JqICE9PSBfU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5pc0FycmF5O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuZGF0ZS5ub3cnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkRhdGUubm93O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJyk7XG52YXIgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHsgc3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeSB9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhULCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoVCwgRCk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi4xMicgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCIvLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBSZWZsZWN0ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuUmVmbGVjdDtcbm1vZHVsZS5leHBvcnRzID0gUmVmbGVjdCAmJiBSZWZsZWN0Lm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdPUE4uZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgcmV0dXJuIGdldFN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIvLyAyMi4xLjIuMiAvIDE1LjQuMy4yIEFycmF5LmlzQXJyYXkoYXJnKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdBcnJheScsIHsgaXNBcnJheTogcmVxdWlyZSgnLi9faXMtYXJyYXknKSB9KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIvLyAyMC4zLjMuMSAvIDE1LjkuNC40IERhdGUubm93KClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnRGF0ZScsIHsgbm93OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfSB9KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMyAvIDE1LjIuMy43IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0aWVzOiByZXF1aXJlKCcuL19vYmplY3QtZHBzJykgfSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjggfHwgJyc7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgICAmJiB2OC5pbmRleE9mKCc2LjYnKSAhPT0gMFxuICAgICAgJiYgdXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZS82NicpID09PSAtMTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICRHT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICEhJEdPUFMuZjtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJEdPUFMuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSAkZmFpbHMoZnVuY3Rpb24gKCkgeyAkR09QUy5mKDEpOyB9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBGQUlMU19PTl9QUklNSVRJVkVTLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiAkR09QUy5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuL19vd24ta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3QpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICAgIHZhciBnZXREZXNjID0gZ09QRC5mO1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhPKTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXksIGRlc2M7XG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gaSkge1xuICAgICAgZGVzYyA9IGdldERlc2MoTywga2V5ID0ga2V5c1tpKytdKTtcbiAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQpIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5LCBkZXNjKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUsbil7cmV0dXJuIG49bnx8e30sbmV3IFByb21pc2UoZnVuY3Rpb24odCxyKXt2YXIgcz1uZXcgWE1MSHR0cFJlcXVlc3Qsbz1bXSx1PVtdLGk9e30sYT1mdW5jdGlvbigpe3JldHVybntvazoyPT0ocy5zdGF0dXMvMTAwfDApLHN0YXR1c1RleHQ6cy5zdGF0dXNUZXh0LHN0YXR1czpzLnN0YXR1cyx1cmw6cy5yZXNwb25zZVVSTCx0ZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzLnJlc3BvbnNlVGV4dCl9LGpzb246ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMucmVzcG9uc2VUZXh0KS50aGVuKEpTT04ucGFyc2UpfSxibG9iOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbcy5yZXNwb25zZV0pKX0sY2xvbmU6YSxoZWFkZXJzOntrZXlzOmZ1bmN0aW9uKCl7cmV0dXJuIG99LGVudHJpZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBpW2UudG9Mb3dlckNhc2UoKV19LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpaW4gaX19fX07Zm9yKHZhciBsIGluIHMub3BlbihuLm1ldGhvZHx8XCJnZXRcIixlLCEwKSxzLm9ubG9hZD1mdW5jdGlvbigpe3MuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXiguKj8pOlteXFxTXFxuXSooW1xcc1xcU10qPykkL2dtLGZ1bmN0aW9uKGUsbix0KXtvLnB1c2gobj1uLnRvTG93ZXJDYXNlKCkpLHUucHVzaChbbix0XSksaVtuXT1pW25dP2lbbl0rXCIsXCIrdDp0fSksdChhKCkpfSxzLm9uZXJyb3I9cixzLndpdGhDcmVkZW50aWFscz1cImluY2x1ZGVcIj09bi5jcmVkZW50aWFscyxuLmhlYWRlcnMpcy5zZXRSZXF1ZXN0SGVhZGVyKGwsbi5oZWFkZXJzW2xdKTtzLnNlbmQobi5ib2R5fHxudWxsKX0pfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5mZXRjaC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBnZXRIb3N0bmFtZUZyb21VUkwgfSBmcm9tICcuLi91dGlscy91cmwnO1xuXG5mdW5jdGlvbiBwYXJzZVJlZmVycmVyKCkge1xuICBpZiAoRU5WLnRlc3QpIHtcbiAgICByZXR1cm4gJ3Rlc3QnO1xuICB9XG5cbiAgY29uc3QgcmVmZXJyZXIgPSBnZXRIb3N0bmFtZUZyb21VUkwoZG9jdW1lbnQucmVmZXJyZXIpO1xuXG4gIC8vIEZvciBub3cganVzdCBjaGVjayBmb3IgZ29vZ2xlLCBmYWNlYm9vaywgdHdpdHRlci4gT3RoZXJ3aXNlIHNhdmUgdGhlIGhvc3RuYW1lXG4gIGlmICgvZmFjZWJvb2tcXC5jb20kLy50ZXN0KHJlZmVycmVyKSkge1xuICAgIHJldHVybiAnZmFjZWJvb2snO1xuICB9IGVsc2UgaWYgKC90d2l0dGVyXFwuY29tJC8udGVzdChyZWZlcnJlcikpIHtcbiAgICByZXR1cm4gJ3R3aXR0ZXInO1xuICB9IGVsc2UgaWYgKC9nb29nbGVcXC5jbyhtfFxcLlthLXpdezJ9KSQvLnRlc3QocmVmZXJyZXIpKSB7XG4gICAgcmV0dXJuICdnb29nbGUnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWZlcnJlcjsgLy8gdGhpcyBtYXkgbmVlZCBzb21lIGFkZGl0aW9uYWwgcGFyc2luZy5cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWZlcnJlcigpIHtcbiAgcmV0dXJuIHBhcnNlUmVmZXJyZXIoKTtcbn1cblxuLy8gVE9ETzogJ2F1ZGllbmNlJyBpcyBhIGJpdCBtdXJreSB3aGVuIGl0IGNvbWVzIHRvIHJlcXVpcmVtZW50cy4gTGlrZWx5LCBob3dldmVyLFxuLy8gdGhlcmUgd2lsbCBiZSBzb21lIGluc3BlY3Rpb24gb2YgY29va2llcyBmb3IgYXVkaWVuY2Ugc2VnbWVudGF0aW9uIGluZm9ybWF0aW9uLlxuLy8gdGhpcyBpcyBqdXN0IGEgc3R1Yi4uLlxuZnVuY3Rpb24gZ2V0QXVkaWVuY2UoZGF0YSA9IHt9KSB7XG4gIHJldHVybiBkYXRhLmEgfHwgJ3NvbWV0aGluZyBzcGVjaWFsJztcbn1cblxuZnVuY3Rpb24gcGFyc2VEZXZpY2VDbGFzcyh1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuICBjb25zdCBpc01vYmlsZVVzZXJBZ2VudCA9IC9tb2JpL2kudGVzdCh1c2VyQWdlbnQpO1xuICBjb25zdCBpc1RhYmxldFVzZXJBZ2VudCA9IC8odGFibGV0fGlwYWR8cGxheWJvb2t8c2lsayl8KGFuZHJvaWQoPyEuKm1vYmlsZSkpL2kudGVzdCh1c2VyQWdlbnQpO1xuXG4gIGlmIChpc01vYmlsZVVzZXJBZ2VudCAmJiAhaXNUYWJsZXRVc2VyQWdlbnQpIHtcbiAgICByZXR1cm4gJ21vYmlsZSc7XG4gIH0gZWxzZSBpZiAoaXNUYWJsZXRVc2VyQWdlbnQpIHtcbiAgICByZXR1cm4gJ3RhYmxldCc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdkZXNrdG9wJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZXZpY2VDbGFzcyhkYXRhID0ge30pIHtcbiAgcmV0dXJuIGRhdGEuZCB8fCBwYXJzZURldmljZUNsYXNzKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGlzUHJpdmF0ZU1vZGUoKSB7XG4gIGxldCBpc0luY29nbml0byA9IGZhbHNlO1xuXG4gIGlmICh3aW5kb3cuY2hyb21lKSB7XG4gICAgLy8gaXMgY2hyb21pdW0gZmxhdm9yZWRcbiAgICBpZiAoJ3N0b3JhZ2UnIGluIG5hdmlnYXRvciAmJiAnZXN0aW1hdGUnIGluIG5hdmlnYXRvci5zdG9yYWdlKSB7XG4gICAgICBjb25zdCB7IHF1b3RhIH0gPSBhd2FpdCBuYXZpZ2F0b3Iuc3RvcmFnZS5lc3RpbWF0ZSgpO1xuXG4gICAgICBpc0luY29nbml0byA9IHF1b3RhIDwgMTIwMDAwMDAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcyA9IHdpbmRvdy5SZXF1ZXN0RmlsZVN5c3RlbSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW07XG4gICAgICBpZiAoZnMpIHtcbiAgICAgICAgZnMoXG4gICAgICAgICAgd2luZG93LlRFTVBPUkFSWSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaXNJbmNvZ25pdG8gPSBmYWxzZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlzSW5jb2duaXRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKC9jb25zdHJ1Y3Rvci9pLnRlc3Qod2luZG93LkhUTUxFbGVtZW50KSkge1xuICAgIC8vIFNhZmFyaVxuICAgIHRyeSB7XG4gICAgICAvLyBjaGVjayBpZiB3ZSBjYW4gd3JpdGUgdG8gbG9jYWxzdG9yYWdlXG4gICAgICBjb25zdCB0ZXN0S2V5ID0gYCR7U1RPUkVfTkFNRX0udGVzdGA7XG5cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0ZXN0S2V5LCAndGVzdFZhbHVlJyk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGVzdEtleSk7XG5cbiAgICAgIHdpbmRvdy5vcGVuRGF0YWJhc2UobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICBpc0luY29nbml0byA9IGZhbHNlO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIGlzSW5jb2duaXRvID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoJ01vekFwcGVhcmFuY2UnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSkge1xuICAgIC8vIE1vemlsbGFcbiAgICBpc0luY29nbml0byA9ICFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcjtcbiAgfSBlbHNlIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50IHx8IHdpbmRvdy5NU1BvaW50ZXJFdmVudCkge1xuICAgIC8vIElFMTAgKyBFZGdlXG4gICAgaXNJbmNvZ25pdG8gPSAhd2luZG93LmluZGV4ZWREQjtcbiAgfVxuXG4gIHJldHVybiBpc0luY29nbml0bztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJyb3dzZXJEYXRhKGxvbmdUZXJtRGF0YSkge1xuICAvLyBUT0RPOiAgQXVkaWVuY2UgbWF5IGJlIGJhc2VkIG9uIHJlZmVycmVyIGJ1dCBhbHNvIG9uIGEgY29va2llXG4gIC8vIHRoYXQgaXMgc2V0IGJ5IGFuIGFuYWx5dGljcyBwYWNrYWdlIG9yIHNvbWUgb3RoZXIgdmFsdWUgdG8gZGV0ZXJtaW5lXG4gIC8vIGF1ZGllbmNlIHNlZ21lbnRhdGlvbiAocGVyaGFwcyBkYXJ3aW4gZGF0YT8pLi4uIGZvciBub3cgSSdtIG9ubHkgZ29pbmdcbiAgLy8gd2l0aCByZWZlcnJlciwgYnV0IGNhbGxpbmcgaXQgYXVkaWVuY2UuXG5cbiAgcmV0dXJuIHtcbiAgICBkOiBnZXREZXZpY2VDbGFzcyhsb25nVGVybURhdGEpLFxuICAgIHI6IGdldFJlZmVycmVyKGxvbmdUZXJtRGF0YSksXG4gICAgcG06IGF3YWl0IGlzUHJpdmF0ZU1vZGUoKVxuICB9O1xufVxuIiwiaW1wb3J0IGZldGNoIGZyb20gJ3VuZmV0Y2gnO1xuaW1wb3J0IHsgbG9uZ1Rlcm1TdG9yZSB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSc7XG5pbXBvcnQgeyBpc0p3dEV4cGlyZWQsIGdldEpXVCB9IGZyb20gJy4uL3V0aWxzL2p3dCc7XG5pbXBvcnQgeyBnZXRVc2VyTmFtZSB9IGZyb20gJy4uL2ZhY3RzJztcblxuZXhwb3J0IGNvbnN0IEVDSE9fU1RPUkVfTkFNRSA9ICdBcmNQRSc7XG5cbi8qKlxuICogUnVucyB0aGUgZGVmYXVsdCBzdWJzY3JpcHRpb25zIGNoZWNrIChpLmUuIHF1ZXJpZXMgL3NhbGVzL3B1YmxpYy92MS9lbnRpdGxlbWVudHMpXG4gKiBJZiBvcHRpb25zLmp3dCBpcyBub3QgZm91bmQsIGl0IHdpbGwgZ2V0IHRoZSBqd3QgZnJvbSBsb2NhbFN0b3JhZ2VbJ0FyY0lkLlVTRVJfSU5GTyddIHdoaWNoIGlzIHRoZSBkZWZhdWx0LlxuICogSXQgaXMgY3VycmVudGx5IGFzc3VtZWQgdGhhdCB5b3UgYXJlIHBhc3NpbmcgYSB2YWxpZCBKV1QgaWYgdXNpbmcgb3B0aW9ucy5KV1QgKGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSkuXG4gKiBJbiB0aGUgZnV0dXJlIHRoZSBKV1Qgd2lsbCBhbHNvIGJlIGNoZWNrZWQgZm9yIGV4cGlyYXRpb25cbiAqXG4gKiBJZiBubyBKV1QgaXMgZm91bmQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV0gb3B0aW9uc1xuICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gQW4gb2JqZWN0IHdpdGggdGhlIGRhdGEgZmV0Y2hlZCBmcm9tIHRoZSBzYWxlcyBlbmRwb2ludCBzZXJ2aWNlIGFuZCBhIHRpbWVzdGFtcC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRTdWJzY3JpcHRpb25DaGVjayhvcHRpb25zID0ge30pIHtcbiAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICBsZXQgdXJsID0gYCR7XG4gICAgb3B0aW9ucy5hcGlPcmlnaW4gPyAnaHR0cHM6Ly8nICsgb3B0aW9ucy5hcGlPcmlnaW4gOiAnJ1xuICB9L3NhbGVzL3B1YmxpYy92MS9lbnRpdGxlbWVudHNgO1xuICBsZXQgZW50aXRsZW1lbnRzRmFpbGVkID0gZmFsc2U7XG4gIGxldCByZXNwb25zZTtcblxuICBpZiAoRU5WLnRlc3QpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcDogWydkaWdpdGFsaW50cm93J10sXG4gICAgICB0aW1lVGFrZW46IDAsXG4gICAgICB1cGRhdGVkOiBEYXRlLm5vdygpXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tc3RvcmUnLFxuICAgIC4uLm9wdGlvbnMuaGVhZGVyc1xuICB9O1xuXG4gIGxldCBqd3QgPSBhd2FpdCBnZXRKV1Qob3B0aW9ucyk7XG5cbiAgaWYgKGp3dCAmJiAhaXNKd3RFeHBpcmVkKGp3dCkpIHtcbiAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7and0fWA7XG4gIH1cblxuICBpZiAoIWp3dCAmJiBvcHRpb25zLmFtcFJlYWRlcklkKSB7XG4gICAgdXJsID0gYCR7dXJsfT9hbXBSZWFkZXJJZD0ke29wdGlvbnMuYW1wUmVhZGVySWR9YDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIGhlYWRlcnNcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vU2VydmljZSB1bmF2YWlsYWJsZVxuICAgIGVudGl0bGVtZW50c0ZhaWxlZCA9IHRydWU7XG4gIH1cblxuICBjb25zdCBqc29uID0gISFyZXNwb25zZSAmJiByZXNwb25zZS5vayAmJiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcblxuICByZXR1cm4ge1xuICAgIHA6IChqc29uICYmIEFycmF5LmlzQXJyYXkoanNvbi5za3VzKSAmJiBqc29uLnNrdXMubWFwKGVudGl0bGVtZW50ID0+IGVudGl0bGVtZW50LnNrdSkpIHx8IFtdLFxuICAgIGdlbzoganNvbi5lZGdlc2NhcGUgfHwge30sXG4gICAgdGltZVRha2VuOiBEYXRlLm5vdygpIC0gc3RhcnQsXG4gICAgdXBkYXRlZDogRGF0ZS5ub3coKSxcbiAgICBlbnRpdGxlbWVudHNGYWlsZWQ6IGVudGl0bGVtZW50c0ZhaWxlZFxuICB9O1xufVxuXG4vKipcbiAqIGlmIG9wdGlvbnMuY3VzdG9tU3ViQ2hlY2sgaXMgZGVmaW5lZCwgd2lsbCB1c2UgdGhhdCB0byBmZXRjaCBlbnRpdGxlbWVudCBkYXRhXG4gKiBlbHNlLCB3aWxsIHVzZSBvdXIgZGVmYXVsdCBlbnRpdGxlbWVudCBzZXJ2aWNlLiAgVGhpcyBtZXRob2Qgd2lsbCB1cGRhdGUgbG9jYWxTdG9yYWdlLlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdWJEYXRhKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBzdWJDaGVjayA9XG4gICAgdHlwZW9mIG9wdGlvbnMuY3VzdG9tU3ViQ2hlY2sgPT09ICdmdW5jdGlvbidcbiAgICAgID8gb3B0aW9ucy5jdXN0b21TdWJDaGVja1xuICAgICAgOiBkZWZhdWx0U3Vic2NyaXB0aW9uQ2hlY2s7XG5cbiAgY29uc3QgYnJvd3NlckRhdGEgPSAoYXdhaXQgbG9uZ1Rlcm1TdG9yZS5nZXRJdGVtKFNUT1JFX05BTUUpKSB8fCB7fTtcbiAgY29uc3QgdXNlck5hbWUgPSBnZXRVc2VyTmFtZShvcHRpb25zKTtcbiAgY29uc3QgdXNlckJyb3dzZXJEYXRhID0gYnJvd3NlckRhdGFbdXNlck5hbWVdIHx8IHt9O1xuICBjb25zdCBlbnRpdGxlbWVudHMgPSBhd2FpdCBzdWJDaGVjayhvcHRpb25zKTtcblxuICBhd2FpdCBsb25nVGVybVN0b3JlLnNldEl0ZW0oU1RPUkVfTkFNRSwge1xuICAgIC4uLmJyb3dzZXJEYXRhLFxuICAgIFt1c2VyTmFtZV06IHtcbiAgICAgIC4uLnVzZXJCcm93c2VyRGF0YSxcbiAgICAgIGdlbzogZW50aXRsZW1lbnRzICYmIGVudGl0bGVtZW50cy5nZW8sXG4gICAgICBzdWI6IGVudGl0bGVtZW50c1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVudGl0bGVtZW50cztcbn1cblxuLyoqXG4gKiBEZWZhdWx0IHNob3VsZCBmZXRjaCBzdWJzIGNoZWNrLiBPbiBldmVyeSBjYWxsIHRvIGBBcmNQLnJ1bmAgdGhpcyBmdW5jdGlvbiB3aWxsIHBlcmZvcm0gYSBgR0VUYCByZXF1ZXN0IHRvXG4gKiB0aGUgZW5kcG9pbnQgc3BlY2lmaWVkIGluIGBvcHRpb25zLmVjaG9FbmRwb2ludGAsICYgc3RvcmVzIHRoZSB2YWx1ZSBpbiBsb2NhbHN0b3JhZ2UgdW5kZXIgdGhlIGtleSBgQXJjUEVgLlxuICogT24gc3Vic2VxdWVudCBjYWxscyB0byB0aGUgZWNobyBlbmRwb2ludCwgaWYgdGhlIHZhbHVlIGRpZmZlcnMgZnJvbSB0aGUgb25lIHN0b3JlZCBpbiBsb2NhbHN0b3JhZ2UsIGl0IHdpbGxcbiAqIHN0b3JlIHRoZSBuZXcgdmFsdWUgJiByZXR1cm4gdHJ1ZS4gSWYgdGhlIHZhbHVlIGhhcyByZW1haW5lZCB0aGUgc2FtZSwgb3IgdGhlcmUgaXMgYW4gZXJyb3IsIGl0IHdpbGwgcmV0dXJuXG4gKiBmYWxzZS5cbiAqXG4gKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCBwLmpzIHdpbGwgcmVmZXRjaCBlbnRpdGxlbWVudHMgZm9yIHRoZSB1c2VyLiBJZiBgZmFsc2VgLCBwLmpzIHdpbGwgY29udGludWVcbiAqIHRvIHVzZSB0aGUgZXhpc3RpbmcgMjRociBjYWNoZSBleHBpcnkgZm9yIGZldGNoaW5nIGZyZXNoIGVudGl0bGVtZW50cy5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJuc1xuICovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWZhdWx0U2hvdWxkRmV0Y2hTdWJzQ2hlY2sob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHVybCA9IG9wdGlvbnMuZWNob0VuZHBvaW50O1xuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1zdG9yZSdcbiAgfTtcblxuICBsZXQgcHJldkVjaG87XG5cbiAgdHJ5IHtcbiAgICBwcmV2RWNobyA9IChhd2FpdCBsb25nVGVybVN0b3JlLmdldEl0ZW0oRUNIT19TVE9SRV9OQU1FKSkgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBubyBJUCBmb3VuZCB5ZXQsIHNldCBlbXB0eVxuICAgIGxvbmdUZXJtU3RvcmUuc2V0SXRlbShFQ0hPX1NUT1JFX05BTUUsIHt9KTtcbiAgICBwcmV2RWNobyA9IHt9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBuZXh0RWNob1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBoZWFkZXJzXG4gICAgfSk7XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgbmV4dEVjaG9SZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoanNvbi5odHRwU3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKEVycm9yKGAke0xPR19QUkVGSVh9ICR7anNvbi5jb2RlIHx8ICcnfSAke2pzb24ubWVzc2FnZSB8fCAnJ31gKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGpzb24uZWRnZWRhdGEgIT09IHByZXZFY2hvLmVkZ2VkYXRhKSB7XG4gICAgICBhd2FpdCBsb25nVGVybVN0b3JlLnNldEl0ZW0oRUNIT19TVE9SRV9OQU1FLCBqc29uKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignZXJyb3IgY2hlY2tpbmcgZWNobycsIGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIFJ1biBlaXRoZXIgdGhlIGN1c3RvbVNob3VsZEZldGNoU3VicyBmdW5jdGlvbiBkZWZpbmVkIGluIHRoZSBvcHRpb25zIHBhcmFtZXRlciwgb3IgdGhlIGRlZmF1bHRcbiAqIHNob3VsZEZldGNoU3VicyBjaGVjayBpZiBubyBvcHRpb25zLmN1c3RvbVNob3VsZEZldGNoU3VicyBpcyBkZWZpbmVkLlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59IEEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgcC5qcyBzaG91bGQgcmVmZXRjaFxuICogZW50aXRsZW1lbnRzXG4gKi9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3VsZEZldGNoU3VicyhvcHRpb25zID0ge30pIHtcbiAgY29uc3Qgc2hvdWxkRmV0Y2hTdWJzQ2hlY2sgPVxuICAgIHR5cGVvZiBvcHRpb25zLmN1c3RvbVNob3VsZEZldGNoU3Vic0NoZWNrID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG9wdGlvbnMuY3VzdG9tU2hvdWxkRmV0Y2hTdWJzQ2hlY2tcbiAgICAgIDogZGVmYXVsdFNob3VsZEZldGNoU3Vic0NoZWNrO1xuICBjb25zdCBzaG91bGRGZXRjaFN1YnMgPSBhd2FpdCBzaG91bGRGZXRjaFN1YnNDaGVjayhvcHRpb25zKTtcbiAgcmV0dXJuIHNob3VsZEZldGNoU3Vicztcbn1cblxuLyoqXG4gKiBEZWZhdWx0IHJlZ2lzdHJhdGlvbiBjaGVjay4gV2lsbCBlbnN1cmUgdGhlIEpXVCBwYXNzZWQgaXMgbm90IGV4cGlyZWQgaWYgb25lIGlzIG5vdCBwcm92aWRlZC5cbiAqIEl0IGlzIGN1cnJlbnRseSBhc3N1bWVkIHRoYXQgeW91IGFyZSBwYXNzaW5nIGEgdmFsaWQgSldUIGlmIHVzaW5nIG9wdGlvbnMuSldUIChmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpLlxuICogSW4gdGhlIGZ1dHVyZSB0aGUgSldUIHdpbGwgYWxzbyBiZSBjaGVja2VkIGZvciBleHBpcmF0aW9uXG4gKiBJZiBvcHRpb25zLmp3dCBpcyBub3QgZm91bmQsIGl0IHdpbGwgZ2V0IHRoZSBqd3QgZnJvbSBsb2NhbFN0b3JhZ2VbJ0FyY0lkLlVTRVJfSU5GTyddIHdoaWNoIGlzIHRoZSBkZWZhdWx0LlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWZhdWx0UmVnaXN0cmF0aW9uQ2hlY2sob3B0aW9ucyA9IHt9KSB7XG4gIGxldCBqd3QgPSBhd2FpdCBnZXRKV1Qob3B0aW9ucyk7XG4gIGxldCBpc0xvZ2dlZEluID0gand0ICYmICFpc0p3dEV4cGlyZWQoand0KTtcbiAgbGV0IEFNUFNlc3Npb25FeHBpcmF0aW9uID0gb3B0aW9ucy5jdXN0b21BTVBFeHBpcmF0aW9uID8/IDE3MjgwMDAwMDAwMDA7XG5cbiAgaWYgKG9wdGlvbnMuYW1wUmVhZGVySWQgJiYgb3B0aW9ucy5BTVAgJiYgIWlzTG9nZ2VkSW4pIHtcbiAgICBjb25zdCByZWFkZXJJZFN0YXRlID0gYXdhaXQgb3B0aW9ucy5BTVAuYXV0aGVudGljYXRlQU1QUmVhZGVySUQob3B0aW9ucy5hbXBSZWFkZXJJZCk7XG4gICAgaWYgKFxuICAgICAgcmVhZGVySWRTdGF0ZS5saW5rZWRBcmNJZGVudGl0eSAmJlxuICAgICAgcmVhZGVySWRTdGF0ZS5sYXN0TG9naW4gPiByZWFkZXJJZFN0YXRlLmxhc3RMb2dvdXQgJiZcbiAgICAgIERhdGUubm93KCkgLSByZWFkZXJJZFN0YXRlLmxhc3RMb2dpbiA8IEFNUFNlc3Npb25FeHBpcmF0aW9uXG4gICAgKSB7XG4gICAgICBpc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsOiBpc0xvZ2dlZEluIHx8IGZhbHNlLFxuICAgIHVwZGF0ZWQ6IERhdGUubm93KClcbiAgfTtcbn1cblxuLyoqXG4gKiBSdW4gZWl0aGVyIHRoZSBjdXN0b21SZWdDaGVjayBmdW5jdGlvbiBkZWZpbmVkIGluIHRoZSBvcHRpb25zIHBhcmFtZXRlciwgb3IgdGhlIGRlZmF1bHRcbiAqIHJlZyBjaGVjayBpZiBubyBvcHRpb25zLmN1c3RvbVJlZ0NoZWNrIGlzIGRlZmluZWQuXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gQSBQcm9taXNlIHJlc29sdmluZyB0byBhbiBvYmplY3Qgd2hpY2ggZGVub3RlcyBpZiBhIHVzZXIgaXMgcmVnaXN0ZXJlZCBvciBub3QuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWdEYXRhKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCByZWdDaGVjayA9XG4gICAgdHlwZW9mIG9wdGlvbnMuY3VzdG9tUmVnQ2hlY2sgPT09ICdmdW5jdGlvbidcbiAgICAgID8gb3B0aW9ucy5jdXN0b21SZWdDaGVja1xuICAgICAgOiBkZWZhdWx0UmVnaXN0cmF0aW9uQ2hlY2s7XG5cbiAgcmV0dXJuIHJlZ0NoZWNrKG9wdGlvbnMpO1xufVxuIiwiZnVuY3Rpb24gZGVmYXVsdEdldFBhZ2VEYXRhKG9wdGlvbnMpIHtcbiAgbGV0IHNlY3Rpb247XG4gIGxldCBjb250ZW50VHlwZTtcbiAgbGV0IGNvbnRlbnRSZXN0cmljdGlvbjtcbiAgbGV0IGNvbnRlbnRJZGVudGlmaWVyO1xuXG4gIGlmIChFTlYudGVzdCkge1xuICAgIHNlY3Rpb24gPSAnYnVzaW5lc3MnO1xuICAgIGNvbnRlbnRUeXBlID0gJ2FydGljbGUnO1xuICAgIGNvbnRlbnRSZXN0cmljdGlvbiA9ICdub3JtYWwnO1xuICB9IGVsc2Uge1xuICAgIHNlY3Rpb24gPSBvcHRpb25zLnNlY3Rpb247XG4gICAgY29udGVudFR5cGUgPSBvcHRpb25zLmNvbnRlbnRUeXBlO1xuICAgIGNvbnRlbnRSZXN0cmljdGlvbiA9IG9wdGlvbnMuY29udGVudFJlc3RyaWN0aW9uO1xuICAgIGNvbnRlbnRJZGVudGlmaWVyID0gb3B0aW9ucy5jb250ZW50SWRlbnRpZmllcjtcbiAgfVxuXG4gIGlmIChFTlYudGVzdCkge1xuICAgIGNvbnRlbnRJZGVudGlmaWVyID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIGlmICghY29udGVudElkZW50aWZpZXIpIHtcbiAgICBjb25zdCBjYW5vbmljYWxMaW5rRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuXG4gICAgaWYgKGNhbm9uaWNhbExpbmtFbCkge1xuICAgICAgY29udGVudElkZW50aWZpZXIgPSBjYW5vbmljYWxMaW5rRWwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtMT0dfUFJFRklYfSBVbmFibGUgdG8gZmluZCBjb250ZW50IGlkZW50aWZpZXJgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHM6IHNlY3Rpb24sXG4gICAgYzogY29udGVudFR5cGUsXG4gICAgY3I6IGNvbnRlbnRSZXN0cmljdGlvbixcbiAgICBjaTogY29udGVudElkZW50aWZpZXJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhZ2VEYXRhKGN1c3RvbVBhZ2VEYXRhLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tUGFnZURhdGEgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZGVmYXVsdEdldFBhZ2VEYXRhKG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjdXN0b21QYWdlRGF0YShvcHRpb25zKTsgLy8gc2hvdWxkIGJlIHN5bmNocm9ub3VzIChub3QgYSBwcm9taXNlISlcbiAgfVxufVxuIiwiLyoqXG4gKiBHZXRzIHRoZSByZWFkIGNvdW50cyBmcm9tIHRoZSBkYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YT17fV0gLSBhIGRhdGEgb2JqZWN0IHJlcHJlc2VudGluZyBsb25ndGVybSBzdG9yYWdlLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgZWl0aGVyIGFuIGV4aXN0aW5nIHJlYWQgY291bnQgb3IgYSBuZXcgZW1wdHkgb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFkQ291bnRzKGRhdGEgPSB7fSkge1xuICByZXR1cm4ge1xuICAgIC4uLmRhdGEsXG4gICAgcmM6IGRhdGEucmMgJiYgKGRhdGEucmMuYyB8fCBkYXRhLnJjLmxhc3RVcGRhdGVkKSA/IHt9IDogZGF0YS5yYyB8fCB7fVxuICB9O1xufVxuIiwiaW1wb3J0IHsgZ2V0QnJvd3NlckRhdGEgfSBmcm9tICcuL2ZhY3RHYXRoZXJpbmcvYnJvd3NlckRhdGEnO1xuaW1wb3J0IHsgZ2V0UGFnZURhdGEgfSBmcm9tICcuL2ZhY3RHYXRoZXJpbmcvcGFnZURhdGEnO1xuaW1wb3J0IHsgZ2V0UmVhZENvdW50cyB9IGZyb20gJy4vZmFjdEdhdGhlcmluZy9yZWFkQ291bnRzJztcbmltcG9ydCB7XG4gIGdldFJlZ0RhdGEsXG4gIGdldFN1YkRhdGEsXG4gIHNob3VsZEZldGNoU3VicyBhcyBzaG91bGRGZXRjaFN1YnNDaGVja1xufSBmcm9tICcuL2ZhY3RHYXRoZXJpbmcvZW50aXRsZW1lbnRzJztcbmltcG9ydCB7IGlzRXhwaXJlZCB9IGZyb20gJy4vdXRpbHMvZXhwaXJhdGlvbi5qcyc7XG5pbXBvcnQgeyBjaGVja0ZvckZpcnN0T2ZNb250aCwgY2hlY2tOZWVkVG9DbGVhciB9IGZyb20gJ0BhcmMvcGF5d2FsbC1jb3JlJztcblxubGV0IGJjQ3JlYXRlUHJvZmlsZSA9ICgpID0+IHt9O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmFjdHMobG9uZ1Rlcm1EYXRhID0ge30sIG9wdGlvbnMgPSB7fSwgcnVsZXMpIHtcbiAgY29uc3QgeyBjdXN0b21QYWdlRGF0YSB9ID0gb3B0aW9ucztcbiAgY29uc3QgcmVnRGF0YSA9IGF3YWl0IGdldFJlZ0RhdGEob3B0aW9ucyk7XG5cbiAgY29uc3QgdXNlck5hbWUgPSBnZXRVc2VyTmFtZShvcHRpb25zKTtcbiAgY29uc3Qgc2VnbWVudHMgPSBhd2FpdCBnZXRCbHVlQ29uaWNTZWdtZW50cyhvcHRpb25zLCB1c2VyTmFtZSk7XG4gIGNvbnN0IHVzZXJMb25nVGVybURhdGEgPSBsb25nVGVybURhdGFbdXNlck5hbWVdIHx8IHt9O1xuICBjb25zdCBzaG91bGRGZXRjaFN1YnMgPSBhd2FpdCBzaG91bGRGZXRjaFN1YnNDaGVjayhvcHRpb25zKTtcbiAgY29uc3QgZmFjdHMgPSB7XG4gICAgLi4uKGF3YWl0IGdldEJyb3dzZXJEYXRhKHVzZXJMb25nVGVybURhdGEpKSxcbiAgICAuLi5nZXRSZWFkQ291bnRzKHVzZXJMb25nVGVybURhdGEpLFxuICAgIC4uLmdldFBhZ2VEYXRhKGN1c3RvbVBhZ2VEYXRhLCBvcHRpb25zKSxcbiAgICByZWc6IHJlZ0RhdGEsXG4gICAgc3ViOiB1c2VyTG9uZ1Rlcm1EYXRhLnN1YixcbiAgICBnZW86IHVzZXJMb25nVGVybURhdGEuZ2VvIHx8IHt9LFxuICAgIHY6IHVzZXJMb25nVGVybURhdGEudixcbiAgICBiYzogc2VnbWVudHNcbiAgfTtcblxuICBpZiAoIWZhY3RzLnJjKSB7XG4gICAgZmFjdHMucmMgPSB7fTtcbiAgfVxuXG4gIGlmICghZmFjdHMudiB8fCAoZmFjdHMudi5sYXN0VXBkYXRlZCAmJiBjaGVja0ZvckZpcnN0T2ZNb250aChmYWN0cy52Lmxhc3RVcGRhdGVkKSkpIHtcbiAgICBmYWN0cy52ID0geyBjaTogW10sIGxhc3RVcGRhdGVkOiBEYXRlLm5vdygpIH07XG4gIH1cblxuICAvL0l0ZXJhdGVzIHRocm91Z2ggdGhlIHVzZXIgcmVhZCBjb3VudHMgYW5kIGNoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGV5IG5lZWQgdG8gYmVcbiAgLy9jbGVhcmVkIGRlcGVuZGVudCBvbiB0aGUgY3VycmVudCBkYXRlL3RpbWUgYW5kIHRoZSBidWRnZXQgdHlwZSBmb3IgdGhhdCBwYXJ0aWN1bGFyIHJ1bGUuXG5cbiAgT2JqZWN0LmtleXMoZmFjdHMucmMpLmZvckVhY2gocnVsZUlkID0+IHtcbiAgICBjb25zdCBpID0gcnVsZXMuZmluZEluZGV4KHJ1bGUgPT4gcnVsZS5pZCA9PSBydWxlSWQpO1xuICAgIGNvbnN0IGJ1ZGdldCA9IChydWxlc1tpXSB8fCB7fSkuYnVkZ2V0IHx8IHt9O1xuICAgIGxldCBjbGVhciA9IGZhbHNlO1xuICAgIGNsZWFyID0gY2hlY2tOZWVkVG9DbGVhcihidWRnZXQsIGZhY3RzLnJjW3J1bGVJZF0pO1xuICAgIGZhY3RzLnJjW3J1bGVJZF0gPSBjbGVhciA/IHsgYzogMCwgcjogW10sIGxhc3RVcGRhdGVkOiBEYXRlLm5vdygpIH0gOiBmYWN0cy5yY1tydWxlSWRdO1xuICB9KTtcblxuICBpZiAoXG4gICAgaXNFeHBpcmVkKGZhY3RzLnN1YiAmJiBmYWN0cy5zdWIudXBkYXRlZCwgMTAwMCAqIDYwICogNjAgKiAyNCkgfHxcbiAgICBzaG91bGRGZXRjaFN1YnMgfHxcbiAgICBmYWN0cy5zdWIuZW50aXRsZW1lbnRzRmFpbGVkXG4gICkge1xuICAgIGNvbnN0IHN1YkRhdGEgPSBhd2FpdCBnZXRTdWJEYXRhKG9wdGlvbnMpO1xuICAgIGZhY3RzLnN1YiA9IHtcbiAgICAgIHA6IHN1YkRhdGEucCxcbiAgICAgIHVwZGF0ZWQ6IHN1YkRhdGEudXBkYXRlZCxcbiAgICAgIHRpbWVUYWtlbjogc3ViRGF0YS50aW1lVGFrZW4sXG4gICAgICBlbnRpdGxlbWVudHNGYWlsZWQ6IHN1YkRhdGEuZW50aXRsZW1lbnRzRmFpbGVkXG4gICAgfTtcblxuICAgIGlmIChzdWJEYXRhLmdlbykge1xuICAgICAgZmFjdHMuZ2VvID0ge1xuICAgICAgICAuLi5zdWJEYXRhLmdlbyxcbiAgICAgICAgdXBkYXRlZDogc3ViRGF0YS51cGRhdGVkXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc3ViRGF0YS5wICYmIHN1YkRhdGEucC5sZW5ndGgpIHtcbiAgICAgIGZhY3RzLnJlZyA9IHtcbiAgICAgICAgbDogdHJ1ZSxcbiAgICAgICAgdXBkYXRlZDogRGF0ZS5ub3coKVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFjdHM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCbHVlQ29uaWNTZWdtZW50cyhvcHRpb25zLCB1c2VyTmFtZSkge1xuICBpZiAod2luZG93ICYmIG9wdGlvbnMgJiYgb3B0aW9ucy5ibHVlQ29uaWNDbGllbnQpIHtcbiAgICBiY0NyZWF0ZVByb2ZpbGUgPSBvcHRpb25zLmJsdWVDb25pY0NsaWVudC5wcm9maWxlLmNyZWF0ZVByb2ZpbGU7XG4gICAgY29uc3QgSWRlbnRpdHkgPSBvcHRpb25zLklkZW50aXR5IHx8IHdpbmRvdy5JZGVudGl0eTtcbiAgICBpZiAodHlwZW9mIElkZW50aXR5ICE9PSAndW5kZWZpbmVkJyAmJiBJZGVudGl0eS5pc0xvZ2dlZEluKSB7XG4gICAgICBjb25zdCBsb2dnZWRJbiA9IGF3YWl0IElkZW50aXR5LmlzTG9nZ2VkSW4oKTtcbiAgICAgIGlmICh1c2VyTmFtZSAhPT0gJ2Fub255bW91cycgJiYgIWxvZ2dlZEluKSB7XG4gICAgICAgIG9wdGlvbnMuYmx1ZUNvbmljQ2xpZW50ICYmXG4gICAgICAgICAgb3B0aW9ucy5ibHVlQ29uaWNDbGllbnQucHJvZmlsZSAmJlxuICAgICAgICAgIG9wdGlvbnMuYmx1ZUNvbmljQ2xpZW50LnByb2ZpbGUuY3JlYXRlUHJvZmlsZSgpO1xuICAgICAgfVxuICAgICAgbGV0IHNlZ21lbnRzID0gb3B0aW9ucy5ibHVlQ29uaWNDbGllbnQuZ2V0U2VnbWVudHMoKTtcbiAgICAgIHNlZ21lbnRzID0gQXJyYXkuaXNBcnJheShzZWdtZW50cykgJiYgc2VnbWVudHMubWFwKHNlZyA9PiBzZWcubmFtZSk7XG4gICAgICByZXR1cm4gc2VnbWVudHM7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyTmFtZShvcHRpb25zKSB7XG4gIGNvbnN0IElkZW50aXR5ID0gb3B0aW9ucy5JZGVudGl0eSB8fCB3aW5kb3cuSWRlbnRpdHk7XG5cbiAgaWYgKG9wdGlvbnMudXNlck5hbWUpIHtcbiAgICByZXR1cm4gb3B0aW9ucy51c2VyTmFtZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgSWRlbnRpdHkgIT09ICd1bmRlZmluZWQnICYmIElkZW50aXR5LnVzZXJJZGVudGl0eSAmJiBJZGVudGl0eS51c2VySWRlbnRpdHkudXVpZCkge1xuICAgIHJldHVybiBJZGVudGl0eS51c2VySWRlbnRpdHkudXVpZDtcbiAgfVxuXG4gIGxldCB1dWlkO1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQXJjSWQuVVNFUl9JTkZPJykgfHwgJ3t9Jyk7XG4gICAgY29uc3Qgc2Vzc2lvblVzZXJJbmZvID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdBcmNJZC5VU0VSX0lORk8nKSB8fCAne30nKTtcbiAgICB1dWlkID0gdXNlckluZm8udXVpZCB8fCBzZXNzaW9uVXNlckluZm8udXVpZDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tBcmNQXTogRXJyb3IgZmluZGluZyB1c2VyIGluZm8gaW4gYnJvd3NlciBzdG9yYWdlJywgZSk7XG4gIH1cblxuICBpZiAodXVpZCkge1xuICAgIHJldHVybiB1dWlkO1xuICB9XG5cbiAgcmV0dXJuICdhbm9ueW1vdXMnO1xufVxuXG5pZiAod2luZG93KSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdBcmNTREsubG9nb3V0JywgKCkgPT4ge1xuICAgIGJjQ3JlYXRlUHJvZmlsZSgpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGdldEZhY3RzLCBnZXRVc2VyTmFtZSB9IGZyb20gJy4vZmFjdHMnO1xuaW1wb3J0IHsgZ2V0U3ViRGF0YSB9IGZyb20gJy4vZmFjdEdhdGhlcmluZy9lbnRpdGxlbWVudHMnO1xuaW1wb3J0IHsgZXZhbHVhdGVSdWxlc2V0LCBpc0V4ZW1wdFRvUnVsZSB9IGZyb20gJ0BhcmMvcGF5d2FsbC1jb3JlJztcbmltcG9ydCB7IGluaXRTdG9yYWdlLCBsb25nVGVybVN0b3JlIH0gZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2UnO1xuaW1wb3J0IGNsZWFuVXAgZnJvbSAnLi91dGlscy9jbGVhblVwJztcbmltcG9ydCB7IGlzSnd0RXhwaXJlZCwgZ2V0SldUIH0gZnJvbSAnLi91dGlscy9qd3QnO1xuXG5leHBvcnQgbGV0IF9mYWN0cyA9IHt9O1xuZXhwb3J0IGxldCBfcnVsZXMgPSBBcmNQV1J1bGVzO1xuZXhwb3J0IGNvbnN0IF92ZXJzaW9uID0gVkVSU0lPTjtcbmV4cG9ydCBjb25zdCBfcHVibGlzaFRpbWVzdGFtcCA9XG4gIHR5cGVvZiBBcmNQV1B1Ymxpc2hUaW1lc3RhbXAgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBBcmNQV1B1Ymxpc2hUaW1lc3RhbXA7XG5leHBvcnQgY29uc3QgcGF1c2VkID0gdHlwZW9mIEFyY1BXUGF1c2VkID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogQXJjUFdQYXVzZWQ7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRW50aXRsZW1lbnRzKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBzdWJEYXRhID0gKGF3YWl0IGdldFN1YkRhdGEob3B0aW9ucykpIHx8IHt9O1xuXG4gIF9mYWN0cy5zdWIgPSB7XG4gICAgcDogc3ViRGF0YS5wLFxuICAgIHVwZGF0ZWQ6IHN1YkRhdGEudXBkYXRlZCxcbiAgICB0aW1lVGFrZW46IHN1YkRhdGEudGltZVRha2VuLFxuICAgIGVudGl0bGVtZW50c0ZhaWxlZDogc3ViRGF0YS5lbnRpdGxlbWVudHNGYWlsZWRcbiAgfTtcbiAgcmV0dXJuIF9mYWN0cy5zdWI7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVQYXl3YWxsKHRyaWdnZXJpbmdSdWxlID0geyBydWxlOiB7IHB3OiAnJyB9IH0sIHsgcGF5d2FsbEZ1bmN0aW9uIH0pIHtcbiAgX2ZhY3RzLnYuY2kgPSBfZmFjdHMudi5jaS5maWx0ZXIoY2kgPT4gX2ZhY3RzLmNpICE9PSBjaSk7IC8vIHJlbW92ZSB0aGUgdmlzaXRcbiAgcGF5d2FsbEZ1bmN0aW9uKHRyaWdnZXJpbmdSdWxlLnJ1bGUucHcpOyAvLyBydW4gcGF5d2FsbCBmdW5jdGlvbi5cbiAgZGVsZXRlIHRyaWdnZXJpbmdSdWxlLnJ1bGU7IC8vIGRlbGV0ZSB0aGUgYWN0dWFsIHJ1bGUgc28gaXQgb25seSByZXR1cm5zIHJlbGV2YW50IGRhdGEuXG4gIHJldHVybiB0cmlnZ2VyaW5nUnVsZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RvcmVSZWFkZXJJZChvcHRpb25zID0ge30pIHtcbiAgbGV0IGp3dCA9IGF3YWl0IGdldEpXVChvcHRpb25zKTtcbiAgaWYgKGp3dCAmJiAhaXNKd3RFeHBpcmVkKGp3dCkpIHtcbiAgICBvcHRpb25zLkFNUC5jaGVja0FNUFJlYWRlcklEKG9wdGlvbnMuYW1wUmVhZGVySWQpO1xuICB9XG59XG5cbi8qKlxuICpcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gdHJpZ2dlcmluZ1J1bGVzIGFuIG9iamVjdCB3aXRoXG4gKiBAcGFyYW0geyp9IG9wdGlvbnNcbiAqIEByZXR1cm5zXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRXhlbXB0aW9ucyh0cmlnZ2VyaW5nUnVsZXMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBlbnRpdGxlbWVudHMgPSBfZmFjdHMuc3ViO1xuICBsZXQgRU5USVRMRU1FTlRTX0ZFVENIRUQgPSBmYWxzZTtcblxuICAvLyBmZXRjaCBlbnRpdGxlbWVudHMgcmVnYXJkbGVzcyBvZiBsb2dnZWQgaW4gc3RhdHVzIChmb3IgaXAgZW50aXRsZW1lbnRzKVxuICBpZiAoIWVudGl0bGVtZW50cyB8fCAhZW50aXRsZW1lbnRzLnAgfHwgIWVudGl0bGVtZW50cy5wLmxlbmd0aCkge1xuICAgIGVudGl0bGVtZW50cyA9IGF3YWl0IGZldGNoRW50aXRsZW1lbnRzKG9wdGlvbnMpO1xuICAgIEVOVElUTEVNRU5UU19GRVRDSEVEID0gdHJ1ZTtcbiAgfVxuICBsZXQgaXNTd2dFeGVtcHQ7XG4gIGlmIChcbiAgICB0cmlnZ2VyaW5nUnVsZXMubGVuZ3RoICYmXG4gICAgb3B0aW9ucy5zd2cgJiZcbiAgICBvcHRpb25zLmlzU3dnRW50aXRsZWRDaGVjayAmJlxuICAgIHR5cGVvZiBvcHRpb25zLmlzU3dnRW50aXRsZWRDaGVjayA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICB0cnkge1xuICAgICAgaXNTd2dFeGVtcHQgPSBhd2FpdCBvcHRpb25zLmlzU3dnRW50aXRsZWRDaGVjaygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIFN3RyBlbnRpdGxlbWVudHM6ICcsIGUpO1xuICAgIH1cbiAgICBpZiAoIWlzU3dnRXhlbXB0KSB7XG4gICAgICBvcHRpb25zLnN3Zy5nZXRFbnRpdGxlbWVudHMoKS50aGVuKG9wdGlvbnMuc3dnRW50aXRsZW1lbnRzSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCB0cmlnZ2VyaW5nUnVsZSBvZiB0cmlnZ2VyaW5nUnVsZXMpIHtcbiAgICBsZXQgaXNFeGVtcHQgPSBpc0V4ZW1wdFRvUnVsZSh0cmlnZ2VyaW5nUnVsZS5ydWxlLCBfZmFjdHMuc3ViLCBfZmFjdHMucmVnKTtcblxuICAgIGlmICghaXNFeGVtcHQgJiYgIUVOVElUTEVNRU5UU19GRVRDSEVEKSB7XG4gICAgICBlbnRpdGxlbWVudHMgPSBhd2FpdCBmZXRjaEVudGl0bGVtZW50cyhvcHRpb25zKTtcbiAgICAgIEVOVElUTEVNRU5UU19GRVRDSEVEID0gdHJ1ZTtcbiAgICAgIGlzRXhlbXB0ID0gaXNFeGVtcHRUb1J1bGUodHJpZ2dlcmluZ1J1bGUucnVsZSwgX2ZhY3RzLnN1YiwgX2ZhY3RzLnJlZyk7XG4gICAgfVxuXG4gICAgaXNFeGVtcHQgPSBpc0V4ZW1wdCB8fCBpc1N3Z0V4ZW1wdDtcblxuICAgIGlmICghaXNFeGVtcHQpIHtcbiAgICAgIHJldHVybiBleGVjdXRlUGF5d2FsbCh0cmlnZ2VyaW5nUnVsZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7IC8vIHJlYWRlciBpcyBleGVtcHQgZnJvbSBhbGwgdHJpZ2dlcmluZyBydWxlcy5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RmFjdHNBbmRFdmFsdWF0ZVJ1bGVzKF9ydWxlcyA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgbG9uZ1Rlcm1EYXRhID0gKGF3YWl0IGxvbmdUZXJtU3RvcmUuZ2V0SXRlbShTVE9SRV9OQU1FKSkgfHwge307XG4gIF9mYWN0cyA9IGF3YWl0IGdldEZhY3RzKGxvbmdUZXJtRGF0YSB8fCB7fSwgb3B0aW9ucywgX3J1bGVzKTtcbiAgY29uc3QgYWxyZWFkeVZpc2l0ZWQgPSBfZmFjdHMudi5jaS5pbmRleE9mKF9mYWN0cy5jaSkgPj0gMDtcbiAgbGV0IHRyaWdnZXJpbmdSdWxlcyA9IG51bGw7XG4gIC8vIGV2YWx1YXRlIHJ1bGVzZXRcbiAgaWYgKCFhbHJlYWR5VmlzaXRlZCAmJiAhcGF1c2VkKSB7XG4gICAgdHJpZ2dlcmluZ1J1bGVzID0gZXZhbHVhdGVSdWxlc2V0KF9ydWxlcywgX2ZhY3RzLCBvcHRpb25zKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFscmVhZHlWaXNpdGVkLFxuICAgIHRyaWdnZXJpbmdSdWxlcyxcbiAgICBfZmFjdHNcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNldHMgdGhlIHBheXdhbGwgZGF0YSBpbiBsb25nIHRlcm0gc3RvcmVzLlxuICogQHBhcmFtIHtTdG9yYWdlfSBsb25nVGVybVN0b3JlIC0gb3B0aW9uYWwgLSBhIGNsYXNzIGltcGxlbWVudGluZyBnZXRJdGVtLCBzZXRJdGVtLCBhbmQgcmVtb3ZlSXRlbS5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KGxvbmdUZXJtKSB7XG4gIGlmICghbG9uZ1Rlcm0pIHtcbiAgICBpbml0U3RvcmFnZShsb25nVGVybSk7XG4gIH1cblxuICByZXR1cm4gbG9uZ1Rlcm1TdG9yZS5zZXRJdGVtKFNUT1JFX05BTUUsIHt9KTtcbn1cblxuLyoqXG4gKiBSdW5zIHBheXdhbGwgc2NyaXB0IGJ5IGZldGNoaW5nIGZhY3RzIGZyb20gdmFyaW91cyBzb3VyY2VzIGFuZCB0aGVuIGV2YWx1YXRpbmcgdGhlIHJ1bGVzZXQgYWdhaW5zdCB0aG9zZSBmYWN0c1xuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25hbCBmdW5jdGlvbnMgdG8gdXNlIHRvIGdhdGhlciBhbmQgc3RvcmUgZGF0YSAocGxlYXNlIHNlZSBkb2NzIGZvciBtb3JlKVxuICogQHBhcmFtIHtBcnJheX0gcnVsZXNldCAtIEFuIGFycmF5IGNvbnRhaW5pbmcgcnVsZXNldHMuIFRoaXMgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgdGVzdGluZy5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBSZXR1cm5zIGBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICB0cmlnZ2VyZWQ6IEFycmF5LFxuICAgICAgICB0aW1lVGFrZW46IE51bWJlcixcbiAgICAgICAgZXZhbHVhdGVkOiBCb29sZWFuLFxuICAgICAgICBydWxlQ291bnQ6IE51bWJlclxuICAgICAgfSlgLCBvciBgUHJvbWlzZS5yZWplY3QoZXJyb3IpYCBpZiBhbnkgZXJyb3Igb2NjdXJlZC5cbiAqL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKG9wdGlvbnMgPSB7fSwgcnVsZXNldCkge1xuICBpZiAocnVsZXNldCkge1xuICAgIF9ydWxlcyA9IHJ1bGVzZXQ7XG4gIH1cblxuICBpZiAoIWxvbmdUZXJtU3RvcmUpIHtcbiAgICBpbml0U3RvcmFnZShvcHRpb25zLmxvbmdUZXJtU3RvcmFnZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMucGF5d2FsbEZ1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke0xPR19QUkVGSVh9IE5vIHZhbGlkIHBheXdhbGxGdW5jdGlvbiBkZWZpbmVkIC0tIGJhaWxpbmcgb3V0YCk7XG4gIH1cbiAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICBjb25zdCBsb25nVGVybURhdGEgPSAoYXdhaXQgbG9uZ1Rlcm1TdG9yZS5nZXRJdGVtKFNUT1JFX05BTUUpKSB8fCB7fTtcbiAgbGV0IHVzZXJOYW1lID0gZ2V0VXNlck5hbWUob3B0aW9ucyk7XG5cbiAgaWYgKG9wdGlvbnMuYW1wUmVhZGVySWQgJiYgb3B0aW9ucy5BTVApIHtcbiAgICBhd2FpdCBzdG9yZVJlYWRlcklkKG9wdGlvbnMpO1xuICB9XG5cbiAgbGV0IHtcbiAgICBhbHJlYWR5VmlzaXRlZCxcbiAgICB0cmlnZ2VyaW5nUnVsZXMsXG4gICAgX2ZhY3RzOiBmYWN0c1xuICB9ID0gYXdhaXQgZ2V0RmFjdHNBbmRFdmFsdWF0ZVJ1bGVzKF9ydWxlcywgb3B0aW9ucyk7XG4gIF9mYWN0cyA9IGZhY3RzO1xuXG4gIGxldCBwYXl3YWxsaW5nUnVsZSA9IG51bGw7XG5cbiAgLy8gY2hlY2sgZW50aXRsZW1lbnRzIGFuZCBvdGhlciBleGVtcHRpb25zXG4gIGlmIChBcnJheS5pc0FycmF5KHRyaWdnZXJpbmdSdWxlcykgJiYgdHJpZ2dlcmluZ1J1bGVzLmxlbmd0aCkge1xuICAgIHBheXdhbGxpbmdSdWxlID0gYXdhaXQgY2hlY2tFeGVtcHRpb25zKHRyaWdnZXJpbmdSdWxlcywgb3B0aW9ucyk7XG4gIH1cblxuICAvLyBzYXZlIHZpc2l0ICYgcmVhZGNvdW50cyB3aGljaCBnZXQgc2V0IGluIGBldmFsdWF0ZVJ1bGVzZXRgXG4gIGF3YWl0IGxvbmdUZXJtU3RvcmUuc2V0SXRlbShTVE9SRV9OQU1FLCB7XG4gICAgLi4ubG9uZ1Rlcm1EYXRhLFxuICAgIFt1c2VyTmFtZV06IHtcbiAgICAgIC4uLmxvbmdUZXJtRGF0YVt1c2VyTmFtZV0sXG4gICAgICAuLi5fZmFjdHNcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgdHJpZ2dlcmVkOiBwYXl3YWxsaW5nUnVsZSxcbiAgICB0aW1lVGFrZW46IERhdGUubm93KCkgLSBzdGFydCxcbiAgICB2aXNpdGVkOiBhbHJlYWR5VmlzaXRlZCxcbiAgICBwYXVzZWQ6IHBhdXNlZCxcbiAgICBydWxlQ291bnQ6IF9ydWxlcy5sZW5ndGgsXG4gICAgcHJpdmF0ZTogX2ZhY3RzLnBtXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLnJlc3VsdHNDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMucmVzdWx0c0NhbGxiYWNrKHJlc3VsdHMpO1xuICB9XG5cbiAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgIHsgdHlwZTogJ0ZST01fUEpTJywgQXJjUDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh3aW5kb3cuQXJjUCkpLCByZXN1bHRzOiByZXN1bHRzIH0sXG4gICAgJyonXG4gICk7XG5cbiAgLy8gY2xlYW4gdXAgaXJyZWxldmFudCBjb3VudHNcbiAgYXdhaXQgY2xlYW5VcCh1c2VyTmFtZSwgbG9uZ1Rlcm1TdG9yZSwgX3J1bGVzKTtcblxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuLy8gQXV0byBydW4gdG8gZW5hYmxlIGFzeW5jIGxvYWRpbmcgb2YgdGhpcyBzY3JpcHRcbmlmICh0eXBlb2Ygd2luZG93W09QVElPTlNdICE9PSAndW5kZWZpbmVkJykge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB3aW5kb3cuQXJjUC5ydW4od2luZG93W09QVElPTlNdKTtcbiAgfSwgMSk7IC8vIHJ1biBhdCB0aGUgZW5kIG9mIHRoZSBleGVjdXRpb24gc3RhY2sgdG8gZW5zdXJlIGV2ZXJ5dGhpbmcgaXMgbG9hZGVkLlxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJvd3NlclN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0b3JlID0gbG9jYWxTdG9yYWdlO1xuICB9XG4gIGdldEl0ZW0oa2V5KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShKU09OLnBhcnNlKHRoaXMuc3RvcmUuZ2V0SXRlbShrZXkpKSk7XG4gIH1cbiAgc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnN0b3JlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpKTtcbiAgfVxuICByZW1vdmVJdGVtKGtleSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zdG9yZS5yZW1vdmVJdGVtKGtleSkpO1xuICB9XG59XG4iLCIvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbWFyY3Vzd2VzdGluL3N0b3Jlcy9jb29raWVTdG9yZS5qc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWVTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoaXNTZXNzaW9uKSB7XG4gICAgdGhpcy5pc1Nlc3Npb24gPSBpc1Nlc3Npb247XG4gICAgdGhpcy5kb2MgPSBkb2N1bWVudDtcbiAgfVxuXG4gIGdldEl0ZW0oa2V5KSB7XG4gICAgaWYgKCFrZXkgfHwgIXRoaXMuX2hhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHJlZ2V4cFN0ciA9XG4gICAgICAnKD86XnwuKjtcXFxccyopJyArXG4gICAgICBlbmNvZGVVUklDb21wb25lbnQoa2V5KS5yZXBsYWNlKC9bLS4rKl0vZywgJ1xcXFwkJicpICtcbiAgICAgICdcXFxccypcXFxcPVxcXFxzKigoPzpbXjtdKD8hOykpKlteO10/KS4qJztcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodGhpcy5kb2MuY29va2llLnJlcGxhY2UobmV3IFJlZ0V4cChyZWdleHBTdHIpLCAnJDEnKSkpXG4gICAgKTtcbiAgfVxuXG4gIHNldEl0ZW0oa2V5LCBkYXRhKSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kb2MuY29va2llID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGRhdGEpKX07ICR7XG4gICAgICB0aGlzLmlzU2Vzc2lvbiA/ICcnIDogJ2V4cGlyZXM9VHVlLCAxOSBKYW4gMjAzOCAwMzoxNDowNyBHTVQ7ICdcbiAgICB9IHBhdGg9L2A7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgaWYgKCFrZXkgfHwgIXRoaXMuX2hhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05vIHN1Y2gga2V5IGluIHRoZSBzdG9yZScpO1xuICAgIH1cbiAgICB0aGlzLmRvYy5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UOyBwYXRoPS8nO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIF9oYXMoa2V5KSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAnKD86Xnw7XFxcXHMqKScgKyBlbmNvZGVVUklDb21wb25lbnQoa2V5KS5yZXBsYWNlKC9bLS4rKl0vZywgJ1xcXFwkJicpICsgJ1xcXFxzKlxcXFw9J1xuICAgICkudGVzdCh0aGlzLmRvYy5jb29raWUpO1xuICB9XG59XG5cbmNvbnN0IGRvYyA9IGRvY3VtZW50O1xuIiwiaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWVTdG9yYWdlJztcbmltcG9ydCBCcm93c2VyU3RvcmFnZSBmcm9tICcuL2Jyb3dzZXJTdG9yYWdlJztcblxuZXhwb3J0IGxldCBsb25nVGVybVN0b3JlO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9uZ1Rlcm1TdG9yYWdlKHN0b3JhZ2UpIHtcbiAgbG9uZ1Rlcm1TdG9yZSA9IHN0b3JhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmFnZShsb25nVGVybSkge1xuICBpZiAobG9uZ1Rlcm0pIHtcbiAgICBzZXRMb25nVGVybVN0b3JhZ2UobG9uZ1Rlcm0pO1xuICB9IGVsc2Uge1xuICAgIGluaXRTdG9yYWdlV2l0aERlZmF1bHRzKCdsb25nVGVybScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmFnZVdpdGhEZWZhdWx0cyh0eXBlKSB7XG4gIHRyeSB7XG4gICAgLy8gY2hlY2sgaWYgd2UgY2FuIHdyaXRlIHRvIGxvY2Fsc3RvcmFnZVxuICAgIGNvbnN0IHRlc3RLZXkgPSBgJHtTVE9SRV9OQU1FfS50ZXN0YDtcbiAgICBpZiAodHlwZSA9PT0gJ2xvbmdUZXJtJyB8fCAhdHlwZSkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRlc3RLZXksICd0ZXN0VmFsdWUnKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0S2V5KTtcbiAgICAgIHNldExvbmdUZXJtU3RvcmFnZShuZXcgQnJvd3NlclN0b3JhZ2UoKSk7XG4gICAgfVxuICB9IGNhdGNoIChfKSB7XG4gICAgaWYgKHR5cGUgPT09ICdsb25nVGVybScgfHwgIXR5cGUpIHtcbiAgICAgIHNldExvbmdUZXJtU3RvcmFnZShuZXcgQ29va2llU3RvcmFnZShmYWxzZSkpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBSZW1vdmVzIHVudXNlZCBjb3VudHMuXG4gKiBJZiBhIHJlYWRjb3VudCBoYXMgYW4gaWQgd2hpY2ggZG9lc24ndCBoYXZlIGEgY29ycmVzcG9uZGluZyBvbmUgaW4gdGhlIHJ1bGVzZXQsIGl0IHdpbGwgZ2V0IGRlbGV0ZWQuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgc3RvcmVkIGludG8gdGhlIHN0b3JlIHBhc3NlZCBpbi5cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNsZWFuVXAodXNlck5hbWUsIGxvbmdUZXJtU3RvcmUsIHJ1bGVzKSB7XG4gIGlmICghcnVsZXMgfHwgIUFycmF5LmlzQXJyYXkocnVsZXMpIHx8IHJ1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjsgLy8gaWYgcnVsZXMgYXJlIG5vdCBwcmVzZW50LCBqdXN0IHNraXAgdGhpcyBwcm9jZXNzLlxuICB9XG5cbiAgaWYgKCFsb25nVGVybVN0b3JlIHx8IHR5cGVvZiBsb25nVGVybVN0b3JlLmdldEl0ZW0gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7TE9HX1BSRUZJWH0gaW52YWxpZCBzdG9yYWdlIGNsYXNzIHBhc3NlZCB0byBjbGVhblVwIHV0aWxgKTtcbiAgfVxuXG4gIGNvbnN0IHN0b3JlZERhdGEgPSBhd2FpdCBsb25nVGVybVN0b3JlLmdldEl0ZW0oU1RPUkVfTkFNRSk7XG4gIGlmICghc3RvcmVkRGF0YSB8fCAhc3RvcmVkRGF0YVt1c2VyTmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7TE9HX1BSRUZJWH0gbm8gZGF0YSBmb3VuZCBmb3IgdGhpcyB1c2VyYCk7XG4gIH1cblxuICBjb25zdCB1c2VyQ291bnRzID0gc3RvcmVkRGF0YVt1c2VyTmFtZV0ucmM7XG4gIE9iamVjdC5rZXlzKHVzZXJDb3VudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoIXJ1bGVzLmZpbmQocnVsZSA9PiBydWxlLmlkID09PSBOdW1iZXIoa2V5KSkpIHtcbiAgICAgIGRlbGV0ZSB1c2VyQ291bnRzW2tleV07XG4gICAgfVxuICB9KTtcblxuICBhd2FpdCBsb25nVGVybVN0b3JlLnNldEl0ZW0oU1RPUkVfTkFNRSwge1xuICAgIC4uLnN0b3JlZERhdGEsXG4gICAgW3VzZXJOYW1lXToge1xuICAgICAgLi4uc3RvcmVkRGF0YVt1c2VyTmFtZV0sXG4gICAgICByYzogeyAuLi51c2VyQ291bnRzIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSB0aW1lc3RhbXAgaXMgb2xkZXIgdGhhbiB0aGUgYWxsb3dlZCB0aHJlc2hvbGQuXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVTdGFtcCAtIHRpbWVTdGFtcCBpbiBtaWxsaXNlY29uZHMgZnJvbSBlcG9jaC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB0aHJlc2hvbGQgLSB0aHJlc2hvbGQgb2Ygd2hhdCBjb25zdGl0dXRlcyBhbiBleHBpcmVkIHRpbWVTdGFtcCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gZmFsc2UgaWYgaXQgaGFzbid0IGV4cGlyZWQgeWV0IG9yIGlmIG5vIHRpbWVTdGFtcCB3YXMgZm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0V4cGlyZWQodGltZVN0YW1wLCB0aHJlc2hvbGQpIHtcbiAgaWYgKCF0aW1lU3RhbXApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRpbWVTdGFtcCA+PSB0aHJlc2hvbGQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwYXJzZUp3dCh0b2tlbiA9ICcnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgdmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihgRXJyb3IgcGFyc2luZyBhY2Nlc3MgdG9rZW46ICR7dG9rZW59XG4gICAgJHtlfWApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0p3dEV4cGlyZWQodG9rZW4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBqd3RQYXlsb2FkID0gcGFyc2VKd3QodG9rZW4pO1xuICAgIHJldHVybiAxMDAwICogand0UGF5bG9hZC5leHAgPD0gRGF0ZS5ub3coKTsgLy8gand0IGRhdGVzIGFyZSBpbiBzZWNvbmRzIHNpbmNlIGVwb2NoLCBoZW5jZSBcIjEwMDAgKlwiXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBjaGVja2luZyB0b2tlbiBleHBpcnk6ICR7dG9rZW59XG4gICAgJHtlfWApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEpTT05SZXNwb25zZUhhbmRsZXIocmVzcG9uc2UpIHtcbiAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmICgoKHJlc3BvbnNlLnN0YXR1cyAvIDEwMCkgfCAwKSA9PT0gMikge1xuICAgICAgLy8gMjAwLTI5OVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlVGV4dFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICBjb2RlOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlVGV4dCxcbiAgICAgICAgaHR0cFN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKV1Qob3B0aW9ucykge1xuICBjb25zdCBJZGVudGl0eSA9IG9wdGlvbnMuSWRlbnRpdHkgfHwgd2luZG93LklkZW50aXR5O1xuICBpZiAoIW9wdGlvbnMuand0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2YgSWRlbnRpdHkgIT09ICd1bmRlZmluZWQnICYmIElkZW50aXR5LnVzZXJJZGVudGl0eSkge1xuICAgICAgICBhd2FpdCBJZGVudGl0eS5oZWFydGJlYXQoKTtcbiAgICAgICAgaWYgKElkZW50aXR5LnVzZXJJZGVudGl0eS5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgIHJldHVybiBJZGVudGl0eS51c2VySWRlbnRpdHkuYWNjZXNzVG9rZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB1c2VySW5mbztcbiAgICAgICAgbGV0IHNlbGVjdGVkU3RvcmFnZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBsb2NhbFVzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQXJjSWQuVVNFUl9JTkZPJykgfHwgJ3t9Jyk7XG4gICAgICAgICAgY29uc3Qgc2Vzc2lvblVzZXJJbmZvID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdBcmNJZC5VU0VSX0lORk8nKSB8fCAne30nKTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBsb2NhbFVzZXJJbmZvICYmXG4gICAgICAgICAgICBsb2NhbFVzZXJJbmZvLnV1aWQgJiZcbiAgICAgICAgICAgIGxvY2FsVXNlckluZm8uYWNjZXNzVG9rZW4gJiZcbiAgICAgICAgICAgIGxvY2FsVXNlckluZm8ucmVmcmVzaFRva2VuXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2U7XG4gICAgICAgICAgICB1c2VySW5mbyA9IGxvY2FsVXNlckluZm87XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHNlc3Npb25Vc2VySW5mbyAmJlxuICAgICAgICAgICAgc2Vzc2lvblVzZXJJbmZvLnV1aWQgJiZcbiAgICAgICAgICAgIHNlc3Npb25Vc2VySW5mby5hY2Nlc3NUb2tlbiAmJlxuICAgICAgICAgICAgc2Vzc2lvblVzZXJJbmZvLnJlZnJlc2hUb2tlblxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2VsZWN0ZWRTdG9yYWdlID0gc2Vzc2lvblN0b3JhZ2U7XG4gICAgICAgICAgICB1c2VySW5mbyA9IHNlc3Npb25Vc2VySW5mbztcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdbQXJjUF06IEVycm9yIGZpbmRpbmcgdXNlciBpbmZvIGluIGJyb3dzZXIgc3RvcmFnZScsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlckluZm8gJiYgdXNlckluZm8uYWNjZXNzVG9rZW47XG4gICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHVzZXJJbmZvICYmIHVzZXJJbmZvLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuICYmICFpc0p3dEV4cGlyZWQoYWNjZXNzVG9rZW4pICYmICFvcHRpb25zLmp3dCkge1xuICAgICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBY2Nlc3NUb2tlbiA9IGF3YWl0IHJlZnJlc2hKd3Qoe1xuICAgICAgICAgIGFjY2Vzc1Rva2VuLFxuICAgICAgICAgIHJlZnJlc2hUb2tlbixcbiAgICAgICAgICBzZWxlY3RlZFN0b3JhZ2UsXG4gICAgICAgICAgdXNlckluZm8sXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBhcGlPcmlnaW46IG9wdGlvbnMuaWRlbnRpdHlBcGlPcmlnaW4gfHwgb3B0aW9ucy5hcGlPcmlnaW5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdBY2Nlc3NUb2tlbjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbQXJjUF06IGVycm9yIGdldHRpbmcgb3IgcmVmcmVzaGluZyB0b2tlbnMgZnJvbSBzdG9yYWdlJywgZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuand0O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWZyZXNoSnd0ID0gKHtcbiAgYXBpT3JpZ2luLFxuICBhY2Nlc3NUb2tlbixcbiAgcmVmcmVzaFRva2VuLFxuICB1c2VySW5mbyxcbiAgb3B0aW9ucyxcbiAgc2VsZWN0ZWRTdG9yYWdlXG59KSA9PiB7XG4gIGlmIChyZWZyZXNoVG9rZW4gJiYgYWNjZXNzVG9rZW4gJiYgaXNKd3RFeHBpcmVkKGFjY2Vzc1Rva2VuKSAmJiAhaXNKd3RFeHBpcmVkKHJlZnJlc2hUb2tlbikpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAnaHR0cHM6Ly8nICsgYXBpT3JpZ2luLnJlcGxhY2UoL15odHRwcz86XFwvXFwvLywgJycpO1xuICAgIHJldHVybiBmZXRjaChgJHtvcmlnaW59L2lkZW50aXR5L3B1YmxpYy92MS9hdXRoL3Rva2VuYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIC4uLm9wdGlvbnMuaGVhZGVyc1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdG9rZW46IHJlZnJlc2hUb2tlbixcbiAgICAgICAgZ3JhbnRUeXBlOiAncmVmcmVzaC10b2tlbidcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKEpTT05SZXNwb25zZUhhbmRsZXIpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc3QgbmV3VXNlckluZm8gPSB7XG4gICAgICAgICAgLi4udXNlckluZm8sXG4gICAgICAgICAgYWNjZXNzVG9rZW46IGpzb24uYWNjZXNzVG9rZW4sXG4gICAgICAgICAgcmVmcmVzaFRva2VuOiBqc29uLnJlZnJlc2hUb2tlbiB8fCByZWZyZXNoVG9rZW5cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGpzb24uYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICBpZiAoanNvbi5yZWZyZXNoVG9rZW4pIHtcbiAgICAgICAgICAgIHNlbGVjdGVkU3RvcmFnZS5zZXRJdGVtKCdBcmNJZC5VU0VSX0lORk8nLCBKU09OLnN0cmluZ2lmeShuZXdVc2VySW5mbykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ganNvbi5hY2Nlc3NUb2tlbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoanNvbi5jb2RlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGAkW0FyYyBJZGVudGl0eSBTREtdIGNvZGU6XCIke2pzb24uY29kZX1cIiwgbWVzc2FnZTpcIiR7anNvbi5tZXNzYWdlfVwiYCk7XG4gICAgICAgICAgdGhyb3cganNvbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiAgaWYgKHJlZnJlc2hUb2tlbiAmJiBpc0p3dEV4cGlyZWQocmVmcmVzaFRva2VuKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignJFtBcmMgSWRlbnRpdHkgU0RLXSBSZWZyZXNoIHRva2VuIGlzIGV4cGlyZWQnKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJyRbQXJjIElkZW50aXR5IFNES10gTm8gcmVmcmVzaCB0b2tlbiBmb3VuZCBmb3IgdGhpcyBzZXNzaW9uJyk7XG4gIH1cbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0SG9zdG5hbWVGcm9tVVJMKHVybCkge1xuICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5ocmVmID0gdXJsO1xuICByZXR1cm4gYS5ob3N0bmFtZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=

  }())