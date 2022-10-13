(function(window){try{(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Validators = require("./Validators");

var _vanillaHelpers = _interopRequireDefault(require("./vanillaHelpers"));

var _Utils = require("./Utils");

var _videoConstants = require("./constants/videoConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LastNodeFinder = function () {
  function LastNodeFinder(bugsnag, accountId, isSmartUnitTester, configs) {
    _classCallCheck(this, LastNodeFinder);

    this.bugsnag = bugsnag;
    this.isSmartUnitTester = isSmartUnitTester;
    this.accountId = accountId;
    this.configs = configs;
  }

  _createClass(LastNodeFinder, [{
    key: "getLastParagraphNode",
    value: function getLastParagraphNode(_ref) {
      var node = _ref.node,
          _ref$index = _ref.index,
          index = _ref$index === void 0 ? 1 : _ref$index,
          accountId = _ref.accountId;

      var nodeDescription = _vanillaHelpers["default"].getNodeDescription(node);

      var textNodes = (0, _Utils.textNodesUnder)(node);
      var validatedLastParagraphNode = (0, _Validators.lastNodeValidation)({
        nodes: textNodes,
        isSmartUnitTester: this.isSmartUnitTester,
        configs: this.configs
      });

      if ((0, _Utils.isNodeBlacklisted)(node, this.configs)) {
        this.bugsnag.pushBreadCrumb({
          name: "".concat(nodeDescription, " is blacklisted")
        });
        return null;
      }

      if (validatedLastParagraphNode.length === 0) {
        var videoPlayers = node.querySelectorAll(_videoConstants.videoSelectors);

        if (videoPlayers.length > 0) {
          return node;
        } else {
          this.bugsnag.pushBreadCrumb({
            name: "".concat(nodeDescription, " is not validated")
          });
          return null;
        }
      }

      var childrenNodes = node.children;

      if (childrenNodes.length === 0) {
        this.bugsnag.pushBreadCrumb({
          name: "".concat(nodeDescription, " has no children")
        });
        return node;
      }

      var lastChildIndex = childrenNodes.length - index;
      var lastChildNode = childrenNodes[lastChildIndex];

      for (var i = 0; i < childrenNodes.length; i++) {
        if ((0, _Utils.isNodeBlacklisted)(childrenNodes[i], this.configs)) {
          var childrenIndex = i - 1;

          if (childrenIndex < 0) {
            continue;
          }

          return childrenNodes[childrenIndex];
        }
      }

      if ((0, _Utils.isNodeContainer)(lastChildNode)) {
        var lastParagraph = this.getLastParagraphNode({
          node: lastChildNode,
          accountId: accountId
        });

        if (!lastParagraph) {
          if (index === childrenNodes.length - 1) {
            this.bugsnag.pushBreadCrumb({
              name: "iterated through all sub nodes for ".concat(nodeDescription, ", no valid child found")
            });
            return null;
          }

          if (this.isSmartUnitTester) {
            lastChildNode.setAttribute("style", "background: rgb(255, 255, 0, 0.8)");
          }

          return this.getLastParagraphNode({
            node: node,
            index: index + 1,
            accountId: accountId
          });
        } else {
          return lastParagraph;
        }
      }

      var indexToReturn = childrenNodes.length - 1;

      for (var _i = childrenNodes.length - 1; _i >= 0; _i--) {
        var childNode = childrenNodes[_i];

        if ((0, _Utils.nodeContainsBlacklistedNode)(childNode, this.configs) || (0, _Utils.isNodeBlacklisted)(childNode, this.configs)) {
          indexToReturn = _i - 1;
        }
      }

      if (indexToReturn < 0) {
        this.bugsnag.pushBreadCrumb({
          name: "all children nodes of ".concat(nodeDescription, " are blacklisted")
        });
        return null;
      }

      if (this.isSmartUnitTester) {
        childrenNodes[indexToReturn].setAttribute("style", "background: #007AFF");
        console.log('[KNOTCH] last node', childrenNodes[indexToReturn]);
      }

      return childrenNodes[indexToReturn];
    }
  }]);

  return LastNodeFinder;
}();

var _default = LastNodeFinder;
exports["default"] = _default;
},{"./Utils":5,"./Validators":6,"./constants/videoConstants":16,"./vanillaHelpers":18}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _PageDOMUtils = _interopRequireDefault(require("./PageDOMUtils.js"));

var _LastNodeFinder = _interopRequireDefault(require("./LastNodeFinder"));

var _pageConstants = require("./constants/pageConstants");

var _configURLs = require("./constants/configURLs");

var _vanillaHelpers = _interopRequireDefault(require("./vanillaHelpers"));

var _configMethods = require("./configMethods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaultValidate = function defaultValidate(id, callback) {
  return callback(true);
};

var MAX_RETRIES = 5;

var Page = function () {
  function Page(node, urlMap) {
    var _this = this;

    var pageValidate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultValidate;
    var injectFunction = arguments.length > 3 ? arguments[3] : undefined;
    var bugsnag = arguments.length > 4 ? arguments[4] : undefined;
    var accountId = arguments.length > 5 ? arguments[5] : undefined;
    var config = arguments.length > 6 ? arguments[6] : undefined;
    var isSmartUnitTester = arguments.length > 7 ? arguments[7] : undefined;

    _classCallCheck(this, Page);

    this.node = node;
    this.url = _vanillaHelpers["default"].getCanonicalURL();
    this.urlMap = urlMap;
    this.injected = false;
    this.scrollTimeout = null;
    this.accountId = accountId;
    this.isSmartUnitTester = isSmartUnitTester;

    this.touchEndListener = function () {
      return _this.onScroll();
    };

    this.scrollListener = function () {
      return _this.onScroll();
    };

    this.keyDownListener = function (event) {
      return _this.onKeyDown(event);
    };

    this.pageValidate = pageValidate;
    this.bugsnag = bugsnag;
    this.config = config;
    this.retries = 0;

    this.inject = function (_ref) {
      var pageBodyNode = _ref.pageBodyNode,
          lastParagraphNode = _ref.lastParagraphNode,
          videoPlayer = _ref.videoPlayer,
          knotchPlaceholder = _ref.knotchPlaceholder;
      return injectFunction({
        pageNode: _this.node,
        pageBodyNode: pageBodyNode,
        lastParagraphNode: lastParagraphNode,
        videoPlayer: videoPlayer,
        urlMap: urlMap,
        url: _this.url,
        injectedCallback: function injectedCallback() {
          return _this.injected = true;
        },
        unbindListeners: function unbindListeners() {
          return _this.unbindListeners();
        },
        bugsnag: _this.bugsnag,
        knotchPlaceholder: knotchPlaceholder
      });
    };

    this.init();
  }

  _createClass(Page, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      if (_vanillaHelpers["default"].isMobile()) {
        document.addEventListener('touchend', this.touchEndListener);
      } else {
        document.addEventListener('scroll', this.scrollListener);
        document.addEventListener('keydown', this.keyDownListener);
      }

      _vanillaHelpers["default"].get("".concat(_configURLs.URLS[window.Knotch.config.env], "/").concat(this.accountId, ".json"), {}, function (res) {
        _this2.handleBlacklistFetch(res);
      }, function (status, error, readyState, responseText, responseHeaders) {
        return _this2.bugsnag.reportError(error, {
          data: {
            readyState: readyState,
            responseText: responseText,
            responseHeaders: responseHeaders,
            status: status
          },
          severity: 'info'
        });
      }, this.bugsnag, {
        handle400: true
      });
    }
  }, {
    key: "handleBlacklistFetch",
    value: function handleBlacklistFetch(configs) {
      var _this3 = this;

      this.blacklistKeywords = (0, _configMethods.combineBlacklists)(configs);
      this.pageDOMUtils = new _PageDOMUtils["default"](this.node, this.url, this.bugsnag, this.accountId, this.isSmartUnitTester, this.blacklistKeywords);
      this.lastNodeFinder = new _LastNodeFinder["default"](this.bugsnag, this.accountId, this.isSmartUnitTester, this.blacklistKeywords);
      this.checkVisibility();
      setTimeout(function () {
        if (!_this3.injected) {
          _this3.checkVisibilityInterval = setInterval(function () {
            return _this3.checkVisibility();
          }, 1000);
          window.setTimeout(function () {
            return clearInterval(_this3.checkVisibilityInterval);
          }, 1000 * 10);
        }
      }, 500);
    }
  }, {
    key: "getYPos",
    value: function getYPos() {
      return window.pageYOffset + window.innerHeight;
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var _this4 = this;

      if (this.scrollTimeout) clearTimeout(this.scrollTimeout);

      if (this.injected) {
        this.unbindListeners();
      } else {
        this.scrollTimeout = setTimeout(function () {
          return _this4.checkVisibility();
        }, 1000);
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var code = (event.code || '').toLowerCase();

      if (code === 'space' || code === 'arrowdown') {
        this.onScroll();
      }
    }
  }, {
    key: "checkVisibility",
    value: function checkVisibility() {
      var _this5 = this;

      if (this.injected) {
        this.unbindListeners();
        return;
      }

      var rect = this.node.getBoundingClientRect();
      var inView = rect.top + rect.height >= _pageConstants.INVIEW_OFFSET && rect.top < window.innerHeight / 2;

      if (inView) {
        this.url = _vanillaHelpers["default"].getCanonicalURL();

        if (!this.url) {
          this.unbindListeners();
          return this.bugsnag.pushBreadCrumb({
            name: 'Canonical URL not found',
            type: 'node finder'
          });
        }

        this.infographic = this.pageDOMUtils.checkForInfographic();

        if (this.urlMap) {
          var pageMap = this.getMatchingUrl();

          if (!pageMap || !pageMap.length) {
            this.bugsnag.pushBreadCrumb({
              name: 'No map found for this URL',
              metaData: {
                url: this.url
              }
            });
            return this.unbindListeners();
          } else {
            var knotchPlaceholder = this.node.querySelector('.knotch_placeholder');
            var knotchCard = this.node.querySelector("div[class*=\"knotch_".concat(pageMap[0], "\"]"));

            if (!knotchCard) {
              if (knotchPlaceholder) {
                this.inject({
                  urlMap: this.urlMap,
                  url: this.url,
                  surveyId: pageMap[0],
                  bugsnag: this.bugsnag,
                  knotchPlaceholder: knotchPlaceholder
                });
              } else {
                this.pageValidate(pageMap[0], function (isValid) {
                  return _this5.validatePageBodyNode(isValid);
                });
              }
            }
          }
        } else {
          var pageBodynode = this.findPageBodyNode();
          this.injectPage(pageBodynode);
        }
      }
    }
  }, {
    key: "getMatchingUrl",
    value: function getMatchingUrl() {
      if (this.urlMap[this.url]) {
        return this.urlMap[this.url];
      }

      var strippedUrl = _vanillaHelpers["default"].removeSearch(this.url.trim());

      if (this.urlMap[strippedUrl]) {
        return this.urlMap[strippedUrl];
      }

      for (var url in this.urlMap) {
        if (!url || !url.length) {
          return null;
        }

        var spaceTrimmedUrl = '' + url.trim();
        var lastCharTrimmedUrl = '' + url.trim().substring(0, url.length - 1);
        var lastSlashAddedUrl = url.trim() + '/';
        var strippedLastCharTrimmed = '' + strippedUrl.substring(0, strippedUrl.length - 1);

        if (lastSlashAddedUrl === this.url || spaceTrimmedUrl === this.url || lastCharTrimmedUrl === this.url || strippedLastCharTrimmed === this.url) {
          return this.urlMap[url];
        }
      }
    }
  }, {
    key: "validatePageBodyNode",
    value: function validatePageBodyNode(isValid) {
      var _this6 = this;

      if (!isValid) {
        this.bugsnag.pushBreadCrumb({
          name: 'Page validation failed',
          metaData: {
            url: this.url
          }
        });
        return this.unbindListeners();
      }

      var pageBodyNode = this.findPageBodyNode();

      if (pageBodyNode) {
        this.injectPage(pageBodyNode);
      } else if (this.infographic) {
        this.injectPage(null);
      } else if (this.retries < MAX_RETRIES) {
        this.retries += 1;
        setTimeout(function () {
          _this6.checkVisibility();
        }, 2000);
        this.bugsnag.pushBreadCrumb({
          name: "findPageBodyNode retry #".concat(this.retries)
        });
      }
    }
  }, {
    key: "findPageBodyNode",
    value: function findPageBodyNode() {
      var pageBodyNode;

      if (this.config.pageBodySelectors) {
        pageBodyNode = (0, _configMethods.getConfigPageBodyNode)(this.config.pageBodySelectors);
      } else {
        pageBodyNode = this.pageDOMUtils.getPageBodyNode();
      }

      return pageBodyNode;
    }
  }, {
    key: "injectPage",
    value: function injectPage(pageBodyNode) {
      if (pageBodyNode) {
        var videoNodes = this.pageDOMUtils.getVideoNodes(pageBodyNode);
        var videoPlayer = videoNodes && videoNodes.length ? videoNodes[0] : null;
        var lastParagraphNode = this.lastNodeFinder.getLastParagraphNode({
          node: pageBodyNode,
          accountId: this.accountId
        });

        if (!lastParagraphNode && this.infographic) {
          this.inject({
            pageBodyNode: pageBodyNode,
            lastParagraphNode: this.infographic
          });
        } else {
          this.inject({
            pageBodyNode: pageBodyNode,
            lastParagraphNode: lastParagraphNode,
            videoPlayer: videoPlayer
          });
        }
      } else if (this.infographic) {
        var infographicParent = this.infographic.parentNode;
        this.inject({
          pageBodyNode: infographicParent,
          lastParagraphNode: this.infographic
        });
      } else {
        this.unbindListeners();
      }
    }
  }, {
    key: "unbindListeners",
    value: function unbindListeners() {
      document.removeEventListener('scroll', this.scrollListener);
      document.removeEventListener('keydown', this.keyDownListener);
      document.removeEventListener('touchend', this.touchEndListener);
    }
  }]);

  return Page;
}();

var _default = Page;
exports["default"] = _default;
},{"./LastNodeFinder":1,"./PageDOMUtils.js":3,"./configMethods":9,"./constants/configURLs":11,"./constants/pageConstants":14,"./vanillaHelpers":18}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Validators = require("./Validators");

var _Utils = require("./Utils");

var _pageConstants = require("./constants/pageConstants");

var _nodeValidation = require("./constants/nodeValidation");

var _videoConstants = require("./constants/videoConstants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PageDOMUtils = function () {
  function PageDOMUtils(node, url, bugsnag, accountId, isSmartUnitTester, configs) {
    _classCallCheck(this, PageDOMUtils);

    this.pageNode = node;
    this.url = url;
    this.bugsnag = bugsnag;
    this.isSmartUnitTester = isSmartUnitTester;
    this.accountId = accountId;
    this.configs = configs;
  }

  _createClass(PageDOMUtils, [{
    key: "getPageBodyNode",
    value: function getPageBodyNode() {
      var textNodes = this.getTopTextNodes();
      var videoNodes = this.getVideoNodes();

      if (this.isSmartUnitTester) {
        if (videoNodes) {
          console.groupCollapsed("found ".concat(videoNodes.length, " video nodes:"));

          for (var j = 0; j < videoNodes.length; j++) {
            console.log(videoNodes[j]);
          }

          console.groupEnd();
        } else {
          console.log('no valid video nodes found');
        }
      }

      var parentNodes = [];

      if (!textNodes || textNodes.length === 0) {
        this.bugsnag.pushBreadCrumb({
          name: 'No text nodes found for this page',
          metaData: {
            url: this.url
          }
        });

        if (videoNodes && videoNodes.length > 0) {
          if (videoNodes.length === 1) {
            parentNodes = [videoNodes[0].parentNode];
          } else {
            parentNodes = (0, _Utils.getCommonAncestors)((0, _Utils.nodeListToArray)(videoNodes));
          }
        }
      } else {
        var textNodeContent = textNodes.map(function (node) {
          return node.textContent;
        });
        this.bugsnag.pushBreadCrumb({
          name: 'Found text nodes',
          metaData: {
            nodes: textNodeContent.length,
            url: this.url,
            method: 'getPageBodyNode()'
          }
        });
        parentNodes = videoNodes && videoNodes.length ? (0, _Utils.getCommonAncestors)(textNodes.concat((0, _Utils.nodeListToArray)(videoNodes))) : (0, _Utils.getCommonAncestors)(textNodes);
      }

      if (parentNodes.length > 0) {
        if (this.isSmartUnitTester) {
          console.groupCollapsed("found ".concat(parentNodes.length, " parent nodes:"));

          for (var _j = 0; _j < parentNodes.length; _j++) {
            console.log(parentNodes[_j]);
          }

          console.groupEnd();
        }

        this.bugsnag.pushBreadCrumb({
          name: 'Found parent nodes',
          metaData: {
            parentNodes: parentNodes.length,
            url: this.url,
            method: 'getPageBodyNode()'
          }
        });
        var mostCommonParent = (0, _Utils.mode)(parentNodes);

        if (this.isSmartUnitTester) {
          mostCommonParent.setAttribute("style", "border: 5px solid #007AFF");
          console.groupCollapsed("found most common parent nodes:");
          console.log(mostCommonParent);
          console.groupEnd();
        }

        return mostCommonParent;
      } else {
        return this.bugsnag.pushBreadCrumb({
          name: 'No parent nodes found for this page',
          metaData: {
            url: this.url
          }
        });
      }
    }
  }, {
    key: "getTopTextNodes",
    value: function getTopTextNodes() {
      var textNodes = (0, _Utils.textNodesUnder)(this.pageNode);
      var validatedNodes = [];

      if (textNodes.length) {
        var thresholdIndex = 0;
        validatedNodes = (0, _Validators.pageNodeValidation)({
          nodes: textNodes,
          thresholdIndex: thresholdIndex,
          accountId: this.accountId,
          isSmartUnitTester: this.isSmartUnitTester,
          configs: this.configs
        });

        while (validatedNodes.length < _nodeValidation.MIN_VALIDATED_NODES && thresholdIndex <= _nodeValidation.THRESHOLD_INDEX_MAX) {
          thresholdIndex += 1;
          validatedNodes = (0, _Validators.pageNodeValidation)({
            nodes: textNodes,
            thresholdIndex: thresholdIndex,
            accountId: this.accountId,
            isSmartUnitTester: this.isSmartUnitTester,
            configs: this.configs
          });
        }
      } else {
        this.bugsnag.pushBreadCrumb({
          name: 'No text nodes found for this page',
          metaData: {
            url: this.url
          }
        });
      }

      validatedNodes = validatedNodes.sort(function (a, b) {
        return b.length - a.length;
      });

      if (validatedNodes.length >= _nodeValidation.MIN_VALIDATED_NODES) {
        this.bugsnag.pushBreadCrumb({
          name: 'Found valid nodes',
          metaData: {
            validNodes: validatedNodes.length,
            url: this.url,
            method: 'getTopTextNode()'
          }
        });

        if (this.isSmartUnitTester) {
          console.groupCollapsed("found ".concat(validatedNodes.length, " validated nodes"));

          for (var k = 0; k < validatedNodes.length; k++) {
            console.log(validatedNodes[k]);
          }

          console.groupEnd();
        }

        return validatedNodes.slice(0, _pageConstants.NODE_SAMPLE_SIZE);
      } else {
        return this.bugsnag.pushBreadCrumb({
          name: 'No text nodes passed validation',
          metaData: {
            url: this.url
          }
        });
      }
    }
  }, {
    key: "getVideoNodes",
    value: function getVideoNodes(node) {
      if (node) {
        return node.querySelectorAll(_videoConstants.videoSelectors);
      } else {
        return document.querySelectorAll(_videoConstants.videoSelectors);
      }
    }
  }, {
    key: "checkForInfographic",
    value: function checkForInfographic() {
      var tallestImageHeight = 0;
      var tallestImage;
      var images = document.querySelectorAll('img');

      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        var rect = image.getBoundingClientRect();

        if (rect.height > tallestImageHeight) {
          tallestImageHeight = image.height;
          tallestImage = image;
        }
      }

      if (tallestImage) {
        var tallestImageWidth = tallestImage.width;
        var imageSizeRatio = tallestImageHeight / tallestImageWidth;

        if (imageSizeRatio > _pageConstants.MIN_IMAGE_HEIGHT_RATIO) {
          return tallestImage;
        }
      }

      this.bugsnag.pushBreadCrumb({
        name: 'infographic not found'
      });
      return null;
    }
  }]);

  return PageDOMUtils;
}();

var _default = PageDOMUtils;
exports["default"] = _default;
},{"./Utils":5,"./Validators":6,"./constants/nodeValidation":13,"./constants/pageConstants":14,"./constants/videoConstants":16}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AccountExtractor = _interopRequireDefault(require("./accounts/AccountExtractor"));

var _Page = _interopRequireDefault(require("./Page"));

var _vanillaHelpers = _interopRequireDefault(require("./vanillaHelpers"));

var _configURLs = require("./constants/configURLs");

var _configMethods = require("./configMethods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Tracker(options) {
  this.pages = [];
  this.pageNodes = [];
  this.urlMap = options.urlMap || window.localURLToUnitList;
  this.pageValidate = options.pageValidate;
  this.isSmartUnitTester = options.isSmartUnitTester;
  this.accountId = options.accountId;
  this.bugsnag = options.bugsnag;
  this.inject = options.inject;
  this.canonicalUrl = _vanillaHelpers["default"].getCanonicalURL();
  this.accounts = (0, _AccountExtractor["default"])(this.canonicalUrl, this.accountId);
  this.knotchConfig = window.Knotch.config;
  this.init();
}

Tracker.prototype = {
  init: function init() {
    var _this = this;

    _vanillaHelpers["default"].get("".concat(_configURLs.URLS[this.knotchConfig.env], "/").concat(this.accountId, ".json"), {}, function (res) {
      _this.combineConfig(res);
    }, function (status, error, readyState, responseText, responseHeaders) {
      return _this.bugsnag.reportError(error, {
        data: {
          readyState: readyState,
          responseText: responseText,
          responseHeaders: responseHeaders,
          status: status
        },
        severity: 'info'
      });
    }, this.bugsnag, {
      handle400: true
    });
  },
  combineConfig: function combineConfig(configs) {
    var _this2 = this;

    this.config = (0, _configMethods.getConfig)(this.canonicalUrl, configs);

    if (this.config && this.config.waitUntilType) {
      _configMethods.WAIT_UNTIL[this.config.waitUntilType].call(this, function () {
        return _this2.checkForNewPages();
      });
    } else {
      this.checkForNewPages();
    }
  },
  checkForNewPages: function checkForNewPages() {
    var _this3 = this;

    this.checkPageNodesInterval = setInterval(function () {
      return _this3.checkPageNodes();
    }, 2 * 1000);
    window.setTimeout(function () {
      return clearInterval(_this3.checkPageNodesInterval);
    }, 30 * 60 * 1000);
    this.checkPageNodes();
  },
  checkPageNodes: function checkPageNodes() {
    var foundPageNodes = document.querySelectorAll(this.config.scrollSelector);

    var currentCanonicalUrl = _vanillaHelpers["default"].getCanonicalURL();

    for (var i = 0; i < foundPageNodes.length; i++) {
      if (this.pageNodes.indexOf(foundPageNodes[i]) < 0 || this.canonicalUrl !== currentCanonicalUrl) {
        this.pages.push(new _Page["default"](foundPageNodes[i], this.urlMap, this.pageValidate, this.inject, this.bugsnag, this.accountId, this.config, this.isSmartUnitTester));
        this.pageNodes.push(foundPageNodes[i]);
        this.canonicalUrl = currentCanonicalUrl;
        this.accounts = (0, _AccountExtractor["default"])(this.canonicalUrl, this.accountId);
      }
    }
  }
};
var _default = Tracker;
exports["default"] = _default;
},{"./Page":2,"./accounts/AccountExtractor":7,"./configMethods":9,"./constants/configURLs":11,"./vanillaHelpers":18}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromHex = exports.toHex = exports.nodeListToArray = exports.isNodeContainer = exports.isNodeBlacklisted = exports.nodeContainsBlacklistedNode = exports.mode = exports.getCommonAncestors = exports.findFirstCommonAncestor = exports.getAncestors = exports.constructNodeBlacklist = exports.textNodesUnder = void 0;

var _blacklists = require("./constants/blacklists");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var textNodesUnder = function textNodesUnder(node) {
  if (!node) {
    return [];
  }

  var n;
  var a = [];
  var walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);

  while (n = walk.nextNode()) {
    if (n.textContent.trim().length > 0) {
      a.push(n);
    }
  }

  for (var i = 0; i < a.length - 1; i++) {
    if (i > 0) {
      if (a[i].parentNode.parentNode === a[i - 1].parentNode && a[i].parentNode.parentNode === a[i + 1].parentNode) {
        a.splice(i - 1, 3, a[i - 1].parentNode);
      }
    }
  }

  return a;
};

exports.textNodesUnder = textNodesUnder;

var constructNodeBlacklist = function constructNodeBlacklist(keywords) {
  var _Array$prototype2;

  var nodeToSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var nodeBlacklistByKeyword = keywords.map(function (keyword) {
    var _Array$prototype;

    var elementsToAvoid = nodeToSearch.querySelectorAll(keyword);
    var elementsWithClassToAvoid = nodeToSearch.querySelectorAll("[class*=".concat(keyword, "]"));
    var elementsWithIDToAvoid = nodeToSearch.querySelectorAll("[id*=".concat(keyword, "]"));
    var elementsToAvoidArray = [].concat(_toConsumableArray(Array.prototype.slice.call(elementsToAvoid)), _toConsumableArray(Array.prototype.slice.call(elementsWithClassToAvoid)), _toConsumableArray(Array.prototype.slice.call(elementsWithIDToAvoid)));
    var textToAvoid = elementsToAvoidArray.map(function (element) {
      return textNodesUnder(element);
    });
    return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, _toConsumableArray(textToAvoid));
  });
  return (_Array$prototype2 = Array.prototype).concat.apply(_Array$prototype2, _toConsumableArray(nodeBlacklistByKeyword));
};

exports.constructNodeBlacklist = constructNodeBlacklist;

var getAncestors = function getAncestors(node) {
  if (node !== document) {
    return [node].concat(getAncestors(node.parentNode));
  }

  return [node];
};

exports.getAncestors = getAncestors;

var findFirstCommonAncestor = function findFirstCommonAncestor(nodeA, nodeB, secondAncestors) {
  if (nodeA === nodeB) {
    return null;
  }

  var ancestorsB = secondAncestors || getAncestors(nodeB);

  if (ancestorsB.length === 0) {
    return null;
  }

  if (ancestorsB.indexOf(nodeA) > -1) {
    return nodeA;
  }

  if (nodeA === document) {
    return null;
  }

  return findFirstCommonAncestor(nodeA.parentNode, nodeB, ancestorsB);
};

exports.findFirstCommonAncestor = findFirstCommonAncestor;

var getCommonAncestors = function getCommonAncestors(nodes) {
  var parentNodes = [];
  var nodeArr1;
  var nodeArr2;
  nodeArr1 = nodes.slice();
  nodeArr2 = nodes.slice();
  nodeArr2.reverse();

  while (nodeArr1.length) {
    var node1 = nodeArr1.pop();
    var node2 = nodeArr2[0] === node1 ? nodeArr2.pop() : nodeArr2.shift();
    var firstCommonParent = findFirstCommonAncestor(node1, node2);

    if (firstCommonParent) {
      parentNodes.push(firstCommonParent);
    }
  }

  return parentNodes;
};

exports.getCommonAncestors = getCommonAncestors;

var isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;

  while (node != null) {
    if (node == parent) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
};

var getMostCommonAncestor = function getMostCommonAncestor(nodes, bestParent) {
  for (var idx in nodes) {
    if (isDescendant(nodes[idx].node, bestParent) && nodes[idx].node.nodeName !== 'BODY') {
      return nodes[idx].node;
    }
  }

  return bestParent;
};

var mode = function mode(arr) {
  var modeMap = arr.reduce(function (elements, current) {
    var filteredElements = elements.filter(function (item) {
      return item.node === current;
    });

    if (filteredElements.length > 0) {
      filteredElements[0].count++;
    } else {
      elements.push({
        node: current,
        count: 1
      });
    }

    return elements;
  }, []);
  var bestParent = modeMap.reduce(function (topObject, currentObject) {
    if (currentObject.count > topObject.count) {
      return currentObject;
    } else {
      return topObject;
    }
  }, {
    count: 0
  });
  var mostCommonAncestor = getMostCommonAncestor(modeMap, bestParent.node);
  return mostCommonAncestor;
};

exports.mode = mode;

var nodeContainsBlacklistedNode = function nodeContainsBlacklistedNode(node, configs) {
  var accountBlacklistKeywords = configs[_blacklists.PAGEBODY_KEY];
  var lastNodeBlacklistKeywords = configs[_blacklists.LASTNODE_KEY];
  var containsAccountKeyword = false;
  var containsLastNodeKeyword = false;

  for (var i = 0; i < accountBlacklistKeywords.length; i++) {
    var accountBlacklist = constructNodeBlacklist(accountBlacklistKeywords, node);

    if (accountBlacklist.length > 0 || node.parentNode.offsetParent === null) {
      containsAccountKeyword = true;
    }
  }

  for (var _i = 0; _i < lastNodeBlacklistKeywords.length; _i++) {
    var lastNodeBlacklist = constructNodeBlacklist(lastNodeBlacklistKeywords, node);

    if (lastNodeBlacklist.length > 0 || node.parentNode.offsetParent === null) {
      containsLastNodeKeyword = true;
    }
  }
};

