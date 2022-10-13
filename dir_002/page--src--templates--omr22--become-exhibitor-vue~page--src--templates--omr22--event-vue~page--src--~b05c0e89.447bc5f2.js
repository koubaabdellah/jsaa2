(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src--templates--omr22--become-exhibitor-vue~page--src--templates--omr22--event-vue~page--src--~b05c0e89"],{

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find-index */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/gridsome/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_omr_dynamic_exhibitors_ExhibitorSingle_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/omr/dynamic/exhibitors/ExhibitorSingle.vue */ "./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    wideList: {
      required: false,
      type: Boolean,
      "default": false
    },
    slug: {
      required: false,
      type: String
    },
    urlOverride: {
      required: false,
      type: String
    },
    exhibitors: {
      type: Array,
      required: true
    },
    nofollow: {
      required: false,
      type: Boolean,
      "default": false
    },
    showall: {
      required: false,
      type: Boolean,
      "default": false
    },
    perPage: {
      required: false,
      type: Number,
      "default": 12
    }
  },
  components: {
    ExhibitorSingle: _components_omr_dynamic_exhibitors_ExhibitorSingle_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      activeCompany: "",
      currentPage: 1,
      repositionedCompanies: []
    };
  },
  watch: {
    activeCompany: function activeCompany(newvalue, oldvalue) {
      this.updateURL(newvalue);
    }
  },
  computed: {
    logoWidth: function logoWidth() {
      return this.wideList ? "col-4 col-md-4 col-lg-3 col-xl-2" : "col-4 col-md-3";
    },
    logoFieldWidth: function logoFieldWidth() {
      return this.wideList ? "col-lg-12" : "col-lg-8 offset-lg-2";
    },
    companiesToBeShown: function companiesToBeShown() {
      if (this.showall) {
        return this.exhibitors;
      }

      return this.exhibitors.slice(0, this.currentPage * this.perPage);
    },
    totalPages: function totalPages() {
      return Math.ceil(this.exhibitors.length / this.perPage);
    },
    moreOrLess: function moreOrLess() {
      if (this.currentPage < this.totalPages) {
        console.log("More: ", this.currentPage, this.totalPages);
        return "expand";
      } else {
        console.log("Less: ", this.currentPage, this.totalPages);
        return "d-none";
      }
    }
  },
  methods: {
    scrollModal: function scrollModal(direction) {
      var _this = this;

      var index = this.companiesToBeShown.findIndex(function (company) {
        if (company !== undefined) {
          return company.slug === _this.activeCompany;
        } else {
          return false;
        }
      });

      if (direction === ">") {
        index++;
        if (this.companiesToBeShown.length <= index) index = 0;
      } else {
        index--;
        if (index < 0) index = this.companiesToBeShown.length - 1;
      }

      if (index === -1) return;
      this.activeCompany = this.companiesToBeShown[index].slug;
    },
    openCompany: function openCompany(slug) {
      this.activeCompany = slug;
      document.body.classList.add("no-scroll");
    },
    closeCompany: function closeCompany() {
      this.activeCompany = "";
      document.body.classList.remove("no-scroll");
    },
    updateURL: function updateURL(newslug) {
      if (newslug) {
        var updateslug = "/" + this.currentLocale() + "/events/" + this.$context.eventSlug + "/exhibitors/" + newslug;
        history.pushState("", "Exhibitor", updateslug);
      } else {
        history.pushState("", "Exhibitor", this.$router.currentRoute.path);
      }
    },
    nextPage: function nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage: function prevPage() {
      this.currentPage = this.currentPage - 1 || 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=template&id=6a4b0b5a&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=template&id=6a4b0b5a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"exhibitors"},[_c('div',{staticClass:"container text-center"},[_vm._t("header")],2),_c('div',{staticClass:"sreveal container teaser"},[_c('div',{staticClass:"row justify-content-center"},[_c('div',{staticClass:"col-lg-6 col-xl-5"},[_vm._t("intro")],2)])]),_c('div',{staticClass:"sreveal container logos"},[_c('div',{staticClass:"row"},[_c('div',{class:_vm.logoFieldWidth},[_c('div',{staticClass:"row logo-row animate__animated animate__fadeInDown"},_vm._l((_vm.companiesToBeShown),function(company){return _c('div',{key:company.id,staticClass:"exhibitor-field-logo",class:_vm.logoWidth},[(company !== undefined)?_c('div',{staticClass:"single-company-logo"},[(company.webLogoUrl)?_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(company.webLogoUrl),expression:"company.webLogoUrl"}],staticClass:"img-fluid exhibitor-logo",attrs:{"alt":company.name,"width":"500"},on:{"click":function($event){return _vm.openCompany(company.slug)}}}):_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(company.logoUrl),expression:"company.logoUrl"}],staticClass:"img-fluid exhibitor-logo",attrs:{"alt":company.name,"width":"500"},on:{"click":function($event){return _vm.openCompany(company.slug)}}}),(company.omrJobsUrl)?_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/we-are-hiring.svg */ "./src/events-assets/omr20/img/icons/we-are-hiring.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/we-are-hiring.svg')}`"}],staticClass:"hiring",attrs:{"alt":"We are Hiring"}}):_vm._e()]):_vm._e()])}),0)])])]),_c('div',{staticClass:"button-container more-button-container text-center"},[(!_vm.showall)?_c('a',{staticClass:"button button--teal showmore__button",class:_vm.moreOrLess,attrs:{"href":""}},[_c('span',{staticClass:"showmore__button--state-more",on:{"click":_vm.nextPage}},[_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".buttons.show_more")))]),_c('span',{staticClass:"showmore__button--state-less",on:{"click":_vm.prevPage}},[_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".buttons.show_less")))])]):_vm._e(),(!_vm.nofollow)?_c('g-link',{staticClass:"button button--blueberry",attrs:{"to":_vm.currentLocale() + '/events/' + _vm.$context.eventSlug + '/exhibitors/'}},[_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".buttons.all_exhibitors")))]):_vm._e()],1),_c('div',{staticClass:"topcompany-modals"},[_c('div',{ref:"topcompaniesModal",staticClass:"modal fade",class:{ show: _vm.activeCompany !== '' },style:({ display: _vm.activeCompany !== '' ? 'block' : '' }),attrs:{"id":"topcompaniesModal","role":"dialog"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"glide__arrows",attrs:{"data-glide-el":"controls"}},[_c('button',{staticClass:"glide__arrow glide__arrow--left",attrs:{"data-glide-dir":"<"},on:{"click":function($event){return _vm.scrollModal('<')}}},[_vm._v("\n                 \n              ")]),_c('button',{staticClass:"glide__arrow glide__arrow--right",attrs:{"data-glide-dir":">"},on:{"click":function($event){return _vm.scrollModal('>')}}},[_vm._v("\n                 \n              ")])]),_c('button',{staticClass:"close close--top",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":function($event){return _vm.closeCompany()}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v(" ")])]),_c('div',{staticClass:"top-companies-modal carousel"},[_c('div',[_c('ul',_vm._l((_vm.companiesToBeShown),function(company,index){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(company.slug === _vm.activeCompany),expression:"company.slug === activeCompany"}],key:index,staticClass:"companylist__slide",attrs:{"data-index":index,"data-slug":company.slug}},[(company !== undefined)?_c('ExhibitorSingle',{attrs:{"company":company}}):_vm._e()],1)}),0)]),_c('div',{staticClass:"glide__arrows",attrs:{"data-glide-el":"controls"}},[_c('button',{staticClass:"glide__arrow glide__arrow--left",attrs:{"data-glide-dir":"<"},on:{"click":function($event){return _vm.scrollModal('<')}}},[_vm._v("\n                   \n                ")]),_c('button',{staticClass:"glide__arrow glide__arrow--right",attrs:{"data-glide-dir":">"},on:{"click":function($event){return _vm.scrollModal('>')}}},[_vm._v("\n                   \n                ")])]),_c('button',{staticClass:"close close--bottom",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":function($event){_vm.activeCompany = ''}}})])])])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue":
