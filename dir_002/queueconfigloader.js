var QueueIt;
(function (QueueIt) {
    var Javascript;
    (function (Javascript) {
        var _queueitBuildJsVersion = "2.0.48";
        Javascript.Version = _queueitBuildJsVersion;
    })(Javascript = QueueIt.Javascript || (QueueIt.Javascript = {}));
})(QueueIt || (QueueIt = {}));

var QueueIt;
(function (QueueIt) {
    var Tools;
    (function (Tools) {
        var EnvironmentHelper = /** @class */ (function () {
            function EnvironmentHelper() {
            }
            EnvironmentHelper.retrieveEnvInfoFromScriptTag = function () {
                if (EnvironmentHelper.environemntVariable)
                    return EnvironmentHelper.environemntVariable;
                try {
                    var scripts = document.getElementsByTagName("script");
                    for (var i = 0; i < scripts.length; i++) {
                        var scriptTag = scripts[i];
                        var cid = scriptTag.getAttribute("data-queueit-c");
                        if (!cid) {
                            continue;
                        }
                        var host = scriptTag.getAttribute("data-queueit-host") || "";
                        var interceptAttr = scriptTag.getAttribute("data-queueit-intercept") || "";
                        var intercept = interceptAttr.toLowerCase() == "true";
                        var interceptVNextAttr = scriptTag.getAttribute("data-queueit-interceptvnext");
                        var interceptVNext = interceptVNextAttr !== null;
                        var domainToIntercept = scriptTag.getAttribute("data-queueit-intercept-domain") || "";
                        var jsHost = scriptTag.getAttribute("data-queueit-jshost") || "";
                        var noCacheRAttr = scriptTag.getAttribute("data-queueit-nocachereq") || "";
                        var noCacheR = noCacheRAttr.toLowerCase() == 'true';
                        var noAutorunAttr = scriptTag.getAttribute("data-queueit-noautorun") || "";
                        var noAutorun = noAutorunAttr.toLowerCase() == 'true';
                        var queueitKURedirectHeaderName = scriptTag.getAttribute("data-queueit-ku-redirect-headername") || "";
                        var spaAttr = scriptTag.getAttribute("data-queueit-spa") || "";
                        var isSPA = spaAttr.toLowerCase() === "true";
                        EnvironmentHelper.environemntVariable = {
                            cid: cid,
                            intercept: intercept,
                            interceptVNext: interceptVNext,
                            host: host,
                            jsHost: jsHost,
                            noCacheRequest: noCacheR,
                            noAutorun: noAutorun,
                            domainToIntercept: domainToIntercept,
                            queueitKURedirectHeaderName: queueitKURedirectHeaderName,
                            isSPA: isSPA
                        };
                        return EnvironmentHelper.environemntVariable;
                    }
                }
                catch (ex) {
                    console.warn(ex);
                }
                return null;
            };
            EnvironmentHelper.cleanUp = function () {
                EnvironmentHelper.environemntVariable = undefined;
            };
            return EnvironmentHelper;
        }());
        Tools.EnvironmentHelper = EnvironmentHelper;
        var EnvironmentInfo = /** @class */ (function () {
            function EnvironmentInfo() {
            }
            return EnvironmentInfo;
        }());
        Tools.EnvironmentInfo = EnvironmentInfo;
    })(Tools = QueueIt.Tools || (QueueIt.Tools = {}));
})(QueueIt || (QueueIt = {}));

var QueueIt;
(function (QueueIt) {
    var Javascript;
    (function (Javascript) {
        var KnownUser;
        (function (KnownUser) {
            var KU_REDIRECT_HEADER = "x-queueit-redirect";
            var KU_AJAX_PAGE_URL_HEADER = "x-queueit-ajaxpageurl";
            var RequestInterceptHelper = /** @class */ (function () {
                function RequestInterceptHelper() {
                }
                RequestInterceptHelper.getAjaxHeader = function (currentUrl) {
                    return [KU_AJAX_PAGE_URL_HEADER, encodeURIComponent(currentUrl)];
                };
                RequestInterceptHelper.getUrlFromFetchArguments = function (input) {
                    if (input instanceof Request) {
                        return input.url;
                    }
                    else {
                        return String(input);
                    }
                };
                RequestInterceptHelper.getRedirectHeaderName = function (env) {
                    if (env && env.queueitKURedirectHeaderName) {
                        return env.queueitKURedirectHeaderName;
                    }
                    else {
                        return KU_REDIRECT_HEADER;
                    }
                };
                RequestInterceptHelper.addAjaxRedirectParameter = function (url) {
                    var targetParamIndex = url.indexOf('&t=');
                    if (targetParamIndex === -1) {
                        if (url.indexOf('?') === -1) {
                            url += '?';
                        }
                        url += '&_jsar=1';
                    }
                    else {
                        url = url.substring(0, targetParamIndex) + '&_jsar=1' + url.substring(targetParamIndex);
                    }
                    return url;
                };
                RequestInterceptHelper.defaultRedirector = function (location) {
                    return function (url) {
                        if (url.indexOf('_jsar=1') === -1) {
                            url = RequestInterceptHelper.addAjaxRedirectParameter(url);
                        }
                        location.href = url;
                        document.close();
                    };
                };
                RequestInterceptHelper.tryGetQueueItRedirectHeaderFromFetch = function (response, queueitKURedirectHeaderName) {
                    var queryUrl = response.headers.get(queueitKURedirectHeaderName);
                    return queryUrl || "";
                };
                RequestInterceptHelper.tryGetQueueItRedirectHeaderFromXHR = function (xhr, queueitKURedirectHeaderName) {
                    var queueUrl = "";
                    var lowerCaseRedirectHeader = queueitKURedirectHeaderName.toLowerCase();
                    //We check first if the header exist since if the request is to another domain
                    //and the header does not exist chrome prints an error "Refused to get unsafe header "x-queueit-redirect""
                    if (typeof xhr.getAllResponseHeaders == 'function') {
                        var allHeaders = xhr.getAllResponseHeaders().toLowerCase() || "";
                        if (allHeaders.indexOf(lowerCaseRedirectHeader) >= 0) {
                            queueUrl = xhr.getResponseHeader(queueitKURedirectHeaderName);
                        }
                    }
                    else {
                        queueUrl = xhr.getResponseHeader(queueitKURedirectHeaderName);
                    }
                    return queueUrl;
                };
                //Is request Url matching the domain to intercept?
                RequestInterceptHelper.isUrlDomainMatchingOrIsRelativeURL = function (targetUrl, domainToIntercept) {
                    var absoluteUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i');
                    if (!absoluteUrlRegex.test(targetUrl)) {
                        return true;
                    }
                    if (domainToIntercept) {
                        var tmp = document.createElement('a');
                        tmp.href = targetUrl;
                        if (tmp.hostname.indexOf(domainToIntercept) > -1) {
                            return true;
                        }
                    }
                    return false;
                };
                return RequestInterceptHelper;
            }());
            KnownUser.RequestInterceptHelper = RequestInterceptHelper;
        })(KnownUser = Javascript.KnownUser || (Javascript.KnownUser = {}));
    })(Javascript = QueueIt.Javascript || (QueueIt.Javascript = {}));
})(QueueIt || (QueueIt = {}));