exports.nodeContainsBlacklistedNode = nodeContainsBlacklistedNode;

var isNodeBlacklisted = function isNodeBlacklisted(node, configs) {
  var lastNodeBlacklistKeywords = configs[_blacklists.PAGEBODY_KEY];
  var accountBlacklistKeywords = configs[_blacklists.LASTNODE_KEY];

  if (lastNodeBlacklistKeywords.indexOf(node.id) !== -1) {
    return true;
  }

  for (var i = 0; i < node.classList.length; i++) {
    if (lastNodeBlacklistKeywords.indexOf(node.classList[i]) !== -1 || accountBlacklistKeywords.indexOf(node.classList[i]) !== -1) {
      return true;
    }
  }
};

exports.isNodeBlacklisted = isNodeBlacklisted;

var isNodeContainer = function isNodeContainer(node) {
  return node && node.tagName === 'DIV' && node.children.length > 0;
};

exports.isNodeContainer = isNodeContainer;

var nodeListToArray = function nodeListToArray(nodelist) {
  return Array.prototype.slice.call(nodelist);
};

exports.nodeListToArray = nodeListToArray;

var toHex = function toHex(str) {
  var result = '';

  for (var i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }

  return result;
};

exports.toHex = toHex;

var fromHex = function fromHex(hex) {
  var str;

  try {
    str = decodeURIComponent(hex.replace(/(..)/g, '%$1'));
  } catch (e) {
    str = null;
  }

  return str;
};

exports.fromHex = fromHex;
},{"./constants/blacklists":10}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastNodeValidation = exports.pageNodeValidation = void 0;

var _Utils = require("./Utils");

var _nodeValidation = require("./constants/nodeValidation");

var _blacklists = require("./constants/blacklists");

var _validatorLogger = _interopRequireDefault(require("./constants/validatorLogger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultValidators = [function (_ref) {
  var nodeToCheck = _ref.nodeToCheck;
  _validatorLogger["default"][0].totalNodesChecked++;

  if (nodeToCheck !== undefined) {
    _validatorLogger["default"][0].passed.push(nodeToCheck);

    return true;
  } else {
    _validatorLogger["default"][0].failed.push(nodeToCheck);

    return false;
  }
}, function (_ref2) {
  var nodeToCheck = _ref2.nodeToCheck;
  _validatorLogger["default"][1].totalNodesChecked++;
  var parent = nodeToCheck.parentNode;

  if (parent && parent.tagName !== 'SCRIPT' && parent.tagName !== 'NOSCRIPT') {
    _validatorLogger["default"][1].passed.push(nodeToCheck);

    return true;
  } else {
    _validatorLogger["default"][1].failed.push(nodeToCheck);

    return false;
  }
}, function (_ref3) {
  var nodeToCheck = _ref3.nodeToCheck;
  _validatorLogger["default"][2].totalNodesChecked++;
  var parent = nodeToCheck.parentNode;

  if (parent && parent.tagName !== 'STYLE' && parent.tagName !== 'STYLE') {
    _validatorLogger["default"][2].passed.push(nodeToCheck);

    return true;
  } else {
    _validatorLogger["default"][2].failed.push(nodeToCheck);

    return false;
  }
}, function (_ref4) {
  var nodeToCheck = _ref4.nodeToCheck;
  _validatorLogger["default"][3].totalNodesChecked++;
  var footerRegex = /footer/i;
  var id = nodeToCheck.id,
      className = nodeToCheck.className;

  if (nodeToCheck.parentNode && footerRegex.test(nodeToCheck.parentNode.tagName)) {
    _validatorLogger["default"][3].failed.push(nodeToCheck);

    return false;
  }

  if (footerRegex.test(id) || footerRegex.test(className)) {
    _validatorLogger["default"][3].failed.push(nodeToCheck);

    return false;
  }

  _validatorLogger["default"][3].passed.push(nodeToCheck);

  return true;
}, function (_ref5) {
  var nodeToCheck = _ref5.nodeToCheck;
  _validatorLogger["default"][4].totalNodesChecked++;
  var parent = nodeToCheck.parentNode;

  if (parent && parent.offsetParent !== null) {
    _validatorLogger["default"][4].passed.push(nodeToCheck);

    return true;
  } else {
    _validatorLogger["default"][4].failed.push(nodeToCheck);

    return false;
  }
}, function (_ref6) {
  var nodeToCheck = _ref6.nodeToCheck,
      blacklist = _ref6.options.blacklist;
  _validatorLogger["default"][5].totalNodesChecked++;
  var nodeNotBlacklisted = blacklist.indexOf(nodeToCheck) === -1;

  if (nodeNotBlacklisted) {
    _validatorLogger["default"][5].passed.push(nodeToCheck);
  } else {
    _validatorLogger["default"][5].failed.push(nodeToCheck);
  }

  return nodeNotBlacklisted;
}];

var threshholdValidator = function threshholdValidator(_ref7) {
  var nodeToCheck = _ref7.nodeToCheck,
      thresholdIndex = _ref7.options.thresholdIndex;
  _validatorLogger["default"][6].totalNodesChecked++;

  if (nodeToCheck.textContent.trim().length > _nodeValidation.TEXT_LENGTH_THRESHOLD - thresholdIndex * 20) {
    _validatorLogger["default"][6].passed.push(nodeToCheck);

    return true;
  } else {
    _validatorLogger["default"][6].failed.push(nodeToCheck);

    return false;
  }
};

var pageNodeValidation = function pageNodeValidation(_ref8) {
  var nodes = _ref8.nodes,
      thresholdIndex = _ref8.thresholdIndex,
      accountId = _ref8.accountId,
      isSmartUnitTester = _ref8.isSmartUnitTester,
      configs = _ref8.configs;
  var blacklistKeywords = configs[_blacklists.PAGEBODY_KEY];
  var blacklist = (0, _Utils.constructNodeBlacklist)(blacklistKeywords);
  var validators = [].concat(defaultValidators, [threshholdValidator]);
  var filteredNodes = nodes.filter(function (node) {
    var nodeValid = validators.reduce(function (acc, curr) {
      return acc && curr({
        nodeToCheck: node,
        options: {
          thresholdIndex: thresholdIndex,
          blacklist: blacklist
        }
      });
    }, true);

    if (isSmartUnitTester) {
      var parentNode = node.nodeType === 3 ? node.parentNode : node;

      if (nodeValid) {
        parentNode.setAttribute("style", "background: rgba(0,255,0,0.5);");
      } else {
        if (!parentNode.style.background) {
          parentNode.setAttribute("style", "background: rgba(255,0,0,0.5);");
        }
      }
    }

    return nodeValid;
  });

  if (isSmartUnitTester) {
    console.groupCollapsed('Text Node validation');

    var formattedValidationData = _validatorLogger["default"].map(function (logRow) {
      return _objectSpread({}, logRow, {
        numPassed: logRow.passed.length,
        numFailed: logRow.failed.length
      });
    });

    console.table(formattedValidationData);
    console.groupEnd();

    for (var i = 0; i < _validatorLogger["default"].length - 1; i++) {
      _validatorLogger["default"][i].totalNodesChecked = 0;
      _validatorLogger["default"][i].passed = [];
      _validatorLogger["default"][i].failed = [];
    }
  }

  return filteredNodes;
};

exports.pageNodeValidation = pageNodeValidation;

var lastNodeValidation = function lastNodeValidation(_ref9) {
  var nodes = _ref9.nodes,
      isSmartUnitTester = _ref9.isSmartUnitTester,
      configs = _ref9.configs;
  var blacklistKeywords = configs[_blacklists.LASTNODE_KEY];
  var blacklist = (0, _Utils.constructNodeBlacklist)(blacklistKeywords);
  var filteredNodes = nodes.filter(function (node) {
    var nodeValid = defaultValidators.reduce(function (acc, curr) {
      return acc && curr({
        nodeToCheck: node,
        options: {
          blacklist: blacklist
        }
      });
    }, true);

    if (isSmartUnitTester) {
      var parentNode = node.parentNode;

      if (nodeValid) {
        parentNode.setAttribute("style", "background: rgba(0,255,0,0.5);");
      } else {
        if (!parentNode.style.background) {
          parentNode.setAttribute("style", "background: rgba(255,0,0,0.5);");
        }
      }
    }

    return nodeValid;
  });

  if (isSmartUnitTester) {
    console.groupCollapsed('Last Node validation');

    var formattedValidationData = _validatorLogger["default"].map(function (logRow) {
      return _objectSpread({}, logRow, {
        numPassed: logRow.passed.length,
        numFailed: logRow.failed.length
      });
    });

    console.table(formattedValidationData);
    console.groupEnd();

    for (var i = 0; i < _validatorLogger["default"].length - 1; i++) {
      _validatorLogger["default"][i].totalNodesChecked = 0;
      _validatorLogger["default"][i].passed = [];
      _validatorLogger["default"][i].failed = [];
    }
  }

  return filteredNodes;
};

exports.lastNodeValidation = lastNodeValidation;
},{"./Utils":5,"./constants/blacklists":10,"./constants/nodeValidation":13,"./constants/validatorLogger":15}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _accountValidators = require("./accountValidators.js");

var _Utils = require("../Utils");

var getAccounts = function getAccounts(url, accountId) {
  var accountRegexStrings = _accountValidators.encryptions[accountId];
  var accounts = {
    "default": accountId,
    subAccounts: []
  };

  if (!accountRegexStrings) {
    return null;
  }

  for (var collection in accountRegexStrings) {
    var regexStrings = accountRegexStrings[collection];

    for (var i = 0; i < regexStrings.length; i++) {
      var decryptedRegexString = (0, _Utils.fromHex)(regexStrings[i]);
      var re = new RegExp(decryptedRegexString);

      if (re.test(url)) {
        accounts.subAccounts.push(collection);
      } else {
        return null;
      }
    }
  }

  return accounts;
};

var _default = getAccounts;
exports["default"] = _default;
},{"../Utils":5,"./accountValidators.js":8}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptions = void 0;
var encryptions = {
  '518afb38-d89b-4aa0-9b73-31ad26d491a6': {
    '15b3956bc9d8c9946c803ab80886ec74': ['U2FsdGVkX1/C2X3X7pBEnAsXRWekDe3LuMdGGrevSEE50dB0Ve+EhyFKWTBBIHdV'],
    '7a53d7e2e57d8fbe5680e61358d23536': ['U2FsdGVkX1/OXvPXbkoSsKXxPfG45+tXkiyse1puGVDNiAgQqg8tzJoPGatet4MUNWXPO8LSZ0O0k9vnSKBB6A==', 'U2FsdGVkX18Jf9fJlNGPRWdgktYusIjwqeDBw19tScNmMbLcEWLP1fZVPLk8drUK/pkPQy42hQzqIEWhGt53ZQ==', 'U2FsdGVkX19S7fI7yVo0Z7oNU5IdoS93j5S7GW1cvpCvBKFfaqK7MR9GuKFN6lei', 'U2FsdGVkX1978OVs1CXlStVfOqYszJmiEpfQLwV+IGZfYG/A7PqQKRXtTlnDnDIiwfE5CutGpUBSXzCIQfeN4w==']
  },
  '59a8732185a483543bb543a3': {
    '1b24359f30b5b9407066a1eec22bd3f1': ['U2FsdGVkX1/Ky5rMUtj1Un4F1Kc1nSuz1jiKrlLDqUJGjeNMuPuKlBxsh2o6C1RH'],
    'abfc3a65538a6ec86502b2b498b6b4a6': ['U2FsdGVkX19NYin5lY3CC81pvyQ9ywPw4rS5tK6MuPL4jOGnNxHlUQW7CnCjewc1']
  },
  'b6b10bf5-6f47-466b-92fc-06a4d0465004': {
    'bdd2b4735520a67128c5c41e13ba242b': ['U2FsdGVkX1/ra5g+n0ONjyX8Owtd9kQ6cH+uWvd2EWSN5HHxfJEdtbaY+Xy/6GDR'],
    '4a4e823cd1c23ca5208dda302d47c4fe': ['U2FsdGVkX19woCMy+Gc1ez/tvavScHa/Nj63oIX8pECGLOimBUZ0RvC1dy0uv8Sr'],
    '4c09c1c6592314382399dca560827142': ['U2FsdGVkX18F1DDxVshKlDxLDxClxUaQfm2Y+Cnrb0Gl8FG9bu6hdwiZlECrITCR']
  },
  'bce4b311-6d20-4d7f-89b8-de0ba080d5bb': {
    'ab68f1b12242c0f27fd60fc1455df93f': ['U2FsdGVkX1+ur52QbinpZ6rrucN6FXr6+tljSp77DW8TgBHlFQFy29o0jcLsYeVM'],
    'baea48cd2b5a47254e40011531452fd7': ['U2FsdGVkX18VNRJgq+wsj85LImghIumCERPqdwyxFoWD3INvGznzFZFbSSDMBjOJ', 'U2FsdGVkX1//swH9aJ7a51iYbMvFggSteKMg9qC1zr++hqc/yuMQ2Ukjf5i4Ga2WE/vRzXDtYSQHu3y/Om70UxOWIHveOI578eNDYtrxXVo='],
    '4aa6f508502e1c32214f480ab5ce559e': ['U2FsdGVkX193i0oP0eprT0aIvg+c/2C4LflYnBTnik0l7/evAuafFru2uUjFJ2jGLGacMvYal26/U1HBGmw/7bmUXVL/5hi21tSBYgcDqx8='],
    '5f2a13115f830fd9487f8cd48ba988f6': ['U2FsdGVkX1+KDIkyiGtfJg1kcGlOA844FhoTp+6kNRCcB7Kot6jaokBamvEgxziNdNbPjfDlInU3UoosZSkhunmwzvNnOl+X1Cg7/t4nMhk=']
  },
  '5babf273636f6fc04d62e363': {
    '34583e6829c62fded991aa86a5a99939': ['U2FsdGVkX18AOs+7BwgiiNjBJVnGleJumNVvlFUdBcPRH3V6123xQ9/11CD+JKVd'],
    '2409eb721f8ebb8602068bb94b1db8ed': ['U2FsdGVkX18xGicJKBNajCruAF+R3NJv5iDXERzkLN8UA7LFGCxCiF7MIrQnG+ys']
  }
};
exports.encryptions = encryptions;
},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineBlacklists = exports.getConfig = exports.urlHasConfig = exports.getConfigPageBodyNode = exports.WAIT_UNTIL = void 0;

var _Utils = require("./Utils");

var _vanillaHelpers = _interopRequireDefault(require("./vanillaHelpers"));

var _defaultConfig = _interopRequireDefault(require("./constants/defaultConfig"));

var _blacklists = require("./constants/blacklists");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT = 'default';
var WAIT_UNTIL = {
  nuxt: function nuxt(callback) {
    var nuxtChecker = window.setInterval(function () {
      try {
        if (window.$nuxt && window.$nuxt.$loading._isMounted) {
          callback();
          clearInterval(nuxtChecker);
          return true;
        }
      } catch (err) {
        console.log(err.message);
      }
    }, 100);
    window.setTimeout(function () {
      return clearInterval(nuxtChecker);
    }, 30 * 60 * 1000);
  }
};
exports.WAIT_UNTIL = WAIT_UNTIL;

var getConfigPageBodyNode = function getConfigPageBodyNode(selectors) {
  for (var i = 0; i < selectors.length; i++) {
    if (document.querySelector(selectors[i])) {
      return document.querySelector(selectors[i]);
    }
  }
};

exports.getConfigPageBodyNode = getConfigPageBodyNode;

var urlHasConfig = function urlHasConfig(key, url) {
  if (key === DEFAULT) {
    return true;
  }

  var decryptedRegexString = (0, _Utils.fromHex)(key);

  if (!decryptedRegexString) {
    return false;
  }

  var re = new RegExp(decryptedRegexString);
  return re.test(url);
};

exports.urlHasConfig = urlHasConfig;

var getConfig = function getConfig(canonicalUrl, configs) {
  var accountConfig;
  var defaultConfig = _defaultConfig["default"]["default"] && _defaultConfig["default"]["default"].config;

  for (var key in configs) {
    var subConfig = getSubConfig(configs, key);

    if (urlHasConfig(key, canonicalUrl)) {
      accountConfig = _vanillaHelpers["default"].extend(accountConfig, subConfig);
    }
  }

  return _vanillaHelpers["default"].extend(defaultConfig, accountConfig);
};

exports.getConfig = getConfig;

var getSubConfig = function getSubConfig(accountconfig, key) {
  var subConfig = accountconfig[key].config;
  var hasConfig = subConfig && Object.keys(subConfig).length > 0;

  if (hasConfig) {
    return subConfig;
  }

  return {};
};

var combineBlacklists = function combineBlacklists(configs) {
  var canonicalUrl = _vanillaHelpers["default"].getCanonicalURL();

  var defaultAccountBlacklist = _defaultConfig["default"]["default"] && _defaultConfig["default"]["default"].blacklist.pageBodyBlacklist;
  var defaultLastNodeBlacklist = _defaultConfig["default"]["default"] && _defaultConfig["default"]["default"].blacklist.lastNodeBlacklist;
  var blacklistKeywords = {
    pageBodyBlacklist: defaultAccountBlacklist,
    lastNodeBlacklist: defaultLastNodeBlacklist
  };

  for (var key in configs) {
    var subAccountBlacklist = getLocalAccountList(configs, key, _blacklists.PAGEBODY_KEY);
    var subLastnodeBlacklist = getLocalAccountList(configs, key, _blacklists.LASTNODE_KEY);

    if (urlHasConfig(key, canonicalUrl)) {
      blacklistKeywords.pageBodyBlacklist = blacklistKeywords.pageBodyBlacklist.concat(subAccountBlacklist);
      blacklistKeywords.lastNodeBlacklist = blacklistKeywords.lastNodeBlacklist.concat(subLastnodeBlacklist);
    }
  }

  return blacklistKeywords;
};

exports.combineBlacklists = combineBlacklists;

