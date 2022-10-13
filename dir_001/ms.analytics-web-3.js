/*!
 * 1DS JS SDK Analytics Web, 3.2.6
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.oneDS = global.oneDS || {}));
})(this, (function (exports) { 'use strict';

    var strShimFunction = "function";
    var strShimObject = "object";
    var strShimUndefined = "undefined";
    var strShimPrototype = "prototype";
    var strShimHasOwnProperty = "hasOwnProperty";
    var ObjClass = Object;
    var ObjProto = ObjClass[strShimPrototype];
    var ObjAssign = ObjClass["assign"];
    var ObjCreate = ObjClass["create"];
    var ObjDefineProperty = ObjClass["defineProperty"];
    var ObjHasOwnProperty = ObjProto[strShimHasOwnProperty];

    var _cachedGlobal = null;
    function getGlobal(useCached) {
        if (useCached === void 0) { useCached = true; }
        if (!_cachedGlobal || !useCached) {
            if (typeof globalThis !== strShimUndefined && globalThis) {
                _cachedGlobal = globalThis;
            }
            if (typeof self !== strShimUndefined && self) {
                _cachedGlobal = self;
            }
            if (typeof window !== strShimUndefined && window) {
                _cachedGlobal = window;
            }
            if (typeof global !== strShimUndefined && global) {
                _cachedGlobal = global;
            }
        }
        return _cachedGlobal;
    }
    function throwTypeError(message) {
        throw new TypeError(message);
    }
    function objCreateFn(obj) {
        var func = ObjCreate;
        if (func) {
            return func(obj);
        }
        if (obj == null) {
            return {};
        }
        var type = typeof obj;
        if (type !== strShimObject && type !== strShimFunction) {
            throwTypeError("Object prototype may only be an Object:" + obj);
        }
        function tmpFunc() { }
        tmpFunc[strShimPrototype] = obj;
        return new tmpFunc();
    }

    (getGlobal() || {})["Symbol"];
    (getGlobal() || {})["Reflect"];
    var __objAssignFnImpl = function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (ObjProto[strShimHasOwnProperty].call(s, p)) {
                    t[p] = s[p];
                }
            }
        }
        return t;
    };
    var __assignFn = ObjAssign || __objAssignFnImpl;
    var extendStaticsFn = function (d, b) {
        extendStaticsFn = ObjClass["setPrototypeOf"] ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) {
                for (var p in b) {
                    if (b[strShimHasOwnProperty](p)) {
                        d[p] = b[p];
                    }
                }
            };
        return extendStaticsFn(d, b);
    };
    function __extendsFn(d, b) {
        if (typeof b !== strShimFunction && b !== null) {
            throwTypeError("Class extends value " + String(b) + " is not a constructor or null");
        }
        extendStaticsFn(d, b);
        function __() { this.constructor = d; }
        d[strShimPrototype] = b === null ? objCreateFn(b) : (__[strShimPrototype] = b[strShimPrototype], new __());
    }
    function __spreadArrayFn(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
            to[j] = from[i];
        }
        return to;
    }

    var MinChannelPriorty = 100;

    var _DYN_INITIALIZE = "initialize";
    var _DYN_NAME$1 = "name";
    var _DYN_GET_NOTIFY_MGR = "getNotifyMgr";
    var _DYN_IDENTIFIER = "identifier";
    var _DYN_PUSH = "push";
    var _DYN_IS_INITIALIZED = "isInitialized";
    var _DYN_CONFIG = "config";
    var _DYN_INSTRUMENTATION_KEY = "instrumentationKey";
    var _DYN_LOGGER = "logger";
    var _DYN_LENGTH$2 = "length";
    var _DYN_TIME = "time";
    var _DYN_PROCESS_NEXT = "processNext";
    var _DYN_GET_PROCESS_TEL_CONT0 = "getProcessTelContext";
    var _DYN_ADD_NOTIFICATION_LIS1 = "addNotificationListener";
    var _DYN_REMOVE_NOTIFICATION_2 = "removeNotificationListener";
    var _DYN_STOP_POLLING_INTERNA3 = "stopPollingInternalLogs";
    var _DYN_ON_COMPLETE = "onComplete";
    var _DYN_GET_PLUGIN = "getPlugin";
    var _DYN_FLUSH = "flush";
    var _DYN__EXTENSIONS = "_extensions";
    var _DYN_SPLICE = "splice";
    var _DYN_TEARDOWN = "teardown";
    var _DYN_MESSAGE_ID = "messageId";
    var _DYN_MESSAGE$2 = "message";
    var _DYN_IS_ASYNC = "isAsync";
    var _DYN__DO_TEARDOWN = "_doTeardown";
    var _DYN_UPDATE = "update";
    var _DYN_GET_NEXT = "getNext";
    var _DYN_DIAG_LOG$1 = "diagLog";
    var _DYN_SET_NEXT_PLUGIN = "setNextPlugin";
    var _DYN_CREATE_NEW = "createNew";
    var _DYN_COOKIE_CFG = "cookieCfg";
    var _DYN_INDEX_OF$1 = "indexOf";
    var _DYN_SUBSTRING$1 = "substring";
    var _DYN_USER_AGENT = "userAgent";
    var _DYN_SPLIT$1 = "split";
    var _DYN_SET_ENABLED = "setEnabled";
    var _DYN_SUBSTR = "substr";
    var _DYN_NODE_TYPE = "nodeType";
    var _DYN_APPLY = "apply";
    var _DYN_REPLACE = "replace";
    var _DYN_ENABLE_DEBUG_EXCEPTI4 = "enableDebugExceptions";
    var _DYN_LOG_INTERNAL_MESSAGE = "logInternalMessage";
    var _DYN_TO_LOWER_CASE$1 = "toLowerCase";
    var _DYN_CALL = "call";
    var _DYN_TYPE = "type";
    var _DYN_HANDLER = "handler";
    var _DYN_LISTENERS = "listeners";
    var _DYN_IS_CHILD_EVT = "isChildEvt";
    var _DYN_GET_CTX = "getCtx";
    var _DYN_SET_CTX = "setCtx";
    var _DYN_COMPLETE = "complete";
    var _DYN_TRACE_ID = "traceId";
    var _DYN_SPAN_ID = "spanId";
    var _DYN_TRACE_FLAGS = "traceFlags";

    var STR_EMPTY$1 = "";
    var STR_CHANNELS = "channels";
    var STR_CORE = "core";
    var STR_CREATE_PERF_MGR = "createPerfMgr";
    var STR_DISABLED = "disabled";
    var STR_EXTENSION_CONFIG = "extensionConfig";
    var STR_EXTENSIONS = "extensions";
    var STR_PROCESS_TELEMETRY = "processTelemetry";
    var STR_PRIORITY = "priority";
    var STR_EVENTS_SENT = "eventsSent";
    var STR_EVENTS_DISCARDED = "eventsDiscarded";
    var STR_EVENTS_SEND_REQUEST = "eventsSendRequest";
    var STR_PERF_EVENT = "perfEvent";
    var STR_ERROR_TO_CONSOLE = "errorToConsole";
    var STR_WARN_TO_CONSOLE = "warnToConsole";
    var STR_GET_PERF_MGR = "getPerfMgr";

    var strToISOString = "toISOString";
    var cStrEndsWith = "endsWith";
    var cStrStartsWith = "startsWith";
    var strIndexOf = "indexOf";
    var strMap = "map";
    var strReduce = "reduce";
    var cStrTrim = "trim";
    var strToString = "toString";
    var str__Proto$1 = "__proto__";
    var strConstructor = "constructor";
    var _objDefineProperty$1 = ObjDefineProperty;
    var _objFreeze = ObjClass.freeze;
    var _objKeys = ObjClass.keys;
    var StringProto = String[strShimPrototype];
    var _strTrim = StringProto[cStrTrim];
    var _strEndsWith = StringProto[cStrEndsWith];
    var _strStartsWith = StringProto[cStrStartsWith];
    var DateProto = Date[strShimPrototype];
    var _dataToISOString = DateProto[strToISOString];
    var _isArray = Array.isArray;
    var _objToString = ObjProto[strToString];
    var _fnToString = ObjHasOwnProperty[strToString];
    var _objFunctionString = _fnToString[_DYN_CALL ](ObjClass);
    var rCamelCase = /-([a-z])/g;
    var rNormalizeInvalid = /([^\w\d_$])/g;
    var rLeadingNumeric = /^(\d+[\w\d_$])/;
    var _objGetPrototypeOf$1 = Object["getPrototypeOf"];
    function _getObjProto$1(target) {
        if (target) {
            if (_objGetPrototypeOf$1) {
                return _objGetPrototypeOf$1(target);
            }
            var newProto = target[str__Proto$1] || target[strShimPrototype] || target[strConstructor];
            if (newProto) {
                return newProto;
            }
        }
        return null;
    }
    function isTypeof(value, theType) {
        return typeof value === theType;
    }
    function isUndefined(value) {
        return value === undefined || typeof value === strShimUndefined;
    }
    function isNullOrUndefined(value) {
        return (value === null || isUndefined(value));
    }
    function isNotNullOrUndefined(value) {
        return !isNullOrUndefined(value);
    }
    function hasOwnProperty(obj, prop) {
        return !!(obj && ObjHasOwnProperty[_DYN_CALL ](obj, prop));
    }
    function isObject(value) {
        return !!(value && typeof value === strShimObject);
    }
    function isFunction(value) {
        return !!(value && typeof value === strShimFunction);
    }
    function normalizeJsName(name) {
        var value = name;
        if (value && isString(value)) {
            value = value[_DYN_REPLACE ](rCamelCase, function (_all, letter) {
                return letter.toUpperCase();
            });
            value = value[_DYN_REPLACE ](rNormalizeInvalid, "_");
            value = value[_DYN_REPLACE ](rLeadingNumeric, function (_all, match) {
                return "_" + match;
            });
        }
        return value;
    }
    function objForEachKey(target, callbackfn) {
        if (target) {
            for (var prop in target) {
                if (ObjHasOwnProperty[_DYN_CALL ](target, prop)) {
                    callbackfn[_DYN_CALL ](target, prop, target[prop]);
                }
            }
        }
    }
    function strEndsWith(value, search) {
        var result = false;
        if (value && search && !(result = value === search)) {
            result = _strEndsWith ? value[cStrEndsWith](search) : _strEndsWithPoly(value, search);
        }
        return result;
    }
    function _strEndsWithPoly(value, search) {
        var result = false;
        var searchLen = search ? search[_DYN_LENGTH$2 ] : 0;
        var valLen = value ? value[_DYN_LENGTH$2 ] : 0;
        if (searchLen && valLen && valLen >= searchLen && !(result = value === search)) {
            var pos = valLen - 1;
            for (var lp = searchLen - 1; lp >= 0; lp--) {
                if (value[pos] != search[lp]) {
                    return false;
                }
                pos--;
            }
            result = true;
        }
        return result;
    }
    function strStartsWith(value, checkValue) {
        var result = false;
        if (value && checkValue && !(result = value === checkValue)) {
            result = _strStartsWith ? value[cStrStartsWith](checkValue) : _strStartsWithPoly(value, checkValue);
        }
        return result;
    }
    function _strStartsWithPoly(value, checkValue) {
        var result = false;
        var chkLen = checkValue ? checkValue[_DYN_LENGTH$2 ] : 0;
        if (value && chkLen && value[_DYN_LENGTH$2 ] >= chkLen && !(result = value === checkValue)) {
            for (var lp = 0; lp < chkLen; lp++) {
                if (value[lp] !== checkValue[lp]) {
                    return false;
                }
            }
            result = true;
        }
        return result;
    }
    function strContains(value, search) {
        if (value && search) {
            return value[_DYN_INDEX_OF$1 ](search) !== -1;
        }
        return false;
    }
    function isDate(obj) {
        return !!(obj && _objToString[_DYN_CALL ](obj) === "[object Date]");
    }
    var isArray = _isArray || _isArrayPoly;
    function _isArrayPoly(obj) {
        return !!(obj && _objToString[_DYN_CALL ](obj) === "[object Array]");
    }
    function isError(obj) {
        return !!(obj && _objToString[_DYN_CALL ](obj) === "[object Error]");
    }
    function isString(value) {
        return typeof value === "string";
    }
    function isNumber(value) {
        return typeof value === "number";
    }
    function isBoolean(value) {
        return typeof value === "boolean";
    }
    function isPlainObject(value) {
        var result = false;
        if (value && typeof value === "object") {
            var proto = _objGetPrototypeOf$1 ? _objGetPrototypeOf$1(value) : _getObjProto$1(value);
            if (!proto) {
                result = true;
            }
            else {
                if (proto[strConstructor] && ObjHasOwnProperty[_DYN_CALL ](proto, strConstructor)) {
                    proto = proto[strConstructor];
                }
                result = typeof proto === strShimFunction && _fnToString[_DYN_CALL ](proto) === _objFunctionString;
            }
        }
        return result;
    }
    function toISOString(date) {
        if (date) {
            return _dataToISOString ? date[strToISOString]() : _toISOStringPoly(date);
        }
    }
    function _toISOStringPoly(date) {
        if (date && date.getUTCFullYear) {
            var pad = function (num) {
                var r = String(num);
                if (r[_DYN_LENGTH$2 ] === 1) {
                    r = "0" + r;
                }
                return r;
            };
            return date.getUTCFullYear()
                + "-" + pad(date.getUTCMonth() + 1)
                + "-" + pad(date.getUTCDate())
                + "T" + pad(date.getUTCHours())
                + ":" + pad(date.getUTCMinutes())
                + ":" + pad(date.getUTCSeconds())
                + "." + String((date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5)
                + "Z";
        }
    }
    function arrForEach(arr, callbackfn, thisArg) {
        var len = arr[_DYN_LENGTH$2 ];
        try {
            for (var idx = 0; idx < len; idx++) {
                if (idx in arr) {
                    if (callbackfn[_DYN_CALL ](thisArg || arr, arr[idx], idx, arr) === -1) {
                        break;
                    }
                }
            }
        }
        catch (e) {
        }
    }
    function arrIndexOf(arr, searchElement, fromIndex) {
        if (arr) {
            if (arr[strIndexOf]) {
                return arr[strIndexOf](searchElement, fromIndex);
            }
            var len = arr[_DYN_LENGTH$2 ];
            var from = fromIndex || 0;
            try {
                for (var lp = Math.max(from >= 0 ? from : len - Math.abs(from), 0); lp < len; lp++) {
                    if (lp in arr && arr[lp] === searchElement) {
                        return lp;
                    }
                }
            }
            catch (e) {
            }
        }
        return -1;
    }
    function arrMap(arr, callbackfn, thisArg) {
        var results;
        if (arr) {
            if (arr[strMap]) {
                return arr[strMap](callbackfn, thisArg);
            }
            var len = arr[_DYN_LENGTH$2 ];
            var _this = thisArg || arr;
            results = new Array(len);
            try {
                for (var lp = 0; lp < len; lp++) {
                    if (lp in arr) {
                        results[lp] = callbackfn[_DYN_CALL ](_this, arr[lp], arr);
                    }
                }
            }
            catch (e) {
            }
        }
        return results;
    }
    function arrReduce(arr, callbackfn, initialValue) {
        var value;
        if (arr) {
            if (arr[strReduce]) {
                return arr[strReduce](callbackfn, initialValue);
            }
            var len = arr[_DYN_LENGTH$2 ];
            var lp = 0;
            if (arguments[_DYN_LENGTH$2 ] >= 3) {
                value = arguments[2];
            }
            else {
                while (lp < len && !(lp in arr)) {
                    lp++;
                }
                value = arr[lp++];
            }
            while (lp < len) {
                if (lp in arr) {
                    value = callbackfn(value, arr[lp], lp, arr);
                }
                lp++;
            }
        }
        return value;
    }
    function strTrim(str) {
        if (str) {
            str = (_strTrim && str[cStrTrim]) ? str[cStrTrim]() : (str[_DYN_REPLACE ] ? str[_DYN_REPLACE ](/^\s+|\s+$/g, STR_EMPTY$1) : str);
        }
        return str;
    }
    var _objKeysHasDontEnumBug = !({ toString: null }).propertyIsEnumerable("toString");
    var _objKeysDontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ];
    function objKeys(obj) {
        var objType = typeof obj;
        if (objType !== strShimFunction && (objType !== strShimObject || obj === null)) {
            throwTypeError("objKeys called on non-object");
        }
        if (!_objKeysHasDontEnumBug && _objKeys) {
            return _objKeys(obj);
        }
        var result = [];
        for (var prop in obj) {
            if (obj && ObjHasOwnProperty[_DYN_CALL ](obj, prop)) {
                result[_DYN_PUSH ](prop);
            }
        }
        if (_objKeysHasDontEnumBug) {
            var dontEnumsLength = _objKeysDontEnums[_DYN_LENGTH$2 ];
            for (var lp = 0; lp < dontEnumsLength; lp++) {
                if (obj && ObjHasOwnProperty[_DYN_CALL ](obj, _objKeysDontEnums[lp])) {
                    result[_DYN_PUSH ](_objKeysDontEnums[lp]);
                }
            }
        }
        return result;
    }
    function objDefineAccessors(target, prop, getProp, setProp) {
        if (_objDefineProperty$1) {
            try {
                var descriptor = {
                    enumerable: true,
                    configurable: true
                };
                if (getProp) {
                    descriptor.get = getProp;
                }
                if (setProp) {
                    descriptor.set = setProp;
                }
                _objDefineProperty$1(target, prop, descriptor);
                return true;
            }
            catch (e) {
            }
        }
        return false;
    }
    function _doNothing(value) {
        return value;
    }
    function deepFreeze(obj) {
        if (_objFreeze) {
            objForEachKey(obj, function (name, value) {
                if (isArray(value) || isObject(value)) {
                    _objFreeze(value);
                }
            });
        }
        return objFreeze(obj);
    }
    var objFreeze = _objFreeze || _doNothing;
    function dateNow() {
        var dt = Date;
        return dt.now ? dt.now() : new dt().getTime();
    }
    function getExceptionName(object) {
        if (isError(object)) {
            return object[_DYN_NAME$1 ];
        }
        return STR_EMPTY$1;
    }
    function setValue(target, field, value, valChk, srcChk) {
        var theValue = value;
        if (target) {
            theValue = target[field];
            if (theValue !== value && (!srcChk || srcChk(theValue)) && (!valChk || valChk(value))) {
                theValue = value;
                target[field] = theValue;
            }
        }
        return theValue;
    }
    function getSetValue(target, field, defValue) {
        var theValue;
        if (target) {
            theValue = target[field];
            if (!theValue && isNullOrUndefined(theValue)) {
                theValue = !isUndefined(defValue) ? defValue : {};
                target[field] = theValue;
            }
        }
        else {
            theValue = !isUndefined(defValue) ? defValue : {};
        }
        return theValue;
    }
    function getCfgValue(theValue, defaultValue) {
        return !isNullOrUndefined(theValue) ? theValue : defaultValue;
    }
    function isTruthy(value) {
        return !!value;
    }
    function throwError(message) {
        throw new Error(message);
    }
    function _createProxyFunction(source, funcName) {
        var srcFunc = null;
        var src = null;
        if (isFunction(source)) {
            srcFunc = source;
        }
        else {
            src = source;
        }
        return function () {
            var originalArguments = arguments;
            if (srcFunc) {
                src = srcFunc();
            }
            if (src) {
                return src[funcName][_DYN_APPLY ](src, originalArguments);
            }
        };
    }
    function proxyAssign(target, source, chkSet) {
        if (target && source && isObject(target) && isObject(source)) {
            var _loop_1 = function (field) {
                if (isString(field)) {
                    var value = source[field];
                    if (isFunction(value)) {
                        if (!chkSet || chkSet(field, true, source, target)) {
                            target[field] = _createProxyFunction(source, field);
                        }
                    }
                    else if (!chkSet || chkSet(field, false, source, target)) {
                        if (hasOwnProperty(target, field)) {
                            delete target[field];
                        }
                        if (!objDefineAccessors(target, field, function () {
                            return source[field];
                        }, function (theValue) {
                            source[field] = theValue;
                        })) {
                            target[field] = value;
                        }
                    }
                }
            };
            for (var field in source) {
                _loop_1(field);
            }
        }
        return target;
    }
    function proxyFunctionAs(target, name, source, theFunc, overwriteTarget) {
        if (target && name && source) {
            if (overwriteTarget !== false || isUndefined(target[name])) {
                target[name] = _createProxyFunction(source, theFunc);
            }
        }
    }
    function proxyFunctions(target, source, functionsToProxy, overwriteTarget) {
        if (target && source && isObject(target) && isArray(functionsToProxy)) {
            arrForEach(functionsToProxy, function (theFuncName) {
                if (isString(theFuncName)) {
                    proxyFunctionAs(target, theFuncName, source, theFuncName, overwriteTarget);
                }
            });
        }
        return target;
    }
    function optimizeObject(theObject) {
        if (theObject && ObjAssign) {
            theObject = ObjClass(ObjAssign({}, theObject));
        }
        return theObject;
    }
    function objExtend(obj1, obj2, obj3, obj4, obj5, obj6) {
        var theArgs = arguments;
        var extended = theArgs[0] || {};
        var argLen = theArgs[_DYN_LENGTH$2 ];
        var deep = false;
        var idx = 1;
        if (argLen > 0 && isBoolean(extended)) {
            deep = extended;
            extended = theArgs[idx] || {};
            idx++;
        }
        if (!isObject(extended)) {
            extended = {};
        }
        for (; idx < argLen; idx++) {
            var arg = theArgs[idx];
            var isArgArray = isArray(arg);
            var isArgObj = isObject(arg);
            for (var prop in arg) {
                var propOk = (isArgArray && (prop in arg)) || (isArgObj && (ObjHasOwnProperty[_DYN_CALL ](arg, prop)));
                if (!propOk) {
                    continue;
                }
                var newValue = arg[prop];
                var isNewArray = void 0;
                if (deep && newValue && ((isNewArray = isArray(newValue)) || isPlainObject(newValue))) {
                    var clone = extended[prop];
                    if (isNewArray) {
                        if (!isArray(clone)) {
                            clone = [];
                        }
                    }
                    else if (!isPlainObject(clone)) {
                        clone = {};
                    }
                    newValue = objExtend(deep, clone, newValue);
                }
                if (newValue !== undefined) {
                    extended[prop] = newValue;
                }
            }
        }
        return extended;
    }

    function createEnumStyle(values) {
        var enumClass = {};
        objForEachKey(values, function (field, value) {
            enumClass[field] = value;
            enumClass[value] = field;
        });
        return deepFreeze(enumClass);
    }
    function createValueMap(values) {
        var mapClass = {};
        objForEachKey(values, function (field, value) {
            mapClass[field] = value[1];
            mapClass[value[0]] = value[1];
        });
        return deepFreeze(mapClass);
    }

    var EventsDiscardedReason = createEnumStyle({
        Unknown: 0 ,
        NonRetryableStatus: 1 ,
        InvalidEvent: 2 ,
        SizeLimitExceeded: 3 ,
        KillSwitch: 4 ,
        QueueFull: 5
    });

    /*!
     * Microsoft Dynamic Proto Utility, 1.1.6
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
    var Constructor = 'constructor';
    var Prototype = 'prototype';
    var strFunction = 'function';
    var DynInstFuncTable = '_dynInstFuncs';
    var DynProxyTag = '_isDynProxy';
    var DynClassName = '_dynClass';
    var DynClassNamePrefix = '_dynCls$';
    var DynInstChkTag = '_dynInstChk';
    var DynAllowInstChkTag = DynInstChkTag;
    var DynProtoDefaultOptions = '_dfOpts';
    var UnknownValue = '_unknown_';
    var str__Proto = "__proto__";
    var DynProtoBaseProto = "_dyn" + str__Proto;
    var DynProtoCurrent = "_dynInstProto";
    var strUseBaseInst = 'useBaseInst';
    var strSetInstFuncs = 'setInstFuncs';
    var Obj = Object;
    var _objGetPrototypeOf = Obj["getPrototypeOf"];
    var _objGetOwnProps = Obj["getOwnPropertyNames"];
    var _dynamicNames = 0;
    function _hasOwnProperty(obj, prop) {
        return obj && Obj[Prototype].hasOwnProperty.call(obj, prop);
    }
    function _isObjectOrArrayPrototype(target) {
        return target && (target === Obj[Prototype] || target === Array[Prototype]);
    }
    function _isObjectArrayOrFunctionPrototype(target) {
        return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
    }
    function _getObjProto(target) {
        var newProto;
        if (target) {
            if (_objGetPrototypeOf) {
                return _objGetPrototypeOf(target);
            }
            var curProto = target[str__Proto] || target[Prototype] || (target[Constructor] ? target[Constructor][Prototype] : null);
            newProto = target[DynProtoBaseProto] || curProto;
            if (!_hasOwnProperty(target, DynProtoBaseProto)) {
                delete target[DynProtoCurrent];
                newProto = target[DynProtoBaseProto] = target[DynProtoCurrent] || target[DynProtoBaseProto];
                target[DynProtoCurrent] = curProto;
            }
        }
        return newProto;
    }
    function _forEachProp(target, func) {
        var props = [];
        if (_objGetOwnProps) {
            props = _objGetOwnProps(target);
        }
        else {
            for (var name_1 in target) {
                if (typeof name_1 === "string" && _hasOwnProperty(target, name_1)) {
                    props.push(name_1);
                }
            }
        }
        if (props && props.length > 0) {
            for (var lp = 0; lp < props.length; lp++) {
                func(props[lp]);
            }
        }
    }
    function _isDynamicCandidate(target, funcName, skipOwn) {
        return (funcName !== Constructor && typeof target[funcName] === strFunction && (skipOwn || _hasOwnProperty(target, funcName)));
    }
    function _throwTypeError(message) {
        throw new TypeError("DynamicProto: " + message);
    }
    function _getInstanceFuncs(thisTarget) {
        var instFuncs = {};
        _forEachProp(thisTarget, function (name) {
            if (!instFuncs[name] && _isDynamicCandidate(thisTarget, name, false)) {
                instFuncs[name] = thisTarget[name];
            }
        });
        return instFuncs;
    }
    function _hasVisited(values, value) {
        for (var lp = values.length - 1; lp >= 0; lp--) {
            if (values[lp] === value) {
                return true;
            }
        }
        return false;
    }
    function _getBaseFuncs(classProto, thisTarget, instFuncs, useBaseInst) {
        function _instFuncProxy(target, funcHost, funcName) {
            var theFunc = funcHost[funcName];
            if (theFunc[DynProxyTag] && useBaseInst) {
                var instFuncTable = target[DynInstFuncTable] || {};
                if (instFuncTable[DynAllowInstChkTag] !== false) {
                    theFunc = (instFuncTable[funcHost[DynClassName]] || {})[funcName] || theFunc;
                }
            }
            return function () {
                return theFunc.apply(target, arguments);
            };
        }
        var baseFuncs = {};
        _forEachProp(instFuncs, function (name) {
            baseFuncs[name] = _instFuncProxy(thisTarget, instFuncs, name);
        });
        var baseProto = _getObjProto(classProto);
        var visited = [];
        while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
            _forEachProp(baseProto, function (name) {
                if (!baseFuncs[name] && _isDynamicCandidate(baseProto, name, !_objGetPrototypeOf)) {
                    baseFuncs[name] = _instFuncProxy(thisTarget, baseProto, name);
                }
            });
            visited.push(baseProto);
            baseProto = _getObjProto(baseProto);
        }
        return baseFuncs;
    }
    function _getInstFunc(target, funcName, proto, currentDynProtoProxy) {
        var instFunc = null;
        if (target && _hasOwnProperty(proto, DynClassName)) {
            var instFuncTable = target[DynInstFuncTable] || {};
            instFunc = (instFuncTable[proto[DynClassName]] || {})[funcName];
            if (!instFunc) {
                _throwTypeError("Missing [" + funcName + "] " + strFunction);
            }
            if (!instFunc[DynInstChkTag] && instFuncTable[DynAllowInstChkTag] !== false) {
                var canAddInst = !_hasOwnProperty(target, funcName);
                var objProto = _getObjProto(target);
                var visited = [];
                while (canAddInst && objProto && !_isObjectArrayOrFunctionPrototype(objProto) && !_hasVisited(visited, objProto)) {
                    var protoFunc = objProto[funcName];
                    if (protoFunc) {
                        canAddInst = (protoFunc === currentDynProtoProxy);
                        break;
                    }
                    visited.push(objProto);
                    objProto = _getObjProto(objProto);
                }
                try {
                    if (canAddInst) {
                        target[funcName] = instFunc;
                    }
                    instFunc[DynInstChkTag] = 1;
                }
                catch (e) {
                    instFuncTable[DynAllowInstChkTag] = false;
                }
            }
        }
        return instFunc;
    }
    function _getProtoFunc(funcName, proto, currentDynProtoProxy) {
        var protoFunc = proto[funcName];
        if (protoFunc === currentDynProtoProxy) {
            protoFunc = _getObjProto(proto)[funcName];
        }
        if (typeof protoFunc !== strFunction) {
            _throwTypeError("[" + funcName + "] is not a " + strFunction);
        }
        return protoFunc;
    }
    function _populatePrototype(proto, className, target, baseInstFuncs, setInstanceFunc) {
        function _createDynamicPrototype(proto, funcName) {
            var dynProtoProxy = function () {
                var instFunc = _getInstFunc(this, funcName, proto, dynProtoProxy) || _getProtoFunc(funcName, proto, dynProtoProxy);
                return instFunc.apply(this, arguments);
            };
            dynProtoProxy[DynProxyTag] = 1;
            return dynProtoProxy;
        }
        if (!_isObjectOrArrayPrototype(proto)) {
            var instFuncTable = target[DynInstFuncTable] = target[DynInstFuncTable] || {};
            var instFuncs_1 = instFuncTable[className] = (instFuncTable[className] || {});
            if (instFuncTable[DynAllowInstChkTag] !== false) {
                instFuncTable[DynAllowInstChkTag] = !!setInstanceFunc;
            }
            _forEachProp(target, function (name) {
                if (_isDynamicCandidate(target, name, false) && target[name] !== baseInstFuncs[name]) {
                    instFuncs_1[name] = target[name];
                    delete target[name];
                    if (!_hasOwnProperty(proto, name) || (proto[name] && !proto[name][DynProxyTag])) {
                        proto[name] = _createDynamicPrototype(proto, name);
                    }
                }
            });
        }
    }
    function _checkPrototype(classProto, thisTarget) {
        if (_objGetPrototypeOf) {
            var visited = [];
            var thisProto = _getObjProto(thisTarget);
            while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto) && !_hasVisited(visited, thisProto)) {
                if (thisProto === classProto) {
                    return true;
                }
                visited.push(thisProto);
                thisProto = _getObjProto(thisProto);
            }
            return false;
        }
        return true;
    }
    function _getObjName(target, unknownValue) {
        if (_hasOwnProperty(target, Prototype)) {
            return target.name || unknownValue || UnknownValue;
        }
        return (((target || {})[Constructor]) || {}).name || unknownValue || UnknownValue;
    }
    function dynamicProto(theClass, target, delegateFunc, options) {
        if (!_hasOwnProperty(theClass, Prototype)) {
            _throwTypeError("theClass is an invalid class definition.");
        }
        var classProto = theClass[Prototype];
        if (!_checkPrototype(classProto, target)) {
            _throwTypeError("[" + _getObjName(theClass) + "] is not in class hierarchy of [" + _getObjName(target) + "]");
        }
        var className = null;
        if (_hasOwnProperty(classProto, DynClassName)) {
            className = classProto[DynClassName];
        }
        else {
            className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _dynamicNames;
            _dynamicNames++;
            classProto[DynClassName] = className;
        }
        var perfOptions = dynamicProto[DynProtoDefaultOptions];
        var useBaseInst = !!perfOptions[strUseBaseInst];
        if (useBaseInst && options && options[strUseBaseInst] !== undefined) {
            useBaseInst = !!options[strUseBaseInst];
        }
        var instFuncs = _getInstanceFuncs(target);
        var baseFuncs = _getBaseFuncs(classProto, target, instFuncs, useBaseInst);
        delegateFunc(target, baseFuncs);
        var setInstanceFunc = !!_objGetPrototypeOf && !!perfOptions[strSetInstFuncs];
        if (setInstanceFunc && options) {
            setInstanceFunc = !!options[strSetInstFuncs];
        }
        _populatePrototype(classProto, className, target, instFuncs, setInstanceFunc !== false);
    }
    var perfDefaults = {
        setInstFuncs: true,
        useBaseInst: true
    };
    dynamicProto[DynProtoDefaultOptions] = perfDefaults;

    var strWindow = "window";
    var strDocument = "document";
    var strNavigator = "navigator";
    var strHistory = "history";
    var strLocation = "location";
    var strConsole = "console";
    var strPerformance = "performance";
    var strJSON = "JSON";
    var strCrypto = "crypto";
    var strMsCrypto = "msCrypto";
    var strReactNative = "ReactNative";
    var strMsie = "msie";
    var strTrident = "trident/";
    var strXMLHttpRequest = "XMLHttpRequest";
    var _isTrident = null;
    var _navUserAgentCheck = null;
    var _enableMocks = false;
    var _useXDomainRequest = null;
    var _beaconsSupported = null;
    function _hasProperty(theClass, property) {
        var supported = false;
        if (theClass) {
            try {
                supported = property in theClass;
                if (!supported) {
                    var proto = theClass[strShimPrototype];
                    if (proto) {
                        supported = property in proto;
                    }
                }
            }
            catch (e) {
            }
            if (!supported) {
                try {
                    var tmp = new theClass();
                    supported = !isUndefined(tmp[property]);
                }
                catch (e) {
                }
            }
        }
        return supported;
    }
    function getGlobalInst(name) {
        var gbl = getGlobal();
        if (gbl && gbl[name]) {
            return gbl[name];
        }
        if (name === strWindow && hasWindow()) {
            return window;
        }
        return null;
    }
    function hasWindow() {
        return Boolean(typeof window === strShimObject && window);
    }
    function getWindow() {
        if (hasWindow()) {
            return window;
        }
        return getGlobalInst(strWindow);
    }
    function hasDocument() {
        return Boolean(typeof document === strShimObject && document);
    }
    function getDocument() {
        if (hasDocument()) {
            return document;
        }
        return getGlobalInst(strDocument);
    }
    function hasNavigator() {
        return Boolean(typeof navigator === strShimObject && navigator);
    }
    function getNavigator() {
        if (hasNavigator()) {
            return navigator;
        }
        return getGlobalInst(strNavigator);
    }
    function hasHistory() {
        return Boolean(typeof history === strShimObject && history);
    }
    function getHistory() {
        if (hasHistory()) {
            return history;
        }
        return getGlobalInst(strHistory);
    }
    function getLocation(checkForMock) {
        if (checkForMock && _enableMocks) {
            var mockLocation = getGlobalInst("__mockLocation");
            if (mockLocation) {
                return mockLocation;
            }
        }
        if (typeof location === strShimObject && location) {
            return location;
        }
        return getGlobalInst(strLocation);
    }
    function getConsole() {
        if (typeof console !== strShimUndefined) {
            return console;
        }
        return getGlobalInst(strConsole);
    }
    function getPerformance() {
        return getGlobalInst(strPerformance);
    }
    function hasJSON() {
        return Boolean((typeof JSON === strShimObject && JSON) || getGlobalInst(strJSON) !== null);
    }
    function getJSON() {
        if (hasJSON()) {
            return JSON || getGlobalInst(strJSON);
        }
        return null;
    }
    function getCrypto() {
        return getGlobalInst(strCrypto);
    }
    function getMsCrypto() {
        return getGlobalInst(strMsCrypto);
    }
    function isReactNative() {
        var nav = getNavigator();
        if (nav && nav.product) {
            return nav.product === strReactNative;
        }
        return false;
    }
    function isIE() {
        var nav = getNavigator();
        if (nav && (nav[_DYN_USER_AGENT ] !== _navUserAgentCheck || _isTrident === null)) {
            _navUserAgentCheck = nav[_DYN_USER_AGENT ];
            var userAgent = (_navUserAgentCheck || STR_EMPTY$1)[_DYN_TO_LOWER_CASE$1 ]();
            _isTrident = (strContains(userAgent, strMsie) || strContains(userAgent, strTrident));
        }
        return _isTrident;
    }
    function dumpObj(object) {
        var objectTypeDump = Object[strShimPrototype].toString[_DYN_CALL ](object);
        var propertyValueDump = STR_EMPTY$1;
        if (objectTypeDump === "[object Error]") {
            propertyValueDump = "{ stack: '" + object.stack + "', message: '" + object.message + "', name: '" + object[_DYN_NAME$1 ] + "'";
        }
        else if (hasJSON()) {
            propertyValueDump = getJSON().stringify(object);
        }
        return objectTypeDump + propertyValueDump;
    }
    function isBeaconsSupported() {
        if (_beaconsSupported === null) {
            _beaconsSupported = hasNavigator() && Boolean(getNavigator().sendBeacon);
        }
        return _beaconsSupported;
    }
    function isFetchSupported(withKeepAlive) {
        var isSupported = false;
        try {
            isSupported = !!getGlobalInst("fetch");
            var request = getGlobalInst("Request");
            if (isSupported && withKeepAlive && request) {
                isSupported = _hasProperty(request, "keepalive");
            }
        }
        catch (e) {
        }
        return isSupported;
    }
    function useXDomainRequest() {
        if (_useXDomainRequest === null) {
            _useXDomainRequest = (typeof XDomainRequest !== strShimUndefined);
            if (_useXDomainRequest && isXhrSupported()) {
                _useXDomainRequest = _useXDomainRequest && !_hasProperty(getGlobalInst(strXMLHttpRequest), "withCredentials");
            }
        }
        return _useXDomainRequest;
    }
    function isXhrSupported() {
        var isSupported = false;
        try {
            var xmlHttpRequest = getGlobalInst(strXMLHttpRequest);
            isSupported = !!xmlHttpRequest;
        }
        catch (e) {
        }
        return isSupported;
    }

    var listenerFuncs = ["eventsSent", "eventsDiscarded", "eventsSendRequest", "perfEvent"];
    var _aiNamespace = null;
    var _debugListener;
    function _listenerProxyFunc(name, config) {
        return function () {
            var args = arguments;
            var dbgExt = getDebugExt(config);
            if (dbgExt) {
                var listener = dbgExt.listener;
                if (listener && listener[name]) {
                    listener[name][_DYN_APPLY ](listener, args);
                }
            }
        };
    }
    function _getExtensionNamespace() {
        var target = getGlobalInst("Microsoft");
        if (target) {
            _aiNamespace = target["ApplicationInsights"];
        }
        return _aiNamespace;
    }
    function getDebugExt(config) {
        var ns = _aiNamespace;
        if (!ns && config.disableDbgExt !== true) {
            ns = _aiNamespace || _getExtensionNamespace();
        }
        return ns ? ns["ChromeDbgExt"] : null;
    }
    function getDebugListener(config) {
        if (!_debugListener) {
            _debugListener = {};
            for (var lp = 0; lp < listenerFuncs[_DYN_LENGTH$2 ]; lp++) {
                _debugListener[listenerFuncs[lp]] = _listenerProxyFunc(listenerFuncs[lp], config);
            }
        }
        return _debugListener;
    }

    var AiNonUserActionablePrefix = "AI (Internal): ";
    var AiUserActionablePrefix = "AI: ";
    var AIInternalMessagePrefix = "AITR_";
    function _sanitizeDiagnosticText(text) {
        if (text) {
            return "\"" + text[_DYN_REPLACE ](/\"/g, STR_EMPTY$1) + "\"";
        }
        return STR_EMPTY$1;
    }
    function _logToConsole(func, message) {
        var theConsole = getConsole();
        if (!!theConsole) {
            var logFunc = "log";
            if (theConsole[func]) {
                logFunc = func;
            }
            if (isFunction(theConsole[logFunc])) {
                theConsole[logFunc](message);
            }
        }
    }
    var _InternalLogMessage = /** @class */ (function () {
        function _InternalLogMessage(msgId, msg, isUserAct, properties) {
            if (isUserAct === void 0) { isUserAct = false; }
            var _self = this;
            _self[_DYN_MESSAGE_ID ] = msgId;
            _self[_DYN_MESSAGE$2 ] =
                (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) +
                    msgId;
            var strProps = STR_EMPTY$1;
            if (hasJSON()) {
                strProps = getJSON().stringify(properties);
            }
            var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : STR_EMPTY$1) +
                (properties ? " props:" + _sanitizeDiagnosticText(strProps) : STR_EMPTY$1);
            _self[_DYN_MESSAGE$2 ] += diagnosticText;
        }
        _InternalLogMessage.dataType = "MessageData";
        return _InternalLogMessage;
    }());
    function safeGetLogger(core, config) {
        return (core || {})[_DYN_LOGGER ] || new DiagnosticLogger(config);
    }
    var DiagnosticLogger = /** @class */ (function () {
        function DiagnosticLogger(config) {
            this.identifier = "DiagnosticLogger";
            this.queue = [];
            var _messageCount = 0;
            var _messageLogged = {};
            var _loggingLevelConsole;
            var _loggingLevelTelemetry;
            var _maxInternalMessageLimit;
            var _enableDebugExceptions;
            dynamicProto(DiagnosticLogger, this, function (_self) {
                _setDefaultsFromConfig(config || {});
                _self.consoleLoggingLevel = function () { return _loggingLevelConsole; };
                _self.telemetryLoggingLevel = function () { return _loggingLevelTelemetry; };
                _self.maxInternalMessageLimit = function () { return _maxInternalMessageLimit; };
                _self[_DYN_ENABLE_DEBUG_EXCEPTI4 ] = function () { return _enableDebugExceptions; };
                _self.throwInternal = function (severity, msgId, msg, properties, isUserAct) {
                    if (isUserAct === void 0) { isUserAct = false; }
                    var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
                    if (_enableDebugExceptions) {
                        throw dumpObj(message);
                    }
                    else {
                        var logFunc = severity === 1  ? STR_ERROR_TO_CONSOLE : STR_WARN_TO_CONSOLE;
                        if (!isUndefined(message[_DYN_MESSAGE$2 ])) {
                            if (isUserAct) {
                                var messageKey = +message[_DYN_MESSAGE_ID ];
                                if (!_messageLogged[messageKey] && _loggingLevelConsole >= severity) {
                                    _self[logFunc](message[_DYN_MESSAGE$2 ]);
                                    _messageLogged[messageKey] = true;
                                }
                            }
                            else {
                                if (_loggingLevelConsole >= severity) {
                                    _self[logFunc](message[_DYN_MESSAGE$2 ]);
                                }
                            }
                            _logInternalMessage(severity, message);
                        }
                        else {
                            _debugExtMsg("throw" + (severity === 1  ? "Critical" : "Warning"), message);
                        }
                    }
                };
                _self[STR_WARN_TO_CONSOLE ] = function (message) {
                    _logToConsole("warn", message);
                    _debugExtMsg("warning", message);
                };
                _self[STR_ERROR_TO_CONSOLE ] = function (message) {
                    _logToConsole("error", message);
                    _debugExtMsg("error", message);
                };
                _self.resetInternalMessageCount = function () {
                    _messageCount = 0;
                    _messageLogged = {};
                };
                _self[_DYN_LOG_INTERNAL_MESSAGE ] = _logInternalMessage;
                function _logInternalMessage(severity, message) {
                    if (_areInternalMessagesThrottled()) {
                        return;
                    }
                    var logMessage = true;
                    var messageKey = AIInternalMessagePrefix + message[_DYN_MESSAGE_ID ];
                    if (_messageLogged[messageKey]) {
                        logMessage = false;
                    }
                    else {
                        _messageLogged[messageKey] = true;
                    }
                    if (logMessage) {
                        if (severity <= _loggingLevelTelemetry) {
                            _self.queue[_DYN_PUSH ](message);
                            _messageCount++;
                            _debugExtMsg((severity === 1  ? "error" : "warn"), message);
                        }
                        if (_messageCount === _maxInternalMessageLimit) {
                            var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
                            var throttleMessage = new _InternalLogMessage(23 , throttleLimitMessage, false);
                            _self.queue[_DYN_PUSH ](throttleMessage);
                            if (severity === 1 ) {
                                _self[STR_ERROR_TO_CONSOLE ](throttleLimitMessage);
                            }
                            else {
                                _self[STR_WARN_TO_CONSOLE ](throttleLimitMessage);
                            }
                        }
                    }
                }
                function _setDefaultsFromConfig(config) {
                    _loggingLevelConsole = getCfgValue(config.loggingLevelConsole, 0);
                    _loggingLevelTelemetry = getCfgValue(config.loggingLevelTelemetry, 1);
                    _maxInternalMessageLimit = getCfgValue(config.maxMessageLimit, 25);
                    _enableDebugExceptions = getCfgValue(config[_DYN_ENABLE_DEBUG_EXCEPTI4 ], false);
                }
                function _areInternalMessagesThrottled() {
                    return _messageCount >= _maxInternalMessageLimit;
                }
                function _debugExtMsg(name, data) {
                    var dbgExt = getDebugExt(config || {});
                    if (dbgExt && dbgExt[_DYN_DIAG_LOG$1 ]) {
                        dbgExt[_DYN_DIAG_LOG$1 ](name, data);
                    }
                }
            });
        }
        DiagnosticLogger.__ieDyn=1;
        return DiagnosticLogger;
    }());
    function _getLogger(logger) {
        return (logger || new DiagnosticLogger());
    }
    function _throwInternal(logger, severity, msgId, msg, properties, isUserAct) {
        if (isUserAct === void 0) { isUserAct = false; }
        _getLogger(logger).throwInternal(severity, msgId, msg, properties, isUserAct);
    }
    function _warnToConsole(logger, message) {
        _getLogger(logger)[STR_WARN_TO_CONSOLE ](message);
    }

    var strExecutionContextKey = "ctx";
    var strParentContextKey = "ParentContextKey";
    var strChildrenContextKey = "ChildrenContextKey";
    var _defaultPerfManager = null;
    var PerfEvent = /** @class */ (function () {
        function PerfEvent(name, payloadDetails, isAsync) {
            var _self = this;
            var accessorDefined = false;
            _self.start = dateNow();
            _self[_DYN_NAME$1 ] = name;
            _self[_DYN_IS_ASYNC ] = isAsync;
            _self[_DYN_IS_CHILD_EVT ] = function () { return false; };
            if (isFunction(payloadDetails)) {
                var theDetails_1;
                accessorDefined = objDefineAccessors(_self, "payload", function () {
                    if (!theDetails_1 && isFunction(payloadDetails)) {
                        theDetails_1 = payloadDetails();
                        payloadDetails = null;
                    }
                    return theDetails_1;
                });
            }
            _self[_DYN_GET_CTX ] = function (key) {
                if (key) {
                    if (key === PerfEvent[strParentContextKey] || key === PerfEvent[strChildrenContextKey]) {
                        return _self[key];
                    }
                    return (_self[strExecutionContextKey] || {})[key];
                }
                return null;
            };
            _self[_DYN_SET_CTX ] = function (key, value) {
                if (key) {
                    if (key === PerfEvent[strParentContextKey]) {
                        if (!_self[key]) {
                            _self[_DYN_IS_CHILD_EVT ] = function () { return true; };
                        }
                        _self[key] = value;
                    }
                    else if (key === PerfEvent[strChildrenContextKey]) {
                        _self[key] = value;
                    }
                    else {
                        var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                        ctx[key] = value;
                    }
                }
            };
            _self[_DYN_COMPLETE ] = function () {
                var childTime = 0;
                var childEvts = _self[_DYN_GET_CTX ](PerfEvent[strChildrenContextKey]);
                if (isArray(childEvts)) {
                    for (var lp = 0; lp < childEvts[_DYN_LENGTH$2 ]; lp++) {
                        var childEvt = childEvts[lp];
                        if (childEvt) {
                            childTime += childEvt[_DYN_TIME ];
                        }
                    }
                }
                _self[_DYN_TIME ] = dateNow() - _self.start;
                _self.exTime = _self[_DYN_TIME ] - childTime;
                _self[_DYN_COMPLETE ] = function () { };
                if (!accessorDefined && isFunction(payloadDetails)) {
                    _self.payload = payloadDetails();
                }
            };
        }
        PerfEvent.ParentContextKey = "parent";
        PerfEvent.ChildrenContextKey = "childEvts";
        return PerfEvent;
    }());
    var PerfManager = /** @class */ (function () {
        function PerfManager(manager) {
            this.ctx = {};
            dynamicProto(PerfManager, this, function (_self) {
                _self.create = function (src, payloadDetails, isAsync) {
                    return new PerfEvent(src, payloadDetails, isAsync);
                };
                _self.fire = function (perfEvent) {
                    if (perfEvent) {
                        perfEvent[_DYN_COMPLETE ]();
                        if (manager && isFunction(manager[STR_PERF_EVENT ])) {
                            manager[STR_PERF_EVENT ](perfEvent);
                        }
                    }
                };
                _self[_DYN_SET_CTX ] = function (key, value) {
                    if (key) {
                        var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                        ctx[key] = value;
                    }
                };
                _self[_DYN_GET_CTX ] = function (key) {
                    return (_self[strExecutionContextKey] || {})[key];
                };
            });
        }
        PerfManager.__ieDyn=1;
        return PerfManager;
    }());
    var doPerfActiveKey = "CoreUtils.doPerf";
    function doPerf(mgrSource, getSource, func, details, isAsync) {
        if (mgrSource) {
            var perfMgr = mgrSource;
            if (perfMgr[STR_GET_PERF_MGR]) {
                perfMgr = perfMgr[STR_GET_PERF_MGR]();
            }
            if (perfMgr) {
                var perfEvt = void 0;
                var currentActive = perfMgr[_DYN_GET_CTX ](doPerfActiveKey);
                try {
                    perfEvt = perfMgr.create(getSource(), details, isAsync);
                    if (perfEvt) {
                        if (currentActive && perfEvt[_DYN_SET_CTX ]) {
                            perfEvt[_DYN_SET_CTX ](PerfEvent[strParentContextKey], currentActive);
                            if (currentActive[_DYN_GET_CTX ] && currentActive[_DYN_SET_CTX ]) {
                                var children = currentActive[_DYN_GET_CTX ](PerfEvent[strChildrenContextKey]);
                                if (!children) {
                                    children = [];
                                    currentActive[_DYN_SET_CTX ](PerfEvent[strChildrenContextKey], children);
                                }
                                children[_DYN_PUSH ](perfEvt);
                            }
                        }
                        perfMgr[_DYN_SET_CTX ](doPerfActiveKey, perfEvt);
                        return func(perfEvt);
                    }
                }
                catch (ex) {
                    if (perfEvt && perfEvt[_DYN_SET_CTX ]) {
                        perfEvt[_DYN_SET_CTX ]("exception", ex);
                    }
                }
                finally {
                    if (perfEvt) {
                        perfMgr.fire(perfEvt);
                    }
                    perfMgr[_DYN_SET_CTX ](doPerfActiveKey, currentActive);
                }
            }
        }
        return func();
    }
    function getGblPerfMgr() {
        return _defaultPerfManager;
    }

    var UInt32Mask = 0x100000000;
    var MaxUInt32 = 0xffffffff;
    var _mwcSeeded = false;
    var _mwcW = 123456789;
    var _mwcZ = 987654321;
    function _mwcSeed(seedValue) {
        if (seedValue < 0) {
            seedValue >>>= 0;
        }
        _mwcW = (123456789 + seedValue) & MaxUInt32;
        _mwcZ = (987654321 - seedValue) & MaxUInt32;
        _mwcSeeded = true;
    }
    function _autoSeedMwc() {
        try {
            var now = dateNow() & 0x7fffffff;
            _mwcSeed(((Math.random() * UInt32Mask) ^ now) + now);
        }
        catch (e) {
        }
    }
    function randomValue(maxValue) {
        if (maxValue > 0) {
            return Math.floor((random32() / MaxUInt32) * (maxValue + 1)) >>> 0;
        }
        return 0;
    }
    function random32(signed) {
        var value = 0;
        var c = getCrypto() || getMsCrypto();
        if (c && c.getRandomValues) {
            value = c.getRandomValues(new Uint32Array(1))[0] & MaxUInt32;
        }
        if (value === 0 && isIE()) {
            if (!_mwcSeeded) {
                _autoSeedMwc();
            }
            value = mwcRandom32() & MaxUInt32;
        }
        if (value === 0) {
            value = Math.floor((UInt32Mask * Math.random()) | 0);
        }
        if (!signed) {
            value >>>= 0;
        }
        return value;
    }
    function mwcRandomSeed(value) {
        if (!value) {
            _autoSeedMwc();
        }
        else {
            _mwcSeed(value);
        }
    }
    function mwcRandom32(signed) {
        _mwcZ = (36969 * (_mwcZ & 0xFFFF) + (_mwcZ >> 16)) & MaxUInt32;
        _mwcW = (18000 * (_mwcW & 0xFFFF) + (_mwcW >> 16)) & MaxUInt32;
        var value = (((_mwcZ << 16) + (_mwcW & 0xFFFF)) >>> 0) & MaxUInt32 | 0;
        if (!signed) {
            value >>>= 0;
        }
        return value;
    }
    function newId(maxLength) {
        if (maxLength === void 0) { maxLength = 22; }
        var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var number = random32() >>> 0;
        var chars = 0;
        var result = STR_EMPTY$1;
        while (result[_DYN_LENGTH$2 ] < maxLength) {
            chars++;
            result += base64chars.charAt(number & 0x3F);
            number >>>= 6;
            if (chars === 5) {
                number = (((random32() << 2) & 0xFFFFFFFF) | (number & 0x03)) >>> 0;
                chars = 0;
            }
        }
        return result;
    }

    var _objDefineProperty = ObjDefineProperty;
    var version = '2.8.6';
    var instanceName = "." + newId(6);
    var _dataUid = 0;
    function _createAccessor(target, prop, value) {
        if (_objDefineProperty) {
            try {
                _objDefineProperty(target, prop, {
                    value: value,
                    enumerable: false,
                    configurable: true
                });
                return true;
            }
            catch (e) {
            }
        }
        return false;
    }
    function _canAcceptData(target) {
        return target[_DYN_NODE_TYPE ] === 1 || target[_DYN_NODE_TYPE ] === 9 || !(+target[_DYN_NODE_TYPE ]);
    }
    function _getCache(data, target) {
        var theCache = target[data.id];
        if (!theCache) {
            theCache = {};
            try {
                if (_canAcceptData(target)) {
                    if (!_createAccessor(target, data.id, theCache)) {
                        target[data.id] = theCache;
                    }
                }
            }
            catch (e) {
            }
        }
        return theCache;
    }
    function createUniqueNamespace(name, includeVersion) {
        if (includeVersion === void 0) { includeVersion = false; }
        return normalizeJsName(name + (_dataUid++) + (includeVersion ? "." + version : STR_EMPTY$1) + instanceName);
    }
    function createElmNodeData(name) {
        var data = {
            id: createUniqueNamespace("_aiData-" + (name || STR_EMPTY$1) + "." + version),
            accept: function (target) {
                return _canAcceptData(target);
            },
            get: function (target, name, defValue, addDefault) {
                var theCache = target[data.id];
                if (!theCache) {
                    if (addDefault) {
                        theCache = _getCache(data, target);
                        theCache[normalizeJsName(name)] = defValue;
                    }
                    return defValue;
                }
                return theCache[normalizeJsName(name)];
            },
            kill: function (target, name) {
                if (target && target[name]) {
                    try {
                        delete target[name];
                    }
                    catch (e) {
                    }
                }
            }
        };
        return data;
    }

    var strToGMTString = "toGMTString";
    var strToUTCString = "toUTCString";
    var strCookie = "cookie";
    var strExpires = "expires";
    var strEnabled = "enabled";
    var strIsCookieUseDisabled = "isCookieUseDisabled";
    var strDisableCookiesUsage = "disableCookiesUsage";
    var strConfigCookieMgr = "_ckMgr";
    var _supportsCookies = null;
    var _allowUaSameSite = null;
    var _parsedCookieValue = null;
    var _doc = getDocument();
    var _cookieCache = {};
    var _globalCookieConfig = {};
    function _gblCookieMgr(config, logger) {
        var inst = createCookieMgr[strConfigCookieMgr] || _globalCookieConfig[strConfigCookieMgr];
        if (!inst) {
            inst = createCookieMgr[strConfigCookieMgr] = createCookieMgr(config, logger);
            _globalCookieConfig[strConfigCookieMgr] = inst;
        }
        return inst;
    }
    function _isMgrEnabled(cookieMgr) {
        if (cookieMgr) {
            return cookieMgr.isEnabled();
        }
        return true;
    }
    function _createCookieMgrConfig(rootConfig) {
        var cookieMgrCfg = rootConfig[_DYN_COOKIE_CFG ] = rootConfig[_DYN_COOKIE_CFG ] || {};
        setValue(cookieMgrCfg, "domain", rootConfig.cookieDomain, isNotNullOrUndefined, isNullOrUndefined);
        setValue(cookieMgrCfg, "path", rootConfig.cookiePath || "/", null, isNullOrUndefined);
        if (isNullOrUndefined(cookieMgrCfg[strEnabled])) {
            var cookieEnabled = void 0;
            if (!isUndefined(rootConfig[strIsCookieUseDisabled])) {
                cookieEnabled = !rootConfig[strIsCookieUseDisabled];
            }
            if (!isUndefined(rootConfig[strDisableCookiesUsage])) {
                cookieEnabled = !rootConfig[strDisableCookiesUsage];
            }
            cookieMgrCfg[strEnabled] = cookieEnabled;
        }
        return cookieMgrCfg;
    }
    function safeGetCookieMgr(core, config) {
        var cookieMgr;
        if (core) {
            cookieMgr = core.getCookieMgr();
        }
        else if (config) {
            var cookieCfg = config[_DYN_COOKIE_CFG ];
            if (cookieCfg[strConfigCookieMgr]) {
                cookieMgr = cookieCfg[strConfigCookieMgr];
            }
            else {
                cookieMgr = createCookieMgr(config);
            }
        }
        if (!cookieMgr) {
            cookieMgr = _gblCookieMgr(config, (core || {})[_DYN_LOGGER ]);
        }
        return cookieMgr;
    }
    function createCookieMgr(rootConfig, logger) {
        var _a;
        var cookieMgrConfig = _createCookieMgrConfig(rootConfig || _globalCookieConfig);
        var _path = cookieMgrConfig.path || "/";
        var _domain = cookieMgrConfig.domain;
        var _enabled = cookieMgrConfig[strEnabled] !== false;
        var cookieMgr = (_a = {
                isEnabled: function () {
                    var enabled = _enabled && areCookiesSupported(logger);
                    var gblManager = _globalCookieConfig[strConfigCookieMgr];
                    if (enabled && gblManager && cookieMgr !== gblManager) {
                        enabled = _isMgrEnabled(gblManager);
                    }
                    return enabled;
                }
            },
            _a[_DYN_SET_ENABLED ] = function (value) {
                _enabled = value !== false;
            },
            _a.set = function (name, value, maxAgeSec, domain, path) {
                var result = false;
                if (_isMgrEnabled(cookieMgr)) {
                    var values = {};
                    var theValue = strTrim(value || STR_EMPTY$1);
                    var idx = theValue[_DYN_INDEX_OF$1 ](";");
                    if (idx !== -1) {
                        theValue = strTrim(value[_DYN_SUBSTRING$1 ](0, idx));
                        values = _extractParts(value[_DYN_SUBSTRING$1 ](idx + 1));
                    }
                    setValue(values, "domain", domain || _domain, isTruthy, isUndefined);
                    if (!isNullOrUndefined(maxAgeSec)) {
                        var _isIE = isIE();
                        if (isUndefined(values[strExpires])) {
                            var nowMs = dateNow();
                            var expireMs = nowMs + (maxAgeSec * 1000);
                            if (expireMs > 0) {
                                var expiry = new Date();
                                expiry.setTime(expireMs);
                                setValue(values, strExpires, _formatDate(expiry, !_isIE ? strToUTCString : strToGMTString) || _formatDate(expiry, _isIE ? strToGMTString : strToUTCString) || STR_EMPTY$1, isTruthy);
                            }
                        }
                        if (!_isIE) {
                            setValue(values, "max-age", STR_EMPTY$1 + maxAgeSec, null, isUndefined);
                        }
                    }
                    var location_1 = getLocation();
                    if (location_1 && location_1.protocol === "https:") {
                        setValue(values, "secure", null, null, isUndefined);
                        if (_allowUaSameSite === null) {
                            _allowUaSameSite = !uaDisallowsSameSiteNone((getNavigator() || {})[_DYN_USER_AGENT ]);
                        }
                        if (_allowUaSameSite) {
                            setValue(values, "SameSite", "None", null, isUndefined);
                        }
                    }
                    setValue(values, "path", path || _path, null, isUndefined);
                    var setCookieFn = cookieMgrConfig.setCookie || _setCookieValue;
                    setCookieFn(name, _formatCookieValue(theValue, values));
                    result = true;
                }
                return result;
            },
            _a.get = function (name) {
                var value = STR_EMPTY$1;
                if (_isMgrEnabled(cookieMgr)) {
                    value = (cookieMgrConfig.getCookie || _getCookieValue)(name);
                }
                return value;
            },
            _a.del = function (name, path) {
                var result = false;
                if (_isMgrEnabled(cookieMgr)) {
                    result = cookieMgr.purge(name, path);
                }
                return result;
            },
            _a.purge = function (name, path) {
                var _a;
                var result = false;
                if (areCookiesSupported(logger)) {
                    var values = (_a = {},
                        _a["path"] = path ? path : "/",
                        _a[strExpires] = "Thu, 01 Jan 1970 00:00:01 GMT",
                        _a);
                    if (!isIE()) {
                        values["max-age"] = "0";
                    }
                    var delCookie = cookieMgrConfig.delCookie || _setCookieValue;
                    delCookie(name, _formatCookieValue(STR_EMPTY$1, values));
                    result = true;
                }
                return result;
            },
            _a);
        cookieMgr[strConfigCookieMgr] = cookieMgr;
        return cookieMgr;
    }
    function areCookiesSupported(logger) {
        if (_supportsCookies === null) {
            _supportsCookies = false;
            try {
                var doc = _doc || {};
                _supportsCookies = doc[strCookie] !== undefined;
            }
            catch (e) {
                _throwInternal(logger, 2 , 68 , "Cannot access document.cookie - " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return _supportsCookies;
    }
    function _extractParts(theValue) {
        var values = {};
        if (theValue && theValue[_DYN_LENGTH$2 ]) {
            var parts = strTrim(theValue)[_DYN_SPLIT$1 ](";");
            arrForEach(parts, function (thePart) {
                thePart = strTrim(thePart || STR_EMPTY$1);
                if (thePart) {
                    var idx = thePart[_DYN_INDEX_OF$1 ]("=");
                    if (idx === -1) {
                        values[thePart] = null;
                    }
                    else {
                        values[strTrim(thePart[_DYN_SUBSTRING$1 ](0, idx))] = strTrim(thePart[_DYN_SUBSTRING$1 ](idx + 1));
                    }
                }
            });
        }
        return values;
    }
    function _formatDate(theDate, func) {
        if (isFunction(theDate[func])) {
            return theDate[func]();
        }
        return null;
    }
    function _formatCookieValue(value, values) {
        var cookieValue = value || STR_EMPTY$1;
        objForEachKey(values, function (name, theValue) {
            cookieValue += "; " + name + (!isNullOrUndefined(theValue) ? "=" + theValue : STR_EMPTY$1);
        });
        return cookieValue;
    }
    function _getCookieValue(name) {
        var cookieValue = STR_EMPTY$1;
        if (_doc) {
            var theCookie = _doc[strCookie] || STR_EMPTY$1;
            if (_parsedCookieValue !== theCookie) {
                _cookieCache = _extractParts(theCookie);
                _parsedCookieValue = theCookie;
            }
            cookieValue = strTrim(_cookieCache[name] || STR_EMPTY$1);
        }
        return cookieValue;
    }
    function _setCookieValue(name, cookieValue) {
        if (_doc) {
            _doc[strCookie] = name + "=" + cookieValue;
        }
    }
    function uaDisallowsSameSiteNone(userAgent) {
        if (!isString(userAgent)) {
            return false;
        }
        if (strContains(userAgent, "CPU iPhone OS 12") || strContains(userAgent, "iPad; CPU OS 12")) {
            return true;
        }
        if (strContains(userAgent, "Macintosh; Intel Mac OS X 10_14") && strContains(userAgent, "Version/") && strContains(userAgent, "Safari")) {
            return true;
        }
        if (strContains(userAgent, "Macintosh; Intel Mac OS X 10_14") && strEndsWith(userAgent, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) {
            return true;
        }
        if (strContains(userAgent, "Chrome/5") || strContains(userAgent, "Chrome/6")) {
            return true;
        }
        if (strContains(userAgent, "UnrealEngine") && !strContains(userAgent, "Chrome")) {
            return true;
        }
        if (strContains(userAgent, "UCBrowser/12") || strContains(userAgent, "UCBrowser/11")) {
            return true;
        }
        return false;
    }

    var strOnPrefix = "on";
    var strAttachEvent = "attachEvent";
    var strAddEventHelper = "addEventListener";
    var strDetachEvent = "detachEvent";
    var strRemoveEventListener = "removeEventListener";
    var strEvents = "events";
    var strVisibilityChangeEvt = "visibilitychange";
    var strPageHide = "pagehide";
    var strPageShow = "pageshow";
    var strUnload = "unload";
    var strBeforeUnload = "beforeunload";
    var strPageHideNamespace = createUniqueNamespace("aiEvtPageHide");
    var strPageShowNamespace = createUniqueNamespace("aiEvtPageShow");
    var rRemoveEmptyNs = /\.[\.]+/g;
    var rRemoveTrailingEmptyNs = /[\.]+$/;
    var _guid = 1;
    var elmNodeData = createElmNodeData("events");
    var eventNamespace = /^([^.]*)(?:\.(.+)|)/;
    function _normalizeNamespace(name) {
        if (name && name[_DYN_REPLACE ]) {
            return name.replace(/^\s*\.*|\.*\s*$/g, STR_EMPTY$1);
        }
        return name;
    }
    function _getEvtNamespace(eventName, evtNamespace) {
        var _a;
        if (evtNamespace) {
            var theNamespace_1 = STR_EMPTY$1;
            if (isArray(evtNamespace)) {
                theNamespace_1 = STR_EMPTY$1;
                arrForEach(evtNamespace, function (name) {
                    name = _normalizeNamespace(name);
                    if (name) {
                        if (name[0] !== ".") {
                            name = "." + name;
                        }
                        theNamespace_1 += name;
                    }
                });
            }
            else {
                theNamespace_1 = _normalizeNamespace(evtNamespace);
            }
            if (theNamespace_1) {
                if (theNamespace_1[0] !== ".") {
                    theNamespace_1 = "." + theNamespace_1;
                }
                eventName = (eventName || STR_EMPTY$1) + theNamespace_1;
            }
        }
        var parsedEvent = (eventNamespace.exec(eventName || STR_EMPTY$1) || []);
        return _a = {},
            _a[_DYN_TYPE ] = parsedEvent[1],
            _a.ns = ((parsedEvent[2] || STR_EMPTY$1).replace(rRemoveEmptyNs, ".").replace(rRemoveTrailingEmptyNs, STR_EMPTY$1)[_DYN_SPLIT$1 ](".").sort()).join("."),
            _a;
    }
    function _getRegisteredEvents(target, evtName, addDefault) {
        if (addDefault === void 0) { addDefault = true; }
        var aiEvts = elmNodeData.get(target, strEvents, {}, addDefault);
        var registeredEvents = aiEvts[evtName];
        if (!registeredEvents) {
            registeredEvents = aiEvts[evtName] = [];
        }
        return registeredEvents;
    }
    function _doDetach(obj, evtName, handlerRef, useCapture) {
        if (obj && evtName && evtName[_DYN_TYPE ]) {
            if (obj[strRemoveEventListener]) {
                obj[strRemoveEventListener](evtName[_DYN_TYPE ], handlerRef, useCapture);
            }
            else if (obj[strDetachEvent]) {
                obj[strDetachEvent](strOnPrefix + evtName[_DYN_TYPE ], handlerRef);
            }
        }
    }
    function _doAttach(obj, evtName, handlerRef, useCapture) {
        var result = false;
        if (obj && evtName && evtName[_DYN_TYPE ] && handlerRef) {
            if (obj[strAddEventHelper]) {
                obj[strAddEventHelper](evtName[_DYN_TYPE ], handlerRef, useCapture);
                result = true;
            }
            else if (obj[strAttachEvent]) {
                obj[strAttachEvent](strOnPrefix + evtName[_DYN_TYPE ], handlerRef);
                result = true;
            }
        }
        return result;
    }
    function _doUnregister(target, events, evtName, unRegFn) {
        var idx = events[_DYN_LENGTH$2 ];
        while (idx--) {
            var theEvent = events[idx];
            if (theEvent) {
                if (!evtName.ns || evtName.ns === theEvent.evtName.ns) {
                    if (!unRegFn || unRegFn(theEvent)) {
                        _doDetach(target, theEvent.evtName, theEvent[_DYN_HANDLER ], theEvent.capture);
                        events[_DYN_SPLICE ](idx, 1);
                    }
                }
            }
        }
    }
    function _unregisterEvents(target, evtName, unRegFn) {
        if (evtName[_DYN_TYPE ]) {
            _doUnregister(target, _getRegisteredEvents(target, evtName[_DYN_TYPE ]), evtName, unRegFn);
        }
        else {
            var eventCache = elmNodeData.get(target, strEvents, {});
            objForEachKey(eventCache, function (evtType, events) {
                _doUnregister(target, events, evtName, unRegFn);
            });
            if (objKeys(eventCache)[_DYN_LENGTH$2 ] === 0) {
                elmNodeData.kill(target, strEvents);
            }
        }
    }
    function mergeEvtNamespace(theNamespace, namespaces) {
        var newNamespaces;
        if (namespaces) {
            if (isArray(namespaces)) {
                newNamespaces = [theNamespace].concat(namespaces);
            }
            else {
                newNamespaces = [theNamespace, namespaces];
            }
            newNamespaces = (_getEvtNamespace("xx", newNamespaces).ns)[_DYN_SPLIT$1 ](".");
        }
        else {
            newNamespaces = theNamespace;
        }
        return newNamespaces;
    }
    function eventOn(target, eventName, handlerRef, evtNamespace, useCapture) {
        var _a;
        if (useCapture === void 0) { useCapture = false; }
        var result = false;
        if (target) {
            try {
                var evtName = _getEvtNamespace(eventName, evtNamespace);
                result = _doAttach(target, evtName, handlerRef, useCapture);
                if (result && elmNodeData.accept(target)) {
                    var registeredEvent = (_a = {
                            guid: _guid++,
                            evtName: evtName
                        },
                        _a[_DYN_HANDLER ] = handlerRef,
                        _a.capture = useCapture,
                        _a);
                    _getRegisteredEvents(target, evtName.type)[_DYN_PUSH ](registeredEvent);
                }
            }
            catch (e) {
            }
        }
        return result;
    }
    function eventOff(target, eventName, handlerRef, evtNamespace, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        if (target) {
            try {
                var evtName_1 = _getEvtNamespace(eventName, evtNamespace);
                var found_1 = false;
                _unregisterEvents(target, evtName_1, function (regEvent) {
                    if ((evtName_1.ns && !handlerRef) || regEvent[_DYN_HANDLER ] === handlerRef) {
                        found_1 = true;
                        return true;
                    }
                    return false;
                });
                if (!found_1) {
                    _doDetach(target, evtName_1, handlerRef, useCapture);
                }
            }
            catch (e) {
            }
        }
    }
    function addEventHandler(eventName, callback, evtNamespace) {
        var result = false;
        var w = getWindow();
        if (w) {
            result = eventOn(w, eventName, callback, evtNamespace);
            result = eventOn(w["body"], eventName, callback, evtNamespace) || result;
        }
        var doc = getDocument();
        if (doc) {
            result = eventOn(doc, eventName, callback, evtNamespace) || result;
        }
        return result;
    }
    function removeEventHandler(eventName, callback, evtNamespace) {
        var w = getWindow();
        if (w) {
            eventOff(w, eventName, callback, evtNamespace);
            eventOff(w["body"], eventName, callback, evtNamespace);
        }
        var doc = getDocument();
        if (doc) {
            eventOff(doc, eventName, callback, evtNamespace);
        }
    }
    function _addEventListeners(events, listener, excludeEvents, evtNamespace) {
        var added = false;
        if (listener && events && events[_DYN_LENGTH$2 ] > 0) {
            arrForEach(events, function (name) {
                if (name) {
                    if (!excludeEvents || arrIndexOf(excludeEvents, name) === -1) {
                        added = addEventHandler(name, listener, evtNamespace) || added;
                    }
                }
            });
        }
        return added;
    }
    function addEventListeners(events, listener, excludeEvents, evtNamespace) {
        var added = false;
        if (listener && events && isArray(events)) {
            added = _addEventListeners(events, listener, excludeEvents, evtNamespace);
            if (!added && excludeEvents && excludeEvents[_DYN_LENGTH$2 ] > 0) {
                added = _addEventListeners(events, listener, null, evtNamespace);
            }
        }
        return added;
    }
    function removeEventListeners(events, listener, evtNamespace) {
        if (events && isArray(events)) {
            arrForEach(events, function (name) {
                if (name) {
                    removeEventHandler(name, listener, evtNamespace);
                }
            });
        }
    }
    function addPageUnloadEventListener(listener, excludeEvents, evtNamespace) {
        return addEventListeners([strBeforeUnload, strUnload, strPageHide], listener, excludeEvents, evtNamespace);
    }
    function removePageUnloadEventListener(listener, evtNamespace) {
        removeEventListeners([strBeforeUnload, strUnload, strPageHide], listener, evtNamespace);
    }
    function addPageHideEventListener(listener, excludeEvents, evtNamespace) {
        function _handlePageVisibility(evt) {
            var doc = getDocument();
            if (listener && doc && doc.visibilityState === "hidden") {
                listener(evt);
            }
        }
        var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
        var pageUnloadAdded = _addEventListeners([strPageHide], listener, excludeEvents, newNamespaces);
        if (!excludeEvents || arrIndexOf(excludeEvents, strVisibilityChangeEvt) === -1) {
            pageUnloadAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageUnloadAdded;
        }
        if (!pageUnloadAdded && excludeEvents) {
            pageUnloadAdded = addPageHideEventListener(listener, null, evtNamespace);
        }
        return pageUnloadAdded;
    }
    function removePageHideEventListener(listener, evtNamespace) {
        var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
        removeEventListeners([strPageHide], listener, newNamespaces);
        removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
    }
    function addPageShowEventListener(listener, excludeEvents, evtNamespace) {
        function _handlePageVisibility(evt) {
            var doc = getDocument();
            if (listener && doc && doc.visibilityState === "visible") {
                listener(evt);
            }
        }
        var newNamespaces = mergeEvtNamespace(strPageShowNamespace, evtNamespace);
        var pageShowAdded = _addEventListeners([strPageShow], listener, excludeEvents, newNamespaces);
        pageShowAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageShowAdded;
        if (!pageShowAdded && excludeEvents) {
            pageShowAdded = addPageShowEventListener(listener, null, evtNamespace);
        }
        return pageShowAdded;
    }
    function removePageShowEventListener(listener, evtNamespace) {
        var newNamespaces = mergeEvtNamespace(strPageShowNamespace, evtNamespace);
        removeEventListeners([strPageShow], listener, newNamespaces);
        removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
    }

    function newGuid() {
        var uuid = generateW3CId();
        return uuid[_DYN_SUBSTRING$1 ](0, 8) + "-" + uuid[_DYN_SUBSTRING$1 ](8, 12) + "-" + uuid[_DYN_SUBSTRING$1 ](12, 16) + "-" + uuid[_DYN_SUBSTRING$1 ](16, 20) + "-" + uuid[_DYN_SUBSTRING$1 ](20);
    }
    function perfNow() {
        var perf = getPerformance();
        if (perf && perf.now) {
            return perf.now();
        }
        return dateNow();
    }
    function generateW3CId() {
        var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var oct = STR_EMPTY$1, tmp;
        for (var a = 0; a < 4; a++) {
            tmp = random32();
            oct +=
                hexValues[tmp & 0xF] +
                    hexValues[tmp >> 4 & 0xF] +
                    hexValues[tmp >> 8 & 0xF] +
                    hexValues[tmp >> 12 & 0xF] +
                    hexValues[tmp >> 16 & 0xF] +
                    hexValues[tmp >> 20 & 0xF] +
                    hexValues[tmp >> 24 & 0xF] +
                    hexValues[tmp >> 28 & 0xF];
        }
        var clockSequenceHi = hexValues[8 + (random32() & 0x03) | 0];
        return oct[_DYN_SUBSTR ](0, 8) + oct[_DYN_SUBSTR ](9, 4) + "4" + oct[_DYN_SUBSTR ](13, 3) + clockSequenceHi + oct[_DYN_SUBSTR ](16, 3) + oct[_DYN_SUBSTR ](19, 12);
    }

    var INVALID_TRACE_ID = "00000000000000000000000000000000";
    var INVALID_SPAN_ID = "0000000000000000";
    function _isValid(value, len, invalidValue) {
        if (value && value[_DYN_LENGTH$2 ] === len && value !== invalidValue) {
            return !!value.match(/^[\da-f]*$/);
        }
        return false;
    }
    function isValidTraceId(value) {
        return _isValid(value, 32, INVALID_TRACE_ID);
    }
    function isValidSpanId(value) {
        return _isValid(value, 16, INVALID_SPAN_ID);
    }

    var pluginStateData = createElmNodeData("plugin");
    function _getPluginState(plugin) {
        return pluginStateData.get(plugin, "state", {}, true);
    }
    function initializePlugins(processContext, extensions) {
        var initPlugins = [];
        var lastPlugin = null;
        var proxy = processContext[_DYN_GET_NEXT ]();
        var pluginState;
        while (proxy) {
            var thePlugin = proxy[_DYN_GET_PLUGIN ]();
            if (thePlugin) {
                if (lastPlugin &&
                    isFunction(lastPlugin[_DYN_SET_NEXT_PLUGIN ]) &&
                    isFunction(thePlugin[STR_PROCESS_TELEMETRY ])) {
                    lastPlugin[_DYN_SET_NEXT_PLUGIN ](thePlugin);
                }
                var isInitialized = false;
                if (isFunction(thePlugin[_DYN_IS_INITIALIZED ])) {
                    isInitialized = thePlugin[_DYN_IS_INITIALIZED ]();
                }
                else {
                    pluginState = _getPluginState(thePlugin);
                    isInitialized = pluginState[_DYN_IS_INITIALIZED ];
                }
                if (!isInitialized) {
                    initPlugins[_DYN_PUSH ](thePlugin);
                }
                lastPlugin = thePlugin;
                proxy = proxy[_DYN_GET_NEXT ]();
            }
        }
        arrForEach(initPlugins, function (thePlugin) {
            var core = processContext[STR_CORE]();
            thePlugin[_DYN_INITIALIZE ](processContext.getCfg(), core, extensions, processContext[_DYN_GET_NEXT ]());
            pluginState = _getPluginState(thePlugin);
            if (!thePlugin[STR_CORE] && !pluginState[STR_CORE]) {
                pluginState[STR_CORE] = core;
            }
            pluginState[_DYN_IS_INITIALIZED ] = true;
            delete pluginState[_DYN_TEARDOWN ];
        });
    }
    function sortPlugins(plugins) {
        return plugins.sort(function (extA, extB) {
            var result = 0;
            if (extB) {
                var bHasProcess = isFunction(extB[STR_PROCESS_TELEMETRY]);
                if (isFunction(extA[STR_PROCESS_TELEMETRY])) {
                    result = bHasProcess ? extA[STR_PRIORITY] - extB[STR_PRIORITY] : 1;
                }
                else if (bHasProcess) {
                    result = -1;
                }
            }
            else {
                result = extA ? 1 : -1;
            }
            return result;
        });
    }
    function createDistributedTraceContext(parentCtx) {
        var trace = {};
        return {
            getName: function () {
                return trace[_DYN_NAME$1 ];
            },
            setName: function (newValue) {
                parentCtx && parentCtx.setName(newValue);
                trace[_DYN_NAME$1 ] = newValue;
            },
            getTraceId: function () {
                return trace[_DYN_TRACE_ID ];
            },
            setTraceId: function (newValue) {
                parentCtx && parentCtx.setTraceId(newValue);
                if (isValidTraceId(newValue)) {
                    trace[_DYN_TRACE_ID ] = newValue;
                }
            },
            getSpanId: function () {
                return trace[_DYN_SPAN_ID ];
            },
            setSpanId: function (newValue) {
                parentCtx && parentCtx.setSpanId(newValue);
                if (isValidSpanId(newValue)) {
                    trace[_DYN_SPAN_ID ] = newValue;
                }
            },
            getTraceFlags: function () {
                return trace[_DYN_TRACE_FLAGS ];
            },
            setTraceFlags: function (newTraceFlags) {
                parentCtx && parentCtx.setTraceFlags(newTraceFlags);
                trace[_DYN_TRACE_FLAGS ] = newTraceFlags;
            }
        };
    }

    var strTelemetryPluginChain = "TelemetryPluginChain";
    var strHasRunFlags = "_hasRun";
    var strGetTelCtx = "_getTelCtx";
    var _chainId = 0;
    function _getNextProxyStart(proxy, core, startAt) {
        while (proxy) {
            if (proxy[_DYN_GET_PLUGIN ]() === startAt) {
                return proxy;
            }
            proxy = proxy[_DYN_GET_NEXT ]();
        }
        return createTelemetryProxyChain([startAt], core[_DYN_CONFIG ] || {}, core);
    }
    function _createInternalContext(telemetryChain, config, core, startAt) {
        var _nextProxy = null;
        var _onComplete = [];
        if (startAt !== null) {
            _nextProxy = startAt ? _getNextProxyStart(telemetryChain, core, startAt) : telemetryChain;
        }
        var context = {
            _next: _moveNext,
            ctx: {
                core: function () {
                    return core;
                },
                diagLog: function () {
                    return safeGetLogger(core, config);
                },
                getCfg: function () {
                    return config;
                },
                getExtCfg: _getExtCfg,
                getConfig: _getConfig,
                hasNext: function () {
                    return !!_nextProxy;
                },
                getNext: function () {
                    return _nextProxy;
                },
                setNext: function (nextPlugin) {
                    _nextProxy = nextPlugin;
                },
                iterate: _iterateChain,
                onComplete: _addOnComplete
            }
        };
        function _addOnComplete(onComplete, that) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            if (onComplete) {
                _onComplete[_DYN_PUSH ]({
                    func: onComplete,
                    self: !isUndefined(that) ? that : context.ctx,
                    args: args
                });
            }
        }
        function _moveNext() {
            var nextProxy = _nextProxy;
            _nextProxy = nextProxy ? nextProxy[_DYN_GET_NEXT ]() : null;
            if (!nextProxy) {
                var onComplete = _onComplete;
                if (onComplete && onComplete[_DYN_LENGTH$2 ] > 0) {
                    arrForEach(onComplete, function (completeDetails) {
                        try {
                            completeDetails.func[_DYN_CALL ](completeDetails.self, completeDetails.args);
                        }
                        catch (e) {
                            _throwInternal(core[_DYN_LOGGER ], 2 , 73 , "Unexpected Exception during onComplete - " + dumpObj(e));
                        }
                    });
                    _onComplete = [];
                }
            }
            return nextProxy;
        }
        function _getExtCfg(identifier, defaultValue, mergeDefault) {
            if (defaultValue === void 0) { defaultValue = {}; }
            if (mergeDefault === void 0) { mergeDefault = 0 ; }
            var theConfig;
            if (config) {
                var extConfig = config[STR_EXTENSION_CONFIG ];
                if (extConfig && identifier) {
                    theConfig = extConfig[identifier];
                }
            }
            if (!theConfig) {
                theConfig = defaultValue;
            }
            else if (isObject(defaultValue)) {
                if (mergeDefault !== 0 ) {
                    var newConfig_1 = objExtend(true, defaultValue, theConfig);
                    if (config && mergeDefault === 2 ) {
                        objForEachKey(defaultValue, function (field) {
                            if (isNullOrUndefined(newConfig_1[field])) {
                                var cfgValue = config[field];
                                if (!isNullOrUndefined(cfgValue)) {
                                    newConfig_1[field] = cfgValue;
                                }
                            }
                        });
                    }
                    theConfig = newConfig_1;
                }
            }
            return theConfig;
        }
        function _getConfig(identifier, field, defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            var theValue;
            var extConfig = _getExtCfg(identifier, null);
            if (extConfig && !isNullOrUndefined(extConfig[field])) {
                theValue = extConfig[field];
            }
            else if (config && !isNullOrUndefined(config[field])) {
                theValue = config[field];
            }
            return !isNullOrUndefined(theValue) ? theValue : defaultValue;
        }
        function _iterateChain(cb) {
            var nextPlugin;
            while (!!(nextPlugin = context._next())) {
                var plugin = nextPlugin[_DYN_GET_PLUGIN ]();
                if (plugin) {
                    cb(plugin);
                }
            }
        }
        return context;
    }
    function createProcessTelemetryContext(telemetryChain, config, core, startAt) {
        var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
        var context = internalContext.ctx;
        function _processNext(env) {
            var nextPlugin = internalContext._next();
            nextPlugin && nextPlugin[STR_PROCESS_TELEMETRY ](env, context);
            return !nextPlugin;
        }
        function _createNew(plugins, startAt) {
            if (plugins === void 0) { plugins = null; }
            if (isArray(plugins)) {
                plugins = createTelemetryProxyChain(plugins, config, core, startAt);
            }
            return createProcessTelemetryContext(plugins || context[_DYN_GET_NEXT ](), config, core, startAt);
        }
        context[_DYN_PROCESS_NEXT ] = _processNext;
        context[_DYN_CREATE_NEW ] = _createNew;
        return context;
    }
    function createProcessTelemetryUnloadContext(telemetryChain, core, startAt) {
        var config = core[_DYN_CONFIG ] || {};
        var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
        var context = internalContext.ctx;
        function _processNext(unloadState) {
            var nextPlugin = internalContext._next();
            nextPlugin && nextPlugin.unload(context, unloadState);
            return !nextPlugin;
        }
        function _createNew(plugins, startAt) {
            if (plugins === void 0) { plugins = null; }
            if (isArray(plugins)) {
                plugins = createTelemetryProxyChain(plugins, config, core, startAt);
            }
            return createProcessTelemetryUnloadContext(plugins || context[_DYN_GET_NEXT ](), core, startAt);
        }
        context[_DYN_PROCESS_NEXT ] = _processNext;
        context[_DYN_CREATE_NEW ] = _createNew;
        return context;
    }
    function createProcessTelemetryUpdateContext(telemetryChain, core, startAt) {
        var config = core[_DYN_CONFIG ] || {};
        var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
        var context = internalContext.ctx;
        function _processNext(updateState) {
            return context.iterate(function (plugin) {
                if (isFunction(plugin[_DYN_UPDATE ])) {
                    plugin[_DYN_UPDATE ](context, updateState);
                }
            });
        }
        function _createNew(plugins, startAt) {
            if (plugins === void 0) { plugins = null; }
            if (isArray(plugins)) {
                plugins = createTelemetryProxyChain(plugins, config, core, startAt);
            }
            return createProcessTelemetryUpdateContext(plugins || context[_DYN_GET_NEXT ](), core, startAt);
        }
        context[_DYN_PROCESS_NEXT ] = _processNext;
        context[_DYN_CREATE_NEW ] = _createNew;
        return context;
    }
    function createTelemetryProxyChain(plugins, config, core, startAt) {
        var firstProxy = null;
        var add = startAt ? false : true;
        if (isArray(plugins) && plugins[_DYN_LENGTH$2 ] > 0) {
            var lastProxy_1 = null;
            arrForEach(plugins, function (thePlugin) {
                if (!add && startAt === thePlugin) {
                    add = true;
                }
                if (add && thePlugin && isFunction(thePlugin[STR_PROCESS_TELEMETRY ])) {
                    var newProxy = createTelemetryPluginProxy(thePlugin, config, core);
                    if (!firstProxy) {
                        firstProxy = newProxy;
                    }
                    if (lastProxy_1) {
                        lastProxy_1._setNext(newProxy);
                    }
                    lastProxy_1 = newProxy;
                }
            });
        }
        if (startAt && !firstProxy) {
            return createTelemetryProxyChain([startAt], config, core);
        }
        return firstProxy;
    }
    function createTelemetryPluginProxy(plugin, config, core) {
        var nextProxy = null;
        var hasProcessTelemetry = isFunction(plugin[STR_PROCESS_TELEMETRY ]);
        var hasSetNext = isFunction(plugin[_DYN_SET_NEXT_PLUGIN ]);
        var chainId;
        if (plugin) {
            chainId = plugin[_DYN_IDENTIFIER ] + "-" + plugin[STR_PRIORITY ] + "-" + _chainId++;
        }
        else {
            chainId = "Unknown-0-" + _chainId++;
        }
        var proxyChain = {
            getPlugin: function () {
                return plugin;
            },
            getNext: function () {
                return nextProxy;
            },
            processTelemetry: _processTelemetry,
            unload: _unloadPlugin,
            update: _updatePlugin,
            _id: chainId,
            _setNext: function (nextPlugin) {
                nextProxy = nextPlugin;
            }
        };
        function _getTelCtx() {
            var itemCtx;
            if (plugin && isFunction(plugin[strGetTelCtx])) {
                itemCtx = plugin[strGetTelCtx]();
            }
            if (!itemCtx) {
                itemCtx = createProcessTelemetryContext(proxyChain, config, core);
            }
            return itemCtx;
        }
        function _processChain(itemCtx, processPluginFn, name, details, isAsync) {
            var hasRun = false;
            var identifier = plugin ? plugin[_DYN_IDENTIFIER ] : strTelemetryPluginChain;
            var hasRunContext = itemCtx[strHasRunFlags];
            if (!hasRunContext) {
                hasRunContext = itemCtx[strHasRunFlags] = {};
            }
            itemCtx.setNext(nextProxy);
            if (plugin) {
                doPerf(itemCtx[STR_CORE ](), function () { return identifier + ":" + name; }, function () {
                    hasRunContext[chainId] = true;
                    try {
                        var nextId = nextProxy ? nextProxy._id : STR_EMPTY$1;
                        if (nextId) {
                            hasRunContext[nextId] = false;
                        }
                        hasRun = processPluginFn(itemCtx);
                    }
                    catch (error) {
                        var hasNextRun = nextProxy ? hasRunContext[nextProxy._id] : true;
                        if (hasNextRun) {
                            hasRun = true;
                        }
                        if (!nextProxy || !hasNextRun) {
                            _throwInternal(itemCtx[_DYN_DIAG_LOG$1 ](), 1 , 73 , "Plugin [" + identifier + "] failed during " + name + " - " + dumpObj(error) + ", run flags: " + dumpObj(hasRunContext));
                        }
                    }
                }, details, isAsync);
            }
            return hasRun;
        }
        function _processTelemetry(env, itemCtx) {
            itemCtx = itemCtx || _getTelCtx();
            function _callProcessTelemetry(itemCtx) {
                if (!plugin || !hasProcessTelemetry) {
                    return false;
                }
                var pluginState = _getPluginState(plugin);
                if (pluginState[_DYN_TEARDOWN ] || pluginState[STR_DISABLED]) {
                    return false;
                }
                if (hasSetNext) {
                    plugin[_DYN_SET_NEXT_PLUGIN ](nextProxy);
                }
                plugin[STR_PROCESS_TELEMETRY ](env, itemCtx);
                return true;
            }
            if (!_processChain(itemCtx, _callProcessTelemetry, "processTelemetry", function () { return ({ item: env }); }, !(env.sync))) {
                itemCtx[_DYN_PROCESS_NEXT ](env);
            }
        }
        function _unloadPlugin(unloadCtx, unloadState) {
            function _callTeardown() {
                var hasRun = false;
                if (plugin) {
                    var pluginState = _getPluginState(plugin);
                    var pluginCore = plugin[STR_CORE] || pluginState[STR_CORE ];
                    if (plugin && (!pluginCore || pluginCore === unloadCtx.core()) && !pluginState[_DYN_TEARDOWN ]) {
                        pluginState[STR_CORE ] = null;
                        pluginState[_DYN_TEARDOWN ] = true;
                        pluginState[_DYN_IS_INITIALIZED ] = false;
                        if (plugin[_DYN_TEARDOWN ] && plugin[_DYN_TEARDOWN ](unloadCtx, unloadState) === true) {
                            hasRun = true;
                        }
                    }
                }
                return hasRun;
            }
            if (!_processChain(unloadCtx, _callTeardown, "unload", function () { }, unloadState[_DYN_IS_ASYNC ])) {
                unloadCtx[_DYN_PROCESS_NEXT ](unloadState);
            }
        }
        function _updatePlugin(updateCtx, updateState) {
            function _callUpdate() {
                var hasRun = false;
                if (plugin) {
                    var pluginState = _getPluginState(plugin);
                    var pluginCore = plugin[STR_CORE] || pluginState[STR_CORE ];
                    if (plugin && (!pluginCore || pluginCore === updateCtx.core()) && !pluginState[_DYN_TEARDOWN ]) {
                        if (plugin[_DYN_UPDATE ] && plugin[_DYN_UPDATE ](updateCtx, updateState) === true) {
                            hasRun = true;
                        }
                    }
                }
                return hasRun;
            }
            if (!_processChain(updateCtx, _callUpdate, "update", function () { }, false)) {
                updateCtx[_DYN_PROCESS_NEXT ](updateState);
            }
        }
        return objFreeze(proxyChain);
    }

    var ChannelControllerPriority = 500;
    var ChannelValidationMessage = "Channel has invalid priority - ";
    function _addChannelQueue(channelQueue, queue, core) {
        if (queue && isArray(queue) && queue[_DYN_LENGTH$2 ] > 0) {
            queue = queue.sort(function (a, b) {
                return a[STR_PRIORITY ] - b[STR_PRIORITY ];
            });
            arrForEach(queue, function (queueItem) {
                if (queueItem[STR_PRIORITY ] < ChannelControllerPriority) {
                    throwError(ChannelValidationMessage + queueItem[_DYN_IDENTIFIER ]);
                }
            });
            channelQueue[_DYN_PUSH ]({
                queue: objFreeze(queue),
                chain: createTelemetryProxyChain(queue, core[_DYN_CONFIG ], core)
            });
        }
    }
    function createChannelControllerPlugin(channelQueue, core) {
        function _getTelCtx() {
            return createProcessTelemetryContext(null, core[_DYN_CONFIG ], core, null);
        }
        function _processChannelQueue(theChannels, itemCtx, processFn, onComplete) {
            var waiting = theChannels ? (theChannels[_DYN_LENGTH$2 ] + 1) : 1;
            function _runChainOnComplete() {
                waiting--;
                if (waiting === 0) {
                    onComplete && onComplete();
                    onComplete = null;
                }
            }
            if (waiting > 0) {
                arrForEach(theChannels, function (channels) {
                    if (channels && channels.queue[_DYN_LENGTH$2 ] > 0) {
                        var channelChain = channels.chain;
                        var chainCtx = itemCtx[_DYN_CREATE_NEW ](channelChain);
                        chainCtx[_DYN_ON_COMPLETE ](_runChainOnComplete);
                        processFn(chainCtx);
                    }
                    else {
                        waiting--;
                    }
                });
            }
            _runChainOnComplete();
        }
        function _doUpdate(updateCtx, updateState) {
            var theUpdateState = updateState || {
                reason: 0
            };
            _processChannelQueue(channelQueue, updateCtx, function (chainCtx) {
                chainCtx[_DYN_PROCESS_NEXT ](theUpdateState);
            }, function () {
                updateCtx[_DYN_PROCESS_NEXT ](theUpdateState);
            });
            return true;
        }
        function _doTeardown(unloadCtx, unloadState) {
            var theUnloadState = unloadState || {
                reason: 0 ,
                isAsync: false
            };
            _processChannelQueue(channelQueue, unloadCtx, function (chainCtx) {
                chainCtx[_DYN_PROCESS_NEXT ](theUnloadState);
            }, function () {
                unloadCtx[_DYN_PROCESS_NEXT ](theUnloadState);
                isInitialized = false;
            });
            return true;
        }
        function _getChannel(pluginIdentifier) {
            var thePlugin = null;
            if (channelQueue && channelQueue[_DYN_LENGTH$2 ] > 0) {
                arrForEach(channelQueue, function (channels) {
                    if (channels && channels.queue[_DYN_LENGTH$2 ] > 0) {
                        arrForEach(channels.queue, function (ext) {
                            if (ext[_DYN_IDENTIFIER ] === pluginIdentifier) {
                                thePlugin = ext;
                                return -1;
                            }
                        });
                        if (thePlugin) {
                            return -1;
                        }
                    }
                });
            }
            return thePlugin;
        }
        var isInitialized = false;
        var channelController = {
            identifier: "ChannelControllerPlugin",
            priority: ChannelControllerPriority,
            initialize: function (config, core, extensions, pluginChain) {
                isInitialized = true;
                arrForEach(channelQueue, function (channels) {
                    if (channels && channels.queue[_DYN_LENGTH$2 ] > 0) {
                        initializePlugins(createProcessTelemetryContext(channels.chain, config, core), extensions);
                    }
                });
            },
            isInitialized: function () {
                return isInitialized;
            },
            processTelemetry: function (item, itemCtx) {
                _processChannelQueue(channelQueue, itemCtx || _getTelCtx(), function (chainCtx) {
                    chainCtx[_DYN_PROCESS_NEXT ](item);
                }, function () {
                    itemCtx[_DYN_PROCESS_NEXT ](item);
                });
            },
            update: _doUpdate,
            pause: function () {
                _processChannelQueue(channelQueue, _getTelCtx(), function (chainCtx) {
                    chainCtx.iterate(function (plugin) {
                        plugin.pause && plugin.pause();
                    });
                }, null);
            },
            resume: function () {
                _processChannelQueue(channelQueue, _getTelCtx(), function (chainCtx) {
                    chainCtx.iterate(function (plugin) {
                        plugin.resume && plugin.resume();
                    });
                }, null);
            },
            teardown: _doTeardown,
            getChannel: _getChannel,
            flush: function (isAsync, callBack, sendReason, cbTimeout) {
                var waiting = 1;
                var doneIterating = false;
                var cbTimer = null;
                cbTimeout = cbTimeout || 5000;
                function doCallback() {
                    waiting--;
                    if (doneIterating && waiting === 0) {
                        if (cbTimer) {
                            clearTimeout(cbTimer);
                            cbTimer = null;
                        }
                        callBack && callBack(doneIterating);
                        callBack = null;
                    }
                }
                _processChannelQueue(channelQueue, _getTelCtx(), function (chainCtx) {
                    chainCtx.iterate(function (plugin) {
                        if (plugin[_DYN_FLUSH ]) {
                            waiting++;
                            var handled_1 = false;
                            if (!plugin[_DYN_FLUSH ](isAsync, function () {
                                handled_1 = true;
                                doCallback();
                            }, sendReason)) {
                                if (!handled_1) {
                                    if (isAsync && cbTimer == null) {
                                        cbTimer = setTimeout(function () {
                                            cbTimer = null;
                                            doCallback();
                                        }, cbTimeout);
                                    }
                                    else {
                                        doCallback();
                                    }
                                }
                            }
                        }
                    });
                }, function () {
                    doneIterating = true;
                    doCallback();
                });
                return true;
            },
            _setQueue: function (queue) {
                channelQueue = queue;
            }
        };
        return channelController;
    }
    function createChannelQueues(channels, extensions, core) {
        var channelQueue = [];
        if (channels) {
            arrForEach(channels, function (queue) { return _addChannelQueue(channelQueue, queue, core); });
        }
        if (extensions) {
            var extensionQueue_1 = [];
            arrForEach(extensions, function (plugin) {
                if (plugin[STR_PRIORITY ] > ChannelControllerPriority) {
                    extensionQueue_1[_DYN_PUSH ](plugin);
                }
            });
            _addChannelQueue(channelQueue, extensionQueue_1, core);
        }
        return channelQueue;
    }

    function createUnloadHandlerContainer() {
        var handlers = [];
        function _addHandler(handler) {
            if (handler) {
                handlers[_DYN_PUSH ](handler);
            }
        }
        function _runHandlers(unloadCtx, unloadState) {
            arrForEach(handlers, function (handler) {
                try {
                    handler(unloadCtx, unloadState);
                }
                catch (e) {
                    _throwInternal(unloadCtx[_DYN_DIAG_LOG$1 ](), 2 , 73 , "Unexpected error calling unload handler - " + dumpObj(e));
                }
            });
            handlers = [];
        }
        return {
            add: _addHandler,
            run: _runHandlers
        };
    }

    var strGetPlugin = "getPlugin";
    var BaseTelemetryPlugin = /** @class */ (function () {
        function BaseTelemetryPlugin() {
            var _self = this;
            var _isinitialized;
            var _rootCtx;
            var _nextPlugin;
            var _unloadHandlerContainer;
            var _hooks;
            _initDefaults();
            dynamicProto(BaseTelemetryPlugin, _self, function (_self) {
                _self[_DYN_INITIALIZE ] = function (config, core, extensions, pluginChain) {
                    _setDefaults(config, core, pluginChain);
                    _isinitialized = true;
                };
                _self[_DYN_TEARDOWN ] = function (unloadCtx, unloadState) {
                    var _a;
                    var core = _self[STR_CORE ];
                    if (!core || (unloadCtx && core !== unloadCtx[STR_CORE ]())) {
                        return;
                    }
                    var result;
                    var unloadDone = false;
                    var theUnloadCtx = unloadCtx || createProcessTelemetryUnloadContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
                    var theUnloadState = unloadState || (_a = {
                            reason: 0
                        },
                        _a[_DYN_IS_ASYNC ] = false,
                        _a);
                    function _unloadCallback() {
                        if (!unloadDone) {
                            unloadDone = true;
                            _unloadHandlerContainer.run(theUnloadCtx, unloadState);
                            var oldHooks = _hooks;
                            _hooks = [];
                            arrForEach(oldHooks, function (fn) {
                                fn.rm();
                            });
                            if (result === true) {
                                theUnloadCtx[_DYN_PROCESS_NEXT ](theUnloadState);
                            }
                            _initDefaults();
                        }
                    }
                    if (!_self[_DYN__DO_TEARDOWN ] || _self[_DYN__DO_TEARDOWN ](theUnloadCtx, theUnloadState, _unloadCallback) !== true) {
                        _unloadCallback();
                    }
                    else {
                        result = true;
                    }
                    return result;
                };
                _self[_DYN_UPDATE ] = function (updateCtx, updateState) {
                    var core = _self[STR_CORE ];
                    if (!core || (updateCtx && core !== updateCtx[STR_CORE ]())) {
                        return;
                    }
                    var result;
                    var updateDone = false;
                    var theUpdateCtx = updateCtx || createProcessTelemetryUpdateContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
                    var theUpdateState = updateState || {
                        reason: 0
                    };
                    function _updateCallback() {
                        if (!updateDone) {
                            updateDone = true;
                            _setDefaults(theUpdateCtx.getCfg(), theUpdateCtx.core(), theUpdateCtx[_DYN_GET_NEXT ]());
                        }
                    }
                    if (!_self._doUpdate || _self._doUpdate(theUpdateCtx, theUpdateState, _updateCallback) !== true) {
                        _updateCallback();
                    }
                    else {
                        result = true;
                    }
                    return result;
                };
                _self._addHook = function (hooks) {
                    if (hooks) {
                        if (isArray(hooks)) {
                            _hooks = _hooks.concat(hooks);
                        }
                        else {
                            _hooks[_DYN_PUSH ](hooks);
                        }
                    }
                };
                proxyFunctionAs(_self, "_addUnloadCb", function () { return _unloadHandlerContainer; }, "add");
            });
            _self[_DYN_DIAG_LOG$1 ] = function (itemCtx) {
                return _getTelCtx(itemCtx)[_DYN_DIAG_LOG$1 ]();
            };
            _self[_DYN_IS_INITIALIZED ] = function () {
                return _isinitialized;
            };
            _self.setInitialized = function (isInitialized) {
                _isinitialized = isInitialized;
            };
            _self[_DYN_SET_NEXT_PLUGIN ] = function (next) {
                _nextPlugin = next;
            };
            _self[_DYN_PROCESS_NEXT ] = function (env, itemCtx) {
                if (itemCtx) {
                    itemCtx[_DYN_PROCESS_NEXT ](env);
                }
                else if (_nextPlugin && isFunction(_nextPlugin[STR_PROCESS_TELEMETRY ])) {
                    _nextPlugin[STR_PROCESS_TELEMETRY ](env, null);
                }
            };
            _self._getTelCtx = _getTelCtx;
            function _getTelCtx(currentCtx) {
                if (currentCtx === void 0) { currentCtx = null; }
                var itemCtx = currentCtx;
                if (!itemCtx) {
                    var rootCtx = _rootCtx || createProcessTelemetryContext(null, {}, _self[STR_CORE ]);
                    if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                        itemCtx = rootCtx[_DYN_CREATE_NEW ](null, _nextPlugin[strGetPlugin]);
                    }
                    else {
                        itemCtx = rootCtx[_DYN_CREATE_NEW ](null, _nextPlugin);
                    }
                }
                return itemCtx;
            }
            function _setDefaults(config, core, pluginChain) {
                if (config) {
                    setValue(config, STR_EXTENSION_CONFIG, [], null, isNullOrUndefined);
                }
                if (!pluginChain && core) {
                    pluginChain = core[_DYN_GET_PROCESS_TEL_CONT0 ]()[_DYN_GET_NEXT ]();
                }
                var nextPlugin = _nextPlugin;
                if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                    nextPlugin = _nextPlugin[strGetPlugin]();
                }
                _self[STR_CORE ] = core;
                _rootCtx = createProcessTelemetryContext(pluginChain, config, core, nextPlugin);
            }
            function _initDefaults() {
                _isinitialized = false;
                _self[STR_CORE ] = null;
                _rootCtx = null;
                _nextPlugin = null;
                _hooks = [];
                _unloadHandlerContainer = createUnloadHandlerContainer();
            }
        }
        BaseTelemetryPlugin.__ieDyn=1;
        return BaseTelemetryPlugin;
    }());

    var TelemetryInitializerPlugin = /** @class */ (function (_super) {
        __extendsFn(TelemetryInitializerPlugin, _super);
        function TelemetryInitializerPlugin() {
            var _this = _super.call(this) || this;
            _this.identifier = "TelemetryInitializerPlugin";
            _this.priority = 199;
            var _id;
            var _initializers;
            _initDefaults();
            dynamicProto(TelemetryInitializerPlugin, _this, function (_self, _base) {
                _self.addTelemetryInitializer = function (telemetryInitializer) {
                    var theInitializer = {
                        id: _id++,
                        fn: telemetryInitializer
                    };
                    _initializers[_DYN_PUSH ](theInitializer);
                    var handler = {
                        remove: function () {
                            arrForEach(_initializers, function (initializer, idx) {
                                if (initializer.id === theInitializer.id) {
                                    _initializers[_DYN_SPLICE ](idx, 1);
                                    return -1;
                                }
                            });
                        }
                    };
                    return handler;
                };
                _self[STR_PROCESS_TELEMETRY ] = function (item, itemCtx) {
                    var doNotSendItem = false;
                    var telemetryInitializersCount = _initializers[_DYN_LENGTH$2 ];
                    for (var i = 0; i < telemetryInitializersCount; ++i) {
                        var telemetryInitializer = _initializers[i];
                        if (telemetryInitializer) {
                            try {
                                if (telemetryInitializer.fn[_DYN_APPLY ](null, [item]) === false) {
                                    doNotSendItem = true;
                                    break;
                                }
                            }
                            catch (e) {
                                _throwInternal(itemCtx[_DYN_DIAG_LOG$1 ](), 1 , 64 , "One of telemetry initializers failed, telemetry item will not be sent: " + getExceptionName(e), { exception: dumpObj(e) }, true);
                            }
                        }
                    }
                    if (!doNotSendItem) {
                        _self[_DYN_PROCESS_NEXT ](item, itemCtx);
                    }
                };
                _self[_DYN__DO_TEARDOWN ] = function () {
                    _initDefaults();
                };
            });
            function _initDefaults() {
                _id = 0;
                _initializers = [];
            }
            return _this;
        }
        TelemetryInitializerPlugin.__ieDyn=1;
        return TelemetryInitializerPlugin;
    }(BaseTelemetryPlugin));

    var strValidationError = "Plugins must provide initialize method";
    var strNotificationManager = "_notificationManager";
    var strSdkUnloadingError = "SDK is still unloading...";
    var strSdkNotInitialized = "SDK is not initialized";
    var defaultInitConfig = {
        loggingLevelConsole: 1
    };
    function _createPerfManager(core, notificationMgr) {
        return new PerfManager(notificationMgr);
    }
    function _validateExtensions(logger, channelPriority, allExtensions) {
        var _a;
        var coreExtensions = [];
        var extPriorities = {};
        arrForEach(allExtensions, function (ext) {
            if (isNullOrUndefined(ext) || isNullOrUndefined(ext[_DYN_INITIALIZE ])) {
                throwError(strValidationError);
            }
            var extPriority = ext[STR_PRIORITY ];
            var identifier = ext[_DYN_IDENTIFIER ];
            if (ext && extPriority) {
                if (!isNullOrUndefined(extPriorities[extPriority])) {
                    _warnToConsole(logger, "Two extensions have same priority #" + extPriority + " - " + extPriorities[extPriority] + ", " + identifier);
                }
                else {
                    extPriorities[extPriority] = identifier;
                }
            }
            if (!extPriority || extPriority < channelPriority) {
                coreExtensions[_DYN_PUSH ](ext);
            }
        });
        return _a = {
                all: allExtensions
            },
            _a[STR_CORE ] = coreExtensions,
            _a;
    }
    function _isPluginPresent(thePlugin, plugins) {
        var exists = false;
        arrForEach(plugins, function (plugin) {
            if (plugin === thePlugin) {
                exists = true;
                return -1;
            }
        });
        return exists;
    }
    function _createDummyNotificationManager() {
        var _a;
        return objCreateFn((_a = {},
            _a[_DYN_ADD_NOTIFICATION_LIS1 ] = function (listener) { },
            _a[_DYN_REMOVE_NOTIFICATION_2 ] = function (listener) { },
            _a[STR_EVENTS_SENT ] = function (events) { },
            _a[STR_EVENTS_DISCARDED ] = function (events, reason) { },
            _a[STR_EVENTS_SEND_REQUEST ] = function (sendReason, isAsync) { },
            _a));
    }
    var BaseCore = /** @class */ (function () {
        function BaseCore() {
            var _config;
            var _isInitialized;
            var _eventQueue;
            var _notificationManager;
            var _perfManager;
            var _cfgPerfManager;
            var _cookieManager;
            var _pluginChain;
            var _configExtensions;
            var _coreExtensions;
            var _channelControl;
            var _channelConfig;
            var _channelQueue;
            var _isUnloading;
            var _telemetryInitializerPlugin;
            var _internalLogsEventName;
            var _evtNamespace;
            var _unloadHandlers;
            var _debugListener;
            var _traceCtx;
            var _internalLogPoller = 0;
            dynamicProto(BaseCore, this, function (_self) {
                _initDefaults();
                _self[_DYN_IS_INITIALIZED ] = function () { return _isInitialized; };
                _self[_DYN_INITIALIZE ] = function (config, extensions, logger, notificationManager) {
                    if (_isUnloading) {
                        throwError(strSdkUnloadingError);
                    }
                    if (_self[_DYN_IS_INITIALIZED ]()) {
                        throwError("Core should not be initialized more than once");
                    }
                    _config = config || {};
                    _self[_DYN_CONFIG ] = _config;
                    if (isNullOrUndefined(config[_DYN_INSTRUMENTATION_KEY ])) {
                        throwError("Please provide instrumentation key");
                    }
                    _notificationManager = notificationManager;
                    _self[strNotificationManager] = notificationManager;
                    _initDebugListener();
                    _initPerfManager();
                    _initExtConfig();
                    if (logger) {
                        _self[_DYN_LOGGER ] = logger;
                    }
                    var cfgExtensions = getSetValue(_config, STR_EXTENSIONS, []);
                    _configExtensions = [];
                    _configExtensions[_DYN_PUSH ].apply(_configExtensions, __spreadArrayFn(__spreadArrayFn([], extensions, false), cfgExtensions));
                    _channelConfig = getSetValue(_config, STR_CHANNELS, []);
                    _initPluginChain(null);
                    if (!_channelQueue || _channelQueue[_DYN_LENGTH$2 ] === 0) {
                        throwError("No " + STR_CHANNELS + " available");
                    }
                    _isInitialized = true;
                    _self.releaseQueue();
                };
                _self.getTransmissionControls = function () {
                    var controls = [];
                    if (_channelQueue) {
                        arrForEach(_channelQueue, function (channels) {
                            controls[_DYN_PUSH ](channels.queue);
                        });
                    }
                    return objFreeze(controls);
                };
                _self.track = function (telemetryItem) {
                    telemetryItem.iKey = telemetryItem.iKey || _config[_DYN_INSTRUMENTATION_KEY ];
                    telemetryItem[_DYN_TIME ] = telemetryItem[_DYN_TIME ] || toISOString(new Date());
                    telemetryItem.ver = telemetryItem.ver || "4.0";
                    if (!_isUnloading && _self[_DYN_IS_INITIALIZED ]()) {
                        _createTelCtx()[_DYN_PROCESS_NEXT ](telemetryItem);
                    }
                    else {
                        _eventQueue[_DYN_PUSH ](telemetryItem);
                    }
                };
                _self[_DYN_GET_PROCESS_TEL_CONT0 ] = _createTelCtx;
                _self[_DYN_GET_NOTIFY_MGR ] = function () {
                    if (!_notificationManager) {
                        _notificationManager = _createDummyNotificationManager();
                        _self[strNotificationManager] = _notificationManager;
                    }
                    return _notificationManager;
                };
                _self[_DYN_ADD_NOTIFICATION_LIS1 ] = function (listener) {
                    if (_notificationManager) {
                        _notificationManager[_DYN_ADD_NOTIFICATION_LIS1 ](listener);
                    }
                };
                _self[_DYN_REMOVE_NOTIFICATION_2 ] = function (listener) {
                    if (_notificationManager) {
                        _notificationManager[_DYN_REMOVE_NOTIFICATION_2 ](listener);
                    }
                };
                _self.getCookieMgr = function () {
                    if (!_cookieManager) {
                        _cookieManager = createCookieMgr(_config, _self[_DYN_LOGGER ]);
                    }
                    return _cookieManager;
                };
                _self.setCookieMgr = function (cookieMgr) {
                    _cookieManager = cookieMgr;
                };
                _self[STR_GET_PERF_MGR ] = function () {
                    if (!_perfManager && !_cfgPerfManager) {
                        if (getCfgValue(_config.enablePerfMgr)) {
                            var createPerfMgr = getCfgValue(_config[STR_CREATE_PERF_MGR ]);
                            if (isFunction(createPerfMgr)) {
                                _cfgPerfManager = createPerfMgr(_self, _self[_DYN_GET_NOTIFY_MGR ]());
                            }
                        }
                    }
                    return _perfManager || _cfgPerfManager || getGblPerfMgr();
                };
                _self.setPerfMgr = function (perfMgr) {
                    _perfManager = perfMgr;
                };
                _self.eventCnt = function () {
                    return _eventQueue[_DYN_LENGTH$2 ];
                };
                _self.releaseQueue = function () {
                    if (_isInitialized && _eventQueue[_DYN_LENGTH$2 ] > 0) {
                        var eventQueue = _eventQueue;
                        _eventQueue = [];
                        arrForEach(eventQueue, function (event) {
                            _createTelCtx()[_DYN_PROCESS_NEXT ](event);
                        });
                    }
                };
                _self.pollInternalLogs = function (eventName) {
                    _internalLogsEventName = eventName || null;
                    var interval = getCfgValue(_config.diagnosticLogInterval);
                    if (!interval || !(interval > 0)) {
                        interval = 10000;
                    }
                    if (_internalLogPoller) {
                        clearInterval(_internalLogPoller);
                    }
                    _internalLogPoller = setInterval(function () {
                        _flushInternalLogs();
                    }, interval);
                    return _internalLogPoller;
                };
                _self[_DYN_STOP_POLLING_INTERNA3 ] = function () {
                    if (_internalLogPoller) {
                        clearInterval(_internalLogPoller);
                        _internalLogPoller = 0;
                        _flushInternalLogs();
                    }
                };
                proxyFunctions(_self, function () { return _telemetryInitializerPlugin; }, ["addTelemetryInitializer"]);
                _self.unload = function (isAsync, unloadComplete, cbTimeout) {
                    var _a;
                    if (isAsync === void 0) { isAsync = true; }
                    if (!_isInitialized) {
                        throwError(strSdkNotInitialized);
                    }
                    if (_isUnloading) {
                        throwError(strSdkUnloadingError);
                    }
                    var unloadState = (_a = {
                            reason: 50
                        },
                        _a[_DYN_IS_ASYNC ] = isAsync,
                        _a.flushComplete = false,
                        _a);
                    var processUnloadCtx = createProcessTelemetryUnloadContext(_getPluginChain(), _self);
                    processUnloadCtx[_DYN_ON_COMPLETE ](function () {
                        _initDefaults();
                        unloadComplete && unloadComplete(unloadState);
                    }, _self);
                    function _doUnload(flushComplete) {
                        unloadState.flushComplete = flushComplete;
                        _isUnloading = true;
                        _unloadHandlers.run(processUnloadCtx, unloadState);
                        _self[_DYN_STOP_POLLING_INTERNA3 ]();
                        processUnloadCtx[_DYN_PROCESS_NEXT ](unloadState);
                    }
                    if (!_flushChannels(isAsync, _doUnload, 6 , cbTimeout)) {
                        _doUnload(false);
                    }
                };
                _self[_DYN_GET_PLUGIN ] = _getPlugin;
                _self.addPlugin = function (plugin, replaceExisting, isAsync, addCb) {
                    if (!plugin) {
                        addCb && addCb(false);
                        _logOrThrowError(strValidationError);
                        return;
                    }
                    var existingPlugin = _getPlugin(plugin[_DYN_IDENTIFIER ]);
                    if (existingPlugin && !replaceExisting) {
                        addCb && addCb(false);
                        _logOrThrowError("Plugin [" + plugin[_DYN_IDENTIFIER ] + "] is already loaded!");
                        return;
                    }
                    var updateState = {
                        reason: 16
                    };
                    function _addPlugin(removed) {
                        _configExtensions[_DYN_PUSH ](plugin);
                        updateState.added = [plugin];
                        _initPluginChain(updateState);
                        addCb && addCb(true);
                    }
                    if (existingPlugin) {
                        var removedPlugins_1 = [existingPlugin.plugin];
                        var unloadState = {
                            reason: 2 ,
                            isAsync: !!isAsync
                        };
                        _removePlugins(removedPlugins_1, unloadState, function (removed) {
                            if (!removed) {
                                addCb && addCb(false);
                            }
                            else {
                                updateState.removed = removedPlugins_1;
                                updateState.reason |= 32 ;
                                _addPlugin();
                            }
                        });
                    }
                    else {
                        _addPlugin();
                    }
                };
                _self.evtNamespace = function () {
                    return _evtNamespace;
                };
                _self[_DYN_FLUSH ] = _flushChannels;
                _self.getTraceCtx = function (createNew) {
                    if (!_traceCtx) {
                        _traceCtx = createDistributedTraceContext();
                    }
                    return _traceCtx;
                };
                _self.setTraceCtx = function (traceCtx) {
                    _traceCtx = traceCtx || null;
                };
                proxyFunctionAs(_self, "addUnloadCb", function () { return _unloadHandlers; }, "add");
                function _initDefaults() {
                    _isInitialized = false;
                    _config = objExtend(true, {}, defaultInitConfig);
                    _self[_DYN_CONFIG ] = _config;
                    _self[_DYN_LOGGER ] = new DiagnosticLogger(_config);
                    _self[_DYN__EXTENSIONS ] = [];
                    _telemetryInitializerPlugin = new TelemetryInitializerPlugin();
                    _eventQueue = [];
                    _notificationManager = null;
                    _perfManager = null;
                    _cfgPerfManager = null;
                    _cookieManager = null;
                    _pluginChain = null;
                    _coreExtensions = null;
                    _configExtensions = [];
                    _channelControl = null;
                    _channelConfig = null;
                    _channelQueue = null;
                    _isUnloading = false;
                    _internalLogsEventName = null;
                    _evtNamespace = createUniqueNamespace("AIBaseCore", true);
                    _unloadHandlers = createUnloadHandlerContainer();
                    _traceCtx = null;
                }
                function _createTelCtx() {
                    return createProcessTelemetryContext(_getPluginChain(), _config, _self);
                }
                function _initPluginChain(updateState) {
                    var theExtensions = _validateExtensions(_self[_DYN_LOGGER ], ChannelControllerPriority, _configExtensions);
                    _coreExtensions = theExtensions[STR_CORE ];
                    _pluginChain = null;
                    var allExtensions = theExtensions.all;
                    _channelQueue = objFreeze(createChannelQueues(_channelConfig, allExtensions, _self));
                    if (_channelControl) {
                        var idx = arrIndexOf(allExtensions, _channelControl);
                        if (idx !== -1) {
                            allExtensions[_DYN_SPLICE ](idx, 1);
                        }
                        idx = arrIndexOf(_coreExtensions, _channelControl);
                        if (idx !== -1) {
                            _coreExtensions[_DYN_SPLICE ](idx, 1);
                        }
                        _channelControl._setQueue(_channelQueue);
                    }
                    else {
                        _channelControl = createChannelControllerPlugin(_channelQueue, _self);
                    }
                    allExtensions[_DYN_PUSH ](_channelControl);
                    _coreExtensions[_DYN_PUSH ](_channelControl);
                    _self[_DYN__EXTENSIONS ] = sortPlugins(allExtensions);
                    _channelControl[_DYN_INITIALIZE ](_config, _self, allExtensions);
                    initializePlugins(_createTelCtx(), allExtensions);
                    _self[_DYN__EXTENSIONS ] = objFreeze(sortPlugins(_coreExtensions || [])).slice();
                    if (updateState) {
                        _doUpdate(updateState);
                    }
                }
                function _getPlugin(pluginIdentifier) {
                    var _a;
                    var theExt = null;
                    var thePlugin = null;
                    arrForEach(_self[_DYN__EXTENSIONS ], function (ext) {
                        if (ext[_DYN_IDENTIFIER ] === pluginIdentifier && ext !== _channelControl && ext !== _telemetryInitializerPlugin) {
                            thePlugin = ext;
                            return -1;
                        }
                    });
                    if (!thePlugin && _channelControl) {
                        thePlugin = _channelControl.getChannel(pluginIdentifier);
                    }
                    if (thePlugin) {
                        theExt = (_a = {
                                plugin: thePlugin
                            },
                            _a[_DYN_SET_ENABLED ] = function (enabled) {
                                _getPluginState(thePlugin)[STR_DISABLED] = !enabled;
                            },
                            _a.isEnabled = function () {
                                var pluginState = _getPluginState(thePlugin);
                                return !pluginState[_DYN_TEARDOWN ] && !pluginState[STR_DISABLED];
                            },
                            _a.remove = function (isAsync, removeCb) {
                                var _a;
                                if (isAsync === void 0) { isAsync = true; }
                                var pluginsToRemove = [thePlugin];
                                var unloadState = (_a = {
                                        reason: 1
                                    },
                                    _a[_DYN_IS_ASYNC ] = isAsync,
                                    _a);
                                _removePlugins(pluginsToRemove, unloadState, function (removed) {
                                    if (removed) {
                                        _initPluginChain({
                                            reason: 32 ,
                                            removed: pluginsToRemove
                                        });
                                    }
                                    removeCb && removeCb(removed);
                                });
                            },
                            _a);
                    }
                    return theExt;
                }
                function _getPluginChain() {
                    if (!_pluginChain) {
                        var extensions = (_coreExtensions || []).slice();
                        if (arrIndexOf(extensions, _telemetryInitializerPlugin) === -1) {
                            extensions[_DYN_PUSH ](_telemetryInitializerPlugin);
                        }
                        _pluginChain = createTelemetryProxyChain(sortPlugins(extensions), _config, _self);
                    }
                    return _pluginChain;
                }
                function _removePlugins(thePlugins, unloadState, removeComplete) {
                    if (thePlugins && thePlugins[_DYN_LENGTH$2 ] > 0) {
                        var unloadChain = createTelemetryProxyChain(thePlugins, _config, _self);
                        var unloadCtx = createProcessTelemetryUnloadContext(unloadChain, _self);
                        unloadCtx[_DYN_ON_COMPLETE ](function () {
                            var removed = false;
                            var newConfigExtensions = [];
                            arrForEach(_configExtensions, function (plugin, idx) {
                                if (!_isPluginPresent(plugin, thePlugins)) {
                                    newConfigExtensions[_DYN_PUSH ](plugin);
                                }
                                else {
                                    removed = true;
                                }
                            });
                            _configExtensions = newConfigExtensions;
                            var newChannelConfig = [];
                            if (_channelConfig) {
                                arrForEach(_channelConfig, function (queue, idx) {
                                    var newQueue = [];
                                    arrForEach(queue, function (channel) {
                                        if (!_isPluginPresent(channel, thePlugins)) {
                                            newQueue[_DYN_PUSH ](channel);
                                        }
                                        else {
                                            removed = true;
                                        }
                                    });
                                    newChannelConfig[_DYN_PUSH ](newQueue);
                                });
                                _channelConfig = newChannelConfig;
                            }
                            removeComplete && removeComplete(removed);
                        });
                        unloadCtx[_DYN_PROCESS_NEXT ](unloadState);
                    }
                    else {
                        removeComplete(false);
                    }
                }
                function _flushInternalLogs() {
                    var queue = _self[_DYN_LOGGER ] ? _self[_DYN_LOGGER ].queue : [];
                    if (queue) {
                        arrForEach(queue, function (logMessage) {
                            var _a;
                            var item = (_a = {},
                                _a[_DYN_NAME$1 ] = _internalLogsEventName ? _internalLogsEventName : "InternalMessageId: " + logMessage[_DYN_MESSAGE_ID ],
                                _a.iKey = getCfgValue(_config[_DYN_INSTRUMENTATION_KEY ]),
                                _a.time = toISOString(new Date()),
                                _a.baseType = _InternalLogMessage.dataType,
                                _a.baseData = { message: logMessage[_DYN_MESSAGE$2 ] },
                                _a);
                            _self.track(item);
                        });
                        queue[_DYN_LENGTH$2 ] = 0;
                    }
                }
                function _flushChannels(isAsync, callBack, sendReason, cbTimeout) {
                    if (_channelControl) {
                        return _channelControl[_DYN_FLUSH ](isAsync, callBack, sendReason || 6 , cbTimeout);
                    }
                    callBack && callBack(false);
                    return true;
                }
                function _initDebugListener() {
                    var disableDbgExt = getCfgValue(_config.disableDbgExt);
                    if (disableDbgExt === true && _debugListener) {
                        _notificationManager[_DYN_REMOVE_NOTIFICATION_2 ](_debugListener);
                        _debugListener = null;
                    }
                    if (_notificationManager && !_debugListener && disableDbgExt !== true) {
                        _debugListener = getDebugListener(_config);
                        _notificationManager[_DYN_ADD_NOTIFICATION_LIS1 ](_debugListener);
                    }
                }
                function _initPerfManager() {
                    var enablePerfMgr = getCfgValue(_config.enablePerfMgr);
                    if (!enablePerfMgr && _cfgPerfManager) {
                        _cfgPerfManager = null;
                    }
                    if (enablePerfMgr) {
                        getSetValue(_config, STR_CREATE_PERF_MGR, _createPerfManager);
                    }
                }
                function _initExtConfig() {
                    var extConfig = getSetValue(_config, STR_EXTENSION_CONFIG, {});
                    extConfig.NotificationManager = _notificationManager;
                }
                function _doUpdate(updateState) {
                    var updateCtx = createProcessTelemetryUpdateContext(_getPluginChain(), _self);
                    if (!_self._updateHook || _self._updateHook(updateCtx, updateState) !== true) {
                        updateCtx[_DYN_PROCESS_NEXT ](updateState);
                    }
                }
                function _logOrThrowError(message) {
                    var logger = _self[_DYN_LOGGER ];
                    if (logger) {
                        _throwInternal(logger, 2 , 73 , message);
                    }
                    else {
                        throwError(message);
                    }
                }
            });
        }
        BaseCore.__ieDyn=1;
        return BaseCore;
    }());

    function _runListeners(listeners, name, isAsync, callback) {
        arrForEach(listeners, function (listener) {
            if (listener && listener[name]) {
                if (isAsync) {
                    setTimeout(function () { return callback(listener); }, 0);
                }
                else {
                    try {
                        callback(listener);
                    }
                    catch (e) {
                    }
                }
            }
        });
    }
    var NotificationManager = /** @class */ (function () {
        function NotificationManager(config) {
            this.listeners = [];
            var perfEvtsSendAll = !!(config || {}).perfEvtsSendAll;
            dynamicProto(NotificationManager, this, function (_self) {
                _self[_DYN_ADD_NOTIFICATION_LIS1 ] = function (listener) {
                    _self.listeners[_DYN_PUSH ](listener);
                };
                _self[_DYN_REMOVE_NOTIFICATION_2 ] = function (listener) {
                    var index = arrIndexOf(_self[_DYN_LISTENERS ], listener);
                    while (index > -1) {
                        _self.listeners[_DYN_SPLICE ](index, 1);
                        index = arrIndexOf(_self[_DYN_LISTENERS ], listener);
                    }
                };
                _self[STR_EVENTS_SENT ] = function (events) {
                    _runListeners(_self[_DYN_LISTENERS ], STR_EVENTS_SENT, true, function (listener) {
                        listener[STR_EVENTS_SENT ](events);
                    });
                };
                _self[STR_EVENTS_DISCARDED ] = function (events, reason) {
                    _runListeners(_self[_DYN_LISTENERS ], STR_EVENTS_DISCARDED, true, function (listener) {
                        listener[STR_EVENTS_DISCARDED ](events, reason);
                    });
                };
                _self[STR_EVENTS_SEND_REQUEST ] = function (sendReason, isAsync) {
                    _runListeners(_self[_DYN_LISTENERS ], STR_EVENTS_SEND_REQUEST, isAsync, function (listener) {
                        listener[STR_EVENTS_SEND_REQUEST ](sendReason, isAsync);
                    });
                };
                _self[STR_PERF_EVENT ] = function (perfEvent) {
                    if (perfEvent) {
                        if (perfEvtsSendAll || !perfEvent[_DYN_IS_CHILD_EVT ]()) {
                            _runListeners(_self[_DYN_LISTENERS ], STR_PERF_EVENT, false, function (listener) {
                                if (perfEvent[_DYN_IS_ASYNC ]) {
                                    setTimeout(function () { return listener[STR_PERF_EVENT ](perfEvent); }, 0);
                                }
                                else {
                                    listener[STR_PERF_EVENT ](perfEvent);
                                }
                            });
                        }
                    }
                };
            });
        }
        NotificationManager.__ieDyn=1;
        return NotificationManager;
    }());

    var AppInsightsCore$2 = /** @class */ (function (_super) {
        __extendsFn(AppInsightsCore, _super);
        function AppInsightsCore() {
            var _this = _super.call(this) || this;
            dynamicProto(AppInsightsCore, _this, function (_self, _base) {
                _self[_DYN_INITIALIZE ] = function (config, extensions, logger, notificationManager) {
                    _base[_DYN_INITIALIZE ](config, extensions, logger || new DiagnosticLogger(config), notificationManager || new NotificationManager(config));
                };
                _self.track = function (telemetryItem) {
                    doPerf(_self[STR_GET_PERF_MGR ](), function () { return "AppInsightsCore:track"; }, function () {
                        if (telemetryItem === null) {
                            _notifyInvalidEvent(telemetryItem);
                            throwError("Invalid telemetry item");
                        }
                        _validateTelemetryItem(telemetryItem);
                        _base.track(telemetryItem);
                    }, function () { return ({ item: telemetryItem }); }, !(telemetryItem.sync));
                };
                function _validateTelemetryItem(telemetryItem) {
                    if (isNullOrUndefined(telemetryItem[_DYN_NAME$1 ])) {
                        _notifyInvalidEvent(telemetryItem);
                        throwError("telemetry name required");
                    }
                }
                function _notifyInvalidEvent(telemetryItem) {
                    var manager = _self[_DYN_GET_NOTIFY_MGR ]();
                    if (manager) {
                        manager[STR_EVENTS_DISCARDED ]([telemetryItem], 2 );
                    }
                }
            });
            return _this;
        }
        AppInsightsCore.__ieDyn=1;
        return AppInsightsCore;
    }(BaseCore));

    var _a$3;
    var FAILED = "Failed";
    var FAILED_MONITOR_AJAX = FAILED + "MonitorAjax";
    var TRACK = "Track";
    var START = "Start";
    var STOP = "Stop";
    var EVENT = "Event";
    var AUTH_CONTEXT = "AuthContext";
    var EXCEPTION = "Exception";
    var LOCAL = "Local";
    var SESSION = "Session";
    var STORAGE = "Storage";
    var BROWSER = "Browser";
    var CANNOT = "Cannot";
    var BUFFER = "Buffer";
    var INSTRUMENTATION_KEY = "InstrumentationKey";
    createEnumStyle({
        CRITICAL: 1 ,
        WARNING: 2
    });
    var _InternalMessageId = createEnumStyle((_a$3 = {},
        _a$3[BROWSER + "DoesNotSupport" + LOCAL + STORAGE] = 0 ,
        _a$3[BROWSER + CANNOT + "Read" + LOCAL + STORAGE] = 1 ,
        _a$3[BROWSER + CANNOT + "Read" + SESSION + STORAGE] = 2 ,
        _a$3[BROWSER + CANNOT + "Write" + LOCAL + STORAGE] = 3 ,
        _a$3[BROWSER + CANNOT + "Write" + SESSION + STORAGE] = 4 ,
        _a$3[BROWSER + FAILED + "RemovalFrom" + LOCAL + STORAGE] = 5 ,
        _a$3[BROWSER + FAILED + "RemovalFrom" + SESSION + STORAGE] = 6 ,
        _a$3[CANNOT + "SendEmptyTelemetry"] = 7 ,
        _a$3.ClientPerformanceMathError = 8 ,
        _a$3["ErrorParsingAI" + SESSION + "Cookie"] = 9 ,
        _a$3.ErrorPVCalc = 10 ,
        _a$3[EXCEPTION + "WhileLoggingError"] = 11 ,
        _a$3[FAILED + "AddingTelemetryTo" + BUFFER] = 12 ,
        _a$3[FAILED_MONITOR_AJAX + "Abort"] = 13 ,
        _a$3[FAILED_MONITOR_AJAX + "Dur"] = 14 ,
        _a$3[FAILED_MONITOR_AJAX + "Open"] = 15 ,
        _a$3[FAILED_MONITOR_AJAX + "RSC"] = 16 ,
        _a$3[FAILED_MONITOR_AJAX + "Send"] = 17 ,
        _a$3[FAILED_MONITOR_AJAX + "GetCorrelationHeader"] = 18 ,
        _a$3[FAILED + "ToAddHandlerForOnBeforeUnload"] = 19 ,
        _a$3[FAILED + "ToSendQueuedTelemetry"] = 20 ,
        _a$3[FAILED + "ToReportDataLoss"] = 21 ,
        _a$3["Flush" + FAILED] = 22 ,
        _a$3.MessageLimitPerPVExceeded = 23 ,
        _a$3.MissingRequiredFieldSpecification = 24 ,
        _a$3.NavigationTimingNotSupported = 25 ,
        _a$3.OnError = 26 ,
        _a$3[SESSION + "RenewalDateIsZero"] = 27 ,
        _a$3.SenderNotInitialized = 28 ,
        _a$3[START + TRACK + EVENT + FAILED] = 29 ,
        _a$3[STOP + TRACK + EVENT + FAILED] = 30 ,
        _a$3[START + TRACK + FAILED] = 31 ,
        _a$3[STOP + TRACK + FAILED] = 32 ,
        _a$3.TelemetrySampledAndNotSent = 33 ,
        _a$3[TRACK + EVENT + FAILED] = 34 ,
        _a$3[TRACK + EXCEPTION + FAILED] = 35 ,
        _a$3[TRACK + "Metric" + FAILED] = 36 ,
        _a$3[TRACK + "PV" + FAILED] = 37 ,
        _a$3[TRACK + "PV" + FAILED + "Calc"] = 38 ,
        _a$3[TRACK + "Trace" + FAILED] = 39 ,
        _a$3["Transmission" + FAILED] = 40 ,
        _a$3[FAILED + "ToSet" + STORAGE + BUFFER] = 41 ,
        _a$3[FAILED + "ToRestore" + STORAGE + BUFFER] = 42 ,
        _a$3.InvalidBackendResponse = 43 ,
        _a$3[FAILED + "ToFixDepricatedValues"] = 44 ,
        _a$3.InvalidDurationValue = 45 ,
        _a$3.TelemetryEnvelopeInvalid = 46 ,
        _a$3.CreateEnvelopeError = 47 ,
        _a$3[CANNOT + "SerializeObject"] = 48 ,
        _a$3[CANNOT + "SerializeObjectNonSerializable"] = 49 ,
        _a$3.CircularReferenceDetected = 50 ,
        _a$3["Clear" + AUTH_CONTEXT + FAILED] = 51 ,
        _a$3[EXCEPTION + "Truncated"] = 52 ,
        _a$3.IllegalCharsInName = 53 ,
        _a$3.ItemNotInArray = 54 ,
        _a$3.MaxAjaxPerPVExceeded = 55 ,
        _a$3.MessageTruncated = 56 ,
        _a$3.NameTooLong = 57 ,
        _a$3.SampleRateOutOfRange = 58 ,
        _a$3["Set" + AUTH_CONTEXT + FAILED] = 59 ,
        _a$3["Set" + AUTH_CONTEXT + FAILED + "AccountName"] = 60 ,
        _a$3.StringValueTooLong = 61 ,
        _a$3.StartCalledMoreThanOnce = 62 ,
        _a$3.StopCalledWithoutStart = 63 ,
        _a$3["TelemetryInitializer" + FAILED] = 64 ,
        _a$3.TrackArgumentsNotSpecified = 65 ,
        _a$3.UrlTooLong = 66 ,
        _a$3[SESSION + STORAGE + BUFFER + "Full"] = 67 ,
        _a$3[CANNOT + "AccessCookie"] = 68 ,
        _a$3.IdTooLong = 69 ,
        _a$3.InvalidEvent = 70 ,
        _a$3[FAILED_MONITOR_AJAX + "SetRequestHeader"] = 71 ,
        _a$3["Send" + BROWSER + "InfoOnUserInit"] = 72 ,
        _a$3["Plugin" + EXCEPTION] = 73 ,
        _a$3["Notification" + EXCEPTION] = 74 ,
        _a$3.SnippetScriptLoadFailure = 99 ,
        _a$3["Invalid" + INSTRUMENTATION_KEY] = 100 ,
        _a$3[CANNOT + "ParseAiBlobValue"] = 101 ,
        _a$3.InvalidContentBlob = 102 ,
        _a$3[TRACK + "PageAction" + EVENT + FAILED] = 103 ,
        _a$3[FAILED + "AddingCustomDefinedRequestContext"] = 104 ,
        _a$3["InMemory" + STORAGE + BUFFER + "Full"] = 105 ,
        _a$3[INSTRUMENTATION_KEY + "Deprecation"] = 106 ,
        _a$3));

    var aiInstrumentHooks = "_aiHooks";
    var cbNames = [
        "req", "rsp", "hkErr", "fnErr"
    ];
    function _arrLoop(arr, fn) {
        if (arr) {
            for (var lp = 0; lp < arr[_DYN_LENGTH$2 ]; lp++) {
                if (fn(arr[lp], lp)) {
                    break;
                }
            }
        }
    }
    function _doCallbacks(hooks, callDetails, cbArgs, hookCtx, type) {
        if (type >= 0  && type <= 2 ) {
            _arrLoop(hooks, function (hook, idx) {
                var cbks = hook.cbks;
                var cb = cbks[cbNames[type]];
                if (cb) {
                    callDetails.ctx = function () {
                        var ctx = hookCtx[idx] = (hookCtx[idx] || {});
                        return ctx;
                    };
                    try {
                        cb[_DYN_APPLY ](callDetails.inst, cbArgs);
                    }
                    catch (err) {
                        var orgEx = callDetails.err;
                        try {
                            var hookErrorCb = cbks[cbNames[2 ]];
                            if (hookErrorCb) {
                                callDetails.err = err;
                                hookErrorCb[_DYN_APPLY ](callDetails.inst, cbArgs);
                            }
                        }
                        catch (e) {
                        }
                        finally {
                            callDetails.err = orgEx;
                        }
                    }
                }
            });
        }
    }
    function _createFunctionHook(aiHook) {
        return function () {
            var _a;
            var funcThis = this;
            var orgArgs = arguments;
            var hooks = aiHook.h;
            var funcArgs = (_a = {},
                _a[_DYN_NAME$1 ] = aiHook.n,
                _a.inst = funcThis,
                _a.ctx = null,
                _a.set = _replaceArg,
                _a);
            var hookCtx = [];
            var cbArgs = _createArgs([funcArgs], orgArgs);
            funcArgs.evt = getGlobalInst("event");
            function _createArgs(target, theArgs) {
                _arrLoop(theArgs, function (arg) {
                    target[_DYN_PUSH ](arg);
                });
                return target;
            }
            function _replaceArg(idx, value) {
                orgArgs = _createArgs([], orgArgs);
                orgArgs[idx] = value;
                cbArgs = _createArgs([funcArgs], orgArgs);
            }
            _doCallbacks(hooks, funcArgs, cbArgs, hookCtx, 0 );
            var theFunc = aiHook.f;
            if (theFunc) {
                try {
                    funcArgs.rslt = theFunc[_DYN_APPLY ](funcThis, orgArgs);
                }
                catch (err) {
                    funcArgs.err = err;
                    _doCallbacks(hooks, funcArgs, cbArgs, hookCtx, 3 );
                    throw err;
                }
            }
            _doCallbacks(hooks, funcArgs, cbArgs, hookCtx, 1 );
            return funcArgs.rslt;
        };
    }
    function _getOwner(target, name, checkPrototype) {
        var owner = null;
        if (target) {
            if (hasOwnProperty(target, name)) {
                owner = target;
            }
            else if (checkPrototype) {
                owner = _getOwner(_getObjProto$1(target), name, false);
            }
        }
        return owner;
    }
    function _createInstrumentHook(owner, funcName, fn, callbacks) {
        var aiHook = fn && fn[aiInstrumentHooks];
        if (!aiHook) {
            aiHook = {
                i: 0,
                n: funcName,
                f: fn,
                h: []
            };
            var newFunc = _createFunctionHook(aiHook);
            newFunc[aiInstrumentHooks] = aiHook;
            owner[funcName] = newFunc;
        }
        var theHook = {
            id: aiHook.i,
            cbks: callbacks,
            rm: function () {
                var id = this.id;
                _arrLoop(aiHook.h, function (hook, idx) {
                    if (hook.id === id) {
                        aiHook.h[_DYN_SPLICE ](idx, 1);
                        return 1;
                    }
                });
            }
        };
        aiHook.i++;
        aiHook.h[_DYN_PUSH ](theHook);
        return theHook;
    }
    function InstrumentEvent(target, evtName, callbacks, checkPrototype) {
        if (target && evtName && callbacks) {
            var owner = _getOwner(target, evtName, checkPrototype) || target;
            if (owner) {
                return _createInstrumentHook(owner, evtName, owner[evtName], callbacks);
            }
        }
        return null;
    }

    var ValueKind = createEnumStyle({
        NotSet: 0 ,
        Pii_DistinguishedName: 1 ,
        Pii_GenericData: 2 ,
        Pii_IPV4Address: 3 ,
        Pii_IPv6Address: 4 ,
        Pii_MailSubject: 5 ,
        Pii_PhoneNumber: 6 ,
        Pii_QueryString: 7 ,
        Pii_SipAddress: 8 ,
        Pii_SmtpAddress: 9 ,
        Pii_Identity: 10 ,
        Pii_Uri: 11 ,
        Pii_Fqdn: 12 ,
        Pii_IPV4AddressLegacy: 13 ,
        CustomerContent_GenericContent: 32
    });
    var EventLatency = createEnumStyle({
        Normal: 1 ,
        CostDeferred: 2 ,
        RealTime: 3 ,
        Immediate: 4
    });
    createEnumStyle({
        Unspecified: 0 ,
        String: 1 ,
        Int32: 2 ,
        UInt32: 3 ,
        Int64: 4 ,
        UInt64: 5 ,
        Double: 6 ,
        Bool: 7 ,
        Guid: 8 ,
        DateTime: 9
    });
    var EventPersistence = createEnumStyle({
        Normal: 1 ,
        Critical: 2
    });
    var TraceLevel = createEnumStyle({
        NONE: 0 ,
        ERROR: 1 ,
        WARNING: 2 ,
        INFORMATION: 3
    });
    objFreeze(__assignFn(__assignFn({}, _InternalMessageId), createEnumStyle({
        AuthHandShakeError: 501 ,
        AuthRedirectFail: 502 ,
        BrowserCannotReadLocalStorage: 503 ,
        BrowserCannotWriteLocalStorage: 504 ,
        BrowserDoesNotSupportLocalStorage: 505 ,
        CannotParseBiBlobValue: 506 ,
        CannotParseDataAttribute: 507 ,
        CVPluginNotAvailable: 508 ,
        DroppedEvent: 509 ,
        ErrorParsingAISessionCookie: 510 ,
        ErrorProvidedChannels: 511 ,
        FailedToGetCookies: 512 ,
        FailedToInitializeCorrelationVector: 513 ,
        FailedToInitializeSDK: 514 ,
        InvalidContentBlob: 515 ,
        InvalidCorrelationValue: 516 ,
        SessionRenewalDateIsZero: 517 ,
        SendPostOnCompleteFailure: 518 ,
        PostResponseHandler: 519 ,
        SDKNotInitialized: 520
    })));

    var STR_EMPTY = "";
    var STR_DEFAULT_ENDPOINT_URL = "https://browser.events.data.microsoft.com/OneCollector/1.0/";
    var STR_VERSION = "version";
    var STR_PROPERTIES = "properties";

    var _a$2;
    var Version = '3.2.6';
    var FullVersionString = "1DS-Web-JS-" + Version;
    var strDisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    var strWithCredentials = "withCredentials";
    var strTimeout = "timeout";
    var _fieldTypeEventPropMap = (_a$2 = {},
        _a$2[0 ] = 0 ,
        _a$2[2 ] = 6 ,
        _a$2[1 ] = 1 ,
        _a$2[3 ] = 7 ,
        _a$2[4096  | 2 ] = 6 ,
        _a$2[4096  | 1 ] = 1 ,
        _a$2[4096  | 3 ] = 7 ,
        _a$2);
    var uInt8ArraySupported = null;
    var isDocumentObjectAvailable = Boolean(getDocument());
    var isWindowObjectAvailable = Boolean(getWindow());
    function isValueAssigned(value) {
        return !(value === STR_EMPTY || isNullOrUndefined(value));
    }
    function getTenantId(apiKey) {
        if (apiKey) {
            var indexTenantId = apiKey.indexOf("-");
            if (indexTenantId > -1) {
                return apiKey.substring(0, indexTenantId);
            }
        }
        return STR_EMPTY;
    }
    function isUint8ArrayAvailable() {
        if (uInt8ArraySupported === null) {
            uInt8ArraySupported = !isUndefined(Uint8Array) && !isSafariOrFirefox() && !isReactNative();
        }
        return uInt8ArraySupported;
    }
    function isLatency(value) {
        if (value && isNumber(value) && value >= 1  && value <= 4 ) {
            return true;
        }
        return false;
    }
    function sanitizeProperty(name, property, stringifyObjects) {
        if ((!property && !isValueAssigned(property)) || typeof name !== "string") {
            return null;
        }
        var propType = typeof property;
        if (propType === "string" || propType === "number" || propType === "boolean" || isArray(property)) {
            property = { value: property };
        }
        else if (propType === "object" && !ObjHasOwnProperty.call(property, "value")) {
            property = { value: stringifyObjects ? JSON.stringify(property) : property };
        }
        else if (isNullOrUndefined(property.value)
            || property.value === STR_EMPTY || (!isString(property.value)
            && !isNumber(property.value) && !isBoolean(property.value)
            && !isArray(property.value))) {
            return null;
        }
        if (isArray(property.value) &&
            !isArrayValid(property.value)) {
            return null;
        }
        if (!isNullOrUndefined(property.kind)) {
            if (isArray(property.value) || !isValueKind(property.kind)) {
                return null;
            }
            property.value = property.value.toString();
        }
        return property;
    }
    function getCommonSchemaMetaData(value, kind, type) {
        var encodedTypeValue = -1;
        if (!isUndefined(value)) {
            if (kind > 0) {
                if (kind === 32) {
                    encodedTypeValue = (1 << 13);
                }
                else if (kind <= 13) {
                    encodedTypeValue = (kind << 5);
                }
            }
            if (isDataType(type)) {
                if (encodedTypeValue === -1) {
                    encodedTypeValue = 0;
                }
                encodedTypeValue |= type;
            }
            else {
                var propType = _fieldTypeEventPropMap[getFieldValueType(value)] || -1;
                if (encodedTypeValue !== -1 && propType !== -1) {
                    encodedTypeValue |= propType;
                }
                else if (propType === 6 ) {
                    encodedTypeValue = propType;
                }
            }
        }
        return encodedTypeValue;
    }
    function disableCookies() {
        safeGetCookieMgr(null).setEnabled(false);
    }
    function setCookie(name, value, days) {
        if (areCookiesSupported(null)) {
            safeGetCookieMgr(null).set(name, value, days * 86400, null, "/");
        }
    }
    function deleteCookie(name) {
        if (areCookiesSupported(null)) {
            safeGetCookieMgr(null).del(name);
        }
    }
    function getCookie(name) {
        if (areCookiesSupported(null)) {
            return getCookieValue(safeGetCookieMgr(null), name);
        }
        return STR_EMPTY;
    }
    function getCookieValue(cookieMgr, name, decode) {
        if (decode === void 0) { decode = true; }
        var cookieValue;
        if (cookieMgr) {
            cookieValue = cookieMgr.get(name);
            if (decode && cookieValue && decodeURIComponent) {
                cookieValue = decodeURIComponent(cookieValue);
            }
        }
        return cookieValue || STR_EMPTY;
    }
    function createGuid(style) {
        if (style === void 0) { style = "D" ; }
        var theGuid = newGuid();
        if (style === "B" ) {
            theGuid = "{" + theGuid + "}";
        }
        else if (style === "P" ) {
            theGuid = "(" + theGuid + ")";
        }
        else if (style === "N" ) {
            theGuid = theGuid.replace(/-/g, STR_EMPTY);
        }
        return theGuid;
    }
    function extend(obj, obj2, obj3, obj4, obj5) {
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;
        var objProto = Object[strShimPrototype];
        var theArgs = arguments;
        if (objProto.toString.call(theArgs[0]) === "[object Boolean]") {
            deep = theArgs[0];
            i++;
        }
        for (; i < length; i++) {
            var obj = theArgs[i];
            objForEachKey(obj, function (prop, value) {
                if (deep && value && isObject(value)) {
                    if (isArray(value)) {
                        extended[prop] = extended[prop] || [];
                        arrForEach(value, function (arrayValue, arrayIndex) {
                            if (arrayValue && isObject(arrayValue)) {
                                extended[prop][arrayIndex] = extend(true, extended[prop][arrayIndex], arrayValue);
                            }
                            else {
                                extended[prop][arrayIndex] = arrayValue;
                            }
                        });
                    }
                    else {
                        extended[prop] = extend(true, extended[prop], value);
                    }
                }
                else {
                    extended[prop] = value;
                }
            });
        }
        return extended;
    }
    var getTime = perfNow;
    function isValueKind(value) {
        if (value === 0  || ((value > 0  && value <= 13 ) || value === 32 )) {
            return true;
        }
        return false;
    }
    function isDataType(value) {
        if (value >= 0 && value <= 9) {
            return true;
        }
        return false;
    }
    function isSafariOrFirefox() {
        var nav = getNavigator();
        if (!isUndefined(nav) && nav.userAgent) {
            var ua = nav.userAgent.toLowerCase();
            if ((ua.indexOf("safari") >= 0 || ua.indexOf("firefox") >= 0) && ua.indexOf("chrome") < 0) {
                return true;
            }
        }
        return false;
    }
    function isArrayValid(value) {
        return value.length > 0;
    }
    function setProcessTelemetryTimings(event, identifier) {
        var evt = event;
        evt.timings = evt.timings || {};
        evt.timings.processTelemetryStart = evt.timings.processTelemetryStart || {};
        evt.timings.processTelemetryStart[identifier] = getTime();
    }
    function getFieldValueType(value) {
        var theType = 0 ;
        if (value !== null && value !== undefined) {
            var objType = typeof value;
            if (objType === "string") {
                theType = 1 ;
            }
            else if (objType === "number") {
                theType = 2 ;
            }
            else if (objType === "boolean") {
                theType = 3 ;
            }
            else if (objType === strShimObject) {
                theType = 4 ;
                if (isArray(value)) {
                    theType = 4096 ;
                    if (value.length > 0) {
                        theType |= getFieldValueType(value[0]);
                    }
                }
                else if (ObjHasOwnProperty.call(value, "value")) {
                    theType = 8192  | getFieldValueType(value.value);
                }
            }
        }
        return theType;
    }
    var Utils = {
        Version: Version,
        FullVersionString: FullVersionString,
        strUndefined: strShimUndefined,
        strObject: strShimObject,
        Undefined: strShimUndefined,
        arrForEach: arrForEach,
        arrIndexOf: arrIndexOf,
        arrMap: arrMap,
        arrReduce: arrReduce,
        objKeys: objKeys,
        toISOString: toISOString,
        isReactNative: isReactNative,
        isString: isString,
        isNumber: isNumber,
        isBoolean: isBoolean,
        isFunction: isFunction,
        isArray: isArray,
        isObject: isObject,
        strTrim: strTrim,
        isDocumentObjectAvailable: isDocumentObjectAvailable,
        isWindowObjectAvailable: isWindowObjectAvailable,
        isValueAssigned: isValueAssigned,
        getTenantId: getTenantId,
        isBeaconsSupported: isBeaconsSupported,
        isUint8ArrayAvailable: isUint8ArrayAvailable,
        isLatency: isLatency,
        sanitizeProperty: sanitizeProperty,
        getISOString: toISOString,
        useXDomainRequest: useXDomainRequest,
        getCommonSchemaMetaData: getCommonSchemaMetaData,
        cookieAvailable: areCookiesSupported,
        disallowsSameSiteNone: uaDisallowsSameSiteNone,
        setCookie: setCookie,
        deleteCookie: deleteCookie,
        getCookie: getCookie,
        createGuid: createGuid,
        extend: extend,
        getTime: getTime,
        isValueKind: isValueKind,
        isArrayValid: isArrayValid,
        objDefineAccessors: objDefineAccessors,
        addPageUnloadEventListener: addPageUnloadEventListener,
        setProcessTelemetryTimings: setProcessTelemetryTimings,
        addEventHandler: addEventHandler,
        getFieldValueType: getFieldValueType,
        strEndsWith: strEndsWith,
        objForEachKey: objForEachKey
    };
    var CoreUtils = {
        _canUseCookies: undefined,
        isTypeof: isTypeof,
        isUndefined: isUndefined,
        isNullOrUndefined: isNullOrUndefined,
        hasOwnProperty: hasOwnProperty,
        isFunction: isFunction,
        isObject: isObject,
        isDate: isDate,
        isArray: isArray,
        isError: isError,
        isString: isString,
        isNumber: isNumber,
        isBoolean: isBoolean,
        toISOString: toISOString,
        arrForEach: arrForEach,
        arrIndexOf: arrIndexOf,
        arrMap: arrMap,
        arrReduce: arrReduce,
        strTrim: strTrim,
        objCreate: objCreateFn,
        objKeys: objKeys,
        objDefineAccessors: objDefineAccessors,
        addEventHandler: addEventHandler,
        dateNow: dateNow,
        isIE: isIE,
        disableCookies: disableCookies,
        newGuid: newGuid,
        perfNow: perfNow,
        newId: newId,
        randomValue: randomValue,
        random32: random32,
        mwcRandomSeed: mwcRandomSeed,
        mwcRandom32: mwcRandom32,
        generateW3CId: generateW3CId
    };
    function isChromium() {
        return !!getGlobalInst("chrome");
    }
    function openXhr(method, urlString, withCredentials, disabled, isSync, timeout) {
        if (disabled === void 0) { disabled = false; }
        if (isSync === void 0) { isSync = false; }
        function _wrapSetXhrProp(xhr, prop, value) {
            try {
                xhr[prop] = value;
            }
            catch (e) {
            }
        }
        var xhr = new XMLHttpRequest();
        if (disabled) {
            _wrapSetXhrProp(xhr, strDisabledPropertyName, disabled);
        }
        if (withCredentials) {
            _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
        }
        xhr.open(method, urlString, !isSync);
        if (withCredentials) {
            _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
        }
        if (!isSync && timeout) {
            _wrapSetXhrProp(xhr, strTimeout, timeout);
        }
        return xhr;
    }

    var AppInsightsCore = /** @class */ (function (_super) {
        __extendsFn(AppInsightsCore, _super);
        function AppInsightsCore() {
            var _this = _super.call(this) || this;
            _this.pluginVersionStringArr = [];
            dynamicProto(AppInsightsCore, _this, function (_self, _base) {
                if (!_self.logger || !_self.logger.queue) {
                    _self.logger = new DiagnosticLogger({ loggingLevelConsole: 1  });
                }
                _self.initialize = function (config, extensions, logger, notificationManager) {
                    doPerf(_self, function () { return "AppInsightsCore.initialize"; }, function () {
                        var _pluginVersionStringArr = _self.pluginVersionStringArr;
                        if (config) {
                            if (!config.endpointUrl) {
                                config.endpointUrl = STR_DEFAULT_ENDPOINT_URL;
                            }
                            var propertyStorageOverride = config.propertyStorageOverride;
                            if (propertyStorageOverride && (!propertyStorageOverride.getProperty || !propertyStorageOverride.setProperty)) {
                                throwError("Invalid property storage override passed.");
                            }
                            if (config.channels) {
                                arrForEach(config.channels, function (channels) {
                                    if (channels) {
                                        arrForEach(channels, function (channel) {
                                            if (channel.identifier && channel.version) {
                                                var ver = channel.identifier + "=" + channel.version;
                                                _pluginVersionStringArr.push(ver);
                                            }
                                        });
                                    }
                                });
                            }
                        }
                        _self.getWParam = function () {
                            return (typeof document !== "undefined" || !!config.enableWParam) ? 0 : -1;
                        };
                        if (extensions) {
                            arrForEach(extensions, function (ext) {
                                if (ext && ext.identifier && ext.version) {
                                    var ver = ext.identifier + "=" + ext.version;
                                    _pluginVersionStringArr.push(ver);
                                }
                            });
                        }
                        _self.pluginVersionString = _pluginVersionStringArr.join(";");
                        _self.pluginVersionStringArr = _pluginVersionStringArr;
                        try {
                            _base.initialize(config, extensions, logger, notificationManager);
                            _self.pollInternalLogs("InternalLog");
                        }
                        catch (e) {
                            var logger_1 = _self.logger;
                            var message = dumpObj(e);
                            if (message.indexOf("channels") !== -1) {
                                message += "\n - Channels must be provided through config.channels only!";
                            }
                            _throwInternal(logger_1, 1 , 514 , "SDK Initialization Failed - no telemetry will be sent: " + message);
                        }
                    }, function () { return ({ config: config, extensions: extensions, logger: logger, notificationManager: notificationManager }); });
                };
                _self.track = function (item) {
                    doPerf(_self, function () { return "AppInsightsCore.track"; }, function () {
                        var telemetryItem = item;
                        if (telemetryItem) {
                            telemetryItem.timings = telemetryItem.timings || {};
                            telemetryItem.timings.trackStart = getTime();
                            if (!isLatency(telemetryItem.latency)) {
                                telemetryItem.latency = 1 ;
                            }
                            var itemExt = telemetryItem.ext = telemetryItem.ext || {};
                            itemExt.sdk = itemExt.sdk || {};
                            itemExt.sdk.ver = FullVersionString;
                            var baseData = telemetryItem.baseData = telemetryItem.baseData || {};
                            baseData[STR_PROPERTIES] = baseData[STR_PROPERTIES] || {};
                            var itemProperties = baseData[STR_PROPERTIES];
                            itemProperties[STR_VERSION] = itemProperties[STR_VERSION] || _self.pluginVersionString || STR_EMPTY;
                        }
                        _base.track(telemetryItem);
                    }, function () { return ({ item: item }); }, !(item.sync));
                };
            });
            return _this;
        }
        AppInsightsCore.__ieDyn=1;
        return AppInsightsCore;
    }(AppInsightsCore$2));
    var AppInsightsCore$1 = AppInsightsCore;

    var RT_PROFILE = "REAL_TIME";
    var NRT_PROFILE = "NEAR_REAL_TIME";
    var BE_PROFILE = "BEST_EFFORT";

    var STR_POST_METHOD = "POST";
    var STR_DISABLED_PROPERTY_NAME = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    var STR_DROPPED = "drop";
    var STR_SENDING = "send";
    var STR_REQUEUE = "requeue";
    var STR_RESPONSE_FAIL = "rspFail";
    var STR_OTHER = "oth";
    var DEFAULT_CACHE_CONTROL = "no-cache, no-store";
    var DEFAULT_CONTENT_TYPE = "application/x-json-stream";
    var STR_CACHE_CONTROL = "cache-control";
    var STR_CONTENT_TYPE_HEADER = "content-type";
    var STR_KILL_TOKENS_HEADER = "kill-tokens";
    var STR_KILL_DURATION_HEADER = "kill-duration";
    var STR_KILL_DURATION_SECONDS_HEADER = "kill-duration-seconds";
    var STR_TIME_DELTA_HEADER = "time-delta-millis";
    var STR_CLIENT_VERSION = "client-version";
    var STR_CLIENT_ID = "client-id";
    var STR_TIME_DELTA_TO_APPLY = "time-delta-to-apply-millis";
    var STR_UPLOAD_TIME = "upload-time";
    var STR_API_KEY = "apikey";
    var STR_MSA_DEVICE_TICKET = "AuthMsaDeviceTicket";
    var STR_AUTH_XTOKEN = "AuthXToken";
    var STR_NO_RESPONSE_BODY = "NoResponseBody";
    var STR_MSFPC = "msfpc";
    var STR_TRACE = "trace";
    var STR_USER = "user";

    function _getEventMsfpc(theEvent) {
        var intWeb = ((theEvent.ext || {})["intweb"]);
        if (intWeb && isValueAssigned(intWeb[STR_MSFPC])) {
            return intWeb[STR_MSFPC];
        }
        return null;
    }
    function _getMsfpc$1(theEvents) {
        var msfpc = null;
        for (var lp = 0; msfpc === null && lp < theEvents.length; lp++) {
            msfpc = _getEventMsfpc(theEvents[lp]);
        }
        return msfpc;
    }
    var EventBatch = /** @class */ (function () {
        function EventBatch(iKey, addEvents) {
            var events = addEvents ? [].concat(addEvents) : [];
            var _self = this;
            var _msfpc = _getMsfpc$1(events);
            _self.iKey = function () {
                return iKey;
            };
            _self.Msfpc = function () {
                return _msfpc || "";
            };
            _self.count = function () {
                return events.length;
            };
            _self.events = function () {
                return events;
            };
            _self.addEvent = function (theEvent) {
                if (theEvent) {
                    events.push(theEvent);
                    if (!_msfpc) {
                        _msfpc = _getEventMsfpc(theEvent);
                    }
                    return true;
                }
                return false;
            };
            _self.split = function (fromEvent, numEvents) {
                var theEvents;
                if (fromEvent < events.length) {
                    var cnt = events.length - fromEvent;
                    if (!isNullOrUndefined(numEvents)) {
                        cnt = numEvents < cnt ? numEvents : cnt;
                    }
                    theEvents = events.splice(fromEvent, cnt);
                    _msfpc = _getMsfpc$1(events);
                }
                return new EventBatch(iKey, theEvents);
            };
        }
        EventBatch.create = function (iKey, theEvents) {
            return new EventBatch(iKey, theEvents);
        };
        return EventBatch;
    }());

    var ClockSkewManager = /** @class */ (function () {
        function ClockSkewManager() {
            var _allowRequestSending = true;
            var _shouldAddClockSkewHeaders = true;
            var _isFirstRequest = true;
            var _clockSkewHeaderValue = "use-collector-delta";
            var _clockSkewSet = false;
            dynamicProto(ClockSkewManager, this, function (_self) {
                _self.allowRequestSending = function () {
                    return _allowRequestSending;
                };
                _self.firstRequestSent = function () {
                    if (_isFirstRequest) {
                        _isFirstRequest = false;
                        if (!_clockSkewSet) {
                            _allowRequestSending = false;
                        }
                    }
                };
                _self.shouldAddClockSkewHeaders = function () {
                    return _shouldAddClockSkewHeaders;
                };
                _self.getClockSkewHeaderValue = function () {
                    return _clockSkewHeaderValue;
                };
                _self.setClockSkew = function (timeDeltaInMillis) {
                    if (!_clockSkewSet) {
                        if (timeDeltaInMillis) {
                            _clockSkewHeaderValue = timeDeltaInMillis;
                            _shouldAddClockSkewHeaders = true;
                            _clockSkewSet = true;
                        }
                        else {
                            _shouldAddClockSkewHeaders = false;
                        }
                        _allowRequestSending = true;
                    }
                };
            });
        }
        ClockSkewManager.__ieDyn=1;
        return ClockSkewManager;
    }());
    var EVTClockSkewManager = ClockSkewManager;

    var SecToMsMultiplier = 1000;
    var KillSwitch = /** @class */ (function () {
        function KillSwitch() {
            var _killedTokenDictionary = {};
            function _normalizeTenants(values) {
                var result = [];
                if (values) {
                    arrForEach(values, function (value) {
                        result.push(strTrim(value));
                    });
                }
                return result;
            }
            dynamicProto(KillSwitch, this, function (_self) {
                _self.setKillSwitchTenants = function (killTokens, killDuration) {
                    if (killTokens && killDuration) {
                        try {
                            var killedTokens = _normalizeTenants(killTokens.split(","));
                            if (killDuration === "this-request-only") {
                                return killedTokens;
                            }
                            var durationMs = parseInt(killDuration, 10) * SecToMsMultiplier;
                            for (var i = 0; i < killedTokens.length; ++i) {
                                _killedTokenDictionary[killedTokens[i]] = dateNow() + durationMs;
                            }
                        }
                        catch (ex) {
                            return [];
                        }
                    }
                    return [];
                };
                _self.isTenantKilled = function (tenantToken) {
                    var killDictionary = _killedTokenDictionary;
                    var name = strTrim(tenantToken);
                    if (killDictionary[name] !== undefined && killDictionary[name] > dateNow()) {
                        return true;
                    }
                    delete killDictionary[name];
                    return false;
                };
            });
        }
        KillSwitch.__ieDyn=1;
        return KillSwitch;
    }());
    var EVTKillSwitch = KillSwitch;

    var RandomizationLowerThreshold = 0.8;
    var RandomizationUpperThreshold = 1.2;
    var BaseBackoff = 3000;
    var MaxBackoff = 600000;
    function retryPolicyShouldRetryForStatus(httpStatusCode) {
        return !((httpStatusCode >= 300 && httpStatusCode < 500 && httpStatusCode != 408 && httpStatusCode != 429)
            || (httpStatusCode == 501)
            || (httpStatusCode == 505));
    }
    function retryPolicyGetMillisToBackoffForRetry(retriesSoFar) {
        var waitDuration = 0;
        var minBackoff = BaseBackoff * RandomizationLowerThreshold;
        var maxBackoff = BaseBackoff * RandomizationUpperThreshold;
        var randomBackoff = Math.floor(Math.random() * (maxBackoff - minBackoff)) + minBackoff;
        waitDuration = Math.pow(2, retriesSoFar) * randomBackoff;
        return Math.min(waitDuration, MaxBackoff);
    }

    var _MAX_STRING_JOINS = 20;
    var RequestSizeLimitBytes = 3984588;
    var BeaconRequestSizeLimitBytes = 65000;
    var MaxRecordSize = 2000000;
    var MaxBeaconRecordSize = Math.min(MaxRecordSize, BeaconRequestSizeLimitBytes);
    var metadata = "metadata";
    var f = "f";
    var rCheckDot = /\./;
    var Serializer = /** @class */ (function () {
        function Serializer(perfManager, valueSanitizer, stringifyObjects, enableCompoundKey) {
            var strData = "data";
            var strBaseData = "baseData";
            var strExt = "ext";
            var _checkForCompoundkey = !!enableCompoundKey;
            var _processSubMetaData = true;
            var _theSanitizer = valueSanitizer;
            var _isReservedCache = {};
            dynamicProto(Serializer, this, function (_self) {
                _self.createPayload = function (retryCnt, isTeardown, isSync, useSendBeacon, sendReason, sendType) {
                    return {
                        apiKeys: [],
                        payloadBlob: "",
                        overflow: null,
                        sizeExceed: [],
                        failedEvts: [],
                        batches: [],
                        numEvents: 0,
                        retryCnt: retryCnt,
                        isTeardown: isTeardown,
                        isSync: isSync,
                        isBeacon: useSendBeacon,
                        sendType: sendType,
                        sendReason: sendReason
                    };
                };
                _self.appendPayload = function (payload, theBatch, maxEventsPerBatch) {
                    var canAddEvents = payload && theBatch && !payload.overflow;
                    if (canAddEvents) {
                        doPerf(perfManager, function () { return "Serializer:appendPayload"; }, function () {
                            var theEvents = theBatch.events();
                            var payloadBlob = payload.payloadBlob;
                            var payloadEvents = payload.numEvents;
                            var eventsAdded = false;
                            var sizeExceeded = [];
                            var failedEvts = [];
                            var isBeaconPayload = payload.isBeacon;
                            var requestMaxSize = isBeaconPayload ? BeaconRequestSizeLimitBytes : RequestSizeLimitBytes;
                            var recordMaxSize = isBeaconPayload ? MaxBeaconRecordSize : MaxRecordSize;
                            var lp = 0;
                            var joinCount = 0;
                            while (lp < theEvents.length) {
                                var theEvent = theEvents[lp];
                                if (theEvent) {
                                    if (payloadEvents >= maxEventsPerBatch) {
                                        payload.overflow = theBatch.split(lp);
                                        break;
                                    }
                                    var eventBlob = _self.getEventBlob(theEvent);
                                    if (eventBlob && eventBlob.length <= recordMaxSize) {
                                        var blobLength = eventBlob.length;
                                        var currentSize = payloadBlob.length;
                                        if (currentSize + blobLength > requestMaxSize) {
                                            payload.overflow = theBatch.split(lp);
                                            break;
                                        }
                                        if (payloadBlob) {
                                            payloadBlob += "\n";
                                        }
                                        payloadBlob += eventBlob;
                                        joinCount++;
                                        if (joinCount > _MAX_STRING_JOINS) {
                                            payloadBlob.substr(0, 1);
                                            joinCount = 0;
                                        }
                                        eventsAdded = true;
                                        payloadEvents++;
                                    }
                                    else {
                                        if (eventBlob) {
                                            sizeExceeded.push(theEvent);
                                        }
                                        else {
                                            failedEvts.push(theEvent);
                                        }
                                        theEvents.splice(lp, 1);
                                        lp--;
                                    }
                                }
                                lp++;
                            }
                            if (sizeExceeded && sizeExceeded.length > 0) {
                                payload.sizeExceed.push(EventBatch.create(theBatch.iKey(), sizeExceeded));
                            }
                            if (failedEvts && failedEvts.length > 0) {
                                payload.failedEvts.push(EventBatch.create(theBatch.iKey(), failedEvts));
                            }
                            if (eventsAdded) {
                                payload.batches.push(theBatch);
                                payload.payloadBlob = payloadBlob;
                                payload.numEvents = payloadEvents;
                                var apiKey = theBatch.iKey();
                                if (arrIndexOf(payload.apiKeys, apiKey) === -1) {
                                    payload.apiKeys.push(apiKey);
                                }
                            }
                        }, function () { return ({ payload: payload, theBatch: { iKey: theBatch.iKey(), evts: theBatch.events() }, max: maxEventsPerBatch }); });
                    }
                    return canAddEvents;
                };
                _self.getEventBlob = function (eventData) {
                    try {
                        return doPerf(perfManager, function () { return "Serializer.getEventBlob"; }, function () {
                            var serializedEvent = {};
                            serializedEvent.name = eventData.name;
                            serializedEvent.time = eventData.time;
                            serializedEvent.ver = eventData.ver;
                            serializedEvent.iKey = "o:" + getTenantId(eventData.iKey);
                            var serializedExt = {};
                            var eventExt = eventData[strExt];
                            if (eventExt) {
                                serializedEvent[strExt] = serializedExt;
                                objForEachKey(eventExt, function (key, value) {
                                    var data = serializedExt[key] = {};
                                    _processPathKeys(value, data, "ext." + key, true, null, null, true);
                                });
                            }
                            var serializedData = serializedEvent[strData] = {};
                            serializedData.baseType = eventData.baseType;
                            var serializedBaseData = serializedData[strBaseData] = {};
                            _processPathKeys(eventData.baseData, serializedBaseData, strBaseData, false, [strBaseData], function (pathKeys, name, value) {
                                _addJSONPropertyMetaData(serializedExt, pathKeys, name, value);
                            }, _processSubMetaData);
                            _processPathKeys(eventData.data, serializedData, strData, false, [], function (pathKeys, name, value) {
                                _addJSONPropertyMetaData(serializedExt, pathKeys, name, value);
                            }, _processSubMetaData);
                            return JSON.stringify(serializedEvent);
                        }, function () { return ({ item: eventData }); });
                    }
                    catch (e) {
                        return null;
                    }
                };
                function _isReservedField(path, name) {
                    var result = _isReservedCache[path];
                    if (result === undefined) {
                        if (path.length >= 7) {
                            result = strStartsWith(path, "ext.metadata") || strStartsWith(path, "ext.web");
                        }
                        _isReservedCache[path] = result;
                    }
                    return result;
                }
                function _processPathKeys(srcObj, target, thePath, checkReserved, metadataPathKeys, metadataCallback, processSubKeys) {
                    objForEachKey(srcObj, function (key, srcValue) {
                        var prop = null;
                        if (srcValue || isValueAssigned(srcValue)) {
                            var path = thePath;
                            var name_1 = key;
                            var theMetaPathKeys = metadataPathKeys;
                            var destObj = target;
                            if (_checkForCompoundkey && !checkReserved && rCheckDot.test(key)) {
                                var subKeys = key.split(".");
                                var keyLen = subKeys.length;
                                if (keyLen > 1) {
                                    if (theMetaPathKeys) {
                                        theMetaPathKeys = theMetaPathKeys.slice();
                                    }
                                    for (var lp = 0; lp < keyLen - 1; lp++) {
                                        var subKey = subKeys[lp];
                                        destObj = destObj[subKey] = destObj[subKey] || {};
                                        path += "." + subKey;
                                        if (theMetaPathKeys) {
                                            theMetaPathKeys.push(subKey);
                                        }
                                    }
                                    name_1 = subKeys[keyLen - 1];
                                }
                            }
                            var isReserved = checkReserved && _isReservedField(path);
                            if (!isReserved && _theSanitizer && _theSanitizer.handleField(path, name_1)) {
                                prop = _theSanitizer.value(path, name_1, srcValue, stringifyObjects);
                            }
                            else {
                                prop = sanitizeProperty(name_1, srcValue, stringifyObjects);
                            }
                            if (prop) {
                                var newValue = prop.value;
                                destObj[name_1] = newValue;
                                if (metadataCallback) {
                                    metadataCallback(theMetaPathKeys, name_1, prop);
                                }
                                if (processSubKeys && typeof newValue === "object" && !isArray(newValue)) {
                                    var newPath = theMetaPathKeys;
                                    if (newPath) {
                                        newPath = newPath.slice();
                                        newPath.push(name_1);
                                    }
                                    _processPathKeys(srcValue, newValue, path + "." + name_1, checkReserved, newPath, metadataCallback, processSubKeys);
                                }
                            }
                        }
                    });
                }
            });
        }
        Serializer.__ieDyn=1;
        return Serializer;
    }());
    function _addJSONPropertyMetaData(json, propKeys, name, propertyValue) {
        if (propertyValue && json) {
            var encodedTypeValue = getCommonSchemaMetaData(propertyValue.value, propertyValue.kind, propertyValue.propertyType);
            if (encodedTypeValue > -1) {
                var metaData = json[metadata];
                if (!metaData) {
                    metaData = json[metadata] = { f: {} };
                }
                var metaTarget = metaData[f];
                if (!metaTarget) {
                    metaTarget = metaData[f] = {};
                }
                if (propKeys) {
                    for (var lp = 0; lp < propKeys.length; lp++) {
                        var key = propKeys[lp];
                        if (!metaTarget[key]) {
                            metaTarget[key] = { f: {} };
                        }
                        var newTarget = metaTarget[key][f];
                        if (!newTarget) {
                            newTarget = metaTarget[key][f] = {};
                        }
                        metaTarget = newTarget;
                    }
                }
                metaTarget = metaTarget[name] = {};
                if (isArray(propertyValue.value)) {
                    metaTarget["a"] = {
                        t: encodedTypeValue
                    };
                }
                else {
                    metaTarget["t"] = encodedTypeValue;
                }
            }
        }
    }

    var _a$1;
    var strSendAttempt = "sendAttempt";
    var _noResponseQs = "&" + STR_NO_RESPONSE_BODY + "=true";
    var _eventActionMap = (_a$1 = {},
        _a$1[1 ] = STR_REQUEUE,
        _a$1[100 ] = STR_REQUEUE,
        _a$1[200 ] = "sent",
        _a$1[8004 ] = STR_DROPPED,
        _a$1[8003 ] = STR_DROPPED,
        _a$1);
    var _collectorQsHeaders = {};
    var _collectorHeaderToQs = {};
    function _addCollectorHeaderQsMapping(qsName, headerName, allowQs) {
        _collectorQsHeaders[qsName] = headerName;
        if (allowQs !== false) {
            _collectorHeaderToQs[headerName] = qsName;
        }
    }
    _addCollectorHeaderQsMapping(STR_MSA_DEVICE_TICKET, STR_MSA_DEVICE_TICKET, false);
    _addCollectorHeaderQsMapping(STR_CLIENT_VERSION, STR_CLIENT_VERSION);
    _addCollectorHeaderQsMapping(STR_CLIENT_ID, "Client-Id");
    _addCollectorHeaderQsMapping(STR_API_KEY, STR_API_KEY);
    _addCollectorHeaderQsMapping(STR_TIME_DELTA_TO_APPLY, STR_TIME_DELTA_TO_APPLY);
    _addCollectorHeaderQsMapping(STR_UPLOAD_TIME, STR_UPLOAD_TIME);
    _addCollectorHeaderQsMapping(STR_AUTH_XTOKEN, STR_AUTH_XTOKEN);
    function _getResponseText(xhr) {
        try {
            return xhr.responseText;
        }
        catch (e) {
        }
        return "";
    }
    function _hasHeader(headers, header) {
        var hasHeader = false;
        if (headers && header) {
            var keys = objKeys(headers);
            if (keys && keys.length > 0) {
                var lowerHeader = header.toLowerCase();
                for (var lp = 0; lp < keys.length; lp++) {
                    var value = keys[lp];
                    if (value && hasOwnProperty(header, value) &&
                        value.toLowerCase() === lowerHeader) {
                        hasHeader = true;
                        break;
                    }
                }
            }
        }
        return hasHeader;
    }
    function _addRequestDetails(details, name, value, useHeaders) {
        if (name && value && value.length > 0) {
            if (useHeaders && _collectorQsHeaders[name]) {
                details.hdrs[_collectorQsHeaders[name]] = value;
                details.useHdrs = true;
            }
            else {
                details.url += "&" + name + "=" + value;
            }
        }
    }
    var HttpManager = /** @class */ (function () {
        function HttpManager(maxEventsPerBatch, maxConnections, maxRequestRetriesBeforeBackoff, actions, timeoutOverride) {
            this._responseHandlers = [];
            var _urlString = "?cors=true&" + STR_CONTENT_TYPE_HEADER.toLowerCase() + "=" + DEFAULT_CONTENT_TYPE;
            var _killSwitch = new EVTKillSwitch();
            var _paused = false;
            var _clockSkewManager = new EVTClockSkewManager();
            var _useBeacons = false;
            var _outstandingRequests = 0;
            var _postManager;
            var _logger;
            var _sendInterfaces;
            var _core;
            var _customHttpInterface = true;
            var _queryStringParameters = [];
            var _headers = {};
            var _batchQueue = [];
            var _serializer = null;
            var _enableEventTimings = false;
            var _cookieMgr;
            var _isUnloading = false;
            var _useHeaders = false;
            var _xhrTimeout;
            var _disableXhrSync;
            dynamicProto(HttpManager, this, function (_self) {
                var _sendCredentials = true;
                _self.initialize = function (endpointUrl, core, postChannel, httpInterface, channelConfig) {
                    var _a;
                    if (!channelConfig) {
                        channelConfig = {};
                    }
                    _urlString = endpointUrl + _urlString;
                    _useHeaders = !isUndefined(channelConfig.avoidOptions) ? !channelConfig.avoidOptions : true;
                    _core = core;
                    _cookieMgr = core.getCookieMgr();
                    _enableEventTimings = !_core.config.disableEventTimings;
                    var enableCompoundKey = !!_core.config.enableCompoundKey;
                    _postManager = postChannel;
                    _logger = _postManager.diagLog();
                    var valueSanitizer = channelConfig.valueSanitizer;
                    var stringifyObjects = channelConfig.stringifyObjects;
                    if (!isUndefined(channelConfig.enableCompoundKey)) {
                        enableCompoundKey = !!channelConfig.enableCompoundKey;
                    }
                    _xhrTimeout = channelConfig.xhrTimeout;
                    _disableXhrSync = channelConfig.disableXhrSync;
                    _useBeacons = !isReactNative();
                    _serializer = new Serializer(_core, valueSanitizer, stringifyObjects, enableCompoundKey);
                    var syncHttpInterface = httpInterface;
                    var beaconHttpInterface = channelConfig.alwaysUseXhrOverride ? httpInterface : null;
                    var fetchSyncHttpInterface = channelConfig.alwaysUseXhrOverride ? httpInterface : null;
                    if (!httpInterface) {
                        _customHttpInterface = false;
                        var location_1 = getLocation();
                        if (location_1 && location_1.protocol && location_1.protocol.toLowerCase() === "file:") {
                            _sendCredentials = false;
                        }
                        var theTransports = [];
                        if (isReactNative()) {
                            theTransports = [2 , 1 ];
                        }
                        else {
                            theTransports = [1 , 2 , 3 ];
                        }
                        var configTransports = channelConfig.transports;
                        if (configTransports) {
                            if (isNumber(configTransports)) {
                                theTransports = [configTransports].concat(theTransports);
                            }
                            else if (isArray(configTransports)) {
                                theTransports = configTransports.concat(theTransports);
                            }
                        }
                        httpInterface = _getSenderInterface(theTransports, false);
                        syncHttpInterface = _getSenderInterface(theTransports, true);
                        if (!httpInterface) {
                            _warnToConsole(_logger, "No available transport to send events");
                        }
                    }
                    _sendInterfaces = (_a = {},
                        _a[0 ] = httpInterface,
                        _a[1 ] = syncHttpInterface || _getSenderInterface([1 , 2 , 3 ], true),
                        _a[2 ] = beaconHttpInterface || _getSenderInterface([3 , 2 ], true) || syncHttpInterface || _getSenderInterface([1 ], true),
                        _a[3 ] = fetchSyncHttpInterface || _getSenderInterface([2 , 3 ], true) || syncHttpInterface || _getSenderInterface([1 ], true),
                        _a);
                };
                function _getSenderInterface(transports, syncSupport) {
                    var transportType = 0 ;
                    var sendPostFunc = null;
                    var lp = 0;
                    while (sendPostFunc == null && lp < transports.length) {
                        transportType = transports[lp];
                        if (transportType === 1 ) {
                            if (useXDomainRequest()) {
                                sendPostFunc = _xdrSendPost;
                            }
                            else if (isXhrSupported()) {
                                sendPostFunc = _xhrSendPost;
                            }
                        }
                        else if (transportType === 2  && isFetchSupported(syncSupport)) {
                            sendPostFunc = _fetchSendPost;
                        }
                        else if (_useBeacons && transportType === 3  && isBeaconsSupported()) {
                            sendPostFunc = _beaconSendPost;
                        }
                        lp++;
                    }
                    if (sendPostFunc) {
                        return {
                            _transport: transportType,
                            _isSync: syncSupport,
                            sendPOST: sendPostFunc
                        };
                    }
                    return null;
                }
                _self["_getDbgPlgTargets"] = function () {
                    return [_sendInterfaces[0 ], _killSwitch, _serializer, _sendInterfaces];
                };
                function _xdrSendPost(payload, oncomplete, sync) {
                    var xdr = new XDomainRequest();
                    xdr.open(STR_POST_METHOD, payload.urlString);
                    if (payload.timeout) {
                        xdr.timeout = payload.timeout;
                    }
                    xdr.onload = function () {
                        var response = _getResponseText(xdr);
                        _doOnComplete(oncomplete, 200, {}, response);
                        _handleCollectorResponse(response);
                    };
                    xdr.onerror = function () {
                        _doOnComplete(oncomplete, 400, {});
                    };
                    xdr.ontimeout = function () {
                        _doOnComplete(oncomplete, 500, {});
                    };
                    xdr.onprogress = function () { };
                    if (sync) {
                        xdr.send(payload.data);
                    }
                    else {
                        timeoutOverride.set(function () {
                            xdr.send(payload.data);
                        }, 0);
                    }
                }
                function _fetchSendPost(payload, oncomplete, sync) {
                    var _a;
                    var theUrl = payload.urlString;
                    var ignoreResponse = false;
                    var responseHandled = false;
                    var requestInit = (_a = {
                            body: payload.data,
                            method: STR_POST_METHOD
                        },
                        _a[STR_DISABLED_PROPERTY_NAME] = true,
                        _a);
                    if (sync) {
                        requestInit.keepalive = true;
                        if (payload._sendReason === 2 ) {
                            ignoreResponse = true;
                            theUrl += _noResponseQs;
                        }
                    }
                    if (_sendCredentials) {
                        requestInit.credentials = "include";
                    }
                    if (payload.headers && objKeys(payload.headers).length > 0) {
                        requestInit.headers = payload.headers;
                    }
                    fetch(theUrl, requestInit).then(function (response) {
                        var headerMap = {};
                        var responseText = "";
                        var headers = response.headers;
                        if (headers) {
                            headers["forEach"](function (value, name) {
                                headerMap[name] = value;
                            });
                        }
                        if (response.body) {
                            response.text().then(function (text) {
                                responseText = text;
                            });
                        }
                        if (!responseHandled) {
                            responseHandled = true;
                            _doOnComplete(oncomplete, response.status, headerMap, responseText);
                            _handleCollectorResponse(responseText);
                        }
                    })["catch"](function (error) {
                        if (!responseHandled) {
                            responseHandled = true;
                            _doOnComplete(oncomplete, 0, {});
                        }
                    });
                    if (ignoreResponse && !responseHandled) {
                        responseHandled = true;
                        _doOnComplete(oncomplete, 200, {});
                    }
                    if (!responseHandled && payload.timeout > 0) {
                        timeoutOverride.set(function () {
                            if (!responseHandled) {
                                responseHandled = true;
                                _doOnComplete(oncomplete, 500, {});
                            }
                        }, payload.timeout);
                    }
                }
                function _xhrSendPost(payload, oncomplete, sync) {
                    var theUrl = payload.urlString;
                    function _appendHeader(theHeaders, xhr, name) {
                        if (!theHeaders[name] && xhr && xhr.getResponseHeader) {
                            var value = xhr.getResponseHeader(name);
                            if (value) {
                                theHeaders[name] = strTrim(value);
                            }
                        }
                        return theHeaders;
                    }
                    function _getAllResponseHeaders(xhr) {
                        var theHeaders = {};
                        if (!xhr.getAllResponseHeaders) {
                            theHeaders = _appendHeader(theHeaders, xhr, STR_TIME_DELTA_HEADER);
                            theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_HEADER);
                            theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_SECONDS_HEADER);
                        }
                        else {
                            theHeaders = _convertAllHeadersToMap(xhr.getAllResponseHeaders());
                        }
                        return theHeaders;
                    }
                    function xhrComplete(xhr, responseTxt) {
                        _doOnComplete(oncomplete, xhr.status, _getAllResponseHeaders(xhr), responseTxt);
                    }
                    if (sync && payload.disableXhrSync) {
                        sync = false;
                    }
                    var xhrRequest = openXhr(STR_POST_METHOD, theUrl, _sendCredentials, true, sync, payload.timeout);
                    objForEachKey(payload.headers, function (name, value) {
                        xhrRequest.setRequestHeader(name, value);
                    });
                    xhrRequest.onload = function () {
                        var response = _getResponseText(xhrRequest);
                        xhrComplete(xhrRequest, response);
                        _handleCollectorResponse(response);
                    };
                    xhrRequest.onerror = function () {
                        xhrComplete(xhrRequest);
                    };
                    xhrRequest.ontimeout = function () {
                        xhrComplete(xhrRequest);
                    };
                    xhrRequest.send(payload.data);
                }
                function _doOnComplete(oncomplete, status, headers, response) {
                    try {
                        oncomplete(status, headers, response);
                    }
                    catch (e) {
                        _throwInternal(_logger, 2 , 518 , dumpObj(e));
                    }
                }
                function _beaconSendPost(payload, oncomplete, sync) {
                    var internalPayloadData = payload;
                    var status = 200;
                    var thePayload = internalPayloadData._thePayload;
                    var theUrl = payload.urlString + _noResponseQs;
                    try {
                        var nav_1 = getNavigator();
                        if (!nav_1.sendBeacon(theUrl, payload.data)) {
                            if (thePayload) {
                                var droppedBatches_1 = [];
                                arrForEach(thePayload.batches, function (theBatch) {
                                    if (droppedBatches_1 && theBatch && theBatch.count() > 0) {
                                        var theEvents = theBatch.events();
                                        for (var lp = 0; lp < theEvents.length; lp++) {
                                            if (!nav_1.sendBeacon(theUrl, _serializer.getEventBlob(theEvents[lp]))) {
                                                droppedBatches_1.push(theBatch.split(lp));
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        droppedBatches_1.push(theBatch.split(0));
                                    }
                                });
                                _sendBatchesNotification(droppedBatches_1, 8003 , thePayload.sendType, true);
                            }
                            else {
                                status = 0;
                            }
                        }
                    }
                    catch (ex) {
                        _warnToConsole(_logger, "Failed to send telemetry using sendBeacon API. Ex:" + dumpObj(ex));
                        status = 0;
                    }
                    finally {
                        _doOnComplete(oncomplete, status, {}, "");
                    }
                }
                function _isBeaconPayload(sendType) {
                    return sendType === 2  || sendType === 3 ;
                }
                function _adjustSendType(sendType) {
                    if (_isUnloading && _isBeaconPayload(sendType)) {
                        sendType = 2 ;
                    }
                    return sendType;
                }
                _self.addQueryStringParameter = function (name, value) {
                    for (var i = 0; i < _queryStringParameters.length; i++) {
                        if (_queryStringParameters[i].name === name) {
                            _queryStringParameters[i].value = value;
                            return;
                        }
                    }
                    _queryStringParameters.push({ name: name, value: value });
                };
                _self.addHeader = function (name, value) {
                    _headers[name] = value;
                };
                _self.canSendRequest = function () {
                    return _hasIdleConnection() && _clockSkewManager.allowRequestSending();
                };
                _self.sendQueuedRequests = function (sendType, sendReason) {
                    if (isUndefined(sendType)) {
                        sendType = 0 ;
                    }
                    if (_isUnloading) {
                        sendType = _adjustSendType(sendType);
                        sendReason = 2 ;
                    }
                    if (_canSendPayload(_batchQueue, sendType, 0)) {
                        _sendBatches(_clearQueue(), 0, false, sendType, sendReason || 0 );
                    }
                };
                _self.isCompletelyIdle = function () {
                    return !_paused && _outstandingRequests === 0 && _batchQueue.length === 0;
                };
                _self.setUnloading = function (value) {
                    _isUnloading = value;
                };
                _self.addBatch = function (theBatch) {
                    if (theBatch && theBatch.count() > 0) {
                        if (_killSwitch.isTenantKilled(theBatch.iKey())) {
                            return false;
                        }
                        _batchQueue.push(theBatch);
                    }
                    return true;
                };
                _self.teardown = function () {
                    if (_batchQueue.length > 0) {
                        _sendBatches(_clearQueue(), 0, true, 2 , 2 );
                    }
                };
                _self.pause = function () {
                    _paused = true;
                };
                _self.resume = function () {
                    _paused = false;
                    _self.sendQueuedRequests(0 , 4 );
                };
                _self.sendSynchronousBatch = function (batch, sendType, sendReason) {
                    if (batch && batch.count() > 0) {
                        if (isNullOrUndefined(sendType)) {
                            sendType = 1 ;
                        }
                        if (_isUnloading) {
                            sendType = _adjustSendType(sendType);
                            sendReason = 2 ;
                        }
                        _sendBatches([batch], 0, false, sendType, sendReason || 0 );
                    }
                };
                function _hasIdleConnection() {
                    return !_paused && _outstandingRequests < maxConnections;
                }
                function _clearQueue() {
                    var theQueue = _batchQueue;
                    _batchQueue = [];
                    return theQueue;
                }
                function _canSendPayload(theBatches, sendType, retryCnt) {
                    var result = false;
                    if (theBatches && theBatches.length > 0 && !_paused && _sendInterfaces[sendType] && _serializer) {
                        result = (sendType !== 0 ) || (_hasIdleConnection() && (retryCnt > 0 || _clockSkewManager.allowRequestSending()));
                    }
                    return result;
                }
                function _createDebugBatches(theBatches) {
                    var values = {};
                    if (theBatches) {
                        arrForEach(theBatches, function (theBatch, idx) {
                            values[idx] = {
                                iKey: theBatch.iKey(),
                                evts: theBatch.events()
                            };
                        });
                    }
                    return values;
                }
                function _sendBatches(theBatches, retryCount, isTeardown, sendType, sendReason) {
                    if (!theBatches || theBatches.length === 0) {
                        return;
                    }
                    if (_paused) {
                        _sendBatchesNotification(theBatches, 1 , sendType);
                        return;
                    }
                    sendType = _adjustSendType(sendType);
                    try {
                        var orgBatches_1 = theBatches;
                        var isSynchronous_1 = sendType !== 0 ;
                        doPerf(_core, function () { return "HttpManager:_sendBatches"; }, function (perfEvt) {
                            if (perfEvt) {
                                theBatches = theBatches.slice(0);
                            }
                            var droppedBatches = [];
                            var thePayload = null;
                            var serializationStart = getTime();
                            var sendInterface = _sendInterfaces[sendType] || (isSynchronous_1 ? _sendInterfaces[1 ] : _sendInterfaces[0 ]);
                            var isBeaconTransport = (_isUnloading || _isBeaconPayload(sendType) || (sendInterface && sendInterface._transport === 3 )) && _canUseSendBeaconApi();
                            while (_canSendPayload(theBatches, sendType, retryCount)) {
                                var theBatch = theBatches.shift();
                                if (theBatch && theBatch.count() > 0) {
                                    if (!_killSwitch.isTenantKilled(theBatch.iKey())) {
                                        thePayload = thePayload || _serializer.createPayload(retryCount, isTeardown, isSynchronous_1, isBeaconTransport, sendReason, sendType);
                                        if (!_serializer.appendPayload(thePayload, theBatch, maxEventsPerBatch)) {
                                            _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                                            serializationStart = getTime();
                                            theBatches = [theBatch].concat(theBatches);
                                            thePayload = null;
                                        }
                                        else if (thePayload.overflow !== null) {
                                            theBatches = [thePayload.overflow].concat(theBatches);
                                            thePayload.overflow = null;
                                            _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                                            serializationStart = getTime();
                                            thePayload = null;
                                        }
                                    }
                                    else {
                                        droppedBatches.push(theBatch);
                                    }
                                }
                            }
                            if (thePayload) {
                                _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                            }
                            if (theBatches.length > 0) {
                                _batchQueue = theBatches.concat(_batchQueue);
                            }
                            _sendBatchesNotification(droppedBatches, 8004 , sendType);
                        }, function () { return ({ batches: _createDebugBatches(orgBatches_1), retryCount: retryCount, isTeardown: isTeardown, isSynchronous: isSynchronous_1, sendReason: sendReason, useSendBeacon: _isBeaconPayload(sendType), sendType: sendType }); }, !isSynchronous_1);
                    }
                    catch (ex) {
                        _throwInternal(_logger, 2 , 48 , "Unexpected Exception sending batch: " + dumpObj(ex));
                    }
                }
                function _buildRequestDetails(thePayload, useHeaders) {
                    var requestDetails = {
                        url: _urlString,
                        hdrs: {},
                        useHdrs: false
                    };
                    if (!useHeaders) {
                        objForEachKey(_headers, function (name, value) {
                            if (_collectorHeaderToQs[name]) {
                                _addRequestDetails(requestDetails, _collectorHeaderToQs[name], value, false);
                            }
                            else {
                                requestDetails.hdrs[name] = value;
                                requestDetails.useHdrs = true;
                            }
                        });
                    }
                    else {
                        requestDetails.hdrs = extend(requestDetails.hdrs, _headers);
                        requestDetails.useHdrs = (objKeys(requestDetails.hdrs).length > 0);
                    }
                    _addRequestDetails(requestDetails, STR_CLIENT_ID, "NO_AUTH", useHeaders);
                    _addRequestDetails(requestDetails, STR_CLIENT_VERSION, FullVersionString, useHeaders);
                    var apiQsKeys = "";
                    arrForEach(thePayload.apiKeys, function (apiKey) {
                        if (apiQsKeys.length > 0) {
                            apiQsKeys += ",";
                        }
                        apiQsKeys += apiKey;
                    });
                    _addRequestDetails(requestDetails, STR_API_KEY, apiQsKeys, useHeaders);
                    _addRequestDetails(requestDetails, STR_UPLOAD_TIME, dateNow().toString(), useHeaders);
                    var msfpc = _getMsfpc(thePayload);
                    if (isValueAssigned(msfpc)) {
                        requestDetails.url += "&ext.intweb.msfpc=" + msfpc;
                    }
                    if (_clockSkewManager.shouldAddClockSkewHeaders()) {
                        _addRequestDetails(requestDetails, STR_TIME_DELTA_TO_APPLY, _clockSkewManager.getClockSkewHeaderValue(), useHeaders);
                    }
                    if (_core.getWParam) {
                        var wParam = _core.getWParam();
                        if (wParam >= 0) {
                            requestDetails.url += "&w=" + wParam;
                        }
                    }
                    for (var i = 0; i < _queryStringParameters.length; i++) {
                        requestDetails.url += "&" + _queryStringParameters[i].name + "=" + _queryStringParameters[i].value;
                    }
                    return requestDetails;
                }
                function _canUseSendBeaconApi() {
                    return !_customHttpInterface && _useBeacons && isBeaconsSupported();
                }
                function _setTimingValue(timings, name, value) {
                    timings[name] = timings[name] || {};
                    timings[name][_postManager.identifier] = value;
                }
                function _doPayloadSend(thePayload, serializationStart, serializationCompleted, sendReason) {
                    if (thePayload && thePayload.payloadBlob && thePayload.payloadBlob.length > 0) {
                        var useSendHook_1 = !!_self.sendHook;
                        var sendInterface_1 = _sendInterfaces[thePayload.sendType];
                        if (!_isBeaconPayload(thePayload.sendType) && thePayload.isBeacon && thePayload.sendReason === 2 ) {
                            sendInterface_1 = _sendInterfaces[2 ] || _sendInterfaces[3 ] || sendInterface_1;
                        }
                        var useHeaders_1 = _useHeaders;
                        if (thePayload.isBeacon || sendInterface_1._transport === 3 ) {
                            useHeaders_1 = false;
                        }
                        var requestDetails_1 = _buildRequestDetails(thePayload, useHeaders_1);
                        useHeaders_1 = useHeaders_1 || requestDetails_1.useHdrs;
                        var sendEventStart_1 = getTime();
                        doPerf(_core, function () { return "HttpManager:_doPayloadSend"; }, function () {
                            for (var batchLp = 0; batchLp < thePayload.batches.length; batchLp++) {
                                var theBatch = thePayload.batches[batchLp];
                                var theEvents = theBatch.events();
                                for (var evtLp = 0; evtLp < theEvents.length; evtLp++) {
                                    var telemetryItem = theEvents[evtLp];
                                    if (_enableEventTimings) {
                                        var timings = telemetryItem.timings = telemetryItem.timings || {};
                                        _setTimingValue(timings, "sendEventStart", sendEventStart_1);
                                        _setTimingValue(timings, "serializationStart", serializationStart);
                                        _setTimingValue(timings, "serializationCompleted", serializationCompleted);
                                    }
                                    telemetryItem[strSendAttempt] > 0 ? telemetryItem[strSendAttempt]++ : telemetryItem[strSendAttempt] = 1;
                                }
                            }
                            _sendBatchesNotification(thePayload.batches, (1000  + (sendReason || 0 )), thePayload.sendType, true);
                            var orgPayloadData = {
                                data: thePayload.payloadBlob,
                                urlString: requestDetails_1.url,
                                headers: requestDetails_1.hdrs,
                                _thePayload: thePayload,
                                _sendReason: sendReason,
                                timeout: _xhrTimeout
                            };
                            if (!isUndefined(_disableXhrSync)) {
                                orgPayloadData.disableXhrSync = !!_disableXhrSync;
                            }
                            if (useHeaders_1) {
                                if (!_hasHeader(orgPayloadData.headers, STR_CACHE_CONTROL)) {
                                    orgPayloadData.headers[STR_CACHE_CONTROL] = DEFAULT_CACHE_CONTROL;
                                }
                                if (!_hasHeader(orgPayloadData.headers, STR_CONTENT_TYPE_HEADER)) {
                                    orgPayloadData.headers[STR_CONTENT_TYPE_HEADER] = DEFAULT_CONTENT_TYPE;
                                }
                            }
                            var sender = null;
                            if (sendInterface_1) {
                                sender = function (payload) {
                                    _clockSkewManager.firstRequestSent();
                                    var onComplete = function (status, headers) {
                                        _retryRequestIfNeeded(status, headers, thePayload, sendReason);
                                    };
                                    var isSync = thePayload.isTeardown || thePayload.isSync;
                                    try {
                                        sendInterface_1.sendPOST(payload, onComplete, isSync);
                                        if (_self.sendListener) {
                                            _self.sendListener(orgPayloadData, payload, isSync, thePayload.isBeacon);
                                        }
                                    }
                                    catch (ex) {
                                        _warnToConsole(_logger, "Unexpected exception sending payload. Ex:" + dumpObj(ex));
                                        _doOnComplete(onComplete, 0, {});
                                    }
                                };
                            }
                            doPerf(_core, function () { return "HttpManager:_doPayloadSend.sender"; }, function () {
                                if (sender) {
                                    if (thePayload.sendType === 0 ) {
                                        _outstandingRequests++;
                                    }
                                    if (useSendHook_1 && !thePayload.isBeacon && sendInterface_1._transport !== 3 ) {
                                        var hookData_1 = {
                                            data: orgPayloadData.data,
                                            urlString: orgPayloadData.urlString,
                                            headers: extend({}, orgPayloadData.headers),
                                            timeout: orgPayloadData.timeout,
                                            disableXhrSync: orgPayloadData.disableXhrSync
                                        };
                                        var senderCalled_1 = false;
                                        doPerf(_core, function () { return "HttpManager:_doPayloadSend.sendHook"; }, function () {
                                            try {
                                                _self.sendHook(hookData_1, function (payload) {
                                                    senderCalled_1 = true;
                                                    if (!_customHttpInterface && !payload._thePayload) {
                                                        payload._thePayload = payload._thePayload || orgPayloadData._thePayload;
                                                        payload._sendReason = payload._sendReason || orgPayloadData._sendReason;
                                                    }
                                                    sender(payload);
                                                }, thePayload.isSync || thePayload.isTeardown);
                                            }
                                            catch (ex) {
                                                if (!senderCalled_1) {
                                                    sender(orgPayloadData);
                                                }
                                            }
                                        });
                                    }
                                    else {
                                        sender(orgPayloadData);
                                    }
                                }
                            });
                        }, function () { return ({ thePayload: thePayload, serializationStart: serializationStart, serializationCompleted: serializationCompleted, sendReason: sendReason }); }, thePayload.isSync);
                    }
                    if (thePayload.sizeExceed && thePayload.sizeExceed.length > 0) {
                        _sendBatchesNotification(thePayload.sizeExceed, 8003 , thePayload.sendType);
                    }
                    if (thePayload.failedEvts && thePayload.failedEvts.length > 0) {
                        _sendBatchesNotification(thePayload.failedEvts, 8002 , thePayload.sendType);
                    }
                }
                function _addEventCompletedTimings(theEvents, sendEventCompleted) {
                    if (_enableEventTimings) {
                        arrForEach(theEvents, function (theEvent) {
                            var timings = theEvent.timings = theEvent.timings || {};
                            _setTimingValue(timings, "sendEventCompleted", sendEventCompleted);
                        });
                    }
                }
                function _retryRequestIfNeeded(status, headers, thePayload, sendReason) {
                    var reason = 9000 ;
                    var droppedBatches = null;
                    var isRetrying = false;
                    var backOffTrans = false;
                    try {
                        var shouldRetry = true;
                        if (typeof status !== strShimUndefined) {
                            if (headers) {
                                _clockSkewManager.setClockSkew(headers[STR_TIME_DELTA_HEADER]);
                                var killDuration = headers[STR_KILL_DURATION_HEADER] || headers["kill-duration-seconds"];
                                arrForEach(_killSwitch.setKillSwitchTenants(headers[STR_KILL_TOKENS_HEADER], killDuration), function (killToken) {
                                    arrForEach(thePayload.batches, function (theBatch) {
                                        if (theBatch.iKey() === killToken) {
                                            droppedBatches = droppedBatches || [];
                                            var removedEvents = theBatch.split(0);
                                            thePayload.numEvents -= removedEvents.count();
                                            droppedBatches.push(removedEvents);
                                        }
                                    });
                                });
                            }
                            if (status == 200 || status == 204) {
                                reason = 200 ;
                                return;
                            }
                            if (!retryPolicyShouldRetryForStatus(status) || thePayload.numEvents <= 0) {
                                shouldRetry = false;
                            }
                            reason = 9000  + (status % 1000);
                        }
                        if (shouldRetry) {
                            reason = 100 ;
                            var retryCount_1 = thePayload.retryCnt;
                            if (thePayload.sendType === 0 ) {
                                if (retryCount_1 < maxRequestRetriesBeforeBackoff) {
                                    isRetrying = true;
                                    _doAction(function () {
                                        if (thePayload.sendType === 0 ) {
                                            _outstandingRequests--;
                                        }
                                        _sendBatches(thePayload.batches, retryCount_1 + 1, thePayload.isTeardown, _isUnloading ? 2  : thePayload.sendType, 5 );
                                    }, _isUnloading, retryPolicyGetMillisToBackoffForRetry(retryCount_1));
                                }
                                else {
                                    backOffTrans = true;
                                    if (_isUnloading) {
                                        reason = 8001 ;
                                    }
                                }
                            }
                        }
                    }
                    finally {
                        if (!isRetrying) {
                            _clockSkewManager.setClockSkew();
                            _handleRequestFinished(thePayload, reason, sendReason, backOffTrans);
                        }
                        _sendBatchesNotification(droppedBatches, 8004 , thePayload.sendType);
                    }
                }
                function _handleRequestFinished(thePayload, batchReason, sendReason, backOffTrans) {
                    try {
                        if (backOffTrans) {
                            _postManager._backOffTransmission();
                        }
                        if (batchReason === 200 ) {
                            if (!backOffTrans && !thePayload.isSync) {
                                _postManager._clearBackOff();
                            }
                            _addCompleteTimings(thePayload.batches);
                        }
                        _sendBatchesNotification(thePayload.batches, batchReason, thePayload.sendType, true);
                    }
                    finally {
                        if (thePayload.sendType === 0 ) {
                            _outstandingRequests--;
                            if (sendReason !== 5 ) {
                                _self.sendQueuedRequests(thePayload.sendType, sendReason);
                            }
                        }
                    }
                }
                function _addCompleteTimings(theBatches) {
                    if (_enableEventTimings) {
                        var sendEventCompleted_1 = getTime();
                        arrForEach(theBatches, function (theBatch) {
                            if (theBatch && theBatch.count() > 0) {
                                _addEventCompletedTimings(theBatch.events(), sendEventCompleted_1);
                            }
                        });
                    }
                }
                function _doAction(cb, isSync, interval) {
                    if (isSync) {
                        cb();
                    }
                    else {
                        timeoutOverride.set(cb, interval);
                    }
                }
                function _convertAllHeadersToMap(headersString) {
                    var headers = {};
                    if (isString(headersString)) {
                        var headersArray = strTrim(headersString).split(/[\r\n]+/);
                        arrForEach(headersArray, function (headerEntry) {
                            if (headerEntry) {
                                var idx = headerEntry.indexOf(": ");
                                if (idx !== -1) {
                                    var header = strTrim(headerEntry.substring(0, idx)).toLowerCase();
                                    var value = strTrim(headerEntry.substring(idx + 1));
                                    headers[header] = value;
                                }
                                else {
                                    headers[strTrim(headerEntry)] = 1;
                                }
                            }
                        });
                    }
                    return headers;
                }
                function _getMsfpc(thePayload) {
                    for (var lp = 0; lp < thePayload.batches.length; lp++) {
                        var msfpc = thePayload.batches[lp].Msfpc();
                        if (msfpc) {
                            return encodeURIComponent(msfpc);
                        }
                    }
                    return "";
                }
                function _handleCollectorResponse(responseText) {
                    var responseHandlers = _self._responseHandlers;
                    try {
                        for (var i = 0; i < responseHandlers.length; i++) {
                            try {
                                responseHandlers[i](responseText);
                            }
                            catch (e) {
                                _throwInternal(_logger, 1 , 519 , "Response handler failed: " + e);
                            }
                        }
                        if (responseText) {
                            var response = JSON.parse(responseText);
                            if (isValueAssigned(response.webResult) && isValueAssigned(response.webResult[STR_MSFPC])) {
                                _cookieMgr.set("MSFPC", response.webResult[STR_MSFPC], 365 * 86400);
                            }
                        }
                    }
                    catch (ex) {
                    }
                }
                function _sendBatchesNotification(theBatches, batchReason, sendType, sendSync) {
                    if (theBatches && theBatches.length > 0 && actions) {
                        var theAction_1 = actions[_getNotificationAction(batchReason)];
                        if (theAction_1) {
                            var isSyncRequest_1 = sendType !== 0 ;
                            doPerf(_core, function () { return "HttpManager:_sendBatchesNotification"; }, function () {
                                _doAction(function () {
                                    try {
                                        theAction_1.call(actions, theBatches, batchReason, isSyncRequest_1, sendType);
                                    }
                                    catch (e) {
                                        _throwInternal(_logger, 1 , 74 , "send request notification failed: " + e);
                                    }
                                }, sendSync || isSyncRequest_1, 0);
                            }, function () { return ({ batches: _createDebugBatches(theBatches), reason: batchReason, isSync: isSyncRequest_1, sendSync: sendSync, sendType: sendType }); }, !isSyncRequest_1);
                        }
                    }
                }
                function _getNotificationAction(reason) {
                    var action = _eventActionMap[reason];
                    if (!isValueAssigned(action)) {
                        action = STR_OTHER;
                        if (reason >= 9000  && reason <= 9999 ) {
                            action = STR_RESPONSE_FAIL;
                        }
                        else if (reason >= 8000  && reason <= 8999 ) {
                            action = STR_DROPPED;
                        }
                        else if (reason >= 1000  && reason <= 1999 ) {
                            action = STR_SENDING;
                        }
                    }
                    return action;
                }
            });
        }
        HttpManager.__ieDyn=1;
        return HttpManager;
    }());

    function defaultSetTimeout(callback, ms) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return setTimeout(callback, ms, args);
    }
    function defaultClearTimeout(timeoutId) {
        clearTimeout(timeoutId);
    }
    function createTimeoutWrapper(argSetTimeout, argClearTimeout) {
        return {
            set: argSetTimeout || defaultSetTimeout,
            clear: argClearTimeout || defaultClearTimeout
        };
    }

    var FlushCheckTimer = 0.250;
    var MaxNumberEventPerBatch = 500;
    var EventsDroppedAtOneTime = 20;
    var MaxSendAttempts = 6;
    var MaxSyncUnloadSendAttempts = 2;
    var MaxBackoffCount = 4;
    var MaxConnections = 2;
    var MaxRequestRetriesBeforeBackoff = 1;
    var strEventsDiscarded = "eventsDiscarded";
    var strOverrideInstrumentationKey = "overrideInstrumentationKey";
    var strMaxEventRetryAttempts = "maxEventRetryAttempts";
    var strMaxUnloadEventRetryAttempts = "maxUnloadEventRetryAttempts";
    var strAddUnloadCb = "addUnloadCb";
    var PostChannel = /** @class */ (function (_super) {
        __extendsFn(PostChannel, _super);
        function PostChannel() {
            var _this = _super.call(this) || this;
            _this.identifier = "PostChannel";
            _this.priority = 1011;
            _this.version = '3.2.6';
            var _config;
            var _isTeardownCalled = false;
            var _flushCallbackQueue = [];
            var _flushCallbackTimerId = null;
            var _paused = false;
            var _immediateQueueSize = 0;
            var _immediateQueueSizeLimit = 500;
            var _queueSize = 0;
            var _queueSizeLimit = 10000;
            var _profiles = {};
            var _currentProfile = RT_PROFILE;
            var _scheduledTimerId = null;
            var _immediateTimerId = null;
            var _currentBackoffCount = 0;
            var _timerCount = 0;
            var _xhrOverride;
            var _httpManager;
            var _batchQueues = {};
            var _autoFlushEventsLimit;
            var _autoFlushBatchLimit;
            var _delayedBatchSendLatency = -1;
            var _delayedBatchReason;
            var _optimizeObject = true;
            var _isPageUnloadTriggered = false;
            var _maxEventSendAttempts = MaxSendAttempts;
            var _maxUnloadEventSendAttempts = MaxSyncUnloadSendAttempts;
            var _evtNamespace;
            var _timeoutWrapper;
            dynamicProto(PostChannel, _this, function (_self, _base) {
                _initDefaults();
                _self["_getDbgPlgTargets"] = function () {
                    return [_httpManager];
                };
                _self.initialize = function (coreConfig, core, extensions) {
                    doPerf(core, function () { return "PostChannel:initialize"; }, function () {
                        var extendedCore = core;
                        _base.initialize(coreConfig, core, extensions);
                        try {
                            var hasAddUnloadCb = !!core[strAddUnloadCb];
                            _evtNamespace = mergeEvtNamespace(createUniqueNamespace(_self.identifier), core.evtNamespace && core.evtNamespace());
                            var ctx = _self._getTelCtx();
                            coreConfig.extensionConfig[_self.identifier] = coreConfig.extensionConfig[_self.identifier] || {};
                            _config = ctx.getExtCfg(_self.identifier);
                            _timeoutWrapper = createTimeoutWrapper(_config.setTimeoutOverride, _config.clearTimeoutOverride);
                            _optimizeObject = !_config.disableOptimizeObj && isChromium();
                            _hookWParam(extendedCore);
                            if (_config.eventsLimitInMem > 0) {
                                _queueSizeLimit = _config.eventsLimitInMem;
                            }
                            if (_config.immediateEventLimit > 0) {
                                _immediateQueueSizeLimit = _config.immediateEventLimit;
                            }
                            if (_config.autoFlushEventsLimit > 0) {
                                _autoFlushEventsLimit = _config.autoFlushEventsLimit;
                            }
                            if (isNumber(_config[strMaxEventRetryAttempts])) {
                                _maxEventSendAttempts = _config[strMaxEventRetryAttempts];
                            }
                            if (isNumber(_config[strMaxUnloadEventRetryAttempts])) {
                                _maxUnloadEventSendAttempts = _config[strMaxUnloadEventRetryAttempts];
                            }
                            _setAutoLimits();
                            if (_config.httpXHROverride && _config.httpXHROverride.sendPOST) {
                                _xhrOverride = _config.httpXHROverride;
                            }
                            if (isValueAssigned(coreConfig.anonCookieName)) {
                                _httpManager.addQueryStringParameter("anoncknm", coreConfig.anonCookieName);
                            }
                            _httpManager.sendHook = _config.payloadPreprocessor;
                            _httpManager.sendListener = _config.payloadListener;
                            var endpointUrl = _config.overrideEndpointUrl ? _config.overrideEndpointUrl : coreConfig.endpointUrl;
                            _self._notificationManager = coreConfig.extensionConfig.NotificationManager;
                            _httpManager.initialize(endpointUrl, _self.core, _self, _xhrOverride, _config);
                            var excludePageUnloadEvents = coreConfig.disablePageUnloadEvents || [];
                            addPageUnloadEventListener(_handleUnloadEvents, excludePageUnloadEvents, _evtNamespace);
                            addPageHideEventListener(_handleUnloadEvents, excludePageUnloadEvents, _evtNamespace);
                            addPageShowEventListener(_handleShowEvents, coreConfig.disablePageShowEvents, _evtNamespace);
                        }
                        catch (e) {
                            _self.setInitialized(false);
                            throw e;
                        }
                    }, function () { return ({ coreConfig: coreConfig, core: core, extensions: extensions }); });
                };
                _self.processTelemetry = function (ev, itemCtx) {
                    setProcessTelemetryTimings(ev, _self.identifier);
                    itemCtx = _self._getTelCtx(itemCtx);
                    var channelConfig = itemCtx.getExtCfg(_self.identifier);
                    var disableTelemetry = !!_config.disableTelemetry;
                    if (channelConfig) {
                        disableTelemetry = disableTelemetry || !!channelConfig.disableTelemetry;
                    }
                    var event = ev;
                    if (!disableTelemetry && !_isTeardownCalled) {
                        if (_config[strOverrideInstrumentationKey]) {
                            event.iKey = _config[strOverrideInstrumentationKey];
                        }
                        if (channelConfig && channelConfig[strOverrideInstrumentationKey]) {
                            event.iKey = channelConfig[strOverrideInstrumentationKey];
                        }
                        _addEventToQueues(event, true);
                        if (_isPageUnloadTriggered) {
                            _releaseAllQueues(2 , 2 );
                        }
                        else {
                            _scheduleTimer();
                        }
                    }
                    _self.processNext(event, itemCtx);
                };
                _self._doTeardown = function (unloadCtx, unloadState) {
                    _releaseAllQueues(2 , 2 );
                    _isTeardownCalled = true;
                    _httpManager.teardown();
                    removePageUnloadEventListener(null, _evtNamespace);
                    removePageHideEventListener(null, _evtNamespace);
                    removePageShowEventListener(null, _evtNamespace);
                    _initDefaults();
                };
                function _hookWParam(extendedCore) {
                    var existingGetWParamMethod = extendedCore.getWParam;
                    extendedCore.getWParam = function () {
                        var wparam = 0;
                        if (_config.ignoreMc1Ms0CookieProcessing) {
                            wparam = wparam | 2;
                        }
                        return wparam | existingGetWParamMethod();
                    };
                }
                function _handleUnloadEvents(evt) {
                    var theEvt = evt || getWindow().event;
                    if (theEvt.type !== "beforeunload") {
                        _isPageUnloadTriggered = true;
                        _httpManager.setUnloading(_isPageUnloadTriggered);
                    }
                    _releaseAllQueues(2 , 2 );
                }
                function _handleShowEvents(evt) {
                    _isPageUnloadTriggered = false;
                    _httpManager.setUnloading(_isPageUnloadTriggered);
                }
                function _addEventToQueues(event, append) {
                    if (!event.sendAttempt) {
                        event.sendAttempt = 0;
                    }
                    if (!event.latency) {
                        event.latency = 1 ;
                    }
                    if (event.ext && event.ext[STR_TRACE]) {
                        delete (event.ext[STR_TRACE]);
                    }
                    if (event.ext && event.ext[STR_USER] && event.ext[STR_USER]["id"]) {
                        delete (event.ext[STR_USER]["id"]);
                    }
                    if (_optimizeObject) {
                        event.ext = optimizeObject(event.ext);
                        if (event.baseData) {
                            event.baseData = optimizeObject(event.baseData);
                        }
                        if (event.data) {
                            event.data = optimizeObject(event.data);
                        }
                    }
                    if (event.sync) {
                        if (_currentBackoffCount || _paused) {
                            event.latency = 3 ;
                            event.sync = false;
                        }
                        else {
                            if (_httpManager) {
                                if (_optimizeObject) {
                                    event = optimizeObject(event);
                                }
                                _httpManager.sendSynchronousBatch(EventBatch.create(event.iKey, [event]), event.sync === true ? 1  : event.sync, 3 );
                                return;
                            }
                        }
                    }
                    var evtLatency = event.latency;
                    var queueSize = _queueSize;
                    var queueLimit = _queueSizeLimit;
                    if (evtLatency === 4 ) {
                        queueSize = _immediateQueueSize;
                        queueLimit = _immediateQueueSizeLimit;
                    }
                    var eventDropped = false;
                    if (queueSize < queueLimit) {
                        eventDropped = !_addEventToProperQueue(event, append);
                    }
                    else {
                        var dropLatency = 1 ;
                        var dropNumber = EventsDroppedAtOneTime;
                        if (evtLatency === 4 ) {
                            dropLatency = 4 ;
                            dropNumber = 1;
                        }
                        eventDropped = true;
                        if (_dropEventWithLatencyOrLess(event.iKey, event.latency, dropLatency, dropNumber)) {
                            eventDropped = !_addEventToProperQueue(event, append);
                        }
                    }
                    if (eventDropped) {
                        _notifyEvents(strEventsDiscarded, [event], EventsDiscardedReason.QueueFull);
                    }
                }
                _self.setEventQueueLimits = function (eventLimit, autoFlushLimit) {
                    _queueSizeLimit = eventLimit > 0 ? eventLimit : 10000;
                    _autoFlushEventsLimit = autoFlushLimit > 0 ? autoFlushLimit : 0;
                    _setAutoLimits();
                    var doFlush = _queueSize > eventLimit;
                    if (!doFlush && _autoFlushBatchLimit > 0) {
                        for (var latency = 1 ; !doFlush && latency <= 3 ; latency++) {
                            var batchQueue = _batchQueues[latency];
                            if (batchQueue && batchQueue.batches) {
                                arrForEach(batchQueue.batches, function (theBatch) {
                                    if (theBatch && theBatch.count() >= _autoFlushBatchLimit) {
                                        doFlush = true;
                                    }
                                });
                            }
                        }
                    }
                    _performAutoFlush(true, doFlush);
                };
                _self.pause = function () {
                    _clearScheduledTimer();
                    _paused = true;
                    _httpManager.pause();
                };
                _self.resume = function () {
                    _paused = false;
                    _httpManager.resume();
                    _scheduleTimer();
                };
                _self.addResponseHandler = function (responseHandler) {
                    _httpManager._responseHandlers.push(responseHandler);
                };
                _self._loadTransmitProfiles = function (profiles) {
                    _resetTransmitProfiles();
                    objForEachKey(profiles, function (profileName, profileValue) {
                        var profLen = profileValue.length;
                        if (profLen >= 2) {
                            var directValue = (profLen > 2 ? profileValue[2] : 0);
                            profileValue.splice(0, profLen - 2);
                            if (profileValue[1] < 0) {
                                profileValue[0] = -1;
                            }
                            if (profileValue[1] > 0 && profileValue[0] > 0) {
                                var timerMultiplier = profileValue[0] / profileValue[1];
                                profileValue[0] = Math.ceil(timerMultiplier) * profileValue[1];
                            }
                            if (directValue >= 0 && profileValue[1] >= 0 && directValue > profileValue[1]) {
                                directValue = profileValue[1];
                            }
                            profileValue.push(directValue);
                            _profiles[profileName] = profileValue;
                        }
                    });
                };
                _self.flush = function (async, callback, sendReason) {
                    if (async === void 0) { async = true; }
                    if (!_paused) {
                        sendReason = sendReason || 1 ;
                        if (async) {
                            if (_flushCallbackTimerId == null) {
                                _clearScheduledTimer();
                                _queueBatches(1 , 0 , sendReason);
                                _flushCallbackTimerId = _createTimer(function () {
                                    _flushCallbackTimerId = null;
                                    _flushImpl(callback, sendReason);
                                }, 0);
                            }
                            else {
                                _flushCallbackQueue.push(callback);
                            }
                        }
                        else {
                            var cleared = _clearScheduledTimer();
                            _sendEventsForLatencyAndAbove(1 , 1 , sendReason);
                            if (callback !== null && callback !== undefined) {
                                callback();
                            }
                            if (cleared) {
                                _scheduleTimer();
                            }
                        }
                    }
                };
                _self.setMsaAuthTicket = function (ticket) {
                    _httpManager.addHeader(STR_MSA_DEVICE_TICKET, ticket);
                };
                _self.hasEvents = _hasEvents;
                _self._setTransmitProfile = function (profileName) {
                    if (_currentProfile !== profileName && _profiles[profileName] !== undefined) {
                        _clearScheduledTimer();
                        _currentProfile = profileName;
                        _scheduleTimer();
                    }
                };
                function _sendEventsForLatencyAndAbove(latency, sendType, sendReason) {
                    var queued = _queueBatches(latency, sendType, sendReason);
                    _httpManager.sendQueuedRequests(sendType, sendReason);
                    return queued;
                }
                function _hasEvents() {
                    return _queueSize > 0;
                }
                function _scheduleTimer() {
                    if (_delayedBatchSendLatency >= 0 && _queueBatches(_delayedBatchSendLatency, 0 , _delayedBatchReason)) {
                        _httpManager.sendQueuedRequests(0 , _delayedBatchReason);
                    }
                    if (_immediateQueueSize > 0 && !_immediateTimerId && !_paused) {
                        var immediateTimeOut = _profiles[_currentProfile][2];
                        if (immediateTimeOut >= 0) {
                            _immediateTimerId = _createTimer(function () {
                                _immediateTimerId = null;
                                _sendEventsForLatencyAndAbove(4 , 0 , 1 );
                                _scheduleTimer();
                            }, immediateTimeOut);
                        }
                    }
                    var timeOut = _profiles[_currentProfile][1];
                    if (!_scheduledTimerId && !_flushCallbackTimerId && timeOut >= 0 && !_paused) {
                        if (_hasEvents()) {
                            _scheduledTimerId = _createTimer(function () {
                                _scheduledTimerId = null;
                                _sendEventsForLatencyAndAbove(_timerCount === 0 ? 3  : 1 , 0 , 1 );
                                _timerCount++;
                                _timerCount %= 2;
                                _scheduleTimer();
                            }, timeOut);
                        }
                        else {
                            _timerCount = 0;
                        }
                    }
                }
                _self._backOffTransmission = function () {
                    if (_currentBackoffCount < MaxBackoffCount) {
                        _currentBackoffCount++;
                        _clearScheduledTimer();
                        _scheduleTimer();
                    }
                };
                _self._clearBackOff = function () {
                    if (_currentBackoffCount) {
                        _currentBackoffCount = 0;
                        _clearScheduledTimer();
                        _scheduleTimer();
                    }
                };
                function _initDefaults() {
                    _config = null;
                    _isTeardownCalled = false;
                    _flushCallbackQueue = [];
                    _flushCallbackTimerId = null;
                    _paused = false;
                    _immediateQueueSize = 0;
                    _immediateQueueSizeLimit = 500;
                    _queueSize = 0;
                    _queueSizeLimit = 10000;
                    _profiles = {};
                    _currentProfile = RT_PROFILE;
                    _scheduledTimerId = null;
                    _immediateTimerId = null;
                    _currentBackoffCount = 0;
                    _timerCount = 0;
                    _xhrOverride = null;
                    _batchQueues = {};
                    _autoFlushEventsLimit = undefined;
                    _autoFlushBatchLimit = 0;
                    _delayedBatchSendLatency = -1;
                    _delayedBatchReason = null;
                    _optimizeObject = true;
                    _isPageUnloadTriggered = false;
                    _maxEventSendAttempts = MaxSendAttempts;
                    _maxUnloadEventSendAttempts = MaxSyncUnloadSendAttempts;
                    _evtNamespace = null;
                    _timeoutWrapper = createTimeoutWrapper();
                    _httpManager = new HttpManager(MaxNumberEventPerBatch, MaxConnections, MaxRequestRetriesBeforeBackoff, {
                        requeue: _requeueEvents,
                        send: _sendingEvent,
                        sent: _eventsSentEvent,
                        drop: _eventsDropped,
                        rspFail: _eventsResponseFail,
                        oth: _otherEvent
                    }, _timeoutWrapper);
                    _initializeProfiles();
                    _clearQueues();
                    _setAutoLimits();
                }
                function _createTimer(theTimerFunc, timeOut) {
                    if (timeOut === 0 && _currentBackoffCount) {
                        timeOut = 1;
                    }
                    var timerMultiplier = 1000;
                    if (_currentBackoffCount) {
                        timerMultiplier = retryPolicyGetMillisToBackoffForRetry(_currentBackoffCount - 1);
                    }
                    return _timeoutWrapper.set(theTimerFunc, timeOut * timerMultiplier);
                }
                function _clearScheduledTimer() {
                    if (_scheduledTimerId !== null) {
                        _timeoutWrapper.clear(_scheduledTimerId);
                        _scheduledTimerId = null;
                        _timerCount = 0;
                        return true;
                    }
                    return false;
                }
                function _releaseAllQueues(sendType, sendReason) {
                    _clearScheduledTimer();
                    if (_flushCallbackTimerId) {
                        _timeoutWrapper.clear(_flushCallbackTimerId);
                        _flushCallbackTimerId = null;
                    }
                    if (!_paused) {
                        _sendEventsForLatencyAndAbove(1 , sendType, sendReason);
                    }
                }
                function _clearQueues() {
                    _batchQueues[4 ] = {
                        batches: [],
                        iKeyMap: {}
                    };
                    _batchQueues[3 ] = {
                        batches: [],
                        iKeyMap: {}
                    };
                    _batchQueues[2 ] = {
                        batches: [],
                        iKeyMap: {}
                    };
                    _batchQueues[1 ] = {
                        batches: [],
                        iKeyMap: {}
                    };
                }
                function _getEventBatch(iKey, latency, create) {
                    var batchQueue = _batchQueues[latency];
                    if (!batchQueue) {
                        latency = 1 ;
                        batchQueue = _batchQueues[latency];
                    }
                    var eventBatch = batchQueue.iKeyMap[iKey];
                    if (!eventBatch && create) {
                        eventBatch = EventBatch.create(iKey);
                        batchQueue.batches.push(eventBatch);
                        batchQueue.iKeyMap[iKey] = eventBatch;
                    }
                    return eventBatch;
                }
                function _performAutoFlush(isAsync, doFlush) {
                    if (_httpManager.canSendRequest() && !_currentBackoffCount) {
                        if (_autoFlushEventsLimit > 0 && _queueSize > _autoFlushEventsLimit) {
                            doFlush = true;
                        }
                        if (doFlush && _flushCallbackTimerId == null) {
                            _self.flush(isAsync, null, 20 );
                        }
                    }
                }
                function _addEventToProperQueue(event, append) {
                    if (_optimizeObject) {
                        event = optimizeObject(event);
                    }
                    var latency = event.latency;
                    var eventBatch = _getEventBatch(event.iKey, latency, true);
                    if (eventBatch.addEvent(event)) {
                        if (latency !== 4 ) {
                            _queueSize++;
                            if (append && event.sendAttempt === 0) {
                                _performAutoFlush(!event.sync, _autoFlushBatchLimit > 0 && eventBatch.count() >= _autoFlushBatchLimit);
                            }
                        }
                        else {
                            _immediateQueueSize++;
                        }
                        return true;
                    }
                    return false;
                }
                function _dropEventWithLatencyOrLess(iKey, latency, currentLatency, dropNumber) {
                    while (currentLatency <= latency) {
                        var eventBatch = _getEventBatch(iKey, latency, true);
                        if (eventBatch && eventBatch.count() > 0) {
                            var droppedEvents = eventBatch.split(0, dropNumber);
                            var droppedCount = droppedEvents.count();
                            if (droppedCount > 0) {
                                if (currentLatency === 4 ) {
                                    _immediateQueueSize -= droppedCount;
                                }
                                else {
                                    _queueSize -= droppedCount;
                                }
                                _notifyBatchEvents(strEventsDiscarded, [droppedEvents], EventsDiscardedReason.QueueFull);
                                return true;
                            }
                        }
                        currentLatency++;
                    }
                    _resetQueueCounts();
                    return false;
                }
                function _resetQueueCounts() {
                    var immediateQueue = 0;
                    var normalQueue = 0;
                    var _loop_1 = function (latency) {
                        var batchQueue = _batchQueues[latency];
                        if (batchQueue && batchQueue.batches) {
                            arrForEach(batchQueue.batches, function (theBatch) {
                                if (latency === 4 ) {
                                    immediateQueue += theBatch.count();
                                }
                                else {
                                    normalQueue += theBatch.count();
                                }
                            });
                        }
                    };
                    for (var latency = 1 ; latency <= 4 ; latency++) {
                        _loop_1(latency);
                    }
                    _queueSize = normalQueue;
                    _immediateQueueSize = immediateQueue;
                }
                function _queueBatches(latency, sendType, sendReason) {
                    var eventsQueued = false;
                    var isAsync = sendType === 0 ;
                    if (!isAsync || _httpManager.canSendRequest()) {
                        doPerf(_self.core, function () { return "PostChannel._queueBatches"; }, function () {
                            var droppedEvents = [];
                            var latencyToProcess = 4 ;
                            while (latencyToProcess >= latency) {
                                var batchQueue = _batchQueues[latencyToProcess];
                                if (batchQueue && batchQueue.batches && batchQueue.batches.length > 0) {
                                    arrForEach(batchQueue.batches, function (theBatch) {
                                        if (!_httpManager.addBatch(theBatch)) {
                                            droppedEvents = droppedEvents.concat(theBatch.events());
                                        }
                                        else {
                                            eventsQueued = eventsQueued || (theBatch && theBatch.count() > 0);
                                        }
                                        if (latencyToProcess === 4 ) {
                                            _immediateQueueSize -= theBatch.count();
                                        }
                                        else {
                                            _queueSize -= theBatch.count();
                                        }
                                    });
                                    batchQueue.batches = [];
                                    batchQueue.iKeyMap = {};
                                }
                                latencyToProcess--;
                            }
                            if (droppedEvents.length > 0) {
                                _notifyEvents(strEventsDiscarded, droppedEvents, EventsDiscardedReason.KillSwitch);
                            }
                            if (eventsQueued && _delayedBatchSendLatency >= latency) {
                                _delayedBatchSendLatency = -1;
                                _delayedBatchReason = 0 ;
                            }
                        }, function () { return ({ latency: latency, sendType: sendType, sendReason: sendReason }); }, !isAsync);
                    }
                    else {
                        _delayedBatchSendLatency = _delayedBatchSendLatency >= 0 ? Math.min(_delayedBatchSendLatency, latency) : latency;
                        _delayedBatchReason = Math.max(_delayedBatchReason, sendReason);
                    }
                    return eventsQueued;
                }
                function _flushImpl(callback, sendReason) {
                    _sendEventsForLatencyAndAbove(1 , 0 , sendReason);
                    _resetQueueCounts();
                    _waitForIdleManager(function () {
                        if (callback) {
                            callback();
                        }
                        if (_flushCallbackQueue.length > 0) {
                            _flushCallbackTimerId = _createTimer(function () {
                                _flushCallbackTimerId = null;
                                _flushImpl(_flushCallbackQueue.shift(), sendReason);
                            }, 0);
                        }
                        else {
                            _flushCallbackTimerId = null;
                            _scheduleTimer();
                        }
                    });
                }
                function _waitForIdleManager(callback) {
                    if (_httpManager.isCompletelyIdle()) {
                        callback();
                    }
                    else {
                        _flushCallbackTimerId = _createTimer(function () {
                            _flushCallbackTimerId = null;
                            _waitForIdleManager(callback);
                        }, FlushCheckTimer);
                    }
                }
                function _resetTransmitProfiles() {
                    _clearScheduledTimer();
                    _initializeProfiles();
                    _currentProfile = RT_PROFILE;
                    _scheduleTimer();
                }
                function _initializeProfiles() {
                    _profiles = {};
                    _profiles[RT_PROFILE] = [2, 1, 0];
                    _profiles[NRT_PROFILE] = [6, 3, 0];
                    _profiles[BE_PROFILE] = [18, 9, 0];
                }
                function _requeueEvents(batches, reason) {
                    var droppedEvents = [];
                    var maxSendAttempts = _maxEventSendAttempts;
                    if (_isPageUnloadTriggered) {
                        maxSendAttempts = _maxUnloadEventSendAttempts;
                    }
                    arrForEach(batches, function (theBatch) {
                        if (theBatch && theBatch.count() > 0) {
                            arrForEach(theBatch.events(), function (theEvent) {
                                if (theEvent) {
                                    if (theEvent.sync) {
                                        theEvent.latency = 4 ;
                                        theEvent.sync = false;
                                    }
                                    if (theEvent.sendAttempt < maxSendAttempts) {
                                        setProcessTelemetryTimings(theEvent, _self.identifier);
                                        _addEventToQueues(theEvent, false);
                                    }
                                    else {
                                        droppedEvents.push(theEvent);
                                    }
                                }
                            });
                        }
                    });
                    if (droppedEvents.length > 0) {
                        _notifyEvents(strEventsDiscarded, droppedEvents, EventsDiscardedReason.NonRetryableStatus);
                    }
                    if (_isPageUnloadTriggered) {
                        _releaseAllQueues(2 , 2 );
                    }
                }
                function _callNotification(evtName, theArgs) {
                    var manager = (_self._notificationManager || {});
                    var notifyFunc = manager[evtName];
                    if (notifyFunc) {
                        try {
                            notifyFunc.apply(manager, theArgs);
                        }
                        catch (e) {
                            _throwInternal(_self.diagLog(), 1 , 74 , evtName + " notification failed: " + e);
                        }
                    }
                }
                function _notifyEvents(evtName, theEvents) {
                    var extraArgs = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        extraArgs[_i - 2] = arguments[_i];
                    }
                    if (theEvents && theEvents.length > 0) {
                        _callNotification(evtName, [theEvents].concat(extraArgs));
                    }
                }
                function _notifyBatchEvents(evtName, batches) {
                    var extraArgs = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        extraArgs[_i - 2] = arguments[_i];
                    }
                    if (batches && batches.length > 0) {
                        arrForEach(batches, function (theBatch) {
                            if (theBatch && theBatch.count() > 0) {
                                _callNotification(evtName, [theBatch.events()].concat(extraArgs));
                            }
                        });
                    }
                }
                function _sendingEvent(batches, reason, isSyncRequest) {
                    if (batches && batches.length > 0) {
                        _callNotification("eventsSendRequest", [(reason >= 1000  && reason <= 1999  ?
                                reason - 1000  :
                                0 ), isSyncRequest !== true]);
                    }
                }
                function _eventsSentEvent(batches, reason) {
                    _notifyBatchEvents("eventsSent", batches, reason);
                    _scheduleTimer();
                }
                function _eventsDropped(batches, reason) {
                    _notifyBatchEvents(strEventsDiscarded, batches, (reason >= 8000  && reason <= 8999  ?
                        reason - 8000  :
                        EventsDiscardedReason.Unknown));
                }
                function _eventsResponseFail(batches) {
                    _notifyBatchEvents(strEventsDiscarded, batches, EventsDiscardedReason.NonRetryableStatus);
                    _scheduleTimer();
                }
                function _otherEvent(batches, reason) {
                    _notifyBatchEvents(strEventsDiscarded, batches, EventsDiscardedReason.Unknown);
                    _scheduleTimer();
                }
                function _setAutoLimits() {
                    if (!_config || !_config.disableAutoBatchFlushLimit) {
                        _autoFlushBatchLimit = Math.max(MaxNumberEventPerBatch * (MaxConnections + 1), _queueSizeLimit / 6);
                    }
                    else {
                        _autoFlushBatchLimit = 0;
                    }
                }
                objDefineAccessors(_self, "_setTimeoutOverride", function () { return _timeoutWrapper.set; }, function (value) {
                    _timeoutWrapper = createTimeoutWrapper(value, _timeoutWrapper.clear);
                });
                objDefineAccessors(_self, "_clearTimeoutOverride", function () { return _timeoutWrapper.clear; }, function (value) {
                    _timeoutWrapper = createTimeoutWrapper(_timeoutWrapper.set, value);
                });
            });
            return _this;
        }
        PostChannel.__ieDyn=1;
        return PostChannel;
    }(BaseTelemetryPlugin));
    var PostChannel$1 = PostChannel;

    var STR_DEVICE = "device";
    var STR_LOCALE = "locale";
    var STR_VER = "ver";
    var STR_BROWSER = "browser";
    var STR_BROWSER_VER = "browserVer";
    var STR_POP_SAMPLE = "popSample";
    var STR_EVENT_FLAGS = "eventFlags";
    var STR_NAME = "name";
    var STR_SERVICE_NAME = "serviceName";

    var Extensions = createValueMap({
        UserExt: [0 , "user"],
        DeviceExt: [1 , STR_DEVICE],
        TraceExt: [2 , "trace"],
        WebExt: [3 , "web"],
        AppExt: [4 , "app"],
        OSExt: [5 , "os"],
        SdkExt: [6 , "sdk"],
        IntWebExt: [7 , "intweb"],
        UtcExt: [8 , "utc"],
        LocExt: [9 , "loc"],
        CloudExt: [10 , "cloud"],
        DtExt: [11 , "dt"]
    });
    var AppExtensionKeys = createValueMap({
        id: [0 , "id"],
        ver: [1 , STR_VER],
        appName: [2 , STR_NAME],
        locale: [3 , STR_LOCALE],
        expId: [4 , "expId"],
        env: [5 , "env"]
    });
    var WebExtensionKeys = createValueMap({
        domain: [0 , "domain"],
        browser: [1 , STR_BROWSER],
        browserVer: [2 , STR_BROWSER_VER],
        screenRes: [3 , "screenRes"],
        userConsent: [4 , "userConsent"],
        consentDetails: [5 , "consentDetails"]
    });
    var UserExtensionKeys = createValueMap({
        locale: [0 , STR_LOCALE],
        localId: [1 , "localId"],
        id: [2 , "id"]
    });
    var OSExtKeys = createValueMap({
        osName: [0 , STR_NAME],
        ver: [1 , STR_VER]
    });
    var SDKExtKeys = createValueMap({
        ver: [0 , STR_VER],
        seq: [1 , "seq"],
        installId: [2 , "installId"],
        epoch: [3 , "epoch"]
    });
    var IntWebExtKeys = createValueMap({
        msfpc: [0 , "msfpc"],
        anid: [1 , "anid"],
        serviceName: [2 , STR_SERVICE_NAME]
    });
    var UtcExtKeys = createValueMap({
        popSample: [0 , STR_POP_SAMPLE],
        eventFlags: [1 , STR_EVENT_FLAGS]
    });
    var LocExtKeys = createValueMap({
        tz: [0 , "tz"]
    });
    var SessionExtKeys = createValueMap({
        sessionId: [0 , "sesId"]
    });
    var DeviceExtKeys = createValueMap({
        localId: [0 , "localId"],
        deviceClass: [1 , "deviceClass"],
        make: [2 , "make"],
        model: [3 , "model"]
    });
    var CloudExtKeys = createValueMap({
        role: [0 , "role"],
        roleInstance: [1 , "roleInstance"],
        roleVer: [2 , "roleVer"]
    });
    var TraceExtKeys = createValueMap({
        traceId: [0 , "traceID"],
        traceName: [1 , STR_NAME],
        parentId: [2 , "parentID"]
    });
    var DistributedTraceExtKeys = createValueMap({
        traceId: [0 , "traceId"],
        spanId: [1 , "spanId"],
        traceFlags: [2 , "traceFlags"]
    });

    var _canUseLocalStorage$1;
    function canUseLocalStorage() {
        if (_canUseLocalStorage$1 === undefined) {
            _canUseLocalStorage$1 = !!_getVerifiedStorageObject$1(0 );
        }
        return _canUseLocalStorage$1;
    }
    function _getLocalStorageObject() {
        if (canUseLocalStorage()) {
            return _getVerifiedStorageObject$1(0 );
        }
        return null;
    }
    function _getVerifiedStorageObject$1(storageType) {
        var storage = null;
        var fail;
        var uid;
        try {
            var global_1 = getGlobal();
            if (!global_1) {
                return null;
            }
            uid = new Date();
            storage = storageType === 0  ? global_1.localStorage : global_1.sessionStorage;
            if (storage && isFunction(storage.setItem)) {
                storage.setItem(uid, uid);
                fail = storage.getItem(uid) !== uid;
                storage.removeItem(uid);
                if (fail) {
                    storage = null;
                }
            }
        }
        catch (exception) {
            storage = null;
        }
        return storage;
    }
    function setStorage(logger, name, data) {
        var storage = _getLocalStorageObject();
        if (storage !== null) {
            try {
                storage.setItem(name, data);
                return true;
            }
            catch (e) {
                _canUseLocalStorage$1 = false;
                _throwInternal(logger, 1 , 504 , "Browser failed write to local storage. " + e);
            }
        }
        return false;
    }
    function getStorage(logger, name) {
        var storage = _getLocalStorageObject();
        if (storage !== null) {
            try {
                return storage.getItem(name);
            }
            catch (e) {
                _canUseLocalStorage$1 = false;
                _throwInternal(logger, 1 , 503 , "Browser failed read of local storage. " + e);
            }
        }
        return null;
    }

    function _getId() {
        return this.getId();
    }
    function _setId(id) {
        this.setId(id);
    }
    var Session = /** @class */ (function () {
        function Session() {
            dynamicProto(Session, this, function (_self) {
                _self.setId = function (id) {
                    _self.customId = id;
                };
                _self.getId = function () {
                    if (isString(_self.customId)) {
                        return _self.customId;
                    }
                    else {
                        return _self.automaticId;
                    }
                };
            });
        }
        Session._staticInit = (function () {
            objDefineAccessors(Session.prototype, "id", _getId, _setId);
        })();
        return Session;
    }());

    var cookieNameConst = "ai_session";
    var SessionManager = /** @class */ (function () {
        function SessionManager(core, propConfig) {
            var _cookieUpdatedTimestamp;
            var _logger = safeGetLogger(core);
            var cookieMgr = safeGetCookieMgr(core);
            var _storageNamePrefix;
            dynamicProto(SessionManager, this, function (_self) {
                var functionalConfig = getDefaultConfig(propConfig);
                if (!isFunction(propConfig.sessionExpirationMs)) {
                    functionalConfig.sessionExpirationMs = function () { return SessionManager.acquisitionSpan; };
                }
                if (!isFunction(propConfig.sessionRenewalMs)) {
                    functionalConfig.sessionRenewalMs = function () { return SessionManager.renewalSpan; };
                }
                _self.config = functionalConfig;
                _storageNamePrefix = function () { return _self.config.namePrefix && _self.config.namePrefix() ? cookieNameConst + _self.config.namePrefix() : cookieNameConst; };
                _self.automaticSession = new Session();
                _self.update = function () {
                    if (!_self.automaticSession.getId()) {
                        _initializeAutomaticSession();
                    }
                    var autoSession = _self.automaticSession;
                    var config = _self.config;
                    var now = new Date().getTime();
                    var acquisitionExpired = now - autoSession.acquisitionDate > config.sessionExpirationMs();
                    var renewalExpired = now - autoSession.renewalDate > config.sessionRenewalMs();
                    if (acquisitionExpired || renewalExpired) {
                        _renew();
                    }
                    else {
                        var cookieUpdatedTimestamp = _cookieUpdatedTimestamp;
                        if (!cookieUpdatedTimestamp || now - cookieUpdatedTimestamp > SessionManager.cookieUpdateInterval) {
                            autoSession.renewalDate = now;
                            _setCookie(autoSession.getId(), autoSession.acquisitionDate, autoSession.renewalDate);
                        }
                    }
                };
                _self.backup = function () {
                    var automaticSession = _self.automaticSession;
                    _setStorage(automaticSession.getId(), automaticSession.acquisitionDate, automaticSession.renewalDate);
                };
                function getDefaultConfig(config) {
                    return {
                        sessionRenewalMs: config.sessionRenewalMs && (function () { return config.sessionRenewalMs; }),
                        sessionExpirationMs: config.sessionExpirationMs && (function () { return config.sessionExpirationMs; }),
                        cookieDomain: config.cookieDomain && (function () { return config.cookieDomain; }),
                        namePrefix: config.namePrefix && (function () { return config.namePrefix; }),
                        sessionAsGuid: (function () { return config.sessionAsGuid; }),
                        idLength: (function () { return config.idLength ? config.idLength : 22; })
                    };
                }
                function _initializeAutomaticSession() {
                    var cookie = cookieMgr.get(_storageNamePrefix());
                    if (cookie && isFunction(cookie.split)) {
                        _initializeAutomaticSessionWithData(cookie);
                    }
                    else {
                        var storage = getStorage(_logger, _storageNamePrefix());
                        if (storage) {
                            _initializeAutomaticSessionWithData(storage);
                        }
                    }
                    if (!_self.automaticSession.getId()) {
                        _renew();
                    }
                }
                function _initializeAutomaticSessionWithData(sessionData) {
                    var automaticSession = _self.automaticSession;
                    var params = sessionData.split("|");
                    if (params.length > 0) {
                        automaticSession.setId(params[0]);
                    }
                    try {
                        if (params.length > 1) {
                            var acq = +params[1];
                            automaticSession.acquisitionDate = +new Date(acq);
                            automaticSession.acquisitionDate = automaticSession.acquisitionDate > 0 ? automaticSession.acquisitionDate : 0;
                        }
                        if (params.length > 2) {
                            var renewal = +params[2];
                            automaticSession.renewalDate = +new Date(renewal);
                            automaticSession.renewalDate = automaticSession.renewalDate > 0 ? automaticSession.renewalDate : 0;
                        }
                    }
                    catch (e) {
                        _throwInternal(_logger, 1 , 510 , "Error parsing ai_session cookie, session will be reset: " + e);
                    }
                    if (automaticSession.renewalDate === 0) {
                        _throwInternal(_logger, 2 , 517 , "AI session renewal date is 0, session will be reset.");
                    }
                }
                function _renew() {
                    var automaticSession = _self.automaticSession;
                    var now = new Date().getTime();
                    var sessionAsGuid = _self.config.sessionAsGuid();
                    if (!isUndefined(sessionAsGuid) && sessionAsGuid) {
                        if (!isBoolean(sessionAsGuid)) {
                            automaticSession.setId(createGuid(sessionAsGuid));
                        }
                        else {
                            automaticSession.setId(createGuid());
                        }
                    }
                    else {
                        automaticSession.setId(newId((functionalConfig && functionalConfig.idLength) ? functionalConfig.idLength() : 22));
                    }
                    automaticSession.acquisitionDate = now;
                    automaticSession.renewalDate = now;
                    _setCookie(automaticSession.getId(), automaticSession.acquisitionDate, automaticSession.renewalDate);
                    if (!canUseLocalStorage()) {
                        _throwInternal(_logger, 2 , 505 , "Browser does not support local storage. Session durations will be inaccurate.");
                    }
                }
                function _setCookie(guid, acq, renewal) {
                    var acquisitionExpiry = acq + _self.config.sessionExpirationMs();
                    var renewalExpiry = renewal + _self.config.sessionRenewalMs();
                    var cookieExpiry = new Date();
                    var cookie = [guid, acq, renewal];
                    if (acquisitionExpiry < renewalExpiry) {
                        cookieExpiry.setTime(acquisitionExpiry);
                    }
                    else {
                        cookieExpiry.setTime(renewalExpiry);
                    }
                    var cookieDomain = _self.config.cookieDomain ? _self.config.cookieDomain() : null;
                    cookieMgr.set(_storageNamePrefix(), cookie.join("|") + ";expires=" + cookieExpiry.toUTCString(), null, cookieDomain);
                    _cookieUpdatedTimestamp = new Date().getTime();
                }
                function _setStorage(guid, acq, renewal) {
                    setStorage(_logger, _storageNamePrefix(), [guid, acq, renewal].join("|"));
                }
            });
        }
        SessionManager.acquisitionSpan = 86400000;
        SessionManager.renewalSpan = 1800000;
        SessionManager.cookieUpdateInterval = 60000;
        return SessionManager;
    }());

    var defaultFlightIdNameSpaces = [
        "AX",
        "EX",
        "SF",
        "CS",
        "CF",
        "CT",
        "CU",
        "DC",
        "DF",
        "H5",
        "HL",
        "WS",
        "WP"
    ];
    function _validateAppExpId(appExpIdNew, flightIdNameSpaces) {
        if (flightIdNameSpaces === void 0) { flightIdNameSpaces = defaultFlightIdNameSpaces; }
        var appExpId = null;
        if (appExpIdNew) {
            var expIdArray = appExpIdNew.split(",");
            for (var i = 0; i < expIdArray.length; i++) {
                if (_isValidAppFlightId(expIdArray[i], flightIdNameSpaces)) {
                    if (!appExpId) {
                        appExpId = expIdArray[i];
                    }
                    else {
                        appExpId += "," + expIdArray[i];
                    }
                }
            }
        }
        return appExpId;
    }
    function _isValidAppFlightId(appFlightId, flightIdNameSpaces) {
        if (flightIdNameSpaces === void 0) { flightIdNameSpaces = defaultFlightIdNameSpaces; }
        if (!appFlightId || appFlightId.length < 4) {
            return false;
        }
        var isValid = false;
        var MAXFLIGHTIDLENGTH = 256;
        var curNameSpace = (appFlightId.substring(0, 3)).toString().toUpperCase();
        for (var i = 0; i < flightIdNameSpaces.length; i++) {
            if (flightIdNameSpaces[i] + ":" === curNameSpace && appFlightId.length <= MAXFLIGHTIDLENGTH) {
                isValid = true;
                break;
            }
        }
        return isValid;
    }
    function _getExpId() {
        return this.getExpId();
    }
    var Application = /** @class */ (function () {
        function Application(propertiesConfig, core) {
            var _appExpId = null;
            var flightIdNameSpaces = defaultFlightIdNameSpaces.slice(0);
            var expIdCookieName = "Treatments";
            var _cookieMgr = safeGetCookieMgr(core);
            var _propertiesConfig = propertiesConfig;
            dynamicProto(Application, this, function (_self) {
                if (hasDocument()) {
                    var documentElement = getDocument().documentElement;
                    if (documentElement) {
                        _self.locale = documentElement.lang;
                    }
                }
                _self.env = propertiesConfig.env ? propertiesConfig.env : _getMetaDataFromDOM("awa-")["env"];
                _self.getExpId = function () {
                    return _propertiesConfig.expId ? _readExpIdFromCoreData(_propertiesConfig.expId) : _readExpIdFromCookie();
                };
                function _getMetaDataFromDOM(prefix) {
                    var metaElements;
                    var metaData = {};
                    var doc = getDocument();
                    if (doc) {
                        metaElements = doc && doc.querySelectorAll("meta");
                        for (var i = 0; i < metaElements.length; i++) {
                            var meta = metaElements[i];
                            if (meta.name) {
                                var mt = meta.name.toLowerCase();
                                if (mt.indexOf(prefix) === 0) {
                                    var name = meta.name.replace(prefix, "");
                                    metaData[name] = meta.content;
                                }
                            }
                        }
                    }
                    return metaData;
                }
                function _setAppExpId(appExpIdNew) {
                    if (appExpIdNew === _appExpId) {
                        return;
                    }
                    _appExpId = _validateAppExpId(appExpIdNew, flightIdNameSpaces);
                }
                function _readExpIdFromCookie() {
                    var cookieValue = getCookieValue(_cookieMgr, expIdCookieName);
                    _setAppExpId(cookieValue);
                    return _appExpId;
                }
                function _readExpIdFromCoreData(expId) {
                    _setAppExpId(expId);
                    return _appExpId;
                }
            });
        }
        Application.validateAppExpId = _validateAppExpId;
        Application._staticInit = (function () {
            objDefineAccessors(Application.prototype, "expId", _getExpId);
        })();
        return Application;
    }());

    var Cloud = /** @class */ (function () {
        function Cloud() {
        }
        return Cloud;
    }());

    var Device = /** @class */ (function () {
        function Device() {
        }
        return Device;
    }());

    function _getMsfpc() {
        return this.getMsfpc();
    }
    function _getAnid() {
        return this.getAnid();
    }
    var IntWeb = /** @class */ (function () {
        function IntWeb(propertiesConfig, core) {
            var _cookieMgr = safeGetCookieMgr(core);
            dynamicProto(IntWeb, this, function (_self) {
                if (propertiesConfig.serviceName) {
                    _self.serviceName = propertiesConfig.serviceName;
                }
                _self.getMsfpc = function () {
                    return getCookieValue(_cookieMgr, "MSFPC");
                };
                _self.getAnid = function () {
                    return getCookieValue(_cookieMgr, "ANON").slice(0, 34);
                };
            });
        }
        IntWeb._staticInit = (function () {
            var proto = IntWeb.prototype;
            objDefineAccessors(proto, "msfpc", _getMsfpc);
            objDefineAccessors(proto, "anid", _getAnid);
        })();
        return IntWeb;
    }());

    var Loc = /** @class */ (function () {
        function Loc() {
            var timeZone = new Date().getTimezoneOffset();
            var minutes = timeZone % 60;
            var hours = (timeZone - minutes) / 60;
            var timeZonePrefix = "+";
            if (hours > 0) {
                timeZonePrefix = "-";
            }
            hours = Math.abs(hours);
            minutes = Math.abs(minutes);
            this.tz = timeZonePrefix + (hours < 10 ? "0" + hours : hours.toString()) + ":"
                + (minutes < 10 ? "0" + minutes : minutes.toString());
        }
        return Loc;
    }());

    var OSNAMEREGEX = {
        WIN: /(windows|win32)/i,
        WINRT: / arm;/i,
        WINPHONE: /windows\sphone\s\d+\.\d+/i,
        OSX: /(macintosh|mac os x)/i,
        IOS: /(ipad|iphone|ipod)(?=.*like mac os x)/i,
        LINUX: /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,
        ANDROID: /android/i,
        CROS: /CrOS/i
    };
    var VERSION_MAPPINGS = {
        "5.1": "XP",
        "6.0": "Vista",
        "6.1": "7",
        "6.2": "8",
        "6.3": "8.1",
        "10.0": "10"
    };
    var REGEX_VERSION$1 = "([\\d,.]+)";
    var REGEX_VERSION_MAC = "([\\d,_,.]+)";
    var UNKNOWN$1 = "Unknown";
    var OSNAMES = [
        { r: OSNAMEREGEX.WINPHONE, os: "Windows Phone" },
        { r: OSNAMEREGEX.WINRT, os: "Windows RT" },
        { r: OSNAMEREGEX.WIN, os: "Windows"  },
        { r: OSNAMEREGEX.IOS, os: "iOS"  },
        { r: OSNAMEREGEX.ANDROID, os: "Android"  },
        { r: OSNAMEREGEX.LINUX, os: "Linux" },
        { r: OSNAMEREGEX.CROS, os: "Chrome OS" },
        { s: "x11", os: "Unix" },
        { s: "blackberry", os: "BlackBerry" },
        { s: "symbian", os: "Symbian" },
        { s: "nokia", os: "Nokia" },
        { r: OSNAMEREGEX.OSX, os: "Mac OS X"  }
    ];
    function _getOsName(lowerCaseUserAgent) {
        for (var lp = 0; lp < OSNAMES.length; lp++) {
            var match = OSNAMES[lp];
            if (match.r && lowerCaseUserAgent.match(match.r)) {
                return match.os;
            }
            else if (match.s && lowerCaseUserAgent.indexOf(match.s) !== -1) {
                return match.os;
            }
        }
        return UNKNOWN$1;
    }
    function _getOsVersion(userAgent, osName) {
        if (osName === "Windows" ) {
            return _getGenericOsVersion(userAgent, "Windows NT");
        }
        if (osName === "Android" ) {
            return _getGenericOsVersion(userAgent, osName);
        }
        if (osName === "Mac OS X" ) {
            return _getMacOsxVersion(userAgent);
        }
        if (osName === "iOS" ) {
            return _getIosVersion(userAgent);
        }
        return UNKNOWN$1;
    }
    function _getGenericOsVersion(userAgent, osName) {
        var ntVersionMatches = userAgent.match(new RegExp(osName + " " + REGEX_VERSION$1));
        if (ntVersionMatches) {
            if (VERSION_MAPPINGS[ntVersionMatches[1]]) {
                return VERSION_MAPPINGS[ntVersionMatches[1]];
            }
            return ntVersionMatches[1];
        }
        return UNKNOWN$1;
    }
    function _getMacOsxVersion(userAgent) {
        var macOsxVersionInUserAgentMatches = userAgent.match(new RegExp("Mac OS X"  + " " + REGEX_VERSION_MAC));
        if (macOsxVersionInUserAgentMatches) {
            var versionString = macOsxVersionInUserAgentMatches[1].replace(/_/g, ".");
            if (versionString) {
                var delimiter = _getDelimiter(versionString);
                if (delimiter) {
                    var components = versionString.split(delimiter);
                    return components[0];
                }
                else {
                    return versionString;
                }
            }
        }
        return UNKNOWN$1;
    }
    function _getIosVersion(userAgent) {
        var iosVersionInUserAgentMatches = userAgent.match(new RegExp("OS " + REGEX_VERSION_MAC));
        if (iosVersionInUserAgentMatches) {
            var versionString = iosVersionInUserAgentMatches[1].replace(/_/g, ".");
            if (versionString) {
                var delimiter = _getDelimiter(versionString);
                if (delimiter) {
                    var components = versionString.split(delimiter);
                    return components[0];
                }
                else {
                    return versionString;
                }
            }
        }
        return UNKNOWN$1;
    }
    function _getDelimiter(versionString) {
        if (versionString.indexOf(".") > -1) {
            return ".";
        }
        if (versionString.indexOf("_") > -1) {
            return "_";
        }
        return null;
    }
    var OperatingSystem = /** @class */ (function () {
        function OperatingSystem(propertiesConfig) {
            if (propertiesConfig.populateOperatingSystemInfo) {
                var self_1 = this;
                var theNav = getNavigator() || {};
                var userAgent = propertiesConfig.userAgent || theNav.userAgent || "";
                var userAgentData = propertiesConfig.userAgentData || theNav.userAgentData || {};
                if (userAgent) {
                    var osName = _getOsName(userAgent.toLowerCase());
                    self_1.name = osName;
                    self_1.ver = _getOsVersion(userAgent, osName);
                }
                if ((!self_1.name || self_1.name === UNKNOWN$1) && isString(userAgentData.platform)) {
                    self_1.name = userAgentData.platform;
                }
            }
        }
        return OperatingSystem;
    }());

    var DEVICE_ID_COOKIE = "MicrosoftApplicationsTelemetryDeviceId";
    function _saveData(mgr, propertyStorage, name, value) {
        if (propertyStorage) {
            propertyStorage.setProperty(name, value);
        }
        else {
            mgr.set(name, value, 31536000);
        }
    }
    function _getData(mgr, propertyStorage, name) {
        if (propertyStorage) {
            return propertyStorage.getProperty(name) || "";
        }
        return getCookieValue(mgr, name);
    }
    var Sdk = /** @class */ (function () {
        function Sdk(coreConfig, core) {
            var _sequenceId = 0;
            dynamicProto(Sdk, this, function (_self) {
                var propertyStorage = coreConfig.propertyStorageOverride;
                _self.seq = _sequenceId;
                _self.epoch = random32(false).toString();
                var mgr = safeGetCookieMgr(core, coreConfig);
                if (mgr.isEnabled() || propertyStorage) {
                    var deviceId = _getData(mgr, propertyStorage, DEVICE_ID_COOKIE);
                    if (!deviceId) {
                        deviceId = newGuid();
                    }
                    _saveData(mgr, propertyStorage, DEVICE_ID_COOKIE, deviceId);
                    _self.installId = deviceId;
                }
                else {
                    mgr.purge(DEVICE_ID_COOKIE);
                }
                _self.getSequenceId = function () {
                    return ++_sequenceId;
                };
            });
        }
        Sdk.__ieDyn=1;
        return Sdk;
    }());

    var Trace$1 = /** @class */ (function () {
        function Trace(propertiesConfig, id, parentId, name) {
            var self = this;
            self.traceId = id || generateW3CId();
            if (propertiesConfig.enableDistributedTracing && !parentId) {
                parentId = generateW3CId().substring(0, 16);
            }
            self.parentId = parentId;
            if (propertiesConfig.enableApplicationInsightsTrace) {
                self.name = name;
                var loc = getLocation();
                if (loc && loc.pathname) {
                    self.name = loc.pathname;
                }
            }
        }
        return Trace;
    }());

    var strSetLocalId = "setLocalId";
    function _getLocalId() {
        return this.getLocalId();
    }
    function _setLocalId(value) {
        this[strSetLocalId](value);
    }
    var User = /** @class */ (function () {
        function User(coreConfig, propertiesConfig, core) {
            var _propertiesConfig = propertiesConfig;
            var _customLocalId;
            var _cookieMgr = safeGetCookieMgr(core, coreConfig);
            dynamicProto(User, this, function (_self) {
                if (_cookieMgr && _cookieMgr.isEnabled()) {
                    _populateMuidFromCookie();
                    if (_propertiesConfig.enableApplicationInsightsUser) {
                        var aiUser = getCookieValue(_cookieMgr, User.userCookieName);
                        if (aiUser) {
                            var params = aiUser.split(User.cookieSeparator);
                            if (params.length > 0) {
                                _self.id = params[0];
                            }
                        }
                        if (!_self.id) {
                            _self.id = newId((coreConfig && !isUndefined(coreConfig.idLength)) ? coreConfig.idLength : 22);
                            var acqStr = toISOString(new Date());
                            _self.accountAcquisitionDate = acqStr;
                            var newCookie = [_self.id, acqStr];
                            var cookieDomain = _propertiesConfig.cookieDomain ? _propertiesConfig.cookieDomain : undefined;
                            _cookieMgr.set(User.userCookieName, newCookie.join(User.cookieSeparator), 31536000, cookieDomain);
                        }
                    }
                }
                if (typeof navigator !== "undefined") {
                    var nav = navigator;
                    _self.locale = nav.userLanguage || nav.language;
                }
                _self.getLocalId = function () {
                    if (_customLocalId) {
                        return _customLocalId;
                    }
                    return _populateMuidFromCookie();
                };
                _self[strSetLocalId] = function (value) {
                    _customLocalId = value;
                };
                function _populateMuidFromCookie() {
                    if (!_propertiesConfig.hashIdentifiers && !_propertiesConfig.dropIdentifiers) {
                        var muidValue = getCookieValue(_cookieMgr, "MUID");
                        if (muidValue) {
                            _customLocalId = "t:" + muidValue;
                        }
                    }
                    return _customLocalId;
                }
            });
        }
        User.cookieSeparator = "|";
        User.userCookieName = "ai_user";
        User._staticInit = (function () {
            objDefineAccessors(User.prototype, "localId", _getLocalId, _setLocalId);
        })();
        return User;
    }());

    var HASH_IDENTIFIERS_FLAG = 0x100000;
    var DROP_IDENTIFIERS_FLAG = 0x200000;
    var Utc = /** @class */ (function () {
        function Utc(propertiesConfig) {
            var self = this;
            self.popSample = 100;
            self.eventFlags = 0;
            if (propertiesConfig.hashIdentifiers) {
                self.eventFlags = self.eventFlags | HASH_IDENTIFIERS_FLAG;
            }
            if (propertiesConfig.dropIdentifiers) {
                self.eventFlags = self.eventFlags | DROP_IDENTIFIERS_FLAG;
            }
        }
        return Utc;
    }());

    var REGEX_VERSION = "([\\d,.]+)";
    var UNKNOWN = "Unknown";
    var EDGE_CHROMIUM = "Edg/";
    var USER_AGENTS = [
        { ua: "OPR/", b: "Opera"  },
        { ua: "PhantomJS" , b: "PhantomJS"  },
        { ua: "Edge" , b: "Edge"  },
        { ua: EDGE_CHROMIUM, b: "Edge"  },
        { ua: "Electron" , b: "Electron"  },
        { ua: "Chrome" , b: "Chrome"  },
        { ua: "Trident", b: "MSIE"  },
        { ua: "MSIE ", b: "MSIE"  },
        { ua: "Firefox" , b: "Firefox"  },
        { ua: "Safari" , b: "Safari"  },
        { ua: "SkypeShell" , b: "SkypeShell"  }
    ];
    var BRANDS = [
        { br: "Microsoft Edge", b: "Edge"  },
        { br: "Google Chrome", b: "Chrome"  },
        { br: "Opera", b: "Opera"  }
    ];
    function _userAgentContainsString(searchString, userAgent) {
        return userAgent.indexOf(searchString) > -1;
    }
    function _getBrandVersion(match, brands) {
        for (var lp = 0; lp < brands.length; lp++) {
            if (match == brands[lp].brand) {
                return brands[lp].version;
            }
        }
        return null;
    }
    function _getBrowserName(userAgent) {
        if (userAgent) {
            for (var lp = 0; lp < USER_AGENTS.length; lp++) {
                var ua = USER_AGENTS[lp].ua;
                if (_userAgentContainsString(ua, userAgent)) {
                    return USER_AGENTS[lp].b;
                }
            }
        }
        return UNKNOWN;
    }
    function _getBrowserVersion(userAgent, browserName) {
        if (browserName === "MSIE" ) {
            return _getIeVersion(userAgent);
        }
        return _getOtherVersion(browserName, userAgent);
    }
    function _getIeVersion(userAgent) {
        var classicIeVersionMatches = userAgent.match(new RegExp("MSIE"  + " " + REGEX_VERSION));
        if (classicIeVersionMatches) {
            return classicIeVersionMatches[1];
        }
        var ieVersionMatches = userAgent.match(new RegExp("rv:" + REGEX_VERSION));
        if (ieVersionMatches) {
            return ieVersionMatches[1];
        }
    }
    function _getOtherVersion(browserString, userAgent) {
        if (browserString === "Safari" ) {
            browserString = "Version";
        }
        else if (browserString === "Edge" ) {
            if (_userAgentContainsString(EDGE_CHROMIUM, userAgent)) {
                browserString = "Edg";
            }
        }
        var matches = userAgent.match(new RegExp(browserString + "/" + REGEX_VERSION));
        if (matches) {
            return matches[1];
        }
        if (browserString === "Opera" ) {
            matches = userAgent.match(new RegExp("OPR/" + REGEX_VERSION));
            if (matches) {
                return matches[1];
            }
        }
        return UNKNOWN;
    }
    function _getScreenResolution() {
        var screenRes = { h: 0, w: 0 };
        var win = getWindow();
        if (win && win.screen) {
            screenRes.h = screen.height;
            screenRes.w = screen.width;
        }
        return screenRes;
    }
    function _getUserConsent() {
        return this.getUserConsent();
    }
    var Web = /** @class */ (function () {
        function Web(propertiesConfig, core) {
            var _cookieMgr = safeGetCookieMgr(core);
            var _propertiesConfig = propertiesConfig || {};
            dynamicProto(Web, this, function (_self) {
                var windowLocation = getLocation();
                if (windowLocation) {
                    var domain = windowLocation.hostname;
                    if (domain) {
                        _self.domain = windowLocation.protocol === "file:" ? "local" : domain;
                    }
                }
                if (_propertiesConfig.populateBrowserInfo) {
                    var userAgent = _propertiesConfig.userAgent;
                    var userAgentBrands = (_propertiesConfig.userAgentData || {}).brands;
                    var theNav = getNavigator();
                    if (theNav) {
                        userAgent = userAgent || theNav.userAgent || "";
                        userAgentBrands = userAgentBrands || (theNav.userAgentData || {}).brands;
                    }
                    _parseUserAgent(userAgent, userAgentBrands);
                    var screenRes = _getScreenResolution();
                    _self.screenRes = screenRes.w + "X" + screenRes.h;
                }
                _self.getUserConsent = function () {
                    return _propertiesConfig.userConsented || (getCookieValue(_cookieMgr, _propertiesConfig.userConsentCookieName || "MSCC") ? true : false);
                };
                _self.getUserConsentDetails = function () {
                    try {
                        var callback = _propertiesConfig.callback;
                        if (callback && callback.userConsentDetails) {
                            var result = callback.userConsentDetails();
                            if (result) {
                                return JSON.stringify({
                                    Required: result.Required || false,
                                    Analytics: result.Analytics || false,
                                    SocialMedia: result.SocialMedia || false,
                                    Advertising: result.Advertising || false
                                });
                            }
                        }
                    }
                    catch (e) {
                    }
                    return null;
                };
                function _parseUserAgent(userAgent, userAgentBrands) {
                    if (isArray(userAgentBrands)) {
                        try {
                            for (var lp = 0; lp < BRANDS.length; lp++) {
                                var version = _getBrandVersion(BRANDS[lp].br, userAgentBrands);
                                if (version) {
                                    _self.browser = BRANDS[lp].b;
                                    _self.browserVer = version;
                                    return;
                                }
                            }
                        }
                        catch (e) {
                        }
                    }
                    if (userAgent) {
                        var browserName = _getBrowserName(userAgent);
                        _self.browser = browserName;
                        _self.browserVer = _getBrowserVersion(userAgent, browserName);
                    }
                }
                objDefineAccessors(_self, "userConsent", _self.getUserConsent);
            });
        }
        Web._staticInit = (function () {
            objDefineAccessors(Web.prototype, "userConsent", _getUserConsent);
        })();
        return Web;
    }());

    function _applyExtValues(extension, event, names, map, overwriteTarget) {
        var target = event.ext[Extensions[extension]];
        if (target) {
            objForEachKey(map, function (field, value) {
                if (isString(value) || isNumber(value) || isBoolean(value)) {
                    var targetValue = target[names[field]];
                    if (!overwriteTarget && (targetValue || isString(targetValue) || isNumber(targetValue) || isBoolean(targetValue))) {
                        value = targetValue;
                    }
                    target[names[field]] = value;
                }
            });
        }
        return target;
    }
    var TelemetryContext = /** @class */ (function () {
        function TelemetryContext(coreConfig, propertiesConfig, core) {
            dynamicProto(TelemetryContext, this, function (_self) {
                _self.app = new Application(propertiesConfig, core);
                _self.cloud = new Cloud();
                _self.user = new User(coreConfig, propertiesConfig, core);
                _self.os = new OperatingSystem(propertiesConfig);
                _self.web = new Web(propertiesConfig, core);
                var _sdk = new Sdk(coreConfig, core);
                var _intWeb = new IntWeb(propertiesConfig, core);
                var _utc = new Utc(propertiesConfig);
                _self.loc = new Loc();
                _self.device = new Device();
                var _sessionManager = new SessionManager(core, propertiesConfig);
                _self.session = new Session();
                var _distributedTraceCtx = createDistributedTraceContextFromTraceCtx(new Trace$1(propertiesConfig), _getTraceCtx());
                var _overwriteEventPartA = !(propertiesConfig || {}).eventContainExtFields;
                function _getSessionId() {
                    var session = _self.session;
                    if (session && isString(session.customId)) {
                        return session.customId;
                    }
                    _sessionManager.update();
                    var autoSession = _sessionManager.automaticSession;
                    if (autoSession) {
                        var autoId = autoSession.getId();
                        if (autoId && isString(autoId)) {
                            session.automaticId = autoId;
                        }
                    }
                    return session.automaticId;
                }
                _self.getTraceCtx = function () {
                    return _distributedTraceCtx;
                };
                _self.getSessionId = _getSessionId;
                _self.applyApplicationContext = function (event) {
                    var _a;
                    var app = _self.app;
                    _applyExtValues(4 , event, AppExtensionKeys, (_a = {},
                        _a[0 ] = app.id,
                        _a[1 ] = app.ver,
                        _a[2 ] = app.name,
                        _a[3 ] = app.locale,
                        _a[4 ] = app.getExpId(),
                        _a[5 ] = app.env,
                        _a), _overwriteEventPartA);
                };
                _self.applyUserContext = function (event) {
                    var _a;
                    var user = _self.user;
                    _applyExtValues(0 , event, UserExtensionKeys, (_a = {},
                        _a[1 ] = user.getLocalId(),
                        _a[0 ] = user.locale,
                        _a[2 ] = user.id,
                        _a), _overwriteEventPartA);
                };
                _self.applyWebContext = function (event) {
                    var _a;
                    var web = _self.web;
                    _applyExtValues(3 , event, WebExtensionKeys, (_a = {},
                        _a[0 ] = web.domain,
                        _a[1 ] = web.browser,
                        _a[2 ] = web.browserVer,
                        _a[3 ] = web.screenRes,
                        _a[5 ] = web.getUserConsentDetails(),
                        _a[4 ] = web.getUserConsent(),
                        _a), _overwriteEventPartA);
                };
                _self.applyOsContext = function (event) {
                    var _a;
                    var os = _self.os;
                    _applyExtValues(5 , event, OSExtKeys, (_a = {},
                        _a[0 ] = os.name,
                        _a[1 ] = os.ver,
                        _a), _overwriteEventPartA);
                };
                _self.applySdkContext = function (event) {
                    var _a;
                    _applyExtValues(6 , event, SDKExtKeys, (_a = {},
                        _a[2 ] = _sdk.installId,
                        _a[1 ] = _sdk.getSequenceId(),
                        _a[3 ] = _sdk.epoch,
                        _a), _overwriteEventPartA);
                };
                _self.applyIntWebContext = function (event) {
                    var _a;
                    _applyExtValues(7 , event, IntWebExtKeys, (_a = {},
                        _a[0 ] = _intWeb.getMsfpc(),
                        _a[1 ] = _intWeb.getAnid(),
                        _a[2 ] = _intWeb.serviceName,
                        _a), _overwriteEventPartA);
                };
                _self.applyUtcContext = function (event) {
                    var _a;
                    var utcFields = (_a = {},
                        _a[0 ] = _utc.popSample,
                        _a);
                    if (_utc.eventFlags > 0) {
                        utcFields[1 ] = _utc.eventFlags;
                    }
                    _applyExtValues(8 , event, UtcExtKeys, utcFields, _overwriteEventPartA);
                };
                _self.applyLocContext = function (event) {
                    var _a;
                    _applyExtValues(9 , event, LocExtKeys, (_a = {},
                        _a[0 ] = _self.loc.tz,
                        _a), _overwriteEventPartA);
                };
                _self.applySessionContext = function (event) {
                    var _a;
                    _applyExtValues(4 , event, SessionExtKeys, (_a = {},
                        _a[0 ] = _getSessionId(),
                        _a), _overwriteEventPartA);
                };
                _self.applyDeviceContext = function (event) {
                    var _a;
                    var device = _self.device;
                    _applyExtValues(1 , event, DeviceExtKeys, (_a = {},
                        _a[0 ] = device.localId,
                        _a[2 ] = device.make,
                        _a[3 ] = device.model,
                        _a[1 ] = device.deviceClass,
                        _a), _overwriteEventPartA);
                };
                _self.applyCloudContext = function (event) {
                    var _a;
                    var cloud = _self.cloud;
                    _applyExtValues(10 , event, CloudExtKeys, (_a = {},
                        _a[0 ] = cloud.role,
                        _a[1 ] = cloud.roleInstance,
                        _a[2 ] = cloud.roleVer,
                        _a), _overwriteEventPartA);
                };
                _self.applyAITraceContext = function (event) {
                    var _a;
                    if (propertiesConfig.enableApplicationInsightsTrace) {
                        var distributedTrace = _getTraceCtx();
                        if (distributedTrace) {
                            _applyExtValues(2 , event, TraceExtKeys, (_a = {},
                                _a[0 ] = distributedTrace.getTraceId(),
                                _a[1 ] = distributedTrace.getName(),
                                _a[2 ] = distributedTrace.getSpanId(),
                                _a), false);
                        }
                    }
                };
                _self.applyDistributedTraceContext = function (event) {
                    var _a;
                    var distributedTrace = _getTraceCtx();
                    if (distributedTrace) {
                        var traceFields = (_a = {},
                            _a[0 ] = distributedTrace.getTraceId(),
                            _a[1 ] = distributedTrace.getSpanId(),
                            _a);
                        var traceFlags = distributedTrace.getTraceFlags();
                        if (!isNullOrUndefined(traceFlags)) {
                            traceFields[2 ] = traceFlags;
                        }
                        _applyExtValues(11 , event, DistributedTraceExtKeys, traceFields, false);
                    }
                };
                function _getTraceCtx() {
                    var traceCtx = _distributedTraceCtx;
                    if (core && core.getTraceCtx) {
                        traceCtx = core.getTraceCtx(false) || _distributedTraceCtx;
                    }
                    return traceCtx;
                }
            });
        }
        TelemetryContext.__ieDyn=1;
        return TelemetryContext;
    }());
    function createDistributedTraceContextFromTraceCtx(traceContext, parentCtx) {
        var trace = traceContext || {};
        return {
            getName: function () {
                return trace.name;
            },
            setName: function (newValue) {
                parentCtx && parentCtx.setName(newValue);
                trace.name = newValue;
            },
            getTraceId: function () {
                return trace.traceId;
            },
            setTraceId: function (newValue) {
                parentCtx && parentCtx.setTraceId(newValue);
                if (isValidTraceId(newValue)) {
                    trace.traceId = newValue;
                }
            },
            getSpanId: function () {
                return trace.parentId;
            },
            setSpanId: function (newValue) {
                parentCtx && parentCtx.setSpanId(newValue);
                if (isValidSpanId(newValue)) {
                    trace.parentId = newValue;
                }
            },
            getTraceFlags: function () {
                return trace.traceFlags;
            },
            setTraceFlags: function (newTraceFlags) {
                parentCtx && parentCtx.setTraceFlags(newTraceFlags);
                trace.traceFlags = newTraceFlags;
            }
        };
    }

    var extensions = [
        Extensions[4 ],
        Extensions[0 ],
        Extensions[3 ],
        Extensions[5 ],
        Extensions[6 ],
        Extensions[7 ],
        Extensions[8 ],
        Extensions[9 ],
        Extensions[1 ],
        Extensions[2 ],
        Extensions[11 ],
        Extensions[10 ]
    ];
    var PropertiesPlugin = /** @class */ (function (_super) {
        __extendsFn(PropertiesPlugin, _super);
        function PropertiesPlugin() {
            var _this = _super.call(this) || this;
            _this.identifier = "SystemPropertiesCollector";
            _this.priority = 3;
            _this.version = '3.2.6';
            var _context;
            var _properties;
            var _config;
            dynamicProto(PropertiesPlugin, _this, function (_self, _base) {
                _initDefaults();
                _self.initialize = function (coreConfig, core, extensions) {
                    _base.initialize(coreConfig, core, extensions);
                    _config = _self._getTelCtx().getExtCfg(_self.identifier);
                    _context = new TelemetryContext(coreConfig, _config, core);
                    if (core && core.setTraceCtx) {
                        core.setTraceCtx(_context.getTraceCtx());
                    }
                };
                _self.processTelemetry = function (event, itemCtx) {
                    setProcessTelemetryTimings(event, _self.identifier);
                    itemCtx = _self._getTelCtx(itemCtx);
                    var evtExt = event.ext = event.ext ? event.ext : {};
                    event.data = event.data ? event.data : {};
                    arrForEach(extensions, function (value) {
                        evtExt[value] = evtExt[value] || {};
                    });
                    if (_context) {
                        _context.applyApplicationContext(event);
                        _context.applyUserContext(event);
                        _context.applyWebContext(event);
                        _context.applyOsContext(event);
                        _context.applySdkContext(event);
                        _context.applyIntWebContext(event);
                        _context.applyUtcContext(event);
                        _context.applyLocContext(event);
                        _context.applySessionContext(event);
                        _context.applyDeviceContext(event);
                        if (_config.enableApplicationInsightsTrace) {
                            _context.applyAITraceContext(event);
                        }
                        if (_config.enableDistributedTracing) {
                            _context.applyDistributedTraceContext(event);
                        }
                        _context.applyCloudContext(event);
                    }
                    arrForEach(objKeys(evtExt), function (key) {
                        if (objKeys(evtExt[key]).length === 0) {
                            delete evtExt[key];
                        }
                    });
                    _addPropertiesIfAbsent(_properties, event.data);
                    _self.processNext(event, itemCtx);
                };
                _self.getPropertiesContext = function () {
                    return _context;
                };
                _self.setProperty = function (name, value) {
                    _properties[name] = value;
                };
                _self._doTeardown = function (unloadCtx, unloadState) {
                    var core = (unloadCtx || {}).core();
                    if (core && core.getTraceCtx && _context) {
                        var traceCtx = core.getTraceCtx(false);
                        if (traceCtx && traceCtx === _context.getTraceCtx()) {
                            core.setTraceCtx(null);
                        }
                    }
                    _initDefaults();
                };
                function _initDefaults() {
                    _context = null;
                    _properties = {};
                }
                function _addPropertiesIfAbsent(inputMap, outputMap) {
                    if (inputMap) {
                        objForEachKey(inputMap, function (name, inputValue) {
                            if (!outputMap[name]) {
                                outputMap[name] = inputValue;
                            }
                        });
                    }
                }
            });
            return _this;
        }
        PropertiesPlugin.__ieDyn=1;
        return PropertiesPlugin;
    }(BaseTelemetryPlugin));
    var PropertiesPlugin$1 = PropertiesPlugin;

    var userIdPrefixes = [
        "c:",
        "i:",
        "w:"
    ];
    var supportedMuidHosts = {
        "microsoft.com": "c1.microsoft.com",
        "xbox.com": "c.xbox.com",
        "live.com": "c.live.com",
        "microsoftstore.com": "c.microsoftstore.com",
        "msn.com": "c.msn.com",
        "windows.com": "c.windows.com",
        "office.com": "c.office.com"
    };
    var Id = /** @class */ (function () {
        function Id(core) {
            this.core = core;
            var lastPageViewId = createGuid();
            var internalTraceId = generateW3CId();
            var appUserId = null;
            var firstPageView = false;
            var deviceClass;
            var _cookieMgr = safeGetCookieMgr(core);
            dynamicProto(Id, this, function (_self) {
                _self.getTraceId = function () {
                    if (core && core.getTraceCtx) {
                        return core.getTraceCtx().getTraceId() || internalTraceId;
                    }
                    return internalTraceId;
                };
                _self.getLastPageViewId = function () {
                    return lastPageViewId;
                };
                _self.initializeIds = function () {
                    if (!firstPageView) {
                        firstPageView = true;
                    }
                    else {
                        lastPageViewId = createGuid();
                    }
                };
                _self.getMuidUserId = function () {
                    var muidValue = getCookieValue(_cookieMgr, "MUID");
                    return muidValue && muidValue.length ? "t:" + muidValue : muidValue;
                };
                _self.setAppUserId = function (uid) {
                    appUserId = null;
                    if (!uid) {
                        return;
                    }
                    for (var i = 0; i < userIdPrefixes.length; i++) {
                        if (userIdPrefixes[i] === uid.substring(0, 2)) {
                            appUserId = uid;
                            break;
                        }
                    }
                };
                _self.setDeviceClass = function (newDeviceClass) {
                    if (newDeviceClass) {
                        deviceClass = newDeviceClass;
                    }
                };
                _self.getDeviceClass = function () {
                    return deviceClass;
                };
                _self.getAppUserId = function () {
                    return appUserId;
                };
                _self.syncMuid = function (muidHost) {
                    var location = getLocation();
                    if (location && muidHost) {
                        var muidsrc = (location.protocol || "http:") + "//" + muidHost + "/c.gif?DI=4050&did=1&t=";
                        var document_1 = getDocument();
                        if (document_1) {
                            var img = document_1.createElement("IMG");
                            img.style.display = "none";
                            img.src = muidsrc;
                            img.hidden = "";
                            img["aria-hidden"] = "true";
                            img.role = "presentation";
                        }
                        return true;
                    }
                    return false;
                };
                _self.getMuidHost = function (rootDomain) {
                    return supportedMuidHosts[rootDomain];
                };
            });
        }
        Id.visitorId = function () {
            var userId = getCookieValue(safeGetCookieMgr(null), "MUID");
            return userId;
        };
        return Id;
    }());
    var Id$1 = Id;

    var Timespan = /** @class */ (function () {
        function Timespan() {
            this._timers = [];
        }
        Timespan.prototype._recordTimeSpan = function (counterName, isComplete) {
            var timestamp = new Date().getTime();
            if (!isComplete) {
                this._timers[counterName] = timestamp;
            }
            else {
                return timestamp - this._timers[counterName];
            }
        };
        return Timespan;
    }());
    var Timespan$1 = Timespan;

    var strNotSpecified = "not_specified";
    var strIkey = "iKey";

    function createDomEvent(eventName) {
        var event = null;
        if (isFunction(Event)) {
            event = new Event(eventName);
        }
        else {
            var doc = getDocument();
            if (doc && doc.createEvent) {
                event = doc.createEvent("Event");
                event.initEvent(eventName, true, true);
            }
        }
        return event;
    }

    var _DYN_SPLIT = "split";
    var _DYN_LENGTH$1 = "length";
    var _DYN_TO_LOWER_CASE = "toLowerCase";
    var _DYN_TO_STRING$1 = "toString";
    var _DYN_REMOVE_ITEM = "removeItem";
    var _DYN_NAME = "name";
    var _DYN_PATHNAME = "pathname";
    var _DYN_INDEX_OF = "indexOf";
    var _DYN_EXCEPTIONS = "exceptions";
    var _DYN_PARSED_STACK = "parsedStack";
    var _DYN_PROPERTIES = "properties";
    var _DYN_MEASUREMENTS = "measurements";
    var _DYN_STRINGIFY = "stringify";
    var _DYN_MESSAGE$1 = "message";
    var _DYN_SIZE_IN_BYTES = "sizeInBytes";
    var _DYN_TYPE_NAME = "typeName";
    var _DYN_SEVERITY_LEVEL = "severityLevel";
    var _DYN_PROBLEM_GROUP = "problemGroup";
    var _DYN_IS_MANUAL = "isManual";
    var _DYN__CREATE_FROM_INTERFA1 = "CreateFromInterface";
    var _DYN_HAS_FULL_STACK = "hasFullStack";
    var _DYN_LEVEL = "level";
    var _DYN_METHOD = "method";
    var _DYN_ASSEMBLY = "assembly";
    var _DYN_FILE_NAME = "fileName";
    var _DYN_LINE = "line";
    var _DYN_DURATION$1 = "duration";
    var _DYN_RECEIVED_RESPONSE = "receivedResponse";
    var _DYN_SUBSTRING = "substring";
    var _DYN_SANITIZE_KEY_AND_ADD2 = "sanitizeKeyAndAddUniqueness";
    var _DYN_SANITIZE_EXCEPTION = "sanitizeException";
    var _DYN_SANITIZE_PROPERTIES = "sanitizeProperties";
    var _DYN_SANITIZE_MEASUREMENT3 = "sanitizeMeasurements";

    var strEmpty = "";
    function stringToBoolOrDefault(str, defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        if (str === undefined || str === null) {
            return defaultValue;
        }
        return str.toString()[_DYN_TO_LOWER_CASE ]() === "true";
    }
    function msToTimeSpan(totalms) {
        if (isNaN(totalms) || totalms < 0) {
            totalms = 0;
        }
        totalms = Math.round(totalms);
        var ms = strEmpty + totalms % 1000;
        var sec = strEmpty + Math.floor(totalms / 1000) % 60;
        var min = strEmpty + Math.floor(totalms / (1000 * 60)) % 60;
        var hour = strEmpty + Math.floor(totalms / (1000 * 60 * 60)) % 24;
        var days = Math.floor(totalms / (1000 * 60 * 60 * 24));
        ms = ms[_DYN_LENGTH$1 ] === 1 ? "00" + ms : ms[_DYN_LENGTH$1 ] === 2 ? "0" + ms : ms;
        sec = sec[_DYN_LENGTH$1 ] < 2 ? "0" + sec : sec;
        min = min[_DYN_LENGTH$1 ] < 2 ? "0" + min : min;
        hour = hour[_DYN_LENGTH$1 ] < 2 ? "0" + hour : hour;
        return (days > 0 ? days + "." : strEmpty) + hour + ":" + min + ":" + sec + "." + ms;
    }
    function isCrossOriginError(message, url, lineNumber, columnNumber, error) {
        return !error && isString(message) && (message === "Script error." || message === "Script error");
    }

    var StorageType = createEnumStyle({
        LocalStorage: 0 ,
        SessionStorage: 1
    });
    createEnumStyle({
        AI: 0 ,
        AI_AND_W3C: 1 ,
        W3C: 2
    });

    var _canUseLocalStorage = undefined;
    var _canUseSessionStorage = undefined;
    function _getVerifiedStorageObject(storageType) {
        try {
            if (isNullOrUndefined(getGlobal())) {
                return null;
            }
            var uid = (new Date)[_DYN_TO_STRING$1 ]();
            var storage = getGlobalInst(storageType === StorageType.LocalStorage ? "localStorage" : "sessionStorage");
            storage.setItem(uid, uid);
            var fail = storage.getItem(uid) !== uid;
            storage[_DYN_REMOVE_ITEM ](uid);
            if (!fail) {
                return storage;
            }
        }
        catch (exception) {
        }
        return null;
    }
    function _getSessionStorageObject() {
        if (utlCanUseSessionStorage()) {
            return _getVerifiedStorageObject(StorageType.SessionStorage);
        }
        return null;
    }
    function utlDisableStorage() {
        _canUseLocalStorage = false;
        _canUseSessionStorage = false;
    }
    function utlEnableStorage() {
        _canUseLocalStorage = utlCanUseLocalStorage(true);
        _canUseSessionStorage = utlCanUseSessionStorage(true);
    }
    function utlCanUseLocalStorage(reset) {
        if (reset || _canUseLocalStorage === undefined) {
            _canUseLocalStorage = !!_getVerifiedStorageObject(StorageType.LocalStorage);
        }
        return _canUseLocalStorage;
    }
    function utlCanUseSessionStorage(reset) {
        if (reset || _canUseSessionStorage === undefined) {
            _canUseSessionStorage = !!_getVerifiedStorageObject(StorageType.SessionStorage);
        }
        return _canUseSessionStorage;
    }
    function utlGetSessionStorage(logger, name) {
        var storage = _getSessionStorageObject();
        if (storage !== null) {
            try {
                return storage.getItem(name);
            }
            catch (e) {
                _canUseSessionStorage = false;
                _throwInternal(logger, 2 , 2 , "Browser failed read of session storage. " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return null;
    }
    function utlSetSessionStorage(logger, name, data) {
        var storage = _getSessionStorageObject();
        if (storage !== null) {
            try {
                storage.setItem(name, data);
                return true;
            }
            catch (e) {
                _canUseSessionStorage = false;
                _throwInternal(logger, 2 , 4 , "Browser failed write to session storage. " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return false;
    }
    function utlRemoveSessionStorage(logger, name) {
        var storage = _getSessionStorageObject();
        if (storage !== null) {
            try {
                storage[_DYN_REMOVE_ITEM ](name);
                return true;
            }
            catch (e) {
                _canUseSessionStorage = false;
                _throwInternal(logger, 2 , 6 , "Browser failed removal of session storage item. " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return false;
    }

    var _a;
    function dataSanitizeKeyAndAddUniqueness(logger, key, map) {
        var origLength = key[_DYN_LENGTH$1 ];
        var field = dataSanitizeKey(logger, key);
        if (field[_DYN_LENGTH$1 ] !== origLength) {
            var i = 0;
            var uniqueField = field;
            while (map[uniqueField] !== undefined) {
                i++;
                uniqueField = field[_DYN_SUBSTRING ](0, 150  - 3) + dsPadNumber(i);
            }
            field = uniqueField;
        }
        return field;
    }
    function dataSanitizeKey(logger, name) {
        var nameTrunc;
        if (name) {
            name = strTrim(name[_DYN_TO_STRING$1 ]());
            if (name[_DYN_LENGTH$1 ] > 150 ) {
                nameTrunc = name[_DYN_SUBSTRING ](0, 150 );
                _throwInternal(logger, 2 , 57 , "name is too long.  It has been truncated to " + 150  + " characters.", { name: name }, true);
            }
        }
        return nameTrunc || name;
    }
    function dataSanitizeString(logger, value, maxLength) {
        if (maxLength === void 0) { maxLength = 1024 ; }
        var valueTrunc;
        if (value) {
            maxLength = maxLength ? maxLength : 1024 ;
            value = strTrim(value);
            if (value.toString()[_DYN_LENGTH$1 ] > maxLength) {
                valueTrunc = value[_DYN_TO_STRING$1 ]()[_DYN_SUBSTRING ](0, maxLength);
                _throwInternal(logger, 2 , 61 , "string value is too long. It has been truncated to " + maxLength + " characters.", { value: value }, true);
            }
        }
        return valueTrunc || value;
    }
    function dataSanitizeUrl(logger, url) {
        return dataSanitizeInput(logger, url, 2048 , 66 );
    }
    function dataSanitizeMessage(logger, message) {
        var messageTrunc;
        if (message) {
            if (message[_DYN_LENGTH$1 ] > 32768 ) {
                messageTrunc = message[_DYN_SUBSTRING ](0, 32768 );
                _throwInternal(logger, 2 , 56 , "message is too long, it has been truncated to " + 32768  + " characters.", { message: message }, true);
            }
        }
        return messageTrunc || message;
    }
    function dataSanitizeException(logger, exception) {
        var exceptionTrunc;
        if (exception) {
            var value = "" + exception;
            if (value[_DYN_LENGTH$1 ] > 32768 ) {
                exceptionTrunc = value[_DYN_SUBSTRING ](0, 32768 );
                _throwInternal(logger, 2 , 52 , "exception is too long, it has been truncated to " + 32768  + " characters.", { exception: exception }, true);
            }
        }
        return exceptionTrunc || exception;
    }
    function dataSanitizeProperties(logger, properties) {
        if (properties) {
            var tempProps_1 = {};
            objForEachKey(properties, function (prop, value) {
                if (isObject(value) && hasJSON()) {
                    try {
                        value = getJSON()[_DYN_STRINGIFY ](value);
                    }
                    catch (e) {
                        _throwInternal(logger, 2 , 49 , "custom property is not valid", { exception: e }, true);
                    }
                }
                value = dataSanitizeString(logger, value, 8192 );
                prop = dataSanitizeKeyAndAddUniqueness(logger, prop, tempProps_1);
                tempProps_1[prop] = value;
            });
            properties = tempProps_1;
        }
        return properties;
    }
    function dataSanitizeMeasurements(logger, measurements) {
        if (measurements) {
            var tempMeasurements_1 = {};
            objForEachKey(measurements, function (measure, value) {
                measure = dataSanitizeKeyAndAddUniqueness(logger, measure, tempMeasurements_1);
                tempMeasurements_1[measure] = value;
            });
            measurements = tempMeasurements_1;
        }
        return measurements;
    }
    function dataSanitizeId(logger, id) {
        return id ? dataSanitizeInput(logger, id, 128 , 69 )[_DYN_TO_STRING$1 ]() : id;
    }
    function dataSanitizeInput(logger, input, maxLength, _msgId) {
        var inputTrunc;
        if (input) {
            input = strTrim(input);
            if (input[_DYN_LENGTH$1 ] > maxLength) {
                inputTrunc = input[_DYN_SUBSTRING ](0, maxLength);
                _throwInternal(logger, 2 , _msgId, "input is too long, it has been truncated to " + maxLength + " characters.", { data: input }, true);
            }
        }
        return inputTrunc || input;
    }
    function dsPadNumber(num) {
        var s = "00" + num;
        return s.substr(s[_DYN_LENGTH$1 ] - 3);
    }
    (_a = {
            MAX_NAME_LENGTH: 150 ,
            MAX_ID_LENGTH: 128 ,
            MAX_PROPERTY_LENGTH: 8192 ,
            MAX_STRING_LENGTH: 1024 ,
            MAX_URL_LENGTH: 2048 ,
            MAX_MESSAGE_LENGTH: 32768 ,
            MAX_EXCEPTION_LENGTH: 32768
        },
        _a[_DYN_SANITIZE_KEY_AND_ADD2 ] = dataSanitizeKeyAndAddUniqueness,
        _a.sanitizeKey = dataSanitizeKey,
        _a.sanitizeString = dataSanitizeString,
        _a.sanitizeUrl = dataSanitizeUrl,
        _a.sanitizeMessage = dataSanitizeMessage,
        _a[_DYN_SANITIZE_EXCEPTION ] = dataSanitizeException,
        _a[_DYN_SANITIZE_PROPERTIES ] = dataSanitizeProperties,
        _a[_DYN_SANITIZE_MEASUREMENT3 ] = dataSanitizeMeasurements,
        _a.sanitizeId = dataSanitizeId,
        _a.sanitizeInput = dataSanitizeInput,
        _a.padNumber = dsPadNumber,
        _a.trim = strTrim,
        _a);

    var _document = getDocument() || {};
    var _htmlAnchorIdx = 0;
    var _htmlAnchorElement = [null, null, null, null, null];
    function urlParseUrl(url) {
        var anchorIdx = _htmlAnchorIdx;
        var anchorCache = _htmlAnchorElement;
        var tempAnchor = anchorCache[anchorIdx];
        if (!_document.createElement) {
            tempAnchor = { host: urlParseHost(url, true) };
        }
        else if (!anchorCache[anchorIdx]) {
            tempAnchor = anchorCache[anchorIdx] = _document.createElement("a");
        }
        tempAnchor.href = url;
        anchorIdx++;
        if (anchorIdx >= anchorCache[_DYN_LENGTH$1 ]) {
            anchorIdx = 0;
        }
        _htmlAnchorIdx = anchorIdx;
        return tempAnchor;
    }
    function urlParseHost(url, inclPort) {
        var fullHost = urlParseFullHost(url, inclPort) || "";
        if (fullHost) {
            var match = fullHost.match(/(www[0-9]?\.)?(.[^/:]+)(\:[\d]+)?/i);
            if (match != null && match[_DYN_LENGTH$1 ] > 3 && isString(match[2]) && match[2][_DYN_LENGTH$1 ] > 0) {
                return match[2] + (match[3] || "");
            }
        }
        return fullHost;
    }
    function urlParseFullHost(url, inclPort) {
        var result = null;
        if (url) {
            var match = url.match(/(\w*):\/\/(.[^/:]+)(\:[\d]+)?/i);
            if (match != null && match[_DYN_LENGTH$1 ] > 2 && isString(match[2]) && match[2][_DYN_LENGTH$1 ] > 0) {
                result = match[2] || "";
                if (inclPort && match[_DYN_LENGTH$1 ] > 2) {
                    var protocol = (match[1] || "")[_DYN_TO_LOWER_CASE ]();
                    var port = match[3] || "";
                    if (protocol === "http" && port === ":80") {
                        port = "";
                    }
                    else if (protocol === "https" && port === ":443") {
                        port = "";
                    }
                    result += port;
                }
            }
        }
        return result;
    }

    function AjaxHelperParseDependencyPath(logger, absoluteUrl, method, commandName) {
        var target, name = commandName, data = commandName;
        if (absoluteUrl && absoluteUrl[_DYN_LENGTH$1 ] > 0) {
            var parsedUrl = urlParseUrl(absoluteUrl);
            target = parsedUrl.host;
            if (!name) {
                if (parsedUrl[_DYN_PATHNAME ] != null) {
                    var pathName = (parsedUrl.pathname[_DYN_LENGTH$1 ] === 0) ? "/" : parsedUrl[_DYN_PATHNAME ];
                    if (pathName.charAt(0) !== "/") {
                        pathName = "/" + pathName;
                    }
                    data = parsedUrl[_DYN_PATHNAME ];
                    name = dataSanitizeString(logger, method ? method + " " + pathName : pathName);
                }
                else {
                    name = dataSanitizeString(logger, absoluteUrl);
                }
            }
        }
        else {
            target = commandName;
            name = commandName;
        }
        return {
            target: target,
            name: name,
            data: data
        };
    }
    function dateTimeUtilsDuration(start, end) {
        var result = null;
        if (start !== 0 && end !== 0 && !isNullOrUndefined(start) && !isNullOrUndefined(end)) {
            result = end - start;
        }
        return result;
    }
    function createDistributedTraceContextFromTrace(telemetryTrace, parentCtx) {
        var trace = telemetryTrace || {};
        return {
            getName: function () {
                return trace[_DYN_NAME ];
            },
            setName: function (newValue) {
                parentCtx && parentCtx.setName(newValue);
                trace[_DYN_NAME ] = newValue;
            },
            getTraceId: function () {
                return trace.traceID;
            },
            setTraceId: function (newValue) {
                parentCtx && parentCtx.setTraceId(newValue);
                if (isValidTraceId(newValue)) {
                    trace.traceID = newValue;
                }
            },
            getSpanId: function () {
                return trace.parentID;
            },
            setSpanId: function (newValue) {
                parentCtx && parentCtx.setSpanId(newValue);
                if (isValidSpanId(newValue)) {
                    trace.parentID = newValue;
                }
            },
            getTraceFlags: function () {
                return trace.traceFlags;
            },
            setTraceFlags: function (newTraceFlags) {
                parentCtx && parentCtx.setTraceFlags(newTraceFlags);
                trace.traceFlags = newTraceFlags;
            }
        };
    }

    var Event$1 = /** @class */ (function () {
        function Event(logger, name, properties, measurements) {
            this.aiDataContract = {
                ver: 1 ,
                name: 1 ,
                properties: 0 ,
                measurements: 0
            };
            var _self = this;
            _self.ver = 2;
            _self[_DYN_NAME ] = dataSanitizeString(logger, name) || strNotSpecified;
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
        }
        Event.envelopeType = "Microsoft.ApplicationInsights.{0}.Event";
        Event.dataType = "EventData";
        return Event;
    }());

    var NoMethod = "<no_method>";
    var strError = "error";
    var strStack = "stack";
    var strStackDetails = "stackDetails";
    var strErrorSrc = "errorSrc";
    var strMessage = "message";
    var strDescription = "description";
    function _stringify(value, convertToString) {
        var result = value;
        if (result && !isString(result)) {
            if (JSON && JSON[_DYN_STRINGIFY ]) {
                result = JSON[_DYN_STRINGIFY ](value);
                if (convertToString && (!result || result === "{}")) {
                    if (isFunction(value[_DYN_TO_STRING$1 ])) {
                        result = value[_DYN_TO_STRING$1 ]();
                    }
                    else {
                        result = "" + value;
                    }
                }
            }
            else {
                result = "" + value + " - (Missing JSON.stringify)";
            }
        }
        return result || "";
    }
    function _formatMessage(theEvent, errorType) {
        var evtMessage = theEvent;
        if (theEvent) {
            if (evtMessage && !isString(evtMessage)) {
                evtMessage = theEvent[strMessage] || theEvent[strDescription] || evtMessage;
            }
            if (evtMessage && !isString(evtMessage)) {
                evtMessage = _stringify(evtMessage, true);
            }
            if (theEvent["filename"]) {
                evtMessage = evtMessage + " @" + (theEvent["filename"] || "") + ":" + (theEvent["lineno"] || "?") + ":" + (theEvent["colno"] || "?");
            }
        }
        if (errorType && errorType !== "String" && errorType !== "Object" && errorType !== "Error" && (evtMessage || "")[_DYN_INDEX_OF ](errorType) === -1) {
            evtMessage = errorType + ": " + evtMessage;
        }
        return evtMessage || "";
    }
    function _isExceptionDetailsInternal(value) {
        try {
            if (isObject(value)) {
                return "hasFullStack" in value && "typeName" in value;
            }
        }
        catch (e) {
        }
        return false;
    }
    function _isExceptionInternal(value) {
        try {
            if (isObject(value)) {
                return ("ver" in value && "exceptions" in value && "properties" in value);
            }
        }
        catch (e) {
        }
        return false;
    }
    function _isStackDetails(details) {
        return details && details.src && isString(details.src) && details.obj && isArray(details.obj);
    }
    function _convertStackObj(errorStack) {
        var src = errorStack || "";
        if (!isString(src)) {
            if (isString(src[strStack])) {
                src = src[strStack];
            }
            else {
                src = "" + src;
            }
        }
        var items = src[_DYN_SPLIT ]("\n");
        return {
            src: src,
            obj: items
        };
    }
    function _getOperaStack(errorMessage) {
        var stack = [];
        var lines = errorMessage[_DYN_SPLIT ]("\n");
        for (var lp = 0; lp < lines[_DYN_LENGTH$1 ]; lp++) {
            var entry = lines[lp];
            if (lines[lp + 1]) {
                entry += "@" + lines[lp + 1];
                lp++;
            }
            stack.push(entry);
        }
        return {
            src: errorMessage,
            obj: stack
        };
    }
    function _getStackFromErrorObj(errorObj) {
        var details = null;
        if (errorObj) {
            try {
                if (errorObj[strStack]) {
                    details = _convertStackObj(errorObj[strStack]);
                }
                else if (errorObj[strError] && errorObj[strError][strStack]) {
                    details = _convertStackObj(errorObj[strError][strStack]);
                }
                else if (errorObj["exception"] && errorObj.exception[strStack]) {
                    details = _convertStackObj(errorObj.exception[strStack]);
                }
                else if (_isStackDetails(errorObj)) {
                    details = errorObj;
                }
                else if (_isStackDetails(errorObj[strStackDetails])) {
                    details = errorObj[strStackDetails];
                }
                else if (window && window["opera"] && errorObj[strMessage]) {
                    details = _getOperaStack(errorObj[_DYN_MESSAGE$1 ]);
                }
                else if (isString(errorObj)) {
                    details = _convertStackObj(errorObj);
                }
                else {
                    var evtMessage = errorObj[strMessage] || errorObj[strDescription] || "";
                    if (isString(errorObj[strErrorSrc])) {
                        if (evtMessage) {
                            evtMessage += "\n";
                        }
                        evtMessage += " from " + errorObj[strErrorSrc];
                    }
                    if (evtMessage) {
                        details = _convertStackObj(evtMessage);
                    }
                }
            }
            catch (e) {
                details = _convertStackObj(e);
            }
        }
        return details || {
            src: "",
            obj: null
        };
    }
    function _formatStackTrace(stackDetails) {
        var stack = "";
        if (stackDetails) {
            if (stackDetails.obj) {
                arrForEach(stackDetails.obj, function (entry) {
                    stack += entry + "\n";
                });
            }
            else {
                stack = stackDetails.src || "";
            }
        }
        return stack;
    }
    function _parseStack(stack) {
        var parsedStack;
        var frames = stack.obj;
        if (frames && frames[_DYN_LENGTH$1 ] > 0) {
            parsedStack = [];
            var level_1 = 0;
            var totalSizeInBytes_1 = 0;
            arrForEach(frames, function (frame) {
                var theFrame = frame[_DYN_TO_STRING$1 ]();
                if (_StackFrame.regex.test(theFrame)) {
                    var parsedFrame = new _StackFrame(theFrame, level_1++);
                    totalSizeInBytes_1 += parsedFrame[_DYN_SIZE_IN_BYTES ];
                    parsedStack.push(parsedFrame);
                }
            });
            var exceptionParsedStackThreshold = 32 * 1024;
            if (totalSizeInBytes_1 > exceptionParsedStackThreshold) {
                var left = 0;
                var right = parsedStack[_DYN_LENGTH$1 ] - 1;
                var size = 0;
                var acceptedLeft = left;
                var acceptedRight = right;
                while (left < right) {
                    var lSize = parsedStack[left][_DYN_SIZE_IN_BYTES ];
                    var rSize = parsedStack[right][_DYN_SIZE_IN_BYTES ];
                    size += lSize + rSize;
                    if (size > exceptionParsedStackThreshold) {
                        var howMany = acceptedRight - acceptedLeft + 1;
                        parsedStack.splice(acceptedLeft, howMany);
                        break;
                    }
                    acceptedLeft = left;
                    acceptedRight = right;
                    left++;
                    right--;
                }
            }
        }
        return parsedStack;
    }
    function _getErrorType(errorType) {
        var typeName = "";
        if (errorType) {
            typeName = errorType.typeName || errorType[_DYN_NAME ] || "";
            if (!typeName) {
                try {
                    var funcNameRegex = /function (.{1,200})\(/;
                    var results = (funcNameRegex).exec((errorType).constructor[_DYN_TO_STRING$1 ]());
                    typeName = (results && results[_DYN_LENGTH$1 ] > 1) ? results[1] : "";
                }
                catch (e) {
                }
            }
        }
        return typeName;
    }
    function _formatErrorCode(errorObj) {
        if (errorObj) {
            try {
                if (!isString(errorObj)) {
                    var errorType = _getErrorType(errorObj);
                    var result = _stringify(errorObj, false);
                    if (!result || result === "{}") {
                        if (errorObj[strError]) {
                            errorObj = errorObj[strError];
                            errorType = _getErrorType(errorObj);
                        }
                        result = _stringify(errorObj, true);
                    }
                    if (result[_DYN_INDEX_OF ](errorType) !== 0 && errorType !== "String") {
                        return errorType + ":" + result;
                    }
                    return result;
                }
            }
            catch (e) {
            }
        }
        return "" + (errorObj || "");
    }
    var Exception = /** @class */ (function () {
        function Exception(logger, exception, properties, measurements, severityLevel, id) {
            this.aiDataContract = {
                ver: 1 ,
                exceptions: 1 ,
                severityLevel: 0 ,
                properties: 0 ,
                measurements: 0
            };
            var _self = this;
            _self.ver = 2;
            if (!_isExceptionInternal(exception)) {
                if (!properties) {
                    properties = {};
                }
                _self[_DYN_EXCEPTIONS ] = [new _ExceptionDetails(logger, exception, properties)];
                _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
                _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
                if (severityLevel) {
                    _self[_DYN_SEVERITY_LEVEL ] = severityLevel;
                }
                if (id) {
                    _self.id = id;
                }
            }
            else {
                _self[_DYN_EXCEPTIONS ] = exception[_DYN_EXCEPTIONS ] || [];
                _self[_DYN_PROPERTIES ] = exception[_DYN_PROPERTIES ];
                _self[_DYN_MEASUREMENTS ] = exception[_DYN_MEASUREMENTS ];
                if (exception[_DYN_SEVERITY_LEVEL ]) {
                    _self[_DYN_SEVERITY_LEVEL ] = exception[_DYN_SEVERITY_LEVEL ];
                }
                if (exception.id) {
                    _self.id = exception.id;
                }
                if (exception[_DYN_PROBLEM_GROUP ]) {
                    _self[_DYN_PROBLEM_GROUP ] = exception[_DYN_PROBLEM_GROUP ];
                }
                if (!isNullOrUndefined(exception[_DYN_IS_MANUAL ])) {
                    _self[_DYN_IS_MANUAL ] = exception[_DYN_IS_MANUAL ];
                }
            }
        }
        Exception.CreateAutoException = function (message, url, lineNumber, columnNumber, error, evt, stack, errorSrc) {
            var _a;
            var errorType = _getErrorType(error || evt || message);
            return _a = {},
                _a[_DYN_MESSAGE$1 ] = _formatMessage(message, errorType),
                _a.url = url,
                _a.lineNumber = lineNumber,
                _a.columnNumber = columnNumber,
                _a.error = _formatErrorCode(error || evt || message),
                _a.evt = _formatErrorCode(evt || message),
                _a[_DYN_TYPE_NAME ] = errorType,
                _a.stackDetails = _getStackFromErrorObj(stack || error || evt),
                _a.errorSrc = errorSrc,
                _a;
        };
        Exception.CreateFromInterface = function (logger, exception, properties, measurements) {
            var exceptions = exception[_DYN_EXCEPTIONS ]
                && arrMap(exception[_DYN_EXCEPTIONS ], function (ex) { return _ExceptionDetails[_DYN__CREATE_FROM_INTERFA1 ](logger, ex); });
            var exceptionData = new Exception(logger, __assignFn(__assignFn({}, exception), { exceptions: exceptions }), properties, measurements);
            return exceptionData;
        };
        Exception.prototype.toInterface = function () {
            var _a;
            var _b = this, exceptions = _b.exceptions, properties = _b.properties, measurements = _b.measurements, severityLevel = _b.severityLevel, problemGroup = _b.problemGroup, id = _b.id, isManual = _b.isManual;
            var exceptionDetailsInterface = exceptions instanceof Array
                && arrMap(exceptions, function (exception) { return exception.toInterface(); })
                || undefined;
            return _a = {
                    ver: "4.0"
                },
                _a[_DYN_EXCEPTIONS ] = exceptionDetailsInterface,
                _a.severityLevel = severityLevel,
                _a.properties = properties,
                _a.measurements = measurements,
                _a.problemGroup = problemGroup,
                _a.id = id,
                _a.isManual = isManual,
                _a;
        };
        Exception.CreateSimpleException = function (message, typeName, assembly, fileName, details, line) {
            var _a;
            return {
                exceptions: [
                    (_a = {},
                        _a[_DYN_HAS_FULL_STACK ] = true,
                        _a.message = message,
                        _a.stack = details,
                        _a.typeName = typeName,
                        _a)
                ]
            };
        };
        Exception.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception";
        Exception.dataType = "ExceptionData";
        Exception.formatError = _formatErrorCode;
        return Exception;
    }());
    var _ExceptionDetails = /** @class */ (function () {
        function _ExceptionDetails(logger, exception, properties) {
            this.aiDataContract = {
                id: 0 ,
                outerId: 0 ,
                typeName: 1 ,
                message: 1 ,
                hasFullStack: 0 ,
                stack: 0 ,
                parsedStack: 2
            };
            var _self = this;
            if (!_isExceptionDetailsInternal(exception)) {
                var error = exception;
                var evt = error && error.evt;
                if (!isError(error)) {
                    error = error[strError] || evt || error;
                }
                _self[_DYN_TYPE_NAME ] = dataSanitizeString(logger, _getErrorType(error)) || strNotSpecified;
                _self[_DYN_MESSAGE$1 ] = dataSanitizeMessage(logger, _formatMessage(exception || error, _self[_DYN_TYPE_NAME ])) || strNotSpecified;
                var stack = exception[strStackDetails] || _getStackFromErrorObj(exception);
                _self[_DYN_PARSED_STACK ] = _parseStack(stack);
                _self[strStack] = dataSanitizeException(logger, _formatStackTrace(stack));
                _self.hasFullStack = isArray(_self.parsedStack) && _self.parsedStack[_DYN_LENGTH$1 ] > 0;
                if (properties) {
                    properties[_DYN_TYPE_NAME ] = properties[_DYN_TYPE_NAME ] || _self[_DYN_TYPE_NAME ];
                }
            }
            else {
                _self[_DYN_TYPE_NAME ] = exception[_DYN_TYPE_NAME ];
                _self[_DYN_MESSAGE$1 ] = exception[_DYN_MESSAGE$1 ];
                _self[strStack] = exception[strStack];
                _self[_DYN_PARSED_STACK ] = exception[_DYN_PARSED_STACK ] || [];
                _self[_DYN_HAS_FULL_STACK ] = exception[_DYN_HAS_FULL_STACK ];
            }
        }
        _ExceptionDetails.prototype.toInterface = function () {
            var _a;
            var _self = this;
            var parsedStack = _self[_DYN_PARSED_STACK ] instanceof Array
                && arrMap(_self[_DYN_PARSED_STACK ], function (frame) { return frame.toInterface(); });
            var exceptionDetailsInterface = (_a = {
                    id: _self.id,
                    outerId: _self.outerId,
                    typeName: _self[_DYN_TYPE_NAME ],
                    message: _self[_DYN_MESSAGE$1 ],
                    hasFullStack: _self[_DYN_HAS_FULL_STACK ],
                    stack: _self[strStack]
                },
                _a[_DYN_PARSED_STACK ] = parsedStack || undefined,
                _a);
            return exceptionDetailsInterface;
        };
        _ExceptionDetails.CreateFromInterface = function (logger, exception) {
            var parsedStack = (exception[_DYN_PARSED_STACK ] instanceof Array
                && arrMap(exception[_DYN_PARSED_STACK ], function (frame) { return _StackFrame[_DYN__CREATE_FROM_INTERFA1 ](frame); }))
                || exception[_DYN_PARSED_STACK ];
            var exceptionDetails = new _ExceptionDetails(logger, __assignFn(__assignFn({}, exception), { parsedStack: parsedStack }));
            return exceptionDetails;
        };
        return _ExceptionDetails;
    }());
    var _StackFrame = /** @class */ (function () {
        function _StackFrame(sourceFrame, level) {
            this.aiDataContract = {
                level: 1 ,
                method: 1 ,
                assembly: 0 ,
                fileName: 0 ,
                line: 0
            };
            var _self = this;
            _self[_DYN_SIZE_IN_BYTES ] = 0;
            if (typeof sourceFrame === "string") {
                var frame = sourceFrame;
                _self[_DYN_LEVEL ] = level;
                _self[_DYN_METHOD ] = NoMethod;
                _self[_DYN_ASSEMBLY ] = strTrim(frame);
                _self[_DYN_FILE_NAME ] = "";
                _self[_DYN_LINE ] = 0;
                var matches = frame.match(_StackFrame.regex);
                if (matches && matches[_DYN_LENGTH$1 ] >= 5) {
                    _self[_DYN_METHOD ] = strTrim(matches[2]) || _self[_DYN_METHOD ];
                    _self[_DYN_FILE_NAME ] = strTrim(matches[4]);
                    _self[_DYN_LINE ] = parseInt(matches[5]) || 0;
                }
            }
            else {
                _self[_DYN_LEVEL ] = sourceFrame[_DYN_LEVEL ];
                _self[_DYN_METHOD ] = sourceFrame[_DYN_METHOD ];
                _self[_DYN_ASSEMBLY ] = sourceFrame[_DYN_ASSEMBLY ];
                _self[_DYN_FILE_NAME ] = sourceFrame[_DYN_FILE_NAME ];
                _self[_DYN_LINE ] = sourceFrame[_DYN_LINE ];
                _self[_DYN_SIZE_IN_BYTES ] = 0;
            }
            _self.sizeInBytes += _self.method[_DYN_LENGTH$1 ];
            _self.sizeInBytes += _self.fileName[_DYN_LENGTH$1 ];
            _self.sizeInBytes += _self.assembly[_DYN_LENGTH$1 ];
            _self[_DYN_SIZE_IN_BYTES ] += _StackFrame.baseSize;
            _self.sizeInBytes += _self.level.toString()[_DYN_LENGTH$1 ];
            _self.sizeInBytes += _self.line.toString()[_DYN_LENGTH$1 ];
        }
        _StackFrame.CreateFromInterface = function (frame) {
            return new _StackFrame(frame, null );
        };
        _StackFrame.prototype.toInterface = function () {
            var _self = this;
            return {
                level: _self[_DYN_LEVEL ],
                method: _self[_DYN_METHOD ],
                assembly: _self[_DYN_ASSEMBLY ],
                fileName: _self[_DYN_FILE_NAME ],
                line: _self[_DYN_LINE ]
            };
        };
        _StackFrame.regex = /^([\s]+at)?[\s]{0,50}([^\@\()]+?)[\s]{0,50}(\@|\()([^\(\n]+):([0-9]+):([0-9]+)(\)?)$/;
        _StackFrame.baseSize = 58;
        return _StackFrame;
    }());

    var DataPoint = /** @class */ (function () {
        function DataPoint() {
            this.aiDataContract = {
                name: 1 ,
                kind: 0 ,
                value: 1 ,
                count: 0 ,
                min: 0 ,
                max: 0 ,
                stdDev: 0
            };
            this.kind = 0 ;
        }
        return DataPoint;
    }());

    var Metric = /** @class */ (function () {
        function Metric(logger, name, value, count, min, max, stdDev, properties, measurements) {
            this.aiDataContract = {
                ver: 1 ,
                metrics: 1 ,
                properties: 0
            };
            var _self = this;
            _self.ver = 2;
            var dataPoint = new DataPoint();
            dataPoint.count = count > 0 ? count : undefined;
            dataPoint.max = isNaN(max) || max === null ? undefined : max;
            dataPoint.min = isNaN(min) || min === null ? undefined : min;
            dataPoint[_DYN_NAME ] = dataSanitizeString(logger, name) || strNotSpecified;
            dataPoint.value = value;
            dataPoint.stdDev = isNaN(stdDev) || stdDev === null ? undefined : stdDev;
            _self.metrics = [dataPoint];
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
        }
        Metric.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric";
        Metric.dataType = "MetricData";
        return Metric;
    }());

    var PageView$1 = /** @class */ (function () {
        function PageView(logger, name, url, durationMs, properties, measurements, id) {
            this.aiDataContract = {
                ver: 1 ,
                name: 0 ,
                url: 0 ,
                duration: 0 ,
                properties: 0 ,
                measurements: 0 ,
                id: 0
            };
            var _self = this;
            _self.ver = 2;
            _self.id = dataSanitizeId(logger, id);
            _self.url = dataSanitizeUrl(logger, url);
            _self[_DYN_NAME ] = dataSanitizeString(logger, name) || strNotSpecified;
            if (!isNaN(durationMs)) {
                _self[_DYN_DURATION$1 ] = msToTimeSpan(durationMs);
            }
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
        }
        PageView.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview";
        PageView.dataType = "PageviewData";
        return PageView;
    }());

    var RemoteDependencyData = /** @class */ (function () {
        function RemoteDependencyData(logger, id, absoluteUrl, commandName, value, success, resultCode, method, requestAPI, correlationContext, properties, measurements) {
            if (requestAPI === void 0) { requestAPI = "Ajax"; }
            this.aiDataContract = {
                id: 1 ,
                ver: 1 ,
                name: 0 ,
                resultCode: 0 ,
                duration: 0 ,
                success: 0 ,
                data: 0 ,
                target: 0 ,
                type: 0 ,
                properties: 0 ,
                measurements: 0 ,
                kind: 0 ,
                value: 0 ,
                count: 0 ,
                min: 0 ,
                max: 0 ,
                stdDev: 0 ,
                dependencyKind: 0 ,
                dependencySource: 0 ,
                commandName: 0 ,
                dependencyTypeName: 0
            };
            var _self = this;
            _self.ver = 2;
            _self.id = id;
            _self[_DYN_DURATION$1 ] = msToTimeSpan(value);
            _self.success = success;
            _self.resultCode = resultCode + "";
            _self.type = dataSanitizeString(logger, requestAPI);
            var dependencyFields = AjaxHelperParseDependencyPath(logger, absoluteUrl, method, commandName);
            _self.data = dataSanitizeUrl(logger, commandName) || dependencyFields.data;
            _self.target = dataSanitizeString(logger, dependencyFields.target);
            if (correlationContext) {
                _self.target = "".concat(_self.target, " | ").concat(correlationContext);
            }
            _self[_DYN_NAME ] = dataSanitizeString(logger, dependencyFields[_DYN_NAME ]);
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
        }
        RemoteDependencyData.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency";
        RemoteDependencyData.dataType = "RemoteDependencyData";
        return RemoteDependencyData;
    }());

    var Trace = /** @class */ (function () {
        function Trace(logger, message, severityLevel, properties, measurements) {
            this.aiDataContract = {
                ver: 1 ,
                message: 1 ,
                severityLevel: 0 ,
                properties: 0
            };
            var _self = this;
            _self.ver = 2;
            message = message || strNotSpecified;
            _self[_DYN_MESSAGE$1 ] = dataSanitizeMessage(logger, message);
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
            if (severityLevel) {
                _self[_DYN_SEVERITY_LEVEL ] = severityLevel;
            }
        }
        Trace.envelopeType = "Microsoft.ApplicationInsights.{0}.Message";
        Trace.dataType = "MessageData";
        return Trace;
    }());

    var PageViewPerformance$1 = /** @class */ (function () {
        function PageViewPerformance(logger, name, url, unused, properties, measurements, cs4BaseData) {
            this.aiDataContract = {
                ver: 1 ,
                name: 0 ,
                url: 0 ,
                duration: 0 ,
                perfTotal: 0 ,
                networkConnect: 0 ,
                sentRequest: 0 ,
                receivedResponse: 0 ,
                domProcessing: 0 ,
                properties: 0 ,
                measurements: 0
            };
            var _self = this;
            _self.ver = 2;
            _self.url = dataSanitizeUrl(logger, url);
            _self[_DYN_NAME ] = dataSanitizeString(logger, name) || strNotSpecified;
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
            if (cs4BaseData) {
                _self.domProcessing = cs4BaseData.domProcessing;
                _self[_DYN_DURATION$1 ] = cs4BaseData[_DYN_DURATION$1 ];
                _self.networkConnect = cs4BaseData.networkConnect;
                _self.perfTotal = cs4BaseData.perfTotal;
                _self[_DYN_RECEIVED_RESPONSE ] = cs4BaseData[_DYN_RECEIVED_RESPONSE ];
                _self.sentRequest = cs4BaseData.sentRequest;
            }
        }
        PageViewPerformance.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance";
        PageViewPerformance.dataType = "PageviewPerformanceData";
        return PageViewPerformance;
    }());

    function createTelemetryItem(item, baseType, envelopeName, logger, customProperties, systemProperties) {
        var _a;
        envelopeName = dataSanitizeString(logger, envelopeName) || strNotSpecified;
        if (isNullOrUndefined(item) ||
            isNullOrUndefined(baseType) ||
            isNullOrUndefined(envelopeName)) {
            throwError("Input doesn't contain all required fields");
        }
        var iKey = "";
        if (item[strIkey]) {
            iKey = item[strIkey];
            delete item[strIkey];
        }
        var telemetryItem = (_a = {},
            _a[_DYN_NAME ] = envelopeName,
            _a.time = toISOString(new Date()),
            _a.iKey = iKey,
            _a.ext = systemProperties ? systemProperties : {},
            _a.tags = [],
            _a.data = {},
            _a.baseType = baseType,
            _a.baseData = item
        ,
            _a);
        if (!isNullOrUndefined(customProperties)) {
            objForEachKey(customProperties, function (prop, value) {
                telemetryItem.data[prop] = value;
            });
        }
        return telemetryItem;
    }

    var PropertiesPluginIdentifier = "AppInsightsPropertiesPlugin";
    var AnalyticsPluginIdentifier = "ApplicationInsightsAnalytics";

    var _DYN_TO_STRING = "toString";
    var _DYN_DISABLE_EXCEPTION_TR0 = "disableExceptionTracking";
    var _DYN_AUTO_TRACK_PAGE_VISI1 = "autoTrackPageVisitTime";
    var _DYN_OVERRIDE_PAGE_VIEW_D2 = "overridePageViewDuration";
    var _DYN_ENABLE_UNHANDLED_PRO3 = "enableUnhandledPromiseRejectionTracking";
    var _DYN_SAMPLING_PERCENTAGE = "samplingPercentage";
    var _DYN_IS_STORAGE_USE_DISAB4 = "isStorageUseDisabled";
    var _DYN_IS_BROWSER_LINK_TRAC5 = "isBrowserLinkTrackingEnabled";
    var _DYN_ENABLE_AUTO_ROUTE_TR6 = "enableAutoRouteTracking";
    var _DYN_NAME_PREFIX = "namePrefix";
    var _DYN_DISABLE_FLUSH_ON_BEF7 = "disableFlushOnBeforeUnload";
    var _DYN_CORE = "core";
    var _DYN_DATA_TYPE = "dataType";
    var _DYN_ENVELOPE_TYPE = "envelopeType";
    var _DYN_DIAG_LOG = "diagLog";
    var _DYN_TRACK = "track";
    var _DYN_TRACK_PAGE_VIEW = "trackPageView";
    var _DYN_TRACK_PREVIOUS_PAGE_9 = "trackPreviousPageVisit";
    var _DYN_SEND_PAGE_VIEW_INTER10 = "sendPageViewInternal";
    var _DYN_SEND_PAGE_VIEW_PERFO11 = "sendPageViewPerformanceInternal";
    var _DYN_POPULATE_PAGE_VIEW_P12 = "populatePageViewPerformanceEvent";
    var _DYN_HREF = "href";
    var _DYN_SEND_EXCEPTION_INTER13 = "sendExceptionInternal";
    var _DYN_EXCEPTION = "exception";
    var _DYN_ERROR = "error";
    var _DYN__ONERROR = "_onerror";
    var _DYN_ERROR_SRC = "errorSrc";
    var _DYN_LINE_NUMBER = "lineNumber";
    var _DYN_COLUMN_NUMBER = "columnNumber";
    var _DYN_MESSAGE = "message";
    var _DYN__CREATE_AUTO_EXCEPTI14 = "CreateAutoException";
    var _DYN_ADD_TELEMETRY_INITIA15 = "addTelemetryInitializer";
    var _DYN_DURATION = "duration";
    var _DYN_LENGTH = "length";
    var _DYN_IS_PERFORMANCE_TIMIN16 = "isPerformanceTimingSupported";
    var _DYN_GET_PERFORMANCE_TIMI17 = "getPerformanceTiming";
    var _DYN_NAVIGATION_START = "navigationStart";
    var _DYN_SHOULD_COLLECT_DURAT18 = "shouldCollectDuration";
    var _DYN_IS_PERFORMANCE_TIMIN19 = "isPerformanceTimingDataReady";
    var _DYN_GET_ENTRIES_BY_TYPE = "getEntriesByType";
    var _DYN_RESPONSE_START = "responseStart";
    var _DYN_REQUEST_START = "requestStart";
    var _DYN_LOAD_EVENT_END = "loadEventEnd";
    var _DYN_RESPONSE_END = "responseEnd";
    var _DYN_CONNECT_END = "connectEnd";
    var _DYN_PAGE_VISIT_START_TIM20 = "pageVisitStartTime";

    var PageViewManager = /** @class */ (function () {
        function PageViewManager(appInsights, overridePageViewDuration, core, pageViewPerformanceManager) {
            dynamicProto(PageViewManager, this, function (_self) {
                var intervalHandle = null;
                var itemQueue = [];
                var pageViewPerformanceSent = false;
                var _logger;
                if (core) {
                    _logger = core.logger;
                }
                function _flushChannels(isAsync) {
                    if (core) {
                        core.flush(isAsync);
                    }
                }
                function _addQueue(cb) {
                    itemQueue.push(cb);
                    if (!intervalHandle) {
                        intervalHandle = setInterval((function () {
                            var allItems = itemQueue.slice(0);
                            var doFlush = false;
                            itemQueue = [];
                            arrForEach(allItems, function (item) {
                                if (!item()) {
                                    itemQueue.push(item);
                                }
                                else {
                                    doFlush = true;
                                }
                            });
                            if (itemQueue[_DYN_LENGTH ] === 0) {
                                clearInterval(intervalHandle);
                                intervalHandle = null;
                            }
                            if (doFlush) {
                                _flushChannels(true);
                            }
                        }), 100);
                    }
                }
                _self[_DYN_TRACK_PAGE_VIEW ] = function (pageView, customProperties) {
                    var name = pageView.name;
                    if (isNullOrUndefined(name) || typeof name !== "string") {
                        var doc = getDocument();
                        name = pageView.name = doc && doc.title || "";
                    }
                    var uri = pageView.uri;
                    if (isNullOrUndefined(uri) || typeof uri !== "string") {
                        var location_1 = getLocation();
                        uri = pageView.uri = location_1 && location_1[_DYN_HREF ] || "";
                    }
                    if (!pageViewPerformanceManager[_DYN_IS_PERFORMANCE_TIMIN16 ]()) {
                        appInsights[_DYN_SEND_PAGE_VIEW_INTER10 ](pageView, customProperties);
                        _flushChannels(true);
                        _throwInternal(_logger, 2 , 25 , "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info.");
                        return;
                    }
                    var pageViewSent = false;
                    var customDuration;
                    var start = pageViewPerformanceManager[_DYN_GET_PERFORMANCE_TIMI17 ]()[_DYN_NAVIGATION_START ];
                    if (start > 0) {
                        customDuration = dateTimeUtilsDuration(start, +new Date);
                        if (!pageViewPerformanceManager[_DYN_SHOULD_COLLECT_DURAT18 ](customDuration)) {
                            customDuration = undefined;
                        }
                    }
                    var duration;
                    if (!isNullOrUndefined(customProperties) &&
                        !isNullOrUndefined(customProperties[_DYN_DURATION ])) {
                        duration = customProperties[_DYN_DURATION ];
                    }
                    if (overridePageViewDuration || !isNaN(duration)) {
                        if (isNaN(duration)) {
                            if (!customProperties) {
                                customProperties = {};
                            }
                            customProperties[_DYN_DURATION ] = customDuration;
                        }
                        appInsights[_DYN_SEND_PAGE_VIEW_INTER10 ](pageView, customProperties);
                        _flushChannels(true);
                        pageViewSent = true;
                    }
                    var maxDurationLimit = 60000;
                    if (!customProperties) {
                        customProperties = {};
                    }
                    _addQueue(function () {
                        var processed = false;
                        try {
                            if (pageViewPerformanceManager[_DYN_IS_PERFORMANCE_TIMIN19 ]()) {
                                processed = true;
                                var pageViewPerformance = {
                                    name: name,
                                    uri: uri
                                };
                                pageViewPerformanceManager[_DYN_POPULATE_PAGE_VIEW_P12 ](pageViewPerformance);
                                if (!pageViewPerformance.isValid && !pageViewSent) {
                                    customProperties[_DYN_DURATION ] = customDuration;
                                    appInsights[_DYN_SEND_PAGE_VIEW_INTER10 ](pageView, customProperties);
                                }
                                else {
                                    if (!pageViewSent) {
                                        customProperties[_DYN_DURATION ] = pageViewPerformance.durationMs;
                                        appInsights[_DYN_SEND_PAGE_VIEW_INTER10 ](pageView, customProperties);
                                    }
                                    if (!pageViewPerformanceSent) {
                                        appInsights[_DYN_SEND_PAGE_VIEW_PERFO11 ](pageViewPerformance, customProperties);
                                        pageViewPerformanceSent = true;
                                    }
                                }
                            }
                            else if (start > 0 && dateTimeUtilsDuration(start, +new Date) > maxDurationLimit) {
                                processed = true;
                                if (!pageViewSent) {
                                    customProperties[_DYN_DURATION ] = maxDurationLimit;
                                    appInsights[_DYN_SEND_PAGE_VIEW_INTER10 ](pageView, customProperties);
                                }
                            }
                        }
                        catch (e) {
                            _throwInternal(_logger, 1 , 38 , "trackPageView failed on page load calculation: " + getExceptionName(e), { exception: dumpObj(e) });
                        }
                        return processed;
                    });
                };
                _self.teardown = function (unloadCtx, unloadState) {
                    if (intervalHandle) {
                        clearInterval(intervalHandle);
                        intervalHandle = null;
                        var allItems = itemQueue.slice(0);
                        itemQueue = [];
                        arrForEach(allItems, function (item) {
                            if (item()) ;
                        });
                    }
                };
            });
        }
        PageViewManager.__ieDyn=1;
        return PageViewManager;
    }());

    var MAX_DURATION_ALLOWED = 3600000;
    var botAgentNames = ["googlebot", "adsbot-google", "apis-google", "mediapartners-google"];
    function _isPerformanceTimingSupported() {
        var perf = getPerformance();
        return perf && !!perf.timing;
    }
    function _isPerformanceNavigationTimingSupported() {
        var perf = getPerformance();
        return perf && perf.getEntriesByType && perf.getEntriesByType("navigation")[_DYN_LENGTH ] > 0;
    }
    function _isPerformanceTimingDataReady() {
        var perf = getPerformance();
        var timing = perf ? perf.timing : 0;
        return timing
            && timing.domainLookupStart > 0
            && timing[_DYN_NAVIGATION_START ] > 0
            && timing[_DYN_RESPONSE_START ] > 0
            && timing[_DYN_REQUEST_START ] > 0
            && timing[_DYN_LOAD_EVENT_END ] > 0
            && timing[_DYN_RESPONSE_END ] > 0
            && timing[_DYN_CONNECT_END ] > 0
            && timing.domLoading > 0;
    }
    function _getPerformanceTiming() {
        if (_isPerformanceTimingSupported()) {
            return getPerformance().timing;
        }
        return null;
    }
    function _getPerformanceNavigationTiming() {
        if (_isPerformanceNavigationTimingSupported()) {
            return getPerformance()[_DYN_GET_ENTRIES_BY_TYPE ]("navigation")[0];
        }
        return null;
    }
    function _shouldCollectDuration() {
        var durations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            durations[_i] = arguments[_i];
        }
        var _navigator = getNavigator() || {};
        var userAgent = _navigator.userAgent;
        var isGoogleBot = false;
        if (userAgent) {
            for (var i = 0; i < botAgentNames[_DYN_LENGTH ]; i++) {
                isGoogleBot = isGoogleBot || userAgent.toLowerCase().indexOf(botAgentNames[i]) !== -1;
            }
        }
        if (isGoogleBot) {
            return false;
        }
        else {
            for (var i = 0; i < durations[_DYN_LENGTH ]; i++) {
                if (durations[i] < 0 || durations[i] >= MAX_DURATION_ALLOWED) {
                    return false;
                }
            }
        }
        return true;
    }
    var PageViewPerformanceManager = /** @class */ (function () {
        function PageViewPerformanceManager(core) {
            var _this = this;
            var _logger = safeGetLogger(core);
            dynamicProto(PageViewPerformanceManager, this, function (_self) {
                _self[_DYN_POPULATE_PAGE_VIEW_P12 ] = function (pageViewPerformance) {
                    pageViewPerformance.isValid = false;
                    var navigationTiming = _getPerformanceNavigationTiming();
                    var timing = _getPerformanceTiming();
                    var total = 0;
                    var network = 0;
                    var request = 0;
                    var response = 0;
                    var dom = 0;
                    if (navigationTiming || timing) {
                        if (navigationTiming) {
                            total = navigationTiming[_DYN_DURATION ];
                            network = navigationTiming.startTime === 0 ? navigationTiming[_DYN_CONNECT_END ] : dateTimeUtilsDuration(navigationTiming.startTime, navigationTiming[_DYN_CONNECT_END ]);
                            request = dateTimeUtilsDuration(navigationTiming.requestStart, navigationTiming[_DYN_RESPONSE_START ]);
                            response = dateTimeUtilsDuration(navigationTiming[_DYN_RESPONSE_START ], navigationTiming[_DYN_RESPONSE_END ]);
                            dom = dateTimeUtilsDuration(navigationTiming.responseEnd, navigationTiming[_DYN_LOAD_EVENT_END ]);
                        }
                        else {
                            total = dateTimeUtilsDuration(timing[_DYN_NAVIGATION_START ], timing[_DYN_LOAD_EVENT_END ]);
                            network = dateTimeUtilsDuration(timing[_DYN_NAVIGATION_START ], timing[_DYN_CONNECT_END ]);
                            request = dateTimeUtilsDuration(timing.requestStart, timing[_DYN_RESPONSE_START ]);
                            response = dateTimeUtilsDuration(timing[_DYN_RESPONSE_START ], timing[_DYN_RESPONSE_END ]);
                            dom = dateTimeUtilsDuration(timing.responseEnd, timing[_DYN_LOAD_EVENT_END ]);
                        }
                        if (total === 0) {
                            _throwInternal(_logger, 2 , 10 , "error calculating page view performance.", { total: total, network: network, request: request, response: response, dom: dom });
                        }
                        else if (!_this[_DYN_SHOULD_COLLECT_DURAT18 ](total, network, request, response, dom)) {
                            _throwInternal(_logger, 2 , 45 , "Invalid page load duration value. Browser perf data won't be sent.", { total: total, network: network, request: request, response: response, dom: dom });
                        }
                        else if (total < Math.floor(network) + Math.floor(request) + Math.floor(response) + Math.floor(dom)) {
                            _throwInternal(_logger, 2 , 8 , "client performance math error.", { total: total, network: network, request: request, response: response, dom: dom });
                        }
                        else {
                            pageViewPerformance.durationMs = total;
                            pageViewPerformance.perfTotal = pageViewPerformance[_DYN_DURATION ] = msToTimeSpan(total);
                            pageViewPerformance.networkConnect = msToTimeSpan(network);
                            pageViewPerformance.sentRequest = msToTimeSpan(request);
                            pageViewPerformance.receivedResponse = msToTimeSpan(response);
                            pageViewPerformance.domProcessing = msToTimeSpan(dom);
                            pageViewPerformance.isValid = true;
                        }
                    }
                };
                _self[_DYN_GET_PERFORMANCE_TIMI17 ] = _getPerformanceTiming;
                _self[_DYN_IS_PERFORMANCE_TIMIN16 ] = _isPerformanceTimingSupported;
                _self[_DYN_IS_PERFORMANCE_TIMIN19 ] = _isPerformanceTimingDataReady;
                _self[_DYN_SHOULD_COLLECT_DURAT18 ] = _shouldCollectDuration;
            });
        }
        PageViewPerformanceManager.__ieDyn=1;
        return PageViewPerformanceManager;
    }());

    var PageVisitTimeManager = /** @class */ (function () {
        function PageVisitTimeManager(logger, pageVisitTimeTrackingHandler) {
            var prevPageVisitDataKeyName = "prevPageVisitData";
            dynamicProto(PageVisitTimeManager, this, function (_self) {
                _self[_DYN_TRACK_PREVIOUS_PAGE_9 ] = function (currentPageName, currentPageUrl) {
                    try {
                        var prevPageVisitTimeData = restartPageVisitTimer(currentPageName, currentPageUrl);
                        if (prevPageVisitTimeData) {
                            pageVisitTimeTrackingHandler(prevPageVisitTimeData.pageName, prevPageVisitTimeData.pageUrl, prevPageVisitTimeData.pageVisitTime);
                        }
                    }
                    catch (e) {
                        _warnToConsole(logger, "Auto track page visit time failed, metric will not be collected: " + dumpObj(e));
                    }
                };
                function restartPageVisitTimer(pageName, pageUrl) {
                    var prevPageVisitData = null;
                    try {
                        prevPageVisitData = stopPageVisitTimer();
                        startPageVisitTimer(pageName, pageUrl);
                    }
                    catch (e) {
                        _warnToConsole(logger, "Call to restart failed: " + dumpObj(e));
                        prevPageVisitData = null;
                    }
                    return prevPageVisitData;
                }
                function startPageVisitTimer(pageName, pageUrl) {
                    try {
                        if (utlCanUseSessionStorage()) {
                            if (utlGetSessionStorage(logger, prevPageVisitDataKeyName) != null) {
                                throwError("Cannot call startPageVisit consecutively without first calling stopPageVisit");
                            }
                            var currPageVisitData = new PageVisitData(pageName, pageUrl);
                            var currPageVisitDataStr = getJSON().stringify(currPageVisitData);
                            utlSetSessionStorage(logger, prevPageVisitDataKeyName, currPageVisitDataStr);
                        }
                    }
                    catch (e) {
                        _warnToConsole(logger, "Call to start failed: " + dumpObj(e));
                    }
                }
                function stopPageVisitTimer() {
                    var prevPageVisitData = null;
                    try {
                        if (utlCanUseSessionStorage()) {
                            var pageVisitEndTime = dateNow();
                            var pageVisitDataJsonStr = utlGetSessionStorage(logger, prevPageVisitDataKeyName);
                            if (pageVisitDataJsonStr && hasJSON()) {
                                prevPageVisitData = getJSON().parse(pageVisitDataJsonStr);
                                prevPageVisitData.pageVisitTime = pageVisitEndTime - prevPageVisitData[_DYN_PAGE_VISIT_START_TIM20 ];
                                utlRemoveSessionStorage(logger, prevPageVisitDataKeyName);
                            }
                        }
                    }
                    catch (e) {
                        _warnToConsole(logger, "Stop page visit timer failed: " + dumpObj(e));
                        prevPageVisitData = null;
                    }
                    return prevPageVisitData;
                }
                objDefineAccessors(_self, "_logger", function () { return logger; });
                objDefineAccessors(_self, "pageVisitTimeTrackingHandler", function () { return pageVisitTimeTrackingHandler; });
            });
        }
        PageVisitTimeManager.__ieDyn=1;
        return PageVisitTimeManager;
    }());
    var PageVisitData = /** @class */ (function () {
        function PageVisitData(pageName, pageUrl) {
            this[_DYN_PAGE_VISIT_START_TIM20 ] = dateNow();
            this.pageName = pageName;
            this.pageUrl = pageUrl;
        }
        return PageVisitData;
    }());

    var Timing = /** @class */ (function () {
        function Timing(logger, name) {
            var _self = this;
            var _events = {};
            _self.start = function (name) {
                if (typeof _events[name] !== "undefined") {
                    _throwInternal(logger, 2 , 62 , "start was called more than once for this event without calling stop.", { name: name, key: name }, true);
                }
                _events[name] = +new Date;
            };
            _self.stop = function (name, url, properties, measurements) {
                var start = _events[name];
                if (isNaN(start)) {
                    _throwInternal(logger, 2 , 63 , "stop was called without a corresponding start.", { name: name, key: name }, true);
                }
                else {
                    var end = +new Date;
                    var duration = dateTimeUtilsDuration(start, end);
                    _self.action(name, url, duration, properties, measurements);
                }
                delete _events[name];
                _events[name] = undefined;
            };
        }
        return Timing;
    }());

    var strEvent = "event";
    function _dispatchEvent(target, evnt) {
        if (target && target.dispatchEvent && evnt) {
            target.dispatchEvent(evnt);
        }
    }
    function _getReason(error) {
        if (error && error.reason) {
            var reason = error.reason;
            if (!isString(reason) && isFunction(reason[_DYN_TO_STRING ])) {
                return reason[_DYN_TO_STRING ]();
            }
            return dumpObj(reason);
        }
        return error || "";
    }
    var MinMilliSeconds = 60000;
    function _configMilliseconds(value, defValue) {
        value = value || defValue;
        if (value < MinMilliSeconds) {
            value = MinMilliSeconds;
        }
        return value;
    }
    function _getDefaultConfig(config) {
        if (!config) {
            config = {};
        }
        config.sessionRenewalMs = _configMilliseconds(config.sessionRenewalMs, 30 * 60 * 1000);
        config.sessionExpirationMs = _configMilliseconds(config.sessionExpirationMs, 24 * 60 * 60 * 1000);
        config[_DYN_DISABLE_EXCEPTION_TR0 ] = stringToBoolOrDefault(config[_DYN_DISABLE_EXCEPTION_TR0 ]);
        config[_DYN_AUTO_TRACK_PAGE_VISI1 ] = stringToBoolOrDefault(config[_DYN_AUTO_TRACK_PAGE_VISI1 ]);
        config[_DYN_OVERRIDE_PAGE_VIEW_D2 ] = stringToBoolOrDefault(config[_DYN_OVERRIDE_PAGE_VIEW_D2 ]);
        config[_DYN_ENABLE_UNHANDLED_PRO3 ] = stringToBoolOrDefault(config[_DYN_ENABLE_UNHANDLED_PRO3 ]);
        if (isNaN(config[_DYN_SAMPLING_PERCENTAGE ]) || config[_DYN_SAMPLING_PERCENTAGE ] <= 0 || config[_DYN_SAMPLING_PERCENTAGE ] >= 100) {
            config[_DYN_SAMPLING_PERCENTAGE ] = 100;
        }
        config[_DYN_IS_STORAGE_USE_DISAB4 ] = stringToBoolOrDefault(config[_DYN_IS_STORAGE_USE_DISAB4 ]);
        config[_DYN_IS_BROWSER_LINK_TRAC5 ] = stringToBoolOrDefault(config[_DYN_IS_BROWSER_LINK_TRAC5 ]);
        config[_DYN_ENABLE_AUTO_ROUTE_TR6 ] = stringToBoolOrDefault(config[_DYN_ENABLE_AUTO_ROUTE_TR6 ]);
        config[_DYN_NAME_PREFIX ] = config[_DYN_NAME_PREFIX ] || "";
        config.enableDebug = stringToBoolOrDefault(config.enableDebug);
        config[_DYN_DISABLE_FLUSH_ON_BEF7 ] = stringToBoolOrDefault(config[_DYN_DISABLE_FLUSH_ON_BEF7 ]);
        config.disableFlushOnUnload = stringToBoolOrDefault(config.disableFlushOnUnload, config[_DYN_DISABLE_FLUSH_ON_BEF7 ]);
        return config;
    }
    function _updateStorageUsage(extConfig) {
        if (!isUndefined(extConfig[_DYN_IS_STORAGE_USE_DISAB4 ])) {
            if (extConfig[_DYN_IS_STORAGE_USE_DISAB4 ]) {
                utlDisableStorage();
            }
            else {
                utlEnableStorage();
            }
        }
    }
    var AnalyticsPlugin = /** @class */ (function (_super) {
        __extendsFn(AnalyticsPlugin, _super);
        function AnalyticsPlugin() {
            var _this = _super.call(this) || this;
            _this.identifier = AnalyticsPluginIdentifier;
            _this.priority = 180;
            _this.autoRoutePVDelay = 500;
            var _eventTracking;
            var _pageTracking;
            var _pageViewManager;
            var _pageViewPerformanceManager;
            var _pageVisitTimeManager;
            var _preInitTelemetryInitializers;
            var _isBrowserLinkTrackingEnabled;
            var _browserLinkInitializerAdded;
            var _enableAutoRouteTracking;
            var _historyListenerAdded;
            var _disableExceptionTracking;
            var _autoExceptionInstrumented;
            var _enableUnhandledPromiseRejectionTracking;
            var _autoUnhandledPromiseInstrumented;
            var _prevUri;
            var _currUri;
            var _evtNamespace;
            dynamicProto(AnalyticsPlugin, _this, function (_self, _base) {
                var _addHook = _base._addHook;
                _initDefaults();
                _self.getCookieMgr = function () {
                    return safeGetCookieMgr(_self[_DYN_CORE ]);
                };
                _self.processTelemetry = function (env, itemCtx) {
                    _self.processNext(env, itemCtx);
                };
                _self.trackEvent = function (event, customProperties) {
                    try {
                        var telemetryItem = createTelemetryItem(event, Event$1[_DYN_DATA_TYPE ], Event$1[_DYN_ENVELOPE_TYPE ], _self[_DYN_DIAG_LOG ](), customProperties);
                        _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
                    }
                    catch (e) {
                        _throwInternal(2 , 39 , "trackTrace failed, trace will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                    }
                };
                _self.startTrackEvent = function (name) {
                    try {
                        _eventTracking.start(name);
                    }
                    catch (e) {
                        _throwInternal(1 , 29 , "startTrackEvent failed, event will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                    }
                };
                _self.stopTrackEvent = function (name, properties, measurements) {
                    try {
                        _eventTracking.stop(name, undefined, properties, measurements);
                    }
                    catch (e) {
                        _throwInternal(1 , 30 , "stopTrackEvent failed, event will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                    }
                };
                _self.trackTrace = function (trace, customProperties) {
                    try {
                        var telemetryItem = createTelemetryItem(trace, Trace[_DYN_DATA_TYPE ], Trace[_DYN_ENVELOPE_TYPE ], _self[_DYN_DIAG_LOG ](), customProperties);
                        _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
                    }
                    catch (e) {
                        _throwInternal(2 , 39 , "trackTrace failed, trace will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                    }
                };
                _self.trackMetric = function (metric, customProperties) {
                    try {
                        var telemetryItem = createTelemetryItem(metric, Metric[_DYN_DATA_TYPE ], Metric[_DYN_ENVELOPE_TYPE ], _self[_DYN_DIAG_LOG ](), customProperties);
                        _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
                    }
                    catch (e) {
                        _throwInternal(1 , 36 , "trackMetric failed, metric will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                    }
                };
                _self[_DYN_TRACK_PAGE_VIEW ] = function (pageView, customProperties) {
                    try {
                        var inPv = pageView || {};
                        _pageViewManager[_DYN_TRACK_PAGE_VIEW ](inPv, __assignFn(__assignFn(__assignFn({}, inPv.properties), inPv.measurements), customProperties));
                        if (_self.config[_DYN_AUTO_TRACK_PAGE_VISI1 ]) {
                            _pageVisitTimeManager[_DYN_TRACK_PREVIOUS_PAGE_9 ](inPv.name, inPv.uri);
                        }
                    }
                    catch (e) {
                        _throwInternal(1 , 37 , "trackPageView failed, page view will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                    }
                };
                _self[_DYN_SEND_PAGE_VIEW_INTER10 ] = function (pageView, properties, systemProperties) {
                    var doc = getDocument();
                    if (doc) {
                        pageView.refUri = pageView.refUri === undefined ? doc.referrer : pageView.refUri;
                    }
                    var telemetryItem = createTelemetryItem(pageView, PageView$1[_DYN_DATA_TYPE ], PageView$1[_DYN_ENVELOPE_TYPE ], _self[_DYN_DIAG_LOG ](), properties, systemProperties);
                    _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
                };
                _self[_DYN_SEND_PAGE_VIEW_PERFO11 ] = function (pageViewPerformance, properties, systemProperties) {
                    var telemetryItem = createTelemetryItem(pageViewPerformance, PageViewPerformance$1[_DYN_DATA_TYPE ], PageViewPerformance$1[_DYN_ENVELOPE_TYPE ], _self[_DYN_DIAG_LOG ](), properties, systemProperties);
                    _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
                };
                _self.trackPageViewPerformance = function (pageViewPerformance, customProperties) {
                    var inPvp = pageViewPerformance || {};
                    try {
                        _pageViewPerformanceManager[_DYN_POPULATE_PAGE_VIEW_P12 ](inPvp);
                        _self[_DYN_SEND_PAGE_VIEW_PERFO11 ](inPvp, customProperties);
                    }
                    catch (e) {
                        _throwInternal(1 , 37 , "trackPageViewPerformance failed, page view will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                    }
                };
                _self.startTrackPage = function (name) {
                    try {
                        if (typeof name !== "string") {
                            var doc = getDocument();
                            name = doc && doc.title || "";
                        }
                        _pageTracking.start(name);
                    }
                    catch (e) {
                        _throwInternal(1 , 31 , "startTrackPage failed, page view may not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                    }
                };
                _self.stopTrackPage = function (name, url, properties, measurement) {
                    try {
                        if (typeof name !== "string") {
                            var doc = getDocument();
                            name = doc && doc.title || "";
                        }
                        if (typeof url !== "string") {
                            var loc = getLocation();
                            url = loc && loc[_DYN_HREF ] || "";
                        }
                        _pageTracking.stop(name, url, properties, measurement);
                        if (_self.config[_DYN_AUTO_TRACK_PAGE_VISI1 ]) {
                            _pageVisitTimeManager[_DYN_TRACK_PREVIOUS_PAGE_9 ](name, url);
                        }
                    }
                    catch (e) {
                        _throwInternal(1 , 32 , "stopTrackPage failed, page view will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                    }
                };
                _self[_DYN_SEND_EXCEPTION_INTER13 ] = function (exception, customProperties, systemProperties) {
                    var theError = exception[_DYN_EXCEPTION ] || exception[_DYN_ERROR ] || new Error(strNotSpecified);
                    var exceptionPartB = new Exception(_self[_DYN_DIAG_LOG ](), theError, exception.properties || customProperties, exception.measurements, exception.severityLevel, exception.id).toInterface();
                    var telemetryItem = createTelemetryItem(exceptionPartB, Exception[_DYN_DATA_TYPE ], Exception[_DYN_ENVELOPE_TYPE ], _self[_DYN_DIAG_LOG ](), customProperties, systemProperties);
                    _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
                };
                _self.trackException = function (exception, customProperties) {
                    if (exception && !exception[_DYN_EXCEPTION ] && exception[_DYN_ERROR ]) {
                        exception[_DYN_EXCEPTION ] = exception[_DYN_ERROR ];
                    }
                    try {
                        _self[_DYN_SEND_EXCEPTION_INTER13 ](exception, customProperties);
                    }
                    catch (e) {
                        _throwInternal(1 , 35 , "trackException failed, exception will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                    }
                };
                _self[_DYN__ONERROR ] = function (exception) {
                    var error = exception && exception[_DYN_ERROR ];
                    var evt = exception && exception.evt;
                    try {
                        if (!evt) {
                            var _window = getWindow();
                            if (_window) {
                                evt = _window[strEvent];
                            }
                        }
                        var url = (exception && exception.url) || (getDocument() || {}).URL;
                        var errorSrc = exception[_DYN_ERROR_SRC ] || "window.onerror@" + url + ":" + (exception[_DYN_LINE_NUMBER ] || 0) + ":" + (exception[_DYN_COLUMN_NUMBER ] || 0);
                        var properties = {
                            errorSrc: errorSrc,
                            url: url,
                            lineNumber: exception[_DYN_LINE_NUMBER ] || 0,
                            columnNumber: exception[_DYN_COLUMN_NUMBER ] || 0,
                            message: exception[_DYN_MESSAGE ]
                        };
                        if (isCrossOriginError(exception.message, exception.url, exception.lineNumber, exception.columnNumber, exception[_DYN_ERROR ])) {
                            _sendCORSException(Exception[_DYN__CREATE_AUTO_EXCEPTI14 ]("Script error: The browser's same-origin policy prevents us from getting the details of this exception. Consider using the 'crossorigin' attribute.", url, exception[_DYN_LINE_NUMBER ] || 0, exception[_DYN_COLUMN_NUMBER ] || 0, error, evt, null, errorSrc), properties);
                        }
                        else {
                            if (!exception[_DYN_ERROR_SRC ]) {
                                exception[_DYN_ERROR_SRC ] = errorSrc;
                            }
                            _self.trackException({ exception: exception, severityLevel: 3  }, properties);
                        }
                    }
                    catch (e) {
                        var errorString = error ? (error.name + ", " + error[_DYN_MESSAGE ]) : "null";
                        _throwInternal(1 , 11 , "_onError threw exception while logging error, error will not be collected: "
                            + getExceptionName(e), { exception: dumpObj(e), errorString: errorString });
                    }
                };
                _self[_DYN_ADD_TELEMETRY_INITIA15 ] = function (telemetryInitializer) {
                    if (_self[_DYN_CORE ]) {
                        return _self[_DYN_CORE ][_DYN_ADD_TELEMETRY_INITIA15 ](telemetryInitializer);
                    }
                    if (!_preInitTelemetryInitializers) {
                        _preInitTelemetryInitializers = [];
                    }
                    _preInitTelemetryInitializers.push(telemetryInitializer);
                };
                _self.initialize = function (config, core, extensions, pluginChain) {
                    if (_self.isInitialized()) {
                        return;
                    }
                    if (isNullOrUndefined(core)) {
                        throwError("Error initializing");
                    }
                    _base.initialize(config, core, extensions, pluginChain);
                    try {
                        _evtNamespace = mergeEvtNamespace(createUniqueNamespace(_self.identifier), core.evtNamespace && core.evtNamespace());
                        if (_preInitTelemetryInitializers) {
                            arrForEach(_preInitTelemetryInitializers, function (initializer) {
                                core[_DYN_ADD_TELEMETRY_INITIA15 ](initializer);
                            });
                            _preInitTelemetryInitializers = null;
                        }
                        var extConfig = _populateDefaults(config);
                        _updateStorageUsage(extConfig);
                        _pageViewPerformanceManager = new PageViewPerformanceManager(_self[_DYN_CORE ]);
                        _pageViewManager = new PageViewManager(_this, extConfig[_DYN_OVERRIDE_PAGE_VIEW_D2 ], _self[_DYN_CORE ], _pageViewPerformanceManager);
                        _pageVisitTimeManager = new PageVisitTimeManager(_self[_DYN_DIAG_LOG ](), function (pageName, pageUrl, pageVisitTime) { return trackPageVisitTime(pageName, pageUrl, pageVisitTime); });
                        _updateBrowserLinkTracking(extConfig, config);
                        _eventTracking = new Timing(_self[_DYN_DIAG_LOG ](), "trackEvent");
                        _eventTracking.action =
                            function (name, url, duration, properties, measurements) {
                                if (!properties) {
                                    properties = {};
                                }
                                if (!measurements) {
                                    measurements = {};
                                }
                                properties.duration = duration[_DYN_TO_STRING ]();
                                _self.trackEvent({ name: name, properties: properties, measurements: measurements });
                            };
                        _pageTracking = new Timing(_self[_DYN_DIAG_LOG ](), "trackPageView");
                        _pageTracking.action = function (name, url, duration, properties, measurements) {
                            if (isNullOrUndefined(properties)) {
                                properties = {};
                            }
                            properties.duration = duration[_DYN_TO_STRING ]();
                            var pageViewItem = {
                                name: name,
                                uri: url,
                                properties: properties,
                                measurements: measurements
                            };
                            _self[_DYN_SEND_PAGE_VIEW_INTER10 ](pageViewItem, properties);
                        };
                        if (hasWindow()) {
                            _updateExceptionTracking(extConfig);
                            _updateLocationChange(extConfig);
                        }
                    }
                    catch (e) {
                        _self.setInitialized(false);
                        throw e;
                    }
                };
                _self._doTeardown = function (unloadCtx, unloadState) {
                    _pageViewManager && _pageViewManager.teardown(unloadCtx, unloadState);
                    eventOff(window, null, null, _evtNamespace);
                    _initDefaults();
                };
                function _populateDefaults(config) {
                    var ctx = createProcessTelemetryContext(null, config, _self[_DYN_CORE ]);
                    var identifier = _self.identifier;
                    var defaults = _getDefaultConfig(config);
                    var extConfig = _self.config = ctx.getExtCfg(identifier);
                    if (defaults !== undefined) {
                        objForEachKey(defaults, function (field, value) {
                            extConfig[field] = ctx.getConfig(identifier, field, value);
                            if (extConfig[field] === undefined) {
                                extConfig = value;
                            }
                        });
                    }
                    return extConfig;
                }
                function _updateBrowserLinkTracking(extConfig, config) {
                    _isBrowserLinkTrackingEnabled = extConfig[_DYN_IS_BROWSER_LINK_TRAC5 ] || config[_DYN_IS_BROWSER_LINK_TRAC5 ];
                    _addDefaultTelemetryInitializers();
                }
                function trackPageVisitTime(pageName, pageUrl, pageVisitTime) {
                    var properties = { PageName: pageName, PageUrl: pageUrl };
                    _self.trackMetric({
                        name: "PageVisitTime",
                        average: pageVisitTime,
                        max: pageVisitTime,
                        min: pageVisitTime,
                        sampleCount: 1
                    }, properties);
                }
                function _addDefaultTelemetryInitializers() {
                    if (!_browserLinkInitializerAdded && _isBrowserLinkTrackingEnabled) {
                        var browserLinkPaths_1 = ["/browserLinkSignalR/", "/__browserLink/"];
                        var dropBrowserLinkRequests = function (envelope) {
                            if (_isBrowserLinkTrackingEnabled && envelope.baseType === RemoteDependencyData[_DYN_DATA_TYPE ]) {
                                var remoteData = envelope.baseData;
                                if (remoteData) {
                                    for (var i = 0; i < browserLinkPaths_1[_DYN_LENGTH ]; i++) {
                                        if (remoteData.target && remoteData.target.indexOf(browserLinkPaths_1[i]) >= 0) {
                                            return false;
                                        }
                                    }
                                }
                            }
                            return true;
                        };
                        _self[_DYN_ADD_TELEMETRY_INITIA15 ](dropBrowserLinkRequests);
                        _browserLinkInitializerAdded = true;
                    }
                }
                function _sendCORSException(exception, properties) {
                    var telemetryItem = createTelemetryItem(exception, Exception[_DYN_DATA_TYPE ], Exception[_DYN_ENVELOPE_TYPE ], _self[_DYN_DIAG_LOG ](), properties);
                    _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
                }
                function _updateExceptionTracking(extConfig) {
                    var _window = getWindow();
                    var locn = getLocation(true);
                    _disableExceptionTracking = extConfig[_DYN_DISABLE_EXCEPTION_TR0 ];
                    if (!_disableExceptionTracking && !_autoExceptionInstrumented && !extConfig.autoExceptionInstrumented) {
                        _addHook(InstrumentEvent(_window, "onerror", {
                            ns: _evtNamespace,
                            rsp: function (callDetails, message, url, lineNumber, columnNumber, error) {
                                if (!_disableExceptionTracking && callDetails.rslt !== true) {
                                    _self[_DYN__ONERROR ](Exception[_DYN__CREATE_AUTO_EXCEPTI14 ](message, url, lineNumber, columnNumber, error, callDetails.evt));
                                }
                            }
                        }, false));
                        _autoExceptionInstrumented = true;
                    }
                    _addUnhandledPromiseRejectionTracking(extConfig, _window, locn);
                }
                function _updateLocationChange(extConfig) {
                    var win = getWindow();
                    var locn = getLocation(true);
                    _enableAutoRouteTracking = extConfig[_DYN_ENABLE_AUTO_ROUTE_TR6 ] === true;
                    if (win && _enableAutoRouteTracking && hasHistory()) {
                        var _history = getHistory();
                        if (isFunction(_history.pushState) && isFunction(_history.replaceState) && typeof Event !== strShimUndefined) {
                            _addHistoryListener(extConfig, win, _history, locn);
                        }
                    }
                }
                function _getDistributedTraceCtx() {
                    var distributedTraceCtx = null;
                    if (_self[_DYN_CORE ] && _self[_DYN_CORE ].getTraceCtx) {
                        distributedTraceCtx = _self[_DYN_CORE ].getTraceCtx(false);
                    }
                    if (!distributedTraceCtx) {
                        var properties = _self[_DYN_CORE ].getPlugin(PropertiesPluginIdentifier);
                        if (properties) {
                            var context = properties.plugin.context;
                            if (context) {
                                distributedTraceCtx = createDistributedTraceContextFromTrace(context.telemetryTrace);
                            }
                        }
                    }
                    return distributedTraceCtx;
                }
                function _addHistoryListener(extConfig, win, history, locn) {
                    var namePrefix = extConfig[_DYN_NAME_PREFIX ] || "";
                    function _popstateHandler() {
                        if (_enableAutoRouteTracking) {
                            _dispatchEvent(win, createDomEvent(namePrefix + "locationchange"));
                        }
                    }
                    function _locationChangeHandler() {
                        if (_currUri) {
                            _prevUri = _currUri;
                            _currUri = locn && locn[_DYN_HREF ] || "";
                        }
                        else {
                            _currUri = locn && locn[_DYN_HREF ] || "";
                        }
                        if (_enableAutoRouteTracking) {
                            var distributedTraceCtx = _getDistributedTraceCtx();
                            if (distributedTraceCtx) {
                                distributedTraceCtx.setTraceId(generateW3CId());
                                var traceLocationName = "_unknown_";
                                if (locn && locn.pathname) {
                                    traceLocationName = locn.pathname + (locn.hash || "");
                                }
                                distributedTraceCtx.setName(dataSanitizeString(_self[_DYN_DIAG_LOG ](), traceLocationName));
                            }
                            setTimeout((function (uri) {
                                _self[_DYN_TRACK_PAGE_VIEW ]({ refUri: uri, properties: { duration: 0 } });
                            }).bind(this, _prevUri), _self.autoRoutePVDelay);
                        }
                    }
                    if (!_historyListenerAdded) {
                        _addHook(InstrumentEvent(history, "pushState", {
                            ns: _evtNamespace,
                            rsp: function () {
                                if (_enableAutoRouteTracking) {
                                    _dispatchEvent(win, createDomEvent(namePrefix + "pushState"));
                                    _dispatchEvent(win, createDomEvent(namePrefix + "locationchange"));
                                }
                            }
                        }, true));
                        _addHook(InstrumentEvent(history, "replaceState", {
                            ns: _evtNamespace,
                            rsp: function () {
                                if (_enableAutoRouteTracking) {
                                    _dispatchEvent(win, createDomEvent(namePrefix + "replaceState"));
                                    _dispatchEvent(win, createDomEvent(namePrefix + "locationchange"));
                                }
                            }
                        }, true));
                        eventOn(win, namePrefix + "popstate", _popstateHandler, _evtNamespace);
                        eventOn(win, namePrefix + "locationchange", _locationChangeHandler, _evtNamespace);
                        _historyListenerAdded = true;
                    }
                }
                function _addUnhandledPromiseRejectionTracking(extConfig, _window, _location) {
                    _enableUnhandledPromiseRejectionTracking = extConfig[_DYN_ENABLE_UNHANDLED_PRO3 ] === true;
                    if (_enableUnhandledPromiseRejectionTracking && !_autoUnhandledPromiseInstrumented) {
                        _addHook(InstrumentEvent(_window, "onunhandledrejection", {
                            ns: _evtNamespace,
                            rsp: function (callDetails, error) {
                                if (_enableUnhandledPromiseRejectionTracking && callDetails.rslt !== true) {
                                    _self[_DYN__ONERROR ](Exception[_DYN__CREATE_AUTO_EXCEPTI14 ](_getReason(error), _location ? _location[_DYN_HREF ] : "", 0, 0, error, callDetails.evt));
                                }
                            }
                        }, false));
                        _autoUnhandledPromiseInstrumented = true;
                        extConfig.autoUnhandledPromiseInstrumented = _autoUnhandledPromiseInstrumented;
                    }
                }
                function _throwInternal(severity, msgId, msg, properties, isUserAct) {
                    _self[_DYN_DIAG_LOG ]().throwInternal(severity, msgId, msg, properties, isUserAct);
                }
                function _initDefaults() {
                    _eventTracking = null;
                    _pageTracking = null;
                    _pageViewManager = null;
                    _pageViewPerformanceManager = null;
                    _pageVisitTimeManager = null;
                    _preInitTelemetryInitializers = null;
                    _isBrowserLinkTrackingEnabled = false;
                    _browserLinkInitializerAdded = false;
                    _enableAutoRouteTracking = false;
                    _historyListenerAdded = false;
                    _disableExceptionTracking = false;
                    _autoExceptionInstrumented = false;
                    _enableUnhandledPromiseRejectionTracking = false;
                    _autoUnhandledPromiseInstrumented = false;
                    var location = getLocation(true);
                    _prevUri = location && location[_DYN_HREF ] || "";
                    _currUri = null;
                    _evtNamespace = null;
                }
                objDefineAccessors(_self, "_pageViewManager", function () { return _pageViewManager; });
                objDefineAccessors(_self, "_pageViewPerformanceManager", function () { return _pageViewPerformanceManager; });
                objDefineAccessors(_self, "_pageVisitTimeManager", function () { return _pageVisitTimeManager; });
                objDefineAccessors(_self, "_evtNamespace", function () { return "." + _evtNamespace; });
            });
            return _this;
        }
        AnalyticsPlugin.Version = '2.8.6';
        AnalyticsPlugin.getDefaultConfig = _getDefaultConfig;
        return AnalyticsPlugin;
    }(BaseTelemetryPlugin));

    var MSCONTENT_PARTB_VERSION = "1.0";
    var CONTENT_VERSION = "2.0";
    var MAX_CONTENTNAME_LENGTH = 200;

    var doNotTrackFieldName = "data-bi-dnt";
    var manualTrackOnlyFieldName = "data-bi-mto";
    function _removeNonObjectsAndInvalidElements(overrideConfig, attributeNamesExpectedObjects) {
        _removeInvalidElements(overrideConfig);
        arrForEach(attributeNamesExpectedObjects, function (objectName, i) {
            if (isObject(overrideConfig[objectName])) {
                _removeInvalidElements(overrideConfig[objectName]);
            }
            else {
                delete overrideConfig[objectName];
            }
        });
    }
    function _removeInvalidElements(object) {
        objForEachKey(object, function (property, value) {
            if (!isValueAssigned(value) ||
                (JSON.stringify(value) === "{}" && (property !== "callback"))) {
                delete object[property];
            }
        });
    }
    function _getIntersectionArea(rect1, rect2) {
        var x11 = rect1.left;
        var y11 = rect1.top;
        var x12 = rect1.right;
        var y12 = rect1.bottom;
        var x21 = rect2.left;
        var y21 = rect2.top;
        var x22 = rect2.right;
        var y22 = rect2.bottom;
        var xOverlap = Math.max(0, Math.min(x12, x22) - Math.max(x11, x21));
        var yOverlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));
        return xOverlap * yOverlap;
    }
    function _findClosestAnchor(element) {
        return _walkUpDomChainWithElementValidation(element, _isElementAnAnchor);
    }
    function _walkUpDomChainWithElementValidation(el, validationMethod, validationMethodParam) {
        var element = el;
        if (element) {
            element = _returnDomObjectIfjQuery(element);
            while (!validationMethod(element, validationMethodParam)) {
                element = element.parentNode;
                element = _returnDomObjectIfjQuery(element);
                if (!element || !(element.getAttribute)) {
                    return null;
                }
            }
            return element;
        }
    }
    function _isElementAnAnchor(element) {
        return element.nodeName === "A";
    }
    function _returnDomObjectIfjQuery(element) {
        return element;
    }
    function _isElementTrulyVisible(element, viewportBoundingRect) {
        element = _returnDomObjectIfjQuery(element);
        var rect = element.getBoundingClientRect();
        var intersectionArea = _getIntersectionArea(rect, viewportBoundingRect);
        if (intersectionArea > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    function _extractFieldFromObject(obj, fieldName) {
        var fieldValue;
        if (obj && obj[fieldName]) {
            fieldValue = obj[fieldName];
            delete obj[fieldName];
        }
        return fieldValue;
    }
    function _isRightClick(evt) {
        if ("which" in evt) {
            return (evt.which === 3);
        }
        else if ("button" in evt) {
            return (evt.button === 2);
        }
    }
    function _isLeftClick(evt) {
        if ("which" in evt) {
            return (evt.which === 1);
        }
        else if ("button" in evt) {
            return (evt.button === 1);
        }
    }
    function _isMiddleClick(evt) {
        if ("which" in evt) {
            return (evt.which === 2);
        }
        else if ("button" in evt) {
            return (evt.button === 4);
        }
    }
    function _isKeyboardEnter(evt) {
        if ("keyCode" in evt) {
            return (evt.keyCode === 13);
        }
    }
    function _isKeyboardSpace(evt) {
        if ("keyCode" in evt) {
            return (evt.keyCode === 32);
        }
    }
    function _isElementDnt(element, deprecated) {
        var dntElement = _findClosestByAttribute(element, doNotTrackFieldName);
        if (!isValueAssigned(dntElement)) {
            return false;
        }
        return true;
    }
    function _isClickTelemetryAllowed(element, overrideValues) {
        if (overrideValues &&
            overrideValues.isAuto &&
            isValueAssigned(_findClosestByAttribute(element, manualTrackOnlyFieldName))) {
            return false;
        }
        if (_isElementDnt(element)) {
            return false;
        }
        return true;
    }
    function _findClosestByAttribute(el, attribute) {
        return _walkUpDomChainWithElementValidation(el, _isAttributeInElement, attribute);
    }
    function _isAttributeInElement(element, attributeToLookFor) {
        var value = element.getAttribute(attributeToLookFor);
        return isValueAssigned(value) || value === "";
    }
    function _bracketIt(str) {
        return "[" + str + "]";
    }
    function _debounce(firstCallFunction, secondCallFunction, wait, context) {
        var timeout;
        return function () {
            var args = arguments;
            var later = function () {
                timeout = 0;
                if (secondCallFunction) {
                    secondCallFunction.apply(context, args);
                }
            };
            var callNow = !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                if (firstCallFunction) {
                    firstCallFunction.apply(context, args);
                }
            }
        };
    }
    function _getScrollOffset() {
        var scrollOffset = { h: 0, v: 0 };
        var win = getWindow();
        var doc = getDocument();
        if (doc && win) {
            scrollOffset = {
                h: parseInt(doc.body.scrollLeft || doc.documentElement.scrollLeft || win.pageXOffset, 10),
                v: parseInt(doc.body.scrollTop || doc.documentElement.scrollTop || win.pageYOffset, 10)
            };
        }
        return scrollOffset;
    }
    function _getViewportDimensions() {
        var viewport = { h: 0, w: 0 };
        var win = getWindow();
        var doc = getDocument();
        if (win && doc && win.screen) {
            var body = doc.body || {};
            var docElem = doc.documentElement || {};
            viewport.h = win.innerHeight || body.clientHeight || docElem.clientHeight;
            viewport.w = win.innerWidth || body.clientWidth || docElem.clientWidth;
        }
        return viewport;
    }
    function _getViewportBoundingRect(viewportDimensions) {
        var viewportBoundingRect = {
            top: 0,
            bottom: viewportDimensions.h,
            left: 0,
            right: viewportDimensions.w
        };
        return viewportBoundingRect;
    }

    var clickCaptureInputTypes$1 = { BUTTON: true, CHECKBOX: true, RADIO: true, RESET: true, SUBMIT: true };
    function _getImageHref(element) {
        var temp = element;
        if (temp) {
            var parent = _findClosestAnchor(temp);
            if (parent && parent.length === 1) {
                if (parent[0].href) {
                    return parent[0].href;
                }
                else if (parent[0].src) {
                    return (parent[0].src);
                }
            }
        }
        return "";
    }
    function _isPii(element) {
        if (!element || !element.attributes) {
            return false;
        }
        try {
            var pii = element.getAttribute("data-dc");
            if (isValueAssigned(pii)) {
                if (pii.toLowerCase() === "pii") {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        catch (e) {
            return false;
        }
    }
    function _getUri(config, location) {
        if (config.coreData && config.coreData.requestUri && config.coreData.requestUri !== "") {
            return config.coreData.requestUri;
        }
        return _sanitizeUrl(config, location);
    }
    function _sanitizeUrl(config, location) {
        if (!location) {
            return null;
        }
        var url = location.protocol + "//" + (location.hostname || location.host) +
            (isValueAssigned(location.port) ? ":" + location.port : "") +
            location.pathname;
        if (config.urlCollectQuery) {
            var query = location.search;
            if (!query) {
                var hash = location.hash || "";
                var queryIndex = hash.indexOf("?");
                if (queryIndex !== -1) {
                    query = hash.slice(queryIndex);
                }
            }
            url += query;
        }
        if (config.urlCollectHash) {
            url += (location.hash || "");
        }
        return url;
    }
    function _getPageName(config, overrideValues) {
        if (overrideValues && overrideValues.pageName) {
            return overrideValues.pageName;
        }
        else if (config.callback && typeof (config.callback.pageName) === "function") {
            return config.callback.pageName();
        }
        else if (config.coreData && config.coreData.pageName) {
            return config.coreData.pageName;
        }
        else {
            var loc = getLocation() || {};
            var pagename = loc.pathname || "";
            var fragments = pagename.replace(/(^\/+|\/+$)/g, "").split("/");
            if (fragments && fragments[fragments.length - 1]) {
                pagename = fragments[fragments.length - 1];
            }
            else {
                pagename = "Home";
            }
            return pagename;
        }
    }
    function _getSignedInStatus(config) {
        var isLoggedIn = config.callback && typeof (config.callback.signedinStatus) === "function" ?
            config.callback.signedinStatus() : config.isLoggedIn;
        return isLoggedIn;
    }
    function _getClientCookies(config, traceLogger) {
        var cookies = "";
        var uniqueCookies = {};
        var mergedCookies = [];
        var cookiesConfig = config.cookiesToCollect;
        if (config.shareAuthStatus === false) {
            mergedCookies = cookiesConfig;
        }
        else {
            arrForEach(cookiesConfig, function (value) {
                if (value !== "ANON") {
                    mergedCookies.push(value);
                }
            });
        }
        var cookieValue;
        try {
            try {
                if (isWindowObjectAvailable && window.varCustomerCookies && window.varCustomerCookies.length > 0) {
                    mergedCookies = mergedCookies.concat(window.varCustomerCookies);
                }
            }
            catch (e) {
                _throwInternal(traceLogger, 1 , 512 , "Failed to get cookies ");
            }
            arrForEach(mergedCookies, function (value) {
                if (!uniqueCookies.hasOwnProperty(value)) {
                    uniqueCookies[value] = "";
                    if (isDocumentObjectAvailable) {
                        cookieValue = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(value).replace(/[\-\.\+\*]/g, "\\$&") +
                            "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1"));
                        if (cookieValue !== "") {
                            cookies += value + "=" + cookieValue + ";";
                        }
                    }
                }
            });
        }
        catch (e) {
            _throwInternal(traceLogger, 1 , 512 , "Failed to get cookies ");
        }
        return cookies;
    }
    function _getClickTarget(element) {
        var clickTarget = "";
        switch (element.tagName) {
            case "A":
            case "AREA":
                clickTarget = element.href || "";
                break;
            case "IMG":
                clickTarget = _getImageHref(element);
                break;
            case "INPUT":
                var type = element.type;
                if (type && (clickCaptureInputTypes$1[type.toUpperCase()])) {
                    var loc = getLocation() || {};
                    if (element.form) {
                        clickTarget = element.form.action || (loc.pathname || "");
                    }
                    else {
                        clickTarget = loc.pathname || "";
                    }
                }
                break;
        }
        return clickTarget;
    }
    function onDomLoaded(callback, parentEvtNamespace) {
        var evtNamespace = mergeEvtNamespace(createUniqueNamespace("onDomLoaded"), parentEvtNamespace);
        onDomReadyDo(function () {
            if (isDocumentObjectAvailable && document.readyState === "complete") {
                callback();
            }
            else {
                var win_1 = getWindow();
                if (win_1) {
                    eventOn(win_1, "load", function () {
                        callback && callback();
                        callback = null;
                        eventOff(win_1, null, null, evtNamespace);
                    }, evtNamespace);
                }
            }
        });
    }
    function onDomReadyDo(f) {
        var doc = getDocument() || {};
        /in/.test(doc.readyState) ? setTimeout(function () { onDomReadyDo(f); }, 100) : f.call();
    }

    exports.Behavior = void 0;
    (function (Behavior) {
        Behavior[Behavior["UNDEFINED"] = 0] = "UNDEFINED";
        Behavior[Behavior["NAVIGATIONBACK"] = 1] = "NAVIGATIONBACK";
        Behavior[Behavior["NAVIGATION"] = 2] = "NAVIGATION";
        Behavior[Behavior["NAVIGATIONFORWARD"] = 3] = "NAVIGATIONFORWARD";
        Behavior[Behavior["APPLY"] = 4] = "APPLY";
        Behavior[Behavior["REMOVE"] = 5] = "REMOVE";
        Behavior[Behavior["SORT"] = 6] = "SORT";
        Behavior[Behavior["EXPAND"] = 7] = "EXPAND";
        Behavior[Behavior["REDUCE"] = 8] = "REDUCE";
        Behavior[Behavior["CONTEXTMENU"] = 9] = "CONTEXTMENU";
        Behavior[Behavior["TAB"] = 10] = "TAB";
        Behavior[Behavior["COPY"] = 11] = "COPY";
        Behavior[Behavior["EXPERIMENTATION"] = 12] = "EXPERIMENTATION";
        Behavior[Behavior["PRINT"] = 13] = "PRINT";
        Behavior[Behavior["SHOW"] = 14] = "SHOW";
        Behavior[Behavior["HIDE"] = 15] = "HIDE";
        Behavior[Behavior["MAXIMIZE"] = 16] = "MAXIMIZE";
        Behavior[Behavior["MINIMIZE"] = 17] = "MINIMIZE";
        Behavior[Behavior["BACKBUTTON"] = 18] = "BACKBUTTON";
        Behavior[Behavior["STARTPROCESS"] = 20] = "STARTPROCESS";
        Behavior[Behavior["PROCESSCHECKPOINT"] = 21] = "PROCESSCHECKPOINT";
        Behavior[Behavior["COMPLETEPROCESS"] = 22] = "COMPLETEPROCESS";
        Behavior[Behavior["SCENARIOCANCEL"] = 23] = "SCENARIOCANCEL";
        Behavior[Behavior["DOWNLOADCOMMIT"] = 40] = "DOWNLOADCOMMIT";
        Behavior[Behavior["DOWNLOAD"] = 41] = "DOWNLOAD";
        Behavior[Behavior["SEARCHAUTOCOMPLETE"] = 60] = "SEARCHAUTOCOMPLETE";
        Behavior[Behavior["SEARCH"] = 61] = "SEARCH";
        Behavior[Behavior["SEARCHINITIATE"] = 62] = "SEARCHINITIATE";
        Behavior[Behavior["TEXTBOXINPUT"] = 63] = "TEXTBOXINPUT";
        Behavior[Behavior["PURCHASE"] = 80] = "PURCHASE";
        Behavior[Behavior["ADDTOCART"] = 81] = "ADDTOCART";
        Behavior[Behavior["VIEWCART"] = 82] = "VIEWCART";
        Behavior[Behavior["ADDWISHLIST"] = 83] = "ADDWISHLIST";
        Behavior[Behavior["FINDSTORE"] = 84] = "FINDSTORE";
        Behavior[Behavior["CHECKOUT"] = 85] = "CHECKOUT";
        Behavior[Behavior["REMOVEFROMCART"] = 86] = "REMOVEFROMCART";
        Behavior[Behavior["PURCHASECOMPLETE"] = 87] = "PURCHASECOMPLETE";
        Behavior[Behavior["VIEWCHECKOUTPAGE"] = 88] = "VIEWCHECKOUTPAGE";
        Behavior[Behavior["VIEWCARTPAGE"] = 89] = "VIEWCARTPAGE";
        Behavior[Behavior["VIEWPDP"] = 90] = "VIEWPDP";
        Behavior[Behavior["UPDATEITEMQUANTITY"] = 91] = "UPDATEITEMQUANTITY";
        Behavior[Behavior["INTENTTOBUY"] = 92] = "INTENTTOBUY";
        Behavior[Behavior["PUSHTOINSTALL"] = 93] = "PUSHTOINSTALL";
        Behavior[Behavior["SIGNIN"] = 100] = "SIGNIN";
        Behavior[Behavior["SIGNOUT"] = 101] = "SIGNOUT";
        Behavior[Behavior["SOCIALSHARE"] = 120] = "SOCIALSHARE";
        Behavior[Behavior["SOCIALLIKE"] = 121] = "SOCIALLIKE";
        Behavior[Behavior["SOCIALREPLY"] = 122] = "SOCIALREPLY";
        Behavior[Behavior["CALL"] = 123] = "CALL";
        Behavior[Behavior["EMAIL"] = 124] = "EMAIL";
        Behavior[Behavior["COMMUNITY"] = 125] = "COMMUNITY";
        Behavior[Behavior["SOCIALFOLLOW"] = 126] = "SOCIALFOLLOW";
        Behavior[Behavior["VOTE"] = 140] = "VOTE";
        Behavior[Behavior["SURVEYINITIATE"] = 141] = "SURVEYINITIATE";
        Behavior[Behavior["SURVEYCOMPLETE"] = 142] = "SURVEYCOMPLETE";
        Behavior[Behavior["REPORTAPPLICATION"] = 143] = "REPORTAPPLICATION";
        Behavior[Behavior["REPORTREVIEW"] = 144] = "REPORTREVIEW";
        Behavior[Behavior["SURVEYCHECKPOINT"] = 145] = "SURVEYCHECKPOINT";
        Behavior[Behavior["CONTACT"] = 160] = "CONTACT";
        Behavior[Behavior["REGISTRATIONINITIATE"] = 161] = "REGISTRATIONINITIATE";
        Behavior[Behavior["REGISTRATIONCOMPLETE"] = 162] = "REGISTRATIONCOMPLETE";
        Behavior[Behavior["CANCELSUBSCRIPTION"] = 163] = "CANCELSUBSCRIPTION";
        Behavior[Behavior["RENEWSUBSCRIPTION"] = 164] = "RENEWSUBSCRIPTION";
        Behavior[Behavior["CHANGESUBSCRIPTION"] = 165] = "CHANGESUBSCRIPTION";
        Behavior[Behavior["REGISTRATIONCHECKPOINT"] = 166] = "REGISTRATIONCHECKPOINT";
        Behavior[Behavior["CHATINITIATE"] = 180] = "CHATINITIATE";
        Behavior[Behavior["CHATEND"] = 181] = "CHATEND";
        Behavior[Behavior["TRIALSIGNUP"] = 200] = "TRIALSIGNUP";
        Behavior[Behavior["TRIALINITIATE"] = 201] = "TRIALINITIATE";
        Behavior[Behavior["SIGNUP"] = 210] = "SIGNUP";
        Behavior[Behavior["FREESIGNUP"] = 211] = "FREESIGNUP";
        Behavior[Behavior["PARTNERREFERRAL"] = 220] = "PARTNERREFERRAL";
        Behavior[Behavior["LEARNLOWFUNNEL"] = 230] = "LEARNLOWFUNNEL";
        Behavior[Behavior["LEARNHIGHFUNNEL"] = 231] = "LEARNHIGHFUNNEL";
        Behavior[Behavior["SHOPPINGINTENT"] = 232] = "SHOPPINGINTENT";
        Behavior[Behavior["VIDEOSTART"] = 240] = "VIDEOSTART";
        Behavior[Behavior["VIDEOPAUSE"] = 241] = "VIDEOPAUSE";
        Behavior[Behavior["VIDEOCONTINUE"] = 242] = "VIDEOCONTINUE";
        Behavior[Behavior["VIDEOCHECKPOINT"] = 243] = "VIDEOCHECKPOINT";
        Behavior[Behavior["VIDEOJUMP"] = 244] = "VIDEOJUMP";
        Behavior[Behavior["VIDEOCOMPLETE"] = 245] = "VIDEOCOMPLETE";
        Behavior[Behavior["VIDEOBUFFERING"] = 246] = "VIDEOBUFFERING";
        Behavior[Behavior["VIDEOERROR"] = 247] = "VIDEOERROR";
        Behavior[Behavior["VIDEOMUTE"] = 248] = "VIDEOMUTE";
        Behavior[Behavior["VIDEOUNMUTE"] = 249] = "VIDEOUNMUTE";
        Behavior[Behavior["VIDEOFULLSCREEN"] = 250] = "VIDEOFULLSCREEN";
        Behavior[Behavior["VIDEOUNFULLSCREEN"] = 251] = "VIDEOUNFULLSCREEN";
        Behavior[Behavior["VIDEOREPLAY"] = 252] = "VIDEOREPLAY";
        Behavior[Behavior["VIDEOPLAYERLOAD"] = 253] = "VIDEOPLAYERLOAD";
        Behavior[Behavior["VIDEOPLAYERCLICK"] = 254] = "VIDEOPLAYERCLICK";
        Behavior[Behavior["VIDEOVOLUMECONTROL"] = 255] = "VIDEOVOLUMECONTROL";
        Behavior[Behavior["VIDEOAUDIOTRACKCONTROL"] = 256] = "VIDEOAUDIOTRACKCONTROL";
        Behavior[Behavior["VIDEOCLOSEDCAPTIONCONTROL"] = 257] = "VIDEOCLOSEDCAPTIONCONTROL";
        Behavior[Behavior["VIDEOCLOSEDCAPTIONSTYLE"] = 258] = "VIDEOCLOSEDCAPTIONSTYLE";
        Behavior[Behavior["VIDEORESOLUTIONCONTROL"] = 259] = "VIDEORESOLUTIONCONTROL";
        Behavior[Behavior["VIRTUALEVENTJOIN"] = 260] = "VIRTUALEVENTJOIN";
        Behavior[Behavior["VIRTUALEVENTEND"] = 261] = "VIRTUALEVENTEND";
        Behavior[Behavior["JOINTEAMSMEETINGEVENT"] = 262] = "JOINTEAMSMEETINGEVENT";
        Behavior[Behavior["IMPRESSION"] = 280] = "IMPRESSION";
        Behavior[Behavior["CLICK"] = 281] = "CLICK";
        Behavior[Behavior["RICHMEDIACOMPLETE"] = 282] = "RICHMEDIACOMPLETE";
        Behavior[Behavior["ADBUFFERING"] = 283] = "ADBUFFERING";
        Behavior[Behavior["ADERROR"] = 284] = "ADERROR";
        Behavior[Behavior["ADSTART"] = 285] = "ADSTART";
        Behavior[Behavior["ADCOMPLETE"] = 286] = "ADCOMPLETE";
        Behavior[Behavior["ADSKIP"] = 287] = "ADSKIP";
        Behavior[Behavior["ADTIMEOUT"] = 288] = "ADTIMEOUT";
        Behavior[Behavior["OTHER"] = 300] = "OTHER";
    })(exports.Behavior || (exports.Behavior = {}));

    function _getMetaData(metaTags, coreData, metaTagName) {
        var value = "";
        if (coreData && coreData[metaTagName]) {
            value = coreData[metaTagName];
        }
        else if (metaTags) {
            value = metaTags[metaTagName];
        }
        return value;
    }
    var WebEvent = /** @class */ (function () {
        function WebEvent(_webAnalyticsPlugin, _config, _contentHandler, _id, _pageTagsCallback, metaTags, _traceLogger) {
            this._webAnalyticsPlugin = _webAnalyticsPlugin;
            this._config = _config;
            this._contentHandler = _contentHandler;
            this._id = _id;
            this._pageTagsCallback = _pageTagsCallback;
            this.metaTags = metaTags;
            this._traceLogger = _traceLogger;
            this._pageTags = {};
        }
        WebEvent.prototype._setBasicProperties = function (event, overrideValues) {
            event.ver = MSCONTENT_PARTB_VERSION;
            event.id = this._id.getLastPageViewId();
            if (!isValueAssigned(event.name)) {
                event.name = _getPageName(this._config, overrideValues);
            }
            if (!isValueAssigned(event.uri) && isWindowObjectAvailable) {
                event.uri = _getUri(this._config, getLocation());
            }
        };
        WebEvent.prototype._setCommonProperties = function (event, eventProperties, overrideValues) {
            var _self = this;
            _self._setBasicProperties(event, overrideValues);
            _self._setPageTags(event, overrideValues);
            _self._pageTypeMetaTag = _getMetaData(_self.metaTags, _self._config.coreData, "pageType");
            _self._marketMetaTag = _getMetaData(_self.metaTags, _self._config.coreData, "market");
            _self._behaviorMetaTag = _getMetaData(_self.metaTags, _self._config.coreData, "behavior");
            if (isValueAssigned(overrideValues.pageType)) {
                event.pageType = overrideValues.pageType;
            }
            if (isValueAssigned(_self._pageTypeMetaTag) && !isValueAssigned(event.pageType)) {
                event.pageType = _self._pageTypeMetaTag;
            }
            if (isValueAssigned(_self._marketMetaTag)) {
                event.market = _self._marketMetaTag;
            }
            event.isLoggedIn = _getSignedInStatus(_self._config);
            eventProperties.cookieEnabled = areCookiesSupported();
        };
        WebEvent.prototype._setPageTags = function (event, overrideValues) {
            var _self = this;
            _self._pageTags = {};
            if (_self.metaTags) {
                _self._pageTags.metaTags = _self._pageTags.metaTags || {};
                objForEachKey(_self.metaTags, function (metaTag, value) {
                    if (metaTag !== "behavior" && metaTag !== "market" && metaTag !== "pageType") {
                        _self._pageTags.metaTags[metaTag] = value;
                    }
                });
            }
            if (_self._config.coreData && _self._config.coreData.pageTags) {
                _self._pageTags = extend(true, _self._pageTags, _self._config.coreData.pageTags);
            }
            if (_self._pageTagsCallback) {
                _self._pageTags = extend(true, _self._pageTags, _self._pageTagsCallback());
            }
            if (isValueAssigned(overrideValues.pageTags)) {
                _self._pageTags = extend(true, _self._pageTags, overrideValues.pageTags);
            }
            event.properties = event.properties || {};
            event.properties["pageTags"] = _self._pageTags;
        };
        WebEvent.prototype._getBehavior = function (overrideValues) {
            var behavior;
            if (overrideValues && isValueAssigned(overrideValues.behavior)) {
                behavior = overrideValues.behavior;
            }
            else if (isValueAssigned(this._behaviorMetaTag)) {
                behavior = this._behaviorMetaTag;
            }
            return this._getValidBehavior(behavior);
        };
        WebEvent.prototype._getValidBehavior = function (behavior) {
            if (isValueAssigned(behavior)) {
                var result = void 0;
                var value = parseInt(behavior);
                if (!isNaN(value)) {
                    result = value;
                }
                else {
                    result = exports.Behavior[behavior];
                }
                if (result in exports.Behavior) {
                    return result;
                }
            }
            return 0;
        };
        WebEvent.prototype._getContentFormatted = function (content) {
            if (isValueAssigned(content)) {
                if (isArray(content)) {
                    return JSON.stringify(content);
                }
                else {
                    return _bracketIt(JSON.stringify(content));
                }
            }
            return undefined;
        };
        return WebEvent;
    }());

    var ContentUpdate = /** @class */ (function (_super) {
        __extendsFn(ContentUpdate, _super);
        function ContentUpdate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentUpdate.prototype.trackContentUpdate = function (contentUpdateEvent, properties) {
            var ext = {};
            ext["web"] = {};
            ext["web"]["isManual"] = contentUpdateEvent.isManual;
            var event = {
                name: "Ms.Web.ContentUpdate",
                baseType: "ContentUpdateData",
                ext: ext,
                data: {},
                baseData: {},
                latency: 3
            };
            arrForEach([
                "name",
                "uri",
                "market",
                "pageType",
                "isLoggedIn",
                "id",
                "properties",
                "ver",
                "actionType",
                "behavior",
                "pageHeight",
                "content",
                "contentVer",
                "vpHeight",
                "vpWidth",
                "vScrollOffset",
                "hScrollOffset"
            ], function (key) {
                event.baseData[key] = contentUpdateEvent[key];
            });
            objForEachKey(properties, function (property, value) {
                if (!event.data[property]) {
                    event.data[property] = value;
                }
            });
            this._webAnalyticsPlugin.core.track(event);
        };
        ContentUpdate.prototype.captureContentUpdate = function (overrideValues, customProperties) {
            overrideValues = !isValueAssigned(overrideValues) ? {} : overrideValues;
            var event = {};
            var properties = isValueAssigned(customProperties) ? customProperties : {};
            this._setCommonProperties(event, properties, overrideValues);
            event.behavior = this._getBehavior(overrideValues);
            if (isValueAssigned(overrideValues.actionType)) {
                event.actionType = overrideValues.actionType;
            }
            var viewportDim = _getViewportDimensions();
            var scrollOffset = _getScrollOffset();
            event.pageHeight = isDocumentObjectAvailable ? document.body.scrollHeight : null;
            event.vpHeight = viewportDim.h;
            event.vpWidth = viewportDim.w;
            event.vScrollOffset = scrollOffset.v;
            event.hScrollOffset = scrollOffset.h;
            event.contentVer = CONTENT_VERSION;
            event.isManual = !overrideValues.isAuto;
            var content = this._getContentFormatted(overrideValues.content) || JSON.stringify(this._contentHandler.getVisibleContent());
            if (content) {
                event.content = content;
            }
            if (isValueAssigned(overrideValues.isDomComplete)) {
                properties.isDomComplete = overrideValues.isDomComplete;
            }
            else {
                properties.isDomComplete = false;
            }
            this.trackContentUpdate(event, properties);
        };
        return ContentUpdate;
    }(WebEvent));

    var ActionType = {
        CLICKLEFT: "CL",
        CLICKRIGHT: "CR",
        CLICKMIDDLE: "CM",
        SCROLL: "S",
        ZOOM: "Z",
        RESIZE: "R",
        KEYBOARDENTER: "KE",
        KEYBOARDSPACE: "KS",
        OTHER: "O"
    };
    var EventType;
    (function (EventType) {
        EventType[EventType["PAGE_ACTION"] = 0] = "PAGE_ACTION";
        EventType[EventType["CONTENT_UPDATE"] = 1] = "CONTENT_UPDATE";
    })(EventType || (EventType = {}));

    var PageAction = /** @class */ (function (_super) {
        __extendsFn(PageAction, _super);
        function PageAction() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PageAction.prototype.trackPageAction = function (pageActionEvent, properties) {
            var ext = {};
            ext["web"] = {};
            ext["web"]["isManual"] = pageActionEvent.isManual;
            var event = {
                name: "Ms.Web.PageAction",
                baseType: "PageActionData",
                ext: ext,
                data: {},
                baseData: {},
                latency: 1
            };
            if (!isUndefined(pageActionEvent.sync)) {
                event.sync = pageActionEvent.sync;
            }
            event.baseData["name"] = pageActionEvent.name;
            event.baseData["uri"] = pageActionEvent.uri;
            event.baseData["market"] = pageActionEvent.market;
            event.baseData["pageType"] = pageActionEvent.pageType;
            event.baseData["isLoggedIn"] = pageActionEvent.isLoggedIn;
            event.baseData["id"] = pageActionEvent.id;
            event.baseData["properties"] = pageActionEvent.properties;
            event.baseData["ver"] = pageActionEvent.ver;
            event.baseData["actionType"] = pageActionEvent.actionType;
            event.baseData["behavior"] = pageActionEvent.behavior;
            event.baseData["clickCoordinates"] = pageActionEvent.clickCoordinates;
            event.baseData["content"] = pageActionEvent.content;
            event.baseData["contentVer"] = pageActionEvent.contentVer;
            event.baseData["targetUri"] = pageActionEvent.targetUri;
            objForEachKey(properties, function (property, value) {
                if (!event.data[property]) {
                    event.data[property] = value;
                }
            });
            this._webAnalyticsPlugin.core.track(event);
        };
        PageAction.prototype.capturePageAction = function (element, overrideValues, customProperties, isRightClick) {
            overrideValues = !isValueAssigned(overrideValues) ? {} : overrideValues;
            var pageActionEvent = {};
            var pageActionProperties = isValueAssigned(customProperties) ? customProperties : {};
            this._setCommonProperties(pageActionEvent, pageActionProperties, overrideValues);
            pageActionEvent.isManual = !overrideValues.isAuto;
            pageActionEvent.behavior = this._getBehavior(overrideValues);
            var elementContent = {};
            element = _returnDomObjectIfjQuery(element);
            if (isRightClick) {
                pageActionEvent.behavior = 9 ;
            }
            else {
                var config = this._config || {};
                if (element && isUndefined(config.syncPageActionNavClick) || config.syncPageActionNavClick) {
                    if (overrideValues.actionType === ActionType.CLICKLEFT || overrideValues.actionType === ActionType.KEYBOARDENTER) {
                        if (element.tagName.toLowerCase() === "a") {
                            var href = (element.getAttribute("href") || "").toLowerCase();
                            if (href && (strStartsWith(href, "https:") || strStartsWith(href, "http:") || strStartsWith(href, ".") || strStartsWith(href, "/"))) {
                                pageActionEvent.sync = 3 ;
                            }
                        }
                    }
                }
            }
            if (element) {
                pageActionEvent.targetUri = _getClickTarget(element);
                elementContent = this._contentHandler.getElementContent(element, EventType.PAGE_ACTION);
                elementContent = extend(elementContent, this._getCustomTags(element));
                if (elementContent && elementContent.bhvr && !isValueAssigned(overrideValues.behavior)) {
                    var currentBehavior = _extractFieldFromObject(elementContent, "bhvr");
                    pageActionEvent.behavior = this._getValidBehavior(currentBehavior);
                }
            }
            if (isValueAssigned(overrideValues.actionType)) {
                pageActionEvent.actionType = overrideValues.actionType;
            }
            if (isValueAssigned(overrideValues.clickCoordinateX) && isValueAssigned(overrideValues.clickCoordinateY)) {
                pageActionEvent.clickCoordinates = overrideValues.clickCoordinateX + "X" + overrideValues.clickCoordinateY;
            }
            if (isValueAssigned(overrideValues.targetUri)) {
                pageActionEvent.targetUri = overrideValues.targetUri;
            }
            pageActionEvent.contentVer = CONTENT_VERSION;
            var currentContent = overrideValues.content || elementContent;
            if (!isArray(currentContent)) {
                var pageActionContentTags = this._config.callback.pageActionContentTags;
                currentContent = extend(currentContent, typeof pageActionContentTags === "function" ? pageActionContentTags(element) : {}, overrideValues && overrideValues.contentTags ? overrideValues.contentTags : {});
            }
            pageActionEvent.content = this._getContentFormatted(currentContent);
            pageActionProperties.timeToAction = this._getTimeToClick();
            pageActionProperties.refUri = isValueAssigned(overrideValues.refUri) ? overrideValues.refUri : this._config.coreData.referrerUri;
            var cookiesValue = _getClientCookies(this._config, this._traceLogger);
            if (cookiesValue) {
                pageActionProperties.cookies = cookiesValue;
            }
            this.trackPageAction(pageActionEvent, pageActionProperties);
        };
        PageAction.prototype._getCustomTags = function (obj) {
            var customParameters = {};
            while (obj) {
                if (!_isPii(obj)) {
                    for (var attr in obj.attributes) {
                        if (attr) {
                            if (obj.attributes[attr]) {
                                var nn = obj.attributes[attr].name;
                                if (nn) {
                                    if (nn.toLowerCase().indexOf("ms.") === 0) {
                                        customParameters[nn] = obj.attributes[attr].value;
                                    }
                                }
                            }
                        }
                    }
                }
                obj = (obj.parentElement || obj.parentNode);
            }
            return customParameters;
        };
        PageAction.prototype._getTimeToClick = function () {
            var perf = getPerformance();
            if (perf && perf.timing) {
                var isNavigationStart = perf.timing.navigationStart;
                if (isNavigationStart && isNavigationStart !== 0) {
                    return new Date().getTime() - isNavigationStart;
                }
            }
            return -1;
        };
        return PageAction;
    }(WebEvent));

    var PageUnload = /** @class */ (function (_super) {
        __extendsFn(PageUnload, _super);
        function PageUnload(_webAnalyticsPlugin, _config, _id, _traceLogger, timestamp, maxScroll) {
            var _this = _super.call(this, _webAnalyticsPlugin, _config, null, _id, {}, {}, _traceLogger) || this;
            _this._webAnalyticsPlugin = _webAnalyticsPlugin;
            _this._config = _config;
            _this._id = _id;
            _this._traceLogger = _traceLogger;
            _this._timestamp = timestamp;
            _this._maxScroll = maxScroll;
            return _this;
        }
        PageUnload.prototype.trackPageUnload = function (pageUnloadEvent, properties) {
            var ext = {};
            ext["web"] = {};
            ext["web"]["isManual"] = pageUnloadEvent.isManual;
            var event = {
                name: "Ms.Web.PageUnload",
                baseType: "PageUnloadData",
                ext: ext,
                data: {},
                baseData: {},
                latency: 3
            };
            var config = this._config || {};
            if (isUndefined(config.syncUnloadAction) || config.syncUnloadAction) {
                event.sync = 3 ;
            }
            event.baseData["name"] = pageUnloadEvent.name;
            event.baseData["uri"] = pageUnloadEvent.uri;
            event.baseData["id"] = pageUnloadEvent.id;
            event.baseData["properties"] = pageUnloadEvent.properties;
            event.baseData["ver"] = pageUnloadEvent.ver;
            event.baseData["market"] = pageUnloadEvent.market;
            event.baseData["pageType"] = pageUnloadEvent.pageType;
            event.baseData["isLoggedIn"] = pageUnloadEvent.isLoggedIn;
            objForEachKey(properties, function (property, value) {
                if (!event.data[property]) {
                    event.data[property] = value;
                }
            });
            this._webAnalyticsPlugin.core.track(event);
        };
        PageUnload.prototype.capturePageUnload = function (overrideValues, customProperties) {
            overrideValues = !isValueAssigned(overrideValues) ? {} : overrideValues;
            var event = {};
            var properties = isValueAssigned(customProperties) ? customProperties : {};
            var scrollHeight = isDocumentObjectAvailable ? document.body.scrollHeight : 0;
            this._setBasicProperties(event, overrideValues);
            event.isManual = !overrideValues.isAuto;
            properties.dwellTime = this._timestamp._recordTimeSpan("dwellTime", true);
            properties.scrollDepth = overrideValues.scrollDepth || this._maxScroll.v.toString() + "/" + scrollHeight.toString();
            properties.vpHeight = _getViewportDimensions().h;
            properties.vScrollOffset = overrideValues.vScrollOffset || this._maxScroll.v;
            if (isWindowObjectAvailable) {
                var perf = getPerformance();
                var windowPerformanceTiming = perf ? perf.timing : null;
                if (windowPerformanceTiming && windowPerformanceTiming.loadEventStart && windowPerformanceTiming.navigationStart) {
                    if (windowPerformanceTiming.loadEventStart > 0) {
                        properties.pageLoadTime = windowPerformanceTiming.loadEventStart - windowPerformanceTiming.navigationStart;
                    }
                }
            }
            this.trackPageUnload(event, properties);
        };
        return PageUnload;
    }(WebEvent));

    var PageView = /** @class */ (function (_super) {
        __extendsFn(PageView, _super);
        function PageView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PageView.prototype.capturePageView = function (overrideValues, customProperties) {
            overrideValues = !isValueAssigned(overrideValues) ? {} : overrideValues;
            var pageViewEvent = {};
            var properties = isValueAssigned(customProperties) ? customProperties : {};
            this._setCommonProperties(pageViewEvent, properties, overrideValues);
            pageViewEvent.refUri = isValueAssigned(overrideValues.referrerUri) ? overrideValues.referrerUri : this._config.coreData.referrerUri;
            pageViewEvent.isManual = !overrideValues.isAuto;
            var cookiesValue = _getClientCookies(this._config, this._traceLogger);
            if (cookiesValue) {
                properties.cookies = cookiesValue;
            }
            properties.behavior = this._getBehavior(overrideValues);
            this._webAnalyticsPlugin.trackPageView(pageViewEvent, properties);
        };
        return PageView;
    }(WebEvent));

    var PageViewPerformance = /** @class */ (function (_super) {
        __extendsFn(PageViewPerformance, _super);
        function PageViewPerformance() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PageViewPerformance.prototype.capturePageViewPerformance = function (overrideValues, customProperties) {
            overrideValues = !isValueAssigned(overrideValues) ? {} : overrideValues;
            var event = {};
            var properties = isValueAssigned(customProperties) ? customProperties : {};
            this._setBasicProperties(event, overrideValues);
            this._setPageTags(event, overrideValues);
            event.isManual = !overrideValues.isAuto;
            properties.behavior = this._getBehavior(overrideValues);
            properties.vpHeight = overrideValues.vpHeight;
            properties.vpWidth = overrideValues.vpWidth;
            properties.framework = overrideValues.framework;
            properties.systemTiming = overrideValues.systemTiming;
            properties.customTiming = overrideValues.customTiming;
            this._webAnalyticsPlugin._populatePageViewPerformance(event);
            this._webAnalyticsPlugin.trackPageViewPerformance(event, properties);
        };
        return PageViewPerformance;
    }(WebEvent));

    var clickCaptureInputTypes = { BUTTON: true, CHECKBOX: true, RADIO: true, RESET: true, SUBMIT: true };
    var AutoCaptureHandler = /** @class */ (function () {
        function AutoCaptureHandler(webAnalytics, diagLog) {
            var _this = this;
            var _plugin;
            var _logger;
            var _evtNamespace;
            var _clickAdded;
            var _scrollAdded;
            var _maxScrollAdded;
            var _resizeAdded;
            var _unloadAdded;
            var _domLoadedAdded;
            dynamicProto(AutoCaptureHandler, this, function (_self) {
                _initDefaults();
                _plugin = webAnalytics;
                _logger = diagLog;
                _evtNamespace = mergeEvtNamespace(createUniqueNamespace("AutoCaptureHandler"), _plugin._evtNamespace);
                _self._analyticsPlugin = _plugin;
                _self._traceLogger = _logger;
                _self.pageView = function () {
                    _plugin && _plugin.capturePageView({ isAuto: true });
                };
                _self.onLoad = function () {
                    if (_plugin && !_domLoadedAdded) {
                        onDomLoaded(function () {
                            _plugin && _plugin.capturePageViewPerformance({ isAuto: true });
                            _plugin && _plugin.captureContentUpdate({ isAuto: true, isDomComplete: true });
                        }, _evtNamespace);
                        _domLoadedAdded = true;
                    }
                };
                _self.click = function () {
                    if (!_clickAdded) {
                        var win = getWindow();
                        var doc = getDocument();
                        if (win && win.addEventListener) {
                            var event = (navigator.appVersion.indexOf("MSIE") !== -1) ? "click" : "mousedown";
                            eventOn(win, event, _processClick, _evtNamespace);
                            eventOn(win, "keyup", _processClick, _evtNamespace);
                        }
                        else if (doc && doc.attachEvent) {
                            eventOn(doc, "click", _processClick, _evtNamespace);
                            eventOn(doc, "keyup", _processClick, _evtNamespace);
                        }
                        _clickAdded = true;
                    }
                };
                _self.scroll = function (debounceConfig) {
                    if (!_scrollAdded) {
                        var processScroll = _debounce(
                        null,
                        function () {
                            _plugin && _plugin.captureContentUpdate({ isAuto: true, actionType: ActionType.SCROLL });
                        }, debounceConfig.scroll, _this);
                        eventOn(getWindow(), "scroll", processScroll, _evtNamespace);
                        _scrollAdded = true;
                    }
                };
                _self.maxScroll = function (maxScroll) {
                    if (!_maxScrollAdded) {
                        var getMaxScrollDepth = function () {
                            var currentScroll = _getScrollOffset();
                            maxScroll.v = maxScroll.v > currentScroll.v ? maxScroll.v : currentScroll.v;
                        };
                        eventOn(getWindow(), "scroll", getMaxScrollDepth, _evtNamespace);
                        _maxScrollAdded = true;
                    }
                };
                _self.resize = function (debounceConfig) {
                    if (!_resizeAdded) {
                        var processResize = _debounce(
                        function () {
                            _plugin && _plugin.captureContentUpdate({ isAuto: true, actionType: ActionType.RESIZE });
                        },
                        null, debounceConfig.resize, _this);
                        eventOn(getWindow(), "resize", processResize, _evtNamespace);
                        _resizeAdded = true;
                    }
                };
                _self.onUnload = function () {
                    function _doUnload() {
                        _plugin && _plugin.capturePageUnload({ isAuto: true });
                    }
                    if (!_unloadAdded) {
                        var coreConfig = ((_plugin || {}).core || {}).config;
                        var excludePageUnloadEvents = coreConfig.disablePageUnloadEvents;
                        addPageUnloadEventListener(_doUnload, excludePageUnloadEvents, _evtNamespace);
                        addPageHideEventListener(_doUnload, excludePageUnloadEvents, _evtNamespace);
                        _unloadAdded = true;
                    }
                };
                _self.teardown = function (unloadCtx, unloadState) {
                    eventOff(getWindow(), null, null, _evtNamespace);
                    eventOff(getDocument(), null, null, _evtNamespace);
                    removePageUnloadEventListener(null, _evtNamespace);
                    removePageHideEventListener(null, _evtNamespace);
                    _initDefaults();
                };
                _self._processClick = _processClick;
                function _processClick(clickEvent) {
                    var clickCaptureElements = { A: true, BUTTON: true, AREA: true, INPUT: true };
                    var win = getWindow();
                    clickEvent = clickEvent || win.event;
                    var element = clickEvent.srcElement || clickEvent.target;
                    var overrideValues = {
                        isAuto: true,
                        clickCoordinateX: clickEvent.pageX,
                        clickCoordinateY: clickEvent.pageY
                    };
                    var isRightClick = _isRightClick(clickEvent);
                    if (isRightClick) {
                        overrideValues.actionType = ActionType.CLICKRIGHT;
                    }
                    else if (_isLeftClick(clickEvent)) {
                        overrideValues.actionType = ActionType.CLICKLEFT;
                    }
                    else if (_isKeyboardEnter(clickEvent)) {
                        overrideValues.actionType = ActionType.KEYBOARDENTER;
                    }
                    else if (_isKeyboardSpace(clickEvent)) {
                        overrideValues.actionType = ActionType.KEYBOARDSPACE;
                    }
                    else if (_isMiddleClick(clickEvent)) {
                        overrideValues.actionType = ActionType.CLICKMIDDLE;
                    }
                    else {
                        return;
                    }
                    while (element && element.tagName) {
                        if (element.control && clickCaptureElements[element.control.tagName.toUpperCase()]) {
                            element = element.control;
                        }
                        if (!clickCaptureElements[element.tagName.toUpperCase()]) {
                            element = element.parentElement || element.parentNode;
                            continue;
                        }
                        else {
                            var sendEvent = element.tagName.toUpperCase() === "INPUT" ? clickCaptureInputTypes[element.type.toUpperCase()] : true;
                            if (sendEvent) {
                                _plugin && _plugin.capturePageAction(element, overrideValues, {}, isRightClick);
                            }
                            break;
                        }
                    }
                }
                function _initDefaults() {
                    _self._analyticsPlugin = null;
                    _self._traceLogger = null;
                    _plugin = null;
                    _logger = null;
                    _evtNamespace = null;
                    _scrollAdded = false;
                    _maxScrollAdded = false;
                    _resizeAdded = false;
                    _unloadAdded = false;
                    _domLoadedAdded = false;
                }
            });
        }
        AutoCaptureHandler.__ieDyn=1;
        return AutoCaptureHandler;
    }());

    var _contentBlobFieldNameObjects = {
        longNames: {
            isShortNames: false,
            id: "data-bi-id",
            areaName: "data-bi-area",
            slotNumber: "data-bi-slot",
            contentName: "data-bi-name",
            contentSource: "data-bi-source",
            templateName: "data-bi-view",
            productId: "data-bi-product",
            contentType: "data-bi-type",
            parentId: "data-bi-parentid",
            parentName: "data-bi-parentname"
        },
        shortNames: {
            isShortNames: true,
            id: "data-bi-id",
            areaName: "data-bi-an",
            slotNumber: "data-bi-sn",
            contentName: "data-bi-cn",
            contentSource: "data-bi-cs",
            templateName: "data-bi-tn",
            productId: "data-bi-pid",
            contentType: "data-bi-ct",
            parentId: "data-bi-pi",
            parentName: "data-bi-pn"
        }
    };
    var _keyName = {
        longKeys: {
            parentId: "parentId",
            parentName: "parentName"
        },
        shortKeys: {
            parentId: "pI",
            parentName: "pN"
        }
    };
    var DomContentHandler = /** @class */ (function () {
        function DomContentHandler(_config, _traceLogger) {
            this._config = _config;
            this._traceLogger = _traceLogger;
            this._contentBlobFieldNames = null;
            this._contentBlobFieldNames = this._config.useShortNameForContentBlob === true ?
                _contentBlobFieldNameObjects.shortNames : _contentBlobFieldNameObjects.longNames;
        }
        DomContentHandler.prototype.getMetadata = function () {
            var msTags = {};
            var awaTags = {};
            if (isDocumentObjectAvailable) {
                awaTags = this._getMetaDataFromDOM("awa-", true);
                if (this._config.autoCapture && this._config.autoCapture.msTags) {
                    msTags = this._getMetaDataFromDOM("ms.", false);
                }
            }
            return extend(true, awaTags, msTags);
        };
        DomContentHandler.prototype.getVisibleContent = function () {
            var viewportDim = _getViewportDimensions();
            var viewportBoundingRect = _getViewportBoundingRect(viewportDim);
            var elements = null;
            if (isDocumentObjectAvailable) {
                elements = document.querySelectorAll(_bracketIt(this._contentBlobFieldNames.areaName) + "," +
                    _bracketIt(this._contentBlobFieldNames.slotNumber) + "," +
                    _bracketIt(this._config.biBlobAttributeTag));
            }
            var arrayOfContents = [];
            if (elements) {
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    if (!_isElementDnt(element)) {
                        if (_isElementTrulyVisible(element, viewportBoundingRect)) {
                            var elementContent = this.getElementContent(element, EventType.CONTENT_UPDATE);
                            if (elementContent) {
                                arrayOfContents.push(elementContent);
                            }
                        }
                    }
                }
            }
            return arrayOfContents;
        };
        DomContentHandler.prototype.getElementContent = function (element, eventType) {
            if (!element) {
                return {};
            }
            var elementContent = {};
            var biBlobElement;
            var biBlobValue;
            var contentElement;
            if (!this._isTracked(element)) {
                biBlobElement = _findClosestByAttribute(element, this._config.biBlobAttributeTag);
                if (biBlobElement) {
                    biBlobValue = biBlobElement.getAttribute(this._config.biBlobAttributeTag);
                }
                if (biBlobValue) {
                    try {
                        elementContent = JSON.parse(biBlobValue);
                    }
                    catch (e) {
                        _throwInternal(this._traceLogger, 1 , 506 , "Can not parse " + biBlobValue);
                    }
                }
                else {
                    contentElement = _walkUpDomChainWithElementValidation(element, this._isTrackedWithDataBi);
                    elementContent = extend(elementContent, this._populateElementContentwithDataBi(contentElement, element));
                }
            }
            else if (this._isTrackedWithDataM(element)) {
                biBlobElement = element;
                biBlobValue = biBlobElement.getAttribute(this._config.biBlobAttributeTag);
                try {
                    elementContent = JSON.parse(biBlobValue);
                }
                catch (e) {
                    _throwInternal(this._traceLogger, 1 , 506 , "Can not parse " + biBlobValue);
                }
            }
            else if (this._isTrackedWithDataBi(element)) {
                contentElement = element;
                elementContent = extend(elementContent, this._populateElementContentwithDataBi(contentElement, element));
            }
            _removeInvalidElements(elementContent);
            if (this._config.autoCapture.lineage && eventType === EventType.PAGE_ACTION) {
                elementContent = extend(elementContent, this.getLineageDetails(element));
            }
            if (this._config.autoPopulateParentIdAndParentName) {
                elementContent = extend(elementContent, this._getParentDetails(biBlobElement ? biBlobElement : contentElement, elementContent));
            }
            return elementContent;
        };
        DomContentHandler.prototype.getLineageDetails = function (element) {
            var name = [];
            var identifier = [];
            var lineageDelimiter = ">";
            var elementBiDataAttribute = this._config.biBlobAttributeTag;
            var elementModuleIdAttribute = "data-module-id";
            var containerName;
            var nameValue;
            var idValue;
            while (element) {
                var dataAttr = element.getAttribute(elementBiDataAttribute) || element[elementBiDataAttribute];
                var moduleIdAttribute = element.getAttribute(elementModuleIdAttribute) || element[elementModuleIdAttribute];
                if (dataAttr) {
                    try {
                        var telemetryObject = JSON.parse(dataAttr);
                    }
                    catch (e) {
                        _throwInternal(this._traceLogger, 1 , 507 , "Can not parse " + dataAttr);
                    }
                    if (telemetryObject) {
                        nameValue = telemetryObject.cN || telemetryObject.cT;
                        idValue = telemetryObject.id || undefined;
                        if (nameValue || idValue) {
                            name.push(nameValue);
                            if (moduleIdAttribute) {
                                containerName = nameValue;
                            }
                            identifier.push(idValue);
                        }
                    }
                }
                else {
                    nameValue = element.getAttribute(this._contentBlobFieldNames.contentName) || element.getAttribute(this._contentBlobFieldNames.contentType);
                    idValue = element.getAttribute(this._contentBlobFieldNames.id) || undefined;
                    if (nameValue || idValue) {
                        name.push(nameValue);
                        if (moduleIdAttribute) {
                            containerName = nameValue;
                        }
                        identifier.push(idValue);
                    }
                }
                element = element.parentElement;
            }
            var lineageDetails = {
                lineage: name.join(lineageDelimiter),
                lineageById: identifier.join(lineageDelimiter),
                lineageContainerName: containerName
            };
            return lineageDetails;
        };
        DomContentHandler.prototype._populateElementContentwithDataBi = function (contentElement, element) {
            var elementContent = {};
            if (!contentElement) {
                if (this._config.useDefaultContentName) {
                    contentElement = element;
                }
                else {
                    return elementContent;
                }
            }
            var areaElement = _findClosestByAttribute(contentElement, this._contentBlobFieldNames.areaName);
            var areaContent = extend({}, this._getAreaContent(areaElement));
            var customizedContentName = this._config.callback.contentName ? this._config.callback.contentName(contentElement, this._config.useDefaultContentName) : "";
            var defaultContentName = this._getDefaultContentName(element, this._config.useDefaultContentName);
            elementContent = {
                id: contentElement.getAttribute(this._contentBlobFieldNames.id) || contentElement.id || "",
                aN: areaContent.areaName,
                sN: contentElement.getAttribute(this._contentBlobFieldNames.slotNumber),
                cN: customizedContentName || contentElement.getAttribute(this._contentBlobFieldNames.contentName) || defaultContentName || contentElement.getAttribute("alt") || "",
                cS: contentElement.getAttribute(this._contentBlobFieldNames.contentSource) || areaContent.contentSource,
                tN: areaContent.templateName,
                pid: contentElement.getAttribute(this._contentBlobFieldNames.productId),
                cT: contentElement.getAttribute(this._contentBlobFieldNames.contentType) || areaContent.type,
                pI: contentElement.getAttribute(this._contentBlobFieldNames.parentId),
                pN: contentElement.getAttribute(this._contentBlobFieldNames.parentName)
            };
            if (!elementContent.id || !elementContent.aN || !elementContent.sN || !elementContent.cN) {
                _throwInternal(this._traceLogger, 2 , 515 , "Invalid content blob.  Missing required attributes (id, aN/area, sN/slot), cN/contentName. " +
                    " Content information will still be collected!");
            }
            if (!this._contentBlobFieldNames.isShortNames) {
                elementContent = {
                    contentId: elementContent.id,
                    areaName: elementContent.aN,
                    slotNumber: elementContent.sN,
                    contentName: elementContent.cN,
                    contentSource: elementContent.cS,
                    templateName: elementContent.tN,
                    productId: elementContent.pid,
                    contentType: elementContent.cT,
                    parentId: elementContent.pI,
                    parentName: elementContent.pN
                };
            }
            for (var i = 0, attrib; i < contentElement.attributes.length; i++) {
                attrib = contentElement.attributes[i];
                if (attrib.name === this._contentBlobFieldNames.id ||
                    attrib.name === this._contentBlobFieldNames.areaName ||
                    attrib.name === this._contentBlobFieldNames.slotNumber ||
                    attrib.name === this._contentBlobFieldNames.contentName ||
                    attrib.name === this._contentBlobFieldNames.contentSource ||
                    attrib.name === this._contentBlobFieldNames.templateName ||
                    attrib.name === this._contentBlobFieldNames.productId ||
                    attrib.name === this._contentBlobFieldNames.contentType ||
                    attrib.name === this._contentBlobFieldNames.parentId ||
                    attrib.name === this._contentBlobFieldNames.parentName ||
                    attrib.name.indexOf("data-bi-") === -1) {
                    continue;
                }
                var attribName = attrib.name.replace("data-bi-", "");
                elementContent[attribName] = attrib.value;
            }
            return elementContent;
        };
        DomContentHandler.prototype._getMetaDataFromDOM = function (prefix, removePrefix) {
            var metaElements;
            var metaData = {};
            if (isDocumentObjectAvailable) {
                metaElements = document.querySelectorAll("meta");
                for (var i = 0; i < metaElements.length; i++) {
                    var meta = metaElements[i];
                    if (meta.name) {
                        var mt = meta.name.toLowerCase();
                        if (mt.indexOf(prefix) === 0) {
                            var name = removePrefix ? meta.name.replace(prefix, "") : meta.name;
                            metaData[name] = meta.content;
                        }
                    }
                }
            }
            return metaData;
        };
        DomContentHandler.prototype._getAreaContent = function (areaElement) {
            areaElement = _returnDomObjectIfjQuery(areaElement);
            if (areaElement) {
                return {
                    areaName: areaElement.getAttribute(this._contentBlobFieldNames.areaName),
                    templateName: areaElement.getAttribute(this._contentBlobFieldNames.templateName),
                    contentSource: areaElement.getAttribute(this._contentBlobFieldNames.contentSource),
                    product: areaElement.getAttribute(this._contentBlobFieldNames.productId),
                    type: areaElement.getAttribute(this._contentBlobFieldNames.contentType)
                };
            }
        };
        DomContentHandler.prototype._getDefaultContentName = function (element, useDefaultContentName) {
            if (useDefaultContentName === false || _isPii(element) || !element.tagName) {
                return "";
            }
            var doc = getDocument() || {};
            var contentName;
            switch (element.tagName) {
                case "A":
                    contentName = doc.all ? element.innerText || element.innerHTML : element.text || element.innerHTML;
                    break;
                case "IMG":
                case "AREA":
                    contentName = element.alt;
                    break;
                default:
                    contentName = element.value || element.name || element.alt || element.innerText || element.id;
            }
            return contentName.substring(0, MAX_CONTENTNAME_LENGTH);
        };
        DomContentHandler.prototype._getParentDetails = function (element, elementContent) {
            var parentIdKey = this._contentBlobFieldNames.isShortNames ? _keyName.shortKeys.parentId : _keyName.longKeys.parentId;
            var parentNameKey = this._contentBlobFieldNames.isShortNames ? _keyName.shortKeys.parentName : _keyName.longKeys.parentName;
            var parentId = elementContent[parentIdKey];
            var parentName = elementContent[parentNameKey];
            var parentInfo = {};
            if (parentId || parentName || !element) {
                return parentInfo;
            }
            return this._populateParentInfo(element, parentIdKey, parentNameKey);
        };
        DomContentHandler.prototype._isTrackedWithDataM = function (element) {
            var attrs = element.attributes;
            for (var i = 0; i < attrs.length; i++) {
                if (attrs[i].name === "data-m") {
                    return true;
                }
            }
            return false;
        };
        DomContentHandler.prototype._isTrackedWithDataBi = function (element) {
            var attrs = element.attributes;
            for (var i = 0; i < attrs.length; i++) {
                if (attrs[i].name.indexOf("data-bi-") >= 0) {
                    return true;
                }
            }
            return false;
        };
        DomContentHandler.prototype._isTracked = function (element) {
            var attrs = element.attributes;
            for (var i = 0; i < attrs.length; i++) {
                if (attrs[i].name === "data-m" || attrs[i].name.indexOf("data-bi-") >= 0) {
                    return true;
                }
            }
            return false;
        };
        DomContentHandler.prototype._populateParentInfo = function (element, parentIdKey, parentNameKey) {
            var parentInfo = {};
            var elementBiDataAttribute = this._config.biBlobAttributeTag;
            var parentId;
            var parentName;
            var closestParentElement = _walkUpDomChainWithElementValidation(element.parentElement, this._isTracked);
            if (closestParentElement) {
                var dataAttr = closestParentElement.getAttribute(elementBiDataAttribute) || element[elementBiDataAttribute];
                if (dataAttr) {
                    try {
                        var telemetryObject = JSON.parse(dataAttr);
                    }
                    catch (e) {
                        _throwInternal(this._traceLogger, 1 , 507 , "Can not parse " + dataAttr);
                    }
                    if (telemetryObject) {
                        parentId = telemetryObject.id;
                        parentName = telemetryObject.cN;
                    }
                }
                else {
                    parentId = closestParentElement.getAttribute(this._contentBlobFieldNames.id);
                    parentName = closestParentElement.getAttribute(this._contentBlobFieldNames.contentName);
                }
                if (parentId) {
                    parentInfo[parentIdKey] = parentId;
                }
                if (parentName) {
                    parentInfo[parentNameKey] = parentName;
                }
            }
            return parentInfo;
        };
        return DomContentHandler;
    }());

    function _mergeConfig(overrideConfig) {
        var defaultConfig = {
            useDefaultContentName: true,
            useShortNameForContentBlob: true,
            debounceMs: {
                scroll: 600,
                resize: 3000
            },
            biBlobAttributeTag: "data-m",
            isLoggedIn: false,
            shareAuthStatus: false,
            cookiesToCollect: ["MSFPC", "ANON"],
            autoCapture: {
                pageView: true,
                onLoad: true,
                onUnload: true,
                click: true,
                scroll: false,
                resize: false,
                lineage: false,
                jsError: true,
                msTags: true
            },
            callback: {
                pageName: null,
                pageActionPageTags: null,
                pageViewPageTags: null,
                contentUpdatePageTags: null,
                pageActionContentTags: null,
                signedinStatus: null
            },
            coreData: {
                referrerUri: isDocumentObjectAvailable ? document.referrer : "",
                requestUri: "",
                pageName: "",
                pageType: "",
                product: "",
                market: "",
                pageTags: {}
            },
            autoPopulateParentIdAndParentName: false,
            syncMuid: false,
            muidDomain: "microsoft.com"
        };
        var attributesThatAreObjectsInConfig = [];
        objForEachKey(defaultConfig, function (attribute, value) {
            if (isObject(value)) {
                attributesThatAreObjectsInConfig.push(attribute);
            }
        });
        _removeNonObjectsAndInvalidElements(overrideConfig, attributesThatAreObjectsInConfig);
        return extend(true, defaultConfig, overrideConfig);
    }
    var ApplicationInsights$1 = /** @class */ (function (_super) {
        __extendsFn(ApplicationInsights, _super);
        function ApplicationInsights() {
            var _this = _super.call(this) || this;
            _this.identifier = "WebAnalyticsPlugin";
            _this.version = '3.2.6';
            var _pageView;
            var _pageAction;
            var _contentUpdate;
            var _pageUnload;
            var _pageViewPerformance;
            var _cvPlugin;
            var _theConfig;
            var _maxScroll;
            var _isPageUnloadFired = false;
            var _timespan;
            var _contentHandler;
            var _autoCaptureHandler;
            var _autoCaptureConfig;
            dynamicProto(ApplicationInsights, _this, function (_self, _base) {
                _initDefaults();
                _self.updateCoreDataConfig = function (coreData) {
                    _theConfig.coreData = extend(true, _theConfig.coreData, coreData);
                };
                _self.refreshMetadata = function () {
                    var metaTags = _contentHandler.getMetadata();
                    _pageView.metaTags = metaTags;
                    _contentUpdate.metaTags = metaTags;
                    _pageAction.metaTags = metaTags;
                    _pageViewPerformance.metaTags = metaTags;
                };
                _self.initialize = function (coreConfig, core, extensions) {
                    var extendedCore = core;
                    coreConfig.extensionConfig = coreConfig.extensionConfig || [];
                    coreConfig.extensionConfig[_self.identifier] = coreConfig.extensionConfig[_self.identifier] || {};
                    _self._config = _theConfig = _mergeConfig(coreConfig.extensionConfig[_self.identifier]);
                    _autoCaptureConfig = _theConfig.autoCapture;
                    var existingGetWParamMethod = extendedCore.getWParam;
                    extendedCore.getWParam = function () {
                        var wparam = 0;
                        if (_theConfig.mscomCookies) {
                            wparam = wparam | 1;
                        }
                        return wparam | existingGetWParamMethod();
                    };
                    coreConfig.extensionConfig[_self.identifier].disableExceptionTracking = !_autoCaptureConfig.jsError;
                    _base.initialize(coreConfig, core, extensions);
                    _contentHandler = _contentHandler ? _contentHandler : new DomContentHandler(_theConfig, _self.diagLog());
                    _autoCaptureHandler = _autoCaptureHandler ? _autoCaptureHandler : new AutoCaptureHandler(_self, _self.diagLog());
                    if (_theConfig.manageCv) {
                        for (var i = 0; i < extensions.length; i++) {
                            if ((extensions[i]).identifier === "CorrelationVectorPlugin") {
                                _theConfig.manageCv = true;
                                _cvPlugin = extensions[i];
                                break;
                            }
                        }
                        if (!_cvPlugin) {
                            _throwInternal(_self.diagLog(), 2 , 508 , "Automatic Cv management is set to \"true\" in config.  However, cv plugin is not available. Disabling automatic Cv management");
                            _theConfig.manageCv = false;
                        }
                    }
                    _self.id = new Id$1(core);
                    _timespan = new Timespan$1();
                    var metaTags = _contentHandler.getMetadata();
                    _pageView = new PageView(_this, _theConfig, _contentHandler, _self.id, _theConfig.callback.pageViewPageTags, metaTags, _self.diagLog());
                    _pageAction = new PageAction(_this, _theConfig, _contentHandler, _self.id, _theConfig.callback.pageActionPageTags, metaTags, _self.diagLog());
                    _contentUpdate = new ContentUpdate(_this, _theConfig, _contentHandler, _self.id, _theConfig.callback.contentUpdatePageTags, metaTags, _self.diagLog());
                    _pageUnload = new PageUnload(_this, _theConfig, _self.id, _self.diagLog(), _timespan, _maxScroll);
                    _pageViewPerformance = new PageViewPerformance(_this, _theConfig, _contentHandler, _self.id, _theConfig.callback.pageViewPageTags, metaTags, _self.diagLog());
                    if (_theConfig.syncMuid) {
                        onDomLoaded(function () {
                            var muidDomain = _self.id.getMuidHost(_theConfig.muidDomain);
                            _self.id.syncMuid(muidDomain);
                        }, _self._evtNamespace);
                    }
                    _setupAutoCapture(true);
                };
                _self.processTelemetry = function (evt, itemCtx) {
                    setProcessTelemetryTimings(evt, _self.identifier);
                    var event = evt;
                    if (event.baseType === "PageviewData") {
                        event.name = "Ms.Web.PageView";
                        event.latency = 3 ;
                    }
                    else if (event.baseType === "ExceptionData") {
                        event.name = "Ms.Web.ClientError";
                        event.latency = 1 ;
                        delete (event.baseData["aiDataContract"]);
                    }
                    else if (event.baseType === "PageviewPerformanceData") {
                        event.name = "Ms.Web.PageViewPerformance";
                        event.latency = 1 ;
                        delete (event.baseData["isValid"]);
                        delete (event.baseData["durationMs"]);
                    }
                    var cv = null;
                    if (event.baseType !== "PageviewData") {
                        if (_theConfig.manageCv) {
                            cv = _cvPlugin.getCv();
                            if (cv) {
                                cv.increment();
                            }
                        }
                    }
                    else {
                        if (_theConfig.manageCv) {
                            cv = _cvPlugin.getCv();
                            if (!cv) {
                                cv = _cvPlugin.getCv();
                            }
                            else {
                                cv.seed();
                            }
                        }
                    }
                    _base.processTelemetry(event, itemCtx);
                };
                _self.trackEvent = function (event, customProperties) {
                    event.latency = event.latency || 1 ;
                    event.baseData = event.baseData || {};
                    event.data = event.data || {};
                    if (isValueAssigned(customProperties)) {
                        objForEachKey(customProperties, function (prop, value) {
                            event.data[prop] = value;
                        });
                    }
                    _self.core.track(event);
                };
                _self.trackPageView = function (pageViewEvent, properties) {
                    _resetPageUnloadProperties();
                    _self.id.initializeIds();
                    pageViewEvent.id = _self.id.getLastPageViewId();
                    _base.sendPageViewInternal(pageViewEvent, properties, _getSystemProperties(pageViewEvent));
                };
                _self.capturePageView = function (overrideValues, customProperties) {
                    _pageView.capturePageView(overrideValues, customProperties);
                };
                _self.trackPageViewPerformance = function (pageViewPerformance, customProperties) {
                    _base.sendPageViewPerformanceInternal(pageViewPerformance, customProperties, _getSystemProperties(pageViewPerformance));
                };
                _self.capturePageViewPerformance = function (overrideValues, customProperties) {
                    _pageViewPerformance.capturePageViewPerformance(overrideValues, customProperties);
                };
                _self.trackException = function (exception, customProperties) {
                    exception.id = exception.id || createGuid();
                    _base.sendExceptionInternal(exception, customProperties, _getSystemProperties(exception));
                };
                _self.trackPageAction = function (pageActionEvent, pageActionProperties) {
                    _pageAction.trackPageAction(pageActionEvent, pageActionProperties);
                };
                _self.capturePageAction = function (element, overrideValues, customProperties, isRightClick) {
                    if (_isClickTelemetryAllowed(element, overrideValues)) {
                        _pageAction.capturePageAction(element, overrideValues, customProperties, isRightClick);
                    }
                };
                _self.trackContentUpdate = function (contentUpdateEvent, properties) {
                    _contentUpdate.trackContentUpdate(contentUpdateEvent, properties);
                };
                _self.captureContentUpdate = function (overrideValues, customProperties) {
                    _contentUpdate.captureContentUpdate(overrideValues, customProperties);
                };
                _self.trackPageUnload = function (pageUnloadEvent, properties) {
                    if (!_isPageUnloadFired) {
                        _isPageUnloadFired = true;
                        _pageUnload.trackPageUnload(pageUnloadEvent, properties);
                    }
                };
                _self.capturePageUnload = function (overrideValues, customProperties) {
                    if (!_isPageUnloadFired) {
                        _isPageUnloadFired = true;
                        _pageUnload.capturePageUnload(overrideValues, customProperties);
                    }
                };
                _self._populatePageViewPerformance = function (pageViewPerformance) {
                    var perfManager = _self._pageViewPerformanceManager;
                    if (perfManager) {
                        perfManager.populatePageViewPerformanceEvent(pageViewPerformance);
                    }
                };
                _self.setContentHandler = function (contentHandler) {
                    _contentHandler = contentHandler;
                };
                _self.setAutoCaptureHandler = function (autoCaptureHandler) {
                    if (_autoCaptureHandler !== autoCaptureHandler) {
                        _autoCaptureHandler && _autoCaptureHandler.teardown();
                        _autoCaptureHandler = autoCaptureHandler;
                        _setupAutoCapture(false);
                    }
                };
                _self._doTeardown = function (unloadCtx, unloadState) {
                    _autoCaptureHandler && _autoCaptureHandler.teardown(unloadCtx, unloadState);
                    _base._doTeardown(unloadCtx, unloadState);
                    _initDefaults();
                };
                function _initDefaults() {
                    _pageView = null;
                    _pageAction = null;
                    _contentUpdate = null;
                    _pageUnload = null;
                    _pageViewPerformance = null;
                    _cvPlugin = null;
                    _theConfig = null;
                    _maxScroll = { h: 0, v: 0 };
                    _isPageUnloadFired = false;
                    _timespan = null;
                    _contentHandler = null;
                    _autoCaptureHandler = null;
                    _autoCaptureConfig = null;
                }
                function _setupAutoCapture(isInitialize) {
                    if (_autoCaptureHandler) {
                        if (isInitialize) {
                            if (_autoCaptureConfig.pageView) {
                                _autoCaptureHandler.pageView();
                            }
                            if (_autoCaptureConfig.onLoad) {
                                _autoCaptureHandler.onLoad();
                            }
                        }
                        if (_autoCaptureConfig.click) {
                            _autoCaptureHandler.click();
                        }
                        if (_autoCaptureConfig.scroll) {
                            _autoCaptureHandler.scroll(_theConfig.debounceMs);
                        }
                        if (_autoCaptureConfig.resize) {
                            _autoCaptureHandler.resize(_theConfig.debounceMs);
                        }
                        if (_autoCaptureConfig.onUnload || _theConfig.manualPageUnload) {
                            _autoCaptureHandler.maxScroll(_maxScroll);
                        }
                        if (_autoCaptureConfig.onUnload) {
                            _autoCaptureHandler.onUnload();
                        }
                    }
                }
                function _getSystemProperties(event) {
                    var ext = {};
                    if (event.isManual !== undefined) {
                        ext["web"] = {};
                        ext["web"]["isManual"] = event.isManual !== undefined ? event.isManual : true;
                        delete (event.isManual);
                    }
                    return ext;
                }
                function _resetPageUnloadProperties() {
                    _timespan._recordTimeSpan("dwellTime", false);
                    _maxScroll.v = 0;
                    _isPageUnloadFired = false;
                }
            });
            return _this;
        }
        ApplicationInsights.__ieDyn=1;
        return ApplicationInsights;
    }(AnalyticsPlugin));

    var _ignoreUpdateSnippetProperties = [
        "snippet", "_webAnalytics", "_postChannel", "_propertyManager", "_extensions"
    ];
    var _ignoreUpdateDefineSnippetProperties = [
        "queue", "extensions", "version", "sv"
    ];
    var ApplicationInsights = /** @class */ (function (_super) {
        __extendsFn(ApplicationInsights, _super);
        function ApplicationInsights() {
            var _this = _super.call(this) || this;
            var _webAnalytics;
            var _postChannel;
            var _propertyManager;
            dynamicProto(ApplicationInsights, _this, function (_self, _base) {
                _initDefaults();
                _self.initialize = function (config, extensions) {
                    doPerf(_self, function () { return "ApplicationInsights:initialize"; }, function () {
                        var plugins = [_propertyManager, _webAnalytics];
                        if (extensions) {
                            plugins = plugins.concat(extensions);
                        }
                        if (!config) {
                            throwError("You must provide a config object!");
                        }
                        if (config.channels && config.channels.length > 0) {
                            var postFound = false;
                            for (var j = 0; j < config.channels[0].length; j++) {
                                if (config.channels[0][j].identifier === _postChannel.identifier) {
                                    postFound = true;
                                    break;
                                }
                            }
                            if (!postFound) {
                                config.channels[0].push(_postChannel);
                            }
                        }
                        else {
                            config.channels = [[_postChannel]];
                        }
                        var extConfig = config.extensionConfig = config.extensionConfig || [];
                        extConfig[_postChannel.identifier] = config ? config.channelConfiguration : {};
                        extConfig[_propertyManager.identifier] = config ? config.propertyConfiguration : {};
                        extConfig[_webAnalytics.identifier] = config ? config.webAnalyticsConfiguration : {};
                        try {
                            _base.initialize(config, plugins);
                        }
                        catch (error) {
                            _throwInternal(_self.logger, 1 , 514 , "Failed to initialize SDK." + dumpObj(error));
                        }
                    }, function () { return ({ config: config, extensions: extensions }); });
                };
                _self.getPropertyManager = function () {
                    return _propertyManager;
                };
                _self.getPostChannel = function () {
                    return _postChannel;
                };
                _self.getWebAnalyticsExtension = function () {
                    return _webAnalytics;
                };
                proxyFunctions(_self, function () { return _webAnalytics; }, [
                    "trackEvent",
                    "trackPageView",
                    "trackPageAction",
                    "trackContentUpdate",
                    "trackPageUnload",
                    "trackException",
                    "trackPageViewPerformance",
                    "capturePageView",
                    "capturePageViewPerformance",
                    "capturePageAction",
                    "captureContentUpdate",
                    "capturePageUnload",
                    "_onerror"
                ]);
                _self.emptySnippetQueue = function (snippet) {
                    function _updateSnippetProperties() {
                        if (snippet) {
                            objForEachKey(_self, function (field, value) {
                                if (isString(field) &&
                                    !isFunction(value) &&
                                    field && field[0] !== "_" &&
                                    arrIndexOf(_ignoreUpdateSnippetProperties, field) === -1) {
                                    try {
                                        snippet[field] = value;
                                    }
                                    catch (error) {
                                        _throwInternal(_self.logger, 2 , 514 , "Failed to set [" + field + "] during initialization." + dumpObj(error));
                                    }
                                }
                            });
                        }
                    }
                    try {
                        _updateSnippetProperties();
                        if (isArray(snippet.queue)) {
                            var length = snippet.queue.length;
                            for (var i = 0; i < length; i++) {
                                var call = snippet.queue[i];
                                call();
                            }
                            snippet.queue = undefined;
                            delete snippet.queue;
                        }
                    }
                    catch (exception) {
                        var properties = {};
                        if (exception && isFunction(exception.toString)) {
                            properties.exception = exception.toString();
                        }
                    }
                };
                _self.updateSnippetDefinitions = function (snippet) {
                    var _self = _this;
                    _self.snippet = snippet;
                    "" + (snippet.sv || snippet.version || "");
                    if (_self.config) {
                        _self.config = extend(true, snippet.config, _self.config || {});
                    }
                    else {
                        _self.config = snippet.config;
                    }
                    proxyAssign(snippet, _self, function (name) {
                        return name && arrIndexOf(_ignoreUpdateSnippetProperties, name) === -1 && arrIndexOf(_ignoreUpdateDefineSnippetProperties, name) === -1;
                    });
                };
                _self.unload = function (isAsync, unloadComplete, cbTimeout) {
                    if (isAsync === void 0) { isAsync = true; }
                    _base.unload(isAsync, function (unloadState) {
                        _initDefaults();
                        unloadComplete && unloadComplete(unloadState);
                    }, cbTimeout);
                };
            });
            function _initDefaults() {
                _postChannel = new PostChannel$1();
                _propertyManager = new PropertiesPlugin$1();
                _webAnalytics = new ApplicationInsights$1();
            }
            return _this;
        }
        ApplicationInsights.__ieDyn=1;
        return ApplicationInsights;
    }(AppInsightsCore$1));

    var Undefined = "undefined";
    function _logWarn(aiName, message) {
        var _console = typeof console !== Undefined ? console : null;
        if (_console) {
            var func = "warn";
            if (!_console[func]) {
                func = "log";
            }
            _console[func]("Failed to initialize AppInsights JS SDK for instance " + (aiName || "<unknown>") + " - " + message);
        }
    }
    (function () {
        try {
            var aiName = "oneDSWeb";
            var global = getGlobal();
            if (global) {
                if (typeof JSON !== "undefined") {
                    aiName = global["onedsSDK"] || aiName;
                    if (global[aiName] !== undefined) {
                        var snippet = global[aiName];
                        var ai = new ApplicationInsights();
                        ai.updateSnippetDefinitions(snippet);
                        ai.initialize(snippet.config, snippet.extensions);
                        global[aiName] = ai;
                        ai.emptySnippetQueue(snippet);
                    }
                }
                else {
                    _logWarn(aiName, "Missing JSON - you must supply a JSON polyfill!");
                }
            }
            else {
                _logWarn(aiName, "Missing global/window");
            }
        }
        catch (e) {
            _logWarn(aiName, "Unexpected Error: " + dumpObj(e));
        }
    })();

    exports.ActionType = ActionType;
    exports.AppInsightsCore = AppInsightsCore$1;
    exports.ApplicationInsights = ApplicationInsights;
    exports.BE_PROFILE = BE_PROFILE;
    exports.CoreUtils = CoreUtils;
    exports.DiagnosticLogger = DiagnosticLogger;
    exports.EventLatency = EventLatency;
    exports.EventPersistence = EventPersistence;
    exports.EventsDiscardedReason = EventsDiscardedReason;
    exports.MinChannelPriorty = MinChannelPriorty;
    exports.NRT_PROFILE = NRT_PROFILE;
    exports.NotificationManager = NotificationManager;
    exports.PostChannel = PostChannel$1;
    exports.PropertiesPlugin = PropertiesPlugin$1;
    exports.RT_PROFILE = RT_PROFILE;
    exports.TraceLevel = TraceLevel;
    exports.Utils = Utils;
    exports.ValueKind = ValueKind;
    exports.WebAnalytics = ApplicationInsights$1;

    (function(obj, prop, descriptor) { /* ai_es3_polyfil defineProperty */ var func = Object["defineProperty"]; if (func) { try { return func(obj, prop, descriptor); } catch(e) { /* IE8 defines defineProperty, but will throw */ } } if (descriptor && typeof descriptor.value !== undefined) { obj[prop] = descriptor.value; } return obj; })(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ms.analytics-web-3.2.6.js.map
