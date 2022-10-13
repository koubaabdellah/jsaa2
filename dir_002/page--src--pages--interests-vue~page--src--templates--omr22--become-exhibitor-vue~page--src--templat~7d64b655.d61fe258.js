(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src--pages--interests-vue~page--src--templates--omr22--become-exhibitor-vue~page--src--templat~7d64b655"],{

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/Tracks.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/Tracks.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var _scripts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/scripts/ */ "./src/scripts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      modalGallery: "",
      activeModal: "",
      showModal: false
    };
  },
  props: {
    slides: {
      required: true,
      type: Object
    },
    linksDeactivated: {
      required: false,
      type: Boolean,
      "default": false
    }
  },
  mounted: function mounted() {
    this.modalGallery = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"](".glide-tracks", {
      type: "slider",
      gap: 0,
      rewind: true
    }).mount();
    Object(_scripts___WEBPACK_IMPORTED_MODULE_1__["loadTracksSlider"])(_glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]);
  },
  methods: {
    setImage: function setImage(imageURL) {
      return __webpack_require__("./src/events-assets/omr20/img sync recursive ./!./!./node_modules/gridsome/lib/webpack/loaders/assets-loader.js?width=500&quality=100&fit=inside!./ ^\\.\\/.*$")("./" + imageURL);
    }
  }
});

/***/ }),

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/Tracks.vue?vue&type=template&id=49979141&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/Tracks.vue?vue&type=template&id=49979141&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"tracks"},[_c('div',{staticClass:"container text-center"},[_vm._t("header")],2),_c('div',{staticClass:"tracks__aussteller-carousel"},[_c('div',{staticClass:"modals"},_vm._l((_vm.slides),function(slide,index){return _c('div',{key:index,staticClass:"modal fade",class:{ show: _vm.activeModal !== '' },style:({ display: _vm.activeModal !== '' ? 'block' : '' }),attrs:{"id":'tracksModal' + index,"tabindex":index,"role":"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-body"},[_c('button',{staticClass:"close close--top",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":function($event){_vm.activeModal = ''}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v(" ")])]),_c('button',{staticClass:"close close--bottom",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":function($event){_vm.activeModal = ''}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v(" ")])]),_c('div',{staticClass:"container text-center headline"},[_c('h3',[_vm._v("\n                  "+_vm._s(slide.modal.head)+"\n                ")])]),_c('div',{staticClass:"container-fluid content"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-10 offset-lg-1"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-6 image"},[_c('g-image',{staticClass:"img-fluid",attrs:{"src":_vm.setImage(slide.image),"alt":""}})],1),_c('div',{staticClass:"col-lg-6 text"},[_c('h4',[_vm._v("»"+_vm._s(slide.modal.subhead))]),_c('div',{},[_c('p',[_vm._v("\n                            "+_vm._s(slide.modal.body)+"\n                          ")])])])])])]),(slide.modal.button.cta)?_c('div',{staticClass:"button-container text-center"},[_c('a',{staticClass:"button button--black",attrs:{"href":slide.modal.button.link}},[_vm._v(_vm._s(slide.modal.button.cta))])]):_vm._e()])])])])])}),0),_c('div',{staticClass:"sreveal glide-tracks carousel tracks-carousel"},[_c('div',{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[_c('ul',{staticClass:"glide__slides"},_vm._l((_vm.slides),function(slide,index){return _c('li',{key:index,staticClass:"glide__slide"},[_c('g-link',{attrs:{"to":slide.link}},[_c('g-image',{staticClass:"img-fluid",attrs:{"src":_vm.setImage(slide.image),"alt":"","immediate":"true","width":"350"}})],1),_c('div',{staticClass:"title text-left"},[_vm._v("\n              "+_vm._s(slide.head)+"\n            ")]),_c('div',{staticClass:"additional-info text-left"},[_vm._v("\n              "+_vm._s(slide.blurb)+"\n            ")]),(slide.link && slide.link !== '#')?_c('div',{staticClass:"link text-left"},[_c('g-link',{attrs:{"to":slide.link}},[_vm._v(_vm._s(slide.cta))])],1):_vm._e()],1)}),0)]),_vm._m(0),_c('div',{staticClass:"glide__bullets",attrs:{"data-glide-el":"controls[nav]"}},_vm._l((_vm.slides),function(slide,index){return _c('button',{key:index,staticClass:"glide__bullet",attrs:{"data-glide-dir":'=' + index}})}),0)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"glide__arrows",attrs:{"data-glide-el":"controls"}},[_c('button',{staticClass:"glide__arrow glide__arrow--left",attrs:{"data-glide-dir":"|<"}},[_vm._v("\n           \n        ")]),_c('button',{staticClass:"glide__arrow glide__arrow--right",attrs:{"data-glide-dir":"|>"}},[_vm._v("\n           \n        ")])])}]



