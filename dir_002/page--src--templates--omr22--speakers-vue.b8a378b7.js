(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src--templates--omr22--speakers-vue"],{

/***/ "./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/static-query.js!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/omr22/Speakers.vue?vue&type=custom&index=0&blockType=static-query":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/babel-loader/lib??ref--14-0!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/static-query.js!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/templates/omr22/Speakers.vue?vue&type=custom&index=0&blockType=static-query ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

/***/ }),

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/Hero.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/Hero.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_resizeHeroHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/resizeHeroHelper */ "./src/helpers/resizeHeroHelper.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    head_text: {
      required: false,
      type: String
    },
    logos: {
      required: false,
      type: Array,
      "default": null
    },
    presentedby: {
      type: Boolean,
      required: false,
      "default": false
    },
    bgPosition: {
      type: String,
      required: false,
      "default": ""
    },
    backgroundImage: {
      require: false,
      type: String,
      "default": ""
    }
  },
  computed: {
    fontWidth: function fontWidth() {
      if (!this.head_text || !this.head_text.length) return "";
      if (15 > this.head_text.length && this.head_text.length >= 10) return "mid-letters";
      if (this.head_text.length >= 15) return "large-letters";
      if (this.head_text.length >= 7 && this.head_text.length < 10) return "small-letters";
      return "";
    },
    setBackground: function setBackground() {
      if (this.backgroundImage.length == 0) return "";
      return "backgroundImage:" + "url(".concat(__webpack_require__("./src/events-assets sync recursive ^\\.\\/.*$")("./" + this.backgroundImage), ")");
    }
  },
  mounted: function mounted() {
    Object(_helpers_resizeHeroHelper__WEBPACK_IMPORTED_MODULE_0__["resizeHero"])();
    window.addEventListener("resize", _helpers_resizeHeroHelper__WEBPACK_IMPORTED_MODULE_0__["resizeHero"]);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", _helpers_resizeHeroHelper__WEBPACK_IMPORTED_MODULE_0__["resizeHero"]);
  }
});

/***/ }),

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/omr22/Speakers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/templates/omr22/Speakers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/gridsome/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_omr_Hero_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/omr/Hero.vue */ "./src/components/omr/Hero.vue");
/* harmony import */ var _components_omr_Speakers_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/omr/Speakers.vue */ "./src/components/omr/Speakers.vue");
/* harmony import */ var _components_omr_TicketComparison_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/omr/TicketComparison.vue */ "./src/components/omr/TicketComparison.vue");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import speakersjson from "~/json-data/speakers-omr19.json";

var jsonld = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: []
};

