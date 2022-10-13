(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src--templates--familymembers--exhibitors-vue~page--src--templates--omr22--exhibitors-vue"],{

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

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find-index */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/gridsome/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/gridsome/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/gridsome/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/gridsome/node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/gridsome/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_omr_Hero_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/components/omr/Hero.vue */ "./src/components/omr/Hero.vue");
/* harmony import */ var _components_omr_FilterSearch_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/components/omr/FilterSearch.vue */ "./src/components/omr/FilterSearch.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_omr_dynamic_exhibitors_ExhibitorSingle_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/components/omr/dynamic/exhibitors/ExhibitorSingle.vue */ "./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





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

var glideOptions = {
  type: "carousel",
  gap: 0
};
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FilterSearch: _components_omr_FilterSearch_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    ExhibitorSingle: _components_omr_dynamic_exhibitors_ExhibitorSingle_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  props: {
    slug: {
      required: false,
      type: String
    },
    exhibitors: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      selectedFilters: [],
      searchText: "",
      activeCompany: ""
    };
  },
  watch: {
    activeCompany: function activeCompany(newvalue, oldvalue) {
      this.updateURL(newvalue);
    },
    $route: {
      deep: true,
      immediate: true,
      handler: function handler(val) {
        var _this = this;

        var slug = val.params.slug || val.query.slug || "";

        if (slug) {
          this.$nextTick(function () {
            _this.openCompanyBySlug(slug);
          });
        }
      }
    }
  },
  mounted: function mounted() {
    if (this.slug) this.openCompanyBySlug(this.slug);
    this.filterExhibitorList({
      selectedFilters: []
    });
  },
  computed: {
    orderedCompanies: function orderedCompanies() {
      var exhibitors = this.exhibitors.filter(function (o) {
        return o.webLogoUrl && o.descriptionDe && o.id;
      });
      return Object(lodash__WEBPACK_IMPORTED_MODULE_12__["orderBy"])(exhibitors, "name");
    },
    filteredCompaniesByTag: function filteredCompaniesByTag() {
      var _this2 = this;

      var filteredCompanies = this.orderedCompanies.filter(function (company) {
        // return all companys if the filter list is empty
        if (_this2.selectedFilters.length === 0) return true; // check the compnays interests and check if one of them is in the selectedFilter list

        var hasTag = false;
        company.interests.forEach(function (interest) {
          if (_this2.selectedFilters.includes(interest.id)) {
            hasTag = true;
          }
        });
        return hasTag;
      });
      return filteredCompanies;
    },
    filteredCompaniesByText: function filteredCompaniesByText() {
      var _this3 = this;

      var filteredCompanies = this.filteredCompaniesByTag.filter(function (company) {
        if (_this3.searchText == undefined || _this3.searchText.length === 0) {
          return true;
        } else {
          return company.name.toUpperCase().includes(_this3.searchText.toUpperCase());
        }
      });
      return Object(lodash__WEBPACK_IMPORTED_MODULE_12__["orderBy"])(filteredCompanies, function (o) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_12__["get"])(o, "name[0]", "").toUpperCase();
      });
    },
    companyLibrary: function companyLibrary() {
      var companyWithIndex = this.filteredCompaniesByText.map(function (company, index) {
        return {
          company: company,
          index: index,
          slug: company.slug
        };
      });
      var grouped = Object(lodash__WEBPACK_IMPORTED_MODULE_12__["groupBy"])(companyWithIndex, function (o) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_12__["get"])(o, "company.name[0]", "").toUpperCase();
      });
      return Object(lodash__WEBPACK_IMPORTED_MODULE_12__["orderBy"])(Object.keys(grouped)).map(function (letter) {
        return {
          letter: letter,
          companies: grouped[letter]
        };
      });
    }
  },
  methods: {
    scrollModal: function scrollModal(direction) {
      var _this4 = this;

      var index = this.filteredCompaniesByText.findIndex(function (company) {
        return company.slug === _this4.activeCompany;
      });

      if (direction === ">") {
        index++;
        if (this.filteredCompaniesByText.length <= index) index = 0;
      } else {
        index--;
        if (index < 0) index = this.filteredCompaniesByText.length - 1;
      }

      this.activeCompany = this.filteredCompaniesByText[index].slug;
      this.updateURL(this.activeCompany);
    },
    openCompanyBySlug: function openCompanyBySlug(slug) {
      this.activeCompany = slug;
      document.body.classList.add("no-scroll");
    },
    closeCompany: function closeCompany() {
      this.activeCompany = "";
      document.body.classList.remove("no-scroll");
    },
    filterExhibitorList: function filterExhibitorList(_ref) {
      var selectedFilters = _ref.selectedFilters,
          searchText = _ref.searchText;
      this.selectedFilters = selectedFilters;
      this.searchText = searchText;
    },
    updateURL: function updateURL(newslug) {
      if (newslug) {
        var updateslug = "/" + this.currentLocale() + "/events/" + this.$context.eventSlug + "/exhibitors/" + newslug;
        history.pushState("", "Exhibitor", updateslug);
      } else {
        history.pushState("", "Exhibitor", this.$router.currentRoute.path);
      }
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

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=template&id=5fe355c3&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=template&id=5fe355c3&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"exhibitors-dir",attrs:{"id":"exhibitors-list"}},[_c('div',{staticClass:"container text-center"},[_c('h2',[_c('span',{staticClass:"stroke"},[_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".exhibitorpage.fulllist.head1"))+" ")]),_c('br'),_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".exhibitorpage.fulllist.head2"))+"\n    ")])]),_c('div',{staticClass:"container text-center teaser"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-6 offset-lg-3"},[_c('p',[_vm._v("\n          "+_vm._s(_vm.$translate(_vm.$context.eventSlug + ".exhibitorpage.fulllist.intro"))+"\n        ")])])])]),_c('FilterSearch',{on:{"update-filters":_vm.filterExhibitorList}}),_c('div',{staticClass:"container"},[_c('div',{staticClass:"row ausstellers-list"},[_c('div',{staticClass:"col-lg-12"},[_c('div',{staticClass:"row grid"},[_c('ul',{staticClass:"ausstellers-list__wrapper col-lg-12"},_vm._l((_vm.companyLibrary),function(entry){return _c('div',{key:entry.letter,staticClass:"break-list"},[_c('div',{staticClass:"element-item break-list"},[_c('div',{staticClass:"filter__border"}),_c('h3',[_vm._v(_vm._s(entry.letter))])]),_vm._l((entry.companies),function(company){return (company.company.slug)?_c('li',{key:company.index,class:'grid-item ' + company.company.slug,attrs:{"data-toggle":"modal","data-target":"#listItemModal","id":'pclist' +
                    company.company.id.split('gid://myomr/PartnerCompany/')[1],"data-modal-id":company.index,"data-id":company.company.slug},on:{"click":function($event){return _vm.openCompanyBySlug(company.company.slug)}}},[_c('div',{staticClass:"nopremium_aussteller_wrap  ",attrs:{"data-aussteller-name":company.company.name,"data-toggle":"modal","data-target":"#ausstellerModal"}},[_c('p',{staticClass:"element-item"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(company.company.name))])])])]):_vm._e()})],2)}),0)])])])]),_c('div',{staticClass:"topcompany-modals"},[_c('div',{ref:"topcompaniesModal",staticClass:"modal fade",class:{ show: _vm.activeCompany !== '' },style:({ display: _vm.activeCompany !== '' ? 'block' : '' }),attrs:{"id":"topcompaniesModal","role":"dialog"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"glide__arrows",attrs:{"data-glide-el":"controls"}},[_c('button',{staticClass:"glide__arrow glide__arrow--left",attrs:{"data-glide-dir":"<"},on:{"click":function($event){return _vm.scrollModal('<')}}},[_vm._v("\n                 \n              ")]),_c('button',{staticClass:"glide__arrow glide__arrow--right",attrs:{"data-glide-dir":">"},on:{"click":function($event){return _vm.scrollModal('>')}}},[_vm._v("\n                 \n              ")])]),_c('button',{staticClass:"close close--top",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":function($event){return _vm.closeCompany()}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v(" ")])]),_c('div',{staticClass:"top-companies-modal carousel"},[_c('div',[_c('ul',_vm._l((_vm.filteredCompaniesByText),function(company,index){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(company.slug === _vm.activeCompany),expression:"company.slug === activeCompany"}],key:index,staticClass:"companylist__slide",attrs:{"data-index":index,"data-slug":company.slug}},[(company !== undefined)?_c('ExhibitorSingle',{attrs:{"company":company}}):_vm._e()],1)}),0)]),_c('div',{staticClass:"glide__arrows",attrs:{"data-glide-el":"controls"}},[_c('button',{staticClass:"glide__arrow glide__arrow--left",attrs:{"data-glide-dir":"<"},on:{"click":function($event){return _vm.scrollModal('<')}}},[_vm._v("\n                   \n                ")]),_c('button',{staticClass:"glide__arrow glide__arrow--right",attrs:{"data-glide-dir":">"},on:{"click":function($event){return _vm.scrollModal('>')}}},[_vm._v("\n                   \n                ")])]),_c('button',{staticClass:"close close--bottom",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":function($event){_vm.activeCompany = ''}}})])])])])])])],1)}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/gridsome/node_modules/core-js/modules/es.array.some.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/core-js/modules/es.array.some.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/gridsome/node_modules/core-js/internals/export.js");
