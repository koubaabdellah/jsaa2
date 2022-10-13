!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-rapid",[],t):"object"==typeof exports?exports["wafer-rapid"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-rapid"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(){return s=r("./src/rapidInstance.js")}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=window.wafer,f=l.base,d=l.constants,p=l.utils,g=l.WaferBaseClass,y=p.setTimeout,b=p.clearTimeout,v=d.ATTR_PREFIX,h=[],_=["handleClick","handleRapidMouseEnter","handleRapidMouseLeave"],w=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.selector;i(this,t);var c=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:a},{STATE_ATTRS:h})),l=e.getAttribute(v+"rapid-trigger");if(!l)return o(c);"click"!==l&&"eachClick"!==l||e.classList.add("has-rapid-click","has-wafer-click");var f=e.getAttribute(v+"rapid-method"),d=e.getAttribute(v+"rapid-name"),p=(0,(s||n()).geti13nValues)(e.id,e.getAttribute("data-i13n")||e.getAttribute("data-ylk")),g=(0,(s||n()).geti13nValues)(null,e.getAttribute("data-page-i13n")),y=e.getAttribute("data-rapid_p")||"1";return c._util=u({},c._util,{elem:e,i13n:p,name:d,pageI13n:g,pos:y,trigger:l,triggerMethod:f}),c._state=c._state||{},_.forEach(function(e){c[e]=c[e].bind(c)}),"onLoad"===l?(c._beaconTrigger(),c.destroy()):"mouseenter"===l&&(c._state.mouseEnterTimeout=null,c.addEventListeners()),c}return a(t,e),c(t,[{key:"_beaconTrigger",value:function(){var e=(0,(s||n()).getRapidInstance)();if(e){var t=this._util,r=t.name,i=t.trigger,o=t.triggerMethod,a=t.pos,c=t.i13n;if("beaconClick"===o)e.beaconClick(c.sec,c.slk,a,c);else if("beaconEvent"===o){var l=this._util.elem;f.emitLog({name:"WaferRapid",elem:l,meta:{i13n:c,name:r,type:"beaconEvent"}}),e.beaconEvent(r,c)}else if("beaconLinkViews"===o)e.beaconLinkViews([u({},c,{_links:[c]})]);else if("pageView"===o){var d=this._util.pageI13n,p=c.spaceid,g=e.getRapidAttribute("keys");e.clearRapidAttribute(["keys"]),e.setRapidAttribute({keys:Object.assign({},g,d),spaceid:p||e.getRapidAttribute("spaceid")}),e.beaconPageview(d),"click"===i&&this.destroy()}}}},{key:"handleClick",value:function(){this._beaconTrigger()}},{key:"handleRapidMouseEnter",value:function(){var e=this;this._destroyed||(b(this._state.mouseEnterTimeout,this),this._state.mouseEnterTimeout=y(function(){e._beaconTrigger()},100,this))}},{key:"handleRapidMouseLeave",value:function(){this._destroyed||b(this._state.mouseEnterTimeout,this)}}]),t}(g);w.events={click:[["has-rapid-click","handleClick"]],mouseenter:[["_self","handleRapidMouseEnter"]],mouseleave:[["_self","handleRapidMouseLeave"]]},t.default=w,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return l=o(r("./src/base.js"))}function i(){return f=r("./src/rapidInstance.js")}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var l,f,d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,r,n)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(n)},g=window.wafer.controllers.WaferBaseController,y=window.wafer.utils.convertNodeListToArray,b=function(e){for(var t=e,r=void 0;t;)t.classList.contains("wafer-rapid-module")&&(r=t),t=t.parentElement;return r},v=function(e,t){var r=t.get(e);if(!r)return!1;var n=r.instance,o=n._util.trigger;if(!e.id&&o)return!1;if(!e.id)return!1;var a=(0,(f||i()).getRapidInstance)();if(!a)return!1;var s=(0,(f||i()).geti13nValues)(e.id,e.getAttribute("data-i13n")||e.getAttribute("data-ylk")),u=s.id,l=!1;if(a.isModuleTracked(u)?(0,(f||i()).checkIfModuleIsInTrackedMods)(u)||e.classList.contains("wafer-rapid-tracked")?a.refreshModule(u):(a.removeModule(u),l=!0):l=!0,l){var d=s.sec?c({},u,s.sec):[u];a.addModulesWithViewability(d)}return e.classList.add("wafer-rapid-tracked"),!0},h=function(e,t){var r=t.get(e);if(!r)return!1;var n=r.instance,o=n._util.trigger;if(!e.id&&o)return!1;if(!e.id&&!o)return!1;var a=(0,(f||i()).getRapidInstance)();if(!a)return!1;var s=(0,(f||i()).geti13nValues)(e.id,e.getAttribute("data-i13n")||e.getAttribute("data-ylk")),u=s.id;return a.isModuleTracked(u)&&a.removeModule(u),e.classList.remove("wafer-rapid-tracked"),!0},_=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,o=void 0===r?document:r,u=e.selector,c=void 0===u?".wafer-rapid-module":u;a(this,t);var d=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:c,props:{selector:c},WaferClass:(l||n()).default}));return(0,(f||i()).getRapidInstance)((document.body.getAttribute("data-wf-rapid")||"rapidInstance").split(".")),d.sync(),d}return u(t,e),d(t,[{key:"trigger",value:function(e){var t=this._state.elementInstances,r=t.get(e),n=r.instance;if(n){"scrollChange"===n._util.trigger&&(n._beaconTrigger(),n.destroy())}}},{key:"sync",value:function(e){if(p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"sync",this).call(this,e),e){var r=this._state.elementInstances,n=b(e);if(n)return void v(n,r);var i=y(e.getElementsByClassName("wafer-rapid-module"));i.length>0&&Array.prototype.forEach.call(i,function(e){v(e,r)})}}},{key:"destroy",value:function(e){if(!e)return void p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this);var r=this._state.elementInstances;e.classList.contains("wafer-rapid-module")&&h(e,r);var n=y(e.getElementsByClassName("wafer-rapid-module",r));n.length>0&&Array.prototype.forEach.call(n,function(e){h(e,r)}),p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this,e)}}]),t}(g);t.default=_,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i;t.default=new((i||function(){return i=n(r("./src/controller.js"))}()).default),e.exports=t.default},"./src/rapidInstance.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=window.wafer.utils.get,i=null,o=null;t.geti13nValues=function(e,t){var r={};return e&&(r.id=e),t&&(r=t.split(";").reduce(function(e,t){var r=t.split(":");return 2===r.length&&(e[r[0]]=r[1]),e},r)),r},t.getRapidInstance=function(e){return e&&(o=e),!i&&o&&(i=n(window,o))&&"function"!=typeof i.refreshModule&&(o=null,i=null),i},t.checkIfModuleIsInTrackedMods=function(){var e=void 0;return function(t){if(!(e=e||window.rapidPageConfig))return!1;var r=e,n=r.rapidConfig,i=void 0===n?{}:n,o=i.tracked_mods_viewability;return!!o&&!!o[t]}}()}})});