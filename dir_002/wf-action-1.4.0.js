!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-action",[],e):"object"==typeof exports?exports["wafer-action"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-action"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/base.js":function(t,e,r){"use strict";function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},c=function(){function t(t,e){var r=[],o=!0,a=!1,n=void 0;try{for(var i,s=t[Symbol.iterator]();!(o=(i=s.next()).done)&&(r.push(i.value),!e||r.length!==e);o=!0);}catch(t){a=!0,n=t}finally{try{!o&&s.return&&s.return()}finally{if(a)throw n}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),l=[],d=window.wafer,p=d.constants,f=d.features,b=d.utils,m=d.WaferBaseClass,v=p.ATTR_PREFIX,y=b.bindEvent,h=b.fetchWithCache,g=b.findAncestor,k=b.getTemplateContent,w=b.getWaferInstanceForElem,_=["handleClick"],T="wafer-action-is-true",S={block:-1,unblock:0},P="publisher",A={},E=function(t){function e(t){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=i.appId,d=i.actionHost,p=i.bookmarkActionHost,f=i.crumb,b=i.id,m=i.name,y=i.providerBrandProperty,h=i.selector,w=i.shouldSaveToStorage,S=i.subType,A=i.type;a(this,e);var E=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{selector:h},{STATE_ATTRS:l}));u=t.getAttribute(v+"app-id")||u,f=t.getAttribute(v+"crumb")||f;var O=t.getAttribute(v+"action-type")||A||"follow",I=t.getAttribute(v+"action-api-path"),j=t.getAttribute(v+"action-sub-type")||S,L=t.getAttribute(v+"action-sub-type-category")||"",B=t.getAttribute(v+"action-id")||b,C=t.getAttribute(v+"action-content-id")||"",H=t.getAttribute(v+"action-label"),x=t.getAttribute(v+"action-name")||m,D=H&&H.split("|")||[],M=c(D,2),R=M[0],N=M[1],W=t.getAttribute(v+"action-title")||"",F=t.getAttribute(v+"action-boundary"),J=t.getAttribute(v+"action-on-template"),K=t.getAttribute(v+"action-off-template"),U=t.getAttribute(v+"action-error-template"),Y=t.getAttribute(v+"action-template-target"),q=Number(t.getAttribute(v+"action-template-animation-duration")),X=J&&k(document.getElementById(J)),V=K&&k(document.getElementById(K)),z=U&&k(document.getElementById(U)),G=Y&&document.getElementById(Y),Q={follow:d+"api/v3/topics?appId="+u,block:d+"api/v1/content/feedback/"+(j===P?P:"entities")+"?appId="+u,blockProvider:d+"api/v1/providerbrands/block/providers/"+B+"?appId="+u,unblockProviderBrand:d+"api/v1/providerbrands/block?appId="+u},Z=I||Q[O],$=F&&g(t,F);return E._util=s({},E._util,(r={actionErrorTemplate:z,actionHost:d,actionOffTemplate:V,actionOnTemplate:X,actionTemplateDuration:q,apiPath:Z,appId:u,bookmarkActionHost:p,boundaryElem:$,contentId:C,crumb:f,elem:t,falseLabel:N,id:B,mappingId:B+O+j+L,providerBrandProperty:y,subType:j,subTypeCategory:L,templateTargetElem:G,shouldSaveToStorage:void 0===w?void 0:!!w,name:x},o(r,"subType",j),o(r,"title",W),o(r,"trueLabel",R),o(r,"type",O),r)),_.forEach(function(t){E[t]=E[t].bind(E)}),E._state={actionStatus:!1,inProgress:!1},t.classList.add("has-click","has-wafer-click"),setTimeout(function(){E.setActionStatus(t.classList.contains(T))},0),E}return i(e,t),u(e,[{key:"renderActionTemplate",value:function(t){var e=t.type,r=void 0;if("error"===e){r=this._util.actionErrorTemplate}else if(this._state.actionStatus){var o=this._util.actionOnTemplate;r=o}else{var a=this._util.actionOffTemplate;r=a}if(r){var n=this._util,i=n.actionTemplateDuration,s=n.templateTargetElem,c=document.createElement("div");c.innerHTML=r;var u=c.children[0],l=u.getElementsByClassName("close")[0];s&&(s.innerHTML=""),(s||document.body).appendChild(u),l&&y(u,"click",function(t){t.preventDefault(),u.classList.add("animation-disappear-start"),setTimeout(function(){u.classList.add("animation-disappear-end"),u.parentNode.removeChild(u)},i)}),i&&(u.classList.add("animation-appear-start"),setTimeout(function(){u.classList.add("animation-appear-end")},i))}}},{key:"statusDidUpdate",value:function(t){var e=this._util.elem;if(e){var r=this._util,o=r.falseLabel,a=r.trueLabel;this._state.actionStatus=t,t?(o&&e.setAttribute("title",o),e.classList.add(T)):(a&&e.setAttribute("title",a),e.classList.remove(T))}}},{key:"saveToStorage",value:function(){if(f.localStorage){var t=this._util,r=t.id,o=t.name,a=void 0===o?"":o,n=t.subType,i=t.type,s=Date.now()+9e5;return window.localStorage.setItem(e.LS_KEY,JSON.stringify({id:r,name:a,subType:n,ttl:s,type:i})),Promise.resolve()}}},{key:"triggerTopicAction",value:function(t){var e=this._util,r=e.appId,a=e.actionHost,n=e.bookmarkActionHost,i=e.contentId,s=e.id,c=e.name,u=e.providerBrandProperty,l=e.shouldSaveToStorage,d=e.subType,p=e.subTypeCategory,f=e.title,b=e.type,m=this._util.apiPath,v={follow:this._state.actionStatus?"PUT":"DELETE",block:"POST",blockProvider:this._state.actionStatus?"PUT":"DELETE",bookmark:this._state.actionStatus?"POST":"DELETE",urlBookmark:"DELETE",unblockProviderBrand:"POST"},y=v[b],g=void 0,k=void 0;return"follow"===b?(g={types:o({},d,[{id:s}])},k={Crumb:t},"provider"===d&&(g.types[d][0].type=p||"PROVIDER")):"block"===b?(g={entities:[{entity_id:s,entity_type:d,score:S[this._state.actionStatus?"block":"unblock"]}]},k={Crumb:t},d===P&&(g.entities[0].entity_name=c)):"blockProvider"===b?(g={property:u},k={Crumb:t}):"unblockProviderBrand"===b?(g={brands:[{id:s}]},k={Crumb:t}):"bookmark"===b?("DELETE"===y?m=n+"api/v1/user/bookmarks/"+d+"/"+i+"?appId="+r:(m=n+"api/v1/user/bookmarks/"+d+"?appId="+r,g={contentId:i,title:f}),k={"X-CSRF-Token":t}):"urlBookmark"===b?(m="deleteFolder"===d?a+"api/v1/bookmarks/folders/"+i+"?appId="+r:a+"api/v1/bookmarks/items/"+i+"?appId="+r,k={Crumb:t}):"location"===b&&(g={requests:{g0:{resource:"WeatherLocationService.favoriteLocation",operation:this._state.actionStatus?"create":"delete",params:{woeid:s}}}}),l?this.saveToStorage():h(m,{body:JSON.stringify(g),cache:0,clientHeaders:k,credentials:"include",method:y,mode:"cors"})}},{key:"getCrumb",value:function(){var t=this._util,e=t.appId,r=t.actionHost,o=t.bookmarkActionHost,a=t.shouldSaveToStorage,n=t.type;if("location"===n)return Promise.resolve({});var i=this._util.crumb||A[n];if(i||a)return new Promise(function(t){t(i||"")});var s=void 0;return s="bookmark"===n?o+"api/v1/auth/crumb?appId="+e:r+"api/v1/auth/crumb?appId="+e,h(s,{cache:0,credentials:"include",mode:"cors"}).then(function(t){var e=t.crumb;if(A[n]=e,!e)throw new Error("crumb not found");return e})}},{key:"trigger",value:function(t){var e=this,r=this._util.type;if(t){var o=t.crumb;o&&(A[r]=o),this._util=s({},this._util,t)}var a=this._util,n=a.elem,i=a.boundaryElem,c=a.name,u=this._state.actionStatus;this._state.inProgress=!0,i&&i.classList.add("wafer-action-in-progress"),u?this.setActionStatus(!1):this.setActionStatus(!0),this.getCrumb().then(function(t){return e._state.inProgress=!1,e.triggerTopicAction(t)}).then(function(t){var r=t||{},o=r.result,a=void 0===o?{}:o,u=a.success,l=void 0===u?{}:u,d=l.entities,p=void 0===d?[]:d,f=e._util,b=f.id,m=f.subType,y=f.type,h={id:b,name:c,subType:m,type:y};if("blockProvider"===y||"unblockProviderBrand"===y){var g=t.data;g=void 0===g?{}:g;var k=g.currentBlocked;void 0!==k&&(h=s({currentBlocked:k},h))}var _="follow"===y&&p.some(function(t){return t.id===b}),T=("block"===y||"blockProvider"===y||"unblockProviderBrand"===y)&&(null!==t&&t===Object(t)),S="bookmark"===y&&(null!==t&&t===Object(t)),P="urlBookmark"===y&&(null!==t&&t===Object(t)),A=void 0;if("follow"===y)A=_;else if("block"===y||"blockProvider"===y||"unblockProviderBrand"===y)A=T;else if("urlBookmark"===y)A=P;else if("location"===y){var E=e._util.locationAssistTargetElem;if(!E){var O=n.getAttribute(v+"action-location-assist-target");O&&(E=e._util.locationAssistTargetElem=document.querySelector(O))}if(E){var I=w(E,"wafer-autocomplete");I&&I.instance._instance.fetchAndRenderSavedLocations()}A=!0}else A=S;if(!A)throw i&&(i.classList.add("wafer-action-boundary-error"),i.classList.remove("wafer-action-boundary-success","wafer-action-in-progress")),new Error("action failed");i&&(i.classList.add("wafer-action-boundary-success"),i.classList.remove("wafer-action-boundary-error","wafer-action-in-progress")),e.renderActionTemplate({type:"success"}),e.didComplete(null,h)}).catch(function(){e._state.inProgress=!1,i&&(i.classList.remove("wafer-action-in-progress","wafer-action-boundary-success"),i.classList.add("wafer-action-boundary-error")),e._state.actionStatus=!e._state.actionStatus,e.renderActionTemplate({type:"error"}),e.setActionStatus(e._state.actionStatus)})}},{key:"handleClick",value:function(t){t.preventDefault(),this._state.inProgress||this.trigger()}}]),e}(m);E.events={click:[["has-click","handleClick"]]},E.LS_KEY=v+"action-storage",e.default=E,t.exports=e.default},"./src/controller.js":function(t,e,r){"use strict";function o(){return c=a(r("./src/base.js"))}function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c,u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},l=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),d=window.wafer,p=d.controllers,f=d.features,b=d.utils,m=p.WaferBaseController,v=b.getConfigFromJSONScriptNode,y=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.root,a=void 0===r?document:r,s=t.selector;n(this,e);var l=v(document.getElementById("wafer-action-config")),d=l.actionHost,p=l.appId,b=l.bookmarkActionHost,m=l.crumb,y=l.providerBrandProperty,h=l.shouldSaveToStorage,g=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:a,selector:s,props:{actionHost:d,appId:p,bookmarkActionHost:b,crumb:m,providerBrandProperty:y,shouldSaveToStorage:h,selector:s},WaferClass:(c||o()).default})),k=g;return g.sync(),g._state=u({},g._state,{idInstanceMapping:new Map}),(c||o()).default.prototype.setActionStatus=function(t){var e=this._util.mappingId,r=k._state.idInstanceMapping;r.has(e)||r.set(e,[]),r.get(e).push(this),r.get(e).forEach(function(e){e.statusDidUpdate(t)})},f.localStorage&&setTimeout(function(){g.processStoredAction(l,s)},1),g}return s(e,t),l(e,[{key:"processStoredAction",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t.shouldProcessState){var r=t.actionHost,a=t.appId,n=t.bookmarkActionHost,i=t.crumb,s=t.providerBrandProperty,l=window.localStorage.getItem((c||o()).default.LS_KEY);if(l){var d=document.createElement("div"),p={actionHost:r,appId:a,bookmarkActionHost:n,crumb:i,providerBrandProperty:s,selector:e};try{var f=JSON.parse(l),b=f.id,m=f.name,v=f.ttl,y=void 0===v?0:v,h=f.subType,g=f.type;y&&y>=Date.now()&&g&&h&&b&&(d.setAttribute("data-wf-on","complete:setState:wfAction.entity."+g),new((c||o()).default)(d,Object.assign({},p,{id:b,name:m,subType:h,type:g})).trigger(u({},p,{id:b,name:m,subType:h,type:g})))}catch(t){}window.localStorage.removeItem((c||o()).default.LS_KEY)}}}}]),e}(m);e.default=y,t.exports=e.default},"./src/entry.js":function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a;e.default=new((a||function(){return a=o(r("./src/controller.js"))}()).default)({selector:".wafer-action"}),t.exports=e.default}})});