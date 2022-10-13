(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src--pages--events-vue"],{

/***/ "./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/pages/Events.vue?vue&type=custom&index=0&blockType=page-query":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/babel-loader/lib??ref--13-0!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/pages/Events.vue?vue&type=custom&index=0&blockType=page-query ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/pages/Events.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/pages/Events.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/gridsome/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "OMR Events"
  },
  computed: {
    jsonld: function jsonld() {
      return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: this.$page.myomr.events.nodes.map(function (event) {
          var url = event.website || "https://omr.com/de/events/" + event.slug;
          return {
            "@type": "Event",
            name: event.name,
            url: url,
            position: 1,
            location: {
              "@type": "Place",
              name: "Messe Hallen Hamburg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Messeplatz 1",
                addressRegion: "20357 Hamburg"
              }
            },
            description: event.descriptionDe,
            startDate: event.startsAt,
            endDate: event.endsAt
          };
        })
      };
    },
    sortedEvents: function sortedEvents() {
      var copy = this.$page.myomr.events.slice();
      return copy.sort();
    }
  },
  methods: {
    formatDate: function formatDate(date, locale) {
      if (locale) {
        moment__WEBPACK_IMPORTED_MODULE_4___default.a.locale(locale);
      } else {
        moment__WEBPACK_IMPORTED_MODULE_4___default.a.locale("de");
      }

      return moment__WEBPACK_IMPORTED_MODULE_4___default.a.utc(String(date, moment__WEBPACK_IMPORTED_MODULE_4___default.a.ISO_8601)).format("dddd, DD.MM.YYYY");
    },
    eventLogo: function eventLogo(logoUrl) {
      if (logoUrl) {
        return "background-image: url(" + logoUrl + ")";
      }

      return "background-image: url(https://omr.com/de/wp-content/uploads/2019/10/omr.jpg)";
    }
  }
});

