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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/tag-manager-client/1.427.0/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************!*\
  !*** ./modules/stateCache.ts ***!
  \*******************************/
/*! exports provided: addTagEmbeds, getSiteEmbedTags, setConfig, getConfig, updateConsentCategories, calculateNewCategories, getConsentCategories, setLoading, removeLoadingTag, getLoadingTags, addLoadedTag, getLoadedTags, addLoadErrorTag, getLoadErrorTags */
/*! exports used: addLoadErrorTag, addLoadedTag, addTagEmbeds, calculateNewCategories, getConfig, getLoadErrorTags, getLoadedTags, getLoadingTags, getSiteEmbedTags, removeLoadingTag, setConfig, setLoading, updateConsentCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addTagEmbeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getSiteEmbedTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return setConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updateConsentCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return calculateNewCategories; });
/* unused harmony export getConsentCategories */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return setLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return removeLoadingTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getLoadingTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addLoadedTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getLoadedTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLoadErrorTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getLoadErrorTags; });
/* harmony import */ var _utils_tryParse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tryParse */ 5);
var __assign = (undefined && undefined.__assign) || function () {
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var loadingTags = [];
var loadedTags = [];
var errorTags = [];
var embedTags = [];
var categories = [];
var config = {};
function addTagEmbeds(tagsToAdd) {
    tagsToAdd.forEach(function (tag) {
        embedTags.push({
            tag: tag,
            embeddedNodes: null,
        });
    });
}
function getSiteEmbedTags() {
    // Return the reference since it has DOM references
    return embedTags;
}
function setConfig(conf) {
    if (typeof conf === 'object' && !Array.isArray(conf)) {
        config = __assign(__assign({}, config), conf);
    }
}
function getConfig() {
    return dumbClone(config);
}
function updateConsentCategories(policy) {
    if (policy && typeof policy === 'object') {
        categories = __spreadArrays(categories, calculateNewCategories(policy));
    }
}
function calculateNewCategories(policy) {
    return Object.keys(policy).filter(function (key) { return !!policy[key] && categories.indexOf(key) === -1; });
}
function getConsentCategories() {
    return categories;
}
function setLoading(_loadingTags) {
    loadingTags = _loadingTags;
}
function removeLoadingTag(tagName) {
    loadingTags = loadingTags.filter(function (tag) { return tag.name !== tagName; });
}
function getLoadingTags() {
    return dumbClone(loadingTags);
}
function addLoadedTag(_loadedTag) {
    loadedTags.push(_loadedTag);
}
function getLoadedTags() {
    return dumbClone(loadedTags);
}
function addLoadErrorTag(_loadErrorTag) {
    errorTags.push(_loadErrorTag);
}
function getLoadErrorTags() {
    return dumbClone(errorTags);
}
function dumbClone(obj) {
    return Object(_utils_tryParse__WEBPACK_IMPORTED_MODULE_0__[/* tryParse */ "a"])(JSON.stringify(obj));
}


/***/ }),
/* 1 */
/*!*************************!*\
  !*** ./utils/logger.ts ***!
  \*************************/
/*! exports provided: log, error */
/*! exports used: error, log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error; });
var PREFiX = 'Tag Manager: ';
var showLogs = logDecision();
function logDecision() {
    var debugLogs = false;
    try {
        var _window = window;
        debugLogs =
            (_window && _window.debug) ||
                (_window.location &&
                    (_window.location.search || '').toLowerCase().indexOf('debug=') > -1);
    }
    catch (e) {
        // Linty linter linted something
    }
    return debugLogs;
}
function error(text) {
    showLogs && console && console.error(PREFiX + " " + text);
}
function log(text) {
    showLogs && console && console.log(PREFiX + " " + text);
}



/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./utils/callbackUtils.ts ***!
  \********************************/
/*! exports provided: runCallback, createTagCallBack */
/*! exports used: createTagCallBack, runCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return runCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTagCallBack; });
/* harmony import */ var _modules_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/events */ 3);
/* harmony import */ var _modules_stateCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/stateCache */ 0);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ 1);