/* eslint no-irregular-whitespace: "off" */
var QueueIt;
(function (QueueIt) {
    var Javascript;
    (function (Javascript) {
        var KnownUser;
        (function (KnownUser) {
            var AjaxInterceptor = /** @class */ (function () {
                function AjaxInterceptor() {
                }
                AjaxInterceptor.interceptOpen = function (domainToIntercept, en, getCurrentUrl, redirector, location) {
                    if (getCurrentUrl === void 0) { getCurrentUrl = null; }
                    if (redirector === void 0) { redirector = null; }
                    if (location === void 0) { location = null; }
                    var queueitKURedirectHeaderName = KnownUser.RequestInterceptHelper.getRedirectHeaderName(en);
                    location = location || window.location;
                    redirector = redirector || KnownUser.RequestInterceptHelper.defaultRedirector(location);
                    getCurrentUrl = getCurrentUrl || (function () { return location.href; });
                    /* old safari and test engine for unitest*/
                    if (!((typeof XMLHttpRequest === 'function' || typeof XMLHttpRequest === 'object')
                        && XMLHttpRequest.prototype)) {
                        return;
                    }
                    var orgOpen = XMLHttpRequest.prototype.open;
                    var stateIsUpdated = function (xhr) {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            try {
                                var queueUrl = KnownUser.RequestInterceptHelper.tryGetQueueItRedirectHeaderFromXHR(xhr, queueitKURedirectHeaderName);
                                if (queueUrl) {
                                    redirector(decodeURIComponent(queueUrl));
                                }
                            }
                            catch (ex) {
                                console.log("getResponseHeader('" + queueitKURedirectHeaderName + "') error" + ex);
                            }
                        }
                    };
                    XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
                        var xhr = this;
                        var addQueueITHeaders = false;
                        try {
                            addQueueITHeaders = KnownUser.RequestInterceptHelper.isUrlDomainMatchingOrIsRelativeURL(url, domainToIntercept);
                            if (addQueueITHeaders) {
                                xhr.addEventListener("readystatechange", function () { return stateIsUpdated(xhr); });
                            }
                        }
                        catch (ex) {
                            console.warn(ex);
                        }
                        finally {
                            orgOpen.apply(xhr, arguments);
                            if (addQueueITHeaders) {
                                xhr.setRequestHeader.apply(xhr, KnownUser.RequestInterceptHelper.getAjaxHeader(getCurrentUrl()));
                            }
                        }
                    };
                };
                return AjaxInterceptor;
            }());
            KnownUser.AjaxInterceptor = AjaxInterceptor;
        })(KnownUser = Javascript.KnownUser || (Javascript.KnownUser = {}));
    })(Javascript = QueueIt.Javascript || (QueueIt.Javascript = {}));
})(QueueIt || (QueueIt = {}));