/*!*********************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExhibitorsPremium_vue_vue_type_template_id_6a4b0b5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExhibitorsPremium.vue?vue&type=template&id=6a4b0b5a& */ "./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=template&id=6a4b0b5a&");
/* harmony import */ var _ExhibitorsPremium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExhibitorsPremium.vue?vue&type=script&lang=js& */ "./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExhibitorsPremium_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExhibitorsPremium.vue?vue&type=style&index=0&lang=scss& */ "./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExhibitorsPremium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExhibitorsPremium_vue_vue_type_template_id_6a4b0b5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExhibitorsPremium_vue_vue_type_template_id_6a4b0b5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsPremium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./ExhibitorsPremium.vue?vue&type=script&lang=js& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsPremium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsPremium_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--4-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./ExhibitorsPremium.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsPremium_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsPremium_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsPremium_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsPremium_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsPremium_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=template&id=6a4b0b5a&":
/*!****************************************************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=template&id=6a4b0b5a& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsPremium_vue_vue_type_template_id_6a4b0b5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!../../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./ExhibitorsPremium.vue?vue&type=template&id=6a4b0b5a& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsPremium.vue?vue&type=template&id=6a4b0b5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsPremium_vue_vue_type_template_id_6a4b0b5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsPremium_vue_vue_type_template_id_6a4b0b5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);