function runCallback(callback, data, async) {
    var callbackOp = function () {
        try {
            if (typeof callback === 'function') {
                return callback(data);
            }
        }
        catch (e) {
            Object(_logger__WEBPACK_IMPORTED_MODULE_2__[/* error */ "a"])(e);
        }
    };
    return async === true ? setTimeout(callbackOp, 0) : callbackOp();
}
/**
 * Creates a function callback to handle loading of a full tag
 * @param eventName
 * @param tagName
 * @param embed
 * @param storageMethod
 */
function createTagCallBack(eventName, tagName, embed, storageMethod) {
    return function () {
        Object(_modules_events__WEBPACK_IMPORTED_MODULE_0__[/* publishEvent */ "b"])(eventName, window, {
            tagName: tagName,
            embed: embed,
        });
        storageMethod(embed);
        Object(_modules_stateCache__WEBPACK_IMPORTED_MODULE_1__[/* removeLoadingTag */ "j"])(embed.name);
    };
}



/***/ }),
/* 3 */
/*!***************************!*\
  !*** ./modules/events.ts ***!
  \***************************/
/*! exports provided: eventNames, publishEvent */
/*! exports used: eventNames, publishEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eventNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return publishEvent; });
// @ts-ignore
var isIE = !!document.documentMode;
/**
 * Publishes a custom event when there is CPU time
 * @param eventName - the name of the custom event
 * @param publishingNode - on which Dom node to dispatch it (window / document ...)
 * @param eventData - the detail of the event, will be available under detail
 */
function publishEvent(eventName, publishingNode, eventData) {
    var customEvent;
    if (isIE) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(eventName, true, true, eventData);
    }
    else {
        customEvent = new CustomEvent(eventName, { detail: eventData });
    }
    if (publishingNode && publishingNode.dispatchEvent) {
        setTimeout(function () {
            // Don't want to disrupt the standard loading flow
            // @ts-ignore
            publishingNode.dispatchEvent(customEvent);
        }, 0);
    }
}
var eventNames = {
    TAG_MANAGER_LOADED: 'TagManagerLoaded',
    TAGS_LOADING: 'LoadingTags',
    TAG_LOADED: 'TagLoaded',
    TAG_LOAD_ERROR: 'TagLoadError',
};



/***/ }),
/* 4 */
/*!**************************!*\
  !*** ./consts/consts.ts ***!
  \**************************/
/*! exports provided: SITES_API, HOSTS_API, WIX_DOMAINS, HOST_NAMES, METASITE_APP_DEF_ID, SHOULD_RENDER_TAGS_PER_PAGE_SPEC */
/*! exports used: HOSTS_API, HOST_NAMES, METASITE_APP_DEF_ID, SHOULD_RENDER_TAGS_PER_PAGE_SPEC, SITES_API, WIX_DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SITES_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOSTS_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WIX_DOMAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOST_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return METASITE_APP_DEF_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SHOULD_RENDER_TAGS_PER_PAGE_SPEC; });
var BASE_URL = '_api/tag-manager/api/v1/tags/';
var SITES_API = BASE_URL + "sites/";
var HOSTS_API = "/" + BASE_URL + "hosts/";
var WIX_DOMAINS = ['.wix.com', '.editorx.com'];
var HOST_NAMES = {
    EDITOR: 'EDITOR',
    EDITOR_X: 'EDITOR_X',
    ADI: 'ADI',
    APP_BUILDER: 'APP_BUILDER',
    BUSINESS_MANAGER: 'BUSINESS_MANAGER',
    BUSINESS_MANAGER_EDITOR_X: 'BUSINESS_MANAGER_EDITOR_X',
    SITES_LIST: 'SITES_LIST',
    VIEWER: 'VIEWER',
    LOGO_BUILDER: 'LOGO_BUILDER',
    ART_STORE: 'ART_STORE',
    TEMPLATES: 'TEMPLATES',
    FUNNEL: 'FUNNEL',
    DEV_CENTER: 'DEV_CENTER',
    ARENA: 'ARENA',
    LOGIN_PAGE: 'LOGIN_PAGE',
    LOGIN_PAGE_EDITOR_X: 'LOGIN_PAGE_EDITOR_X',
    PREMIUM: 'PREMIUM',
    PREMIUM_TAGS: 'PREMIUM_TAGS',
    PREMIUM_EDITOR_X_TAGS: 'PREMIUM_EDITOR_X_TAGS',
    SUPPORT: 'SUPPORT',
    ACCOUNT_MANAGER: 'ACCOUNT_MANAGER',
    APP_MARKET_STANDALONE: 'APP_MARKET_STANDALONE',
    COMPONENT_STUDIO: 'COMPONENT_STUDIO',
    PREMIUM_DOMAINS_WHOIS: 'PREMIUM_DOMAINS_WHOIS',
    PREMIUM_DOMAINS: 'PREMIUM_DOMAINS',
    RELEASE_NOTES: 'RELEASE_NOTES',
    PREMIUM_MP_CONTAINER: 'PREMIUM_MP_CONTAINER',
    GET_FEEDBACK: 'GET_FEEDBACK',
    MOBILE_WEB_DASHBOARD: 'MOBILE_WEB_DASHBOARD',
};
var METASITE_APP_DEF_ID = '22bef345-3c5b-4c18-b782-74d4085112ff';
var SHOULD_RENDER_TAGS_PER_PAGE_SPEC = 'specs.tagManagerRenderTagByPageID';


/***/ }),
/* 5 */
/*!***************************!*\
  !*** ./utils/tryParse.ts ***!
  \***************************/