/***/ }),

/***/ "./node_modules/gridsome/node_modules/core-js/internals/array-fill.js":
/*!****************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/core-js/internals/array-fill.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/gridsome/node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/gridsome/node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/gridsome/node_modules/core-js/internals/to-length.js");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/gridsome/node_modules/core-js/modules/es.array.fill.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/core-js/modules/es.array.fill.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/gridsome/node_modules/core-js/internals/export.js");
var fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/gridsome/node_modules/core-js/internals/array-fill.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/gridsome/node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/Tracks.vue?vue&type=style&index=0&id=49979141&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/Tracks.vue?vue&type=style&index=0&id=49979141&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/omr/dynamic/Tracks.vue":
/*!***********************************************!*\
  !*** ./src/components/omr/dynamic/Tracks.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tracks_vue_vue_type_template_id_49979141_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tracks.vue?vue&type=template&id=49979141&scoped=true& */ "./src/components/omr/dynamic/Tracks.vue?vue&type=template&id=49979141&scoped=true&");
/* harmony import */ var _Tracks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tracks.vue?vue&type=script&lang=js& */ "./src/components/omr/dynamic/Tracks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Tracks_vue_vue_type_style_index_0_id_49979141_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tracks.vue?vue&type=style&index=0&id=49979141&scoped=true&lang=scss& */ "./src/components/omr/dynamic/Tracks.vue?vue&type=style&index=0&id=49979141&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Tracks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tracks_vue_vue_type_template_id_49979141_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tracks_vue_vue_type_template_id_49979141_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49979141",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/omr/dynamic/Tracks.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/components/omr/dynamic/Tracks.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Tracks.vue?vue&type=script&lang=js& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/Tracks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/omr/dynamic/Tracks.vue?vue&type=style&index=0&id=49979141&scoped=true&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./src/components/omr/dynamic/Tracks.vue?vue&type=style&index=0&id=49979141&scoped=true&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracks_vue_vue_type_style_index_0_id_49979141_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--4-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Tracks.vue?vue&type=style&index=0&id=49979141&scoped=true&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/Tracks.vue?vue&type=style&index=0&id=49979141&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracks_vue_vue_type_style_index_0_id_49979141_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracks_vue_vue_type_style_index_0_id_49979141_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracks_vue_vue_type_style_index_0_id_49979141_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracks_vue_vue_type_style_index_0_id_49979141_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracks_vue_vue_type_style_index_0_id_49979141_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/omr/dynamic/Tracks.vue?vue&type=template&id=49979141&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/components/omr/dynamic/Tracks.vue?vue&type=template&id=49979141&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracks_vue_vue_type_template_id_49979141_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./Tracks.vue?vue&type=template&id=49979141&scoped=true& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/Tracks.vue?vue&type=template&id=49979141&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracks_vue_vue_type_template_id_49979141_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracks_vue_vue_type_template_id_49979141_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/scripts/eye-candy-gallery.js":
/*!******************************************!*\
  !*** ./src/scripts/eye-candy-gallery.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadEyeCandy; });
function loadEyeCandy(Glide) {
  // "Eye candy" slider
  var gec1 = new Glide(".glide-eye-candy-1", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    gap: 10,
    peek: {
      before: 180,
      after: 180
    },
    breakpoints: {
      1440: {
        perView: 3
      },
      960: {
        perView: 2,
        focusAt: "center",
        peek: {
          before: 35,
          after: 35
        }
      }
    }
  }); // "Eye candy" slider

  var gec2 = new Glide(".glide-eye-candy-2", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    gap: 10,
    peek: {
      before: 180,
      after: 180
    },
    breakpoints: {
      1440: {
        perView: 3
      },
      960: {
        perView: 2,
        focusAt: "center",
        peek: {
          before: 35,
          after: 35
        }
      }
    }
  });
  gec1.on("run", function (o) {
    gec2.go(o.direction);
  });
  gec1.mount();
  gec2.mount();
}

/***/ }),