/// <reference path="../Tools/environmentHelper.ts" />
var QueueIt;
(function (QueueIt) {
    var Javascript;
    (function (Javascript) {
        var KnownUser;
        (function (KnownUser) {
            var AjaxVNextInterceptor = /** @class */ (function () {
                function AjaxVNextInterceptor() {
                }
                AjaxVNextInterceptor.addEventListener = function (context) {
                    return function (type, listener, options) {
                        if (type != 'readystatechange') {
                            context.AddEventListener.apply(this, arguments);
                            return;
                        }
                        this.listeners = this.listeners || [];
                        this.listeners.push(listener);
                    };
                };
                AjaxVNextInterceptor.removeEventListener = function (context) {
                    return function (type, listener, options) {
                        if (type != 'readystatechange') {
                            context.RemoveEventListener.apply(this, arguments);
                            return;
                        }
                        var xhr = this;
                        xhr.listeners = xhr.listeners || [];
                        xhr.listeners = this.listeners.filter(function (ev) {
                            return ev !== listener;
                        });
                    };
                };
                ;
                AjaxVNextInterceptor.open = function (context) {
                    return function (method, url, async, user, password) {
                        var xhr = this;
                        xhr.redirect = context.Redirect;
                        xhr.redirectHeaderName = context.RedirectHeaderName;
                        try {
                            xhr.shouldBeIntercepted = KnownUser.RequestInterceptHelper.isUrlDomainMatchingOrIsRelativeURL(url, context.InterceptDomain);
                            context.AddEventListener.apply(xhr, ['readystatechange', AjaxVNextInterceptor.stateUpdatedHandler]);
                        }
                        catch (ex) {
                            console.warn('Couldn\'t setup open intercept: ', ex);
                        }
                        finally {
                            context.Open.apply(xhr, arguments);
                            if (xhr.shouldBeIntercepted) {
                                var _a = KnownUser.RequestInterceptHelper.getAjaxHeader(context.GetCurrentUrl()), headerName = _a[0], headerValue = _a[1];
                                xhr.setRequestHeader(headerName, headerValue);
                            }
                        }
                    };
                };
                ;
                AjaxVNextInterceptor.invokeListeners = function (xhr, args) {
                    for (var i = 0; i < (xhr.listeners || []).length; i++) {
                        var listener = xhr.listeners[i];
                        listener.apply(xhr, arguments);
                    }
                };
                AjaxVNextInterceptor.interceptOpen = function (domainToIntercept, en, getCurrentUrl, redirector, location) {
                    if (getCurrentUrl === void 0) { getCurrentUrl = null; }
                    if (redirector === void 0) { redirector = null; }
                    if (location === void 0) { location = null; }
                    var redirectHeaderName = KnownUser.RequestInterceptHelper.getRedirectHeaderName(en);
                    location = location || window.location;
                    redirector = redirector || KnownUser.RequestInterceptHelper.defaultRedirector(location);
                    getCurrentUrl = getCurrentUrl || (function () { return window.location.href; });
                    if (!((typeof XMLHttpRequest === 'function' || typeof XMLHttpRequest === 'object' /*old safari and test engine for unitest*/)
                        && XMLHttpRequest.prototype)) {
                        return;
                    }
                    var origOpen = XMLHttpRequest.prototype.open;
                    var origAddEventListener = XMLHttpRequest.prototype.addEventListener;
                    var origRemoveEventListener = XMLHttpRequest.prototype.removeEventListener;
                    var context = {
                        Open: origOpen,
                        AddEventListener: origAddEventListener,
                        RemoveEventListener: origRemoveEventListener,
                        GetCurrentUrl: getCurrentUrl,
                        Redirect: redirector,
                        RedirectHeaderName: redirectHeaderName,
                        InterceptDomain: domainToIntercept
                    };
                    XMLHttpRequest.prototype.addEventListener = AjaxVNextInterceptor.addEventListener(context);
                    XMLHttpRequest.prototype.removeEventListener = AjaxVNextInterceptor.removeEventListener(context);
                    XMLHttpRequest.prototype.open = AjaxVNextInterceptor.open(context);
                };
                AjaxVNextInterceptor.stateUpdatedHandler = function (_) {
                    var xhr = this;
                    if (xhr.wasIntercepted) {
                        return;
                    }
                    if (!xhr.shouldBeIntercepted) {
                        AjaxVNextInterceptor.invokeListeners(xhr, arguments);
                        return;
                    }
                    if (xhr.readyState == XMLHttpRequest.HEADERS_RECEIVED
                        || xhr.readyState == XMLHttpRequest.DONE) {
                        try {
                            var queueUrl = KnownUser.RequestInterceptHelper.tryGetQueueItRedirectHeaderFromXHR(xhr, xhr.redirectHeaderName);
                            if (queueUrl) {
                                xhr.wasIntercepted = true;
                                xhr.onreadystatechange = AjaxVNextInterceptor.stateUpdatedHandler.bind(xhr);
                                xhr.onload = AjaxVNextInterceptor.stateUpdatedHandler.bind(xhr);
                                xhr.redirect(decodeURIComponent(queueUrl));
                                return;
                            }
                        }
                        catch (ex) {
                            console.log("getResponseHeader('" + xhr.redirectHeaderName + "') error" + ex, ex);
                        }
                    }
                    AjaxVNextInterceptor.invokeListeners(xhr, arguments);
                };
                return AjaxVNextInterceptor;
            }());
            KnownUser.AjaxVNextInterceptor = AjaxVNextInterceptor;
        })(KnownUser = Javascript.KnownUser || (Javascript.KnownUser = {}));
    })(Javascript = QueueIt.Javascript || (QueueIt.Javascript = {}));
})(QueueIt || (QueueIt = {}));

/// <reference path="../Tools/environmentHelper.ts" />
var QueueIt;
(function (QueueIt) {
    var Javascript;
    (function (Javascript) {
        var KnownUser;
        (function (KnownUser) {
            var FetchInterceptor = /** @class */ (function () {
                function FetchInterceptor() {
                }
                FetchInterceptor.responseHandler = function (redirector, queueitKURedirectHeaderName) {
                    return function (response) {
                        try {
                            var waitingRoomUrl = KnownUser.RequestInterceptHelper.tryGetQueueItRedirectHeaderFromFetch(response, queueitKURedirectHeaderName);
                            if (waitingRoomUrl) {
                                redirector(decodeURIComponent(waitingRoomUrl));
                                return new Promise(function () {
                                });
                            }
                            return response;
                        }
                        catch (ex) {
                            console.warn("fetch response header ('" + queueitKURedirectHeaderName + "') error" + ex);
                            throw ex;
                        }
                    };
                };
                FetchInterceptor.addQueueItHeadersToFetchRequest = function (input, init, currentUrl) {
                    var _a = KnownUser.RequestInterceptHelper.getAjaxHeader(currentUrl), ajaxHeaderName = _a[0], value = _a[1];
                    if (input instanceof Request) {
                        input.headers.set(ajaxHeaderName, value);
                    }
                    else if (typeof input == 'string') {
                        init = init || {};
                        init.headers = init.headers || {};
                        init.headers[ajaxHeaderName] = value;
                    }
                    if (init != null && typeof init == 'object' && init['mode'] == 'no-cors') {
                        console.warn('when no-cors is used, custom queue-it headers can\'t be used');
                    }
                    return [input, init];
                };
                FetchInterceptor.interceptFetch = function (domainToIntercept, env, getCurrentUrl, redirector, location) {
                    if (getCurrentUrl === void 0) { getCurrentUrl = null; }
                    if (redirector === void 0) { redirector = null; }
                    if (location === void 0) { location = null; }
                    var scope = window;
                    var hasFetch = typeof scope.fetch === 'function';
                    location = location || window.location;
                    if (!hasFetch)
                        return;
                    var queueitKURedirectHeaderName = KnownUser.RequestInterceptHelper.getRedirectHeaderName(env);
                    var origFetch = scope.fetch;
                    redirector = redirector || KnownUser.RequestInterceptHelper.defaultRedirector(location);
                    getCurrentUrl = getCurrentUrl || (function () { return location.href; });
                    scope.fetch = function (input, init) {
                        var url = KnownUser.RequestInterceptHelper.getUrlFromFetchArguments(input);
                        var shouldAddQueueItHeaders = false;
                        try {
                            shouldAddQueueItHeaders = KnownUser.RequestInterceptHelper.isUrlDomainMatchingOrIsRelativeURL(url, domainToIntercept);
                        }
                        catch (ex) {
                            console.warn(ex);
                        }
                        if (!shouldAddQueueItHeaders) {
                            return origFetch.apply(scope, arguments);
                        }
                        var _a = FetchInterceptor.addQueueItHeadersToFetchRequest(input, init, getCurrentUrl()), request = _a[0], options = _a[1];
                        return origFetch.apply(scope, [request, options])
                            .then(FetchInterceptor.responseHandler(redirector, queueitKURedirectHeaderName));
                    };
                };
                return FetchInterceptor;
            }());
            KnownUser.FetchInterceptor = FetchInterceptor;
        })(KnownUser = Javascript.KnownUser || (Javascript.KnownUser = {}));
    })(Javascript = QueueIt.Javascript || (QueueIt.Javascript = {}));
})(QueueIt || (QueueIt = {}));