/*! exports provided: tryParse */
/*! exports used: tryParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tryParse; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ 1);

function tryParse(str) {
    var res = str;
    try {
        res = JSON.parse(str);
    }
    catch (e) {
        Object(_logger__WEBPACK_IMPORTED_MODULE_0__[/* error */ "a"])('Parse error in string');
        Object(_logger__WEBPACK_IMPORTED_MODULE_0__[/* error */ "a"])(e.message);
    }
    return res;
}


/***/ }),
/* 6 */
/*!**********************!*\
  !*** ./utils/xhr.ts ***!
  \**********************/
/*! exports provided: xhrGeneric, buildQuery */
/*! exports used: buildQuery, xhrGeneric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhrGeneric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildQuery; });
/* harmony import */ var _callbackUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callbackUtils */ 2);

function xhrGeneric(uri, successCallback, errorCallback, options) {
    var headers = (options && options.headers) || {};
    var query = (options && options.query) || {};
    headers['content-type'] = headers['content-type'] || 'application/json';
    var xhr = new XMLHttpRequest();
    var method = options && options.postBody ? 'POST' : 'GET';
    var url = "" + uri + buildQuery(query);
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var status = xhr.status;
            if (status < 200 || status >= 300) {
                Object(_callbackUtils__WEBPACK_IMPORTED_MODULE_0__[/* runCallback */ "b"])(errorCallback, { status: status, responseText: xhr.responseText });
            }
            else {
                Object(_callbackUtils__WEBPACK_IMPORTED_MODULE_0__[/* runCallback */ "b"])(successCallback, xhr.responseText);
            }
        }
    };
    Object.keys(headers).forEach(function (key) {
        if (headers[key] !== void 0) {
            xhr.setRequestHeader(key, headers[key]);
        }
    });
    xhr.send((options && options.postBody) || null);
}
function buildQuery(query) {
    var queryString = '';
    if (typeof query === 'object') {
        Object.keys(query).forEach(function (queryParam) {
            if (query[queryParam] !== void 0) {
                var value = encodeURIComponent(query[queryParam]);
                queryString += encodeURIComponent(queryParam) + "=" + value + "&";
            }
        });
    }
    // Remove trailing &
    queryString = queryString
        ? queryString.substr(0, queryString.length - 1)
        : '';
    // Append ?
    return queryString ? "?" + queryString : '';
}



/***/ }),
/* 7 */
/*!*************************************!*\
  !*** ./siteTagsAPI.ts + 11 modules ***!
  \*************************************/
/*! exports provided: api */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./consts/consts.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./modules/events.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./modules/stateCache.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/callbackUtils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/logger.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/tryParse.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/xhr.ts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "api", function() { return /* binding */ api; });

// EXTERNAL MODULE: ./modules/stateCache.ts
var stateCache = __webpack_require__(0);

// EXTERNAL MODULE: ./modules/events.ts
var events = __webpack_require__(3);