/***/ "./src/scripts/glide-slider.js":
/*!*************************************!*\
  !*** ./src/scripts/glide-slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadGlideSlider; });
function loadGlideSlider(Glide) {
  // "Eye candy" slider
  var gec1 = new Glide(".glide-eye-candy-1", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    gap: 10,
    peek: {
      before: 180,
      after: 180
    },
    breakpoints: {
      1440: {
        perView: 3
      },
      960: {
        perView: 3,
        focusAt: "center",
        peek: {
          before: 35,
          after: 35
        }
      }
    }
  }); // "Eye candy" slider

  var gec2 = new Glide(".glide-eye-candy-2", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    gap: 10,
    peek: {
      before: 180,
      after: 180
    },
    breakpoints: {
      1440: {
        perView: 3
      },
      960: {
        perView: 3,
        focusAt: "center",
        peek: {
          before: 35,
          after: 35
        }
      }
    }
  });
  gec1.on("run", function (o) {
    gec2.go(o.direction);
  });
  gec1.mount();
  gec2.mount();
  var gecm = new Glide(".glide-eye-candy-modal", {
    type: "carousel",
    gap: 0
  }).mount();
}

/***/ }),

/***/ "./src/scripts/helfer-glide-slider.js":
/*!********************************************!*\
  !*** ./src/scripts/helfer-glide-slider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadTracksSlider; });
function loadTracksSlider(Glide) {
  // "Tracks" slider
  new Glide(".glide-tracks", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    gap: 20,
    peek: {
      before: 80,
      after: 80
    },
    breakpoints: {
      960: {
        perView: 1,
        focusAt: "center",
        peek: {
          before: 100,
          after: 100
        }
      }
    }
  }).mount();
}

/***/ }),