var getLocalAccountList = function getLocalAccountList(accountConfig, key, blacklistType) {
  var subBlacklist = accountConfig[key].blacklist;
  var hasBlacklist = subBlacklist && Object.keys(subBlacklist).length > 0;

  if (hasBlacklist) {
    var _subBlacklist = accountConfig[key].blacklist[blacklistType];

    if (Array.isArray(_subBlacklist) && _subBlacklist.length > 0) {
      return _subBlacklist;
    }
  }

  return [];
};
},{"./Utils":5,"./constants/blacklists":10,"./constants/defaultConfig":12,"./vanillaHelpers":18}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LASTNODE_KEY = exports.PAGEBODY_KEY = void 0;
var PAGEBODY_KEY = 'pageBodyBlacklist';
exports.PAGEBODY_KEY = PAGEBODY_KEY;
var LASTNODE_KEY = 'lastNodeBlacklist';
exports.LASTNODE_KEY = LASTNODE_KEY;
},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URLS = void 0;
var URLS = {
  development: 'https://assets.knotch.host/crawl-config',
  test: 'https://assets.knotch.host/crawl-config',
  production: 'https://www.knotch-cdn.com/crawl-config'
};
exports.URLS = URLS;
},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var DEFAULT_CONFIG = {
  'default': {
    'blacklist': {
      'pageBodyBlacklist': ['comment', 'disclaimer', 'footer', 'modal', 'about-wrapper', 'related-content-grid', 'resourceSlider', 'todolistcontainer'],
      'lastNodeBlacklist': ['tag-display', 'related-content', 'tag-cloud']
    },
    'config': {
      'scrollSelector': 'body'
    }
  }
};
var _default = DEFAULT_CONFIG;
exports["default"] = _default;
},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MIN_VALIDATED_NODES = exports.THRESHOLD_INDEX_MAX = exports.TEXT_LENGTH_THRESHOLD_MIN = exports.TEXT_LENGTH_THRESHOLD = void 0;
var TEXT_LENGTH_THRESHOLD = 200;
exports.TEXT_LENGTH_THRESHOLD = TEXT_LENGTH_THRESHOLD;
var TEXT_LENGTH_THRESHOLD_MIN = 80;
exports.TEXT_LENGTH_THRESHOLD_MIN = TEXT_LENGTH_THRESHOLD_MIN;
var THRESHOLD_INDEX_MAX = 6;
exports.THRESHOLD_INDEX_MAX = THRESHOLD_INDEX_MAX;
var MIN_VALIDATED_NODES = 3;
exports.MIN_VALIDATED_NODES = MIN_VALIDATED_NODES;
},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MIN_IMAGE_HEIGHT_RATIO = exports.INVIEW_OFFSET = exports.NODE_SAMPLE_SIZE = void 0;
var NODE_SAMPLE_SIZE = 50;
exports.NODE_SAMPLE_SIZE = NODE_SAMPLE_SIZE;
var INVIEW_OFFSET = 100;
exports.INVIEW_OFFSET = INVIEW_OFFSET;
var MIN_IMAGE_HEIGHT_RATIO = 2;
exports.MIN_IMAGE_HEIGHT_RATIO = MIN_IMAGE_HEIGHT_RATIO;
},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var validatorLogger = [{
  name: 'Undefined Check',
  totalNodesChecked: 0,
  passed: [],
  failed: []
}, {
  name: 'Script Tag Check',
  totalNodesChecked: 0,
  passed: [],
  failed: []
}, {
  name: 'Style Tag Check',
  totalNodesChecked: 0,
  passed: [],
  failed: []
}, {
  name: 'Footer Check',
  totalNodesChecked: 0,
  passed: [],
  failed: []
}, {
  name: 'Visible Check',
  totalNodesChecked: 0,
  passed: [],
  failed: []
}, {
  name: 'Blacklist Check',
  totalNodesChecked: 0,
  passed: [],
  failed: []
}, {
  name: 'Text Threshold Check',
  totalNodesChecked: 0,
  passed: [],
  failed: []
}];
var _default = validatorLogger;
exports["default"] = _default;
},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoSelectors = void 0;
var videoSelectors = 'iframe[src*=youtube], [class*=brightcove], [class*=fave-player-INPUT], .jwplayer, [id^=wistia_simple_video], video';
exports.videoSelectors = videoSelectors;
},{}],17:[function(require,module,exports){
"use strict";

var _Tracker = _interopRequireDefault(require("./Tracker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function nodefinder(options) {
  return new _Tracker["default"](options);
};
},{"./Tracker":4}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.h = void 0;
var h = {
  isMobile: function isMobile() {
    return 'ontouchstart' in window || navigator.msMaxTouchPoints || navigator.userAgent.indexOf('IEMobile') !== -1;
  },
  isEmptyObject: function isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  },
  isValidNumber: function isValidNumber(number) {
    return typeof number === 'number' && !isNaN(number);
  },
  isValidTagId: function isValidTagId(id) {
    var uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i;
    return id && typeof id === 'string' && id.length > 0 && (uuidV4Regex.test(id) || id.match(/^[0-9a-fA-F]{24}$/));
  },
  getAccountId: function getAccountId() {
    return h.getScriptAttribute('data-account');
  },
  getNodeDescription: function getNodeDescription(node) {
    if (!node) {
      return null;
    }

    var desc = node.tagName;

    if (node.id) {
      desc += "#".concat(node.id);
    }

    if (node.className && node.className.length) {
      desc += node.className.split(' ').join('.');
    }

    return desc;
  },
  getScriptFlag: function getScriptFlag(flag) {
    try {
      var currentScript = document.querySelector('script[src*="knotch"]') || document.currentScript;
      var boolShortHand = currentScript.getAttribute(flag) === '';
      var boolString = currentScript.getAttribute(flag) === 'true' || currentScript.getAttribute(flag) === '1';
      return boolShortHand || boolString;
    } catch (e) {
      return false;
    }
  },
  getScriptAttribute: function getScriptAttribute(flag) {
    try {
      var currentScript = document.currentScript || document.querySelector('script[src*="knotch"]');
      return currentScript.getAttribute(flag);
    } catch (e) {
      return false;
    }
  },
  validateURL: function validateURL(url) {
    return /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(url);
  },
  removeSearch: function removeSearch(url) {
    if (url && url.indexOf('?') !== -1) {
      return url.split('?')[0];
    }

    return url;
  },
  getCanonicalURL: function getCanonicalURL() {
    var metaOg = document.querySelector("meta[property='og:url']");
    var linkCanonical = document.querySelector('link[rel=canonical]');
    var metaCanonical = document.querySelector("meta[name='canonical']");

    if (linkCanonical && linkCanonical.getAttribute('href').length > 0) {
      var url = linkCanonical.getAttribute('href');

      if (this.validateURL(url)) {
        return url;
      }
    }

    if (metaOg && metaOg.getAttribute('content').length > 0) {
      var _url = metaOg.getAttribute('content');

      if (this.validateURL(_url)) {
        return _url;
      }
    }

    if (metaCanonical && metaCanonical.getAttribute('content').length > 0) {
      var _url2 = metaCanonical.getAttribute('content');

      if (this.validateURL(_url2)) {
        return _url2;
      }
    }

    console.warn('no valid canonical url was found');
    return null;
  },
  getBrowserURL: function getBrowserURL(bugsnag) {
    var browserURL = null;

    if (document.URL) {
      browserURL = document.URL;
    } else if (window.location.href) {
      browserURL = window.location.href;
    } else if (window.location.host && window.location.pathname) {
      browserURL = "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname);
    }

    if (!browserURL) {
      bugsnag.reportError(new Error('browser URL doesn\'t exist'), this.localData);
      return null;
    }

    return browserURL;
  },
  get: function get(url, data, success, failure, bugsnag, options) {
    var DONE = typeof XMLHttpRequest.DONE !== 'undefined' ? XMLHttpRequest.DONE : 4;
    var request;

    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    } else {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    }

    request.onerror = function () {
      if (request.status >= 500) {
        bugsnag.reportError(new Error(request.responseText), {
          name: "".concat(request.status, " request error"),
          data: data
        });
      }

      return false;
    };

    request.onreadystatechange = function () {
      if (request.readyState === DONE) {
        if (request.status === 200) {
          var responseText = request.responseText;

          if (responseText) {
            try {
              var res = JSON.parse(responseText);
            } catch (error) {
              bugsnag.reportError(error, {
                name: 'failed to parse request response',
                data: {
                  responseText: responseText,
                  url: url
                }
              });
            }
          }

          success(res);
        } else if (request.status >= 400 && options && options.handle400) {
          success(res);
        } else if (request.status >= 500) {
          failure(request.status, request.statusText, request.readyState, request.responseText, request.getAllResponseHeaders());
        } else if (request.status === 0) {
          failure(request.status, request.statusText, request.readyState);
        }
      }
    };

    request.open('GET', url, true);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.send(JSON.stringify(data));
    return request;
  },
  post: function post(url, data, success, failure, bugsnag) {
    var DONE = typeof XMLHttpRequest.DONE !== 'undefined' ? XMLHttpRequest.DONE : 4;
    var request;

    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    } else {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    }

    request.onloadend = function () {
      if (request.status >= 400) {
        bugsnag.reportError(new Error(request.responseText), {
          name: '404 - not found',
          data: data
        });
      }

      return false;
    };

    request.onerror = function () {
      if (request.status >= 500) {
        bugsnag.reportError(new Error(request.responseText), {
          name: "".concat(request.status, " request error"),
          data: data
        });
      }

      return false;
    };

    request.onreadystatechange = function () {
      if (request.readyState === DONE) {
        var responseText = request.responseText;

        if (responseText && !responseText.match(/</)) {
          try {
            var res = JSON.parse(responseText);
          } catch (error) {
            bugsnag.reportError(error, {
              name: 'failed to parse request response',
              data: {
                responseText: responseText,
                url: url
              }
            });
          }
        }

        if (request.status === 200) {
          success(res);
        } else if (request.stats === 0) {
          failure(request.status, request.statusText);
        }
      }
    };

    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.send(JSON.stringify(data));
    return request;
  },
  extend: function extend(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i]) {
        continue;
      }

      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          out[key] = arguments[i][key];
        }
      }
    }

    return out;
  }
};
exports.h = h;
var _default = h;
exports["default"] = _default;
},{}],19:[function(require,module,exports){
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}var r=function(e,t){var n;return function(){var o=this,r=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(o,r)}),t)}},i=function(e){var t=!1,n=function(){document.addEventListener?(document.removeEventListener("DOMContentLoaded",o),window.removeEventListener("load",o)):(document.detachEvent("onreadystatechange",o),window.detachEvent("onload",o))},o=function(){t||!document.addEventListener&&"load"!==event.type&&"complete"!==document.readyState||(t=!0,n(),e())};if("complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState||document.body)e();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",o),window.addEventListener("load",o);else{document.attachEvent("onreadystatechange",o),window.attachEvent("onload",o);var r=!1;try{r=null==window.frameElement&&document.documentElement}catch(e){}r&&r.doScroll&&function o(){if(!t){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}t=!0,n(),e()}}()}},a=function(){return"ontouchstart"in window||navigator.msMaxTouchPoints||-1!==navigator.userAgent.indexOf("IEMobile")},c=function(e){for(var t="",n=e,o="BODY"!==n.tagName;n!==document.body;){var r="";if(r+=n.tagName.toLowerCase(),n.id&&(r+="#".concat(n.id)),o&&n.className){var i=n.className.replace(/(\r\n|\n|\r)/gm," ");r+=".".concat(i.split(" ").filter((function(e){return e.length>0})).join("."))}n=n.parentNode,t=0===t.length?r:"".concat(r,">").concat(t)}return t},u=function(e){return e.src?e.src:e.href?e.href:null},s=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"A",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;if(null===t)return null;var r=o-1;return t.tagName===n?t:0===r?null:e(t.parentElement,n,r)},d=["scroll","keydown","click","focus","mousemove"],l=["touchstart","touchmove","touchend"],f=function(){function e(n){var o=this,c=n.callback;t(this,e);var u=r((function(){return o.trackEngagedTimeOnPage()}),3e3);this.callback=c,i((function(){!function(e,t,n){if(t){var o=null;if(o=Array.isArray(e)&&e.length>0?e:[e],t instanceof NodeList||t instanceof HTMLCollection){t.length||(t=[t]);for(var r=0;r<t.length;r++)i(t[r],o)}else i(t instanceof Array?t[0]:t,o)}function i(e,t){for(var o=0;o<t.length;o++)try{e.addEventListener?e.addEventListener(t[o],n,!1):e.attachEvent&&e.attachEvent("on".concat(t[o]),n)}catch(n){Knotch.bugsnag.reportError(n,{name:"Error while attaching event listener",data:{node:e,events:t}})}}}(a()?l:d,document,(function(){o.timeEngagedStart||(o.timeEngagedStart=Date.now()),u()}))}))}return o(e,[{key:"trackEngagedTimeOnPage",value:function(){var e=Date.now()-this.timeEngagedStart-3e3;if(this.timeEngagedStart=null,e>0&&!isNaN(e)){var t={type:"time_on_page_engaged",engaged_time:e};this.callback(t)}}}]),e}(),h=function(){var e,t,n,o,r,i,a,c,u,s,d,l,f,h,v,m;return c={},n=document,s=!1,d="active",i=6e4,r=!1,v={},h="__ceGUID",t={add:function(e,t,n){return e[h]=void 0,e[h]||(e[h]="ifvisible.object.event.identifier"),v[e[h]]||(v[e[h]]={}),v[e[h]][t]||(v[e[h]][t]=[]),v[e[h]][t].push(n)},remove:function(e,t,n){var o,r,i,a,c;if(n){if(e[h]&&v[e[h]]&&v[e[h]][t])for(r=i=0,a=(c=v[e[h]][t]).length;i<a;r=++i)if((o=c[r])===n)return v[e[h]][t].splice(r,1),o}else if(e[h]&&v[e[h]]&&v[e[h]][t])return delete v[e[h]][t]},fire:function(e,t,n){var o,r,i,a,c;if(e[h]&&v[e[h]]&&v[e[h]][t]){for(c=[],r=0,i=(a=v[e[h]][t]).length;r<i;r++)o=a[r],c.push(o(n||{}));return c}}},m=!1,e=function(e,t,n){return m||(m=e.addEventListener?function(e,t,n){return e.addEventListener(t,n,!1)}:e.attachEvent?function(e,t,n){return e.attachEvent("on"+t,n,!1)}:function(e,t,n){return e["on"+t]=n}),m(e,t,n)},a=function(){var e,t,o,r;for(void 0,r=3,o=n.createElement("div"),e=o.getElementsByTagName("i"),t=function(){return o.innerHTML="\x3c!--[if gt IE "+ ++r+"]><i></i><![endif]--\x3e",e[0]};t(););return r>4?r:void 0}(),o=!1,f=void 0,void 0!==n.hidden?(o="hidden",f="visibilitychange"):void 0!==n.mozHidden?(o="mozHidden",f="mozvisibilitychange"):void 0!==n.msHidden?(o="msHidden",f="msvisibilitychange"):void 0!==n.webkitHidden&&(o="webkitHidden",f="webkitvisibilitychange"),l=function(){var t,o;return t=[],(o=function(){return t.map(clearTimeout),"active"!==d&&c.wakeup(),r=+new Date,t.push(setTimeout((function(){if("active"===d)return c.idle()}),i))})(),e(n,"mousemove",o),e(n,"keyup",o),e(n,"touchstart",o),e(window,"scroll",o),c.focus(o),c.wakeup(o)},u=function(){var t;return!!s||(!1===o?(t="blur",a<9&&(t="focusout"),e(window,t,(function(){return c.blur()})),e(window,"focus",(function(){return c.focus()}))):e(n,f,(function(){return n[o]?c.blur():c.focus()}),!1),s=!0,l())},c={setIdleDuration:function(e){return i=1e3*e},getIdleDuration:function(){return i},getIdleInfo:function(){var e,t;return e=+new Date,t={},"idle"===d?(t.isIdle=!0,t.idleFor=e-r,t.timeLeft=0,t.timeLeftPer=100):(t.isIdle=!1,t.idleFor=e-r,t.timeLeft=r+i-e,t.timeLeftPer=(100-100*t.timeLeft/i).toFixed(2)),t},focus:function(e){return"function"==typeof e?this.on("focus",e):(d="active",t.fire(this,"focus"),t.fire(this,"wakeup"),t.fire(this,"statusChanged",{status:d})),this},blur:function(e){return"function"==typeof e?this.on("blur",e):(d="hidden",t.fire(this,"blur"),t.fire(this,"idle"),t.fire(this,"statusChanged",{status:d})),this},idle:function(e){return"function"==typeof e?this.on("idle",e):(d="idle",t.fire(this,"idle"),t.fire(this,"statusChanged",{status:d})),this},wakeup:function(e){return"function"==typeof e?this.on("wakeup",e):(d="active",t.fire(this,"wakeup"),t.fire(this,"statusChanged",{status:d})),this},on:function(e,n){return u(),t.add(this,e,n),this},off:function(e,n){return u(),t.remove(this,e,n),this},onEvery:function(e,t){var n,o;return u(),n=!1,t&&(o=setInterval((function(){if("active"===d&&!1===n)return t()}),1e3*e)),{stop:function(){return clearInterval(o)},pause:function(){return n=!0},resume:function(){return n=!1},code:o,callback:t}},now:function(e){return u(),d===(e||"active")}}}(),v=function(){function e(n){var o=n.callback;t(this,e),this.callback=o,this.interval=null,this.pingCount=0,this.currentFreq=5e3,this.running=!1,this.init()}return o(e,[{key:"init",value:function(){var e=this;!function(e){var t=!1,n=function(){document.addEventListener?(document.removeEventListener("DOMContentLoaded",o),window.removeEventListener("load",o)):(document.detachEvent("onreadystatechange",o),window.detachEvent("onload",o))},o=function(){t||!document.addEventListener&&"load"!==event.type&&"complete"!==document.readyState||(t=!0,n(),e())};if("complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState||document.body)e();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",o),window.addEventListener("load",o);else{document.attachEvent("onreadystatechange",o),window.attachEvent("onload",o);var r=!1;try{r=null==window.frameElement&&document.documentElement}catch(e){}r&&r.doScroll&&function o(){if(!t){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}t=!0,n(),e()}}()}}((function(){var t=function(){return e.startPing()},n=function(){return e.stopPing()};t(),h.setIdleDuration(3600),h.on("blur",n),h.on("focus",t),h.on("idle",n),h.on("wakeup",t)}))}},{key:"startPing",value:function(){this.running||(this.running=!0,this.trackPingTimeOnPage())}},{key:"stopPing",value:function(){this.running=!1,clearInterval(this.interval)}},{key:"trackPingTimeOnPage",value:function(){var e=this;this.running&&(this.interval&&clearInterval(this.interval),this.interval=setTimeout((function(){e.callback({type:"time_on_page_ping",freq:e.currentFreq}),e.pingCount+=1,8===e.pingCount&&e.stopPing(),e.currentFreq=2*e.currentFreq,e.trackPingTimeOnPage()}),this.currentFreq))}}]),e}(),m=function(){function n(e){var o=this,c=e.selector,u=e.callback;t(this,n),this.callback=u,this.node=this.getTrackedNode(c),this.scrollTimeout=null,this.touchEndListener=function(){return o.onScroll()},this.scrollListener=r((function(){return o.onScroll()}),200),this.keyDownListener=function(e){return o.onKeyDown(e)},this.thresholds={100:!1,75:!1,50:!1,25:!1,0:!1},this.node&&(this.yPosMax=this.getYPos(),i((function(){o.shouldTrackThreshold(),a()?document.addEventListener("touchend",o.touchEndListener):(document.addEventListener("scroll",o.scrollListener),document.addEventListener("keydown",o.keyDownListener))})))}return o(n,[{key:"getTrackedNode",value:function(e){return e?document.querySelector(e)?document.querySelector(e):window.Knotch.bugsnag.pushBreadCrumb({name:"Node unavailable for scroll depth tracking"}):document.documentElement?document.documentElement:window.Knotch.bugsnag.pushBreadCrumb({name:"Node unavailable for scroll depth tracking"})}},{key:"onScroll",value:function(){this.hasReachedBottomOfContent()&&(document.removeEventListener("scroll",this.scrollListener),document.removeEventListener("keydown",this.keyDownListener),document.removeEventListener("touchend",this.touchEndListener)),this.shouldTrackThreshold()}},{key:"shouldTrackThreshold",value:function(){var t=this,n=100*this.getYPos()/this.node.scrollHeight;for(var o in this.thresholds){var r=parseInt(o,10);if(!this.thresholds[r]&&n>=r){var i=function(){if(t.thresholds[r]=!0,clearTimeout(t.scrollTimeout),t.yPosMax=t.getYPos(),"number"!=typeof t.yPosMax||isNaN(t.yPosMax)||!t.node)return{v:window.Knotch.bugsnag.reportError(new Error("invalid scrolldepth yPosMax"),{data:{yPosMax:t.yPosMax}})};var e=Math.floor(100*t.yPosMax/t.node.scrollHeight);e<1&&(e=1);var n={type:"scroll_depth",scroll_position:t.yPosMax,scroll_pct:e};t.scrollTimeout=setTimeout((function(){return t.callback(n)}),100)}();if("object"===e(i))return i.v}}}},{key:"onKeyDown",value:function(e){var t=(e.code||"").toLowerCase();"space"!==t&&"arrowdown"!==t||this.onScroll()}},{key:"getYPos",value:function(){return window.scrollY+window.innerHeight}},{key:"hasReachedBottomOfContent",value:function(){return!!this.node&&(this.yPosMax&&this.yPosMax>=this.node.scrollHeight)}}]),n}(),g=["textContent","className","id","href"],y=function(){function e(n){var o=this,r=n.callback;t(this,e),this.callback=r,document.addEventListener("click",(function(e){return o.handleClick(e)})),document.addEventListener("auxclick",(function(e){return o.handleClick(e)})),window.addEventListener("blur",(function(e){setTimeout((function(){"IFRAME"===document.activeElement.tagName&&o.handleClick({target:document.activeElement,pageX:document.activeElement.offsetLeft,pageY:document.activeElement.offsetTop})}))}))}return o(e,[{key:"checkForHTML",value:function(e){return g.reduce((function(t,n){return t||(o=e[n])&&/<\s?[^\>]*\/?\s?>/.test(o);var o}),!1)}},{key:"validateForNull",value:function(e){return g.reduce((function(t,n){return t||!!e[n]}),!1)}},{key:"handleClick",value:function(e){var t,n,o,r,i=e.target,a=s(i,"A",3),d=a||i;if(n=d,o=["A","BUTTON","SVG","IMG","SPAN","H1","H2","H3","DIV","IFRAME","OPTION","LABEL"],(r=[function(e){return o.indexOf(e.tagName)>-1},function(e){return e.tagName===e.textContent.length<=50},function(e){return"INPUT"===e.tagName&&"submit"===e.type}]).reduce((function(e,t,o){return e||r[o](n)}),!1)&&!this.checkForHTML(d)&&this.validateForNull(d)){var l={type:"content_interaction",interaction_type:"click",target_class:d.className,target_id:d.id,target_text:(t=d,"INPUT"===t.tagName?t.value:"IFRAME"===t.tagName?t.title:t.textContent&&t.textContent.trim().substring(0,50)),target_path:c(d),target_url:u(d),target_x:e.pageX,target_y:e.pageY};this.callback(l)}}}]),e}();module.exports={ScrollDepthTracker:m,PingTimeOnPageTracker:v,EngagedTimeOnPageTracker:f,ContentInteractionTracker:y};

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("./vanillaHelper"));

var _DebugUI = _interopRequireDefault(require("./DebugUI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BREADCRUMB_SIZE = 30;

function Bugsnag(knotchConfig) {
  this.config = knotchConfig || {};
  this.url = 'https://notify.bugsnag.com/js?';
  this.user = {};
  this.device = {};
  this.startTime = new Date().getTime();
  this.isDebug = window.Knotch && window.Knotch.debug;

  if (this.isDebug) {
    this.DebugUI = new _DebugUI["default"]();
  } 
  this.breadcrumbs = [{
    name: 'Bugsnag Loaded',
    timestamp: this.startTime,
    type: 'navigation'
  }];
}

Bugsnag.prototype = {
  setUser: function setUser(user) {
    this.user = user;
  },
  setDevice: function setDevice(device) {
    this.device = device;
  },
  pushBreadCrumb: function pushBreadCrumb(breadCrumb) {
    breadCrumb.timestamp = new Date().getTime();

    if (!breadCrumb.type) {
      breadCrumb.type = 'process';
    }

    this.breadcrumbs.push(breadCrumb);

    if (this.breadcrumbs.length > BREADCRUMB_SIZE) {
      this.breadcrumbs.shift();
    }

    if (this.isDebug) {
      _vanillaHelper["default"].log(breadCrumb);

      this.DebugUI.addBreadcrumb(breadCrumb);
    }
  },
  reportError: function reportError(error, options) {
    var _this$config = this.config,
        env = _this$config.env,
        version = _this$config.version;

    if (env === 'development' || env === 'test' || this.isDebug || version === 'development') {
      console.error(error);
      return;
    }

    var data = _vanillaHelper["default"].serialize(this.payloadData(error, options));

    var img = new Image();
    img.src = this.url + data;
  },
  payloadData: function payloadData(error, options) {
    if (!error) {
      return;
    }

    if (!options) {
      options = {};
    }

    return {
      apiKey: '581f50d456b1fa142bae175bdea5d2d8',
      breadcrumbs: this.breadcrumbs,
      context: window.location.href,
      ct: 'img',
      cb: new Date().getTime(),
      language: 'en-US',
      message: error.message,
      metaData: options.data,
      name: options.name || error.message,
      notifierVersion: '3.0.7',
      payloadVersion: '3',
      releaseStage: this.config.env,
      severity: options.severity || 'error',
      stacktrace: error.stack,
      url: window.location.href,
      user: this.user || options.user,
      userAgent: navigator.userAgent,
      appVersion: this.config.version || 'dev'
    };
  }
}; 

if (self !== top) {
  window.bugsnag = new Bugsnag(window.knotchConfig);
}

var _default = Bugsnag;
exports["default"] = _default;

},{"./DebugUI":22,"./vanillaHelper":25}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Cookies = {
  set: function set(name, value, seconds_to_exp, options) {
    var exp;

    if (!name) {
      return null;
    }

    if (!options) {
      options = {};
    }

    if (seconds_to_exp) {
      exp = new Date().getTime() + seconds_to_exp * 1000;
    }

    return window.document.cookie = [encodeURIComponent(name), '=', encodeURIComponent(String(value)), exp ? '; expires=' + new Date(exp).toUTCString() : '', '; path=' + (options.path ? options.path : '/'), options.domain ? '; domain=' + options.domain : '', window.location && window.location.protocol === 'https:' ? '; Secure; SameSite=None' : ''].join('');
  },
  get: function get(name, result) {
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(window.document.cookie)) ? decodeURIComponent(result[1]) : null;
  },
  "delete": function _delete(name, options) {
    Cookies.set(name, null, -1, options);
  }
};
var _default = Cookies;
exports["default"] = _default;

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("./vanillaHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var containerStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '400px',
  width: '50%',
  overflowY: 'scroll',
  background: '#eee',
  fontFamily: 'sans-serif',
  fontSize: '12px',
  cursor: 'move',
  padding: '10'
};

var cellStyle = function cellStyle(width) {
  return {
    display: 'inline-block',
    padding: '2px',
    width: width
  };
};

var DebugUI = function () {
  function DebugUI() {
    var _this = this;

    _classCallCheck(this, DebugUI);

    _vanillaHelper["default"].ready(function () {
      return _this.init();
    });

    this.root = null;
    this.queue = [];
  }

  _createClass(DebugUI, [{
    key: "init",
    value: function init() {
      if (!this.root) {
        this.createRoot();
      }
    }
  }, {
    key: "createRoot",
    value: function createRoot() {
      var _this2 = this;

      if (this.root) return;
      this.root = _vanillaHelper["default"].el({
        type: 'div',
        style: containerStyle
      });
      this.root.addEventListener('mousedown', function () {
        _this2.isDown = true;
      }, true);
      document.addEventListener('mouseup', function () {
        _this2.isDown = false;
      }, true);
      this.root.addEventListener('mousemove', function (event) {
        event.preventDefault();

        if (_this2.isDown) {
          var deltaX = event.movementX;
          var deltaY = event.movementY;

          var rect = _this2.root.getBoundingClientRect();

          _this2.root.style.left = "".concat(rect.x + deltaX, "px");
          _this2.root.style.top = "".concat(rect.y + deltaY, "px");
        }
      }, false);
      document.body.appendChild(this.root);
      this.processQueue();
    }
  }, {
    key: "addBreadcrumb",
    value: function addBreadcrumb(breadcrumb) {
      if (!this.root) {
        return this.queue.push(breadcrumb);
      }

      var name = breadcrumb.name,
          metadata = breadcrumb.metadata,
          type = breadcrumb.type,
          timestamp = breadcrumb.timestamp;

      var nameCell = _vanillaHelper["default"].el({
        type: 'div',
        style: cellStyle('70%'),
        content: name
      });

      var metadataCell = _vanillaHelper["default"].el({
        type: 'div',
        style: cellStyle('30%'),
        content: JSON.stringify(metadata)
      });

      var typeDiv = _vanillaHelper["default"].el({
        type: 'div',
        content: "".concat(type, " - ").concat(new Date(timestamp).toLocaleTimeString()),
        style: {
          color: '#929191'
        }
      });

      nameCell.appendChild(typeDiv);

      var breadcrumbRow = _vanillaHelper["default"].el({
        type: 'div'
      });

      breadcrumbRow.appendChild(nameCell);
      breadcrumbRow.appendChild(metadataCell);
      this.root.prepend(breadcrumbRow);
    }
  }, {
    key: "processQueue",
    value: function processQueue() {
      var l = this.queue.length;

      for (var i = 0; i < l; i++) {
        var breadcrumb = this.queue.pop();
        this.addBreadcrumb(breadcrumb);
      }
    }
  }]);

  return DebugUI;
}();

var _default = DebugUI;
exports["default"] = _default;

},{"./vanillaHelper":25}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("./vanillaHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var IframeHandler = function () {
  function IframeHandler(options) {
    var _this = this;

    _classCallCheck(this, IframeHandler);

    this.ready = false;
    this.queue = [];
    this.DOM = this.createFrame(options);

    if (options.container) {
      _vanillaHelper["default"].ready(function () {
        return options.container.appendChild(_this.DOM);
      });
    }

    _vanillaHelper["default"].listen('message', window, function (event) {
      var _event$data = event.data,
          eventType = _event$data.eventType,
          data = _event$data.data;

      if (data && data.id) {
        if (eventType === 'knotch_handshake_iFrame_ready' && data.id === options.id) {
          _this.ready = true;

          _this.flush();
        }
      }
    });
  }

  _createClass(IframeHandler, [{
    key: "createFrame",
    value: function createFrame(_ref) {
      var src = _ref.src,
          title = _ref.title,
          _ref$attributes = _ref.attributes,
          attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
          id = _ref.id,
          width = _ref.width,
          height = _ref.height;
      var iframe = document.createElement('iframe');

      _vanillaHelper["default"].extend(iframe, _objectSpread({
        name: name || '',
        title: title || '',
        src: src,
        frameBorder: '0',
        id: id,
        width: width,
        height: height
      }, attributes));

      return iframe;
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(payload) {
      if (!this.ready) {
        return this.queue.push(payload);
      }

      this.DOM.contentWindow.postMessage(payload, '*');
    }
  }, {
    key: "flush",
    value: function flush() {
      var l = this.queue.length;

      for (var i = 0; i < l; i++) {
        var event = this.queue.pop();
        this.sendMessage(event);
      }
    }
  }]);

  return IframeHandler;
}();

var _default = IframeHandler;
exports["default"] = _default;

},{"./vanillaHelper":25}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function () {
  var addEvent, customEvent, doc, fireEvent, hidden, idleStartedTime, idleTime, ie, ifvisible, init, initialized, status, trackIdleStatus, visibilityChange;
  ifvisible = {};
  doc = document;
  initialized = false;
  status = "active";
  idleTime = 60000;
  idleStartedTime = false;

  customEvent = function () {
    var S4, addCustomEvent, cgid, fireCustomEvent, guid, listeners, removeCustomEvent;

    S4 = function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };

    guid = function guid() {
      return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
    };

    listeners = {};
    cgid = '__ceGUID';

    addCustomEvent = function addCustomEvent(obj, event, callback) {
      obj[cgid] = undefined;

      if (!obj[cgid]) {
        obj[cgid] = "ifvisible.object.event.identifier";
      }

      if (!listeners[obj[cgid]]) {
        listeners[obj[cgid]] = {};
      }

      if (!listeners[obj[cgid]][event]) {
        listeners[obj[cgid]][event] = [];
      }

      return listeners[obj[cgid]][event].push(callback);
    };

    fireCustomEvent = function fireCustomEvent(obj, event, memo) {
      var ev, j, len, ref, results;

      if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
        ref = listeners[obj[cgid]][event];
        results = [];

        for (j = 0, len = ref.length; j < len; j++) {
          ev = ref[j];
          results.push(ev(memo || {}));
        }

        return results;
      }
    };

    removeCustomEvent = function removeCustomEvent(obj, event, callback) {
      var cl, i, j, len, ref;

      if (callback) {
        if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
          ref = listeners[obj[cgid]][event];

          for (i = j = 0, len = ref.length; j < len; i = ++j) {
            cl = ref[i];

            if (cl === callback) {
              listeners[obj[cgid]][event].splice(i, 1);
              return cl;
            }
          }
        }
      } else {
        if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
          return delete listeners[obj[cgid]][event];
        }
      }
    };

    return {
      add: addCustomEvent,
      remove: removeCustomEvent,
      fire: fireCustomEvent
    };
  }();

  addEvent = function () {
    var setListener;
    setListener = false;
    return function (el, ev, fn) {
      if (!setListener) {
        if (el.addEventListener) {
          setListener = function setListener(el, ev, fn) {
            return el.addEventListener(ev, fn, false);
          };
        } else if (el.attachEvent) {
          setListener = function setListener(el, ev, fn) {
            return el.attachEvent('on' + ev, fn, false);
          };
        } else {
          setListener = function setListener(el, ev, fn) {
            return el['on' + ev] = fn;
          };
        }
      }

      return setListener(el, ev, fn);
    };
  }();

  fireEvent = function fireEvent(element, event) {
    var evt;

    if (doc.createEventObject) {
      return element.fireEvent('on' + event, evt);
    } else {
      evt = doc.createEvent('HTMLEvents');
      evt.initEvent(event, true, true);
      return !element.dispatchEvent(evt);
    }
  };

  ie = function () {
    var all, check, div, undef, v;
    undef = void 0;
    v = 3;
    div = doc.createElement("div");
    all = div.getElementsByTagName("i");

    check = function check() {
      return div.innerHTML = "<!--[if gt IE " + ++v + "]><i></i><![endif]-->", all[0];
    };

    while (check()) {
      continue;
    }

    if (v > 4) {
      return v;
    } else {
      return undef;
    }
  }();

  hidden = false;
  visibilityChange = void 0;

  if (typeof doc.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof doc.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
  } else if (typeof doc.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof doc.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }

  trackIdleStatus = function trackIdleStatus() {
    var timer, wakeUp;
    timer = [];

    wakeUp = function wakeUp() {
      timer.map(clearTimeout);

      if (status !== "active") {
        ifvisible.wakeup();
      }

      idleStartedTime = +new Date();
      return timer.push(setTimeout(function () {
        if (status === "active") {
          return ifvisible.idle();
        }
      }, idleTime));
    };

    wakeUp();
    addEvent(doc, "mousemove", wakeUp);
    addEvent(doc, "keyup", wakeUp);
    addEvent(doc, "touchstart", wakeUp);
    addEvent(window, "scroll", wakeUp);
    ifvisible.focus(wakeUp);
    return ifvisible.wakeup(wakeUp);
  };

  init = function init() {
    var blur;

    if (initialized) {
      return true;
    }

    if (hidden === false) {
      blur = "blur";

      if (ie < 9) {
        blur = "focusout";
      }

      addEvent(window, blur, function () {
        return ifvisible.blur();
      });
      addEvent(window, "focus", function () {
        return ifvisible.focus();
      });
    } else {
      addEvent(doc, visibilityChange, function () {
        if (doc[hidden]) {
          return ifvisible.blur();
        } else {
          return ifvisible.focus();
        }
      }, false);
    }

    initialized = true;
    return trackIdleStatus();
  };

  ifvisible = {
    setIdleDuration: function setIdleDuration(seconds) {
      return idleTime = seconds * 1000;
    },
    getIdleDuration: function getIdleDuration() {
      return idleTime;
    },
    getIdleInfo: function getIdleInfo() {
      var now, res;
      now = +new Date();
      res = {};

      if (status === "idle") {
        res.isIdle = true;
        res.idleFor = now - idleStartedTime;
        res.timeLeft = 0;
        res.timeLeftPer = 100;
      } else {
        res.isIdle = false;
        res.idleFor = now - idleStartedTime;
        res.timeLeft = idleStartedTime + idleTime - now;
        res.timeLeftPer = (100 - res.timeLeft * 100 / idleTime).toFixed(2);
      }

      return res;
    },
    focus: function focus(callback) {
      if (typeof callback === "function") {
        this.on("focus", callback);
      } else {
        status = "active";
        customEvent.fire(this, "focus");
        customEvent.fire(this, "wakeup");
        customEvent.fire(this, "statusChanged", {
          status: status
        });
      }

      return this;
    },
    blur: function blur(callback) {
      if (typeof callback === "function") {
        this.on("blur", callback);
      } else {
        status = "hidden";
        customEvent.fire(this, "blur");
        customEvent.fire(this, "idle");
        customEvent.fire(this, "statusChanged", {
          status: status
        });
      }

      return this;
    },
    idle: function idle(callback) {
      if (typeof callback === "function") {
        this.on("idle", callback);
      } else {
        status = "idle";
        customEvent.fire(this, "idle");
        customEvent.fire(this, "statusChanged", {
          status: status
        });
      }

      return this;
    },
    wakeup: function wakeup(callback) {
      if (typeof callback === "function") {
        this.on("wakeup", callback);
      } else {
        status = "active";
        customEvent.fire(this, "wakeup");
        customEvent.fire(this, "statusChanged", {
          status: status
        });
      }

      return this;
    },
    on: function on(name, callback) {
      init();
      customEvent.add(this, name, callback);
      return this;
    },
    off: function off(name, callback) {
      init();
      customEvent.remove(this, name, callback);
      return this;
    },
    onEvery: function onEvery(seconds, callback) {
      var paused, t;
      init();
      paused = false;

      if (callback) {
        t = setInterval(function () {
          if (status === "active" && paused === false) {
            return callback();
          }
        }, seconds * 1000);
      }

      return {
        stop: function stop() {
          return clearInterval(t);
        },
        pause: function pause() {
          return paused = true;
        },
        resume: function resume() {
          return paused = false;
        },
        code: t,
        callback: callback
      };
    },
    now: function now(check) {
      init();
      return status === (check || "active");
    }
  };
  return ifvisible;
}();

exports["default"] = _default;

},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Cookies = _interopRequireDefault(require("./Cookies.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
      if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }

      var aArgs = Array.prototype.slice.call(arguments, 1),
          fToBind = this,
          fNOP = function fNOP() {},
          fBound = function fBound() {
        return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
      };

      if (this.prototype) {
        fNOP.prototype = this.prototype;
      }

      fBound.prototype = new fNOP();
      return fBound;
    };
  }

  window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  if (typeof window.CustomEvent !== 'function') {
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }
})(); 