// EXTERNAL MODULE: ./utils/callbackUtils.ts
var callbackUtils = __webpack_require__(2);

// CONCATENATED MODULE: ./dom-manipulation/nodeBuilder.ts

function buildNode(nodeInfo, callbacks) {
    var node;
    if (nodeInfo.nodeType === Node.TEXT_NODE) {
        node = document.createTextNode(nodeInfo.content);
    }
    else if (nodeInfo.nodeType === Node.COMMENT_NODE) {
        node = document.createComment(nodeInfo.content);
    }
    else {
        node = document.createElement(nodeInfo.tag);
        if (nodeInfo && nodeInfo.attributes instanceof NamedNodeMap) {
            Array.prototype.forEach.call(nodeInfo.attributes, function (attr) {
                setAttribute(node, attr.name, attr.value);
            });
        }
        else if (typeof nodeInfo.attributes === 'object') {
            Object.keys(nodeInfo.attributes).forEach(function (key) {
                if (typeof nodeInfo.attributes[key] !== void 0) {
                    setAttribute(node, key, nodeInfo.attributes[key]);
                }
            });
        }
        if (nodeInfo.tag === 'SCRIPT') {
            enhanceScript(node, nodeInfo.content, callbacks);
        }
        else if (nodeInfo.children && nodeInfo.children.length > 0) {
            nodeInfo.children.forEach(function (childNode) {
                var renderedChild = buildNode(childNode, callbacks);
                node.appendChild(renderedChild);
            });
        }
    }
    return node;
}
function enhanceScript(script, content, callbacks) {
    if (content === void 0) { content = ''; }
    if (content) {
        script.src = createUrlBlob(content);
    }
    script.addEventListener('load', function () {
        Object(callbackUtils["b" /* runCallback */])(callbacks && callbacks.onload, null);
    }, false);
    script.addEventListener('error', function () {
        Object(callbackUtils["b" /* runCallback */])(callbacks && callbacks.onerror, null);
    }, false);
}
function setAttribute(node, key, value) {
    node.setAttribute(key, value);
}
function createUrlBlob(content) {
    var blob = new Blob([content], {
        type: 'text/javascript;charset=utf-8',
    });
    return URL.createObjectURL(blob);
}


// CONCATENATED MODULE: ./dom-manipulation/domContentParser.ts
/**
 * Parses the embed content to be able to attach it to the DOM and make it run
 * @param content
 */
function parseEmbedData(content) {
    var toRender = [];
    var div = document.createElement('DIV');
    div.innerHTML = content;
    Array.prototype.forEach.call(div.childNodes, function (node) {
        var nodeData = extractNodeData(node);
        toRender.push(nodeData);
    });
    return toRender;
}
function extractNodeData(node) {
    var nodeType = node.nodeType;
    var domContent = node.innerHTML || node.textContent || node.nodeValue;
    var children = [];
    if (node.hasChildNodes()) {
        Array.prototype.forEach.call(node.childNodes, function (childNode) {
            children.push(extractNodeData(childNode));
        });
    }
    return {
        nodeType: nodeType,
        tag: node.nodeName,
        attributes: node.attributes,
        content: domContent,
        children: children,
    };
}


// CONCATENATED MODULE: ./types.ts
var Position;
(function (Position) {
    Position["HEAD"] = "head";
    Position["BODY_START"] = "bodyStart";
    Position["BODY_END"] = "bodyEnd";
})(Position || (Position = {}));

// CONCATENATED MODULE: ./modules/tags.ts
/** render embed on all pages in case there in no page id*/
var isEmptyPageID = function (p) { return !p.id; };
/** render embed tag on all page in case there is no pages */
var shouldRenderOnAllPages = function (t) { var _a, _b; return !((_b = (_a = t.tag) === null || _a === void 0 ? void 0 : _a.pages) === null || _b === void 0 ? void 0 : _b.length); };
/** render embed in cases page id includes in embed's pages*/
var shouldRenderOnPage = function (t, p) { var _a, _b; return ((_b = (_a = t.tag) === null || _a === void 0 ? void 0 : _a.pages) === null || _b === void 0 ? void 0 : _b.includes(p.id || '')) || false; };
/**
 * @return true if the tag should render on a given page, false otherwise
 * @param tag - the actual tag to check if should be filtered
 * @param pageInfo - page's information
 */