var $some = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/gridsome/node_modules/core-js/internals/array-iteration.js").some;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/gridsome/node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/gridsome/node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('some');
var USES_TO_LENGTH = arrayMethodUsesToLength('some');

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/Hero.vue?vue&type=style&index=0&id=580a5fee&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/Hero.vue?vue&type=style&index=0&id=580a5fee&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=1&id=5fe355c3&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=1&id=5fe355c3&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue":
/*!******************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExhibitorsList_vue_vue_type_template_id_5fe355c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExhibitorsList.vue?vue&type=template&id=5fe355c3&scoped=true& */ "./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=template&id=5fe355c3&scoped=true&");
/* harmony import */ var _ExhibitorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExhibitorsList.vue?vue&type=script&lang=js& */ "./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExhibitorsList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExhibitorsList.vue?vue&type=style&index=0&lang=css& */ "./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _ExhibitorsList_vue_vue_type_style_index_1_id_5fe355c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExhibitorsList.vue?vue&type=style&index=1&id=5fe355c3&lang=scss&scoped=true& */ "./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=1&id=5fe355c3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ExhibitorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExhibitorsList_vue_vue_type_template_id_5fe355c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExhibitorsList_vue_vue_type_template_id_5fe355c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5fe355c3",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./ExhibitorsList.vue?vue&type=script&lang=js& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--2-oneOf-1-2!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./ExhibitorsList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=1&id=5fe355c3&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=1&id=5fe355c3&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_1_id_5fe355c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--4-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./ExhibitorsList.vue?vue&type=style&index=1&id=5fe355c3&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=style&index=1&id=5fe355c3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_1_id_5fe355c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_1_id_5fe355c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_1_id_5fe355c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_1_id_5fe355c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_style_index_1_id_5fe355c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=template&id=5fe355c3&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=template&id=5fe355c3&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_template_id_5fe355c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!../../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./ExhibitorsList.vue?vue&type=template&id=5fe355c3&scoped=true& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorsList.vue?vue&type=template&id=5fe355c3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_template_id_5fe355c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorsList_vue_vue_type_template_id_5fe355c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);