/***/ }),

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/pages/Events.vue?vue&type=template&id=1ead6167&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/pages/Events.vue?vue&type=template&id=1ead6167& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.jsonld && _vm.jsonld.itemListElement)?_c('script',{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{"type":"application/ld+json"},domProps:{"innerHTML":_vm._s(_vm.jsonld)}}):_vm._e(),_c('section',[_c('div',{staticClass:"page-header--slider"},[_c('div',{staticClass:"carousel slide mb-5",attrs:{"id":"carouselExampleIndicators","data-ride":"carousel"}},[_vm._m(0),_c('div',{staticClass:"carousel-inner"},[_c('div',{staticClass:"carousel-item active",staticStyle:{"background-image":"url('https://omr.com/wp-content/themes/master/assets/dist/images/slider/slide-02-festival18.jpg')"}},[_c('div',{staticClass:"page-header--slider-gradient"}),_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-12 page-header--slider__body"},[_c('div',[_c('span',{staticClass:"page-header--slider__headline"},[_vm._v(_vm._s(_vm.$translate("events.carousel.slide1.head")))]),_c('span',{staticClass:"page-header--slider__subheadline"},[_vm._v(_vm._s(_vm.$translate("events.carousel.slide1.subhead")))]),_c('p',[_c('a',{staticClass:"btn btn-secondary",attrs:{"href":_vm.$translate('events.carousel.slide1.url')}},[_vm._v(_vm._s(_vm.$translate("events.carousel.slide1.cta")))])])])])])])])])])])]),_c('section',{staticClass:"welcome-newsletter"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-content-between"},[_c('div',{staticClass:"col-lg-7"},[_c('h2',[_vm._v(_vm._s(_vm.$translate("events.page.head")))]),_c('p',[_vm._v(_vm._s(_vm.$translate("events.page.intro")))])]),_c('div',{staticClass:"col-xl-4 col-lg-5"})])])]),(_vm.$page.myomr.events.nodes.length)?_c('div',{staticClass:"events"},[_vm._l((_vm.$page.myomr.events.nodes),function(event){return (event.featured)?_c('div',{key:event.id,staticClass:"single-event"},[_c('div',{staticClass:"container featured"},[_c('div',{staticClass:"row seminar-event-box"},[_c('div',{staticClass:"col-xl-5 col-lg-6 order-lg-1 seminar-event-box__image lazy initial",style:(_vm.eventLogo(event.logoUrl)),attrs:{"src":event.logoUrl ||
                'https://omr.com/de/wp-content/uploads/2018/04/180214_omr_aftershow.jpg',"data-was-processed":"true"}}),_c('div',{staticClass:"col-xl-7 col-lg-6 order-lg-2 seminar-event-box__body"},[_c('h3',{staticClass:"seminar-event-box__title"},[_vm._v(_vm._s(event.name))]),_c('div',{staticClass:"seminar-event-box__date"},[_vm._v("\n              "+_vm._s(_vm.formatDate(event.startsAt, _vm.currentLocale()))+"\n            ")]),_c('p',[_vm._v(_vm._s(event.descriptionDe))]),(event.ticketShop)?_c('div',[_c('div',{staticClass:"event-date-picker"},[_c('a',{staticClass:"btn btn-primary",attrs:{"target":"_blank","href":'https://my.omr.com/tickets/?head_event=' + event.slug}},[_vm._v(_vm._s(_vm.$translate("events.page.event.buy_cta")))])])]):_vm._e(),(event.ctaButtonLink)?_c('div',[_c('div',{staticClass:"event-date-picker"},[_c('a',{staticClass:"btn btn-secondary",attrs:{"href":event.ctaButtonLink}},[_vm._v(_vm._s(event.ctaButtonText))])])]):_vm._e(),(event.xingEventsId)?_c('div',[_c('div',{staticClass:"event-date-picker"},[_c('a',{staticClass:"btn btn-primary",attrs:{"target":"_blank","href":'https://www.xing.com/events/' + event.xingEventsId}},[_vm._v(_vm._s(_vm.$translate("events.page.event.buy_cta")))])])]):_vm._e()])])])]):_vm._e()}),_vm._l((_vm.$page.myomr.events.nodes),function(event){return (!event.featured)?_c('div',{key:event.id,staticClass:"single-event"},[_c('div',{staticClass:"container featured"},[_c('div',{staticClass:"row seminar-event-box"},[_c('div',{staticClass:"col-xl-5 col-lg-6 order-lg-1 seminar-event-box__image lazy initial",style:(_vm.eventLogo(event.logoUrl)),attrs:{"src":event.logoUrl ||
                'https://omr.com/de/wp-content/uploads/2018/04/180214_omr_aftershow.jpg',"data-was-processed":"true"}}),_c('div',{staticClass:"col-xl-7 col-lg-6 order-lg-2 seminar-event-box__body"},[_c('h3',{staticClass:"seminar-event-box__title"},[_vm._v(_vm._s(event.name))]),_c('div',{staticClass:"seminar-event-box__date"},[_vm._v("\n              "+_vm._s(_vm.formatDate(event.startsAt, _vm.currentLocale()))+"\n            ")]),_c('p',[_vm._v(_vm._s(event.descriptionDe))]),(event.ticketShop)?_c('div',[_c('div',{staticClass:"event-date-picker"},[_c('a',{staticClass:"btn btn-primary",attrs:{"target":"_blank","href":'https://my.omr.com/tickets/?head_event=' + event.slug}},[_vm._v(_vm._s(_vm.$translate("events.page.event.buy_cta")))])])]):_vm._e(),(event.ctaButtonLink)?_c('div',[_c('div',{staticClass:"event-date-picker"},[_c('a',{staticClass:"btn btn-secondary",attrs:{"href":event.ctaButtonLink}},[_vm._v(_vm._s(event.ctaButtonText))])])]):_vm._e(),(event.xingEventsId)?_c('div',[_c('div',{staticClass:"event-date-picker"},[_c('a',{staticClass:"btn btn-primary",attrs:{"target":"_blank","href":'https://www.xing.com/events/' + event.xingEventsId}},[_vm._v(_vm._s(_vm.$translate("events.page.event.buy_cta")))])])]):_vm._e()])])])]):_vm._e()})],2):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',{staticClass:"carousel-indicators"},[_c('li',{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),_c('li',{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}})])}]



/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/pages/Events.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/pages/Events.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Events.vue":
/*!******************************!*\
  !*** ./src/pages/Events.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Events_vue_vue_type_template_id_1ead6167___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events.vue?vue&type=template&id=1ead6167& */ "./src/pages/Events.vue?vue&type=template&id=1ead6167&");
/* harmony import */ var _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events.vue?vue&type=script&lang=js& */ "./src/pages/Events.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Events_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events.vue?vue&type=style&index=0&lang=css& */ "./src/pages/Events.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _Events_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Events.vue?vue&type=custom&index=0&blockType=page-query */ "./src/pages/Events.vue?vue&type=custom&index=0&blockType=page-query");






/* normalize component */

var component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Events_vue_vue_type_template_id_1ead6167___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Events_vue_vue_type_template_id_1ead6167___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _Events_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_Events_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/Events.vue?vue&type=custom&index=0&blockType=page-query":
/*!***************************************************************************!*\
  !*** ./src/pages/Events.vue?vue&type=custom&index=0&blockType=page-query ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/gridsome/node_modules/babel-loader/lib??ref--13-0!../../node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=custom&index=0&blockType=page-query */ "./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/pages/Events.vue?vue&type=custom&index=0&blockType=page-query");
/* harmony import */ var _node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/Events.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/pages/Events.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=script&lang=js& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/pages/Events.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/Events.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************!*\
  !*** ./src/pages/Events.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--2-oneOf-1-2!../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/pages/Events.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/Events.vue?vue&type=template&id=1ead6167&":
/*!*************************************************************!*\
  !*** ./src/pages/Events.vue?vue&type=template&id=1ead6167& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_1ead6167___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=template&id=1ead6167& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/pages/Events.vue?vue&type=template&id=1ead6167&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_1ead6167___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_1ead6167___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);