function isTagValidForPage(tag, pageInfo) {
    return isEmptyPageID(pageInfo) ||
        shouldRenderOnAllPages(tag) ||
        shouldRenderOnPage(tag, pageInfo);
}
function filterTagsByPageID(tags, pageInfo) {
    return tags.filter(function (tag) { return isTagValidForPage(tag, pageInfo); });
}
function getSiteTagsFromSiteEmbed(siteEmbeds) {
    return siteEmbeds.map(function (s) { return s.tag; });
}

// EXTERNAL MODULE: ./consts/consts.ts
var consts = __webpack_require__(4);

// CONCATENATED MODULE: ./utils/experiments.ts
function isExperimentOpen(experiments, spec) {
    return experiments && experiments[spec] === 'true';
}

// CONCATENATED MODULE: ./modules/siteEmbedder.ts









/**
 *  Iterate through the embeds collection and apply them to the DOM
 *  Keep a reference to any nodes that need to be reapplied for removal
 *  Keep a reference to any embeds that should be reapplied to re-apply them
 * @param tags - tags list from tag-manager-server.
 * @param pageInfo - represent that page information to load the tags list on .
 * @param experiments - map of experiments for A/B testing and gradually releases.
 */
function applySiteEmbeds(tags, pageInfo, experiments) {
    var tagsWithoutEmbeddedNodes = tags.filter(function (tag) { return !tag.embeddedNodes; });
    var shouldRenderTagsPerPage = isExperimentOpen(experiments, consts["d" /* SHOULD_RENDER_TAGS_PER_PAGE_SPEC */]);
    var tagsToEmbed = shouldRenderTagsPerPage ? filterTagsByPageID(tagsWithoutEmbeddedNodes, pageInfo) : tagsWithoutEmbeddedNodes;
    var loadingTags = getSiteTagsFromSiteEmbed(tagsToEmbed);
    Object(stateCache["l" /* setLoading */])(loadingTags);
    Object(events["b" /* publishEvent */])(events["a" /* eventNames */].TAGS_LOADING, window, loadingTags);
    tagsToEmbed.forEach(function (siteEmbed) {
        var tag = siteEmbed.tag;
        var nodesToEmbed = parseEmbedData(tag.content);
        var embedLocation = tag.position && tag.position !== Position.HEAD
            ? document.body
            : document.head;
        var embeddedNodes = createSiteEmbed(nodesToEmbed, {
            onload: Object(callbackUtils["a" /* createTagCallBack */])(events["a" /* eventNames */].TAG_LOADED, tag.name, tag, stateCache["b" /* addLoadedTag */]),
            onerror: Object(callbackUtils["a" /* createTagCallBack */])(events["a" /* eventNames */].TAG_LOAD_ERROR, tag.name, tag, stateCache["a" /* addLoadErrorTag */]),
        }, embedLocation, tag.position === Position.BODY_START);
        siteEmbed.embeddedNodes = embeddedNodes;
    });
}
/**
 *
 * @param renderingInput - an Array of DOM Nodes to render
 * @param callbacks - { onloaded, onerror } - methods to notify when load has been completed for all nodes or failed for some
 * @param parentNode - the node to embed in
 * @param before - if to embed in the beginning of the body
 */
function createSiteEmbed(renderingInput, callbacks, parentNode, before) {
    var resultNodes = [];
    var counters = 0, errorState = false;
    var onload = function () {
        counters = counters - 1;
        if (counters >= 0) {
            Object(callbackUtils["b" /* runCallback */])(callbacks.onload, {});
        }
    };
    var onerror = function () {
        counters = counters - 1;
        errorState = true;
        if (counters >= 0) {
            Object(callbackUtils["b" /* runCallback */])(callbacks.onerror, { error: true });
        }
    };
    var firstChild = parentNode.firstChild; // captured so all nodes are inserted before it
    renderingInput.forEach(function (node) {
        if (node.tag === 'SCRIPT') {
            counters = counters + 1;
        }
        var resultNode = buildNode(node, { onload: onload, onerror: onerror });
        resultNodes.push(resultNode);
        if (before) {
            parentNode.insertBefore(resultNode, firstChild);
        }
        else {
            parentNode.appendChild(resultNode);
        }
    });
    if (counters === 0) {
        Object(callbackUtils["b" /* runCallback */])(callbacks.onload, {}, true);
    }
    return resultNodes;
}