var h = {
  el: function el(_ref) {
    var type = _ref.type,
        className = _ref.className,
        content = _ref.content,
        bg = _ref.bg,
        bgColor = _ref.bgColor,
        href = _ref.href,
        style = _ref.style,
        src = _ref.src;
    var el = document.createElement(type);

    if (src) {
      el.setAttribute('src', src);
    }

    if (style) {
      this.extend(el.style, style);
    }

    if (className) {
      el.setAttribute('class', className);
    }

    if (bg) {
      el.style.backgroundImage = "url(\"".concat(bg, "\")");
    }

    if (bgColor) {
      el.style.backgroundColor = bgColor;
    }

    if (href) {
      el.setAttribute('href', href);
      el.setAttribute('target', '_blank');
    }

    if (content) {
      el.textContent = content;
    }

    return el;
  },
  getNodeDescription: function getNodeDescription(node) {
    if (!node) {
      return null;
    }

    var desc = node.tagName;

    if (node.id) {
      desc += "#".concat(node.id);
    }

    if (node.className && node.className.length) {
      desc += node.className.split(' ').join('.');
    }

    return desc;
  },
  getQueryParams: function getQueryParams() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getBrowserURL();
    var search = url.split('?')[1];
    var searchArray = search ? search.split('&') : [];
    return searchArray.reduce(function (params, item) {
      var param = item.split('=');
      params[param[0]] = param[1];
      return params;
    }, {});
  },
  getSentimentType: function getSentimentType(sentiment) {
    if (typeof sentiment !== 'number') {
      return null;
    }

    var stmAnswer = '';

    if (sentiment > 10) {
      stmAnswer = 'positive';
    } else if (sentiment === 10) {
      stmAnswer = 'neutral';
    } else if (sentiment < 10) {
      stmAnswer = 'negative';
    }

    return stmAnswer;
  },
  log: function log() {
    var args = ['%cJS Tag', 'color: #fb1359; background: #ffcad4; padding: 4px'].concat(_toConsumableArray(Array.prototype.slice.call(arguments)));
    console.log.apply(console, args);
  },
  isMobile: function isMobile() {
    return 'ontouchstart' in window || navigator.msMaxTouchPoints || navigator.userAgent.indexOf('IEMobile') !== -1;
  },
  isEmptyObject: function isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  },
  isValidNumber: function isValidNumber(number) {
    return typeof number === 'number' && !isNaN(number);
  },
  isValidTagId: function isValidTagId(id) {
    var uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i;
    return id && typeof id === 'string' && id.length > 0 && (uuidV4Regex.test(id) || id.match(/^[0-9a-fA-F]{24}$/));
  },

  isTopFrame: function isTopFrame() {
    return window.top === window;
  },
  inKnotchPage: function inKnotchPage() {
    var knotchDomains = ['views/unit.html', 'assets.knotch.host', 'www.knotch-cdn.com', '/survey/'];
    return knotchDomains.reduce(function (acc, curr) {
      return acc || location.href.indexOf(curr) !== -1;
    }, false);
  },
  inDevTestPage: function inDevTestPage() {
    var onDevPage = window.location.hostname.indexOf('knotch.test') !== -1;
    var testEnv = window.Knotch.config.env === 'test' || window.Knotch.config.env === 'development'; 

    if (onDevPage && testEnv) {
      return true;
    }
  },
  isDemo: function isDemo() {
    var demoInScript = h.getScriptFlag('demo');
    var demoInCookie = _Cookies["default"].get('knotch_demo') === 'true' ? true : false;

    if (demoInScript || demoInCookie) {
      return true;
    }

    return false;
  },
  isDebug: function isDebug() {
    var url = !this.isTopFrame() && document.referrer ? document.referrer : this.getBrowserURL();
    var queryParams = Object.keys(this.getQueryParams(url));
    var debugIndex = queryParams.indexOf('knotch_debug');
    return debugIndex !== -1 || h.getScriptFlag('debug');
  },
  isAnalysis: function isAnalysis() {
    var url = !this.isTopFrame() && document.referrer ? document.referrer : this.getBrowserURL();
    var queryParams = Object.keys(this.getQueryParams(url));
    var analysisIndex = queryParams.indexOf('knotch_analysis');
    return analysisIndex !== -1 || h.getScriptFlag('analysis');
  },
  getAccountId: function getAccountId() {
    return h.getScriptAttribute('data-account');
  },
  getScriptFlag: function getScriptFlag(flag) {
    try {
      var currentScript = document.querySelector('script[src*="knotch"]') || document.currentScript;
      var boolShortHand = currentScript.getAttribute(flag) === '';
      var boolString = currentScript.getAttribute(flag) === 'true' || currentScript.getAttribute(flag) === '1';
      return boolShortHand || boolString;
    } catch (e) {
      return false;
    }
  },
  getScriptAttribute: function getScriptAttribute(flag) {
    try {
      var script;
      var currentScript = document.currentScript;
      var knotchScript = document.querySelector('script[src*="knotch.js"]');
      var knotchMinScript = document.querySelector('script[src*="knotch.min.js"]');

      if (knotchScript) {
        script = knotchScript;
      } else if (knotchMinScript) {
        script = knotchMinScript;
      } else if (currentScript) {
        script = currentScript;
      } else {
        return Knotch.debug.reportError(new Error('script not found'));
      }

      return script.getAttribute(flag);
    } catch (e) {
      return false;
    }
  },
  getRelativePath: function getRelativePath() {
    var knotchSrc = this.getScriptAttribute('src');
    var indexAfterPath;

    if (knotchSrc.indexOf('knotch.js') > -1) {
      indexAfterPath = knotchSrc.indexOf('knotch.js');
    } else if (knotchSrc.indexOf('knotch.min.js') > -1) {
      indexAfterPath = knotchSrc.indexOf('knotch.min.js');
    } else {
      Knotch.bugsnag.reportError(new Error('knotch script not on page'));
    }

    var relativePath = knotchSrc.slice(0, indexAfterPath);
    return relativePath;
  },

  getReferrer: function getReferrer() {
    if (!h.isTopFrame()) {
      return this.localData.referrer = document.referrer;
    } else if (document.querySelector('link[rel=canonical]')) {
      return document.querySelector('link[rel=canonical]').getAttribute('href');
    }

    return window.location.origin + window.location.pathname;
  },

  validateURL: function validateURL(url) {
    return /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(url);
  },
  removeSearch: function removeSearch(url) {
    if (url && url.length > 0 && url.indexOf('?') !== -1) {
      return url.split('?')[0];
    }

    return url;
  },

  getCanonicalURL: function getCanonicalURL() {
    var metaOg = document.querySelector("meta[property='og:url']");
    var linkCanonical = document.querySelector('link[rel=canonical]');
    var metaCanonical = document.querySelector("meta[name='canonical']");

    if (linkCanonical && linkCanonical.getAttribute('href') && linkCanonical.getAttribute('href').length > 0) {
      var url = linkCanonical.getAttribute('href');

      if (this.validateURL(url)) {
        return url;
      }
    }

    if (metaOg && metaOg.getAttribute('content') && metaOg.getAttribute('content').length > 0) {
      var _url = metaOg.getAttribute('content');

      if (this.validateURL(_url)) {
        return _url;
      }
    }

    if (metaCanonical && metaCanonical.getAttribute('content') && metaCanonical.getAttribute('content').length > 0) {
      var _url2 = metaCanonical.getAttribute('content');

      if (this.validateURL(_url2)) {
        return _url2;
      }
    }

    return null;
  },

  getBrowserURL: function getBrowserURL() {
    var browserURL = null;

    if (document.URL) {
      browserURL = document.URL;
    } else if (window.location.href) {
      browserURL = window.location.href;
    } else if (window.location.host && window.location.pathname) {
      browserURL = "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname);
    }

    if (!browserURL) {
      window.Knotch.bugsnag.reportError(new Error('browser URL doesn\'t exist'), this.localData);
      return null; 
    }

    return browserURL;
  },
  show: function show(el) {
    if (el) {
      el.style.display = 'block';
    }
  },
  hide: function hide(el) {
    if (el) {
      el.style.display = 'none';
    }
  },
  hasClass: function hasClass(node, className) {
    if (node) {
      return node.classList && node.classList.contains(className);
    } else {
      return false;
    }
  },
  addClass: function addClass(node, className) {
    if (node) {
      if (node instanceof NodeList || node instanceof HTMLCollection) {
        for (var n = 0, m = node.length; n < m; n++) {
          if (!this.hasClass(node[n], className)) {
            node[n].classList.add(className);
          }
        }
      } else {
        node.classList.add(className);
      }
    }
  },
  removeClass: function removeClass(node, className) {
    if (node) {
      if (node instanceof NodeList || node instanceof HTMLCollection) {
        for (var n = 0, m = node.length; n < m; n++) {
          if (this.hasClass(node[n], className)) {
            node[n].classList.remove(className);
          }
        }
      } else {
        node.classList.remove(className);
      }
    }
  },
  removeNode: function removeNode(node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  },
  has3dSupport: function has3dSupport() {
    var ua = navigator.userAgent;
    var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');

    if (re.exec(ua) !== null) {
      var rv = parseFloat(RegExp.$1);
      return rv > 10;
    }

    var el = document.createElement('p'),
        has3d,
        transforms = {
      webkitTransform: '-webkit-transform',
      OTransform: '-o-transform',
      msTransform: '-ms-transform',
      MozTransform: '-moz-transform',
      transform: 'transform'
    }; 

    document.body.insertBefore(el, null);

    for (var t in transforms) {
      if (el.style[t] !== undefined) {
        el.style[t] = 'translate3d(1px,1px,1px)';
        var style = window.getComputedStyle(el);
        has3d = style && style.getPropertyValue(transforms[t]);
      }
    }

    document.body.removeChild(el);
    return has3d && has3d.length > 0 && has3d !== 'none';
  },
  fadeIn: function fadeIn(el) {
    var timing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

    if (!el) {
      return;
    }

    el.style.opacity = 0;
    el.style.display = 'block';
    var last = +new Date();

    var tick = function tick() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / timing;
      last = +new Date();

      if (+el.style.opacity < 1) {
        window.requestAnimationFrame && window.requestAnimationFrame(tick) || setTimeout(tick, 16);
      } else {
        el.style.opacity = 1;
      }
    };

    tick();
  },
  fadeOut: function fadeOut(el) {
    var timing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

    if (!el) {
      return;
    }

    el.style.opacity = 1;
    var last = +new Date();

    var tick = function tick() {
      el.style.opacity = +el.style.opacity - (new Date() - last) / timing;
      last = +new Date();

      if (+el.style.opacity > 0) {
        window.requestAnimationFrame && window.requestAnimationFrame(tick) || setTimeout(tick, 16);
      } else {
        el.style.opacity = 0;
        el.style.display = 'none';
      }
    };

    tick();
  },
  get: function get(url, data, success, failure) {
    var DONE = typeof XMLHttpRequest.DONE !== 'undefined' ? XMLHttpRequest.DONE : 4;
    var request;

    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest(); 
    } else {
      request = new ActiveXObject('Microsoft.XMLHTTP'); 
    }

    request.onerror = function () {
      if (request.status >= 500) {
        Knotch.bugsnag.reportError(new Error(request.responseText), {
          name: "".concat(request.status, " request error"),
          data: data
        });
      }

      return false;
    };

    request.onreadystatechange = function () {
      if (request.readyState === DONE) {
        if (request.status === 200) {
          var responseText = request.responseText;

          if (responseText) {
            try {
              var res = JSON.parse(responseText);
            } catch (error) {
              Knotch.bugsnag.reportError(error, {
                name: 'failed to parse request response',
                data: {
                  responseText: responseText,
                  url: url
                }
              });
            }
          }

          success(res);
        } else if (request.status >= 500) {
          failure(request.status, request.statusText, request.readyState, request.responseText, request.getAllResponseHeaders());
        }
      }
    };

    request.open('GET', url, true);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.send(JSON.stringify(data));
    return request;
  },
  post: function post(url, data, success, failure) {
    var DONE = typeof XMLHttpRequest.DONE !== 'undefined' ? XMLHttpRequest.DONE : 4;
    var request;

    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest(); 
    } else {
      request = new ActiveXObject('Microsoft.XMLHTTP'); 
    } 


    request.onloadend = function () {
      if (request.status >= 400) {
        Knotch.bugsnag.reportError(new Error(request.responseText), {
          name: '404 - not found',
          data: data
        });
      }

      return false;
    };

    request.onerror = function () {
      if (request.status >= 500) {
        Knotch.bugsnag.reportError(new Error(request.responseText), {
          name: "".concat(request.status, " request error"),
          data: data
        });
      }

      return false;
    };

    request.onreadystatechange = function () {
      if (request.readyState === DONE) {
        var responseText = request.responseText;

        if (responseText && !responseText.match(/</)) {
          try {
            var res = JSON.parse(responseText);
          } catch (error) {
            Knotch.bugsnag.reportError(error, {
              name: 'failed to parse request response',
              data: {
                responseText: responseText,
                url: url
              }
            });
          }
        }

        if (request.status === 200) {
          success(res);
        } else if (request.status >= 400) {
          failure(request.status, request.statusText);
        } else if (request.stats === 0) {
          failure(request.status, request.statusText);
        }
      }
    };

    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.send(JSON.stringify(data));
    return request;
  },
  onEvent: function onEvent(event, nodeList, callback) {
    if (!nodeList) {
      return;
    }

    var events = null;

    if (Array.isArray(event) && event.length > 0) {
      events = event;
    } else {
      events = [event];
    }

    if (nodeList instanceof NodeList || nodeList instanceof HTMLCollection) {
      if (!nodeList.length) {
        nodeList = [nodeList];
      }

      for (var n = 0; n < nodeList.length; n++) {
        bindEvents(nodeList[n], events);
      }
    } else {
      var node = nodeList instanceof Array ? nodeList[0] : nodeList;
      bindEvents(node, events);
    }

    function bindEvents(node, events) {
      for (var i = 0; i < events.length; i++) {
        try {
          if (node.addEventListener) {
            node.addEventListener(events[i], callback, false);
          } else if (node.attachEvent) {
            node.attachEvent("on".concat(events[i]), callback);
          }
        } catch (error) {
          Knotch.bugsnag.reportError(error, {
            name: 'Error while attaching event listener',
            data: {
              node: node,
              events: events
            }
          });
        }
      }
    }
  },
  offEvent: function offEvent(event, nodeList, callback) {
    var events = [event];

    if (event.split(' ').length > 1) {
      events = event.split(' ');
    }

    if (!nodeList) {
      return;
    } 


    if (nodeList === window) {
      try {
        for (var i = 0; i < events.length; i++) {
          if (window.top.removeEventListener) {
            window.top.removeEventListener(events[i], callback, false);
          } 
          else if (window.top.detachEvent) {
            window.top.detachEvent("on".concat(events[i]), callback);
          }
        }
      } catch (error) {
        Knotch.bugsnag.reportError(error, {
          name: 'Error while detaching event listener',
          data: {
            nodeList: nodeList,
            events: events
          }
        });
      }

      return;
    }

    if (!nodeList.length) {
      nodeList = [nodeList];
    }

    var m = nodeList.length;

    for (var n = 0; n < m; n++) {
      for (var i = 0; i < events.length; i++) {
        try {
          if (nodeList.length === 1) {} else {}

          if (nodeList[n].removeEventListener) {
            nodeList[n].removeEventListener(events[i], callback, false);
            return true;
          } 
          else if (nodeList[n].detachEvent) {
            return nodeList[n].detachEvent("on".concat(events[i]), callback);
          }
        } catch (error) {
          Knotch.bugsnag.reportError(error, {
            name: 'Error while detaching event listener',
            data: {
              nodeList: nodeList,
              events: events
            }
          });
        }
      }
    }
  },
  trigger: function trigger(el, triggerEvent, data) {
    var event = null;

    if (window.CustomEvent) {
      event = new CustomEvent(triggerEvent, data);
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(triggerEvent, true, true, data);
    }

    el.dispatchEvent(event);
  },
  parents: function parents(el, selector) {
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    el = el.parentElement;

    while (el && !matchesSelector.call(el, selector)) {
      el = el.parentElement;
    }

    return el;
  },
  animate: function animate(el, params, speed, reset) {
    el.style.transition = "all ".concat(speed / 1000, "s ease-out");
    Object.keys(params).forEach(function (key) {
      el.style[key] = params[key];
    });

    if (reset) {
      setTimeout(function () {
        el.removeAttribute('style');
      }, speed);
    }
  },
  ready: function ready(callback) {
    var ready = false;

    var detach = function detach() {
      if (document.addEventListener) {
        document.removeEventListener('DOMContentLoaded', completed);
        window.removeEventListener('load', completed);
      } else {
        document.detachEvent('onreadystatechange', completed);
        window.detachEvent('onload', completed);
      }
    };

    var completed = function completed() {
      if (!ready && (document.addEventListener || event.type === 'load' || document.readyState === 'complete')) {
        ready = true;
        detach();
        callback();
      }
    };

    if ((document.readyState === "complete" || document.readyState === "loaded") && document.body) {
      window.Knotch && window.Knotch.bugsnag.pushBreadCrumb({
        name: "calling callback because one of the following is true ",
        metaData: {
          documentReadyStateComplete: document.readyState === 'complete',
          documentReadyStateLoaded: document.readyState === 'loaded',
          documentReadyStateInteractive: document.readyState === 'interactive',
          documentBody: document.body
        }
      });
      callback();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', completed);
      window.addEventListener('load', completed);
    } else {
      document.attachEvent('onreadystatechange', completed);
      window.attachEvent('onload', completed);
      var top = false;

      try {
        top = window.frameElement == null && document.documentElement;
      } catch (e) {}

      if (top && top.doScroll) {
        (function scrollCheck() {
          if (ready) {
            return;
          }

          try {
            top.doScroll('left');
          } catch (e) {
            return setTimeout(scrollCheck, 50);
          }

          ready = true;
          detach();
          callback();
        })();
      }
    }
  },
  extend: function extend(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i]) {
        continue;
      }

      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          out[key] = arguments[i][key];
        }
      }
    }

    return out;
  },
  listen: function listen(event, node, callback) {
    if (node.addEventListener) {
      node.addEventListener(event, callback, false);
    } else {
      node.attachEvent(event, callback);
    }
  },
  scrollToY: function scrollToY(scrollTargetY, speed, easing) {
    var scrollY = window.scrollY || document.documentElement.scrollTop,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;
    var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));
    var easingEquations = {
      easeOutSine: function easeOutSine(pos) {
        return Math.sin(pos * (Math.PI / 2));
      },
      easeInOutSine: function easeInOutSine(pos) {
        return -0.5 * (Math.cos(Math.PI * pos) - 1);
      },
      easeInOutQuint: function easeInOutQuint(pos) {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 5);
        }

        return 0.5 * (Math.pow(pos - 2, 5) + 2);
      }
    };

    function tick() {
      currentTime += 1 / 60;
      var p = currentTime / time;
      var t = easingEquations[easing](p);

      if (p < 1) {
        requestAnimFrame(tick);
        window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
      } else {
        window.scrollTo(0, scrollTargetY);
      }
    }

    tick();
  },
  isChildOf: function isChildOf(child, parent) {
    while ((child = child.parentNode) && child !== parent) {
      ;
    }

    return !!child;
  },
  serialize: function serialize(obj, prefix) {
    var str = [],
        p;

    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? "".concat(prefix, "[").concat(p, "]") : p,
            v = obj[p];
        str.push(v !== null && _typeof(v) === 'object' ? this.serialize(v, k) : "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(v)));
      }
    }

    return str.join('&');
  },
  extractIdFromNode: function extractIdFromNode(node) {
    if (!node) {
      return null;
    }

    var classes = node.getAttribute('class');

    if (!classes || classes.length < 1 || typeof classes !== 'string') {
      return null;
    }

    var splitClasses = classes.split(' ');
    var knotchClass = splitClasses.filter(function (el) {
      return el.indexOf('knotch_') !== -1 && el !== 'knotch_placeholder';
    })[0];

    if (!knotchClass) {
      return null;
    }

    var id = knotchClass.split('_')[1];

    if (!id) {
      return null;
    }

    return id;
  },
  stringContains: function stringContains(str1, str2) {
    if (!str1 || !str1.length) {
      return null;
    }

    if (!str2 || !str2.length) {
      return null;
    }

    return str1.indexOf(str2) !== -1;
  },
  debounce: function debounce(func, delay) {
    var debounceTimer;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        func.apply(context, args);
      }, delay);
    };
  },

  getLargestZIndex: function getLargestZIndex(node) {
    var nextNode;
    var largestZIndex = null;
    var nodeZindexes = []; 

    if (document.createTreeWalker) {
      var walk = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT, null, false);

      while (nextNode = walk.nextNode()) {
        var zIndex = parseInt(window.getComputedStyle(nextNode).zIndex, 10); 

        if (zIndex && zIndex > -1) {
          var _zIndex = parseInt(window.getComputedStyle(nextNode).zIndex, 10);

          nodeZindexes.push(_zIndex);
        }
      }

      if (nodeZindexes.length === 0) {
        return null;
      }

      largestZIndex = nodeZindexes.reduce(function (min, max) {
        return Math.max(min, max);
      });
    } else {
      var siblings = parent.children;

      for (var i = 0; i < siblings.length; i++) {
        var currZIndex = parseInt(window.getComputedStyle(siblings[i]).zIndex, 10); 
        if (currZIndex > largestZIndex) {
          largestZIndex = currZIndex + 1;
        }
      }
    }

    return largestZIndex;
  },

  isStandalone: function isStandalone(data) {
    if (!data) {
      return false;
    }

    return h.isTopFrame() && h.inKnotchPage() && data.layout === 'inline' && data.videoType === null;
  },
  isValidSentimentValue: function isValidSentimentValue(value) {
    var number = parseInt(value, 10);

    if (typeof value === 'undefined' || Number.isNaN(number)) {
      return false;
    }

    return [0, 4, 10, 16, 20].indexOf(number) !== -1;
  }
};
var _default = h;
exports["default"] = _default;

},{"./Cookies.js":21}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodefinder = _interopRequireDefault(require("@knotchlabs/nodefinder"));

var _vanillaHelper = _interopRequireDefault(require("../helpers/vanillaHelper.js"));

var _SmartUnitUtils = require("./SmartUnitUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SmartUnitTracker = function () {
  function SmartUnitTracker(_ref) {
    var accountId = _ref.accountId,
        knotchConfig = _ref.knotchConfig,
        bugsnag = _ref.bugsnag,
        debug = _ref.debug;

    _classCallCheck(this, SmartUnitTracker);

    this.accountId = accountId;
    this.config = knotchConfig;
    this.bugsnag = bugsnag;
    this.debug = debug;
    this.smartUnitTracker = null;
    this.init();
  }

  _createClass(SmartUnitTracker, [{
    key: "init",
    value: function init() {
      var _this = this;

      _vanillaHelper["default"].ready(function () {
        if (window.localURLToUnitList) {
          _this.startNodefinder(window.localURLToUnitList);
        } else {
          (0, _SmartUnitUtils.getUnitList)(_this.accountId, function (urlMap) {
            _this.startNodefinder(urlMap);
          });
        }
      });
    }
  }, {
    key: "startNodefinder",
    value: function startNodefinder(urlMap) {
      var _this2 = this;

      this.smartUnitTracker = (0, _nodefinder["default"])({
        accountId: this.accountId,
        inject: _SmartUnitUtils.inject,
        pageValidate: function pageValidate(id, callback) {
          return (0, _SmartUnitUtils.bypassSurveylessUnit)(id, callback, _this2.bugsnag);
        },
        urlMap: urlMap,
        bugsnag: this.bugsnag,
        debug: this.debug
      });
    }
  }]);

  return SmartUnitTracker;
}();

var _default = SmartUnitTracker;
exports["default"] = _default;

},{"../helpers/vanillaHelper.js":25,"./SmartUnitUtils.js":27,"@knotchlabs/nodefinder":17}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testInject = exports.inject = exports.getUnitList = exports.bypassSurveylessUnit = void 0;

var _vanillaHelper = _interopRequireDefault(require("../helpers/vanillaHelper.js"));

var _config = require("../../../tmp/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var inject = function inject(_ref) {
  var pageNode = _ref.pageNode,
      lastParagraphNode = _ref.lastParagraphNode,
      urlMap = _ref.urlMap,
      url = _ref.url,
      injectedCallback = _ref.injectedCallback,
      unbindListeners = _ref.unbindListeners,
      bugsnag = _ref.bugsnag,
      videoPlayer = _ref.videoPlayer,
      knotchPlaceholder = _ref.knotchPlaceholder;

  var strippedUrl = _vanillaHelper["default"].removeSearch(url);

  var unitsForPage = urlMap[url] || urlMap[strippedUrl];

  if (!unitsForPage || !unitsForPage.length) {
    if (unbindListeners) {
      unbindListeners();
    }

    return bugsnag.pushBreadCrumb({
      name: 'No placeholder ID found for this URL, URL is not linked.',
      unitsForPage: unitsForPage
    });
  }

  var placeholderID = unitsForPage[0];

  var InjectDOMUnit = function InjectDOMUnit(data) {
    if (data.videoType !== null) {
      if (!videoPlayer) {
        return bugsnag.reportError(new Error('did not receive video player from nodefinder', {
          data: {
            url: url
          }
        }));
      }

      videoPlayer.setAttribute('data-knotch', placeholderID);
    } else {
      if (document.querySelector(".knotch_".concat(placeholderID))) {
        bugsnag.pushBreadCrumb({
          name: 'Unit already found on the page',
          unitsForPage: unitsForPage
        });

        if (pageNode) {
          return unbindListeners();
        }
      }

      if (knotchPlaceholder) {
        if (knotchPlaceholder.className.indexOf("knotch_".concat(placeholderID)) === -1) {
          knotchPlaceholder.className += " knotch_".concat(placeholderID);
          knotchPlaceholder.setAttribute('style', 'clear: both;'); 

          bugsnag.pushBreadCrumb({
            name: 'injecting unit into generic smartunit placeholder'
          });
          return;
        }
      }

      var placeholder = document.createElement('div');
      placeholder.setAttribute('class', "knotch_".concat(placeholderID));
      placeholder.setAttribute('style', 'clear: both;');

      if (lastParagraphNode) {
        lastParagraphNode.insertAdjacentElement('afterend', placeholder);
        injectedCallback();
        unbindListeners();
        bugsnag.pushBreadCrumb({
          name: 'Appended placeholder to page body',
          metaData: {
            tagName: lastParagraphNode.tagName,
            "class": lastParagraphNode.className,
            id: lastParagraphNode.id
          }
        });
      } else {
        unbindListeners();
        return bugsnag.reportError(new Error('Last paragraph node could not be found'), {
          data: {
            url: url
          }
        });
      }
    }
  };

  if (window.knotchData.units && window.knotchData.units[placeholderID]) {
    InjectDOMUnit(window.knotchData.units[placeholderID]);
  } else {
    _vanillaHelper["default"].get("".concat(_config.knotchConfig.metadata, "/").concat(placeholderID, ".json"), {}, function (res) {
      window.knotchData.units[res.public_id] = res;
      InjectDOMUnit(res);
    });
  }
};

exports.inject = inject;

var testInject = function testInject(_ref2) {
  var pageBodyNode = _ref2.pageBodyNode,
      lastParagraphNode = _ref2.lastParagraphNode,
      injectedCallback = _ref2.injectedCallback,
      unbindListeners = _ref2.unbindListeners,
      knotchPlaceholder = _ref2.knotchPlaceholder;
  var placeholder = document.createElement('div');
  placeholder.setAttribute('class', "knotch_unit");
  placeholder.setAttribute('style', 'clear: both; background-color: pink; height: 200px; text-align: center;');
  placeholder.innerText = 'KNOTCH SMART UNIT';

  if (knotchPlaceholder) {
    if (!document.querySelector('.knotch_unit')) {
      placeholder.style.height = knotchPlaceholder.getAttribute('data-height');
      placeholder.style.width = knotchPlaceholder.getAttribute('data-width');
      knotchPlaceholder.appendChild(placeholder);
    }
  } else if (pageBodyNode) {
    if (!pageBodyNode.querySelector('.knotch_unit')) {
      lastParagraphNode.insertAdjacentElement('afterend', placeholder);
      injectedCallback();
      unbindListeners();
      placeholder.scrollIntoView(); 

      alert('Succesfully appended smart unit to page body');
    } else if (pageBodyNode.querySelector('.knotch_unit')) {
      unbindListeners(); 

      return alert('knotch unit already on page');
    } else {
      unbindListeners(); 

      return alert('page not compatible');
    }
  } else {
    return alert('Page is not smart unit compatible');
  }
};

exports.testInject = testInject;

var getUnitList = function getUnitList(accountId, successCallback) {
  if (!accountId) {
    return window.Knotch.bugsnag.reportError(new Error('No account ID provided'), accountId);
  }

  if (window.urlMap) {
    return window.urlMap;
  }

  window.Knotch.bugsnag.pushBreadCrumb({
    name: 'Fetching Unit to URL map'
  });

  _vanillaHelper["default"].get("https://units.knotch.it/url-map/".concat(accountId, ".json"), null, function (data) {
    if (data && !_vanillaHelper["default"].isEmptyObject(data)) {
      return successCallback(data);
    }

    return window.Knotch.bugsnag.pushBreadCrumb({
      name: 'Empty or invalid URL map provided',
      metaData: {
        data: data
      }
    });
  }, function (status, statusText, readyState, responseText, responseHeaders) {
    window.Knotch.bugsnag.reportError(new Error('Failed to fetch unit list'), {
      data: {
        status: status,
        statusText: statusText,
        readyState: readyState,
        responseText: responseText,
        responseHeaders: responseHeaders,
        accountId: accountId,
        url: "https://units.knotch.it/url-map/".concat(accountId, ".json")
      }
    });
  });
};

exports.getUnitList = getUnitList;