/***/ "./src/scripts/helfer-numbers.js":
/*!***************************************!*\
  !*** ./src/scripts/helfer-numbers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadHelferNumbers; });
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/gridsome/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/gridsome/node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_3__);




function loadHelferNumbers(Glide) {
  //check if numbers-section is in the viewport. Then trigger the count up
  var count_number = document.querySelectorAll(".count_number"); // get all html-numbers

  var isScrolling = false;
  var section = document.getElementById("numbers");
  window.addEventListener("scroll", function (e) {
    if (isScrolling == false) {
      window.requestAnimationFrame(function () {
        isPartiallyVisible(section);
        isScrolling = false;
      });
    }

    isScrolling = true;
  });
  var isCounting = false;

  var isPartiallyVisible = function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect(),
        top = elementBoundary.top,
        bottom = elementBoundary.bottom,
        height = elementBoundary.height;
    var allDots = document.querySelectorAll("circle.full, circle.dot");

    if (top >= 0 && bottom <= window.innerHeight && allDots.length > 0) {
      if (!isCounting) {
        countUp();
        allDots.forEach(function (dot) {
          dot.classList.add("animate");
        });
      }
    }
  }; // initiate glide slider


  var numbersGlide = new Glide("#glide_numbers", {
    type: "slider",
    perView: 4,
    animationDuration: 200,
    peek: {
      before: 70,
      after: 70
    },
    breakpoints: {
      960: {
        perView: 4,
        focusAt: "center",
        startAt: 1,
        peek: {
          before: 30,
          after: 30
        }
      },
      600: {
        perView: 1,
        focusAt: "center",
        startAt: 1,
        peek: {
          before: 150,
          after: 150
        }
      },
      500: {
        perView: 1,
        focusAt: "center",
        peek: {
          before: 130,
          after: 130
        }
      },
      420: {
        perView: 1,
        focusAt: "center",
        peek: {
          before: 100,
          after: 100
        }
      },
      320: {
        perView: 1,
        focusAt: "center",
        peek: {
          before: 50,
          after: 50
        }
      }
    }
  }).mount();

  if (window.innerWidth >= 1400) {
    numbersGlide.disable();
  } else {
    numbersGlide.update({
      startAt: 2
    });
    numbersGlide.enable();
  } //count up numbers


  function countUp() {
    isCounting = true;
    var speed = 40; // in milliseconds

    var counts = new Array(6).fill(0); // counter from 0 to numbers
    // var moveX = new Array(6).fill(0); // rotation for dot x-position
    // var moveY = new Array(6).fill(0); // rotation for dot y-position

    var numbers = [15, 1500, 70, 1]; // final count numbers

    var steps = [1, 20, 2, 1]; // final count numbers

    var _loop = function _loop(i) {
      // loop through all numbers
      setInterval(function () {
        // animate the count
        counts[i] += steps[i]; // count up in steps

        if (counts[i] <= numbers[i]) {
          // if the counter is under the final number
          count_number[i].innerHTML = counts[i]; // replace the html with the number
        }
      }, speed);
    };

    for (var i = 0; i < count_number.length; i++) {
      _loop(i);
    }
  }
}

/***/ }),

/***/ "./src/scripts/helfer-testimonials.js":
/*!********************************************!*\
  !*** ./src/scripts/helfer-testimonials.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadTestimonialGlide; });
function loadTestimonialGlide(Glide) {
  var testimonialsGlide = new Glide("#glide_testimonials", {
    type: "slider",
    perView: 1,
    animationDuration: 200
  }).mount();
  console.log("loading testimonial glide");
}

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! exports provided: loadHelferNumbers, loadTestimonialGlide, loadTracksSlider, loadTickets, loadGlideSlider, loadEyeCandy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helfer_numbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helfer-numbers */ "./src/scripts/helfer-numbers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadHelferNumbers", function() { return _helfer_numbers__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _helfer_testimonials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helfer-testimonials */ "./src/scripts/helfer-testimonials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTestimonialGlide", function() { return _helfer_testimonials__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _helfer_glide_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helfer-glide-slider */ "./src/scripts/helfer-glide-slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTracksSlider", function() { return _helfer_glide_slider__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets */ "./src/scripts/tickets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTickets", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _glide_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glide-slider */ "./src/scripts/glide-slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadGlideSlider", function() { return _glide_slider__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _eye_candy_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eye-candy-gallery */ "./src/scripts/eye-candy-gallery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadEyeCandy", function() { return _eye_candy_gallery__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/scripts/tickets.js":
/*!********************************!*\
  !*** ./src/scripts/tickets.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadTickets; });
function loadTickets(Glide) {
  //Ticket slider on mobile
  var ticketGlide = new Glide(".ticket-glide", {
    type: "slider",
    perView: 2,
    gap: 30,
    breakpoints: {
      960: {
        perView: 1,
        focusAt: 0,
        peek: {
          before: 85,
          after: 85
        }
      }
    }
  }).mount();

  if (window.innerWidth >= 960) {
    ticketGlide.disable();
  } else {
    ticketGlide.enable();
  }
}

/***/ })

}]);