var QueueIt;
(function (QueueIt) {
    var Javascript;
    (function (Javascript) {
        var KnownUser;
        (function (KnownUser) {
            var UrlQueueClientInitializer = /** @class */ (function () {
                function UrlQueueClientInitializer() {
                }
                UrlQueueClientInitializer.tryInitQueueClientFromToken = function (en, url) {
                    if (url === void 0) { url = null; }
                    if (!url)
                        url = window.location.href;
                    if (!en || !en.cid)
                        return;
                    var token = UrlQueueClientInitializer.getQueueITToken(url);
                    if (!token ||
                        !token.eventId || !QueueIt.Javascript.QueueClient || window.myQueueClient)
                        return;
                    var options = { removeTokenFromUrl: true };
                    if (en.host)
                        options.host = en.host;
                    var domainHelper = Javascript.CookieDomainHelperFactory.Create(en);
                    var cookieFlagHelper = Javascript.CookieFlagsHelperFactory.Create();
                    options.cookieDomain = domainHelper.resolveCookieDomain();
                    options.isCookieSecure = cookieFlagHelper.cookieShouldBeSecure();
                    window.myQueueClient = window.queueClient(en.cid, token.eventId, options);
                };
                UrlQueueClientInitializer.getQueueITToken = function (currentUrl) {
                    var regex = /queueittoken=([^&]*)/i;
                    var match = regex.exec(currentUrl);
                    if (!match || !match[1])
                        return null;
                    var result = new QueueItToken();
                    result.rawQueueItToken = match[1];
                    var tokenParts = result.rawQueueItToken.split("~");
                    for (var _i = 0, tokenParts_1 = tokenParts; _i < tokenParts_1.length; _i++) {
                        var nameVal = tokenParts_1[_i];
                        var nameValArray = nameVal.split("_");
                        if (nameValArray[0].toLowerCase() === "e") {
                            result.eventId = nameValArray[1];
                        }
                    }
                    return result;
                };
                return UrlQueueClientInitializer;
            }());
            KnownUser.UrlQueueClientInitializer = UrlQueueClientInitializer;
            var QueueItToken = /** @class */ (function () {
                function QueueItToken() {
                }
                return QueueItToken;
            }());
            KnownUser.QueueItToken = QueueItToken;
        })(KnownUser = Javascript.KnownUser || (Javascript.KnownUser = {}));
    })(Javascript = QueueIt.Javascript || (QueueIt.Javascript = {}));
})(QueueIt || (QueueIt = {}));

