(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src--templates--familymembers--exhibitors-vue"],{

/***/ "./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/familymembers/Exhibitors.vue?vue&type=custom&index=0&blockType=page-query":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/babel-loader/lib??ref--13-0!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/templates/familymembers/Exhibitors.vue?vue&type=custom&index=0&blockType=page-query ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/familymembers/Exhibitors.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/templates/familymembers/Exhibitors.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_omr_Hero_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/omr/Hero.vue */ "./src/components/omr/Hero.vue");
/* harmony import */ var _components_familymember_ExhibitorsPremium_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/familymember/ExhibitorsPremium.vue */ "./src/components/familymember/ExhibitorsPremium.vue");
/* harmony import */ var _components_omr_dynamic_exhibitors_ExhibitorsList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/omr/dynamic/exhibitors/ExhibitorsList.vue */ "./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue");


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
  name: "Exhibitors",
  metaInfo: function metaInfo() {
    return {
      title: this.$translate(this.$context.eventSlug + ".exhibitorpage.pagetitle") + " | " + this.$translate(this.$context.eventSlug + ".meta.title"),
      htmlAttrs: {
        lang: this.currentLocale()
      },
      meta: [{
        key: "description",
        name: "description",
        content: this.$translate(this.$context.eventSlug + ".exhibitorpage.pagetitle")
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:title",
        content: this.$translate(this.$context.eventSlug + ".exhibitorpage.pagetitle") + " | " + this.$translate(this.$context.eventSlug + ".meta.title")
      }, {
        property: "og:description",
        content: this.$translate(this.$context.eventSlug + ".meta.description")
      }, {
        property: "og:url",
        content: this.$context.canonical
      }, {
        property: "og:image",
        content: this.$translate(this.$context.eventSlug + ".meta.social_image_URL")
      }, {
        property: "fb:app_id",
        content: this.$translate(this.$context.eventSlug + ".meta.fbAppID")
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: this.$translate(this.$context.eventSlug + ".exhibitorpage.pagetitle") + " | " + this.$translate(this.$context.eventSlug + ".meta.title")
      }, {
        name: "twitter:description",
        content: this.$translate(this.$context.eventSlug + ".meta.description")
      }, {
        name: "twitter:site",
        content: this.$translate(this.$context.eventSlug + ".meta.twitterHandle")
      }, {
        name: "twitter:creator",
        content: this.$translate(this.$context.eventSlug + ".meta.twitterHandle")
      }, {
        name: "twitter:image",
        content: this.$translate(this.$context.eventSlug + ".meta.social_image_URL")
      }],
      bodyAttrs: {
        "class": "page__aussteller"
      },
      link: [{
        rel: "canonical",
        href: this.$context.canonical
      }]
    };
  },
  components: {
    Hero: _components_omr_Hero_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ExhibitorsPremium: _components_familymember_ExhibitorsPremium_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ExhibitorsList: _components_omr_dynamic_exhibitors_ExhibitorsList_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: {
    filteredCompanies: function filteredCompanies() {
      return this.$page.myomr.event.partnerCompanyListing.filter(function (o) {
        return o.webLogoUrl && o.descriptionDe && o.id;
      });
    },
    premiumCompanies: function premiumCompanies() {
      return this.filteredCompanies.filter(function (p) {
        return p.booths.some(function (s) {
          return s.premium === true;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/familymembers/Exhibitors.vue?vue&type=template&id=5cd1a24a&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/templates/familymembers/Exhibitors.vue?vue&type=template&id=5cd1a24a& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('Hero',{attrs:{"head_text":_vm.$translate(_vm.$context.eventSlug + '.exhibitorpage.hero.head')}}),_c('section',{staticClass:"hero-teaser hero-teaser-subpage"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-10 offset-lg-1"},[_vm._v("\n          "+_vm._s(_vm.$translate(_vm.$context.eventSlug + ".exhibitorpage.hero.intro"))+"\n        ")])])])]),_c('ExhibitorsPremium',{attrs:{"exhibitors":_vm.filteredCompanies,"wideList":""}},[_c('h2',{attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"stroke"},[_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".exhibitorpage.toplist.head1")))]),_c('br'),_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".exhibitorpage.toplist.head2"))+"\n    ")]),_c('p',{staticClass:"sreveal",attrs:{"slot":"intro"},slot:"intro"},[_vm._v("\n      "+_vm._s(_vm.$translate(_vm.$context.eventSlug + ".exhibitorpage.toplist.intro"))+"\n    ")])]),_c('ExhibitorsList',{attrs:{"exhibitors":_vm.filteredCompanies,"slug":_vm.$context.slug}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "./src/templates/familymembers/Exhibitors.vue":
/*!****************************************************!*\
  !*** ./src/templates/familymembers/Exhibitors.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Exhibitors_vue_vue_type_template_id_5cd1a24a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exhibitors.vue?vue&type=template&id=5cd1a24a& */ "./src/templates/familymembers/Exhibitors.vue?vue&type=template&id=5cd1a24a&");
/* harmony import */ var _Exhibitors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Exhibitors.vue?vue&type=script&lang=js& */ "./src/templates/familymembers/Exhibitors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _events_assets_omr20_main_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/events-assets/omr20/main.min.css?vue&type=style&index=0&lang=css& */ "./src/events-assets/omr20/main.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _Exhibitors_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Exhibitors.vue?vue&type=custom&index=0&blockType=page-query */ "./src/templates/familymembers/Exhibitors.vue?vue&type=custom&index=0&blockType=page-query");






/* normalize component */

var component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Exhibitors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Exhibitors_vue_vue_type_template_id_5cd1a24a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Exhibitors_vue_vue_type_template_id_5cd1a24a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _Exhibitors_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_Exhibitors_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/templates/familymembers/Exhibitors.vue?vue&type=custom&index=0&blockType=page-query":
/*!*************************************************************************************************!*\
  !*** ./src/templates/familymembers/Exhibitors.vue?vue&type=custom&index=0&blockType=page-query ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Exhibitors_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/gridsome/node_modules/babel-loader/lib??ref--13-0!../../../node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Exhibitors.vue?vue&type=custom&index=0&blockType=page-query */ "./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/familymembers/Exhibitors.vue?vue&type=custom&index=0&blockType=page-query");
/* harmony import */ var _node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Exhibitors_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Exhibitors_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Exhibitors_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Exhibitors_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Exhibitors_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/templates/familymembers/Exhibitors.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/templates/familymembers/Exhibitors.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Exhibitors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Exhibitors.vue?vue&type=script&lang=js& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/familymembers/Exhibitors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Exhibitors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/templates/familymembers/Exhibitors.vue?vue&type=template&id=5cd1a24a&":
/*!***********************************************************************************!*\
  !*** ./src/templates/familymembers/Exhibitors.vue?vue&type=template&id=5cd1a24a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Exhibitors_vue_vue_type_template_id_5cd1a24a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Exhibitors.vue?vue&type=template&id=5cd1a24a& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/familymembers/Exhibitors.vue?vue&type=template&id=5cd1a24a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Exhibitors_vue_vue_type_template_id_5cd1a24a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Exhibitors_vue_vue_type_template_id_5cd1a24a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);