(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{10331:function(a,b,c){"use strict";c.d(b,{HK:function(){return g},gP:function(){return i}});var d=c(76687);const e={prefix:String(Math.round(10e9*Math.random())),current:0},f=d.createContext(e);function g(a){let b=(0,d.useContext)(f),c=(0,d.useMemo)(()=>({prefix:b===e?"":b.prefix+"-"+ ++b.current,current:0}),[b]);return d.createElement(f.Provider,{value:c},a.children)}let h=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);function i(a){let b=(0,d.useContext)(f);return b!==e||h||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,d.useMemo)(()=>a||"react-aria"+b.prefix+"-"+ ++b.current,[a])}},96632:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(68959)}])},80677:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}b.default=function(a,b){var c,d,g=f.default,i={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};(c=a,null!=(d=Promise)&&"undefined"!=typeof Symbol&&d[Symbol.hasInstance]?d[Symbol.hasInstance](c):c instanceof d)?i.loader=function(){return a}:"function"==typeof a?i.loader=a:"object"==typeof a&&(i=e({},i,a));var j=i=e({},i,b);if(j.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(j.suspense)return g(j);if(i.loadableGenerated&&delete(i=e({},i,i.loadableGenerated)).loadableGenerated,"boolean"==typeof i.ssr){if(!i.ssr)return delete i.ssr,h(g,i);delete i.ssr}return g(i)},g(c(76687));var f=g(c(51642));function g(a){return a&&a.__esModule?a:{default:a}}function h(a,b){return delete b.webpack,delete b.modules,a(b)}},99961:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d,e=((d=c(76687))&&d.__esModule?d:{default:d}).default.createContext(null);b.LoadableContext=e},51642:function(a,b,c){"use strict";function d(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var g,h=(g=c(76687))&&g.__esModule?g:{default:g},i=c(70336),j=c(99961),k=[],l=[],m=!1;function n(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var o=function(){var a,b,c;function e(a,b){!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=a,this._opts=b,this._callbacks=new Set(),this._delay=null,this._timeout=null,this.retry()}return a=e,b=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;if(b.loading){if("number"==typeof c.delay)if(0===c.delay)this._state.pastDelay=!0;else{var d=this;this._delay=setTimeout(function(){d._update({pastDelay:!0})},c.delay)}if("number"==typeof c.timeout){var e=this;this._timeout=setTimeout(function(){e._update({timedOut:!0})},c.timeout)}}this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}],d(a.prototype,b),c&&d(a,c),e}();function p(a){return(function(a,b){var c=function(){if(!e){var b=new o(a,d);e={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return e.promise()},d=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);d.suspense&&(d.lazy=h.default.lazy(d.loader));var e=null;if(!m&&!d.suspense){var g=d.webpack?d.webpack():d.modules;g&&l.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,h=g[Symbol.iterator]();!(b=(f=h.next()).done);b=!0){var i=f.value;if(-1!==a.indexOf(i))return c()}}catch(j){d=!0,e=j}finally{try{b||null==h.return||h.return()}finally{if(d)throw e}}})}var k=d.suspense?function(a,b){return h.default.createElement(d.lazy,f({},a,{ref:b}))}:function(a,b){c();var f=h.default.useContext(j.LoadableContext),g=i.useSubscription(e);return h.default.useImperativeHandle(b,function(){return{retry:e.retry}},[]),f&&Array.isArray(d.modules)&&d.modules.forEach(function(a){f(a)}),h.default.useMemo(function(){var b;return g.loading||g.error?h.default.createElement(d.loading,{isLoading:g.loading,pastDelay:g.pastDelay,timedOut:g.timedOut,error:g.error,retry:e.retry}):g.loaded?h.default.createElement((b=g.loaded)&&b.__esModule?b.default:b,a):null},[a,g])};return k.preload=function(){return!d.suspense&&c()},k.displayName="LoadableComponent",h.default.forwardRef(k)})(n,a)}function q(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return q(a,b)})}p.preloadAll=function(){return new Promise(function(a,b){q(k).then(a,b)})},p.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return m=!0,b()};q(l,a).then(c,c)})},window.__NEXT_PRELOADREADY=p.preloadReady,b.default=p},14665:function(a,b,c){"use strict";c.d(b,{X:function(){return j}});var d,e=c(52010),f=c(41786),g=c(42503),h=c(78559),i={apiKey:"craprodkey-bflhdelrcs",contentSource:"scmag",apiUrl:"https://cra.hum.works/api/",cookieDomain:"cra.hum.works",useIframeStorage:!0},j=window;b.Z=function(a){var b=a.src;if((0,f.Z)(function(){var a;(null===(a=j.humTracker)|| void 0===a?void 0:a.page)&&(j.humTracker.page(),(0,g.fF)("Script: Hum - pageView fired"))}),!b)return null;(d=j).humTracker||(d.humTracker={}),j.humTracker.options=i;var c=humTracker,k=humTracker.preloadQueue=[];window.humTracker=new Proxy(c,{get:function(a,b){return b in a?a[b]:function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return k.push({method:b,args:c})}}});var l=function(){return j.humTracker=c};return humTracker.onLoad=l,(0,e.jsx)(h.default,{async:!0,id:"HUM_Script",src:b,strategy:"afterInteractive",onLoad:l})}},98930:function(a,b,c){"use strict";c.d(b,{Kt:function(){return j},oH:function(){return g},WL:function(){return i},Rk:function(){return k.Z},di:function(){return p}});var d=c(52010),e=c(78559),f=window,g=function(a){var b=a.id;return b?(0,d.jsx)(e.default,{async:!0,strategy:"lazyOnload",src:"//connect.facebook.net/en_US/fbevents.js",onLoad:function(){var a=f.fbq;a("init",b),a("track","PageView")}}):null},h=window,i=function(a){var b=a.id;return b?(0,d.jsx)(e.default,{async:!0,strategy:"lazyOnload",src:"//cdn.feathr.co/js/boomerang.min.js",onLoad:function(){var a=h.feathr;a("fly",b),a("sprinkle","page_view")}}):null},j=function(){return(0,d.jsx)(e.default,{async:!0,strategy:"lazyOnload",src:"//s.dpmsrv.com/dpm_00fd4b4549a1094aae926ef62e9dbd3cdcc2e456.min.js"})},k=c(14665),l=c(41786),m=c(42503),n=function(a,b){return b?Array.isArray(b)?b.filter(Boolean).map(function(b,c){return"".concat(a).concat(c+1,"=").concat(encodeURI(b))}):["".concat(a,"=").concat(encodeURI(b))]:[]},o="188-UNZ-660",p=function(a){var b=a.uri,c=a.topics,f=void 0===c?["uncategorized"]:c,g=a.authors,h=void 0===g?[]:g,i=a.pubDate,j=void 0===i?"":i,k=function(){var a=window.Munchkin;if(a&&o){var c=[n("topic",f),n("author",h),n("pubDate",j),].flat().join("&");a.init(o),a.munchkinFunction(a.VISIT_WEB_PAGE,{url:b,params:c}),(0,m.fF)("Script: Munchkin - pageView event triggered",{path:b,params:c})}};return(0,l.Z)(k),(0,d.jsx)(e.default,{async:!0,src:"//munchkin.marketo.net/munchkin.js",strategy:"lazyOnload",onLoad:k})}},41786:function(a,b,c){"use strict";var d=c(42503),e=c(92543),f=c(76687);b.Z=function(a){var b=(0,e.useRouter)(),c=b.asPath,g=b.events;(0,f.useDebugValue)(c),(0,f.useEffect)(function(){if(a&&c)return(0,d.fF)("Hook: useLocationChange - fired",c),g.on("routeChangeComplete",a),function(){return g.off("routeChangeComplete",a)}},[c,g,a])}},68959:function(a,b,c){"use strict";c.r(b),c.d(b,{reportWebVitals:function(){return u},reportError:function(){return v}});var d=c(52010),e=c(14159);c.n(e);var f=c(10331),g=c(24879),h=c(98930),i=c(2635),j=c(92543),k=c(60900),l=c.n(k),m=c(76687),n=c(51633),o=c.n(n),p=c(83013);function q(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.n(p),j.Router.events.on("routeChangeStart",function(){return l().start()}),j.Router.events.on("routeChangeComplete",function(){return l().done()}),j.Router.events.on("routeChangeError",function(){return l().done()});var r=(0,i.default)(function(){return Promise.all([c.e(2221),c.e(4465),c.e(9023)]).then(c.bind(c,44629))},{loadableGenerated:{webpack:function(){return[44629]}}}),s=(0,i.default)(function(){return Promise.all([c.e(4745),c.e(4804),c.e(9395)]).then(c.bind(c,59395))},{loadableGenerated:{webpack:function(){return[59395]}}}),t=(0,i.default)(function(){return c.e(7949).then(c.bind(c,57949))},{loadableGenerated:{webpack:function(){return[57949]}}});function u(a){var b=a.name,c=a.value;switch(b){case"FCP":case"LCP":case"CLS":case"FID":case"TTFB":c=Math.round(1000*c);break;default:c=Math.round(c);break}var d={dataLayer:{event:"sendAppMetrics",name:b,value:c}};o().dataLayer(d)}b.default=function(a){var b=a.Component,c=a.pageProps;(0,m.useEffect)(function(){o().initialize({gtmId:String("GTM-5KK9HJ7")})},[]);var e=b.getLayout||function(a){return(0,d.jsx)(t,{children:a})};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{auth0ClientId:"P4FVhsJMFIWt7SlXoRN9v3ytmVAHWQjc",auth0Domain:g.Zy,auth0RedirectHost:g.TD,children:(0,d.jsx)(r,{dfpNetworkId:"21883553441",targetingEnv:"live",children:(0,d.jsx)(f.HK,{children:(0,d.jsx)(m.StrictMode,{children:e((0,d.jsx)(b,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){q(a,b,c[b])})}return a}({},c)))})})})}),(0,d.jsx)(h.Kt,{}),(0,d.jsx)(h.oH,{id:"627071788269487"}),(0,d.jsx)(h.WL,{id:"60071024bdb3f8d0470da8d6"}),(0,d.jsx)(h.Rk,{src:"https://cra.hum.works/js/main.js"})]})};var v=function(a,b){var c={dataLayer:{event:"sendAppErrors",name:a,value:JSON.stringify(b,null,4)}};o().dataLayer(c)}},24879:function(a,b,c){"use strict";c.d(b,{RO:function(){return i},MT:function(){return j},"$G":function(){return k},"$v":function(){return l},Bp:function(){return m},TD:function(){return n},Zy:function(){return o}});var d=c(83615),e=c(53736),f=c.n(e);function g(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}var h=function(a){return f()(a,"/graphql")},i=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];var e,h=f()(b);return(0,d.Z)(h)?h:f().apply(void 0,[j].concat(function(a){if(Array.isArray(a))return g(a)}(e=b)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(e)||function(a,b){if(a){if("string"==typeof a)return g(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return g(a,b)}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))},j="https://www.scmagazine.com",k=f()(j,"/images/sc-logo.png"),l="https://cms.scmagazine.com";h(l);var m=h("https://graphql.scmagazine.com"),n="https://www.scmagazine.com",o="accounts.scmagazine.com"},42503:function(a,b,c){"use strict";c.d(b,{cM:function(){return d},fF:function(){return e},hF:function(){return f},Jb:function(){return g}});var d=function(a){arguments.length>1&& void 0!==arguments[1]&&arguments[1]},e=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c]},f="An error has occurred.",g=function(){return new Error(f)}},83615:function(a,b,c){"use strict";b.Z=function(a){return a?0===a.indexOf("//")|| -1!==a.indexOf("://")&& -1!==a.indexOf(".")&& -1!==a.indexOf("/")&& !(a.indexOf(":")>a.indexOf("/"))&&a.indexOf("://")<a.indexOf("."):null}},83013:function(){},14159:function(){},2635:function(a,b,c){a.exports=c(80677)},92543:function(a,b,c){a.exports=c(13557)},78559:function(a,b,c){a.exports=c(99118)},60900:function(a,b,c){var d,e;!function(f,g){void 0!==(e="function"==typeof(d=g)?d.call(b,c,b,a):d)&&(a.exports=e)}(this,function(){var a={};a.version="0.2.0";var b,c,d=a.settings={minimum:0.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:0.02,trickleSpeed:800,showSpinner:!0,barSelector:"[role=\"bar\"]",spinnerSelector:"[role=\"spinner\"]",parent:"body",template:"<div class=\"bar\" role=\"bar\"><div class=\"peg\"></div></div><div class=\"spinner\" role=\"spinner\"><div class=\"spinner-icon\"></div></div>"};function e(a,b,c){return a<b?b:a>c?c:a}function f(a){return(-1+a)*100}a.configure=function(a){var b,c;for(b in a)void 0!==(c=a[b])&&a.hasOwnProperty(b)&&(d[b]=c);return this},a.status=null,a.set=function(b){var c=a.isStarted();b=e(b,d.minimum,1),a.status=1===b?null:b;var i=a.render(!c),j=i.querySelector(d.barSelector),k=d.speed,l=d.easing;return i.offsetWidth,g(function(c){var e,g,m,n;""===d.positionUsing&&(d.positionUsing=a.getPositioningCSS()),h(j,(e=b,g=k,m=l,(n="translate3d"===d.positionUsing?{transform:"translate3d("+f(e)+"%,0,0)"}:"translate"===d.positionUsing?{transform:"translate("+f(e)+"%,0)"}:{"margin-left":f(e)+"%"}).transition="all "+g+"ms "+m,n)),1===b?(h(i,{transition:"none",opacity:1}),i.offsetWidth,setTimeout(function(){h(i,{transition:"all "+k+"ms linear",opacity:0}),setTimeout(function(){a.remove(),c()},k)},k)):setTimeout(c,k)}),this},a.isStarted=function(){return"number"==typeof a.status},a.start=function(){a.status||a.set(0);var b=function(){setTimeout(function(){a.status&&(a.trickle(),b())},d.trickleSpeed)};return d.trickle&&b(),this},a.done=function(b){return b||a.status?a.inc(0.3+0.5*Math.random()).set(1):this},a.inc=function(b){var c=a.status;return c?("number"!=typeof b&&(b=(1-c)*e(Math.random()*c,0.1,0.95)),c=e(c+b,0,0.994),a.set(c)):a.start()},a.trickle=function(){return a.inc(Math.random()*d.trickleRate)},b=0,c=0,a.promise=function(d){return d&&"resolved"!==d.state()&&(0===c&&a.start(),b++,c++,d.always(function(){c--,0===c?(b=0,a.done()):a.set((b-c)/b)})),this},a.render=function(b){if(a.isRendered())return document.getElementById("nprogress");j(document.documentElement,"nprogress-busy");var c=document.createElement("div");c.id="nprogress",c.innerHTML=d.template;var e,g=c.querySelector(d.barSelector),i=b?"-100":f(a.status||0),k=document.querySelector(d.parent);return h(g,{transition:"all 0 linear",transform:"translate3d("+i+"%,0,0)"}),!d.showSpinner&&(e=c.querySelector(d.spinnerSelector))&&m(e),k!=document.body&&j(k,"nprogress-custom-parent"),k.appendChild(c),c},a.remove=function(){k(document.documentElement,"nprogress-busy"),k(document.querySelector(d.parent),"nprogress-custom-parent");var a=document.getElementById("nprogress");a&&m(a)},a.isRendered=function(){return!!document.getElementById("nprogress")},a.getPositioningCSS=function(){var a=document.body.style,b="WebkitTransform"in a?"Webkit":"MozTransform"in a?"Moz":"msTransform"in a?"ms":"OTransform"in a?"O":"";return b+"Perspective" in a?"translate3d":b+"Transform" in a?"translate":"margin"};var g=function(){var a=[];function b(){var c=a.shift();c&&c(b)}return function(c){a.push(c),1==a.length&&b()}}(),h=function(){var a=["Webkit","O","Moz","ms"],b={};function c(c,d,e){var f;d=b[f=(f=d).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()})]||(b[f]=(function(b){var c=document.body.style;if(b in c)return b;for(var d,e=a.length,f=b.charAt(0).toUpperCase()+b.slice(1);e--;)if((d=a[e]+f)in c)return d;return b})(f)),c.style[d]=e}return function(a,b){var d,e,f=arguments;if(2==f.length)for(d in b)void 0!==(e=b[d])&&b.hasOwnProperty(d)&&c(a,d,e);else c(a,f[1],f[2])}}();function i(a,b){return("string"==typeof a?a:l(a)).indexOf(" "+b+" ")>=0}function j(a,b){var c=l(a);i(c,b)||(a.className=(c+b).substring(1))}function k(a,b){var c,d=l(a);i(a,b)&&(c=d.replace(" "+b+" "," "),a.className=c.substring(1,c.length-1))}function l(a){return(" "+(a.className||"")+" ").replace(/\s+/gi," ")}function m(a){a&&a.parentNode&&a.parentNode.removeChild(a)}return a})},25143:function(a,b,c){"use strict";var d,e=(d=c(84250))&&d.__esModule?d:{default:d};a.exports={tags:function(a){var b=a.id,c=a.events,d=a.dataLayer,f=a.dataLayerName,g=a.preview,h=a.auth,i="&gtm_auth="+h,j="&gtm_preview="+g;b||(0,e.default)("GTM Id is required");var k="\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(c).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+i+j+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+f+"','"+b+"');",l=this.dataLayer(d,f);return{iframe:"\n      <iframe src=\"https://www.googletagmanager.com/ns.html?id="+b+i+j+"&gtm_cookies_win=x\"\n        height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\" id=\"tag-manager\"></iframe>",script:k,dataLayerVar:l}},dataLayer:function(a,b){return"\n      window."+b+" = window."+b+" || [];\n      window."+b+".push("+JSON.stringify(a)+")"}}},68823:function(a,b,c){"use strict";var d,e=(d=c(25143))&&d.__esModule?d:{default:d};a.exports={dataScript:function(a){var b=document.createElement("script");return b.innerHTML=a,b},gtm:function(a){var b=e.default.tags(a);return{noScript:function(){var a=document.createElement("noscript");return a.innerHTML=b.iframe,a},script:function(){var a=document.createElement("script");return a.innerHTML=b.script,a},dataScript:this.dataScript(b.dataLayerVar)}},initialize:function(a){var b=a.gtmId,c=a.events,d=a.dataLayer,e=a.dataLayerName,f=a.auth,g=a.preview,h=this.gtm({id:b,events:void 0===c?{}:c,dataLayer:d||void 0,dataLayerName:void 0===e?"dataLayer":e,auth:void 0===f?"":f,preview:void 0===g?"":g});d&&document.head.appendChild(h.dataScript),document.head.insertBefore(h.script(),document.head.childNodes[0]),document.body.insertBefore(h.noScript(),document.body.childNodes[0])},dataLayer:function(a){var b=a.dataLayer,c=a.dataLayerName,d=void 0===c?"dataLayer":c;if(window[d])return window[d].push(b);var f=e.default.dataLayer(b,d),g=this.dataScript(f);document.head.insertBefore(g,document.head.childNodes[0])}}},51633:function(a,b,c){"use strict";var d,e=(d=c(68823))&&d.__esModule?d:{default:d};a.exports=e.default},84250:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){console.warn("[react-gtm]",a)}},53736:function(a,b,c){var d,e;!function(f,g,h){a.exports?a.exports=h():void 0===(e="function"==typeof(d=h)?d.call(b,c,b,a):d)||(a.exports=e)}("urljoin",this,function(){return function(){var a;return a="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),(function(a){var b=[];if(0===a.length)return"";if("string"!=typeof a[0])throw new TypeError("Url must be a string. Received "+a[0]);if(a[0].match(/^[^/:]+:\/*$/)&&a.length>1){var c=a.shift();a[0]=c+a[0]}a[0].match(/^file:\/\/\//)?a[0]=a[0].replace(/^([^/:]+):\/*/,"$1:///"):a[0]=a[0].replace(/^([^/:]+):\/*/,"$1://");for(var d=0;d<a.length;d++){var e=a[d];if("string"!=typeof e)throw new TypeError("Url must be a string. Received "+e);""!==e&&(d>0&&(e=e.replace(/^[\/]+/,"")),e=d<a.length-1?e.replace(/[\/]+$/,""):e.replace(/[\/]+$/,"/"),b.push(e))}var f=b.join("/"),g=(f=f.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return f=g.shift()+(g.length>0?"?":"")+g.join("&")})(a)}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[9774,179],function(){return b(96632),b(13557)}),_N_E=a.O()}])