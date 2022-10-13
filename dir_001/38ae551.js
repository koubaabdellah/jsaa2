(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1030:function(e,t,n){var content=n(1075);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("a0917180",content,!0,{sourceMap:!1})},1034:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(12),c=n(2),o=n(4),l=(n(48),n(22)),f=n(14),d=n(264),v=new f.b("observerDirective"),h=function(){function e(){Object(c.a)(this,e),this.refreshOnUpdate=!1}var t;return Object(o.a)(e,[{key:"bind",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r,c,o,f,h,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.default.nextTick();case 2:this.refreshOnUpdate="undefined"!==(null===(r=null==n?void 0:n.value)||void 0===r?void 0:r.refreshOnUpdate)&&(null===(c=null==n?void 0:n.value)||void 0===c?void 0:c.refreshOnUpdate),this.observer=new d.a({data:null===(o=null==n?void 0:n.value)||void 0===o?void 0:o.data,rootMargin:(null===(f=null==n?void 0:n.value)||void 0===f?void 0:f.rootMargin)||"0px 0px -100% 0px",el:t,threshold:(null===(h=null==n?void 0:n.value)||void 0===h?void 0:h.threshold)||0,singleIntersection:(null===(y=null==n?void 0:n.value)||void 0===y?void 0:y.singleIntersection)||!1},(function(data){var e;v.log(data);var t=null===(e=null==n?void 0:n.value)||void 0===e?void 0:e.handler;t?t(data):v.warn("No handler specified on Intersection Observer directive")}));case 4:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"update",value:function(){this.observer&&this.refreshOnUpdate&&this.observer.refresh()}},{key:"componentUpdated",value:function(){this.observer&&this.refreshOnUpdate&&this.observer.refresh()}},{key:"unbind",value:function(){this.observer&&this.observer.destroy()}}]),e}()},1074:function(e,t,n){"use strict";n(1030)},1075:function(e,t,n){var r=n(59)(!1);r.push([e.i,".c-scrollPercent{position:relative}.c-scrollPercent_marker{height:0;position:absolute;width:100%}",""]),e.exports=r},1103:function(e,t,n){"use strict";n(10),n(20),n(11),n(19),n(24),n(15),n(25);var r=n(7),c=n(2),o=n(4),l=n(5),f=n(6),d=n(3),v=(n(43),n(54),n(0)),h=n(8),y=n(14),O=n(264);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=new y.a("ScrollPercent"),P=function(e){Object(l.a)(n,e);var t=j(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"mounted",value:function(){this.createObserver()}},{key:"getStyles",value:function(e){return{top:"".concat(e,"%")}}},{key:"createObserver",value:function(){this.observer=new O.a({el:this.$refs.markers,data:this.percentages},this.handleScroll)}},{key:"handleScroll",value:function(e){m.log("handleScroll",e),this.$emit("scroll-percent",e)}},{key:"cleanup",value:function(){var e;m.log("cleanup"),null===(e=this.observer)||void 0===e||e.destroy()}},{key:"beforeDestroy",value:function(){this.cleanup()}}]),n}(h.Vue);Object(v.b)([Object(h.Prop)({default:function(){return[25,50,75,100]}}),Object(v.d)("design:type",Array)],P.prototype,"percentages",void 0);var k=P=Object(v.b)([h.Component],P),x=(n(1074),n(16)),w=Object(x.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-scrollPercent"},[e._t("default"),e._v(" "),e._l(e.percentages,(function(t,i){return n("div",{key:i,ref:"markers",refInFor:!0,staticClass:"c-scrollPercent_marker",style:e.getStyles(t)})}))],2)}),[],!1,null,null,null).exports,$=n(432);function R(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var _=new y.a("TrackScroll"),D=function(e){Object(l.a)(n,e);var t=S(n);function n(){var e;return Object(c.a)(this,n),(e=t.apply(this,arguments)).firedPercents=[],e}return Object(o.a)(n,[{key:"routeChange",value:function(){this.firedPercents=[]}},{key:"handleScroll",value:function(e){var t,n;if("down"===(null==e?void 0:e.direction)){var r=null==e?void 0:e.data;this.firedPercents.includes(r)||(_.log(e),_.log("scrolled",r),this.firedPercents.push(r),this.trackScroll(r,e)),this.percentages.length===this.firedPercents.length&&(_.log("all scroll percentages fired, cleaning up"),null===(n=null===(t=this.$refs)||void 0===t?void 0:t.scrollPercent)||void 0===n||n.cleanup())}}},{key:"trackScroll",value:function(e,t){t.data=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({percentage:t.data},this.trackingData),this.$track($.a).with({clickGenericText:"scroll"+e,eventName:"percentageScrollTracking"}).fire(),this.$emit("scroll-change",e,t)}}]),n}(h.Vue);Object(v.b)([Object(h.Prop)({default:function(){return[25,50,75,100]}}),Object(v.d)("design:type",Array)],D.prototype,"percentages",void 0),Object(v.b)([Object(h.Prop)({default:function(){}}),Object(v.d)("design:type",Object)],D.prototype,"trackingData",void 0),Object(v.b)([Object(h.Watch)("$route"),Object(v.d)("design:type",Function),Object(v.d)("design:paramtypes",[]),Object(v.d)("design:returntype",void 0)],D.prototype,"routeChange",null);var C=D=Object(v.b)([Object(h.Component)({components:{ScrollPercent:w}})],D),T=Object(x.a)(C,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("ScrollPercent",{ref:"scrollPercent",on:{"scroll-percent":e.handleScroll}},[e._t("default")],2)}),[],!1,null,null,null);t.a=T.exports},1381:function(e,t,n){"use strict";n.r(t);n(10);var r,c=n(12),o=n(29),l=n(2),f=n(4),d=n(5),v=n(6),h=n(3),y=(n(48),n(21),n(17),n(0)),O=n(8),j=n(106),m=n(75),P=n(76),k=n(61);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(h.a)(e);if(t){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(v.a)(this,n)}}var w=function(e){Object(d.a)(n,e);var t=x(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).services=["tagular"],r}return Object(f.a)(n,[{key:"defaults",get:function(){return{"@type":"core.InfinitePageScrolled.v1",isInfiniteScroll:!0}}}]),n}(n(138).a);w=Object(y.b)([Object(m.a)(k.a.Transient),Object(y.e)(0,P.a),Object(y.d)("design:paramtypes",["function"==typeof(r=void 0!==j.Context&&j.Context)?r:Object])],w);n(20),n(11),n(19),n(24),n(15),n(25);var $=n(7),R=(n(79),n(998)),S=n(1034);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object($.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(h.a)(e);if(t){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(v.a)(this,n)}}var T=new(n(14).b)("SeamlessTriggers"),I=function(e){Object(d.a)(n,e);var t=C(n);function n(){var e;return Object(l.a)(this,n),(e=t.apply(this,arguments)).requested=!1,e}return Object(f.a)(n,[{key:"config",get:function(){return this.$seamless.config}},{key:"requestObserverOptions",get:function(){var e,t;return D({handler:this.requestPage,data:{index:this.index}},(null===(t=null===(e=this.config)||void 0===e?void 0:e.intersectionObservers)||void 0===t?void 0:t.request)||{})}},{key:"enterObserverOptions",get:function(){var e,t;return D({handler:this.enterPage,data:{index:this.index}},(null===(t=null===(e=this.config)||void 0===e?void 0:e.intersectionObservers)||void 0===t?void 0:t.enter)||{})}},{key:"requestPage",value:function(e){var data=e.data,t=e.direction;if("down"===t&&!this.requested){T.log("requestPage",t,data);try{this.$emit("seamless-insert-page",data.index,this.$seamless.requestPage({data:data,direction:t})),this.requested=!0}catch(e){T.error(e)}}}},{key:"enterPage",value:function(e){var data=e.data,t=e.direction;T.log("enterPage",t,data),this.$emit("seamless-enter-page",{data:data,direction:t})}}]),n}(O.Vue);Object(y.b)([Object(O.Prop)({default:!1,required:!0}),Object(y.d)("design:type",Number)],I.prototype,"index",void 0);var B=I=Object(y.b)([O.Component,Object(R.a)("intersection-observer",S.a)],I),E=n(16),U=Object(E.a)(B,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-seamlessTriggers"},[n("div",{directives:[{name:"intersection-observer",rawName:"v-intersection-observer",value:e.requestObserverOptions,expression:"requestObserverOptions"}]}),e._v(" "),n("div",{directives:[{name:"intersection-observer",rawName:"v-intersection-observer",value:e.enterObserverOptions,expression:"enterObserverOptions"}]})])}),[],!1,null,null,null).exports,M=n(101),F=n(1103);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(h.a)(e);if(t){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(v.a)(this,n)}}var L=function(e){Object(d.a)(h,e);var t,n,r,v=N(h);function h(){var e;return Object(l.a)(this,h),(e=v.apply(this,arguments)).pages=[],e.currentParentPage=null,e.listing=null,e.pageRequestPromises=[],e.loading=!1,e}return Object(f.a)(h,[{key:"getPages",value:function(){var e,t=(null===(e=this.$refs)||void 0===e?void 0:e.pages)?this.$refs.pages:[];return[this.currentParentPage].concat(Object(o.a)(t))}},{key:"getPageByIndex",value:function(e){var t;return(null===(t=this.getPages())||void 0===t?void 0:t[e])||null}},{key:"routeChange",value:function(){this.cleanup()}},{key:"beforeDestroy",value:function(){this.cleanup(),this.$nuxt.$off("pageMounted")}},{key:"beforeMount",value:function(){var e=this;this.$nuxt.$on("pageMounted",(function(t){e.currentParentPage=t,e.initializeSeamless()}))}},{key:"initializeSeamless",value:(r=Object(c.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$services.isFeatureEnabled("seamless")){e.next=3;break}return M.a.warn("Seamless is disabled"),e.abrupt("return");case 3:return this.$seamless.createSeamlessMeta(this.$meta()),e.next=6,this.$seamless.requestSeamlessListing(null===(t=this.currentParentPage)||void 0===t?void 0:t.content);case 6:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=10;break}e.t0=void 0===n;case 10:if(!e.t0){e.next=14;break}e.t2=void 0,e.next=15;break;case 14:e.t2=n.items;case 15:this.listing=e.t2;case 16:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"enterPage",value:(n=Object(c.a)(regeneratorRuntime.mark((function e(t){var data,n,r,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=t.data,n=t.direction,M.a.log("waiting for page to be requested and inserted"),e.prev=2,e.next=5,this.pageRequestPromises[data.index];case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(2),M.a.error(e.t0),e.abrupt("return");case 11:M.a.log("enterPage",data,n),r="down"===n?data.index+1:data.index,c=this.getPageByIndex(r),o="down"===n?data.index-1:data.index+1,l=this.getPageByIndex(o),M.a.log("previousPage",l),l&&l.removeAds(),this.$seamless.enterPage(c,l,{data:data,direction:n});case 19:case"end":return e.stop()}}),e,this,[[2,7]])}))),function(e){return n.apply(this,arguments)})},{key:"preInsertPage",value:function(e,t){var n=this;this.loading=!0,this.pageRequestPromises[e]=new Promise((function(r,c){try{t.then((function(t){var o;(null===(o=null==t?void 0:t.content)||void 0===o?void 0:o.content)?(n.insertPage(t.content,e,t.pageTypeConfig).then(r),n.loading=!1):c(new Error("no content found on page"))}))}catch(e){M.a.error(e),n.loading=!1,c(e)}}))}},{key:"insertPage",value:(t=Object(c.a)(regeneratorRuntime.mark((function e(content,t,n){var component;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.component();case 2:return component=(component=e.sent).extend({data:function(){return{content:content}},beforeCreate:function(){try{this.$options.asyncData(this.$nuxt.context,content)}catch(e){M.a.error("error calling 'asyncData' for page with slug: '".concat(content.id,"'"),e)}}}),this.$config.ads.adDisplay.delayLoad=!0,this.$nuxt.$meta().pause(),this.pages.push(component),e.next=9,this.$nextTick();case 9:try{this.$refs.pages[t]?M.a.log("inserted page: '".concat(content.pageType,"' with slug: '").concat(content.id,"'")):(this.pages.pop(),M.a.warn("could not find a reference to a page at index ".concat(t)))}catch(e){M.a.error("error getting page reference for slug: '".concat(content.id,"'"),e)}case 10:case"end":return e.stop()}}),e,this)}))),function(e,n,r){return t.apply(this,arguments)})},{key:"trackScroll",value:function(e,t){var n,r;this.$services.isFeatureEnabled("seamless")?(M.a.log("Firing Cohesion scroll event",e,null===(n=null==t?void 0:t.data)||void 0===n?void 0:n.index),this.$track(w).with({scrollDistance:e,pageIndex:null===(r=null==t?void 0:t.data)||void 0===r?void 0:r.index}).fire()):M.a.log("Not firing scroll events, seamless is disabled")}},{key:"cleanup",value:function(){this.$config.ads.adDisplay.delayLoad=!1,this.pages=[],this.pageRequestPromises=[],this.listing=null,this.$store.commit("page/clearSeamless"),this.$nuxt.$meta().resume()}}]),h}(O.Vue);Object(y.b)([Object(O.Watch)("$route"),Object(y.d)("design:type",Function),Object(y.d)("design:paramtypes",[]),Object(y.d)("design:returntype",void 0)],L.prototype,"routeChange",null);var V=L=Object(y.b)([Object(O.Component)({components:{SeamlessTriggers:U,TrackScroll:F.a}})],L),A=Object(E.a)(V,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-seamlessListing"},[n("TrackScroll",{attrs:{"tracking-data":{index:0}},on:{"scroll-change":e.trackScroll}},[e._t("default")],2),e._v(" "),e.listing?[n("SeamlessTriggers",{attrs:{index:0},on:{"seamless-insert-page":e.preInsertPage,"seamless-enter-page":e.enterPage}}),e._v(" "),e._l(e.pages,(function(t,r){return[n("TrackScroll",{key:t.slug,attrs:{"tracking-data":{index:r+1}},on:{"scroll-change":e.trackScroll}},[n(t,{ref:"pages",refInFor:!0,tag:"component",attrs:{"is-seamless":!0}})],1),e._v(" "),r<e.listing.length-1?n("SeamlessTriggers",{key:t.slug,attrs:{index:r+1},on:{"seamless-insert-page":e.preInsertPage,"seamless-enter-page":e.enterPage}}):e._e()]}))]:e._e(),e._v(" "),e.loading?e._t("loader"):e._e()],2)}),[],!1,null,null,null);t.default=A.exports},998:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(22);var r=n(69);function c(e){return{bind:e.bind?function(){return e.bind.apply(e,arguments)}:function(){},componentUpdated:e.componentUpdated?function(){return e.componentUpdated.apply(e,arguments)}:function(){},inserted:e.inserted?function(){return e.inserted.apply(e,arguments)}:function(){},unbind:e.unbind?function(){return e.unbind.apply(e,arguments)}:function(){},update:e.update?function(){return e.update.apply(e,arguments)}:function(){}}}function o(e,t){var n=new t;return Object(r.createDecorator)((function(t){t.directives=(null==t?void 0:t.directives)||{},t.directives[e]=c(n)}))}}}]);
//# sourceMappingURL=38ae551.js.map