var QueueIt;
(function (QueueIt) {
    var Javascript;
    (function (Javascript) {
        var IntegrationConfig;
        (function (IntegrationConfig) {
            var Model;
            (function (Model) {
                function isNumber(arg) {
                    var isNaN2 = function (value) {
                        return typeof value === "number" && isNaN(value);
                    };
                    return !isNaN2(parseFloat(arg)) && isFinite(arg);
                }
                var QueueClientEventConfig = /** @class */ (function () {
                    function QueueClientEventConfig() {
                    }
                    return QueueClientEventConfig;
                }());
                Model.QueueClientEventConfig = QueueClientEventConfig;
                var RedirectionLogic = /** @class */ (function () {
                    function RedirectionLogic() {
                    }
                    RedirectionLogic.AllowTParameter = "AllowTParameter";
                    RedirectionLogic.EventTargetUrl = "EventTargetUrl";
                    RedirectionLogic.ForcedTargetUrl = "ForcedTargetUrl";
                    /**
                    Because of typo in enum value we need to support this for some time (all old configs would contain the value with typo)
                    **/
                    RedirectionLogic.ForecedTargetUrl = "ForecedTargetUrl";
                    return RedirectionLogic;
                }());
                Model.RedirectionLogic = RedirectionLogic;
                var ValidatorType = /** @class */ (function () {
                    function ValidatorType() {
                    }
                    ValidatorType.UrlValidator = "UrlValidator";
                    ValidatorType.CookieValidator = "CookieValidator";
                    ValidatorType.JSVariableValidator = "JSVariableValidator";
                    ValidatorType.UserAgentValidator = "UserAgentValidator";
                    return ValidatorType;
                }());
                Model.ValidatorType = ValidatorType;
                var ComparisonOperatorType = /** @class */ (function () {
                    function ComparisonOperatorType() {
                    }
                    ComparisonOperatorType.Equals = "Equals";
                    ComparisonOperatorType.Contains = "Contains";
                    ComparisonOperatorType.ContainsAny = "ContainsAny";
                    ComparisonOperatorType.EqualsAny = "EqualsAny";
                    //Old version
                    ComparisonOperatorType.NotEquals = "NotEquals";
                    ComparisonOperatorType.NotContains = "NotContains";
                    ComparisonOperatorType.IgEquals = "IgEquals";
                    ComparisonOperatorType.IgContains = "IgContains";
                    return ComparisonOperatorType;
                }());
                Model.ComparisonOperatorType = ComparisonOperatorType;
                var UrlPartSelectorType = /** @class */ (function () {
                    function UrlPartSelectorType() {
                    }
                    UrlPartSelectorType.PagePath = "PagePath";
                    UrlPartSelectorType.HostName = "HostName";
                    UrlPartSelectorType.PageUrl = "PageUrl";
                    return UrlPartSelectorType;
                }());
                Model.UrlPartSelectorType = UrlPartSelectorType;
                var ActionType = /** @class */ (function () {
                    function ActionType() {
                    }
                    ActionType.CancelAction = "Cancel";
                    ActionType.QueueAction = "Queue";
                    ActionType.IgnoreAction = "Ignore";
                    return ActionType;
                }());
                Model.ActionType = ActionType;
            })(Model = IntegrationConfig.Model || (IntegrationConfig.Model = {}));
        })(IntegrationConfig = Javascript.IntegrationConfig || (Javascript.IntegrationConfig = {}));
    })(Javascript = QueueIt.Javascript || (QueueIt.Javascript = {}));
})(QueueIt || (QueueIt = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var QueueIt;
(function (QueueIt) {
    var Javascript;
    (function (Javascript) {
        var IntegrationConfig;
        (function (IntegrationConfig) {
            function isNumber(arg) {
                var isNaN2 = function (value) {
                    return typeof value === "number" && isNaN(value);
                };
                return !isNaN2(parseFloat(arg)) && isFinite(arg);
            }
            var IntegrationPointBase = /** @class */ (function () {
                function IntegrationPointBase(model, _triggerFactory) {
                    this.model = model;
                    this._triggerFactory = _triggerFactory;
                    this.initTriggers();
                }
                IntegrationPointBase.CreateIntegrationPoint = function (model, triggerFactory) {
                    if (triggerFactory === void 0) { triggerFactory = Trigger.CreateTrigger; }
                    if (IntegrationPointBase.getActionType(model) === IntegrationConfig.Model.ActionType.QueueAction) {
                        return new IntegrationPointQueue(model, triggerFactory);
                    }
                    else if (IntegrationPointBase.getActionType(model) === IntegrationConfig.Model.ActionType.CancelAction) {
                        return new IntegrationPointCancel(model, triggerFactory);
                    }
                    else {
                        return new IntegrationPointIgnore(model, triggerFactory);
                    }
                };
                IntegrationPointBase.prototype.initTriggers = function () {
                    this._triggers = new Array();
                    for (var _i = 0, _a = this.model.triggers; _i < _a.length; _i++) {
                        var triggerModel = _a[_i];
                        this._triggers.push(this._triggerFactory(triggerModel));
                    }
                };
                IntegrationPointBase.prototype.evaluate = function () {
                    for (var _i = 0, _a = this._triggers; _i < _a.length; _i++) {
                        var trigger = _a[_i];
                        if (trigger.evaluate())
                            return true;
                    }
                    return false;
                };
                IntegrationPointBase.prototype.getActionType = function () {
                    return IntegrationPointBase.getActionType(this.model);
                };
                IntegrationPointBase.getActionType = function (model) {
                    if (model.actionType)
                        return model.actionType;
                    return IntegrationConfig.Model.ActionType.QueueAction;
                };
                return IntegrationPointBase;
            }());
            IntegrationConfig.IntegrationPointBase = IntegrationPointBase;
            var IntegrationPointQueue = /** @class */ (function (_super) {
                __extends(IntegrationPointQueue, _super);
                function IntegrationPointQueue(model, triggerFactory) {
                    return _super.call(this, model, triggerFactory) || this;
                }
                IntegrationPointQueue.prototype.getQueueClientConfig = function (customerId) {
                    var result = new IntegrationConfig.Model.QueueClientEventConfig();
                    result.eventId = this.model.eventId;
                    result.cookieDomain = this.model.cookieDomain;
                    result.isCookieSecure = this.model.isCookieSecure || false;
                    result.culture = this.model.culture;
                    result.extendValidity = this.model.extendValidity;
                    result.layoutName = this.model.layoutName;
                    result.validity = this.model.validity;
                    if (this.model.queueDomain) {
                        result.host = this.model.queueDomain;
                    }
                    if (this.model.removeTokenFromUrl) {
                        result.removeTokenFromUrl = true;
                        result.queryStringPrefix = this.model.queryStringPrefix;
                    }
                    var that = this;
                    if (this.model.onVerified) {
                        result.onVerified = function () {
                            (function (customerId, eventId, waitingRoomId) {
                                eval(that.model.onVerified);
                            })(customerId, that.model.eventId, that.model.eventId);
                        };
                    }
                    if (this.model.onDisabled) {
                        result.onDisabled = function () {
                            (function (customerId, eventId, waitingRoomId) {
                                eval(that.model.onDisabled);
                            })(customerId, that.model.eventId, that.model.eventId);
                        };
                    }
                    if (this.model.onTimeout) {
                        result.onTimeout = function () {
                            (function (customerId, eventId, waitingRoomId) {
                                eval(that.model.onTimeout);
                            })(customerId, that.model.eventId, that.model.eventId);
                        };
                    }
                    if (this.model.redirectLogic == IntegrationConfig.Model.RedirectionLogic.EventTargetUrl || this.model.redirectLogic == 1) {
                        result.useEventTargetUrl = true;
                        result.targetUrl = null;
                    }
                    else if (this.model.redirectLogic == IntegrationConfig.Model.RedirectionLogic.ForcedTargetUrl
                        || this.model.redirectLogic == IntegrationConfig.Model.RedirectionLogic.ForecedTargetUrl
                        || this.model.redirectLogic == 2) {
                        result.useEventTargetUrl = false;
                        result.targetUrl = this.model.forcedTargetUrl;
                    }
                    else if (this.model.redirectLogic == IntegrationConfig.Model.RedirectionLogic.AllowTParameter || this.model.redirectLogic == 0) {
                        result.useEventTargetUrl = false;
                        result.targetUrl = null;
                    }
                    return result;
                };
                return IntegrationPointQueue;
            }(IntegrationPointBase));
            IntegrationConfig.IntegrationPointQueue = IntegrationPointQueue;
            var IntegrationPointCancel = /** @class */ (function (_super) {
                __extends(IntegrationPointCancel, _super);
                function IntegrationPointCancel(model, triggerFactory) {
                    return _super.call(this, model, triggerFactory) || this;
                }
                IntegrationPointCancel.prototype.getEventId = function () {
                    return this.model.eventId;
                };
                IntegrationPointCancel.prototype.getCookieDomain = function () {
                    return this.model.cookieDomain;
                };
                IntegrationPointCancel.prototype.isCookieSecure = function () {
                    return this.model.isCookieSecure;
                };
                IntegrationPointCancel.prototype.getQueueDomain = function () {
                    return this.model.queueDomain;
                };
                return IntegrationPointCancel;
            }(IntegrationPointBase));
            IntegrationConfig.IntegrationPointCancel = IntegrationPointCancel;
            var IntegrationPointIgnore = /** @class */ (function (_super) {
                __extends(IntegrationPointIgnore, _super);
                function IntegrationPointIgnore(model, triggerFactory) {
                    return _super.call(this, model, triggerFactory) || this;
                }
                return IntegrationPointIgnore;
            }(IntegrationPointBase));
            IntegrationConfig.IntegrationPointIgnore = IntegrationPointIgnore;
            var Trigger = /** @class */ (function () {
                function Trigger(_triggerModel, _triggerPartFactory) {
                    //backward compatibility
                    this._triggerModel = _triggerModel;
                    this._triggerPartFactory = _triggerPartFactory;
                    this.logicalOperator = _triggerModel.logicalOperator || "And";
                    this.initOperators();
                }
                Trigger.CreateTrigger = function (model, triggerPartFactory) {
                    if (triggerPartFactory === void 0) { triggerPartFactory = ValidatorBase.CreateValidator; }
                    return new Trigger(model, triggerPartFactory);
                };
                Trigger.prototype.initOperators = function () {
                    this._expersions = new Array();
                    for (var _i = 0, _a = this._triggerModel.triggerParts; _i < _a.length; _i++) {
                        var operator = _a[_i];
                        this._expersions.push(this._triggerPartFactory(operator));
                    }
                };
                Trigger.prototype.evaluate = function () {
                    if (this.logicalOperator.toLowerCase() == "and") {
                        for (var _i = 0, _a = this._expersions; _i < _a.length; _i++) {
                            var exp = _a[_i];
                            if (!exp.evaluate())
                                return false;
                        }
                        return true;
                    }
                    else if (this.logicalOperator.toLowerCase() == "or") {
                        for (var _b = 0, _c = this._expersions; _b < _c.length; _b++) {
                            var exp = _c[_b];
                            if (exp.evaluate())
                                return true;
                        }
                        return false;
                    }
                    else
                        throw "Not supported logical operator";
                };
                return Trigger;
            }());
            IntegrationConfig.Trigger = Trigger;
            var ValidatorBase = /** @class */ (function () {
                function ValidatorBase(triggerPartModel) {
                    this.triggerPartModel = triggerPartModel;
                }
                ValidatorBase.CreateValidator = function (triggerPartModel) {
                    //backward compatibility
                    triggerPartModel.validatorType = triggerPartModel.validatorType || "UrlValidator";
                    switch (triggerPartModel.validatorType) {
                        case IntegrationConfig.Model.ValidatorType.UrlValidator:
                            return new UrlValidator(triggerPartModel);
                        case IntegrationConfig.Model.ValidatorType.CookieValidator:
                            return new CookieValidator(triggerPartModel);
                        case IntegrationConfig.Model.ValidatorType.JSVariableValidator:
                            return new JSVariableValidator(triggerPartModel);
                        case IntegrationConfig.Model.ValidatorType.UserAgentValidator:
                            return new UserAgentValidator(triggerPartModel);
                        default:
                            return new FalsyValidator(triggerPartModel);
                    }
                };
                ValidatorBase.getDocumentCookie = function () {
                    return document.cookie;
                };
                ValidatorBase.getWindowLocation = function () {
                    return window.location;
                };
                ValidatorBase.getJSVariableValue = function (variableName) {
                    return window[variableName];
                };
                ValidatorBase.getUserAgent = function () {
                    return window.navigator.userAgent;
                };
                return ValidatorBase;
            }());
            IntegrationConfig.ValidatorBase = ValidatorBase;
            var UrlValidator = /** @class */ (function (_super) {
                __extends(UrlValidator, _super);
                function UrlValidator(triggerPartModel) {
                    return _super.call(this, triggerPartModel) || this;
                }
                UrlValidator.prototype.evaluate = function () {
                    return ComparisonOperator.evaluate(this.triggerPartModel.operator, this.getUrlPart(), this.triggerPartModel.valueToCompare, this.triggerPartModel.isNegative, this.triggerPartModel.isIgnoreCase, this.triggerPartModel.valuesToCompare);
                };
                UrlValidator.prototype.getUrlPart = function () {
                    var documentLocation = ValidatorBase.getWindowLocation();
                    switch (this.triggerPartModel.urlPart) {
                        case IntegrationConfig.Model.UrlPartSelectorType.HostName:
                            return documentLocation.hostname;
                        case IntegrationConfig.Model.UrlPartSelectorType.PagePath:
                            return documentLocation.pathname;
                        case IntegrationConfig.Model.UrlPartSelectorType.PageUrl:
                            return documentLocation.href;
                        default:
                            throw "Not supported url part selector" + this.triggerPartModel.urlPart;
                    }
                };
                return UrlValidator;
            }(ValidatorBase));
            IntegrationConfig.UrlValidator = UrlValidator;
            var CookieValidator = /** @class */ (function (_super) {
                __extends(CookieValidator, _super);
                function CookieValidator(triggerPartModel) {
                    return _super.call(this, triggerPartModel) || this;
                }
                CookieValidator.prototype.evaluate = function () {
                    var cookieValue = this.getCookie(this.triggerPartModel.cookieName);
                    return ComparisonOperator.evaluate(this.triggerPartModel.operator, cookieValue, this.triggerPartModel.valueToCompare, this.triggerPartModel.isNegative, this.triggerPartModel.isIgnoreCase, this.triggerPartModel.valuesToCompare);
                };
                CookieValidator.prototype.getCookie = function (cookieName) {
                    var documentCookie = ValidatorBase.getDocumentCookie();
                    var name = cookieName + "=";
                    var ca = documentCookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') {
                            c = c.substring(1);
                        }
                        if (c.indexOf(name) == 0) {
                            return c.substring(name.length, c.length);
                        }
                    }
                    return "";
                };
                return CookieValidator;
            }(ValidatorBase));
            IntegrationConfig.CookieValidator = CookieValidator;
            var JSVariableValidator = /** @class */ (function (_super) {
                __extends(JSVariableValidator, _super);
                function JSVariableValidator(triggerPartModel) {
                    return _super.call(this, triggerPartModel) || this;
                }
                JSVariableValidator.prototype.evaluate = function () {
                    return ComparisonOperator.evaluate(this.triggerPartModel.operator, ValidatorBase.getJSVariableValue(this.triggerPartModel.variableName), this.triggerPartModel.valueToCompare, this.triggerPartModel.isNegative, this.triggerPartModel.isIgnoreCase, this.triggerPartModel.valuesToCompare);
                };
                return JSVariableValidator;
            }(ValidatorBase));
            IntegrationConfig.JSVariableValidator = JSVariableValidator;
            var UserAgentValidator = /** @class */ (function (_super) {
                __extends(UserAgentValidator, _super);
                function UserAgentValidator(triggerPartModel) {
                    return _super.call(this, triggerPartModel) || this;
                }
                UserAgentValidator.prototype.evaluate = function () {
                    return ComparisonOperator.evaluate(this.triggerPartModel.operator, ValidatorBase.getUserAgent(), this.triggerPartModel.valueToCompare, this.triggerPartModel.isNegative, this.triggerPartModel.isIgnoreCase, this.triggerPartModel.valuesToCompare);
                };
                return UserAgentValidator;
            }(ValidatorBase));
            IntegrationConfig.UserAgentValidator = UserAgentValidator;
            var FalsyValidator = /** @class */ (function (_super) {
                __extends(FalsyValidator, _super);
                function FalsyValidator(triggerPartModel) {
                    return _super.call(this, triggerPartModel) || this;
                }
                FalsyValidator.prototype.evaluate = function () {
                    return false;
                };
                return FalsyValidator;
            }(ValidatorBase));
            IntegrationConfig.FalsyValidator = FalsyValidator;
            var ComparisonOperator = /** @class */ (function () {
                function ComparisonOperator() {
                }
                ComparisonOperator.containsAny = function (isNegative, isIgnoreCase, value, valuesToCompare) {
                    for (var _i = 0, _a = valuesToCompare || []; _i < _a.length; _i++) {
                        var valueToCompare = _a[_i];
                        if (ComparisonOperator.contains(false, isIgnoreCase, value, valueToCompare)) {
                            return !isNegative;
                        }
                    }
                    return isNegative;
                };
                ComparisonOperator.equalsAny = function (isNegative, isIgnoreCase, value, valuesToCompare) {
                    for (var _i = 0, _a = valuesToCompare || []; _i < _a.length; _i++) {
                        var valueToCompare = _a[_i];
                        if (ComparisonOperator.equals(false, isIgnoreCase, value, valueToCompare))
                            return !isNegative;
                    }
                    return isNegative;
                };
                ComparisonOperator.contains = function (isNegative, isIgnoreCase, value, valueToCompare) {
                    if (valueToCompare == "*" && value && value.length > 0)
                        return true;
                    var evaluation = false;
                    if (isIgnoreCase)
                        evaluation = value.toUpperCase().indexOf(valueToCompare.toUpperCase()) > -1;
                    else
                        evaluation = value.indexOf(valueToCompare) > -1;
                    if (isNegative)
                        return !evaluation;
                    else
                        return evaluation;
                };
                ComparisonOperator.equals = function (isNegative, isIgnoreCase, value, valueToCompare) {
                    var evaluation = false;
                    if (isIgnoreCase)
                        evaluation = value.toUpperCase() === valueToCompare.toUpperCase();
                    else
                        evaluation = value === valueToCompare;
                    if (isNegative)
                        return !evaluation;
                    else
                        return evaluation;
                };
                ComparisonOperator.evaluate = function (operator, value, valueToCompare, isNegative /*nullable bcz of backward compatibility*/, isIgnoreCase /*nullable bcz of backward compatibility*/, valuesToCompare) {
                    var valueS = String(value);
                    //oldVersion does not provide isNegatvie  neither isIgnoreCase
                    if (isNegative == undefined) {
                        return this.evaluate_1_0_0_1(operator, valueS, String(valueToCompare));
                    }
                    switch (operator) {
                        case IntegrationConfig.Model.ComparisonOperatorType.Equals:
                            return ComparisonOperator.equals(isNegative, isIgnoreCase, valueS, String(valueToCompare));
                        case IntegrationConfig.Model.ComparisonOperatorType.Contains:
                            return ComparisonOperator.contains(isNegative, isIgnoreCase, valueS, String(valueToCompare));
                        case IntegrationConfig.Model.ComparisonOperatorType.ContainsAny:
                            return ComparisonOperator.containsAny(isNegative, isIgnoreCase, valueS, valuesToCompare);
                        case IntegrationConfig.Model.ComparisonOperatorType.EqualsAny:
                            return ComparisonOperator.equalsAny(isNegative, isIgnoreCase, valueS, valuesToCompare);
                        default:
                            throw "Not supported  operator : " + operator;
                    }
                };
                ComparisonOperator.evaluate_1_0_0_1 = function (operator, value, valueToCompare) {
                    switch (operator) {
                        case IntegrationConfig.Model.ComparisonOperatorType.Equals:
                            return ComparisonOperator.equals(false, false, value, valueToCompare);
                        case IntegrationConfig.Model.ComparisonOperatorType.NotEquals:
                            return ComparisonOperator.equals(true, false, value, valueToCompare);
                        case IntegrationConfig.Model.ComparisonOperatorType.Contains:
                            return ComparisonOperator.contains(false, false, value, valueToCompare);
                        case IntegrationConfig.Model.ComparisonOperatorType.NotContains:
                            return ComparisonOperator.contains(true, false, value, valueToCompare);
                        case IntegrationConfig.Model.ComparisonOperatorType.IgEquals:
                            return ComparisonOperator.equals(false, true, value, valueToCompare);
                        case IntegrationConfig.Model.ComparisonOperatorType.IgContains:
                            return ComparisonOperator.contains(false, true, value, valueToCompare);
                        default:
                            throw "Not supported  operator : " + operator;
                    }
                };
                return ComparisonOperator;
            }());
            IntegrationConfig.ComparisonOperator = ComparisonOperator;
            function getDefaultWindowProtocol() {
                return window.location.protocol;
            }
            function applyIntegrationConfig(config, integrationPointFactory, getCurrentProtocol) {
                if (integrationPointFactory === void 0) { integrationPointFactory = IntegrationPointBase.CreateIntegrationPoint; }
                if (getCurrentProtocol === void 0) { getCurrentProtocol = null; }
                if (!config)
                    return;
                for (var _i = 0, _a = config.integrations; _i < _a.length; _i++) {
                    var model = _a[_i];
                    var integrationPoint = integrationPointFactory(model);
                    if (integrationPoint.evaluate()) {
                        if (integrationPoint.getActionType() === IntegrationConfig.Model.ActionType.QueueAction) {
                            var selectedConfig = integrationPoint.getQueueClientConfig(config.customerId);
                            window.myQueueClient = window.queueClient(config.customerId, selectedConfig.eventId, selectedConfig);
                        }
                        else if (integrationPoint.getActionType() === IntegrationConfig.Model.ActionType.CancelAction) {
                            var integration = integrationPoint;
                            if (!getCurrentProtocol)
                                getCurrentProtocol = getDefaultWindowProtocol;
                            var queueDomain = integration.getQueueDomain();
                            if (!queueDomain) {
                                queueDomain = config.customerId + '.queue-it.net';
                            }
                            var cookieManager = new QueueIt.Javascript.CookieManager(config.customerId, integration.getEventId(), getCurrentProtocol() + '//' + queueDomain, integration.getCookieDomain(), integration.isCookieSecure());
                            cookieManager.cancelQueueId();
                        }
                        else if (integrationPoint.getActionType() === IntegrationConfig.Model.ActionType.IgnoreAction) {
                            var en_1 = QueueIt.Tools.EnvironmentHelper.retrieveEnvInfoFromScriptTag();
                            if (en_1.intercept || en_1.interceptVNext)
                                QueueIt.Javascript.KnownUser.UrlQueueClientInitializer.tryInitQueueClientFromToken(en_1);
                        }
                        return;
                    }
                }
                var en = QueueIt.Tools.EnvironmentHelper.retrieveEnvInfoFromScriptTag();
                if (en.intercept || en.interceptVNext)
                    QueueIt.Javascript.KnownUser.UrlQueueClientInitializer.tryInitQueueClientFromToken(en);
            }
            IntegrationConfig.applyIntegrationConfig = applyIntegrationConfig;
            function loadIntegrationConfig(nowDate) {
                if (nowDate === void 0) { nowDate = new Date(); }
                var environmentInfo = QueueIt.Tools.EnvironmentHelper.retrieveEnvInfoFromScriptTag();
                if (environmentInfo.noAutorun) {
                    return;
                }
                loadIntegrationConfigFromServer(nowDate, environmentInfo);
            }
            IntegrationConfig.loadIntegrationConfig = loadIntegrationConfig;
            function loadIntegrationConfigFromServer(nowDate, environmentInfo) {
                if (nowDate === void 0) { nowDate = new Date(); }
                if (environmentInfo === void 0) { environmentInfo = null; }
                if (!environmentInfo) {
                    environmentInfo = QueueIt.Tools.EnvironmentHelper.retrieveEnvInfoFromScriptTag();
                }
                if (!environmentInfo) {
                    throw "No queueit attribute is found in script tag";
                }
                var versionTimestamp = "";
                if (!environmentInfo.noCacheRequest) {
                    var yyyy = nowDate.getFullYear();
                    var month = nowDate.getMonth() + 1; //January is 0!
                    var dd = nowDate.getDate();
                    var hh = nowDate.getHours();
                    var mm = Math.floor(nowDate.getMinutes() / 5);
                    versionTimestamp = yyyy + ''
                        + (month < 10 ? '0' + month : month) + ''
                        + (dd < 10 ? '0' + dd : dd) + ''
                        + (hh < 10 ? '0' : hh) + hh
                        + (mm < 10 ? '0' + mm : mm);
                }
                else {
                    versionTimestamp = (nowDate).getTime().toString();
                }
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = getIntegrationConfigUrl(environmentInfo) + '?versionTimestamp=' + versionTimestamp;
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            IntegrationConfig.loadIntegrationConfigFromServer = loadIntegrationConfigFromServer;
            function getIntegrationConfigUrl(envInfo) {
                if (!envInfo || !envInfo.cid)
                    throw "customer id is not found";
                var configRootUrl = "https://assets.queue-it.net/";
                //should be customized for different regions
                if (envInfo.jsHost) {
                    configRootUrl = envInfo.jsHost;
                }
                return configRootUrl + envInfo.cid + "/integrationconfig/javascript/queueclientConfig.js";
            }
            //backward compatibility (javascript created by queuefront)
            QueueIt.Javascript.PageEventIntegration = { initQueueClient: applyIntegrationConfig };
            function initQueueClient(config) {
                applyIntegrationConfig(config);
            }
            IntegrationConfig.initQueueClient = initQueueClient;
            //exposing functions for SPA apps
            function validateUser(reloadConfig) {
                if (reloadConfig === void 0) { reloadConfig = false; }
                if (reloadConfig) {
                    loadIntegrationConfigFromServer();
                }
                else {
                    if (window.queueit_clientside_config) {
                        applyIntegrationConfig(window.queueit_clientside_config);
                    }
                }
            }
            function isIntegrationConfigReady() {
                if (window.queueit_clientside_config)
                    return true;
                return false;
            }
            function getIntegrationConfig() {
                return window.queueit_clientside_config;
            }
            QueueIt.validateUser = validateUser;
            QueueIt.getIntegrationConfig = getIntegrationConfig;
            QueueIt.isIntegrationConfigReady = isIntegrationConfigReady;
        })(IntegrationConfig = Javascript.IntegrationConfig || (Javascript.IntegrationConfig = {}));
    })(Javascript = QueueIt.Javascript || (QueueIt.Javascript = {}));
})(QueueIt || (QueueIt = {}));

/// <reference path="../Tools/environmentHelper.ts" />
var QueueIt;
(function (QueueIt) {
    var Tools;
    (function (Tools) {
        var SpaHelper = /** @class */ (function () {
            function SpaHelper() {
            }
            SpaHelper.setup = function (history) {
                if (!history) {
                    console.warn("browser doesn't support history");
                    return;
                }
                // eslint-disable-next-line compat/compat
                var canPush = typeof history.pushState == 'function';
                // eslint-disable-next-line compat/compat
                var origPush = history.pushState;
                if (canPush) {
                    history.pushState = function (data, title, url) {
                        origPush.apply(history, arguments);
                        QueueIt.validateUser();
                    };
                }
            };
            return SpaHelper;
        }());
        Tools.SpaHelper = SpaHelper;
    })(Tools = QueueIt.Tools || (QueueIt.Tools = {}));
})(QueueIt || (QueueIt = {}));

/// <reference path="integrationConfigManager.ts" />
if (!QueueIt.Javascript.IntegrationConfig.isInitialized) {
    var en = QueueIt.Tools.EnvironmentHelper.retrieveEnvInfoFromScriptTag();
    if (en && en.cid) {
        if (en.interceptVNext) {
            QueueIt.Javascript.KnownUser.AjaxVNextInterceptor.interceptOpen(en.domainToIntercept, en);
        }
        else if (en.intercept) {
            QueueIt.Javascript.KnownUser.AjaxInterceptor.interceptOpen(en.domainToIntercept, en);
        }
        if (en.interceptVNext || en.intercept) {
            QueueIt.Javascript.KnownUser.FetchInterceptor.interceptFetch(en.domainToIntercept, en);
        }
        if (en.isSPA) {
            QueueIt.Tools.SpaHelper.setup(history);
        }
    }
    QueueIt.Javascript.IntegrationConfig.loadIntegrationConfig();
    QueueIt.Javascript.IntegrationConfig.isInitialized = true;
}
else {
    console.log("IntegrationConfigLoader is already initialized!");
}