var bypassSurveylessUnit = function bypassSurveylessUnit(id, validateCallback, bugsnag) {
  if (window.knotchData.units && window.knotchData.units[id]) {
    var unit = window.knotchData.units[id];

    if (unit && unit.surveyless) {
      var knotchDiv = document.createElement('div');
      knotchDiv.setAttribute('class', "knotch_".concat(id));
      document.body.appendChild(knotchDiv);
      return validateCallback(false);
    }

    return validateCallback(true);
  }

  _vanillaHelper["default"].get("".concat(_config.knotchConfig.metadata, "/").concat(id, ".json"), {}, function (res) {
    var unit = res;
    window.knotchData.units[res.public_id] = res;

    if (unit && unit.surveyless) {
      var _knotchDiv = document.createElement('div');

      _knotchDiv.setAttribute('class', "knotch_".concat(id));

      document.body.appendChild(_knotchDiv);
      return validateCallback(false);
    }

    return validateCallback(true);
  }, function (status, error, readyState, responseText, responseHeaders) {
    bugsnag.reportError(error, {
      data: {
        id: id,
        readyState: readyState,
        responseText: responseText,
        responseHeaders: responseHeaders,
        status: status
      },
      severity: 'info'
    });
    return validateCallback(false);
  });
};

exports.bypassSurveylessUnit = bypassSurveylessUnit;

},{"../../../tmp/config.js":55,"../helpers/vanillaHelper.js":25}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = require("../../../tmp/config");

var _vanillaHelper = _interopRequireDefault(require("../helpers/vanillaHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ReporterHandler = function () {
  function ReporterHandler(options) {
    _classCallCheck(this, ReporterHandler);

    this.iframe = this.createFrame(options);
    this.ready = false;
    this.inIframe = options.inIframe;
    this.units = {};
    this.queue = [];
    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'Added reporter'
    });
  }

  _createClass(ReporterHandler, [{
    key: "createFrame",
    value: function createFrame(_ref) {
      var debug = _ref.debug;
      var iframe = document.createElement('iframe');
      var src = _config.knotchConfig.reporter;
      if (debug) src += "?debug=true";

      _vanillaHelper["default"].extend(iframe, {
        name: "measurementKnotchReporter",
        title: "Knotch Reporter Frame",
        src: src,
        frameBorder: '0',
        display: 'none',
        id: "measurementKnotchReporter",
        width: '0',
        height: '0',
        ariaHidden: true
      });

      iframe.style.display = 'none';

      _vanillaHelper["default"].ready(function () {
        return document.body.appendChild(iframe);
      });

      return iframe;
    }
  }, {
    key: "init",
    value: function init() {
      this.ready = true;
      this.flush();
    }
  }, {
    key: "flush",
    value: function flush() {
      var l = this.queue.length;

      for (var i = 0; i < l; i++) {
        var event = this.queue.pop();
        this.send(event);
      }
    }
  }, {
    key: "getPagePayload",
    value: function getPagePayload() {
      var pagePayload = {
        content_type: 'web',
        browser_url: document.referrer,
        user_agent: window.navigator.userAgent,
        unit_type: 'iframe',
        unit_version: _config.knotchConfig.version
      }; 

      if (!this.inIframe) {
        _vanillaHelper["default"].extend(pagePayload, this.getDynamicPagePayload());
      }

      return pagePayload;
    }
  }, {
    key: "getDynamicPagePayload",
    value: function getDynamicPagePayload() {
      var dynamicPagePayload = {
        unit_type: 'jstag'
      };

      _vanillaHelper["default"].extend(dynamicPagePayload, {
        browser_url: _vanillaHelper["default"].getBrowserURL(),
        canonical_url: _vanillaHelper["default"].getCanonicalURL(),
        referrer_url: document.referrer
      });

      if (document.body) {
        _vanillaHelper["default"].extend(dynamicPagePayload, {
          content_height: document.body.scrollHeight,
          content_width: document.body.scrollWidth
        });
      }

      return dynamicPagePayload;
    }
  }, {
    key: "initUnit",
    value: function initUnit(data) {
      var thirdPartyPixels = data.config && data.config.thirdPartyPixels;
      var unitData = {
        organization_id: data.organizationId,
        survey_language: data.languageCode,
        survey_type: data.videoType !== null ? 'video' : 'article',
        survey_variation: data.public_id,
        survey_id: data.public_id
      };
      var pageData = this.getPagePayload();

      var payload = _vanillaHelper["default"].extend({}, pageData, unitData);

      this.send({
        eventType: 'updateUnitData',
        data: payload,
        surveyId: data.public_id,
        productType: 'measurement'
      });

      if (thirdPartyPixels && thirdPartyPixels.length) {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'Sending third party pixel to reporter',
          metaData: data
        });
        this.send({
          eventType: 'thirdPartyPixel',
          data: thirdPartyPixels,
          surveyId: data.public_id,
          productType: 'measurement'
        });
      }
    }
  }, {
    key: "send",
    value: function send(payload) {
      if (!this.iframe || !this.iframe.contentWindow || !this.ready) {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: "iframe not ready yet",
          event: payload.eventType,
          payloadType: payload.data.type
        });
        return this.queue.push(payload);
      }

      var postMessageType = _typeof(this.iframe.contentWindow.postMessage);

      if (postMessageType !== 'function') {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'postMessage should be a function'
        });
        return this.queue.push(payload);
      }

      if (!payload.eventType) {
        return window.Knotch.bugsnag.pushBreadCrumb({
          name: 'payload must have an eventType'
        });
      }

      this.iframe.contentWindow.postMessage(payload, _config.knotchConfig.reporter);
    }
  }, {
    key: "sendUnitEvent",
    value: function sendUnitEvent(_ref2) {
      var data = _ref2.data,
          surveyId = _ref2.surveyId,
          timer = _ref2.timer;
      var dynamicPageData = this.inIframe ? {} : this.getDynamicPagePayload();

      var payload = _vanillaHelper["default"].extend({}, dynamicPageData, data, {
        timer: timer
      });

      this.send({
        eventType: 'unitEvent',
        data: payload,
        surveyId: surveyId,
        productType: 'measurement'
      });
    }
  }]);

  return ReporterHandler;
}();

var _default = ReporterHandler;
exports["default"] = _default;

},{"../../../tmp/config":55,"../helpers/vanillaHelper":25}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLACEHOLDER_CHECK_OPTIONS = void 0;
var PLACEHOLDER_CHECK_OPTIONS = {
  startInterval: 200,
  startExpIndex: 1,
  countsToIncrease: 10,
  maxTime: 30 * 60 * 1000,
  autoStart: true
};
exports.PLACEHOLDER_CHECK_OPTIONS = PLACEHOLDER_CHECK_OPTIONS;

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper.js"));

var _IframeHandler = _interopRequireDefault(require("../../helpers/IframeHandler.js"));

var _Cookies = _interopRequireDefault(require("../../helpers/Cookies.js"));

var _config = require("../../../../tmp/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VIDEO_TYPES = {
  BRIGHTCOVE: 0,
  YOUTUBE: 1,
  VIMEO: 2,
  OOYALA: 3,
  NYLON: 4,
  HTML5: 5,
  JWPLAYER: 7,
  VPAID: 8,
  WISTIA: 9,
  FAVE: 10,
  SMPLAYER: 11
};
var LEGACY_VIDEO_TYPES = [VIDEO_TYPES.YOUTUBE, VIDEO_TYPES.VIMEO, VIDEO_TYPES.VPAID, VIDEO_TYPES.BRIGHTCOVE]; 

var ABS_FULL = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0
};
var IFRAME_BORDER = {
  borderRadius: '6px'
}; 

var DEFAULT_WIDTH = '100%';
var DEFAULT_HEIGHT = '320px';
function UnitDOMHandler(node, data) {
  this.isMobile = _vanillaHelper["default"].isMobile();
  this.isVideo = data.videoType !== null;
  this.videoType = this.isVideo && data.videoType;
  this.isInIframe = !_vanillaHelper["default"].isTopFrame();
  this.inKnotchPage = _vanillaHelper["default"].inKnotchPage();
  this.inDevTestPage = _vanillaHelper["default"].inDevTestPage();
  this.inGenerator = _vanillaHelper["default"].getScriptFlag('generator');
  this.isValid = true;
  this.data = data; 

  this.node = node;
  this.parentNode = node.parentNode;
  this.container = document.querySelector(".knotch_".concat(data.public_id)); 

  this.iframeHandler = new _IframeHandler["default"]({
    title: 'Feedback Question By Knotch',
    id: "knotchframe_".concat(data.public_id),
    src: "".concat(_vanillaHelper["default"].getRelativePath(), "unit.html?id=knotchframe_").concat(data.public_id)
  });
  this.iframe = this.iframeHandler.DOM;
  this.setup();
  this.trackRemoval();
}

UnitDOMHandler.prototype = {
  trackRemoval: function trackRemoval() {
    var _this = this;

    if (window.MutationObserver) {
      var trackRemovalObserver = new MutationObserver(function (mutations, observer) {
        mutations.forEach(function (mutation) {
          var nodes = [].slice.call(mutation.removedNodes); 

          var directMatch = nodes.indexOf(_this.iframe) > -1;
          var placeholder = nodes.filter(function (node) {
            return node.contains(_this.iframe);
          });
          var parentMatch = placeholder.length > 0;

          if (directMatch || !window.Knotch.units[_this.data.public_id]) {
            observer.disconnect();
            window.Knotch.bugsnag.pushBreadCrumb({
              name: "Knotch Unit was removed"
            });
          } else if (parentMatch) {
            observer.disconnect();
            window.Knotch.bugsnag.pushBreadCrumb({
              name: "Knotch Unit Placeholder was removed"
            });
            window.Knotch.bugsnag.pushBreadCrumb({
              name: "Reinjecting Knotch Unit Placeholder"
            });

            _this.parentNode.appendChild(placeholder[0]);

            _this.injectIframe();
          }
        });
      });
      trackRemovalObserver.observe(this.container.parentNode, {
        subtree: true,
        childList: true
      });
    }
  },

  setup: function setup() {
    if (this.node.querySelector('[id^=knotchframe_]') !== null) {
      this.isValid = false;
      return window.Knotch.bugsnag.pushBreadCrumb({
        name: "A unit already exists"
      });
    } 


    _vanillaHelper["default"].onEvent('touchstart', this.iframe, function (event) {
      return event.preventDefault();
    });

    var nodeIsArticle = _vanillaHelper["default"].hasClass(this.node, 'knotchArticleEmbed');

    var nodeIsVideo = _vanillaHelper["default"].hasClass(this.node, 'knotchVideoEmbed'); 


    var mismatched = this.isVideo && nodeIsArticle || !this.isVideo && nodeIsVideo; 
    var isLegacyVideo = LEGACY_VIDEO_TYPES.indexOf(this.videoType) !== -1;

    if (this.inGenerator || this.isInIframe || isLegacyVideo) {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: "Bypassing mismatch check ".concat(this.data.public_id)
      }); 
    } else if (mismatched) {
      this.isValid = false;
      return window.Knotch.bugsnag.pushBreadCrumb({
        name: "Mismatch between data & integration ".concat(this.data.public_id)
      });
    }

    if (this.isInIframe && (this.inKnotchPage || this.inDevTestPage || this.inGenerator)) {
      this.inKnotchIframe();
    } else if (this.inKnotchPage) {
      this.onKnotchPage();
    } else {
      this.onClientPage();
    }

    if (this.isValid) {
      return this.node.appendChild(this.iframe);
    }

    return window.Knotch.bugsnag.pushBreadCrumb({
      name: "Invalid unit integration: ".concat(this.data.public_id)
    });
  },

  getIframe: function getIframe() {
    if (this.isValid) {
      return this.iframe;
    }

    return null;
  },

  inKnotchIframe: function inKnotchIframe() {
    this.setLang();

    if (this.isVideo && !this.inGenerator) {
      this.createVidContainer();
    }

    _vanillaHelper["default"].extend(this.iframe.style, ABS_FULL);

    var centerContainer = document.querySelector('.centerContainer');

    if (centerContainer) {
      _vanillaHelper["default"].extend(centerContainer.style, {
        width: '100%',
        height: '100%',
        margin: 0,
        top: 0,
        left: 0
      });
    }

    var pageOverlay = document.querySelector('#knotchFullPage > .overlay');
    document.getElementById('knotchFullPage').style.position = 'absolute';

    if (pageOverlay) {
      _vanillaHelper["default"].removeNode(pageOverlay);
    }
  },
  injectIframe: function injectIframe() {
    var survey;
    var node = document.querySelector(".knotch_".concat(this.data.public_id));
    var customLayout = node.getAttribute('data-layout');

    var params = _vanillaHelper["default"].getQueryParams();

    try {
      survey = JSON.stringify(this.data);
    } catch (error) {
      return window.Knotch.bugsnag.reportError(error);
    }

    var theme = window.knotchData.themes && window.knotchData.themes[this.data.themeId];
    var globalVars = {
      knotchedSentiment: _Cookies["default"].get("knotched:".concat(this.data.public_id)),
      followedUp: _Cookies["default"].get("followup:".concat(this.data.public_id)),
      isMobile: window.Knotch.isMobile,
      isDemo: window.Knotch.demo,
      survey: survey,
      inGenerator: this.inGenerator,
      customLayout: JSON.stringify(customLayout),
      knotchConfig: JSON.stringify(_config.knotchConfig),
      standalone: _vanillaHelper["default"].isStandalone(this.data)
    };

    if (theme) {
      globalVars.theme = JSON.stringify(theme);
    } 


    if (_vanillaHelper["default"].isTopFrame() && _vanillaHelper["default"].inKnotchPage() && params.ext_knotch_stm) {
      globalVars.externalKnotchSentiment = params.ext_knotch_stm;
    }

    var globalVarsTemplate = ''; 

    for (var prop in globalVars) {
      globalVarsTemplate += "".concat('<scri' + 'pt> window.').concat(prop, " = ").concat(globalVars[prop], "</scr") + "ipt>";
    }

    var path = _vanillaHelper["default"].getRelativePath();

    var script = "".concat(globalVarsTemplate).concat('<scri' + "pt src=".concat(path).concat(JSON.parse(globalVars.knotchConfig).measurementUnit, ">  </scri") + "pt>");
    var iframeDoc = this.getIframeDoc();

    if (iframeDoc) {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: "Injecting template in iframe  ".concat(this.data.public_id)
      });

      try {
        iframeDoc.open();
        iframeDoc.writeln(script);
        iframeDoc.close();
      } catch (error) {
        window.Knotch.bugsnag.reportError(error);
      }
    } else {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: "Unable to find iFrame's document ".concat(this.data.public_id)
      });
    }
  },

  setLang: function setLang() {
    document.documentElement.setAttribute('lang', this.data.languageCode);
  },

  onKnotchPage: function onKnotchPage() {
    this.setLang();

    _vanillaHelper["default"].extend(this.iframe.style, ABS_FULL);

    if (this.isMobile) {
      _vanillaHelper["default"].extend(this.container.style, ABS_FULL);
    } else if (this.data.layout !== 'inline') {
      _vanillaHelper["default"].extend(this.iframe.style, IFRAME_BORDER);
    }

    if (this.isVideo) {
      this.createVidContainer();
    }

    this.setupOwnedPageStyle(this.data);
  },

  onClientPage: function onClientPage() {
    if (this.isVideo) {
      this.onClientPageVideo();
    } else {
      this.onClientPageArticle();
    }
  },

  setupOwnedPageStyle: function setupOwnedPageStyle() {
    var pageContainer = document.getElementById('knotchFullPage');
    var step = this.data;

    if (pageContainer && step) {
      if (step.imageUrl) {
        _vanillaHelper["default"].extend(pageContainer.style, {
          backgroundImage: "url(".concat(step.imageUrl, ")")
        });
      }

      if (step.bgcolor) {
        _vanillaHelper["default"].extend(pageContainer.style, {
          backgroundColor: step.bgcolor
        });

        document.querySelector('.overlay').style.opacity = '0.5';
      }
    }
  },

  setThemeBackground: function setThemeBackground(_ref) {
    var _ref$global = _ref.global,
        bgColor = _ref$global.bgColor,
        bgOverlay = _ref$global.bgOverlay,
        bgImage = _ref$global.bgImage;
    var pageContainer = document.getElementById('knotchFullPage');
    var pageOverlay = document.querySelector('.overlay');
    var unitData = this.data.imageUrl || this.data.bgcolor;
    if (pageContainer && !unitData) {
      if (bgImage) {
        _vanillaHelper["default"].extend(pageContainer.style, {
          backgroundImage: "url(".concat(bgImage, ")")
        });

        _vanillaHelper["default"].extend(pageOverlay.style, {
          backgroundColor: bgOverlay
        });
      } else if (bgColor) {
        _vanillaHelper["default"].extend(pageContainer.style, {
          backgroundColor: bgColor
        });

        document.querySelector('.overlay').style.opacity = '0';
      }
    }
  },

  createVidContainer: function createVidContainer() {
    if (LEGACY_VIDEO_TYPES.indexOf(this.videoType) !== -1) {
      var videoDiv = document.createElement('div');
      videoDiv.id = "knotchVideo";
      videoDiv.frameBorder = '0';
      videoDiv.setAttribute('data-knotch', this.data.public_id);

      _vanillaHelper["default"].extend(this.container.style, ABS_FULL, {
        zIndex: -1,
        display: 'none'
      });

      _vanillaHelper["default"].extend(videoDiv.style, ABS_FULL, {
        zIndex: 1
      });

      this.node.parentNode.insertBefore(videoDiv, this.node);
    }
  },

  onClientPageArticle: function onClientPageArticle() {
    var width = DEFAULT_WIDTH;
    var height = DEFAULT_HEIGHT;

    if (this.node.hasAttribute('data-width')) {
      width = this.node.getAttribute('data-width').match(/[\d\.]+(%|px)/g);
    }

    if (this.node.hasAttribute('data-height')) {
      height = this.node.getAttribute('data-height').match(/[\d\.]+(%|px)/g);
    }

    _vanillaHelper["default"].extend(this.iframe.style, {
      width: width,
      height: height,
      margin: '18px auto',
      display: 'block'
    });
  },
  onClientPageVideo: function onClientPageVideo() {
    var _this2 = this;

    var parent = this.container.parentNode;
    var video = document.querySelector("[data-knotch=\"".concat(this.data.public_id, "\"]"));

    if (this.videoType === VIDEO_TYPES.BRIGHTCOVE) {
      video = document.querySelector("video[data-knotch=\"".concat(this.data.public_id, "\"]")) || document.querySelector("[data-knotch=\"".concat(this.data.public_id, "\"]"));
    } 


    if (!video) {
      this.isValid = false;
      return;
    } 
    var computedPosition = window.getComputedStyle(parent).position;

    if (computedPosition === 'static' || computedPosition === '') {
      parent.style.position = 'relative';
    }

    var offsetTop = video.offsetTop > -1 ? "".concat(video.offsetTop, "px") : 0;
    var offsetLeft = video.offsetLeft > -1 ? "".concat(video.offsetLeft, "px") : 0; 
    var transform = window.getComputedStyle(video).transform || 'none'; 

    _vanillaHelper["default"].extend(this.container.style, ABS_FULL, {
      zIndex: -1,
      display: 'none'
    });

    var sizing = this.getUnitContainerSizing(video);
    var defaultVidStyle = {
      top: offsetTop,
      left: offsetLeft,
      height: '100%'
    }; 

    var vidStyle = function vidStyle(videoType) {
      switch (videoType) {
        case VIDEO_TYPES.YOUTUBE:
          return {
            top: offsetTop,
            left: offsetLeft,
            height: sizing.height,
            width: sizing.width,
            transform: transform,
            maxWidth: sizing.maxWidth,
            maxHeight: sizing.maxHeight
          };

        default:
          return {
            top: offsetTop,
            left: offsetLeft,
            maxWidth: sizing.maxWidth,
            maxHeight: sizing.maxHeight
          };
      }
    };

    _vanillaHelper["default"].extend(this.container.style, vidStyle(this.videoType) || defaultVidStyle);

    _vanillaHelper["default"].extend(this.iframe.style, {
      height: '100%',
      width: '100%',
      maxWidth: sizing.width,
      maxHeight: sizing.height,
      margin: 'auto',
      display: 'none'
    });

    _vanillaHelper["default"].onEvent('resize', window, _vanillaHelper["default"].debounce(function () {
      var resizedSizing = _this2.getUnitContainerSizing(video);

      var resized = {
        width: resizedSizing.width,
        height: resizedSizing.height,
        maxWidth: resizedSizing.maxWidth,
        maxHeight: resizedSizing.maxHeight
      };

      _vanillaHelper["default"].extend(_this2.container.style, resized);

      _vanillaHelper["default"].extend(_this2.iframe.style, resized);
    }, 500));
  },

  getUnitContainerSizing: function getUnitContainerSizing(video) {
    var sizing = {
      width: '100%',
      height: '100%'
    };
    var computed = getComputedStyle(video);
    var computedWidth = computed.width;
    var computedHeight = computed.height;
    var rect = video.getBoundingClientRect();
    var width = video.width,
        offsetWidth = video.offsetWidth,
        height = video.height,
        offsetHeight = video.offsetHeight;

    if (computedWidth && parseInt(computedWidth, 10) > 0) {
      sizing.maxWidth = computedWidth;
    } else if (width) {
      sizing.maxWidth = "".concat(width, "px");
    } else if (offsetWidth > 0) {
      sizing.maxWidth = "".concat(offsetWidth, "px");
    } else if (rect.width) {
      sizing.maxWidth = "".concat(rect.width, "px");
    }

    if (computedHeight && parseInt(computedHeight, 10) > 0) {
      sizing.maxHeight = computedHeight;
    } else if (height) {
      sizing.maxHeight = "".concat(height, "px");
    } else if (offsetHeight > 0) {
      sizing.maxHeight = "".concat(offsetHeight, "px");
    } else if (rect.height) {
      sizing.maxHeight = "".concat(rect.height, "px");
    }

    return sizing;
  },

  getIframeDoc: function getIframeDoc() {
    if (this.isValid) {
      if (this.iframe && this.iframe.nodeType === Node.ELEMENT_NODE) {
        try {
          var iframeDoc = this.iframe.document;

          if (this.iframe.contentDocument) {
            iframeDoc = this.iframe.contentDocument;
          } else if (this.iframe.contentWindow) {
            iframeDoc = this.iframe.contentWindow.document;
          }

          if (iframeDoc) {
            return iframeDoc;
          }

          window.Knotch.bugsnag.pushBreadCrumb({
            name: "Invalid iframe document"
          });
        } catch (error) {
          window.Knotch.bugsnag.reportError(error);
        }
      } else {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: "Invalid node passed to getIframeDoc"
        });
      }
    } else {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: "Request iframe document from invalid unit"
      });
    }

    return false;
  },
  fadeIn: function fadeIn() {
    var _this3 = this;

    var parent = this.node.parentElement;

    var largestZIndex = _vanillaHelper["default"].getLargestZIndex(parent);

    if (largestZIndex) {
      this.container.style.zIndex = largestZIndex;
    } else {
      this.container.style.zIndex = 'auto';
    }

    _vanillaHelper["default"].show(this.container);

    _vanillaHelper["default"].fadeIn(this.iframe, 300);

    setTimeout(function () {
      if (_this3.iframe && typeof _this3.iframe.focus === 'function') {
        _this3.iframe.focus();
      }
    }, 400);
  },
  fadeOut: function fadeOut() {
    var _this4 = this;

    _vanillaHelper["default"].fadeOut(this.iframe, 300);

    setTimeout(function () {
      _this4.container.style.zIndex = -1;

      _vanillaHelper["default"].hide(_this4.container);
    }, 300);
  },
  onIframeEvent: function onIframeEvent(event, callback) {
    _vanillaHelper["default"].onEvent(event, this.iframe, callback);
  }
};
var _default = UnitDOMHandler;
exports["default"] = _default;

},{"../../../../tmp/config.js":55,"../../helpers/Cookies.js":21,"../../helpers/IframeHandler.js":23,"../../helpers/vanillaHelper.js":25}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var hasSourceFile = function hasSourceFile(node) {
  return !!(node.children && node.children[0] && node.children[0].tagName === 'SOURCE');
};

var hasSrcAttr = function hasSrcAttr(node) {
  return !!(node.src && node.src.length > 0);
};

var isIframe = function isIframe(node) {
  return node.tagName === 'IFRAME';
};

var isVideo = function isVideo(node) {
  return node.tagName === 'VIDEO';
};

var isBrightcoveAdvancedEmbed = function isBrightcoveAdvancedEmbed(node) {
  var video = node.querySelector('video');
  var isVideoJs = node.tagName === 'VIDEO-JS';
  if (!video) return false;
  return isVideoJs && (hasSourceFile(video) || hasSrcAttr(video));
};

