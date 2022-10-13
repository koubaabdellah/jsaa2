(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src--templates--familymembers--exhibitors-vue~page--src--templates--omr22--become-exhibitor-vu~7ac63f75"],{

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/gridsome/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/gridsome/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/gridsome/node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_events_events_node_modules_gridsome_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/gridsome/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/gridsome/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    company: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      senderCompany: "",
      senderName: "",
      senderMessage: "",
      senderEmail: "",
      errorMessage: "",
      successMessage: ""
    };
  },
  methods: {
    isPresent: function isPresent(array) {
      return array !== undefined && array !== null && array.length > 0;
    },
    language: function language(event) {
      var lang = 'de';
      if (event.language === 'de' || event.language === 'en') lang = event.language;
      return this.$translate("language.".concat(lang));
    },
    location: function location(event) {
      if (event.location !== null && event.location.name !== null) return event.location.name;else if (event.locationName !== null && event.locationAddress !== null) return "".concat(event.locationName, ", ").concat(event.locationAddress);else if (event.locationName !== null) return event.locationName;else if (event.locationAddress !== null) return event.locationAddress;else return null;
    },
    formatDate: function formatDate(date) {
      moment__WEBPACK_IMPORTED_MODULE_5___default.a.locale(this.currentLocale());
      return moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(String(date, moment__WEBPACK_IMPORTED_MODULE_5___default.a.ISO_8601)).format("dddd, DD.MM");
    },
    formatTime: function formatTime(time) {
      moment__WEBPACK_IMPORTED_MODULE_5___default.a.locale(this.currentLocale());
      return moment__WEBPACK_IMPORTED_MODULE_5___default()(String(time, moment__WEBPACK_IMPORTED_MODULE_5___default.a.ISO_8601)).format("HH:mm");
    },
    salesContactExists: function salesContactExists() {
      for (var n in this.company.contacts) {
        if (this.company.contacts[n].type == "SalesContact" && this.company.contacts[n].email !== "") return this.company.contacts[n].email;
      }

      return false;
    },
    validateEmail: function validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      }

      return false;
    },
    submitContactForm: function submitContactForm(contacts) {
      var _this = this;

      return Object(_home_runner_work_events_events_node_modules_gridsome_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var contactId, n, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                contactId = "";

                for (n in contacts) {
                  if (contacts[n].type == "SalesContact") contactId = contacts[n].id;
                }

                if (!(_this.senderEmail == "" && _this.senderName == "" && _this.senderCompany == "" && _this.senderMessage == "")) {
                  _context.next = 7;
                  break;
                }

                _this.errorMessage = "Please fill out all of the inputs";
                return _context.abrupt("return", false);

              case 7:
                if (_this.validateEmail(_this.senderEmail)) {
                  _context.next = 10;
                  break;
                }

                _this.errorMessage = "Invalid email address.";
                return _context.abrupt("return", false);

              case 10:
                _context.prev = 10;
                _context.next = 13;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("https://my.omr.com/graphql", {
                  query: "\n            mutation CreateContactTransaction(\n              $contactId: String!\n              $senderEmail: String\n              $senderName: String\n              $senderCompany: String\n              $message: String\n            ) {\n              createContactTransaction(\n                input: {\n                  attributes: {\n                    senderEmail: $senderEmail\n                    senderName: $senderName\n                    senderCompany: $senderCompany\n                    message: $message\n                  }\n                  contactId: $contactId\n                }\n              ) {\n                success\n                errors\n              }\n            }\n          ",
                  variables: {
                    senderEmail: _this.senderEmail,
                    senderName: _this.senderName,
                    senderCompany: _this.senderCompany,
                    message: _this.senderMessage,
                    contactId: contactId
                  }
                }, {
                  headers: {
                    "Content-Type": "application/json"
                  }
                });

              case 13:
                data = _context.sent;
                _this.errorMessage = "";

                if (data.data.data.createContactTransaction.success) {
                  _context.next = 18;
                  break;
                }

                _this.errorMessage = "Whoops! Someting went wrong on our end.. Please try again later.";
                return _context.abrupt("return");

              case 18:
                _this.successMessage = "Yes! Form successfully submitted!";
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](10);
                _this.errorMessage = "Whoops! Someting went wrong on our end.. Please try again later.";
                return _context.abrupt("return");

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[10, 21]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=template&id=78cccfe8&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=template&id=78cccfe8&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"exhibitor-detail-content speaker-details-container container-fluid center"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-3 col-sm-10 offset-lg-2 offset-sm-1"},[_c('div',{staticClass:"exhibitor-detail-image"},[(_vm.company.webLogoUrl)?_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.company.webLogoUrl),expression:"company.webLogoUrl"}],staticClass:"d-block center mx-auto exhibitor-logo",attrs:{"alt":_vm.company.name}}):_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.company.logoUrl),expression:"company.logoUrl"}],staticClass:"d-block center mx-auto exhibitor-logo",attrs:{"alt":_vm.company.name}})])]),_c('div',{staticClass:"col-lg-5 col-sm-12"},[_c('div',{staticClass:"exhibitor-detail-details"},[_c('h3',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.company.name)+"\n          "),(_vm.company.omrJobsUrl)?_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/we-are-hiring.svg */ "./src/events-assets/omr20/img/icons/we-are-hiring.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/we-are-hiring.svg')}`"}],staticClass:"hiring",attrs:{"alt":"We are Hiring"}}):_vm._e()]),_vm._l((_vm.company.booths),function(booth,index){return _c('div',{key:index,staticClass:"booth-list"},[(booth.boothNumber !== null && booth.boothNumber !== '')?_c('h5',{staticClass:"booth"},[_vm._v("\n            BOOTH: "+_vm._s(booth.boothNumber)+"\n          ")]):_vm._e()])}),_c('div',{staticClass:"social-media-bar"},[_c('ul',[(_vm.company.linkedinUrl)?_c('li',{staticClass:"linkedin"},[_c('a',{attrs:{"href":_vm.company.linkedinUrl,"target":"_blank"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/linkedin-mint.svg */ "./src/events-assets/omr20/img/icons/linkedin-mint.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/linkedin-mint.svg')}`"}],attrs:{"alt":"LinkedIn"}})])]):_vm._e(),(_vm.company.twitter)?_c('li',{staticClass:"tw"},[_c('a',{attrs:{"href":_vm.company.twitter,"target":"_blank"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/twitter-mint.svg */ "./src/events-assets/omr20/img/icons/twitter-mint.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/twitter-mint.svg')}`"}],attrs:{"alt":"Twitter"}})])]):_vm._e(),(_vm.company.instagram)?_c('li',{staticClass:"ig"},[_c('a',{attrs:{"href":_vm.company.instagram,"target":"_blank"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/instagram-mint.svg */ "./src/events-assets/omr20/img/icons/instagram-mint.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/instagram-mint.svg')}`"}],attrs:{"alt":"Instagram"}})])]):_vm._e(),(_vm.company.facebook)?_c('li',{staticClass:"fb"},[_c('a',{attrs:{"href":_vm.company.facebook,"target":"_blank"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/facebook-mint.svg */ "./src/events-assets/omr20/img/icons/facebook-mint.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/facebook-mint.svg')}`"}],attrs:{"alt":"Facebook"}})])]):_vm._e(),(_vm.company.youtube)?_c('li',{staticClass:"yt"},[_c('a',{attrs:{"href":_vm.company.youtube,"target":"_blank"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/youtube-mint.svg */ "./src/events-assets/omr20/img/icons/youtube-mint.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/youtube-mint.svg')}`"}],attrs:{"alt":"YouTube"}})])]):_vm._e(),(_vm.company.website)?_c('li',{staticClass:"web"},[_c('a',{attrs:{"href":_vm.company.website,"target":"_blank"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/web-mint.svg */ "./src/events-assets/omr20/img/icons/web-mint.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/web-mint.svg')}`"}],attrs:{"alt":"Website"}})])]):_vm._e()])]),_c('div',{staticClass:"speaker-detail__intro border-bottom-teal"},[_c('p',[_vm._v("\n            "+_vm._s(_vm.currentLocale() === 'de' ? _vm.company.descriptionDe : _vm.company.descriptionEn)+"\n          ")])]),_c('div',{staticClass:"button-container"},[(_vm.company.omrJobsUrl)?_c('a',{staticClass:"button button--hotpink",attrs:{"href":_vm.company.omrJobsUrl,"target":"_blank"}},[_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".exhibitorpage.modal.hiring")))]):_vm._e()]),(_vm.isPresent(_vm.company.masterclasses))?_c('div',_vm._l((_vm.company.masterclasses),function(masterclass){return _c('div',{key:masterclass.id,staticClass:"masterclass-wrap"},[(masterclass.stage !== null)?_c('div',{staticClass:"text-center border-bottom-teal pb-4 my-4"},[(masterclass.stage !== null)?_c('h6',{staticClass:"font-weight-light text-uppercase color-teal font-weight-light mb-2"},[_vm._v("\n                Masterclass \n                "+_vm._s(_vm.currentLocale() === "de"
                    ? masterclass.stage.nameDe
                    : masterclass.nameEn)+"\n              ")]):_vm._e(),_c('p',{staticClass:"speaker-detail__timetable--subheadline"},[_vm._v("\n                "+_vm._s(_vm.currentLocale() === "de"
                    ? masterclass.nameDe
                    : masterclass.nameEn)+"\n              ")]),_c('div',{staticClass:"tag-container"}),_c('div',{staticClass:"speaker-detail__data container-fluid center"},[_c('div',{staticClass:"row mb-3"},[_c('div',{staticClass:"col-6 d-flex flex-row align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/kalender.svg */ "./src/events-assets/omr20/img/icons/kalender.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/kalender.svg')}`"}],attrs:{"alt":"kalender"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.formatDate(masterclass.startsAt)))])]),_c('div',{staticClass:"col-6 d-flex flex-row align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/clock.svg */ "./src/events-assets/omr20/img/icons/clock.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/clock.svg')}`"}],attrs:{"alt":"clock"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.formatTime(masterclass.startsAt))+" - "+_vm._s(_vm.formatTime(masterclass.endsAt)))])])]),_c('div',{staticClass:"row"},[(_vm.location(masterclass) !== null)?_c('div',{staticClass:"col-6 d-flex flex-row no-wrap align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/place_mint.svg */ "./src/events-assets/omr20/img/icons/place_mint.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/place_mint.svg')}`"}],attrs:{"alt":"place"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.location(masterclass)))])]):_vm._e(),_c('div',{staticClass:"col-6 d-flex flex-row no-wrap align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/speaker.svg */ "./src/events-assets/omr20/img/icons/speaker.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/speaker.svg')}`"}],attrs:{"alt":"speaker"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.language(masterclass)))])])])]),_c('div',{staticClass:"button-container "},[_c('a',{staticClass:"button button--teal",attrs:{"href":'https://omr.com/' +
                    _vm.currentLocale() + '/events/' +
                      _vm.$context.eventSlug +
                      '/timetable/?eventSlug=' +
                      masterclass.slug}},[_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".aussteller.eventlist.cta"))+"\n                ")])])]):_vm._e()])}),0):_vm._e(),(_vm.isPresent(_vm.company.stageSlots))?_c('div',_vm._l((_vm.company.stageSlots),function(stageSlot){return _c('div',{key:stageSlot.id,staticClass:"stage-wrap"},[(stageSlot.stage !== null)?_c('div',{staticClass:"text-center border-bottom-teal pb-4 my-4"},[(stageSlot.stage !== null)?_c('h6',{staticClass:"font-weight-light text-uppercase color-teal font-weight-light mb-2"},[_vm._v("\n                "+_vm._s(_vm.currentLocale() === 'de' ? stageSlot.stage.nameDe : stageSlot.nameEn)+"\n              ")]):_vm._e(),_c('p',{staticClass:"speaker-detail__timetable--subheadline"},[_vm._v("\n                "+_vm._s(_vm.currentLocale() === 'de' ? stageSlot.nameDe : stageSlot.nameEn)+"\n              ")]),_c('div',{staticClass:"tag-container"}),_c('div',{staticClass:"speaker-detail__data container-fluid center"},[_c('div',{staticClass:"row mb-3"},[_c('div',{staticClass:"col-6 d-flex flex-row align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/kalender.svg */ "./src/events-assets/omr20/img/icons/kalender.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/kalender.svg')}`"}],attrs:{"alt":"kalender"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.formatDate(stageSlot.startsAt)))])]),_c('div',{staticClass:"col-6 d-flex flex-row align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/clock.svg */ "./src/events-assets/omr20/img/icons/clock.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/clock.svg')}`"}],attrs:{"alt":"clock"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.formatTime(stageSlot.startsAt))+" - "+_vm._s(_vm.formatTime(stageSlot.endsAt)))])])]),_c('div',{staticClass:"row"},[(_vm.location(stageSlot) !== null)?_c('div',{staticClass:"col-6 d-flex flex-row no-wrap align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/place.svg */ "./src/events-assets/omr20/img/icons/place.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/place.svg')}`"}],attrs:{"alt":"place"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.location(stageSlot)))])]):_vm._e(),_c('div',{staticClass:"col-6 d-flex flex-row no-wrap align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/speaker.svg */ "./src/events-assets/omr20/img/icons/speaker.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/speaker.svg')}`"}],attrs:{"alt":"speaker"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.language(stageSlot)))])])])]),_c('div',{staticClass:"button-container "},[_c('a',{staticClass:"button button--teal",attrs:{"href":'https://omr.com/' +
                    _vm.currentLocale() + '/events/' +
                      _vm.$context.eventSlug +
                      '/timetable/?eventSlug=' +
                      stageSlot.slug}},[_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".aussteller.eventlist.cta"))+"\n                ")])])]):_vm._e()])}),0):_vm._e(),(_vm.isPresent(_vm.company.guidedTours))?_c('div',_vm._l((_vm.company.guidedTours),function(guidedTour){return _c('div',{key:guidedTour.id,staticClass:"stage-wrap"},[(guidedTour.stage !== null)?_c('div',{staticClass:"text-center border-bottom-teal pb-4 my-4"},[(guidedTour.stage !== null)?_c('h6',{staticClass:"font-weight-light text-uppercase color-teal font-weight-light mb-2"},[_vm._v("\n                "+_vm._s(_vm.currentLocale() === 'de' ? guidedTour.stage.nameDe : guidedTour.stage.nameEn)+"\n              ")]):_vm._e(),_c('p',{staticClass:"speaker-detail__timetable--subheadline"},[_vm._v("\n                "+_vm._s(_vm.currentLocale() === 'de' ? guidedTour.stage.nameDe : guidedTour.stage.nameEn)+"\n              ")]),_c('div',{staticClass:"tag-container"}),_c('div',{staticClass:"speaker-detail__data container-fluid center"},[_c('div',{staticClass:"row mb-3"},[_c('div',{staticClass:"col-6 d-flex flex-row align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/kalender.svg */ "./src/events-assets/omr20/img/icons/kalender.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/kalender.svg')}`"}],attrs:{"alt":"kalender"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.formatDate(guidedTour.startsAt)))])]),_c('div',{staticClass:"col-6 d-flex flex-row align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/clock.svg */ "./src/events-assets/omr20/img/icons/clock.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/clock.svg')}`"}],attrs:{"alt":"clock"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.formatTime(guidedTour.startsAt))+" - "+_vm._s(_vm.formatTime(guidedTour.endsAt)))])])]),_c('div',{staticClass:"row"},[(_vm.location(guidedTour) !== null)?_c('div',{staticClass:"col-6 d-flex flex-row no-wrap align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/place.svg */ "./src/events-assets/omr20/img/icons/place.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/place.svg')}`"}],attrs:{"alt":"place"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.location(guidedTour)))])]):_vm._e(),_c('div',{staticClass:"col-6 d-flex flex-row no-wrap align-items-center"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (__webpack_require__(/*! @/events-assets/omr20/img/icons/speaker.svg */ "./src/events-assets/omr20/img/icons/speaker.svg")))),expression:"`${require('@/events-assets/omr20/img/icons/speaker.svg')}`"}],attrs:{"alt":"speaker"}}),_c('p',{staticClass:"m-0 ml-2 font-weight-light"},[_vm._v(_vm._s(_vm.language(guidedTour)))])])])]),_c('div',{staticClass:"button-container "},[_c('a',{staticClass:"button button--teal",attrs:{"href":'https://omr.com/' +
                    _vm.currentLocale() + '/events/' +
                      _vm.$context.eventSlug +
                      '/timetable/?eventSlug=' +
                      guidedTour.slug}},[_vm._v(_vm._s(_vm.$translate(_vm.$context.eventSlug + ".aussteller.eventlist.cta"))+"\n                ")])])]):_vm._e()])}),0):_vm._e(),(_vm.salesContactExists())?_c('div',{staticClass:"exhibitor-contactform"},[_c('h4',[_vm._v("\n            "+_vm._s(_vm.$translate(_vm.$context.eventSlug + ".aussteller.contactForm.title"))+"\n          ")]),(_vm.successMessage != '')?_c('div',{staticClass:"successmsg"},[_vm._v("\n            "+_vm._s(_vm.$translate(
                _vm.$context.eventSlug + ".aussteller.contactForm.successMessage"
              ))+"\n          ")]):_vm._e(),_c('div',[_c('form',{staticClass:"validate",attrs:{"name":"","novalidate":""}},[(_vm.errorMessage != '')?_c('div',{staticClass:"errormsg"},[_vm._v("\n                "+_vm._s(_vm.$translate(
                    _vm.$context.eventSlug +
                      ".aussteller.contactForm.errorMessage"
                  ))+"\n              ")]):_vm._e(),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.senderName),expression:"senderName"}],attrs:{"type":"text","name":"name","placeholder":_vm.$translate(
                    _vm.$context.eventSlug + '.aussteller.contactForm.nameField'
                  ),"title":"Name"},domProps:{"value":(_vm.senderName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.senderName=$event.target.value}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.senderCompany),expression:"senderCompany"}],attrs:{"type":"text","name":"firma","placeholder":_vm.$translate(
                    _vm.$context.eventSlug +
                      '.aussteller.contactForm.companyField'
                  ),"title":"Firma"},domProps:{"value":(_vm.senderCompany)},on:{"input":function($event){if($event.target.composing){ return; }_vm.senderCompany=$event.target.value}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.senderEmail),expression:"senderEmail"}],attrs:{"type":"email","name":"email","placeholder":_vm.$translate(
                    _vm.$context.eventSlug + '.aussteller.contactForm.emailField'
                  ),"title":"E-Mail"},domProps:{"value":(_vm.senderEmail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.senderEmail=$event.target.value}}}),_c('label',{attrs:{"for":"nachricht"}},[_vm._v(_vm._s(_vm.$translate(
                  _vm.$context.eventSlug + ".aussteller.contactForm.messageLabel"
                )))]),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.senderMessage),expression:"senderMessage"}],attrs:{"type":"text","name":"nachricht","rows":"8","placeholder":_vm.$translate(
                    _vm.$context.eventSlug +
                      '.aussteller.contactForm.messageField'
                  )},domProps:{"value":(_vm.senderMessage)},on:{"input":function($event){if($event.target.composing){ return; }_vm.senderMessage=$event.target.value}}}),_c('span',[_vm._v(_vm._s(_vm.$translate("omr20.aussteller.contactForm.formFooter")))])]),_c('div',{staticClass:"button-container "},[_c('a',{staticClass:"button button--teal",on:{"click":function($event){$event.preventDefault();return _vm.submitContactForm(_vm.company.contacts)}}},[_vm._v(_vm._s(_vm.$translate(
                    _vm.$context.eventSlug +
                      ".aussteller.contactForm.contactButton"
                  )))])])])]):_vm._e()],2)])])])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=style&index=0&id=78cccfe8&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=style&index=0&id=78cccfe8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue":