function load(url) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = false;
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SpeakersArtists",
  metaInfo: function metaInfo() {
    return {
      title: this.$translate(this.$context.eventSlug + ".speakerspage.pagetitle") + " | " + this.$translate(this.$context.eventSlug + ".meta.title"),
      htmlAttrs: {
        lang: this.currentLocale()
      },
      meta: [{
        key: "description",
        name: "description",
        content: this.$translate(this.$context.eventSlug + ".speakerspage.pagetitle")
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:title",
        content: this.$translate(this.$context.eventSlug + ".speakerspage.pagetitle") + " | " + this.$translate(this.$context.eventSlug + ".meta.title")
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
        content: this.$translate(this.$context.eventSlug + ".speakerspage.pagetitle") + " | " + this.$translate(this.$context.eventSlug + ".meta.title")
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
        "class": "page__speaker-artists"
      },
      link: [{
        rel: "canonical",
        href: this.$context.canonical
      }]
    };
  },
  components: {
    Hero: _components_omr_Hero_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Speakers: _components_omr_Speakers_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TicketComparison: _components_omr_TicketComparison_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mounted: function mounted() {
    // display page after first paint
    this.$refs.pagewrap.style.opacity = "100";
  },
  computed: {
    filteredSpeakers: function filteredSpeakers() {
      return this.$static.myomr.speakers.nodes.filter(function (o) {
        return o.photoUrl;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/Hero.vue?vue&type=template&id=580a5fee&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/Hero.vue?vue&type=template&id=580a5fee&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('section',{staticClass:"hero-page",class:_vm.bgPosition,style:(_vm.setBackground)},[_c('h1',{class:_vm.fontWidth},[_vm._v(_vm._s(_vm.head_text)+"\n      "),(_vm.logos)?_c('div',{staticClass:"logo-wrapper"},[(_vm.presentedby)?_c('span',{staticClass:"presented-by"},[_vm._v("PRESENTED BY")]):_vm._e(),_vm._l((_vm.logos),function(logo){return _c('g-image',{key:logo.alt,staticClass:"hero-logo",class:logo.class,attrs:{"src":__webpack_require__("./src/events-assets sync recursive ^\\.\\/.*$")("./" + (logo.url)),"alt":logo.alt}})})],2):_vm._e()]),_vm._t("default")],2),_c('section',{staticClass:"hero--placeholder"})])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/omr22/Speakers.vue?vue&type=template&id=e73ef686&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/templates/omr22/Speakers.vue?vue&type=template&id=e73ef686& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"pagewrap",staticStyle:{"opacity":"0"}},[_c('Hero',{attrs:{"head_text":_vm.$translate('omr20.speakerspage.hero.head')}}),_c('section',{staticClass:"hero-teaser hero-teaser-subpage"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-10 offset-lg-1"},[_vm._v("\n          "+_vm._s(_vm.$translate(_vm.$context.eventSlug + ".speakerspage.hero.intro"))+"\n        ")])])])]),_c('Speakers',{attrs:{"slug":_vm.$context.slug,"perPage":16,"speakers":_vm.filteredSpeakers,"nofollow":""}},[_c('h2',{attrs:{"slot":"header"},slot:"header"},[_vm._v("\n      "+_vm._s(_vm.$translate(_vm.$context.eventSlug + ".speakerspage.speakerlist.head1"))),_c('br'),_c('span',{staticClass:"stroke"},[_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".speakerspage.speakerlist.head2")))])]),_c('p',{staticClass:"sreveal",attrs:{"slot":"intro"},slot:"intro"},[_vm._v("\n      "+_vm._s(_vm.$translate(_vm.$context.eventSlug + ".speakerspage.speakerlist.intro"))+"\n    ")])]),_c('TicketComparison')],1)}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/Hero.vue?vue&type=style&index=0&id=580a5fee&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/Hero.vue?vue&type=style&index=0&id=580a5fee&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/omr/Hero.vue":
/*!*************************************!*\
  !*** ./src/components/omr/Hero.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero_vue_vue_type_template_id_580a5fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero.vue?vue&type=template&id=580a5fee&scoped=true& */ "./src/components/omr/Hero.vue?vue&type=template&id=580a5fee&scoped=true&");
/* harmony import */ var _Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero.vue?vue&type=script&lang=js& */ "./src/components/omr/Hero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Hero_vue_vue_type_style_index_0_id_580a5fee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hero.vue?vue&type=style&index=0&id=580a5fee&lang=scss&scoped=true& */ "./src/components/omr/Hero.vue?vue&type=style&index=0&id=580a5fee&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Hero_vue_vue_type_template_id_580a5fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hero_vue_vue_type_template_id_580a5fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "580a5fee",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/omr/Hero.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/omr/Hero.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=script&lang=js& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/Hero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/omr/Hero.vue?vue&type=style&index=0&id=580a5fee&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/components/omr/Hero.vue?vue&type=style&index=0&id=580a5fee&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_580a5fee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--4-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=style&index=0&id=580a5fee&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/Hero.vue?vue&type=style&index=0&id=580a5fee&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_580a5fee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_580a5fee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_580a5fee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_580a5fee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_580a5fee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/omr/Hero.vue?vue&type=template&id=580a5fee&scoped=true&":
/*!********************************************************************************!*\
  !*** ./src/components/omr/Hero.vue?vue&type=template&id=580a5fee&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_580a5fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=template&id=580a5fee&scoped=true& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/Hero.vue?vue&type=template&id=580a5fee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_580a5fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_580a5fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/templates/omr22/Speakers.vue":
/*!******************************************!*\
  !*** ./src/templates/omr22/Speakers.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Speakers_vue_vue_type_template_id_e73ef686___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Speakers.vue?vue&type=template&id=e73ef686& */ "./src/templates/omr22/Speakers.vue?vue&type=template&id=e73ef686&");
/* harmony import */ var _Speakers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speakers.vue?vue&type=script&lang=js& */ "./src/templates/omr22/Speakers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _events_assets_omr20_main_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/events-assets/omr20/main.min.css?vue&type=style&index=0&lang=css& */ "./src/events-assets/omr20/main.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _Speakers_vue_vue_type_custom_index_0_blockType_static_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Speakers.vue?vue&type=custom&index=0&blockType=static-query */ "./src/templates/omr22/Speakers.vue?vue&type=custom&index=0&blockType=static-query");






/* normalize component */

var component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Speakers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Speakers_vue_vue_type_template_id_e73ef686___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Speakers_vue_vue_type_template_id_e73ef686___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _Speakers_vue_vue_type_custom_index_0_blockType_static_query__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_Speakers_vue_vue_type_custom_index_0_blockType_static_query__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/templates/omr22/Speakers.vue?vue&type=custom&index=0&blockType=static-query":
/*!*****************************************************************************************!*\
  !*** ./src/templates/omr22/Speakers.vue?vue&type=custom&index=0&blockType=static-query ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_14_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_static_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_custom_index_0_blockType_static_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/gridsome/node_modules/babel-loader/lib??ref--14-0!../../../node_modules/gridsome/lib/plugins/vue-components/lib/loaders/static-query.js!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Speakers.vue?vue&type=custom&index=0&blockType=static-query */ "./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/static-query.js!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/omr22/Speakers.vue?vue&type=custom&index=0&blockType=static-query");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_14_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_static_query_js_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_custom_index_0_blockType_static_query__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/templates/omr22/Speakers.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/templates/omr22/Speakers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Speakers.vue?vue&type=script&lang=js& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/omr22/Speakers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/templates/omr22/Speakers.vue?vue&type=template&id=e73ef686&":
/*!*************************************************************************!*\
  !*** ./src/templates/omr22/Speakers.vue?vue&type=template&id=e73ef686& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_template_id_e73ef686___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Speakers.vue?vue&type=template&id=e73ef686& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/templates/omr22/Speakers.vue?vue&type=template&id=e73ef686&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_template_id_e73ef686___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_template_id_e73ef686___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);