var VIDEO_CHECKS = {
  brightcove: function brightcove(node) {
    return isBrightcoveAdvancedEmbed(node) || isVideo(node) && (hasSourceFile(node) || hasSrcAttr(node));
  },
  FAVE: function FAVE(node) {
    return node.className.indexOf('FavePlayer') !== -1;
  },
  html5video: function html5video(node) {
    return isVideo(node) && (hasSourceFile(node) || hasSrcAttr(node));
  },
  jwplayer: function jwplayer(node) {
    return node.className.indexOf('jwplayer') !== -1;
  },
  kaltura: function kaltura(node) {
    return isIframe(node) && node.id.indexOf('_ifp') !== -1;
  },
  VPAID: function VPAID(node) {
    return node.className.indexOf('knotchVpaid') !== -1;
  },
  youtube: function youtube(node) {
    return isIframe(node) && hasSrcAttr(node);
  },
  smplayer: function smplayer(node) {
    return isIframe(node) && node.className.indexOf('sm-iframe') !== -1;
  }
};
var _default = VIDEO_CHECKS;
exports["default"] = _default;

},{}],32:[function(require,module,exports){
"use strict";

var _Bugsnag = _interopRequireDefault(require("../helpers/Bugsnag.js"));

var _vanillaHelper = _interopRequireDefault(require("../helpers/vanillaHelper.js"));

var _tracker = _interopRequireDefault(require("./tracker.js"));

var _UnitDOMHandler = _interopRequireDefault(require("./dom/UnitDOMHandler.js"));

var _VideoDOMChecks = _interopRequireDefault(require("./dom/VideoDOMChecks.js"));

var _Cookies = _interopRequireDefault(require("../helpers/Cookies.js"));

var _SmartUnitTracker = _interopRequireDefault(require("../smartunits/SmartUnitTracker.js"));

var _config = require("../../../tmp/config.js");

var _DecayInterval = _interopRequireDefault(require("./timers/DecayInterval.js"));

var _constants = require("./constants.js");

var _GAFrameTracker = _interopRequireDefault(require("./trackers/GAFrameTracker.js"));

var _TrackCurrentOnlyManager = _interopRequireDefault(require("./trackers/TrackCurrentOnlyManager.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Knotch = {
  init: function init() {
    if (Knotch.analysis) {
      performance.mark('starting_tag_init');
    }

    Knotch.config = _config.knotchConfig;
    Knotch.debug = _vanillaHelper["default"].isDebug();
    Knotch.bugsnag = new _Bugsnag["default"](_config.knotchConfig);
    Knotch.units = {};
    Knotch.analysis = _vanillaHelper["default"].isAnalysis();
    Knotch.isMobile = _vanillaHelper["default"].isMobile();
    Knotch.inIframe = !_vanillaHelper["default"].isTopFrame();
    Knotch.inKnotchPage = _vanillaHelper["default"].inKnotchPage();
    Knotch.demo = _vanillaHelper["default"].isDemo();

    if (!window.knotchData.units) {
      window.knotchData = {
        units: {}
      };
    }

    var options = {
      demo: Knotch.demo,
      inIframe: Knotch.inIframe,
      inKnotchPage: Knotch.inKnotchPage
    };

    var accountId = _vanillaHelper["default"].getAccountId();

    if (accountId) {
      Knotch.SmartUnitTracker = new _SmartUnitTracker["default"]({
        accountId: accountId,
        knotchConfig: _config.knotchConfig,
        bugsnag: Knotch.bugsnag,
        debug: Knotch.debug
      });
    }

    Knotch.tracker = new _tracker["default"](options);
    Knotch.decayInterval = new _DecayInterval["default"](_objectSpread({
      callback: Knotch.checkPlaceholders
    }, _constants.PLACEHOLDER_CHECK_OPTIONS));

    if (Knotch.analysis) {
      performance.mark('ending_tag_init');
      performance.measure('tag_init_method', 'starting_tag_init', 'ending_tag_init');
    }

    this.checkOptout();
  },

  addUnit: function addUnit(id) {
    if (!_vanillaHelper["default"].isValidTagId(id)) {
      console.warn("[Knotch#addUnit] The Unit ID ".concat(id, " is not valid")); 

      return;
    }

    if (Knotch.units[id] || document.getElementById('knotchframe_55ed7ee027ba796e6ff35103')) {
      console.warn("[Knotch#addUnit] Unit ".concat(id, " already exists")); 

      return;
    }

    var placeholder = document.querySelector("div[class*=\"knotch_".concat(id, "\"]"));
    var videoPlayer = document.querySelector("[data-knotch=\"".concat(id, "\"]"));

    if (placeholder) {
      placeholder.removeAttribute('knotch-ignore');
    } else if (videoPlayer) {
      videoPlayer.removeAttribute('knotch-ignore');
    } else {
      console.warn("[Knotch#addUnit] No placeholders found for id ".concat(id)); 

      return;
    }

    window.Knotch.bugsnag.pushBreadCrumb({
      name: '[public API] Adding Unit',
      metaData: {
        id: id
      }
    });
    Knotch.checkPlaceholders();
  },

  enableUnit: function enableUnit(id) {
    if (!_vanillaHelper["default"].isValidTagId(id)) {
      console.warn("[Knotch#enableUnit] The Unit ID ".concat(id, " is not valid")); 

      return;
    }

    var placeholder = document.querySelector("div[class*=\"knotch_".concat(id, "\"]"));

    if (!placeholder) {
      console.warn("[Knotch#enableUnit] There is no placeholder with the id ".concat(id)); 

      return;
    }

    if (!Knotch.units[id]) {
      console.warn("[Knotch#enableUnit] Unit ".concat(id, " does not exist")); 
    }

    placeholder.removeAttribute('hidden');
    window.Knotch.bugsnag.pushBreadCrumb({
      name: '[public API] Enabling Unit',
      metaData: {
        id: id
      }
    });
    Knotch.units[id].disabled = false;
    Knotch.tracker.enableUnit(id);
  },

  disableUnit: function disableUnit(id) {
    if (!_vanillaHelper["default"].isValidTagId(id)) {
      console.warn("[Knotch#disableUnit] The Unit ID ".concat(id, " is not valid")); 

      return;
    }

    if (!Knotch.units[id]) {
      console.warn("[Knotch#disableUnit] Unit ".concat(id, " does not exist")); 
    }

    var placeholder = document.querySelector("div[class*=\"knotch_".concat(id, "\"]"));

    if (!placeholder) {
      console.warn("[Knotch#disableUnit] There is no placeholder with the id ".concat(id)); 

      return;
    }

    placeholder.setAttribute('hidden', true);
    window.Knotch.bugsnag.pushBreadCrumb({
      name: '[public API] Disabling Unit',
      metaData: {
        id: id
      }
    });
    Knotch.units[id].disabled = true;
    Knotch.tracker.disableUnit(id);
  },

  removeUnit: function removeUnit(id) {
    if (!_vanillaHelper["default"].isValidTagId(id)) {
      console.warn("[Knotch#removeUnit] The Unit ID ".concat(id, " is not valid")); 

      return;
    }

    if (!Knotch.units[id]) {
      Knotch.bugsnag.pushBreadCrumb({
        name: 'unit does not exist'
      });
      console.warn("[Knotch#removeUnit] Unit does not exist or has already been removed"); 

      return;
    }

    var placeholder = document.querySelector("div[class*=\"knotch_".concat(id, "\"]"));

    if (!placeholder) {
      console.warn("[Knotch#removeUnit] There is no placeholder with the id ".concat(id)); 

      return;
    }

    window.Knotch.bugsnag.pushBreadCrumb({
      name: '[public API] Removing Unit',
      metaData: {
        id: id
      }
    });
    placeholder.setAttribute('knotch-ignore', true);

    if (_vanillaHelper["default"].hasClass(placeholder, 'knotchArticleEmbed')) {
      var frame = document.getElementById("knotchframe_".concat(id));

      if (!frame) {
        console.warn("[Knotch#removeUnit] No unit frame detected for ".concat(id)); 

        return;
      }

      _vanillaHelper["default"].removeClass(placeholder, 'knotchArticleEmbed');

      _vanillaHelper["default"].removeNode(frame);

      delete Knotch.units[id];
    }

    if (_vanillaHelper["default"].hasClass(placeholder, 'knotchVideoEmbed')) {
      var videoContainer = document.querySelector("[data-knotch=\"".concat(id, "\"]"));

      if (!videoContainer) {
        console.warn("[Knotch#removeUnit] No video player found with data-knotch = ".concat(id)); 

        return;
      }

      videoContainer.setAttribute('knotch-ignore', true);

      _vanillaHelper["default"].removeNode(placeholder);

      delete Knotch.units[id];
    }

    Knotch.tracker.removeUnit(id);
  },

  setFocus: function setFocus(id) {
    if (!_vanillaHelper["default"].isValidTagId(id)) {
      console.warn("[Knotch#setFocus] The Unit ID ".concat(id, " is not valid")); 

      return;
    }

    window.Knotch.bugsnag.pushBreadCrumb({
      name: "[Knotch#setFocus] Setting focus to unit ".concat(id),
      metaData: {
        id: id
      }
    });
    Object.keys(Knotch.units).map(function (unitId) {
      if (unitId !== id) {
        Knotch.removeUnit(unitId);
      }
    });
    Knotch.addUnit(id);
  },

  checkPlaceholders: function checkPlaceholders() {
    if (Knotch.analysis) {
      performance.mark('starting_checkplaceholders');
    }

    var placeholders = document.querySelectorAll('div[class*="knotch_"]');
    var vidPlaceholders = document.querySelectorAll('[data-knotch]');

    for (var i = 0; i < placeholders.length; i++) {
      if (placeholders[i].hasAttribute('knotch-ignore') || _vanillaHelper["default"].hasClass(placeholders[i], 'knotchArticleEmbed')) {
        continue;
      }

      var id = _vanillaHelper["default"].extractIdFromNode(placeholders[i]);

      if (!id) {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'id was not properly extracted'
        });
      } 


      if (_vanillaHelper["default"].isValidTagId(id) && !Knotch.units[id]) {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'fetching unit data'
        });
        Knotch.units[id] = {};

        _vanillaHelper["default"].addClass(placeholders[i], 'knotchArticleEmbed'); 


        var trackCurrentOnly = placeholders[i].getAttribute('data-track-current-only');

        if (trackCurrentOnly) {
          if (!Knotch.trackCurrentOnly) {
            Knotch.trackCurrentOnly = new _TrackCurrentOnlyManager["default"]({
              knotch: Knotch
            });
          }

          Knotch.trackCurrentOnly.addUnit(id);
        }

        Knotch.fetchData(id);
      }
    }

    for (var _i = 0; _i < vidPlaceholders.length; _i++) {
      var placeholder = vidPlaceholders[_i];

      if (placeholder.hasAttribute('knotch-ignore') || _vanillaHelper["default"].hasClass(placeholders[_i], 'knotchVideoEmbed')) {
        continue;
      } 
      if ((placeholder.tagName === 'DIV' || placeholder.tagName === 'VIDEO-JS') && (placeholder.className.indexOf('video-js') > -1 || placeholder.className.indexOf('vjs') > -1)) {
        continue;
      }

      var _id = placeholder.getAttribute('data-knotch'); 


      if (_vanillaHelper["default"].isValidTagId(_id) && !Knotch.units[_id]) {
        var supported = false;

        for (var videoType in _VideoDOMChecks["default"]) {
          supported = supported || _VideoDOMChecks["default"][videoType](placeholder);
        }

        if (!supported) {
          return Knotch.bugsnag.pushBreadCrumb({
            name: 'the data-knotch attribute is on an unsupported node'
          });
        }

        Knotch.units[_id] = {}; 

        var knotchDiv = document.createElement('div');
        knotchDiv.className = "knotch_".concat(_id, " knotchVideoEmbed");
        var customVideoParent = document.querySelector("[data-knotch-video-container=\"".concat(_id, "\"]"));

        if (customVideoParent) {
          customVideoParent.appendChild(knotchDiv);
        } else {
          vidPlaceholders[_i].parentNode.insertBefore(knotchDiv, vidPlaceholders[_i].nextSibling);
        }

        Knotch.fetchData(_id);
      }
    }

    if (Knotch.analysis) {
      performance.mark('ending_checkplaceholders');
      performance.measure('checkplaceholders_method', 'starting_checkplaceholders', 'ending_checkplaceholders');
    }
  },

  fetchData: function fetchData(id) {
    if (Knotch.analysis) {
      performance.mark('starting_fetchData');
    }

    if (window.knotchData.units && window.knotchData.units[id]) {
      Knotch.fillIframe(window.knotchData.units[id]);
    } else if (window.knotchUnits && window.knotchUnits[id]) {
      Knotch.fillIframe(window.knotchUnits[id]);
    } else {
      _vanillaHelper["default"].get("".concat(_config.knotchConfig.metadata, "/").concat(id, ".json"), {}, function (res) {
        Knotch.fillIframe(res);

        if (Knotch.analysis) {
          performance.mark('ending_fetchData');
          performance.measure('fetchData_method', 'starting_fetchData', 'ending_fetchData');
        }
      }, function (status, error, readyState, responseText, responseHeaders) {
        return Knotch.bugsnag.reportError(error, {
          data: {
            id: id,
            readyState: readyState,
            responseText: responseText,
            responseHeaders: responseHeaders,
            status: status
          },
          severity: 'info'
        });
      });
    }
  },

  fillIframe: function fillIframe(data) {
    if (!data) return;

    try {
      JSON.stringify(data);
    } catch (error) {
      return Knotch.bugsnag.reportError(error);
    }

    if (Knotch.analysis) {
      performance.mark('starting_fillIframe');
    } 


    if (Knotch.units[data.public_id] && Knotch.units[data.public_id].data) {
      return;
    }

    Knotch.units[data.public_id].data = data;
    window.knotchData.units[data.public_id] = data;
    Knotch.bugsnag.pushBreadCrumb({
      name: "Valid Unit Data returned ".concat(data.public_id)
    });
    var node = document.querySelector(".knotch_".concat(data.public_id)); 
    if (!node) {
      return Knotch.bugsnag.pushBreadCrumb({
        name: "No available placeholder for unit setup ".concat(data.public_id)
      });
    } 


    if (!data.surveyless) {
      var DOMHandler = new _UnitDOMHandler["default"](node, data);
      Knotch.units[data.public_id].DOMHandler = DOMHandler;
      Knotch.units[data.public_id].isVisible = true;

      if (!DOMHandler.isValid) {
        return Knotch.bugsnag.pushBreadCrumb({
          name: "No iframe created ".concat(data.public_id)
        });
      }

      var knotchedCookie = _Cookies["default"].get("knotched:".concat(data.public_id));

      var knotchedSentiment = typeof knotchedCookie === 'string' ? parseInt(knotchedCookie, 10) : null;
      DOMHandler.iframeHandler.sendMessage({
        eventType: 'globalVars',
        data: {
          knotchedSentiment: knotchedSentiment,
          followedUp: _Cookies["default"].get("followup:".concat(data.public_id)),
          isMobile: Knotch.isMobile,
          isDemo: Knotch.demo,
          survey: data,
          customLayout: node.getAttribute('data-layout'),
          knotchConfig: _config.knotchConfig
        }
      });
    } else {
      Knotch.bugsnag.pushBreadCrumb({
        name: "Adding surveyless unit"
      });
      Knotch.units[data.public_id].isVisible = false;
    }

    Knotch.tracker.addUnit(data);

    if (Knotch.analysis) {
      performance.mark('ending_fillIframe');
      performance.measure('fillIframe_method', 'starting_fillIframe', 'ending_fillIframe');
      var measures = performance.getEntriesByType('measure');
      measures.forEach(function (measureItem) {
        console.log("[ttfe_measure] ".concat(measureItem.name, ": ").concat(measureItem.duration)); 
      });
    }
  },

  setDemo: function setDemo(isDemo) {
    if (typeof isDemo !== 'boolean') {
      return console.warn("[Knotch#setDemo] Please pass in a boolean value (true/false)"); 
    }

    if (isDemo && Knotch.demo === true) {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'already in demo mode'
      });
    }

    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'setting demo mode'
    });
    var isDemoCookie = isDemo === true ? 'true' : 'false';

    _Cookies["default"].set('knotch_demo', isDemoCookie);

    Knotch.demo = isDemo;
    Knotch.tracker.demo = isDemo;
    Knotch.bugsnag.demo = isDemo;
  },

  checkOptout: function checkOptout() {
    if (_Cookies["default"].get('knotch_optout') === '0') {
      this.setOptout(true);
    }
  },

  setOptout: function setOptout(optedOut) {
    if (typeof optedOut !== 'boolean') {
      return console.warn("[Knotch#setOptout] Please pass in a boolean value (true/false)"); 
    }

    this.optoutGaFrame = new _GAFrameTracker["default"]({
      knotchId: 'optout',
      optedOut: optedOut,
      accountId: _vanillaHelper["default"].getAccountId()
    });

    if (optedOut) {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: '[public API] Opted out!'
      });

      _Cookies["default"].set('knotch_optout', 1, 60 * 60 * 24 * 365);
    } else {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: '[public API] Opted in!'
      });

      _Cookies["default"]["delete"]('knotch_optout');
    }
  }
};

if (!window.Knotch) {
  window.Knotch = Knotch;

  if (!window.knotchData) {
    window.knotchData = {
      units: {},
      themes: {}
    };
  }

  Knotch.init();
}

},{"../../../tmp/config.js":55,"../helpers/Bugsnag.js":20,"../helpers/Cookies.js":21,"../helpers/vanillaHelper.js":25,"../smartunits/SmartUnitTracker.js":26,"./constants.js":29,"./dom/UnitDOMHandler.js":30,"./dom/VideoDOMChecks.js":31,"./timers/DecayInterval.js":33,"./tracker.js":37,"./trackers/GAFrameTracker.js":38,"./trackers/TrackCurrentOnlyManager.js":41}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var defaultIntervalCalc = function defaultIntervalCalc(idx) {
  return Math.pow(2, idx) * 100;
};

var DecayInterval = function () {
  function DecayInterval(_ref) {
    var _this = this;

    var callback = _ref.callback,
        startInterval = _ref.startInterval,
        startExpIndex = _ref.startExpIndex,
        countsToIncrease = _ref.countsToIncrease,
        newIntervalCalc = _ref.newIntervalCalc,
        maxTime = _ref.maxTime,
        autoStart = _ref.autoStart;

    _classCallCheck(this, DecayInterval);

    this.callback = callback;
    this.interval = startInterval;
    this.expIndex = startExpIndex;
    this.newIntervalCalc = newIntervalCalc || defaultIntervalCalc;
    this.countsToIncrease = countsToIncrease;
    this.maxTime = maxTime;
    this.count = 0;
    this.timer = null;
    this.autoStart = autoStart;
    if (this.autoStart) {
      setTimeout(function () {
        return _this.startInterval();
      }, 0);
    }

    setTimeout(function () {
      return _this.stopInterval();
    }, this.maxTime);
  }
  _createClass(DecayInterval, [{
    key: "getNewInterval",
    value: function getNewInterval() {
      this.count++;

      if (this.count % this.countsToIncrease === 0) {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'incremented decay timer index'
        });
        this.expIndex++;
      }

      this.interval = this.newIntervalCalc(this.expIndex);
    }
  }, {
    key: "startInterval",
    value: function startInterval() {
      this.getNewInterval();
      this.callback();
      this.nextInterval();
    }
  }, {
    key: "stopInterval",
    value: function stopInterval() {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'stopping decay timer'
      });
      clearTimeout(this.timer);
    }
  }, {
    key: "nextInterval",
    value: function nextInterval() {
      clearTimeout(this.timer);
      this.timer = window.setTimeout(this.startInterval.bind(this), this.interval);
    }
  }]);

  return DecayInterval;
}();

var _default = DecayInterval;
exports["default"] = _default;

},{}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper.js"));

var _ifvisible = _interopRequireDefault(require("../../helpers/ifvisible.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SophistiTimer(event) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  this.startStopTimes = {};
  this.options = options;
  this.event = event;
  this.events = {};
  this.debug = false;
  this.disabled = false;
  this.mobile = _vanillaHelper["default"].isMobile();

  if (this.mobile) {
    this.mobileListeners();
  }
}

SophistiTimer.prototype = {
  init: function init() {
    var _this = this;

    try {
      this.setIdleDurationInSeconds(9999);

      var start = function start() {
        return _this.startTimer();
      };

      var stop = function stop() {
        return _this.stopTimer();
      };

      if (this.event !== 'time_playing_video') {
        _ifvisible["default"].on('blur', stop);

        _ifvisible["default"].on('focus', start);

        _ifvisible["default"].on('idle', stop);

        _ifvisible["default"].on('wakeup', start);
      }
    } catch (e) {
      window.Knotch.bugsnag.reportError(e);
    }
  },

  startTimer: function startTimer() {
    if (!this.disabled) {
      if (this.startStopTimes[this.event] === undefined) {
        this.startStopTimes[this.event] = [];
      } else {
        var arrayOfTimes = this.startStopTimes[this.event];
        var latestStartStopEntry = arrayOfTimes[arrayOfTimes.length - 1];

        if (latestStartStopEntry !== undefined && latestStartStopEntry.stopTime === undefined) {
          return;
        }
      }
    } 


    function supportsNavigationTiming() {
      return !!(window.performance && window.performance.timing);
    }

    var begin = new Date().getTime(); 
    if (supportsNavigationTiming() && this.event === 'time_on_page') {
      begin = window.performance.timing.navigationStart;
    }

    this.startStopTimes[this.event].push({
      startTime: begin,
      stopTime: undefined
    });
    this.trigger('start');
  },
  stopTimer: function stopTimer() {
    var arrayOfTimes = this.startStopTimes[this.event];

    if (arrayOfTimes === undefined || arrayOfTimes.length === 0) {
      return;
    }

    if (arrayOfTimes[arrayOfTimes.length - 1].stopTime === undefined) {
      arrayOfTimes[arrayOfTimes.length - 1].stopTime = new Date().getTime();
    }

    this.trigger('stop');
  },
  isStarted: function isStarted() {
    var arrayOfTimes = this.startStopTimes[this.event];
    return typeof arrayOfTimes !== 'undefined' && arrayOfTimes[arrayOfTimes.length - 1].stopTime === undefined;
  },
  resetRecordedPageTime: function resetRecordedPageTime(event) {
    this.startStopTimes[event] = [];
  },
  resetAllRecordedPageTimes: function resetAllRecordedPageTimes() {
    var pageNames = Object.keys(this.startStopTimes);

    for (var i = 0; i < pageNames.length; i++) {
      this.resetRecordedPageTime(pageNames[i]);
    }
  },
  setIdleDurationInSeconds: function setIdleDurationInSeconds(duration) {
    var durationFloat = parseFloat(duration);

    if (isNaN(durationFloat) === false) {
      _ifvisible["default"].setIdleDuration(durationFloat);
    } else {
      throw new Error("An invalid duration time (".concat(duration, ") was provided."));
    }
  },

  getTimeOnCurrentPage: function getTimeOnCurrentPage() {
    var arrayOfTimes = this.startStopTimes[this.event];

    if (arrayOfTimes === undefined) {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: "timer not started yet",
        metaData: {
          startStopTimes: this.startStopTimes,
          event: this.event
        }
      });
      return;
    }

    var firstStartTime = arrayOfTimes[0].startTime;
    var lastEndTime = arrayOfTimes[arrayOfTimes.length - 1].stopTime;
    var timeSpent = 0;

    for (var i = 0; i < arrayOfTimes.length; i++) {
      var startTime = arrayOfTimes[i].startTime;
      var stopTime = arrayOfTimes[i].stopTime;

      if (stopTime === undefined) {
        if (i < arrayOfTimes.length - 1) {
          window.Knotch.bugsnag.pushBreadCrumb({
            name: "setting stop time at interval ".concat(i + 1, "/").concat(arrayOfTimes.length, " to current time: ").concat(new Date().getTime())
          });
        }

        stopTime = new Date().getTime();
        lastEndTime = stopTime;
      }

      var timeDifference = stopTime - startTime;

      if (timeDifference < 0) {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: "negative time difference start",
          metaData: {
            startTime: startTime,
            stopTime: stopTime,
            array: JSON.stringify(arrayOfTimes)
          }
        });
      }

      var tempTimeSpent = parseInt(timeSpent, 10) + parseInt(timeDifference, 10); 

      if (tempTimeSpent > this.options.maxTime) {
        this.disabled = true;
        this.stopTimer();
        this.clearBindings();
        break;
      } else {
        timeSpent = tempTimeSpent;
      }
    }

    return {
      startTime: firstStartTime,
      endTime: lastEndTime,
      timeSpent: timeSpent
    };
  },
  on: function on(event, callback) {
    var handlers = this.events[event] || [];
    handlers.push(callback);
    this.events[event] = handlers;
  },
  clearBindings: function clearBindings() {
    this.events[this.event] = [];
  },
  off: function off(event, callback) {
    var handlers = this.events[event];

    if (!handlers) {
      return window.Knotch.bugsnag.reportError(new Error('Event trying to be removed is not present'), {
        data: {
          events: this.events,
          event: event
        }
      });
    }

    this.events[event] = handlers.filter(function (f) {
      return f.name !== callback.name;
    });
  },
  trigger: function trigger(event, data) {
    var handlers = this.events[event];

    if (!handlers || handlers.length < 1) {
      return;
    }

    [].forEach.call(handlers, function (handler) {
      handler(data);
    });
  },
  mobileListeners: function mobileListeners() {
    var _this2 = this;

    try {
      var hidden;
      var visibilityChange;

      if (typeof document.hidden !== 'undefined') {
        hidden = 'hidden';
        visibilityChange = 'visibilitychange';
      } else if (typeof document.mozHidden !== 'undefined') {
        hidden = 'mozHidden';
        visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
      } else {
        return;
      }

      if (typeof document.addEventListener === 'undefined') {
        window.Knotch.bugsnag.reportError(new Error('addEventListener not supported'));
        this.stopTimer();
        this.disabled = true;
      } else {
        document.addEventListener(visibilityChange, function () {
          if (document[hidden]) {
            _this2.stopTimer();
          } else {
            _this2.startTimer();
          }
        }, false);
      }
    } catch (e) {
      window.Knotch.bugsnag.reportError(e, {
        name: 'Error in attaching mobile page visibility changes'
      });
    }
  }
};
var _default = SophistiTimer;
exports["default"] = _default;

},{"../../helpers/ifvisible.js":24,"../../helpers/vanillaHelper.js":25}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper.js"));

var _DecayInterval = _interopRequireDefault(require("./DecayInterval.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TimerLogger(_ref) {
  var timer = _ref.timer,
      event = _ref.event,
      tracker = _ref.tracker,
      id = _ref.id,
      logOptions = _ref.logOptions,
      autoStart = _ref.autoStart;
  this.logOptions = logOptions || {};
  this.id = id;
  this.timer = timer;
  this.tracker = tracker;
  this.interval = 1000;
  this.autoStart = autoStart;
  this.count = 0;
  this.event = event;
  this.started = false;
  this.url = "/log/".concat(this.event);

  if (!event) {
    window.Knotch.bugsnag.reportError(new Error('Event Type required for Logging Timer.'));
  }

  this.init();
}

TimerLogger.prototype = {
  init: function init() {
    var _this = this;

    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'initializing TimerLogger'
    });

    if (this.autoStart) {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'autostart, starting timer'
      });
      this.startTimer();
    }

    try {
      this.decayInterval = new _DecayInterval["default"]({
        callback: this._poll.bind(this),
        startInterval: this.interval,
        startExpIndex: this.logOptions.startExpIndex,
        countsToIncrease: this.logOptions.countsToIncrease,
        newIntervalCalc: function newIntervalCalc(idx) {
          return (Math.pow(2, idx) - 1) * 1000;
        },
        maxTime: this.logOptions.maxTime,
        autoStart: this.autoStart
      });
      this.timer.on('start', function () {
        return _this.decayInterval.startInterval();
      });
      this.timer.on('stop', function () {
        return _this.decayInterval.stopInterval();
      });

      _vanillaHelper["default"].onEvent('click', document.getElementById('killtop'), function () {
        _this.timer.disabled = true;

        _this.stopTimer();
      });
    } catch (e) {
      window.Knotch.bugsnag.reportError(e);
    }
  },
  startTimer: function startTimer() {
    window.Knotch.bugsnag.pushBreadCrumb({
      name: "".concat(this.event, " timer started")
    });
    this.started = true;
    this.timer.startTimer();
  },
  stopTimer: function stopTimer() {
    window.Knotch.bugsnag.pushBreadCrumb({
      name: "".concat(this.event, " timer stopped")
    });
    this.started = false;

    this._logDataSync();
  },
  endTimer: function endTimer() {
    this.timer.disabled = true;
    this.timer.stopTimer();
  },
  resetRecordedPageTime: function resetRecordedPageTime(pageName) {
    this.startStopTimes[pageName] = [];
  },
  getTimeOnCurrentPage: function getTimeOnCurrentPage() {
    return this.timer.getTimeOnCurrentPage();
  },
  setMaxDuration: function setMaxDuration(timeInMilliseconds) {
    this.logOptions.maxTime = timeInMilliseconds;
  },

  _poll: function _poll() {
    var timeData = this.getTimeOnCurrentPage();

    if (this.tracker.demo || this.timer.disabled || !timeData) {
      return;
    }

    var maxTime = this.logOptions.maxTime;
    var overTime = timeData.timeSpent > maxTime;
    var data = {
      type: this.event,
      survey_id: this.id
    };

    if (this.event === 'time_playing_video') {
      data.video_seconds_watched = timeData.timeSpent;
    }

    if (timeData.timeSpent < 0 || timeData.end < timeData.begin) {
      this.decayInterval.stopInterval();

      var errorData = _objectSpread(_objectSpread({}, this.data), {}, {
        count: this.count
      });

      window.Knotch.bugsnag.reportError(new Error('Negative time difference, killing'), {
        data: errorData
      });
      this.endTimer();
      this.removeListeners();
    } else if (overTime) {
      if (this.decayInterval) {
        this.decayInterval.stopInterval();
      } else {
        window.Knotch.bugsnag.reportError(new Error('DecayInterval does not exist yet'), {
          data: {
            timeData: timeData,
            maxTime: maxTime,
            overTime: overTime
          }
        });
      }
    } else {
      this.pollRequest = this.tracker.record(data);
    }
  },
  _logDataSync: function _logDataSync() {
    this.timer.stopTimer();
    if (this.pollRequest) this.pollRequest.abort();

    this._poll();
  },
  errorHandler: function errorHandler(XMLHttpRequest, textStatus, errorThrown) {
    this.decayInterval.stopInterval();
    window.Knotch.bugsnag.reportError(errorThrown, {
      data: XMLHttpRequest
    });
  },
  removeListeners: function removeListeners() {
    var _this2 = this;

    this.timer.off('start', function () {
      return _this2.decayInterval.startInterval();
    });
    this.timer.off('stop', function () {
      return _this2.decayInterval.stopInterval();
    });
  }
};
var _default = TimerLogger;
exports["default"] = _default;

},{"../../helpers/vanillaHelper.js":25,"./DecayInterval.js":33}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THROTTLED_TIME_ON_PAGE_IDS = exports.LOG_OPTIONS_TIME_PLAYING_VIDEO = exports.LOG_OPTIONS_TIME_ON_PAGE_THROTTLED = exports.LOG_OPTIONS_TIME_ON_PAGE = void 0;

var LOG_OPTIONS_TIME_ON_PAGE = {
  countsToIncrease: 16,
  startExpIndex: 3,
  maxTime: 60 * 60 * 1000
};
exports.LOG_OPTIONS_TIME_ON_PAGE = LOG_OPTIONS_TIME_ON_PAGE;
var LOG_OPTIONS_TIME_ON_PAGE_THROTTLED = {
  countsToIncrease: 16,
  startExpIndex: 4,
  maxTime: 5 * 60 * 1000
};
exports.LOG_OPTIONS_TIME_ON_PAGE_THROTTLED = LOG_OPTIONS_TIME_ON_PAGE_THROTTLED;
var LOG_OPTIONS_TIME_PLAYING_VIDEO = {
  countsToIncrease: 16,
  startExpIndex: 3,
  maxTime: 2 * 60 * 60 * 1000
};
exports.LOG_OPTIONS_TIME_PLAYING_VIDEO = LOG_OPTIONS_TIME_PLAYING_VIDEO;
var THROTTLED_TIME_ON_PAGE_IDS = ['518afb38-d89b-4aa0-9b73-31ad26d491a6' 
];
exports.THROTTLED_TIME_ON_PAGE_IDS = THROTTLED_TIME_ON_PAGE_IDS;

},{}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../helpers/vanillaHelper"));

var _TimerLogger = _interopRequireDefault(require("./timers/TimerLogger"));

var _SophistiTimer = _interopRequireDefault(require("./timers/SophistiTimer"));

var _ReporterHandler = _interopRequireDefault(require("./ReporterHandler"));

var _Cookies = _interopRequireDefault(require("../helpers/Cookies"));

var _ViewabilityTracker = _interopRequireDefault(require("./trackers/ViewabilityTracker"));

var _VideoTracker = _interopRequireDefault(require("./trackers/VideoTracker.js"));

var _ScrolledPastTracker = _interopRequireDefault(require("./trackers/ScrolledPastTracker"));

var _ScrollDepthManager = _interopRequireDefault(require("./trackers/ScrollDepthManager"));

var _constants = require("./timers/constants.js");