/*!*******************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExhibitorSingle_vue_vue_type_template_id_78cccfe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExhibitorSingle.vue?vue&type=template&id=78cccfe8&scoped=true& */ "./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=template&id=78cccfe8&scoped=true&");
/* harmony import */ var _ExhibitorSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExhibitorSingle.vue?vue&type=script&lang=js& */ "./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExhibitorSingle_vue_vue_type_style_index_0_id_78cccfe8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExhibitorSingle.vue?vue&type=style&index=0&id=78cccfe8&lang=scss&scoped=true& */ "./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=style&index=0&id=78cccfe8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExhibitorSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExhibitorSingle_vue_vue_type_template_id_78cccfe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExhibitorSingle_vue_vue_type_template_id_78cccfe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78cccfe8",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/gridsome/node_modules/babel-loader/lib??ref--1-1!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./ExhibitorSingle.vue?vue&type=script&lang=js& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_gridsome_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=style&index=0&id=78cccfe8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=style&index=0&id=78cccfe8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorSingle_vue_vue_type_style_index_0_id_78cccfe8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--4-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/style-resources-loader/lib??ref--4-oneOf-1-4!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./ExhibitorSingle.vue?vue&type=style&index=0&id=78cccfe8&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/style-resources-loader/lib/index.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=style&index=0&id=78cccfe8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorSingle_vue_vue_type_style_index_0_id_78cccfe8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorSingle_vue_vue_type_style_index_0_id_78cccfe8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorSingle_vue_vue_type_style_index_0_id_78cccfe8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorSingle_vue_vue_type_style_index_0_id_78cccfe8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_node_modules_style_resources_loader_lib_index_js_ref_4_oneOf_1_4_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorSingle_vue_vue_type_style_index_0_id_78cccfe8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=template&id=78cccfe8&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=template&id=78cccfe8&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorSingle_vue_vue_type_template_id_78cccfe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"6baf247c-vue-loader-template"}!../../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/gridsome/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./ExhibitorSingle.vue?vue&type=template&id=78cccfe8&scoped=true& */ "./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"6baf247c-vue-loader-template\"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/gridsome/node_modules/cache-loader/dist/cjs.js?!./node_modules/gridsome/node_modules/vue-loader/lib/index.js?!./src/components/omr/dynamic/exhibitors/ExhibitorSingle.vue?vue&type=template&id=78cccfe8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorSingle_vue_vue_type_template_id_78cccfe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_6baf247c_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_ExhibitorSingle_vue_vue_type_template_id_78cccfe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);