// EXTERNAL MODULE: ./utils/xhr.ts
var xhr = __webpack_require__(6);

// EXTERNAL MODULE: ./utils/logger.ts
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./utils/extractQueryParameter.ts
function extractQueryParameter(parameterName, source) {
    if (source === void 0) { source = location.search; }
    var queryParamData = (source.split(parameterName + "=")[1]);
    queryParamData = queryParamData ? decodeURIComponent(queryParamData.split('&')[0]) : undefined;
    return queryParamData;
}

// CONCATENATED MODULE: ./utils/wixEmbedsAPIClient.ts
function getCurrentPageInfo(window) {
    return (window.wixEmbedsAPI.getCurrentPageInfo &&
        typeof window.wixEmbedsAPI.getCurrentPageInfo === 'function' &&
        window.wixEmbedsAPI.getCurrentPageInfo()) || {};
}

// EXTERNAL MODULE: ./utils/tryParse.ts
var tryParse = __webpack_require__(5);

// CONCATENATED MODULE: ./API/siteApiHandlers.ts




function siteEmbedsHandler(response, siteEmbedsHandlerOptions) {
    var embedsData = Object(tryParse["a" /* tryParse */])(response);
    var currentPageID = siteEmbedsHandlerOptions.currentPageID, _a = siteEmbedsHandlerOptions.initConsentPolicyManager, initConsentPolicyManager = _a === void 0 ? false : _a;
    if (embedsData.errors && embedsData.errors.length > 0) {
        Object(logger["a" /* error */])(JSON.stringify(embedsData.errors));
    }
    if (embedsData.config) {
        Object(stateCache["m" /* updateConsentCategories */])(embedsData.config.consentPolicy);
        if (initConsentPolicyManager && window.consentPolicyManager) {
            window.consentPolicyManager.init({
                consentPolicy: embedsData.config.consentPolicy,
            });
        }
        Object(stateCache["k" /* setConfig */])(embedsData.config);
    }
    if (embedsData.tags) {
        Object(stateCache["c" /* addTagEmbeds */])(embedsData.tags);
        var pageInfo = {
            id: currentPageID
        };
        var tags = Object(stateCache["i" /* getSiteEmbedTags */])();
        applySiteEmbeds(tags, pageInfo, embedsData.config.experiments);
    }
}

// CONCATENATED MODULE: ./API/siteApi.ts







function buildTagApiUrl(baseUrl, metasiteId, wixSite) {
    return (baseUrl && !isWixSite(!!wixSite) ? baseUrl : '') + "/" + consts["e" /* SITES_API */] + metasiteId;
}
// This is for template workarounds, they are on a Wix.com domain but their document type is "template"
function isWixSite(wixSite) {
    var isWixDomain = false;
    consts["f" /* WIX_DOMAINS */].forEach(function (domain) {
        if (!isWixDomain) {
            isWixDomain = location.hostname.indexOf(domain) > 0;
        }
    });
    return isWixDomain || wixSite;
}
function getSiteTags(params) {
    var metasiteId = params.metasiteId, htmlsiteId = params.htmlsiteId, baseUrl = params.baseUrl, wixSite = params.wixSite, language = params.language, categories = params.categories;
    var uri = buildTagApiUrl(baseUrl, metasiteId, wixSite);
    var headers = !wixSite && window.consentPolicyManager ? window.consentPolicyManager._getConsentPolicyHeader() : {};
    var pageInfo = getCurrentPageInfo(window);
    //This is to support removing tags by query parameter when the experiment is on: specs.cookieConsent.CcpWixSitesPixelTests
    var omit = extractQueryParameter('omit');
    var getAppToken = window.wixEmbedsAPI.getAppToken;
    if (getAppToken) {
        headers.authorization = Object(callbackUtils["b" /* runCallback */])(getAppToken, consts["c" /* METASITE_APP_DEF_ID */]);
    }
    Object(xhr["b" /* xhrGeneric */])(uri, function (response) {
        // in wix-sites, we may only know the policy after tag manager server
        // returns from the first call. so we should rerun init in this case
        var initConsentPolicyManager = !categories && !!wixSite;
        var siteEmbedsHandlerOptions = {
            initConsentPolicyManager: initConsentPolicyManager,
            currentPageID: pageInfo.id,
        };
        siteEmbedsHandler(response, siteEmbedsHandlerOptions);
    }, function (err) {
        Object(logger["a" /* error */])("Error loading site tags at " + uri);
        Object(logger["a" /* error */])(err.message);
    }, {
        query: { wixSite: !!wixSite, htmlsiteId: htmlsiteId, language: language, categories: categories, omit: omit },
        headers: headers,
    });
}