var _GAFrameTracker = _interopRequireDefault(require("./trackers/GAFrameTracker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UNIT_AUTO_HIDE_DELAY = 7 * 1000;
function Tracker(options) {
  this.demo = options.demo;
  this.inIframe = options.inIframe;
  this.inKnotchPage = options.inKnotchPage;
  this.inAdIframe = this.isInAdIframe();
  this.inGenerator = _vanillaHelper["default"].getScriptFlag('generator');
  this.mobile = _vanillaHelper["default"].hasClass(document.body, 'mobile');
  this.debug = _vanillaHelper["default"].isDebug();
  this.analysis = _vanillaHelper["default"].isAnalysis(); 

  this.units = {};
  this.queue = [];
  this.init();
}

Tracker.prototype = {
  isInAdIframe: function isInAdIframe() {
    var browserURL = _vanillaHelper["default"].getBrowserURL();

    if (browserURL) {
      var regex = /^(http|https):\/\/tpc\.googlesyndication/gm;
      return this.inIframe && regex.test(browserURL);
    }

    return false;
  },
  init: function init() {
    if (!this.demo) {
      this.reporter = new _ReporterHandler["default"]({
        inIframe: this.inIframe,
        debug: this.debug
      });
      this.timeOnPageTimer = new _SophistiTimer["default"]('time_on_page', _constants.LOG_OPTIONS_TIME_ON_PAGE);
      this.timeOnPageTimer.init();
      this.timeOnPageTimer.startTimer();
      this.viewability = new _ViewabilityTracker["default"](this);

      if (!this.inIframe && !this.inKnotchPage) {
        this.scrollDepth = new _ScrollDepthManager["default"]({
          tracker: this
        });
      }

      _vanillaHelper["default"].listen('message', window, this.handleEvents.bind(this));
    }
  },

  handleEvents: function handleEvents(event) {
    var _event$data = event.data,
        data = _event$data.data,
        eventType = _event$data.eventType,
        id = _event$data.id;

    switch (eventType) {
      case 'hideIframe':
        this.hideIframe(id);
        break;

      case 'knotchEvent':
        this.record(data);
        break;

      case 'knotchHandshake':
        this.reporter.init();
        break;

      case 'knotchThemeLoaded':
        this.updateWithTheme(event.data);
        break;

      case 'updateUnitData':
        this.connectKTag(event.data);
        break;

      default:
        break;
    }
  },
  connectKTag: function connectKTag(_ref) {
    var data = _ref.data;

    if (data && window.ktag && data.survey_id && data.render_id) {
      var payload = {
        msmt_survey_id: data.survey_id,
        msmt_render_id: data.render_id
      };

      if (data.visitor_id) {
        payload.msmt_visitor_id = data.visitor_id;
      }

      window.ktag.setDataLayer(payload);
    }
  },
  updateWithTheme: function updateWithTheme(_ref2) {
    var id = _ref2.id,
        theme = _ref2.theme;

    if (id && theme) {
      window.Knotch.units[id].DOMHandler.setThemeBackground(theme);
    }
  },

  thirdPartyEvent: function thirdPartyEvent(event) {
    if (!event || !event.name) {
      return window.Knotch.bugsnag.reportError(new Error('Invalid third party event data'), event);
    }

    window.Knotch.bugsnag.pushBreadCrumb({
      name: "Third party event sent: ".concat(event.name)
    });

    var data = _objectSpread({
      type: 'knotch_thirdparty'
    }, event);

    window.parent.postMessage(data, '*');
  },

  initTimeOnPage: function initTimeOnPage(id) {
    var unit = this.units[id]; 

    var _unit$data = unit.data,
        videoType = _unit$data.videoType,
        organizationId = _unit$data.organizationId;
    var dontLogTimeOnPage = videoType === 8;

    if (!unit.logTimeOnPage && !dontLogTimeOnPage) {
      var isThrottled = _constants.THROTTLED_TIME_ON_PAGE_IDS.indexOf(organizationId) !== -1;
      var logOptions = this.inAdIframe || isThrottled ? _constants.LOG_OPTIONS_TIME_ON_PAGE_THROTTLED : _constants.LOG_OPTIONS_TIME_ON_PAGE;
      window.Knotch.bugsnag.pushBreadCrumb({
        name: "adding time on page timer ".concat(this.inAdIframe ? 'ad unit' : ''),
        metaData: {
          maxTime: logOptions.maxTime
        }
      });
      unit.logTimeOnPage = new _TimerLogger["default"]({
        logOptions: logOptions,
        timer: this.timeOnPageTimer,
        event: 'time_on_page',
        tracker: this,
        id: id,
        autoStart: true
      });
    }
  },

  hideIframe: function hideIframe(id) {
    var unit = window.Knotch.units[id];

    if (unit.isVisible) {
      unit.DOMHandler.fadeOut();
    } else {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'invisible unit so nothing to fade out',
        type: 'ui'
      });
    }

    var vidTracker = this.units[id].videoTracker;
    this.thirdPartyEvent({
      knotchId: id,
      name: 'unit_hidden'
    });

    if (vidTracker !== undefined && typeof vidTracker.handler.dismiss === 'function') {
      vidTracker.handler.dismiss();
    }
  },

  record: function record(data) {
    var trackCurrentOnly = window.Knotch.trackCurrentOnly;

    if (!data) {
      return window.Knotch.bugsnag.reportError(new Error('missing data object'));
    }

    var surveyId = data.survey_id;

    if (this.demo || this.units[surveyId].disabled) {
      return;
    }

    if (trackCurrentOnly && trackCurrentOnly.initialUrlMap[surveyId] && !trackCurrentOnly.shouldSendEvent(surveyId)) {
      return window.Knotch.bugsnag.pushBreadCrumb({
        name: "TrackCurrentOnly: URL DOES NOT MATCH, we should NOT send event for ".concat(surveyId)
      });
    }

    var timer = this.timeOnPageTimer.getTimeOnCurrentPage().timeSpent;
    var event = data.type;
    this.reporter.sendUnitEvent({
      data: data,
      surveyId: surveyId,
      timer: timer
    }); 

    if (event === 'survey_response') {
      this.unitResponse(data);
    } else if (event === 'click_through_response') {
      this.units[surveyId].GAFrameTracker.postRBTGA(data);
    } else if (event === 'followup_response') {
      _Cookies["default"].set("followup:".concat(surveyId), data.answer_index, 7 * 24 * 3600);
    }
  },

  unitResponse: function unitResponse(data) {
    var _this = this;

    var knotchId = data.survey_id;

    if (this.units[knotchId].videoTracker !== undefined) {
      window.setTimeout(function () {
        _this.hideIframe(knotchId);

        _this.thirdPartyEvent({
          knotchId: knotchId,
          name: 'unit_hidden'
        });
      }, UNIT_AUTO_HIDE_DELAY);
    }

    this.setKnotchedCookie(data);
    this.units[knotchId].GAFrameTracker.postGA(data);
    this.thirdPartyEvent({
      knotchId: knotchId,
      name: 'unit_response'
    });
  },

  setKnotchedCookie: function setKnotchedCookie(data) {
    var cookieName = "knotched:".concat(data.survey_id);

    var optedOut = _Cookies["default"].get('optout');

    var knotchedCookie = _Cookies["default"].get(cookieName);

    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'Setting knotched cookie',
      metaData: data
    });

    if ((!knotchedCookie || Number.isNaN(knotchedCookie)) && !optedOut) {
      _Cookies["default"].set(cookieName, data.sentiment, 7 * 24 * 3600);
    }
  },

  addUnit: function addUnit(data) {
    var _this2 = this;

    if (this.analysis) {
      performance.mark('starting_tracker_addunit');
    }

    var id = data.public_id;
    this.units[id] = {
      data: data
    };
    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'Adding unit to the Tracker',
      metaData: {
        id: id
      }
    });

    if (!this.demo) {
      this.initTimeOnPage(id);
      this.reporter.initUnit(data);
      this.units[id].GAFrameTracker = new _GAFrameTracker["default"]({
        knotchId: id,
        debug: this.debug,
        accountId: data.organizationId
      });
      this.record({
        type: 'content_view',
        survey_id: id
      });

      if (!data.surveyless) {
        this.viewability.addUnit(id);
      }

      if (!this.inIframe && !this.inKnotchPage) {
        this.scrollDepth.addUnit(id);
      }

      if (this.inAdIframe) {
        this.scrolledPastTracker = new _ScrolledPastTracker["default"](function () {
          return _this2.disableUnit(id);
        });
      }
    }

    if (data.videoType !== null && !this.inGenerator) {
      this.units[id].videoTracker = new _VideoTracker["default"](data, this);
      this.units[id].isVideo = true;
    }

    if (this.analysis) {
      performance.mark('ending_tracker_addunit'); 

      performance.measure('tracker_addunit_method', 'starting_tracker_addunit', 'ending_tracker_addunit');
    }
  },

  removeUnit: function removeUnit(id) {
    var unit = this.units[id];

    if (!unit) {
      return;
    }

    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'Removing unit from tracker',
      metaData: {
        id: id
      }
    });

    if (unit.isVideo) {
      this.units[id].videoTracker.disabled = true;
    }

    this.units[id].GAFrameTracker.remove();
    delete this.units[id];

    if (unit.logTimeOnPage) {
      unit.logTimeOnPage.decayInterval.stopInterval();
      unit.logTimeOnPage.removeListeners();
    }

    if (this.scrollDepth) {
      this.scrollDepth.removeUnit(id);
    }

    if (this.scrolledPastTracker) {
      this.scrolledPastTracker = null;
    }

    if (this.viewability) {
      this.viewability.removeUnit(id);
    }
  },

  enableUnit: function enableUnit(id) {
    var unit = this.units[id];

    if (!unit) {
      return;
    }

    if (unit.disabled) {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'Enabling unit in tracker',
        metaData: {
          id: id
        }
      });
      unit.disabled = false;

      if (unit.logTimeOnPage) {
        unit.logTimeOnPage.decayInterval.startInterval();
      }

      if (unit.isVideo) {
        this.units[id].videoTracker.disabled = false;
      }
    }
  },

  disableUnit: function disableUnit(id) {
    var unit = this.units[id];

    if (!unit) {
      return;
    }

    if (unit.isVideo) {
      this.units[id].videoTracker.disabled = true;
    }

    if (!unit.disabled) {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'Disabling unit in tracker',
        metaData: {
          id: id
        }
      });
      unit.disabled = true;

      if (unit.logTimeOnPage) {
        unit.logTimeOnPage.decayInterval.stopInterval();
      }
    }
  }
};
var _default = Tracker;
exports["default"] = _default;

},{"../helpers/Cookies":21,"../helpers/vanillaHelper":25,"./ReporterHandler":28,"./timers/SophistiTimer":34,"./timers/TimerLogger":35,"./timers/constants.js":36,"./trackers/GAFrameTracker":38,"./trackers/ScrollDepthManager":39,"./trackers/ScrolledPastTracker":40,"./trackers/VideoTracker.js":42,"./trackers/ViewabilityTracker":43}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = require("../../../../tmp/config");

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GAFrameTracker = function () {
  function GAFrameTracker(options) {
    _classCallCheck(this, GAFrameTracker);

    this.iframe = this.setupIFrame(options);
    this.analysis = _vanillaHelper["default"].isAnalysis();
  }

  _createClass(GAFrameTracker, [{
    key: "setupIFrame",
    value: function setupIFrame(_ref) {
      var knotchId = _ref.knotchId,
          debug = _ref.debug,
          accountId = _ref.accountId,
          optedOut = _ref.optedOut;

      if (this.analysis) {
        performance.mark('starting_gaframe_setupIframe');
      }

      var iframe = document.createElement('iframe');
      iframe.name = "GAFrame_".concat(knotchId);
      iframe.title = "Knotch Analytics Frame";
      iframe.setAttribute('aria-hidden', 'true');
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.display = 'none';
      iframe.id = "GAFrame_".concat(knotchId);
      iframe.frameBorder = '0';
      iframe.src = "".concat(_config.knotchConfig.gaframe, "?id=").concat(knotchId, "&product_type=measurement&account_id=").concat(accountId);

      if (debug) {
        iframe.src += '&debug=true';
      }

      if (typeof optedOut !== 'undefined') {
        iframe.src += "&optout=".concat(optedOut ? 1 : 0);
      }

      _vanillaHelper["default"].ready(function () {
        document.body.appendChild(iframe);
      });

      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'Added GAFrame',
        metaData: {
          id: knotchId
        }
      });

      if (this.analysis) {
        performance.mark('ending_gaframe_setupIframe'); 

        performance.measure('gaframe_setupIframe_method', 'starting_gaframe_setupIframe', 'ending_gaframe_setupIframe');
      }

      return iframe;
    }
  }, {
    key: "postGA",
    value: function postGA(data) {
      data.eventType = 'response';
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'posting knotch response to GAFrame',
        metaData: data
      });

      if (!data || isNaN(data.sentiment)) {
        var e = new Error('Missing Google Analytics Sentiment data');
        return window.Knotch.bugsnag.reportError(e, data);
      }

      if (this.iframe && this.iframe.contentWindow) {
        this.iframe.contentWindow.postMessage(data, '*');
      } else {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'Missing iframe',
          metaData: {
            id: data.survey_id
          }
        });
      }
    }
  }, {
    key: "postRBTGA",
    value: function postRBTGA(data) {
      data.eventType = 'RBT';
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'Posting RBT to GAFrame',
        metaData: data
      });

      if (!data.type) {
        return window.Knotch.bugsnag.reportError(new Error('Missing Google Analytics RBT data'), data);
      }

      if (this.iframe && this.iframe.contentWindow) {
        this.iframe.contentWindow.postMessage(data, '*');
      } else {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'Missing iframe',
          metaData: {
            id: data.survey_id
          }
        });
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      _vanillaHelper["default"].removeNode(this.iframe);
    }
  }, {
    key: "setOptout",
    value: function setOptout(value) {
      this.iframe.contentWindow.postMessage({
        eventType: 'setOptout',
        optedOut: value
      }, '*');
    }
  }]);

  return GAFrameTracker;
}();

var _default = GAFrameTracker;
exports["default"] = _default;

},{"../../../../tmp/config":55,"../../helpers/vanillaHelper":25}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("@knotchlabs/web-tag-libs/dist/index.cjs");

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ScrollDepthManager = function () {
  function ScrollDepthManager(_ref) {
    var tracker = _ref.tracker;

    _classCallCheck(this, ScrollDepthManager);

    this.surveyIds = [];
    this.tracker = tracker;
  }

  _createClass(ScrollDepthManager, [{
    key: "handleEvent",
    value: function handleEvent(event) {
      var _this = this;

      this.surveyIds.forEach(function (surveyId) {
        var payload = _vanillaHelper["default"].extend(event, {
          survey_id: surveyId
        });

        _this.tracker.record(payload);
      });
    }
  }, {
    key: "addUnit",
    value: function addUnit(id) {
      var _this2 = this;

      this.surveyIds.push(id); 

      if (!this.scrollDepthTracker) {
        this.scrollDepthTracker = new _index.ScrollDepthTracker({
          callback: function callback(e) {
            _this2.handleEvent(e);
          }
        });
      }
    }
  }, {
    key: "removeUnit",
    value: function removeUnit(id) {
      var index = this.surveyIds.indexOf(id);
      this.surveyIds.splice(index, 1);
    }
  }]);

  return ScrollDepthManager;
}();

var _default = ScrollDepthManager;
exports["default"] = _default;

},{"../../helpers/vanillaHelper":25,"@knotchlabs/web-tag-libs/dist/index.cjs":19}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ScrolledPastTracker(callback) {
  this.callback = callback;
  this.inView = false;
  this.hasViewed = false;
  this.intObs = null;
  this.checks = [];
  this.init();
}

ScrolledPastTracker.prototype = {
  init: function init() {
    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
      this.intervalCheck = window.setInterval(this.addObs.bind(this), 100);
    }
  },
  addObs: function addObs() {
    var _this = this;

    if (document.body) {
      if (this.intObs) {
        this.intObs.unobserve(document.body);
      } 


      this.intObs = new IntersectionObserver(function (entries) {
        return _this.checkViewability(entries[0]);
      }, {
        threshold: 0.5
      });
      this.intObs.observe(document.body);
    }
  },
  isInView: function isInView() {
    return this.inView;
  },
  stop: function stop() {
    clearInterval(this.intervalCheck);
  },
  checkViewability: function checkViewability(entry) {
    var inView = entry.intersectionRatio >= 0.1;

    try {
      if (inView instanceof Error) {
        this.stop();
      } else {
        this.checks.push(inView);

        if (this.checks.length > 10) {
          this.checks.shift();
        }

        if (this.checks.length === 10) {
          var temp = true;

          for (var i = 0; i < 10; i++) {
            temp = temp && this.checks[i];
          }

          this.viewed = temp;
        } 


        if (this.viewed) {
          this.hasViewed = true; 
        } else if (!this.viewed && this.hasViewed) {
          window.Knotch.bugsnag.pushBreadCrumb({
            name: "Unit has been scrolled past"
          });
          this.intObs.unobserve(document.body);
          this.callback();
          this.stop();
        }
      }
    } catch (error) {
      window.Knotch.bugsnag.reportError(error);
    }
  }
};
var _default = ScrolledPastTracker;
exports["default"] = _default;

},{}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TrackCurrentOnlyManager = function () {
  function TrackCurrentOnlyManager(_ref) {
    var knotch = _ref.knotch;

    _classCallCheck(this, TrackCurrentOnlyManager);

    this.knotch = knotch;
    this.initialUrlMap = {};
    this.checkInfiniteScroll();
  }

  _createClass(TrackCurrentOnlyManager, [{
    key: "checkInfiniteScroll",
    value: function checkInfiniteScroll() {
      var _this = this;

      this.checkURL = window.setInterval(function () {
        for (var surveyId in _this.initialUrlMap) {
          _this.handleUnit(surveyId);
        }
      }, 2000);
      window.setTimeout(function () {
        clearInterval(_this.checkURL);
      }, 30 * 60 * 1000);
    } 
  }, {
    key: "shouldSendEvent",
    value: function shouldSendEvent(id) {
      var currentUrl = _vanillaHelper["default"].getBrowserURL();

      this.handleUnit(id);

      if (currentUrl === this.initialUrlMap[id]) {
        return true;
      }

      return false;
    }
  }, {
    key: "handleUnit",
    value: function handleUnit(id) {
      var initialURL = this.initialUrlMap[id];

      var currentURL = _vanillaHelper["default"].getBrowserURL();

      var disabled = this.knotch.units[id].disabled;

      if (currentURL !== initialURL && disabled !== true) {
        this.knotch.bugsnag.pushBreadCrumb({
          name: "TrackCurrentOnly: disabling unit ".concat(id)
        });
        this.knotch.disableUnit(id);
      } else if (currentURL === initialURL && disabled === true) {
        this.knotch.bugsnag.pushBreadCrumb({
          name: "TrackCurrentOnly: enabling unit ".concat(id)
        });
        this.knotch.enableUnit(id);
      }
    }
  }, {
    key: "addUnit",
    value: function addUnit(id) {
      var initialURL = _vanillaHelper["default"].getBrowserURL();

      this.initialUrlMap[id] = initialURL;
    }
  }]);

  return TrackCurrentOnlyManager;
}();

var _default = TrackCurrentOnlyManager;
exports["default"] = _default;

},{"../../helpers/vanillaHelper":25}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BrightcoveHandler = _interopRequireDefault(require("../video/BrightcoveHandler.js"));

var _FAVEHandler = _interopRequireDefault(require("../video/FAVEHandler.js"));

var _HTML5VidHandler = _interopRequireDefault(require("../video/HTML5VidHandler.js"));

var _JWPlayerHandler = _interopRequireDefault(require("../video/JWPlayerHandler.js"));

var _SMPlayerHandler = _interopRequireDefault(require("../video/SMPlayerHandler.js"));

var _KalturaHandler = _interopRequireDefault(require("../video/KalturaHandler.js"));

var _VimeoHandler = _interopRequireDefault(require("../video/VimeoHandler.js"));

var _VPAIDHandler = _interopRequireDefault(require("../video/VPAIDHandler.js"));

var _WistiaHandler = _interopRequireDefault(require("../video/WistiaHandler.js"));

var _YoutubeHandler = _interopRequireDefault(require("../video/YoutubeHandler.js"));

var _TimerLogger = _interopRequireDefault(require("../timers/TimerLogger.js"));

var _SophistiTimer = _interopRequireDefault(require("../timers/SophistiTimer.js"));

var _constants = require("../timers/constants.js");

var _Cookies = _interopRequireDefault(require("../../helpers/Cookies.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VIDEO_HANDLERS = {
  0: _BrightcoveHandler["default"],
  1: _YoutubeHandler["default"],
  2: _VimeoHandler["default"],
  5: _HTML5VidHandler["default"],
  6: _KalturaHandler["default"],
  7: _JWPlayerHandler["default"],
  8: _VPAIDHandler["default"],
  9: _WistiaHandler["default"],
  10: _FAVEHandler["default"],
  11: _SMPlayerHandler["default"]
};
function VideoTracker(unit, tracker) {
  this.unit = unit;
  this.finished = false;
  this.knotched = _Cookies["default"].get("knotched:".concat(unit.public_id)) !== null;
  this.duration = null;
  this.tracker = tracker;
  this.vidTimer = new _SophistiTimer["default"]('time_playing_video', _constants.LOG_OPTIONS_TIME_PLAYING_VIDEO);
  this.videoType = unit.videoType;
  this.disabled = false;
  this.init();
  var handler = VIDEO_HANDLERS[this.videoType];

  if (handler) {
    this.handler = new handler(this, {
      url: unit.videoUrl,
      surveyId: unit.public_id
    });
  } else {
    var err = new Error("There is no video handler available for this video type: ".concat(unit.videoType));
    return window.Knotch.bugsnag.reportError(err);
  }
}
VideoTracker.prototype.init = function () {
  var autoplay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (this.disabled) return;
  this.vidTimer.init();
  var logOptions = _constants.LOG_OPTIONS_TIME_PLAYING_VIDEO;

  if (!this.logVideoTimer) {
    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'initializing video timer',
      metaData: {
        autoplay: autoplay
      }
    });
    this.logVideoTimer = new _TimerLogger["default"]({
      timer: this.vidTimer,
      event: 'time_playing_video',
      tracker: this.tracker,
      id: this.unit.public_id,
      logOptions: logOptions,
      autoStart: autoplay
    });
  }
};
VideoTracker.prototype.play = function () {
  if (this.disabled) return;

  if (!this.logVideoTimer.started && !this.finished) {
    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'video played'
    });
    this.logVideoTimer.startTimer();
  }
};

VideoTracker.prototype.pause = function () {
  if (this.disabled) return;

  if (!this.finished) {
    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'video paused'
    });
    this.logVideoTimer.stopTimer();
  }
};

VideoTracker.prototype.finish = function () {
  var id = this.unit.public_id;
  this.knotched = _Cookies["default"].get("knotched:".concat(id)) !== null;
  window.Knotch.bugsnag.pushBreadCrumb({
    name: "video finished, knotched: ".concat(this.knotched, ", finished: ").concat(this.finished, ", disabled: ").concat(this.disabled)
  });
  if (this.disabled) return; 

  if (!this.finished) {
    this.logVideoTimer.stopTimer();
    var payload = {
      survey_id: id,
      type: 'video_completed'
    };

    if (this.duration && this.duration > 0) {
      payload.video_duration = this.duration;
    }

    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'recording video completed'
    });
    this.tracker.record(payload);
  } 


  if (!this.knotched && !this.unit.surveyless) {
    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'fading in survey',
      type: 'ui'
    });
    window.Knotch.units[id].DOMHandler.fadeIn();
    this.tracker.thirdPartyEvent({
      knotchId: id,
      name: 'unit_shown'
    });
  } else {
    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'not fading in survey because already knotched or unit is surveyless',
      type: 'ui'
    });
  }

  this.tracker.thirdPartyEvent({
    knotchId: id,
    name: 'video_finished',
    unitHidden: this.knotched
  });
  this.finished = true;
}; 


VideoTracker.prototype.setMaxTime = function (timeInMilliseconds) {
  if (this.disabled) return; 

  if (timeInMilliseconds < 1000) {
    var err = new Error("Improperly set maxTime: ".concat(timeInMilliseconds, "ms for videoType ").concat(this.videoType));
    return window.Knotch.bugsnag.reportError(err);
  }

  if (this.logVideoTimer) {
    window.Knotch.bugsnag.pushBreadCrumb({
      name: "Setting max time to ".concat(timeInMilliseconds, "ms for videoType ").concat(this.videoType)
    });
    this.logVideoTimer.setMaxDuration(timeInMilliseconds);
  } else {
    var _err = new Error("LogVideoTimer is undefined");

    return window.Knotch.bugsnag.reportError(_err);
  }
};
var _default = VideoTracker;
exports["default"] = _default;

},{"../../helpers/Cookies.js":21,"../timers/SophistiTimer.js":34,"../timers/TimerLogger.js":35,"../timers/constants.js":36,"../video/BrightcoveHandler.js":44,"../video/FAVEHandler.js":45,"../video/HTML5VidHandler.js":46,"../video/JWPlayerHandler.js":47,"../video/KalturaHandler.js":48,"../video/SMPlayerHandler.js":49,"../video/VPAIDHandler.js":50,"../video/VimeoHandler.js":51,"../video/WistiaHandler.js":52,"../video/YoutubeHandler.js":53}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ViewabilityTracker(tracker) {
  this.ids = [];
  this.tracker = tracker;
  this.checks = {};
  this.viewed = {};
  this.intervalCheck = window.setInterval(this.check.bind(this), 100);
}

ViewabilityTracker.prototype = {
  check: function check() {
    var pageHeight = window.innerHeight;

    for (var i = 0; i < this.ids.length; i++) {
      var id = this.ids[i];
      var iframe = document.getElementById("knotchframe_".concat(id)); 

      if (!iframe) {
        this.ids.splice(i, 1);
        continue;
      } 


      if (!this.checks[id]) this.checks[id] = [];
      if (this.checks[id].length > 10) this.checks[id].shift();
      var rect = document.getElementById("knotchframe_".concat(id)).getBoundingClientRect(); 

      var frameY = rect.top + rect.height * 0.5;
      var inView = frameY > 0 && frameY < pageHeight;
      this.checks[id].push(inView);
      this.isViewed(id);
    }
  },

  isViewed: function isViewed(id) {
    var temp = true;

    for (var i = 0; i < 10; i++) {
      temp = temp && this.checks[id][i];
    }

    this.viewed[id] = temp;

    if (this.viewed[id]) {
      this.tracker.record({
        type: 'viewability',
        survey_id: id,
        viewed: true,
        viewability_type: 'jstag'
      });
      var idIndex = this.ids.indexOf(id);
      this.ids.splice(idIndex, 1);

      if (!this.ids.length) {
        window.clearInterval(this.intervalCheck);
      }
    }
  },

  addUnit: function addUnit(id) {
    this.ids.push(id);
    this.tracker.record({
      type: 'viewability',
      survey_id: id,
      viewed: false,
      viewability_type: 'jstag'
    });

    if (!this.intervalCheck) {
      this.intervalCheck = window.setInterval(this.check.bind(this), 100);
    }
  },

  get: function get(id) {
    return !!this.viewed[id];
  },
  removeUnit: function removeUnit(id) {
    var idIndex = this.ids.indexOf(id);

    if (idIndex !== -1) {
      this.ids.splice(idIndex, 1);
    }
  }
};
var _default = ViewabilityTracker;
exports["default"] = _default;

},{}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function BrightcoveHandler(videoTracker, options) {
  this.videoTracker = videoTracker;
  this.url = options.url;
  this.surveyId = options.surveyId;
  this.node = document.querySelector("video[data-knotch=\"".concat(this.surveyId, "\"]")) || document.querySelector("iframe[data-knotch=\"".concat(this.surveyId, "\"]")); 

  if (!_vanillaHelper["default"].isTopFrame() && this.url) {
    this.videoProperties = this.getVideoProperties(this.url);
  } else {
    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'not iframe integration or URL not provided - unable to parse necessary IDs'
    });
  }

  this.loadAPI(options);
}

