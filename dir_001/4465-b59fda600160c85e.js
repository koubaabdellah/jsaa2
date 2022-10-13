"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4465],{83435:function(a,b,c){Object.defineProperty(b,"__esModule",{value:!0}),b.default=b.AdSlot=void 0;var d=h(c(76687)),e=h(c(61240)),f=h(c(6123)),g=c(85416);function h(a){return a&&a.__esModule?a:{default:a}}function i(a){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function j(){return(j=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function k(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){p(a,b,c[b])})}return a}function l(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function m(a){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function n(a,b){return(n=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function o(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function p(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var q=0,r=function(a){var b,c,e;function g(a){var b,c,e;return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,g),(b=(c=this,(e=m(g).call(this,a))&&("object"===i(e)||"function"==typeof e)?e:o(c))).doRegisterSlot=b.doRegisterSlot.bind(o(o(b))),b.generateSlotId=b.generateSlotId.bind(o(o(b))),b.getSlotId=b.getSlotId.bind(o(o(b))),b.mapContextToAdSlotProps=b.mapContextToAdSlotProps.bind(o(o(b))),b.slotShouldRefresh=b.slotShouldRefresh.bind(o(o(b))),b.slotRenderEnded=b.slotRenderEnded.bind(o(o(b))),b.slotRegisterCallback=b.slotRegisterCallback.bind(o(o(b))),b.slotIsViewable=b.slotIsViewable.bind(o(o(b))),b.slotVisibilityChanged=b.slotVisibilityChanged.bind(o(o(b))),b.getClasses=b.getClasses.bind(o(o(b))),b.state={slotId:b.props.slotId||null,className:b.props.className||""},b.adElementRef=d.default.createRef?d.default.createRef():function(a){b.adElementRef=a},b}return!function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&n(a,b)}(g,a),b=g,c=[{key:"componentDidMount",value:function(){void 0!==this.context&&this.context.newSlotCallback&&this.context.newSlotCallback(),this.registerSlot()}},{key:"componentWillUnmount",value:function(){this.unregisterSlot()}},{key:"getSlotId",value:function(){return this.props.slotId||this.state.slotId}},{key:"getClasses",value:function(){var a=this.state.className.split(" ");return a.push("adunitContainer"),a}},{key:"generateSlotId",value:function(){return"adSlot-".concat(q++)}},{key:"mapContextToAdSlotProps",value:function(){var a=this.context,b={};return void 0!==a.dfpNetworkId&&(b.dfpNetworkId=a.dfpNetworkId),void 0!==a.dfpAdUnit&&(b.adUnit=a.dfpAdUnit),void 0!==a.dfpSizeMapping&&(b.sizeMapping=a.dfpSizeMapping),void 0!==a.dfpTargetingArguments&&(b.targetingArguments=a.dfpTargetingArguments),b}},{key:"doRegisterSlot",value:function(){f.default.registerSlot(k({},this.mapContextToAdSlotProps(),this.props,this.state,{slotShouldRefresh:this.slotShouldRefresh})),!0===this.props.fetchNow&&f.default.load(this.getSlotId()),f.default.attachSlotRenderEnded(this.slotRenderEnded),f.default.attachSlotIsViewable(this.slotIsViewable),f.default.attachSlotVisibilityChanged(this.slotVisibilityChanged),this.slotRegisterCallback()}},{key:"registerSlot",value:function(){null===this.state.slotId?this.setState({slotId:this.generateSlotId()},this.doRegisterSlot):this.doRegisterSlot()}},{key:"unregisterSlot",value:function(){f.default.unregisterSlot(k({},this.mapContextToAdSlotProps(),this.props,this.state)),f.default.detachSlotRenderEnded(this.slotRenderEnded),f.default.detachSlotIsViewable(this.slotIsViewable),f.default.detachSlotVisibilityChanged(this.slotVisibilityChanged)}},{key:"slotRenderEnded",value:function(a){if(a.slotId===this.getSlotId()&& void 0!==this.props.onSlotRender){var b=k({},a,{adElementRef:this.adElementRef});this.props.onSlotRender(b)}}},{key:"slotRegisterCallback",value:function(){"function"==typeof this.props.onSlotRegister&&this.props.onSlotRegister({slotId:this.getSlotId(),sizes:this.props.sizes,slotCount:q,adElementRef:this.adElementRef})}},{key:"slotIsViewable",value:function(a){a.slotId===this.getSlotId()&& void 0!==this.props.onSlotIsViewable&&this.props.onSlotIsViewable(a)}},{key:"slotVisibilityChanged",value:function(a){a.slotId===this.getSlotId()&& void 0!==this.props.onSlotVisibilityChanged&&this.props.onSlotVisibilityChanged(a)}},{key:"slotShouldRefresh",value:function(){var a=!0;return void 0!==this.props.shouldRefresh&&(a=this.props.shouldRefresh(k({},this.mapContextToAdSlotProps(),this.props,{slotId:this.getSlotId()}))),a}},{key:"render",value:function(){var a=this.state.slotId,b={className:"adBox"};return null!==a&&(b.id=a),d.default.createElement("div",{className:this.getClasses().join(" ").trim()},d.default.createElement("div",j({ref:this.adElementRef},b)))}}],l(b.prototype,c),e&&l(b,e),g}(d.default.Component);b.AdSlot=r,p(r,"propTypes",{dfpNetworkId:e.default.string,adUnit:e.default.string,sizes:e.default.arrayOf(e.default.oneOfType([e.default.arrayOf(e.default.number),e.default.string])),renderOutOfThePage:e.default.bool,sizeMapping:e.default.arrayOf(e.default.object),fetchNow:e.default.bool,adSenseAttributes:e.default.object,targetingArguments:e.default.object,onSlotRender:e.default.func,onSlotRegister:e.default.func,onSlotIsViewable:e.default.func,onSlotVisibilityChanged:e.default.func,shouldRefresh:e.default.func,slotId:e.default.string,className:e.default.string}),p(r,"defaultProps",{fetchNow:!1}),null===g.Context?r.contextTypes={dfpNetworkId:e.default.string,dfpAdUnit:e.default.string,dfpSizeMapping:e.default.arrayOf(e.default.object),dfpTargetingArguments:e.default.object,newSlotCallback:e.default.func}:r.contextType=g.Context,b.default=r},85416:function(a,b,c){Object.defineProperty(b,"__esModule",{value:!0}),b.default=b.Context=void 0;var d=g(c(76687)),e=g(c(61240)),f=g(c(6123));function g(a){return a&&a.__esModule?a:{default:a}}function h(a){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function i(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function j(a){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function k(a,b){return(k=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function l(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var n=d.default.createContext?d.default.createContext({dfpNetworkId:null,dfpAdUnit:null,dfpSizeMapping:null,dfpTargetingArguments:null,newSlotCallback:null}):null;b.Context=n;var o=function(a){var b,c,e;function g(a){var b,c,d;return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,g),(b=(c=this,(d=j(g).call(this,a))&&("object"===h(d)||"function"==typeof d)?d:l(c))).loadAdsIfPossible=b.loadAdsIfPossible.bind(l(l(b))),b.newSlotCallback=b.newSlotCallback.bind(l(l(b))),b.applyConfigs=b.applyConfigs.bind(l(l(b))),b.shouldReloadConfig=b.shouldReloadConfig.bind(l(l(b))),b.attachLoadCallback=b.attachLoadCallback.bind(l(l(b))),b.getContextValue=b.getContextValue.bind(l(l(b))),b.loadAlreadyCalled=!1,b.loadCallbackAttached=!1,b.shouldReloadAds=!1,b.totalSlots=0,b.contextValue={},null===n&&(b.getChildContext=function(){return b.getContextValue()}),b}return!function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&k(a,b)}(g,a),b=g,c=[{key:"componentDidMount",value:function(){this.applyConfigs(),this.props.autoLoad&&!this.loadAdsIfPossible()&&this.attachLoadCallback()}},{key:"shouldComponentUpdate",value:function(a){return this.shouldReloadAds=this.shouldReloadConfig(a),a.children!==this.props.children|| !!a.autoLoad&&!this.props.autoLoad||this.shouldReloadAds}},{key:"componentDidUpdate",value:function(){this.applyConfigs(),this.props.autoLoad&&(this.loadAlreadyCalled?this.shouldReloadAds&&f.default.reload():this.loadAdsIfPossible()||this.attachLoadCallback()),this.shouldReloadAds=!1}},{key:"getContextValue",value:function(){var a=this.props,b=a.dfpNetworkId,c=a.adUnit,d=a.sizeMapping,e=a.targetingArguments,f=this.contextValue,g=f.dfpNetworkId,h=f.adUnit,i=f.sizeMapping,j=f.targetingArguments;return(b!==g||c!==h||d!==i||e!==j)&&(this.contextValue={dfpNetworkId:b,dfpAdUnit:c,dfpSizeMapping:d,dfpTargetingArguments:e,newSlotCallback:this.newSlotCallback}),this.contextValue}},{key:"applyConfigs",value:function(){f.default.configurePersonalizedAds(this.props.personalizedAds),f.default.configureCookieOption(this.props.cookieOption),f.default.configureSingleRequest(this.props.singleRequest),f.default.configureDisableInitialLoad(this.props.disableInitialLoad),f.default.configureLazyLoad(!!this.props.lazyLoad,"boolean"==typeof this.props.lazyLoad?null:this.props.lazyLoad),f.default.setAdSenseAttributes(this.props.adSenseAttributes),f.default.setCollapseEmptyDivs(this.props.collapseEmptyDivs),f.default.configureLimitedAds(this.props.limitedAds)}},{key:"attachLoadCallback",value:function(){return!1===this.loadCallbackAttached&&(f.default.on("slotRegistered",this.loadAdsIfPossible),this.loadCallbackAttached=!0,!0)}},{key:"newSlotCallback",value:function(){this.totalSlots++}},{key:"loadAdsIfPossible",value:function(){var a=!1;return Object.keys(f.default.getRegisteredSlots()).length>=this.totalSlots&&(f.default.removeListener("slotRegistered",this.loadAdsIfPossible),f.default.load(),this.loadAlreadyCalled=!0,this.loadCallbackAttached=!1,a=!0),a}},{key:"shouldReloadConfig",value:function(a){var b=a.autoReload||this.props.autoReload;if((this.props.autoLoad||a.autoLoad)&&"object"===h(b)){var c=Object.keys(b);for(var d in c){var e=c[d];if(!0===b[e]&&this.props[e]!==a[e])return!0}}return!1}},{key:"render",value:function(){var a=this.props.children;return null===n?a:d.default.createElement(n.Provider,{value:this.getContextValue()},a)}}],i(b.prototype,c),e&&i(b,e),g}(d.default.Component);b.default=o,m(o,"propTypes",{children:e.default.oneOfType([e.default.element,e.default.array]).isRequired,autoLoad:e.default.bool,autoReload:e.default.shape({dfpNetworkId:e.default.bool,personalizedAds:e.default.bool,cookieOption:e.default.bool,singleRequest:e.default.bool,disableInitialLoad:e.default.bool,adUnit:e.default.bool,sizeMapping:e.default.bool,adSenseAttributes:e.default.bool,targetingArguments:e.default.bool,collapseEmptyDivs:e.default.bool,lazyLoad:e.default.bool}),dfpNetworkId:e.default.string.isRequired,personalizedAds:e.default.bool,cookieOption:e.default.bool,singleRequest:e.default.bool,disableInitialLoad:e.default.bool,adUnit:e.default.string,sizeMapping:e.default.arrayOf(e.default.object),adSenseAttributes:e.default.object,targetingArguments:e.default.object,collapseEmptyDivs:e.default.oneOfType([e.default.bool,e.default.object]),adSenseAttrs:e.default.object,lazyLoad:e.default.oneOfType([e.default.bool,e.default.shape({fetchMarginPercent:e.default.number,renderMarginPercent:e.default.number,mobileScaling:e.default.number})]),limitedAds:e.default.bool}),m(o,"defaultProps",{autoLoad:!0,autoReload:{dfpNetworkId:!1,personalizedAds:!1,cookieOption:!1,singleRequest:!1,disableInitialLoad:!1,adUnit:!1,sizeMapping:!1,adSenseAttributes:!1,targetingArguments:!1,collapseEmptyDivs:!1,lazyLoad:!1},personalizedAds:!0,cookieOption:!0,singleRequest:!0,disableInitialLoad:!1,collapseEmptyDivs:null,lazyLoad:!1,limitedAds:!1}),null===n&&(o.childContextTypes={dfpNetworkId:e.default.string,dfpAdUnit:e.default.string,dfpSizeMapping:e.default.arrayOf(e.default.object),dfpTargetingArguments:e.default.object,newSlotCallback:e.default.func})},34465:function(a,b,c){b.sV=b.Un=b.eX=void 0;var d=g(c(6123)),e=g(c(83435)),f=g(c(85416));function g(a){return a&&a.__esModule?a:{default:a}}var h=d.default;b.eX=h;var i=e.default;b.Un=i;var j=f.default;b.sV=j},6123:function(a,b,c){Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var d=c(33346),e=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(99682));function f(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){g(a,b,c[b])})}return a}function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function h(a){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}var i=null,j=null,k=!0,l=!1,m=!1,n=null,o=!0,p=!0,q={},r=!1,s={},t={},u=!1,v=Object.assign(new d.EventEmitter().setMaxListeners(0),{singleRequestIsEnabled:function(){return k},configureSingleRequest:function(a){k=!!a},disableInitialLoadIsEnabled:function(){return l},configureDisableInitialLoad:function(a){l=!!a},configureLazyLoad:function(){var a=!(arguments.length>0)|| void 0===arguments[0]||arguments[0],b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:null,c=null;null!==b&&"object"===h(b)&&(c=f({},b)),m=!!a,n=c},lazyLoadIsEnabled:function(){return m},limitedAdsIsEnabled:function(){return u},configureLimitedAds:function(a){u=!!a},getLazyLoadConfig:function(){return n},getAdSenseAttribute:function(a){return t[a]},configurePersonalizedAds:function(a){o=a},configureCookieOption:function(a){p=a},personalizedAdsEnabled:function(){return o},cookiesEnabled:function(){return p},setAdSenseAttribute:function(a,b){this.setAdSenseAttributes(g({},a,b))},getAdSenseAttributes:function(){return f({},t)},setAdSenseAttributes:function(a){Object.assign(t,a),!0===r&&this.getGoogletag().then(function(a){a.cmd.push(function(){var b=a.pubads();Object.keys(t).forEach(function(a){b.set(a,s[a])})})})},setTargetingArguments:function(a){Object.assign(s,a),!0===r&&this.getGoogletag().then(function(a){a.cmd.push(function(){var b=a.pubads();Object.keys(s).forEach(function(a){b&&b.setTargeting(a,s[a])})})})},getTargetingArguments:function(){return f({},s)},getSlotProperty:function(a,b){var c=this.getRegisteredSlots()[a],d=null;return void 0!==c&&(d=c[b]||d),d},getSlotTargetingArguments:function(a){var b=this.getSlotProperty(a,"targetingArguments");return b?f({},b):null},getSlotAdSenseAttributes:function(a){var b=this.getSlotProperty(a,"adSenseAttributes");return b?f({},b):null},init:function(){var a=this;!1===r&&(r=!0,this.getGoogletag().then(function(b){b.cmd.push(function(){var c=b.pubads();c.addEventListener("slotRenderEnded",function(b){var c=b.slot.getSlotElementId();a.emit("slotRenderEnded",{slotId:c,event:b})}),c.addEventListener("impressionViewable",function(b){var c=b.slot.getSlotElementId();a.emit("impressionViewable",{slotId:c,event:b})}),c.addEventListener("slotVisibilityChanged",function(b){var c=b.slot.getSlotElementId();a.emit("slotVisibilityChanged",{slotId:c,event:b})}),c.setRequestNonPersonalizedAds(a.personalizedAdsEnabled()?0:1),c.setCookieOptions(a.cookiesEnabled()?0:1)})}))},getGoogletag:function(){return null===j&&(j=e.loadGPTScript(u)),j},setCollapseEmptyDivs:function(a){this.collapseEmptyDivs=a},load:function(){for(var a=this,b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];i=null===i?this.doLoad.apply(this,c):i.then(function(){return a.doLoad.apply(a,c)})},doLoad:function(){this.init();for(var a={},b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];return(a=(a=c.length>0?c.filter(function(a){return Object.prototype.hasOwnProperty.call(q,a)}):Object.keys(q)).filter(function(a){return!q[a].loading&&!q[a].gptSlot})).forEach(function(a){q[a].loading=!0}),this.gptLoadAds(a)},gptLoadAds:function(a){var b=this;return new Promise(function(c){b.getGoogletag().then(function(d){b.configureInitialOptions(d),a.forEach(function(a){q[a].loading=!1,d.cmd.push(function(){var c,e=q[a],f="".concat(e.dfpNetworkId,"/").concat(e.adUnit);if(null!==(c=!0===e.renderOutOfThePage?d.defineOutOfPageSlot(f,a):d.defineSlot(f,e.sizes,a))){e.gptSlot=c;var g=b.getSlotTargetingArguments(a);null!==g&&Object.keys(g).forEach(function(a){e&&e.gptSlot&&e.gptSlot.setTargeting(a,g[a])});var h=b.getSlotAdSenseAttributes(a);if(null!==h&&Object.keys(h).forEach(function(a){e.gptSlot.set(a,h[a])}),e.gptSlot.addService(d.pubads()),e.sizeMapping){var i=d.sizeMapping();e.sizeMapping.forEach(function(a){i=i.addSize(a.viewport,a.sizes)}),e.gptSlot.defineSizeMapping(i.build())}}})}),b.configureOptions(d),d.cmd.push(function(){d.enableServices(),a.forEach(function(a){d.display(a)}),c()})})})},configureInitialOptions:function(a){var b=this;a.cmd.push(function(){b.disableInitialLoadIsEnabled()&&a.pubads().disableInitialLoad()})},configureOptions:function(a){var b=this;a.cmd.push(function(){var c=a.pubads();c.setRequestNonPersonalizedAds(b.personalizedAdsEnabled()?0:1),c.setCookieOptions(b.cookiesEnabled()?0:1);var d=b.getTargetingArguments();Object.keys(d).forEach(function(a){c&&c.setTargeting(a,d[a])});var e=b.getAdSenseAttributes();if(Object.keys(e).forEach(function(a){c.set(a,e[a])}),b.lazyLoadIsEnabled()){var f=b.getLazyLoadConfig();f?c.enableLazyLoad(f):c.enableLazyLoad()}b.singleRequestIsEnabled()&&c.enableSingleRequest(),(!0===b.collapseEmptyDivs|| !1===b.collapseEmptyDivs)&&c.collapseEmptyDivs(b.collapseEmptyDivs)})},getRefreshableSlots:function(){for(var a={},b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];return 0===c.length?Object.keys(q).map(function(a){return q[a]}).reduce(function(b,c){return!0===c.slotShouldRefresh()&&(a[c.slotId]=c),a},a):c.reduce(function(b,c){var d=q[c];return void 0!==d&&(a[c]=d),a},a)},refresh:function(){for(var a=this,b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];null===i?this.load():i.then(function(){a.gptRefreshAds(Object.keys(a.getRefreshableSlots.apply(a,c)))})},gptRefreshAds:function(a){var b=this;return this.getGoogletag().then(function(c){b.configureOptions(c),c.cmd.push(function(){c.pubads().refresh(a.map(function(a){return q[a].gptSlot}))})})},reload:function(){var a=this;return this.destroyGPTSlots.apply(this,arguments).then(function(){return a.load()})},destroyGPTSlots:function(){for(var a=this,b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];return 0===c.length&&(c=Object.keys(q)),new Promise(function(b){var d=[];for(var e in c){var f=q[c[e]];d.push(f)}a.getGoogletag().then(function(a){a.cmd.push(function(){if(!0===r)if(c.length>0){for(var e in d){var f=d[e];d.push(f.gptSlot),delete f.gptSlot}a.destroySlots(d)}else a.destroySlots();b(c)})})})},registerSlot:function(a){var b=this,c=a.slotId,d=a.dfpNetworkId,e=a.adUnit,f=a.sizes,g=a.renderOutOfThePage,h=a.sizeMapping,j=a.adSenseAttributes,k=a.targetingArguments,l=a.slotShouldRefresh,m=!(arguments.length>1)|| void 0===arguments[1]||arguments[1];Object.prototype.hasOwnProperty.call(q,c)||(q[c]={slotId:c,sizes:f,renderOutOfThePage:g,dfpNetworkId:d,adUnit:e,adSenseAttributes:j,targetingArguments:k,sizeMapping:h,slotShouldRefresh:l,loading:!1},this.emit("slotRegistered",{slotId:c}),!0===m&&null!==i&&(i=i.catch().then(function(){var a=q[c];if(void 0!==a){var d=a.loading,e=a.gptSlot;!1!==d||e||b.load(c)}})))},unregisterSlot:function(a){var b=a.slotId;this.destroyGPTSlots(b),delete q[b]},getRegisteredSlots:function(){return q},attachSlotRenderEnded:function(a){this.on("slotRenderEnded",a)},detachSlotRenderEnded:function(a){this.removeListener("slotRenderEnded",a)},attachSlotVisibilityChanged:function(a){this.on("slotVisibilityChanged",a)},detachSlotVisibilityChanged:function(a){this.removeListener("slotVisibilityChanged",a)},attachSlotIsViewable:function(a){this.on("impressionViewable",a)},detachSlotIsViewable:function(a){this.removeListener("impressionViewable",a)}});b.default=v},99682:function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.loadGPTScript=function(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0];return new Promise(function(b,c){var d,e,f,g;d=b,e=c,f=a,window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],(g=document.createElement("script")).src="".concat(document.location.protocol,"//").concat(f?"pagead2.googlesyndication.com":"securepubads.g.doubleclick.net","/tag/js/gpt.js"),g.async=!0,g.type="text/javascript",g.onerror=function(a){e(a)},g.onload=function(){d(window.googletag)},document.getElementsByTagName("head")[0].appendChild(g)})}},33346:function(a){var b,c="object"==typeof Reflect?Reflect:null,d=c&&"function"==typeof c.apply?c.apply:function(a,b,c){return Function.prototype.apply.call(a,b,c)};b=c&&"function"==typeof c.ownKeys?c.ownKeys:Object.getOwnPropertySymbols?function(a){return Object.getOwnPropertyNames(a).concat(Object.getOwnPropertySymbols(a))}:function(a){return Object.getOwnPropertyNames(a)};var e=Number.isNaN||function(a){return a!=a};function f(){f.init.call(this)}a.exports=f,a.exports.once=function(a,b){return new Promise(function(c,d){function e(c){a.removeListener(b,f),d(c)}function f(){"function"==typeof a.removeListener&&a.removeListener("error",e),c([].slice.call(arguments))}r(a,b,f,{once:!0}),"error"!==b&&q(a,e,{once:!0})})},f.EventEmitter=f,f.prototype._events=void 0,f.prototype._eventsCount=0,f.prototype._maxListeners=void 0;var g=10;function h(a){if("function"!=typeof a)throw new TypeError("The \"listener\" argument must be of type Function. Received type "+typeof a)}function i(a){return void 0===a._maxListeners?f.defaultMaxListeners:a._maxListeners}function j(a,b,c,d){if(h(c),void 0===(f=a._events)?(f=a._events=Object.create(null),a._eventsCount=0):(void 0!==f.newListener&&(a.emit("newListener",b,c.listener?c.listener:c),f=a._events),g=f[b]),void 0===g)g=f[b]=c,++a._eventsCount;else if("function"==typeof g?g=f[b]=d?[c,g]:[g,c]:d?g.unshift(c):g.push(c),(e=i(a))>0&&g.length>e&&!g.warned){g.warned=!0;var e,f,g,j,k=new Error("Possible EventEmitter memory leak detected. "+g.length+" "+String(b)+" listeners added. Use emitter.setMaxListeners() to increase limit");k.name="MaxListenersExceededWarning",k.emitter=a,k.type=b,k.count=g.length,j=k,console&&console.warn&&console.warn(j)}return a}function k(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(a,b,c){var d={fired:!1,wrapFn:void 0,target:a,type:b,listener:c},e=k.bind(d);return e.listener=c,d.wrapFn=e,e}function m(a,b,c){var d=a._events;if(void 0===d)return[];var e=d[b];return void 0===e?[]:"function"==typeof e?c?[e.listener||e]:[e]:c?p(e):o(e,e.length)}function n(a){var b=this._events;if(void 0!==b){var c=b[a];if("function"==typeof c)return 1;if(void 0!==c)return c.length}return 0}function o(a,b){for(var c=new Array(b),d=0;d<b;++d)c[d]=a[d];return c}function p(a){for(var b=new Array(a.length),c=0;c<b.length;++c)b[c]=a[c].listener||a[c];return b}function q(a,b,c){"function"==typeof a.on&&r(a,"error",b,c)}function r(a,b,c,d){if("function"==typeof a.on)d.once?a.once(b,c):a.on(b,c);else if("function"==typeof a.addEventListener)a.addEventListener(b,function e(f){d.once&&a.removeEventListener(b,e),c(f)});else throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type "+typeof a)}Object.defineProperty(f,"defaultMaxListeners",{enumerable:!0,get:function(){return g},set:function(a){if("number"!=typeof a||a<0||e(a))throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received "+a+".");g=a}}),f.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},f.prototype.setMaxListeners=function(a){if("number"!=typeof a||a<0||e(a))throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received "+a+".");return this._maxListeners=a,this},f.prototype.getMaxListeners=function(){return i(this)},f.prototype.emit=function(a){for(var b,c=[],e=1;e<arguments.length;e++)c.push(arguments[e]);var f="error"===a,g=this._events;if(void 0!==g)f=f&& void 0===g.error;else if(!f)return!1;if(f){if(c.length>0&&(b=c[0]),b instanceof Error)throw b;var h=new Error("Unhandled error."+(b?" ("+b.message+")":""));throw h.context=b,h}var i=g[a];if(void 0===i)return!1;if("function"==typeof i)d(i,this,c);else for(var j=i.length,k=o(i,j),e=0;e<j;++e)d(k[e],this,c);return!0},f.prototype.addListener=function(a,b){return j(this,a,b,!1)},f.prototype.on=f.prototype.addListener,f.prototype.prependListener=function(a,b){return j(this,a,b,!0)},f.prototype.once=function(a,b){return h(b),this.on(a,l(this,a,b)),this},f.prototype.prependOnceListener=function(a,b){return h(b),this.prependListener(a,l(this,a,b)),this},f.prototype.removeListener=function(a,b){var c,d,e,f,g;if(h(b),void 0===(d=this._events))return this;if(void 0===(c=d[a]))return this;if(c===b||c.listener===b)0== --this._eventsCount?this._events=Object.create(null):(delete d[a],d.removeListener&&this.emit("removeListener",a,c.listener||b));else if("function"!=typeof c){for(e=-1,f=c.length-1;f>=0;f--)if(c[f]===b||c[f].listener===b){g=c[f].listener,e=f;break}if(e<0)return this;0===e?c.shift():(function(a,b){for(;b+1<a.length;b++)a[b]=a[b+1];a.pop()})(c,e),1===c.length&&(d[a]=c[0]),void 0!==d.removeListener&&this.emit("removeListener",a,g||b)}return this},f.prototype.off=f.prototype.removeListener,f.prototype.removeAllListeners=function(a){var b,c,d;if(void 0===(c=this._events))return this;if(void 0===c.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==c[a]&&(0== --this._eventsCount?this._events=Object.create(null):delete c[a]),this;if(0===arguments.length){var e,f=Object.keys(c);for(d=0;d<f.length;++d)"removeListener"!==(e=f[d])&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(b=c[a]))this.removeListener(a,b);else if(void 0!==b)for(d=b.length-1;d>=0;d--)this.removeListener(a,b[d]);return this},f.prototype.listeners=function(a){return m(this,a,!0)},f.prototype.rawListeners=function(a){return m(this,a,!1)},f.listenerCount=function(a,b){return"function"==typeof a.listenerCount?a.listenerCount(b):n.call(a,b)},f.prototype.listenerCount=n,f.prototype.eventNames=function(){return this._eventsCount>0?b(this._events):[]}}}])