// CONCATENATED MODULE: ./integration/viewer.ts




function onPageNavigation(pageInfo) {
    removeReloadableEmbeds();
    var tags = Object(stateCache["i" /* getSiteEmbedTags */])();
    var config = Object(stateCache["e" /* getConfig */])();
    applySiteEmbeds(tags, pageInfo, config.experiments);
}
function onConsentPolicyChanged(event) {
    if (event && event.detail && event.detail.policy) {
        var categories = Object(stateCache["d" /* calculateNewCategories */])(event.detail.policy);
        if (categories.length) {
            getSiteTags({
                baseUrl: window.wixEmbedsAPI.getExternalBaseUrl(),
                htmlsiteId: window.wixEmbedsAPI.getHtmlSiteId(),
                metasiteId: window.wixEmbedsAPI.getMetaSiteId(),
                wixSite: window.wixEmbedsAPI.isWixSite(),
                language: window.wixEmbedsAPI.getLanguage(),
                categories: categories,
            });
        }
    }
}
function removeReloadableEmbeds() {
    var tagsToRemove = Object(stateCache["i" /* getSiteEmbedTags */])();
    tagsToRemove.forEach(function (siteEmbed) {
        if (!siteEmbed.tag.loadOnce) {
            siteEmbed.embeddedNodes && siteEmbed.embeddedNodes.forEach(function (node) {
                Object(callbackUtils["b" /* runCallback */])(function () {
                    node.parentNode.removeChild(node);
                });
            });
            // Clear any memory reference to prevent leaky leakies having fun in memory
            siteEmbed.embeddedNodes = null;
        }
    });
}

// CONCATENATED MODULE: ./siteTagsAPI.ts




var api = {
    getLoadedTags: stateCache["g" /* getLoadedTags */],
    getLoadingTags: stateCache["h" /* getLoadingTags */],
    getLoadErrorTags: stateCache["f" /* getLoadErrorTags */],
    getConfig: stateCache["e" /* getConfig */],
};
var initTagManager = function () {
    var wixEmbedsAPI = window.wixEmbedsAPI;
    getSiteTags({
        baseUrl: wixEmbedsAPI.getExternalBaseUrl(),
        htmlsiteId: wixEmbedsAPI.getHtmlSiteId(),
        metasiteId: wixEmbedsAPI.getMetaSiteId(),
        language: wixEmbedsAPI.getLanguage(),
        wixSite: wixEmbedsAPI.isWixSite(),
    });
    window.wixEmbedsAPI.registerToEvent('pageNavigation', onPageNavigation);
    document.addEventListener('consentPolicyChanged', onConsentPolicyChanged);
    registerTagManagerAPI();
};
registerToWixEmbedsAPI();
function registerTagManagerAPI() {
    window.wixTagManager = api;
    Object(events["b" /* publishEvent */])(events["a" /* eventNames */].TAG_MANAGER_LOADED, window, api);
}
function registerToWixEmbedsAPI() {
    if (window.wixEmbedsAPI &&
        typeof window.wixEmbedsAPI.registerToEvent === 'function') {
        initTagManager();
    }
    else {
        window.addEventListener('wixEmbedsAPIReady', function () {
            initTagManager();
            // Noop-ified to prevent duplicate callbacks
            initTagManager = function () { };
        }, false);
    }
}


/***/ })
/******/ ]);
//# sourceMappingURL=siteTags.bundle.js.map