BrightcoveHandler.prototype = {
  interceptEvents: function interceptEvents() {
    var _this = this;

    var videoTracker = this.videoTracker;
    this.player.on('loadedmetadata', function () {
      if (_this.autoplay) {
        videoTracker.init(_this.autoplay);
        videoTracker.play();
      }
    });
    this.player.on('timeupdate', function () {
      return _this.progressHandler(event);
    });
    this.player.on('ended', function () {
      return videoTracker.finish();
    });
    this.player.on('play', function () {
      return videoTracker.play();
    });
    this.player.on('pause', function () {
      return videoTracker.pause();
    });

    if (this.node.duration) {
      var durationInMs = Math.floor(this.node.duration * 1000);
      this.videoTracker.duration = durationInMs;
      this.videoTracker.setMaxTime(durationInMs);
    }
  },
  progressHandler: function progressHandler() {
    this.videoTracker.play(); 

    if (this.videoTracker.knotched) return;

    if (this.node.duration && !this.videoTracker.duration) {
      var durationInMs = Math.floor(this.node.duration * 1000);
      this.videoTracker.duration = durationInMs;
      this.videoTracker.setMaxTime(durationInMs);
    }

    if (!this.videoTracker.logVideoTimer) {
      this.videoTracker.init(this.autoplay);
    }
  },
  loadAPI: function loadAPI() {
    if (window.videojs) {
      this.init();
    } else {
      this.injectBrightcove();
    }
  },

  injectBrightcove: function injectBrightcove() {
    var _this2 = this;

    var tag = document.createElement('script'); 

    if (!this.videoProperties) this.videoProperties = this.getVideoProperties(this.url); 

    if (!this.videoProperties) {
      window.Knotch.bugsnag.reportError(new Error("".concat(this.surveyId, ": can't get Brightcove video propreties")));
    }

    var _this$videoProperties = this.videoProperties,
        accountId = _this$videoProperties.accountId,
        playerId = _this$videoProperties.playerId,
        videoId = _this$videoProperties.videoId;
    tag.src = "//players.brightcove.net/".concat(accountId, "/").concat(playerId, "_default/index.js");
    document.head.appendChild(tag);
    var videoContainer = document.getElementById('knotchVideo');
    var video = document.createElement('video');
    video.setAttribute('data-video-id', videoId);
    video.setAttribute('data-account', accountId);
    video.setAttribute('data-player', playerId);
    video.setAttribute('data-embed', 'default');
    video.setAttribute('class', 'video-js');
    video.setAttribute('data-application-id', '');
    video.setAttribute('controls', '');
    video.style.width = '100%';
    video.style.height = '100%';
    videoContainer.appendChild(video);
    this.node = video;

    tag.onload = function () {
      return _this2.init();
    };
  },

  init: function init() {
    if (this.node) {
      this.player = window.videojs(this.node);
      this.autoplay = this.player.autoplay();
      this.interceptEvents();
    } else {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'Brightcove video player node is missing'
      });
    }
  },

  getVideoProperties: function getVideoProperties() {
    if (!this.url) return;
    var match = this.url.match(/(?:https?:\/\/)?(?:www\.)?players.brightcove.net\/(\d+)\/([A-Za-z0-9\-\_]+)\/?index.html\?videoId=(\d+)/);

    if (match) {
      return {
        accountId: match[1],
        playerId: match[2].split('_')[0],
        videoId: match[3]
      };
    }

    window.Knotch.bugsnag.pushBreadCrumb({
      name: 'URL does not provide necessary IDs'
    });
  }
};
var _default = BrightcoveHandler;
exports["default"] = _default;

},{"../../helpers/vanillaHelper":25}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FAVEHandler = function () {
  function FAVEHandler(videoTracker, options) {
    _classCallCheck(this, FAVEHandler);

    this.videoTracker = videoTracker;
    this.surveyId = options.surveyId;
    this.node = document.querySelector("[data-knotch=\"".concat(options.surveyId, "\"]"));
    this.init();
  }
  _createClass(FAVEHandler, [{
    key: "init",
    value: function init() {
      var _this = this;

      var checkForPlayer = setInterval(function () {
        var playerExists = window.FAVE && Object.keys(window.FAVE.player.instances).length > 0;
        if (!playerExists) return window.Knotch.bugsnag.pushBreadCrumb({
          name: 'FAVE player not found',
          type: 'ui'
        });
        _this.playerId = document.querySelector('div[data-knotch]').id;
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'FAVE player found',
          type: 'ui'
        });

        _this.interceptEvents();

        clearInterval(checkForPlayer);
      }, 500);
      window.setTimeout(function () {
        if (!window.FAVE || Object.keys(window.FAVE.player.instances).length <= 0) {
          window.Knotch.bugsnag.reportError(new Error('FAVE player not found within one minute'));
        }

        clearInterval(checkForPlayer);
      }, 60 * 1000);
    }
  }, {
    key: "interceptEvents",
    value: function interceptEvents() {
      var _this2 = this;

      var videoTracker = this.videoTracker;
      var instances = window.FAVE.player.instances;
      var player = instances[this.playerId].getPlayer();
      player.addEventListener('playing', function () {
        videoTracker.play();
      });
      player.addEventListener('pause', function () {
        videoTracker.pause();
      });
      player.addEventListener('ended', function () {
        if (!videoTracker.finished) {
          videoTracker.finish();
        }
      });
      player.addEventListener('timeupdate', function () {
        var currentTime = player.currentTime; 

        if (!_this2.videoTracker.logVideoTimer.started && currentTime > 0) {
          _this2.videoTracker.play();
        }

        if (currentTime >= player.duration - 2 && !videoTracker.finished) {
          player.pause();
          videoTracker.finish(); 

          if (!_this2.timeoutUnit) {
            _this2.timeoutUnit = window.setTimeout(function () {
              window.Knotch.tracker.hideIframe(_this2.surveyId);
              player.play();
            }, 10000);
          }
        }
      });
    }
  }]);

  return FAVEHandler;
}();

var _default = FAVEHandler;
exports["default"] = _default;

},{}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SECOND_BETWEEN_LOOPS = 10 * 1000;
function HTML5VidHandler(videoTracker, options) {
  this.videoTracker = videoTracker;
  this.DOMHandler = window.Knotch.units[options.surveyId].DOMHandler;
  this.options = options;
  this.node = document.querySelector("video[data-knotch=\"".concat(options.surveyId, "\"]"));
  this.looped = this.isLooping();
  this.autoplay = this.node.autoplay;
  this.interceptEvents();
}

HTML5VidHandler.prototype = {
  interceptEvents: function interceptEvents() {
    var _this = this;

    var videoTracker = this.videoTracker;

    _vanillaHelper["default"].onEvent('loadedmetadata', this.node, function () {
      if (_this.autoplay) {
        videoTracker.init(_this.autoplay);
        videoTracker.play();
      }
    });

    _vanillaHelper["default"].onEvent('timeupdate', this.node, function (event) {
      return _this.progressHandler(event);
    });

    _vanillaHelper["default"].onEvent('play', this.node, function () {
      return videoTracker.play();
    });

    _vanillaHelper["default"].onEvent('pause', this.node, function () {
      return videoTracker.pause();
    }); 


    if (this.looped) {
      this.DOMHandler.onIframeEvent('mouseenter', function () {
        clearTimeout(_this.backToLoopTimeOut);
        _this.backToLoopTimeOut = null;
      }); 

      this.DOMHandler.onIframeEvent('mouseleave', function () {
        if (_this.videoTracker.finished) {
          _this.backToLoopTimeOut = setTimeout(function () {
            return _this.backToLoop();
          }, SECOND_BETWEEN_LOOPS);
        }
      });
    } else {
      _vanillaHelper["default"].onEvent('ended', this.node, function () {
        return videoTracker.finish();
      });
    }
  },

  progressHandler: function progressHandler() {
    var _this2 = this;

    this.videoTracker.play(); 

    if (this.videoTracker.knotched) return;

    if (this.node.duration && !this.videoTracker.duration) {
      var durationInMs = Math.floor(this.node.duration * 1000);
      this.videoTracker.duration = durationInMs;
      this.videoTracker.setMaxTime(durationInMs);
    }

    if (!this.videoTracker.logVideoTimer) {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'initializing HTML5 videoTracker',
        autoplay: this.autoplay
      });
      this.videoTracker.init(this.autoplay);
    } 


    var _this$node = this.node,
        currentTime = _this$node.currentTime,
        duration = _this$node.duration;

    if (Number.isNaN(currentTime) || Number.isNaN(duration)) {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'HTML5 video not ready yet',
        surveyId: this.options.surveyId,
        currentTime: currentTime,
        duration: duration
      });
      return;
    }

    var almostFinished = currentTime > duration - 0.5; 
    if (this.looped && almostFinished && !this.backToLoopTimeOut) {
      this.node.pause();
      this.videoTracker.finish();
      this.backToLoopTimeOut = setTimeout(function () {
        return _this2.backToLoop();
      }, SECOND_BETWEEN_LOOPS); 
    } else if (!almostFinished && this.backToLoopTimeOut) {
      clearTimeout(this.backToLoopTimeOut);
      this.backToLoopTimeOut = null;
    }
  },
  backToLoop: function backToLoop() {
    var _this3 = this;

    setTimeout(function () {
      return _this3.DOMHandler.fadeOut();
    }, 500);
    this.node.play(); 

    clearTimeout(this.backToLoopTimeOut);
    this.backToLoopTimeOut = null;
  },

  isLooping: function isLooping() {
    if (this.node) {
      if (this.node._isLooping) {
        return this.node._isLooping;
      } 


      if (this.node.hasAttribute('x-celtra-media')) {
        return true;
      }

      return this.node.loop;
    }

    return window.Knotch.bugsnag.reportError(new Error('HTML5 video missing'));
  },

  dismiss: function dismiss() {
    if (this.looped) {
      this.backToLoop();
    }
  }
};
var _default = HTML5VidHandler;
exports["default"] = _default;

},{"../../helpers/vanillaHelper":25}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function JWPlayerHandler(videoTracker, options) {
  this.videoTracker = videoTracker;
  this.node = document.querySelector("video[data-knotch=\"".concat(options.surveyId, "\"]"));
  this.interceptEvents();
}

JWPlayerHandler.prototype = {
  interceptEvents: function interceptEvents() {
    var videoTracker = this.videoTracker;
    var player = window.jwplayer && window.jwplayer();
    if (!player) return;
    var duration = player.getDuration();

    if (duration) {
      var durationInMs = Math.floor(duration * 1000);
      this.videoTracker.duration = durationInMs;
      this.videoTracker.setMaxTime(durationInMs);
    } 


    var initialState = player.getState();

    if (initialState === 'playing') {
      if (!this.videoTracker.logVideoTimer) {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'initializing JWPlayer videoTracker'
        });
        this.videoTracker.init(true);
      }

      videoTracker.play();
    }

    player.on('playAttempt', function () {
      videoTracker.play();
    });
    player.on('complete', function () {
      if (videoTracker.finished) return;
      videoTracker.finish();
    });
    player.on('beforeComplete', function () {
      if (videoTracker.finished) return;
      videoTracker.finish();
    });
    player.on('time', function (e) {
      if (e.currentTime > e.duration - 1 && !videoTracker.finished) {
        player.pause();
        videoTracker.finish();
      }
    });
    player.on('play', function () {
      videoTracker.play();
    });
    player.on('pause', function () {
      videoTracker.pause();
    });
  },
  dismiss: function dismiss() {
    var player = window.jwplayer && window.jwplayer();
    if (!player) return;
    player.play();
    this.videoTracker.finished = true;
  }
};
var _default = JWPlayerHandler;
exports["default"] = _default;

},{}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function KalturaHandler(videoTracker, options) {
  this.node = document.querySelector("[data-knotch=\"".concat(options.surveyId, "\"]"));
  this.videoTracker = videoTracker;
  this.init();
  this.initialized = false;
  this.timeoutUnit = null;
  this.duration = null;
}

KalturaHandler.prototype = {
  init: function init() {
    var _this = this;

    var checkforKWidget = setInterval(function () {
      if (window.kWidget) {
        clearInterval(checkforKWidget);
        window.kWidget.addReadyCallback(function (id) {
          return _this.bindEvents(id);
        });
      }
    }, 500);
    window.setTimeout(function () {
      return clearInterval(checkforKWidget);
    }, 60 * 1000);
  },

  bindEvents: function bindEvents(id) {
    var _this2 = this;

    if (this.initialized) return;
    this.initialized = true;
    var kdp = document.getElementById(id);
    kdp.kBind('playerReady', function () {
      return _this2.videoTracker.init();
    });
    kdp.kBind('playerPlayed', function () {
      return _this2.videoTracker.play();
    });
    kdp.kBind('playerPaused', function () {
      return _this2.videoTracker.pause();
    });
    kdp.kBind('playerPlayEnd', function () {
      return _this2.videoTracker.finish();
    });
    kdp.kBind('playerUpdatePlayhead', function (playhead) {
      if (!_this2.duration) {
        _this2.duration = kdp.evaluate('{mediaProxy.entry.duration}');
        var durationInMs = Math.floor(_this2.duration * 1000);
        _this2.videoTracker.duration = durationInMs;

        _this2.videoTracker.setMaxTime(durationInMs);
      } 


      if (!_this2.videoTracker.logVideoTimer.started && playhead > 0) {
        _this2.videoTracker.play();
      } 


      if (_this2.duration && playhead > _this2.duration - 2 && !_this2.videoTracker.finished) {
        _this2.videoTracker.finish();

        kdp.sendNotification('doPause'); 

        if (!_this2.timeoutUnit) {
          _this2.timeoutUnit = window.setTimeout(function () {
            window.Knotch.tracker.hideIframe({
              data: {
                id: _this2.videoTracker.unit.public_id
              }
            });
            kdp.sendNotification('doPlay');
          }, 10 * 1000);
        }
      }
    }); 

    _vanillaHelper["default"].listen('message', window, function (event) {
      if (event.data && event.data.eventType === 'hideIframe') {
        window.clearTimeout(_this2.timeoutUnit);
        kdp.sendNotification('doPlay');
      }
    });
  }
};
var _default = KalturaHandler;
exports["default"] = _default;

},{"../../helpers/vanillaHelper":25}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SM_URL = 'https://api.sele.co';
var SMPlayerHandler = function () {
  function SMPlayerHandler(videoTracker, options) {
    _classCallCheck(this, SMPlayerHandler);

    this.videoTracker = videoTracker;
    this.node = document.querySelector("[data-knotch=\"".concat(options.surveyId, "\"]"));
    this.waitForAPI();
  }

  _createClass(SMPlayerHandler, [{
    key: "waitForAPI",
    value: function waitForAPI() {
      var _this = this;

      var checkForSmPlayer = setInterval(function () {
        var smAPI = window.SM;

        if (smAPI) {
          clearInterval(checkForSmPlayer);

          _this.init();

          _this.videoTracker.init();
        }
      }, 500);
      window.setTimeout(function () {
        clearInterval(checkForSmPlayer);
        return window.Knotch.bugsnag.reportError(new Error('SM API not found'));
      }, 60 * 1000);
    }
  }, {
    key: "init",
    value: function init() {
      var smIframe = document.querySelector('.sm-iframe');

      if (!smIframe) {
        return window.Knotch.bugsnag.pushBreadCrumb({
          name: 'sm iframe not found',
          type: 'video_integration'
        });
      }

      var src = smIframe.getAttribute('src');

      if (_vanillaHelper["default"].stringContains(src, 'autoStart=true')) {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'autoplaying sm player',
          type: 'video_integration'
        });
        this.videoTracker.play();
      } else {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'sm player either not autoplay, or invalid search strings',
          type: 'video_integration'
        });
      }

      this.interceptEvents();
    }
  }, {
    key: "interceptEvents",
    value: function interceptEvents() {
      var videoTracker = this.videoTracker;

      _vanillaHelper["default"].listen('message', window, function (e) {
        if (e.origin === SM_URL) {
          var data = JSON.parse(e.data);

          if (!data) {
            return window.Knotch.bugsnag.pushBreadCrumb({
              name: 'no sm player data',
              type: 'video_integration'
            });
          }

          switch (data.type) {
            case 'play':
              videoTracker.play();
              break;

            case 'pause':
              videoTracker.pause();
              break;

            case 'ended':
              if (!videoTracker.finished) {
                videoTracker.finish();
              }

              break;

            default:
              break;
          }
        }
      });
    }
  }]);

  return SMPlayerHandler;
}();

var _default = SMPlayerHandler;
exports["default"] = _default;

},{"../../helpers/vanillaHelper":25}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function VPAIDHandler(videoTracker, options) {
  this.options = options;
  this.videoTracker = videoTracker;
}

VPAIDHandler.prototype = {
  dismiss: function dismiss() {
    console.log('placeholder function');
  }
};
var _default = VPAIDHandler;
exports["default"] = _default;

},{}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var VimeoHandler = function () {
  function VimeoHandler(videoTracker, options) {
    _classCallCheck(this, VimeoHandler);

    this.videoTracker = videoTracker;
    this.url = options.url;
    this.surveyId = options.surveyId;
    this.node = document.querySelector("[data-knotch=\"".concat(options.surveyId, "\"]"));
    this.loadAPI();
  }

  _createClass(VimeoHandler, [{
    key: "loadAPI",
    value: function loadAPI() {
      var _this = this;

      if (typeof window.Vimeo === 'undefined') {
        var tag = document.createElement('script');
        tag.src = 'https://player.vimeo.com/api/player.js';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        tag.onload = function () {
          _this.init();
        };
      } else {
        this.init();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.player = new window.Vimeo.Player(this.node, {
        id: this.getVimeoId(),
        transparent: false
      });
      this.player.ready().then(function () {
        _this2.bindListeners();

        if (window.Knotch.inIframe || _vanillaHelper["default"].inKnotchPage()) {
          _vanillaHelper["default"].extend(_this2.player.element.style, {
            width: '100%',
            height: '100%'
          });
        } 


        _this2.player.getDuration().then(function (duration) {
          var durationInMs = Math.floor(duration * 1000);
          _this2.videoTracker.duration = durationInMs;

          _this2.videoTracker.setMaxTime(durationInMs);
        });
      })["catch"](function (e) {
        window.Knotch.bugsnag.reportError(e);
      });
    }
  }, {
    key: "bindListeners",
    value: function bindListeners() {
      var _this3 = this;

      this.player.on('play', function () {
        return _this3.videoTracker.play();
      });
      this.player.on('pause', function () {
        return _this3.handlePauseAtEnd();
      });
      this.player.on('error', function (ev) {
        return _this3.handleError(ev);
      });
      this.player.on('ended', function () {
        return _this3.videoTracker.finish();
      });
    }
  }, {
    key: "handlePauseAtEnd",
    value: function handlePauseAtEnd() {
      var _this4 = this;

      this.player.getCurrentTime().then(function (s) {
        if (Math.floor(s) === _this4.videoTracker.duration / 1000) {
          _this4.videoTracker.finish();
        } else {
          _this4.videoTracker.pause();
        }
      });
    }
  }, {
    key: "handleError",
    value: function handleError(event) {
      if (event && event.name) {
        switch (event.name) {
          case 'NotAllowedError':
            window.Knotch.bugsnag.pushBreadCrumb({
              name: 'error: NotAllowedError occured'
            });
            break;

          case 'playInterrupted':
            window.Knotch.bugsnag.pushBreadCrumb({
              name: 'error: playInterrupted occured'
            });
            break;

          default:
            break;
        }
      } else {
        window.Knotch.bugsnag.reportError(new Error('Vimeo integration error'), {
          data: event
        });
      }
    }
  }, {
    key: "getVimeoId",
    value: function getVimeoId() {
      var match = this.url && this.url.match(/(?:https?:\/\/)?(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/);
      return match ? match[3] || match[1] : null;
    }
  }]);

  return VimeoHandler;
}();

var _default = VimeoHandler;
exports["default"] = _default;

},{"../../helpers/vanillaHelper.js":25}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var WistiaHandler = function () {
  function WistiaHandler(videoTracker, _ref) {
    var surveyId = _ref.surveyId;

    _classCallCheck(this, WistiaHandler);

    this.videoTracker = videoTracker;
    this.surveyId = surveyId;
    this.node = document.querySelector("[data-knotch=\"".concat(surveyId, "\"]"));
    this.id = this.extractId();

    if (this.id) {
      this.waitForAPI(this.id);
    }
  }
  _createClass(WistiaHandler, [{
    key: "extractId",
    value: function extractId() {
      var prefix = 'wistia_async_';
      var id = null;

      try {
        if (this.node.tagName === 'VIDEO') {
          var node = this.node;

          while (node && node.className.indexOf(prefix) === -1) {
            node = node.parentNode;
          }

          var parentClasses = node.className.split(' ');
          var prefixedId = parentClasses.filter(function (className) {
            return className.indexOf(prefix) !== -1;
          });

          if (prefixedId.length && prefixedId[0].length) {
            id = prefixedId[0].substring(prefix.length, prefixedId[0].length);
          }
        } else if (this.node.tagName === 'IFRAME') {
          var src = this.node.src;
          id = src.split('?')[0].split('/')[5];
        }

        if (!id) {
          window.Knotch.bugsnag.reportError(new Error('No id found'), {
            data: event
          });
        }
      } catch (e) {
        window.Knotch.bugsnag.reportError(e);
      }

      return id;
    }
  }, {
    key: "waitForAPI",
    value: function waitForAPI(id) {
      var _this = this;

      window._wq = window._wq || []; 

      window._wq.push({
        id: id,
        onReady: function onReady() {
          _this.init();
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.node.tagName !== 'VIDEO') {
        this.node = this.node.querySelector('video');

        if (!this.node) {
          return window.Knotch.bugsnag.reportError(new Error('Wistia integration: video element not found'), {
            data: {
              pageNode: _vanillaHelper["default"].getNodeDescription(this.node)
            }
          });
        }
      }

      this.bindListeners();
    }
  }, {
    key: "bindListeners",
    value: function bindListeners() {
      var _this2 = this;

      var videoTracker = this.videoTracker;

      _vanillaHelper["default"].onEvent('timeupdate', this.node, function (event) {
        return _this2.progressHandler(event);
      });

      _vanillaHelper["default"].onEvent('play', this.node, function () {
        return videoTracker.play();
      });

      _vanillaHelper["default"].onEvent('pause', this.node, function () {
        return videoTracker.pause();
      });

      _vanillaHelper["default"].onEvent('ended', this.node, function () {
        return videoTracker.finish();
      });
    }
  }, {
    key: "progressHandler",
    value: function progressHandler() {
      this.videoTracker.play(); 

      if (this.videoTracker.knotched) return;

      if (this.node.duration && !this.videoTracker.duration) {
        var durationInMs = Math.floor(this.node.duration * 1000);
        this.videoTracker.duration = durationInMs;
        this.videoTracker.setMaxTime(durationInMs);
      }

      if (!this.videoTracker.logVideoTimer) {
        this.videoTracker.init(true);
      } 


      var _this$node = this.node,
          currentTime = _this$node.currentTime,
          duration = _this$node.duration;

      if (Number.isNaN(currentTime) || Number.isNaN(duration)) {
        window.Knotch.bugsnag.pushBreadCrumb({
          name: 'wistia video not ready yet',
          surveyId: this.options.surveyId,
          currentTime: currentTime,
          duration: duration
        });
      }
    }
  }, {
    key: "handleError",
    value: function handleError(event) {
      window.Knotch.bugsnag.reportError(new Error('Wistia integration error'), {
        data: event
      });
    }
  }]);

  return WistiaHandler;
}();

var _default = WistiaHandler;
exports["default"] = _default;

},{"../../helpers/vanillaHelper":25}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaHelper = _interopRequireDefault(require("../../helpers/vanillaHelper"));

var _YoutubeIframeAPI = _interopRequireDefault(require("../../thirdparty/YoutubeIframeAPI.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function YoutubeHandler(videoTracker, options) {
  this.surveyId = options.surveyId;
  this.node = document.querySelector("[data-knotch=\"".concat(this.surveyId, "\"]"));
  this.id = this.getIdFromUrl(this.getUrl(options));
  this.hasAutoplay = _vanillaHelper["default"].getQueryParams(this.getUrl(options)).autoplay === '1';
  this.videoTracker = videoTracker;
  this.init();
}

YoutubeHandler.prototype = {
  init: function init() {
    var _this = this;

    if (typeof window.youTubeReadyCollection === 'undefined') {
      window.youTubeReadyCollection = [];
    }

    var isYoutubeReady = !(typeof window.YT === 'undefined' || typeof window.YT.Player === 'undefined');

    if (!isYoutubeReady) {
      window.youTubeReadyCollection.push(function () {
        return _this.loadAPI();
      });

      window.onYouTubePlayerAPIReady = function () {
        if (typeof window.youTubeReadyCollection !== 'undefined') {
          if (window.youTubeReadyCollection.length) {
            while (window.youTubeReadyCollection.length) {
              var loadAPIFunction = window.youTubeReadyCollection.pop();
              loadAPIFunction();
            }
          }
        }
      };

      setTimeout(function () {
        (0, _YoutubeIframeAPI["default"])(window);
      }, 100);
    } else {
      this.loadAPI();
    }
  },
  getUrl: function getUrl(options) {
    if (_vanillaHelper["default"].isTopFrame()) {
      return this.node.getAttribute('src');
    }

    return options.url;
  },
  getIdFromUrl: function getIdFromUrl(url) {
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return url.match(p) ? url.match(p)[1] : null;
  },
  loadAPI: function loadAPI() {
    var _this2 = this;

    var nodeId = null;

    if (typeof this.node.id === 'undefined' || this.node.id.length === 0) {
      this.node.id = "knotchVideo_".concat(this.id);
      window.Knotch.bugsnag.pushBreadCrumb({
        name: 'node ID added'
      });
    }

    nodeId = this.node.id; 

    if (this.node.src) this.enableAPI();
    var existingPlayer = window.YT.get(nodeId); 

    if (existingPlayer) {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: "".concat(this.surveyId, ": YouTube player exists, listening to events")
      });
      this.player = existingPlayer;
      this.player.addEventListener('onReady', function (player) {
        return _this2.onReady(player);
      });
      this.player.addEventListener('onStateChange', function (e, callback) {
        return _this2.onStateChange(e, callback);
      });
    } else {
      window.Knotch.bugsnag.pushBreadCrumb({
        name: "".concat(this.surveyId, ": Adding a new YouTube player")
      });
      this.player = new window.YT.Player(nodeId, {
        height: '100%',
        width: '100%',
        videoId: this.id,
        playerVars: {
          modestbranding: 0,
          fs: 0,
          rel: 0,
          wmode: 'transparent',
          enablejsapi: 1,
          autoplay: this.hasAutoplay,
          showinfo: 0,
          loop: 1
        },
        events: {
          onStateChange: function onStateChange(e, callback) {
            return _this2.onStateChange(e, callback);
          },
          onError: function onError(error) {
            return _this2.onError(error);
          },
          onReady: function onReady(player) {
            return _this2.onReady(player);
          }
        }
      });
    }
  },
  enableAPI: function enableAPI() {
    if (this.node.src.indexOf('enablejsapi') === -1) {
      if (this.node.src.indexOf('?') === -1) {
        this.node.src += '?enablejsapi=1';
      } else {
        this.node.src += '&enablejsapi=1';
      }

      window.Knotch.bugsnag.pushBreadCrumb({
        name: "".concat(this.surveyId, ": youtube API enabled")
      });
    }
  },
  onReady: function onReady(player) {
    var duration = player.target.getDuration();

    if (duration) {
      var durationInMs = Math.floor(duration * 1000);
      this.videoTracker.duration = durationInMs;
      this.videoTracker.setMaxTime(durationInMs);
      window.Knotch.bugsnag.pushBreadCrumb({
        name: "".concat(this.surveyId, ": Adding YouTube max time and duration to video tracker")
      });
    }

    if (this.hasAutoplay) {
      this.videoTracker.init(this.hasAutoplay);
      this.videoTracker.play();
    }
  },
  onError: function onError(event) {
    window.Knotch.bugsnag.reportError(new Error("".concat(this.surveyId, ": Youtube integration error")), {
      data: event
    });
  },
  onStateChange: function onStateChange(event, callback) {
    if (callback) callback(); 
    switch (event.data) {
      default:
        break;

      case 0:
        this.videoTracker.finish();
        window.Knotch.bugsnag.pushBreadCrumb({
          name: "".concat(this.surveyId, ": YouTube video finished")
        });
        break;

      case 1:
        this.videoTracker.play();
        window.Knotch.bugsnag.pushBreadCrumb({
          name: "".concat(this.surveyId, ": YouTube video played")
        });
        break;

      case 2:
        this.videoTracker.pause();
        window.Knotch.bugsnag.pushBreadCrumb({
          name: "".concat(this.surveyId, ": YouTube video paused")
        });
        break;
    }
  }
};
var _default = YoutubeHandler;
exports["default"] = _default;

},{"../../helpers/vanillaHelper":25,"../../thirdparty/YoutubeIframeAPI.js":54}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(window) {
  if (!window.YT) {
    window.YT = {
      loading: 0,
      loaded: 0
    };
  }

  if (!window.YTConfig) {
    window.YTConfig = {
      host: 'http://www.youtube.com'
    };
  }

  if (!window.YT.loading) {
    window.YT.loading = 1;

    (function () {
      var l = [];

      window.YT.ready = function (f) {
        if (window.YT.loaded) {
          f();
        } else {
          l.push(f);
        }
      };

      window.onYTReady = function () {
        window.YT.loaded = 1;

        for (var i = 0; i < l.length; i++) {
          try {
            l[i]();
          } catch (e) {}
        }
      };

      window.YT.setConfig = function (c) {
        for (var k in c) {
          if (c.hasOwnProperty(k)) {
            YTConfig[k] = c[k];
          }
        }
      };

      var a = document.createElement('script');
      a.type = 'text/javascript';
      a.id = 'www-widgetapi-script';
      a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vfl9cGVgZ/www-widgetapi.js';
      a.async = true;
      var c = document.currentScript;

      if (c) {
        var n = c.nonce || c.getAttribute('nonce');

        if (n) {
          a.setAttribute('nonce', n);
        }
      }

      var b = document.getElementsByTagName('script')[0];
      b.parentNode.insertBefore(a, b);
    })();
  }
}

;

},{}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.knotchConfig = void 0;
var knotchConfig = {
  "env": "production",
  "version": "v4.47.5",
  "pixel": "https://c.knotch.it/",
  "root": "https://www.knotch.it",
  "metadata": "https://units.knotch.it/units",
  "theme": "https://units.knotch.it/themes",
  "gaframe": "https://units.knotch.it/gaframe/ver-adb8932/index.html",
  "reporter": "https://units.knotch.it/reporter/ver-fac59b9/index.html"
};
exports.knotchConfig = knotchConfig;

},{}]},{},[32])
}catch(e){Knotch.bugsnag && Knotch.bugsnag.reportError(e)}})(window)